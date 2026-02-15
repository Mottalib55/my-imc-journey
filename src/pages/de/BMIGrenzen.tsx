import { Header } from "@/components/Header";
import { AlertTriangle, XCircle, CheckCircle2, Users, Dumbbell, Baby, Clock, Globe, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

const BMIGrenzen = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-warning/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 text-warning text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            Kritische Analyse
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-warning">Grenzen des BMI</span> : Was der BMI Nicht Verrät
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Verstehen Sie, warum der BMI nicht immer zuverlässig ist und welche Alternativen es gibt
          </p>
        </header>

        {/* Main Warning */}
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-warning mb-2">BMI ist ein Screening-Tool, keine Diagnose</h3>
              <p className="text-muted-foreground">
                Der BMI wurde 1832 von Adolphe Quetelet entwickelt und war für statistische Bevölkerungsstudien konzipiert,
                nicht zur Beurteilung der individuellen Gesundheit. Er hat mehrere wichtige Einschränkungen.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Main Limitations */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Was der BMI nicht misst</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Körperzusammensetzung</h4>
                    <p className="text-sm text-muted-foreground">
                      Der BMI unterscheidet nicht zwischen Muskel und Fett. 1 kg Muskel = 1 kg Fett für den BMI.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Fettverteilung</h4>
                    <p className="text-sm text-muted-foreground">
                      Bauchfett ist gefährlicher als Unterhautfett. Der BMI erkennt dies nicht.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Knochendichte</h4>
                    <p className="text-sm text-muted-foreground">
                      Schwerere Knochen erhöhen den BMI, ohne die Gesundheit zu beeinträchtigen.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Stoffwechselgesundheit</h4>
                    <p className="text-sm text-muted-foreground">
                      Eine dünne Person kann ein schlechtes Stoffwechselprofil haben (Cholesterin, Glukose).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Hydratation</h4>
                    <p className="text-sm text-muted-foreground">
                      Wassereinlagerungen können den BMI vorübergehend um 1-2 Punkte erhöhen.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Körperliche Fitness</h4>
                    <p className="text-sm text-muted-foreground">
                      Zwei Personen mit demselben BMI können sehr unterschiedliche körperliche Verfassungen haben.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Population-specific limitations */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Users className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Bevölkerungsgruppen, für die der BMI ungeeignet ist</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Dumbbell className="w-5 h-5 text-orange-500" />
                  <h4 className="font-bold">Sportler und Bodybuilder</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Hohe Muskelmasse führt zu "Übergewicht" oder "Adipositas" BMI, während der Körperfettanteil minimal ist.
                </p>
                <Link to="/de/bmi-sportler" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  Mehr erfahren →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Baby className="w-5 h-5 text-cyan-500" />
                  <h4 className="font-bold">Kinder und Jugendliche</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Erwachsenengrenzwerte gelten nicht. Es müssen alters- und geschlechtsspezifische Perzentilkurven verwendet werden.
                </p>
                <Link to="/de/bmi-kinder" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  Mehr erfahren →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold">Ältere Menschen (&gt;65)</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Muskelabbau (Sarkopenie) kann überschüssiges Fett maskieren. Ein "normaler" BMI kann irreführend sein.
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-pink-500" />
                  <h4 className="font-bold">Schwangere Frauen</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Gewichtszunahme ist während der Schwangerschaft normal und erwünscht. Der BMI vor der Schwangerschaft dient als Referenz.
                </p>
                <Link to="/de/bmi-frauen" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  Mehr erfahren →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold">Bestimmte ethnische Gruppen</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Asiatische Bevölkerungen haben bei niedrigerem BMI erhöhte Risiken. Die WHO schlägt angepasste Grenzwerte vor (23 statt 25).
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Scale className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold">Extreme Körpertypen</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Sehr große oder sehr kleine Menschen haben aufgrund des Oberflächen-Volumen-Verhältnisses natürlich unterschiedliche BMIs.
                </p>
              </div>
            </div>
          </div>

          {/* Better alternatives */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Bessere Alternativen zum BMI</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Indikator</th>
                    <th className="text-left py-3 px-4 font-bold">Misst</th>
                    <th className="text-left py-3 px-4 font-bold">Empfohlene Grenzwerte</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Taillenumfang</td>
                    <td className="py-3 px-4">Bauchfett (viszerales Fett)</td>
                    <td className="py-3 px-4">&lt;94 cm (M) / &lt;80 cm (F)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Taille-Hüft-Verhältnis</td>
                    <td className="py-3 px-4">Fettverteilung</td>
                    <td className="py-3 px-4">&lt;0,90 (M) / &lt;0,85 (F)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Taille-Größe-Verhältnis</td>
                    <td className="py-3 px-4">Relatives zentrales Fett</td>
                    <td className="py-3 px-4">&lt;0,5 (Taille &lt; halbe Größe)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Körperfettanteil</td>
                    <td className="py-3 px-4">Tatsächliche Körperzusammensetzung</td>
                    <td className="py-3 px-4">10-20% (M) / 18-28% (F)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">FFMI</td>
                    <td className="py-3 px-4">Fettfreie Masse (für Sportler)</td>
                    <td className="py-3 px-4">18-25 (natürlich)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">DEXA-Scan</td>
                    <td className="py-3 px-4">Wasser, Muskel, Fett, Knochen</td>
                    <td className="py-3 px-4">Je nach Gerät variabel</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* When BMI is still useful */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Wann der BMI dennoch nützlich bleibt</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Trotz seiner Einschränkungen bleibt der BMI in bestimmten Kontexten ein wertvolles Werkzeug:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Schnelles Erst-Screening</strong>: Identifizierung von Personen, die eine umfassendere Untersuchung benötigen</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Epidemiologische Studien</strong>: Vergleich von Bevölkerungsgruppen im großen Maßstab</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Individuelle Überwachung</strong>: Beobachtung der Gewichtsentwicklung im Zeitverlauf</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Durchschnittlicher sitzender Erwachsener</strong>: Für diese Population ist der BMI ziemlich zuverlässig</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Alles über die Grenzen des BMI</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Die <strong>BMI-Grenzen</strong> sind zahlreich und von der wissenschaftlichen Gemeinschaft gut dokumentiert.
                Diese <strong>kritische BMI-Analyse</strong> sollte nicht isoliert interpretiert werden. Die <strong>BMI-Schwächen</strong>
                beinhalten die Unfähigkeit, Fettmasse von Muskelmasse zu unterscheiden.
              </p>
              <p>
                <strong>Warum ist der BMI unvollkommen</strong>? Weil es sich um ein einfaches mathematisches Verhältnis handelt.
                <strong>BMI-Probleme</strong> sind besonders bei Sportlern, Kindern und älteren Menschen sichtbar.
                Ob der <strong>BMI zuverlässig ist oder nicht</strong>, hängt vom Verwendungskontext ab.
              </p>
              <p>
                <strong>Alternativen zum BMI</strong> wie Taillenumfang oder Körperfettanteil bieten ein vollständigeres Bild.
                <strong>Ist der BMI für alle zuverlässig</strong>? Nein, aber in Kombination mit anderen Indikatoren bleibt er
                ein nützliches Screening-Instrument.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Berechnen Sie trotzdem Ihren BMI</h3>
            <p className="text-muted-foreground mb-6">
              Jetzt, da Sie die Einschränkungen kennen, nutzen Sie unseren Rechner als ersten Indikator
            </p>
            <Link
              to="/de/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Meinen BMI berechnen
            </Link>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Grenzen des BMI - Den Body-Mass-Index verstehen</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIGrenzen;
