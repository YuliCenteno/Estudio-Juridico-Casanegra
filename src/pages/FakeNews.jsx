import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';

const articleUrl =
  'https://estudiocasanegra.com/articulos/fake-news-responsabilidad-medios-buscadores-redes';
const sourceUrl =
  'https://actualidadjuridicaonline.com/doctrina-fake-news-responsabilidad-de-medios-de-comunicacion-buscadores-y-redes-sociales-autor-francisco-casanegra/';
const articleTitle =
  'Fake news: responsabilidad de medios, buscadores y redes sociales';
const articleDescription =
  'Síntesis de la doctrina de Francisco Casanegra sobre fake news, identidad digital, derecho al honor y reputación, responsabilidad de medios, buscadores y redes sociales.';
const articleImage =
  'https://actualidadjuridicaonline.com/wp-content/uploads/2021/07/11-12-663x378.png';

function FakeNews() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: articleTitle,
    description: articleDescription,
    image: articleImage,
    datePublished: '2021-07-21',
    author: {
      '@type': 'Person',
      name: 'Francisco Casanegra'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Estudio Jurídico Casanegra & Asociados'
    },
    mainEntityOfPage: articleUrl,
    citation: sourceUrl
  };

  return (
    <>
      <Helmet>
        <title>{articleTitle} | Francisco Casanegra</title>
        <meta name="description" content={articleDescription} />
        <link rel="canonical" href={articleUrl} />
        <meta property="og:title" content={articleTitle} />
        <meta property="og:description" content={articleDescription} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:image" content={articleImage} />
        <meta property="og:type" content="article" />
        <meta
          property="og:site_name"
          content="Estudio Jurídico Casanegra & Asociados"
        />
        <meta property="article:published_time" content="2021-07-21" />
        <meta property="article:author" content="Francisco Casanegra" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={articleTitle} />
        <meta name="twitter:description" content={articleDescription} />
        <meta name="twitter:image" content={articleImage} />
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
              Doctrina · Nacionales · Noticias Jurídicas
            </p>

            <h1 className="text-primary font-serif text-3xl md:text-5xl mb-5">
              {articleTitle}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Identidad digital, derecho al honor y reputación frente a la
              difusión de información falsa en internet.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span>
                <strong className="text-primary">Autor:</strong> Francisco
                Casanegra
              </span>
              <span>
                <strong className="text-primary">Publicado:</strong> 21 de
                julio de 2021
              </span>
            </div>
          </div>
        </section>

        <section className="pt-10">
          <div className="container-custom max-w-5xl">
            <img
              src={articleImage}
              alt="Ilustración del artículo sobre fake news y responsabilidad en internet"
              className="w-full max-h-[500px] object-cover rounded-xl"
              loading="eager"
            />
            <p className="text-xs text-muted-foreground mt-3">
              Imagen de la publicación original en Actualidad Jurídica Online.
            </p>
          </div>
        </section>

        <article className="py-14 md:py-20">
          <div className="container-custom max-w-4xl">
            <div className="space-y-12 text-foreground leading-relaxed text-base md:text-lg">
              <section>
                <h2 className="font-serif text-primary text-2xl md:text-3xl mb-5">
                  Identidad digital, honor y reputación online
                </h2>
                <p>
                  El artículo analiza cómo las búsquedas, publicaciones,
                  comentarios, interacciones y otros rastros en internet
                  contribuyen a formar la identidad digital de una persona.
                  Esa presencia en línea puede repercutir en derechos
                  personalísimos como el honor, la imagen y la reputación.
                </p>
                <p className="mt-4">
                  La reputación online también tiene relevancia para empresas,
                  instituciones y marcas. La circulación de contenidos
                  perjudiciales puede afectar la percepción pública y producir
                  consecuencias más allá del entorno digital.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-primary text-2xl md:text-3xl mb-5">
                  Qué formas pueden adoptar las noticias falsas
                </h2>
                <p>
                  La publicación distingue distintas formas de desinformación:
                  contenidos fabricados, materiales genuinos manipulados,
                  suplantación de fuentes, presentaciones engañosas,
                  información verdadera difundida con un contexto falso, y
                  sátiras o parodias que pueden confundirse con hechos.
                </p>
                <p className="mt-4">
                  Entre los motivos para producirlas o difundirlas, el autor
                  señala la búsqueda de ingresos mediante visitas y
                  viralización, así como el propósito de perjudicar la imagen
                  de personas, organizaciones o empresas.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-primary text-2xl md:text-3xl mb-5">
                  Responsabilidad y solicitudes de eliminación
                </h2>
                <p>
                  El trabajo examina criterios judiciales argentinos sobre la
                  responsabilidad por publicaciones inexactas y por contenidos
                  dañosos en buscadores y redes sociales. Distingue el análisis
                  de la conducta de quien genera o publica la información del
                  rol de las plataformas que la indexan o permiten su difusión.
                </p>
                <p className="mt-4">
                  En relación con buscadores, se comenta el criterio de que no
                  existe una obligación general de monitorear anticipadamente
                  todos los contenidos en internet. El análisis de una posible
                  responsabilidad requiere atender a las circunstancias del
                  caso, como la notificación fehaciente de un pedido de
                  eliminación y la conducta posterior de la plataforma. El
                  artículo aborda, además, los supuestos de dolo o culpa en la
                  producción y difusión de información.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-primary text-2xl md:text-3xl mb-5">
                  Reputación política y empresarial
                </h2>
                <p>
                  Como ejemplos, la publicación reseña una medida judicial
                  relacionada con información falsa difundida sobre un
                  familiar de una figura política, y episodios de rumores
                  virales que afectaron a empresas y marcas. Los casos
                  ilustran cómo una afirmación sin sustento puede circular
                  rápidamente y dejar consecuencias reputacionales, incluso
                  cuando luego se desmiente.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-primary text-2xl md:text-3xl mb-5">
                  Herramientas para verificar información
                </h2>
                <p>
                  El artículo recomienda recurrir a fuentes oficiales y a
                  iniciativas de verificación de datos, y menciona recursos
                  informativos implementados durante la pandemia. La
                  publicación original desarrolla también una propuesta de
                  protocolo de actuación frente a las fake news.
                </p>
              </section>
            </div>

            <div className="mt-14 p-6 md:p-8 rounded-xl border border-border/50 bg-muted">
              <p className="text-muted-foreground leading-relaxed">
                Esta página presenta una síntesis editorial del artículo
                publicado en 2021. Los criterios jurídicos y las referencias
                deben leerse en el contexto de la fecha de publicación y
                verificarse frente a la normativa y jurisprudencia vigentes.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-3">
                Publicación original:
              </p>
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                Leer el artículo completo en Actualidad Jurídica Online
                <ExternalLink className="w-3.5 h-3.5" />
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

export default FakeNews;
