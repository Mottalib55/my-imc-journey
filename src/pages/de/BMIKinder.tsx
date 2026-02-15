import { Header } from "@/components/Header";
import { Baby, AlertTriangle, TrendingUp, BookOpen, Stethoscope, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

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
            <span className="text-cyan-500">BMI für Kinder & Jugendliche</span> : BMI-Rechner
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Die KiGGS-Studie des RKI zeigt: 15,4% der Kinder in Deutschland sind übergewichtig, 5,9% adipös. Das U-Heft und die AGA-Leitlinien sind die Grundlage der Vorsorge.
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
                Konsultieren Sie Ihren <strong>Kinderarzt (Pädiater)</strong> oder besuchen Sie die nächste <strong>U-Untersuchung</strong>.
                Die AGA-Leitlinien empfehlen eine professionelle Einordnung anhand der Kromeyer-Hauschild-Perzentilkurven.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* DACH Overweight Statistics */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Globe className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Übergewicht bei Kindern in Deutschland, Österreich und der Schweiz</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Die <strong>KiGGS-Studie</strong> (Studie zur Gesundheit von Kindern und Jugendlichen in Deutschland) des <strong>Robert Koch-Instituts (RKI)</strong> liefert die umfassendsten Daten zur Kindergesundheit im deutschsprachigen Raum. Die Ergebnisse zeigen ein besorgniserregendes Bild, das durch die Pandemiejahre weiter verschärft wurde.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-warning mb-2">15,4%</p>
                <p className="text-sm font-semibold text-muted-foreground">übergewichtig in DE</p>
                <p className="text-xs text-muted-foreground mt-1">KiGGS-Welle 2, RKI</p>
              </div>
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-destructive mb-2">5,9%</p>
                <p className="text-sm font-semibold text-muted-foreground">adipös in DE</p>
                <p className="text-xs text-muted-foreground mt-1">davon ca. 2,8% stark adipös</p>
              </div>
              <div className="bg-info/5 border border-info/20 rounded-xl p-5 text-center">
                <p className="text-lg font-bold text-info mb-2">DACH-Vergleich</p>
                <ul className="text-sm text-muted-foreground space-y-1 text-left">
                  <li>DE: <strong>15,4%</strong> übergewichtig</li>
                  <li>AT: <strong>~17%</strong> übergewichtig</li>
                  <li>CH: <strong>~12%</strong> übergewichtig</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Growth Curves - German specific */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <TrendingUp className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Wachstumskurven und Perzentile in Deutschland</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                In Deutschland werden die <strong>Kromeyer-Hauschild-Perzentilkurven</strong> verwendet, die auf deutschen Referenzdaten basieren. Diese Kurven sind die Grundlage der <strong>AGA-Leitlinien</strong> (Arbeitsgemeinschaft Adipositas im Kindes- und Jugendalter) und werden vom Kinderarzt im Rahmen der Vorsorgeuntersuchungen eingetragen.
              </p>
              <p>
                Das <strong>U-Untersuchungsheft (Gelbes Heft)</strong> enthält die Wachstumskurven und wird bei jeder Vorsorgeuntersuchung von U1 bis U9 sowie J1 und J2 aktualisiert. Es ist das zentrale Dokument zur Entwicklungsbeobachtung Ihres Kindes.
              </p>

              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-4">Perzentilbewertung nach AGA-Leitlinien</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p><strong className="text-info">&lt;10. Perzentil:</strong> Untergewicht</p>
                    <p><strong className="text-success">10.-90. Perzentil:</strong> Normalgewicht</p>
                    <p><strong className="text-warning">90.-97. Perzentil:</strong> Übergewicht</p>
                    <p><strong className="text-destructive">&gt;97. Perzentil:</strong> Adipositas</p>
                    <p><strong className="text-destructive font-extrabold">&gt;99,5. Perzentil:</strong> Extreme Adipositas</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      Die Kromeyer-Hauschild-Referenzwerte basieren auf Daten von über 34.000 deutschen Kindern und Jugendlichen. Ein Kind im 50. Perzentil hat einen BMI, der genau dem Median seiner Alters- und Geschlechtsgruppe entspricht.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-xl p-6 mt-4">
                <h4 className="font-bold mb-3">U-Untersuchungen und Vorsorge</h4>
                <p className="text-sm text-muted-foreground">
                  Das deutsche Vorsorgeprogramm umfasst <strong>U1 bis U9</strong> (Geburt bis 5 Jahre), die <strong>U7a</strong> (3 Jahre) sowie die Jugendgesundheitsuntersuchungen <strong>J1</strong> (12-14 Jahre) und <strong>J2</strong> (16-17 Jahre). Bei jeder Untersuchung werden Gewicht und Größe gemessen und in die Perzentilkurven des Gelben Hefts eingetragen.
                </p>
              </div>
            </div>
          </div>

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
                (18,5 / 25 / 30) interpretiert. Die <strong>AGA</strong> und die <strong>DGKJ</strong> (Deutsche Gesellschaft für Kinder- und Jugendmedizin) empfehlen ausdrücklich die Verwendung alters- und geschlechtsspezifischer Perzentilkurven.
              </p>
              <p>
                Die AGA-Leitlinien betonen, dass ein einzelner BMI-Wert bei Kindern wenig aussagekräftig ist. Entscheidend ist der <strong>Verlauf auf der Perzentilkurve</strong> über die Zeit, insbesondere das Erkennen eines frühzeitigen „Adiposity Rebound" vor dem 6. Lebensjahr.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                <h4 className="font-bold text-destructive mb-2">BMI Erwachsene</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Feste universelle Schwellenwerte</li>
                  <li>&lt;18,5 = Untergewicht</li>
                  <li>18,5-25 = Normalgewicht</li>
                  <li>25-30 = Übergewicht</li>
                  <li>&gt;30 = Adipositas</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">BMI Kinder (AGA / DGKJ)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Kromeyer-Hauschild-Perzentilkurven</li>
                  <li>Variiert nach Alter und Geschlecht</li>
                  <li>Verlaufsbeobachtung im Gelben Heft</li>
                  <li>Adiposity-Rebound-Zeitpunkt entscheidend</li>
                  <li>Interpretation nur durch Kinderarzt</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Age groups - German context */}
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
                  Der BMI wird in der Regel nicht berechnet. Im Rahmen der <strong>U-Untersuchungen U1 bis U7</strong> werden Gewichts- und Größenkurven sowie der Kopfumfang im <strong>Vorsorgeheft (Gelbes Heft)</strong> dokumentiert. Der Kinderarzt beurteilt die Entwicklung anhand standardisierter Wachstumskurven.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Kind (2-12 Jahre)</h4>
                <p className="text-sm text-muted-foreground">
                  BMI wird mit Perzentilkurven interpretiert. Die <strong>U7a bis U9</strong> sowie die <strong>Schuleingangsuntersuchung</strong> durch das Gesundheitsamt sind wichtige Kontrollpunkte. Der <strong>Kinderarzt (Pädiater)</strong> überwacht den Adiposity Rebound um das 6. Lebensjahr.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Jugendlicher (12-18 Jahre)</h4>
                <p className="text-sm text-muted-foreground">
                  Die <strong>J1 (12-14 Jahre)</strong> und <strong>J2 (16-17 Jahre)</strong> sind die Vorsorgeuntersuchungen für Jugendliche. Die Pubertät führt zu erheblichen Körperveränderungen mit geschlechtsspezifischen Unterschieden. Spezifische Kurven für Jungen und Mädchen sind unverzichtbar.
                </p>
              </div>
            </div>
          </div>

          {/* Social Inequalities - unique DACH content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Users className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Soziale Ungleichheiten in Deutschland</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Die <strong>KiGGS-Studie</strong> des RKI belegt einen deutlichen Zusammenhang zwischen dem sozioökonomischen Status der Familie und dem Adipositas-Risiko bei Kindern. Kinder aus Familien mit <strong>niedrigem sozioökonomischem Status</strong> sind <strong>2- bis 3-mal häufiger</strong> von Adipositas betroffen als Kinder aus Familien mit hohem Status.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-muted/30 rounded-xl p-5">
                  <h4 className="font-bold mb-3">Risikofaktoren laut KiGGS</h4>
                  <ul className="text-sm space-y-2">
                    <li><strong>Niedriger sozioökonomischer Status:</strong> 2- bis 3-fach erhöhtes Adipositasrisiko</li>
                    <li><strong>Migrationshintergrund:</strong> Höhere Übergewichtsraten, insbesondere bei türkisch- und arabischstämmigen Familien</li>
                    <li><strong>Ost-West-Gefälle:</strong> Unterschiede zwischen neuen und alten Bundesländern</li>
                    <li><strong>Regionale Unterschiede:</strong> Höhere Raten in nördlichen und östlichen Bundesländern</li>
                  </ul>
                </div>
                <div className="bg-muted/30 rounded-xl p-5">
                  <h4 className="font-bold mb-3">Konsequenzen für die Prävention</h4>
                  <ul className="text-sm space-y-2">
                    <li>Zielgruppenspezifische Gesundheitsförderung in Kitas und Schulen</li>
                    <li>Niedrigschwellige Angebote für sozial benachteiligte Familien</li>
                    <li>Mehrsprachige Informationsmaterialien</li>
                    <li>Ausbau der Ganztagsbetreuung mit gesunder Ernährung und Bewegungsangeboten</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* When to consult - German references */}
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
                  <li>Plötzliche Veränderung auf der Perzentilkurve</li>
                  <li>BMI &gt; 97. Perzentil (Adipositas nach AGA)</li>
                  <li>BMI &lt; 10. Perzentil (Untergewicht)</li>
                  <li>Früher Adiposity Rebound (&lt;5 Jahre)</li>
                  <li>Kind macht sich Sorgen über sein Gewicht</li>
                  <li>Auffälligkeiten bei der Schuleingangsuntersuchung</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-3">Anlaufstellen im deutschen Gesundheitssystem</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li><strong>Kinderarzt (Pädiater):</strong> Erste Anlaufstelle, U- und J-Untersuchungen</li>
                  <li><strong>U-Untersuchungen:</strong> U1-U9 (0-5 Jahre), U7a (3 Jahre)</li>
                  <li><strong>J1 und J2:</strong> Jugendgesundheitsuntersuchungen</li>
                  <li><strong>Schuleingangsuntersuchung:</strong> Durch das Gesundheitsamt</li>
                  <li><strong>Sozialpädiatrische Zentren (SPZ):</strong> Für komplexe Fälle</li>
                  <li><strong>AGA-Behandlungsleitlinien:</strong> Stufentherapie bei kindlicher Adipositas</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prevention and Programs - unique DACH content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <TrendingUp className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Prävention und Programme in Deutschland</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                In Deutschland gibt es ein breites Netz an Präventionsprogrammen, die von Bund, Ländern und Krankenkassen finanziert werden. Die <strong>Bundeszentrale für gesundheitliche Aufklärung (BZgA)</strong> koordiniert viele dieser Maßnahmen.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold text-cyan-500 mb-3">Programme und Initiativen</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>BZgA „Gut drauf":</strong> Programm zur Förderung gesunder Lebensweise bei Jugendlichen</li>
                    <li><strong>„Gesund aufwachsen":</strong> Nationale Initiative für Kindergesundheit</li>
                    <li><strong>„Komm in Bewegung":</strong> Bewegungsförderung für Kinder und Familien</li>
                    <li><strong>Schulsport:</strong> Bewegungsförderung im Rahmen des Sportunterrichts und in Ganztagsschulen</li>
                  </ul>
                </div>
                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold text-cyan-500 mb-3">Gesetzliche Grundlagen und Empfehlungen</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><strong>Präventionskurse nach § 20 SGB V:</strong> Von Krankenkassen geförderte Kurse für Familien zu Ernährung und Bewegung</li>
                    <li><strong>DGE-Qualitätsstandards:</strong> Empfehlungen der Deutschen Gesellschaft für Ernährung für die Verpflegung in Kitas und Schulen</li>
                    <li><strong>Krankenkassen-Programme:</strong> Viele gesetzliche Kassen bieten eigene Präventionsprogramme für Kinder und Jugendliche an</li>
                    <li><strong>AGA-Stufentherapie:</strong> Leitlinie zur Behandlung von Übergewicht und Adipositas im Kindesalter</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Content - German specific */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <BookOpen className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Alles über den Kinder-BMI in Deutschland</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Die <strong>BMI-Berechnung bei Kindern</strong> verwendet die gleiche Formel wie bei Erwachsenen (Gewicht / Größe²),
                aber die <strong>Interpretation</strong> erfolgt in Deutschland anhand der <strong>Kromeyer-Hauschild-Perzentilkurven</strong>, wie sie von der <strong>AGA</strong> (Arbeitsgemeinschaft Adipositas im Kindes- und Jugendalter) empfohlen werden.
              </p>
              <p>
                Die <strong>KiGGS-Studie</strong> des <strong>Robert Koch-Instituts (RKI)</strong> ist die wichtigste Datenquelle zur Kindergesundheit in Deutschland. Sie zeigt, dass sich die Übergewichtsraten bei Kindern in den letzten Jahrzehnten stabilisiert haben, aber auf einem zu hohen Niveau verharren. Die <strong>DGKJ</strong> (Deutsche Gesellschaft für Kinder- und Jugendmedizin) empfiehlt regelmäßige Vorsorgeuntersuchungen.
              </p>
              <p>
                Die <strong>U-Untersuchungen</strong> (U1-U9, U7a) und <strong>Jugendgesundheitsuntersuchungen</strong> (J1, J2) bilden das Rückgrat der Früherkennung. Bei jeder Untersuchung werden Gewicht und Größe gemessen und in die Wachstumskurven im <strong>Gelben Heft</strong> eingetragen. Im Zweifelsfall über den BMI Ihres Kindes konsultieren Sie Ihren <strong>Kinderarzt</strong>, der die Perzentilkurven im Gesamtkontext beurteilen kann.
              </p>
              <p>
                Für Jugendliche in der Pubertät ist die Interpretation des BMI besonders anspruchsvoll. Die <strong>AGA-Leitlinien</strong> und die Beratung durch den Pädiater im Rahmen der <strong>J1</strong> und <strong>J2</strong> sind in dieser Phase besonders wichtig.
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


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI-Rechner für Kinder - Nur zu Informationszwecken</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIKinder;
