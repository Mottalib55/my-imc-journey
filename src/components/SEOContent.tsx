import {
  Scale,
  Calculator,
  Heart,
  TrendingUp,
  Users,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  Activity
} from "lucide-react";

export const SEOContent = () => {
  return (
    <section className="mt-16 space-y-12">
      {/* Main SEO Section */}
      <div className="glass-card p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-primary/10">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold">
            Tout savoir sur l'IMC (Indice de Masse Corporelle)
          </h2>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            L'<strong>IMC</strong>, ou <strong>Indice de Masse Corporelle</strong> (en anglais <em>BMI - Body Mass Index</em>),
            est un indicateur permettant d'évaluer la <strong>corpulence</strong> d'une personne. Utilisé par les professionnels
            de santé du monde entier, ce <strong>calcul du poids idéal</strong> permet de déterminer si une personne est en
            situation de <strong>maigreur</strong>, de <strong>poids normal</strong>, de <strong>surpoids</strong> ou d'<strong>obésité</strong>.
          </p>
        </div>
      </div>

      {/* How to Calculate */}
      <div className="glass-card p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-accent/10">
            <Calculator className="w-6 h-6 text-accent" />
          </div>
          <h2 className="text-2xl font-display font-bold">
            Comment calculer son IMC ?
          </h2>
        </div>

        <div className="space-y-4 text-muted-foreground">
          <p>
            Le <strong>calcul de l'IMC</strong> est simple et rapide. La <strong>formule de l'IMC</strong> est la suivante :
          </p>

          <div className="bg-muted/50 rounded-xl p-6 text-center">
            <p className="text-xl font-mono font-bold text-foreground">
              IMC = Poids (kg) ÷ Taille² (m)
            </p>
          </div>

          <p>
            Par exemple, pour une personne mesurant <strong>1,75 m</strong> et pesant <strong>70 kg</strong> :
          </p>
          <p className="font-medium text-foreground">
            IMC = 70 ÷ (1,75 × 1,75) = 70 ÷ 3,0625 = <strong>22,86</strong>
          </p>
          <p>
            Cette personne a un <strong>IMC normal</strong>, indiquant un <strong>poids santé</strong>.
          </p>
        </div>
      </div>

      {/* IMC Categories */}
      <div className="glass-card p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-success/10">
            <Scale className="w-6 h-6 text-success" />
          </div>
          <h2 className="text-2xl font-display font-bold">
            Tableau des catégories d'IMC selon l'OMS
          </h2>
        </div>

        <p className="text-muted-foreground mb-6">
          L'<strong>Organisation Mondiale de la Santé (OMS)</strong> a établi une classification internationale
          de l'<strong>indice de masse corporelle</strong> pour les adultes :
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold">Catégorie</th>
                <th className="text-left py-3 px-4 font-semibold">IMC (kg/m²)</th>
                <th className="text-left py-3 px-4 font-semibold">Risque pour la santé</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-info" />
                  <span><strong>Maigreur</strong> (insuffisance pondérale)</span>
                </td>
                <td className="py-3 px-4">&lt; 18,5</td>
                <td className="py-3 px-4">Risque de dénutrition</td>
              </tr>
              <tr className="border-b border-border/50 bg-success/5">
                <td className="py-3 px-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-success" />
                  <span><strong>Poids normal</strong> (corpulence normale)</span>
                </td>
                <td className="py-3 px-4">18,5 - 24,9</td>
                <td className="py-3 px-4">Risque faible</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-warning" />
                  <span><strong>Surpoids</strong> (préobésité)</span>
                </td>
                <td className="py-3 px-4">25 - 29,9</td>
                <td className="py-3 px-4">Risque accru</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <span><strong>Obésité modérée</strong> (classe I)</span>
                </td>
                <td className="py-3 px-4">30 - 34,9</td>
                <td className="py-3 px-4">Risque élevé</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <span><strong>Obésité sévère</strong> (classe II)</span>
                </td>
                <td className="py-3 px-4">35 - 39,9</td>
                <td className="py-3 px-4">Risque très élevé</td>
              </tr>
              <tr>
                <td className="py-3 px-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <span><strong>Obésité morbide</strong> (classe III)</span>
                </td>
                <td className="py-3 px-4">≥ 40</td>
                <td className="py-3 px-4">Risque extrêmement élevé</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Why Calculate IMC */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-display font-bold">
              Pourquoi calculer son IMC ?
            </h3>
          </div>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <span>Évaluer son <strong>état nutritionnel</strong> et sa <strong>corpulence</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <span>Prévenir les <strong>maladies cardiovasculaires</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <span>Réduire les risques de <strong>diabète de type 2</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <span>Surveiller son <strong>poids de forme</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <span>Adapter son <strong>régime alimentaire</strong> et son <strong>activité physique</strong></span>
            </li>
          </ul>
        </div>

        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-warning/10">
              <AlertTriangle className="w-6 h-6 text-warning" />
            </div>
            <h3 className="text-xl font-display font-bold">
              Limites de l'IMC
            </h3>
          </div>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <HelpCircle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
              <span>Ne distingue pas la <strong>masse grasse</strong> de la <strong>masse musculaire</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <HelpCircle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
              <span>Moins fiable pour les <strong>sportifs</strong> et <strong>bodybuilders</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <HelpCircle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
              <span>Non adapté aux <strong>femmes enceintes</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <HelpCircle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
              <span>Interprétation différente pour les <strong>personnes âgées</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <HelpCircle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
              <span>Ne prend pas en compte la <strong>répartition des graisses</strong></span>
            </li>
          </ul>
        </div>
      </div>

      {/* Health Risks */}
      <div className="glass-card p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-destructive/10">
            <Activity className="w-6 h-6 text-destructive" />
          </div>
          <h2 className="text-2xl font-display font-bold">
            Risques liés au surpoids et à l'obésité
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-muted-foreground">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Maladies cardiovasculaires</h4>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Hypertension artérielle</strong></li>
              <li>• <strong>Infarctus du myocarde</strong></li>
              <li>• <strong>Accident vasculaire cérébral (AVC)</strong></li>
              <li>• <strong>Insuffisance cardiaque</strong></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Troubles métaboliques</h4>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Diabète de type 2</strong></li>
              <li>• <strong>Cholestérol élevé</strong></li>
              <li>• <strong>Syndrome métabolique</strong></li>
              <li>• <strong>Stéatose hépatique</strong></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Autres complications</h4>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Apnée du sommeil</strong></li>
              <li>• <strong>Arthrose</strong></li>
              <li>• <strong>Certains cancers</strong></li>
              <li>• <strong>Troubles psychologiques</strong></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="glass-card p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-success/10">
            <TrendingUp className="w-6 h-6 text-success" />
          </div>
          <h2 className="text-2xl font-display font-bold">
            Comment atteindre et maintenir un poids santé ?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-muted-foreground">
          <div>
            <h4 className="font-semibold text-foreground mb-3">Alimentation équilibrée</h4>
            <ul className="space-y-2 text-sm">
              <li>• Privilégiez les <strong>fruits et légumes</strong> (5 portions par jour)</li>
              <li>• Choisissez des <strong>protéines maigres</strong> (poisson, volaille, légumineuses)</li>
              <li>• Limitez les <strong>sucres ajoutés</strong> et les <strong>graisses saturées</strong></li>
              <li>• Préférez les <strong>céréales complètes</strong> aux produits raffinés</li>
              <li>• Buvez suffisamment d'<strong>eau</strong> (1,5 à 2 litres par jour)</li>
              <li>• Évitez les <strong>aliments ultra-transformés</strong></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Activité physique régulière</h4>
            <ul className="space-y-2 text-sm">
              <li>• <strong>30 minutes d'exercice</strong> par jour minimum</li>
              <li>• <strong>Marche rapide</strong>, <strong>natation</strong>, <strong>vélo</strong></li>
              <li>• <strong>Renforcement musculaire</strong> 2 fois par semaine</li>
              <li>• Réduisez le temps <strong>assis</strong> et <strong>sédentaire</strong></li>
              <li>• Prenez les <strong>escaliers</strong> plutôt que l'ascenseur</li>
              <li>• Pratiquez une activité qui vous <strong>plaît</strong></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="glass-card p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-age/10">
            <HelpCircle className="w-6 h-6 text-age" />
          </div>
          <h2 className="text-2xl font-display font-bold">
            Questions fréquentes sur l'IMC
          </h2>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-foreground mb-2">
              Quel est l'IMC idéal pour une femme ?
            </h4>
            <p className="text-muted-foreground text-sm">
              L'<strong>IMC idéal pour une femme</strong> se situe entre <strong>18,5 et 24,9 kg/m²</strong>,
              comme pour les hommes. Cependant, les femmes ont naturellement une <strong>masse grasse plus élevée</strong>
              que les hommes, ce qui rend l'interprétation parfois différente. Pendant la <strong>grossesse</strong>,
              l'IMC n'est pas un indicateur fiable.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">
              Quel est l'IMC idéal pour un homme ?
            </h4>
            <p className="text-muted-foreground text-sm">
              L'<strong>IMC idéal pour un homme</strong> est également compris entre <strong>18,5 et 24,9 kg/m²</strong>.
              Attention toutefois : les hommes très musclés peuvent avoir un IMC élevé sans excès de graisse.
              Dans ce cas, le <strong>tour de taille</strong> est un meilleur indicateur.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">
              Comment calculer son IMC enfant ou adolescent ?
            </h4>
            <p className="text-muted-foreground text-sm">
              L'<strong>IMC chez l'enfant</strong> et l'<strong>adolescent</strong> s'interprète différemment.
              On utilise des <strong>courbes de corpulence</strong> adaptées à l'âge et au sexe.
              Consultez votre <strong>pédiatre</strong> ou <strong>médecin traitant</strong> pour une évaluation précise.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">
              L'IMC est-il fiable pour les sportifs ?
            </h4>
            <p className="text-muted-foreground text-sm">
              Non, l'<strong>IMC n'est pas adapté aux sportifs</strong> de haut niveau, notamment ceux pratiquant
              la <strong>musculation</strong> ou le <strong>bodybuilding</strong>. Leur <strong>masse musculaire</strong>
              importante peut fausser le résultat. On préférera alors mesurer le <strong>taux de masse grasse</strong>
              ou le <strong>tour de taille</strong>.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">
              Quelle différence entre IMC et IMG (Indice de Masse Grasse) ?
            </h4>
            <p className="text-muted-foreground text-sm">
              L'<strong>IMC</strong> mesure la corpulence globale, tandis que l'<strong>IMG</strong>
              (<strong>Indice de Masse Grasse</strong>) estime le <strong>pourcentage de graisse corporelle</strong>.
              L'IMG est plus précis car il différencie la graisse de la masse maigre (muscles, os, organes).
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">
              À quelle fréquence calculer son IMC ?
            </h4>
            <p className="text-muted-foreground text-sm">
              Il est recommandé de <strong>calculer son IMC</strong> régulièrement, par exemple tous les
              <strong>3 à 6 mois</strong>, pour suivre l'évolution de son poids. En cas de <strong>régime</strong>
              ou de <strong>programme sportif</strong>, un suivi mensuel peut être utile.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Keywords Section */}
      <div className="glass-card p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-primary/10">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl font-display font-bold">
            Notre calculateur IMC en ligne gratuit
          </h2>
        </div>

        <div className="text-muted-foreground space-y-4">
          <p>
            Notre <strong>calculateur d'IMC gratuit</strong> vous permet de <strong>calculer votre indice de masse corporelle</strong>
            instantanément. Cet outil de <strong>calcul IMC en ligne</strong> est simple, rapide et fiable. Il vous suffit d'entrer
            votre <strong>poids en kilogrammes</strong> et votre <strong>taille en centimètres</strong> pour obtenir votre résultat.
          </p>
          <p>
            Que vous cherchiez à <strong>perdre du poids</strong>, <strong>prendre de la masse</strong> ou simplement
            <strong>surveiller votre santé</strong>, notre <strong>simulateur IMC</strong> vous accompagne avec des
            <strong>conseils personnalisés</strong> adaptés à votre <strong>âge</strong> et à votre <strong>profil</strong>.
          </p>
          <p>
            Utilisez régulièrement notre <strong>calculette IMC</strong> pour suivre votre progression et atteindre
            votre <strong>poids idéal</strong>. N'oubliez pas : l'IMC n'est qu'un indicateur parmi d'autres.
            Pour un bilan complet, consultez un <strong>médecin</strong>, un <strong>nutritionniste</strong> ou un
            <strong>diététicien</strong>.
          </p>
        </div>
      </div>

      {/* All Keywords Variations */}
      <div className="glass-card p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-accent/10">
            <Scale className="w-6 h-6 text-accent" />
          </div>
          <h2 className="text-2xl font-display font-bold">
            Calcul IMC : Simulateur et calculateur pour tous
          </h2>
        </div>

        <div className="text-muted-foreground space-y-4">
          <p>
            Vous cherchez à <strong>calculer votre IMC</strong> ? Notre <strong>simulateur IMC</strong> est l'outil idéal pour
            connaître votre <strong>indice de masse corporelle</strong>. Que vous tapiez "<strong>calcul IMC</strong>",
            "<strong>IMC calcul</strong>", "<strong>calculer IMC</strong>" ou "<strong>IMC calculer</strong>" sur Google,
            vous êtes au bon endroit pour faire votre <strong>test IMC</strong>.
          </p>

          <h3 className="text-lg font-semibold text-foreground pt-4">IMC Homme et IMC Femme</h3>
          <p>
            Notre <strong>calculateur IMC homme</strong> et <strong>calculateur IMC femme</strong> utilise la même formule,
            car l'<strong>IMC homme</strong> et l'<strong>IMC femme</strong> se calculent de manière identique.
            Cependant, l'interprétation peut varier : l'<strong>IMC idéal homme</strong> et l'<strong>IMC idéal femme</strong>
            peuvent être légèrement différents selon la morphologie. Pour savoir <strong>quel est mon IMC</strong>,
            utilisez notre outil de <strong>calcul IMC femme</strong> ou <strong>calcul IMC homme</strong> gratuit.
          </p>

          <h3 className="text-lg font-semibold text-foreground pt-4">IMC selon l'âge</h3>
          <p>
            L'<strong>IMC adulte</strong> s'interprète différemment de l'<strong>IMC enfant</strong> ou de l'<strong>IMC ado</strong>.
            Notre simulateur prend en compte l'<strong>IMC selon l'âge</strong> pour vous donner des conseils adaptés.
            Que vous ayez 20, 40 ou 60 ans, le <strong>calcul IMC age</strong> vous permet d'avoir une vision personnalisée.
            L'<strong>IMC senior</strong> nécessite une attention particulière car les normes évoluent avec l'âge.
          </p>

          <h3 className="text-lg font-semibold text-foreground pt-4">Index IMC et Indice de Masse Corporelle</h3>
          <p>
            L'<strong>index IMC</strong> (ou <strong>indice IMC</strong>) est aussi appelé <strong>indice de masse corporelle</strong>
            en français et <strong>Body Mass Index</strong> (<strong>BMI</strong>) en anglais. Cet <strong>indicateur de corpulence</strong>
            permet de déterminer si vous êtes en situation de <strong>poids normal</strong>, de <strong>surpoids</strong>,
            d'<strong>obésité</strong> ou de <strong>maigreur</strong>. Le <strong>calcul de l'indice de masse corporelle</strong>
            est reconnu par l'<strong>OMS</strong> (Organisation Mondiale de la Santé).
          </p>

          <h3 className="text-lg font-semibold text-foreground pt-4">Simulateur IMC rapide et gratuit</h3>
          <p>
            Notre <strong>IMC simulateur</strong> est 100% <strong>gratuit</strong> et <strong>instantané</strong>.
            Pas besoin de télécharger une application : le <strong>calcul IMC en ligne</strong> se fait directement
            sur cette page. C'est le <strong>simulateur IMC</strong> le plus <strong>rapide</strong> et <strong>facile</strong>
            à utiliser. Faites votre <strong>test IMC gratuit</strong> en quelques secondes !
          </p>

          <h3 className="text-lg font-semibold text-foreground pt-4">Vérifier et connaître son IMC</h3>
          <p>
            <strong>Quel est mon IMC ?</strong> <strong>Comment connaître son IMC ?</strong> <strong>Comment vérifier son IMC ?</strong>
            Ces questions sont fréquentes. Pour <strong>calculer son IMC</strong>, il suffit de connaître son <strong>poids</strong>
            et sa <strong>taille</strong>. Notre outil vous permet de <strong>connaître votre IMC</strong> instantanément
            et de savoir si vous avez un <strong>bon IMC</strong> ou un <strong>mauvais IMC</strong>.
          </p>

          <h3 className="text-lg font-semibold text-foreground pt-4">Calcul du poids idéal</h3>
          <p>
            En plus du <strong>calcul IMC</strong>, notre outil effectue le <strong>calcul du poids idéal</strong> selon votre taille.
            <strong>Calculer son poids idéal</strong> permet de définir un objectif réaliste. Le <strong>poids idéal</strong>,
            aussi appelé <strong>poids de forme</strong> ou <strong>poids santé</strong>, correspond à un <strong>IMC normal</strong>
            entre 18,5 et 24,9. Découvrez votre <strong>poids ideal</strong> avec notre <strong>calculateur de poids idéal</strong>.
          </p>

          <h3 className="text-lg font-semibold text-foreground pt-4">Tableau et courbe IMC</h3>
          <p>
            Consultez notre <strong>tableau IMC</strong> pour comprendre les différentes catégories de corpulence.
            La <strong>courbe IMC</strong> vous permet de visualiser où vous vous situez. Du <strong>IMC maigreur</strong>
            au <strong>IMC obésité</strong>, en passant par le <strong>IMC normal</strong> et le <strong>IMC surpoids</strong>,
            chaque zone correspond à des recommandations spécifiques.
          </p>
        </div>
      </div>

      {/* Long-tail Keywords */}
      <div className="glass-card p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-success/10">
            <Calculator className="w-6 h-6 text-success" />
          </div>
          <h2 className="text-2xl font-display font-bold">
            Calculette IMC : toutes vos questions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground">Comment calculer l'IMC ?</h4>
              <p className="text-sm">
                Pour <strong>calculer l'IMC</strong>, divisez votre poids (kg) par votre taille au carré (m²).
                <strong>Formule IMC</strong> : Poids ÷ (Taille × Taille).
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Comment calculer son IMC soi-même ?</h4>
              <p className="text-sm">
                <strong>Calculer son IMC soi-même</strong> est simple : utilisez notre calculateur ou appliquez
                la formule. Exemple : 70 kg / (1,70 m)² = <strong>IMC de 24,2</strong>.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Quel IMC à 50 ans ?</h4>
              <p className="text-sm">
                L'<strong>IMC à 50 ans</strong> reste le même qu'à tout âge adulte (18,5-24,9), mais un léger
                surpoids est mieux toléré. L'<strong>IMC 50 ans</strong> idéal peut aller jusqu'à 25-27.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Quel IMC à 60 ans ?</h4>
              <p className="text-sm">
                L'<strong>IMC à 60 ans</strong> et au-delà peut être légèrement plus élevé (jusqu'à 27)
                sans risque majeur. L'<strong>IMC senior</strong> tolère quelques kilos supplémentaires.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground">Quel est l'IMC idéal pour une femme de 1m60 ?</h4>
              <p className="text-sm">
                Pour une femme de <strong>1m60</strong>, l'<strong>IMC idéal</strong> correspond à un poids
                entre 47 et 64 kg. Le <strong>poids idéal 1m60</strong> moyen est d'environ 55 kg.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Quel est l'IMC idéal pour une femme de 1m65 ?</h4>
              <p className="text-sm">
                Pour une femme de <strong>1m65</strong>, le poids idéal se situe entre 50 et 68 kg.
                L'<strong>IMC femme 1m65</strong> optimal est d'environ 58 kg.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Quel est l'IMC idéal pour un homme de 1m80 ?</h4>
              <p className="text-sm">
                Pour un homme de <strong>1m80</strong>, l'<strong>IMC idéal</strong> correspond à un poids
                entre 60 et 81 kg. Le <strong>poids idéal homme 1m80</strong> est d'environ 72 kg.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">IMC 25, 30, 35 : que signifient-ils ?</h4>
              <p className="text-sm">
                <strong>IMC 25</strong> = début du surpoids. <strong>IMC 30</strong> = obésité modérée.
                <strong>IMC 35</strong> = obésité sévère. Chaque seuil implique des risques différents.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Natural Text with Keywords */}
      <div className="glass-card p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-primary/10">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl font-display font-bold">
            L'IMC : un outil essentiel pour votre santé
          </h2>
        </div>

        <div className="text-muted-foreground space-y-4 leading-relaxed">
          <p>
            Faire un <strong>calcul IMC</strong> régulier est essentiel pour surveiller sa santé. Que vous préfériez dire
            <strong> IMC calcul</strong>, <strong>calculer IMC</strong> ou <strong>IMC calculer</strong>, le principe reste
            le même : mesurer votre <strong>masse corporelle</strong> par rapport à votre taille. Notre
            <strong> calculateur IMC</strong> (aussi appelé <strong>IMC calculateur</strong>, <strong>calculette IMC</strong>
            ou <strong>IMC calculette</strong>) vous permet d'obtenir votre résultat en quelques secondes.
          </p>

          <p>
            Ce <strong>simulateur IMC</strong> fonctionne comme un véritable <strong>IMC simulateur</strong> médical.
            Vous pouvez faire votre <strong>test IMC</strong> (<strong>IMC test</strong>) autant de fois que vous le souhaitez.
            L'avantage de notre outil <strong>IMC en ligne</strong> ? Il est <strong>IMC gratuit</strong>,
            <strong> IMC rapide</strong> et <strong>IMC facile</strong> à utiliser, accessible depuis n'importe quel appareil.
          </p>

          <p>
            Que vous soyez un <strong>IMC homme</strong> ou une <strong>IMC femme</strong>, notre calculateur s'adapte à tous.
            L'<strong>IMC adulte</strong> se calcule différemment de l'<strong>IMC enfant</strong> ou de l'<strong>IMC ado</strong>,
            c'est pourquoi nous prenons en compte votre <strong>IMC age</strong>. Pour les personnes de plus de 50 ans,
            l'<strong>IMC 50 ans</strong> ou l'<strong>IMC 60 ans</strong> peut être interprété différemment, tout comme
            l'<strong>IMC senior</strong> qui nécessite une lecture adaptée.
          </p>

          <p>
            L'<strong>indice IMC</strong> (ou <strong>index IMC</strong>) est la traduction française de l'<strong>indice masse corporelle</strong>.
            En anglais, on parle de <strong>BMI</strong> (<strong>Body Mass Index</strong>). Cet indicateur vous aide à déterminer
            votre <strong>poids idéal</strong> (<strong>poids ideal</strong>), aussi appelé <strong>poids santé</strong> ou
            <strong> poids forme</strong>. Notre outil effectue également un <strong>calcul poids idéal</strong> personnalisé.
          </p>

          <p>
            Vous vous demandez "<strong>quel est mon IMC</strong>" ou "<strong>mon IMC</strong> est-il normal" ? Notre
            calculateur vous indique si vous avez un <strong>IMC normal</strong>, un <strong>bon IMC</strong>, ou si vous
            vous éloignez de l'<strong>IMC idéal</strong>. L'<strong>IMC moyen</strong> de la population française se situe
            autour de 25, ce qui correspond à la limite du surpoids.
          </p>

          <p>
            Consultez notre <strong>tableau IMC</strong> pour comprendre les différentes catégories. La <strong>courbe IMC</strong>
            vous permet de visualiser votre progression dans le temps. La <strong>formule IMC</strong> est simple :
            poids divisé par taille au carré. Selon votre résultat, vous pouvez être classé en <strong>IMC maigreur</strong>,
            <strong> IMC normal</strong>, <strong>IMC surpoids</strong> ou <strong>IMC obésité</strong>.
          </p>

          <p>
            N'attendez plus pour découvrir votre indice de <strong>masse corporelle</strong>. Utilisez notre calculateur
            gratuit dès maintenant et prenez votre santé en main. Que vous souhaitiez perdre du poids, en prendre,
            ou simplement surveiller votre corpulence, notre outil est là pour vous accompagner dans votre démarche
            de bien-être quotidien.
          </p>
        </div>
      </div>
    </section>
  );
};
