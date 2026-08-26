import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
function ContactPage() {
  return <>
      <Helmet>
        <title>Contacto | Estudio Jurídico Casanegra</title>
        <meta name="description" content="Contacta al Estudio Jurídico Casanegra & Asociados en Córdoba. Teléfono: +54 351 650 6222. Asesoramiento jurídico especializado en derecho administrativo, ambiental y migratorio." />
        <link rel="canonical" href="https://estudiocasanegra.com/contacto" />
        
        <meta property="og:title" content="Contacto | Estudio Jurídico Casanegra" />
        <meta property="og:description" content="Contacta al Estudio Jurídico Casanegra & Asociados en Córdoba. Teléfono: +54 351 650 6222. Asesoramiento jurídico especializado en derecho administrativo, ambiental y migratorio." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1558052643-9a9e9ea8e50a?q=80&w=2000&auto=format&fit=crop" />
        <meta property="og:url" content="https://estudiocasanegra.com/contacto" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Estudio Jurídico Casanegra & Asociados" />
        <meta property="og:locale" content="es_AR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contacto | Estudio Jurídico Casanegra" />
        <meta name="twitter:description" content="Contacta al Estudio Jurídico Casanegra & Asociados en Córdoba. Teléfono: +54 351 650 6222. Asesoramiento jurídico especializado en derecho administrativo, ambiental y migratorio." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1558052643-9a9e9ea8e50a?q=80&w=2000&auto=format&fit=crop" />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main>
        <section className="pt-40 pb-16 bg-cream">
          <div className="container-custom">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="text-center max-w-4xl mx-auto">
              <h1 className="mb-6 text-primary font-serif">Contacto</h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-light mb-12">
                Estamos a su disposición para analizar su caso y ofrecerle el asesoramiento legal que necesita.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left border-y border-border/60 py-8 mb-4">
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="w-12 h-12 rounded-full bg-warm-beige flex items-center justify-center text-primary shrink-0 border border-border/50">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-primary text-sm uppercase tracking-wider mb-1">Dirección</h2>
                    <p className="text-muted-foreground text-sm">José Gigena 2058,<br />Córdoba, Argentina</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="w-12 h-12 rounded-full bg-warm-beige flex items-center justify-center text-primary shrink-0 border border-border/50">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-primary text-sm uppercase tracking-wider mb-1">Teléfono</h2>
                    <p className="text-muted-foreground text-sm">+54 351 650 6222 / +54 351 201 6540</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="w-12 h-12 rounded-full bg-warm-beige flex items-center justify-center text-primary shrink-0 border border-border/50">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-primary text-sm uppercase tracking-wider mb-1">Email</h2>
                    <p className="text-muted-foreground text-sm">secretaria@estudiocasanegra.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="pb-24 bg-cream relative z-10">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="h-full flex flex-col">
                <div className="bg-card border border-border p-8 md:p-12 rounded-3xl shadow-sm flex-grow">
                  <h2 className="text-2xl font-serif text-primary mb-8">Envíanos tu Consulta</h2>
                  <ContactForm />
                </div>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="h-full">
                <div className="w-full h-full min-h-[400px] md:min-h-full rounded-3xl overflow-hidden shadow-sm border border-border relative bg-warm-beige">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.6178079474644!2d-64.23568852533089!3d-31.369524293985737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943299cdf19f1dab%3A0x68fd5862ca45ee9e!2sESTUDIO%20JURIDICO%20CASANEGRA%20%26%20ASOCIADOS!5e0!3m2!1ses!2sar!4v1780421050307!5m2!1ses!2sar" className="absolute inset-0 w-full h-full border-0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación de Estudio Jurídico Casanegra & Asociados en Córdoba" />
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>;
}
export default ContactPage;