import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import TeamMemberCard from '@/components/TeamMemberCard';

function NosotrosPage() {
  const teamMembers = [
    {
      name: 'Francisco Casanegra',
      title: 'Managing Partner',
      image: 'https://horizons-cdn.hostinger.com/1d193b2b-0df5-4200-8ea5-f973af13e9b4/0c891f410a56b9db6274cd0ca92cefab.jpg',
      summary: 'Con una sólida trayectoria en derecho administrativo, ambiental y urbanístico, lidera la estrategia del estudio brindando asesoramiento integral a empresas, inversores y organismos públicos. Su experiencia en contrataciones, fideicomisos, proyectos de inversión y litigios complejos le permite ofrecer soluciones jurídicas innovadoras y de alto valor agregado.',
      background: [
        'Abogado – Universidad Nacional de Córdoba',
        'Magíster en Derecho Administrativo – Universidad Austral',
        'Disertante y autor de publicaciones especializadas en Derecho Administrativo y Contrataciones Públicas'
      ],
      specialties: [
        'Derecho Administrativo',
        'Derecho Ambiental',
        'Derecho Urbanístico',
        'Derecho de la Construcción',
        'Derecho del Inversor',
        'Contrataciones Públicas',
        'Fideicomisos',
        'Litigios Estratégicos'
      ],
      cvUrl: 'https://drive.google.com/file/d/1DYdrfzX5ZFeyvld08AD1yF5qucy7AK-m/view?usp=sharing'
    },
    {
      name: 'Paula Casanegra',
      title: 'Socia',
      image: 'https://horizons-cdn.hostinger.com/1d193b2b-0df5-4200-8ea5-f973af13e9b4/3f1aa342456fc1b171d7c638d9f43662.jpg',
      summary: 'Especialista en ciudadanía italiana y española, migraciones y derecho internacional, combina su experiencia profesional con una extensa trayectoria en instituciones consulares y organismos italianos, brindando un acompañamiento cercano y eficiente en procesos migratorios y de obtención de ciudadanía.',
      background: [
        'Abogada – Universidad Empresarial Siglo 21',
        'Certificación en idioma italiano – Dante Alighieri',
        'Formación complementaria en idioma inglés y gestión administrativa internacional'
      ],
      specialties: [
        'Ciudadanía Italiana',
        'Ciudadanía Española',
        'Derecho Migratorio',
        'Residencias Argentinas',
        'Trámites Consulares',
        'Gestión Documental Internacional',
        'Asesoramiento para Extranjeros',
        'Derecho Internacional Privado'
      ],
      cvUrl: 'https://drive.google.com/file/d/1okI9ZGdHcs6YcOVfhUuSEZ59-O1G_aaV/view?usp=sharing'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nosotros | Estudio Jurídico Casanegra & Asociados</title>
        <meta name="description" content="Conoce al equipo profesional del Estudio Jurídico Casanegra & Asociados. Especialistas en derecho administrativo, ambiental, migratorio y derecho del inversor en Córdoba." />
        <link rel="canonical" href="https://estudiocasanegra.com/nosotros" />
        
        <meta property="og:title" content="Nosotros | Estudio Jurídico Casanegra & Asociados" />
        <meta property="og:description" content="Conoce al equipo profesional del Estudio Jurídico Casanegra & Asociados. Especialistas en derecho administrativo, ambiental, migratorio y derecho del inversor en Córdoba." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1558052643-9a9e9ea8e50a?q=80&w=2000&auto=format&fit=crop" />
        <meta property="og:url" content="https://estudiocasanegra.com/nosotros" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Estudio Jurídico Casanegra & Asociados" />
        <meta property="og:locale" content="es_AR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nosotros | Estudio Jurídico Casanegra & Asociados" />
        <meta name="twitter:description" content="Conoce al equipo profesional del Estudio Jurídico Casanegra & Asociados. Especialistas en derecho administrativo, ambiental, migratorio y derecho del inversor en Córdoba." />
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
                Nuestra Firma
              </span>
              <h1 className="mb-6 text-primary font-serif">NOSOTROS</h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                Equipo profesional especializado en asesoramiento jurídico estratégico, comprometido con la excelencia y la defensa integral de sus intereses.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container-custom">
            <div className="space-y-16 md:space-y-24">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default NosotrosPage;