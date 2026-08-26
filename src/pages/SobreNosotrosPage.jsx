import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function SobreNosotrosPage() {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros | Estudio Jurídico Ambiental & Minero</title>
        <meta name="description" content="Conozca nuestra historia, misión y el equipo de expertos en derecho ambiental, urbanístico y minero." />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <section className="pt-40 pb-20 bg-primary text-primary-foreground">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="mb-6">Nuestra Firma</h1>
            <p className="text-xl opacity-90 leading-relaxed font-light">
              Forjando el camino hacia un desarrollo sostenible a través de la excelencia jurídica y el compromiso ético.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-12 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-8 space-y-8 text-lg text-muted-foreground leading-relaxed"
            >
              <h2 className="text-primary font-serif mb-6">Historia y Trayectoria</h2>
              <p>
                Fundado con la visión de proveer asesoramiento legal altamente especializado, nuestro estudio nació como respuesta a la creciente complejidad de las regulaciones ambientales y territoriales. Desde nuestros inicios, hemos acompañado a empresas líderes en la estructuración legal de proyectos de gran envergadura.
              </p>
              <p>
                Nuestra práctica se distingue por una profunda comprensión técnica de las industrias extractivas, energéticas y de desarrollo inmobiliario. No nos limitamos a la interpretación de la norma; analizamos el impacto real en el territorio y en las comunidades, ofreciendo estrategias preventivas y soluciones innovadoras.
              </p>
              
              <h2 className="text-primary font-serif mt-12 mb-6">Misión y Visión</h2>
              <p>
                <strong>Nuestra Misión:</strong> Brindar seguridad jurídica a proyectos de inversión mediante un asesoramiento integral que armonice el desarrollo económico con la protección ambiental y el cumplimiento normativo.
              </p>
              <p>
                <strong>Nuestra Visión:</strong> Ser reconocidos como la firma legal de referencia en América Latina para asuntos complejos de derecho ambiental, minero y urbanístico, destacando por nuestra integridad, innovación y resultados.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-4"
            >
              <div className="bg-muted/50 p-8 rounded-2xl border border-border/50 sticky top-32">
                <h3 className="text-xl font-semibold text-primary mb-6">Especialización Técnica</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex flex-col">
                    <span className="font-semibold text-foreground">Derecho Ambiental</span>
                    <span className="text-sm">Evaluaciones de impacto, pasivos ambientales, litigios.</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-semibold text-foreground">Derecho Urbanístico</span>
                    <span className="text-sm">Zonificación, ordenamiento territorial, permisos de obra.</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-semibold text-foreground">Derecho Minero</span>
                    <span className="text-sm">Concesiones, servidumbres, contratos mineros.</span>
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

export default SobreNosotrosPage;