import { useState, useCallback } from "react";
import { Header } from "@/components/Header";
import { BMICalculator } from "@/components/BMICalculator";
import { BMIGauge } from "@/components/BMIGauge";
import { Dumbbell, AlertTriangle, Target, Scale, Activity, TrendingUp } from "lucide-react";

const IMCDeportista = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  const handleCalculate = useCallback((calculatedBmi: number, w: number, h: number) => {
    setBmi(calculatedBmi);
    setWeight(w);
    setHeight(h);
  }, []);

  // Calculate FFMI if we have data
  const ffmi = weight && height ? (weight * 0.85) / Math.pow(height / 100, 2) : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6">
            <Dumbbell className="w-4 h-4" />
            Calculadora para deportistas
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-orange-500">IMC Deportista</span> : Atención a las limitaciones
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Por qué el IMC no es adecuado para deportistas y qué alternativas utilizar
          </p>
        </header>

        {/* Warning Banner */}
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-orange-500 mb-2">Atención: El IMC está sesgado para deportistas</h3>
              <p className="text-muted-foreground">
                El IMC no distingue entre <strong>masa muscular</strong> y <strong>masa grasa</strong>.
                Un deportista musculoso puede tener un IMC de "sobrepeso" u "obesidad" mientras está en excelente salud.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <BMICalculator onCalculate={handleCalculate} />
          <BMIGauge bmi={bmi} />
        </div>

        {/* FFMI Estimation */}
        {bmi && (
          <div className="glass-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-xl font-display font-bold">Estimación FFMI (Fat-Free Mass Index)</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              El FFMI es un mejor indicador para deportistas ya que tiene en cuenta la masa magra.
            </p>
            <div className="bg-muted/30 rounded-xl p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">FFMI estimado (con 15% de masa grasa)</p>
              <p className="text-3xl font-bold text-orange-500">{ffmi?.toFixed(1)}</p>
              <p className="text-xs text-muted-foreground mt-2">
                Natural: 18-25 | Dopaje probable: &gt;25
              </p>
            </div>
          </div>
        )}

        <div className="space-y-8">
          {/* Why IMC is biased */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Scale className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Por qué el IMC está sesgado en deportistas</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                El <strong>IMC deportista</strong> presenta problemas porque la fórmula no diferencia entre el peso
                del músculo y el de la grasa. Sin embargo, el <strong>músculo es más denso que la grasa</strong>:
                a volumen igual, pesa más.
              </p>
              <p>
                Un culturista de 1,80 m que pesa 100 kg tendrá un <strong>IMC de 30,9</strong> (obesidad), cuando puede
                tener solo <strong>10% de masa grasa</strong> y estar en perfecta salud.
              </p>
            </div>
          </div>

          {/* Examples */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Dumbbell className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Ejemplos concretos</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Musculación / Culturismo</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• IMC a menudo entre 28-35</li>
                  <li>• Masa grasa: 8-15%</li>
                  <li>• Excelente estado de salud</li>
                  <li>• El IMC dice "obesidad" = falso positivo</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">CrossFit / Deportes de fuerza</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• IMC a menudo entre 26-30</li>
                  <li>• Masa grasa: 12-18%</li>
                  <li>• Alto rendimiento atlético</li>
                  <li>• IMC no representativo</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Alternatives */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Target className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Alternativas al IMC para deportistas</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">Masa grasa (%)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Medida directa del porcentaje de grasa corporal.
                </p>
                <p className="text-xs">
                  <strong>Hombre:</strong> 10-20% óptimo<br />
                  <strong>Mujer:</strong> 18-28% óptimo
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">FFMI</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Fat-Free Mass Index: IMC de la masa magra.
                </p>
                <p className="text-xs">
                  <strong>Natural:</strong> 18-25<br />
                  <strong>Elite natural:</strong> 24-26
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">Perímetro de cintura</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Indicador simple de grasa abdominal.
                </p>
                <p className="text-xs">
                  <strong>Hombre:</strong> &lt;94 cm<br />
                  <strong>Mujer:</strong> &lt;80 cm
                </p>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC y deporte: lo que hay que recordar</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                El <strong>cálculo IMC deportista</strong> a menudo da resultados engañosos. Ya practiques
                <strong>musculación</strong>, <strong>CrossFit</strong>, <strong>rugby</strong> o cualquier otro
                deporte de fuerza, tu <strong>IMC atleta</strong> probablemente estará sobrevalorado.
              </p>
              <p>
                El <strong>IMC musculación</strong> es particularmente sesgado: un culturista natural puede alcanzar
                fácilmente un IMC de 27-28 estando definido. El <strong>IMC culturista</strong> profesional a menudo
                supera 30, clasificado como "obeso" cuando el porcentaje de grasa es mínimo.
              </p>
              <p>
                Para deportistas, prefiera el <strong>porcentaje de masa grasa</strong>, el <strong>FFMI</strong>
                (Fat-Free Mass Index) o simplemente el <strong>perímetro de cintura</strong>. Estos indicadores son más
                relevantes para evaluar su composición corporal y su salud real.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Calculadora IMC Deportista - Herramienta informativa únicamente</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCDeportista;
