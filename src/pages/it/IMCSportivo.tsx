import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Dumbbell, AlertTriangle, Target, Scale, Activity, TrendingUp } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const IMCSportivo = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(85);
  const [height, setHeight] = useState(180);

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

  // Calculate FFMI estimation
  const fatFreeMass = weight * 0.85;
  const ffmi = weight && height ? fatFreeMass / Math.pow(height / 100, 2) : null;
  const normalizedFfmi = ffmi ? ffmi + 6.1 * (1.8 - height / 100) : null;

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
            IMC per Sportivi
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-orange-500">IMC per Sportivi</span>: Perché l'IMC inganna gli atleti
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Perché l'IMC non è adatto agli sportivi e quali alternative utilizzare
          </p>
        </header>

        {/* Warning Banner */}
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-orange-500 mb-2">Attenzione: L'IMC è fuorviante per gli sportivi</h3>
              <p className="text-muted-foreground">
                L'IMC non distingue la <strong>massa muscolare</strong> dalla <strong>massa grassa</strong>.
                Uno sportivo muscoloso può avere un IMC da "sovrappeso" o "obesità" pur essendo in ottima salute.
              </p>
            </div>
          </div>
        </div>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-orange-500" />
              Inserisci le tue misure
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Peso</label>
                  <span className="text-2xl font-bold text-orange-500">{weight} kg</span>
                </div>
                <Slider
                  value={[weight]}
                  onValueChange={handleWeightChange}
                  min={50}
                  max={200}
                  step={1}
                  className="py-4"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Altezza</label>
                  <span className="text-2xl font-bold text-orange-500">{height} cm</span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={handleHeightChange}
                  min={150}
                  max={220}
                  step={1}
                  className="py-4"
                />
              </div>
            </div>
          </div>

          <BMIGauge bmi={bmi} />
        </div>

        {/* FFMI Estimation */}
        {bmi && (
          <div className="glass-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-xl font-display font-bold">Stima FFMI (Indice di Massa Magra)</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              L'FFMI è un indicatore migliore per gli sportivi perché tiene conto della massa magra.
            </p>
            <div className="bg-muted/30 rounded-xl p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">FFMI stimato (con 15% di massa grassa)</p>
              <p className="text-3xl font-bold text-orange-500">{ffmi?.toFixed(1)}</p>
              <p className="text-xs text-muted-foreground mt-2">
                Naturale: 18-25 | Probabile doping: &gt;25
              </p>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="space-y-8">
          {/* Why BMI is biased */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Scale className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Perché l'IMC fallisce per gli sportivi</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'<strong>IMC per sportivi</strong> è problematico perché la formula non fa alcuna distinzione tra
                il peso dei muscoli e quello del grasso. Tuttavia, il <strong>muscolo è più denso del grasso</strong>:
                a parità di volume, pesa di più.
              </p>
              <p>
                Un bodybuilder alto 1,80 m che pesa 100 kg avrà un <strong>IMC di 30,9</strong> (obesità),
                anche se ha solo il <strong>10% di massa grassa</strong> ed è in perfetta salute.
              </p>
            </div>
          </div>

          {/* Practical Examples */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Dumbbell className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Esempi pratici</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Giocatore di rugby</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Altezza: 1,80 m</li>
                  <li>• Peso: 100 kg</li>
                  <li>• IMC: 30,9 ("obesità")</li>
                  <li>• Massa grassa: ~15%</li>
                  <li>• In realtà: Forma fisica eccellente</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Maratoneta</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Altezza: 1,75 m</li>
                  <li>• Peso: 62 kg</li>
                  <li>• IMC: 20,2 ("normale")</li>
                  <li>• Massa grassa: ~8%</li>
                  <li>• L'IMC qui è più accurato</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Bodybuilding</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• IMC tipicamente tra 28-35</li>
                  <li>• Massa grassa: 8-15%</li>
                  <li>• Stato di salute eccellente</li>
                  <li>• L'IMC dice "obesità" = falso positivo</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">CrossFit / Sport di forza</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• IMC tipicamente tra 26-30</li>
                  <li>• Massa grassa: 12-18%</li>
                  <li>• Elevate prestazioni atletiche</li>
                  <li>• IMC non rappresentativo</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Alternatives Table */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Target className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Alternative all'IMC per sportivi</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Metodo</th>
                    <th className="text-left py-3 px-4 font-bold">Vantaggi</th>
                    <th className="text-left py-3 px-4 font-bold">Valori di riferimento</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">FFMI</td>
                    <td className="py-3 px-4">Considera solo la massa magra</td>
                    <td className="py-3 px-4">18-25 naturale</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">Massa grassa (%)</td>
                    <td className="py-3 px-4">Misurazione diretta del grasso corporeo</td>
                    <td className="py-3 px-4">Uomini: 10-20% | Donne: 18-28%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">Circonferenza vita</td>
                    <td className="py-3 px-4">Indicatore semplice del grasso addominale</td>
                    <td className="py-3 px-4">Uomini: &lt;94 cm | Donne: &lt;80 cm</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">DEXA Scan</td>
                    <td className="py-3 px-4">Composizione corporea precisa</td>
                    <td className="py-3 px-4">Gold standard per gli sportivi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FFMI Table */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Capire l'FFMI</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Intervallo FFMI</th>
                    <th className="text-left py-3 px-4 font-bold">Classificazione</th>
                    <th className="text-left py-3 px-4 font-bold">Descrizione</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">16-17</td>
                    <td className="py-3 px-4">Sotto la media</td>
                    <td className="py-3 px-4">Scarso sviluppo muscolare</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">18-19</td>
                    <td className="py-3 px-4">Nella media</td>
                    <td className="py-3 px-4">Uomo normale non allenato</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">20-21</td>
                    <td className="py-3 px-4">Sopra la media</td>
                    <td className="py-3 px-4">Definizione muscolare visibile</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 font-mono font-bold text-success">22-23</td>
                    <td className="py-3 px-4 text-success">Eccellente</td>
                    <td className="py-3 px-4">Sportivo dedicato, ottimo fisico</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">24-25</td>
                    <td className="py-3 px-4">Superiore</td>
                    <td className="py-3 px-4">Limite genetico naturale per la maggior parte</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono">&gt;25</td>
                    <td className="py-3 px-4 text-warning">Sospetto</td>
                    <td className="py-3 px-4">Raro naturalmente, possibile uso di sostanze</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Nota: Un FFMI superiore a 25 è raggiungibile naturalmente per alcuni individui geneticamente dotati, ma è raro.
            </p>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC e sport: quello che devi sapere</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Il <strong>calcolo dell'IMC per sportivi</strong> fornisce spesso risultati fuorvianti. Che tu pratichi
                <strong> bodybuilding</strong>, <strong>CrossFit</strong>, <strong>rugby</strong> o qualsiasi altro
                sport di forza, il tuo <strong>IMC da atleta</strong> sarà probabilmente sovrastimato.
              </p>
              <p>
                L'<strong>IMC nel bodybuilding</strong> è particolarmente distorto: un bodybuilder naturale può facilmente
                raggiungere un IMC di 27-28 pur essendo definito. L'<strong>IMC dei bodybuilder</strong> professionisti supera
                spesso 30, classificato come "obeso" quando la percentuale di grasso è minima.
              </p>
              <p>
                Per gli sportivi, è preferibile utilizzare la <strong>percentuale di massa grassa</strong>, l'<strong>FFMI</strong>
                (Indice di Massa Magra) o la semplice <strong>circonferenza della vita</strong>. Questi indicatori sono più pertinenti
                per valutare la composizione corporea e il reale stato di salute.
              </p>
              <p>
                <strong>L'IMC è accurato per gli sportivi</strong>? No. <strong>Perché l'IMC non funziona per le persone muscolose</strong>?
                Perché considera solo il peso totale, non la composizione corporea. Un <strong>IMC muscolare</strong> risulterà sempre
                più alto di quanto il reale stato di salute suggerisca.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">Scopri anche</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/it/imc" className="block p-4 rounded-xl border border-border hover:border-orange-500/50 transition-colors text-center">
                <p className="font-bold">Calcolo IMC</p>
                <p className="text-sm text-muted-foreground">Calcolatore IMC generale</p>
              </a>
              <a href="/it/imc-uomo" className="block p-4 rounded-xl border border-border hover:border-orange-500/50 transition-colors text-center">
                <p className="font-bold">IMC Uomo</p>
                <p className="text-sm text-muted-foreground">Calcolo IMC per uomini</p>
              </a>
              <a href="/it/imc-donna" className="block p-4 rounded-xl border border-border hover:border-orange-500/50 transition-colors text-center">
                <p className="font-bold">IMC Donna</p>
                <p className="text-sm text-muted-foreground">Calcolo IMC per donne</p>
              </a>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 IMC per Sportivi</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCSportivo;
