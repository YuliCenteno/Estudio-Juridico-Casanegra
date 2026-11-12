import React, { useCallback, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import {
  getCanonicalUrl,
  getSeoPage,
  SHARE_IMAGE,
  SITE_URL,
} from '@/lib/seo-pages';

function RouteSeo() {
  const { pathname } = useLocation();
  const page = getSeoPage(pathname);
  const canonicalUrl = page.noindex ? null : getCanonicalUrl(page.pathname);
  const image = page.image || SHARE_IMAGE;
  const breadcrumbSchema = useMemo(() => {
    const breadcrumbItems = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: `${SITE_URL}/`,
      },
    ];

    if (page.pathname.startsWith('/articulos/')) {
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: 'Artículos',
        item: `${SITE_URL}/articulos`,
      });
    }

    if (page.pathname !== '/') {
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: breadcrumbItems.length + 1,
        name: page.breadcrumb || page.title,
        item: canonicalUrl || `${SITE_URL}${page.pathname}`,
      });
    }

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems,
    };
  }, [canonicalUrl, page.breadcrumb, page.pathname, page.title]);

  const synchronizeHead = useCallback(() => {
    const setMeta = (attribute, key, content) => {
      const matches = Array.from(document.head.querySelectorAll(`meta[${attribute}]`))
        .filter((meta) => meta.getAttribute(attribute) === key);
      const meta = matches.shift() || document.createElement('meta');

      meta.setAttribute(attribute, key);
      meta.setAttribute('content', content);
      if (!meta.parentNode) {
        document.head.appendChild(meta);
      }
      matches.forEach((duplicate) => duplicate.remove());
    };

    document.title = page.title;
    setMeta(
      'name',
      'description',
      page.description,
    );
    setMeta(
      'name',
      'robots',
      page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large',
    );

    if (canonicalUrl) {
      const canonicals = Array.from(document.head.querySelectorAll('link[rel="canonical"]'));
      const canonical = canonicals.shift() || document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', canonicalUrl);
      if (!canonical.parentNode) {
        document.head.appendChild(canonical);
      }
      canonicals.forEach((duplicate) => duplicate.remove());
    } else {
      document.head.querySelectorAll('link[rel="canonical"]').forEach((canonical) => canonical.remove());
    }

    const ogUrl = canonicalUrl || `${SITE_URL}${page.pathname}`;
    [
      ['og:type', page.type || 'website'],
      ['og:url', ogUrl],
      ['og:title', page.title],
      ['og:description', page.description],
      ['og:image', image],
      ['og:image:alt', 'Estudio Jurídico Casanegra & Asociados'],
      ['og:image:secure_url', image],
    ].forEach(([key, content]) => setMeta('property', key, content));

    [
      ['twitter:card', 'summary_large_image'],
      ['twitter:title', page.title],
      ['twitter:description', page.description],
      ['twitter:image', image],
    ].forEach(([key, content]) => setMeta('name', key, content));

    const breadcrumbScripts = Array.from(
      document.head.querySelectorAll('#route-breadcrumb-schema'),
    );
    const breadcrumbScript = breadcrumbScripts.shift() || document.createElement('script');
    breadcrumbScript.id = 'route-breadcrumb-schema';
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    if (!breadcrumbScript.parentNode) {
      document.head.appendChild(breadcrumbScript);
    }
    breadcrumbScripts.forEach((duplicate) => duplicate.remove());
  }, [breadcrumbSchema, canonicalUrl, image, page.description, page.noindex, page.pathname, page.title, page.type]);

  useEffect(() => {
    synchronizeHead();
  }, [synchronizeHead]);

  return (
    <Helmet onChangeClientState={synchronizeHead}>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <meta
        name="robots"
        content={page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}
      />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:type" content={page.type || 'website'} />
      <meta property="og:url" content={canonicalUrl || `${SITE_URL}${page.pathname}`} />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Estudio Jurídico Casanegra & Asociados" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
      <meta name="twitter:image" content={image} />

      <script id="route-breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
}

export default RouteSeo;
