export const SITE_URL = 'https://estudiocasanegra.com';
export const SHARE_IMAGE =
  'https://res.cloudinary.com/crwsvgt8/image/upload/v1787164743/photo-1558052643-9a9e9ea8e50a.avif';

export const seoPages = {
  '/': {
    title: 'Estudio Jurídico Casanegra & Asociados | Abogados en Córdoba',
    description:
      'Estudio Jurídico Casanegra & Asociados. Asesoramiento legal especializado en derecho administrativo, ambiental, urbanístico, minero, migratorio e inversiones en Córdoba, Argentina.',
    breadcrumb: 'Inicio',
  },
  '/nosotros': {
    title: 'El Estudio | Casanegra & Asociados en Córdoba',
    description:
      'Conozca la historia y el equipo de Estudio Jurídico Casanegra & Asociados, firma legal con sede en Córdoba, Argentina.',
    breadcrumb: 'Nosotros',
  },
  '/areas': {
    title: 'Áreas de práctica jurídica en Córdoba | Casanegra & Asociados',
    description:
      'Conozca las áreas de práctica del Estudio Jurídico Casanegra: derecho administrativo, ambiental, minero, urbanístico, tributario, societario y más.',
    breadcrumb: 'Áreas de práctica',
  },
  '/services': {
    title: 'Servicios jurídicos en Córdoba | Casanegra & Asociados',
    description:
      'Asesoramiento jurídico preventivo y representación: consultas, dictámenes, mediaciones, reclamos, recursos administrativos y acciones judiciales.',
    breadcrumb: 'Servicios jurídicos',
  },
  '/ciudadanias-migratorio': {
    title: 'Ciudadanías y derecho migratorio en Córdoba | Casanegra',
    description:
      'Asesoramiento en ciudadanías italiana y española, residencias, visas y trámites migratorios en Argentina, con atención desde Córdoba.',
    breadcrumb: 'Ciudadanías y migraciones',
  },
  '/ciudadania-argentina-por-inversion': {
    title: 'Ciudadanía argentina por inversión | Asesoramiento jurídico',
    description:
      'Información y asesoramiento jurídico sobre el procedimiento de ciudadanía argentina por inversión previsto por el Decreto 524/2025.',
    breadcrumb: 'Ciudadanía por inversión',
  },
  '/inversiones': {
    title: 'Derecho del inversor en Córdoba | Casanegra & Asociados',
    description:
      'Asesoramiento jurídico para inversiones, fideicomisos, protección patrimonial y proyectos de inversión desde Córdoba, Argentina.',
    breadcrumb: 'Inversiones',
  },
  '/contacto': {
    title: 'Contacto | Estudio Jurídico Casanegra en Córdoba',
    description:
      'Contacte al Estudio Jurídico Casanegra & Asociados en Córdoba para realizar una consulta. Teléfonos, correo electrónico y ubicación.',
    breadcrumb: 'Contacto',
  },
  '/terminos': {
    title: 'Términos de uso | Estudio Jurídico Casanegra',
    description:
      'Términos de uso del sitio web del Estudio Jurídico Casanegra & Asociados.',
    breadcrumb: 'Términos de uso',
  },
  '/articulos': {
    title: 'Artículos jurídicos y jurisprudencia | Casanegra & Asociados',
    description:
      'Artículos, análisis jurídicos y publicaciones sobre derecho aduanero, administrativo, ambiental, migratorio, inversiones y otras áreas.',
    breadcrumb: 'Artículos',
  },
  '/defensa-del-consumidor': {
    title: 'Defensa del consumidor en Córdoba | Casanegra & Asociados',
    description:
      'Asesoramiento y patrocinio jurídico en defensa de consumidores y usuarios ante incumplimientos contractuales y prácticas comerciales.',
    breadcrumb: 'Defensa del consumidor',
  },
  '/articulos/tasa-estadistica': {
    title: 'Tasa de estadística argentina: análisis jurídico | Casanegra',
    description:
      'Análisis jurídico de la tasa de estadística argentina, su naturaleza tributaria y la reserva de ley en materia aduanera.',
    breadcrumb: 'Tasa de estadística',
    type: 'article',
  },
  '/articulos/fallo-alianza-frente-civico-instituciones-democraticas': {
    title: 'Fallo Alianza Frente Cívico e instituciones democráticas | Casanegra',
    description:
      'Análisis jurídico del fallo del Tribunal Superior de Justicia de Córdoba sobre escrutinio, procesos electorales e instituciones democráticas.',
    breadcrumb: 'Alianza Frente Cívico',
    type: 'article',
  },
  '/articulos/zurko-provincia-art-regulacion-honorarios': {
    title: 'Zurko c/ Provincia ART: regulación de honorarios | Casanegra',
    description:
      'Reseña del fallo de la Cámara de Apelaciones en lo Civil y Comercial de Córdoba sobre honorarios por actuación ante comisiones médicas.',
    breadcrumb: 'Zurko c/ Provincia ART',
    type: 'article',
  },
  '/articulos/fake-news-responsabilidad-medios-buscadores-redes': {
    title: 'Fake news: responsabilidad de medios y redes sociales | Casanegra',
    description:
      'Síntesis jurídica sobre fake news, identidad digital, derecho al honor y responsabilidad de medios, buscadores y redes sociales.',
    breadcrumb: 'Fake news y responsabilidad',
    type: 'article',
    image: 'https://actualidadjuridicaonline.com/wp-content/uploads/2021/07/11-12-663x378.png',
  },
  '/articulos/amparo-cobertura-fecundacion-in-vitro': {
    title: 'Amparo por cobertura de fecundación in vitro | Casanegra',
    description:
      'Nota sobre un amparo presentado en Córdoba para solicitar la cobertura de un tratamiento de fecundación in vitro, publicada por LA NACIÓN.',
    breadcrumb: 'Amparo por fecundación in vitro',
    type: 'article',
  },
  '/articulos/bamboo-defi': {
    title: 'Comentario al laudo arbitral Bamboo DeFi | Francisco Casanegra',
    description:
      'Doctrina sobre el laudo arbitral Bamboo DeFi, las finanzas descentralizadas, los tokens de gobernanza y la resolución de conflictos.',
    breadcrumb: 'Laudo arbitral Bamboo DeFi',
    type: 'article',
    image: 'https://actualidadjuridica.ar/wp-content/uploads/2022/02/7-8-663x378.png',
  },
};

export function getSeoPage(pathname) {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  const page = seoPages[normalizedPath];

  if (page) {
    return { ...page, pathname: normalizedPath };
  }

  return {
    title: 'Página no encontrada | Estudio Jurídico Casanegra',
    description: 'La página solicitada no se encuentra disponible.',
    pathname: normalizedPath,
    noindex: true,
  };
}

export function getCanonicalUrl(pathname) {
  return `${SITE_URL}${pathname === '/' ? '/' : pathname}`;
}
