import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { 
  Building2, Leaf, Shovel as Pickaxe, Map, 
  TrendingUp, Globe2, Calculator, Users, Scale, Wallet, Briefcase, Ship,
  ShoppingBag, Handshake, Home, ArrowRight
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
      color: '#1e3a8a',
      iconBg: 'bg-blue-950/10',
      iconText: 'text-blue-900',
      hoverBg: 'group-hover:bg-blue-900',
      titleHover: 'group-hover:text-blue-900',
      cornerBg: 'bg-blue-900/10',
      borderAccent: 'border-blue-900/25',
      description: 'Asesoramiento y representación en la relación entre los particulares y la Administración Pública en todos sus niveles. Gestión de licitaciones, contratos públicos y recursos administrativos.',
    },
    {
      id: 'derecho-ambiental',
      title: 'Derecho Ambiental',
      icon: Leaf,
      color: '#15803d',
      iconBg: 'bg-emerald-950/10',
      iconText: 'text-emerald-800',
      hoverBg: 'group-hover:bg-emerald-800',
      titleHover: 'group-hover:text-emerald-800',
      cornerBg: 'bg-emerald-800/10',
      borderAccent: 'border-emerald-800/25',
      description: 'Especialistas en normativa ecológica, enfocados en armonizar el desarrollo de proyectos con la protección del medio ambiente. Evaluaciones de impacto y compliance regulatorio.',
    },
    {
      id: 'derecho-minero',
      title: 'Derecho Minero',
      icon: Pickaxe,
      color: '#b45309',
      iconBg: 'bg-amber-950/10',
      iconText: 'text-amber-800',
      hoverBg: 'group-hover:bg-amber-800',
      titleHover: 'group-hover:text-amber-800',
      cornerBg: 'bg-amber-800/10',
      borderAccent: 'border-amber-800/25',
      description: 'Asistencia legal integral para la industria extractiva, abarcando desde la etapa de prospección y exploración hasta la explotación y el cierre de minas.',
    },
    {
      id: 'derecho-urbanistico',
      title: 'Derecho Urbanístico',
      icon: Map,
      color: '#3730a3',
      iconBg: 'bg-indigo-950/10',
      iconText: 'text-indigo-800',
      hoverBg: 'group-hover:bg-indigo-800',
      titleHover: 'group-hover:text-indigo-800',
      cornerBg: 'bg-indigo-800/10',
      borderAccent: 'border-indigo-800/25',
      description: 'Resolución de conflictos territoriales y planificación normativa para el uso racional y estratégico del suelo. Zonificación, loteos y convenios urbanísticos.',
    },
    {
      id: 'derecho-inmobiliario',
      title: 'Derecho Inmobiliario',
      icon: Home,
      link: '/derecho-inmobiliario',
      color: '#9a3412',
      iconBg: 'bg-orange-950/10',
      iconText: 'text-orange-800',
      hoverBg: 'group-hover:bg-orange-800',
      titleHover: 'group-hover:text-orange-800',
      cornerBg: 'bg-orange-800/10',
      borderAccent: 'border-orange-800/25',
      description: 'Asesoramiento integral en el régimen jurídico de los inmuebles (compraventa, fideicomisos, consorcios, acciones reales y posesorias, usucapión, restricciones ambientales y administrativas, expropiaciones) y en urbanizaciones y barrios cerrados.',
    },
    {
      id: 'derecho-del-inversor',
      title: 'Derecho del Inversor',
      icon: TrendingUp,
      color: '#a16207',
      iconBg: 'bg-yellow-950/10',
      iconText: 'text-yellow-800',
      hoverBg: 'group-hover:bg-yellow-800',
      titleHover: 'group-hover:text-yellow-800',
      cornerBg: 'bg-yellow-800/10',
      borderAccent: 'border-yellow-800/25',
      description: 'Estructuración legal para la protección de capitales, fideicomisos y radicación de inversiones extranjeras, garantizando seguridad jurídica y optimización fiscal.',
    },
    {
      id: 'ciudadanias-y-migraciones',
      title: 'Ciudadanías y Migraciones',
      icon: Globe2,
      color: '#0369a1',
      iconBg: 'bg-sky-950/10',
      iconText: 'text-sky-800',
      hoverBg: 'group-hover:bg-sky-800',
      titleHover: 'group-hover:text-sky-800',
      cornerBg: 'bg-sky-800/10',
      borderAccent: 'border-sky-800/25',
      description: 'Gestión integral para la obtención de ciudadanías europeas (Italiana, Española) y asesoramiento en radicaciones, visas y permisos de residencia en Argentina.',
    },
    {
      id: 'derecho-tributario',
      title: 'Derecho Tributario',
      icon: Calculator,
      color: '#6d28d9',
      iconBg: 'bg-violet-950/10',
      iconText: 'text-violet-800',
      hoverBg: 'group-hover:bg-violet-800',
      titleHover: 'group-hover:text-violet-800',
      cornerBg: 'bg-violet-800/10',
      borderAccent: 'border-violet-800/25',
      description: 'Planificación fiscal estratégica, defensa ante determinaciones de oficio y litigio contencioso administrativo y judicial a nivel nacional, provincial y municipal.',
    },
    {
      id: 'derecho-societario',
      title: 'Derecho Societario',
      icon: Users,
      color: '#1d4ed8',
      iconBg: 'bg-blue-950/10',
      iconText: 'text-blue-700',
      hoverBg: 'group-hover:bg-blue-700',
      titleHover: 'group-hover:text-blue-700',
      cornerBg: 'bg-blue-700/10',
      borderAccent: 'border-blue-700/25',
      description: 'Constitución de sociedades, fusiones, adquisiciones, resolución de conflictos societarios y diseño de protocolos de empresa familiar.',
    },
    {
      id: 'derecho-concursal',
      title: 'Derecho Concursal',
      icon: Briefcase,
      color: '#334155',
      iconBg: 'bg-slate-900/10',
      iconText: 'text-slate-700',
      hoverBg: 'group-hover:bg-slate-700',
      titleHover: 'group-hover:text-slate-700',
      cornerBg: 'bg-slate-700/10',
      borderAccent: 'border-slate-700/25',
      description: 'Asesoramiento en procesos de reestructuración de pasivos, concursos preventivos, acuerdos preventivos extrajudiciales (APE) y quiebras.',
    },
    {
      id: 'derecho-penal',
      title: 'Derecho Penal',
      icon: Scale,
      color: '#881337',
      iconBg: 'bg-rose-950/10',
      iconText: 'text-rose-900',
      hoverBg: 'group-hover:bg-rose-900',
      titleHover: 'group-hover:text-rose-900',
      cornerBg: 'bg-rose-900/10',
      borderAccent: 'border-rose-900/25',
      description: 'Defensa y querella en delitos de cuello blanco, fraudes corporativos, evasión tributaria, lavado de activos y compliance penal.',
    },
    {
      id: 'cobranzas',
      title: 'Gestión de Cobranzas',
      icon: Wallet,
      color: '#0f766e',
      iconBg: 'bg-teal-950/10',
      iconText: 'text-teal-800',
      hoverBg: 'group-hover:bg-teal-800',
      titleHover: 'group-hover:text-teal-800',
      cornerBg: 'bg-teal-800/10',
      borderAccent: 'border-teal-800/25',
      description: 'Recupero de activos y carteras en mora mediante gestión extrajudicial persuasiva y ejecución judicial ágil y eficiente.',
    },
    {
      id: 'derecho-aduanero',
      title: 'Derecho Aduanero',
      icon: Ship,
      color: '#1e40af',
      iconBg: 'bg-blue-950/10',
      iconText: 'text-blue-800',
      hoverBg: 'group-hover:bg-blue-800',
      titleHover: 'group-hover:text-blue-800',
      cornerBg: 'bg-blue-800/10',
      borderAccent: 'border-blue-800/25',
      description: 'Asesoramiento integral en materia de comercio exterior y normativa aduanera. Asistencia en importaciones y exportaciones, clasificación arancelaria, valoración de mercaderías, régimen de infracciones y procedimientos ante la autoridad aduanera. Defensa y representación en sumarios, controversias y reclamos vinculados con operaciones de comercio internacional.',
    },
    {
      id: 'derecho-del-consumo',
      title: 'Derecho del Consumo',
      icon: ShoppingBag,
      link: '/defensa-del-consumidor',
      color: '#be123c',
      iconBg: 'bg-rose-950/10',
      iconText: 'text-rose-700',
      hoverBg: 'group-hover:bg-rose-700',
      titleHover: 'group-hover:text-rose-700',
      cornerBg: 'bg-rose-700/10',
      borderAccent: 'border-rose-700/25',
      description: 'Asesoramiento y defensa integral en relaciones de consumo. Patrocinio en reclamos individuales y colectivos, denuncias ante organismos de defensa del consumidor y adecuación de prácticas comerciales a la normativa vigente.',
    },
    {
      id: 'lealtad-comercial',
      title: 'Lealtad Comercial',
      icon: Handshake,
      color: '#4d7c0f',
      iconBg: 'bg-lime-950/10',
      iconText: 'text-lime-800',
      hoverBg: 'group-hover:bg-lime-800',
      titleHover: 'group-hover:text-lime-800',
      cornerBg: 'bg-lime-800/10',
      borderAccent: 'border-lime-800/25',
      description: 'Asistencia técnica en competencia desleal, publicidad engañosa, etiquetado y promociones. Defensa y compliance preventivo para garantizar prácticas de mercado transparentes y ajustadas a derecho.',
    }
  ];

  return (
    <>
      <Helmet>
        <title>Áreas de Práctica | Estudio Jurídico Casanegra</title>
        <meta name="description" content="Áreas de práctica del Estudio Jurídico Casanegra: derecho inmobiliario, administrativo, ambiental, urbanístico, minero, migratorio, ciudadanías, tributario, societario, concursal, penal, del consumo y lealtad comercial en Córdoba." />
        <link rel="canonical" href="https://estudiocasanegra.com/areas" />
        
        <meta property="og:title" content="Áreas de Práctica | Estudio Jurídico Casanegra" />
        <meta property="og:description" content="Áreas de práctica del Estudio Jurídico Casanegra: derecho inmobiliario, administrativo, ambiental, urbanístico, minero, migratorio, ciudadanías, tributario, societario, concursal, penal, del consumo y lealtad comercial en Córdoba." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1558052643-9a9e9ea8e50a?q=80&w=2000&auto=format&fit=crop" />
        <meta property="og:url" content="https://estudiocasanegra.com/areas" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Estudio Jurídico Casanegra & Asociados" />
        <meta property="og:locale" content="es_AR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Áreas de Práctica | Estudio Jurídico Casanegra" />
        <meta name="twitter:description" content="Áreas de práctica del Estudio Jurídico Casanegra: derecho inmobiliario, administrativo, ambiental, urbanístico, minero, migratorio, ciudadanías, tributario, societario, concursal, penal, del consumo y lealtad comercial en Córdoba." />
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
                  <div
                    className={`h-full bg-card border ${area.borderAccent} p-8 rounded-3xl card-premium flex flex-col relative overflow-hidden group`}
                    style={{ borderTopWidth: '4px', borderTopColor: area.color }}
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 ${area.cornerBg} rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150`} />
                    
                    <div className={`w-14 h-14 rounded-2xl ${area.iconBg} ${area.iconText} ${area.hoverBg} flex items-center justify-center mb-6 group-hover:text-white transition-colors duration-300`}>
                      <area.icon className="w-7 h-7" />
                    </div>
                    
                    <h2 className={`text-2xl font-serif text-foreground mb-4 ${area.titleHover} transition-colors`}>{area.title}</h2>
                    <p className="text-muted-foreground leading-relaxed flex-grow font-light">
                      {area.description}
                    </p>

                    {area.link && (
                      <Link
                        to={area.link}
                        className={`inline-flex items-center text-sm font-medium ${area.iconText} hover:opacity-80 transition-opacity mt-6 pt-4 border-t border-border/40`}
                      >
                        Conocer más sobre el área
                        <ArrowRight className="ml-1.5 w-4 h-4" />
                      </Link>
                    )}
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