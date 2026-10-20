import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, ExternalLink, BookOpen, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function FalloAlianzaFrenteCivicoPage() {
  // Enlace sugerido para visualizar o descargar el Boletín Oficial de la Biblioteca del Congreso
  const driveUrl = "https://drive.google.com/file/d/13b27PyglgJCe4wVb8-sJDIDUtTHgwqxG/view?usp=sharing";

  return (
    <>
      <Helmet>
        <title>El fallo «Alianza Frente Cívico»: Doctrina del Dr. Francisco Casanegra | Estudio Jurídico Casanegra</title>
        <meta
          name="description"
          content="Análisis de doctrina del Dr. Francisco Casanegra sobre la resolución del TSJ de Córdoba en materia de escrutinio, procesos electorales e instituciones democráticas."
        />
        <link rel="canonical" href="https://estudiocasanegra.com/articulos/fallo-alianza-frente-civico-instituciones-democraticas" />
        <meta property="og:title" content="El fallo «Alianza Frente Cívico»: Doctrina del Dr. Francisco Casanegra" />
        <meta property="og:description" content="Análisis doctrinario del fallo del Tribunal Superior de Justicia de Córdoba publicado en el Boletín de Novedades Legislativas de la Biblioteca del Congreso de la Nación." />
        <meta property="og:image" content="https://res.cloudinary.com/crwsvgt8/image/upload/v1787164743/photo-1558052643-9a9e9ea8e50a.avif" />
        <meta property="og:url" content="https://estudiocasanegra.com/articulos/fallo-alianza-frente-civico-instituciones-democraticas" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Estudio Jurídico Casanegra & Asociados" />
        <meta property="og:locale" content="es_AR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="El fallo «Alianza Frente Cívico»: Doctrina del Dr. Francisco Casanegra" />
        <meta name="twitter:description" content="Análisis de doctrina del Dr. Francisco Casanegra sobre la resolución del TSJ de Córdoba en materia de escrutinio, procesos electorales e instituciones democráticas." />
        <meta name="twitter:image" content="https://res.cloudinary.com/crwsvgt8/image/upload/v1787164743/photo-1558052643-9a9e9ea8e50a.avif" />
      </Helmet>

      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-muted/30">
        <div className="container-custom max-w-4xl">
          <Link
            to="/articulos"
            className="inline-flex items-center text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Artículos y Publicaciones
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider bg-sky-500/20 text-sky-200 border border-sky-400/30 px-3.5 py-1.5 rounded-full">
                Doctrina · Derecho Electoral
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-card px-3 py-1.5 rounded-full border border-border/50">
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                <span>18 Octubre 2007</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight font-sans mb-6 leading-tight">
              El fallo «Alianza Frente Cívico»: Una decisión fundamental para garantizar el buen funcionamiento de las instituciones democráticas
            </h1>

            <div className="flex items-center gap-3 pt-4 border-t border-border/60">
              <div className="p-2 bg-sky-500/10 text-sky-400 rounded-full border border-sky-500/20">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground font-sans">Por el Dr. Francisco J. Casanegra</p>
                <p className="text-xs text-slate-300">Publicado en La Ley Córdoba / Referenciado por la Biblioteca del Congreso de la Nación</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-spacing bg-background">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8 text-foreground leading-relaxed font-normal text-base md:text-lg">
            
            {/* Destacado de Citación Bibliográfica */}
            <div className="p-6 bg-card border border-sky-500/30 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sky-500/10 text-sky-400 border border-sky-500/20 rounded-xl shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-foreground mb-2 font-sans">
                    Reseña y Referencia Institucional
                  </h2>
                  <p className="text-sm text-slate-300 mb-3 leading-relaxed font-normal">
                    Este artículo de doctrina analiza el fallo recaído en los autos <em>"TS Córdoba, 18/9/07 - M.E.F. y otro (APS. Alianza Frente Cívico) s/ Impugnación de escrutinio provisorio"</em>. La nota de autoría del Dr. Francisco J. Casanegra fue seleccionada e incluida en la revista <strong>La Ley Córdoba</strong> y sistematizada en la publicación de <strong>Novedades Legislativas de la Biblioteca del Congreso de la Nación (Año 9 Nº 5)</strong>.
                  </p>
                  <a
                    href={driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    Ver documento / boletín de la Biblioteca del Congreso
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Síntesis doctrinaria */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 font-sans">
                Escrutinio Definitivo y Certeza Institucional
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                En el marco de la impugnación del cómputo de votos provisorio en las elecciones provinciales de Córdoba, la resolución adoptada por el Tribunal Superior de Justicia sentó un precedente clave sobre la validez de las actas de escrutinio confeccionadas por las autoridades de mesa frente al pedido de apertura generalizada de urnas.
              </p>
              <p className="text-slate-300 leading-relaxed">
                El análisis doctrinario aborda el equilibrio indispensable entre las garantías constitucionales de los partidos políticos y la estabilidad de los procesos electorales, preservando la plena seguridad jurídica y la fe pública asignada al procedimiento de escrutinio definitivo.
              </p>
            </div>

            {/* Puntos clave */}
            <div className="p-6 bg-card border border-border/70 rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-4 font-sans flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-sky-400" />
                Aspectos Doctrinarios Centrales:
              </h3>
              <ul className="space-y-3 text-slate-300 font-normal text-sm md:text-base">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                  <span><strong>Valor probatorio de las actas:</strong> Presunción de legitimidad y validez del trabajo realizado por los presidentes de mesa.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                  <span><strong>Criterios de apertura de urnas:</strong> Carácter restrictivo y excepcional del recuento de sufragios a urna abierta para evitar dilaciones institucionales.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                  <span><strong>Garantías democráticas:</strong> Preservación de la soberanía popular expresada en las urnas y orden institucional del estado de derecho.</span>
                </li>
              </ul>
            </div>

            {/* Botón de retorno */}
            <div className="pt-8 border-t border-border/60">
              <Link
                to="/articulos"
                className="inline-flex items-center text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver a la lista de artículos
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default FalloAlianzaFrenteCivicoPage;