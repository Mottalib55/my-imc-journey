import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Calculator, Activity, Target, BookOpen, Scale, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";

const IMCPt = () => {
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
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-green-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            Calculadora IMC Gratis
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Calculadora IMC</span> - Indice de Massa Corporal
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calcule seu Indice de Massa Corporal instantaneamente e descubra sua faixa de peso ideal
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary" />
              Insira suas medidas
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
              <h2 className="text-2xl font-display font-bold">O que e o IMC?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O <strong>IMC (Indice de Massa Corporal)</strong> e uma medida simples que usa sua altura e peso
                para estimar se voce tem um peso saudavel. A <strong>formula do IMC</strong> divide seu
                peso em quilogramas pela sua altura em metros ao quadrado.
              </p>
              <p>
                O <strong>calculo do IMC</strong> foi inventado na decada de 1830 pelo matematico belga
                Adolphe Quetelet. Hoje, e usado mundialmente por medicos e organizacoes de
                saude como ferramenta de triagem rapida para categorias de peso.
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
                    <th className="text-left py-3 px-4 font-bold">Faixa IMC</th>
                    <th className="text-left py-3 px-4 font-bold">Risco de Saude</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Abaixo do peso
                    </td>
                    <td className="py-3 px-4">&lt; 18,5</td>
                    <td className="py-3 px-4 text-info">Risco de desnutricao</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Peso normal
                    </td>
                    <td className="py-3 px-4">18,5 - 24,9</td>
                    <td className="py-3 px-4 text-success">Risco baixo</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Sobrepeso
                    </td>
                    <td className="py-3 px-4">25 - 29,9</td>
                    <td className="py-3 px-4 text-warning">Risco aumentado</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesidade Classe I
                    </td>
                    <td className="py-3 px-4">30 - 34,9</td>
                    <td className="py-3 px-4 text-destructive">Risco alto</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesidade Classe II
                    </td>
                    <td className="py-3 px-4">35 - 39,9</td>
                    <td className="py-3 px-4 text-destructive">Risco muito alto</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesidade Classe III
                    </td>
                    <td className="py-3 px-4">≥ 40</td>
                    <td className="py-3 px-4 text-destructive">Risco extremo</td>
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
              <h2 className="text-2xl font-display font-bold">Como Calcular o IMC</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>A <strong>formula do IMC</strong> e simples:</p>
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-primary">IMC = Peso (kg) / Altura (m)</p>
              </div>
              <p>
                Por exemplo, se voce pesa 70 kg e mede 1,75 m:<br />
                IMC = 70 / (1,75 x 1,75) = 70 / 3,0625 = <strong>22,9</strong>
              </p>
            </div>
          </div>

          {/* Links to other pages */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/pt/imc-homem" className="glass-card p-6 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Activity className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-bold">IMC Homem</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Consideracoes especificas para composicao corporal masculina
              </p>
            </Link>

            <Link to="/pt/imc-mulher" className="glass-card p-6 hover:border-pink-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-pink-500/10">
                  <Activity className="w-5 h-5 text-pink-500" />
                </div>
                <h3 className="font-bold">IMC Mulher</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Entendendo o IMC com fatores hormonais
              </p>
            </Link>

            <Link to="/pt/imc-atleta" className="glass-card p-6 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-bold">IMC Atleta</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Por que o IMC nao funciona para pessoas musculosas
              </p>
            </Link>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Entendendo seu Indice de Massa Corporal</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                A <strong>calculadora de IMC</strong> e uma ferramenta essencial para entender seu estado de peso.
                Se voce esta procurando uma <strong>calculadora IMC gratis</strong>, quer saber seu
                <strong> IMC ideal</strong>, ou simplesmente quer <strong>calcular IMC</strong> rapidamente,
                nossa ferramenta fornece resultados instantaneos.
              </p>
              <p>
                <strong>Qual e um bom IMC</strong>? Um <strong>IMC saudavel</strong> esta entre 18,5 e 24,9.
                A <strong>tabela de IMC</strong> mostra que um <strong>IMC normal</strong> indica que voce tem um
                peso saudavel para sua altura. Use nosso <strong>verificador de IMC</strong> para descobrir onde voce esta.
              </p>
              <p>
                A <strong>calculadora de indice de massa corporal</strong> usa a <strong>equacao de IMC</strong> padrao
                reconhecida pela OMS. Embora a <strong>escala de IMC</strong> seja util, lembre-se que nao
                leva em conta massa muscular, idade ou composicao corporal.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Calculadora IMC Gratis - Ferramenta de Indice de Massa Corporal</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCPt;
