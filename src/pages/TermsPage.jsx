import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Términos de uso | Estudio Jurídico Casanegra</title>
        <meta
          name="description"
          content="Términos de uso del sitio web del Estudio Jurídico Casanegra & Asociados."
        />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="pt-40 pb-20">
        <article className="container-custom max-w-4xl space-y-8 text-muted-foreground">
          <header>
            <h1 className="mb-6 font-serif text-primary">Términos de uso</h1>
            <p>
              Estos términos regulan el acceso y uso del sitio web del Estudio Jurídico
              Casanegra &amp; Asociados.
            </p>
          </header>

          <section>
            <h2 className="mb-3 font-serif text-2xl text-primary">Información general</h2>
            <p>
              El contenido del sitio se ofrece con fines informativos generales y no constituye
              asesoramiento jurídico para una situación particular. La consulta del sitio o el
              envío de un mensaje no crea por sí mismo una relación profesional ni garantiza la
              aceptación de un asunto.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl text-primary">Uso del sitio</h2>
            <p>
              Usted se compromete a utilizar el sitio de forma lícita, sin interferir con su
              funcionamiento ni intentar acceder sin autorización a sus sistemas o información.
              El estudio puede actualizar o retirar contenidos y funcionalidades del sitio.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl text-primary">Contenido y enlaces externos</h2>
            <p>
              Los contenidos se presentan tal como están disponibles y pueden no reflejar cambios
              normativos posteriores a su publicación. Los enlaces a sitios de terceros se
              proporcionan como referencia; el estudio no controla ni garantiza su contenido.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-2xl text-primary">Contacto</h2>
            <p>
              Para consultas sobre estos términos, comuníquese con el estudio a través de la
              página de <a className="text-primary underline" href="/contacto">contacto</a>.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}

export default TermsPage;
