import { Header } from "@/components/Header";
import { HelpCircle, AlertTriangle, CheckCircle2, Scale, Activity, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const BMIInterpretation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            BMI verstehen im DACH-Raum
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">BMI-Interpretation</span> : Ergebnisse Richtig Verstehen
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Was Ihr BMI-Ergebnis nach den Richtlinien von RKI, DGEM und BZgA bedeutet --
            basierend auf der DEGS1-Studie und aktuellen Daten aus dem DACH-Raum (Deutschland, Österreich, Schweiz)
          </p>
        </header>

        <div className="space-y-8">
          {/* Was bedeutet der BMI im deutschen Gesundheitssystem */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Was bedeutet Ihr BMI im deutschen Gesundheitssystem?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Der <strong>BMI</strong> (Body-Mass-Index) ist ein zentraler Indikator im deutschen Gesundheitswesen.
                Er wird berechnet, indem das Gewicht (in kg) durch die Körpergröße zum Quadrat (in Metern) geteilt wird.
                Beispiel: Bei 82 kg und 1,78 m Größe ergibt sich ein BMI von 82 ÷ {(178/100).toFixed(2)}² = <strong>25,9</strong>.
              </p>
              <p>
                Im Rahmen der <strong>Vorsorgeuntersuchung</strong> und des <strong>Gesundheits-Check-up</strong> (ab 35 Jahren,
                seit 2019 einmalig auch zwischen 18 und 34) wird der BMI routinemäßig vom Hausarzt erhoben. Dieser
                Check-up wird von allen gesetzlichen Krankenkassen (GKV) übernommen und dient der Früherkennung von
                Herz-Kreislauf-Erkrankungen, Diabetes und Nierenerkrankungen.
              </p>
              <p>
                Laut der <strong>DEGS1-Studie</strong> (Studie zur Gesundheit Erwachsener in Deutschland) des Robert Koch-Instituts (RKI)
                liegt der durchschnittliche BMI in Deutschland bei etwa <strong>26</strong> -- damit ist der Durchschnittsdeutsche
                bereits im Bereich des Übergewichts.
              </p>
              <p>
                <strong>Wichtig:</strong> Der BMI ist ein Screening-Tool, keine Diagnose. Die Deutsche Gesellschaft für
                Ernährungsmedizin (DGEM) empfiehlt, den BMI stets im Zusammenhang mit dem Taillenumfang,
                der Körperzusammensetzung und der individuellen Krankengeschichte zu bewerten.
              </p>
            </div>
          </div>

          {/* Kategorie für Kategorie mit DACH-Daten */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI-Kategorien mit DACH-Daten</h2>
            </div>

            <div className="space-y-6">
              {/* Untergewicht */}
              <div className="border-l-4 border-info pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <Scale className="w-5 h-5 text-info" />
                  <h3 className="font-bold text-lg">BMI unter 18,5: Untergewicht</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Ein BMI unter 18,5 weist auf Untergewicht hin. In Deutschland sind laut RKI-Daten etwa
                  <strong> 2 % der Erwachsenen</strong> untergewichtig -- besonders betroffen sind junge Frauen
                  zwischen 18 und 29 Jahren (ca. 5 %).
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Unzureichende Kalorienaufnahme oder Malabsorption</li>
                  <li>• Sehr schneller Stoffwechsel</li>
                  <li>• Mögliche Essstörung (Anorexia nervosa, Bulimie)</li>
                  <li>• Risiko von Nährstoffmangel, Osteoporose und Immunschwäche</li>
                  <li>• Die DGEM-Leitlinien empfehlen bei BMI &lt; 18,5 eine ernährungsmedizinische Abklärung</li>
                </ul>
                <p className="text-info font-medium mt-3">
                  Rat: Konsultieren Sie Ihren Hausarzt oder einen Ernährungsmediziner (DGEM-zertifiziert),
                  um die Ursache zu identifizieren und eine gezielte Ernährungstherapie einzuleiten.
                </p>
              </div>

              {/* Normalgewicht */}
              <div className="border-l-4 border-success pl-6 py-4 bg-success/5 rounded-r-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <h3 className="font-bold text-lg">BMI zwischen 18,5 und 24,9: Normalgewicht</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Dies ist die optimale Zone! Laut DEGS1 befinden sich etwa <strong>47 % der Deutschen</strong> in diesem
                  gesunden Bereich. Ihr Gewicht ist im Verhältnis zu Ihrer Größe ausgewogen und die
                  gewichtsbedingten Gesundheitsrisiken sind minimiert.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Geringstes Risiko für Typ-2-Diabetes, Bluthochdruck und Herz-Kreislauf-Erkrankungen</li>
                  <li>• Gute Energiebilanz und Stoffwechselgesundheit</li>
                  <li>• Ziel: Gewicht langfristig halten durch ausgewogene Ernährung nach DGE-Empfehlungen</li>
                </ul>
                <p className="text-success font-medium mt-3">
                  Rat: Behalten Sie Ihre guten Essgewohnheiten bei und nutzen Sie die Präventionsangebote
                  Ihrer Krankenkasse (z. B. Gesundheitskurse nach § 20 SGB V).
                </p>
              </div>

              {/* Übergewicht */}
              <div className="border-l-4 border-warning pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  <h3 className="font-bold text-lg">BMI zwischen 25 und 29,9: Übergewicht (Präadipositas)</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Übergewicht ist in Deutschland weit verbreitet. Laut der DEGS1-Studie des RKI sind
                  etwa <strong>34 % der deutschen Männer</strong> und <strong>29 % der deutschen Frauen</strong> übergewichtig
                  (BMI 25-29,9). Es handelt sich um ein Warnsignal, nicht um einen Notfall.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Erhöhtes Risiko für Herz-Kreislauf-Erkrankungen, Diabetes Typ 2 und Gelenkprobleme</li>
                  <li>• Möglicherweise erhöhter Blutdruck und Cholesterinspiegel</li>
                  <li>• Kann bei Sportlern auf Muskelmasse zurückzuführen sein (→ Taillenumfang messen!)</li>
                  <li>• Der Gesundheits-Check-up ab 35 hilft, Folgeerkrankungen frühzeitig zu erkennen</li>
                </ul>
                <p className="text-warning font-medium mt-3">
                  Rat: Die DGE (Deutsche Gesellschaft für Ernährung) empfiehlt eine ausgewogene
                  Mischkost und mindestens 150 Minuten moderate Bewegung pro Woche.
                </p>
              </div>

              {/* Adipositas */}
              <div className="border-l-4 border-destructive pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-destructive" />
                  <h3 className="font-bold text-lg">BMI über 30: Adipositas</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Adipositas ist eine anerkannte chronische Erkrankung und erhöht die Gesundheitsrisiken erheblich.
                  Im DACH-Raum sind die Adipositas-Raten unterschiedlich: <strong>Deutschland 23,6 %</strong>,
                  <strong> Österreich ca. 19 %</strong> und die <strong>Schweiz ca. 12 %</strong> (eine der niedrigsten Raten in Europa).
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Adipositas Grad I (BMI 30-34,9): Mäßige Adipositas -- erhöhtes Morbiditätsrisiko</li>
                  <li>• Adipositas Grad II (BMI 35-39,9): Schwere Adipositas -- hohes Risiko</li>
                  <li>• Adipositas Grad III (BMI ≥ 40): Morbide Adipositas (Adipositas permagna) -- sehr hohes Risiko</li>
                  <li>• In Deutschland wird Adipositas von der DGEM als behandlungsbedürftige Krankheit eingestuft</li>
                </ul>
                <p className="text-destructive font-medium mt-3">
                  Rat: Bei Adipositas haben Sie Anspruch auf Unterstützung durch Ihre Krankenkasse.
                  Lassen Sie sich vom Hausarzt eine Verordnung für Ernährungsberatung oder ein
                  multimodales Therapieprogramm ausstellen.
                </p>
              </div>
            </div>
          </div>

          {/* Zu berücksichtigende Faktoren -- DGEM/DGE-Leitlinien */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Ergänzende Diagnostik nach DGEM- und DGE-Leitlinien</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">Der BMI kann verzerrt sein durch:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Muskelmasse</strong>: Sportler und Handwerker haben oft einen höheren BMI ohne Gesundheitsrisiko</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Alter</strong>: Ab 65 Jahren gelten leicht höhere Normalwerte (BMI 24-29 nach DGEM)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Geschlecht</strong>: Frauen haben natürlicherweise einen höheren Körperfettanteil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Ethnische Herkunft</strong>: Die WHO empfiehlt für asiatische Bevölkerungen niedrigere Schwellenwerte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Schwangerschaft</strong>: BMI-Bewertung nur vor der Schwangerschaft sinnvoll</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Ergänzende Indikatoren (DGEM-empfohlen):</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Taillenumfang</strong>: Erhöhtes Risiko ab &gt; 94 cm (Männer) / &gt; 80 cm (Frauen); deutlich erhöht ab &gt; 102 cm (M) / &gt; 88 cm (F)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Bioimpedanzanalyse (BIA)</strong>: Misst direkt den Körperfettanteil, Muskelmasse und Wasserhaushalt -- in vielen Arztpraxen verfügbar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Taille-Hüft-Verhältnis (WHR)</strong>: Bewertet die abdominale Fettverteilung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Laborwerte</strong>: HbA1c, Nüchternglukose, Lipidprofil, Leberwerte -- Standard im Gesundheits-Check-up</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Krankenkasse und Übergewicht */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Krankenkasse und Übergewicht: Ihre Ansprüche in Deutschland</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Das deutsche Gesundheitssystem bietet umfangreiche Unterstützung bei Übergewicht und Adipositas.
                Hier erfahren Sie, welche Leistungen Ihre <strong>gesetzliche Krankenkasse (GKV)</strong> übernimmt:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold mb-3 text-success">Ernährungsberatung (§ 43 SGB V)</h4>
                  <p className="text-sm">
                    Ihr Hausarzt kann eine <strong>Ernährungsberatung</strong> verordnen, wenn ein BMI ≥ 30 oder
                    eine ernährungsbedingte Erkrankung vorliegt. Die Krankenkasse bezuschusst in der Regel
                    3-5 Sitzungen bei einer zertifizierten Ernährungsfachkraft (Diätassistent/in oder
                    Ökotrophologe/in mit Kassenzulassung). Der Eigenanteil beträgt meist nur 10-20 %.
                  </p>
                </div>

                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold mb-3 text-success">Präventionskurse (§ 20 SGB V)</h4>
                  <p className="text-sm">
                    Jede Krankenkasse bezuschusst jährlich <strong>Präventionskurse</strong> in den Bereichen
                    Bewegung, Ernährung, Stressbewältigung und Suchtprävention. Die Zuschüsse liegen
                    zwischen 75 und 150 Euro pro Kurs (je nach Kasse). Angebote finden Sie über die
                    Zentrale Prüfstelle Prävention (ZPP).
                  </p>
                </div>

                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold mb-3 text-success">Multimodale Adipositastherapie</h4>
                  <p className="text-sm">
                    Bei Adipositas Grad II und III (BMI ≥ 35) kann Ihr Arzt ein <strong>multimodales
                    Therapieprogramm</strong> verordnen, das Ernährungstherapie, Bewegungstherapie und
                    Verhaltenstherapie kombiniert. Viele Krankenkassen bieten auch Disease-Management-Programme
                    (DMP) für Diabetes und koronare Herzkrankheit an, die eng mit der Gewichtsreduktion verknüpft sind.
                  </p>
                </div>

                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold mb-3 text-success">Bariatrische Chirurgie</h4>
                  <p className="text-sm">
                    Bei morbider Adipositas (BMI ≥ 40 oder BMI ≥ 35 mit Begleiterkrankungen) kann eine
                    <strong> bariatrische Operation</strong> (Magenbypass, Schlauchmagen) von der Krankenkasse
                    übernommen werden. Voraussetzung ist in der Regel eine <strong>6-monatige dokumentierte
                    multimodale konservative Therapie</strong> (MMK), die nachweist, dass konservative Maßnahmen
                    nicht ausreichend waren. Ein Antrag beim Medizinischen Dienst (MD) ist erforderlich.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* DACH-Vergleich */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">DACH-Vergleich: Adipositas in Deutschland, Österreich und der Schweiz</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Obwohl Deutschland, Österreich und die Schweiz kulturell und sprachlich eng verbunden sind,
                unterscheiden sich die <strong>Adipositas-Raten</strong> und Gesundheitsansätze deutlich:
              </p>

              {/* Comparison Table */}
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-bold">Kriterium</th>
                      <th className="text-center py-3 px-4 font-bold">Deutschland 🇩🇪</th>
                      <th className="text-center py-3 px-4 font-bold">Österreich 🇦🇹</th>
                      <th className="text-center py-3 px-4 font-bold">Schweiz 🇨🇭</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium">Adipositas-Rate</td>
                      <td className="text-center py-3 px-4 text-destructive font-bold">23,6 %</td>
                      <td className="text-center py-3 px-4 text-warning font-bold">ca. 19 %</td>
                      <td className="text-center py-3 px-4 text-success font-bold">ca. 12 %</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium">Übergewicht (BMI 25-29,9)</td>
                      <td className="text-center py-3 px-4">ca. 34 % (M) / 29 % (F)</td>
                      <td className="text-center py-3 px-4">ca. 35 % (M) / 22 % (F)</td>
                      <td className="text-center py-3 px-4">ca. 32 % (M) / 18 % (F)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium">Durchschnittlicher BMI</td>
                      <td className="text-center py-3 px-4">ca. 26,0</td>
                      <td className="text-center py-3 px-4">ca. 25,5</td>
                      <td className="text-center py-3 px-4">ca. 24,8</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium">Gesundheitssystem</td>
                      <td className="text-center py-3 px-4">GKV / PKV</td>
                      <td className="text-center py-3 px-4">ÖGK / Kur-System</td>
                      <td className="text-center py-3 px-4">Obligatorische KVG</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Präventionstrategie</td>
                      <td className="text-center py-3 px-4">§ 20 SGB V Kurse</td>
                      <td className="text-center py-3 px-4">Kur / Rehabilitation</td>
                      <td className="text-center py-3 px-4">LOVE Life / Gesundheitsförderung Schweiz</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="border border-border rounded-xl p-4">
                  <h4 className="font-bold mb-2">Deutschland</h4>
                  <p className="text-sm">
                    Mit einer Adipositas-Rate von 23,6 % hat Deutschland den höchsten Wert im DACH-Raum.
                    Die Bundeszentrale für gesundheitliche Aufklärung (BZgA) koordiniert nationale
                    Aufklärungskampagnen. Die GKV bietet ein breites Spektrum an Präventionsleistungen.
                  </p>
                </div>
                <div className="border border-border rounded-xl p-4">
                  <h4 className="font-bold mb-2">Österreich</h4>
                  <p className="text-sm">
                    Österreich setzt stark auf das traditionelle <strong>Kur-System</strong>: Mehrwöchige
                    Aufenthalte in Kurorten mit ärztlicher Betreuung, Bewegungstherapie und Ernährungsberatung.
                    Die Österreichische Gesundheitskasse (ÖGK) übernimmt einen Großteil der Kosten bei
                    medizinischer Indikation.
                  </p>
                </div>
                <div className="border border-border rounded-xl p-4">
                  <h4 className="font-bold mb-2">Schweiz</h4>
                  <p className="text-sm">
                    Mit nur ca. 12 % Adipositas hat die Schweiz eine der niedrigsten Raten in Europa.
                    Die Stiftung <strong>Gesundheitsförderung Schweiz</strong> und die Kampagne
                    <strong> LOVE Life</strong> setzen auf Prävention. Das obligatorische
                    Krankenversicherungsgesetz (KVG) deckt ärztliche Ernährungsberatung bei Diagnose ab.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Was tun je nach Ergebnis */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Was tun je nach Ergebnis?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Ihr BMI ist nur ein Ausgangspunkt. Hier sind die empfohlenen nächsten Schritte
                im deutschen Gesundheitssystem:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Notieren Sie Ihren aktuellen BMI</strong> als Referenzwert</li>
                <li><strong>Messen Sie Ihren Taillenumfang</strong> -- erhöhtes Risiko ab 94 cm (Männer) bzw. 80 cm (Frauen)</li>
                <li><strong>Nutzen Sie den Gesundheits-Check-up</strong> beim Hausarzt (kostenlos ab 35, einmalig ab 18)</li>
                <li><strong>Fragen Sie nach Präventionskursen</strong> -- Ihre Krankenkasse bezuschusst Ernährungs- und Sportkurse</li>
                <li><strong>Bei BMI ≥ 30: Lassen Sie sich beraten</strong> -- Ihr Arzt kann Ernährungsberatung nach § 43 SGB V verordnen</li>
                <li><strong>Setzen Sie realistische Ziele</strong>: Die DGEM empfiehlt 0,5-1 kg pro Woche bei Übergewicht</li>
                <li><strong>Verfolgen Sie Ihre Entwicklung</strong>: Wiegen Sie sich einmal pro Woche, gleicher Tag, gleiche Uhrzeit</li>
              </ol>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">BMI-Interpretation im DACH-Raum verstehen</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Die <strong>BMI-Interpretation</strong> nach den Leitlinien des <strong>Robert Koch-Instituts (RKI)</strong> und
                der <strong>Deutschen Gesellschaft für Ernährungsmedizin (DGEM)</strong> ist der erste Schritt,
                um Ihr <strong>BMI-Ergebnis</strong> richtig einzuordnen. Zu wissen, <strong>wie man seinen BMI liest</strong>,
                ermöglicht es festzustellen, ob Sie sich in einer gesunden Gewichtszone befinden oder ob eine
                ärztliche Abklärung sinnvoll ist.
              </p>
              <p>
                <strong>Wie interpretiert man den BMI im DACH-Raum?</strong> Die WHO-Kategorien gelten als
                internationale Grundlage, werden aber in Deutschland durch die <strong>DEGS1-Studie</strong>,
                die Empfehlungen der <strong>DGE (Deutsche Gesellschaft für Ernährung)</strong> und die
                Leitlinien der <strong>DGEM</strong> ergänzt. Die <strong>BMI-Analyse</strong> muss immer den
                individuellen Kontext berücksichtigen: Alter, Geschlecht, Taillenumfang und körperliche Aktivität.
              </p>
              <p>
                In Deutschland übernimmt die <strong>Krankenkasse</strong> zahlreiche Leistungen zur Gewichtsreduktion:
                Von der <strong>Ernährungsberatung</strong> nach § 43 SGB V über <strong>Präventionskurse</strong> nach
                § 20 SGB V bis hin zur <strong>bariatrischen Chirurgie</strong> bei morbider Adipositas.
                Der <strong>Gesundheits-Check-up</strong> beim Hausarzt ist ein kostenloser Einstieg in die
                BMI-Bewertung und Gesundheitsvorsorge.
              </p>
              <p>
                Der <strong>ideale BMI</strong> liegt zwischen 18,5 und 24,9. <strong>Seinen BMI verstehen</strong> bedeutet
                auch, die Unterschiede im <strong>DACH-Raum</strong> zu kennen: Deutschland (23,6 % Adipositas),
                Österreich (19 %) und die Schweiz (12 %) zeigen, dass Lebensstil und Gesundheitssystem
                einen großen Einfluss auf das Gewicht der Bevölkerung haben. Nutzen Sie die Angebote
                der <strong>BZgA</strong>, der <strong>Krankenkassen</strong> und der Fachgesellschaften
                für eine fundierte BMI-Bewertung.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Berechnen Sie jetzt Ihren BMI</h3>
            <p className="text-muted-foreground mb-6">
              Verwenden Sie unseren kostenlosen Rechner, um Ihren Body-Mass-Index zu ermitteln --
              mit Interpretation nach DGEM- und RKI-Richtlinien
            </p>
            <Link
              to="/de/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Berechnen Sie Ihren BMI
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI-Interpretation im DACH-Raum</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIInterpretation;
