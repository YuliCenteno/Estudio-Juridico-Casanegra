import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function ArticulosPage() {
  const articles = [
    {
  slug: '/articulos/fallo-alianza-frente-civico-instituciones-democraticas', // O el link al PDF/Drive donde lo alojes
  isCustomLink: true,
  title: 'El fallo «Alianza Frente Cívico»: Garantía para el funcionamiento de las instituciones democráticas',
  excerpt:
    'Análisis de doctrina del Dr. Francisco Casanegra sobre la resolución del Tribunal Superior de Justicia de Córdoba en materia de escrutinio, procesos electorales e instituciones democráticas.',
  category: 'Doctrina · Derecho Electoral',
  date: '18 Oct 2007'
  },
    {
      slug: '/defensa-del-consumidor',
      isCustomLink: true,
      title: 'Fallo Favorable por Incumplimiento Contractual y Daños en Servicio Turístico',
      excerpt:
        'Reseña de la Sentencia 192 del Juzgado Civil y Comercial de 1ª Nom. de Córdoba ("Casanegra c/ Luxury Travel Corp SRL") sobre resolución de contrato, indemnización económica y costas.',
      category: 'Jurisprudencia · Caso de Éxito',
      date: '25 Nov 2025'
    },
    {
      slug: '/articulos/zurko-provincia-art-regulacion-honorarios',
      isCustomLink: true,
      title:
        'Zurko c/ Provincia ART: honorarios por actuación ante comisiones médicas',
      excerpt:
        'Reseña de la Sentencia 77 de la Cámara Octava de Córdoba sobre regulación de honorarios, inoficiosidad de la tarea y alcance del artículo 112.',
      category: 'Derecho Laboral · Riesgos del Trabajo',
      date: '14 May 2021'
    },
    {
      slug: '/articulos/fake-news-responsabilidad-medios-buscadores-redes',
      isCustomLink: true,
      title:
        'Fake news: responsabilidad de medios, buscadores y redes sociales',
      excerpt:
        'Doctrina de Francisco Casanegra sobre identidad digital, derecho al honor y reputación, desinformación y criterios de responsabilidad en internet.',
      category: 'Doctrina · Derecho Digital',
      date: '21 Jul 2021'
    },
    {
      slug: '/articulos/amparo-cobertura-fecundacion-in-vitro',
      isCustomLink: true,
      title: 'Amparo para que una obra social cubra una fecundación in vitro',
      excerpt:
        'Nota periodística sobre un amparo presentado en Córdoba para solicitar la cobertura de un tratamiento de fecundación in vitro.',
      category: 'Derecho a la Salud',
      date: '18 May 2009'
    },
    {
      slug: '/articulos/bamboo-defi',
      isCustomLink: true,
      title: 'Comentario al laudo arbitral «BAMBOO DEFI»',
      excerpt:
        'Doctrina de Francisco Casanegra sobre el laudo arbitral 1/2021, finanzas descentralizadas, tokens de gobernanza y el conflicto por recompensas de liquidez.',
      category: 'Doctrina · Arbitraje y DeFi',
      date: '13 Feb 2022'
    },
    {
      slug: '/defensa-del-consumidor',
      isCustomLink: true,
      title: 'Defensa del Consumidor y Usuarios: Aspectos Clave y Protección Jurídica',
      excerpt:
        'Guía informativa y normativa sobre la protección de los derechos de consumidores y usuarios frente a incumplimientos comerciales y contratos abusivos.',
      category: 'Derecho del Consumidor',
      date: '05 Oct 2026'
    },
    {
      slug: '/ciudadania-argentina-por-inversion',
      isCustomLink: true,
      title: 'Ciudadanía Argentina por Inversión en Córdoba: Requisitos y Procedimiento',
      excerpt:
        'Guía sobre ciudadanía argentina por inversión: modalidades, aportes familiares y etapas de evaluación previstas por el Decreto 524/2025.',
      category: 'Derecho Migratorio e Inversiones',
      date: '20 Oct 2026'
    },
    {
      slug: 'tasa-estadistica',
      isCustomLink: false,
      title: 'La tasa de estadística argentina ante la reserva de ley: entre la retribución de servicios y la recaudación aduanera',
      excerpt:
        'Análisis sobre la validez constitucional de la tasa de estadística aplicable a las importaciones argentinas, con especial atención al incremento dispuesto por el Decreto 332/2019.',
      category: 'Derecho Aduanero',
      date: '01 Sep 2026'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Artículos y Publicaciones Jurídicas | Estudio Jurídico Casanegra & Asociados</title>

        <meta
          name="description"
          content="Artículos, análisis jurídicos y publicaciones del Estudio Jurídico Casanegra & Asociados sobre derecho aduanero, administrativo, ambiental, urbanístico, minero, migratorio e inversiones."
        />

        <link
          rel="canonical"
          href="https://estudiocasanegra.com/articulos"
        />

        <meta
          property="og:title"
          content="Artículos y Publicaciones Jurídicas | Estudio Jurídico Casanegra & Asociados"
        />

        <meta
          property="og:description"
          content="Artículos, análisis jurídicos y publicaciones del Estudio Jurídico Casanegra & Asociados."
        />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/crwsvgt8/image/upload/v1787164743/photo-1558052643-9a9e9ea8e50a.avif"
        />
        <meta
          property="og:url"
          content="https://estudiocasanegra.com/articulos"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="Estudio Jurídico Casanegra & Asociados"
        />

        <meta
          property="og:locale"
          content="es_AR"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Artículos y Publicaciones Jurídicas | Estudio Jurídico Casanegra & Asociados"
        />

        <meta
          name="twitter:description"
          content="Artículos, análisis jurídicos y publicaciones del Estudio Jurídico Casanegra & Asociados."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/crwsvgt8/image/upload/v1787164743/photo-1558052643-9a9e9ea8e50a.avif"
        />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <section className="pt-40 pb-20 bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="mb-6 font-serif text-primary">Artículos y Novedades</h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Análisis normativo, jurisprudencia y tendencias en nuestras áreas de especialización.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => {
              const articleUrl = article.isCustomLink ? article.slug : `/articulos/${article.slug}`;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col h-full bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium bg-sky-500/20 text-sky-200 border border-sky-400/30 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Link
                      to={articleUrl}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors mt-auto"
                    >
                      Leer artículo completo
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ArticulosPage;