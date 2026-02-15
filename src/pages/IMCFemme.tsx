import { useState, useCallback } from "react";
import { Header } from "@/components/Header";
import { BMICalculator } from "@/components/BMICalculator";
import { BMIGauge } from "@/components/BMIGauge";
import { BMIDetails } from "@/components/BMIDetails";
import { Users, Heart, Target, Baby, Scale, Activity, AlertTriangle, CheckCircle2, Sparkles, Globe, BookOpen } from "lucide-react";

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
            <span className="text-pink-500">IMC Femme</span> : Calcul IMC Féminin et Poids Idéal
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            En France, <strong>44% des femmes sont en surpoids ou obèses</strong> (ObÉpi-Roche 2023). Calculateur d'IMC adapté aux femmes françaises avec références HAS, INSERM et PNNS.
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
                L'<strong>IMC femme</strong> se calcule avec la même formule (poids ÷ taille²), mais l'interprétation
                diffère. Selon l'<strong>étude ObÉpi-Roche 2023</strong>, l'IMC moyen des femmes françaises est de <strong>25,1</strong>.
                La taille moyenne féminine en France est de <strong>1,64 m</strong> pour un poids moyen de <strong>67 kg</strong>.
                Les femmes ont naturellement un <strong>taux de graisse corporelle plus élevé</strong> (20-25% contre 15-20%
                chez les hommes), nécessaire au bon fonctionnement hormonal.
              </p>
              <p>
                La <strong>HAS</strong> recommande de compléter l'IMC par la mesure du <strong>tour de taille</strong> :
                il ne devrait pas dépasser <strong>80 cm</strong> (risque modéré) ou <strong>88 cm</strong> (risque élevé).
                En France, <strong>41% des femmes</strong> ont un tour de taille supérieur à 80 cm (Santé Publique France).
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
                    <th className="text-left py-3 px-4 font-semibold">Exemple (1m64, moyenne FR)</th>
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
                    <td className="py-3 px-4">50 - 67 kg</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Surpoids
                    </td>
                    <td className="py-3 px-4">25 - 29,9</td>
                    <td className="py-3 px-4">67 - 80 kg</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obésité
                    </td>
                    <td className="py-3 px-4">≥ 30</td>
                    <td className="py-3 px-4">&gt; 80 kg</td>
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
                { height: "1m58", min: 46, max: 62, ideal: 55 },
                { height: "1m61", min: 48, max: 65, ideal: 57 },
                { height: "1m64 (moy. FR)", min: 50, max: 67, ideal: 59 },
                { height: "1m68", min: 52, max: 70, ideal: 62 },
                { height: "1m72", min: 55, max: 74, ideal: 65 },
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

          {/* Santé féminine en France */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Globe className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Surpoids féminin en France : les chiffres clés</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Selon l'<strong>ObÉpi-Roche 2023</strong>, <strong>27% des femmes françaises sont en surpoids</strong>
                et <strong>17% sont obèses</strong>. L'obésité féminine a <strong>doublé en 25 ans</strong> en France
                (8,3% en 1997 vs 17% en 2023), une progression plus rapide que chez les hommes.
              </p>
              <p>
                Les <strong>inégalités sociales</strong> sont marquées : l'obésité touche <strong>22% des femmes ouvrières</strong>
                contre <strong>9% des cadres</strong> (INSERM CONSTANCES). Géographiquement, les Hauts-de-France et les DOM-TOM
                affichent les taux les plus élevés, tandis que l'Île-de-France et la région PACA restent en dessous de la moyenne nationale.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="p-4 bg-pink-500/5 rounded-xl text-center">
                  <div className="text-3xl font-bold text-pink-500">25,1</div>
                  <div className="text-sm mt-1">IMC moyen femmes FR</div>
                </div>
                <div className="p-4 bg-warning/5 rounded-xl text-center">
                  <div className="text-3xl font-bold text-warning">44%</div>
                  <div className="text-sm mt-1">en surpoids ou obèses</div>
                </div>
                <div className="p-4 bg-purple-500/5 rounded-xl text-center">
                  <div className="text-3xl font-bold text-purple-500">1,64 m</div>
                  <div className="text-sm mt-1">taille moyenne féminine</div>
                </div>
              </div>
            </div>
          </div>

          {/* Parcours de soins femmes */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <BookOpen className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Prise en charge du surpoids féminin en France</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Le système de santé français offre un <strong>parcours de soins complet</strong> pour les femmes
                en surpoids. La <strong>Sécurité Sociale</strong> rembourse à 70% les consultations chez un
                <strong> médecin nutritionniste</strong> (sur prescription) et les bilans biologiques associés.
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Sage-femme</strong> : suivi nutritionnel pendant la grossesse et le post-partum, remboursé à 100% par la Sécu</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>PMI</strong> (Protection Maternelle et Infantile) : suivi gratuit du poids maternel avant et après accouchement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>APA sur ordonnance</strong> : activité physique adaptée prescrite par le médecin, partiellement remboursée par certaines mutuelles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Centres spécialisés de l'obésité</strong> (CSO) : 37 centres en France, prise en charge multidisciplinaire gratuite</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SEO Content enrichi */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Activity className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tout savoir sur l'IMC féminin en France</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Le <strong>calcul IMC femme</strong> est un outil essentiel pour les femmes françaises. Pour une femme
                de taille moyenne (<strong>1m64</strong>), le <strong>poids idéal</strong> se situe entre <strong>50 et 67 kg</strong>.
                L'IMC moyen observé chez les Françaises est de <strong>25,1</strong>, à la limite du surpoids.
              </p>
              <p>
                Les <strong>spécificités hormonales féminines</strong> influencent le poids tout au long de la vie :
                <strong> puberté</strong>, <strong>contraception</strong>, <strong>grossesse</strong> et <strong>ménopause</strong>
                sont autant d'étapes qui modifient la composition corporelle. L'<strong>INSERM</strong> recommande de ne pas
                se focaliser uniquement sur le chiffre de l'IMC mais de considérer le <strong>bien-être global</strong>.
              </p>
              <p>
                En France, la lutte contre la <strong>grossophobie</strong> et les <strong>troubles alimentaires</strong>
                (anorexie, boulimie) est une priorité de santé publique. L'<strong>ANSES</strong> met en garde contre
                les régimes restrictifs qui peuvent être dangereux. Un suivi par un <strong>professionnel de santé</strong>
                est toujours recommandé pour toute démarche de perte de poids.
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
