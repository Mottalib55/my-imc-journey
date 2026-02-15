import { Header } from "@/components/Header";
import { Heart, Activity, Apple, Moon, Brain, Scale, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

const SanteEtPoids = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-success/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Santé et bien-être
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-success">Santé et Poids</span> : Guide Nutrition et Poids Idéal
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprendre la relation entre poids, IMC et santé globale
          </p>
        </header>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Scale className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Poids et santé : une relation complexe</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Le <strong>poids</strong> n'est qu'un indicateur parmi d'autres de votre état de santé.
                Un <strong>poids santé</strong> dépend de nombreux facteurs : génétique, morphologie, activité physique,
                alimentation, sommeil et bien-être mental.
              </p>
              <p>
                L'obsession du chiffre sur la balance peut être contre-productive. Il est plus important de
                se concentrer sur des <strong>habitudes de vie saines</strong> que sur un poids cible précis.
                La santé ne se mesure pas uniquement en kilogrammes.
              </p>
            </div>
          </div>

          {/* Health Risks */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Risques liés au poids</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-warning">Risques du surpoids et de l'obésité</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Maladies cardiovasculaires (infarctus, AVC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Diabète de type 2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Hypertension artérielle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Apnée du sommeil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Certains cancers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Problèmes articulaires</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-info">Risques de l'insuffisance pondérale</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Carences nutritionnelles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Système immunitaire affaibli</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Ostéoporose</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Troubles hormonaux</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Fatigue chronique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Problèmes de fertilité</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pillars of health */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">Les 5 piliers d'un poids santé</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-green-500/10">
                    <Apple className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="font-bold">Alimentation</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Privilégiez les aliments non transformés</li>
                  <li>Mangez des légumes à chaque repas</li>
                  <li>Limitez les sucres ajoutés</li>
                  <li>Hydratez-vous suffisamment</li>
                  <li>Écoutez votre faim et satiété</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-orange-500/10">
                    <Activity className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold">Activité physique</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>150 min d'activité modérée/semaine</li>
                  <li>Incluez du renforcement musculaire</li>
                  <li>Bougez régulièrement dans la journée</li>
                  <li>Trouvez une activité qui vous plaît</li>
                  <li>Progressez graduellement</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10">
                    <Moon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="font-bold">Sommeil</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Dormez 7-9 heures par nuit</li>
                  <li>Horaires réguliers</li>
                  <li>Évitez les écrans avant le coucher</li>
                  <li>Chambre fraîche et sombre</li>
                  <li>Le manque de sommeil favorise la prise de poids</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <Brain className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-bold">Santé mentale</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Gérez votre stress</li>
                  <li>Évitez l'alimentation émotionnelle</li>
                  <li>Pratiquez la pleine conscience</li>
                  <li>Acceptez votre corps</li>
                  <li>Consultez si besoin</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-pink-500/10">
                    <Heart className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="font-bold">Suivi médical</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Bilan de santé annuel</li>
                  <li>Suivi du tour de taille</li>
                  <li>Contrôle tension, glycémie, cholestérol</li>
                  <li>Consultez un nutritionniste si besoin</li>
                  <li>Ne suivez pas de régimes extrêmes</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-success/10">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="font-bold">Progression</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Fixez des objectifs réalistes</li>
                  <li>Maximum 0,5-1 kg/semaine</li>
                  <li>Célébrez les petites victoires</li>
                  <li>La constance prime sur l'intensité</li>
                  <li>Pensez long terme</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Healthy weight tips */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Conseils pour un poids santé</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-success">Ce qui fonctionne</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Changements <strong>progressifs et durables</strong> des habitudes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Alimentation <strong>équilibrée</strong>, pas de restriction extrême</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Activité physique <strong>régulière et plaisante</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Sommeil de <strong>qualité</strong> (7-8h/nuit)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Gestion du <strong>stress</strong> et des émotions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Suivi par un <strong>professionnel</strong> si besoin</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-destructive">Ce qui ne fonctionne pas</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Régimes <strong>drastiques</strong> et restrictifs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Compléments <strong>miracles</strong> et pilules minceur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Se peser <strong>tous les jours</strong> (variations normales)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Objectifs de perte de poids <strong>irréalistes</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Comparer son corps aux <strong>autres</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Ignorer les signaux de <strong>faim/satiété</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Santé et poids : l'essentiel</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Maintenir un <strong>poids santé</strong> est important pour votre bien-être global. La relation
                entre <strong>poids et santé</strong> est complexe et dépend de nombreux facteurs. L'<strong>IMC</strong>
                n'est qu'un indicateur parmi d'autres pour évaluer si vous êtes dans une zone de poids sain.
              </p>
              <p>
                Pour <strong>perdre du poids sainement</strong> ou <strong>maintenir son poids</strong>, privilégiez une
                approche globale : alimentation équilibrée, activité physique régulière, sommeil suffisant et
                gestion du stress. Évitez les régimes yo-yo qui sont néfastes pour la santé.
              </p>
              <p>
                Un <strong>mode de vie sain</strong> est plus important qu'un chiffre sur la balance. Concentrez-vous
                sur les <strong>habitudes de vie</strong> plutôt que sur le poids. En cas de doute, consultez un
                professionnel de santé pour un accompagnement personnalisé.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calculez votre IMC</h3>
            <p className="text-muted-foreground mb-6">
              Premier indicateur pour évaluer votre poids santé
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calculer mon IMC
            </Link>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Santé et Poids - Guide bien-être</p>
        </footer>
      </div>
    </div>
  );
};

export default SanteEtPoids;
