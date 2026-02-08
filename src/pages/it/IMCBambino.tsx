import { Header } from "@/components/Header";
import { Baby, AlertTriangle, TrendingUp, BookOpen, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

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
            IMC per Bambini e Adolescenti
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-cyan-500">IMC per Bambini</span> : Un calcolo diverso
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprendere l'IMC nei bambini e negli adolescenti: curve di crescita e specificità
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
                Consultate il vostro <strong>pediatra</strong> o <strong>medico curante</strong> per un monitoraggio adeguato.
                Le informazioni riportate di seguito sono puramente informative.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
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
                A differenza degli adulti, l'<strong>IMC bambino</strong> non si interpreta con soglie fisse
                (18,5 / 25 / 30). Nei bambini e negli adolescenti, il corpo è in continua evoluzione e l'IMC varia
                naturalmente in base all'età e al sesso.
              </p>
              <p>
                Si utilizzano quindi le <strong>curve di corpulenza</strong> (o curve dei percentili) che permettono
                di collocare il bambino rispetto agli altri bambini della stessa età e dello stesso sesso.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                <h4 className="font-bold text-destructive mb-2">IMC Adulto</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Soglie fisse universali</li>
                  <li>• &lt;18,5 = sottopeso</li>
                  <li>• 18,5-25 = normale</li>
                  <li>• 25-30 = sovrappeso</li>
                  <li>• &gt;30 = obesità</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">IMC Bambino</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Curve dei percentili</li>
                  <li>• Varia in base all'età</li>
                  <li>• Diverso maschio/femmina</li>
                  <li>• Interpretazione relativa</li>
                  <li>• Monitoraggio dell'evoluzione</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Growth Curves */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <TrendingUp className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Curve di crescita</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Le <strong>curve di corpulenza</strong> sono presenti nel libretto sanitario del vostro bambino.
                Permettono di seguire l'evoluzione dell'IMC nel tempo.
              </p>

              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-4">Come leggere i percentili?</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong className="text-info">3° percentile:</strong> Zona di sottopeso</p>
                    <p><strong className="text-success">3°-97° percentile:</strong> Zona normale</p>
                    <p><strong className="text-warning">97° percentile:</strong> Sovrappeso</p>
                    <p><strong className="text-destructive">&gt;97° percentile:</strong> Obesità</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      Un bambino al 50° percentile ha un IMC superiore al 50% dei bambini della sua età e inferiore al restante 50%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Age groups */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Baby className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC per fasce d'età</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Neonato (0-2 anni)</h4>
                <p className="text-sm text-muted-foreground">
                  L'IMC generalmente non viene calcolato. Si utilizzano le curve peso/altezza e il perimetro cranico.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Bambino (2-12 anni)</h4>
                <p className="text-sm text-muted-foreground">
                  IMC interpretato con le curve di corpulenza. Il "rimbalzo adiposo" verso i 6 anni viene monitorato.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Adolescente (12-18 anni)</h4>
                <p className="text-sm text-muted-foreground">
                  Pubertà = variazioni importanti. Le curve specifiche maschio/femmina sono essenziali.
                </p>
              </div>
            </div>
          </div>

          {/* When to consult */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Stethoscope className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Quando consultare un medico?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5">
                <h4 className="font-bold text-warning mb-3">Segnali d'allarme</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Cambiamento brusco di corridoio sulla curva</li>
                  <li>• IMC &gt; 97° percentile</li>
                  <li>• IMC &lt; 3° percentile</li>
                  <li>• Rimbalzo adiposo precoce (&lt;6 anni)</li>
                  <li>• Preoccupazione del bambino per il proprio peso</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-3">Monitoraggio regolare</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Pesata e misurazione ad ogni visita medica</li>
                  <li>• Registrazione sulle curve del libretto sanitario</li>
                  <li>• Monitoraggio della traiettoria, non solo un punto</li>
                  <li>• Discussione con il medico in caso di dubbi</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <BookOpen className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tutto sull'IMC bambino</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Il <strong>calcolo IMC bambino</strong> utilizza la stessa formula degli adulti (peso / altezza²),
                ma l'<strong>interpretazione dell'IMC bambino</strong> è totalmente diversa. Non si può dire
                che un bambino sia in sovrappeso semplicemente perché il suo IMC supera 25.
              </p>
              <p>
                L'<strong>IMC adolescente</strong> è particolarmente delicato da interpretare durante la pubertà.
                Le variazioni ormonali causano importanti cambiamenti corporei, diversi tra
                <strong> IMC maschio</strong> e <strong>IMC femmina</strong>.
              </p>
              <p>
                Per calcolare l'<strong>IMC neonato</strong> o l'<strong>IMC lattante</strong>, i pediatri
                utilizzano piuttosto le curve di crescita peso/altezza. L'<strong>IMC bambino 3 anni</strong>,
                <strong> IMC bambino 5 anni</strong> o <strong>IMC bambino 10 anni</strong> si leggono sempre sulle
                curve dei percentili.
              </p>
              <p>
                In caso di dubbio sul <strong>peso ideale bambino</strong> o sull'<strong>IMC ideale bambino</strong>,
                consultate il vostro pediatra che potrà analizzare la <strong>curva di corpulenza</strong> nel suo insieme.
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

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Calcolatore IMC per Bambini - Solo a scopo informativo</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCBambino;
