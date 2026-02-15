import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Calculator, Activity, Target, BookOpen, Scale, TrendingUp, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";

const BMIDe = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weightKg, setWeightKg] = useState(80);
  const [heightCm, setHeightCm] = useState(178);

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
            <span className="gradient-text">BMI-Rechner Kostenlos Online</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berechnen Sie Ihren Body-Mass-Index nach DGEM-Leitlinien mit Daten aus dem DACH-Raum
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
          {/* Contextualized Intro: Adipositas in Deutschland */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI in Deutschland: Zahlen, Fakten und Einordnung</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>Der Body-Mass-Index (BMI)</strong> ist in Deutschland das am weitesten verbreitete
                Screening-Instrument zur Gewichtsklassifikation. Laut der Studie zur Gesundheit Erwachsener
                in Deutschland (DEGS1) des <strong>Robert Koch-Instituts (RKI)</strong> sind 23,6 % der
                Erwachsenen in Deutschland adipös (BMI ≥ 30), weitere 33,3 % der Männer und 24,3 % der
                Frauen gelten als übergewichtig (BMI 25-29,9). Der durchschnittliche BMI der deutschen
                Bevölkerung liegt bei rund 26,3 -- knapp über der Normalgewichtsgrenze.
              </p>
              <p>
                Die <strong>Deutsche Gesellschaft für Ernährungsmedizin (DGEM)</strong> empfiehlt den BMI als
                ersten Anhaltspunkt, betont jedoch in ihren Leitlinien zur Adipositastherapie, dass der
                Taillenumfang (bei Männern ab 94 cm, bei Frauen ab 80 cm) als ergänzende Messgröße
                herangezogen werden sollte. Die <strong>Bundeszentrale für gesundheitliche Aufklärung
                (BZgA)</strong> stellt im Rahmen ihrer Kampagne "Gut essen" kostenlose Informationsmaterialien
                zur Gewichtskontrolle bereit und verwendet den BMI als zentralen Orientierungswert.
              </p>
              <p>
                Besonders besorgniserregend ist der Trend bei Kindern und Jugendlichen: Die KiGGS-Studie
                des RKI zeigt, dass rund 15 % der 3- bis 17-Jährigen in Deutschland übergewichtig sind,
                davon fast 6 % adipös. Diese Zahlen unterstreichen die Bedeutung einer frühzeitigen
                BMI-Kontrolle, wie sie von Kinderärzten im Rahmen der U-Untersuchungen durchgeführt wird.
              </p>
            </div>
          </div>

          {/* BMI im DACH-Vergleich */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI im DACH-Vergleich: Deutschland, Österreich und Schweiz</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Die drei deutschsprachigen Länder zeigen trotz kultureller Gemeinsamkeiten erhebliche
                Unterschiede bei den Adipositasraten. <strong>Deutschland</strong> verzeichnet mit
                23,6 % die höchste Adipositasprävalenz, gefolgt von <strong>Österreich</strong> mit
                rund 19 % (Österreichischer Ernährungsbericht) und der <strong>Schweiz</strong> mit
                nur etwa 12 % (Bundesamt für Statistik, BFS). Der Durchschnitts-BMI liegt in
                Deutschland bei 26,3, in Österreich bei 25,7 und in der Schweiz bei 24,9.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm my-4">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 px-4 font-bold">Land</th>
                      <th className="text-left py-3 px-4 font-bold">Adipositasrate</th>
                      <th className="text-left py-3 px-4 font-bold">Durchschnitts-BMI</th>
                      <th className="text-left py-3 px-4 font-bold">Quelle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium">Deutschland</td>
                      <td className="py-3 px-4 text-destructive font-semibold">23,6 %</td>
                      <td className="py-3 px-4">26,3</td>
                      <td className="py-3 px-4">RKI / DEGS1</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium">Österreich</td>
                      <td className="py-3 px-4 text-warning font-semibold">19,0 %</td>
                      <td className="py-3 px-4">25,7</td>
                      <td className="py-3 px-4">Ernährungsbericht AT</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Schweiz</td>
                      <td className="py-3 px-4 text-success font-semibold">12,0 %</td>
                      <td className="py-3 px-4">24,9</td>
                      <td className="py-3 px-4">BFS Schweiz</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                <strong>Kulturelle Einflussfaktoren im DACH-Raum:</strong> Ernährungswissenschaftler
                sehen mehrere Ursachen für die Unterschiede. Die deutsche <strong>Brotkultur</strong> -- mit
                einem Pro-Kopf-Verbrauch von über 56 kg Brot pro Jahr -- führt zu einem hohen
                Kohlenhydratanteil in der Ernährung. Gleichzeitig ist die traditionelle "Abendbrot"-Mahlzeit
                (kaltes Abendessen mit Brot, Wurst und Käse) in Deutschland weiter verbreitet als in
                der Schweiz, wo warme Abendmahlzeiten üblicher sind.
              </p>
              <p>
                Österreich profitiert von einer lebendigen <strong>Kur- und Thermentradition</strong>. Kuren
                in Gastein, Bad Ischl oder am Wörthersee verbinden Erholung mit medizinisch begleiteter
                Gewichtskontrolle. Das österreichische Sozialversicherungssystem finanziert Kuraufenthalte
                bei entsprechender Indikation, was zur Prävention beiträgt.
              </p>
              <p>
                Die Schweiz wiederum verzeichnet die höchste Rate an <strong>Betriebssport und
                Alltagsbewegung</strong> im DACH-Raum. Laut dem Schweizer Sportobservatorium treiben
                über 70 % der Schweizer regelmäßig Sport, begünstigt durch die Berglandschaft und
                eine ausgeprägte Wanderkultur. Zudem ist der Anteil an Pendlern, die mit dem
                Fahrrad oder zu Fuß zur Arbeit kommen, in der Schweiz deutlich höher als in Deutschland.
              </p>
              <p>
                Interessant ist auch der <strong>Nord-Süd-Gradient</strong> innerhalb Deutschlands: In
                Bayern und Baden-Württemberg liegt die Adipositasrate mit rund 20 % unter dem
                Bundesdurchschnitt, während ostdeutsche Bundesländer wie Mecklenburg-Vorpommern oder
                Sachsen-Anhalt Raten von über 27 % aufweisen. Die Ursachen sind vielschichtig und
                umfassen Einkommensunterschiede, Zugang zu frischen Lebensmitteln und historisch
                gewachsene Ernährungsgewohnheiten.
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

          {/* Krankenkasse und Adipositas */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Krankenkasse und Adipositas: Was übernimmt die gesetzliche Versicherung?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Deutschland verfügt über eines der umfassendsten Gesundheitssysteme weltweit, doch die
                Kostenübernahme bei Adipositas ist komplex geregelt. Die <strong>gesetzlichen
                Krankenkassen (GKV)</strong> erkennen Adipositas seit der S3-Leitlinie der DGEM als
                behandlungsbedürftige Erkrankung an, doch der Weg zur Kostenübernahme erfordert häufig
                einen strukturierten Nachweis der Behandlungsbedürftigkeit.
              </p>
              <p>
                <strong>Präventionskurse nach § 20 SGB V:</strong> Gesetzlich Versicherte haben Anspruch
                auf Zuschüsse für qualitätsgeprüfte Präventionskurse. Dazu gehören Ernährungskurse,
                Bewegungsprogramme und Stressbewältigung. Die meisten Kassen übernehmen 80 % der
                Kursgebühren (bis zu zwei Kurse pro Jahr), einige erstatten sogar 100 %. Die Zentrale
                Prüfstelle Prävention (ZPP) zertifiziert die Kurse und stellt sicher, dass sie
                wissenschaftlichen Standards entsprechen. Konkret bedeutet das: Ein
                Ernährungsprogramm, das 150 Euro kostet, wird mit 120 Euro bezuschusst.
              </p>
              <p>
                <strong>Multimodales Adipositas-Programm (MAP):</strong> Bei einem BMI ab 30 (oder ab
                25 mit Begleiterkrankungen) können Ärzte ein multimodales Therapieprogramm verordnen.
                Dieses umfasst in der Regel 6 bis 12 Monate Ernährungstherapie, Bewegungstherapie
                und psychologische Begleitung. Die Kosten werden von der GKV getragen, wenn der
                Hausarzt eine entsprechende Verordnung ausstellt. Voraussetzung ist ein
                dokumentierter Eigenversuch der Gewichtsreduktion über mindestens 6 Monate.
              </p>
              <p>
                <strong>Bariatrische Chirurgie:</strong> Bei Adipositas Grad III (BMI ≥ 40) oder
                Grad II (BMI ≥ 35) mit schwerwiegenden Begleiterkrankungen wie Diabetes Typ 2
                übernehmen die Krankenkassen unter bestimmten Voraussetzungen die Kosten für einen
                Magenbypass oder Schlauchmagen. Die DGEM-Leitlinie verlangt zuvor ein
                dokumentiertes multimodales Programm von mindestens 6 Monaten. Die Genehmigung
                erfolgt über den Medizinischen Dienst (MD, ehemals MDK).
              </p>
              <p>
                <strong>Bonusprogramme der Krankenkassen:</strong> Viele Kassen belohnen
                gesundheitsbewusstes Verhalten mit Bonuspunkten. Regelmäßige Vorsorgeuntersuchungen,
                Sportverein-Mitgliedschaften oder die Teilnahme an Gesundheitskursen können mit
                bis zu 300 Euro jährlich honoriert werden. Beispiele sind das "Bonusprogramm
                Gesundheit" der AOK, das "Fit-Programm" der Techniker Krankenkasse oder das
                Bonusheft der BARMER. Ein gesunder BMI wird bei einigen Kassen sogar
                direkt als Bonuskriterium gewertet.
              </p>
              <p>
                <strong>Unterschiede in Österreich und der Schweiz:</strong> In Österreich übernimmt
                die Österreichische Gesundheitskasse (ÖGK) Kuraufenthalte zur Gewichtsreduktion.
                In der Schweiz ist die Adipositas-Behandlung durch die Grundversicherung (KVG)
                gedeckt, allerdings erst ab einem BMI von 35 oder bei einem BMI ab 30 mit
                Komorbiditäten. Die Schweizer Franchise (Selbstbehalt von 300 bis 2500 CHF
                pro Jahr) kann die Zugangsschwelle in der Praxis erhöhen.
              </p>
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
                <strong>Rechenbeispiel mit deutschen Durchschnittswerten:</strong> Der deutsche
                Durchschnittsmann wiegt 80 kg bei einer Körpergröße von 1,78 m.<br />
                BMI = 80 ÷ (1,78 × 1,78) = 80 ÷ 3,1684 = <strong>25,2</strong>
              </p>
              <p>
                Mit einem BMI von 25,2 liegt der Durchschnittsdeutsche also bereits knapp im
                Bereich "Übergewicht" -- ein Ergebnis, das mit den Erhebungen des RKI
                übereinstimmt und die gesundheitspolitische Relevanz des Themas verdeutlicht.
                Die Deutsche Sporthochschule Köln empfiehlt, den BMI durch die Messung des
                Taillenumfangs und, wenn möglich, eine bioelektrische Impedanzanalyse (BIA) zu
                ergänzen, um ein vollständigeres Bild der Körperzusammensetzung zu erhalten.
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
                Spezifische Überlegungen zur männlichen Körperzusammensetzung und Muskelmasse
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
                BMI-Interpretation unter Berücksichtigung hormoneller und biologischer Faktoren
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
                Warum der BMI bei Athleten und muskulösen Menschen nicht aussagekräftig ist
              </p>
            </Link>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">BMI-Rechner Deutschland: Wissenschaftlich fundiert und kostenlos</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Unser <strong>BMI-Rechner</strong> basiert auf den Klassifikationen der Weltgesundheitsorganisation
                (WHO) und orientiert sich an den Leitlinien der <strong>Deutschen Gesellschaft für
                Ernährungsmedizin (DGEM)</strong>. Anders als viele andere Online-Tools berücksichtigen
                wir die spezifischen Durchschnittswerte der deutschen Bevölkerung: Mit den vom
                <strong> Robert Koch-Institut (RKI)</strong> erhobenen Referenzdaten können Sie Ihren
                BMI im nationalen Kontext einordnen.
              </p>
              <p>
                Die <strong>Bundeszentrale für gesundheitliche Aufklärung (BZgA)</strong> empfiehlt
                eine regelmäßige BMI-Kontrolle als Bestandteil der Gesundheitsvorsorge. Die
                <strong> BMI-Tabelle</strong> nach WHO-Kriterien unterscheidet sechs Kategorien von
                Untergewicht bis Adipositas Grad III. In Deutschland ist besonders der Übergang
                von Normalgewicht (BMI 18,5-24,9) zu Übergewicht (BMI 25-29,9) relevant, da hier
                bereits das Risiko für Typ-2-Diabetes, Bluthochdruck und Herz-Kreislauf-Erkrankungen
                ansteigt.
              </p>
              <p>
                Forschungen der <strong>Deutschen Sporthochschule Köln</strong> zeigen, dass der BMI
                allein nicht ausreicht, um das individuelle Gesundheitsrisiko zu bestimmen. Daher
                empfehlen Sportmediziner, den <strong>BMI-Wert</strong> durch den Taillenumfang
                und idealerweise eine Körperfettmessung zu ergänzen. Nutzen Sie unseren
                <strong> kostenlosen BMI-Rechner</strong> als ersten Schritt und besprechen Sie
                Ihren Wert mit Ihrem Hausarzt, insbesondere wenn Ihr BMI über 25 liegt oder
                Sie Vorerkrankungen haben.
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

export { BMIDe };
export default BMIDe;
