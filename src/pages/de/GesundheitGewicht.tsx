import { Header } from "@/components/Header";
import { Heart, Activity, Apple, Moon, Brain, Scale, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const GesundheitGewicht = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-success/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Gesundheit und Wohlbefinden
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-success">Gesundheit und Gewicht</span>: Vollständiger Leitfaden
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Die Beziehung zwischen Gewicht, BMI und allgemeiner Gesundheit verstehen
          </p>
        </header>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Scale className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Gewicht und Gesundheit: eine komplexe Beziehung</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Das <strong>Gewicht</strong> ist nur einer von vielen Indikatoren für Ihren Gesundheitszustand.
                Ein <strong>gesundes Gewicht</strong> hängt von vielen Faktoren ab: Genetik, Körperbau, körperliche Aktivität,
                Ernährung, Schlaf und psychisches Wohlbefinden.
              </p>
              <p>
                Die Besessenheit von der Zahl auf der Waage kann kontraproduktiv sein. Es ist wichtiger,
                sich auf <strong>gesunde Lebensgewohnheiten</strong> zu konzentrieren als auf ein genaues Zielgewicht.
                Gesundheit lässt sich nicht nur in Kilogramm messen.
              </p>
            </div>
          </div>

          {/* Health Risks */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Gewichtsbedingte Risiken</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-warning">Risiken von Übergewicht und Adipositas</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Herz-Kreislauf-Erkrankungen (Herzinfarkt, Schlaganfall)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Typ-2-Diabetes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Bluthochdruck</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Schlafapnoe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Bestimmte Krebsarten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Gelenkprobleme</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-info">Risiken von Untergewicht</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Nährstoffmangel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Geschwächtes Immunsystem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Osteoporose</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Hormonelle Störungen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Chronische Müdigkeit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Fruchtbarkeitsprobleme</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pillars of health */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">Die 5 Säulen eines gesunden Gewichts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-green-500/10">
                    <Apple className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="font-bold">Ernährung</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Bevorzugen Sie unverarbeitete Lebensmittel</li>
                  <li>Essen Sie Gemüse bei jeder Mahlzeit</li>
                  <li>Begrenzen Sie zugesetzten Zucker</li>
                  <li>Trinken Sie ausreichend</li>
                  <li>Achten Sie auf Hunger- und Sättigungssignale</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-orange-500/10">
                    <Activity className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold">Körperliche Aktivität</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>150 Min moderate Aktivität pro Woche</li>
                  <li>Integrieren Sie Krafttraining</li>
                  <li>Bewegen Sie sich regelmäßig im Alltag</li>
                  <li>Finden Sie eine Aktivität, die Ihnen Spaß macht</li>
                  <li>Steigern Sie sich schrittweise</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10">
                    <Moon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="font-bold">Schlaf</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Schlafen Sie 7-9 Stunden pro Nacht</li>
                  <li>Regelmäßige Schlafenszeiten</li>
                  <li>Vermeiden Sie Bildschirme vor dem Schlafengehen</li>
                  <li>Kühles und dunkles Schlafzimmer</li>
                  <li>Schlafmangel fördert Gewichtszunahme</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <Brain className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-bold">Psychische Gesundheit</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Bewältigen Sie Ihren Stress</li>
                  <li>Vermeiden Sie emotionales Essen</li>
                  <li>Üben Sie Achtsamkeit</li>
                  <li>Akzeptieren Sie Ihren Körper</li>
                  <li>Suchen Sie bei Bedarf Hilfe</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-pink-500/10">
                    <Heart className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="font-bold">Ärztliche Betreuung</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Jährlicher Gesundheitscheck</li>
                  <li>Überwachung des Taillenumfangs</li>
                  <li>Kontrolle von Blutdruck, Blutzucker, Cholesterin</li>
                  <li>Konsultieren Sie bei Bedarf einen Ernährungsberater</li>
                  <li>Folgen Sie keinen Extremdiäten</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-success/10">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="font-bold">Fortschritt</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Setzen Sie sich realistische Ziele</li>
                  <li>Maximum 0,5-1 kg pro Woche</li>
                  <li>Feiern Sie kleine Erfolge</li>
                  <li>Konstanz geht vor Intensität</li>
                  <li>Denken Sie langfristig</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Healthy weight tips */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tipps für ein gesundes Gewicht</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-success">Was funktioniert</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Schrittweise und nachhaltige</strong> Änderungen der Gewohnheiten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Ausgewogene</strong> Ernährung, keine extremen Einschränkungen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Regelmäßige und angenehme</strong> körperliche Aktivität</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Qualitätsschlaf</strong> (7-8 Stunden pro Nacht)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Umgang mit <strong>Stress</strong> und Emotionen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Bei Bedarf Begleitung durch einen <strong>Fachmann</strong></span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-destructive">Was nicht funktioniert</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>Drastische</strong> und restriktive Diäten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>Wunder</strong>-Nahrungsergänzungsmittel und Diätpillen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>Tägliches</strong> Wiegen (normale Schwankungen)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>Unrealistische</strong> Gewichtsverlust-Ziele</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Vergleichen Sie Ihren Körper nicht mit <strong>anderen</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Ignorieren Sie nicht die Signale von <strong>Hunger und Sättigung</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Gesundheit und Gewicht: Das Wesentliche</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Ein <strong>gesundes Gewicht</strong> zu halten ist wichtig für Ihr allgemeines Wohlbefinden. Die Beziehung
                zwischen <strong>Gewicht und Gesundheit</strong> ist komplex und hängt von vielen Faktoren ab. Der <strong>BMI</strong>
                ist nur einer von mehreren Indikatoren, um zu beurteilen, ob Sie sich in einer gesunden Gewichtszone befinden.
              </p>
              <p>
                Um <strong>gesund abzunehmen</strong> oder <strong>Ihr Gewicht zu halten</strong>, bevorzugen Sie einen
                ganzheitlichen Ansatz: ausgewogene Ernährung, regelmäßige körperliche Aktivität, ausreichend Schlaf und
                Stressbewältigung. Vermeiden Sie Jo-Jo-Diäten, die gesundheitsschädlich sind.
              </p>
              <p>
                Ein <strong>gesunder Lebensstil</strong> ist wichtiger als eine Zahl auf der Waage. Konzentrieren Sie sich
                auf <strong>Lebensgewohnheiten</strong> statt auf das Gewicht. Im Zweifelsfall konsultieren Sie einen
                Gesundheitsfachmann für eine personalisierte Begleitung.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Berechnen Sie Ihren BMI</h3>
            <p className="text-muted-foreground mb-6">
              Erster Indikator zur Bewertung Ihres gesunden Gewichts
            </p>
            <Link
              to="/de/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Meinen BMI berechnen
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Gesundheit und Gewicht</p>
        </footer>
      </div>
    </div>
  );
};

export default GesundheitGewicht;
