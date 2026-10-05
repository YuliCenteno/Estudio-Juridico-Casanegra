import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Users,
  Wallet,
  FileSearch,
  Landmark,
  Scale,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';

const EVALUATION_CRITERIA = [
  {
    icon: FileSearch,
    title: 'Identidad',
    text: 'Verificación de la identidad del solicitante.'
  },
  {
    icon: Wallet,
    title: 'Origen de los fondos',
    text: 'Análisis del origen y la legalidad de los fondos.'
  },
  {
    icon: Scale,
    title: 'Situación patrimonial',
    text: 'Evaluación de la situación financiera y patrimonial.'
  },
  {
    icon: ShieldCheck,
    title: 'Riesgo jurisdiccional',
    text: 'Análisis de la jurisdicción de procedencia.'
  },
  {
    icon: FileSearch,
    title: 'Antecedentes',
    text: 'Evaluación de antecedentes criminales y reputacionales.'
  },
  {
    icon: Users,
    title: 'Historial migratorio',
    text: 'Consideración de la trayectoria migratoria del solicitante.'
  }
];

function CiudadaniaInversionPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Estudio Jurídico Casanegra & Asociados',
    url: 'https://estudiocasanegra.com/ciudadania-argentina-por-inversion',
    areaServed: {
      '@type': 'City',
      name: 'Córdoba',
      containedInPlace: {
        '@type': 'Country',
        name: 'Argentina'
      }
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'José Gigena 2058, Cerro de las Rosas',
      addressLocality: 'Córdoba',
      addressCountry: 'AR'
    },
    serviceType: 'Asesoramiento jurídico sobre ciudadanía argentina por inversión'
  };

  return (
    <>
      <Helmet>
        <title>Ciudadanía por Inversión en Córdoba | Estudio Casanegra</title>

        <meta
          name="description"
          content="Asesoramiento jurídico en Córdoba sobre ciudadanía argentina por inversión: modalidades, requisitos, evaluación de fondos y preparación del trámite."
        />

        <link
          rel="canonical"
          href="https://estudiocasanegra.com/ciudadania-argentina-por-inversion"
        />

        <meta
          property="og:title"
          content="Ciudadanía por Inversión en Córdoba | Estudio Casanegra"
        />

        <meta
          property="og:description"
          content="Asesoramiento jurídico en Córdoba sobre ciudadanía argentina por inversión: modalidades, requisitos, evaluación de fondos y preparación del trámite."
        />

        <meta
          property="og:url"
          content="https://estudiocasanegra.com/ciudadania-argentina-por-inversion"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:site_name"
          content="Estudio Jurídico Casanegra & Asociados"
        />

        <meta property="og:locale" content="es_AR" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Ciudadanía por Inversión en Córdoba | Estudio Casanegra"
        />
        <meta
          name="twitter:description"
          content="Asesoramiento jurídico en Córdoba sobre ciudadanía argentina por inversión: modalidades, requisitos, evaluación de fondos y preparación del trámite."
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main>
        {/* HERO */}
        <section className="relative flex items-center overflow-hidden bg-muted py-24 md:min-h-[420px] md:py-28">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto text-center"
            >
              <span className="inline-block py-1.5 px-5 rounded-full bg-secondary/20 text-primary font-medium text-xs md:text-sm tracking-[0.2em] uppercase mb-6 border border-border/60">
                Programa de Ciudadanía por Inversión
              </span>

              <h1 className="text-primary font-serif mb-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Ciudadanía Argentina{' '}
                <br className="hidden sm:block" />
                por Inversión en Córdoba
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
                Asesoramiento jurídico en Córdoba sobre el nuevo régimen de
                ciudadanía argentina mediante inversión, previsto para recibir
                solicitudes durante el último trimestre de 2026.
              </p>
            </motion.div>
          </div>
        </section>

        {/* INTRODUCCIÓN */}
        <section className="py-14 md:py-20 bg-card">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
                  Un nuevo esquema de ciudadanía
                </span>

                <h2 className="text-primary font-serif text-2xl md:text-3xl mt-4 mb-6">
                  Ciudadanía mediante inversión
                </h2>

                <div className="space-y-4 md:space-y-5 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Argentina contará con un{' '}
                    <strong className="text-primary">
                      Programa de Ciudadanía por Inversión
                    </strong>
                    , anunciado en París durante Argentina Week.
                  </p>

                  <p>
                    El programa contempla dos vías de inversión y está previsto
                    que comience a recibir solicitudes durante el cuarto
                    trimestre de 2026.
                  </p>

                  <p>
                    El acceso a la ciudadanía no se produce automáticamente
                    por realizar la inversión. Cada solicitud estará sujeta a
                    un proceso de evaluación que contempla, entre otros
                    aspectos, la identidad del solicitante, el origen y la
                    legalidad de los fondos y sus antecedentes.
                  </p>
                  <p>
                    Desde Córdoba, el Estudio Jurídico Casanegra brinda
                    orientación para analizar cada caso y preparar la
                    documentación jurídica, migratoria y patrimonial necesaria,
                    de acuerdo con la normativa que se encuentre vigente al
                    momento de iniciar el trámite.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MODALIDADES DE INVERSIÓN */}
        <section className="py-14 md:py-20 bg-muted">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
                Modalidades
              </span>

              <h2 className="text-primary font-serif text-2xl md:text-3xl mt-4 mb-4">
                Dos vías de inversión
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                El programa contempla dos alternativas de inversión para los
                solicitantes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* OPCIÓN 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex h-full flex-col bg-card border border-border/50 rounded-2xl p-8 md:p-10 shadow-sm"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-7">
                  <Wallet className="w-7 h-7 text-primary" />
                </div>

                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Primera modalidad
                </span>

                <h3 className="text-primary font-serif text-xl md:text-2xl mt-3 mb-5">
                  Aporte al Tesoro Nacional
                </h3>

                <div className="text-4xl md:text-5xl font-serif text-primary mb-6">
                  u$s350.000
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Consiste en una contribución no reembolsable de{' '}
                  <strong className="text-primary">u$s350.000</strong> al
                  Tesoro Nacional.
                </p>
              </motion.div>

              {/* OPCIÓN 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex h-full flex-col bg-card border border-border/50 rounded-2xl p-8 md:p-10 shadow-sm"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-7">
                  <Landmark className="w-7 h-7 text-primary" />
                </div>

                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Segunda modalidad
                </span>

                <h3 className="text-primary font-serif text-xl md:text-2xl mt-3 mb-5">
                  Título público
                </h3>

                <div className="text-4xl md:text-5xl font-serif text-primary mb-6">
                  u$s800.000
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Consiste en la adquisición de un título público de{' '}
                  <strong className="text-primary">u$s800.000</strong>,
                  emitido específicamente para este mecanismo.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAMILIA */}
        <section className="py-14 md:py-20 bg-card">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
              <div>
                <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
                  Extensión familiar
                </span>

                <h2 className="text-primary font-serif text-2xl md:text-3xl mt-4 mb-6">
                  Inclusión de familiares
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  El programa contempla aportes adicionales para determinados
                  familiares del solicitante principal.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-muted">
                  <Users className="w-6 h-6 text-primary mt-1 shrink-0" />

                  <div>
                    <h3 className="text-primary font-serif text-xl mb-1">
                      Cónyuge
                    </h3>

                    <p className="text-muted-foreground">
                      u$s100.000 por persona.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-muted">
                  <Users className="w-6 h-6 text-primary mt-1 shrink-0" />

                  <div>
                    <h3 className="text-primary font-serif text-xl mb-1">
                      Hijos de 18 a 25 años
                    </h3>

                    <p className="text-muted-foreground">
                      u$s100.000 por persona, siempre que sean solteros y no
                      tengan hijos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-muted">
                  <Users className="w-6 h-6 text-primary mt-1 shrink-0" />

                  <div>
                    <h3 className="text-primary font-serif text-xl mb-1">
                      Hijos menores de 18 años
                    </h3>

                    <p className="text-muted-foreground">
                      u$s25.000 por persona.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto mt-8">
              <div className="bg-muted border border-border/50 rounded-2xl p-7 md:p-9">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A modo de ejemplo, para un solicitante principal, su cónyuge
                  y dos hijos menores de edad, el aporte total sería de{' '}
                  <strong className="text-primary">
                    u$s500.000
                  </strong>
                  .
                </p>

                <p className="text-muted-foreground leading-relaxed mt-4">
                  La relación familiar deberá ser acreditada y deberá
                  efectuarse el aporte correspondiente para cada integrante.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EVALUACIÓN */}
        <section className="py-14 md:py-20 bg-muted">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
                Evaluación de los solicitantes
              </span>

              <h2 className="text-primary font-serif text-2xl md:text-3xl mt-4 mb-4">
                La inversión no implica aprobación automática
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                El pago de la inversión no determina por sí mismo la
                aprobación de la ciudadanía. Cada solicitud será sometida a
                una evaluación.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {EVALUATION_CRITERIA.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05
                    }}
                    className="h-full bg-card border border-border/50 rounded-xl p-6"
                  >
                    <Icon className="w-7 h-7 text-primary mb-5" />

                    <h3 className="text-primary font-serif text-xl mb-2">
                      {item.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ORGANISMOS */}
        <section className="py-14 md:py-20 bg-card">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
                Evaluación y decisión
              </span>

              <h2 className="text-primary font-serif text-2xl md:text-3xl mt-4 mb-6">
                Participación de organismos públicos
              </h2>

              <div className="space-y-4 md:space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  La evaluación estará encabezada por la{' '}
                  <strong className="text-primary">
                    Agencia de Programas de Ciudadanía por Inversión
                  </strong>
                  , con participación de la SIDE, la UIF y los ministerios de
                  Seguridad y del Interior.
                </p>

                <p>
                  Una vez realizada la evaluación, la Agencia recomendará a la{' '}
                  <strong className="text-primary">
                    Dirección Nacional de Migraciones
                  </strong>
                  , organismo que tendrá a su cargo la decisión de aprobar o
                  rechazar cada solicitud.
                </p>

                <p>
                  El esquema contempla controles vinculados con estándares de
                  la OCDE y del GAFI, junto con la verificación del origen de
                  los fondos y otros aspectos relacionados con la seguridad e
                  integridad del sistema financiero argentino.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ASESORAMIENTO */}
        <section className="py-14 md:py-20 bg-muted">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl bg-card p-8 md:p-12 shadow-sm border border-border/50">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

                <div className="relative z-10">
                  <span className="inline-block text-xs md:text-sm tracking-[0.2em] uppercase text-white/70 font-medium mb-4">
                    Asesoramiento jurídico
                  </span>

                  <h2 className="font-serif text-2xl md:text-3xl text-white mb-6">
                    Acompañamiento durante el proceso
                  </h2>

                  <p className="text-white/80 text-lg leading-relaxed max-w-3xl font-light mb-8">
                    El Programa de Ciudadanía por Inversión involucra aspectos
                    jurídicos, migratorios, patrimoniales y de acreditación de
                    fondos. Nuestro estudio brinda asesoramiento jurídico
                    especializado para analizar cada situación y acompañar al
                    solicitante en el marco de la normativa y reglamentación
                    aplicable.
                  </p>

                  <Link
                    to="/contacto"
                    className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#003566] text-white border-2 border-white hover:bg-[#00284e] hover:scale-105 active:scale-95 transition-all duration-200 font-medium shadow-md"
                  >
                    Consultar al estudio
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INFORMACIÓN Y FUENTE */}
        <section className="py-12 md:py-16 bg-card">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="border-t border-border/50 pt-10">
                <div className="flex items-start gap-4 mb-6">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 shrink-0" />

                  <div>
                    <h3 className="text-primary font-serif text-2xl mb-3">
                      Información sujeta a actualización
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      La información publicada se encuentra sujeta a la
                      normativa y reglamentación vigente al momento de iniciar
                      el trámite. El programa comenzará a recibir solicitudes
                      durante el último trimestre de 2026, por lo que sus
                      condiciones y procedimientos deberán ser considerados
                      conforme a la regulación aplicable en ese momento.
                    </p>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-border/50">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Fuente de referencia:{' '}
                    <a
                      href="https://www.iprofesional.com/politica/438075-el-gobierno-lanza-un-programa-de-ciudadania-argentina-con-inversiones-desde-us350000"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Fuente externa: iProfesional"
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      iProfesional
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default CiudadaniaInversionPage;