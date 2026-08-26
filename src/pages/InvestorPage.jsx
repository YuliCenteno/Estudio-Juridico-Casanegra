import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function InvestorPage() {
  const investorServices = [{
    title: 'Asesoramiento Previo',
    desc: 'Análisis de viabilidad legal y regulatoria (Due Diligence) para proyectos de inversión nacionales e internacionales.'
  }, {
    title: 'Protección Patrimonial',
    desc: 'Diseño de arquitecturas legales para aislar riesgos y proteger activos personales y corporativos.'
  }, {
    title: 'Protección del Capital',
    desc: 'Mecanismos jurídicos para resguardar la rentabilidad y seguridad de los fondos invertidos.'
  }, {
    title: 'Fideicomisos',
    desc: 'Constitución y administración de fideicomisos de administración, garantía, inmobiliarios y financieros.'
  }, {
    title: 'Inversiones Extranjeras',
    desc: 'Acompañamiento a capitales foráneos: radicación, giro de divisas, beneficios fiscales y cumplimiento normativo.'
  }];
  
  return (
    <>
      <Helmet>
        <title>Derecho del Inversor | Estudio Jurídico Casanegra</title>
        <meta name="description" content="Protección patrimonial, fideicomisos, inversiones extranjeras y asesoramiento previo a invertir. Derecho del inversor en Córdoba con Estudio Jurídico Casanegra." />
        <link rel="canonical" href="https://estudiocasanegra.com/derecho-inversor" />
        
        <meta property="og:title" content="Derecho del Inversor | Estudio Jurídico Casanegra" />
        <meta property="og:description" content="Protección patrimonial, fideicomisos, inversiones extranjeras y asesoramiento previo a invertir. Derecho del inversor en Córdoba con Estudio Jurídico Casanegra." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1558052643-9a9e9ea8e50a?q=80&w=2000&auto=format&fit=crop" />
        <meta property="og:url" content="https://estudiocasanegra.com/derecho-inversor" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Estudio Jurídico Casanegra & Asociados" />
        <meta property="og:locale" content="es_AR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Derecho del Inversor | Estudio Jurídico Casanegra" />
        <meta name="twitter:description" content="Protección patrimonial, fideicomisos, inversiones extranjeras y asesoramiento previo a invertir. Derecho del inversor en Córdoba con Estudio Jurídico Casanegra." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1558052643-9a9e9ea8e50a?q=80&w=2000&auto=format&fit=crop" />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main>
        <section className="relative min-h-[65vh] md:min-h-[75vh] flex items-center pt-32 pb-20 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-background">
            <img 
              src="https://horizons-cdn.hostinger.com/1d193b2b-0df5-4200-8ea5-f973af13e9b4/torowallstreet-I2c5U.png" 
              alt="Fideicomisos e inversiones extranjeras - Asesoramiento especializado en derecho del inversor" 
              className="w-full h-full object-cover object-[center_20%] md:object-center opacity-80" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 mix-blend-multiply" />
          </div>
          
          <div className="container-custom relative z-10 text-primary-foreground">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }} 
              className="max-w-3xl mt-12 md:mt-0"
            >
              <h1 className="mb-6 font-serif text-balance">Derecho del Inversor e Inversiones</h1>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed font-light text-balance">
                Orientado a empresas, desarrolladores e inversores que buscan seguridad jurídica y optimización estructural en sus negocios.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-serif text-primary mb-8">Estrategias Legales para la Creación de Valor</h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  Un entorno económico dinámico exige estructuras jurídicas flexibles pero robustas. Nuestro equipo colabora estrechamente con inversores y grupos empresariales para blindar el capital y asegurar el cumplimiento normativo en cada etapa de la inversión.
                </p>
                <div className="space-y-6">
                  {investorServices.map((srv, idx) => (
                    <motion.article 
                      key={idx} 
                      initial={{ opacity: 0, x: -20 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ delay: idx * 0.1 }} 
                      className="flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-secondary/30 border border-secondary flex items-center justify-center text-primary shrink-0 mt-1">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-foreground font-semibold mb-1">{srv.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{srv.desc}</p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
              
              <div className="bg-card border border-border p-8 md:p-10 rounded-3xl shadow-sm">
                <h3 className="text-2xl font-serif text-primary mb-6">¿Planificando una nueva inversión?</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  El diseño legal en la etapa de estructuración puede definir el éxito o fracaso de un proyecto. Contáctenos para un análisis preliminar de riesgos y oportunidades.
                </p>
                <a href="/contacto" className="btn-primary inline-flex items-center">
                  Agendar Reunión Estratégica
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default InvestorPage;