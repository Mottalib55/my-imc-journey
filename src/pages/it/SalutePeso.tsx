import { Header } from "@/components/Header";
import { Heart, Activity, Apple, Moon, Brain, Scale, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const SalutePeso = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-success/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Salute e Benessere
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-success">Salute e Peso</span> : Guida Nutrizione e Benessere
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprendere la relazione tra peso, IMC e salute generale
          </p>
        </header>

        <div className="space-y-8">
          {/* Introduzione */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Scale className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Peso e salute: una relazione complessa</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Il <strong>peso</strong> è solo uno dei tanti indicatori del vostro stato di salute.
                Un <strong>peso sano</strong> dipende da numerosi fattori: genetica, morfologia, attività fisica,
                alimentazione, sonno e benessere mentale.
              </p>
              <p>
                L'ossessione per il numero sulla bilancia può essere controproducente. È più importante
                concentrarsi su <strong>abitudini di vita sane</strong> piuttosto che su un peso obiettivo preciso.
                La salute non si misura solo in chilogrammi.
              </p>
            </div>
          </div>

          {/* Rischi per la salute */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Rischi legati al peso</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-warning">Rischi del sovrappeso e dell'obesità</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Malattie cardiovascolari (infarto, ictus)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Diabete di tipo 2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Ipertensione arteriosa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Apnea notturna</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Alcuni tipi di cancro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Problemi articolari</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-info">Rischi del sottopeso</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Carenze nutrizionali</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Sistema immunitario indebolito</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Osteoporosi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Disturbi ormonali</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Stanchezza cronica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Problemi di fertilità</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pilastri della salute */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">I 5 pilastri di un peso sano</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-green-500/10">
                    <Apple className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="font-bold">Alimentazione</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Privilegiate gli alimenti non trasformati</li>
                  <li>Mangiate verdure ad ogni pasto</li>
                  <li>Limitate gli zuccheri aggiunti</li>
                  <li>Idratatevi a sufficienza</li>
                  <li>Ascoltate la vostra fame e sazietà</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-orange-500/10">
                    <Activity className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold">Attività fisica</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>150 min di attività moderata/settimana</li>
                  <li>Includete il rinforzo muscolare</li>
                  <li>Muovetevi regolarmente durante la giornata</li>
                  <li>Trovate un'attività che vi piace</li>
                  <li>Progredite gradualmente</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10">
                    <Moon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="font-bold">Sonno</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Dormite 7-9 ore per notte</li>
                  <li>Orari regolari</li>
                  <li>Evitate gli schermi prima di dormire</li>
                  <li>Camera fresca e buia</li>
                  <li>La mancanza di sonno favorisce l'aumento di peso</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <Brain className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-bold">Salute mentale</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Gestite il vostro stress</li>
                  <li>Evitate l'alimentazione emotiva</li>
                  <li>Praticate la consapevolezza</li>
                  <li>Accettate il vostro corpo</li>
                  <li>Consultate un professionista se necessario</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-pink-500/10">
                    <Heart className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="font-bold">Assistenza medica</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Controllo di salute annuale</li>
                  <li>Monitoraggio della circonferenza vita</li>
                  <li>Controllo pressione, glicemia, colesterolo</li>
                  <li>Consultate un nutrizionista se necessario</li>
                  <li>Non seguite diete estreme</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-success/10">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="font-bold">Progressione</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Fissate obiettivi realistici</li>
                  <li>Massimo 0,5-1 kg/settimana</li>
                  <li>Celebrate le piccole vittorie</li>
                  <li>La costanza prevale sull'intensità</li>
                  <li>Pensate a lungo termine</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Consigli per un peso sano */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Consigli per un peso sano</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-success">Cosa funziona</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Cambiamenti <strong>graduali e duraturi</strong> delle abitudini</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Alimentazione <strong>equilibrata</strong>, nessuna restrizione estrema</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Attività fisica <strong>regolare e piacevole</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Sonno di <strong>qualità</strong> (7-8h/notte)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Gestione dello <strong>stress</strong> e delle emozioni</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Supporto di un <strong>professionista</strong> se necessario</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-destructive">Cosa non funziona</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Diete <strong>drastiche</strong> e restrittive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Integratori <strong>miracolosi</strong> e pillole dimagranti</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Pesarsi <strong>tutti i giorni</strong> (variazioni normali)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Obiettivi di perdita di peso <strong>irrealistici</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Confrontare il proprio corpo con quello degli <strong>altri</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Ignorare i segnali di <strong>fame/sazietà</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contenuto SEO */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Salute e peso: l'essenziale</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Mantenere un <strong>peso sano</strong> è importante per il vostro benessere generale. La relazione
                tra <strong>peso e salute</strong> è complessa e dipende da numerosi fattori. L'<strong>IMC</strong> è
                solo uno degli indicatori per valutare se vi trovate in una fascia di peso sano.
              </p>
              <p>
                Per <strong>perdere peso in modo sano</strong> o <strong>mantenere il proprio peso</strong>, privilegiate un
                approccio globale: alimentazione equilibrata, attività fisica regolare, sonno sufficiente e
                gestione dello stress. Evitate le diete yo-yo che sono dannose per la salute.
              </p>
              <p>
                Uno <strong>stile di vita sano</strong> è più importante di un numero sulla bilancia. Concentratevi
                sulle <strong>abitudini di vita</strong> piuttosto che sul peso. In caso di dubbio, consultate un
                professionista della salute per un accompagnamento personalizzato.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calcolate il vostro IMC</h3>
            <p className="text-muted-foreground mb-6">
              Primo indicatore per valutare il vostro peso sano
            </p>
            <Link
              to="/it/imc"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calcola il mio IMC
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 Salute e Peso</p>
        </footer>
      </div>
    </div>
  );
};

export default SalutePeso;
