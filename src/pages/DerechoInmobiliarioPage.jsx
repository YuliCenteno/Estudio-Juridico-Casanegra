import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FileCheck2,
  Landmark,
  Building2,
  Scale,
  ShieldAlert,
  KeyRound,
  Trees,
  Gavel,
  Briefcase,
  Users,
  Wallet,
  HardHat,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const HERO_IMAGE_URL = 'https://res.cloudinary.com/crwsvgt8/image/upload/v1795641092/images.jpg';

function DerechoInmobiliarioPage() {
  const regimenInmuebles = [
    {
      icon: FileCheck2,
      title: 'Compraventa',
      desc: 'Estructuración, revisión y acompañamiento legal en operaciones de compraventa de inmuebles y boletos.'
    },
    {
      icon: Landmark,
      title: 'Fideicomisos',
      desc: 'Constitución, seguimiento y resguardo jurídico en fideicomisos inmobiliarios y de desarrollo.'
    },
    {
      icon: Building2,
      title: 'Consorcios',
      desc: 'Asesoramiento normativo, reglamentos de propiedad horizontal y resolución de conflictos consorciales.'
    },
    {
      icon: Scale,
      title: 'Acciones reales',
      desc: 'Defensa y promoción de acciones reales para la tutela y recuperación del derecho real sobre el inmueble.'
    },
    {
      icon: ShieldAlert,
      title: 'Acciones posesorias',
      desc: 'Intervención judicial y extrajudicial ante turbaciones, despojos o conflictos sobre la posesión.'
    },
    {
      icon: KeyRound,
      title: 'Usucapión',
      desc: 'Tramitación y patrocinio letrado en procesos de adquisición del dominio por prescripción adquisitiva.'
    },
    {
      icon: Trees,
      title: 'Restricciones ambientales y administrativas',
      desc: 'Análisis de límites dominiales, afectaciones urbanísticas, normativas ambientales y habilitaciones.'
    },
    {
      icon: Gavel,
      title: 'Expropiaciones',
      desc: 'Asesoramiento y defensa de derechos patrimoniales en procedimientos expropiatorios públicos.'
    }
  ];

  const urbanizacionesBarrios = [
    {
      icon: Building2,
      title: 'Consorcios',
      desc: 'Marco jurídico, administración y funcionamiento de consorcios en conjuntos inmobiliarios y barrios cerrados.'
    },
    {
      icon: Briefcase,
      title: 'Sociedades anónimas',
      desc: 'Estructuración societaria y gobierno corporativo vinculada a desarrollos y urbanizaciones.'
    },
    {
      icon: Landmark,
      title: 'Fideicomisos',
      desc: 'Vehículos fiduciarios para la ejecución, administración y comercialización de emprendimientos.'
    },
    {
      icon: Users,
      title: 'Asambleas',
      desc: 'Convocatorias, quórum, mayorías, impugnación de decisiones y actas asamblearias.'
    },
    {
      icon: Wallet,
      title: 'Cobranzas',
      desc: 'Gestión extrajudicial y reclamo judicial de expensas, aportes y créditos devengados.'
    },
    {
      icon: HardHat,
      title: 'Asuntos laborales',
      desc: 'Prevención de contingencias, encuadre de personal y asesoramiento laboral en el ámbito de la urbanización.'
    }
  ];

  const faqs = [
    {
      q: '¿Qué abarca el asesoramiento en régimen jurídico de los inmuebles?',
      a: 'Comprende operaciones de compraventa, fideicomisos, consorcios, acciones reales y posesorias, usucapión, restricciones ambientales y administrativas, y expropiaciones.'
    },
    {
      q: '¿Qué servicios ofrecen para urbanizaciones y barrios cerrados?',
      a: 'Brindamos asesoramiento en consorcios, sociedades anónimas, fideicomisos, organización e impugnación de asambleas, gestión de cobranzas y asuntos laborales.'
    },
    {
      q: '¿Cómo iniciar una consulta por un caso inmobiliario o de barrio cerrado en Córdoba?',
      a: 'Podés comunicarte a través de la sección de contacto o por WhatsApp para coordinar una evaluación inicial con el equipo del estudio.'
    }
  ];

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        name: 'Derecho Inmobiliario - Estudio Jurídico Casanegra & Asociados',
        description:
          'Asesoramiento jurídico en Derecho Inmobiliario en Córdoba: régimen jurídico de los inmuebles y urbanizaciones y barrios cerrados.',
        url: 'https://estudiocasanegra.com/derecho-inmobiliario',
        areaServed: {
          '@type': 'City',
          name: 'Córdoba'
        },
        provider: {
          '@type': 'LegalService',
          name: 'Estudio Jurídico Casanegra & Asociados',
          url: 'https://estudiocasanegra.com'
        }
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Derecho Inmobiliario en Córdoba | Estudio Jurídico Casanegra & Asociados</title>
        <meta
          name="description"
          content="Derecho Inmobiliario en Córdoba: régimen jurídico de los inmuebles (compraventa, fideicomisos, consorcios, acciones reales y posesorias, usucapión, restricciones ambientales y administrativas, expropiaciones) y urbanizaciones y barrios cerrados."
        />
        <link rel="canonical" href="https://estudiocasanegra.com/derecho-inmobiliario" />

        <meta property="og:title" content="Derecho Inmobiliario en Córdoba | Estudio Jurídico Casanegra & Asociados" />
        <meta
          property="og:description"
          content="Asesoramiento integral en régimen jurídico de los inmuebles y en urbanizaciones y barrios cerrados en Córdoba."
        />
        <meta property="og:image" content={HERO_IMAGE_URL} />
        <meta property="og:url" content="https://estudiocasanegra.com/derecho-inmobiliario" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Estudio Jurídico Casanegra & Asociados" />
        <meta property="og:locale" content="es_AR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Derecho Inmobiliario en Córdoba | Estudio Jurídico Casanegra & Asociados" />
        <meta
          name="twitter:description"
          content="Asesoramiento integral en régimen jurídico de los inmuebles y en urbanizaciones y barrios cerrados en Córdoba."
        />
        <meta name="twitter:image" content={HERO_IMAGE_URL} />

        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main>
        {/* Hero con imagen de fondo */}
        <section className="relative pt-36 md:pt-44 pb-20 bg-slate-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={HERO_IMAGE_URL}
              alt="Derecho Inmobiliario - Estudio Jurídico Casanegra & Asociados"
              className="w-full h-full object-cover object-center opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/50" />
          </div>

          <div className="container-custom max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-white/10 text-slate-200 font-medium text-xs tracking-widest uppercase mb-6 border border-white/15">
                Casanegra &amp; Asociados · Estudio Jurídico · Córdoba
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-white mb-6">
                Derecho Inmobiliario
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl font-light mb-8">
                Asesoramiento jurídico especializado en el régimen jurídico de los inmuebles y en la gestión legal de urbanizaciones y barrios cerrados.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contacto"
                  className="inline-flex items-center px-6 py-3.5 rounded-full bg-white text-slate-950 font-medium hover:bg-slate-100 transition-colors"
                >
                  Consultar por un caso
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  to="/areas"
                  className="inline-flex items-center px-6 py-3.5 rounded-full border border-white/25 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  Ver todas las áreas
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Dos Bloques Principales */}
        <section className="section-spacing bg-background">
          <div className="container-custom max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Bloque 1: Régimen jurídico de los inmuebles */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm"
              >
                <div className="border-b-2 border-primary pb-4 mb-8">
                  <h2 className="text-2xl md:text-3xl font-serif text-primary">
                    Régimen jurídico de los inmuebles
                  </h2>
                </div>

                <ul className="space-y-5">
                  {regimenInmuebles.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-foreground font-semibold text-base mb-0.5">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed font-light">
                            {item.desc}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>

              {/* Bloque 2: Urbanizaciones y barrios cerrados */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm"
              >
                <div className="border-b-2 border-primary pb-4 mb-8">
                  <h2 className="text-2xl md:text-3xl font-serif text-primary">
                    Urbanizaciones y barrios cerrados
                  </h2>
                </div>

                <ul className="space-y-5">
                  {urbanizacionesBarrios.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-foreground font-semibold text-base mb-0.5">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed font-light">
                            {item.desc}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Preguntas Frecuentes (GEO / LLMO) */}
        <section className="section-spacing bg-muted/30 border-t border-border/50">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-serif text-primary text-center mb-10">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-card border border-border rounded-2xl p-6 transition-all"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-medium text-foreground text-base md:text-lg">
                    <span>{faq.q}</span>
                    <ChevronDown className="w-5 h-5 text-primary shrink-0 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed font-light text-sm md:text-base">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default DerechoInmobiliarioPage;