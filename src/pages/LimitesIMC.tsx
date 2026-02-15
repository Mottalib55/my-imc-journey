import { Header } from "@/components/Header";
import { AlertTriangle, XCircle, CheckCircle2, Users, Dumbbell, Baby, Clock, Globe, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

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
            <span className="text-warning">Limites de l'IMC</span> : Ce que l'Indice ne Dit Pas
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ce que la HAS, l'INSERM et l'ANSES disent des limites de l'IMC — et pourquoi le tour de taille est indispensable en France
          </p>
        </header>

        {/* Main Warning */}
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-warning mb-2">L'IMC est un outil de dépistage, pas un diagnostic — position officielle de la HAS</h3>
              <p className="text-muted-foreground">
                Créé en 1832 par le mathématicien belge <strong>Adolphe Quetelet</strong>, l'IMC a été conçu pour des études
                statistiques de population, pas pour évaluer la santé individuelle. La <strong>HAS</strong> (Haute Autorité de Santé)
                et l'<strong>INSERM</strong> soulignent qu'il doit toujours être complété par le <strong>tour de taille</strong>
                et un <strong>bilan métabolique</strong>.
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
                      L'IMC ne distingue pas le muscle de la graisse. L'INSEP montre que Teddy Riner (IMC ~39) est classé « obèse morbide » alors qu'il est au sommet de sa forme.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">La répartition des graisses</h4>
                    <p className="text-sm text-muted-foreground">
                      La graisse viscérale (abdominale) est la plus dangereuse pour le risque cardiovasculaire. La HAS recommande le tour de taille en complément car l'IMC ne voit pas cette répartition.
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
                    <h4 className="font-bold">L'état de santé métabolique (TOFI)</h4>
                    <p className="text-sm text-muted-foreground">
                      Concept étudié par l'INSERM : les « TOFI » (Thin Outside, Fat Inside) ont un IMC normal mais un profil métabolique dégradé (cholestérol, glycémie, stéatose hépatique).
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
                  En France, les rugbymen du Top 14 ont un IMC de 30-35 (« obèse ») avec seulement 12-18% de masse grasse. L'INSEP utilise la DXA, pas l'IMC.
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
                  Le carnet de santé français utilise les courbes IOTF, pas l'IMC adulte. Le rebond d'adiposité (normalement vers 6 ans) est un marqueur clé suivi par les pédiatres et la PMI.
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
                  La sarcopénie (perte musculaire liée à l'âge) masque l'excès de graisse. L'INSERM recommande pour les seniors un IMC optimal légèrement plus élevé (22-27) et un suivi de la masse musculaire.
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-pink-500" />
                  <h4 className="font-bold">Femmes enceintes</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Le CNGOF recommande de calculer l'IMC avant la grossesse pour adapter le suivi. Prise de poids recommandée en France : 11-16 kg (IMC normal), 7-11 kg (surpoids), 5-9 kg (obésité).
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
              <h2 className="text-2xl font-display font-bold">Alternatives recommandées par la HAS</h2>
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
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 font-medium">Tour de taille (HAS)</td>
                    <td className="py-3 px-4">Graisse abdominale — recommandé par la HAS en 1ère intention</td>
                    <td className="py-3 px-4">&lt;94 cm (H) / &lt;80 cm (F) modéré ; &lt;102 / &lt;88 élevé</td>
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
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Impédancemétrie</td>
                    <td className="py-3 px-4">Eau, muscle, graisse, os — disponible en pharmacie en France</td>
                    <td className="py-3 px-4">Varie selon appareil</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">DXA (INSEP, CHU)</td>
                    <td className="py-3 px-4">Référence médicale — absorptiométrie biphotonique</td>
                    <td className="py-3 px-4">Prescrit par médecin, CHU/INSEP</td>
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

          {/* TOFI et obèse métaboliquement sain */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Globe className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Le paradoxe TOFI et l'obèse métaboliquement sain</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-warning/5 border border-warning/20">
                <h4 className="font-bold mb-3">TOFI : mince mais malade</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Le concept <strong>TOFI</strong> (Thin Outside, Fat Inside), étudié par l'INSERM, désigne des personnes
                  avec un IMC normal (18,5-24,9) mais une accumulation de graisse viscérale. En France, on estime que
                  <strong> 10-15% des personnes</strong> à IMC « normal » ont en réalité un profil métabolique dégradé :
                  résistance à l'insuline, stéatose hépatique, dyslipidémie.
                </p>
                <p className="text-sm text-warning font-medium">
                  Le tour de taille permet de les identifier : &gt;94 cm (H) ou &gt;80 cm (F) même avec un IMC normal.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-info/5 border border-info/20">
                <h4 className="font-bold mb-3">MHO : obèse mais en bonne santé ?</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  À l'inverse, le concept d'<strong>obèse métaboliquement sain</strong> (MHO — Metabolically Healthy Obese)
                  décrit des personnes avec un IMC ≥ 30 mais sans anomalie métabolique. Des études de l'INSERM montrent
                  que ce statut est souvent <strong>transitoire</strong> : 30-50% des MHO développent des complications
                  métaboliques dans les 5-10 ans.
                </p>
                <p className="text-sm text-info font-medium">
                  La HAS recommande quand même un suivi régulier pour les personnes obèses, même sans comorbidité actuelle.
                </p>
              </div>
            </div>
          </div>

          {/* Position de l'ANSES */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Position des autorités sanitaires françaises</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                En France, trois institutions encadrent l'utilisation de l'IMC :
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-muted/30">
                  <h4 className="font-bold text-sm mb-2">HAS</h4>
                  <p className="text-sm">
                    Recommande l'IMC comme <strong>outil de dépistage de 1ère ligne</strong>, toujours complété par
                    le tour de taille. Ne doit pas être utilisé seul pour décider d'un traitement.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-muted/30">
                  <h4 className="font-bold text-sm mb-2">INSERM</h4>
                  <p className="text-sm">
                    Mène des recherches sur les <strong>limites de l'IMC</strong> : TOFI, obèse métaboliquement sain,
                    rôle de la génétique et de l'épigénétique dans la composition corporelle.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-muted/30">
                  <h4 className="font-bold text-sm mb-2">ANSES</h4>
                  <p className="text-sm">
                    Alerte sur les <strong>régimes restrictifs basés sur l'IMC seul</strong> (rapport 2010). Recommande
                    un rééquilibrage alimentaire progressif encadré, pas de régime draconien.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Limites de l'IMC : ce que disent la HAS et l'INSERM</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Les <strong>limites de l'IMC</strong> sont bien documentées par la <strong>HAS</strong>, l'<strong>INSERM</strong>
                et l'<strong>ANSES</strong> en France. L'IMC, inventé par <strong>Adolphe Quetelet</strong> en 1832,
                ne distingue pas la masse grasse de la masse maigre. C'est pourquoi les rugbymen du <strong>Top 14</strong>
                sont classés « obèses » par l'IMC alors que l'<strong>INSEP</strong> les mesure en parfaite condition physique.
              </p>
              <p>
                La HAS recommande de toujours compléter l'IMC par le <strong>tour de taille</strong> et un <strong>bilan métabolique</strong>.
                Le phénomène <strong>TOFI</strong> (mince dehors, gras dedans) touche 10-15% des Français à IMC « normal ».
                À l'inverse, certains « <strong>obèses métaboliquement sains</strong> » ont des bilans sanguins normaux — mais
                l'INSERM montre que ce statut est souvent transitoire.
              </p>
              <p>
                En France, les <strong>alternatives à l'IMC</strong> incluent la <strong>DXA</strong> (CHU, INSEP), l'<strong>impédancemétrie</strong>
                (pharmacies), le <strong>FFMI</strong> (sportifs), et le <strong>rapport taille/hanche</strong>. Le <strong>bilan de
                santé gratuit</strong> de la Sécurité Sociale (tous les 5 ans) inclut déjà l'IMC et le tour de taille.
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


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Limites de l'IMC - Comprendre l'indice de masse corporelle</p>
        </footer>
      </div>
    </div>
  );
};

export default LimitesIMC;
