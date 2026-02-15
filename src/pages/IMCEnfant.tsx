import { Header } from "@/components/Header";
import { Baby, AlertTriangle, TrendingUp, BookOpen, Stethoscope, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

const IMCEnfant = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-medium mb-6">
            <Baby className="w-4 h-4" />
            IMC Enfant et Adolescent
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-cyan-500">IMC Enfant et Ado</span> : Courbes du Carnet de Santé
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprendre l'IMC pédiatrique en France : courbes INSERM, rebond d'adiposité et suivi PMI. <strong>17% des enfants français</strong> sont en surpoids (étude Esteban, Santé Publique France).
          </p>
        </header>

        {/* Medical Warning */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Stethoscope className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-destructive mb-2">Consultation médicale recommandée</h3>
              <p className="text-muted-foreground">
                L'IMC chez l'enfant nécessite une <strong>interprétation médicale</strong>.
                Consultez votre <strong>pédiatre</strong>, <strong>médecin traitant</strong> ou le <strong>médecin de PMI</strong> pour un suivi adapté.
                Les courbes de corpulence du <strong>carnet de santé français</strong> sont la référence pour le suivi pondéral.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Stats France - Surpoids infantile */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Globe className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Surpoids infantile en France : les chiffres</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Selon l'étude <strong>Esteban</strong> (Santé Publique France) et le programme <strong>OKkio à la SANTÉ</strong>,
                la France se situe en dessous de la moyenne européenne pour l'obésité infantile, mais les disparités sociales et
                régionales restent préoccupantes.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-cyan-500/5 rounded-xl">
                <div className="text-3xl font-bold text-cyan-500">17%</div>
                <div className="text-sm text-muted-foreground mt-1">enfants en surpoids (6-17 ans)</div>
                <div className="text-xs text-muted-foreground">Santé Publique France</div>
              </div>
              <div className="text-center p-4 bg-cyan-500/5 rounded-xl">
                <div className="text-3xl font-bold text-cyan-500">4%</div>
                <div className="text-sm text-muted-foreground mt-1">enfants obèses</div>
                <div className="text-xs text-muted-foreground">Étude Esteban</div>
              </div>
              <div className="text-center p-4 bg-cyan-500/5 rounded-xl">
                <div className="text-3xl font-bold text-cyan-500">×2</div>
                <div className="text-sm text-muted-foreground mt-1">plus en ZEP vs non-ZEP</div>
                <div className="text-xs text-muted-foreground">DREES</div>
              </div>
            </div>
          </div>

          {/* Carnet de santé français */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <TrendingUp className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Les courbes du carnet de santé français</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Le <strong>carnet de santé</strong> remis à chaque naissance en France contient des <strong>courbes de corpulence</strong>
                mises à jour par l'<strong>INSERM</strong> et le <strong>PNNS</strong>. Ces courbes, basées sur des données de la population française,
                utilisent le système des <strong>percentiles</strong> (appelés aussi « couloirs de croissance ») et sont distinctes
                des courbes OMS utilisées à l'international.
              </p>
              <p>
                Le <strong>rebond d'adiposité</strong> est un concept clé : l'IMC de l'enfant diminue normalement de 1 à 6 ans,
                puis remonte (c'est le rebond). Si ce rebond survient <strong>avant 6 ans</strong>, c'est un signal d'alerte
                majeur de risque de surpoids futur, détectable grâce aux courbes du carnet de santé.
              </p>

              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-4">Lire les courbes françaises (IOTF, carnet de santé)</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong className="text-info">Zone &lt; IOTF-17 :</strong> Maigreur (insuffisance pondérale)</p>
                    <p><strong className="text-success">Zone IOTF-17 à IOTF-25 :</strong> Corpulence normale</p>
                    <p><strong className="text-warning">Zone IOTF-25 à IOTF-30 :</strong> Surpoids</p>
                    <p><strong className="text-destructive">Zone &gt; IOTF-30 :</strong> Obésité</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      Les seuils IOTF (International Obesity Task Force) relient les courbes enfant aux seuils adultes :
                      la courbe IOTF-25 correspond à un IMC adulte de 25 à 18 ans. C'est la référence utilisée
                      dans le <strong>carnet de santé français depuis 2018</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Difference with adults */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <AlertTriangle className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC adulte vs IMC enfant : pourquoi c'est différent</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Contrairement aux adultes, l'<strong>IMC enfant</strong> ne s'interprète pas avec des seuils fixes
                (18,5 / 25 / 30). Chez l'enfant et l'adolescent, le corps évolue constamment, et l'IMC varie
                naturellement selon l'âge et le sexe. C'est pourquoi la <strong>HAS</strong> recommande
                de toujours utiliser les courbes de corpulence et non des valeurs brutes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                <h4 className="font-bold text-destructive mb-2">IMC Adulte</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Seuils fixes universels (OMS)</li>
                  <li>• &lt;18,5 = maigreur</li>
                  <li>• 18,5-25 = normal</li>
                  <li>• 25-30 = surpoids</li>
                  <li>• &gt;30 = obésité</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">IMC Enfant (France)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Courbes IOTF du carnet de santé</li>
                  <li>• Varie selon l'âge (2-18 ans)</li>
                  <li>• Courbes distinctes garçon/fille</li>
                  <li>• Rebond d'adiposité surveillé</li>
                  <li>• Suivi longitudinal (trajectoire)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Age groups */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Baby className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Suivi selon les âges : de la PMI au médecin scolaire</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Nourrisson (0-2 ans)</h4>
                <p className="text-sm text-muted-foreground">
                  L'IMC n'est généralement pas utilisé. La <strong>PMI</strong> (Protection Maternelle et Infantile) suit le poids,
                  la taille et le <strong>périmètre crânien</strong>. <strong>20 visites obligatoires</strong> les 3 premières années en France.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Enfant (2-12 ans)</h4>
                <p className="text-sm text-muted-foreground">
                  IMC interprété avec les courbes IOTF du carnet de santé. Le <strong>rebond d'adiposité</strong> (normalement vers 6 ans)
                  est un repère clé. Le <strong>médecin scolaire</strong> réalise un bilan à 6 ans (entrée en CP).
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Adolescent (12-18 ans)</h4>
                <p className="text-sm text-muted-foreground">
                  Puberté = variations importantes. Courbes spécifiques garçon/fille. Un bilan de santé est proposé
                  à <strong>12 ans</strong> par la <strong>Sécu</strong> (depuis 2024 : « Mon bilan prévention »).
                </p>
              </div>
            </div>
          </div>

          {/* Disparités sociales */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Users className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Disparités sociales et régionales en France</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'obésité infantile en France n'est pas répartie de manière homogène. Les études de la <strong>DREES</strong>
                et de <strong>Santé Publique France</strong> montrent de fortes inégalités sociales et territoriales.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-warning/5 border border-warning/20 rounded-xl p-5">
                  <h4 className="font-bold text-warning mb-3">Inégalités sociales</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>Ouvriers :</strong> 2× plus d'obésité infantile que chez les cadres</li>
                    <li>• Le surpoids est plus fréquent en <strong>ZEP/REP</strong> (Zones d'Éducation Prioritaire)</li>
                    <li>• L'alimentation ultra-transformée touche davantage les milieux défavorisés</li>
                    <li>• L'accès aux activités sportives est inégal</li>
                  </ul>
                </div>
                <div className="bg-warning/5 border border-warning/20 rounded-xl p-5">
                  <h4 className="font-bold text-warning mb-3">Disparités régionales</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>Hauts-de-France :</strong> taux le plus élevé (environ 22%)</li>
                    <li>• <strong>Île-de-France :</strong> taux le plus bas (environ 12%)</li>
                    <li>• <strong>DOM-TOM :</strong> taux supérieurs à la métropole</li>
                    <li>• Les zones rurales sont plus touchées que les zones urbaines</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* When to consult */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Stethoscope className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Quand consulter en France ?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5">
                <h4 className="font-bold text-warning mb-3">Signes d'alerte (HAS)</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Changement brutal de couloir sur la courbe du carnet de santé</li>
                  <li>• IMC au-dessus de la courbe IOTF-25 (surpoids)</li>
                  <li>• IMC en dessous de la courbe IOTF-17 (maigreur)</li>
                  <li>• <strong>Rebond d'adiposité précoce</strong> (avant 6 ans)</li>
                  <li>• Préoccupation de l'enfant pour son poids ou son alimentation</li>
                  <li>• Ascension continue de la courbe d'IMC</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-3">Parcours de soins français</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>Médecin traitant/pédiatre :</strong> 1er interlocuteur, suivi du carnet de santé</li>
                  <li>• <strong>PMI :</strong> suivi gratuit 0-6 ans, visites à domicile possibles</li>
                  <li>• <strong>Médecin scolaire :</strong> bilan de santé en CP et 6e</li>
                  <li>• <strong>RéPPOP</strong> (Réseau de Prévention et Prise en charge de l'Obésité Pédiatrique)</li>
                  <li>• <strong>CSO pédiatrique :</strong> centres spécialisés (CHU) pour obésité sévère</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cantine et PNNS */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <BookOpen className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Cantine scolaire et PNNS : la prévention à la française</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                La France a un modèle unique de <strong>restauration scolaire</strong> encadré par la loi. Les cantines
                doivent respecter les recommandations nutritionnelles du <strong>GEMRCN</strong> (Groupe d'Étude des Marchés
                de Restauration Collective et de Nutrition) : fréquence des légumes, limitation des fritures, portions adaptées.
              </p>
              <p>
                Le <strong>PNNS</strong> (Programme National Nutrition Santé) cible spécifiquement les enfants avec des messages
                comme « <strong>5 fruits et légumes par jour</strong> » et la limitation des écrans. Depuis la <strong>loi Gattaz</strong>
                puis la <strong>loi EGalim</strong> (2018), les distributeurs automatiques de confiseries sont interdits dans les écoles,
                et un menu végétarien hebdomadaire est obligatoire en cantine.
              </p>
              <p>
                Le programme <strong>Vivons en Forme</strong> (anciennement EPODE) accompagne plus de 250 villes en France
                dans la prévention de l'obésité infantile par une approche communautaire.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <BookOpen className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tout savoir sur l'IMC enfant en France</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Le <strong>calcul IMC enfant</strong> utilise la même formule que pour les adultes (poids / taille²),
                mais l'<strong>interprétation IMC enfant</strong> est totalement différente. En France, les courbes IOTF
                du carnet de santé (mises à jour en 2018) sont la référence officielle, à la différence des courbes
                CDC (États-Unis) ou des courbes OMS utilisées dans d'autres pays.
              </p>
              <p>
                L'<strong>IMC adolescent</strong> est particulièrement délicat pendant la puberté.
                Les variations hormonales entraînent des changements corporels importants, différents entre
                <strong> garçons</strong> et <strong>filles</strong>. Le dispositif « <strong>Mon bilan prévention</strong> »
                de la Sécu (depuis 2024) propose un bilan gratuit à 12 ans incluant le suivi de l'IMC.
              </p>
              <p>
                La <strong>PMI</strong> (Protection Maternelle et Infantile), spécificité française, assure un suivi gratuit
                de 0 à 6 ans avec des consultations incluant la pesée, la mesure et le report sur les courbes du carnet de santé.
                En cas de surpoids avéré, le <strong>RéPPOP</strong> (Réseau de Prévention et Prise en charge de l'Obésité Pédiatrique)
                coordonne une prise en charge pluridisciplinaire (diététicien, psychologue, enseignant APA).
              </p>
              <p>
                Pour calculer l'<strong>IMC bébé</strong> ou l'<strong>IMC nourrisson</strong>, les pédiatres
                utilisent plutôt les courbes de croissance poids/taille. L'<strong>IMC enfant 3 ans</strong>,
                <strong> IMC enfant 5 ans</strong> ou <strong>IMC enfant 10 ans</strong> se lit toujours sur les
                courbes IOTF du carnet de santé français.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Vous êtes adulte ?</h3>
            <p className="text-muted-foreground mb-6">
              Utilisez notre calculateur IMC standard pour adultes
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calculer mon IMC adulte
            </Link>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Calculateur IMC Enfant - Outil informatif uniquement</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCEnfant;
