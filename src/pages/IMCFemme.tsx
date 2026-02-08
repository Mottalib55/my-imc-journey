import { useState, useCallback } from "react";
import { Header } from "@/components/Header";
import { BMICalculator } from "@/components/BMICalculator";
import { BMIGauge } from "@/components/BMIGauge";
import { BMIDetails } from "@/components/BMIDetails";
import { Users, Heart, Target, Baby, Scale, Activity, AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";

const IMCFemme = () => {
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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-pink-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-500 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Calculateur spécial femmes
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-pink-500">IMC Femme</span> : Calculez votre indice
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculateur d'IMC adapté aux femmes avec des conseils personnalisés pour chaque étape de votre vie
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

        {/* Women Specific Content */}
        <div className="space-y-8">
          {/* IMC Femme Introduction */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Users className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Comprendre l'IMC chez la femme</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'<strong>IMC femme</strong> se calcule avec la même formule que pour les hommes, mais l'interprétation
                diffère légèrement. Les femmes ont naturellement un <strong>taux de graisse corporelle plus élevé</strong>
                (20-25% contre 15-20% chez les hommes), ce qui est tout à fait normal et nécessaire pour le bon
                fonctionnement hormonal.
              </p>
              <p>
                Le <strong>tour de taille idéal</strong> pour une femme ne devrait pas dépasser <strong>80 cm</strong>
                (risque modéré) ou <strong>88 cm</strong> (risque élevé). Cet indicateur est souvent plus pertinent
                que l'IMC seul car il mesure la graisse abdominale, plus dangereuse pour la santé.
              </p>
            </div>
          </div>

          {/* Tableau IMC Femme */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Scale className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tableau IMC Femme</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Catégorie</th>
                    <th className="text-left py-3 px-4 font-semibold">IMC</th>
                    <th className="text-left py-3 px-4 font-semibold">Exemple (1m65)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Maigreur
                    </td>
                    <td className="py-3 px-4">&lt; 18,5</td>
                    <td className="py-3 px-4">&lt; 50 kg</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Poids normal
                    </td>
                    <td className="py-3 px-4">18,5 - 24,9</td>
                    <td className="py-3 px-4">50 - 68 kg</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Surpoids
                    </td>
                    <td className="py-3 px-4">25 - 29,9</td>
                    <td className="py-3 px-4">68 - 81 kg</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obésité
                    </td>
                    <td className="py-3 px-4">≥ 30</td>
                    <td className="py-3 px-4">&gt; 81 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Poids idéal femme par taille */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Target className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Poids idéal femme selon la taille</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "1m55", min: 44, max: 60, ideal: 53 },
                { height: "1m60", min: 47, max: 64, ideal: 56 },
                { height: "1m65", min: 50, max: 68, ideal: 60 },
                { height: "1m70", min: 53, max: 72, ideal: 64 },
                { height: "1m75", min: 57, max: 76, ideal: 67 },
                { height: "1m80", min: 60, max: 81, ideal: 71 },
              ].map((item) => (
                <div key={item.height} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className="font-semibold text-pink-500">{item.height}</span>
                  <span className="text-muted-foreground">
                    {item.min} - {item.max} kg <span className="text-success">(idéal: {item.ideal} kg)</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Spécificités femmes */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-purple-500/10">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-display font-bold">Cycle hormonal et poids</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Le poids peut varier de <strong>1 à 3 kg</strong> selon le cycle menstruel</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>La <strong>rétention d'eau</strong> est normale avant les règles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Pesez-vous toujours au <strong>même moment</strong> du cycle</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>La <strong>ménopause</strong> modifie la répartition des graisses</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-pink-500/10">
                  <Baby className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-display font-bold">Grossesse et IMC</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>L'IMC <strong>ne s'applique pas</strong> pendant la grossesse</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Prise de poids recommandée : <strong>11-16 kg</strong> (IMC normal)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Consultez votre <strong>gynécologue</strong> pour un suivi adapté</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>La perte de poids post-partum prend du <strong>temps</strong></span>
                </li>
              </ul>
            </div>
          </div>

          {/* Ménopause */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC et ménopause</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                À la <strong>ménopause</strong>, les changements hormonaux favorisent la prise de poids, notamment
                au niveau abdominal. Le métabolisme ralentit et la masse musculaire diminue naturellement.
                Il est donc normal de prendre quelques kilos après 50 ans.
              </p>
              <p>
                Pour maintenir un <strong>IMC femme 50 ans</strong> ou <strong>IMC femme 60 ans</strong> dans les normes,
                privilégiez une alimentation riche en <strong>protéines</strong> et en <strong>calcium</strong>,
                et maintenez une activité physique régulière incluant du <strong>renforcement musculaire</strong>.
              </p>
            </div>
          </div>

          {/* SEO Content for Women */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Activity className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tout savoir sur l'IMC féminin</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Le <strong>calcul IMC femme</strong> est un outil essentiel pour évaluer votre <strong>corpulence féminine</strong>.
                Que vous cherchiez à connaître votre <strong>IMC femme idéal</strong> ou à vérifier votre <strong>poids santé femme</strong>,
                notre <strong>calculateur IMC femme</strong> vous donne une réponse instantanée et personnalisée.
              </p>
              <p>
                L'<strong>indice de masse corporelle femme</strong> idéal se situe entre 19 et 24. Un <strong>IMC femme normal</strong>
                correspond à un poids qui varie selon votre taille. Pour une femme de <strong>1m60</strong>,
                le <strong>poids idéal femme</strong> est d'environ 56 kg. Pour une femme de <strong>1m65</strong>, il est d'environ 60 kg.
              </p>
              <p>
                Le <strong>calcul du poids idéal femme</strong> prend en compte plusieurs facteurs. Les femmes de morphologie
                <strong> gracile</strong> auront un IMC naturellement plus bas, tandis que les morphologies plus <strong>athlétiques</strong>
                peuvent avoir un IMC légèrement plus élevé. L'<strong>IMC femme sportive</strong> peut être plus élevé en raison
                de la masse musculaire.
              </p>
              <p>
                Pour les femmes de plus de <strong>40 ans</strong>, l'<strong>IMC femme 40 ans</strong> reste le même,
                mais le corps change. L'<strong>IMC femme 50 ans</strong> et l'<strong>IMC femme 60 ans</strong> peuvent
                tolérer quelques kilos supplémentaires, l'important étant de rester active et de bien s'alimenter.
                N'oubliez pas que l'<strong>IMC enceinte</strong> ne s'applique pas pendant la grossesse.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Calculateur IMC Femme - Outil informatif uniquement</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCFemme;
