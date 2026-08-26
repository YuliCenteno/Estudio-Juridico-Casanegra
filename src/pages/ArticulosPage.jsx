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
      title: 'El rol del abogado ambiental en la evaluación de impacto',
      excerpt: 'Análisis sobre la importancia del asesoramiento ambiental temprano para evitar contingencias en proyectos de gran escala y asegurar la licencia social.',
      category: 'Derecho Ambiental',
      date: '15 May 2026'
    },
    {
      title: 'Regulación urbanística: Desafíos para desarrolladores',
      excerpt: 'Cómo navegar las normativas municipales de zonificación y los conflictos de uso de suelo en el derecho urbanístico moderno.',
      category: 'Derecho Urbanístico',
      date: '02 May 2026'
    },
    {
      title: 'Derecho minero y sustentabilidad: Un equilibrio necesario',
      excerpt: 'Las nuevas exigencias de compliance ambiental en la industria extractiva y el rol del derecho minero en la transición energética.',
      category: 'Derecho Minero',
      date: '18 Abr 2026'
    },
    {
      title: 'El derecho administrativo frente a la obra pública',
      excerpt: 'Claves para entender los procesos licitatorios, las redeterminaciones de precios y las prerrogativas del Estado en contratos administrativos.',
      category: 'Derecho Administrativo',
      date: '05 Abr 2026'
    },
    {
      title: 'Responsabilidad civil del abogado construcción',
      excerpt: 'Un repaso por la jurisprudencia reciente sobre vicios ocultos, ruina y la responsabilidad compartida entre proyectistas y directores de obra.',
      category: 'Derecho de la Construcción',
      date: '22 Mar 2026'
    },
    {
      title: 'Estudio jurídico ambiental: Prevención de daños',
      excerpt: 'Por qué las empresas industriales necesitan auditorías legales preventivas para mitigar riesgos de derecho administrativo ambiental.',
      category: 'Derecho Ambiental',
      date: '10 Mar 2026'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Artículos y Novedades | Casanegra & Asociados</title>
        <meta name="description" content="Lea nuestros artículos sobre abogado ambiental, derecho urbanístico, derecho minero, derecho administrativo y abogado construcción." />
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
                  <Link to="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors mt-auto">
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