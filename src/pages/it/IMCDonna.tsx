import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Users, Heart, Target, Baby, Scale, Activity, AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const IMCDonna = () => {
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

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-pink-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-500 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            IMC per le Donne
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-pink-500">IMC per le Donne</span>: Calcola il tuo indice
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calcolatore IMC con consigli personalizzati per ogni fase della vita di una donna
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-pink-500" />
              Inserisci le tue misure
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
                  <label className="text-sm font-medium">Altezza</label>
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
              <h2 className="text-2xl font-display font-bold">Comprendere l'IMC nella donna</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'<strong>IMC femminile</strong> si calcola con la stessa formula utilizzata per gli uomini, ma l'interpretazione
                differisce leggermente. Le donne hanno naturalmente una <strong>percentuale di grasso corporeo piu elevata</strong>
                (20-25% contro 15-20% negli uomini), il che e del tutto normale e necessario per il corretto
                funzionamento ormonale.
              </p>
              <p>
                La <strong>circonferenza vita ideale</strong> per una donna non dovrebbe superare <strong>80 cm</strong>
                (rischio moderato) o <strong>88 cm</strong> (rischio elevato). Questo indicatore e spesso piu pertinente
                del solo IMC poiche misura il grasso addominale, piu pericoloso per la salute.
              </p>
            </div>
          </div>

          {/* BMI Table for Women */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Scale className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tabella IMC Donna</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Categoria</th>
                    <th className="text-left py-3 px-4 font-semibold">IMC</th>
                    <th className="text-left py-3 px-4 font-semibold">Esempio (1,65 m)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Sottopeso
                    </td>
                    <td className="py-3 px-4">&lt; 18,5</td>
                    <td className="py-3 px-4">&lt; 50 kg</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Normopeso
                    </td>
                    <td className="py-3 px-4">18,5 - 24,9</td>
                    <td className="py-3 px-4">50 - 68 kg</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Sovrappeso
                    </td>
                    <td className="py-3 px-4">25 - 29,9</td>
                    <td className="py-3 px-4">68 - 81 kg</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesita
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
              <h2 className="text-2xl font-display font-bold">Peso ideale donna per altezza</h2>
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
                    {item.min} - {item.max} kg <span className="text-success">(ideale: {item.ideal} kg)</span>
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
                <h3 className="text-xl font-display font-bold">Ciclo ormonale e peso</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Il peso puo variare da <strong>1 a 3 kg</strong> a seconda del ciclo mestruale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>La <strong>ritenzione idrica</strong> e normale prima delle mestruazioni</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Pesatevi sempre nello <strong>stesso momento</strong> del ciclo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>La <strong>menopausa</strong> modifica la distribuzione del grasso corporeo</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-pink-500/10">
                  <Baby className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-display font-bold">Gravidanza e IMC</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>L'IMC <strong>non si applica</strong> durante la gravidanza</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Aumento di peso raccomandato: <strong>11-16 kg</strong> (IMC normale)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Consultate il vostro <strong>ginecologo</strong> per un monitoraggio personalizzato</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>La perdita di peso post-parto richiede <strong>tempo</strong> - siate pazienti</span>
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
              <h2 className="text-2xl font-display font-bold">IMC e menopausa</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Durante la <strong>menopausa</strong>, i cambiamenti ormonali favoriscono l'aumento di peso, soprattutto
                a livello addominale. Il metabolismo rallenta e la massa muscolare diminuisce naturalmente.
                E quindi normale prendere qualche chilo dopo i 50 anni.
              </p>
              <p>
                Per mantenere un <strong>IMC sano dopo i 50 anni</strong> o un <strong>IMC dopo i 60 anni</strong> nella norma,
                privilegiate un'alimentazione ricca di <strong>proteine</strong> e <strong>calcio</strong>,
                e mantenete un'attivita fisica regolare che includa il <strong>rafforzamento muscolare</strong>.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Activity className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tutto sull'IMC femminile</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Il <strong>calcolatore IMC per donne</strong> e uno strumento essenziale per valutare la vostra <strong>composizione corporea femminile</strong>.
                Che cerchiate il vostro <strong>IMC ideale per le donne</strong> o vogliate verificare il vostro <strong>peso forma donna</strong>,
                il nostro <strong>calcolatore IMC femminile</strong> vi offre risposte immediate e personalizzate.
              </p>
              <p>
                L'<strong>IMC ideale per le donne</strong> si situa tra 19 e 24. Un <strong>IMC normale per le donne</strong>
                corrisponde a un peso che varia in base all'altezza. Per una donna di <strong>1,60 m</strong>,
                il <strong>peso ideale</strong> e di circa 56 kg. Per una donna di <strong>1,65 m</strong>, e di circa 60 kg.
              </p>
              <p>
                Il <strong>calcolo del peso ideale donna</strong> tiene conto di diversi fattori. Le donne con una corporatura
                <strong> esile</strong> avranno un IMC naturalmente piu basso, mentre le morfologie piu <strong>atletiche</strong>
                possono avere un IMC leggermente piu elevato. L'<strong>IMC donna sportiva</strong> puo essere piu alto a causa
                della massa muscolare.
              </p>
              <p>
                Per le donne oltre i <strong>40 anni</strong>, l'<strong>IMC donna 40 anni</strong> rimane lo stesso,
                ma il corpo cambia. L'<strong>IMC donna 50 anni</strong> e l'<strong>IMC donna 60 anni</strong> possono
                tollerare qualche chilo in piu, l'importante e restare attive e alimentarsi bene.
                Ricordate che l'<strong>IMC in gravidanza</strong> non si applica durante la gestazione.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">Scopri anche</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <a href="/it/imc" className="flex items-center justify-center gap-2 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
                <Scale className="w-5 h-5 text-pink-500" />
                <span className="font-medium">Calcolatore IMC</span>
              </a>
              <a href="/it/imc-uomo" className="flex items-center justify-center gap-2 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
                <Users className="w-5 h-5 text-pink-500" />
                <span className="font-medium">IMC Uomo</span>
              </a>
              <a href="/it/imc-sportivo" className="flex items-center justify-center gap-2 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
                <Activity className="w-5 h-5 text-pink-500" />
                <span className="font-medium">IMC Sportivo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 Calcolatore IMC per Donne</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCDonna;
