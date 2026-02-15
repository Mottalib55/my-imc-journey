import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Dumbbell, AlertTriangle, Target, Scale, Activity, TrendingUp, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";
import { RelatedPages } from "@/components/RelatedPages";

const IMCSportivo = () => {
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

  // Calculate FFMI estimation
  const fatFreeMass = weight * 0.85;
  const ffmi = weight && height ? fatFreeMass / Math.pow(height / 100, 2) : null;
  const normalizedFfmi = ffmi ? ffmi + 6.1 * (1.8 - height / 100) : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6">
            <Dumbbell className="w-4 h-4" />
            IMC per Sportivi
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-orange-500">IMC Sportivo</span> : Limiti del BMI per gli Atleti Italiani
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Perch&eacute; l'IMC classifica Gianluigi Donnarumma come "sovrappeso" e la maggior parte dei rugbisti come "obesi".
            La medicina dello sport italiana &egrave; la pi&ugrave; avanzata al mondo.
          </p>
        </header>

        {/* Warning Banner */}
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-orange-500 mb-2">Attenzione: L'IMC non tiene conto della massa muscolare</h3>
              <p className="text-muted-foreground">
                L'IMC non distingue la <strong>massa muscolare</strong> dalla <strong>massa grassa</strong>.
                Un atleta di Serie A, un ciclista del Giro d'Italia o un rugbista della Nazionale possono avere
                un IMC da "sovrappeso" o "obesit&agrave;" pur essendo in condizioni fisiche eccellenti. La <strong>FMSI
                (Federazione Medico Sportiva Italiana)</strong> utilizza metodi ben pi&ugrave; precisi.
              </p>
            </div>
          </div>
        </div>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-orange-500" />
              Inserisci le tue misure
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Peso</label>
                  <span className="text-2xl font-bold text-orange-500">{weight} kg</span>
                </div>
                <Slider
                  value={[weight]}
                  onValueChange={handleWeightChange}
                  min={50}
                  max={200}
                  step={1}
                  className="py-4"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Altezza</label>
                  <span className="text-2xl font-bold text-orange-500">{height} cm</span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={handleHeightChange}
                  min={150}
                  max={220}
                  step={1}
                  className="py-4"
                />
              </div>
            </div>
          </div>

          <BMIGauge bmi={bmi} />
        </div>

        {/* FFMI Estimation */}
        {bmi && (
          <div className="glass-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-xl font-display font-bold">Stima FFMI (Indice di Massa Magra)</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              L'FFMI &egrave; un indicatore migliore per gli sportivi perch&eacute; tiene conto della massa magra.
              &Egrave; lo strumento raccomandato dalla <strong>FMSI</strong> e dal <strong>CONI</strong> per valutare
              la composizione corporea degli atleti italiani.
            </p>
            <div className="bg-muted/30 rounded-xl p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">FFMI stimato (con 15% di massa grassa)</p>
              <p className="text-3xl font-bold text-orange-500">{ffmi?.toFixed(1)}</p>
              <p className="text-xs text-muted-foreground mt-2">
                Naturale: 18-25 | Probabile doping: &gt;25
              </p>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="space-y-8">
          {/* Why BMI fails for athletes */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Scale className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Perch&eacute; l'IMC fallisce per gli sportivi italiani</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'<strong>IMC per sportivi</strong> &egrave; problematico perch&eacute; la formula non fa alcuna distinzione tra
                il peso dei muscoli e quello del grasso. Tuttavia, il <strong>muscolo &egrave; pi&ugrave; denso del grasso</strong>:
                a parit&agrave; di volume, pesa di pi&ugrave;.
              </p>
              <p>
                L'Italia lo sa bene: con la <strong>legge del 1982 sulla tutela sanitaria delle attivit&agrave; sportive</strong>,
                il nostro Paese &egrave; stato il primo al mondo a rendere obbligatoria la visita medico-sportiva per tutti
                gli atleti agonisti. Questa visita comprende <strong>ECG, spirometria e analisi della composizione corporea</strong>,
                strumenti infinitamente pi&ugrave; precisi del semplice IMC.
              </p>
            </div>
          </div>

          {/* Famous Italian Athletes */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Dumbbell className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Atleti italiani famosi e il loro IMC</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Gianluigi Donnarumma</h4>
                <p className="text-xs text-muted-foreground mb-3">Portiere, Paris Saint-Germain / Nazionale</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Altezza: 1,96 m</li>
                  <li>Peso: 90 kg</li>
                  <li>IMC: ~23,4 ("normale")</li>
                  <li>Ma con un fisico imponente, il suo IMC &egrave; basso grazie alla grande altezza</li>
                  <li>Uno dei migliori portieri al mondo</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Jannik Sinner</h4>
                <p className="text-xs text-muted-foreground mb-3">Tennis, N.1 mondiale</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Altezza: 1,88 m</li>
                  <li>Peso: 76 kg</li>
                  <li>IMC: ~21,5 ("normale")</li>
                  <li>Atleta di resistenza e potenza, muscolatura asciutta e funzionale</li>
                  <li>L'IMC qui &egrave; relativamente accurato</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Gregorio Paltrinieri</h4>
                <p className="text-xs text-muted-foreground mb-3">Nuoto, Campione Olimpico</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Altezza: 1,90 m</li>
                  <li>Peso: 77 kg</li>
                  <li>IMC: ~21,3 ("normale")</li>
                  <li>Massa grassa bassissima, muscoli potenti per il fondo</li>
                  <li>L'IMC non riflette le sue eccezionali capacit&agrave; cardiovascolari</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sport-specific BMI ranges */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC tipico per sport italiani</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Calcio (Serie A)</h4>
                <p className="text-xs text-muted-foreground mb-2">Lo sport pi&ugrave; popolare d'Italia</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>IMC tipico: 22-25</li>
                  <li>Massa grassa: 8-12%</li>
                  <li>Equilibrio tra agilit&agrave;, resistenza e potenza</li>
                  <li>I difensori tendono verso la fascia alta, gli attaccanti verso la bassa</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Ciclismo (Giro d'Italia)</h4>
                <p className="text-xs text-muted-foreground mb-2">Rapporto potenza/peso fondamentale</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>IMC tipico: 19-22</li>
                  <li>Massa grassa: 5-8%</li>
                  <li>Gli scalatori sono i pi&ugrave; leggeri (IMC 19-20)</li>
                  <li>I velocisti hanno pi&ugrave; massa muscolare (IMC 21-23)</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Rugby (Nazionale, Top10)</h4>
                <p className="text-xs text-muted-foreground mb-2">L'IMC li classifica come "obesi"</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>IMC tipico: 28-33</li>
                  <li>Massa grassa: 14-20%</li>
                  <li>Piloni e seconde linee superano spesso un IMC di 30</li>
                  <li>Ma la composizione corporea &egrave; prevalentemente muscolare</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Pallavolo / Pallanuoto</h4>
                <p className="text-xs text-muted-foreground mb-2">Discipline in cui l'Italia eccelle a livello mondiale</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>IMC tipico: 23-27</li>
                  <li>Massa grassa: 10-15%</li>
                  <li>Atleti alti e muscolosi, struttura imponente</li>
                  <li>L'IMC tende a sovrastimare il grasso corporeo</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Italian Sports Medicine Section */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Globe className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">La medicina dello sport italiana: un modello mondiale</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'Italia possiede il <strong>sistema di medicina dello sport pi&ugrave; antico e completo al mondo</strong>.
                La <strong>legge del 26 ottobre 1971 n. 1099</strong>, poi aggiornata con il <strong>D.M. 18 febbraio 1982</strong>,
                ha reso l'Italia l'unico Paese al mondo dove la <strong>visita medico-sportiva &egrave; obbligatoria</strong>
                per chiunque pratichi attivit&agrave; sportiva agonistica. Nessun'altra nazione ha un sistema cos&igrave; capillare e rigoroso.
              </p>
              <p>
                Il <strong>certificato medico sportivo agonistico</strong>, rilasciato esclusivamente da medici specialisti in
                medicina dello sport, comprende un esame clinico completo: <strong>ECG a riposo e sotto sforzo</strong>,
                <strong> spirometria</strong>, <strong>esame delle urine</strong>, <strong>analisi della composizione corporea</strong>
                e valutazione antropometrica. Questo protocollo va ben oltre il semplice calcolo dell'IMC e permette di
                identificare patologie cardiache silenti, rischi metabolici e squilibri nella composizione corporea.
              </p>
              <p>
                La <strong>FMSI (Federazione Medico Sportiva Italiana)</strong>, fondata nel 1929, &egrave; il punto di riferimento
                mondiale per la medicina dello sport. I suoi protocolli sono adottati come <strong>gold standard</strong> da
                federazioni sportive internazionali e comitati olimpici di tutto il mondo. Gli <strong>Istituti di Medicina
                dello Sport</strong> sono presenti in ogni regione italiana e offrono valutazioni della composizione corporea
                che rendono l'IMC completamente superfluo per gli atleti.
              </p>
              <p>
                L'<strong>Universit&agrave; degli Studi di Roma "Foro Italico"</strong> (ex IUSM) &egrave; una delle pi&ugrave; prestigiose
                istituzioni al mondo per la formazione in scienze motorie e medicina dello sport. Il <strong>CONI
                (Comitato Olimpico Nazionale Italiano)</strong>, insieme alla FMSI, stabilisce gli standard di composizione
                corporea per ogni disciplina olimpica, standard che non si basano sull'IMC ma su
                <strong> plicometria, bioimpedenziometria e DEXA scan</strong>.
              </p>
            </div>
          </div>

          {/* Alternatives Table */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Target className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Alternative all'IMC: protocolli FMSI e CONI</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Metodo</th>
                    <th className="text-left py-3 px-4 font-bold">Vantaggi</th>
                    <th className="text-left py-3 px-4 font-bold">Standard FMSI/CONI</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">FFMI</td>
                    <td className="py-3 px-4">Considera solo la massa magra, ideale per confronti tra atleti</td>
                    <td className="py-3 px-4">18-25 naturale</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">Plicometria</td>
                    <td className="py-3 px-4">Misura diretta dello spessore del grasso sottocutaneo (7 pliche)</td>
                    <td className="py-3 px-4">Uomini: 6-15% | Donne: 14-25% (atleti)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">Bioimpedenziometria (BIA)</td>
                    <td className="py-3 px-4">Analisi della composizione corporea tramite impedenza bioelettrica</td>
                    <td className="py-3 px-4">Presente nella visita medico-sportiva</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">DEXA Scan</td>
                    <td className="py-3 px-4">Composizione corporea precisa, massa ossea, distribuzione del grasso</td>
                    <td className="py-3 px-4">Gold standard CONI per atleti olimpici</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">Circonferenza vita</td>
                    <td className="py-3 px-4">Indicatore semplice del grasso viscerale</td>
                    <td className="py-3 px-4">Uomini: &lt;94 cm | Donne: &lt;80 cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FFMI Table */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Capire l'FFMI</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Intervallo FFMI</th>
                    <th className="text-left py-3 px-4 font-bold">Classificazione</th>
                    <th className="text-left py-3 px-4 font-bold">Descrizione</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">16-17</td>
                    <td className="py-3 px-4">Sotto la media</td>
                    <td className="py-3 px-4">Scarso sviluppo muscolare</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">18-19</td>
                    <td className="py-3 px-4">Nella media</td>
                    <td className="py-3 px-4">Uomo normale non allenato</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">20-21</td>
                    <td className="py-3 px-4">Sopra la media</td>
                    <td className="py-3 px-4">Definizione muscolare visibile</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 font-mono font-bold text-success">22-23</td>
                    <td className="py-3 px-4 text-success">Eccellente</td>
                    <td className="py-3 px-4">Sportivo dedicato, ottimo fisico</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">24-25</td>
                    <td className="py-3 px-4">Superiore</td>
                    <td className="py-3 px-4">Limite genetico naturale per la maggior parte</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono">&gt;25</td>
                    <td className="py-3 px-4 text-warning">Sospetto</td>
                    <td className="py-3 px-4">Raro naturalmente, possibile uso di sostanze</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Nota: Un FFMI superiore a 25 &egrave; raggiungibile naturalmente per alcuni individui geneticamente dotati, ma &egrave; raro.
            </p>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC e sport in Italia: tutto quello che devi sapere</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Il <strong>calcolo dell'IMC per sportivi</strong> in Italia &egrave; una pratica ormai superata dalla
                <strong> medicina dello sport italiana</strong>, la pi&ugrave; avanzata al mondo. La <strong>FMSI</strong>
                (Federazione Medico Sportiva Italiana) raccomanda da decenni metodi pi&ugrave; precisi per valutare
                la composizione corporea degli atleti, dalla <strong>Serie A</strong> al ciclismo professionistico.
              </p>
              <p>
                La <strong>visita medico-sportiva</strong>, obbligatoria in Italia per tutti gli atleti agonisti,
                include test che vanno ben oltre l'IMC: ECG sotto sforzo, spirometria, analisi della composizione
                corporea. Questo sistema unico al mondo, regolato dal <strong>D.M. 18 febbraio 1982</strong>,
                ha salvato migliaia di vite identificando cardiopatie silenti e ha reso il semplice
                <strong> IMC sportivo</strong> uno strumento inadeguato per la valutazione dell'atleta italiano.
              </p>
              <p>
                Per gli <strong>sportivi italiani</strong>, che si tratti di calciatori di <strong>Serie A</strong>,
                ciclisti del <strong>Giro d'Italia</strong>, rugbisti della <strong>Nazionale</strong> o pallanuotisti,
                l'approccio corretto &egrave; quello del <strong>CONI</strong>: utilizzare FFMI, plicometria,
                bioimpedenziometria o DEXA scan. L'<strong>IMC muscolare</strong> risulter&agrave; sempre pi&ugrave; alto
                di quanto il reale stato di salute suggerisca, ed &egrave; per questo che la FMSI non lo utilizza
                come indicatore primario nella valutazione degli atleti.
              </p>
              <p>
                <strong>L'IMC &egrave; accurato per gli sportivi italiani</strong>? No. Se pratichi sport a livello agonistico,
                il tuo <strong>certificato medico sportivo</strong> contiene gi&agrave; informazioni infinitamente pi&ugrave; utili.
                Se ti alleni a livello amatoriale, chiedi al tuo medico dello sport una <strong>valutazione della composizione
                corporea</strong> durante la visita medico-sportiva: &egrave; un tuo diritto e un'eccellenza del sistema
                sanitario italiano.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">Scopri anche</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/it/imc" className="block p-4 rounded-xl border border-border hover:border-orange-500/50 transition-colors text-center">
                <p className="font-bold">Calcolo IMC</p>
                <p className="text-sm text-muted-foreground">Calcolatore IMC generale</p>
              </Link>
              <a href="/it/imc-uomo" className="block p-4 rounded-xl border border-border hover:border-orange-500/50 transition-colors text-center">
                <p className="font-bold">IMC Uomo</p>
                <p className="text-sm text-muted-foreground">Calcolo IMC per uomini</p>
              </a>
              <a href="/it/imc-donna" className="block p-4 rounded-xl border border-border hover:border-orange-500/50 transition-colors text-center">
                <p className="font-bold">IMC Donna</p>
                <p className="text-sm text-muted-foreground">Calcolo IMC per donne</p>
              </a>
            </div>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 IMC per Sportivi</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCSportivo;
