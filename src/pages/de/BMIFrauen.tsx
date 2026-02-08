import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Users, Heart, Target, Baby, Scale, Activity, AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const BMIFrauen = () => {
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

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-pink-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-500 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            BMI-Rechner für Frauen
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-pink-500">BMI für Frauen</span>: Berechnen Sie Ihren Index
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            BMI-Rechner mit personalisierten Ratschlägen für jede Lebensphase einer Frau
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-pink-500" />
              Geben Sie Ihre Maße ein
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Gewicht</label>
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
                  <label className="text-sm font-medium">Größe</label>
                  <span className="text-2xl font-bold text-pink-500">{(height / 100).toFixed(2)} m</span>
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
          {/* Understanding BMI for Women */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Users className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI bei Frauen verstehen</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Der <strong>BMI für Frauen</strong> wird auf die gleiche Weise wie für Männer berechnet, aber die Interpretation unterscheidet sich leicht.
                Frauen haben von Natur aus einen <strong>höheren Körperfettanteil</strong> (20-25% gegenüber 15-20% bei Männern),
                was völlig normal und für eine ordnungsgemäße Hormonfunktion notwendig ist.
              </p>
              <p>
                Der <strong>ideale Taillenumfang</strong> für eine Frau sollte <strong>80 cm</strong>
                (mäßiges Risiko) oder <strong>88 cm</strong> (hohes Risiko) nicht überschreiten. Dieser Indikator
                ist oft relevanter als der BMI allein, da er das Bauchfett misst, das für die Gesundheit gefährlicher ist.
              </p>
            </div>
          </div>

          {/* BMI Table for Women */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Scale className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI-Tabelle für Frauen</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Kategorie</th>
                    <th className="text-left py-3 px-4 font-semibold">BMI</th>
                    <th className="text-left py-3 px-4 font-semibold">Beispiel (1,65 m)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Untergewicht
                    </td>
                    <td className="py-3 px-4">&lt; 18,5</td>
                    <td className="py-3 px-4">&lt; 50 kg</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Normalgewicht
                    </td>
                    <td className="py-3 px-4">18,5 - 24,9</td>
                    <td className="py-3 px-4">50 - 68 kg</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Übergewicht
                    </td>
                    <td className="py-3 px-4">25 - 29,9</td>
                    <td className="py-3 px-4">68 - 81 kg</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Adipositas
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
              <h2 className="text-2xl font-display font-bold">Idealgewicht für Frauen nach Größe</h2>
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
                    {item.min} - {item.max} kg <span className="text-success">(ideal: {item.ideal} kg)</span>
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
                <h3 className="text-xl font-display font-bold">Hormonzyklus & Gewicht</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Das Gewicht kann je nach Menstruationszyklus um <strong>2-3 kg</strong> variieren</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Wassereinlagerungen</strong> vor der Periode sind normal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Wiegen Sie sich immer am <strong>gleichen Punkt</strong> Ihres Zyklus</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Die <strong>Wechseljahre</strong> verändern die Fettverteilungsmuster</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-pink-500/10">
                  <Baby className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-display font-bold">Schwangerschaft & BMI</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Der BMI gilt <strong>nicht während der Schwangerschaft</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Empfohlene Gewichtszunahme: <strong>11-16 kg</strong> (bei normalem BMI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Konsultieren Sie Ihren <strong>Frauenarzt</strong> für eine individuelle Überwachung</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Der Gewichtsverlust nach der Geburt braucht <strong>Zeit</strong> - haben Sie Geduld</span>
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
              <h2 className="text-2xl font-display font-bold">BMI und Wechseljahre</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Während der <strong>Wechseljahre</strong> fördern hormonelle Veränderungen die Gewichtszunahme, insbesondere im
                Bauchbereich. Der Stoffwechsel verlangsamt sich und die Muskelmasse nimmt natürlich ab.
                Es ist daher normal, nach dem 50. Lebensjahr einige Pfunde zuzunehmen.
              </p>
              <p>
                Um einen gesunden <strong>BMI nach 50</strong> oder <strong>BMI nach 60</strong> zu erhalten,
                konzentrieren Sie sich auf eine Ernährung, die reich an <strong>Protein</strong> und <strong>Kalzium</strong> ist,
                und treiben Sie regelmäßig Sport, einschließlich <strong>Krafttraining</strong>.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Activity className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Alles über den weiblichen BMI</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Der <strong>BMI-Rechner für Frauen</strong> ist ein unverzichtbares Werkzeug zur Bewertung Ihrer <strong>weiblichen Körperzusammensetzung</strong>.
                Ob Sie nach Ihrem <strong>idealen BMI für Frauen</strong> suchen oder Ihr <strong>gesundes Gewicht für Frauen</strong> überprüfen,
                unser <strong>BMI-Rechner für Frauen</strong> liefert Ihnen sofortige, personalisierte Antworten.
              </p>
              <p>
                Der <strong>ideale BMI für Frauen</strong> liegt zwischen 19 und 24. Ein <strong>normaler BMI für Frauen</strong>
                entspricht einem Gewicht, das je nach Größe variiert. Für eine Frau, die <strong>1,65 m</strong> groß ist,
                liegt das <strong>Idealgewicht</strong> bei etwa 60 kg. Für eine <strong>1,70 m große Frau</strong> liegt es bei etwa 64 kg.
              </p>
              <p>
                <strong>Welchen BMI sollte ich als Frau haben</strong>? Der gesunde Bereich liegt bei 18,5-24,9, aber sportliche Frauen können etwas höher liegen.
                Der <strong>BMI für Frauen über 40</strong> bleibt numerisch gleich, aber die Körperzusammensetzung ändert sich.
                Der <strong>BMI für Frauen über 50</strong> kann ein paar zusätzliche Pfunde tolerieren - konzentrieren Sie sich darauf, aktiv zu bleiben.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI-Rechner für Frauen - Informationstool</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIFrauen;
