import { Header } from "@/components/Header";
import { Baby, AlertTriangle, TrendingUp, BookOpen, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const IMCEnfant = () => {
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
            IMC Enfant et Adolescent
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-cyan-500">IMC Enfant</span> : Un calcul différent
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprendre l'IMC chez l'enfant et l'adolescent : courbes de croissance et spécificités
          </p>
        </header>

        {/* Medical Warning */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Stethoscope className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-destructive mb-2">Consultation médicale recommandée</h3>
              <p className="text-muted-foreground">
                L'IMC chez l'enfant nécessite une <strong>interprétation médicale</strong>.
                Consultez votre <strong>pédiatre</strong> ou <strong>médecin traitant</strong> pour un suivi adapté.
                Les informations ci-dessous sont purement informatives.
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
              <h2 className="text-2xl font-display font-bold">Différence entre IMC adulte et enfant</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Contrairement aux adultes, l'<strong>IMC enfant</strong> ne s'interprète pas avec des seuils fixes
                (18,5 / 25 / 30). Chez l'enfant et l'adolescent, le corps évolue constamment, et l'IMC varie
                naturellement selon l'âge et le sexe.
              </p>
              <p>
                On utilise donc des <strong>courbes de corpulence</strong> (ou courbes de percentiles) qui permettent
                de situer l'enfant par rapport aux autres enfants du même âge et du même sexe.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                <h4 className="font-bold text-destructive mb-2">IMC Adulte</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Seuils fixes universels</li>
                  <li>• &lt;18,5 = maigreur</li>
                  <li>• 18,5-25 = normal</li>
                  <li>• 25-30 = surpoids</li>
                  <li>• &gt;30 = obésité</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">IMC Enfant</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Courbes de percentiles</li>
                  <li>• Varie selon l'âge</li>
                  <li>• Différent garçon/fille</li>
                  <li>• Interprétation relative</li>
                  <li>• Suivi de l'évolution</li>
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
              <h2 className="text-2xl font-display font-bold">Courbes de croissance</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Les <strong>courbes de corpulence</strong> sont présentes dans le carnet de santé de votre enfant.
                Elles permettent de suivre l'évolution de l'IMC au fil du temps.
              </p>

              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-4">Comment lire les percentiles ?</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong className="text-info">3e percentile :</strong> Zone de maigreur</p>
                    <p><strong className="text-success">3e-97e percentile :</strong> Zone normale</p>
                    <p><strong className="text-warning">97e percentile :</strong> Surpoids</p>
                    <p><strong className="text-destructive">&gt;97e percentile :</strong> Obésité</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      Un enfant au 50e percentile a un IMC supérieur à 50% des enfants de son âge et inférieur aux 50% restants.
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
              <h2 className="text-2xl font-display font-bold">IMC selon les tranches d'âge</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Nourrisson (0-2 ans)</h4>
                <p className="text-sm text-muted-foreground">
                  L'IMC n'est généralement pas calculé. On utilise les courbes poids/taille et le périmètre crânien.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Enfant (2-12 ans)</h4>
                <p className="text-sm text-muted-foreground">
                  IMC interprété avec les courbes de corpulence. Le "rebond d'adiposité" vers 6 ans est surveillé.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Adolescent (12-18 ans)</h4>
                <p className="text-sm text-muted-foreground">
                  Puberté = variations importantes. Courbes spécifiques garçon/fille essentielles.
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
              <h2 className="text-2xl font-display font-bold">Quand consulter ?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5">
                <h4 className="font-bold text-warning mb-3">Signes d'alerte</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Changement brutal de couloir sur la courbe</li>
                  <li>• IMC &gt; 97e percentile</li>
                  <li>• IMC &lt; 3e percentile</li>
                  <li>• Rebond d'adiposité précoce (&lt;6 ans)</li>
                  <li>• Préoccupation de l'enfant pour son poids</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-3">Suivi régulier</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Pesée et mesure à chaque visite médicale</li>
                  <li>• Report sur les courbes du carnet de santé</li>
                  <li>• Suivi de la trajectoire, pas juste un point</li>
                  <li>• Discussion avec le médecin si inquiétude</li>
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
              <h2 className="text-2xl font-display font-bold">Tout savoir sur l'IMC enfant</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Le <strong>calcul IMC enfant</strong> utilise la même formule que pour les adultes (poids / taille²),
                mais l'<strong>interprétation IMC enfant</strong> est totalement différente. On ne peut pas dire
                qu'un enfant est en surpoids simplement parce que son IMC dépasse 25.
              </p>
              <p>
                L'<strong>IMC adolescent</strong> est particulièrement délicat à interpréter pendant la puberté.
                Les variations hormonales entraînent des changements corporels importants, différents entre
                <strong> IMC garçon</strong> et <strong>IMC fille</strong>.
              </p>
              <p>
                Pour calculer l'<strong>IMC bébé</strong> ou l'<strong>IMC nourrisson</strong>, les pédiatres
                utilisent plutôt les courbes de croissance poids/taille. L'<strong>IMC enfant 3 ans</strong>,
                <strong>IMC enfant 5 ans</strong> ou <strong>IMC enfant 10 ans</strong> se lit toujours sur les
                courbes de percentiles.
              </p>
              <p>
                En cas de doute sur le <strong>poids idéal enfant</strong> ou l'<strong>IMC idéal enfant</strong>,
                consultez votre pédiatre qui pourra analyser la <strong>courbe de corpulence</strong> dans son ensemble.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Vous êtes adulte ?</h3>
            <p className="text-muted-foreground mb-6">
              Utilisez notre calculateur IMC standard pour adultes
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calculer mon IMC adulte
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Calculateur IMC Enfant - Outil informatif uniquement</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCEnfant;
