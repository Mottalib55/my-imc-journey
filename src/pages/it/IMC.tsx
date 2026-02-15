import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Calculator, Activity, Target, BookOpen, Scale, TrendingUp, Heart, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";

const IMCIt = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(74);
  const [height, setHeight] = useState(174);

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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-green-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Activity className="w-4 h-4" />
            Simulatore in tempo reale
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Calcolatore IMC Gratuito Online</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scopri il tuo indice di massa corporea con dati contestualizzati alla realta italiana e alla dieta mediterranea
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary" />
              Inserisci le tue misure
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Peso</label>
                  <span className="text-2xl font-bold text-primary">{weight} kg</span>
                </div>
                <Slider
                  value={[weight]}
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
                  <label className="text-sm font-medium">Altezza</label>
                  <span className="text-2xl font-bold text-primary">{(height / 100).toFixed(2)} m</span>
                </div>
                <Slider
                  value={[height]}
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
          {/* Contextualized Italian intro */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">L'IMC in Italia: Un Quadro Unico in Europa</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'<strong>IMC (Indice di Massa Corporea)</strong>, noto anche come <strong>BMI (Body Mass Index)</strong>,
                e una misura che rapporta il peso all'altezza per stimare se una persona si trova in un intervallo
                di peso sano. In Italia, questo indicatore racconta una storia particolarmente interessante e
                per certi versi contraddittoria.
              </p>
              <p>
                Secondo i dati dell'<strong>Istituto Superiore di Sanita (ISS)</strong>, la prevalenza di obesita
                negli adulti italiani si attesta attorno al <strong>12%</strong>, uno dei tassi piu bassi d'Europa.
                Per confronto, il Regno Unito supera il 26%, la Germania il 22% e la media europea si aggira
                attorno al 16%. Questo primato italiano viene storicamente attribuito alla <strong>dieta
                mediterranea</strong>, allo stile di vita conviviale e alla cultura alimentare profondamente
                radicata nel tessuto sociale del Paese.
              </p>
              <p>
                Tuttavia, questa medaglia ha un rovescio preoccupante. L'indagine <strong>OKkio alla SALUTE</strong>,
                il sistema di sorveglianza nazionale coordinato dall'ISS, rivela che il <strong>29,8% dei bambini
                italiani tra i 6 e i 10 anni</strong> e in sovrappeso o obeso, posizionando l'Italia tra i Paesi
                europei con i tassi piu alti di obesita infantile. Esiste inoltre un marcato <strong>divario
                Nord-Sud</strong>: le regioni meridionali, ironicamente la culla della dieta mediterranea, registrano
                i tassi piu elevati di sovrappeso infantile, mentre le regioni del Nord e del Trentino-Alto Adige
                mostrano valori significativamente inferiori.
              </p>
              <p>
                Comprendere il proprio IMC nel contesto italiano significa dunque tenere conto di queste
                peculiarita nazionali, delle differenze regionali e dell'evoluzione delle abitudini alimentari
                rispetto alla tradizione mediterranea.
              </p>
            </div>
          </div>

          {/* Mediterranean Diet UNESCO */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-green-500/10">
                <Heart className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">La Dieta Mediterranea: Patrimonio UNESCO e Alleata dell'IMC</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Nel <strong>2010</strong>, l'UNESCO ha iscritto la <strong>dieta mediterranea</strong> nella lista
                del <strong>Patrimonio Culturale Immateriale dell'Umanita</strong>, riconoscendo non solo un modello
                alimentare ma un intero stile di vita che comprende convivialita, stagionalita degli alimenti,
                biodiversita e tradizioni culinarie tramandate di generazione in generazione. L'Italia, insieme a
                Spagna, Grecia e Marocco, fu tra i Paesi promotori di questa candidatura.
              </p>
              <p>
                La <strong>vera dieta mediterranea tradizionale</strong>, come descritta dallo scienziato americano
                Ancel Keys nel suo celebre <strong>Seven Countries Study</strong> condotto a Pioppi (Cilento) negli
                anni '50, era caratterizzata da un consumo abbondante di <strong>cereali integrali, legumi, verdure,
                frutta, olio extravergine d'oliva</strong> e pesce, con un consumo moderato di latticini e molto
                limitato di carne rossa. Questo modello garantiva naturalmente un <strong>apporto calorico equilibrato</strong>
                che favoriva il mantenimento di un IMC sano, senza bisogno di contare calorie.
              </p>
              <p>
                Le <strong>Linee Guida per una Sana Alimentazione</strong> del <strong>CREA (Consiglio per la
                Ricerca in Agricoltura e l'Analisi dell'Economia Agraria)</strong>, aggiornate nel 2018, confermano
                che la piramide alimentare italiana, ispirata alla tradizione mediterranea, resta il modello
                nutrizionale piu efficace per la prevenzione di obesita, malattie cardiovascolari, diabete di tipo 2
                e numerosi tumori. La piramide prevede alla base cereali (preferibilmente integrali), frutta e verdura,
                seguiti da olio extravergine d'oliva, legumi e frutta secca, poi pesce e carni bianche, e infine,
                al vertice, carni rosse, insaccati e dolci da consumare con parsimonia.
              </p>
              <p>
                Il problema e che la <strong>dieta italiana moderna</strong> si e progressivamente allontanata da
                questo modello. Studi dell'<strong>Osservatorio Epidemiologico Cardiovascolare dell'ISS</strong>
                mostrano un aumento del consumo di alimenti ultra-processati, bevande zuccherate, snack confezionati
                e pasti fuori casa, soprattutto tra le nuove generazioni. Il fast food e i cibi pronti hanno
                eroso le abitudini tradizionali, specialmente nelle aree urbane e nelle fasce socioeconomiche piu
                basse. Paradossalmente, proprio nel Mezzogiorno, dove la dieta mediterranea nacque, l'abbandono
                delle tradizioni alimentari e stato piu marcato.
              </p>
              <p>
                Uno studio pubblicato su <strong>Nutrients</strong> nel 2019 ha dimostrato che gli italiani che
                aderiscono fedelmente alla dieta mediterranea presentano un IMC medio inferiore di <strong>1,5-2
                punti</strong> rispetto a chi segue un'alimentazione di tipo occidentale. In particolare, l'elevato
                consumo di fibre, grassi monoinsaturi (dall'olio d'oliva) e antiossidanti favorisce il senso di
                sazieta, una migliore regolazione del metabolismo lipidico e una riduzione dell'infiammazione
                cronica, tutti fattori che contribuiscono al mantenimento di un peso corporeo sano.
              </p>
              <p>
                Riscoprire e praticare la <strong>vera dieta mediterranea</strong>, non la versione semplificata
                ridotta a "pasta e pizza", rappresenta quindi una delle strategie piu efficaci e scientificamente
                validate per mantenere un IMC nell'intervallo normopeso, migliorare la propria salute generale e
                ridurre il rischio di malattie croniche.
              </p>
            </div>
          </div>

          {/* IMC Categories */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Categorie IMC secondo l'OMS</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Categoria</th>
                    <th className="text-left py-3 px-4 font-bold">Intervallo IMC</th>
                    <th className="text-left py-3 px-4 font-bold">Rischio per la salute</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Sottopeso
                    </td>
                    <td className="py-3 px-4">&lt; 18,5</td>
                    <td className="py-3 px-4 text-info">Rischio di malnutrizione</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Normopeso
                    </td>
                    <td className="py-3 px-4">18,5 - 24,9</td>
                    <td className="py-3 px-4 text-success">Rischio basso</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Sovrappeso
                    </td>
                    <td className="py-3 px-4">25 - 29,9</td>
                    <td className="py-3 px-4 text-warning">Rischio aumentato</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesita Classe I
                    </td>
                    <td className="py-3 px-4">30 - 34,9</td>
                    <td className="py-3 px-4 text-destructive">Rischio elevato</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesita Classe II
                    </td>
                    <td className="py-3 px-4">35 - 39,9</td>
                    <td className="py-3 px-4 text-destructive">Rischio molto elevato</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesita Classe III
                    </td>
                    <td className="py-3 px-4">&ge; 40</td>
                    <td className="py-3 px-4 text-destructive">Rischio estremamente elevato</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Italian Paradox - Childhood Obesity */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-amber-500/10">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Il Paradosso Italiano: Adulti Magri, Bambini in Sovrappeso</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'Italia presenta uno dei piu sorprendenti paradossi sanitari d'Europa. Da un lato, il tasso di
                obesita tra gli adulti (circa <strong>12%</strong> secondo l'ISS) e tra i piu bassi del continente.
                Dall'altro, l'<strong>obesita infantile italiana</strong> raggiunge livelli allarmanti che la
                collocano tra i Paesi peggiori d'Europa, alla pari di Grecia, Cipro e Spagna.
              </p>
              <p>
                I dati dell'indagine <strong>OKkio alla SALUTE 2019</strong>, promossa dal Ministero della Salute
                e coordinata dall'ISS, rivelano che tra i bambini di 8-9 anni, il <strong>20,4% e in sovrappeso</strong>
                e il <strong>9,4% e obeso</strong>, per un totale di quasi il <strong>30% di bambini con eccesso
                ponderale</strong>. A questi si aggiunge un 2,4% classificato come gravemente obeso. Questi numeri,
                pur in leggero calo rispetto ai picchi del 2008-2010, restano molto preoccupanti.
              </p>
              <p>
                Il <strong>divario regionale</strong> e uno degli aspetti piu significativi di questo fenomeno.
                La <strong>Campania</strong> detiene il triste primato con oltre il <strong>35% di bambini in
                sovrappeso o obesi</strong>, seguita da Calabria, Sicilia, Molise e Puglia. All'opposto, il
                <strong> Trentino-Alto Adige</strong> registra tassi inferiori al <strong>15%</strong>, seguito da
                Valle d'Aosta, Sardegna e diverse regioni del Nord. Questa distribuzione riflette in modo quasi
                speculare le differenze socioeconomiche, il livello di istruzione delle famiglie e, paradossalmente,
                il grado di abbandono della tradizione alimentare mediterranea.
              </p>
              <p>
                Le cause di questa emergenza sono molteplici. L'indagine OKkio alla SALUTE evidenzia che il
                <strong>25% dei bambini</strong> non consuma quotidianamente frutta e verdura, il <strong>50%</strong>
                beve regolarmente bevande zuccherate, e solo il <strong>18%</strong> pratica attivita fisica strutturata
                almeno un'ora al giorno come raccomandato dall'OMS. La sedentarieta, amplificata dall'uso pervasivo
                di schermi, videogiochi e smartphone, rappresenta un fattore aggravante.
              </p>
              <p>
                Un elemento culturale italiano aggrava ulteriormente il problema: la percezione distorta del peso
                dei figli da parte dei genitori. Secondo i dati OKkio alla SALUTE, quasi il <strong>40% delle
                madri di bambini in sovrappeso</strong> considera il proprio figlio normopeso o addirittura
                sottopeso. Questa percezione, radicata nella cultura italiana che associa un bambino "paffutello"
                alla buona salute, ritarda la presa di coscienza e l'intervento.
              </p>
              <p>
                L'<strong>Associazione Italiana di Dietetica e Nutrizione Clinica (ADI)</strong> e la
                <strong> Societa Italiana di Pediatria (SIP)</strong> sottolineano che l'obesita infantile in
                Italia non e solo un problema estetico ma un'emergenza sanitaria, poiche un bambino obeso ha il
                <strong>75-80% di probabilita</strong> di diventare un adulto obeso, con tutti i rischi associati
                di diabete, ipertensione, malattie cardiovascolari e alcune forme tumorali. Programmi nazionali come
                <strong> "Guadagnare Salute"</strong> del Ministero della Salute mirano a invertire questa tendenza
                attraverso la promozione dell'attivita fisica e dell'educazione alimentare nelle scuole.
              </p>
            </div>
          </div>

          {/* How to calculate */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Come calcolare l'IMC</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>La <strong>formula dell'IMC</strong> e semplice e universale:</p>
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-primary">IMC = Peso (kg) / Altezza² (m)</p>
              </div>
              <p>
                Prendiamo come esempio un italiano medio: peso <strong>74 kg</strong> e altezza <strong>1,74 m</strong>
                (valori medi secondo i dati ISTAT):<br />
                IMC = 74 / (1,74 x 1,74) = 74 / 3,0276 = <strong>24,4</strong>
              </p>
              <p>
                Questo IMC di <strong>24,4</strong> si colloca nella fascia alta del <strong>normopeso</strong>,
                al limite del sovrappeso. E un valore che riflette la realta di molti italiani adulti: non obesi,
                ma con un margine ridotto prima di entrare nel sovrappeso. Il <strong>CREA</strong> raccomanda di
                mantenere il proprio IMC nell'intervallo 18,5-24,9 e, se ci si trova nella fascia alta, di adottare
                una dieta ispirata al modello mediterraneo tradizionale e praticare almeno 150 minuti di attivita
                fisica moderata a settimana.
              </p>
            </div>
          </div>

          {/* Links to other pages */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/it/imc-uomo" className="glass-card p-6 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Activity className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-bold">IMC Uomo</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Calcolo IMC specifico per uomini con dati sulla composizione corporea maschile italiana
              </p>
            </Link>

            <Link to="/it/imc-donna" className="glass-card p-6 hover:border-pink-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-pink-500/10">
                  <Activity className="w-5 h-5 text-pink-500" />
                </div>
                <h3 className="font-bold">IMC Donna</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Comprendere l'IMC femminile considerando fattori ormonali, gravidanza e menopausa
              </p>
            </Link>

            <Link to="/it/imc-sportivo" className="glass-card p-6 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-bold">IMC Sportivo</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Perche l'IMC non e affidabile per atleti e persone con elevata massa muscolare
              </p>
            </Link>
          </div>

          {/* SEO Content - Italian specific */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Calcolo IMC in Italia: Riferimenti e Risorse Ufficiali</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Il <strong>calcolatore IMC</strong> presente in questa pagina si basa sulla formula standard
                riconosciuta dall'<strong>Organizzazione Mondiale della Sanita (OMS)</strong> e adottata da tutte
                le principali istituzioni sanitarie italiane. L'<strong>Istituto Superiore di Sanita (ISS)</strong>,
                massima istituzione scientifica del Servizio Sanitario Nazionale, utilizza l'IMC come indicatore
                primario nei suoi studi epidemiologici sulla popolazione italiana, tra cui il sistema di
                sorveglianza <strong>PASSI</strong> per gli adulti e <strong>OKkio alla SALUTE</strong> per i
                bambini.
              </p>
              <p>
                Il <strong>CREA (Consiglio per la Ricerca in Agricoltura e l'Analisi dell'Economia Agraria)</strong>
                ha pubblicato le <strong>Linee Guida per una Sana Alimentazione Italiana</strong>, documento di
                riferimento che integra l'IMC con raccomandazioni nutrizionali calibrate sulle abitudini e sulle
                disponibilita alimentari italiane. Queste linee guida, aggiornate periodicamente, rappresentano lo
                strumento piu completo per tradurre un dato numerico come l'IMC in scelte alimentari concrete e
                culturalmente appropriate per il contesto italiano.
              </p>
              <p>
                L'<strong>ADI (Associazione Italiana di Dietetica e Nutrizione Clinica)</strong> raccomanda di
                non utilizzare l'IMC come unico parametro di valutazione del peso corporeo, ma di integrarlo con
                la misurazione della <strong>circonferenza vita</strong> (inferiore a 94 cm per gli uomini e
                80 cm per le donne), la valutazione della <strong>composizione corporea</strong> tramite
                bioimpedenziometria e l'analisi dei <strong>fattori di rischio cardiovascolare</strong> individuali.
                Il <strong>Ministero della Salute</strong> ha recepito queste indicazioni nei propri documenti di
                programmazione sanitaria.
              </p>
              <p>
                Per chi desidera approfondire, il <strong>Piano Nazionale della Prevenzione</strong> del Ministero
                della Salute dedica un capitolo specifico alla prevenzione dell'obesita e al mantenimento di un
                IMC sano nella popolazione italiana. Il documento e disponibile sul sito ufficiale del Ministero
                e costituisce la cornice strategica per tutti gli interventi di sanita pubblica legati al peso
                corporeo in Italia. Che tu voglia <strong>calcolare il tuo IMC</strong>, comprendere la tua
                <strong> categoria di peso</strong> o trovare <strong>consigli nutrizionali</strong> basati sulle
                evidenze scientifiche, le risorse italiane offrono un quadro completo e aggiornato.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 Calcolatore IMC</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCIt;
