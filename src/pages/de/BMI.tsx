import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Calculator, Activity, Target, BookOpen, Scale, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";

const BMIDe = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weightKg, setWeightKg] = useState(70);
  const [heightCm, setHeightCm] = useState(170);

  const calculateBMI = useCallback((wKg: number, hCm: number) => {
    const heightInM = hCm / 100;
    const calculatedBmi = wKg / (heightInM * heightInM);
    setBmi(calculatedBmi);
  }, []);

  // Calculate BMI on initial load
  useEffect(() => {
    calculateBMI(weightKg, heightCm);
  }, []);

  const handleWeightChange = (value: number[]) => {
    setWeightKg(value[0]);
    calculateBMI(value[0], heightCm);
  };

  const handleHeightChange = (value: number[]) => {
    setHeightCm(value[0]);
    calculateBMI(weightKg, value[0]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            Echtzeit-Simulator
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Berechnen Sie Ihren BMI</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ermitteln Sie Ihren Body-Mass-Index mit personalisierten Empfehlungen
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary" />
              Geben Sie Ihre Maße ein
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Gewicht</label>
                  <span className="text-2xl font-bold text-primary">{weightKg} kg</span>
                </div>
                <Slider
                  value={[weightKg]}
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
                  <label className="text-sm font-medium">Größe</label>
                  <span className="text-2xl font-bold text-primary">{(heightCm / 100).toFixed(2)} m</span>
                </div>
                <Slider
                  value={[heightCm]}
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
          {/* What is BMI */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI verstehen</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>Der BMI (Body-Mass-Index)</strong> ist ein einfaches Maß, das anhand Ihrer Größe und Ihres Gewichts
                einschätzt, ob Sie ein gesundes Gewicht haben. Die <strong>BMI-Formel</strong> teilt Ihr
                Gewicht in Kilogramm durch Ihre Größe in Metern im Quadrat.
              </p>
              <p>
                Die <strong>BMI-Berechnung</strong> wurde in den 1830er Jahren vom belgischen Mathematiker
                Adolphe Quetelet erfunden. Heute wird sie weltweit von Ärzten und Gesundheitsorganisationen als
                schnelles Screening-Tool für Gewichtskategorien verwendet.
              </p>
            </div>
          </div>

          {/* BMI Categories */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI-Kategorien (WHO)</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Kategorie</th>
                    <th className="text-left py-3 px-4 font-bold">BMI-Bereich</th>
                    <th className="text-left py-3 px-4 font-bold">Gesundheitsrisiko</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Untergewicht
                    </td>
                    <td className="py-3 px-4">&lt; 18,5</td>
                    <td className="py-3 px-4 text-info">Mangelernährungsrisiko</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Normalgewicht
                    </td>
                    <td className="py-3 px-4">18,5 - 24,9</td>
                    <td className="py-3 px-4 text-success">Geringes Risiko</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Übergewicht
                    </td>
                    <td className="py-3 px-4">25 - 29,9</td>
                    <td className="py-3 px-4 text-warning">Erhöhtes Risiko</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Adipositas Grad I
                    </td>
                    <td className="py-3 px-4">30 - 34,9</td>
                    <td className="py-3 px-4 text-destructive">Hohes Risiko</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Adipositas Grad II
                    </td>
                    <td className="py-3 px-4">35 - 39,9</td>
                    <td className="py-3 px-4 text-destructive">Sehr hohes Risiko</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Adipositas Grad III
                    </td>
                    <td className="py-3 px-4">≥ 40</td>
                    <td className="py-3 px-4 text-destructive">Extrem hohes Risiko</td>
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
              <h2 className="text-2xl font-display font-bold">Wie berechnet man den BMI</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>Die <strong>BMI-Formel</strong> ist einfach:</p>
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-primary">BMI = Gewicht (kg) ÷ Größe² (m)</p>
              </div>
              <p>
                Zum Beispiel, wenn Sie 70 kg wiegen und 1,75 m groß sind:<br />
                BMI = 70 ÷ (1,75 × 1,75) = 70 ÷ 3,0625 = <strong>22,9</strong>
              </p>
            </div>
          </div>

          {/* Links to other pages */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/de/bmi-maenner" className="glass-card p-6 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Activity className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-bold">BMI für Männer</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Spezifische Überlegungen zur männlichen Körperzusammensetzung
              </p>
            </Link>

            <Link to="/de/bmi-frauen" className="glass-card p-6 hover:border-pink-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-pink-500/10">
                  <Activity className="w-5 h-5 text-pink-500" />
                </div>
                <h3 className="font-bold">BMI für Frauen</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                BMI verstehen unter Berücksichtigung hormoneller Faktoren
              </p>
            </Link>

            <Link to="/de/bmi-sportler" className="glass-card p-6 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-bold">BMI für Sportler</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Warum BMI bei muskulösen Menschen nicht funktioniert
              </p>
            </Link>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Ihren Body-Mass-Index verstehen</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Der <strong>BMI-Rechner</strong> ist ein wesentliches Werkzeug zum Verständnis Ihres Gewichtsstatus.
                Ob Sie nach einem <strong>kostenlosen BMI-Rechner</strong> suchen, Ihren
                <strong> idealen BMI</strong> wissen möchten oder einfach schnell den <strong>BMI berechnen</strong> wollen,
                unser Tool liefert sofortige Ergebnisse.
              </p>
              <p>
                <strong>Was ist ein guter BMI</strong>? Ein <strong>gesunder BMI</strong> liegt zwischen 18,5 und 24,9.
                Die <strong>BMI-Tabelle</strong> zeigt, dass ein <strong>normaler BMI</strong> darauf hinweist, dass Sie
                ein gesundes Gewicht für Ihre Größe haben. Verwenden Sie unseren <strong>BMI-Checker</strong>, um herauszufinden, wo Sie stehen.
              </p>
              <p>
                Der <strong>Body-Mass-Index-Rechner</strong> verwendet die von der WHO anerkannte Standard-<strong>BMI-Gleichung</strong>.
                Während die <strong>BMI-Skala</strong> nützlich ist, denken Sie daran, dass sie Muskelmasse, Alter oder Körperzusammensetzung
                nicht berücksichtigt.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI-Rechner</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIDe;
