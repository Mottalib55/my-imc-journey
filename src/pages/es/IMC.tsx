import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Calculator, Activity, Target, BookOpen, Scale, TrendingUp, AlertTriangle, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";
import { RelatedPages } from "@/components/RelatedPages";

const IMCEs = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(74);
  const [height, setHeight] = useState(169);

  const calculateBMI = useCallback((w: number, h: number) => {
    const heightInM = h / 100;
    const calculatedBmi = w / (heightInM * heightInM);
    setBmi(calculatedBmi);
  }, []);

  // Calculate BMI on initial load
  useEffect(() => {
    calculateBMI(weight, height);
  }, []);

  const handleWeightChange = (value: number[]) => {
    setWeight(value[0]);
    calculateBMI(value[0], height);
  };

  const handleHeightChange = (value: number[]) => {
    setHeight(value[0]);
    calculateBMI(weight, value[0]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-red-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            Calculadora IMC Gratis
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Calculadora IMC Gratis Online</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calcula tu Indice de Masa Corporal con valores adaptados a la realidad de America Latina y Espana
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary" />
              Ingresa tus medidas
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Peso</label>
                  <span className="text-2xl font-bold text-primary">{weight} kg</span>
                </div>
                <Slider
                  value={[weight]}
                  onValueChange={handleWeightChange}
                  min={30}
                  max={200}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>30 kg</span>
                  <span>200 kg</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Altura</label>
                  <span className="text-2xl font-bold text-primary">{height} cm</span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={handleHeightChange}
                  min={100}
                  max={220}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>100 cm</span>
                  <span>220 cm</span>
                </div>
              </div>
            </div>
          </div>

          <BMIGauge bmi={bmi} />
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Contextualized Intro: IMC in Latin America and Spain */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">El IMC en America Latina y Espana: Una Realidad Preocupante</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                El <strong>Indice de Masa Corporal (IMC)</strong> tiene un significado particular en el mundo
                hispanohablante. Segun la <strong>Encuesta Nacional de Salud y Nutricion (ENSANUT)</strong> de
                Mexico, el 36,1% de la poblacion adulta mexicana vive con obesidad, convirtiendo al pais en uno
                de los mas afectados del mundo. En <strong>Espana</strong>, la Agencia Espanola de Seguridad
                Alimentaria y Nutricion (<strong>AESAN</strong>) reporta una prevalencia de obesidad del 16% en
                adultos, con un 37% adicional en sobrepeso.
              </p>
              <p>
                La Organizacion Panamericana de la Salud (<strong>OPS/PAHO</strong>) alerta que America Latina
                presenta las tasas mas altas de obesidad femenina del planeta: en paises como Chile, Argentina
                y Mexico, mas del 30% de las mujeres adultas viven con obesidad. Esta realidad hace que
                conocer tu IMC no sea solo un ejercicio de curiosidad, sino una herramienta de prevencion
                vital para millones de personas en nuestra region.
              </p>
              <p>
                A diferencia de otras regiones, en America Latina la obesidad coexiste con la desnutricion
                en un fenomeno llamado <strong>"doble carga nutricional"</strong>: familias donde conviven
                ninos con bajo peso y adultos con sobrepeso. Esta paradoja hace que el IMC sea especialmente
                relevante como primer indicador para orientar decisiones de salud publica y personal.
              </p>
            </div>
          </div>

          {/* Crisis Silenciosa en America Latina */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Crisis Silenciosa en America Latina</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                America Latina enfrenta una <strong>epidemia de obesidad</strong> que la OPS ha catalogado como
                la principal amenaza de salud publica de la region en el siglo XXI. Las cifras son contundentes:
                segun datos de la OPS, el <strong>62% de los adultos latinoamericanos</strong> tiene sobrepeso u
                obesidad, muy por encima del promedio mundial del 39%.
              </p>
              <p>
                <strong>Mexico</strong> ocupa el primer lugar en America Latina en obesidad adulta y el segundo
                a nivel mundial. <strong>Chile</strong> le sigue de cerca, con un 74% de su poblacion adulta en
                sobrepeso u obesidad. En <strong>Argentina</strong>, la Encuesta Nacional de Factores de Riesgo
                revela que el 61,6% de los adultos tiene exceso de peso. <strong>Colombia</strong>, Brasil y Peru
                muestran tendencias similares al alza, con incrementos de entre 5 y 10 puntos porcentuales en la
                ultima decada.
              </p>
              <p>
                Lo mas alarmante es el impacto en la <strong>poblacion infantil</strong>: UNICEF reporta que
                America Latina tiene la tasa mas alta de obesidad infantil de los paises en desarrollo, con
                casi 4 millones de ninos menores de 5 anos con sobrepeso. La transicion alimentaria de dietas
                tradicionales ricas en maiz, frijol, frutas y verduras hacia productos ultraprocesados,
                bebidas azucaradas y comida rapida es la principal responsable de esta crisis.
              </p>
              <p>
                La diabetes tipo 2, directamente vinculada al exceso de peso, se ha convertido en la primera
                causa de muerte en Mexico y una de las principales en toda la region. Cada punto de IMC por
                encima de 25 incrementa significativamente el riesgo de hipertension, enfermedades cardiovasculares
                y ciertos tipos de cancer.
              </p>
            </div>
          </div>

          {/* IMC Categories */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Categorias IMC (OMS)</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Categoria</th>
                    <th className="text-left py-3 px-4 font-bold">Rango IMC</th>
                    <th className="text-left py-3 px-4 font-bold">Riesgo de Salud</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Bajo peso
                    </td>
                    <td className="py-3 px-4">&lt; 18,5</td>
                    <td className="py-3 px-4 text-info">Riesgo de desnutricion</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Peso normal
                    </td>
                    <td className="py-3 px-4">18,5 - 24,9</td>
                    <td className="py-3 px-4 text-success">Riesgo bajo</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Sobrepeso
                    </td>
                    <td className="py-3 px-4">25 - 29,9</td>
                    <td className="py-3 px-4 text-warning">Riesgo aumentado</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesidad Clase I
                    </td>
                    <td className="py-3 px-4">30 - 34,9</td>
                    <td className="py-3 px-4 text-destructive">Riesgo alto</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesidad Clase II
                    </td>
                    <td className="py-3 px-4">35 - 39,9</td>
                    <td className="py-3 px-4 text-destructive">Riesgo muy alto</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesidad Clase III
                    </td>
                    <td className="py-3 px-4">&ge; 40</td>
                    <td className="py-3 px-4 text-destructive">Riesgo extremo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Etiquetado Frontal: La Revolucion del Octogono */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Heart className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Etiquetado Frontal: La Revolucion del Octogono</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                America Latina lidera una innovacion mundial en la lucha contra la obesidad: el
                <strong> etiquetado frontal de advertencia</strong>. En 2016, <strong>Chile</strong> se convirtio
                en el primer pais del mundo en implementar los sellos octagonales negros con leyendas como
                "Alto en Azucares", "Alto en Grasas Saturadas", "Alto en Sodio" y "Alto en Calorias" en
                los envases de alimentos procesados.
              </p>
              <p>
                El exito chileno fue rotundo: estudios de la Universidad de Chile y del Instituto Nacional de
                Salud Publica mostraron una <strong>reduccion del 25% en la compra de bebidas azucaradas</strong> y
                del 17% en la compra de cereales con sellos de advertencia durante los primeros 18 meses. Las
                empresas reformularon masivamente sus productos para evitar los sellos, reduciendo en promedio
                un 20% el contenido de azucar y sodio.
              </p>
              <p>
                <strong>Mexico</strong> adopto un sistema similar en 2020, anadiendo la prohibicion de
                personajes animados y celebridades en productos con sellos. <strong>Peru</strong> implemento sus
                octogonos en 2019, <strong>Uruguay</strong> en 2021 y <strong>Colombia</strong> en 2023. Argentina
                aprobo su ley de etiquetado frontal en 2021. Espana, por su parte, utiliza el sistema
                <strong> Nutri-Score</strong> de origen frances, con una escala de letras de la A (mas saludable)
                a la E (menos saludable).
              </p>
              <p>
                Estas politicas publicas complementan el uso individual del IMC: mientras el IMC te dice donde
                estas, el etiquetado frontal te ayuda a tomar mejores decisiones alimentarias para llegar a
                donde quieres estar. Juntos, representan un enfoque integral de prevencion que esta dando
                resultados medibles en la reduccion de tasas de obesidad en la region.
              </p>
            </div>
          </div>

          {/* How to calculate */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Como Calcular el IMC</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>La <strong>formula del IMC</strong> es simple:</p>
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-primary">IMC = Peso (kg) / Altura (m)&sup2;</p>
              </div>
              <p>
                Usando el promedio latinoamericano, si pesas <strong>74 kg</strong> y mides <strong>1,69 m</strong>:<br />
                IMC = 74 / (1,69 x 1,69) = 74 / 2,8561 = <strong>25,9</strong>
              </p>
              <p>
                Este resultado de 25,9 se situa en la categoria de <strong>sobrepeso</strong> segun la OMS, lo
                cual refleja precisamente la realidad estadistica de la region: el latinoamericano promedio se
                encuentra ligeramente por encima del rango saludable. Esto no es una coincidencia, sino el
                resultado de decadas de transicion alimentaria hacia dietas ricas en ultraprocesados y bebidas
                azucaradas.
              </p>
              <p>
                Es importante recordar que en el sistema metrico hispanohablante utilizamos la <strong>coma
                decimal</strong> (25,9 y no 25.9). Nuestra calculadora ya muestra los resultados en el formato
                que utilizamos en Espana y America Latina.
              </p>
            </div>
          </div>

          {/* Links to other pages */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/es/imc-hombre" className="glass-card p-6 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Activity className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-bold">IMC Hombre</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Valores de referencia para la composicion corporal masculina en poblacion hispana
              </p>
            </Link>

            <Link to="/es/imc-mujer" className="glass-card p-6 hover:border-pink-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-pink-500/10">
                  <Activity className="w-5 h-5 text-pink-500" />
                </div>
                <h3 className="font-bold">IMC Mujer</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Factores hormonales y de composicion corporal en la mujer latinoamericana
              </p>
            </Link>

            <Link to="/es/imc-deportista" className="glass-card p-6 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-bold">IMC Deportista</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Limitaciones del IMC en futbolistas, boxeadores y atletas de alta competencia
              </p>
            </Link>
          </div>

          {/* SEO Content: Latin America + Spain specific */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Calculadora de IMC para America Latina y Espana</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Nuestra <strong>calculadora de IMC gratis</strong> esta disenada teniendo en cuenta la realidad
                de la poblacion hispanohablante. Los valores predeterminados reflejan los promedios de peso y
                altura reportados por la <strong>ENSANUT</strong> en Mexico, el <strong>INE</strong> en Espana y
                los estudios demograficos de la <strong>OPS (Organizacion Panamericana de la Salud)</strong> para
                el conjunto de America Latina. Conocer tu <strong>IMC ideal</strong> es el primer paso hacia una
                mejor salud.
              </p>
              <p>
                En una region donde la <strong>comida chatarra</strong> ha desplazado progresivamente a la
                <strong> alimentacion tradicional</strong> basada en maiz, frijol, chile, quinoa, papa y frutas
                tropicales, calcular tu IMC regularmente se vuelve una herramienta preventiva fundamental. La
                <strong> AESAN</strong> en Espana y las secretarias de salud de cada pais latinoamericano
                recomiendan monitorear el peso corporal como parte de los chequeos medicos de rutina.
              </p>
              <p>
                Esta <strong>calculadora IMC online</strong> utiliza la formula estandar reconocida por la
                <strong> OMS</strong> y adoptada por los sistemas de salud de Mexico (IMSS, ISSSTE), Espana
                (Sistema Nacional de Salud), Colombia (EPS), Chile (FONASA), Argentina (obras sociales) y el
                resto de la region. La <strong>tabla de IMC</strong> con las categorias de la OMS te permite
                interpretar tu resultado y comprender los riesgos asociados a cada rango de peso.
              </p>
              <p>
                Recuerda que el IMC es un <strong>indicador de referencia</strong>, no un diagnostico. Para una
                evaluacion completa, consulta con tu medico o nutriologo, quien puede complementar el IMC con
                mediciones de circunferencia de cintura, porcentaje de grasa corporal y analisis de sangre. En
                America Latina, las unidades basicas de salud, centros de salud comunitarios y consultorios
                medicos ofrecen estas evaluaciones de manera accesible.
              </p>
            </div>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 Calculadora IMC Gratis - Herramienta de Indice de Masa Corporal</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCEs;
