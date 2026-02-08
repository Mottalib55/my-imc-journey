import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Users, Heart, Target, Baby, Scale, Activity, AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const IMCMujer = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(65);
  const [height, setHeight] = useState(165);

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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-pink-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-500 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Calculadora IMC para Mujeres
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-pink-500">IMC Mujer</span>: Calcula tu Indice
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculadora de IMC con consejos personalizados para cada etapa de la vida de una mujer
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-pink-500" />
              Ingresa tus medidas
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Peso</label>
                  <span className="text-2xl font-bold text-pink-500">{weight} kg</span>
                </div>
                <Slider
                  value={[weight]}
                  onValueChange={handleWeightChange}
                  min={35}
                  max={150}
                  step={1}
                  className="py-4"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Altura</label>
                  <span className="text-2xl font-bold text-pink-500">{height} cm</span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={handleHeightChange}
                  min={130}
                  max={200}
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
          {/* Understanding IMC for Women */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Users className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Entendiendo el IMC en Mujeres</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                El <strong>IMC femenino</strong> se calcula de la misma manera que para los hombres, pero la interpretacion difiere ligeramente.
                Las mujeres naturalmente tienen un <strong>porcentaje de grasa corporal mas alto</strong> (20-25% vs 15-20% para hombres),
                lo cual es completamente normal y necesario para el funcionamiento hormonal adecuado.
              </p>
              <p>
                El <strong>perimetro de cintura ideal</strong> para una mujer no deberia exceder <strong>80 cm</strong>
                (riesgo moderado) o <strong>88 cm</strong> (riesgo alto). Este indicador es a menudo mas relevante
                que solo el IMC ya que mide la grasa abdominal, que es mas peligrosa para la salud.
              </p>
            </div>
          </div>

          {/* IMC Table for Women */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Scale className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tabla IMC Mujer</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Categoria</th>
                    <th className="text-left py-3 px-4 font-semibold">IMC</th>
                    <th className="text-left py-3 px-4 font-semibold">Ejemplo (1,65m)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Bajo peso
                    </td>
                    <td className="py-3 px-4">&lt; 18,5</td>
                    <td className="py-3 px-4">&lt; 50 kg</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Peso normal
                    </td>
                    <td className="py-3 px-4">18,5 - 24,9</td>
                    <td className="py-3 px-4">50 - 68 kg</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Sobrepeso
                    </td>
                    <td className="py-3 px-4">25 - 29,9</td>
                    <td className="py-3 px-4">68 - 81 kg</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesidad
                    </td>
                    <td className="py-3 px-4">≥ 30</td>
                    <td className="py-3 px-4">&gt; 81 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Ideal weight by height */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Target className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Peso Ideal Mujer segun Altura</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "1,55 m", min: 44, max: 60, ideal: 53 },
                { height: "1,60 m", min: 47, max: 64, ideal: 56 },
                { height: "1,65 m", min: 50, max: 68, ideal: 60 },
                { height: "1,70 m", min: 53, max: 72, ideal: 64 },
                { height: "1,75 m", min: 57, max: 76, ideal: 67 },
                { height: "1,80 m", min: 60, max: 81, ideal: 71 },
              ].map((item) => (
                <div key={item.height} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className="font-semibold text-pink-500">{item.height}</span>
                  <span className="text-muted-foreground">
                    {item.min} - {item.max} kg <span className="text-success">(ideal: {item.ideal} kg)</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Women-specific factors */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-purple-500/10">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-display font-bold">Ciclo Hormonal y Peso</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>El peso puede variar de <strong>1 a 3 kg</strong> dependiendo del ciclo menstrual</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>La <strong>retencion de liquidos</strong> es normal antes del periodo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Pesate siempre en el <strong>mismo momento</strong> del ciclo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>La <strong>menopausia</strong> cambia los patrones de distribucion de grasa</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-pink-500/10">
                  <Baby className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-display font-bold">Embarazo e IMC</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>El IMC <strong>no aplica</strong> durante el embarazo</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Aumento de peso recomendado: <strong>11-16 kg</strong> (IMC normal)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Consulta a tu <strong>ginecologo</strong> para seguimiento personalizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>La perdida de peso postparto toma <strong>tiempo</strong> - se paciente</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Menopause */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC y Menopausia</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Durante la <strong>menopausia</strong>, los cambios hormonales favorecen el aumento de peso, especialmente en el
                area abdominal. El metabolismo se ralentiza y la masa muscular disminuye naturalmente.
                Por lo tanto es normal ganar algunos kilos despues de los 50.
              </p>
              <p>
                Para mantener un <strong>IMC saludable despues de los 50</strong> o <strong>IMC despues de los 60</strong>,
                enfocate en una dieta rica en <strong>proteinas</strong> y <strong>calcio</strong>,
                y mantiene actividad fisica regular incluyendo <strong>entrenamiento de fuerza</strong>.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Activity className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Todo sobre el IMC Femenino</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                La <strong>calculadora de IMC para mujeres</strong> es una herramienta esencial para evaluar tu <strong>composicion corporal femenina</strong>.
                Ya sea que busques tu <strong>IMC ideal para mujeres</strong> o verificar tu <strong>peso saludable para mujeres</strong>,
                nuestra <strong>calculadora IMC femenina</strong> te da respuestas instantaneas y personalizadas.
              </p>
              <p>
                El <strong>IMC ideal para mujeres</strong> esta entre 19 y 24. Un <strong>IMC normal para mujeres</strong>
                corresponde a un peso que varia por altura. Para una mujer de <strong>1,60 m</strong>,
                el <strong>peso ideal</strong> es aproximadamente 56 kg. Para una mujer de <strong>1,65 m</strong>, es aproximadamente 60 kg.
              </p>
              <p>
                <strong>Cual deberia ser mi IMC mujer</strong>? El rango saludable es 18,5-24,9, pero mujeres atleticas pueden estar ligeramente mas altas.
                El <strong>IMC para mujeres mayores de 40</strong> permanece numericamente igual, pero la composicion corporal cambia.
                El <strong>IMC para mujeres mayores de 50</strong> puede tolerar algunos kilos extra - enfocate en mantenerte activa.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Calculadora IMC para Mujeres - Herramienta Informativa</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCMujer;
