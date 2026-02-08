import { Header } from "@/components/Header";
import { HelpCircle, AlertTriangle, CheckCircle2, Scale, Activity, Heart } from "lucide-react";
import { Link } from "react-router-dom";

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
            Comprendere l'IMC
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Interpretazione dell'IMC</span>: Comprendere i Risultati
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cosa significa il tuo risultato IMC e come interpretarlo nel contesto
          </p>
        </header>

        <div className="space-y-8">
          {/* Cosa significa il tuo IMC */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Cosa significa il tuo IMC?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'<strong>IMC</strong> (Indice di Massa Corporea) è un indicatore che consente una valutazione rapida
                per determinare se il tuo peso è adeguato alla tua altezza. Si calcola dividendo il peso (in kg)
                per l'altezza al quadrato (in metri).
              </p>
              <p>
                <strong>Importante:</strong> L'IMC è uno strumento di screening, non una diagnosi. Un medico
                terrà conto di altri fattori (circonferenza vita, massa muscolare, storia clinica)
                per valutare il tuo stato di salute.
              </p>
            </div>
          </div>

          {/* Categoria per categoria */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Categoria per categoria</h2>
            </div>

            <div className="space-y-6">
              {/* Sottopeso */}
              <div className="border-l-4 border-info pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <Scale className="w-5 h-5 text-info" />
                  <h3 className="font-bold text-lg">IMC inferiore a 18,5: Sottopeso</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Un IMC inferiore a 18,5 indica sottopeso. Questo può significare:
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Apporto calorico insufficiente</li>
                  <li>• Metabolismo molto rapido</li>
                  <li>• Possibile disturbo alimentare</li>
                  <li>• Rischio di carenze nutrizionali</li>
                </ul>
                <p className="text-info font-medium mt-3">
                  Consiglio: Consulta un medico per identificare la causa e adattare la tua alimentazione.
                </p>
              </div>

              {/* Normopeso */}
              <div className="border-l-4 border-success pl-6 py-4 bg-success/5 rounded-r-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <h3 className="font-bold text-lg">IMC tra 18,5 e 24,9: Normopeso</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Questa è la zona ottimale! Il tuo peso è equilibrato rispetto alla tua altezza.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Rischi per la salute minimizzati</li>
                  <li>• Buon equilibrio energetico</li>
                  <li>• Obiettivo: mantenere il peso</li>
                </ul>
                <p className="text-success font-medium mt-3">
                  Consiglio: Mantieni le tue buone abitudini alimentari e l'attività fisica.
                </p>
              </div>

              {/* Sovrappeso */}
              <div className="border-l-4 border-warning pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  <h3 className="font-bold text-lg">IMC tra 25 e 29,9: Sovrappeso</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Il tuo peso supera leggermente la norma. È un segnale d'allarme, non un'emergenza.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Aumento del rischio di malattie croniche</li>
                  <li>• Possibile pressione arteriosa elevata</li>
                  <li>• Può essere dovuto alla massa muscolare (sportivi)</li>
                </ul>
                <p className="text-warning font-medium mt-3">
                  Consiglio: Adotta un'alimentazione equilibrata e aumenta la tua attività fisica.
                </p>
              </div>

              {/* Obesità */}
              <div className="border-l-4 border-destructive pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-destructive" />
                  <h3 className="font-bold text-lg">IMC superiore a 30: Obesità</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  L'obesità aumenta considerevolmente i rischi per la salute.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Classe I (30-34,9): Obesità moderata</li>
                  <li>• Classe II (35-39,9): Obesità grave</li>
                  <li>• Classe III (≥40): Obesità morbida</li>
                </ul>
                <p className="text-destructive font-medium mt-3">
                  Consiglio: Si raccomanda un consulto medico per un accompagnamento personalizzato.
                </p>
              </div>
            </div>
          </div>

          {/* Fattori da considerare */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Fattori da considerare</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">L'IMC può essere influenzato da:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Massa muscolare</strong>: Gli sportivi hanno un IMC più elevato</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Età</strong>: Gli anziani perdono massa muscolare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Sesso</strong>: Le donne hanno naturalmente più grasso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Etnia</strong>: Soglie diverse a seconda della popolazione</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Struttura ossea</strong>: Può influenzare il peso complessivo</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Indicatori complementari:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Circonferenza vita</strong>: &lt;94 cm (U) / &lt;80 cm (D)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Rapporto vita-fianchi</strong>: Distribuzione del grasso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Percentuale di grasso corporeo</strong>: Composizione corporea reale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Analisi del sangue</strong>: Colesterolo, glucosio, ecc.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cosa fare in base ai risultati */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Cosa fare in base ai risultati?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Il tuo IMC è solo un punto di partenza. Ecco i passi successivi consigliati:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Annota il tuo IMC attuale</strong> come riferimento</li>
                <li><strong>Misura la tua circonferenza vita</strong> per completare la valutazione</li>
                <li><strong>Consulta un medico</strong> se il tuo IMC è al di fuori della norma</li>
                <li><strong>Fissa obiettivi realistici</strong>: perdere al massimo 0,5-1 kg a settimana</li>
                <li><strong>Monitora la tua evoluzione</strong>: pesati una volta a settimana, stesso giorno, stessa ora</li>
              </ol>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Comprendere l'interpretazione dell'IMC</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'<strong>interpretazione dell'IMC</strong> è essenziale per capire cosa significa il tuo
                <strong> risultato IMC</strong>. Sapere <strong>come leggere il proprio IMC</strong> permette di
                determinare se ti trovi in una zona di peso sano o se sono necessari degli aggiustamenti.
              </p>
              <p>
                <strong>Come interpretare l'IMC</strong>? Le categorie dell'OMS definiscono chiaramente
                cosa <strong>significa un IMC</strong> di 22, 25 o 30. L'<strong>analisi dell'IMC</strong>
                deve sempre tenere conto del contesto: età, sesso, attività fisica.
              </p>
              <p>
                L'<strong>IMC ideale</strong> si situa tra 18,5 e 24,9. <strong>Comprendere il proprio IMC</strong>
                significa anche sapere che questo indice ha dei limiti. La <strong>spiegazione completa dell'IMC</strong>
                include la considerazione di altri indicatori come la circonferenza vita.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calcola ora il tuo IMC</h3>
            <p className="text-muted-foreground mb-6">
              Utilizza il nostro calcolatore gratuito per determinare il tuo Indice di Massa Corporea
            </p>
            <Link
              to="/it/imc"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calcola il tuo IMC
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Interpretazione IMC</p>
        </footer>
      </div>
    </div>
  );
};

export default InterpretazioneIMC;
