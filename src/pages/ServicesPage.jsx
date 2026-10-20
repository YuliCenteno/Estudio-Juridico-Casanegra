import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Users, AlertCircle, FileSignature, Scale, Gavel } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ServiceCard from '@/components/ServiceCard';

function ServicesPage() {
  const services = [
    {
      icon: MessageSquare,
      title: 'Consultas',
      description: 'Asesoramiento legal preventivo y resolutivo. Evaluamos escenarios, identificamos riesgos y diseñamos estrategias viables adaptadas a los objetivos de su organización.'
    },
    {
      icon: FileText,
      title: 'Dictámenes',
      description: 'Emisión de opiniones jurídicas fundadas sobre situaciones normativas complejas. Análisis profundo para el respaldo de decisiones corporativas o institucionales.'
    },
    {
      icon: Users,
      title: 'Mediaciones',
      description: 'Gestión y resolución alternativa de conflictos. Buscamos acuerdos favorables que eviten el desgaste, los costos y los tiempos asociados a los litigios judiciales prolongados.'
    },
    {
      icon: AlertCircle,
      title: 'Reclamos',
      description: 'Defensa activa de sus intereses ante organismos estatales o empresas privadas. Interposición de reclamos administrativos, civiles y comerciales.'
    },
    {
      icon: FileSignature,
      title: 'Recursos Administrativos',
      description: 'Impugnación de actos de la Administración Pública. Agotamiento de la vía administrativa mediante recursos de reconsideración, jerárquicos y de alzada.'
    },
    {
      icon: Scale,
      title: 'Acciones Judiciales',
      description: 'Patrocinio y representación legal especializada ante tribunales provinciales y federales, impulsando demandas, amparos y medidas cautelares.'
    },
    {
      icon: Gavel,
      title: 'Recursos Judiciales',
      description: 'Protección de sus derechos en instancias superiores. Interposición y seguimiento de apelaciones, recursos de casación, inconstitucionalidad y queja.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Servicios Jurídicos en Córdoba | Estudio Jurídico Casanegra</title>
        <meta name="description" content="Asesoramiento jurídico preventivo y representación en Córdoba: consultas, dictámenes, mediaciones, reclamos, recursos administrativos y acciones judiciales." />
        <link rel="canonical" href="https://estudiocasanegra.com/services" />
        <meta property="og:title" content="Servicios Jurídicos en Córdoba | Estudio Jurídico Casanegra" />
        <meta property="og:description" content="Asesoramiento jurídico preventivo y representación en Córdoba: consultas, dictámenes, mediaciones, reclamos, recursos administrativos y acciones judiciales." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1558052643-9a9e9ea8e50a?q=80&w=2000&auto=format&fit=crop" />
        <meta property="og:url" content="https://estudiocasanegra.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Estudio Jurídico Casanegra & Asociados" />
        <meta property="og:locale" content="es_AR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Servicios Jurídicos en Córdoba | Estudio Jurídico Casanegra" />
        <meta name="twitter:description" content="Asesoramiento jurídico preventivo y representación en Córdoba: consultas, dictámenes, mediaciones, reclamos, recursos administrativos y acciones judiciales." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1558052643-9a9e9ea8e50a?q=80&w=2000&auto=format&fit=crop" />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <section className="pt-40 pb-20 bg-muted/40 border-b border-border/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-center mx-auto"
          >
            <h1 className="mb-6 text-primary font-serif">Servicios Jurídicos</h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Un abordaje integral para cada necesidad legal, desde la prevención hasta la representación judicial.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ServicesPage;