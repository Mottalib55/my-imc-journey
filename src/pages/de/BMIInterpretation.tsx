import { Header } from "@/components/Header";
import { HelpCircle, AlertTriangle, CheckCircle2, Scale, Activity, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const BMIInterpretationDe = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            BMI verstehen
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">BMI-Interpretation</span>: Ihre Ergebnisse verstehen
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Was Ihr BMI-Ergebnis bedeutet und wie Sie es im Kontext interpretieren
          </p>
        </header>

        <div className="space-y-8">
          {/* Was bedeutet der BMI */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Was bedeutet Ihr BMI?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Der <strong>BMI</strong> (Body-Mass-Index) ist ein Indikator, der eine schnelle Beurteilung
                ermöglicht, ob Ihr Gewicht für Ihre Körpergröße angemessen ist. Er wird berechnet, indem das Gewicht (in kg)
                durch die Körpergröße zum Quadrat (in Metern) geteilt wird.
              </p>
              <p>
                <strong>Wichtig:</strong> Der BMI ist ein Screening-Tool, keine Diagnose. Ein Arzt
                wird andere Faktoren (Taillenumfang, Muskelmasse, Krankengeschichte)
                berücksichtigen, um Ihren Gesundheitszustand zu bewerten.
              </p>
            </div>
          </div>

          {/* Kategorie für Kategorie */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Kategorie für Kategorie</h2>
            </div>

            <div className="space-y-6">
              {/* Untergewicht */}
              <div className="border-l-4 border-info pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <Scale className="w-5 h-5 text-info" />
                  <h3 className="font-bold text-lg">BMI unter 18,5: Untergewicht</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Ein BMI unter 18,5 weist auf Untergewicht hin. Dies kann bedeuten:
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Unzureichende Kalorienaufnahme</li>
                  <li>• Sehr schneller Stoffwechsel</li>
                  <li>• Mögliche Essstörung</li>
                  <li>• Risiko von Nährstoffmangel</li>
                </ul>
                <p className="text-info font-medium mt-3">
                  Rat: Konsultieren Sie einen Arzt, um die Ursache zu identifizieren und Ihre Ernährung anzupassen.
                </p>
              </div>

              {/* Normalgewicht */}
              <div className="border-l-4 border-success pl-6 py-4 bg-success/5 rounded-r-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <h3 className="font-bold text-lg">BMI zwischen 18,5 und 24,9: Normalgewicht</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Dies ist die optimale Zone! Ihr Gewicht ist im Verhältnis zu Ihrer Größe ausgewogen.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Minimierte Gesundheitsrisiken</li>
                  <li>• Gute Energiebilanz</li>
                  <li>• Ziel: Gewicht halten</li>
                </ul>
                <p className="text-success font-medium mt-3">
                  Rat: Behalten Sie Ihre guten Essgewohnheiten und körperliche Aktivität bei.
                </p>
              </div>

              {/* Übergewicht */}
              <div className="border-l-4 border-warning pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  <h3 className="font-bold text-lg">BMI zwischen 25 und 29,9: Übergewicht</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Ihr Gewicht übersteigt leicht die Norm. Es ist ein Warnsignal, kein Notfall.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Erhöhtes Risiko für chronische Krankheiten</li>
                  <li>• Möglicherweise hoher Blutdruck</li>
                  <li>• Kann auf Muskelmasse zurückzuführen sein (Sportler)</li>
                </ul>
                <p className="text-warning font-medium mt-3">
                  Rat: Nehmen Sie eine ausgewogene Ernährung an und erhöhen Sie Ihre körperliche Aktivität.
                </p>
              </div>

              {/* Adipositas */}
              <div className="border-l-4 border-destructive pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-destructive" />
                  <h3 className="font-bold text-lg">BMI über 30: Adipositas</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Adipositas erhöht die Gesundheitsrisiken erheblich.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Klasse I (30-34,9): Mäßige Adipositas</li>
                  <li>• Klasse II (35-39,9): Schwere Adipositas</li>
                  <li>• Klasse III (≥40): Morbide Adipositas</li>
                </ul>
                <p className="text-destructive font-medium mt-3">
                  Rat: Eine ärztliche Beratung wird für eine personalisierte Betreuung empfohlen.
                </p>
              </div>
            </div>
          </div>

          {/* Zu berücksichtigende Faktoren */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Zu berücksichtigende Faktoren</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">Der BMI kann verzerrt sein durch:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Muskelmasse</strong>: Sportler haben einen höheren BMI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Alter</strong>: Senioren verlieren Muskelmasse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Geschlecht</strong>: Frauen haben natürlicherweise mehr Fett</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Ethnische Herkunft</strong>: Unterschiedliche Schwellenwerte nach Bevölkerung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Knochenstruktur</strong>: Kann das Gesamtgewicht beeinflussen</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Ergänzende Indikatoren:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Taillenumfang</strong>: &lt;94 cm (M) / &lt;80 cm (F)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Taille-Hüft-Verhältnis</strong>: Fettverteilung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Körperfettanteil</strong>: Tatsächliche Körperzusammensetzung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Blutuntersuchung</strong>: Cholesterin, Glukose, etc.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Was tun je nach Ergebnis */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Was tun je nach Ergebnis?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Ihr BMI ist nur ein Ausgangspunkt. Hier sind die empfohlenen nächsten Schritte:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Notieren Sie Ihren aktuellen BMI</strong> als Referenz</li>
                <li><strong>Messen Sie Ihren Taillenumfang</strong>, um die Bewertung zu vervollständigen</li>
                <li><strong>Konsultieren Sie einen Arzt</strong>, wenn Ihr BMI außerhalb der Norm liegt</li>
                <li><strong>Setzen Sie sich realistische Ziele</strong>: maximal 0,5-1 kg pro Woche abnehmen</li>
                <li><strong>Verfolgen Sie Ihre Entwicklung</strong>: Wiegen Sie sich einmal pro Woche, gleicher Tag, gleiche Zeit</li>
              </ol>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">BMI-Interpretation verstehen</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Die <strong>BMI-Interpretation</strong> ist unerlässlich, um zu verstehen, was Ihr
                <strong> BMI-Ergebnis</strong> bedeutet. Zu wissen, <strong>wie man seinen BMI liest</strong>, ermöglicht es,
                festzustellen, ob Sie sich in einer gesunden Gewichtszone befinden oder ob Anpassungen
                erforderlich sind.
              </p>
              <p>
                <strong>Wie interpretiert man den BMI</strong>? Die WHO-Kategorien definieren klar,
                was <strong>ein BMI bedeutet</strong> von 22, 25 oder 30. Die <strong>BMI-Analyse</strong>
                muss immer den Kontext berücksichtigen: Alter, Geschlecht, körperliche Aktivität.
              </p>
              <p>
                Der <strong>ideale BMI</strong> liegt zwischen 18,5 und 24,9. <strong>Seinen BMI verstehen</strong>
                bedeutet auch zu wissen, dass dieser Index Grenzen hat. Die vollständige <strong>BMI-Erklärung</strong>
                umfasst die Berücksichtigung anderer Indikatoren wie den Taillenumfang.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Berechnen Sie jetzt Ihren BMI</h3>
            <p className="text-muted-foreground mb-6">
              Verwenden Sie unseren kostenlosen Rechner, um Ihren Body-Mass-Index zu ermitteln
            </p>
            <Link
              to="/de/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Berechnen Sie Ihren BMI
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI-Interpretation</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIInterpretationDe;
