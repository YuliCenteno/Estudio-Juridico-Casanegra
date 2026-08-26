import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShieldCheck, History, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros | Casanegra & Asociados</title>
        <meta name="description" content="Conozca la historia, misión y equipo de Estudio Jurídico Casanegra & Asociados." />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <section className="pt-40 pb-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="mb-6 font-serif text-balance">Nuestra Firma</h1>
            <p className="text-xl opacity-90 leading-relaxed font-light">
              Tradición, excelencia jurídica y un enfoque moderno orientado a resolver los desafíos legales de hoy y de mañana.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-1 lg:col-span-2 space-y-12"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <History className="w-8 h-8 text-secondary" />
                  <h2 className="text-3xl font-serif text-primary">Nuestra Historia</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    Fundado con la convicción de que el ejercicio del derecho exige un nivel de especialización cada vez mayor, <strong>Estudio Jurídico Casanegra & Asociados</strong> nació en Córdoba para brindar respuestas precisas a problemas jurídicos complejos.
                  </p>
                  <p>
                    A lo largo de los años, nos hemos consolidado como un referente regional en áreas críticas donde convergen el sector público y privado, como el derecho administrativo, ambiental, de la construcción y urbanístico. Nuestra expansión hacia el derecho migratorio y las inversiones internacionales responde a las necesidades globales de nuestros clientes.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Target className="w-8 h-8 text-secondary" />
                  <h2 className="text-3xl font-serif text-primary">Nuestra Misión</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Nuestra misión es proveer seguridad y previsibilidad jurídica a personas y corporaciones. Entendemos nuestro rol no solo como defensores ante conflictos declarados, sino como aliados estratégicos en la estructuración, planificación y viabilidad legal de sus proyectos a largo plazo.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="col-span-1"
            >
              <div className="bg-card border border-border p-8 rounded-3xl sticky top-32 shadow-sm">
                <ShieldCheck className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-serif text-primary mb-6">Valores de la Firma</h3>
                <ul className="space-y-6">
                  <li className="border-b border-border/50 pb-4">
                    <h4 className="font-semibold text-foreground mb-2">Excelencia Técnica</h4>
                    <p className="text-sm text-muted-foreground">Rigurosidad en el estudio y aplicación del derecho.</p>
                  </li>
                  <li className="border-b border-border/50 pb-4">
                    <h4 className="font-semibold text-foreground mb-2">Compromiso Ético</h4>
                    <p className="text-sm text-muted-foreground">Transparencia y honestidad en el vínculo con el cliente.</p>
                  </li>
                  <li className="pb-2">
                    <h4 className="font-semibold text-foreground mb-2">Visión Integral</h4>
                    <p className="text-sm text-muted-foreground">Abordaje multidisciplinario de cada caso.</p>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutPage;