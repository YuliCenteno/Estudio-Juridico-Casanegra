import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Check, TrendingUp, Award } from 'lucide-react';
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
        <title>Derecho del Inversor y Mercado de Capitales | Estudio Jurídico Casanegra</title>
        <meta name="description" content="Protección patrimonial, fideicomisos, inversiones extranjeras, asesoramiento financiero en mercado de capitales y apertura gratuita de cuenta comitente en ALyC autorizada por CNV en Córdoba." />
        <link rel="canonical" href="https://estudiocasanegra.com/inversiones" />
        
        <meta property="og:title" content="Derecho del Inversor y Mercado de Capitales | Estudio Jurídico Casanegra" />
        <meta property="og:description" content="Protección patrimonial, fideicomisos, inversiones extranjeras, asesoramiento financiero en mercado de capitales y apertura gratuita de cuenta comitente en ALyC autorizada por CNV en Córdoba." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1558052643-9a9e9ea8e50a?q=80&w=2000&auto=format&fit=crop" />
        <meta property="og:url" content="https://estudiocasanegra.com/inversiones" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Estudio Jurídico Casanegra & Asociados" />
        <meta property="og:locale" content="es_AR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Derecho del Inversor y Mercado de Capitales | Estudio Jurídico Casanegra" />
        <meta name="twitter:description" content="Protección patrimonial, fideicomisos, inversiones extranjeras, asesoramiento financiero en mercado de capitales y apertura gratuita de cuenta comitente en ALyC autorizada por CNV en Córdoba." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1558052643-9a9e9ea8e50a?q=80&w=2000&auto=format&fit=crop" />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main>
        <section className="relative min-h-[65vh] md:min-h-[75vh] flex items-center pt-32 pb-20 md:pb-32 overflow-hidden bg-slate-950">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://res.cloudinary.com/crwsvgt8/image/upload/v1795640102/usa-2661656_1280.webp" 
              alt="Fideicomisos e inversiones extranjeras - Asesoramiento especializado en derecho del inversor" 
              className="w-full h-full object-cover object-[center_20%] md:object-center opacity-60" 
            />
            {/* Overlay oscuro para garantizar alto contraste */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/50" />
          </div>
          
          <div className="container-custom relative z-10 text-white">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }} 
              className="max-w-3xl mt-12 md:mt-0"
            >
              <h1 className="mb-6 font-serif text-balance text-white text-4xl md:text-5xl font-bold tracking-tight drop-shadow-md">
                Derecho del Inversor e Inversiones
              </h1>
              <p className="text-lg md:text-xl text-slate-100 leading-relaxed font-light text-balance drop-shadow">
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

        {/* Sección Mercado de Capitales y Cuenta Comitente */}
        <section className="section-spacing bg-muted/30 border-t border-border/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full pointer-events-none" />

              <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center relative z-10">
                <div>
                  <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-secondary/20 text-primary font-medium text-xs tracking-widest uppercase mb-5 border border-secondary/40">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Mercado de Capitales · C.N.V.
                  </span>

                  <h2 className="text-3xl font-serif text-primary mb-5">
                    Puente con el Mercado de Capitales
                  </h2>

                  <p className="text-foreground text-lg leading-relaxed mb-4">
                    Somos un puente con el mercado de capitales, te asesoramos financieramente.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Te ofrecemos de manera gratuita la apertura de una cuenta comitente en una de las ALyCs de primera línea autorizadas por C.N.V.
                  </p>

                  <a href="/contacto" className="btn-primary inline-flex items-center">
                    Solicitar Apertura de Cuenta Comitente
                  </a>
                </div>

                <div className="bg-muted/40 border border-border/80 rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/30 border border-secondary flex items-center justify-center text-primary shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-primary font-semibold">
                        Asesoramiento Financiero
                      </p>
                      <h3 className="text-xl font-serif text-foreground">
                        Francisco Casanegra
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-5">
                    Abogado · Magíster · Idóneo en el mercado de capitales
                  </p>

                  <ul className="space-y-2 text-sm text-muted-foreground border-t border-border/60 pt-4">
                    <li>
                      <span className="text-foreground font-medium">Matrícula Profesional:</span> M.P. 1-32048
                    </li>
                    <li>
                      <span className="text-foreground font-medium">CSJN:</span> T° 501 F° 858
                    </li>
                    <li>
                      <span className="text-foreground font-medium">Matrícula Idóneo C.N.V.:</span> …
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default InvestorPage;