import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Dumbbell, AlertTriangle, Target, Scale, Activity, TrendingUp, CheckCircle2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const BMISportler = () => {
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
            BMI für Sportler
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-orange-500">BMI für Sportler</span>: Warum er in die Irre führt
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Warum der BMI bei muskulösen Menschen nicht funktioniert und welche Alternativen es gibt
          </p>
        </header>

        {/* Warning Banner */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-destructive mb-2">Warnung: Der BMI ist für Sportler irreführend</h3>
              <p className="text-muted-foreground">
                Der BMI unterscheidet nicht zwischen <strong>Muskelmasse</strong> und <strong>Fettmasse</strong>.
                Ein muskulöser Sportler kann einen „übergewichtigen" oder „adipösen" BMI haben und dennoch kerngesund sein.
              </p>
            </div>
          </div>
        </div>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-orange-500" />
              Geben Sie Ihre Maße ein
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Gewicht</label>
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
                  <label className="text-sm font-medium">Größe</label>
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
              <h2 className="text-xl font-display font-bold">FFMI-Schätzung (Fettfreie-Masse-Index)</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Der FFMI ist ein besserer Indikator für Sportler, da er die fettfreie Masse berücksichtigt.
            </p>
            <div className="bg-muted/30 rounded-xl p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">Geschätzter FFMI (bei 15% Körperfett)</p>
              <p className="text-3xl font-bold text-orange-500">{ffmi?.toFixed(1)}</p>
              <p className="text-xs text-muted-foreground mt-2">
                Natürlich: 18-25 | Wahrscheinlich nicht natürlich: &gt;25
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
              <h2 className="text-2xl font-display font-bold">Warum der BMI bei Sportlern versagt</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Der <strong>BMI für Sportler</strong> ist problematisch, weil die Formel keinen Unterschied zwischen
                Muskelgewicht und Fettgewicht macht. <strong>Muskeln sind jedoch dichter als Fett</strong>:
                Bei gleichem Volumen wiegen sie mehr.
              </p>
              <p>
                Ein Bodybuilder, der 180 cm groß ist und 100 kg wiegt, hat einen <strong>BMI von 30,9</strong> (adipös),
                auch wenn er nur <strong>10% Körperfett</strong> hat und kerngesund ist.
              </p>
            </div>
          </div>

          {/* Examples */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Dumbbell className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Praxisbeispiele</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Rugby-Spieler</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Größe: 1,80 m</li>
                  <li>• Gewicht: 100 kg</li>
                  <li>• BMI: 30,9 („adipös")</li>
                  <li>• Körperfett: ~15%</li>
                  <li>• Tatsächlich: Hervorragende Fitness</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Marathon-Läufer</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Größe: 1,75 m</li>
                  <li>• Gewicht: 62 kg</li>
                  <li>• BMI: 20,2 („normal")</li>
                  <li>• Körperfett: ~8%</li>
                  <li>• BMI hier eher zutreffend</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Bodybuilding</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• BMI typischerweise 28-35</li>
                  <li>• Körperfett: 8-15%</li>
                  <li>• Ausgezeichneter Gesundheitszustand</li>
                  <li>• BMI sagt „adipös" = Fehlalarm</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">CrossFit / Kraftsport</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• BMI typischerweise 26-30</li>
                  <li>• Körperfett: 12-18%</li>
                  <li>• Hohe sportliche Leistung</li>
                  <li>• BMI nicht aussagekräftig</li>
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
              <h2 className="text-2xl font-display font-bold">Alternativen zum BMI für Sportler</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Methode</th>
                    <th className="text-left py-3 px-4 font-bold">Vorteile</th>
                    <th className="text-left py-3 px-4 font-bold">Richtwerte</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">FFMI</td>
                    <td className="py-3 px-4">Berücksichtigt nur fettfreie Masse</td>
                    <td className="py-3 px-4">18-25 natürlich</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">Körperfettanteil</td>
                    <td className="py-3 px-4">Direkte Messung des Fettanteils</td>
                    <td className="py-3 px-4">Männer: 10-20% | Frauen: 18-28%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">Taillenumfang</td>
                    <td className="py-3 px-4">Einfacher Indikator für Bauchfett</td>
                    <td className="py-3 px-4">Männer: &lt;94 cm | Frauen: &lt;80 cm</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">DEXA-Scan</td>
                    <td className="py-3 px-4">Präzise Körperzusammensetzung</td>
                    <td className="py-3 px-4">Goldstandard für Sportler</td>
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
              <h2 className="text-2xl font-display font-bold">FFMI verstehen</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">FFMI-Bereich</th>
                    <th className="text-left py-3 px-4 font-bold">Klassifizierung</th>
                    <th className="text-left py-3 px-4 font-bold">Beschreibung</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">16-17</td>
                    <td className="py-3 px-4">Unterdurchschnittlich</td>
                    <td className="py-3 px-4">Wenig Muskelentwicklung</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">18-19</td>
                    <td className="py-3 px-4">Durchschnittlich</td>
                    <td className="py-3 px-4">Normaler untrainierter Mann</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">20-21</td>
                    <td className="py-3 px-4">Überdurchschnittlich</td>
                    <td className="py-3 px-4">Erkennbare Muskeldefinition</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 font-mono font-bold text-success">22-23</td>
                    <td className="py-3 px-4 text-success">Ausgezeichnet</td>
                    <td className="py-3 px-4">Engagierter Kraftsportler, tolle Figur</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">24-25</td>
                    <td className="py-3 px-4">Überlegen</td>
                    <td className="py-3 px-4">Natürliches genetisches Limit für die meisten</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono">&gt;25</td>
                    <td className="py-3 px-4 text-warning">Verdächtig</td>
                    <td className="py-3 px-4">Natürlich selten, mögliche Medikamentennutzung</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Hinweis: Ein FFMI über 25 ist natürlich für einige genetische Ausnahmen erreichbar, aber selten.
            </p>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI und Sportler: Was Sie wissen müssen</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Die <strong>BMI-Berechnung für Sportler</strong> liefert oft irreführende Ergebnisse. Egal ob Sie
                <strong> Bodybuilding</strong>, <strong>CrossFit</strong>, <strong>Rugby</strong> oder andere
                Kraftsportarten betreiben – Ihr <strong>BMI für Sportler</strong> wird wahrscheinlich zu hoch ausfallen.
              </p>
              <p>
                Der <strong>BMI bei Bodybuildern</strong> ist besonders verzerrt: Ein natürlicher Bodybuilder kann
                problemlos einen BMI von 27-28 erreichen und dabei schlank sein. Der <strong>BMI bei Gewichthebern</strong>
                liegt oft über 30, wird als „adipös" eingestuft, obwohl der Körperfettanteil minimal ist.
              </p>
              <p>
                Für Sportler sind <strong>Körperfettanteil</strong>, <strong>FFMI</strong>
                (Fettfreie-Masse-Index) oder einfacher <strong>Taillenumfang</strong> besser geeignet. Diese Indikatoren
                sind relevanter für die Bewertung Ihrer Körperzusammensetzung und Ihres tatsächlichen Gesundheitszustands.
              </p>
              <p>
                <strong>Ist der BMI für Sportler genau</strong>? Nein. <strong>Warum funktioniert der BMI nicht bei
                muskulösen Menschen</strong>? Weil er nur das Gesamtgewicht berücksichtigt, nicht die Zusammensetzung.
                Ein <strong>muskulöser BMI</strong> wird immer höher ausfallen, als der tatsächliche Gesundheitszustand
                vermuten lässt.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI für Sportler - Informationstool</p>
        </footer>
      </div>
    </div>
  );
};

export default BMISportler;
