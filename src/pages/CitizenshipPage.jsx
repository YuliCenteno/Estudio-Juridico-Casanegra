import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CitizenshipCard from '@/components/CitizenshipCard';

function CitizenshipPage() {
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

  return (
    <>
      <Helmet>
        <title>Ciudadanía Europea | Casanegra & Asociados</title>
        <meta name="description" content="Gestión integral de ciudadanías italiana y española." />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <section className="pt-40 pb-20 bg-muted/40">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-center mx-auto"
          >
            <h1 className="mb-6 text-primary font-serif">Gestión de Ciudadanías</h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Acompañamiento especializado en el reconocimiento de su nacionalidad europea, simplificando trámites burocráticos y consulares.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <CitizenshipCard 
              title="Ciudadanía Italiana" 
              items={italianServices}
              image="https://images.unsplash.com/photo-1529154036614-a60975f5c760?q=80&w=1200&auto=format&fit=crop"
              delay={0.1}
            />
            <CitizenshipCard 
              title="Ciudadanía Española" 
              items={spanishServices}
              image="https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1200&auto=format&fit=crop"
              delay={0.3}
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center max-w-3xl mx-auto p-10 bg-card rounded-3xl border border-border shadow-sm"
          >
            <h3 className="text-2xl font-serif text-primary mb-4">¿Dudas sobre su elegibilidad?</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">Nuestro equipo realiza un análisis preliminar de su árbol genealógico y documentación existente para determinar la viabilidad de su trámite antes de incurrir en gastos innecesarios.</p>
            <a href="/contacto" className="btn-primary inline-flex items-center">Consultar Viabilidad</a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CitizenshipPage;