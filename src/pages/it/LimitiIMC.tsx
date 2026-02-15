import { Header } from "@/components/Header";
import { AlertTriangle, XCircle, CheckCircle2, Users, Dumbbell, Baby, Clock, Globe, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const LimitiIMC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-warning/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 text-warning text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            Analisi Critica
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-warning">Limiti dell'IMC</span> : Cosa l'Indice Non Rivela
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scoprite perché l'IMC non è sempre affidabile e quali alternative esistono
          </p>
        </header>

        {/* Main Warning */}
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-warning mb-2">L'IMC è uno strumento di screening, non una diagnosi</h3>
              <p className="text-muted-foreground">
                L'IMC è stato sviluppato nel 1832 da Adolphe Quetelet ed era concepito per studi statistici sulla popolazione,
                non per valutare la salute individuale. Presenta diverse limitazioni importanti.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Main Limitations */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Cosa l'IMC non misura</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Composizione corporea</h4>
                    <p className="text-sm text-muted-foreground">
                      L'IMC non distingue tra muscolo e grasso. 1 kg di muscolo = 1 kg di grasso per l'IMC.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Distribuzione del grasso</h4>
                    <p className="text-sm text-muted-foreground">
                      Il grasso addominale è più pericoloso del grasso sottocutaneo. L'IMC non lo rileva.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Densità ossea</h4>
                    <p className="text-sm text-muted-foreground">
                      Ossa più pesanti aumentano l'IMC senza influire sulla salute.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Salute metabolica</h4>
                    <p className="text-sm text-muted-foreground">
                      Una persona magra può avere un profilo metabolico sfavorevole (colesterolo, glucosio).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Idratazione</h4>
                    <p className="text-sm text-muted-foreground">
                      La ritenzione idrica può aumentare temporaneamente l'IMC di 1-2 punti.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Forma fisica</h4>
                    <p className="text-sm text-muted-foreground">
                      Due persone con lo stesso IMC possono avere condizioni fisiche molto diverse.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Population-specific limitations */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Users className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Gruppi di popolazione per i quali l'IMC è inadeguato</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Dumbbell className="w-5 h-5 text-orange-500" />
                  <h4 className="font-bold">Sportivi e bodybuilder</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Un'elevata massa muscolare porta a un IMC di "sovrappeso" o "obesità", mentre la percentuale di grasso corporeo è minima.
                </p>
                <Link to="/it/imc-sportivo" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  Scopri di più →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Baby className="w-5 h-5 text-cyan-500" />
                  <h4 className="font-bold">Bambini e adolescenti</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  I valori soglia per gli adulti non si applicano. È necessario utilizzare le curve percentili specifiche per età e sesso.
                </p>
                <Link to="/it/imc-bambino" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  Scopri di più →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold">Persone anziane (&gt;65)</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  La perdita muscolare (sarcopenia) può mascherare un eccesso di grasso. Un IMC "normale" può essere fuorviante.
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-pink-500" />
                  <h4 className="font-bold">Donne in gravidanza</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  L'aumento di peso durante la gravidanza è normale e auspicabile. L'IMC pre-gravidanza serve come riferimento.
                </p>
                <Link to="/it/imc-donna" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  Scopri di più →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold">Determinati gruppi etnici</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Le popolazioni asiatiche presentano rischi maggiori a un IMC più basso. L'OMS propone soglie adattate (23 anziché 25).
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Scale className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold">Corporature estreme</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Le persone molto alte o molto basse hanno naturalmente IMC diversi a causa del rapporto superficie-volume.
                </p>
              </div>
            </div>
          </div>

          {/* Better alternatives */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Alternative migliori all'IMC</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Indicatore</th>
                    <th className="text-left py-3 px-4 font-bold">Cosa misura</th>
                    <th className="text-left py-3 px-4 font-bold">Valori soglia consigliati</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Circonferenza vita</td>
                    <td className="py-3 px-4">Grasso addominale (viscerale)</td>
                    <td className="py-3 px-4">&lt;94 cm (U) / &lt;80 cm (D)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Rapporto vita-fianchi</td>
                    <td className="py-3 px-4">Distribuzione del grasso</td>
                    <td className="py-3 px-4">&lt;0,90 (U) / &lt;0,85 (D)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Rapporto vita-altezza</td>
                    <td className="py-3 px-4">Grasso centrale relativo</td>
                    <td className="py-3 px-4">&lt;0,5 (vita &lt; metà altezza)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Percentuale di grasso corporeo</td>
                    <td className="py-3 px-4">Composizione corporea reale</td>
                    <td className="py-3 px-4">10-20% (U) / 18-28% (D)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">FFMI</td>
                    <td className="py-3 px-4">Massa magra (per sportivi)</td>
                    <td className="py-3 px-4">18-25 (naturale)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Scansione DEXA</td>
                    <td className="py-3 px-4">Acqua, muscoli, grasso, ossa</td>
                    <td className="py-3 px-4">Variabile secondo l'apparecchio</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* When BMI is still useful */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Quando l'IMC resta comunque utile</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Nonostante i suoi limiti, l'IMC rimane uno strumento prezioso in determinati contesti:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Screening iniziale rapido</strong>: Identificazione delle persone che necessitano di un esame più approfondito</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Studi epidemiologici</strong>: Confronto di gruppi di popolazione su larga scala</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Monitoraggio individuale</strong>: Osservazione dell'evoluzione del peso nel tempo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Adulto medio sedentario</strong>: Per questa popolazione, l'IMC è abbastanza affidabile</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Tutto sui limiti dell'IMC</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                I <strong>limiti dell'IMC</strong> sono numerosi e ben documentati dalla comunità scientifica.
                Questa <strong>analisi critica dell'IMC</strong> non dovrebbe essere interpretata isolatamente. Le <strong>debolezze dell'IMC</strong>
                includono l'incapacità di distinguere la massa grassa dalla massa muscolare.
              </p>
              <p>
                <strong>Perché l'IMC è imperfetto</strong>? Perché si tratta di un semplice rapporto matematico.
                I <strong>problemi dell'IMC</strong> sono particolarmente evidenti negli sportivi, nei bambini e negli anziani.
                Che l'<strong>IMC sia affidabile o meno</strong> dipende dal contesto di utilizzo.
              </p>
              <p>
                Le <strong>alternative all'IMC</strong> come la circonferenza vita o la percentuale di grasso corporeo offrono un quadro più completo.
                <strong>L'IMC è affidabile per tutti</strong>? No, ma combinato con altri indicatori rimane
                un utile strumento di screening.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calcolate comunque il vostro IMC</h3>
            <p className="text-muted-foreground mb-6">
              Ora che conoscete i limiti, utilizzate il nostro calcolatore come primo indicatore
            </p>
            <Link
              to="/it/imc"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calcolare il mio IMC
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Limiti dell'IMC - Comprendere l'Indice di Massa Corporea</p>
        </footer>
      </div>
    </div>
  );
};

export default LimitiIMC;
