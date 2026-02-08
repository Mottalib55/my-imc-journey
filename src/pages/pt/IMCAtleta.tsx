import { useState, useCallback } from "react";
import { Header } from "@/components/Header";
import { BMICalculator } from "@/components/BMICalculator";
import { BMIGauge } from "@/components/BMIGauge";
import { Dumbbell, AlertTriangle, Target, Scale, Activity, TrendingUp } from "lucide-react";

const IMCAtleta = () => {
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
            Calculadora para atletas
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-orange-500">IMC Atleta</span> : Atenção às limitações
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Por que o IMC não é adequado para atletas e quais alternativas usar
          </p>
        </header>

        {/* Warning Banner */}
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-orange-500 mb-2">Atenção: O IMC é enviesado para atletas</h3>
              <p className="text-muted-foreground">
                O IMC não distingue <strong>massa muscular</strong> de <strong>massa gorda</strong>.
                Um atleta musculoso pode ter um IMC de "sobrepeso" ou "obesidade" mesmo estando em excelente saúde.
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
              <h2 className="text-xl font-display font-bold">Estimativa FFMI (Fat-Free Mass Index)</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              O FFMI é um indicador melhor para atletas pois leva em conta a massa magra.
            </p>
            <div className="bg-muted/30 rounded-xl p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">FFMI estimado (com 15% de gordura corporal)</p>
              <p className="text-3xl font-bold text-orange-500">{ffmi?.toFixed(1)}</p>
              <p className="text-xs text-muted-foreground mt-2">
                Natural: 18-25 | Doping provável: &gt;25
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
              <h2 className="text-2xl font-display font-bold">Por que o IMC é enviesado em atletas</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O <strong>IMC atleta</strong> é problemático porque a fórmula não faz diferença entre o peso
                dos músculos e o da gordura. Ora, o <strong>músculo é mais denso que a gordura</strong>:
                com volume igual, pesa mais.
              </p>
              <p>
                Um fisiculturista de 1m80 pesando 100 kg terá um <strong>IMC de 30,9</strong> (obesidade), quando pode
                ter apenas <strong>10% de gordura corporal</strong> e estar em perfeita saúde.
              </p>
            </div>
          </div>

          {/* Examples */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Dumbbell className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Exemplos concretos</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Musculação / Fisiculturismo</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• IMC frequentemente entre 28-35</li>
                  <li>• Gordura corporal: 8-15%</li>
                  <li>• Excelente estado de saúde</li>
                  <li>• O IMC diz "obesidade" = falso positivo</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">CrossFit / Esportes de força</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• IMC frequentemente entre 26-30</li>
                  <li>• Gordura corporal: 12-18%</li>
                  <li>• Alta performance atlética</li>
                  <li>• IMC não representativo</li>
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
              <h2 className="text-2xl font-display font-bold">Alternativas ao IMC para atletas</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">Gordura corporal (%)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Medição direta do percentual de gordura corporal.
                </p>
                <p className="text-xs">
                  <strong>Homem:</strong> 10-20% ideal<br />
                  <strong>Mulher:</strong> 18-28% ideal
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">FFMI</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Fat-Free Mass Index: IMC da massa magra.
                </p>
                <p className="text-xs">
                  <strong>Natural:</strong> 18-25<br />
                  <strong>Elite natural:</strong> 24-26
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">Circunferência da cintura</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Indicador simples de gordura abdominal.
                </p>
                <p className="text-xs">
                  <strong>Homem:</strong> &lt;94 cm<br />
                  <strong>Mulher:</strong> &lt;80 cm
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
              <h2 className="text-2xl font-display font-bold">IMC e esporte: o que você precisa saber</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O <strong>cálculo IMC atleta</strong> frequentemente dá resultados enganosos. Seja você praticante de
                <strong>musculação</strong>, <strong>CrossFit</strong>, <strong>rugby</strong> ou qualquer outro
                esporte de força, seu <strong>IMC atleta</strong> provavelmente será superestimado.
              </p>
              <p>
                O <strong>IMC musculação</strong> é particularmente enviesado: um fisiculturista natural pode facilmente
                atingir um IMC de 27-28 estando definido. O <strong>IMC fisiculturista</strong> profissional frequentemente
                ultrapassa 30, classificado como "obeso" quando o percentual de gordura é mínimo.
              </p>
              <p>
                Para atletas, prefira o <strong>percentual de gordura corporal</strong>, o <strong>FFMI</strong>
                (Fat-Free Mass Index) ou a simples <strong>circunferência da cintura</strong>. Estes indicadores são mais relevantes
                para avaliar sua composição corporal e sua saúde real.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Calculadora IMC Atleta - Ferramenta informativa apenas</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCAtleta;
