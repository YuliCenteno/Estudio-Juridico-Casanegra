import path from 'node:path';
import react from '@vitejs/plugin-react';
import { createLogger, defineConfig } from 'vite';
import inlineEditPlugin from './plugins/visual-editor/vite-plugin-react-inline-editor.js';
import editModeDevPlugin from './plugins/visual-editor/vite-plugin-edit-mode.js';
import iframeRouteRestorationPlugin from './plugins/vite-plugin-iframe-route-restoration.js';
import sitePagesPlugin from './plugins/vite-plugin-site-pages.js';
import pocketbaseAuthPlugin from './plugins/vite-plugin-pocketbase-auth.js';
import sessionJournalPlugin from './plugins/session-journal/vite-plugin-session-journal.js';
import agentReadyPlugin from './plugins/vite-plugin-agent-ready.js';

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { getCanonicalUrl, seoPages, SHARE_IMAGE, SITE_URL } from './src/lib/seo-pages.js';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));
const allDeps = Object.keys(pkg.dependencies || {});

const isDev = process.env.NODE_ENV !== 'production';

// Only the Horizons editor may read this dev server cross-origin. `cors: true`
// sends `Access-Control-Allow-Origin: *`, which lets any site read the source
// transforms and call the dev-only APIs.
const AllowedEditorOrigins = [
	'https://horizons.hostinger.com',
	'https://horizons.hostinger.dev',
];

const configHorizonsViteErrorHandler = `
const observer = new MutationObserver((mutations) => {
	for (const mutation of mutations) {
		for (const addedNode of mutation.addedNodes) {
			if (
				addedNode.nodeType === Node.ELEMENT_NODE &&
				(
					addedNode.tagName?.toLowerCase() === 'vite-error-overlay' ||
					addedNode.classList?.contains('backdrop')
				)
			) {
				handleViteOverlay(addedNode);
			}
		}
	}
});

observer.observe(document.documentElement, {
	childList: true,
	subtree: true
});

function handleViteOverlay(node) {
	if (!node.shadowRoot) {
		return;
	}

	const backdrop = node.shadowRoot.querySelector('.backdrop');

	if (backdrop) {
		const overlayHtml = backdrop.outerHTML;
		const parser = new DOMParser();
		const doc = parser.parseFromString(overlayHtml, 'text/html');
		const messageBodyElement = doc.querySelector('.message-body');
		const fileElement = doc.querySelector('.file');
		const messageText = messageBodyElement ? messageBodyElement.textContent.trim() : '';
		const fileText = fileElement ? fileElement.textContent.trim() : '';
		const error = messageText + (fileText ? ' File:' + fileText : '');

		window.parent.postMessage({
			type: 'horizons-vite-error',
			error,
		}, '*');
	}
}
`;

const configHorizonsRuntimeErrorHandler = `
window.onerror = (message, source, lineno, colno, errorObj) => {
	const errorDetails = errorObj ? JSON.stringify({
		name: errorObj.name,
		message: errorObj.message,
		stack: errorObj.stack,
		source,
		lineno,
		colno,
	}) : null;

	window.parent.postMessage({
		type: 'horizons-runtime-error',
		message,
		error: errorDetails
	}, '*');
};
`;

const configHorizonsConsoleErrorHandler = `
const originalConsoleError = console.error;
const MATCH_LINE_COL_REGEX = /:(\\d+):(\\d+)\\)?\\s*$/; // regex to match the :lineNum:colNum
const MATCH_AT_REGEX = /^\\s*at\\s+(?:async\\s+)?(?:.*?\\s+)?\\(?/; // regex to remove the 'at' keyword and any 'async' or function name
const MATCH_PATH_REGEX = /^\\//; // regex to remove the leading slash

function parseStackFrameLine(line) {
	const lineColMatch = line.match(MATCH_LINE_COL_REGEX);
	if (!lineColMatch) return null;
	const [, lineNum, colNum] = lineColMatch;
	const suffix = \`:\${lineNum}:\${colNum}\`;
	const idx = line.lastIndexOf(suffix);
	if (idx === -1) return null;
	const before = line.substring(0, idx);
	const path = before.replace(MATCH_AT_REGEX, '').trim();
	
	if (!path) return null;

	try {
		const pathname = new URL(path).pathname;
		const filePath = pathname.replace(MATCH_PATH_REGEX, '') || pathname;
		return \`\${filePath}:\${lineNum}:\${colNum}\`;
	} catch (e) {
		const filePath = path.replace(MATCH_PATH_REGEX, '') || path;
		return \`\${filePath}:\${lineNum}:\${colNum}\`;
	}
}

function getFilePathFromStack(stack, skipFrames = 0) {
	if (!stack || typeof stack !== 'string') return null;
	const lines = stack.split('\\n').slice(1);

	const frames = lines.map(line => parseStackFrameLine(line.replace(/\\r$/, ''))).filter(Boolean);

	return frames[skipFrames] ?? null;
}

function formatConsoleMessage(args, skipStackFrames = 1) {
	let messageString = '';
	let filePath = null;

	for (let i = 0; i < args.length; i++) {
		const arg = args[i];
		if (arg instanceof Error) {
			filePath = getFilePathFromStack(arg.stack, 0);
			messageString = \`\${arg.name}: \${arg.message}\`;
			if (filePath) {
				messageString = \`\${messageString} at \${filePath}\`;
			}
			break;
		}
	}

	if (!messageString) {
		messageString = args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' ');
		const stack = new Error().stack;
		filePath = getFilePathFromStack(stack, skipStackFrames);
		if (filePath) {
			messageString = \`\${messageString} at \${filePath}\`;
		}
	}

	return messageString;
}

console.error = function(...args) {
	originalConsoleError.apply(console, args);

	window.parent.postMessage({
		type: 'horizons-console-error',
		error: formatConsoleMessage(args, 1)
	}, '*');
};

const originalConsoleWarn = console.warn;

console.warn = function(...args) {
	originalConsoleWarn.apply(console, args);

	window.parent.postMessage({
		type: 'horizons-console-warn',
		warning: formatConsoleMessage(args, 1)
	}, '*');
};
`;

const configWindowFetchMonkeyPatch = `
// Prevents authentication failures (PB returns 400) from crashing the app — use console.info, not console.error/PM2.
// [urlPattern, bodyPattern] tuples; align with sandboxErrorUtils ERROR_BLACKLIST.
const BENIGN_FETCH_ERRORS = [
	[/hcgi\\/platform\\/api\\/collections\\/.*auth-with-password.*/i, /Failed to authenticate/i],
	[/hcgi\\/api\\//i, /Insufficient credits/i],
	// A user-supplied integration secret (Stripe/PayPal/Twilio/...) is not set yet — an expected setup state, not a bug to fix.
	[/hcgi\\/api\\//i, /INTEGRATION_NOT_CONFIGURED/i],
];

function isBenignFetchError(url, body) {
	return BENIGN_FETCH_ERRORS.some(([urlPattern, bodyPattern]) =>
		urlPattern.test(url) && (!bodyPattern || bodyPattern.test(body)));
}

const PLATFORM_URL_PATTERN = /hcgi\\/platform\\//i;
const VALIDATION_CODE_TEXT_PATTERN = /validation_/;

function hasValidationCode(value) {
	if (value == null) {
		return false;
	}
	if (typeof value === 'string') {
		return value.startsWith('validation_');
	}
	if (Array.isArray(value)) {
		return value.some(hasValidationCode);
	}
	if (typeof value === 'object') {
		return Object.values(value).some(hasValidationCode);
	}
	return false;
}

function isValidationFetchWarning(url, body) {
	if (!PLATFORM_URL_PATTERN.test(url)) {
		return false;
	}
	try {
		return hasValidationCode(JSON.parse(body));
	} catch {
		return VALIDATION_CODE_TEXT_PATTERN.test(body);
	}
}

const originalFetch = window.fetch;

window.fetch = function(...args) {
	const url = args[0] instanceof Request ? args[0].url : args[0];

	// Skip WebSocket URLs
	if (url.startsWith('ws:') || url.startsWith('wss:')) {
		return originalFetch.apply(this, args);
	}

	return originalFetch.apply(this, args)
		.then(async response => {
			const contentType = response.headers.get('Content-Type') || '';

			// Exclude HTML document responses
			const isDocumentResponse =
				contentType.includes('text/html') ||
				contentType.includes('application/xhtml+xml');

			if (!response.ok && !isDocumentResponse) {
					const responseClone = response.clone();
					const errorFromRes = await responseClone.text();
					const requestUrl = response.url;
					const errorMessage = \`Fetch error from \${requestUrl}: \${errorFromRes}\`;

					if (isBenignFetchError(requestUrl, errorFromRes)) {
						console.info(errorMessage);
					} else if (isValidationFetchWarning(requestUrl, errorFromRes)) {
						console.warn(errorMessage);
					} else {
						console.error(errorMessage);
					}
			}

			return response;
		})
		.catch(error => {
			if (!url.match(/\.html?$/i)) {
				// Cancelled in-flight fetch (e.g. preview reload) — not a server failure.
				if (error?.name === 'AbortError') {
					console.info(error);
				} else {
					console.error(error);
				}
			}

			throw error;
		});
};
`;

const configNavigationHandler = `
if (window.navigation && window.self !== window.top) {
	window.navigation.addEventListener('navigate', (event) => {
		const url = event.destination.url;

		try {
			const destinationUrl = new URL(url);
			const destinationOrigin = destinationUrl.origin;
			const currentOrigin = window.location.origin;

			if (destinationOrigin === currentOrigin) {
				return;
			}
		} catch (error) {
			return;
		}

		window.parent.postMessage({
			type: 'horizons-navigation-error',
			url,
		}, '*');
	});
}
`;

function escapeHtmlAttribute(value) {
	return String(value)
		.replace(/&/g, '&amp;')
		.replace(/"/g, '&quot;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');
}

function setRootHeading(html, heading, includeBusinessLinks = false) {
	const rootPattern = /<div id=["']root["']>[\s\S]*?<\/div>/i;
	if (!rootPattern.test(html)) {
		throw new Error('Unable to generate route SEO pages: #root element is missing.');
	}

	const businessLinks = includeBusinessLinks
		? '<nav aria-label="Enlaces institucionales"><a href="/nosotros">Nosotros</a><a href="/contacto">Contacto</a><a href="/terminos">Términos de uso</a></nav>'
		: '';

	return html.replace(
		rootPattern,
		`<div id="root"><h1>${escapeHtmlAttribute(heading)}</h1>${businessLinks}</div>`,
	);
}

function setMetaTag(html, attribute, value, content) {
	const attributePattern = attribute.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const valuePattern = String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const tagPattern = new RegExp(
		`<meta\\b(?=[^>]*\\b${attributePattern}\\s*=\\s*["']${valuePattern}["'])[^>]*>`,
		'i',
	);
	const tag = `<meta ${attribute}="${escapeHtmlAttribute(value)}" content="${escapeHtmlAttribute(content)}" />`;

	if (tagPattern.test(html)) {
		return html.replace(tagPattern, tag);
	}

	return html.replace(/<\/head>/i, `\t${tag}\n</head>`);
}

function createRouteHtml(source, pathname, page) {
	const canonicalUrl = getCanonicalUrl(pathname);
	const image = page.image || SHARE_IMAGE;
	let html = setRootHeading(source, page.title, pathname === '/').replace(
		/<title>[\s\S]*?<\/title>/i,
		`<title>${escapeHtmlAttribute(page.title)}</title>`,
	);

	[
		['name', 'description', page.description],
		['name', 'robots', 'index, follow, max-image-preview:large'],
		['property', 'og:type', page.type || 'website'],
		['property', 'og:url', canonicalUrl],
		['property', 'og:title', page.title],
		['property', 'og:description', page.description],
		['property', 'og:image', image],
		['property', 'og:image:alt', 'Estudio Jurídico Casanegra & Asociados'],
		['property', 'og:image:secure_url', image],
		['name', 'twitter:title', page.title],
		['name', 'twitter:description', page.description],
		['name', 'twitter:image', image],
	].forEach(([attribute, value, content]) => {
		html = setMetaTag(html, attribute, value, content);
	});

	const canonicalTag = `<link rel="canonical" href="${escapeHtmlAttribute(canonicalUrl)}" />`;
	const canonicalPattern = /<link\b(?=[^>]*\brel\s*=\s*["']canonical["'])[^>]*>/i;
	if (canonicalPattern.test(html)) {
		html = html.replace(canonicalPattern, canonicalTag);
	}

	const pageUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;
	const breadcrumb = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Inicio',
				item: `${SITE_URL}/`,
			},
			...(pathname.startsWith('/articulos/')
				? [{
					'@type': 'ListItem',
					position: 2,
					name: 'Artículos',
					item: `${SITE_URL}/articulos`,
				}]
				: []),
			...(pathname !== '/'
				? [{
					'@type': 'ListItem',
					position: pathname.startsWith('/articulos/') ? 3 : 2,
					name: page.breadcrumb || page.title,
					item: pageUrl,
				}]
				: []),
		],
	};

	return html.replace(
		'</head>',
		`\t<script id="route-breadcrumb-schema" type="application/ld+json">${JSON.stringify(breadcrumb)}</script>\n</head>`,
	);
}

function createNotFoundHtml(source) {
	const title = 'Página no encontrada | Estudio Jurídico Casanegra';
	const description = 'La página solicitada no se encuentra disponible.';
	let html = setRootHeading(source, title).replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);

	[
		['name', 'description', description],
		['name', 'robots', 'noindex, follow'],
		['property', 'og:type', 'website'],
		['property', 'og:url', `${SITE_URL}/404.html`],
		['property', 'og:title', title],
		['property', 'og:description', description],
		['property', 'og:image', SHARE_IMAGE],
		['property', 'og:image:alt', 'Estudio Jurídico Casanegra & Asociados'],
		['property', 'og:image:secure_url', SHARE_IMAGE],
		['name', 'twitter:title', title],
		['name', 'twitter:description', description],
		['name', 'twitter:image', SHARE_IMAGE],
	].forEach(([attribute, value, content]) => {
		html = setMetaTag(html, attribute, value, content);
	});

	html = html.replace(
		/<link\b(?=[^>]*\brel\s*=\s*["']canonical["'])[^>]*>/i,
		'',
	);
	return html;
}

const routeSeoPagesPlugin = {
	name: 'route-seo-pages',
	apply: 'build',
	writeBundle(options) {
		const outputDirectory = path.resolve(options.dir || 'dist');
		const indexPath = path.resolve(outputDirectory, 'index.html');
		if (!existsSync(indexPath)) {
			throw new Error('Unable to generate route SEO pages: built index.html is missing.');
		}
		const indexHtml = readFileSync(indexPath, 'utf8');
		writeFileSync(
			indexPath,
			createRouteHtml(indexHtml, '/', seoPages['/']),
		);
		writeFileSync(
			path.resolve(outputDirectory, '404.html'),
			createNotFoundHtml(indexHtml),
		);

		Object.entries(seoPages).forEach(([pathname, page]) => {
			if (pathname === '/') {
				return;
			}

			const routeDirectory = path.resolve(outputDirectory, pathname.slice(1));
			mkdirSync(routeDirectory, { recursive: true });
			writeFileSync(
				path.resolve(routeDirectory, 'index.html'),
				createRouteHtml(indexHtml, pathname, page),
			);
		});
	},
};

const addTransformIndexHtml = {
	name: 'add-transform-index-html',
	transformIndexHtml(html) {
		const tags = [
			{
				tag: 'script',
				attrs: { type: 'module' },
				children: configHorizonsRuntimeErrorHandler,
				injectTo: 'head',
			},
			{
				tag: 'script',
				attrs: { type: 'module' },
				children: configHorizonsViteErrorHandler,
				injectTo: 'head',
			},
			{
				tag: 'script',
				attrs: { type: 'module' },
				children: configHorizonsConsoleErrorHandler,
				injectTo: 'head',
			},
			{
				tag: 'script',
				attrs: { type: 'module' },
				children: configWindowFetchMonkeyPatch,
				injectTo: 'head',
			},
			{
				tag: 'script',
				attrs: { type: 'module' },
				children: configNavigationHandler,
				injectTo: 'head',
			},
		];

		if (!isDev && process.env.TEMPLATE_BANNER_SCRIPT_URL && process.env.TEMPLATE_REDIRECT_URL) {
			tags.push(
				{
					tag: 'script',
					attrs: {
						src: process.env.TEMPLATE_BANNER_SCRIPT_URL,
						'template-redirect-url': process.env.TEMPLATE_REDIRECT_URL,
						...(process.env.TEMPLATE_BANNER_MAIN_TEXT && { 'template-main-text': process.env.TEMPLATE_BANNER_MAIN_TEXT }),
						...(process.env.TEMPLATE_BANNER_CTA_TEXT && { 'template-cta-text': process.env.TEMPLATE_BANNER_CTA_TEXT }),
						...(process.env.TEMPLATE_BANNER_THEME && { 'template-theme': process.env.TEMPLATE_BANNER_THEME }),
					},
					injectTo: 'head',
				}
			);
		}

		return {
			html,
			tags,
		};
	},
};

console.warn = () => { };

const logger = createLogger()
const loggerError = logger.error

logger.error = (msg, options) => {
	if (options?.error?.toString().includes('CssSyntaxError: [postcss]')) {
		return;
	}

	loggerError(msg, options);
}

export default defineConfig({
	optimizeDeps: {
		include: allDeps,
	},
	customLogger: logger,
	plugins: [
    ...(isDev ? [
        inlineEditPlugin(),
        editModeDevPlugin(),
        iframeRouteRestorationPlugin(),
        sitePagesPlugin(),
        pocketbaseAuthPlugin(),
        sessionJournalPlugin(),
        addTransformIndexHtml // <--- Ahora solo se inyecta durante desarrollo
    ] : []),
    agentReadyPlugin(),
    react(),
	routeSeoPagesPlugin,
],
	server: {
		port: 3000,
		cors: { origin: AllowedEditorOrigins },
		headers: {
			'Cross-Origin-Embedder-Policy': 'credentialless',
		},
		allowedHosts: [
			'.app-preview.com',
			'.app-preview.io',
		],
		fs: {
			strict: true,
			allow: [
				path.resolve(__dirname),
				path.join(path.resolve(__dirname, '../..'), 'node_modules'),
			],
		},
	},
	resolve: {
		extensions: ['.jsx', '.js', '.json'],
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		rollupOptions: {
			external: [
				'@babel/parser',
				'@babel/traverse',
				'@babel/generator',
				'@babel/types'
			],
			checks: {
				pluginTimings: false,
			}
		}
	}
});
