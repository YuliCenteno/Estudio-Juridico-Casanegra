import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Plane, Globe, Shield, Ticket, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function MigrationPage() {
  const migrations = [
    { icon: Globe, title: 'Residencias Argentinas', desc: 'Trámites de radicación precaria, temporaria y permanente para extranjeros en Argentina.' },
    { icon: Ticket, title: 'Visas Americanas', desc: 'Asesoramiento integral para obtención de visas de turismo (B1/B2), estudio y trabajo para Estados Unidos.' },
    { icon: Shield, title: 'ETIAS (Europa)', desc: 'Gestión del nuevo permiso de viaje obligatorio para ingresar al espacio Schengen.' },
    { icon: Plane, title: 'UK Visa', desc: 'Asistencia en la preparación y presentación de expedientes para visados al Reino Unido.' },
    { icon: Globe, title: 'Autorización ESTA', desc: 'Tramitación del Sistema Electrónico para Autorización de Viaje a EE.UU. (países exentos de visa).' },
    { icon: Briefcase, title: 'Visas para Inversores', desc: 'Estructuración legal para la obtención de visas de inversor extranjero en distintos países.' }
  ];

  return (
    <>
      <Helmet>
        <title>Derecho Migratorio | Casanegra & Asociados</title>
        <meta name="description" content="Servicios migratorios: Residencias, Visas Americanas, ETIAS, UK Visa y más." />
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
            <h1 className="mb-6 text-primary font-serif">Derecho Migratorio y Extranjería</h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Soluciones globales para movilidad internacional de personas y capitales.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 border border-border bg-card rounded-2xl hover:shadow-lg transition-shadow"
              >
                <item.icon className="w-8 h-8 text-secondary mb-6" />
                <h3 className="text-xl font-serif text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default MigrationPage;