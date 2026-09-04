import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function ArticuloPage() {
  return (
    <>
      <Helmet>
        <title>
          TASA DE ESTADÍSTICA ARGENTINA ANTE LA RESERVA DE LEY | Casanegra & Asociados
        </title>

        <meta
          name="description"
          content="Análisis jurídico sobre la Tasa de Estadística Argentina ante la reserva de ley, su naturaleza tributaria, los fallos Dass Argentina y Colgate Palmolive, el GATT y los decretos 332/2019, 901/2021 y 1140/2024."
        />

        <link
          rel="canonical"
          href="https://estudiocasanegra.com/articulos/tasa-estadistica"
        />

        <meta
          property="og:title"
          content="TASA DE ESTADÍSTICA ARGENTINA ANTE LA RESERVA DE LEY"
        />

        <meta
          property="og:description"
          content="Entre la retribución de servicios y la recaudación aduanera."
        />

        <meta
          property="og:url"
          content="https://estudiocasanegra.com/articulos/tasa-estadistica"
        />

        <meta
          property="og:type"
          content="article"
        />

        <meta
          property="og:site_name"
          content="Estudio Jurídico Casanegra & Asociados"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="TASA DE ESTADÍSTICA ARGENTINA ANTE LA RESERVA DE LEY"
        />

        <meta
          name="twitter:description"
          content="Entre la retribución de servicios y la recaudación aduanera."
        />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="bg-background">

        {/* ENCABEZADO DEL ARTÍCULO */}
        <section className="pt-40 pb-16 bg-muted/30">
          <div className="container-custom max-w-5xl">

            <Link
              to="/articulos"
              className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors mb-10"
            >
              ← Volver a Artículos
            </Link>

            <div className="max-w-4xl">

              <div className="flex flex-wrap items-center gap-4 mb-6">

                <span className="inline-flex items-center text-sm font-semibold bg-white/10 text-white px-4 py-2 rounded-full tracking-wide border border-secondary/60 shadow-sm backdrop-blur-sm">
                  Derecho Aduanero
                </span>

                <span className="text-sm text-white/70">
                  01 Sep 2026
                </span>

              </div>

              <h1 className="font-serif text-primary leading-tight mb-8">
                TASA DE ESTADÍSTICA ARGENTINA ANTE LA RESERVA DE LEY: ENTRE LA
                RETRIBUCIÓN DE SERVICIOS Y LA RECAUDACIÓN ADUANERA
              </h1>

              <p className="text-lg text-white/90">
                Francisco José Casanegra
              </p>

              <p className="text-sm text-white/70 mt-2">
                Abogado. Magíster en Derecho Administrativo
              </p>

            </div>
          </div>
        </section>

        {/* CONTENIDO */}
        <section className="section-spacing">
          <div className="container-custom max-w-4xl">

            <article className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 lg:p-16">

                            {/* 1 */}
              <section className="mb-12">
                <h2 className="font-serif text-white text-2xl md:text-3xl font-semibold mb-6">
                  1. Antecedentes de la Tasa de Estadística
                </h2>

                <p className="text-white/90 leading-relaxed mb-6">
                  Como señala Basaldúa[1] siempre fue de gran
                  interés para los estados el conocimiento de las mercaderías que
                  importan y exportan y los tributos que se perciben por dicho motivo.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  La institución más idónea para conocer lo que ingresa y lo que
                  egresa de un estado es la Aduana, por esa razón las autoridades
                  le asignaron esa función[2].
                </p>

                <p className="text-white/90 leading-relaxed">
                  La realización de la actividad mencionada generaba costos que las
                  Aduanas decidieron cobrarle directamente al importador, el
                  denominado “servicio de estadística”[3]
                </p>
              </section>

              {/* 2 */}
              <section className="mb-12">
                <h2 className="font-serif text-white text-2xl md:text-3xl font-semibold mb-6">
                  2. Naturaleza jurídica de la Tasa de Estadística
                </h2>

                <p className="text-white/90 leading-relaxed mb-6">
                  El tributo que percibe la Administración
                  mediante el servicio de estadística es una tasa, y en este tipo de
                  tributos, a diferencia del impuesto, se exige que el estado organice
                  o servicio o prestación a cambio de la tasa y lo ponga a disposición
                  del sujeto pasivo, quienes deben pagarlo de manera obligatoria
                  aunque no lo utilicen.[4]
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Además de lo señalado debe existir proporcionalidad existente entre
                  el servicio o prestación que se pone a disposición por intermedio
                  del estado ya que tiene por causa una prestación individualizada que
                  beneficia al sujeto pasivo, y que, por ende, debe guardar cierta
                  proporción con el costo del servicio prestado[5]
                </p>

                <p className="text-white/90 leading-relaxed">
                  Esa vinculación no exige una equivalencia matemática individual,
                  pero sí impide que el monto se independiza por completo del costo
                  global del servicio. Cuando la cuantía responde primordialmente a la
                  capacidad económica evidenciada por el valor de la mercadería, y no
                  a la intensidad o costo de la actuación administrativa, el gravamen
                  adquiere rasgos materiales de impuesto. La nomenclatura legislativa
                  no puede neutralizar el examen de su estructura real.
                </p>
              </section>

              {/* 3 */}
              <section className="mb-12">
                <h2 className="font-serif text-white text-2xl md:text-3xl font-semibold mb-6">
                  3. Marco normativo y evolución de la Tasa de Estadística
                </h2>

                <p className="text-white/90 leading-relaxed mb-6">
                  La tasa de estadística es percibida con motivo
                  de determinadas importaciones para consumo y tiene su fuente
                  inmediata en los artículos 762 a 766 del Código Aduanero[6].
                </p>

                <p className="text-white/90 leading-relaxed">
                  El Decreto 332/2019 elevó transitoriamente la alícuota del 0,5 %
                  al 2,5 % y estableció topes según el valor de la operación. Con
                  posterioridad, las leyes 27.541 y 27.591 fijaron una alícuota del
                  3 % para períodos determinados. Agotada esa cobertura temporal,
                  los decretos 901/2021 y 1140/2024 mantuvieron el gravamen hasta el
                  31 de diciembre de 2027[7]
                </p>
              </section>

              {/* 4 - RESERVA DE LEY */}
              <section className="mb-12">
                <h2 className="font-serif text-white text-2xl md:text-3xl font-semibold mb-6">
                  4. Principio de reserva de ley en materia tributaria
                </h2>

                <p className="text-white/90 leading-relaxed mb-6">
                  La Constitución Nacional atribuye al Congreso
                  la imposición de contribuciones (arts. 4, 17, 52 y 75, incs. 1 y 2).
                  La Corte Suprema ha sostenido de manera constante que la legalidad
                  comprende la creación del tributo y sus elementos esenciales:
                  hecho imponible, sujetos, base, alícuota y exenciones.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  En “Camaronera Patagónica”[8] declaró inválida la fijación de
                  derechos de exportación por una autoridad administrativa sobre la
                  base de una habilitación que no contenía límites suficientes.
                  También precisó que una ley posterior puede ratificar hacia el
                  futuro la normativa delegada, pero no sanear retroactivamente
                  cobros efectuados sin cobertura legal válida.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Los considerandos del Decreto 332/2019 mencionaron tareas de
                  distintos organismos, cambios tecnológicos y razones de equidad,
                  pero también la política fiscal y la necesidad de eliminar el
                  déficit primario. Esta combinación evidencia que la recaudación
                  general ocupó un lugar relevante en la decisión. La eventual
                  afectación de parte de los recursos a actividades que no guardan
                  relación inmediata con el procesamiento estadístico profundiza la
                  desnaturalización. Aunque una tasa puede contribuir al financiamiento
                  global de la organización que presta el servicio, no debería
                  convertirse en un mecanismo para sostener funciones estatales
                  heterogéneas ajenas al contribuyente alcanzado.
                </p>

                <p className="text-white/90 leading-relaxed">
                  La comparación entre operaciones muestra, además, el problema del
                  diseño ad valorem. El registro de una importación de alto valor no
                  necesariamente demanda una actividad administrativa proporcionalmente
                  mayor que el de una operación de menor cuantía. Los topes absolutos
                  moderan la consecuencia, pero no demuestran por sí mismos la
                  correspondencia con el costo. Para satisfacer el estándar
                  constitucional se requiere información presupuestaria, identificación
                  de las prestaciones computadas y un método transparente de distribución
                  de costos. Sin esos datos, la alícuota corre el riesgo de expresar
                  capacidad contributiva —criterio propio del impuesto— en lugar de
                  retribuir una actuación estatal individualizable.
                </p>
              </section>

              {/* 5 - DASS */}
              <section className="mb-12">
                <h2 className="font-serif text-white mb-6">
                  5. Fallo Dass S.R.L.
                </h2>

                <p className="text-white/90 leading-relaxed mb-6">
                  “Dass Argentina SRL c/ EN-DGA”[9], la Sala I de la Cámara Nacional
                  de Apelaciones en lo Contencioso Administrativo Federal confirmó,
                  por mayoría, la inconstitucionalidad del Decreto 332/2019 que
                  establecía una alicuota del 2,5% y ordenó a la demandada la
                  devolución de lo abonado por encima del 0,5 %.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Corresponde destacar que el decreto 108/99 dictado por el PEN había
                  fijado la alícuota de la tasa de estadística en un 0,5% sobre el
                  valor FOB de las mercaderías importadas.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Luego, el PEN, mediante decreto 332/19, estableció hasta el
                  31/12/2019, en un 2,5% la alícuota de la tasa de estadística
                  contemplada en el art. 762 del CA, que reza: "La importación y la
                  exportación, fuere definitiva o suspensiva, respecto de la cual se
                  prestare con carácter general un servicio estadístico, podrá estar
                  gravada con una tasa AD VALOREM por tal concepto".
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  La mayoría entendió que la doctrina de “Camaronera Patagónica”[10]
                  era aplicable al caso porque la habilitación del artículo 764
                  carecía de pautas y límites precisos. Además, consideró que la Ley
                  23.664 que había fijado una alícuota del 3 % no estaba vigente cuando
                  ocurrieron los hechos de 2019 de modo que no podía operar como
                  cobertura legal actual del aumento.
                </p>

                <h3 className="font-serif text-white text-xl mb-5">
                  Primera Instancia:
                </h3>

                <p className="text-white/90 leading-relaxed mb-4">
                  El fallo de primera instancia dispuso:
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  A) Declarar la inconstitucionalidad del decreto PEN 332/19 porque
                  elevó la alícuota de la tasa de estadística prevista en el art. 764
                  del CA sin que existieran pautas y límites precisos mediante una
                  clara política legislativa. De modo tal que el PEN ha incursionado
                  en una materia reservada al PLN.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  B) Ordena al servicio aduanero que efectúe la liquidación de las
                  sumas abonadas en concepto de tasa de estadística en la parte que
                  supere el monto a pagar con la aplicación de la alícuota del 0,5%
                  que regía anteriormente. Indica el decisorio que la devolución debe
                  realizarse en moneda nacional según la doctrina establecida por la
                  CSJN en la causa "CENCOSUD SA (TF 29.535-A) c/ DGA" del 15/05/201
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  C) Las sumas a reintegrar deberán liquidarse desde la solicitud de
                  repetición expresada en el escrito titulado "AMPLIA DEMANDA" hasta
                  el 31/08/2022, aplicando la tasa efectiva mensual publicada por
                  AFIP - conforme Art. 4, 1° párrafo 6 de la Resolución ME nro.
                  599/2019- y, desde el 01/09/2022 hasta el momento del efectivo pago,
                  aplicando la tasa del Art. 4° de la Resolución ME nro. 559/22.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  "DASS ARGENTINA SRL" Y AFIP-DGA apelaron la sentencia de grado y
                  expresaron agravios.
                </p>

                <h3 className="font-serif text-white text-xl mb-5">
                  AGRAVIOS ACTORA:
                </h3>

                <p className="text-white/90 leading-relaxed mb-6">
                  La crítica de la actora se centró en:
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  A) La liquidación de la deuda establecida por el a quo en moneda
                  nacional pues, además de contrariar la normativa vigente, su
                  aplicación ocasionaría un serio perjuicio patrimonial a su parte.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  En lo esencial, la queja expresa que la devolución de la deuda en
                  dólares, convertida a moneda nacional al tipo de cambio vigente en
                  la fecha en que abonó la tasa de estadística, no se corresponde con
                  el valor real en la actualidad.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Arguye que, acorde con lo dispuesto por el art. 20 de la ley 23.905,
                  corresponde determinar la equivalencia en moneda nacional de las
                  sumas repetidas al tipo de cambio vigente al día anterior al efectivo
                  pago que la AGFIP-DGA realice a la actora en cumplimiento de la
                  sentencia.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  B) Asimismo, sostiene la actora que la aplicación de intereses según
                  lo dispuso el fallo de grado, se torna improcedente por cuanto
                  produciría grave menoscabo a su patrimonio con el consabido
                  enriquecimiento sin causa en favor de la parte demandada. En esa
                  tesitura, menciona que la Resolución nro. 599/2022 del ME establece
                  una tasa fija mensual del 3,84% que en nada se corresponde con la
                  realidad, tornándose a todas luces irrazonable al desencadenar un
                  grave menoscabo patrimonial para la actora y el enriquecimiento sin
                  causa en favor de la demandada.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Expresa en su agravio la actora, que para que la reparación no
                  resulte incompleta, se debe aplicar la tasa pasiva promedio que
                  publica el Banco Central de la República Argentina.
                </p>

                <h3 className="font-serif text-white text-xl mb-5">
                  AGRAVIOS DEMANDADA:
                </h3>

                <p className="text-white/90 leading-relaxed mb-6">
                  La AFIP-DGA expresó que postulaba la revocatoria del fallo emitido
                  por el JNCAF nro. 12, aduciendo -en lo esencial- que:
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  A) La delegación emergente del art. 764 del CA al PEN para modificar
                  la alícuota, invocado por el PEN para justificar el decreto 332/19,
                  deviene plenamente válida pues, tratándose de una tasa se torna
                  innecesario exigirle al PLN que establezca pautas o límites para su
                  fijación, toda vez que dichas cuestiones se hallan determinadas de
                  antemano en atención al costo de prestación del servicio.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Por lo demás, expresó la AFIP-DGA, que, razones de equidad y política
                  fiscal, determinan que quienes efectúen las operaciones que motivan
                  la actividad del Estado, deben afrontar el costo que de ellas deriva.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  B) No se acreditó el carácter irrazonable de la alícuota legalmente
                  fijada, aduciendo que la acreditación de tales vicios en la
                  imposición de un gravamen exige la demostración concreta de tales
                  circunstancias por parte de quien las alega.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  C) La alícuota no excede el costo actual de los servicios prestados
                  por lo cual no está en colisión con la norma material emergente del
                  Art. VIII del Acuerdo General Sobre Aranceles y Comercio (GATT).
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  D) El GATT no tiene carácter operativo directo pues no fija logaritmos
                  ni parámetros a tal efecto, ni alícuota máxima, dejando librado a los
                  Estados signatarios la forma de implementar, de manera paulatina, el
                  compromiso asumido.
                </p>

                <h3 className="font-serif text-white text-xl mb-5">
                  Dr. Rodolfo Eduardo FACIO señaló:
                </h3>

                <p className="text-white/90 leading-relaxed mb-6">
                  A) La naturaleza tributaria del derecho de exportación emana del
                  art. 724 del CA pues grava el hecho imponible de la exportación de
                  la mercadería para consumo, involucrando una carga pecuniaria
                  coactiva para el sujeto pasivo que realice la acción gravada prevista
                  por la norma con destino a las arcas públicas. Es por su naturaleza
                  un tributo -específicamente, un impuesto- más allá de los fines que
                  con él se hayan querido lograr. Textualiza el voto que la autorización
                  prevista en el art. 755 del CA para el cumplimiento de finalidades
                  fiscales y extrafiscales, han sido conferidas sin establecer
                  mínimamente los elementos esenciales del tributo de que se trata.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Prosigue mencionando que se admite que el legislador sancione una
                  ley estableciendo una clara manifestación de su decisión política de
                  ratificar la legislación delegada, si ello constituye voluntad
                  expresa del PLN de conferir rango de ley al contenido de las normas
                  dictadas previamente a la vigencia de éstas. (Fallos: 321:347,
                  considerando 10).
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  En las normas citadas por el PEN para fundar el decreto 332/19
                  -expresa el Dr. FACIO- no se encuentra delineada o trazada una clara
                  política legislativa como exige la jurisprudencia de la CSJN para
                  afirmar que existe por parte del PLN una delegación en el PEN que
                  valide la modificación de la alícuota de la tasa de estadística
                  creada por el Art. 762 del CA.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  B) Refiere que la diferencia entre derecho de exportación y la tasa
                  de estadística es irrelevante si se la contrasta con el principio de
                  reserva de ley en materia tributaria. Porque ello no es una expresión
                  jurídica formal, sino que constituye una garantía sustancial en este
                  campo, habida cuenta que su esencia es corolario de la representatividad
                  de los contribuyentes, abarcando la creación de impuestos, tasas y
                  contribuciones, así como las modificaciones de elementos esenciales
                  que componen el tributo, o sea, el hecho imponible, la alícuota, los
                  sujetos alcanzados y las exenciones. (Fallos: 329:1554). Sucede que,
                  no es posible identificar una ley formal que, a la fecha en que fueron
                  oficializadas las importaciones aquí involucradas, haya otorgado un
                  rango legal al incremento establecido por el decreto PEN 332/19.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  C) De allí que, en consonancia con lo decidido por la sentencia de
                  grado, la devolución debe efectuarse en la misma moneda en que se
                  efectuaron los pagos. El voto en análisis cita las causas de la Sala
                  I de la CNACAF "GS GRAFICA SRL c/ EN/DGA s/ Dirección Gral. De
                  Aduanas"; "SANCOR CUL (TFN 28722-A) c/ DGA s/ recurso directo de
                  organismo externo"; "DASS ARGENTINA SRL c/ EN-DGA s/ proceso de
                  conocimiento" [Juzgado nro. 12] pronunciamiento del 31 de julio de
                  2018, del 3 de octubre de 2019 y del 13 de noviembre de 2023, entre
                  otras)
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  D)Añade que las objeciones relativas a la tasa de interés fijada en
                  la Resolución 559/2022 del ME no pueden ser admitidas pues se
                  formularon en forma genérica, no explicándose el motivo por el cual
                  producen daño al derecho de propiedad (Sala I CNACAF en "TORTORELLI,
                  Pedro c/ EN - AFIP ley 20.628 s/ amparo ley 16.986 del 30 de abril
                  de 2024).
                </p>

                <h3 className="font-serif text-white text-xl mb-5">
                  El voto de la Dra. DO PICO refiriendo:
                </h3>

                <p className="text-white/90 leading-relaxed mb-6">
                  A) Que no resulta acertada la aplicación directa o lineal de la
                  doctrina "CAMARONERA PATAGONICA", pues, más allá de la delegación
                  emergente del art. 764 del CA, la tasa de estadística se encuentra
                  respaldada por una ley formal del Congreso de la Nación (ley 23.664)
                  que establece una alícuota más gravosa que la cuestionada por la
                  firma importadora.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  B) Al referirse a los argumentos de la actora, el voto señala que
                  dicha parte se limitó a sostener que el pago de la tasa de estadística
                  implicó un avasallamiento a su derecho de propiedad y que el decreto
                  PEN 332/19 contradice las disposiciones del GATT, agregando asimismo
                  que el servicio prestado como tasa no se condice con el costo que el
                  mismo implica.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  C) Al respecto la actora sólo ofreció y acompañó como prueba los
                  despachos de importación para consumo oficializados de los cuales
                  surge el pago cuestionado, en que su línea argumental adolece de
                  solidez suficiente para habilitar un examen acerca de la razonabilidad
                  del aumento de la alícuota de la tasa de estadística en función de la
                  prestación del servicio efectivamente proporcionado. Sucede, prosigue
                  el voto, que no se aportan datos que permitan evaluar el aspecto
                  económico involucrado.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  D) Expresa el voto que la CSJN ha sostenido en forma reiterada que
                  la declaración de inconstitucionalidad de una norma implica un acto
                  de suma gravedad institucional y por ello es considerado la última
                  RATIO del orden jurídico (Fallos: 302:457; 346:182, entre otros).
                  Por ello, sólo corresponde declararla cuando la repugnancia sea
                  manifiesta, requiriéndose de manera inexcusable un sólido desarrollo
                  argumental y la demostración de un agravio determinado y específico.
                  (Fallos: 249:51; 299:291; 335:2333; 338:1444, 1504; 339:323, 1277;
                  340:669).
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  E) Los despachos "supra" aludidos solo informan que a la actora le
                  exigieron el pago de un tributo en concepto de tasa de estadística
                  con alícuota prevista en el decreto PEN 332/19, pero ello no se torna
                  idóneo para acreditar la afectación de los derechos invocados. Esto
                  último pues, dicha circunstancia podrá poner de relieve la mayor o
                  menor bondad de un sistema tributario sobre otro mas no la repugnancia
                  a las cláusulas constitucionales (Fallos: 320:1166; 328:2567; 333:527;
                  342:411, entre otros, y, esta sala I, causa 37.899/16 "COFCO ARGENTINA
                  SA c/ EN AFIP-DGI", fallo del 23/11/2023).
                </p>

                <p className="text-white/90 leading-relaxed">
                  F) A ello, aduna el voto que aun cuando se avizorara una contradicción
                  por parte del Estado Nacional respecto a las Reglamentaciones -en
                  general- con la OMC, ello no irradia efectos directos hacia los
                  particulares (CNACAF Sala IV "ADIDAS" del 25/03/2010; "INC SA
                  (TFN 28.845- A) c/ DGA, del 28/02/2012 [Sala II] y Sala V INC SA
                  c/ DGA Resolución 69/08 ADBA", del 14/07/2015).
                </p>
              </section>

              {/* 6 - COLGATE */}
              <section className="mb-12">
                <h2 className="font-serif text-white mb-6">
                  6. Fallo Colgate Palmolive:
                </h2>

                <p className="text-white/90 leading-relaxed mb-6">
                  La discusión reaparece en “Colgate Palmolive Argentina SA c/ DGA”
                  [11]:
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  El pasado 2 de julio, la Sala B de la Cámara Federal de Mendoza
                  declaró admisible el recurso extraordinario federal interpuesto por
                  el Estado Nacional en autos “COLGATE PALMOLIVE ARGENTINA S.A.
                  c/DIRECCIÓN GENERAL DE ADUANAS (DGA) s/ACCIÓN MERAMENTE DECLARATIVA
                  DE INCONSTITUCIONALIDAD”, contra la sentencia que había declarado
                  la inconstitucionalidad de los artículos 1 y 2 del Decreto 332/2019,
                  norma que había elevado la alícuota de la tasa de estadística para
                  importaciones del 0,5% al 2,5%. La causa fue elevada a la Corte
                  Suprema de Justicia de la Nación, que deberá expedirse sobre el fondo
                  del asunto.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  El Fisco sostuvo que el decreto tiene sustento legal en la delegación
                  prevista en los artículos 762 a 766 del Código Aduanero, que faculta
                  al Poder Ejecutivo a fijar y modificar la alícuota de la tasa en
                  trato, y cuestionó la sentencia por arbitrariedad y por afectar la
                  recaudación fiscal con gravedad institucional, indicando la falta de
                  aplicabilidad de la doctrina “Camaronera Patagónica” en el caso.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  La empresa peticionaste, por su parte, rechazó la existencia de una
                  verdadera cuestión federal, sosteniendo que el Estado sólo expresa
                  una discrepancia con la interpretación normativa de la Cámara.
                  Reafirmó que el incremento del 500% en la alícuota no guarda relación
                  con el costo real del servicio estadístico, que la delegación del
                  artículo 764 no fija una política legislativa clara, y que la tasa
                  contradice el artículo VIII del GATT.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Para conceder el recurso, la Cámara consideró que la sentencia
                  recurrida es definitiva y que existe cuestión federal en los términos
                  del art. 14, inc. 3° de la ley 48, dada la interpretación en juego
                  del Código Aduanero y el Decreto 332/2019, sumado a la trascendencia
                  económica y jurídica del tema.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  El caso se suma a una tendencia jurisprudencial reciente -Das
                  Argentina y DAK Américas, entre otros- que declara inconstitucional
                  el incremento de esta tasa por falta de delegación legislativa válida.
                  Se trata de un tema de alto impacto económico: solo en 2025 se
                  recaudaron cerca de $1.07 billones, el tercer recurso aduanero más
                  lucrativo.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  La definición de la Corte no solo será clave para los importadores
                  que buscan recuperar sumas abonadas en exceso, sino que -además- el
                  Máximo Tribunal tendrá la oportunidad de fijar un criterio uniforme
                  sobre los límites de la delegación legislativa en materia tributaria.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  La justicia federal mendocina declaró inconstitucionales los artículos
                  1 y 2 del Decreto 332/2019, y el 2 de julio de 2026 la Cámara concedió
                  el recurso extraordinario del Estado Nacional. La cuestión llegará,
                  por tanto, a la Corte Suprema.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  <strong>Planteo de la demandada:</strong> El Fisco invoca:
                  a) La delegación del Código Aduanero, b) La inaplicabilidad de
                  “Camaronera Patagónica” [12], y c) La gravedad institucional
                  vinculada con la recaudación.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  <strong>La actora:</strong> a) Objeta la ausencia de política
                  legislativa, b) El incremento del 500 %, y d) La falta de relación
                  con el costo del servicio.
                </p>

                <p className="text-white/90 leading-relaxed">
                  Para el Estado, el impacto recaudatorio no constituye una fuente
                  autónoma de validez constitucional: la gravedad fiscal puede explicar
                  la política adoptada, pero no sustituye la competencia legislativa
                  ni la razonabilidad del gravamen.
                </p>

                <p className="text-white/90 leading-relaxed mt-6">
                  La concesión del recurso reconoce una cuestión federal directa sobre
                  la interpretación del Código Aduanero y la validez constitucional
                  del decreto (Pampina y Fiandesio, 2026)[13]
                </p>
              </section>

              {/* 7 - CONTROL DE CONVENCIONALIDAD */}
              <section className="mb-12">
                <h2 className="font-serif text-white mb-6">
                  7. Control de Convencionalidad
                </h2>

                <p className="text-white/90 leading-relaxed">
                  El artículo VIII del GATT de 1994 dispone que los derechos y cargas
                  relacionados con la importación, distintos de los derechos aduaneros,
                  deben limitarse al costo aproximado de los servicios prestados y no
                  constituir una protección indirecta ni un impuesto fiscal. En el
                  asunto “Argentina — Medidas que afectan a las importaciones de
                  calzado, textiles, prendas de vestir y otros artículos” (DS56), el
                  sistema argentino fue cuestionado porque el porcentaje ad valorem
                  sin adecuada correspondencia con el servicio podía exceder aquel límite”
                </p>
              </section>

              {/* 8 - ASPECTOS PROBATORIOS */}
              <section className="mb-12">
                <h2 className="font-serif text-white mb-6">
                  8. Aspectos Probatorios
                </h2>

                <p className="text-white/90 leading-relaxed">
                  La prueba debe distribuirse de manera compatible con la disponibilidad
                  de la información. El importador puede acreditar los despachos, los
                  montos pagados y la incidencia del porcentaje sobre sus operaciones;
                  en cambio, la estructura de costos, la asignación presupuestaria y
                  el destino de la recaudación se encuentran principalmente bajo
                  control estatal. Exigir al particular una demostración acabada de
                  datos que la Administración no pública podría tornar ilusorio el
                  control judicial. Resulta más equilibrado imponer al actor la
                  formulación de un agravio concreto y, una vez superado ese umbral,
                  requerir al Estado que justifique técnicamente la proporcionalidad
                  del gravamen.
                </p>
              </section>

              {/* 9 - TÉCNICA IMPUGNATORIA */}
              <section className="mb-12">
                <h2 className="font-serif text-white mb-6">
                  9. Técnica impugnatoria
                </h2>

                <p className="text-white/90 leading-relaxed mb-6">
                  Quien impugna debe individualizar los pagos y, cuando su argumento
                  exceda la ausencia de ley formal, aportar elementos que permitan
                  evaluar la desproporción económica.
                </p>

                <p className="text-white/90 leading-relaxed">
                  La solución más consistente exige separar los períodos con
                  ratificación legislativa expresa de aquellos sostenidos únicamente
                  por reglamentos. En estos últimos, el artículo 764 no parece ofrecer
                  una política suficientemente delimitada para que el Poder Ejecutivo
                  altere una alícuota tributaria. Además, aun mediando ley, la tasa
                  debe conservar una conexión verificable con el costo global del
                  servicio; de lo contrario, su estructura ad valorem revela una
                  finalidad predominantemente fiscal.
                </p>
              </section>

              {/* 10 */}
              <section className="mb-12">
                <h2 className="font-serif text-white mb-6">
                  10. La decisión de la Corte en “Colgate Palmolive”
                </h2>

                <p className="text-white/90 leading-relaxed mb-6">
                  La decisión de la Corte en “Colgate Palmolive” brindará una
                  oportunidad para:
                </p>

                <p className="text-white/90 leading-relaxed mb-4">
                  a) Precisar si una ley histórica puede operar como techo permanente,
                </p>

                <p className="text-white/90 leading-relaxed mb-4">
                  b) Qué intensidad tiene la reserva de ley en las tasas aduaneras.
                </p>

                <p className="text-white/90 leading-relaxed mb-4">
                  c) Cuál es el criterio para determinar la existencia de
                  desproporción entre la tasa percibida y el servicio prestado.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  d) A cargo de quién esta la carga probatoria.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Cabe recordar que, con posterioridad al Decreto 332, la Ley 27.541
                  fijó la vigencia de la tasa hasta el 31/12/2020 y la Ley 27.591 la
                  prorrogó hasta el 31/12/2021, ambas con alícuota del 3%. Luego, el
                  Congreso no dispuso nuevas prórrogas y la tasa quedó sin vigor.
                  Sin embargo, el Poder Ejecutivo la recreó por Decreto 901/21
                  (vigente hasta el 31/12/2024) y luego por Decreto 1140/24 (vigente
                  hasta el 31/12/2027).
                </p>
              </section>

              {/* 11 - DECRETOS */}
              <section className="mb-12">
                <h2 className="font-serif text-white mb-6">
                  11. Decretos 332/2019, 901/21 y 1140/2024
                </h2>

                <p className="text-white/90 leading-relaxed mb-6">
                  Decretos 332/2019 (vigente hasta el 31/12/2019), 901/21 (vigente
                  hasta el 31/12/2024) , y 1140/2024 (vigente de 31/12/2024 hasta
                  21/12/2027):
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Durante el transcurso de varios años, y luego de una disputa contra
                  nuestro país en el marco de la Organización Mundial del Comercio
                  (OMC Documento WT/DS56/R), la alícuota de la Tasa de Estadística
                  permaneció en un 0,5%, con un tope máximo de U$S 500.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  No obstante, en el mes de mayo de 2019 por medio del Decreto Nº
                  332/19 la alícuota fue elevada al 2,5% en forma transitoria hasta
                  el 31 de diciembre de 2019. En dicha oportunidad, también fueron
                  modificados los topes máximos a aplicar, incrementando los mismos en
                  forma considerable hasta los U$S 125.000 en el caso de importaciones
                  mayores a un valor en aduana de U$S 1.000.000.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Posteriormente, y antes que finalice la vigencia del Decreto
                  N° 332/19, la Ley de Solidaridad Social y Reactivación Productiva
                  en el Marco de la Emergencia Pública (Ley Nro. 27.541), y su Decreto
                  Reglamentario N° 99/19 fijaron una nueva alícuota para el pago de la
                  tasa de estadística en las destinaciones definitivas de importación
                  para consumo en un tres por ciento (3%), esta vez con vigencia hasta
                  el 31 de diciembre de 2020, posteriormente prorrogado hasta el 31
                  de diciembre de 2021 por el Decreto N° 1057/20.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Finalmente, el 31 de diciembre de 2021, fue publicado en el Boletín
                  Oficial el Decreto N° 901/21, por medio del cual, en el tema que nos
                  ocupa, el Poder Ejecutivo Nacional dispuso prorrogar hasta el 31 de
                  diciembre de 2024 la alícuota del 3% correspondiente a la liquidación
                  de Tasa de Estadística que aplica sobre las destinaciones definitivas
                  de importación para consumo.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Asimismo, prorroga la vigencia de los montos máximos a percibir de
                  acuerdo al monto de la base imponible de la mercadería a importar,
                  como también mantiene las excepciones al pago de la tasa de
                  estadística para todas las operaciones que se encuentren alcanzadas
                  por dicho beneficio.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Las disposiciones del mencionado Decreto comenzaron a regir a partir
                  del 1° de enero de 2022.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Si bien se ensaya como fundamento de la medida adoptada el “dar
                  cumplimiento a las obligaciones asumidas por nuestro país ante la
                  ORGANIZACIÓN MUNDIAL DEL COMERCIO (O.M.C.) sobre lo dispuesto en el
                  Artículo VIII del ACUERDO GENERAL SOBRE ARANCELES ADUANEROS Y COMERCIO
                  – GATT – de 1994, para que el porcentaje “ad valorem” de aquella se
                  limite al costo aproximado del servicio estadístico prestado respecto
                  de las importaciones”, claramente los incrementos a la alícuota de la
                  Tasa de Estadística dispuestos desde el año 2019 se aplican en sentido
                  contrario.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Efectivamente, el art. VIII del GATT de 1994 dispone que las tasas
                  aduaneras “se limitarán al coste aproximado de los servicios prestados
                  y no deberán constituir una protección indirecta de los productos
                  nacionales ni gravámenes de carácter fiscal aplicados a la importación
                  o a la exportación”.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Los incrementos dispuestos por no cumplen con los parámetros fijados
                  por el GATT ni tampoco reflejan la proporcionalidad del servicio
                  estadístico de carácter general que supone debe solventar.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Ello sumado al hecho que los aumentos se fijaron de manera temporal
                  pero luego se prorrogan indefinidamente, no podemos más que concluir
                  que la incrementada alícuota de la Tasa de Estadística no puede
                  relacionarse y supera en exceso los servicios efectivamente prestados
                  en contraprestación a su pago, y en consecuencia constituye un tributo
                  encubierto, en clara contravención a los términos del GATT.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Como miembro de la OMC nuestro país debe dar cumplimiento a las
                  disposiciones del GATT, no obstante, lejos de fomentar la apertura de
                  la economía local al comercio mundial, este tipo de medidas no hace
                  más que frustrar todo empeño por competir con economías más
                  responsables y consecuentes con sus operadores de comercio exterior.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  El Decreto 1140 dictado el 30/12/2024, mediante el cual el PEN
                  extendió la vigencia del porcentual de la tasa de estadística del 3%
                  hasta el 31/12/2027.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Interesa destacar que la justificación del decreto PEN 1140/24
                  respecto a que tal prórroga se sustenta en las facultades conferidas
                  en el inciso 1 del art. 99 de la CN, así como por los Artículos 764
                  y 765 del CA, se torna inconsistente toda vez que la aludida norma
                  constitucional no destituye los alcances taxativos del inciso 3 de
                  la misma que prohíbe terminantemente al PEN dictar normas sobre
                  tributos. Esto último, habida cuenta que el principio de reserva
                  legal en materia tributaria tampoco cede en caso de que se actúe
                  mediante el mecanismo de la delegación legislativa prevista en el
                  art. 76 de nuestra Carta Magna.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Así las cosas, se invoca el temperamento del cimero tribunal aplicando
                  la doctrina del precedente "CAMARONERA PATAGONICA" que establece que
                  el PEN no se halla facultado para fijar tributos sin la intervención
                  del Congreso y que cualquier delegación en materia tributaria debe
                  ser precisa y con límites concretos en lo que concierne a la definición
                  de las alícuotas de los tributos.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  En caso de que la CSJN confirme lo decidido en "DASS ARGENTINA SRL"
                  por la Sala I de la CNACAF, habrá que asumir un criterio expectante
                  acerca de cuál será el temperamento de la justicia federal si, en su
                  momento, se plantea la inconstitucionalidad del decreto PEN 1140/2024.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Con fecha 30 de diciembre de 2024, se publicó en el Boletín Oficial
                  el Decreto 1140, por medio del cual, el Poder Ejecutivo dispuso la
                  prórroga de una alícuota del 3% en concepto de Tasa de Estadística,
                  con la cual se grava la destinación definitiva de importaciones para
                  consumo. Dicho régimen vencía el 31 de diciembre de 2024 y por medio
                  del mencionado Decreto del Poder Ejecutivo, se extendió su permanencia
                  hasta el 31 de diciembre de 2027. Es decir, sin siquiera prever que
                  el Congreso pueda determinar su vigencia por la vía que corresponde,
                  por los próximos 2 años y medio.
                </p>

                <p className="text-white/90 leading-relaxed">
                  Se debe recordar que esta alícuota fue establecida por la ley 27.541,
                  norma que dispuso en su artículo 49, no tan sólo fijar en un 3 % la
                  tasa de estadística, sino un plazo de vigencia hasta el 31 de diciembre
                  de 2021. A partir de ello, el Poder Ejecutivo fue quien determinó las
                  diferentes extensiones de vigencia; en primer lugar, por Decreto
                  1057/2020 hasta el 31.12.2021, luego por Decreto 901/2021 hasta el
                  31.12.2024 y ahora, por Decreto 1140/2024 hasta el 31.12.2027. En
                  todos los casos, sin considerar que el Congreso de la Nación, al
                  dictar la Ley 27.541, dispuso un plazo expreso para su vigencia, y por
                  otro lado que se está ante un tributo, lo que impone en estos casos
                  la intervención de quien tiene la potestad constitucional en tal
                  materia.
                </p>
              </section>

              {/* 12 - CONCLUSIÓN */}
              <section className="mb-12">
                <h2 className="font-serif text-white mb-6">
                  12. Conclusión
                </h2>

                <p className="text-white/90 leading-relaxed mb-6">
                  Las normas que se dicten en materia aduanera y de comercio
                  internacional, deben necesariamente contar con la solidez del
                  principio de legalidad, quedando supeditadas aquellas delegadas,
                  conforme las pautas que la propia Constitución Nacional expresamente
                  determina, con más las expresiones de motivos de los Constituyentes,
                  la Doctrina y Jurisprudencia, como pautas enriquecedoras de tan
                  importante tema, que, además, implica la necesaria seguridad jurídica
                  que tantas veces se reclama.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  En tanto no exista una ley dictada por el Congreso Nacional, que
                  habilite al Poder Ejecutivo para que proceda a la determinación
                  conforme los márgenes que el Poder Legislativo le otorgue, tanto en
                  relación a la debida alícuota como respecto al tiempo de vigencia,
                  no existe en consecuencia legalidad alguna que ampare la instalación,
                  restitución ni prórroga de tributo alguno, como el caso de la Tasa
                  de Estadística de que se trata.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Es importante en consecuencia recordar, lo que la Corte Suprema de
                  la Nación ya ha resuelto, en el sentido de que «el principio de
                  legalidad o de reserva de la ley no es sólo una expresión jurídico
                  formal de la tributación, sino que constituye una garantía substancial
                  en este campo, en la medida en que su esencia viene dada por la
                  representatividad de los contribuyentes. En tal sentido, este principio
                  de raigambre constitucional abarca tanto a la creación de impuestos,
                  tasas o contribuciones especiales como a las modificaciones de los
                  elementos esenciales que componen el tributo, es decir, el hecho
                  imponible, la alícuota, los sujetos alcanzados y las exenciones
                  (Fallos: 329: 1554). Asimismo, el máximo Tribunal de la Nación indicó
                  que, “el principio de reserva de ley en materia tributaria tampoco
                  cede en caso de que se actúe mediante el mecanismo de la delegación
                  legislativa previsto por el art. 76 de la Constitución. En efecto,
                  este Tribunal también ha sido contundente al sostener sobre tal punto
                  que «no puedan caber dudas en cuanto a que los aspectos sustanciales
                  del derecho tributario no tienen cabida en las materias respecto de
                  las cuales la Constitución Nacional (art. 76), autoriza, como excepción
                  y bajo determinadas condiciones, la delegación legislativa en el Poder
                  Ejecutivo»(4)
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  No es posible seguir debatiendo que los tributos que se pagan por las
                  operaciones de importación y exportación, poseen un contenido legal
                  constitucional, pues así es. Y el art. 17 de la CN que regula el
                  derecho de propiedad, recordando que se trata de un derecho de primera
                  generación y además de los llamados explícitos, consagra que “sólo el
                  Congreso impone las contribuciones que se expresan en el Artículo 4º”;
                  es decir, los derechos de importación y exportación, solo pueden ser
                  determinados por una ley del Congreso Nacional. Y ello no escapa al
                  criterio de tributo de la llamada Tasa de Estadística.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Por otro lado, al existir también contradicciones entre leyes y
                  resoluciones con disposiciones constitucionales y tratados, se deberá
                  optar por estas últimas normas, dejando de lado las leyes y
                  reglamentaciones dictadas en franca contradicción con lo dispuesto
                  en la CN y Tratados Internacionales. En el caso que nos ocupa en la
                  presente nota, claramente la Resolución emitida por el Decreto
                  1140/2024, está en franca colisión con la Constitución Nacional,
                  pues se trata de una disposición que establece una imposición
                  tributaria, que a nuestro entender supo quedar sin efecto al vencerse
                  el plazo de vigencia que dispuso en su oportunidad la ley 27.541,
                  con total ausencia de las garantías constitucionales e incluso de
                  acuerdos internacionales.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Ante dicha situación, bien cabe la posibilidad del debido reclamo
                  jurídico en la aplicación de la norma que aquí se cuestionan en cuanto
                  a las prórrogas dispuestas por el PEN.
                </p>

                <div className="border-l-2 border-secondary/50 pl-6 mt-8">
                  <p className="text-white/80 leading-relaxed">
                    1. Causa Berkley Fallos 323:3770
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    2. Código Aduanero Comentado Tomo IV. Ed. Servicop. Pág. 522 .
                    Autores Guillermo Felipe Coronel y Guillermo J. Sueldo
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    3. Boletín Oficial. Decreto 1140/2024
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    4. Fallos 326:4251
                  </p>
                </div>

                <p className="text-white/90 leading-relaxed mt-8">
                  Asimismo, la CSJN, remitiéndose al precedente "VIDEO CLUB DREANS"
                  afirmó que el principio de legalidad no se limita a la creación del
                  tributo, sino que abarca asimismo la modificación de sus elementos
                  sustanciales. En "LA BELLACA", Fallos: 319:3400 del año 1996 se
                  planteó controversia acerca de la validez del art. 34 del decreto
                  PEN 435/90 que dispuso el aumento de la alícuota prevista en el art.
                  13 de la ley de impuesto a los capitales del 1,5% del capital
                  imponible al 3%.
                </p>

                <p className="text-white/90 leading-relaxed mt-6">
                  Tocante a la inconstitucionalidad de la delegación del PLN en materia
                  tributaria, este principio de legalidad tributaria fue mantenido por
                  la CSJN al afirmar que ni un decreto del PEN ni una decisión del jefe
                  de gabinete de ministros pueden crear válidamente una carga tributaria,
                  definir o modificar sin sustento legal los elementos esenciales de un
                  tributo. Además, agregó el cimero tribunal que no caben dudas en
                  cuanto a que los aspectos sustanciales del derecho tributario no tienen
                  cabida en las materias respecto de las cuales el art, 76 de la CN
                  autoriza como excepción la delegación legislativa en el PEN. 8
                </p>

                <p className="text-white/90 leading-relaxed mt-6">
                  También cabe destacar que la CSJN, en "CAMARONERA PATAGONICA"
                  mantuvo la clásica doctrina "supra" referenciada.
                </p>
              </section>

              {/* 13 - CONCLUSIÓN FINAL */}
              <section className="mb-12">
                <h2 className="font-serif text-white mb-6">
                  13. Conclusión
                </h2>

                <p className="text-white/90 leading-relaxed">
                  Esperamos de la CSJN una respuesta jurídica basada en la vigencia de
                  los principios de legalidad, y de razonabilidad, en la preminencia de
                  la Constitución Nacional y la operatividad de los compromisos del GATT,
                  contribuyendo así a evitar que una prestación técnicamente denominada
                  tasa se convierte, por obra reglamentaria, en un impuesto a la
                  importación sin debate parlamentario.
                </p>
              </section>

              {/* REFERENCIAS */}
              <section className="pt-10 border-t border-border">
                <h2 className="font-serif text-white mb-6">
                  Referencias
                </h2>

                <div className="space-y-5 text-white/80 leading-relaxed">

                  <p>
                    [1] Con cita a Aristóteles Basaldúa, Xavier, Tributos al Comercio
                    Exterior, Segunda Edición Ampliada y Actualizada, con prólogo de
                    Guillermo Pablo Galli, título IV, página 405.
                  </p>

                  <p>
                    [2] Ibid.
                  </p>

                  <p>
                    [3] Países como Francia e Inglaterra lo comenzaron a asignar esta
                    función en el Siglo XVIII, y Suiza hace más de cien años incorporó
                    el cobro de un derecho de estadística a todas las mercaderías que
                    cruzan una línea aduanera, Cfr: “Código Aduanero Comentado”, por
                    Mario Alsina, y otros, t. II, artículos 466 al 819, capítulo IV,
                    “La denominada tasa estadística” página 354, Abeledo Perrot,
                    Buenos aires, año 2011.
                  </p>

                  <p>
                    [4] CSJN, “Frigorifico Compañía Swift de La Plata S.A. c/ Nación,
                    1961, Fallos: 251:50.
                  </p>

                  <p>
                    [5] CSJN, “Banco de la Nación Argentina c/ Municipalidad de San
                    Rafael”, Fallos: 234:663.
                  </p>

                  <p>
                    [6] Código Aduanero, Ley 22.415, arts. 762 a 766.
                  </p>

                  <p>
                    [7] Ley 23.664; leyes 27.541 y 27.591; decretos 332/2019,
                    901/2021 y 1140/2024.
                  </p>

                  <p>
                    [8] CSJN, “Camaronera Patagónica SA c/ Ministerio de Economía y
                    otros s/ amparo”, Fallos: 337:388 (2014
                  </p>

                  <p>
                    [9] CNACAF, Sala I, “Dass Argentina SRL c/ EN-DGA s/ proceso de
                    conocimiento”, expte. 50.127/2019, 18/2/2025
                  </p>

                  <p>
                    [10] CSJN, “Camaronera Patagónica SA c/ Ministerio de Economía y
                    otros s/ amparo”, Fallos: 337:388 (2014).
                  </p>

                  <p>
                    [11] Cámara Federal de Apelaciones de Mendoza, Sala B,
                    “Colgate-Palmolive Argentina S.A. c/ Dirección General de Aduanas
                    (DGA) s/ acción meramente declarativa de inconstitucionalidad”,
                    Expte. FMZ 29383/2019/CA3, sentencia del 13/08/2025
                  </p>

                  <p>
                    [12] CSJN, “Camaronera Patagónica SA c/ Ministerio de Economía y
                    otros s/ amparo”, Fallos: 337:388 (2014).
                  </p>

                  <p>
                    [13] Pampin, A. V. y Fiandesio, M. A., “Tasa de estadística: la
                    cuestión será tratada por la Corte Suprema”, Abeledo Gottheil
                    Abogados, 30/7/2026, disponible en:
                    https://share.google/dz0CqVr2VJRIWjR7l.
                  </p>

                </div>
              </section>

              {/* FUENTE */}
              <section className="mt-12 pt-8 border-t border-border">

                <h2 className="font-serif text-white mb-4">
                  Fuente
                </h2>

                <p className="text-white/90 leading-relaxed">
                  Fuente:{' '}
                  <a
                    href="https://share.google/cVCpSKBEHZ1yctTIH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-primary underline transition-colors"
                  >
                    Aduana News
                  </a>
                </p>

                <p className="text-sm text-white/60 mt-4">
                  El presente artículo tiene carácter informativo y no constituye
                  asesoramiento jurídico.
                </p>

              </section>

            </article>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default ArticuloPage;