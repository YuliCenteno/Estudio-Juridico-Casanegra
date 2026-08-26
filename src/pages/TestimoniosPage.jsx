import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import TestimonialCard from '@/components/TestimonialCard';

function TestimoniosPage() {
  const testimonials = [
    {
      quote: 'Excelente atención y profesionalismo. Me ayudaron a resolver un conflicto laboral complejo de manera rápida y efectiva. Siempre estuvieron disponibles para responder mis dudas.',
      name: 'María González',
      profession: 'Ingeniera'
    },
    {
      quote: 'El equipo de Casa Negra y Asociados demostró un conocimiento profundo en derecho empresarial. Su asesoramiento fue clave para el crecimiento de mi empresa. Los recomiendo ampliamente.',
      name: 'Carlos Rodríguez',
      profession: 'Empresario'
    },
    {
      quote: 'Atravesé un proceso de divorcio difícil y ellos me brindaron el apoyo legal y emocional que necesitaba. Su trato humano y profesional hizo toda la diferencia.',
      name: 'Ana Martínez',
      profession: 'Docente'
    },
    {
      quote: 'Después de un accidente de tránsito, no sabía cómo proceder. Casa Negra y Asociados se encargó de todo y logró una compensación justa. Estoy muy agradecido por su dedicación.',
      name: 'Juan López',
      profession: 'Contador'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Testimonios - Casa Negra y Asociados</title>
        <meta name="description" content="Lea las experiencias de nuestros clientes satisfechos. Testimonios reales sobre nuestros servicios legales profesionales y personalizados." />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="mb-6 text-foreground">Testimonios</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Lo que nuestros clientes dicen sobre nosotros
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                profession={testimonial.profession}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">¿Listo para comenzar?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Únase a los cientos de clientes satisfechos que confiaron en nosotros para resolver sus asuntos legales.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:brightness-110 transition-all duration-200 active:scale-[0.98]"
            >
              Solicitar consulta gratuita
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default TestimoniosPage;