import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { User, Dumbbell, Target, Heart, Scale, Activity, AlertTriangle, CheckCircle2, Globe } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { RelatedPages } from "@/components/RelatedPages";

const IMCUomo = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(79);
  const [height, setHeight] = useState(177);

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
            IMC per gli Uomini
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-blue-500">IMC Uomo</span> : Calcolatore IMC Maschile e Peso
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In Italia, il 44,7% degli uomini è in sovrappeso e il 12,3% è obeso (ISTAT/ISS 2023). Calcolatore IMC con riferimenti ISS, CREA-INRAN e Ministero della Salute.
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-500" />
              Inserisci le tue misure
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Peso</label>
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
                  <label className="text-sm font-medium">Altezza</label>
                  <span className="text-2xl font-bold text-blue-500">{height} cm</span>
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
          {/* Understanding IMC for Men */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <User className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Capire l'IMC negli uomini italiani</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Secondo i dati <strong>ISTAT</strong>, il <strong>44,7% degli uomini italiani è in sovrappeso</strong> e il <strong>12,3% è obeso</strong>,
                una percentuale inferiore alla media europea. L'uomo italiano medio misura <strong>1,77 m</strong> e pesa circa <strong>79 kg</strong>,
                con un IMC medio di circa 25,2. Nonostante questi valori relativamente favorevoli, la tendenza è in crescita.
              </p>
              <p>
                Esiste un marcato <strong>divario Nord-Sud</strong>: il tasso di obesità maschile è più alto in <strong>Campania (14,8%)</strong>
                rispetto al <strong>Trentino-Alto Adige (8,1%)</strong>. Tuttavia, gli uomini italiani mantengono uno dei
                <strong> tassi di obesità più bassi dell'Europa occidentale</strong>, grazie in parte alla tradizione della dieta mediterranea.
              </p>
              <p>
                Secondo la <strong>Società Italiana dell'Obesità</strong>, il girovita resta un indicatore fondamentale per gli uomini:
                oltre i <strong>94 cm</strong> il rischio cardiovascolare è moderato, oltre i <strong>102 cm</strong> è elevato.
                L'uomo italiano beneficia della dieta mediterranea, ma lo stile di vita sedentario sta aumentando.
              </p>
            </div>
          </div>

          {/* IMC Table for Men */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Scale className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tabella IMC Uomo</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Categoria</th>
                    <th className="text-left py-3 px-4 font-semibold">IMC</th>
                    <th className="text-left py-3 px-4 font-semibold">Esempio (1,77 m, media IT)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Sottopeso
                    </td>
                    <td className="py-3 px-4">&lt; 18,5</td>
                    <td className="py-3 px-4">&lt; 58 kg</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Normopeso
                    </td>
                    <td className="py-3 px-4">18,5 - 24,9</td>
                    <td className="py-3 px-4">58 - 78 kg</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Sovrappeso
                    </td>
                    <td className="py-3 px-4">25 - 29,9</td>
                    <td className="py-3 px-4">78 - 94 kg</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesità
                    </td>
                    <td className="py-3 px-4">≥ 30</td>
                    <td className="py-3 px-4">&gt; 94 kg</td>
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
              <h2 className="text-2xl font-display font-bold">Peso ideale uomo in base all'altezza</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "1,68 m", min: 52, max: 70, ideal: 62 },
                { height: "1,72 m", min: 55, max: 74, ideal: 65 },
                { height: "1,75 m", min: 57, max: 76, ideal: 67 },
                { height: "1,77 m (media IT)", min: 58, max: 78, ideal: 69 },
                { height: "1,80 m", min: 60, max: 81, ideal: 71 },
                { height: "1,84 m", min: 63, max: 84, ideal: 74 },
              ].map((item) => (
                <div key={item.height} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className="font-semibold text-blue-500">{item.height}</span>
                  <span className="text-muted-foreground">
                    {item.min} - {item.max} kg <span className="text-success">(ideale: {item.ideal} kg)</span>
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
                <h3 className="text-xl font-display font-bold">Sport e attività fisica in Italia</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Il <strong>calcio è lo sport maschile più praticato</strong> in Italia (1,1 milioni di tesserati FIGC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Il <strong>ciclismo è tradizione italiana</strong>: eventi come il Giro d'Italia ispirano l'attività fisica</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>L'<strong>ISS raccomanda almeno 150 min</strong> di attività moderata settimanale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Solo il <strong>34% degli uomini italiani</strong> pratica sport regolarmente (ISTAT)</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-warning/10">
                  <Heart className="w-6 h-6 text-warning" />
                </div>
                <h3 className="text-xl font-display font-bold">Salute maschile in Italia</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>Le <strong>malattie cardiovascolari</strong>: prima causa di morte maschile in Italia (ISS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>Dopo i <strong>40 anni</strong>: check-up cardiovascolare consigliato dal medico di base</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>Il <strong>diabete tipo 2</strong> colpisce il 7% degli uomini italiani (ISS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>Le <strong>differenze Nord-Sud</strong>: gli uomini del Sud hanno BMI più alto in media</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mediterranean Diet Section */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Heart className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">La Dieta Mediterranea e la Salute Maschile</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Negli anni '50, il fisiologo americano <strong>Ancel Keys</strong> avviò il celebre <strong>Seven Countries Study</strong>,
                dimostrando che gli uomini del Sud Italia presentavano la <strong>mortalità cardiovascolare più bassa</strong> tra tutti
                i paesi studiati. Questa scoperta pose le basi per la comprensione scientifica della dieta mediterranea.
              </p>
              <p>
                Riconosciuta <strong>patrimonio UNESCO</strong> dal 2010, la vera dieta mediterranea si basa su
                <strong> olio d'oliva extra vergine, pesce, legumi, cereali integrali</strong>, frutta, verdura e un consumo moderato
                di vino rosso. Tuttavia, la dieta italiana moderna si è progressivamente allontanata da questo modello tradizionale.
              </p>
              <p>
                Gli uomini italiani che seguono la dieta mediterranea tradizionale hanno un <strong>rischio cardiovascolare
                inferiore del 30%</strong> (studio PREDIMED). Nonostante ciò, il <strong>paradosso italiano moderno</strong> è evidente:
                il consumo di fast food e alimenti ultra-processati è in costante aumento, mentre la dieta tradizionale
                è in declino, soprattutto tra le generazioni più giovani.
              </p>
            </div>
          </div>

          {/* SSN and Obesity Treatment Section */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Globe className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Il SSN e il Trattamento dell'Obesità Maschile</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                In Italia, il <strong>medico di base</strong> (medico di medicina generale) rappresenta il primo riferimento
                per gli uomini con problemi di peso. È il punto di partenza per una valutazione iniziale dell'IMC
                e per l'eventuale invio a specialisti del <strong>Servizio Sanitario Nazionale (SSN)</strong>.
              </p>
              <p>
                Il SSN copre la <strong>consulenza nutrizionale</strong> attraverso le ASL (Aziende Sanitarie Locali),
                dove dietisti e nutrizionisti possono elaborare piani alimentari personalizzati. I <strong>LEA
                (Livelli Essenziali di Assistenza)</strong> includono il trattamento dell'obesità come prestazione garantita
                a tutti i cittadini italiani.
              </p>
              <p>
                Per i casi più gravi, la <strong>chirurgia bariatrica</strong> è coperta dal SSN per pazienti con
                <strong> IMC ≥ 40</strong> o con <strong>IMC ≥ 35 in presenza di comorbidità</strong> (diabete tipo 2,
                ipertensione, apnee notturne). Il percorso prevede una valutazione multidisciplinare presso centri
                specializzati riconosciuti dal Ministero della Salute.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Activity className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">L'IMC maschile in Italia: dati e riferimenti</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Secondo i dati <strong>ISS (Istituto Superiore di Sanità)</strong> e <strong>ISTAT</strong>, l'uomo italiano medio
                ha un IMC di circa 25,2, al limite superiore del normopeso. Il <strong>CREA-INRAN</strong> (Centro di Ricerca
                Alimenti e Nutrizione) fornisce le linee guida nazionali per una sana alimentazione, mentre l'<strong>ADI
                (Associazione Italiana di Dietetica)</strong> stabilisce i protocolli di intervento nutrizionale.
              </p>
              <p>
                Le differenze regionali sono significative: un uomo di <strong>1,77 m</strong> in Campania ha in media un IMC
                più alto rispetto a un coetaneo in Trentino-Alto Adige. Il <strong>Ministero della Salute</strong> promuove
                campagne di prevenzione come "Guadagnare Salute" per contrastare sovrappeso e sedentarietà maschile.
                Per un uomo italiano di <strong>1,75 m</strong>, il peso ideale si colloca intorno ai <strong>67 kg</strong>,
                mentre per un uomo di <strong>1,80 m</strong> è circa <strong>71 kg</strong>.
              </p>
              <p>
                L'<strong>IMC per gli uomini oltre i 50 anni</strong> può tollerare valori leggermente superiori (fino a 27)
                senza rischi significativi, come indicato dalle linee guida ISS. L'importante è mantenere un'attività
                fisica regolare e seguire i principi della dieta mediterranea, patrimonio della tradizione italiana.
              </p>
            </div>
          </div>

          {/* Navigation to other Italian pages */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">Scopri anche</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/it/imc" className="flex items-center justify-center p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors text-center">
                <span className="font-semibold text-primary">Calcolatore IMC Generale</span>
              </a>
              <a href="/it/imc-donna" className="flex items-center justify-center p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors text-center">
                <span className="font-semibold text-pink-500">IMC per le Donne</span>
              </a>
              <a href="/it/imc-sportivo" className="flex items-center justify-center p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors text-center">
                <span className="font-semibold text-green-500">IMC per Sportivi</span>
              </a>
            </div>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 Calcolatore IMC per Uomini</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCUomo;
