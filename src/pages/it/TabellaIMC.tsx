import { Header } from "@/components/Header";
import { Table, Scale, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const TabellaIMC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Table className="w-4 h-4" />
            Classificazione OMS
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Tabella IMC</span>: Classificazione Completa
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tabella completa delle categorie di IMC secondo l'Organizzazione Mondiale della Sanit&agrave;
          </p>
        </header>

        <div className="space-y-8">
          {/* Tabella principale */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Classificazione internazionale dell'IMC (adulti)</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold">Classificazione</th>
                    <th className="text-left py-4 px-4 font-bold">IMC (kg/m²)</th>
                    <th className="text-left py-4 px-4 font-bold">Rischio di comorbidit&agrave;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Grave sottopeso</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">&lt; 16,0</td>
                    <td className="py-4 px-4 text-info">Elevato (malnutrizione)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Sottopeso moderato</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">16,0 - 16,9</td>
                    <td className="py-4 px-4 text-info">Moderato</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Sottopeso lieve</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">17,0 - 18,4</td>
                    <td className="py-4 px-4 text-info">Basso</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-success" />
                        <span className="font-bold text-success">Normopeso</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-success">18,5 - 24,9</td>
                    <td className="py-4 px-4 text-success">Basso (riferimento)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-warning" />
                        <span className="font-medium">Sovrappeso (Pre-obesit&agrave;)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">25,0 - 29,9</td>
                    <td className="py-4 px-4 text-warning">Aumentato</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Obesit&agrave; Classe I (moderata)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">30,0 - 34,9</td>
                    <td className="py-4 px-4 text-destructive">Elevato</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Obesit&agrave; Classe II (grave)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">35,0 - 39,9</td>
                    <td className="py-4 px-4 text-destructive">Molto elevato</td>
                  </tr>
                  <tr className="bg-destructive/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Obesit&agrave; Classe III (morbigena)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">&ge; 40,0</td>
                    <td className="py-4 px-4 text-destructive">Estremamente elevato</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Fonte: Organizzazione Mondiale della Sanit&agrave; (OMS)
            </p>
          </div>

          {/* Tabella peso / altezza */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tabella peso / altezza</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Corrispondenza tra altezza e intervallo di peso per ogni categoria di IMC:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-3 font-bold">Altezza</th>
                    <th className="text-left py-3 px-3 font-bold text-info">Sottopeso<br />&lt;18,5</th>
                    <th className="text-left py-3 px-3 font-bold text-success">Normopeso<br />18,5-24,9</th>
                    <th className="text-left py-3 px-3 font-bold text-warning">Sovrappeso<br />25-29,9</th>
                    <th className="text-left py-3 px-3 font-bold text-destructive">Obesit&agrave;<br />&ge;30</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { h: 155, u: 44, nMin: 44, nMax: 60, sMin: 60, sMax: 72, o: 72 },
                    { h: 160, u: 47, nMin: 47, nMax: 64, sMin: 64, sMax: 77, o: 77 },
                    { h: 165, u: 50, nMin: 50, nMax: 68, sMin: 68, sMax: 81, o: 81 },
                    { h: 170, u: 53, nMin: 53, nMax: 72, sMin: 72, sMax: 87, o: 87 },
                    { h: 175, u: 57, nMin: 57, nMax: 76, sMin: 76, sMax: 92, o: 92 },
                    { h: 180, u: 60, nMin: 60, nMax: 81, sMin: 81, sMax: 97, o: 97 },
                    { h: 185, u: 63, nMin: 63, nMax: 85, sMin: 85, sMax: 102, o: 102 },
                    { h: 190, u: 67, nMin: 67, nMax: 90, sMin: 90, sMax: 108, o: 108 },
                  ].map((row) => (
                    <tr key={row.h} className="border-b border-border/50">
                      <td className="py-3 px-3 font-bold">{row.h} cm</td>
                      <td className="py-3 px-3 text-info">&lt;{row.u} kg</td>
                      <td className="py-3 px-3 text-success">{row.nMin}-{row.nMax} kg</td>
                      <td className="py-3 px-3 text-warning">{row.sMin}-{row.sMax} kg</td>
                      <td className="py-3 px-3 text-destructive">&gt;{row.o} kg</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Casi limite ed eccezioni */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Casi limite ed eccezioni</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold">L'IMC non &egrave; adatto per:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Sportivi muscolosi</strong>: massa muscolare = IMC sovrastimato</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Donne in gravidanza</strong>: aumento di peso normale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Anziani</strong>: perdita di massa muscolare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Bambini/adolescenti</strong>: necessarie curve specifiche</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold">Indicatori complementari:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Circonferenza vita</strong>: grasso addominale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Massa grassa %</strong>: composizione corporea</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Rapporto vita/fianchi</strong>: distribuzione del grasso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>FFMI</strong>: per sportivi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sezione SEO - Interpretare l'IMC */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Come interpretare correttamente la tabella IMC</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                La <strong>tabella IMC dell'OMS</strong> &egrave; il riferimento internazionale per classificare la corporatura.
                Questa <strong>tabella dell'indice di massa corporea</strong> definisce le soglie di <strong>sottopeso</strong>,
                <strong> normopeso</strong>, <strong>sovrappeso</strong> e <strong>obesit&agrave;</strong>.
              </p>
              <p>
                La <strong>classificazione dell'IMC</strong> distingue tre livelli di sottopeso (grave, moderato, lieve)
                e tre classi di obesit&agrave; (I, II, III). La <strong>tabella IMC per adulti</strong> si applica alle persone
                di et&agrave; superiore ai 18 anni.
              </p>
              <p>
                Per interpretare il vostro risultato, consultate la <strong>tabella di corrispondenza IMC</strong> qui sopra.
                La <strong>tabella peso altezza IMC</strong> vi permette di vedere direttamente quale peso corrisponde a
                quale categoria per la vostra altezza.
              </p>
            </div>
          </div>

          {/* CTA - Calcola il tuo IMC */}
          <div className="glass-card p-8 text-center">
            <h2 className="text-2xl font-display font-bold mb-4">Calcola il tuo IMC adesso</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Utilizza il nostro calcolatore gratuito per scoprire in quale categoria ti trovi secondo la classificazione OMS.
            </p>
            <Link
              to="/it/imc"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-colors"
            >
              <Scale className="w-5 h-5" />
              Calcola il tuo IMC
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 Tabella IMC</p>
        </footer>
      </div>
    </div>
  );
};

export default TabellaIMC;
