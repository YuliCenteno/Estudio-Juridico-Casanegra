import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function FAQPage() {
  const faqs = [
    {
      question: '¿En qué consiste el asesoramiento de un abogado ambiental?',
      answer: 'Un abogado ambiental asesora a empresas para garantizar el cumplimiento de las normativas ecológicas. Esto incluye la gestión de permisos, representación en sumarios por infracciones, auditorías de compliance y defensa en litigios por daño ambiental.'
    },
    {
      question: '¿Cuándo necesito consultar a un especialista en derecho urbanístico?',
      answer: 'Debe consultar a un especialista en derecho urbanístico antes de iniciar cualquier desarrollo inmobiliario, loteo o proyecto comercial. Le ayudaremos a verificar la zonificación, obtener factibilidades y evitar paralizaciones de obra por conflictos territoriales.'
    },
    {
      question: '¿Qué abarca el derecho de la construcción?',
      answer: 'El derecho de la construcción regula las relaciones entre los actores de una obra (propietario, arquitecto, constructora). Abarca la redacción de contratos, gestión de reclamos por vicios ocultos, ruina, y la responsabilidad civil derivada de accidentes o incumplimientos.'
    },
    {
      question: '¿Cómo se obtiene una concesión en el derecho minero?',
      answer: 'El proceso varía según la categoría del mineral, pero generalmente implica la presentación de un pedimento o manifestación de descubrimiento ante la autoridad minera provincial, acompañado de los estudios técnicos y ambientales requeridos por el Código de Minería.'
    },
    {
      question: '¿Qué es un recurso en el derecho administrativo?',
      answer: 'Es la herramienta legal que permite a un particular impugnar una decisión del Estado (como una multa, clausura o denegación de permiso) solicitando que la misma autoridad o su superior jerárquico la revise, modifique o revoque.'
    },
    {
      question: '¿Cuánto demora un proceso de Evaluación de Impacto Ambiental?',
      answer: 'Los tiempos varían significativamente según la jurisdicción y la complejidad del proyecto. Puede tomar desde unos pocos meses para proyectos menores, hasta más de un año para grandes desarrollos industriales o mineros que requieren audiencias públicas.'
    },
    {
      question: '¿Qué es una expropiación y cómo me defiendo?',
      answer: 'La expropiación es el acto por el cual el Estado priva a una persona de su propiedad por causa de utilidad pública, a cambio de una indemnización. Nuestro estudio interviene para asegurar que la indemnización sea justa y refleje el valor real y actual del bien.'
    },
    {
      question: '¿Qué responsabilidad tienen los directores por daños ambientales?',
      answer: 'La legislación moderna tiende a responsabilizar solidaria y, en algunos casos, penalmente a los directores y gerentes por los daños ambientales causados por la empresa. Un programa de compliance ambiental robusto es fundamental para mitigar este riesgo.'
    },
    {
      question: '¿Cómo se resuelven los conflictos de zonificación?',
      answer: 'Se resuelven mediante el análisis detallado de los Códigos de Planeamiento Urbano, presentaciones administrativas solicitando excepciones o rezonificaciones, y en última instancia, mediante acciones judiciales contencioso-administrativas.'
    },
    {
      question: '¿Qué son los vicios redhibitorios en la construcción?',
      answer: 'Son defectos ocultos en la obra que no pudieron ser advertidos al momento de la entrega y que hacen a la cosa impropia para su destino. La ley establece plazos específicos de caducidad y prescripción para reclamar por ellos.'
    },
    {
      question: '¿Ofrecen servicios de auditoría legal (Due Diligence)?',
      answer: 'Sí, realizamos Due Diligence ambiental, urbanístico y administrativo para procesos de fusiones y adquisiciones (M&A), identificando pasivos ocultos, contingencias regulatorias y el estado de los permisos de la empresa objetivo.'
    },
    {
      question: '¿Cómo se estructuran los honorarios del estudio?',
      answer: 'Nuestros honorarios se estructuran de manera transparente y previsible. Dependiendo del asunto, podemos trabajar con abonos mensuales para asesoramiento continuo, honorarios fijos por etapas de proyecto, o esquemas mixtos en casos litigiosos.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Preguntas Frecuentes | Casanegra & Asociados</title>
        <meta name="description" content="Respuestas a consultas frecuentes sobre derecho administrativo, ambiental, construcción, minero y urbanístico." />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <section className="pt-40 pb-20 bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="mb-6 text-primary font-serif">Preguntas Frecuentes</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Información clara sobre procesos legales, normativas y nuestra metodología de trabajo.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 bg-card hover:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-semibold text-foreground pr-4 text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default FAQPage;