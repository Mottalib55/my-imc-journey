import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Calculator, Activity, Target, BookOpen, Scale, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";

const IMCEs = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);

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
            <span className="gradient-text">Calculadora IMC</span> - Indice de Masa Corporal
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calcula tu Indice de Masa Corporal al instante y descubre tu rango de peso ideal
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
          {/* What is IMC */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Que es el IMC?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                El <strong>IMC (Indice de Masa Corporal)</strong> es una medida simple que usa tu altura y peso
                para estimar si tienes un peso saludable. La <strong>formula del IMC</strong> divide tu
                peso en kilogramos entre tu altura en metros al cuadrado.
              </p>
              <p>
                El <strong>calculo del IMC</strong> fue inventado en los anos 1830 por el matematico belga
                Adolphe Quetelet. Hoy en dia, es usado en todo el mundo por medicos y organizaciones de
                salud como herramienta de deteccion rapida de categorias de peso.
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
                    <td className="py-3 px-4">≥ 40</td>
                    <td className="py-3 px-4 text-destructive">Riesgo extremo</td>
                  </tr>
                </tbody>
              </table>
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
                <p className="text-2xl font-bold text-primary">IMC = Peso (kg) / Altura (m)</p>
              </div>
              <p>
                Por ejemplo, si pesas 70 kg y mides 1,75 m:<br />
                IMC = 70 / (1,75 x 1,75) = 70 / 3,0625 = <strong>22,9</strong>
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
                Consideraciones especificas para la composicion corporal masculina
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
                Entendiendo el IMC con factores hormonales
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
                Por que el IMC no funciona para personas musculosas
              </p>
            </Link>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Entendiendo tu Indice de Masa Corporal</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                La <strong>calculadora de IMC</strong> es una herramienta esencial para entender tu estado de peso.
                Ya sea que busques una <strong>calculadora IMC gratis</strong>, quieras conocer tu
                <strong> IMC ideal</strong>, o simplemente quieras <strong>calcular IMC</strong> rapidamente,
                nuestra herramienta proporciona resultados instantaneos.
              </p>
              <p>
                <strong>Cual es un buen IMC</strong>? Un <strong>IMC saludable</strong> esta entre 18,5 y 24,9.
                La <strong>tabla de IMC</strong> muestra que un <strong>IMC normal</strong> indica que tienes un
                peso saludable para tu altura. Usa nuestro <strong>verificador de IMC</strong> para saber donde te encuentras.
              </p>
              <p>
                La <strong>calculadora de indice de masa corporal</strong> usa la <strong>ecuacion de IMC</strong> estandar
                reconocida por la OMS. Aunque la <strong>escala de IMC</strong> es util, recuerda que no
                toma en cuenta la masa muscular, edad o composicion corporal.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Calculadora IMC Gratis - Herramienta de Indice de Masa Corporal</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCEs;
