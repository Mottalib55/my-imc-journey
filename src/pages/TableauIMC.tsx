import { Header } from "@/components/Header";
import { Table, Scale, AlertTriangle, CheckCircle2, Globe } from "lucide-react";
import { RelatedPages } from "@/components/RelatedPages";

const TableauIMC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Table className="w-4 h-4" />
            Classification officielle OMS
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Tableau IMC Complet</span> : Classification OMS et Données Françaises
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Classification officielle OMS utilisée par la HAS, avec les données françaises ObÉpi-Roche 2023 : <strong>47% des Français</strong> sont en surpoids ou obèses.
          </p>
        </header>

        <div className="space-y-8">
          {/* Main Table */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Classification internationale de l'IMC (adultes)</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold">Classification</th>
                    <th className="text-left py-4 px-4 font-bold">IMC (kg/m²)</th>
                    <th className="text-left py-4 px-4 font-bold">Risque de comorbidités</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Maigreur sévère</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">&lt; 16,0</td>
                    <td className="py-4 px-4 text-info">Élevé (dénutrition)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Maigreur modérée</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">16,0 - 16,9</td>
                    <td className="py-4 px-4 text-info">Modéré</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Maigreur légère</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">17,0 - 18,4</td>
                    <td className="py-4 px-4 text-info">Faible</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-success" />
                        <span className="font-bold text-success">Poids normal</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-success">18,5 - 24,9</td>
                    <td className="py-4 px-4 text-success">Faible (référence)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-warning" />
                        <span className="font-medium">Surpoids (préobésité)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">25,0 - 29,9</td>
                    <td className="py-4 px-4 text-warning">Accru</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Obésité classe I (modérée)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">30,0 - 34,9</td>
                    <td className="py-4 px-4 text-destructive">Élevé</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Obésité classe II (sévère)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">35,0 - 39,9</td>
                    <td className="py-4 px-4 text-destructive">Très élevé</td>
                  </tr>
                  <tr className="bg-destructive/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Obésité classe III (morbide)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">≥ 40,0</td>
                    <td className="py-4 px-4 text-destructive">Extrêmement élevé</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Source : Organisation Mondiale de la Santé (OMS)
            </p>
          </div>

          {/* Prévalence en France */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Prévalence par catégorie en France (ObÉpi-Roche 2023)</h2>
            </div>
            <div className="text-muted-foreground space-y-4 mb-6">
              <p>
                L'enquête <strong>ObÉpi-Roche 2023</strong>, la référence en France sur l'obésité, montre la répartition
                des Français adultes par catégorie d'IMC. L'IMC moyen des Français est de <strong>25,4</strong> (hommes : 25,8, femmes : 25,1).
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-info/5 rounded-xl border border-info/20">
                <div className="text-2xl font-bold text-info">5%</div>
                <div className="text-sm font-medium mt-1">Maigreur</div>
                <div className="text-xs text-muted-foreground">IMC &lt; 18,5</div>
              </div>
              <div className="text-center p-4 bg-success/10 rounded-xl border border-success/20">
                <div className="text-2xl font-bold text-success">47%</div>
                <div className="text-sm font-medium mt-1">Poids normal</div>
                <div className="text-xs text-muted-foreground">IMC 18,5-24,9</div>
              </div>
              <div className="text-center p-4 bg-warning/5 rounded-xl border border-warning/20">
                <div className="text-2xl font-bold text-warning">30%</div>
                <div className="text-sm font-medium mt-1">Surpoids</div>
                <div className="text-xs text-muted-foreground">IMC 25-29,9</div>
              </div>
              <div className="text-center p-4 bg-destructive/5 rounded-xl border border-destructive/20">
                <div className="text-2xl font-bold text-destructive">17%</div>
                <div className="text-sm font-medium mt-1">Obésité</div>
                <div className="text-xs text-muted-foreground">IMC ≥ 30</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Source : ObÉpi-Roche 2023, Inserm/Kantar Health/Roche. Enquête portant sur 9 598 adultes de 18 ans et plus.
            </p>
          </div>

          {/* Weight examples by height */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tableau poids / taille pour les Français</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Correspondance entre taille et plage de poids pour chaque catégorie d'IMC.
              Les lignes <strong>1m64</strong> (taille moyenne des Françaises) et <strong>1m78</strong> (taille moyenne des Français) sont mises en évidence.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-3 font-bold">Taille</th>
                    <th className="text-left py-3 px-3 font-bold text-info">Maigreur<br />&lt;18,5</th>
                    <th className="text-left py-3 px-3 font-bold text-success">Normal<br />18,5-24,9</th>
                    <th className="text-left py-3 px-3 font-bold text-warning">Surpoids<br />25-29,9</th>
                    <th className="text-left py-3 px-3 font-bold text-destructive">Obésité<br />≥30</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { h: 155, u: 44, nMin: 44, nMax: 60, sMin: 60, sMax: 72, o: 72, label: "" },
                    { h: 160, u: 47, nMin: 47, nMax: 64, sMin: 64, sMax: 77, o: 77, label: "" },
                    { h: 164, u: 50, nMin: 50, nMax: 67, sMin: 67, sMax: 81, o: 81, label: "♀ moy. FR" },
                    { h: 170, u: 53, nMin: 53, nMax: 72, sMin: 72, sMax: 87, o: 87, label: "" },
                    { h: 175, u: 57, nMin: 57, nMax: 76, sMin: 76, sMax: 92, o: 92, label: "" },
                    { h: 178, u: 59, nMin: 59, nMax: 79, sMin: 79, sMax: 95, o: 95, label: "♂ moy. FR" },
                    { h: 180, u: 60, nMin: 60, nMax: 81, sMin: 81, sMax: 97, o: 97, label: "" },
                    { h: 185, u: 63, nMin: 63, nMax: 85, sMin: 85, sMax: 102, o: 102, label: "" },
                    { h: 190, u: 67, nMin: 67, nMax: 90, sMin: 90, sMax: 108, o: 108, label: "" },
                  ].map((row) => (
                    <tr key={row.h} className={`border-b border-border/50 ${row.label ? "bg-primary/5 font-bold" : ""}`}>
                      <td className="py-3 px-3 font-bold">{row.h} cm {row.label && <span className="text-xs text-primary ml-1">({row.label})</span>}</td>
                      <td className="py-3 px-3 text-info">&lt;{row.u} kg</td>
                      <td className="py-3 px-3 text-success">{row.nMin}-{row.nMax} kg</td>
                      <td className="py-3 px-3 text-warning">{row.sMin}-{row.sMax} kg</td>
                      <td className="py-3 px-3 text-destructive">&gt;{row.o} kg</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Edge cases */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Cas limites et exceptions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold">L'IMC n'est pas adapté pour :</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Sportifs musclés</strong> : masse musculaire = IMC surestimé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Femmes enceintes</strong> : prise de poids normale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Personnes âgées</strong> : perte de masse musculaire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Enfants/ados</strong> : courbes spécifiques nécessaires</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold">Indicateurs complémentaires :</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Tour de taille</strong> : graisse abdominale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Masse grasse %</strong> : composition corporelle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Rapport taille/hanche</strong> : répartition graisses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>FFMI</strong> : pour sportifs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tour de taille HAS */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tour de taille : le complément recommandé par la HAS</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                La <strong>HAS</strong> (Haute Autorité de Santé) recommande de toujours compléter l'IMC
                par la mesure du <strong>tour de taille</strong>, qui évalue la graisse abdominale viscérale,
                la plus dangereuse pour la santé cardiovasculaire.
              </p>
            </div>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Risque</th>
                    <th className="text-left py-3 px-4 font-bold">Homme</th>
                    <th className="text-left py-3 px-4 font-bold">Femme</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 font-medium text-success">Normal</td>
                    <td className="py-3 px-4">&lt; 94 cm</td>
                    <td className="py-3 px-4">&lt; 80 cm</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-3 px-4 font-medium text-warning">Risque modéré</td>
                    <td className="py-3 px-4">94-102 cm</td>
                    <td className="py-3 px-4">80-88 cm</td>
                  </tr>
                  <tr className="bg-destructive/5">
                    <td className="py-3 px-4 font-medium text-destructive">Risque élevé</td>
                    <td className="py-3 px-4">&gt; 102 cm</td>
                    <td className="py-3 px-4">&gt; 88 cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Source : HAS / Santé Publique France. En France, 48% des hommes et 41% des femmes dépassent les seuils de risque modéré.
            </p>
          </div>

          {/* SEO */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Comprendre le tableau IMC en France</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Le <strong>tableau IMC OMS</strong> est la référence internationale utilisée par la <strong>HAS</strong>
                pour classifier la corpulence en France. Ce <strong>tableau d'indice de masse corporelle</strong> définit
                les seuils de <strong>maigreur</strong>, <strong>poids normal</strong>, <strong>surpoids</strong> et <strong>obésité</strong>.
              </p>
              <p>
                Selon l'enquête <strong>ObÉpi-Roche 2023</strong>, l'IMC moyen des Français est de <strong>25,4</strong>,
                soit juste au-dessus du seuil de surpoids. <strong>17% des adultes</strong> sont obèses (IMC ≥ 30),
                un chiffre qui a triplé en 30 ans (6% en 1997). La France reste toutefois en dessous de la moyenne européenne (23%).
              </p>
              <p>
                La <strong>HAS</strong> recommande de compléter le <strong>tableau de correspondance IMC</strong> par
                la mesure du <strong>tour de taille</strong>. Le <strong>tableau poids taille IMC</strong> ci-dessus
                utilise les tailles moyennes des Français (<strong>1m78</strong> pour les hommes, <strong>1m64</strong> pour les femmes)
                comme repères.
              </p>
            </div>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Tableau IMC - Classification OMS officielle</p>
        </footer>
      </div>
    </div>
  );
};

export default TableauIMC;
