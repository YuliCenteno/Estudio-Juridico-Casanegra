import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Check, Globe, Plane, Shield, Ticket, Briefcase, Landmark } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function CitizenshipsAndMigrationPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const italianServices = [
    'Trámite completo de reconocimiento',
    'Gestión plataforma Fast It',
    'Inscripción en padrón AIRE',
    'Actualización de estado civil (Matrimonio/Divorcio)',
    'Ciudadanía directa para hijos menores',
    'Ciudadanía para nietos',
    'Procesos sumarios y juicios por falta de turno'
  ];

  const spanishServices = [
    'Inscripción de menores de edad',
    'Inscripción para mayores de 18 años',
    'Tramitación y renovación de pasaporte',
    'Ciudadanía para hijos mayores de edad (Ley de Memoria Democrática)',
    'Búsqueda de actas en España',
    'Legalización y apostillado de documentación'
  ];

  const migrations = [
    { icon: Globe, title: 'Residencias Argentinas', desc: 'Trámites de radicación precaria, temporaria y permanente para extranjeros en Argentina.' },
    { icon: Ticket, title: 'Visas Americanas', desc: 'Asesoramiento integral para obtención de visas de turismo (B1/B2), estudio y trabajo para Estados Unidos.' },
    { icon: Shield, title: 'ETIAS (Europa)', desc: 'Gestión del nuevo permiso de viaje obligatorio para ingresar al espacio Schengen.' },
    { icon: Plane, title: 'UK Visa', desc: 'Asistencia en la preparación y presentación de expedientes para visados al Reino Unido.' },
    { icon: Globe, title: 'Autorización ESTA', desc: 'Tramitación del Sistema Electrónico para Autorización de Viaje a EE.UU. (países exentos de visa).' },
    { icon: Briefcase, title: 'Inversiones Extranjeras', desc: 'Estructuración legal para la obtención de visas de inversor extranjero en distintos países.' }
  ];

  return (
    <>
      <Helmet>
        <title>Ciudadanía Italiana, Española y Migraciones | Estudio Jurídico Casanegra</title>
        <meta name="description" content="Asesoramiento especializado en ciudadanía italiana, ciudadanía española, migraciones, residencias argentinas y visas. Estudio Jurídico Casanegra en Córdoba, Argentina." />
        <link rel="canonical" href="https://estudiocasanegra.com/ciudadanias-migratorio" />
        
        <meta property="og:title" content="Ciudadanía Italiana, Española y Migraciones | Estudio Jurídico Casanegra" />
        <meta property="og:description" content="Asesoramiento especializado en ciudadanía italiana, ciudadanía española, migraciones, residencias argentinas y visas. Estudio Jurídico Casanegra en Córdoba, Argentina." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1558052643-9a9e9ea8e50a?q=80&w=2000&auto=format&fit=crop" />
        <meta property="og:url" content="https://estudiocasanegra.com/ciudadanias-migratorio" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Estudio Jurídico Casanegra & Asociados" />
        <meta property="og:locale" content="es_AR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ciudadanía Italiana, Española y Migraciones | Estudio Jurídico Casanegra" />
        <meta name="twitter:description" content="Asesoramiento especializado en ciudadanía italiana, ciudadanía española, migraciones, residencias argentinas y visas. Estudio Jurídico Casanegra en Córdoba, Argentina." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1558052643-9a9e9ea8e50a?q=80&w=2000&auto=format&fit=crop" />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main>
        <section className="pt-40 pb-20 bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl text-center mx-auto"
            >
              <span className="inline-block py-1 px-4 rounded-full bg-secondary/10 text-primary font-medium text-xs tracking-widest uppercase mb-6 border border-secondary/20">
                Movilidad Global
              </span>
              <h1 className="mb-6 text-primary font-serif">Ciudadanías y Derecho Migratorio</h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                Soluciones integrales para la movilidad internacional de personas, familias y capitales, simplificando trámites burocráticos y consulares.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1: CIUDADANÍAS EXTRANJERAS */}
        <section id="ciudadanias-extranjeras" className="section-spacing bg-background scroll-mt-20">
          <div className="container-custom">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Landmark className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground">Ciudadanías Extranjeras</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Italian Card */}
              <motion.article 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative"
              >
                <div className="h-40 w-full relative overflow-hidden shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1525874684015-58379d421a52?q=80&w=1200&auto=format&fit=crop" 
                    alt="Ciudadanía Italiana - Asesoramiento legal y gestión de trámites consulares" 
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                <div className="p-8 md:p-10 pt-4 flex-grow flex flex-col relative z-10">
                  <h3 className="text-2xl md:text-3xl font-serif text-primary mb-8 border-b border-border/80 pb-6">Ciudadanía Italiana</h3>
                  <ul className="space-y-4 flex-grow">
                    {italianServices.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-muted-foreground text-[15px] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>

              {/* Spanish Card */}
              <motion.article 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative"
              >
                <div className="h-40 w-full relative overflow-hidden shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1200&auto=format&fit=crop" 
                    alt="Ciudadanía Española - Trámites y gestión bajo Ley de Memoria Democrática" 
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                <div className="p-8 md:p-10 pt-4 flex-grow flex flex-col relative z-10">
                  <h3 className="text-2xl md:text-3xl font-serif text-primary mb-8 border-b border-border/80 pb-6">Ciudadanía Española</h3>
                  <ul className="space-y-4 flex-grow">
                    {spanishServices.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-muted-foreground text-[15px] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Visual Separator */}
        <div className="container-custom">
          <div className="w-full h-px bg-border/60" />
        </div>

        {/* SECTION 2: DERECHO MIGRATORIO */}
        <section id="derecho-migratorio" className="section-spacing bg-background scroll-mt-20">
          <div className="container-custom">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground">Derecho Migratorio</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {migrations.map((item, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 border border-border bg-card rounded-3xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default CitizenshipsAndMigrationPage;