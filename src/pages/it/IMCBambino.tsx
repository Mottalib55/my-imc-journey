import { Header } from "@/components/Header";
import { Baby, AlertTriangle, TrendingUp, BookOpen, Stethoscope, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

const IMCBambino = () => {
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
            IMC per Bambini e Adolescenti in Italia
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-cyan-500">IMC Bambini e Adolescenti</span> : Calcolatore Pediatrico Italiano
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            L'Italia ha i tassi piu alti di obesita infantile in Europa occidentale. OKkio alla SALUTE (ISS): 20,4% dei bambini in sovrappeso, 9,4% obesi. Il divario Nord-Sud e significativo.
          </p>
        </header>

        {/* Medical Warning */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Stethoscope className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-destructive mb-2">Consultazione medica raccomandata</h3>
              <p className="text-muted-foreground">
                L'IMC nei bambini richiede un'<strong>interpretazione medica</strong>.
                Rivolgetevi al vostro <strong>Pediatra di Libera Scelta (PLS)</strong>, la figura dedicata al bambino nel sistema sanitario italiano, per un monitoraggio adeguato attraverso i <strong>bilanci di salute</strong>.
                Le informazioni riportate di seguito sono puramente informative e non sostituiscono il parere medico.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Childhood obesity in Italy: the Mediterranean paradox */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Globe className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Obesita infantile in Italia: il paradosso mediterraneo</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'Italia, patria della <strong>dieta mediterranea</strong> patrimonio UNESCO, detiene paradossalmente uno dei tassi piu elevati di obesita infantile in Europa occidentale. I dati del sistema di sorveglianza <strong>OKkio alla SALUTE</strong>, coordinato dall'<strong>Istituto Superiore di Sanita (ISS)</strong>, fotografano una situazione preoccupante con marcate differenze regionali.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-warning mb-2">20,4%</p>
                <p className="text-sm text-muted-foreground font-medium">Bambini in sovrappeso</p>
                <p className="text-xs text-muted-foreground mt-1">Fonte: OKkio alla SALUTE, ISS</p>
              </div>
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-destructive mb-2">9,4%</p>
                <p className="text-sm text-muted-foreground font-medium">Bambini obesi</p>
                <p className="text-xs text-muted-foreground mt-1">Prevalenza a livello nazionale</p>
              </div>
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-destructive mb-2">35%+</p>
                <p className="text-sm text-muted-foreground font-medium">Sovrappeso in Campania</p>
                <p className="text-xs text-muted-foreground mt-1">Tasso piu alto in Europa</p>
              </div>
            </div>
          </div>

          {/* Growth Curves */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <TrendingUp className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Curve di crescita in Italia</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                In Italia si utilizzano diversi sistemi di riferimento per la valutazione della crescita. Le principali sono le <strong>curve OMS (WHO)</strong>, raccomandate a livello internazionale, e le <strong>curve IOTF</strong> (International Obesity Task Force) per le comparazioni epidemiologiche. A livello nazionale, le <strong>carte di crescita italiane di Cacciari et al.</strong> (2006) offrono riferimenti specifici per la popolazione italiana.
              </p>
              <p>
                Il <strong>Pediatra di Libera Scelta (PLS)</strong>, figura unica del sistema sanitario italiano, e il riferimento principale per il monitoraggio della crescita. Ogni bambino da 0 a 14 anni ha un PLS assegnato dalla ASL, che effettua i <strong>bilanci di salute</strong>: visite programmate per controllare crescita, sviluppo e alimentazione a intervalli regolari.
              </p>

              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-4">Come si leggono i percentili?</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong className="text-info">Sotto il 3° percentile:</strong> Zona di sottopeso - necessaria valutazione PLS</p>
                    <p><strong className="text-success">3°-85° percentile:</strong> Zona normopeso</p>
                    <p><strong className="text-warning">85°-97° percentile:</strong> Sovrappeso (cut-off IOTF)</p>
                    <p><strong className="text-destructive">Sopra il 97° percentile:</strong> Obesita - intervento necessario</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      Le curve di Cacciari et al. sono state sviluppate su un campione di bambini italiani e tengono conto delle specificita antropometriche della popolazione. Il PLS le utilizza nei bilanci di salute insieme ai criteri OMS e IOTF.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Difference with adults */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <AlertTriangle className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Differenza tra IMC adulto e bambino</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                A differenza degli adulti, l'<strong>IMC del bambino</strong> non si interpreta con soglie fisse. Le linee guida della <strong>Societa Italiana di Pediatria (SIP)</strong> e della <strong>Societa Italiana di Nutrizione Umana (SINU)</strong> sottolineano che nei bambini e adolescenti il corpo e in continua evoluzione: l'IMC varia fisiologicamente in base a eta, sesso e stadio puberale.
              </p>
              <p>
                La SIP raccomanda di utilizzare le <strong>curve di corpulenza per percentili</strong> e di monitorare la <strong>traiettoria nel tempo</strong> piuttosto che un singolo valore. I <strong>LARN</strong> (Livelli di Assunzione di Riferimento di Nutrienti ed Energia), curati dalla SINU, forniscono i parametri nutrizionali di riferimento per ogni fascia di eta pediatrica.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                <h4 className="font-bold text-destructive mb-2">IMC Adulto (soglie OMS)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Soglie fisse universali</li>
                  <li>• &lt;18,5 = sottopeso</li>
                  <li>• 18,5-25 = normopeso</li>
                  <li>• 25-30 = sovrappeso</li>
                  <li>• &gt;30 = obesita</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">IMC Bambino (linee guida SIP)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Curve dei percentili (Cacciari, OMS, IOTF)</li>
                  <li>• Varia in base a eta e stadio puberale</li>
                  <li>• Diverso tra maschi e femmine</li>
                  <li>• Traiettoria nel tempo piu importante del valore singolo</li>
                  <li>• Monitoraggio tramite bilanci di salute del PLS</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Age groups - Italian context */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Baby className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC per fasce d'eta: il sistema italiano</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Neonato / Lattante (0-2 anni)</h4>
                <p className="text-sm text-muted-foreground">
                  L'IMC generalmente non viene calcolato. Si utilizzano curve peso/lunghezza e perimetro cranico. I <strong>bilanci di salute</strong> prevedono <strong>8 visite nel primo anno di vita</strong>, gestiti dal PLS con il supporto dei servizi delle <strong>ASL</strong> (consultori familiari, centri vaccinali). Il libretto pediatrico registra ogni misurazione.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Bambino (2-14 anni)</h4>
                <p className="text-sm text-muted-foreground">
                  IMC interpretato con le curve di corpulenza. I <strong>bilanci di salute proseguono fino ai 14 anni</strong> con cadenze programmate. Il "rimbalzo adiposo" verso i 6 anni e un momento critico. La <strong>mensa scolastica</strong>, regolata dai comuni, offre pasti equilibrati supervisionati dalle ASL secondo le linee guida SINU.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Adolescente (14-18 anni)</h4>
                <p className="text-sm text-muted-foreground">
                  A 14 anni avviene il <strong>passaggio dal PLS al Medico di Medicina Generale (MMG)</strong>: una transizione unica del sistema italiano. La puberta comporta variazioni importanti dell'IMC. Le curve specifiche per sesso diventano essenziali. La SIP raccomanda attenzione ai disturbi del comportamento alimentare.
                </p>
              </div>
            </div>
          </div>

          {/* North-South divide */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Users className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Il divario Nord-Sud: una questione italiana</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'obesita infantile in Italia presenta un <strong>gradiente geografico marcato</strong> che rispecchia le disuguaglianze socioeconomiche del Paese. I dati ISTAT e OKkio alla SALUTE evidenziano differenze drammatiche tra le regioni.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                <h4 className="font-bold text-destructive mb-3">Sud e Isole: i tassi piu alti d'Europa</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>Campania:</strong> oltre il 35% dei bambini in sovrappeso o obesi, tra i tassi piu alti in Europa</li>
                  <li>• <strong>Calabria:</strong> circa il 33% in eccesso ponderale</li>
                  <li>• <strong>Sicilia:</strong> circa il 30% con problemi di peso</li>
                  <li>• Minore accesso a impianti sportivi e spazi verdi</li>
                  <li>• Paradosso: la culla della dieta mediterranea ha i bambini piu in sovrappeso</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-3">Nord: tra i migliori in Europa</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>Trentino-Alto Adige:</strong> circa 15% in sovrappeso, tra i migliori in Europa</li>
                  <li>• <strong>Valle d'Aosta:</strong> tassi simili ai paesi scandinavi</li>
                  <li>• Maggiore pratica sportiva e attivita all'aperto</li>
                  <li>• Reddito familiare e livello di istruzione piu elevati</li>
                  <li>• Migliore accesso a servizi sportivi e sanitari</li>
                </ul>
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-6 mt-6">
              <h4 className="font-bold mb-3">Fattori correlati secondo i dati ISTAT</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <p>• <strong>Reddito familiare:</strong> forte correlazione inversa con l'obesita infantile</p>
                  <p>• <strong>Titolo di studio dei genitori:</strong> i figli di genitori laureati hanno rischio dimezzato</p>
                </div>
                <div>
                  <p>• <strong>Accesso allo sport:</strong> nel Sud, il 50% dei bambini non pratica sport regolarmente</p>
                  <p>• <strong>Sedentarieta:</strong> tempo davanti agli schermi superiore alla media nelle regioni meridionali</p>
                </div>
              </div>
            </div>
          </div>

          {/* When to consult */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Stethoscope className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Quando consultare: il sistema italiano</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5">
                <h4 className="font-bold text-warning mb-3">Segnali d'allarme (linee guida SIP)</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Cambiamento brusco di corridoio sulla curva di crescita</li>
                  <li>• IMC sopra il 97° percentile (obesita) o sotto il 3° (sottopeso)</li>
                  <li>• Rimbalzo adiposo precoce (prima dei 6 anni)</li>
                  <li>• Rapido aumento ponderale in breve periodo</li>
                  <li>• Preoccupazione eccessiva del bambino per il proprio peso</li>
                  <li>• Rifiuto del cibo o abbuffate ripetute</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-3">Risorse del sistema sanitario italiano</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>Pediatra di Libera Scelta (PLS):</strong> dedicato al bambino 0-14 anni, sistema unico in Europa</li>
                  <li>• <strong>Bilanci di salute:</strong> visite programmate con misurazione e valutazione dello sviluppo</li>
                  <li>• <strong>Servizi ASL:</strong> consultori familiari, centri nutrizionali, servizi di dietologia pediatrica</li>
                  <li>• <strong>OKkio alla SALUTE:</strong> screening scolastico a livello nazionale (classi terze primaria)</li>
                  <li>• <strong>HBSC Italia:</strong> sorveglianza sugli adolescenti (11, 13, 15 anni)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mediterranean diet for children */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Globe className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">La dieta mediterranea per i bambini</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                La <strong>dieta mediterranea</strong>, riconosciuta dall'UNESCO come patrimonio immateriale dell'umanita nel 2010, e il modello alimentare di riferimento per la crescita sana dei bambini. Tuttavia, i dati mostrano che le nuove generazioni italiane se ne stanno allontanando, privilegiando cibi ultra-processati e bevande zuccherate.
              </p>
              <p>
                La <strong>mensa scolastica italiana</strong>, spesso lodata a livello internazionale, rappresenta un'eccellenza del sistema educativo: pasti freschi, cucinati in loco, con menu approvati dalle ASL secondo le linee guida della SINU. In molti comuni, la mensa garantisce l'unico pasto equilibrato della giornata per i bambini di famiglie svantaggiate.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                  <h4 className="font-bold text-success mb-3">Linee guida e programmi nazionali</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>LARN (SINU):</strong> Livelli di Assunzione di Riferimento per eta pediatrica</li>
                    <li>• <strong>"Guadagnare Salute":</strong> programma nazionale di prevenzione (Ministero della Salute)</li>
                    <li>• <strong>OKkio alla SALUTE:</strong> monitoraggio abitudini alimentari e attivita fisica nelle scuole</li>
                    <li>• <strong>HBSC Italia:</strong> studio internazionale sugli stili di vita degli adolescenti</li>
                  </ul>
                </div>
                <div className="bg-warning/5 border border-warning/20 rounded-xl p-5">
                  <h4 className="font-bold text-warning mb-3">Il problema: l'abbandono della dieta mediterranea</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Solo il 13% dei bambini consuma 5 porzioni di frutta e verdura al giorno</li>
                    <li>• Il 25% dei bambini salta la colazione</li>
                    <li>• Aumento del consumo di snack e bevande zuccherate</li>
                    <li>• Riduzione dell'attivita fisica: troppo tempo davanti agli schermi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <BookOpen className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC bambino in Italia: cosa sapere</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Il <strong>calcolo IMC bambino</strong> utilizza la stessa formula degli adulti (peso / altezza al quadrato), ma l'<strong>interpretazione dell'IMC pediatrico</strong> in Italia segue le raccomandazioni della <strong>Societa Italiana di Pediatria (SIP)</strong> e le curve di crescita di Cacciari, oltre ai riferimenti OMS e IOTF.
              </p>
              <p>
                Il sistema italiano di sorveglianza <strong>OKkio alla SALUTE</strong>, coordinato dall'<strong>Istituto Superiore di Sanita (ISS)</strong>, monitora dal 2007 lo stato ponderale dei bambini delle scuole primarie. I dati evidenziano un lento miglioramento, ma il <strong>divario Nord-Sud</strong> resta significativo: le regioni meridionali presentano tassi di sovrappeso e obesita infantile tra i piu alti d'Europa.
              </p>
              <p>
                Il <strong>Pediatra di Libera Scelta (PLS)</strong> rappresenta una specificita unica del sistema sanitario italiano: un medico specialista dedicato esclusivamente ai bambini da 0 a 14 anni, assegnato dalla ASL. I <strong>bilanci di salute</strong> programmati consentono un monitoraggio regolare della crescita, dell'alimentazione e dello sviluppo psicomotorio.
              </p>
              <p>
                La <strong>SINU</strong> (Societa Italiana di Nutrizione Umana) pubblica i <strong>LARN</strong>, i livelli di riferimento per l'assunzione di nutrienti ed energia specifici per ogni fascia di eta. Il programma nazionale <strong>"Guadagnare Salute"</strong> e il progetto <strong>HBSC Italia</strong> completano il quadro della prevenzione dell'obesita infantile nel nostro Paese.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Sei un adulto?</h3>
            <p className="text-muted-foreground mb-6">
              Utilizza il nostro calcolatore IMC standard per adulti
            </p>
            <Link
              to="/it/imc"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calcola il mio IMC adulto
            </Link>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Calcolatore IMC per Bambini - Solo a scopo informativo</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCBambino;
