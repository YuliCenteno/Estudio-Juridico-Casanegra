import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { 
  Building2, Leaf, Shovel as Pickaxe, Map, 
  TrendingUp, Globe2, Calculator, Users, Scale, Wallet, Briefcase, Ship,
  ShoppingBag, Handshake
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function AreasPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const practiceAreas = [
    {
      id: 'derecho-administrativo',
      title: 'Derecho Administrativo',
      icon: Building2,
      description: 'Asesoramiento y representación en la relación entre los particulares y la Administración Pública en todos sus niveles. Gestión de licitaciones, contratos públicos y recursos administrativos.',
    },
    {
      id: 'derecho-ambiental',
      title: 'Derecho Ambiental',
      icon: Leaf,
      description: 'Especialistas en normativa ecológica, enfocados en armonizar el desarrollo de proyectos con la protección del medio ambiente. Evaluaciones de impacto y compliance regulatorio.',
    },
    {
      id: 'derecho-minero',
      title: 'Derecho Minero',
      icon: Pickaxe,
      description: 'Asistencia legal integral para la industria extractiva, abarcando desde la etapa de prospección y exploración hasta la explotación y el cierre de minas.',
    },
    {
      id: 'derecho-urbanistico',
      title: 'Derecho Urbanístico',
      icon: Map,
      description: 'Resolución de conflictos territoriales y planificación normativa para el uso racional y estratégico del suelo. Zonificación, loteos y convenios urbanísticos.',
    },
    {
      id: 'derecho-del-inversor',
      title: 'Derecho del Inversor',
      icon: TrendingUp,
      description: 'Estructuración legal para la protección de capitales, fideicomisos y radicación de inversiones extranjeras, garantizando seguridad jurídica y optimización fiscal.',
    },
    {
      id: 'ciudadanias-y-migraciones',
      title: 'Ciudadanías y Migraciones',
      icon: Globe2,
      description: 'Gestión integral para la obtención de ciudadanías europeas (Italiana, Española) y asesoramiento en radicaciones, visas y permisos de residencia en Argentina.',
    },
    {
      id: 'derecho-tributario',
      title: 'Derecho Tributario',
      icon: Calculator,
      description: 'Planificación fiscal estratégica, defensa ante determinaciones de oficio y litigio contencioso administrativo y judicial a nivel nacional, provincial y municipal.',
    },
    {
      id: 'derecho-societario',
      title: 'Derecho Societario',
      icon: Users,
      description: 'Constitución de sociedades, fusiones, adquisiciones, resolución de conflictos societarios y diseño de protocolos de empresa familiar.',
    },
    {
      id: 'derecho-concursal',
      title: 'Derecho Concursal',
      icon: Briefcase,
      description: 'Asesoramiento en procesos de reestructuración de pasivos, concursos preventivos, acuerdos preventivos extrajudiciales (APE) y quiebras.',
    },
    {
      id: 'derecho-penal',
      title: 'Derecho Penal',
      icon: Scale,
      description: 'Defensa y querella en delitos de cuello blanco, fraudes corporativos, evasión tributaria, lavado de activos y compliance penal.',
    },
    {
      id: 'cobranzas',
      title: 'Gestión de Cobranzas',
      icon: Wallet,
      description: 'Recupero de activos y carteras en mora mediante gestión extrajudicial persuasiva y ejecución judicial ágil y eficiente.',
    },
    {
      id: 'derecho-aduanero',
      title: 'Derecho Aduanero',
      icon: Ship,
      description: 'Asesoramiento integral en materia de comercio exterior y normativa aduanera. Asistencia en importaciones y exportaciones, clasificación arancelaria, valoración de mercaderías, régimen de infracciones y procedimientos ante la autoridad aduanera. Defensa y representación en sumarios, controversias y reclamos vinculados con operaciones de comercio internacional.',
    },
    {
      id: 'derecho-del-consumo',
      title: 'Derecho del Consumo',
      icon: ShoppingBag,
      description: 'Asesoramiento y defensa integral en relaciones de consumo. Patrocinio en reclamos individuales y colectivos, denuncias ante organismos de defensa del consumidor y adecuación de prácticas comerciales a la normativa vigente.',
    },
    {
      id: 'lealtad-comercial',
      title: 'Lealtad Comercial',
      icon: Handshake,
      description: 'Asistencia técnica en competencia desleal, publicidad engañosa, etiquetado y promociones. Defensa y compliance preventivo para garantizar prácticas de mercado transparentes y ajustadas a derecho.',
    }
  ];

  return (
    <>
      <Helmet>
        <title>Áreas de Práctica | Estudio Jurídico Casanegra</title>
        <meta name="description" content="Áreas de práctica del Estudio Jurídico Casanegra: derecho administrativo, ambiental, urbanístico, minero, migratorio, ciudadanías, tributario, societario, concursal, penal, del consumo y lealtad comercial en Córdoba." />
        <link rel="canonical" href="https://estudiocasanegra.com/areas-practica" />
        
        <meta property="og:title" content="Áreas de Práctica | Estudio Jurídico Casanegra" />
        <meta property="og:description" content="Áreas de práctica del Estudio Jurídico Casanegra: derecho administrativo, ambiental, urbanístico, minero, migratorio, ciudadanías, tributario, societario, concursal, penal, del consumo y lealtad comercial en Córdoba." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1558052643-9a9e9ea8e50a?q=80&w=2000&auto=format&fit=crop" />
        <meta property="og:url" content="https://estudiocasanegra.com/areas-practica" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Estudio Jurídico Casanegra & Asociados" />
        <meta property="og:locale" content="es_AR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Áreas de Práctica | Estudio Jurídico Casanegra" />
        <meta name="twitter:description" content="Áreas de práctica del Estudio Jurídico Casanegra: derecho administrativo, ambiental, urbanístico, minero, migratorio, ciudadanías, tributario, societario, concursal, penal, del consumo y lealtad comercial en Córdoba." />
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
                Expertise Legal
              </span>
              <h1 className="mb-6 text-primary font-serif">Áreas de Práctica</h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                Desarrollamos estrategias jurídicas sólidas respaldadas por una profunda especialización en sectores clave para el desarrollo empresarial y personal.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practiceAreas.map((area, index) => (
                <motion.article
                  key={area.id}
                  id={area.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="scroll-mt-32 h-full"
                >
                  <div className="h-full bg-card border border-border/60 p-8 rounded-3xl card-premium flex flex-col relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150" />
                    
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <area.icon className="w-7 h-7" />
                    </div>
                    
                    <h2 className="text-2xl font-serif text-foreground mb-4 group-hover:text-primary transition-colors">{area.title}</h2>
                    <p className="text-muted-foreground leading-relaxed flex-grow font-light">
                      {area.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AreasPage;