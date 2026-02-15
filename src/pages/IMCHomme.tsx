import { useState, useCallback } from "react";
import { Header } from "@/components/Header";
import { BMICalculator } from "@/components/BMICalculator";
import { BMIGauge } from "@/components/BMIGauge";
import { BMIDetails } from "@/components/BMIDetails";
import { User, Dumbbell, Target, Heart, Scale, TrendingUp, Activity, AlertTriangle, CheckCircle2, Globe, BookOpen } from "lucide-react";
import { RelatedPages } from "@/components/RelatedPages";

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
            <span className="text-blue-500">IMC Homme</span> : Calcul IMC Masculin et Poids Idéal
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            En France, <strong>47% des hommes sont en surpoids ou obèses</strong> (Santé Publique France, ObÉpi-Roche 2023). Calculateur d'IMC adapté au profil masculin français avec des références HAS et INSERM.
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
                L'<strong>IMC homme</strong> se calcule par la formule poids ÷ taille². Selon l'<strong>étude ObÉpi-Roche 2023</strong>,
                l'IMC moyen des hommes français est de <strong>25,8</strong>, légèrement au-dessus du seuil de surpoids.
                La taille moyenne masculine en France est de <strong>1,78 m</strong> pour un poids moyen de <strong>81 kg</strong>.
              </p>
              <p>
                Les hommes ont naturellement une <strong>masse musculaire plus importante</strong> (15-20% de graisse corporelle
                contre 20-25% chez les femmes), ce qui peut fausser l'interprétation de l'IMC. La <strong>HAS</strong> (Haute
                Autorité de Santé) recommande de compléter l'IMC par la mesure du <strong>tour de taille</strong> :
                il ne devrait pas dépasser <strong>94 cm</strong> (risque modéré) ou <strong>102 cm</strong> (risque élevé selon l'OMS).
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
                    <th className="text-left py-3 px-4 font-semibold">Exemple (1m78, moyenne FR)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Maigreur
                    </td>
                    <td className="py-3 px-4">&lt; 18,5</td>
                    <td className="py-3 px-4">&lt; 59 kg</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Poids normal
                    </td>
                    <td className="py-3 px-4">18,5 - 24,9</td>
                    <td className="py-3 px-4">59 - 79 kg</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Surpoids
                    </td>
                    <td className="py-3 px-4">25 - 29,9</td>
                    <td className="py-3 px-4">79 - 95 kg</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obésité
                    </td>
                    <td className="py-3 px-4">≥ 30</td>
                    <td className="py-3 px-4">&gt; 95 kg</td>
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
                { height: "1m68", min: 52, max: 70, ideal: 62 },
                { height: "1m72", min: 55, max: 74, ideal: 65 },
                { height: "1m75", min: 57, max: 76, ideal: 67 },
                { height: "1m78 (moy. FR)", min: 59, max: 79, ideal: 70 },
                { height: "1m82", min: 61, max: 83, ideal: 73 },
                { height: "1m86", min: 64, max: 86, ideal: 76 },
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

          {/* Santé masculine en France : les chiffres clés */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Globe className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Santé masculine en France : les chiffres clés</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Selon l'enquête <strong>ObÉpi-Roche 2023</strong> et les données de <strong>Santé Publique France</strong>,
                la situation des hommes français est préoccupante : <strong>36% sont en surpoids</strong> (IMC 25-30) et
                <strong> 17% sont obèses</strong> (IMC ≥ 30). Les hommes sont plus touchés que les femmes (47% vs 44% en surpoids/obésité).
              </p>
              <p>
                Les <strong>disparités régionales</strong> sont marquées : le nord de la France (Hauts-de-France, Grand Est) affiche
                des taux de surpoids masculin supérieurs à <strong>52%</strong>, tandis que l'Île-de-France et l'Occitanie restent
                autour de <strong>42%</strong>. Les catégories socio-professionnelles jouent aussi un rôle : les ouvriers ont un
                IMC moyen de <strong>26,3</strong> contre <strong>25,1</strong> chez les cadres (INSERM, CONSTANCES).
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="p-4 bg-blue-500/5 rounded-xl text-center">
                  <div className="text-3xl font-bold text-blue-500">25,8</div>
                  <div className="text-sm mt-1">IMC moyen hommes FR</div>
                </div>
                <div className="p-4 bg-warning/5 rounded-xl text-center">
                  <div className="text-3xl font-bold text-warning">47%</div>
                  <div className="text-sm mt-1">en surpoids ou obèses</div>
                </div>
                <div className="p-4 bg-destructive/5 rounded-xl text-center">
                  <div className="text-3xl font-bold text-destructive">1,78 m</div>
                  <div className="text-sm mt-1">taille moyenne masculine</div>
                </div>
              </div>
            </div>
          </div>

          {/* Parcours de soins en France */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <BookOpen className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Surpoids masculin : le parcours de soins en France</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                La <strong>HAS</strong> (Haute Autorité de Santé) a défini un parcours de soins spécifique pour les hommes
                en surpoids ou obèses. Le <strong>médecin traitant</strong> est le premier interlocuteur et peut orienter vers :
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Nutritionniste ou diététicien</strong> : consultations remboursées à 70% par la Sécurité Sociale sur prescription médicale (bilan initial + suivi)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Programme PNNS « Manger Bouger »</strong> : recommandations adaptées aux hommes actifs, incluant les besoins caloriques de 2 200-2 600 kcal/jour</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>APA (Activité Physique Adaptée)</strong> : prescrite sur ordonnance depuis 2016 (décret « Sport sur ordonnance »), remboursée par certaines mutuelles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Chirurgie bariatrique</strong> : prise en charge à 100% par l'Assurance Maladie pour un IMC ≥ 40, ou ≥ 35 avec comorbidités (après 6-12 mois de suivi pluridisciplinaire)</span>
                </li>
              </ul>
              <p>
                Le <strong>bilan de santé gratuit</strong> de la Sécurité Sociale (examen de prévention en santé) est disponible
                tous les 5 ans et inclut IMC, tour de taille, bilan lipidique et glycémie à jeun — particulièrement recommandé
                pour les hommes de plus de <strong>40 ans</strong> avec un IMC supérieur à 25.
              </p>
            </div>
          </div>

          {/* SEO Content enrichi */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Activity className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tout savoir sur l'IMC masculin en France</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Le <strong>calcul IMC homme</strong> est essentiel pour évaluer votre <strong>corpulence masculine</strong>.
                Pour un homme français moyen de <strong>1m78</strong>, le <strong>poids idéal</strong> se situe entre
                <strong> 59 et 79 kg</strong> (IMC 18,5 à 24,9). L'IMC moyen observé en France est de <strong>25,8</strong>,
                soit légèrement en surpoids.
              </p>
              <p>
                Le <strong>calcul du poids idéal homme</strong> prend en compte votre morphologie. Les hommes de type
                <strong> ectomorphe</strong> (minces) auront un IMC naturellement plus bas, tandis que les <strong>mésomorphes</strong>
                (musclés) peuvent avoir un IMC plus élevé sans problème de santé. L'<strong>IMC sportif homme</strong> peut
                atteindre 27-28 chez les pratiquants de musculation intensive.
              </p>
              <p>
                L'<strong>INSERM</strong> a démontré que le risque cardiovasculaire chez les hommes français augmente
                significativement dès un IMC de <strong>27</strong>. Pour les hommes de plus de <strong>50 ans</strong>,
                l'<strong>IMC homme 50 ans</strong> peut tolérer un léger surpoids (jusqu'à 27) si le tour de taille
                reste inférieur à <strong>94 cm</strong> et que le bilan lipidique est normal.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}

        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Calculateur IMC Homme - Outil informatif uniquement</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCHomme;
