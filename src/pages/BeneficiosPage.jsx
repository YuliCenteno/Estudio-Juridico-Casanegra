import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { UserCheck, Clock, Shield, Award, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BenefitCard from '@/components/BenefitCard';

function BeneficiosPage() {
  const benefits = [
    {
      icon: UserCheck,
      title: 'Atención Personalizada',
      description: 'Cada cliente recibe un trato único y adaptado a sus necesidades específicas. Nos tomamos el tiempo para entender su situación y ofrecer soluciones a medida.'
    },
    {
      icon: Clock,
      title: 'Respuesta Rápida',
      description: 'Entendemos la urgencia de los asuntos legales. Nos comprometemos a responder sus consultas en el menor tiempo posible y actuar con celeridad en cada caso.'
    },
    {
      icon: Shield,
      title: 'Confidencialidad',
      description: 'Su información está protegida bajo estrictos protocolos de confidencialidad. La privacidad de nuestros clientes es una prioridad absoluta en nuestro estudio.'
    },
    {
      icon: Award,
      title: 'Asesoramiento Profesional',
      description: 'Contamos con un equipo de abogados especializados con amplia experiencia en diversas áreas del derecho, garantizando asesoramiento de la más alta calidad.'
    },
    {
      icon: TrendingUp,
      title: 'Seguimiento Constante',
      description: 'Mantenemos comunicación permanente durante todo el proceso legal. Usted estará informado en cada etapa y podrá consultar el estado de su caso en cualquier momento.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Beneficios - Casa Negra y Asociados</title>
        <meta name="description" content="Descubra los beneficios de trabajar con Casa Negra y Asociados: atención personalizada, respuesta rápida, confidencialidad absoluta y seguimiento constante." />
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
            <h1 className="mb-6 text-foreground">Por qué elegirnos</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ventajas de confiar su caso a nuestro estudio jurídico
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-foreground">Compromiso con la excelencia</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  En Casa Negra y Asociados, no solo brindamos servicios legales, sino que construimos relaciones de confianza con nuestros clientes. Cada caso es tratado con la máxima dedicación y profesionalismo.
                </p>
                <p>
                  Nuestro objetivo es superar sus expectativas, ofreciendo no solo soluciones legales efectivas, sino también tranquilidad y seguridad durante todo el proceso.
                </p>
                <p>
                  La satisfacción de nuestros clientes y los resultados obtenidos son el mejor testimonio de nuestro compromiso con la excelencia.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
                  alt="Profesionales trabajando en soluciones legales"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default BeneficiosPage;