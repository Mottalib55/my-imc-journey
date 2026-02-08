import { useState, useCallback } from "react";
import { Header } from "@/components/Header";
import { BMICalculator } from "@/components/BMICalculator";
import { BMIGauge } from "@/components/BMIGauge";
import { Dumbbell, AlertTriangle, Target, Scale, Activity, TrendingUp } from "lucide-react";

const IMCSportif = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  const handleCalculate = useCallback((calculatedBmi: number, w: number, h: number) => {
    setBmi(calculatedBmi);
    setWeight(w);
    setHeight(h);
  }, []);

  // Calculate FFMI if we have data
  const ffmi = weight && height ? (weight * 0.85) / Math.pow(height / 100, 2) : null;

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
            Calculateur pour sportifs
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-orange-500">IMC Sportif</span> : Attention aux limites
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pourquoi l'IMC n'est pas adapté aux sportifs et quelles alternatives utiliser
          </p>
        </header>

        {/* Warning Banner */}
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-orange-500 mb-2">Attention : L'IMC est biaisé pour les sportifs</h3>
              <p className="text-muted-foreground">
                L'IMC ne distingue pas la <strong>masse musculaire</strong> de la <strong>masse grasse</strong>.
                Un sportif musclé peut avoir un IMC "surpoids" ou "obésité" tout en étant en excellente santé.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <BMICalculator onCalculate={handleCalculate} />
          <BMIGauge bmi={bmi} />
        </div>

        {/* FFMI Estimation */}
        {bmi && (
          <div className="glass-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-xl font-display font-bold">Estimation FFMI (Fat-Free Mass Index)</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Le FFMI est un meilleur indicateur pour les sportifs car il prend en compte la masse maigre.
            </p>
            <div className="bg-muted/30 rounded-xl p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">FFMI estimé (avec 15% de masse grasse)</p>
              <p className="text-3xl font-bold text-orange-500">{ffmi?.toFixed(1)}</p>
              <p className="text-xs text-muted-foreground mt-2">
                Naturel : 18-25 | Dopage probable : &gt;25
              </p>
            </div>
          </div>
        )}

        <div className="space-y-8">
          {/* Why IMC is biased */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Scale className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Pourquoi l'IMC est biaisé chez les sportifs</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'<strong>IMC sportif</strong> pose problème car la formule ne fait aucune différence entre le poids
                des muscles et celui de la graisse. Or, le <strong>muscle est plus dense que la graisse</strong> :
                à volume égal, il pèse plus lourd.
              </p>
              <p>
                Un bodybuilder de 1m80 pesant 100 kg aura un <strong>IMC de 30,9</strong> (obésité), alors qu'il peut
                avoir seulement <strong>10% de masse grasse</strong> et être en parfaite santé.
              </p>
            </div>
          </div>

          {/* Examples */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Dumbbell className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Exemples concrets</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Musculation / Bodybuilding</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• IMC souvent entre 28-35</li>
                  <li>• Masse grasse : 8-15%</li>
                  <li>• Excellent état de santé</li>
                  <li>• L'IMC dit "obésité" = faux positif</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">CrossFit / Sports de force</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• IMC souvent entre 26-30</li>
                  <li>• Masse grasse : 12-18%</li>
                  <li>• Haute performance athlétique</li>
                  <li>• IMC non représentatif</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Alternatives */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Target className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Alternatives à l'IMC pour sportifs</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">Masse grasse (%)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Mesure directe du taux de graisse corporelle.
                </p>
                <p className="text-xs">
                  <strong>Homme :</strong> 10-20% optimal<br />
                  <strong>Femme :</strong> 18-28% optimal
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">FFMI</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Fat-Free Mass Index : IMC de la masse maigre.
                </p>
                <p className="text-xs">
                  <strong>Naturel :</strong> 18-25<br />
                  <strong>Elite naturel :</strong> 24-26
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">Tour de taille</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Indicateur simple de graisse abdominale.
                </p>
                <p className="text-xs">
                  <strong>Homme :</strong> &lt;94 cm<br />
                  <strong>Femme :</strong> &lt;80 cm
                </p>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC et sport : ce qu'il faut retenir</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Le <strong>calcul IMC sportif</strong> donne souvent des résultats trompeurs. Que vous pratiquiez
                la <strong>musculation</strong>, le <strong>CrossFit</strong>, le <strong>rugby</strong> ou tout autre
                sport de force, votre <strong>IMC athlète</strong> sera probablement surévalué.
              </p>
              <p>
                L'<strong>IMC musculation</strong> est particulièrement biaisé : un bodybuilder naturel peut facilement
                atteindre un IMC de 27-28 tout en étant sec. L'<strong>IMC bodybuilder</strong> professionnel dépasse
                souvent 30, classé "obèse" alors que le taux de graisse est minimal.
              </p>
              <p>
                Pour les sportifs, préférez le <strong>taux de masse grasse</strong>, le <strong>FFMI</strong>
                (Fat-Free Mass Index) ou le simple <strong>tour de taille</strong>. Ces indicateurs sont plus pertinents
                pour évaluer votre composition corporelle et votre santé réelle.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Calculateur IMC Sportif - Outil informatif uniquement</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCSportif;
