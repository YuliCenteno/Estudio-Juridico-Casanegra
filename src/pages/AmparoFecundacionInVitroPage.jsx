import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';

const articleUrl =
  'https://estudiocasanegra.com/articulos/amparo-cobertura-fecundacion-in-vitro';
const originalArticleUrl =
  'https://www.lanacion.com.ar/sociedad/amparo-para-que-una-obra-social-cubra-una-fecundacion-in-vitro-nid1129601/';
const articleTitle =
  'Amparo para que una obra social cubra una fecundación in vitro';
const articleDescription =
  'Nota sobre un amparo presentado en Córdoba para solicitar la cobertura de un tratamiento de fecundación in vitro ante un cuadro de endometriosis severa. Publicada por LA NACIÓN el 18 de mayo de 2009.';

function AmparoFecundacionInVitroPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: articleTitle,
    description: articleDescription,
    datePublished: '2009-05-18T19:12:00-03:00',
    dateModified: '2020-06-08',
    citation: originalArticleUrl,
    publisher: {
      '@type': 'Organization',
      name: 'LA NACIÓN'
    },
    mainEntityOfPage: articleUrl
  };

  return (
    <>
      <Helmet>
        <title>{articleTitle} | Nota de LA NACIÓN</title>
        <meta name="description" content={articleDescription} />
        <link rel="canonical" href={articleUrl} />
        <meta property="og:title" content={articleTitle} />
        <meta property="og:description" content={articleDescription} />
        <meta property="og:image" content="https://res.cloudinary.com/crwsvgt8/image/upload/v1787164743/photo-1558052643-9a9e9ea8e50a.avif" />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        <meta
          property="og:site_name"
          content="Estudio Jurídico Casanegra & Asociados"
        />
        <meta
          property="article:published_time"
          content="2009-05-18T19:12:00-03:00"
        />
        <meta property="article:modified_time" content="2020-06-08" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={articleTitle} />
        <meta name="twitter:description" content={articleDescription} />
        <meta name="twitter:image" content="https://res.cloudinary.com/crwsvgt8/image/upload/v1787164743/photo-1558052643-9a9e9ea8e50a.avif" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="min-h-screen bg-card">
        <section className="pt-32 md:pt-40 pb-14 bg-muted">
          <div className="container-custom max-w-5xl">
            <Link
              to="/articulos"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a artículos
            </Link>

            <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-4">
              Publicación periodística · Córdoba
            </p>

            <h1 className="text-primary font-serif text-3xl md:text-5xl mb-5">
              {articleTitle}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Se trata de una mujer cordobesa que con ese recurso podrá
              detener una enfermedad.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span>
                <strong className="text-primary">Medio:</strong> LA NACIÓN
              </span>
              <span>
                <strong className="text-primary">Publicado:</strong> 18 de mayo
                de 2009, 19:12
              </span>
              <span>
                <strong className="text-primary">Actualizado:</strong> 8 de
                junio de 2020
              </span>
            </div>
          </div>
        </section>

        <article className="py-12 md:py-16">
          <div className="container-custom max-w-4xl">
            <div className="space-y-6 text-foreground leading-relaxed text-base md:text-lg">
              <p>
                CORDOBA.- Una mujer, que padece una endometriosis severa que le
                causa infertilidad, recurrió a la Justicia requiriendo que la
                obra social a la que está adherida le cubra un tratamiento de
                fecundación in vitro.
              </p>

              <p>
                La razón fundamental es que los facultativos que la atienden
                consideran que un embarazo mejoraría o frenaría la enfermedad.
              </p>

              <p>
                La presentación fue promovida por Susana Bergoglio, de 33 años,
                acompañada por su esposo, Alfredo Ortiz, de 36, residentes en
                la ciudad de Villa Dolores. La mujer está afiliada a OSPE, la
                Obra Social de Petroleros.
              </p>

              <p>
                El recurso de amparo fue interpuesto porque la prestadora de
                salud le negó la cobertura total de los costos de un
                tratamiento de fertilización in vitro. Se respaldó en que esa
                práctica no está incluida en el Programa Médico Obligatorio de
                la obra social, la cual sí incluye el tratamiento de la
                endometriosis a través de procedimientos quirúrgicos o
                farmacológicos.
              </p>

              <p>
                OSPE respondió también que no existe respaldo científico a la
                afirmación de que el embarazo cure o mejore la enfermedad y
                que, en todo caso, es una opinión del profesional que asiste a
                la mujer.
              </p>

              <p>
                El médico de Bergoglio, Andrés Juárez Villanueva, opinó que
                “la paciente agotó todas las instancias posibles” para superar
                su imposibilidad de quedar embarazada y revertir el problema
                que padece. Por ejemplo, se le realizaron dos cirugías por
                videolaparoscopía y dos ciclos de inseminación intrauterina,
                con resultados infructuosos.
              </p>

              <p>
                Juárez Villanueva entiende que “categóricamente” para el caso
                se recomienda “una fecundación in vitro como tratamiento para
                su infertilidad” a efectos de hacer retroceder la enfermedad,
                puesto que “el embarazo produce progesterona, la cual provoca
                una involución de la endometriosis”.
              </p>

              <p>
                A su vez, los abogados que la patrocinan, Maximiliano Machuca
                y Francisco Casanegra, en el pedido de amparo presentado a
                fines de abril ante uno de los juzgados federales con sede en
                esta capital sostienen que la obra social viola los derechos a
                la salud y a la procreación contemplados en la Constitución
                Nacional, en numerosos tratados internacionales y en la Ley de
                Salud Reproductiva. Dijeron que el Programa Médico Obligatorio
                no debe vulnerarlos.
              </p>

              <p>
                Susana compara su caso a los de la obesidad, “que —apuntó—
                hasta que no fue ley nadie se quería hacer cargo de las
                cirugías”.
              </p>

              <p>
                Interpreta que el rechazo de OSPE resulta de ceñirse a sus
                prestaciones básicas, que se remiten a considerar que “la
                intervención in vitro antes era sólo para quedar embarazada,
                pero no para enfrentar una enfermedad” y también por el costo
                de los tratamientos. El que ella solicita se sitúa en los
                17.000 pesos.
              </p>

              <p>
                A la mujer le diagnosticaron endometriosis en el año 2000, uno
                después de que contrajera matrimonio con Alfredo. Se estima que
                es un problema subdiagnosticado que afecta a numerosas mujeres.
                El endometrio es un tejido que recubre el útero que se ubica
                fuera de su lugar normal.
              </p>

              <p>
                El problema causó conflictos en el matrimonio. Confiesan que
                luego de todos los intentos ensayados y fracasados, se
                inscribieron para adoptar. Hoy son padres adoptivos de una
                niña de 4 años, llamada Angeles. Y coinciden en afirmar que la
                pequeña salvó a la pareja.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Fuente original: LA NACIÓN. Los abogados mencionados en la
                  nota son Maximiliano Machuca y Francisco Casanegra.
                </p>
                <a
                  href={originalArticleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                >
                  Ver publicación en LA NACIÓN
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </article>

        <section className="pb-16">
          <div className="container-custom max-w-4xl">
            <Link
              to="/articulos"
              className="inline-flex items-center gap-2 text-primary hover:opacity-70 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a todos los artículos
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AmparoFecundacionInVitroPage;