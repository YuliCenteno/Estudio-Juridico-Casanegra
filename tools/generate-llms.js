#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { seoPages, SITE_URL } from '../src/lib/seo-pages.js';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDirectory = path.join(projectRoot, 'public');

function getPageUrl(pathname) {
	return `${SITE_URL}${pathname === '/' ? '/' : pathname}`;
}

function generateLlmsTxt() {
	const primaryPaths = ['/', '/nosotros', '/areas', '/services', '/contacto', '/terminos'];
	const primaryPathSet = new Set(primaryPaths);
	const renderPage = (pathname) => {
		const page = seoPages[pathname];
		const label = pathname === '/' ? 'Inicio' : page.breadcrumb;
		return `- [${label}](${getPageUrl(pathname)}): ${page.description}`;
	};
	const primaryPages = primaryPaths
		.filter((pathname) => seoPages[pathname])
		.map(renderPage);
	const otherPages = Object.keys(seoPages)
		.filter((pathname) => !primaryPathSet.has(pathname))
		.map(renderPage);

	return [
		'# Estudio Jurídico Casanegra & Asociados',
		'',
		'> Sitio oficial del estudio jurídico con sede en Córdoba, Argentina.',
		'',
		'## Páginas principales',
		...primaryPages,
		'',
		'## Otras páginas',
		...otherPages,
		'',
	].join('\n');
}

function generateSitemap() {
	const lastmod = new Date().toISOString().slice(0, 10);
	const urls = Object.keys(seoPages)
		.map((pathname) => [
			'  <url>',
			`    <loc>${getPageUrl(pathname)}</loc>`,
			`    <lastmod>${lastmod}</lastmod>`,
			'  </url>',
		].join('\n'))
		.join('\n');

	return [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		urls,
		'</urlset>',
		'',
	].join('\n');
}

fs.writeFileSync(path.join(publicDirectory, 'llms.txt'), generateLlmsTxt(), 'utf8');
fs.writeFileSync(path.join(publicDirectory, 'sitemap.xml'), generateSitemap(), 'utf8');
