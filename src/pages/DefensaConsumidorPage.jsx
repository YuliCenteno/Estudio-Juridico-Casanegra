import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, ArrowRight, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function DefensaConsumidorPage() {
  const driveUrl = "https://share.google/lH1yaWCo5BCF3kaLb";

  return (
    <>
      <Helmet>
        <title>Abogados de Defensa del Consumidor | Estudio Jurídico Casanegra & Asociados</title>
        <meta
          name="description"
          content="Asesoramiento y patrocinio jurídico en defensa del consumidor y usuarios. Reclamos ante empresas, bancos, aseguradoras, prepagas y comercio electrónico."
        />
        <link rel="canonical" href="https://estudiocasanegra.com/defensa-del-consumidor" />
        <meta property="og:title" content="Abogados de Defensa del Consumidor | Estudio Jurídico Casanegra" />
        <meta property="og:description" content="Protección jurídica para consumidores y usuarios ante abusos comerciales y contractuales." />
        <meta property="og:url" content="https://estudiocasanegra.com/defensa-del-consumidor" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-xs font-semibold uppercase tracking-wider bg-sky-500/20 text-sky-200 border border-sky-400/30 px-3.5 py-1.5 rounded-full mb-6 inline-block">
              Área de Práctica
            </span>
            <h1 className="mb-6 font-sans text-foreground text-4xl md:text-5xl font-extrabold tracking-tight">
              Defensa del Consumidor y Usuarios
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-normal">
              Patrocinio legal y asesoramiento integral para la tutela efectiva de los derechos del consumidor frente a abusos, incumplimientos contractuales y prácticas desleales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-spacing bg-background">
        <div className="container-custom max-w-4xl">
          <div className="space-y-10 text-foreground leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-sans">
                Protección Jurídica ante Incumplimientos
              </h2>
              <p className="text-slate-300 text-base leading-relaxed font-normal">
                Representamos a particulares y colectivos frente a entidades bancarias, aseguradoras, empresas de medicina prepaga, desarrolladoras inmobiliarias, plataformas de e-commerce y proveedores de servicios.
              </p>
            </div>

            {/* Tarjeta del Enlace */}
            <div className="p-6 bg-card border border-border/70 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sky-500/10 text-sky-400 border border-sky-500/20 rounded-xl">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1.5 font-sans">
                    Documentación e Información Oficial
                  </h3>
                  <p className="text-sm text-slate-300 mb-4 font-normal">
                    Acceda al recurso explicativo y normativo del Estudio Jurídico Casanegra sobre reclamos en materia de consumo.
                  </p>
                  <a
                    href={driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    Ver documento informativo
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 font-sans">
                Principales Áreas de Intervención:
              </h3>
              <ul className="space-y-3 text-slate-300 font-normal">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                  <span>Reclamos por cobros indebidos, estafas bancarias o phishing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                  <span>Incumplimientos de garantías en la compra de vehículos o inmuebles.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                  <span>Cláusulas abusivas en contratos de adhesión y planes de ahorro.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                  <span>Falta de prestación de servicios de salud en medicina prepaga.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                  <span>Acciones colectivas y presentaciones ante autoridades administrativas.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default DefensaConsumidorPage;