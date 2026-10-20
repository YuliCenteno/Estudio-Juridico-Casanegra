
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';

function BambooDefiPage() {
  const articleUrl =
    'https://estudiocasanegra.com/articulos/bamboo-defi';
  const articleTitle =
    'Comentario al laudo arbitral «BAMBOO DEFI» | Francisco Casanegra';
  const articleDescription =
    'Doctrina de Francisco Casanegra sobre el laudo arbitral Bamboo DeFi, las finanzas descentralizadas, los tokens de gobernanza y la resolución de conflictos mediante arbitraje.';
  const articleImage =
    'https://actualidadjuridica.ar/wp-content/uploads/2022/02/7-8-663x378.png';
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Comentario al laudo arbitral «BAMBOO DEFI»',
    author: {
      '@type': 'Person',
      name: 'Francisco Casanegra'
    },
    datePublished: '2022-02-13',
    image: articleImage,
    mainEntityOfPage: articleUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Estudio Jurídico Casanegra & Asociados'
    }
  };

  return (
    <>
      <Helmet>
        <title>{articleTitle}</title>

        <meta
          name="description"
          content={articleDescription}
        />

        <link rel="canonical" href={articleUrl} />

        <meta property="og:title" content={articleTitle} />

        <meta property="og:description" content={articleDescription} />

        <meta property="og:url" content={articleUrl} />
        <meta property="og:image" content={articleImage} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Estudio Jurídico Casanegra & Asociados" />

        <meta property="article:published_time" content="2022-02-13" />
        <meta property="article:author" content="Francisco Casanegra" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={articleTitle} />
        <meta name="twitter:description" content={articleDescription} />
        <meta name="twitter:image" content={articleImage} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="min-h-screen bg-card">
        {/* ENCABEZADO */}
        <section className="pt-32 md:pt-40 pb-14 bg-muted">
          <div className="container-custom max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/articulos"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver a artículos
              </Link>

              <div className="flex flex-wrap gap-2 mb-5">
                {['Doctrina', 'Internacionales', 'Noticias Jurídicas'].map(
                  (category) => (
                    <span
                      key={category}
                      className="px-3 py-1 rounded-full border border-border/60 bg-secondary/20 text-primary text-xs tracking-wide"
                    >
                      {category}
                    </span>
                  )
                )}
              </div>

              <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-4">
                Doctrina
              </p>

              <h1 className="text-primary font-serif mb-6">
                Comentario al laudo arbitral «BAMBOO DEFI»
              </h1>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span>
                  <strong className="text-primary">Autor:</strong>{' '}
                  Francisco Casanegra
                </span>

                <span>
                  <strong className="text-primary">Publicado:</strong>{' '}
                  13 de febrero de 2022
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* IMAGEN DE PORTADA */}
        <section className="pt-10">
          <div className="container-custom max-w-5xl">
            <img
              src={articleImage}
              alt="Comentario al laudo arbitral Bamboo DeFi"
              className="w-full max-h-[500px] object-cover rounded-xl"
              loading="eager"
            />

            <p className="text-xs text-muted-foreground mt-3">
              Imagen de la publicación original en Actualidad Jurídica.
            </p>
          </div>
        </section>

        {/* CUERPO DEL ARTÍCULO */}
        <article className="py-14 md:py-20">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-primary text-3xl mb-8">
                1. Introducción
              </h2>

              <div className="space-y-6 text-white/90 leading-relaxed text-base md:text-lg">
                <p>
                  1. Con fecha 10 de noviembre de 2021 el Tribunal de Arbitraje
                  de la Blockchain Arbitration Society intervino por primera
                  vez dictando un laudo arbitral, que se tramitó de forma
                  abreviada y lleva el número 1/2021.
                </p>

                <p>
                  El laudo mencionado trata sobre Bamboo DeFi, referenciada
                  en el laudo como una DeFi liquidity mining.
                </p>

                <p>
                  DeFi es una abreviatura de Decentralized Finance, en español
                  Finanzas Descentralizadas, en adelante DeFi. Los protocolos
                  DeFi permiten la democratización de los sistemas financieros,
                  sin depender de terceros ni de intermediarios, reduciendo
                  así los costes y realizando operaciones directamente entre
                  usuarios.
                </p>

                <p>
                  Explican Caballero, Ramió y Carrera que las diferencias
                  entre FinTech, Open Finance y DeFi son: las DeFi son
                  descentralizadas de manera completa en todos y cada uno de
                  los procesos, incluso de gobernanza, funcionando sobre la
                  blockchain de Ethereum de manera digital mediante dApps;
                  las Open Finance funcionan sobre una blockchain de manera
                  digital, pero de forma centralizada mediante dApps; y, por
                  último, las FinTech no funcionan sobre la blockchain, sino
                  sobre internet, son también digitales y funcionan mediante
                  aplicaciones, pero sus procesos son totalmente centralizados.
                </p>

                <p>
                  La diferencia entre dApp y app es que las primeras funcionan
                  sobre la blockchain —internet 3.0 o internet del valor—,
                  mediante la utilización de smart contracts, mientras que las
                  segundas trabajan sobre la internet 2.0 o internet del
                  conocimiento.
                </p>

                <p>
                  2. El conflicto planteado gira en torno a las rewards o
                  recompensas que debe pagar Bamboo DeFi a quienes dejan
                  depositadas y bloqueadas sus criptomonedas para aportar
                  liquidez a este sistema descentralizado.
                </p>

                <p>
                  El árbitro que intervino en este laudo fue Oswaldo Torres
                  Hernández, quien es vocal del tribunal de arbitraje
                  mencionado, mientras que el nombre del actor se encuentra
                  reservado.
                </p>
              </div>

              <h2 className="font-serif text-primary text-3xl mt-14 mb-8">
                2. El conflicto
              </h2>

              <h3 className="font-serif text-primary text-2xl mt-8 mb-6">
                2.1. Lo que demanda el actor
              </h3>

              <div className="space-y-6 text-white/90 leading-relaxed text-base md:text-lg">
                <p>
                  <strong className="text-white">A)</strong> El actor reclama
                  a la demandada que le entregue 39,1871 tokens de gobernanza
                  denominados Bamboos en su wallet, en razón de que la
                  demandada se los tiene que entregar por haber aportado
                  liquidez al sistema, conforme determina el protocolo de
                  Bamboo.
                </p>

                <p>
                  Para definir lo que es un token seguimos los conceptos
                  vertidos por Ismael Santiago Moreno: la tokenización es la
                  transformación y representación de un activo u objeto dentro
                  de una cadena de bloques o blockchain.
                </p>

                <p>
                  <strong className="text-white">B)</strong> También peticiona
                  el demandante que se obligue a Bamboo DeFi a arreglar el
                  problema que tiene en su protocolo, ya que existe en él un
                  error que ocasiona la pérdida de los Bamboos acumulados en
                  un pool cuando se aporta más liquidez.
                </p>

                <p>
                  Para el actor se trataría de una desaparición de tales
                  Bamboos, como un «burn» o quemado del token. Una quema de
                  tokens o de monedas se da cuando se pretende sacarlas de
                  circulación, reduciendo así su oferta —sucede lo mismo con
                  el dinero fiat—. Existen smart contracts que se utilizan
                  para esta función de manera predeterminada y programada.
                </p>
              </div>

              {/* AVISO SOBRE EL FRAGMENTO PUBLICADO */}
              <div className="mt-14 p-6 md:p-8 rounded-xl border border-border/50 bg-muted">
                <p className="text-muted-foreground leading-relaxed">
                  Esta página reproduce el fragmento del artículo compartido
                  por su autor. El comentario completo está disponible en la
                  publicación original de Actualidad Jurídica.
                </p>
              </div>

              {/* FUENTE */}
              <div className="mt-10 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  Publicación original:{' '}
                  <a
                    href="https://actualidadjuridica.ar/doctrina-comentario-al-laudo-arbitral-bamboo-defi-autor-francisco-casanegra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    Leer el artículo completo en Actualidad Jurídica
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* VOLVER */}
        <section className="pb-20">
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

export default BambooDefiPage;
