import { Header } from "@/components/Header";
import { BookOpen, TrendingUp, TrendingDown, Target, AlertTriangle, CheckCircle2, Scale, Globe } from "lucide-react";
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
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Guide HAS pour interpréter votre résultat IMC en France — seuils OMS, tour de taille, parcours de soins et remboursement Sécurité Sociale
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
                L'<strong>IMC</strong> (Indice de Masse Corporelle) est l'indicateur de référence utilisé par la
                <strong> HAS</strong> (Haute Autorité de Santé) en France pour évaluer la corpulence. Il se calcule
                en divisant le poids (en kg) par la taille au carré (en mètres). L'IMC moyen des Français est de
                <strong> 25,4</strong> (ObÉpi-Roche 2023), ce qui place la population juste à la limite du surpoids.
              </p>
              <p>
                <strong>Important :</strong> La HAS précise que l'IMC est un <strong>outil de dépistage</strong>, pas un
                diagnostic médical. Votre médecin traitant prendra en compte d'autres facteurs (tour de taille,
                bilan sanguin, antécédents familiaux, mode de vie) pour évaluer votre état de santé global.
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
                  Un IMC sous 18,5 indique une insuffisance pondérale. En France, environ <strong>5% de la population</strong> est
                  concernée (ObÉpi-Roche 2023), davantage chez les jeunes femmes. Cela peut signifier :
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Apports caloriques insuffisants ou déséquilibre alimentaire</li>
                  <li>• Métabolisme très rapide ou pathologie (hyperthyroïdie, maladie cœliaque)</li>
                  <li>• Possible trouble du comportement alimentaire (anorexie, boulimie)</li>
                  <li>• Risque de carences (fer, vitamine D, calcium — fréquent en France)</li>
                </ul>
                <p className="text-info font-medium mt-3">
                  En France : Consultez votre médecin traitant qui pourra prescrire un bilan nutritionnel
                  et vous orienter vers un nutritionniste (remboursé Sécu) ou un diététicien.
                </p>
              </div>

              {/* Normal */}
              <div className="border-l-4 border-success pl-6 py-4 bg-success/5 rounded-r-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <h3 className="font-bold text-lg">IMC entre 18,5 et 24,9 : Poids normal</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  C'est la zone recommandée par la <strong>HAS</strong> ! Environ <strong>47% des Français</strong> se
                  situent dans cette tranche (ObÉpi-Roche 2023). Votre poids est équilibré par rapport à votre taille.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Risques de maladies cardiovasculaires, diabète et cancers minimisés</li>
                  <li>• Bon équilibre énergétique conforme aux recommandations PNNS</li>
                  <li>• Objectif : maintenir grâce aux repères « Manger Bouger »</li>
                </ul>
                <p className="text-success font-medium mt-3">
                  Conseil PNNS : 5 fruits et légumes/jour, 30 min d'activité physique, limiter les ultra-transformés (Nova 4).
                </p>
              </div>

              {/* Overweight */}
              <div className="border-l-4 border-warning pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-warning" />
                  <h3 className="font-bold text-lg">IMC entre 25 et 29,9 : Surpoids</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  <strong>30% des Français</strong> sont en surpoids (ObÉpi-Roche 2023). C'est un signal d'alerte
                  qui mérite attention, pas une urgence. La HAS recommande de mesurer aussi le tour de taille.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Risque accru de diabète type 2, HTA, dyslipidémie</li>
                  <li>• Tour de taille à surveiller : &gt;94 cm (H) ou &gt;80 cm (F) = risque majoré</li>
                  <li>• Peut être dû à la masse musculaire (sportifs — voir <Link to="/imc-sportif" className="text-primary hover:underline">IMC Sportif</Link>)</li>
                </ul>
                <p className="text-warning font-medium mt-3">
                  Parcours HAS : Médecin traitant → bilan sanguin (glycémie, lipides) → rééquilibrage alimentaire → sport sur ordonnance si ALD.
                </p>
              </div>

              {/* Obesity */}
              <div className="border-l-4 border-destructive pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <h3 className="font-bold text-lg">IMC supérieur à 30 : Obésité</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  <strong>17% des Français</strong> sont obèses (ObÉpi-Roche 2023), soit le triple d'il y a 30 ans.
                  L'obésité augmente significativement les risques de maladies chroniques.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Classe I (30-34,9) : Obésité modérée — suivi médecin + diététicien recommandé</li>
                  <li>• Classe II (35-39,9) : Obésité sévère — orientation CSO (Centre Spécialisé de l'Obésité)</li>
                  <li>• Classe III (≥40) : Obésité morbide — chirurgie bariatrique envisageable (prise en charge 100% Sécu)</li>
                </ul>
                <p className="text-destructive font-medium mt-3">
                  En France : IMC ≥ 35 avec comorbidités ou ≥ 40 → parcours HAS de 6-12 mois → chirurgie bariatrique remboursée à 100%.
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
                    <span><strong>Tour de taille (HAS)</strong> : &lt;94 cm (H) / &lt;80 cm (F) — risque modéré ; &lt;102 cm (H) / &lt;88 cm (F) — risque élevé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Bilan sanguin</strong> : glycémie à jeun, HbA1c, cholestérol LDL/HDL, triglycérides (prescrit par le médecin traitant)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Masse grasse %</strong> : DXA (INSEP, CHU) ou impédancemétrie (pharmacies, diététiciens)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Bilan de santé gratuit</strong> : proposé par la Sécu tous les 5 ans, inclut IMC + tour de taille</span>
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
                <li><strong>Notez votre IMC actuel</strong> et mesurez votre tour de taille (seuils HAS ci-dessus)</li>
                <li><strong>Consultez votre médecin traitant</strong> pour un bilan complet (glycémie, lipides, tension)</li>
                <li><strong>Demandez une orientation si nécessaire</strong> : nutritionniste (remboursé Sécu), diététicien, ou CSO</li>
                <li><strong>Fixez des objectifs réalistes</strong> : l'ANSES recommande une perte de 0,5 à 1 kg/semaine maximum</li>
                <li><strong>Suivez votre évolution</strong> : pesez-vous 1 fois/semaine, même jour, même heure, à jeun</li>
                <li><strong>Sport sur ordonnance</strong> : si ALD (IMC ≥ 30 avec comorbidités), votre médecin peut prescrire de l'APA</li>
              </ol>
            </div>
          </div>

          {/* Parcours de soins en France */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Parcours de soins obésité en France</h2>
            </div>
            <div className="text-muted-foreground space-y-4 mb-6">
              <p>
                La <strong>HAS</strong> a défini un parcours de soins structuré selon le niveau d'IMC.
                Voici la prise en charge recommandée en France, avec les remboursements associés :
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">IMC</th>
                    <th className="text-left py-3 px-4 font-bold">Classification</th>
                    <th className="text-left py-3 px-4 font-bold">Parcours HAS</th>
                    <th className="text-left py-3 px-4 font-bold">Remboursement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-3 px-4 font-mono">&lt;18,5</td>
                    <td className="py-3 px-4 text-info font-medium">Maigreur</td>
                    <td className="py-3 px-4">Bilan nutritionnel, recherche de cause</td>
                    <td className="py-3 px-4">Consultation médecin : 70% Sécu</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 font-mono">18,5-24,9</td>
                    <td className="py-3 px-4 text-success font-medium">Normal</td>
                    <td className="py-3 px-4">Prévention, suivi PNNS « Manger Bouger »</td>
                    <td className="py-3 px-4">Bilan Sécu gratuit tous les 5 ans</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-3 px-4 font-mono">25-29,9</td>
                    <td className="py-3 px-4 text-warning font-medium">Surpoids</td>
                    <td className="py-3 px-4">Médecin traitant + bilan sanguin + rééquilibrage</td>
                    <td className="py-3 px-4">Consultation médecin : 70% ; diététicien : non remboursé (sauf « Mon Bilan Diététique »)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-3 px-4 font-mono">30-34,9</td>
                    <td className="py-3 px-4 text-destructive font-medium">Obésité I</td>
                    <td className="py-3 px-4">Médecin + nutritionniste + APA si ALD</td>
                    <td className="py-3 px-4">Nutritionniste : 70% Sécu ; APA : variable (mutuelles, collectivités)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-3 px-4 font-mono">35-39,9</td>
                    <td className="py-3 px-4 text-destructive font-medium">Obésité II</td>
                    <td className="py-3 px-4">CSO + suivi pluridisciplinaire 6-12 mois</td>
                    <td className="py-3 px-4">Chirurgie bariatrique possible si comorbidités → 100% Sécu</td>
                  </tr>
                  <tr className="bg-destructive/10">
                    <td className="py-3 px-4 font-mono">≥ 40</td>
                    <td className="py-3 px-4 text-destructive font-medium">Obésité III</td>
                    <td className="py-3 px-4">CSO + chirurgie bariatrique (sleeve, bypass)</td>
                    <td className="py-3 px-4">Prise en charge 100% Sécurité Sociale</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              CSO = Centre Spécialisé de l'Obésité (37 centres en France) | APA = Activité Physique Adaptée | ALD = Affection Longue Durée
            </p>
          </div>

          {/* Disparités régionales */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Globe className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Où se situent les Français ? (ObÉpi-Roche 2023)</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-info/10 text-center">
                <div className="text-3xl font-bold text-info mb-1">5%</div>
                <p className="text-sm text-muted-foreground">Maigreur</p>
              </div>
              <div className="p-4 rounded-xl bg-success/10 text-center">
                <div className="text-3xl font-bold text-success mb-1">47%</div>
                <p className="text-sm text-muted-foreground">Poids normal</p>
              </div>
              <div className="p-4 rounded-xl bg-warning/10 text-center">
                <div className="text-3xl font-bold text-warning mb-1">30%</div>
                <p className="text-sm text-muted-foreground">Surpoids</p>
              </div>
              <div className="p-4 rounded-xl bg-destructive/10 text-center">
                <div className="text-3xl font-bold text-destructive mb-1">17%</div>
                <p className="text-sm text-muted-foreground">Obésité</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/20">
                <h4 className="font-bold mb-2">Régions les plus touchées</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Hauts-de-France</strong> : 26% d'obésité</li>
                  <li>• <strong>Grand-Est</strong> : 22% d'obésité</li>
                  <li>• <strong>DOM-TOM</strong> : taux supérieurs à la métropole</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-success/5 border border-success/20">
                <h4 className="font-bold mb-2">Régions les moins touchées</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Île-de-France</strong> : 13% d'obésité</li>
                  <li>• <strong>Pays de la Loire</strong> : 14% d'obésité</li>
                  <li>• Effet protecteur du niveau socio-économique et de l'offre alimentaire</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Interprétation IMC : le guide complet pour la France</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                L'<strong>interprétation IMC</strong> en France suit les recommandations de la <strong>HAS</strong>
                (Haute Autorité de Santé) et de l'<strong>OMS</strong>. Savoir <strong>lire son IMC</strong> permet
                d'identifier si l'on se trouve dans une zone de poids sain ou si un parcours de soins est nécessaire.
                L'IMC moyen des Français est de <strong>25,4</strong> selon l'enquête <strong>ObÉpi-Roche 2023</strong>.
              </p>
              <p>
                <strong>Comment interpréter l'IMC</strong> ? La HAS recommande de toujours associer l'IMC au
                <strong> tour de taille</strong> et au <strong>bilan sanguin</strong>. Un IMC de 27 avec un tour de taille
                élevé est plus inquiétant qu'un IMC de 27 isolé. Le <strong>médecin traitant</strong> est le premier
                interlocuteur pour interpréter votre résultat et vous orienter dans le système de santé français.
              </p>
              <p>
                En France, la prise en charge de l'obésité est structurée : <strong>médecin nutritionniste</strong> (remboursé Sécu),
                <strong> CSO</strong> (37 centres spécialisés), <strong>chirurgie bariatrique</strong> (100% Sécu si IMC ≥ 40),
                et <strong>sport sur ordonnance</strong> (APA). Le <strong>PNNS « Manger Bouger »</strong> fournit des
                recommandations nationales pour maintenir un IMC sain.
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
