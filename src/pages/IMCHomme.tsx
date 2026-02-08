import { useState, useCallback } from "react";
import { Header } from "@/components/Header";
import { BMICalculator } from "@/components/BMICalculator";
import { BMIGauge } from "@/components/BMIGauge";
import { BMIDetails } from "@/components/BMIDetails";
import { User, Dumbbell, Target, Heart, Scale, TrendingUp, Activity, AlertTriangle, CheckCircle2 } from "lucide-react";

const IMCHomme = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  const handleCalculate = useCallback((calculatedBmi: number, w: number, h: number) => {
    setBmi(calculatedBmi);
    setWeight(w);
    setHeight(h);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-6">
            <User className="w-4 h-4" />
            Calculateur spécial hommes
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-blue-500">IMC Homme</span> : Calculez votre indice
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculateur d'IMC adapté aux hommes avec des conseils personnalisés selon votre profil masculin
          </p>
        </header>

        {/* Calculator Section */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <BMICalculator onCalculate={handleCalculate} />
          <BMIGauge bmi={bmi} />
        </div>

        {/* Details */}
        <div className="mb-8">
          <BMIDetails bmi={bmi} weight={weight} height={height} />
        </div>

        {/* Men Specific Content */}
        <div className="space-y-8">
          {/* IMC Homme Introduction */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <User className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Comprendre l'IMC chez l'homme</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'<strong>IMC homme</strong> se calcule de la même manière que pour les femmes : poids divisé par la taille au carré.
                Cependant, l'interprétation peut varier car les hommes ont naturellement une <strong>masse musculaire plus importante</strong>
                et un <strong>taux de graisse corporelle plus bas</strong> (15-20% contre 20-25% chez les femmes).
              </p>
              <p>
                Un homme peut avoir un <strong>IMC élevé</strong> tout en étant en excellente santé s'il pratique la musculation
                ou un sport intensif. C'est pourquoi le <strong>tour de taille</strong> est souvent un meilleur indicateur
                pour les hommes : il ne devrait pas dépasser <strong>94 cm</strong> (risque modéré) ou <strong>102 cm</strong> (risque élevé).
              </p>
            </div>
          </div>

          {/* Tableau IMC Homme */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Scale className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tableau IMC Homme</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Catégorie</th>
                    <th className="text-left py-3 px-4 font-semibold">IMC</th>
                    <th className="text-left py-3 px-4 font-semibold">Exemple (1m80)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Maigreur
                    </td>
                    <td className="py-3 px-4">&lt; 18,5</td>
                    <td className="py-3 px-4">&lt; 60 kg</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Poids normal
                    </td>
                    <td className="py-3 px-4">18,5 - 24,9</td>
                    <td className="py-3 px-4">60 - 81 kg</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Surpoids
                    </td>
                    <td className="py-3 px-4">25 - 29,9</td>
                    <td className="py-3 px-4">81 - 97 kg</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obésité
                    </td>
                    <td className="py-3 px-4">≥ 30</td>
                    <td className="py-3 px-4">&gt; 97 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Poids idéal homme par taille */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Poids idéal homme selon la taille</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "1m65", min: 50, max: 68, ideal: 60 },
                { height: "1m70", min: 53, max: 72, ideal: 64 },
                { height: "1m75", min: 57, max: 76, ideal: 67 },
                { height: "1m80", min: 60, max: 81, ideal: 71 },
                { height: "1m85", min: 63, max: 85, ideal: 75 },
                { height: "1m90", min: 67, max: 90, ideal: 79 },
              ].map((item) => (
                <div key={item.height} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className="font-semibold text-blue-500">{item.height}</span>
                  <span className="text-muted-foreground">
                    {item.min} - {item.max} kg <span className="text-success">(idéal: {item.ideal} kg)</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Conseils hommes */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-success/10">
                  <Dumbbell className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-xl font-display font-bold">Sport et musculation</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>La <strong>musculation</strong> augmente la masse musculaire et donc l'IMC</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Un homme musclé peut avoir un <strong>IMC de 27-28</strong> sans excès de graisse</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Combinez <strong>cardio et renforcement</strong> pour un équilibre optimal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Visez <strong>150 min d'activité modérée</strong> par semaine minimum</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-warning/10">
                  <Heart className="w-6 h-6 text-warning" />
                </div>
                <h3 className="text-xl font-display font-bold">Santé masculine</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>Le <strong>surpoids abdominal</strong> augmente les risques cardiovasculaires</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>Après <strong>40 ans</strong>, le métabolisme ralentit significativement</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>La <strong>testostérone</strong> diminue avec l'âge, favorisant la prise de graisse</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>Un bilan de santé <strong>annuel</strong> est recommandé après 50 ans</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SEO Content for Men */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Activity className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tout savoir sur l'IMC masculin</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Le <strong>calcul IMC homme</strong> est essentiel pour évaluer votre <strong>corpulence masculine</strong>.
                Que vous cherchiez à connaître votre <strong>IMC homme idéal</strong> ou à vérifier si vous êtes en
                <strong> surpoids homme</strong>, notre <strong>calculateur IMC homme</strong> vous donne une réponse instantanée.
              </p>
              <p>
                L'<strong>indice de masse corporelle homme</strong> se situe idéalement entre 20 et 25. Un <strong>IMC homme normal</strong>
                correspond à un <strong>poids santé homme</strong> qui varie selon votre taille. Pour un homme de <strong>1m75</strong>,
                le <strong>poids idéal homme</strong> est d'environ 67 kg. Pour un homme de <strong>1m80</strong>, il est d'environ 71 kg.
              </p>
              <p>
                Le <strong>calcul du poids idéal homme</strong> prend en compte votre morphologie. Les hommes de type
                <strong> ectomorphe</strong> (minces) auront un IMC naturellement plus bas, tandis que les <strong>mésomorphes</strong>
                (musclés) peuvent avoir un IMC plus élevé sans problème de santé. L'<strong>IMC sportif homme</strong> peut
                atteindre 27-28 chez les pratiquants de musculation intensive.
              </p>
              <p>
                Pour les hommes de plus de <strong>50 ans</strong>, l'<strong>IMC homme 50 ans</strong> peut être légèrement
                plus élevé (jusqu'à 27) sans risque majeur. L'<strong>IMC homme 60 ans</strong> suit la même logique,
                l'important étant de maintenir une activité physique régulière et une alimentation équilibrée.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Calculateur IMC Homme - Outil informatif uniquement</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCHomme;
