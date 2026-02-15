import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Users, Heart, Target, Baby, Scale, Activity, AlertTriangle, CheckCircle2, Sparkles, Globe } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { RelatedPages } from "@/components/RelatedPages";

const IMCDonna = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(62);
  const [height, setHeight] = useState(163);

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

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-pink-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-500 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            IMC per le Donne
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-pink-500">IMC Donna</span> : Calcolatore IMC Femminile e Peso
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            In Italia, il 27% delle donne è in sovrappeso e l'11% è obesa (ISTAT/ISS). Le italiane hanno uno dei tassi più bassi d'Europa grazie alla dieta mediterranea. Calcolatore con riferimenti ISS, CREA e Ministero della Salute.
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-pink-500" />
              Inserisci le tue misure
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Peso</label>
                  <span className="text-2xl font-bold text-pink-500">{weight} kg</span>
                </div>
                <Slider
                  value={[weight]}
                  onValueChange={handleWeightChange}
                  min={35}
                  max={150}
                  step={1}
                  className="py-4"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Altezza</label>
                  <span className="text-2xl font-bold text-pink-500">{height} cm</span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={handleHeightChange}
                  min={130}
                  max={200}
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
          {/* Understanding IMC for Women */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Users className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Comprendere l'IMC nella donna italiana</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Secondo i dati <strong>ISTAT</strong>, il <strong>27% delle donne italiane è in sovrappeso</strong> e l'<strong>11% è obesa</strong>,
                tra i tassi più bassi dell'Unione Europea. La donna italiana media misura <strong>1,63 m</strong> e pesa circa <strong>62 kg</strong>,
                con un IMC nella fascia del normopeso.
              </p>
              <p>
                Esiste un marcato <strong>divario Nord-Sud</strong>: la Campania registra un tasso di obesità femminile del <strong>15,8%</strong>,
                mentre la provincia di Bolzano si ferma al <strong>5,1%</strong>. Le donne italiane del Sud hanno BMI più elevato ma aderiscono
                di più alla dieta mediterranea tradizionale — un paradosso che gli epidemiologi dell'<strong>ISS</strong> continuano a studiare.
              </p>
              <p>
                La <strong>circonferenza vita ideale</strong> per una donna non dovrebbe superare <strong>80 cm</strong>
                (rischio moderato) o <strong>88 cm</strong> (rischio elevato). Questo indicatore è spesso più pertinente
                del solo IMC poiché misura il grasso addominale, più pericoloso per la salute.
              </p>
            </div>
          </div>

          {/* BMI Table for Women */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Scale className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tabella IMC Donna</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Categoria</th>
                    <th className="text-left py-3 px-4 font-semibold">IMC</th>
                    <th className="text-left py-3 px-4 font-semibold">Esempio (1,63 m, media IT)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Sottopeso
                    </td>
                    <td className="py-3 px-4">&lt; 18,5</td>
                    <td className="py-3 px-4">&lt; 49 kg</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Normopeso
                    </td>
                    <td className="py-3 px-4">18,5 - 24,9</td>
                    <td className="py-3 px-4">49 - 66 kg</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Sovrappeso
                    </td>
                    <td className="py-3 px-4">25 - 29,9</td>
                    <td className="py-3 px-4">66 - 80 kg</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesità
                    </td>
                    <td className="py-3 px-4">≥ 30</td>
                    <td className="py-3 px-4">&gt; 80 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Ideal weight by height */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Target className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Peso ideale donna per altezza</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "1,55 m", min: 44, max: 60, ideal: 53 },
                { height: "1,58 m", min: 46, max: 62, ideal: 55 },
                { height: "1,61 m", min: 48, max: 65, ideal: 57 },
                { height: "1,63 m (media IT)", min: 49, max: 66, ideal: 58 },
                { height: "1,67 m", min: 52, max: 69, ideal: 61 },
                { height: "1,71 m", min: 54, max: 73, ideal: 64 },
              ].map((item) => (
                <div key={item.height} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className="font-semibold text-pink-500">{item.height}</span>
                  <span className="text-muted-foreground">
                    {item.min} - {item.max} kg <span className="text-success">(ideale: {item.ideal} kg)</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Women-specific factors */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-purple-500/10">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-display font-bold">Ciclo ormonale e peso</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Il ginecologo italiano: punto di riferimento per la salute ormonale e il peso.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Il peso può variare da <strong>1 a 3 kg</strong> a seconda del ciclo mestruale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>La <strong>ritenzione idrica</strong> è normale prima delle mestruazioni</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Pillola anticoncezionale e peso: i miti e la realtà secondo la <strong>SIGO</strong> (Società Italiana di Ginecologia)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>La <strong>menopausa</strong> modifica la distribuzione del grasso corporeo</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-pink-500/10">
                  <Baby className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-display font-bold">Gravidanza e IMC in Italia</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>La <strong>cartella ostetrica italiana</strong> monitora il peso ad ogni visita</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span><strong>SSN</strong>: tutte le visite prenatali e i controlli del peso sono gratuiti</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Aumento di peso raccomandato: <strong>11-16 kg</strong> (IMC normale)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Diabete gestazionale</strong>: 8-10% delle gravidanze in Italia</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mediterranean Diet for Italian Women */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">La Dieta Mediterranea per le Donne Italiane</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                La <strong>dieta mediterranea</strong>, patrimonio <strong>UNESCO</strong> dal 2010, è uno dei principali fattori
                che spiegano i bassi tassi di obesità femminile in Italia. Secondo il <strong>CREA</strong> (Centro di Ricerca Alimenti
                e Nutrizione), l'aderenza a questo modello alimentare è associata a numerosi benefici per la salute della donna.
              </p>
              <p>
                Lo studio <strong>EPIC-Italy</strong> ha dimostrato che le donne che seguono la dieta mediterranea hanno un
                <strong> rischio ridotto di tumore al seno</strong>. L'alimentazione ricca di antiossidanti, fibre e grassi
                insaturi contribuisce anche alla <strong>riduzione dei sintomi della menopausa</strong> e alla prevenzione
                dell'osteoporosi.
              </p>
              <p>
                <strong>Olio d'oliva, pesce, legumi e cereali integrali</strong>: alleati della salute femminile. Le linee guida
                del <strong>Ministero della Salute</strong> raccomandano almeno 5 porzioni di frutta e verdura al giorno e il consumo
                regolare di pesce azzurro per le donne di tutte le età.
              </p>
            </div>
          </div>

          {/* SSN and Women's Health */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Globe className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Il SSN e la Salute Femminile</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded-xl">
                <h4 className="font-semibold text-pink-500 mb-2">Screening mammografico gratuito</h4>
                <p className="text-sm text-muted-foreground">
                  Il <strong>SSN</strong> offre mammografia gratuita alle donne tra i <strong>45 e i 74 anni</strong>,
                  con invito attivo da parte delle ASL regionali.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-xl">
                <h4 className="font-semibold text-pink-500 mb-2">Screening cervicale</h4>
                <p className="text-sm text-muted-foreground">
                  Pap test e HPV test gratuiti per la prevenzione del <strong>tumore della cervice uterina</strong>,
                  secondo le linee guida del Ministero della Salute.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-xl">
                <h4 className="font-semibold text-pink-500 mb-2">Consulenza nutrizionale ASL</h4>
                <p className="text-sm text-muted-foreground">
                  Le <strong>ASL</strong> offrono consulenze nutrizionali e percorsi personalizzati per la gestione del peso,
                  con dietisti e nutrizionisti del servizio pubblico.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-xl">
                <h4 className="font-semibold text-pink-500 mb-2">Monitoraggio IMC in gravidanza</h4>
                <p className="text-sm text-muted-foreground">
                  Il monitoraggio del peso e dell'IMC è parte integrante del <strong>percorso nascita</strong> del SSN,
                  con controlli regolari gratuiti durante tutta la gestazione.
                </p>
              </div>
            </div>
          </div>

          {/* Menopause */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC e menopausa</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Durante la <strong>menopausa</strong>, i cambiamenti ormonali favoriscono l'aumento di peso, soprattutto
                a livello addominale. Il metabolismo rallenta e la massa muscolare diminuisce naturalmente.
                È quindi normale prendere qualche chilo dopo i 50 anni.
              </p>
              <p>
                Per mantenere un <strong>IMC sano dopo i 50 anni</strong> o un <strong>IMC dopo i 60 anni</strong> nella norma,
                privilegiate un'alimentazione ricca di <strong>proteine</strong> e <strong>calcio</strong>,
                e mantenete un'attività fisica regolare che includa il <strong>rafforzamento muscolare</strong>.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Activity className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tutto sull'IMC femminile in Italia</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Il <strong>calcolatore IMC per donne</strong> è uno strumento essenziale per valutare la vostra <strong>composizione corporea femminile</strong>.
                Che cerchiate il vostro <strong>IMC ideale per le donne</strong> o vogliate verificare il vostro <strong>peso forma donna</strong>,
                il nostro <strong>calcolatore IMC femminile</strong> vi offre risposte immediate e personalizzate secondo i parametri dell'<strong>ISS</strong>
                e del <strong>CREA</strong>.
              </p>
              <p>
                L'<strong>IMC ideale per le donne</strong> si situa tra 19 e 24. Un <strong>IMC normale per le donne</strong>
                corrisponde a un peso che varia in base all'altezza. Per una donna italiana media di <strong>1,63 m</strong>,
                il <strong>peso ideale</strong> è di circa 58 kg secondo le tabelle dell'<strong>ISTAT</strong>.
              </p>
              <p>
                Il <strong>calcolo del peso ideale donna</strong> tiene conto di diversi fattori. Le donne con una corporatura
                <strong> esile</strong> avranno un IMC naturalmente più basso, mentre le morfologie più <strong>atletiche</strong>
                possono avere un IMC leggermente più elevato. L'<strong>IMC donna sportiva</strong> può essere più alto a causa
                della massa muscolare. La <strong>SIGO</strong> raccomanda controlli regolari con il ginecologo.
              </p>
              <p>
                Per le donne oltre i <strong>40 anni</strong>, l'<strong>IMC donna 40 anni</strong> rimane lo stesso,
                ma il corpo cambia. L'<strong>IMC donna 50 anni</strong> e l'<strong>IMC donna 60 anni</strong> possono
                tollerare qualche chilo in più, l'importante è restare attive e alimentarsi bene seguendo la <strong>dieta
                mediterranea</strong>. Il <strong>Ministero della Salute</strong> offre risorse gratuite per la prevenzione
                e il benessere femminile a tutte le età.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">Scopri anche</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <a href="/it/imc" className="flex items-center justify-center gap-2 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
                <Scale className="w-5 h-5 text-pink-500" />
                <span className="font-medium">Calcolatore IMC</span>
              </a>
              <a href="/it/imc-uomo" className="flex items-center justify-center gap-2 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
                <Users className="w-5 h-5 text-pink-500" />
                <span className="font-medium">IMC Uomo</span>
              </a>
              <a href="/it/imc-sportivo" className="flex items-center justify-center gap-2 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
                <Activity className="w-5 h-5 text-pink-500" />
                <span className="font-medium">IMC Sportivo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}

        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 Calcolatore IMC per Donne</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCDonna;
