import { Header } from "@/components/Header";
import { BookOpen, TrendingUp, TrendingDown, Target, AlertTriangle, CheckCircle2, Scale, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

const InterpretacionIMC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Guia de interpretacion OPS/OMS
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Interpretacion IMC</span> : Entiende tus Resultados
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Como leer e interpretar correctamente su Indice de Masa Corporal segun los criterios
            de la OPS/PAHO, la ENSANUT de Mexico, la AESAN de Espana y los datos mas recientes
            sobre la crisis de obesidad en America Latina y el Caribe.
          </p>
        </header>

        <div className="space-y-8">
          {/* What does IMC mean */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Que significa su IMC en America Latina y Espana?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                El <strong>IMC</strong> (Indice de Masa Corporal) es el indicador principal utilizado por
                la <strong>OPS (Organizacion Panamericana de la Salud)</strong> y la OMS para evaluar
                rapidamente si su peso esta adaptado a su talla. Se calcula dividiendo el peso (en kg)
                por la talla al cuadrado (en metros): por ejemplo, 80 kg / (1,70 m x 1,70 m) = 27,7.
              </p>
              <p>
                En la region hispanohablante, los datos son alarmantes. Segun la <strong>ENSANUT 2018-19
                (Encuesta Nacional de Salud y Nutricion de Mexico)</strong>, el IMC promedio de los adultos
                mexicanos ronda los <strong>28 kg/m2</strong>, muy por encima del rango normal (18,5-24,9).
                America Latina registra una de las <strong>tasas mas altas de obesidad femenina a nivel
                mundial</strong>, con paises como Mexico, Chile y Argentina liderando las estadisticas.
              </p>
              <p>
                <strong>Importante:</strong> El IMC es una herramienta de deteccion, no un diagnostico.
                Un medico debe considerar otros factores como el perimetro de cintura, la masa muscular,
                el historial metabolico y la predisposicion genetica. En poblaciones latinoamericanas,
                la OPS recomienda especial atencion al riesgo de sindrome metabolico incluso con IMC
                en rango de sobrepeso.
              </p>
            </div>
          </div>

          {/* Interpretation by category */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Interpretacion por categoria: datos por pais</h2>
            </div>

            <div className="space-y-6">
              {/* Underweight */}
              <div className="border-l-4 border-info pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="w-5 h-5 text-info" />
                  <h3 className="font-bold text-lg">IMC inferior a 18,5: Delgadez</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Un IMC por debajo de 18,5 indica insuficiencia ponderal. En America Latina, la
                  prevalencia de bajo peso es relativamente baja en la poblacion general adulta
                  (inferior al 3%), pero persisten <strong>focos criticos de desnutricion en comunidades
                  indigenas</strong> de Guatemala, Bolivia, Peru y zonas rurales de Mexico. La ENSANUT
                  reporta tasas de desnutricion cronica de hasta 44% en ninos indigenas mexicanos.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>- Aportes caloricos insuficientes o inseguridad alimentaria</li>
                  <li>- Metabolismo muy rapido o enfermedades cronicas no diagnosticadas</li>
                  <li>- Posible trastorno alimentario (anorexia, bulimia)</li>
                  <li>- Riesgo elevado de carencias nutricionales (hierro, zinc, vitamina A)</li>
                  <li>- En comunidades rurales: acceso limitado a alimentos nutritivos</li>
                </ul>
                <p className="text-info font-medium mt-3">
                  Consejo: Consulte a un medico o nutriologo para identificar la causa. En Mexico,
                  el IMSS ofrece programas de orientacion nutricional gratuitos.
                </p>
              </div>

              {/* Normal */}
              <div className="border-l-4 border-success pl-6 py-4 bg-success/5 rounded-r-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <h3 className="font-bold text-lg">IMC entre 18,5 y 24,9: Peso normal</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Esta es la zona ideal segun la OMS/OPS. Sin embargo, los datos de la ENSANUT 2018-19
                  revelan que <strong>solo aproximadamente el 30% de los adultos mexicanos</strong> se
                  encuentra en este rango. En Espana, segun la AESAN (Agencia Espanola de Seguridad
                  Alimentaria y Nutricion), la proporcion de adultos con peso normal es similar,
                  alrededor del 36%.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>- Riesgos de salud minimizados para diabetes tipo 2 y enfermedades cardiovasculares</li>
                  <li>- Buen equilibrio energetico y metabolismo funcional</li>
                  <li>- Objetivo a mantener con habitos saludables sostenibles</li>
                  <li>- Verificar igualmente el perimetro de cintura (grasa visceral oculta)</li>
                </ul>
                <p className="text-success font-medium mt-3">
                  Consejo: Mantenga sus buenos habitos. Siga las recomendaciones de la OPS:
                  150 minutos de actividad fisica moderada semanal y una dieta rica en frutas, verduras y legumbres.
                </p>
              </div>

              {/* Overweight */}
              <div className="border-l-4 border-warning pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-warning" />
                  <h3 className="font-bold text-lg">IMC entre 25 y 29,9: Sobrepeso</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  El sobrepeso es la categoria mas prevalente en el mundo hispanohablante. Segun datos
                  oficiales, <strong>Mexico registra un 36,1% de sobrepeso</strong> en adultos (ENSANUT),
                  <strong>Espana un 37%</strong> (Encuesta Nacional de Salud), y <strong>Argentina
                  aproximadamente un 28%</strong> (4a Encuesta Nacional de Factores de Riesgo). Chile
                  supera el 39% segun la Encuesta Nacional de Salud chilena.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>- Riesgo aumentado de diabetes tipo 2, hipertension y dislipidemias</li>
                  <li>- Tension arterial potencialmente elevada: frecuente en poblaciones mestizas</li>
                  <li>- Puede deberse a la masa muscular en deportistas (futbolistas, luchadores)</li>
                  <li>- Riesgo de sindrome metabolico incluso sin llegar a obesidad</li>
                  <li>- En Espana: patron mediterraneo con sobrepeso moderado y menor mortalidad</li>
                </ul>
                <p className="text-warning font-medium mt-3">
                  Consejo: Adopte una alimentacion equilibrada. Reduzca el consumo de bebidas azucaradas
                  (refrescos, jugos industriales) y alimentos ultraprocesados. Busque productos con
                  etiquetado frontal favorable.
                </p>
              </div>

              {/* Obesity */}
              <div className="border-l-4 border-destructive pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <h3 className="font-bold text-lg">IMC superior a 30: Obesidad</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  La obesidad es una crisis de salud publica en America Latina. <strong>Mexico alcanza
                  una prevalencia de obesidad cercana al 36%</strong> en adultos, <strong>Chile reporta
                  un 34,4%</strong> (Encuesta Nacional de Salud 2016-17), y <strong>Espana un 16%</strong> segun
                  la AESAN. El sindrome metabolico, que combina obesidad abdominal, resistencia a la
                  insulina, hipertension y dislipidemia, afecta a mas del 40% de los adultos obesos
                  en Mexico y Chile.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>- Clase I (30-34,9): Obesidad moderada - prevalente en toda la region</li>
                  <li>- Clase II (35-39,9): Obesidad severa - riesgo cardiovascular muy elevado</li>
                  <li>- Clase III (40 o mas): Obesidad morbida - necesita intervencion multidisciplinaria</li>
                  <li>- Riesgo de diabetes tipo 2 multiplicado por 5 respecto al peso normal</li>
                  <li>- Alta prevalencia de higado graso no alcoholico en poblaciones hispanicas</li>
                </ul>
                <p className="text-destructive font-medium mt-3">
                  Consejo: Consulte a un endocrinologo o internista. En Mexico, el IMSS y el ISSSTE
                  ofrecen programas de atencion a la obesidad. En Espana, el SNS cubre consultas
                  de nutricion dentro de atencion primaria.
                </p>
              </div>
            </div>
          </div>

          {/* Factors to consider */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Factores a tener en cuenta en la region</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">El IMC puede estar sesgado por:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>La masa muscular</strong>: deportistas, trabajadores manuales y futbolistas profesionales tienen un IMC mas elevado sin exceso de grasa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>La edad</strong>: los adultos mayores pierden masa muscular; en LatAm, la sarcopenia afecta al 15-20% de mayores de 60 anos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>El sexo</strong>: las mujeres latinoamericanas presentan las tasas de obesidad mas altas del mundo segun la OPS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>La etnicidad</strong>: poblaciones indigenas y mestizas pueden tener umbrales metabolicos diferentes; la OPS investiga puntos de corte regionales</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Indicadores complementarios (OMS/OPS):</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Perimetro de cintura OMS</strong>: menor a 94 cm (hombres) / menor a 80 cm (mujeres) - cribado de sindrome metabolico comun en Mexico y Chile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Relacion cintura/cadera</strong>: indicador de distribucion de grasa abdominal, especialmente relevante en poblaciones hispanicas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Hemoglobina glicosilada (HbA1c)</strong>: cribado de diabetes, prioritario segun la ENSANUT por la alta prevalencia en Mexico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Perfil lipidico completo</strong>: trigliceridos, colesterol HDL/LDL - la dislipidemia mixta es frecuente en la region</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Silent crisis in Latin America - NEW */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Globe className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Crisis silenciosa en America Latina</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                America Latina y el Caribe enfrentan una <strong>crisis de obesidad sin precedentes</strong>.
                Segun la OPS/PAHO, la region registra la <strong>tasa mas alta de obesidad femenina del
                mundo</strong>: mas del 30% de las mujeres adultas viven con obesidad, comparado con el
                promedio mundial del 15%. En Mexico, la ENSANUT 2018-19 revelo que el <strong>75,2% de
                los adultos</strong> tiene sobrepeso u obesidad, una de las cifras mas altas a nivel global.
              </p>
              <p>
                Frente a esta emergencia, varios paises hispanohablantes han implementado politicas
                pioneras de salud publica:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                  <span><strong>Etiquetado octogonal (sellos de advertencia)</strong>: Chile fue pionero
                  en 2016, seguido por Mexico (2020), Peru (2019) y Colombia (2022). Los sellos negros
                  advierten sobre exceso de azucares, grasas saturadas, sodio y calorias.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                  <span><strong>Impuesto al refresco en Mexico</strong>: desde 2014, Mexico aplica un
                  impuesto de 1 peso por litro a bebidas azucaradas. Estudios de la OPS muestran
                  una reduccion del 6-12% en el consumo durante los primeros anos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                  <span><strong>Regulacion de publicidad infantil</strong>: Chile prohibio la publicidad
                  de alimentos no saludables dirigida a ninos y la venta de estos productos en escuelas.
                  Mexico siguio con restricciones similares en 2020.</span>
                </li>
              </ul>
              <p>
                <strong>Espana vs. America Latina:</strong> Espana presenta tasas de obesidad
                significativamente menores (16% segun la AESAN) comparadas con Mexico (36%) o Chile
                (34,4%). La dieta mediterranea, el sistema de salud universal (SNS) y la cultura de
                actividad fisica al aire libre contribuyen a esta diferencia. Sin embargo, Espana tambien
                enfrenta una tendencia al alza, especialmente en obesidad infantil, con un 18% de
                ninos con exceso de peso segun el estudio ALADINO.
              </p>
            </div>
          </div>

          {/* Health systems and BMI - NEW */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Sistemas de salud y el IMC</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                El acceso a la evaluacion y tratamiento del sobrepeso y la obesidad varia
                enormemente segun el pais y el sistema de salud al que pertenezca el paciente:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="font-bold mb-3 text-foreground">America Latina</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Mexico (IMSS/ISSSTE)</strong>: el IMSS cubre a mas de 80 millones de
                      derechohabientes e incluye programas de deteccion de obesidad, nutricion y,
                      en casos severos, cirugia bariatrica. El ISSSTE ofrece servicios similares para
                      trabajadores del Estado.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Peru (EsSalud/SIS)</strong>: EsSalud cubre a trabajadores formales
                      con evaluaciones nutricionales basicas. El SIS (Seguro Integral de Salud) atiende
                      a poblaciones vulnerables, aunque el acceso a especialistas en obesidad es limitado
                      fuera de Lima.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Chile (FONASA/ISAPRE)</strong>: FONASA ofrece cobertura publica con
                      Programa de Salud Cardiovascular que incluye control de peso. Las ISAPRE privadas
                      cubren nutricion y cirugia bariatrica con copago variable.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Argentina (PAMI/Obras Sociales)</strong>: las obras sociales cubren
                      consultas nutricionales basicas. La cirugia bariatrica esta cubierta por ley
                      para pacientes con IMC superior a 40 o superior a 35 con comorbilidades.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-foreground">Espana</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                      <span><strong>SNS (Sistema Nacional de Salud)</strong>: cobertura universal y
                      gratuita. El medico de atencion primaria realiza el cribado del IMC y deriva
                      a endocrinologia cuando es necesario.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                      <span><strong>Atencion primaria</strong>: las consultas incluyen calculo de IMC,
                      medicion de perimetro de cintura y consejo dietético como parte del protocolo
                      estandar de prevencion cardiovascular.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                      <span><strong>Cirugia bariatrica</strong>: cubierta por el SNS para pacientes con
                      IMC superior a 40 o superior a 35 con comorbilidades graves, aunque las listas de espera
                      pueden superar los 12 meses segun la comunidad autonoma.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                      <span><strong>Diferencias regionales</strong>: comunidades como Andalucia y
                      Canarias presentan tasas de obesidad superiores a la media espanola, mientras
                      que Pais Vasco y Navarra registran las menores prevalencias.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                <strong>Acceso a cirugia bariatrica:</strong> en America Latina, la cirugia bariatrica
                esta disponible principalmente en el sector privado y en grandes hospitales publicos de
                ciudades capitales. Mexico es lider regional en turismo de cirugia bariatrica, con
                ciudades como Tijuana y Guadalajara ofreciendo procedimientos a una fraccion del costo
                de Estados Unidos. En Espana, el SNS la cubre pero con listas de espera significativas.
              </p>
            </div>
          </div>

          {/* What to do with your result */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Que hacer con su resultado?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Su IMC es solo un punto de partida. Aqui estan los siguientes pasos recomendados
                por la OPS/OMS y los sistemas de salud de la region:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Anote su IMC actual</strong> como referencia y registre la fecha</li>
                <li><strong>Mida su perimetro de cintura</strong> segun el protocolo OMS: a la altura del ombligo, en ayunas, de pie</li>
                <li><strong>Consulte a un profesional de la salud</strong>: en Mexico al IMSS/ISSSTE, en Espana a su medico de cabecera del SNS</li>
                <li><strong>Solicite un perfil metabolico</strong>: glucosa, HbA1c, trigliceridos y colesterol (la ENSANUT muestra alta prevalencia de diabetes no diagnosticada)</li>
                <li><strong>Fije objetivos realistas</strong>: perder 0,5 a 1 kg por semana maximo, siguiendo las guias de la OPS</li>
                <li><strong>Siga su evolucion</strong>: pesese una vez por semana, mismo dia, misma hora, en ayunas</li>
                <li><strong>Revise el etiquetado frontal</strong>: use los sellos octogonales (Mexico, Chile, Peru, Colombia) o el Nutri-Score (Espana) para tomar mejores decisiones alimentarias</li>
              </ol>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Comprender la interpretacion del IMC en el mundo hispanohablante</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                La <strong>interpretacion IMC</strong> es esencial para comprender que significa su
                <strong> resultado IMC</strong> en el contexto de America Latina y Espana. Segun la
                <strong> OPS/PAHO</strong>, la region enfrenta una doble carga de malnutricion: desnutricion
                en comunidades vulnerables y obesidad creciente en zonas urbanas. Saber <strong>leer su
                IMC</strong> permite identificar si se encuentra en una zona de peso saludable segun los
                estandares internacionales adaptados a nuestra region.
              </p>
              <p>
                <strong>Como interpretar el IMC</strong> segun los datos de la <strong>ENSANUT</strong> de
                Mexico y la <strong>AESAN</strong> de Espana? Las categorias OMS definen claramente que
                <strong> significa un IMC</strong> de 22, 25 o 30, pero en America Latina es fundamental
                complementar con el <strong>etiquetado frontal</strong> de advertencia (sellos octogonales)
                y el cribado de sindrome metabolico. El <strong>analisis IMC</strong> debe siempre tener
                en cuenta el contexto regional: la alta prevalencia de diabetes tipo 2, la resistencia a
                la insulina y los patrones alimentarios locales.
              </p>
              <p>
                El <strong>IMC ideal</strong> se situa entre 18,5 y 24,9. <strong>Comprender su IMC</strong>
                tambien es reconocer que las politicas publicas como el <strong>impuesto al refresco en
                Mexico</strong>, el <strong>etiquetado octogonal en Chile, Peru y Colombia</strong>, y la
                <strong> estrategia NAOS de la AESAN en Espana</strong> buscan combatir la epidemia de
                obesidad a nivel poblacional. La <strong>explicacion IMC</strong> completa incluye la
                consideracion de indicadores como el perimetro de cintura, la hemoglobina glicosilada y
                el perfil lipidico, especialmente relevantes en poblaciones hispanicas.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calcule su IMC ahora</h3>
            <p className="text-muted-foreground mb-6">
              Use nuestra calculadora gratuita para conocer su indice de masa corporal
              y comparar con los datos de la OPS para America Latina y Espana
            </p>
            <Link
              to="/es/imc"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calcular mi IMC
            </Link>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Interpretacion IMC - Guia completa America Latina y Espana</p>
        </footer>
      </div>
    </div>
  );
};

export default InterpretacionIMC;
