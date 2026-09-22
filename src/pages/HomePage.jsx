import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, Leaf, Handshake, Map, Award, ShoppingBag, Globe2, Landmark, TrendingUp, ArrowRight, Users, Wallet, Briefcase, Scale, Ship 
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import PracticeAreaCard from '@/components/PracticeAreaCard.jsx';

function HomePage() {
  const areas = [
    { icon: Building2, title: 'Derecho Administrativo', link: '/areas#derecho-administrativo' },
    { icon: Leaf, title: 'Derecho Ambiental', link: '/areas#derecho-ambiental' },
    { icon: Users, title: 'Derecho Societario', link: '/areas#derecho-societario' },
    { icon: TrendingUp, title: 'Derecho del Inversor', link: '/areas#derecho-del-inversor' },
    { icon: Map, title: 'Derecho Urbanístico', link: '/areas#derecho-urbanistico' },
    { icon: Globe2, title: 'Migraciones', link: '/ciudadanias-migratorio#derecho-migratorio' },
    { icon: Landmark, title: 'Ciudadanías', link: '/ciudadanias-migratorio#ciudadanias-extranjeras' },
    { icon: Wallet, title: 'Cobranzas', link: '/areas#cobranzas' },
    { icon: Briefcase, title: 'Derecho Concursal', link: '/areas#derecho-concursal' },
    { icon: Scale, title: 'Derecho Penal', link: '/areas#derecho-penal' },
    { icon: Ship, title: 'Derecho Aduanero', link: '/areas#derecho-aduanero' },
    { icon: ShoppingBag, title: 'Derecho del Consumo', link: '/areas#derecho-del-consumo' },
    { icon: Handshake, title: 'Lealtad Comercial', link: '/areas#lealtad-comercial' },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Estudio Jurídico Casanegra & Asociados",
    "url": "https://estudiocasanegra.com",
    "logo": "https://estudiocasanegra.com/logo.png",
    "image": "https://estudiocasanegra.com/imagen-corporativa.png",
    "description": "Estudio Jurídico especializado en derecho administrativo, ambiental, urbanístico, minero, migratorio, ciudadanías e inversiones",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "José Gigena 2058",
      "addressLocality": "Cerro de las Rosas",
      "addressRegion": "Córdoba",
      "postalCode": "5000",
      "addressCountry": "AR"
    },
    "telephone": "+54 351 650 6222",
    "email": "contacto@estudiocasanegra.com",
    "areaServed": "AR",
    "sameAs": [
      "https://www.instagram.com/estudio_casanegra",
      "https://www.facebook.com/estcasanegra",
      "https://www.linkedin.com/in/francisco-casanegra-610413191/"
    ],
    "priceRange": "$$"
  };

  return (
    <>
      <Helmet>
        <title>Estudio Jurídico Casanegra & Asociados | Abogados Especializados en Córdoba</title>
        <meta name="description" content="Estudio Jurídico Casanegra & Asociados brinda asesoramiento especializado en derecho administrativo, ambiental, urbanístico, minero, migratorio, ciudadanías e inversiones en Córdoba, Argentina." />
        <link rel="canonical" href="https://estudiocasanegra.com/" />
        
        <meta property="og:title" content="Estudio Jurídico Casanegra & Asociados | Abogados Especializados en Córdoba" />
        <meta property="og:description" content="Estudio Jurídico Casanegra & Asociados brinda asesoramiento especializado en derecho administrativo, ambiental, urbanístico, minero, migratorio, ciudadanías e inversiones en Córdoba, Argentina." />
        <meta property="og:image" content="https://res.cloudinary.com/crwsvgt8/image/upload/v1787164743/photo-1558052643-9a9e9ea8e50a.avif" />
        <meta property="og:url" content="https://estudiocasanegra.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Estudio Jurídico Casanegra & Asociados" />
        <meta property="og:locale" content="es_AR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Estudio Jurídico Casanegra & Asociados | Abogados Especializados en Córdoba" />
        <meta name="twitter:description" content="Estudio Jurídico Casanegra & Asociados brinda asesoramiento especializado en derecho administrativo, ambiental, urbanístico, minero, migratorio, ciudadanías e inversiones en Córdoba, Argentina." />
        <meta name="twitter:image" content="https://res.cloudinary.com/crwsvgt8/image/upload/v1787164743/photo-1558052643-9a9e9ea8e50a.avif" />
        
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main>
        <section className="pt-32 md:pt-40 pb-20 bg-muted relative">
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block py-1.5 px-5 rounded-full bg-secondary/20 text-primary font-medium text-xs md:text-sm tracking-[0.2em] uppercase mb-6 border border-border/60">
                Firma Legal Especializada
              </span>
              <h1 className="text-primary font-serif mx-auto max-w-4xl leading-tight">
                ESTUDIO JURÍDICO<br />CASANEGRA & ASOCIADOS
              </h1>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-20">
              {areas.map((area, index) => (
                <PracticeAreaCard
                  key={index}
                  icon={area.icon}
                  title={area.title}
                  linkTo={area.link}
                  delay={index * 0.1}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/areas" className="btn-outline">
                Ver todas las áreas de práctica
              </Link>
            </div>
          </div>
        </section>

        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1558052643-9a9e9ea8e50a?q=80&w=2000&auto=format&fit=crop" 
              alt="Estudio Jurídico Casanegra & Asociados en Córdoba - Arquitectura moderna y sustentable" 
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
          </div>
        </section>

        <section className="py-24 bg-card relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/10" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-muted rounded-full blur-3xl translate-y-1/2 translate-x-1/4 pointer-events-none opacity-50" />
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                className="w-16 h-16 rounded-full bg-card mx-auto mb-8 flex items-center justify-center border border-border shadow-sm"
              >
                <div className="w-8 h-8 border-2 border-primary rounded-full" />
              </motion.div>
              
              <h2 className="font-serif mb-8 text-primary text-balance">
                Compromiso con la Excelencia y la Sustentabilidad
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-10 font-light">
                Entendemos que el derecho moderno requiere soluciones que no solo resuelvan conflictos actuales, sino que anticipen desafíos futuros, promoviendo el desarrollo equilibrado y la seguridad jurídica a largo plazo. Brindamos asesoramiento legal estratégico con una visión integral, protegiendo sus intereses en un entorno normativo en constante evolución.
              </p>
              <Link to="/nosotros" className="inline-flex items-center uppercase tracking-widest text-sm font-medium text-primary hover:text-primary/70 transition-colors">
                Conozca a nuestro equipo <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;