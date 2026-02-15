import { Header } from "@/components/Header";
import { HelpCircle, AlertTriangle, CheckCircle2, Scale, Activity, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

const InterpretazioneIMC = () => {
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
            Comprendere l'IMC in Italia
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Interpretazione IMC</span> : Dati e Riferimenti Italiani
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Come interpretare il tuo Indice di Massa Corporea secondo le linee guida dell'ISS (Istituto Superiore di Sanit&agrave;),
            i dati ISTAT, il sistema di sorveglianza PASSI e il contesto della dieta mediterranea italiana
          </p>
        </header>

        <div className="space-y-8">
          {/* Cosa significa il tuo IMC */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Cosa significa il tuo IMC in Italia?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'<strong>IMC</strong> (Indice di Massa Corporea) &egrave; l'indicatore utilizzato dall'<strong>Istituto Superiore
                di Sanit&agrave; (ISS)</strong> e dal <strong>sistema di sorveglianza PASSI</strong> per monitorare lo stato
                ponderale della popolazione italiana. Si calcola dividendo il peso (in kg) per l'altezza al quadrato (in metri).
              </p>
              <p>
                Secondo i dati <strong>ISTAT</strong> pi&ugrave; recenti, l'Italia mantiene uno dei profili di peso pi&ugrave;
                favorevoli in Europa occidentale, con circa il <strong>64% della popolazione adulta in normopeso</strong>,
                grazie anche al ruolo protettivo della <strong>dieta mediterranea</strong> tradizionale.
              </p>
              <p>
                <strong>Importante:</strong> L'IMC &egrave; uno strumento di screening, non una diagnosi. Il tuo medico
                di medicina generale terr&agrave; conto di altri fattori (circonferenza vita, massa muscolare, storia clinica,
                esami del sangue) per una valutazione completa del tuo stato di salute.
              </p>
            </div>
          </div>

          {/* Categoria per categoria con dati italiani */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Categorie IMC con dati italiani</h2>
            </div>

            <div className="space-y-6">
              {/* Sottopeso */}
              <div className="border-l-4 border-info pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <Scale className="w-5 h-5 text-info" />
                  <h3 className="font-bold text-lg">IMC inferiore a 18,5: Sottopeso (~3% degli italiani)</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  In Italia, circa il <strong>3% della popolazione adulta</strong> risulta sottopeso secondo i dati PASSI.
                  Questa condizione &egrave; pi&ugrave; frequente tra le <strong>giovani donne (18-34 anni)</strong>, dove la
                  prevalenza pu&ograve; raggiungere il 5-6%.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>&#8226; Apporto calorico insufficiente o metabolismo molto rapido</li>
                  <li>&#8226; Rischio di disturbi alimentari: la <strong>SISDCA</strong> (Societ&agrave; Italiana per lo Studio dei Disturbi del Comportamento Alimentare) stima oltre 3 milioni di italiani colpiti</li>
                  <li>&#8226; Rischio di carenze nutrizionali (ferro, vitamina D, calcio)</li>
                  <li>&#8226; Possibile segnale di patologie sottostanti (celiachia, ipertiroidismo)</li>
                </ul>
                <p className="text-info font-medium mt-3">
                  Consiglio: Consulta il tuo medico di medicina generale per identificare la causa. In Italia esistono centri specializzati per i disturbi alimentari in ogni regione.
                </p>
              </div>

              {/* Normopeso */}
              <div className="border-l-4 border-success pl-6 py-4 bg-success/5 rounded-r-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <h3 className="font-bold text-lg">IMC tra 18,5 e 24,9: Normopeso (~64% degli italiani)</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  L'Italia vanta uno dei <strong>tassi di normopeso pi&ugrave; alti d'Europa</strong>, con circa il 64% della
                  popolazione adulta in questa fascia. Questo risultato &egrave; attribuito in parte alla tradizione culinaria
                  italiana e alla <strong>dieta mediterranea</strong>, riconosciuta dall'UNESCO come Patrimonio Immateriale dell'Umanit&agrave;.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>&#8226; Rischi per la salute minimizzati secondo le linee guida ISS</li>
                  <li>&#8226; Buon equilibrio energetico favorito dalla tradizione alimentare italiana</li>
                  <li>&#8226; Obiettivo: mantenere il peso con abitudini sane e attivit&agrave; fisica regolare</li>
                  <li>&#8226; Confronto europeo: media UE circa 50-55% in normopeso</li>
                </ul>
                <p className="text-success font-medium mt-3">
                  Consiglio: Mantieni la dieta mediterranea tradizionale e un'attivit&agrave; fisica regolare di almeno 150 minuti settimanali come raccomandato dall'ISS.
                </p>
              </div>

              {/* Sovrappeso */}
              <div className="border-l-4 border-warning pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  <h3 className="font-bold text-lg">IMC tra 25 e 29,9: Sovrappeso (~24% degli adulti italiani)</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Secondo i dati <strong>ISTAT</strong>, circa il <strong>24% degli adulti italiani</strong> si trova in condizione
                  di sovrappeso. La prevalenza &egrave; maggiore negli uomini (circa 30%) rispetto alle donne (circa 18%)
                  e tende ad aumentare con l'et&agrave;, in particolare dopo i 45 anni.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>&#8226; Aumento del rischio di malattie cardiovascolari, diabete tipo 2 e ipertensione</li>
                  <li>&#8226; Prevalenza maggiore nel Sud Italia rispetto al Nord</li>
                  <li>&#8226; Pu&ograve; essere influenzato dalla massa muscolare (sportivi, lavoratori manuali)</li>
                  <li>&#8226; La visita medico-sportiva pu&ograve; aiutare a distinguere massa grassa da massa magra</li>
                </ul>
                <p className="text-warning font-medium mt-3">
                  Consiglio: Rivolgiti al tuo medico di base. Il CREA (Centro di Ricerca Alimenti e Nutrizione) raccomanda un ritorno alla dieta mediterranea tradizionale con porzioni adeguate.
                </p>
              </div>

              {/* Obesit&agrave; */}
              <div className="border-l-4 border-destructive pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-destructive" />
                  <h3 className="font-bold text-lg">IMC superiore a 30: Obesit&agrave; (~12% - tra le pi&ugrave; basse in Europa occidentale)</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  L'Italia presenta un tasso di obesit&agrave; di circa il <strong>12%</strong>, uno dei <strong>pi&ugrave; bassi
                  dell'Europa occidentale</strong>. Per confronto: il Regno Unito raggiunge il 26%, la Germania il 19% e la
                  Spagna il 16%. Tuttavia, il trend &egrave; in aumento, soprattutto tra i giovani.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>&#8226; Classe I (30-34,9): Obesit&agrave; moderata &mdash; maggiore prevalenza nelle regioni meridionali</li>
                  <li>&#8226; Classe II (35-39,9): Obesit&agrave; grave &mdash; richiede follow-up specialistico</li>
                  <li>&#8226; Classe III (&ge;40): Obesit&agrave; morbida &mdash; possibile indicazione alla chirurgia bariatrica via SSN</li>
                </ul>
                <p className="text-destructive font-medium mt-3">
                  Consiglio: Si raccomanda un consulto presso un centro specializzato. L'ADI (Associazione Italiana di Dietetica) pu&ograve; indicarti i centri di riferimento nella tua regione.
                </p>
              </div>
            </div>
          </div>

          {/* Fattori da considerare - contesto italiano */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Fattori da considerare nel contesto italiano</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">Linee guida ISS/PASSI e fattori specifici:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Dieta mediterranea</strong>: Fattore protettivo riconosciuto dall'ISS &mdash; olio d'oliva, cereali integrali, frutta, verdura e pesce riducono il rischio metabolico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Raccomandazioni CREA</strong>: Le Linee Guida per una Sana Alimentazione Italiana definiscono porzioni e frequenze specifiche per la popolazione italiana</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Visita medico-sportiva</strong>: In Italia obbligatoria per attivit&agrave; agonistica &mdash; include valutazione antropometrica che contestualizza l'IMC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Massa muscolare</strong>: Gli sportivi e i lavoratori manuali possono avere un IMC elevato senza eccesso di grasso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Et&agrave; e sesso</strong>: L'ISS evidenzia soglie diverse per uomini e donne e variazioni legate all'invecchiamento</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Indicatori complementari raccomandati in Italia:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Circonferenza vita</strong>: &lt;94 cm (uomini) / &lt;80 cm (donne) &mdash; parametro chiave nel sistema PASSI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Rapporto vita-fianchi</strong>: Indicatore della distribuzione del grasso addominale, importante per il rischio cardiovascolare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Impedenziometria</strong>: Analisi della composizione corporea disponibile presso molti studi medici e centri sportivi italiani</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Esami del sangue</strong>: Glicemia, colesterolo HDL/LDL, trigliceridi, emoglobina glicata &mdash; prescrivibili dal medico di base</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Il paradosso italiano */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Il paradosso italiano: dieta mediterranea e obesit&agrave;</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'Italia presenta un <strong>paradosso unico in Europa</strong>: pur essendo la patria della dieta mediterranea
                e avendo uno dei tassi di obesit&agrave; adulta pi&ugrave; bassi del continente (~12%), detiene
                uno dei <strong>tassi di obesit&agrave; infantile pi&ugrave; alti d'Europa</strong>. Secondo lo studio
                <strong> OKkio alla Salute</strong> dell'ISS, circa il 9% dei bambini italiani &egrave; obeso e il 20% in sovrappeso.
              </p>
              <p>
                <strong>Il divario Nord-Sud:</strong> Le differenze regionali sono marcate. La <strong>Campania</strong> registra
                un tasso di obesit&agrave; adulta del <strong>14,1%</strong>, mentre il <strong>Trentino-Alto Adige</strong> si ferma
                al <strong>7,8%</strong>. Puglia, Sicilia e Calabria presentano tassi simili alla Campania, mentre Lombardia,
                Veneto e Piemonte si avvicinano ai valori del Trentino. Questo divario rispecchia le disuguaglianze socioeconomiche
                tra le due aree del Paese.
              </p>
              <p>
                <strong>Il paradosso della dieta mediterranea:</strong> Proprio nelle regioni meridionali, dove la dieta mediterranea
                ha le sue radici storiche, si registrano i tassi pi&ugrave; alti di sovrappeso e obesit&agrave;. Le cause sono
                molteplici: l'abbandono progressivo della dieta tradizionale a favore di cibi ultraprocessati, livelli di reddito
                pi&ugrave; bassi che limitano l'accesso a prodotti freschi di qualit&agrave;, minore pratica di attivit&agrave;
                fisica strutturata e livelli di istruzione mediamente inferiori, che correlano con scelte alimentari meno consapevoli.
              </p>
              <p>
                <strong>Fattori socioeconomici:</strong> I dati ISTAT mostrano che l'obesit&agrave; in Italia &egrave; inversamente
                correlata al livello di istruzione e di reddito. Tra le persone con titolo di studio universitario, il tasso
                di obesit&agrave; &egrave; circa il 7%, mentre tra chi ha solo la licenza media raggiunge il 15%. Questo evidenzia
                come la lotta all'obesit&agrave; in Italia sia anche una questione di equit&agrave; sociale e accesso alle risorse.
              </p>
            </div>
          </div>

          {/* Sistema Sanitario Nazionale e IMC */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Heart className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Sistema Sanitario Nazionale e IMC</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Il <strong>Servizio Sanitario Nazionale (SSN)</strong> italiano offre un percorso strutturato per la gestione
                del sovrappeso e dell'obesit&agrave;, con copertura universale garantita dai <strong>LEA (Livelli Essenziali
                di Assistenza)</strong>.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="font-bold mb-3">Il percorso nel SSN:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                      <span><strong>Medico di Medicina Generale (MMG)</strong>: Primo punto di contatto. Valuta l'IMC, prescrive esami e indirizza verso specialisti se necessario</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                      <span><strong>Dietista vs Nutrizionista</strong>: In Italia il <em>dietista</em> (laurea triennale) elabora piani alimentari su prescrizione medica; il <em>biologo nutrizionista</em> pu&ograve; operare autonomamente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                      <span><strong>ADI</strong> (Associazione Italiana di Dietetica e Nutrizione Clinica): Promuove linee guida e formazione per i professionisti della nutrizione</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Trattamenti coperti dal SSN:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                      <span><strong>Visite specialistiche</strong>: Endocrinologia, dietologia e nutrizione clinica con impegnativa del medico di base</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                      <span><strong>Chirurgia bariatrica</strong>: Per IMC &ge;40 (o &ge;35 con comorbidit&agrave;), il SSN copre interventi come sleeve gastrectomy e bypass gastrico presso centri accreditati</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                      <span><strong>Programmi riabilitativi</strong>: Percorsi multidisciplinari (dietista, psicologo, fisiatra) disponibili presso le ASL regionali e i centri ospedalieri</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="mt-4">
                <strong>Nota:</strong> L'accesso ai servizi e i tempi di attesa possono variare significativamente tra le diverse
                regioni italiane. Le regioni del Nord tendono ad avere reti di centri pi&ugrave; capillari, mentre nel Sud
                l'offerta pu&ograve; essere pi&ugrave; limitata. Informati presso la tua ASL locale per conoscere i servizi disponibili nel tuo territorio.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Interpretazione IMC in Italia: guida completa</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'<strong>interpretazione dell'IMC</strong> nel contesto italiano si basa sulle linee guida dell'<strong>Istituto
                Superiore di Sanit&agrave; (ISS)</strong> e sui dati raccolti dal <strong>sistema di sorveglianza PASSI</strong>.
                Sapere <strong>come leggere il proprio IMC</strong> secondo i riferimenti italiani permette di comprendere
                la propria situazione rispetto alla popolazione nazionale.
              </p>
              <p>
                I dati <strong>ISTAT</strong> sull'obesit&agrave; in Italia mostrano un quadro complessivamente favorevole
                rispetto al resto dell'Europa occidentale, con il ruolo protettivo della <strong>dieta mediterranea</strong>
                riconosciuto dalla comunit&agrave; scientifica internazionale. Le raccomandazioni del <strong>CREA</strong>
                e le Linee Guida per una Sana Alimentazione Italiana forniscono indicazioni specifiche per la popolazione del nostro Paese.
              </p>
              <p>
                Il <strong>Servizio Sanitario Nazionale (SSN)</strong> garantisce l'accesso a percorsi di cura per sovrappeso
                e obesit&agrave; attraverso i <strong>LEA</strong>. Il <strong>medico di medicina generale</strong>, il dietista
                e il biologo nutrizionista sono le figure di riferimento. L'<strong>ADI</strong> e la <strong>SISDCA</strong>
                rappresentano i principali riferimenti scientifici italiani in ambito nutrizionale e dei disturbi alimentari.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calcola ora il tuo IMC</h3>
            <p className="text-muted-foreground mb-6">
              Utilizza il nostro calcolatore gratuito per determinare il tuo Indice di Massa Corporea e confrontarlo con i dati italiani
            </p>
            <Link
              to="/it/imc"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calcola il tuo IMC
            </Link>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 Interpretazione IMC Italia</p>
        </footer>
      </div>
    </div>
  );
};

export default InterpretazioneIMC;
