import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { User, Dumbbell, Target, Heart, Scale, Activity, AlertTriangle, CheckCircle2, Globe } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const BMIMaenner = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(85);
  const [height, setHeight] = useState(180);

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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-6">
            <User className="w-4 h-4" />
            BMI-Rechner für Männer
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-blue-500">BMI für Männer</span> : BMI-Rechner und Idealgewicht
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In Deutschland sind 67% der Männer übergewichtig oder adipös (RKI/DEGS-Studie). BMI-Rechner mit Referenzen von RKI, DGEM und der Deutschen Sporthochschule Köln.
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-500" />
              Geben Sie Ihre Maße ein
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Gewicht</label>
                  <span className="text-2xl font-bold text-blue-500">{weight} kg</span>
                </div>
                <Slider
                  value={[weight]}
                  onValueChange={handleWeightChange}
                  min={40}
                  max={200}
                  step={1}
                  className="py-4"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Größe</label>
                  <span className="text-2xl font-bold text-blue-500">{(height / 100).toFixed(2)} m</span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={handleHeightChange}
                  min={140}
                  max={220}
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
          {/* Understanding BMI for Men */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <User className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI bei Männern verstehen</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Laut der <strong>RKI-Studie „Gesundheit in Deutschland aktuell" (GEDA)</strong> sind <strong>67% der deutschen Männer</strong> übergewichtig oder adipös.
                Der <strong>durchschnittliche deutsche Mann</strong> ist <strong>1,80 m</strong> groß, wiegt <strong>85 kg</strong> und hat einen
                <strong> BMI von 26,3</strong> – damit liegt er bereits im Bereich Übergewicht.
              </p>
              <p>
                Männer haben von Natur aus <strong>mehr Muskelmasse</strong> und einen <strong>niedrigeren Körperfettanteil</strong>
                (15-20% gegenüber 20-25% bei Frauen). Laut <strong>DGE-Leitlinien</strong> sollte der <strong>Taillenumfang</strong> bei Männern
                <strong> 94 cm</strong> (mäßiges Risiko) bzw. <strong>102 cm</strong> (hohes Risiko) nicht überschreiten.
              </p>
              <p>
                Im <strong>DACH-Vergleich</strong> liegt Deutschland (67%) vor <strong>Österreich</strong> (65% übergewichtige Männer),
                während die <strong>Schweiz</strong> mit nur <strong>52%</strong> deutlich besser abschneidet. In Deutschland ist die
                <strong> Betriebssport-Kultur</strong> weit verbreitet – viele Unternehmen fördern aktiv die Fitness ihrer Mitarbeiter,
                was einen positiven Einfluss auf den BMI haben kann.
              </p>
            </div>
          </div>

          {/* BMI Table for Men */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Scale className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI-Tabelle für Männer</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Kategorie</th>
                    <th className="text-left py-3 px-4 font-semibold">BMI</th>
                    <th className="text-left py-3 px-4 font-semibold">Beispiel (1,80 m, Durchschnitt DE)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Untergewicht
                    </td>
                    <td className="py-3 px-4">&lt; 18,5</td>
                    <td className="py-3 px-4">&lt; 60 kg</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Normalgewicht
                    </td>
                    <td className="py-3 px-4">18,5 - 24,9</td>
                    <td className="py-3 px-4">60 - 81 kg</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Übergewicht
                    </td>
                    <td className="py-3 px-4">25 - 29,9</td>
                    <td className="py-3 px-4">81 - 97 kg</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Adipositas
                    </td>
                    <td className="py-3 px-4">≥ 30</td>
                    <td className="py-3 px-4">&gt; 97 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Ideal weight by height */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Idealgewicht für Männer nach Größe</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "1,72 m", min: 55, max: 74, ideal: 65 },
                { height: "1,75 m", min: 57, max: 76, ideal: 67 },
                { height: "1,78 m", min: 59, max: 79, ideal: 70 },
                { height: "1,80 m (Durchschn.)", min: 60, max: 81, ideal: 71 },
                { height: "1,84 m", min: 63, max: 84, ideal: 74 },
                { height: "1,88 m", min: 65, max: 88, ideal: 78 },
              ].map((item) => (
                <div key={item.height} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className="font-semibold text-blue-500">{item.height}</span>
                  <span className="text-muted-foreground">
                    {item.min} - {item.max} kg <span className="text-success">(ideal: {item.ideal} kg)</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tips for men */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-success/10">
                  <Dumbbell className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-xl font-display font-bold">Sport und Muskeln</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>DOSB (Deutscher Olympischer Sportbund)</strong>: 27 Millionen Mitglieder in Sportvereinen</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Fußball</strong> ist die beliebteste Sportart deutscher Männer, gefolgt von Turnen und Tennis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>DGE empfiehlt 150 Min. moderate Aktivität</strong> pro Woche</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Betriebssport</strong>: viele Unternehmen bieten vergünstigte Fitnessprogramme</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-warning/10">
                  <Heart className="w-6 h-6 text-warning" />
                </div>
                <h3 className="text-xl font-display font-bold">Männergesundheit</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>Herz-Kreislauf-Erkrankungen</strong>: Todesursache Nr. 1 bei deutschen Männern (Destatis)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>Ab <strong>35</strong>: Gesundheits-Check-up alle 3 Jahre (GKV-Leistung)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>Diabetes Typ 2</strong> betrifft 9% der deutschen Männer über 40 (RKI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>PSA-Test</strong> zur Prostatakrebs-Vorsorge ab 45 (Kassenleistung)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* German Health System */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Globe className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI und das deutsche Gesundheitssystem</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>Krankenkassen</strong> übernehmen in Deutschland die Kosten für <strong>Ernährungsberatung</strong> bei ärztlicher Verordnung –
                mit geringer Zuzahlung. Dies ist besonders relevant für Männer mit einem BMI über 25, die ihre Ernährung professionell umstellen möchten.
              </p>
              <p>
                Nach <strong>§20 SGB V</strong> haben Versicherte Anspruch auf <strong>Präventionskurse</strong> – bis zu 2 pro Jahr werden von der
                Krankenkasse bezuschusst, darunter auch Programme zur Gewichtsreduktion und Bewegungsförderung.
              </p>
              <p>
                Einige Krankenkassen bieten <strong>DMP (Disease Management Programme)</strong> speziell für <strong>Adipositas</strong> an,
                die eine strukturierte Begleitung bei der Gewichtsabnahme ermöglichen.
              </p>
              <p>
                Für Männer mit einem <strong>BMI über 35</strong> können <strong>Rehabilitationskuren (Kur)</strong> über die
                <strong> Deutsche Rentenversicherung</strong> beantragt werden – ein wichtiger Baustein der stationären Behandlung.
              </p>
              <p>
                <strong>Bariatrische Chirurgie</strong> wird in Deutschland bei einem <strong>BMI ab 40</strong> oder ab
                <strong> BMI 35 mit Begleiterkrankungen</strong> (z.B. Diabetes, Bluthochdruck) von den Krankenkassen genehmigt.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Activity className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI für Männer in Deutschland, Österreich und der Schweiz</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Der <strong>BMI-Rechner für Männer</strong> basiert auf Daten des <strong>Robert Koch-Instituts (RKI)</strong>, der
                <strong> Deutschen Gesellschaft für Ernährungsmedizin (DGEM)</strong> und der <strong>Bundeszentrale für gesundheitliche
                Aufklärung (BZgA)</strong>. Für einen Mann mit <strong>1,80 m</strong> liegt das <strong>Idealgewicht bei etwa 71 kg</strong>,
                was einem BMI von 21,9 entspricht.
              </p>
              <p>
                Im <strong>DACH-Vergleich</strong> zeigen sich deutliche Unterschiede: In <strong>Deutschland</strong> sind 67% der Männer übergewichtig,
                in <strong>Österreich</strong> 65% und in der <strong>Schweiz</strong> nur 52%. Die <strong>Deutsche Sporthochschule Köln</strong> betont,
                dass neben dem BMI auch der Körperfettanteil und die Fitness entscheidend sind.
              </p>
              <p>
                Laut <strong>Destatis</strong> und dem <strong>RKI</strong> steigt der durchschnittliche BMI deutscher Männer mit dem Alter:
                20-29 Jahre (BMI 24,5), 30-39 Jahre (BMI 26,1), 40-49 Jahre (BMI 27,0), 50+ Jahre (BMI 27,8).
                Der <strong>BMI für Männer über 50</strong> kann leicht höhere Werte tolerieren (bis zu 27) ohne erhöhtes Risiko,
                sofern regelmäßige Bewegung und eine ausgewogene Ernährung beibehalten werden.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI-Rechner für Männer - Informationswerkzeug</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIMaenner;
