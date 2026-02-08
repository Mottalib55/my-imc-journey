import { Header } from "@/components/Header";
import { AlertTriangle, XCircle, CheckCircle2, Users, Dumbbell, Baby, Clock, Globe, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const LimitesIMC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-warning/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 text-warning text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            Les limites de l'IMC
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-warning">Limites de l'IMC</span> : Ce qu'il ne dit pas
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pourquoi l'IMC n'est pas un indicateur parfait et quand il peut être trompeur
          </p>
        </header>

        {/* Main Warning */}
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-warning mb-2">L'IMC est un outil de dépistage, pas un diagnostic</h3>
              <p className="text-muted-foreground">
                Créé en 1832 par Adolphe Quetelet, l'IMC a été conçu pour des études statistiques de population,
                pas pour évaluer la santé individuelle. Il présente plusieurs limitations importantes.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Main Limitations */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Ce que l'IMC ne mesure pas</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">La composition corporelle</h4>
                    <p className="text-sm text-muted-foreground">
                      L'IMC ne distingue pas le muscle de la graisse. 1 kg de muscle = 1 kg de graisse pour l'IMC.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">La répartition des graisses</h4>
                    <p className="text-sm text-muted-foreground">
                      La graisse abdominale est plus dangereuse que la graisse sous-cutanée. L'IMC ne le voit pas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">La densité osseuse</h4>
                    <p className="text-sm text-muted-foreground">
                      Des os plus lourds augmentent l'IMC sans impacter la santé.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">L'état de santé métabolique</h4>
                    <p className="text-sm text-muted-foreground">
                      Une personne mince peut avoir un mauvais profil métabolique (cholestérol, glycémie).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">L'hydratation</h4>
                    <p className="text-sm text-muted-foreground">
                      La rétention d'eau peut temporairement augmenter l'IMC de 1 à 2 points.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">La forme physique</h4>
                    <p className="text-sm text-muted-foreground">
                      Deux personnes avec le même IMC peuvent avoir des conditions physiques très différentes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Population-specific limitations */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Users className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Populations pour lesquelles l'IMC est inadapté</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Dumbbell className="w-5 h-5 text-orange-500" />
                  <h4 className="font-bold">Sportifs et athlètes</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  La masse musculaire élevée donne un IMC "surpoids" ou "obésité" alors que le taux de graisse est minimal.
                </p>
                <Link to="/imc-sportif" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  En savoir plus →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Baby className="w-5 h-5 text-cyan-500" />
                  <h4 className="font-bold">Enfants et adolescents</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Les seuils adultes ne s'appliquent pas. Il faut utiliser les courbes de corpulence adaptées à l'âge et au sexe.
                </p>
                <Link to="/imc-enfant" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  En savoir plus →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold">Personnes âgées</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  La perte de masse musculaire (sarcopénie) peut masquer un excès de graisse. Un IMC "normal" peut être trompeur.
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-pink-500" />
                  <h4 className="font-bold">Femmes enceintes</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  La prise de poids est normale et souhaitable pendant la grossesse. L'IMC pré-grossesse sert de référence.
                </p>
                <Link to="/imc-femme" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  En savoir plus →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold">Certaines ethnies</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Les populations asiatiques ont des risques accrus à IMC plus bas. L'OMS propose des seuils adaptés (23 au lieu de 25).
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Scale className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold">Morphologies extrêmes</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Les personnes très grandes ou très petites ont des IMC naturellement différents en raison du rapport surface/volume.
                </p>
              </div>
            </div>
          </div>

          {/* Better alternatives */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Alternatives et compléments à l'IMC</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Indicateur</th>
                    <th className="text-left py-3 px-4 font-bold">Ce qu'il mesure</th>
                    <th className="text-left py-3 px-4 font-bold">Seuils recommandés</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Tour de taille</td>
                    <td className="py-3 px-4">Graisse abdominale (viscérale)</td>
                    <td className="py-3 px-4">&lt;94 cm (H) / &lt;80 cm (F)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Rapport taille/hanche</td>
                    <td className="py-3 px-4">Distribution des graisses</td>
                    <td className="py-3 px-4">&lt;0,90 (H) / &lt;0,85 (F)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Rapport taille/taille</td>
                    <td className="py-3 px-4">Graisse centrale relative</td>
                    <td className="py-3 px-4">&lt;0,5 (tour de taille &lt; moitié de la taille)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">% Masse grasse</td>
                    <td className="py-3 px-4">Composition corporelle réelle</td>
                    <td className="py-3 px-4">10-20% (H) / 18-28% (F)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">FFMI</td>
                    <td className="py-3 px-4">Masse maigre (pour sportifs)</td>
                    <td className="py-3 px-4">18-25 (naturel)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Impédancemétrie</td>
                    <td className="py-3 px-4">Eau, muscle, graisse, os</td>
                    <td className="py-3 px-4">Varie selon appareil</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* When IMC is still useful */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Quand l'IMC reste utile</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Malgré ses limites, l'IMC reste un outil précieux dans certains contextes :
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Premier dépistage rapide</strong> : identifier les personnes nécessitant un bilan plus complet</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Études épidémiologiques</strong> : comparer des populations à grande échelle</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Suivi individuel</strong> : observer l'évolution de son poids dans le temps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Adulte sédentaire moyen</strong> : pour cette population, l'IMC est assez fiable</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Comprendre les limites de l'IMC</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Les <strong>limites de l'IMC</strong> sont nombreuses et bien documentées par la communauté scientifique.
                Cet <strong>IMC critique</strong> ne doit pas être interprété seul. Les <strong>défauts de l'IMC</strong>
                incluent l'incapacité à différencier masse grasse et masse maigre.
              </p>
              <p>
                <strong>Pourquoi l'IMC est imparfait</strong> ? Car il s'agit d'un simple ratio mathématique.
                Les <strong>problèmes de l'IMC</strong> sont particulièrement visibles chez les sportifs,
                enfants et personnes âgées. L'<strong>IMC fiable ou pas</strong> dépend du contexte d'utilisation.
              </p>
              <p>
                Les <strong>alternatives à l'IMC</strong> comme le tour de taille ou le taux de masse grasse
                offrent une vision plus complète. <strong>L'IMC est-il fiable</strong> pour tout le monde ?
                Non, mais combiné à d'autres indicateurs, il reste un outil de dépistage utile.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calculez votre IMC en connaissance de cause</h3>
            <p className="text-muted-foreground mb-6">
              Maintenant que vous connaissez les limites, utilisez notre calculateur comme un premier indicateur
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
          <p>© 2024 Limites de l'IMC - Comprendre l'indice de masse corporelle</p>
        </footer>
      </div>
    </div>
  );
};

export default LimitesIMC;
