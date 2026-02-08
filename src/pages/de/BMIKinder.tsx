import { Header } from "@/components/Header";
import { Baby, AlertTriangle, TrendingUp, BookOpen, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const BMIKinder = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-medium mb-6">
            <Baby className="w-4 h-4" />
            BMI für Kinder und Jugendliche
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-cyan-500">BMI für Kinder</span>: Eine andere Berechnung
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            BMI bei Kindern und Jugendlichen verstehen: Wachstumskurven und Besonderheiten
          </p>
        </header>

        {/* Medical Warning */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Stethoscope className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-destructive mb-2">Ärztliche Beratung empfohlen</h3>
              <p className="text-muted-foreground">
                Der BMI bei Kindern erfordert eine <strong>ärztliche Interpretation</strong>.
                Konsultieren Sie Ihren <strong>Kinderarzt</strong> oder <strong>Hausarzt</strong> für eine angemessene Betreuung.
                Die folgenden Informationen dienen nur zur Information.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Difference with adults */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <AlertTriangle className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Unterschied zwischen Erwachsenen- und Kinder-BMI</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Im Gegensatz zu Erwachsenen wird der <strong>Kinder-BMI</strong> nicht mit festen Schwellenwerten
                (18,5 / 25 / 30) interpretiert. Bei Kindern und Jugendlichen entwickelt sich der Körper ständig, und der BMI variiert
                natürlich je nach Alter und Geschlecht.
              </p>
              <p>
                Daher werden <strong>Perzentilkurven</strong> verwendet, die es ermöglichen,
                das Kind im Vergleich zu anderen Kindern gleichen Alters und Geschlechts einzuordnen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                <h4 className="font-bold text-destructive mb-2">BMI Erwachsene</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Feste universelle Schwellenwerte</li>
                  <li>• &lt;18,5 = Untergewicht</li>
                  <li>• 18,5-25 = Normalgewicht</li>
                  <li>• 25-30 = Übergewicht</li>
                  <li>• &gt;30 = Adipositas</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">BMI Kinder</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Perzentilkurven</li>
                  <li>• Variiert je nach Alter</li>
                  <li>• Unterschiedlich Junge/Mädchen</li>
                  <li>• Relative Interpretation</li>
                  <li>• Verlaufsbeobachtung</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Growth Curves */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <TrendingUp className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Wachstumskurven</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Die <strong>Perzentilkurven</strong> befinden sich im Gesundheitsheft Ihres Kindes.
                Sie ermöglichen es, die Entwicklung des BMI im Laufe der Zeit zu verfolgen.
              </p>

              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-4">Wie liest man die Perzentile?</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong className="text-info">3. Perzentil:</strong> Untergewicht</p>
                    <p><strong className="text-success">3.-97. Perzentil:</strong> Normalgewicht</p>
                    <p><strong className="text-warning">97. Perzentil:</strong> Übergewicht</p>
                    <p><strong className="text-destructive">&gt;97. Perzentil:</strong> Adipositas</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      Ein Kind im 50. Perzentil hat einen BMI, der höher ist als 50% der Kinder seines Alters und niedriger als die restlichen 50%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Age groups */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Baby className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI nach Altersgruppen</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Säugling (0-2 Jahre)</h4>
                <p className="text-sm text-muted-foreground">
                  Der BMI wird in der Regel nicht berechnet. Es werden Gewichts-/Größenkurven und der Kopfumfang verwendet.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Kind (2-12 Jahre)</h4>
                <p className="text-sm text-muted-foreground">
                  BMI wird mit Perzentilkurven interpretiert. Der "adiposity rebound" um das 6. Lebensjahr wird überwacht.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Jugendlicher (12-18 Jahre)</h4>
                <p className="text-sm text-muted-foreground">
                  Pubertät = bedeutende Schwankungen. Spezifische Kurven für Jungen/Mädchen sind unerlässlich.
                </p>
              </div>
            </div>
          </div>

          {/* When to consult */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Stethoscope className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Wann zum Arzt?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5">
                <h4 className="font-bold text-warning mb-3">Warnzeichen</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Plötzliche Veränderung auf der Kurve</li>
                  <li>• BMI &gt; 97. Perzentil</li>
                  <li>• BMI &lt; 3. Perzentil</li>
                  <li>• Früher adiposity rebound (&lt;6 Jahre)</li>
                  <li>• Kind macht sich Sorgen über sein Gewicht</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-3">Regelmäßige Kontrolle</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Wiegen und Messen bei jedem Arztbesuch</li>
                  <li>• Eintrag in die Kurven des Gesundheitshefts</li>
                  <li>• Verfolgung des Verlaufs, nicht nur eines Punktes</li>
                  <li>• Gespräch mit dem Arzt bei Bedenken</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <BookOpen className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Alles über den Kinder-BMI</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Die <strong>BMI-Berechnung bei Kindern</strong> verwendet die gleiche Formel wie bei Erwachsenen (Gewicht / Größe²),
                aber die <strong>BMI-Interpretation bei Kindern</strong> ist völlig unterschiedlich. Man kann nicht sagen,
                dass ein Kind übergewichtig ist, nur weil sein BMI über 25 liegt.
              </p>
              <p>
                Der <strong>BMI bei Jugendlichen</strong> ist während der Pubertät besonders schwierig zu interpretieren.
                Hormonelle Veränderungen führen zu erheblichen körperlichen Veränderungen, die zwischen
                <strong> Jungen-BMI</strong> und <strong>Mädchen-BMI</strong> unterschiedlich sind.
              </p>
              <p>
                Zur Berechnung des <strong>BMI bei Babys</strong> oder <strong>BMI bei Säuglingen</strong> verwenden Kinderärzte
                eher Gewichts-/Größenwachstumskurven. Der <strong>BMI bei 3-jährigen Kindern</strong>,
                <strong>BMI bei 5-jährigen Kindern</strong> oder <strong>BMI bei 10-jährigen Kindern</strong> wird immer anhand
                der Perzentilkurven abgelesen.
              </p>
              <p>
                Im Zweifelsfall über das <strong>Idealgewicht bei Kindern</strong> oder den <strong>idealen Kinder-BMI</strong>
                konsultieren Sie Ihren Kinderarzt, der die <strong>Perzentilkurve</strong> als Ganzes analysieren kann.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Sie sind erwachsen?</h3>
            <p className="text-muted-foreground mb-6">
              Verwenden Sie unseren Standard-BMI-Rechner für Erwachsene
            </p>
            <Link
              to="/de/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Meinen Erwachsenen-BMI berechnen
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI-Rechner für Kinder - Nur zu Informationszwecken</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIKinder;
