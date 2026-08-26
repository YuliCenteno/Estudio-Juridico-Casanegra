import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';

function ContactoPage() {
  return (
    <>
      <Helmet>
        <title>Contacto | Casanegra & Asociados</title>
        <meta name="description" content="Contacte a nuestro estudio jurídico para solicitar asesoramiento en derecho administrativo, ambiental, construcción, minero y urbanístico." />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <section className="pt-40 pb-20 bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="mb-6 text-primary font-serif">Contacto</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comuníquese con nuestro equipo de especialistas para coordinar una consulta sobre su proyecto o situación legal.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <Card className="bg-card border-border/50 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-8 md:p-10">
                  <h2 className="text-2xl font-semibold mb-8 text-primary font-serif">Formulario de Consulta</h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="bg-primary text-primary-foreground p-8 md:p-10 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-8 font-serif">Información de Contacto</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-secondary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 text-lg">Sede Principal</h3>
                      <p className="opacity-90 leading-relaxed">Av. del Libertador 1000, Piso 8<br/>Ciudad Autónoma de Buenos Aires</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-secondary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 text-lg">Teléfono</h3>
                      <p className="opacity-90">+54 11 4567-8900</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-secondary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 text-lg">Email</h3>
                      <p className="opacity-90">contacto@casanegra.com.ar</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-secondary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 text-lg">Horario de Atención</h3>
                      <p className="opacity-90 leading-relaxed">Lunes a Viernes<br/>9:00 a 18:00 hs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden h-64 shadow-lg border border-border/50">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-58.3816%2C-34.6037%2C-58.3716%2C-34.5937&layer=mapnik&marker=-34.5987,-58.3766"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Ubicación del Estudio"
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

export default ContactoPage;