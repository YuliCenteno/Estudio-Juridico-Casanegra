import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, ArrowRight, ExternalLink, Gavel, Scale } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function DefensaConsumidorPage() {
  const driveUrl = "https://drive.google.com/file/d/10Mv51lVBB9Y4r_zMgk3OB7WD7Er7INmU/view?usp=sharing";

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
        <meta property="og:image" content="https://res.cloudinary.com/crwsvgt8/image/upload/v1787164743/photo-1558052643-9a9e9ea8e50a.avif" />
        <meta property="og:url" content="https://estudiocasanegra.com/defensa-del-consumidor" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Estudio Jurídico Casanegra & Asociados" />
        <meta property="og:locale" content="es_AR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abogados de Defensa del Consumidor | Estudio Jurídico Casanegra" />
        <meta name="twitter:description" content="Protección jurídica para consumidores y usuarios ante abusos comerciales y contractuales." />
        <meta name="twitter:image" content="https://res.cloudinary.com/crwsvgt8/image/upload/v1787164743/photo-1558052643-9a9e9ea8e50a.avif" />
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

            {/* SECCIÓN DESTACADA: CASO DE ÉXITO / JURISPRUDENCIA */}
            <div className="p-6 md:p-8 bg-card border border-emerald-500/30 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl shrink-0">
                  <Gavel className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full inline-block mb-3">
                    Antecedente Judicial / Caso de Éxito
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2 font-sans">
                    Fallo Favorable por Incumplimiento Contractual y Daños en Servicio Turístico
                  </h3>
                  <p className="text-sm text-slate-300 mb-4 font-normal leading-relaxed">
                    El Estudio Jurídico Casanegra obtuvo sentencia condenatoria (Sentencia N° 192) dictada por el Juzgado de 1ª Instancia Civil y Comercial de 1º Nominación de la Ciudad de Córdoba en la causa <em>"CASANEGRA C/ LUXURY TRAVEL CORP S.R.L."</em>, resolviendo la resolución del contrato con indemnización económica y costas a cargo de la empresa demandada[cite: 4].
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono bg-muted/50 p-2.5 rounded-lg border border-border/50">
                    <Scale className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Publicado en el Boletín Oficial de CABA (Boletín N° 7253)[cite: 4]</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta del Enlace Informativo */}
            <div className="p-6 bg-card border border-border/70 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sky-500/10 text-sky-400 border border-sky-500/20 rounded-xl shrink-0">
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