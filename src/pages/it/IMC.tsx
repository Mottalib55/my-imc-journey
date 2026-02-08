import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Calculator, Activity, Target, BookOpen, Scale, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";

const IMCIt = () => {
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
            <Activity className="w-4 h-4" />
            Simulatore in tempo reale
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Calcola il tuo IMC</span> - Indice di Massa Corporea
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scopri il tuo indice di massa corporea con consigli personalizzati in base alla tua eta
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary" />
              Inserisci le tue misure
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
                  <label className="text-sm font-medium">Altezza</label>
                  <span className="text-2xl font-bold text-primary">{(height / 100).toFixed(2)} m</span>
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
              <h2 className="text-2xl font-display font-bold">Cos'e l'IMC?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'<strong>IMC (Indice di Massa Corporea)</strong>, noto anche come <strong>BMI (Body Mass Index)</strong>,
                e una misura semplice che utilizza la tua altezza e il tuo peso per stimare se hai un peso
                sano. La <strong>formula dell'IMC</strong> divide il tuo peso in chilogrammi per la tua altezza
                in metri al quadrato.
              </p>
              <p>
                Il <strong>calcolo dell'IMC</strong> fu inventato negli anni 1830 dal matematico belga
                Adolphe Quetelet. Oggi viene utilizzato in tutto il mondo da medici e organizzazioni sanitarie
                come strumento di screening rapido per le categorie di peso.
              </p>
            </div>
          </div>

          {/* IMC Categories */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Categorie IMC (OMS)</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Categoria</th>
                    <th className="text-left py-3 px-4 font-bold">Intervallo IMC</th>
                    <th className="text-left py-3 px-4 font-bold">Rischio per la salute</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Sottopeso
                    </td>
                    <td className="py-3 px-4">&lt; 18,5</td>
                    <td className="py-3 px-4 text-info">Rischio di malnutrizione</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Normopeso
                    </td>
                    <td className="py-3 px-4">18,5 - 24,9</td>
                    <td className="py-3 px-4 text-success">Rischio basso</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Sovrappeso
                    </td>
                    <td className="py-3 px-4">25 - 29,9</td>
                    <td className="py-3 px-4 text-warning">Rischio aumentato</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesita Classe I
                    </td>
                    <td className="py-3 px-4">30 - 34,9</td>
                    <td className="py-3 px-4 text-destructive">Rischio elevato</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesita Classe II
                    </td>
                    <td className="py-3 px-4">35 - 39,9</td>
                    <td className="py-3 px-4 text-destructive">Rischio molto elevato</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesita Classe III
                    </td>
                    <td className="py-3 px-4">&ge; 40</td>
                    <td className="py-3 px-4 text-destructive">Rischio estremamente elevato</td>
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
              <h2 className="text-2xl font-display font-bold">Come calcolare l'IMC</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>La <strong>formula dell'IMC</strong> e semplice:</p>
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-primary">IMC = Peso (kg) / Altezza² (m)</p>
              </div>
              <p>
                Ad esempio, se pesi 70 kg e sei alto 1,75 m:<br />
                IMC = 70 / (1,75 x 1,75) = 70 / 3,0625 = <strong>22,9</strong>
              </p>
              <p>
                Questa persona ha un <strong>IMC normale</strong>, che indica un <strong>peso sano</strong>.
              </p>
            </div>
          </div>

          {/* Links to other pages */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/it/imc-uomo" className="glass-card p-6 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Activity className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-bold">IMC Uomo</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Considerazioni specifiche per la composizione corporea maschile
              </p>
            </Link>

            <Link to="/it/imc-donna" className="glass-card p-6 hover:border-pink-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-pink-500/10">
                  <Activity className="w-5 h-5 text-pink-500" />
                </div>
                <h3 className="font-bold">IMC Donna</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Comprendere l'IMC considerando i fattori ormonali femminili
              </p>
            </Link>

            <Link to="/it/imc-sportivo" className="glass-card p-6 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-bold">IMC Sportivo</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Perche l'IMC non e affidabile per le persone muscolose
              </p>
            </Link>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Comprendere il tuo Indice di Massa Corporea</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Il <strong>calcolatore IMC</strong> e uno strumento essenziale per comprendere il tuo stato di peso.
                Che tu stia cercando un <strong>calcolatore IMC gratuito</strong>, voglia conoscere il tuo
                <strong> IMC ideale</strong>, o semplicemente voglia <strong>calcolare l'IMC</strong> rapidamente,
                il nostro strumento fornisce risultati istantanei.
              </p>
              <p>
                <strong>Qual e un buon IMC</strong>? Un <strong>IMC sano</strong> e compreso tra 18,5 e 24,9.
                La <strong>tabella dell'IMC</strong> mostra che un <strong>IMC normale</strong> indica che hai un
                peso sano per la tua altezza. Utilizza il nostro <strong>verificatore di IMC</strong> per scoprire dove ti trovi.
              </p>
              <p>
                Il <strong>calcolatore dell'indice di massa corporea</strong> utilizza l'<strong>equazione dell'IMC</strong> standard
                riconosciuta dall'OMS. Sebbene la <strong>scala dell'IMC</strong> sia utile, ricorda che non
                tiene conto della massa muscolare, dell'eta o della composizione corporea.
              </p>
              <p>
                Il <strong>calcolo dell'IMC</strong> e un primo passo importante per valutare la propria salute.
                Tuttavia, per un'analisi completa, e sempre consigliabile rivolgersi a un <strong>medico</strong> o a un
                <strong> nutrizionista</strong>. L'IMC non distingue tra <strong>massa grassa</strong> e
                <strong> massa magra</strong>, percio potrebbe non essere accurato per <strong>sportivi</strong>,
                <strong> donne in gravidanza</strong> o <strong>anziani</strong>.
              </p>
              <p>
                Utilizza regolarmente il nostro <strong>calcolatore IMC online</strong> per monitorare i tuoi progressi
                e raggiungere il tuo <strong>peso ideale</strong>. Che tu voglia <strong>perdere peso</strong>,
                <strong> aumentare di massa</strong> o semplicemente <strong>controllare la tua salute</strong>,
                il nostro strumento ti accompagna con <strong>consigli personalizzati</strong>.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 Calcolatore IMC</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCIt;
