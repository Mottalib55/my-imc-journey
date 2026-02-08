import { Header } from "@/components/Header";
import { Table, Scale, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const BMITabelle = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Table className="w-4 h-4" />
            WHO-Klassifikation
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">BMI-Tabelle</span>: Vollständige Klassifikation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alle BMI-Kategorien nach der Weltgesundheitsorganisation (WHO)
          </p>
        </header>

        <div className="space-y-8">
          {/* Main Table */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">BMI-Klassifikation nach WHO (Erwachsene)</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold">Klassifikation</th>
                    <th className="text-left py-4 px-4 font-bold">BMI (kg/m²)</th>
                    <th className="text-left py-4 px-4 font-bold">Komorbiditätsrisiko</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Starkes Untergewicht</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">&lt; 16.0</td>
                    <td className="py-4 px-4 text-info">Hoch (Mangelernährung)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Mäßiges Untergewicht</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">16.0 - 16.9</td>
                    <td className="py-4 px-4 text-info">Mäßig</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Leichtes Untergewicht</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">17.0 - 18.4</td>
                    <td className="py-4 px-4 text-info">Niedrig</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-success" />
                        <span className="font-bold text-success">Normalgewicht</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-success">18.5 - 24.9</td>
                    <td className="py-4 px-4 text-success">Niedrig (Referenz)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-warning" />
                        <span className="font-medium">Übergewicht (Präadipositas)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">25.0 - 29.9</td>
                    <td className="py-4 px-4 text-warning">Erhöht</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Adipositas Grad I (mäßig)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">30.0 - 34.9</td>
                    <td className="py-4 px-4 text-destructive">Hoch</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Adipositas Grad II (schwer)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">35.0 - 39.9</td>
                    <td className="py-4 px-4 text-destructive">Sehr hoch</td>
                  </tr>
                  <tr className="bg-destructive/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Adipositas Grad III (morbid)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">≥ 40.0</td>
                    <td className="py-4 px-4 text-destructive">Extrem hoch</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Quelle: Weltgesundheitsorganisation (WHO)
            </p>
          </div>

          {/* Weight examples by height */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Gewicht nach Größe</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Entsprechung zwischen Körpergröße und Gewichtsbereich für jede BMI-Kategorie:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-3 font-bold">Größe</th>
                    <th className="text-left py-3 px-3 font-bold text-info">Untergewicht<br />&lt;18.5</th>
                    <th className="text-left py-3 px-3 font-bold text-success">Normal<br />18.5-24.9</th>
                    <th className="text-left py-3 px-3 font-bold text-warning">Übergewicht<br />25-29.9</th>
                    <th className="text-left py-3 px-3 font-bold text-destructive">Adipositas<br />≥30</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { h: 155, u: 44, nMin: 44, nMax: 60, sMin: 60, sMax: 72, o: 72 },
                    { h: 160, u: 47, nMin: 47, nMax: 64, sMin: 64, sMax: 77, o: 77 },
                    { h: 165, u: 50, nMin: 50, nMax: 68, sMin: 68, sMax: 81, o: 81 },
                    { h: 170, u: 53, nMin: 53, nMax: 72, sMin: 72, sMax: 87, o: 87 },
                    { h: 175, u: 57, nMin: 57, nMax: 76, sMin: 76, sMax: 92, o: 92 },
                    { h: 180, u: 60, nMin: 60, nMax: 81, sMin: 81, sMax: 97, o: 97 },
                    { h: 185, u: 63, nMin: 63, nMax: 85, sMin: 85, sMax: 102, o: 102 },
                    { h: 190, u: 67, nMin: 67, nMax: 90, sMin: 90, sMax: 108, o: 108 },
                  ].map((row) => (
                    <tr key={row.h} className="border-b border-border/50">
                      <td className="py-3 px-3 font-bold">{row.h} cm</td>
                      <td className="py-3 px-3 text-info">&lt;{row.u} kg</td>
                      <td className="py-3 px-3 text-success">{row.nMin}-{row.nMax} kg</td>
                      <td className="py-3 px-3 text-warning">{row.sMin}-{row.sMax} kg</td>
                      <td className="py-3 px-3 text-destructive">&gt;{row.o} kg</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Edge cases */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Den BMI richtig interpretieren</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold">BMI ist nicht geeignet für:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Muskulöse Sportler</strong>: Muskelmasse = überschätzter BMI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Schwangere Frauen</strong>: normale Gewichtszunahme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Ältere Menschen</strong>: Verlust von Muskelmasse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Kinder/Jugendliche</strong>: spezifische Kurven erforderlich</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold">Ergänzende Indikatoren:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Taillenumfang</strong>: Bauchfett</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Körperfett %</strong>: Körperzusammensetzung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Taille-Hüft-Verhältnis</strong>: Fettverteilung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>FFMI</strong>: für Sportler</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Alles über die BMI-Tabelle</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Die <strong>WHO BMI-Tabelle</strong> ist die internationale Referenz für die Klassifizierung der Körpermasse.
                Diese <strong>Body-Mass-Index-Tabelle</strong> definiert Grenzwerte für <strong>Untergewicht</strong>,
                <strong> Normalgewicht</strong>, <strong>Übergewicht</strong> und <strong>Adipositas</strong>.
              </p>
              <p>
                Die <strong>BMI-Klassifikation</strong> unterscheidet drei Stufen von Untergewicht (stark, mäßig, leicht)
                und drei Adipositas-Klassen (I, II, III). Die <strong>BMI-Tabelle für Erwachsene</strong> gilt für Menschen
                über 18 Jahre.
              </p>
              <p>
                Um Ihr Ergebnis zu interpretieren, konsultieren Sie die obige <strong>BMI-Korrespondenztabelle</strong>.
                Die <strong>Gewicht-Größe-BMI-Tabelle</strong> ermöglicht es Ihnen, direkt zu sehen, welches Gewicht
                welcher Kategorie für Ihre Größe entspricht.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="glass-card p-8 text-center bg-gradient-to-br from-primary/10 to-primary/5">
            <h3 className="text-2xl font-display font-bold mb-4">Berechnen Sie Ihren BMI</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Verwenden Sie unseren kostenlosen BMI-Rechner, um Ihre Kategorie in der Tabelle zu finden
            </p>
            <Link
              to="/de/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Scale className="w-5 h-5" />
              BMI berechnen
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI-Tabelle</p>
        </footer>
      </div>
    </div>
  );
};

export default BMITabelle;
