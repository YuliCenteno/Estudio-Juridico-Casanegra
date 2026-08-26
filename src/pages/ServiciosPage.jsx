import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Users, AlertCircle, FileSignature, Scale, Gavel } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function ServiciosPage() {
  const services = [
    {
      icon: MessageSquare,
      title: 'Consultas',
      description: 'Asesoramiento legal especializado en temas administrativos, ambientales, constructivos, mineros y urbanísticos.'
    },
    {
      icon: FileText,
      title: 'Dictámenes',
      description: 'Análisis jurídico detallado y opiniones profesionales sobre cuestiones legales complejas.'
    },
    {
      icon: Users,
      title: 'Mediaciones',
      description: 'Resolución alternativa de conflictos mediante mediación profesional y estratégica.'
    },
    {
      icon: AlertCircle,
      title: 'Reclamos',
      description: 'Presentación y gestión de reclamos administrativos y civiles ante autoridades competentes.'
    },
    {
      icon: FileSignature,
      title: 'Recursos',
      description: 'Interposición de recursos administrativos y judiciales para defender derechos.'
    },
    {
      icon: Scale,
      title: 'Acciones Judiciales',
      description: 'Representación legal en acciones judiciales ante tribunales competentes.'
    },
    {
      icon: Gavel,
      title: 'Recursos Judiciales',
      description: 'Gestión de recursos judiciales (apelaciones, casación, etc.) para proteger derechos.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Servicios Jurídicos | Casanegra & Asociados</title>
        <meta name="description" content="Conozca nuestros servicios legales: Consultas, Dictámenes, Mediaciones, Reclamos, Recursos y Acciones Judiciales." />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <section className="pt-40 pb-20 bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-center mx-auto"
          >
            <h1 className="mb-6 text-primary font-serif">Servicios Jurídicos</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Soluciones legales integrales diseñadas para proteger sus intereses con rigor técnico y visión estratégica.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors text-secondary">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ServiciosPage;