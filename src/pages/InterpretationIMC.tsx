import { Header } from "@/components/Header";
import { BookOpen, TrendingUp, TrendingDown, Target, AlertTriangle, CheckCircle2, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const InterpretationIMC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Guide d'interprétation
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Interprétation IMC</span> : Comprendre vos résultats
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comment lire et interpréter correctement votre Indice de Masse Corporelle
          </p>
        </header>

        <div className="space-y-8">
          {/* What does IMC mean */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Que signifie votre IMC ?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'<strong>IMC</strong> (Indice de Masse Corporelle) est un indicateur qui permet d'évaluer
                rapidement si votre poids est adapté à votre taille. Il se calcule en divisant le poids (en kg)
                par la taille au carré (en mètres).
              </p>
              <p>
                <strong>Important :</strong> L'IMC est un outil de dépistage, pas un diagnostic. Un médecin
                prendra en compte d'autres facteurs (tour de taille, masse musculaire, historique médical)
                pour évaluer votre état de santé.
              </p>
            </div>
          </div>

          {/* Interpretation by category */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Interprétation par catégorie</h2>
            </div>

            <div className="space-y-6">
              {/* Underweight */}
              <div className="border-l-4 border-info pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="w-5 h-5 text-info" />
                  <h3 className="font-bold text-lg">IMC inférieur à 18,5 : Maigreur</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Un IMC sous 18,5 indique une insuffisance pondérale. Cela peut signifier :
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Apports caloriques insuffisants</li>
                  <li>• Métabolisme très rapide</li>
                  <li>• Possible trouble alimentaire</li>
                  <li>• Risque de carences nutritionnelles</li>
                </ul>
                <p className="text-info font-medium mt-3">
                  Conseil : Consultez un médecin pour identifier la cause et adapter votre alimentation.
                </p>
              </div>

              {/* Normal */}
              <div className="border-l-4 border-success pl-6 py-4 bg-success/5 rounded-r-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <h3 className="font-bold text-lg">IMC entre 18,5 et 24,9 : Poids normal</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  C'est la zone idéale ! Votre poids est équilibré par rapport à votre taille.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Risques de santé minimisés</li>
                  <li>• Bon équilibre énergétique</li>
                  <li>• Objectif à maintenir</li>
                </ul>
                <p className="text-success font-medium mt-3">
                  Conseil : Maintenez vos bonnes habitudes alimentaires et votre activité physique.
                </p>
              </div>

              {/* Overweight */}
              <div className="border-l-4 border-warning pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-warning" />
                  <h3 className="font-bold text-lg">IMC entre 25 et 29,9 : Surpoids</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Votre poids dépasse légèrement la norme. C'est un signal d'alerte, pas une urgence.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Risque accru de maladies chroniques</li>
                  <li>• Tension artérielle potentiellement élevée</li>
                  <li>• Peut être dû à la masse musculaire (sportifs)</li>
                </ul>
                <p className="text-warning font-medium mt-3">
                  Conseil : Adoptez une alimentation équilibrée et augmentez votre activité physique.
                </p>
              </div>

              {/* Obesity */}
              <div className="border-l-4 border-destructive pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <h3 className="font-bold text-lg">IMC supérieur à 30 : Obésité</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  L'obésité augmente significativement les risques pour la santé.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Classe I (30-34,9) : Obésité modérée</li>
                  <li>• Classe II (35-39,9) : Obésité sévère</li>
                  <li>• Classe III (≥40) : Obésité morbide</li>
                </ul>
                <p className="text-destructive font-medium mt-3">
                  Conseil : Une consultation médicale est recommandée pour un accompagnement personnalisé.
                </p>
              </div>
            </div>
          </div>

          {/* Factors to consider */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Facteurs à prendre en compte</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">L'IMC peut être faussé par :</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>La masse musculaire</strong> : les sportifs ont un IMC plus élevé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>L'âge</strong> : les seniors perdent de la masse musculaire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Le sexe</strong> : les femmes ont naturellement plus de graisse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>L'origine ethnique</strong> : seuils différents selon les populations</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Indicateurs complémentaires :</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Tour de taille</strong> : &lt;94 cm (H) / &lt;80 cm (F)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Rapport taille/hanche</strong> : distribution des graisses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Masse grasse %</strong> : composition corporelle réelle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Bilan sanguin</strong> : cholestérol, glycémie, etc.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* What to do with your result */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Que faire avec votre résultat ?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Votre IMC n'est qu'un point de départ. Voici les prochaines étapes recommandées :
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Notez votre IMC actuel</strong> comme référence</li>
                <li><strong>Mesurez votre tour de taille</strong> pour compléter l'évaluation</li>
                <li><strong>Consultez un professionnel de santé</strong> si votre IMC est hors normes</li>
                <li><strong>Fixez des objectifs réalistes</strong> : perdre 0,5 à 1 kg par semaine maximum</li>
                <li><strong>Suivez votre évolution</strong> : pesez-vous une fois par semaine, même jour, même heure</li>
              </ol>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Comprendre l'interprétation de l'IMC</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'<strong>interprétation IMC</strong> est essentielle pour comprendre ce que signifie
                votre <strong>résultat IMC</strong>. Savoir <strong>lire son IMC</strong> permet
                d'identifier si l'on se trouve dans une zone de poids sain ou si des ajustements
                sont nécessaires.
              </p>
              <p>
                <strong>Comment interpréter l'IMC</strong> ? Les catégories OMS définissent clairement
                ce que <strong>signifie un IMC</strong> de 22, 25 ou 30. L'<strong>analyse IMC</strong>
                doit toujours tenir compte du contexte : âge, sexe, activité physique.
              </p>
              <p>
                L'<strong>IMC idéal</strong> se situe entre 18,5 et 24,9. <strong>Comprendre son IMC</strong>
                c'est aussi savoir que cet indice a des limites. L'<strong>explication IMC</strong>
                complète inclut la prise en compte d'autres indicateurs comme le tour de taille.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calculez votre IMC maintenant</h3>
            <p className="text-muted-foreground mb-6">
              Utilisez notre calculateur gratuit pour connaître votre indice de masse corporelle
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calculer mon IMC
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Interprétation IMC - Guide complet</p>
        </footer>
      </div>
    </div>
  );
};

export default InterpretationIMC;
