import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Página no encontrada | Estudio Jurídico Casanegra</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Header />
      <WhatsAppButton />
      <main className="container-custom flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Error 404</p>
        <h1 className="mb-4 font-serif text-4xl font-bold text-foreground">Página no encontrada</h1>
        <p className="mb-8 max-w-xl text-muted-foreground">
          El enlace puede estar desactualizado o la página ya no existe.
        </p>
        <Link
          to="/"
          className="rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Volver al inicio
        </Link>
      </main>
      <Footer />
    </>
  );
}

export default NotFoundPage;
