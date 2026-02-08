import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { User, Dumbbell, Target, Heart, Scale, Activity, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const IMCUomo = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(80);
  const [height, setHeight] = useState(178);

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
            IMC per gli Uomini
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-blue-500">IMC per gli Uomini</span>: Calcola il tuo indice
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calcolatore di IMC con consigli personalizzati per gli uomini e la composizione corporea maschile
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-500" />
              Inserisci le tue misure
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
                  <label className="text-sm font-medium">Altezza</label>
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
              <h2 className="text-2xl font-display font-bold">Capire l'IMC negli uomini</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'<strong>IMC maschile</strong> si calcola allo stesso modo di quello femminile: peso diviso per l'altezza al quadrato.
                Tuttavia, l'interpretazione puo variare poiche gli uomini hanno naturalmente una <strong>massa muscolare maggiore</strong>
                e una <strong>percentuale di grasso corporeo inferiore</strong> (15-20% contro il 20-25% nelle donne).
              </p>
              <p>
                Un uomo puo avere un <strong>IMC elevato</strong> pur essendo in ottima salute se pratica regolarmente attivita fisica
                o allenamento con i pesi. Per questo motivo il <strong>girovita</strong> e spesso un indicatore migliore
                per gli uomini: non dovrebbe superare i <strong>94 cm</strong> (rischio moderato) o i <strong>102 cm</strong> (rischio elevato).
              </p>
            </div>
          </div>

          {/* IMC Table for Men */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Scale className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tabella IMC Uomo</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Categoria</th>
                    <th className="text-left py-3 px-4 font-semibold">IMC</th>
                    <th className="text-left py-3 px-4 font-semibold">Esempio (1,80 m)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Sottopeso
                    </td>
                    <td className="py-3 px-4">&lt; 18,5</td>
                    <td className="py-3 px-4">&lt; 60 kg</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Normopeso
                    </td>
                    <td className="py-3 px-4">18,5 - 24,9</td>
                    <td className="py-3 px-4">60 - 81 kg</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Sovrappeso
                    </td>
                    <td className="py-3 px-4">25 - 29,9</td>
                    <td className="py-3 px-4">81 - 97 kg</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesita
                    </td>
                    <td className="py-3 px-4">≥ 30</td>
                    <td className="py-3 px-4">&gt; 97 kg</td>
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
              <h2 className="text-2xl font-display font-bold">Peso ideale uomo in base all'altezza</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "1,65 m", min: 50, max: 68, ideal: 60 },
                { height: "1,70 m", min: 53, max: 72, ideal: 64 },
                { height: "1,75 m", min: 57, max: 76, ideal: 67 },
                { height: "1,80 m", min: 60, max: 81, ideal: 71 },
                { height: "1,85 m", min: 63, max: 85, ideal: 75 },
                { height: "1,90 m", min: 67, max: 90, ideal: 79 },
              ].map((item) => (
                <div key={item.height} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className="font-semibold text-blue-500">{item.height}</span>
                  <span className="text-muted-foreground">
                    {item.min} - {item.max} kg <span className="text-success">(ideale: {item.ideal} kg)</span>
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
                <h3 className="text-xl font-display font-bold">Sport e muscolatura</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>L'<strong>allenamento con i pesi</strong> aumenta la massa muscolare e quindi l'IMC</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Un uomo muscoloso puo avere un <strong>IMC di 27-28</strong> senza eccesso di grasso</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Combina <strong>cardio e potenziamento</strong> per un equilibrio ottimale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Punta a <strong>150 min di attivita moderata</strong> a settimana come minimo</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-warning/10">
                  <Heart className="w-6 h-6 text-warning" />
                </div>
                <h3 className="text-xl font-display font-bold">Salute maschile</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>Il <strong>grasso addominale</strong> aumenta i rischi cardiovascolari</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>Dopo i <strong>40 anni</strong>, il metabolismo rallenta significativamente</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>Il <strong>testosterone</strong> diminuisce con l'eta, favorendo l'accumulo di grasso</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>Un controllo medico <strong>annuale</strong> e raccomandato dopo i 50 anni</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Activity className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tutto sull'IMC maschile</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Il <strong>calcolo dell'IMC per gli uomini</strong> e essenziale per valutare la propria <strong>composizione corporea maschile</strong>.
                Che tu stia cercando il tuo <strong>IMC ideale uomo</strong> o voglia verificare se hai un
                <strong> peso sano per uomini</strong>, il nostro <strong>calcolatore IMC maschile</strong> ti fornisce risposte immediate.
              </p>
              <p>
                L'<strong>IMC medio per gli uomini</strong> varia in base all'eta e al livello di attivita. Un <strong>IMC normale per gli uomini</strong>
                si colloca tra 20 e 25. Per un uomo di <strong>1,75 m</strong>, il <strong>peso ideale</strong> e circa
                67 kg. Per un uomo di <strong>1,80 m</strong>, e circa 71 kg.
              </p>
              <p>
                <strong>Quale dovrebbe essere l'IMC di un uomo</strong>? L'intervallo ideale e tra 20 e 25, ma gli uomini atletici possono avere valori piu alti.
                L'<strong>IMC per gli uomini oltre i 50 anni</strong> puo tollerare valori leggermente superiori (fino a 27) senza rischi significativi.
                L'importante e mantenere un'attivita fisica regolare e un'alimentazione equilibrata.
              </p>
            </div>
          </div>

          {/* Navigation to other Italian pages */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">Scopri anche</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/it/imc" className="flex items-center justify-center p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors text-center">
                <span className="font-semibold text-primary">Calcolatore IMC Generale</span>
              </a>
              <a href="/it/imc-donna" className="flex items-center justify-center p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors text-center">
                <span className="font-semibold text-pink-500">IMC per le Donne</span>
              </a>
              <a href="/it/imc-sportivo" className="flex items-center justify-center p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors text-center">
                <span className="font-semibold text-green-500">IMC per Sportivi</span>
              </a>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 Calcolatore IMC per Uomini</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCUomo;
