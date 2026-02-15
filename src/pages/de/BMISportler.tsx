import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Dumbbell, AlertTriangle, Target, Scale, Activity, TrendingUp, CheckCircle2, Globe } from "lucide-react";
import { Link } from "react-router-dom";
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
            <span className="text-orange-500">BMI für Sportler</span> : Warum der BMI bei Athleten versagt
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Warum der BMI die meisten Bundesliga-Spieler als "übergewichtig" einstuft — und was die Deutsche Sporthochschule Köln stattdessen empfiehlt.
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
                Ein muskulöser Sportler kann einen "übergewichtigen" oder "adipösen" BMI haben und dennoch kerngesund sein.
                Die <strong>Deutsche Sporthochschule Köln (DSHS)</strong> und das <strong>Bundesinstitut für Sportwissenschaft (BISp)</strong> empfehlen
                für Leistungssportler alternative Messverfahren wie die Körperfettanalyse oder den FFMI.
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
              Die <strong>DSHS Köln</strong> und die <strong>Olympiastützpunkte</strong> verwenden den FFMI als Ergänzung zur Leistungsdiagnostik.
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
                Muskelgewicht und Fettgewicht macht. <strong>Muskeln sind dichter als Fett</strong>:
                Bei gleichem Volumen wiegen sie deutlich mehr. Die <strong>Deutsche Sporthochschule Köln (DSHS)</strong>,
                weltweit eine der führenden Einrichtungen für Sportwissenschaft, hat dies in zahlreichen
                Studien belegt.
              </p>
              <p>
                In der <strong>Bundesliga</strong> hätten laut BMI-Klassifikation viele Spieler "Übergewicht",
                obwohl sie Hochleistungssportler mit niedrigem Körperfettanteil sind. Das
                <strong> Bundesinstitut für Sportwissenschaft (BISp)</strong> empfiehlt daher für die
                Leistungsdiagnostik von Kaderathleten alternative Messverfahren.
              </p>
            </div>
          </div>

          {/* Famous athlete examples - DACH athletes */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Dumbbell className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Deutsche Spitzensportler und ihr BMI</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Diese Beispiele zeigen, wie absurd die BMI-Einstufung bei Profisportlern sein kann.
              Von "adipös" bis "Normalgewicht" — der BMI sagt bei Athleten wenig über die tatsächliche Fitness aus.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-muted/30 rounded-xl p-6 border-l-4 border-red-500">
                <h4 className="font-bold mb-1">Robert Harting</h4>
                <p className="text-xs text-orange-500 font-medium mb-3">Diskuswurf / Olympiasieger 2012</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Größe: 2m01</li>
                  <li>Gewicht: 126 kg</li>
                  <li>BMI: ~31,2</li>
                  <li className="text-red-500 font-bold">Einstufung: "Adipositas Grad I"</li>
                  <li>Tatsächlich: Olympiasieger und Weltmeister, Topathlet</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6 border-l-4 border-yellow-500">
                <h4 className="font-bold mb-1">Manuel Neuer</h4>
                <p className="text-xs text-orange-500 font-medium mb-3">Torwart / FC Bayern München</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Größe: 1m93</li>
                  <li>Gewicht: 92 kg</li>
                  <li>BMI: ~24,7</li>
                  <li className="text-yellow-500 font-bold">Einstufung: fast "Übergewicht"</li>
                  <li>Tatsächlich: Welttorhüter, exzellente Fitness</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6 border-l-4 border-green-500">
                <h4 className="font-bold mb-1">Leon Goretzka</h4>
                <p className="text-xs text-orange-500 font-medium mb-3">Mittelfeld / FC Bayern München</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Größe: 1m89</li>
                  <li>Gewicht: 82 kg</li>
                  <li>BMI: ~23,0</li>
                  <li className="text-green-500 font-bold">Einstufung: "Normalgewicht"</li>
                  <li>Tatsächlich: Hochmuskulös, intensives Krafttraining</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Fazit: Nur Goretzka fällt in den "normalen" BMI-Bereich, obwohl alle drei Spitzensportler in hervorragender körperlicher Verfassung sind.
              Der BMI kann die Körperzusammensetzung von Athleten schlicht nicht korrekt abbilden.
            </p>
          </div>

          {/* Sport-specific BMI ranges - German sports */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Typische BMI-Werte nach Sportart in Deutschland</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Je nach Sportart unterscheiden sich die typischen BMI-Bereiche erheblich. Diese Werte stammen aus
              Erhebungen an <strong>Olympiastützpunkten</strong> und Studien der <strong>DSHS Köln</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">⚽</span>
                  <h4 className="font-bold">Fußball (Bundesliga)</h4>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-1 bg-muted/50 rounded-full h-3 overflow-hidden">
                    <div className="bg-green-500 h-full rounded-full" style={{ width: "45%" }} />
                  </div>
                  <span className="text-sm font-bold text-orange-500">BMI 22-25</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Die meisten Bundesliga-Profis liegen knapp unter der "Übergewicht"-Grenze.
                  Hoher Ausdauer- und Kraftanteil bei geringem Körperfett.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🤾</span>
                  <h4 className="font-bold">Handball (Bundesliga, Olympiasieger)</h4>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-1 bg-muted/50 rounded-full h-3 overflow-hidden">
                    <div className="bg-yellow-500 h-full rounded-full" style={{ width: "60%" }} />
                  </div>
                  <span className="text-sm font-bold text-orange-500">BMI 26-30</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Handballspieler sind groß und schwer. Deutsche Olympiasieger wie die Mannschaft von 2024 haben
                  BMI-Werte, die als "Übergewicht" gelten — bei Top-Athletik.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🎿</span>
                  <h4 className="font-bold">Biathlon / Wintersport</h4>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-1 bg-muted/50 rounded-full h-3 overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: "42%" }} />
                  </div>
                  <span className="text-sm font-bold text-orange-500">BMI 22-24</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Ausdauersportler wie Biathleten haben tendenziell niedrigere BMI-Werte.
                  Deutschland und Österreich dominieren im Biathlon-Weltcup mit schlanken, ausdauernden Athleten.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🏋️</span>
                  <h4 className="font-bold">Kraftsport / Gewichtheben</h4>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-1 bg-muted/50 rounded-full h-3 overflow-hidden">
                    <div className="bg-red-500 h-full rounded-full" style={{ width: "80%" }} />
                  </div>
                  <span className="text-sm font-bold text-orange-500">BMI 28-38</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Im Kraftsport und Gewichtheben sind extrem hohe BMI-Werte normal.
                  Viele deutsche Gewichtheber würden laut BMI als "stark adipös" gelten — bei exzellenter Gesundheit.
                </p>
              </div>
            </div>
          </div>

          {/* Alternatives - referencing DSHS and BISp */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Target className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Alternativen zum BMI für Sportler</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Die <strong>Deutsche Sporthochschule Köln (DSHS)</strong> und das <strong>Bundesinstitut für Sportwissenschaft (BISp)</strong> empfehlen
              folgende Methoden zur Körperzusammensetzungsanalyse bei Athleten:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Methode</th>
                    <th className="text-left py-3 px-4 font-bold">Empfohlen von</th>
                    <th className="text-left py-3 px-4 font-bold">Vorteile</th>
                    <th className="text-left py-3 px-4 font-bold">Richtwerte</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">FFMI</td>
                    <td className="py-3 px-4">DSHS Köln</td>
                    <td className="py-3 px-4">Berücksichtigt nur fettfreie Masse</td>
                    <td className="py-3 px-4">18-25 natürlich</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">Körperfettanteil (BIA)</td>
                    <td className="py-3 px-4">Olympiastützpunkte</td>
                    <td className="py-3 px-4">Direkte Messung des Fettanteils per Bioimpedanz</td>
                    <td className="py-3 px-4">Männer: 10-20% | Frauen: 18-28%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">Taillenumfang</td>
                    <td className="py-3 px-4">DGSP</td>
                    <td className="py-3 px-4">Einfacher Indikator für viszerales Fett</td>
                    <td className="py-3 px-4">Männer: &lt;94 cm | Frauen: &lt;80 cm</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">DEXA-Scan</td>
                    <td className="py-3 px-4">BISp / Olympiastützpunkte</td>
                    <td className="py-3 px-4">Präzise Körperzusammensetzung, Goldstandard</td>
                    <td className="py-3 px-4">Individuell nach Sportart</td>
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
              Die DSHS Köln hat in ihrer Forschung bestätigt, dass ein FFMI von 25 die Obergrenze für die allermeisten Natursportler darstellt.
            </p>
          </div>

          {/* Sportmedizin in Deutschland - NEW section */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Globe className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Sportmedizin in Deutschland</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Deutschland verfügt über ein weltweit einzigartiges System zur sportmedizinischen Betreuung
                von Athleten. Der BMI spielt in der professionellen Leistungsdiagnostik eine untergeordnete
                Rolle — stattdessen setzen Experten auf präzise Messverfahren zur Körperzusammensetzung.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  <h4 className="font-bold">Deutsche Sporthochschule Köln (DSHS)</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Die DSHS ist die einzige reine Sportuniversität in Deutschland und eine der
                  führenden Einrichtungen weltweit. Ihre Forschung zur Körperzusammensetzung von
                  Athleten hat maßgeblich dazu beigetragen, die Grenzen des BMI bei Sportlern
                  wissenschaftlich zu dokumentieren. Die DSHS empfiehlt BIA-Messungen und DEXA-Scans
                  als Alternative zum BMI.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  <h4 className="font-bold">Olympiastützpunkte</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Das Netzwerk der 13 Olympiastützpunkte in Deutschland bietet Kaderathleten
                  umfassende Leistungsdiagnostik. Zur Körperzusammensetzungsanalyse kommen dort
                  DEXA-Scans, Hautfaltenmessungen und BIA zum Einsatz — der BMI wird allenfalls als
                  grober Anhaltspunkt betrachtet und nicht als Gesundheitsindikator für Sportler verwendet.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  <h4 className="font-bold">DGSP (Deutsche Gesellschaft für Sportmedizin und Prävention)</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Die DGSP ist die führende sportmedizinische Fachgesellschaft im deutschsprachigen Raum.
                  Sie legt Leitlinien für die sportärztliche Untersuchung fest und empfiehlt, den BMI
                  bei Sportlern immer durch ergänzende Messungen der Körperzusammensetzung zu
                  relativieren. Der Taillenumfang und der Körperfettanteil sind laut DGSP bessere
                  Indikatoren für die Gesundheit aktiver Menschen.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  <h4 className="font-bold">Betriebssport und Sportvereine</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Deutschland hat mit über 87.000 Sportvereinen und rund 27 Millionen Mitgliedern das
                  dichteste Vereinsnetz weltweit. Der Betriebssport hat eine lange Tradition:
                  Viele Unternehmen bieten ihren Mitarbeitern sportmedizinische Check-ups an, bei denen
                  die Körperzusammensetzung gemessen wird — nicht nur der BMI. Zudem fördert
                  <strong> §20 SGB V</strong> Gesundheitskurse: Krankenkassen bezuschussen Fitness- und
                  Sportprogramme mit bis zu 150 Euro pro Kurs, bis zu zwei Kurse jährlich.
                </p>
              </div>
            </div>
          </div>

          {/* Link back to main BMI page */}
          <div className="text-center">
            <Link to="/de/bmi" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              <Scale className="w-5 h-5" />
              Zum BMI-Rechner
            </Link>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Globe className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI und Sport: Was deutsche Sportmedizin empfiehlt</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Die <strong>Deutsche Sporthochschule Köln (DSHS)</strong> gilt als weltweit führende Institution
                in der Sportwissenschaft und hat in zahlreichen Studien nachgewiesen, dass der <strong>BMI für
                Sportler</strong> kein valides Maß für die Gesundheit darstellt. Ob Fußball-Bundesliga, Handball
                oder Wintersport — der <strong>BMI bei Athleten</strong> führt regelmäßig zu Fehlklassifikationen.
              </p>
              <p>
                Das <strong>Bundesinstitut für Sportwissenschaft (BISp)</strong> finanziert Forschungsprojekte
                zur Leistungsdiagnostik und empfiehlt für Kaderathleten die Körperfettanalyse mittels
                DEXA-Scan oder bioelektrischer Impedanzanalyse (BIA). Die <strong>Olympiastützpunkte</strong> in
                Berlin, München, Leipzig und weiteren Standorten setzen diese Verfahren routinemäßig ein.
              </p>
              <p>
                Die <strong>DGSP (Deutsche Gesellschaft für Sportmedizin und Prävention)</strong> hat in ihren
                Leitlinien klargestellt, dass der BMI allein bei sportlich aktiven Menschen nicht als
                Gesundheitsindikator herangezogen werden sollte. Stattdessen empfehlen deutsche Sportmediziner
                eine Kombination aus <strong>Körperfettanteil</strong>, <strong>FFMI</strong>,
                <strong> Taillenumfang</strong> und gegebenenfalls einem <strong>DEXA-Scan</strong>.
              </p>
              <p>
                Für Breitensportler in den über 87.000 deutschen <strong>Sportvereinen</strong> gilt: Lassen Sie
                Ihren BMI nicht überinterpretieren. Nutzen Sie die Möglichkeiten der <strong>§20 SGB V</strong>-Förderung,
                um einen von der Krankenkasse bezuschussten Gesundheitskurs zu besuchen, bei dem oft auch eine
                professionelle Körperzusammensetzungsanalyse angeboten wird. Die <strong>BMI-Berechnung</strong> ist
                ein erster Anhaltspunkt — aber bei <strong>BMI und Sport</strong> zeigen sich die Grenzen dieser
                einfachen Formel besonders deutlich.
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
