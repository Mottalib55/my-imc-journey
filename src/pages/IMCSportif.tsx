import { useState, useCallback } from "react";
import { Header } from "@/components/Header";
import { BMICalculator } from "@/components/BMICalculator";
import { BMIGauge } from "@/components/BMIGauge";
import { Dumbbell, AlertTriangle, Target, Scale, Activity, TrendingUp, Globe } from "lucide-react";
import { RelatedPages } from "@/components/RelatedPages";

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
            <span className="text-orange-500">IMC Sportif</span> : Limites du BMI pour les Athlètes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pourquoi l'IMC classe Teddy Riner « obèse » et Antoine Dupont en « surpoids » — et quelles alternatives utiliser pour les sportifs français
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
          {/* Athlètes français célèbres */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Globe className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Des champions français « obèses » selon l'IMC</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'<strong>IMC sportif</strong> pose problème car la formule ne fait aucune différence entre le poids
                des muscles et celui de la graisse. Voici ce que l'IMC dit des plus grands athlètes français :
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-orange-500/5 rounded-xl">
                <div className="text-3xl font-bold text-orange-500">~39</div>
                <div className="text-sm font-bold mt-1">Teddy Riner</div>
                <div className="text-xs text-muted-foreground">Judo, 130 kg / 2m04</div>
                <div className="text-xs text-destructive mt-1">IMC = « obésité morbide »</div>
              </div>
              <div className="text-center p-4 bg-orange-500/5 rounded-xl">
                <div className="text-3xl font-bold text-orange-500">~27</div>
                <div className="text-sm font-bold mt-1">Antoine Dupont</div>
                <div className="text-xs text-muted-foreground">Rugby, 85 kg / 1m76</div>
                <div className="text-xs text-warning mt-1">IMC = « surpoids »</div>
              </div>
              <div className="text-center p-4 bg-orange-500/5 rounded-xl">
                <div className="text-3xl font-bold text-orange-500">~26</div>
                <div className="text-sm font-bold mt-1">Nikola Karabatić</div>
                <div className="text-xs text-muted-foreground">Handball, 100 kg / 1m96</div>
                <div className="text-xs text-warning mt-1">IMC = « surpoids »</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Ces athlètes sont au sommet de leur forme physique, pourtant l'IMC les classe en surpoids ou obèses.
              C'est la preuve que le <strong>muscle est plus dense que la graisse</strong> et que l'IMC est inadapté aux sportifs.
            </p>
          </div>

          {/* Exemples par sport français */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Dumbbell className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC et sports populaires en France</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Rugby (Top 14, XV de France)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Piliers/2e lignes : IMC 30-35 (« obèse »)</li>
                  <li>• Arrières : IMC 26-29 (« surpoids »)</li>
                  <li>• Masse grasse réelle : 12-18%</li>
                  <li>• L'IMC ne tient pas compte du gabarit rugbystique</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Judo / Sports de combat (INSEP)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• IMC souvent 26-32 selon catégorie</li>
                  <li>• France : 1ère nation mondiale en judo olympique</li>
                  <li>• Masse grasse : 8-15%</li>
                  <li>• Problème de « faire le poids » (coupe de poids)</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Football (Ligue 1)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• IMC typique : 22-25 (souvent « normal »)</li>
                  <li>• Masse grasse : 8-12%</li>
                  <li>• Sport d'endurance + explosivité</li>
                  <li>• L'IMC est plus fiable pour ce type de sport</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Musculation / CrossFit</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• IMC souvent 28-35 (« obèse »)</li>
                  <li>• Masse grasse : 8-15%</li>
                  <li>• Fédération française de force (FFForce)</li>
                  <li>• FFMI plus pertinent que l'IMC</li>
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
              <h2 className="text-2xl font-display font-bold">Alternatives à l'IMC pour sportifs en France</h2>
            </div>
            <div className="text-muted-foreground space-y-4 mb-6">
              <p>
                L'<strong>INSEP</strong> (Institut National du Sport, de l'Expertise et de la Performance) et les
                pôles France utilisent des mesures bien plus précises que l'IMC pour évaluer la composition corporelle
                de leurs athlètes :
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">Masse grasse (%) - DXA</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  L'INSEP utilise l'<strong>absorptiométrie DXA</strong> (référence médicale) pour mesurer la composition corporelle.
                </p>
                <p className="text-xs">
                  <strong>Homme sportif :</strong> 8-18%<br />
                  <strong>Femme sportive :</strong> 15-25%
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">FFMI</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Fat-Free Mass Index : évalue la masse maigre rapportée à la taille.
                </p>
                <p className="text-xs">
                  <strong>Naturel :</strong> 18-25<br />
                  <strong>Élite naturel :</strong> 24-26
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">Tour de taille (HAS)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Recommandé par la <strong>HAS</strong> en complément de l'IMC, même pour les sportifs.
                </p>
                <p className="text-xs">
                  <strong>Homme :</strong> &lt;94 cm (modéré) &lt;102 cm (élevé)<br />
                  <strong>Femme :</strong> &lt;80 cm (modéré) &lt;88 cm (élevé)
                </p>
              </div>
            </div>
          </div>

          {/* Sport sur ordonnance et STAPS */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Sport, IMC et système français</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                En France, le <strong>certificat médical de non contre-indication</strong> est obligatoire pour la compétition.
                Les médecins du sport formés (capacité de médecine du sport, DESC) savent que l'IMC est insuffisant
                pour les sportifs et utilisent des mesures complémentaires.
              </p>
              <p>
                Le <strong>sport sur ordonnance</strong> (décret 2016, élargi en 2022) permet aux médecins de prescrire
                de l'<strong>APA (Activité Physique Adaptée)</strong> encadrée par un professionnel STAPS-APA.
                Pour les sportifs en reconversion ou les anciens athlètes, c'est un outil précieux pour maintenir
                une composition corporelle saine après l'arrêt de la compétition.
              </p>
              <p>
                L'<strong>INSEP</strong> (Vincennes), les <strong>CREPS</strong> et les <strong>pôles France</strong>
                disposent de laboratoires d'analyse de la composition corporelle (DXA, impédancemétrie, plis cutanés)
                bien plus fiables que l'IMC seul.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Scale className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC et sport : ce qu'il faut retenir</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Le <strong>calcul IMC sportif</strong> donne souvent des résultats trompeurs. Que vous pratiquiez
                le <strong>rugby</strong>, le <strong>judo</strong>, le <strong>handball</strong>, la <strong>musculation</strong>
                ou le <strong>CrossFit</strong>, votre <strong>IMC athlète</strong> sera probablement surévalué.
              </p>
              <p>
                En France, l'<strong>INSEP</strong> et les fédérations sportives n'utilisent pas l'IMC comme indicateur principal.
                Ils privilégient la <strong>DXA</strong> (absorptiométrie biphotonique), les <strong>plis cutanés</strong>
                et l'<strong>impédancemétrie</strong>. Le <strong>FFMI</strong> (Fat-Free Mass Index) est aussi un bon indicateur
                accessible à tous les sportifs.
              </p>
              <p>
                La <strong>HAS</strong> recommande de toujours compléter l'IMC par le <strong>tour de taille</strong>,
                y compris pour les sportifs. C'est un indicateur simple de graisse abdominale viscérale, la plus
                dangereuse pour la santé cardiovasculaire.
              </p>
            </div>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Calculateur IMC Sportif - Outil informatif uniquement</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCSportif;
