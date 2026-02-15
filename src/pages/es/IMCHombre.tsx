import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { User, Dumbbell, Target, Heart, Scale, Activity, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { RelatedPages } from "@/components/RelatedPages";

const IMCHombre = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(78);
  const [height, setHeight] = useState(172);

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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-6">
            <User className="w-4 h-4" />
            Calculadora IMC para Hombres
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-blue-500">IMC Hombre</span> : Calculadora IMC Masculino y Peso
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            En America Latina, el 62% de los hombres tienen sobrepeso u obesidad (OPS/PAHO 2023). Calculadora IMC con referencias de ENSANUT, AESAN y la OMS.
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-500" />
              Ingresa tus medidas
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Peso</label>
                  <span className="text-2xl font-bold text-blue-500">{weight} kg</span>
                </div>
                <Slider
                  value={[weight]}
                  onValueChange={handleWeightChange}
                  min={40}
                  max={200}
                  step={1}
                  className="py-4"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Altura</label>
                  <span className="text-2xl font-bold text-blue-500">{height} cm</span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={handleHeightChange}
                  min={140}
                  max={220}
                  step={1}
                  className="py-4"
                />
              </div>
            </div>
          </div>

          <BMIGauge bmi={bmi} />
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Understanding IMC for Men */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <User className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Entendiendo el IMC en Hombres Hispanos</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                El <strong>IMC masculino</strong> en America Latina y Espana presenta cifras alarmantes.
                En <strong>Mexico, el 73% de los hombres tienen sobrepeso u obesidad</strong> segun la ENSANUT 2022,
                mientras que en <strong>Espana el 60,7% de los hombres</strong> padecen sobrepeso u obesidad segun la AESAN/ENPE.
                Los hombres naturalmente tienen <strong>mas masa muscular</strong> y un <strong>porcentaje de grasa corporal mas bajo</strong>
                (15-20% vs 20-25% para mujeres).
              </p>
              <p>
                El <strong>hombre latinoamericano promedio</strong> mide <strong>1,72 m</strong> y pesa <strong>78 kg</strong>,
                lo que refleja la tendencia al sobrepeso en la region. El <strong>perimetro de cintura</strong> es un indicador
                clave para hombres hispanos: no deberia exceder <strong>90 cm</strong> (riesgo moderado) o
                <strong> 102 cm</strong> (riesgo alto) segun las directrices adaptadas de la OMS/OPS.
              </p>
              <p>
                El <strong>sindrome metabolico</strong> es particularmente prevalente en poblaciones hispanas, combinando
                obesidad abdominal, hipertension, glucosa elevada y dislipidemia. Los estudios muestran una predisposicion
                genetica en hombres de origen latino que hace esencial el monitoreo regular del IMC y la circunferencia de cintura.
              </p>
            </div>
          </div>

          {/* IMC Table for Men */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Scale className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tabla IMC Hombre</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Categoria</th>
                    <th className="text-left py-3 px-4 font-semibold">IMC</th>
                    <th className="text-left py-3 px-4 font-semibold">Ejemplo (1,72 m, promedio Lat. Am.)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Bajo peso
                    </td>
                    <td className="py-3 px-4">&lt; 18,5</td>
                    <td className="py-3 px-4">&lt; 55 kg</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Peso normal
                    </td>
                    <td className="py-3 px-4">18,5 - 24,9</td>
                    <td className="py-3 px-4">55 - 74 kg</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Sobrepeso
                    </td>
                    <td className="py-3 px-4">25 - 29,9</td>
                    <td className="py-3 px-4">74 - 89 kg</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesidad
                    </td>
                    <td className="py-3 px-4">≥ 30</td>
                    <td className="py-3 px-4">&gt; 89 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Ideal weight by height */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Peso Ideal Hombre segun Altura</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "1,64 m", min: 50, max: 67, ideal: 59 },
                { height: "1,68 m", min: 52, max: 70, ideal: 62 },
                { height: "1,72 m (prom.)", min: 55, max: 74, ideal: 65 },
                { height: "1,75 m", min: 57, max: 76, ideal: 67 },
                { height: "1,78 m", min: 59, max: 79, ideal: 70 },
                { height: "1,82 m", min: 61, max: 83, ideal: 73 },
              ].map((item) => (
                <div key={item.height} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className="font-semibold text-blue-500">{item.height}</span>
                  <span className="text-muted-foreground">
                    {item.min} - {item.max} kg <span className="text-success">(ideal: {item.ideal} kg)</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tips for men */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-success/10">
                  <Dumbbell className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-xl font-display font-bold">Ejercicio y Musculo</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>El <strong>futbol</strong> es el ejercicio mas popular entre hombres en America Latina, ideal para cardio y resistencia</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>La OPS recomienda <strong>150 min de actividad moderada</strong> por semana para hombres adultos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Solo el <strong>39% de los hombres latinoamericanos</strong> cumplen las recomendaciones de actividad fisica</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>El <strong>CrossFit y la cultura del gimnasio</strong> crecen rapidamente en Mexico, Brasil y Colombia</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-warning/10">
                  <Heart className="w-6 h-6 text-warning" />
                </div>
                <h3 className="text-xl font-display font-bold">Salud Masculina en America Latina</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>La <strong>diabetes tipo 2 afecta al 14%</strong> de los hombres mexicanos (ENSANUT)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>Las <strong>enfermedades cardiovasculares</strong> son la primera causa de muerte masculina en America Latina (OPS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>El <strong>consumo excesivo de alcohol</strong> aumenta el riesgo: 21,3% de hombres mexicanos</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>Hipertension: 30%</strong> de los hombres latinoamericanos no diagnosticados</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Crisis de Obesidad Masculina en América Latina */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Crisis de Obesidad Masculina en America Latina</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>Mexico tiene la tasa mas alta de obesidad masculina en America Latina</strong>, con un 36,1% de hombres
                afectados segun la ENSANUT. Esta cifra posiciona al pais entre los mas criticos del mundo en materia de
                salud metabolica masculina.
              </p>
              <p>
                La transicion de la <strong>dieta tradicional</strong> (frijoles, maiz, verduras, frutas frescas) hacia la
                <strong> comida chatarra y los alimentos ultraprocesados</strong> es el principal factor detras de esta epidemia.
                El consumo de bebidas azucaradas y productos industrializados ha aumentado dramaticamente en las ultimas dos decadas.
              </p>
              <p>
                <strong>Chile lidera las politicas de prevencion</strong> con su ley de etiquetado octagonal, que logro reducir
                un <strong>25% el consumo de azucar</strong> desde su implementacion. Este modelo esta siendo adoptado por
                Mexico, Peru y Uruguay como estrategia contra la obesidad.
              </p>
              <p>
                En Mexico, el <strong>IMSS ofrece programas gratuitos</strong> de deteccion y tratamiento de la obesidad,
                incluyendo evaluacion nutricional, apoyo psicologico y seguimiento medico para hombres con IMC superior a 30.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Activity className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC Masculino en America Latina y Espana</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                La <strong>calculadora de IMC para hombres</strong> es una herramienta esencial en America Latina y Espana,
                donde la obesidad masculina alcanza niveles criticos. Segun la <strong>OPS/PAHO</strong>, la ENSANUT de Mexico
                y la <strong>AESAN</strong> de Espana, mas de 6 de cada 10 hombres hispanohablantes viven con sobrepeso.
                Nuestra <strong>calculadora IMC masculina</strong> utiliza datos de referencia del <strong>Ministerio de Salud</strong>
                y organismos internacionales para ofrecer resultados precisos.
              </p>
              <p>
                Para un hombre de <strong>1,72 m</strong> (promedio latinoamericano), el <strong>peso ideal es alrededor de 65 kg</strong>,
                correspondiente a un IMC de 22. El <strong>IMC normal para hombres</strong> esta entre 18,5 y 24,9,
                pero las diferencias regionales son significativas: en <strong>Argentina</strong>, la estatura promedio masculina
                es 1,74 m con mayor consumo de carne roja; en <strong>Mexico</strong>, 1,69 m con alta incidencia de sindrome metabolico;
                y en <strong>Espana</strong>, 1,76 m con la dieta mediterranea como factor protector.
              </p>
              <p>
                <strong>Cual deberia ser mi IMC hombre</strong>? El rango ideal es 20-25, pero hombres atleticos pueden estar mas altos.
                El <strong>IMC para hombres mayores de 50</strong> puede tolerar valores ligeramente mas altos (hasta 27) sin riesgo mayor.
                Lo clave es combinar actividad fisica regular, alimentacion balanceada y controles medicos periodicos con los
                servicios publicos de salud disponibles en cada pais (IMSS en Mexico, EsSalud en Peru, Sistema Unico de Salud en Brasil).
              </p>
            </div>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Calculadora IMC para Hombres - Herramienta Informativa</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCHombre;
