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
    slug: 'tasa-estadistica',
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
            {articles.map((article, index) => (
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
                    <span className="text-xs font-medium bg-secondary/10 text-secondary px-3 py-1 rounded-full">
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
  to={`/articulos/${article.slug}`}
  className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors mt-auto"
>
  Leer artículo completo
  <ArrowRight className="ml-1 w-4 h-4" />
</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ArticulosPage;