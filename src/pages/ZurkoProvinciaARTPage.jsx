    import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';

const articleUrl =
  'https://estudiocasanegra.com/articulos/zurko-provincia-art-regulacion-honorarios';
const judgmentUrl =
  'https://drive.google.com/file/d/1gW2Kqr244dprGxeU5-oJo6iDsopEfjjI/view?usp=sharing';
const articleTitle =
  'Zurko c/ Provincia ART: honorarios por actuación ante comisiones médicas';
const articleDescription =
  'Reseña del fallo de la Cámara de Apelaciones en lo Civil y Comercial de Córdoba sobre regulación de honorarios por actuación ante comisiones médicas, inoficiosidad de la tarea y alcance del artículo 112.';

function ZurkoProvinciaARTPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: articleTitle,
    description: articleDescription,
    datePublished: '2021-05-14',
    author: {
      '@type': 'Organization',
      name: 'Estudio Jurídico Casanegra & Asociados'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Estudio Jurídico Casanegra & Asociados'
    },
    mainEntityOfPage: articleUrl,
    citation: judgmentUrl
  };

  return (
    <>
      <Helmet>
        <title>{articleTitle} | Estudio Casanegra</title>
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
        <meta property="article:published_time" content="2021-05-14" />
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
              Derecho laboral · Riesgos del trabajo · Honorarios
            </p>

            <h1 className="text-primary font-serif text-3xl md:text-5xl mb-6">
              {articleTitle}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
              Sentencia de la Cámara Octava de Apelaciones en lo Civil y
              Comercial de Córdoba en “Zurko, Mayra Janet y otro c/ Provincia
              ART S.A. – Abreviado – Regulación de honorarios”.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mt-6">
              <span>
                <strong className="text-primary">Tribunal:</strong> Cámara
                Octava de Apelaciones en lo Civil y Comercial de Córdoba
              </span>
              <span>
                <strong className="text-primary">Sentencia:</strong> N.º 77
              </span>
              <span>
                <strong className="text-primary">Fecha:</strong> 14 de mayo de
                2021
              </span>
              <span>
                <strong className="text-primary">Expediente:</strong> 8507526
              </span>
            </div>
          </div>
        </section>

        <article className="py-12 md:py-16">
          <div className="container-custom max-w-4xl">
            <div className="space-y-8 text-foreground leading-relaxed text-base md:text-lg">
              <section>
                <h2 className="font-serif text-primary text-2xl md:text-3xl mb-4">
                  El caso
                </h2>
                <p>
                  El expediente trata la regulación de honorarios profesionales
                  vinculados con actuaciones ante comisiones médicas en el
                  marco de un reclamo por riesgos del trabajo contra Provincia
                  ART S.A. La decisión fue dictada en un proceso abreviado por
                  la Cámara Octava de Apelaciones en lo Civil y Comercial de
                  Córdoba.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-primary text-2xl md:text-3xl mb-4">
                  Cuestiones jurídicas destacadas
                </h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    La regulación de honorarios por la labor profesional
                    desarrollada ante las comisiones médicas.
                  </li>
                  <li>
                    El análisis de la utilidad o inoficiosidad de las tareas
                    realizadas para el resultado del trámite.
                  </li>
                  <li>
                    El alcance del artículo 112 del Código Arancelario
                    provincial y la cuestión de si esa norma comprende la
                    determinación de otros conceptos.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-primary text-2xl md:text-3xl mb-4">
                  Alcance de esta reseña
                </h2>
                <p>
                  Esta página identifica el expediente, el tribunal y los
                  temas principales de la sentencia aportada. Para conocer los
                  fundamentos completos y el alcance concreto de lo resuelto,
                  consultá el texto íntegro del fallo.
                </p>
              </section>
            </div>

            <div className="mt-12 rounded-2xl border border-border/50 bg-muted p-6 md:p-8">
              <h2 className="font-serif text-primary text-2xl mb-3">
                Sentencia completa
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Consultá o descargá la Sentencia N.º 77 dictada en “Zurko c/
                Provincia ART”.
              </p>
              <a
                href={judgmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Download className="w-4 h-4" />
                Abrir sentencia en PDF
              </a>
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

export default ZurkoProvinciaARTPage;