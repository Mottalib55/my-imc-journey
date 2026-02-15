import { Header } from "@/components/Header";
import { Table, Scale, AlertTriangle, CheckCircle2, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

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
            <span className="gradient-text">BMI-Tabelle</span> : Vollständige WHO-Klassifikation
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Die offizielle WHO-Klassifikation, verwendet vom RKI und der DGEM. Durchschnittlicher BMI in Deutschland: 26,5 (Männer) und 25,6 (Frauen) — DEGS1-Studie.
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
                    <td className="py-4 px-4 font-mono">&lt; 16,0</td>
                    <td className="py-4 px-4 text-info">Hoch (Mangelernährung)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Mäßiges Untergewicht</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">16,0 – 16,9</td>
                    <td className="py-4 px-4 text-info">Mäßig</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Leichtes Untergewicht</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">17,0 – 18,4</td>
                    <td className="py-4 px-4 text-info">Niedrig</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-success" />
                        <span className="font-bold text-success">Normalgewicht</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-success">18,5 – 24,9</td>
                    <td className="py-4 px-4 text-success">Niedrig (Referenz)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-warning" />
                        <span className="font-medium">Übergewicht (Präadipositas)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">25,0 – 29,9</td>
                    <td className="py-4 px-4 text-warning">Erhöht</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Adipositas Grad I (mäßig)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">30,0 – 34,9</td>
                    <td className="py-4 px-4 text-destructive">Hoch</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Adipositas Grad II (schwer)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">35,0 – 39,9</td>
                    <td className="py-4 px-4 text-destructive">Sehr hoch</td>
                  </tr>
                  <tr className="bg-destructive/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Adipositas Grad III (morbid)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">≥ 40,0</td>
                    <td className="py-4 px-4 text-destructive">Extrem hoch</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Quelle: Weltgesundheitsorganisation (WHO), übernommen vom Robert Koch-Institut (RKI) und der Deutschen Gesellschaft für Ernährungsmedizin (DGEM).
            </p>
          </div>

          {/* Weight examples by height — German averages highlighted */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Gewicht nach Größe — Deutsche Durchschnittswerte</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Entsprechung zwischen Körpergröße und Gewichtsbereich für jede BMI-Kategorie. Die <strong>hervorgehobenen Zeilen</strong> entsprechen den
              deutschen Durchschnittsgrößen: <strong>1,80 m</strong> (Männer) und <strong>1,66 m</strong> (Frauen) laut Mikrozensus.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-3 font-bold">Größe</th>
                    <th className="text-left py-3 px-3 font-bold text-info">Untergewicht<br />&lt;18,5</th>
                    <th className="text-left py-3 px-3 font-bold text-success">Normal<br />18,5–24,9</th>
                    <th className="text-left py-3 px-3 font-bold text-warning">Übergewicht<br />25–29,9</th>
                    <th className="text-left py-3 px-3 font-bold text-destructive">Adipositas<br />≥30</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { h: 1.55, u: 44, nMin: 44, nMax: 60, sMin: 60, sMax: 72, o: 72, avg: false },
                    { h: 1.60, u: 47, nMin: 47, nMax: 64, sMin: 64, sMax: 77, o: 77, avg: false },
                    { h: 1.65, u: 50, nMin: 50, nMax: 68, sMin: 68, sMax: 81, o: 81, avg: false },
                    { h: 1.66, u: 51, nMin: 51, nMax: 69, sMin: 69, sMax: 82, o: 82, avg: true },
                    { h: 1.70, u: 53, nMin: 53, nMax: 72, sMin: 72, sMax: 87, o: 87, avg: false },
                    { h: 1.75, u: 57, nMin: 57, nMax: 76, sMin: 76, sMax: 92, o: 92, avg: false },
                    { h: 1.80, u: 60, nMin: 60, nMax: 81, sMin: 81, sMax: 97, o: 97, avg: true },
                    { h: 1.85, u: 63, nMin: 63, nMax: 85, sMin: 85, sMax: 102, o: 102, avg: false },
                    { h: 1.90, u: 67, nMin: 67, nMax: 90, sMin: 90, sMax: 108, o: 108, avg: false },
                  ].map((row) => (
                    <tr key={row.h} className={`border-b border-border/50 ${row.avg ? "bg-primary/10 font-semibold" : ""}`}>
                      <td className="py-3 px-3 font-bold">
                        {row.h.toFixed(2).replace(".", ",")} m
                        {row.avg && <span className="ml-2 text-xs text-primary font-medium">&#9733; {row.h === 1.80 ? "Ø Männer" : "Ø Frauen"}</span>}
                      </td>
                      <td className="py-3 px-3 text-info">&lt;{row.u} kg</td>
                      <td className="py-3 px-3 text-success">{row.nMin}–{row.nMax} kg</td>
                      <td className="py-3 px-3 text-warning">{row.sMin}–{row.sMax} kg</td>
                      <td className="py-3 px-3 text-destructive">&gt;{row.o} kg</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* NEW: Prevalence by BMI category in Germany / DACH */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Prävalenz nach BMI-Kategorie in Deutschland</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Die Daten des <strong>Robert Koch-Instituts (RKI)</strong> aus der <strong>DEGS1-Studie</strong> (Studie zur Gesundheit Erwachsener in Deutschland) zeigen, dass Übergewicht und Adipositas in Deutschland weit verbreitet sind.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-xl bg-warning/5 border border-warning/20">
                <h4 className="font-bold text-lg mb-3">Übergewicht in Deutschland (BMI ≥ 25)</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>67 % der Männer</strong> und <strong>53 % der Frauen</strong> sind übergewichtig (DEGS1, RKI)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Der durchschnittliche BMI beträgt <strong>26,5</strong> bei Männern und <strong>25,6</strong> bei Frauen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Die Prävalenz steigt mit dem Alter und erreicht ihren Höchstwert zwischen <strong>60 und 69 Jahren</strong></span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-destructive/5 border border-destructive/20">
                <h4 className="font-bold text-lg mb-3">Adipositas-Vergleich in der DACH-Region</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-destructive mt-1 flex-shrink-0" />
                    <span><strong>Deutschland (DE)</strong>: 23,6 % Adipositas (BMI ≥ 30)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-destructive/70 mt-1 flex-shrink-0" />
                    <span><strong>Österreich (AT)</strong>: ca. 19 % Adipositas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-destructive/40 mt-1 flex-shrink-0" />
                    <span><strong>Schweiz (CH)</strong>: ca. 12 % Adipositas</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mt-4">
                  Quellen: RKI DEGS1, Statistik Austria, Schweizerische Gesundheitsbefragung (SGB)
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-muted/50 text-sm text-muted-foreground">
              <strong>Hinweis:</strong> Deutschland weist im DACH-Vergleich die höchste Adipositas-Prävalenz auf.
              Die Unterschiede lassen sich zum Teil durch Ernährungsgewohnheiten, sozioökonomische Faktoren und unterschiedliche Gesundheitspolitiken erklären.
              Die Schweiz hat mit ca. 12 % eine der niedrigsten Adipositas-Raten in Westeuropa.
            </div>
          </div>

          {/* NEW: Waist circumference — DGE recommendations */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Taillenumfang: DGE- und DGEM-Empfehlungen</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Die <strong>Deutsche Gesellschaft für Ernährung (DGE)</strong> und die <strong>Deutsche Gesellschaft für Ernährungsmedizin (DGEM)</strong> empfehlen,
              den Taillenumfang als ergänzenden Indikator zum BMI heranzuziehen. Im Gegensatz zum BMI erfasst der Taillenumfang gezielt das viszerale Bauchfett,
              das als besonders gesundheitsschädlich gilt.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Risikostufe</th>
                    <th className="text-left py-3 px-4 font-bold">Frauen</th>
                    <th className="text-left py-3 px-4 font-bold">Männer</th>
                    <th className="text-left py-3 px-4 font-bold">Gesundheitsrisiko</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-success/10">
                    <td className="py-3 px-4 font-medium">Normal</td>
                    <td className="py-3 px-4 text-success">&lt; 80 cm</td>
                    <td className="py-3 px-4 text-success">&lt; 94 cm</td>
                    <td className="py-3 px-4 text-success">Niedrig</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-3 px-4 font-medium">Erhöhtes Risiko</td>
                    <td className="py-3 px-4 text-warning">80–88 cm</td>
                    <td className="py-3 px-4 text-warning">94–102 cm</td>
                    <td className="py-3 px-4 text-warning">Erhöht (Herz-Kreislauf, Diabetes Typ 2)</td>
                  </tr>
                  <tr className="bg-destructive/5">
                    <td className="py-3 px-4 font-medium">Stark erhöhtes Risiko</td>
                    <td className="py-3 px-4 text-destructive">&gt; 88 cm</td>
                    <td className="py-3 px-4 text-destructive">&gt; 102 cm</td>
                    <td className="py-3 px-4 text-destructive">Deutlich erhöht (metabolisches Syndrom)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-bold mb-2">So messen Sie richtig (DGE-Empfehlung)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>1. Stellen Sie sich aufrecht hin und atmen Sie normal aus</li>
                  <li>2. Messen Sie auf Höhe des Bauchnabels</li>
                  <li>3. Das Maßband sollte eng anliegen, aber nicht einschnüren</li>
                  <li>4. Messen Sie morgens vor dem Frühstück</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-bold mb-2">Waist-to-Height-Ratio (WHtR)</h4>
                <p className="text-sm text-muted-foreground">
                  Die DGEM empfiehlt zusätzlich das <strong>Taille-zu-Größe-Verhältnis (WHtR)</strong> als alters- und geschlechtsunabhängigen Indikator.
                  Ein WHtR <strong>unter 0,5</strong> gilt als Zielwert. Werte über 0,6 weisen auf ein deutlich erhöhtes kardiometabolisches Risiko hin.
                </p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              Quellen: DGE (Deutsche Gesellschaft für Ernährung), DGEM (Deutsche Gesellschaft für Ernährungsmedizin), WHO
            </p>
          </div>

          {/* Edge cases — DACH-specific */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Den BMI richtig interpretieren — Sonderfälle und Leitlinien</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold">BMI ist laut DGEM nicht geeignet für:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Muskulöse Sportler</strong>: Muskelmasse verfälscht den BMI — die DGEM empfiehlt den FFMI als Alternative</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Schwangere Frauen</strong>: Gewichtszunahme ist physiologisch normal und individuell verschieden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Ältere Menschen (&gt;70 J.)</strong>: Verlust von Muskelmasse (Sarkopenie) führt zu unterschätztem Risiko</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Kinder und Jugendliche</strong>: Die <strong>AGA (Arbeitsgemeinschaft Adipositas im Kindes- und Jugendalter)</strong> verwendet alters- und geschlechtsspezifische BMI-Perzentilen</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold">Ergänzende Indikatoren und Anwendungen:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Taillenumfang</strong>: Viszeralfett-Indikator (DGE-Empfehlung)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Körperfettanteil (%)</strong>: BIA-Messung oder DEXA-Scan zur Bestimmung der Körperzusammensetzung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Taille-Hüft-Verhältnis (WHR)</strong>: Fettverteilungsmuster nach DGEM-Leitlinien</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Betriebsärztliche Untersuchung</strong>: Der BMI wird bei arbeitsmedizinischen Vorsorgeuntersuchungen (z. B. G25, G41) routinemäßig erhoben</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>FFMI (fettfreie Masse-Index)</strong>: Empfohlen für Sportler zur Beurteilung der Muskelmasse</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO section — DACH references */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Alles über die BMI-Tabelle in Deutschland</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Die <strong>BMI-Tabelle</strong> nach der <strong>WHO-Klassifikation</strong> ist die offizielle Referenz zur Einordnung des Körpergewichts
                und wird in Deutschland vom <strong>Robert Koch-Institut (RKI)</strong> in der <strong>DEGS1-Studie</strong> (Studie zur Gesundheit Erwachsener in Deutschland)
                verwendet. Sie definiert Grenzwerte für <strong>Untergewicht</strong>, <strong>Normalgewicht</strong>, <strong>Übergewicht</strong> und
                <strong> Adipositas Grad I bis III</strong>.
              </p>
              <p>
                Die <strong>Deutsche Gesellschaft für Ernährungsmedizin (DGEM)</strong> ergänzt die BMI-Tabelle durch weitere diagnostische Kriterien wie
                den Taillenumfang und den WHtR (Taille-zu-Größe-Verhältnis). Die <strong>Deutsche Gesellschaft für Ernährung (DGE)</strong> gibt zudem
                praxisnahe Empfehlungen für die Bevölkerung heraus. Im <strong>DACH-Vergleich</strong> (Deutschland, Österreich, Schweiz) zeigen sich
                deutliche Unterschiede bei der Adipositas-Prävalenz.
              </p>
              <p>
                Die <strong>BMI-Tabelle für Erwachsene</strong> gilt für Personen ab 18 Jahren. Für <strong>Kinder und Jugendliche</strong> verwendet die
                <strong> AGA (Arbeitsgemeinschaft Adipositas im Kindes- und Jugendalter)</strong> eigene alters- und geschlechtsspezifische Referenzwerte (Perzentilen nach
                Kromeyer-Hauschild). In der <strong>arbeitsmedizinischen Vorsorge</strong> (z. B. betriebsärztliche Untersuchungen nach G25 oder G41) wird der BMI
                routinemäßig erhoben und dokumentiert.
              </p>
              <p>
                Um Ihr persönliches Ergebnis richtig einzuordnen, nutzen Sie die obige <strong>BMI-Korrespondenztabelle</strong> mit deutschen Durchschnittsgrößen.
                Die <strong>Gewicht-Größe-BMI-Tabelle</strong> zeigt Ihnen direkt, in welcher Kategorie Sie sich befinden — basierend auf den Empfehlungen von
                RKI, DGEM und DGE.
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


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI-Tabelle</p>
        </footer>
      </div>
    </div>
  );
};

export default BMITabelle;
