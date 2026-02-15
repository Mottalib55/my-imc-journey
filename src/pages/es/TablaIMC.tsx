import { Header } from "@/components/Header";
import { Table, Scale, AlertTriangle, CheckCircle2, Globe } from "lucide-react";
import { RelatedPages } from "@/components/RelatedPages";

const TablaIMC = () => {
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
            Clasificación oficial OMS
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Tabla IMC Completa</span> : Clasificación OMS Detallada
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Clasificación OMS con datos de América Latina: México 36,1% obesos (ENSANUT), España 16% (ENPE). Tabla completa de IMC con alturas promedio locales.
          </p>
        </header>

        <div className="space-y-8">
          {/* Main Table */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Clasificación internacional del IMC (adultos)</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold">Clasificación</th>
                    <th className="text-left py-4 px-4 font-bold">IMC (kg/m²)</th>
                    <th className="text-left py-4 px-4 font-bold">Riesgo de comorbilidades</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Delgadez severa</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">&lt; 16,0</td>
                    <td className="py-4 px-4 text-info">Elevado (desnutrición)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Delgadez moderada</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">16,0 - 16,9</td>
                    <td className="py-4 px-4 text-info">Moderado</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Delgadez leve</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">17,0 - 18,4</td>
                    <td className="py-4 px-4 text-info">Bajo</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-success" />
                        <span className="font-bold text-success">Peso normal</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-success">18,5 - 24,9</td>
                    <td className="py-4 px-4 text-success">Bajo (referencia)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-warning" />
                        <span className="font-medium">Sobrepeso (preobesidad)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">25,0 - 29,9</td>
                    <td className="py-4 px-4 text-warning">Aumentado</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Obesidad clase I (moderada)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">30,0 - 34,9</td>
                    <td className="py-4 px-4 text-destructive">Elevado</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Obesidad clase II (severa)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">35,0 - 39,9</td>
                    <td className="py-4 px-4 text-destructive">Muy elevado</td>
                  </tr>
                  <tr className="bg-destructive/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Obesidad clase III (mórbida)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">≥ 40,0</td>
                    <td className="py-4 px-4 text-destructive">Extremadamente elevado</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Fuente: Organización Mundial de la Salud (OMS)
            </p>
          </div>

          {/* Weight examples by height */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tabla peso / talla</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Correspondencia entre talla y rango de peso para cada categoría de IMC. Las filas resaltadas corresponden a las <strong>alturas promedio locales</strong>: México 1m64 (H) / 1m56 (F), España 1m74 (H) / 1m63 (F).
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-3 font-bold">Talla</th>
                    <th className="text-left py-3 px-3 font-bold text-info">Delgadez<br />&lt;18,5</th>
                    <th className="text-left py-3 px-3 font-bold text-success">Normal<br />18,5-24,9</th>
                    <th className="text-left py-3 px-3 font-bold text-warning">Sobrepeso<br />25-29,9</th>
                    <th className="text-left py-3 px-3 font-bold text-destructive">Obesidad<br />≥30</th>
                    <th className="text-left py-3 px-3 font-bold">Referencia</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { h: 156, u: 45, nMin: 45, nMax: 61, sMin: 61, sMax: 73, o: 73, ref: "Mujer mexicana promedio" },
                    { h: 160, u: 47, nMin: 47, nMax: 64, sMin: 64, sMax: 77, o: 77, ref: "" },
                    { h: 163, u: 49, nMin: 49, nMax: 66, sMin: 66, sMax: 80, o: 80, ref: "Mujer española promedio" },
                    { h: 164, u: 50, nMin: 50, nMax: 67, sMin: 67, sMax: 80, o: 80, ref: "Hombre mexicano promedio" },
                    { h: 168, u: 52, nMin: 52, nMax: 70, sMin: 70, sMax: 85, o: 85, ref: "" },
                    { h: 170, u: 53, nMin: 53, nMax: 72, sMin: 72, sMax: 87, o: 87, ref: "" },
                    { h: 174, u: 56, nMin: 56, nMax: 75, sMin: 75, sMax: 91, o: 91, ref: "Hombre español promedio" },
                    { h: 178, u: 59, nMin: 59, nMax: 79, sMin: 79, sMax: 95, o: 95, ref: "" },
                    { h: 180, u: 60, nMin: 60, nMax: 81, sMin: 81, sMax: 97, o: 97, ref: "" },
                    { h: 185, u: 63, nMin: 63, nMax: 85, sMin: 85, sMax: 102, o: 102, ref: "" },
                    { h: 190, u: 67, nMin: 67, nMax: 90, sMin: 90, sMax: 108, o: 108, ref: "" },
                  ].map((row) => (
                    <tr key={row.h} className={`border-b border-border/50 ${row.ref ? "bg-primary/10 font-semibold" : ""}`}>
                      <td className="py-3 px-3 font-bold">{row.h} cm</td>
                      <td className="py-3 px-3 text-info">&lt;{row.u} kg</td>
                      <td className="py-3 px-3 text-success">{row.nMin}-{row.nMax} kg</td>
                      <td className="py-3 px-3 text-warning">{row.sMin}-{row.sMax} kg</td>
                      <td className="py-3 px-3 text-destructive">&gt;{row.o} kg</td>
                      <td className="py-3 px-3 text-xs text-primary">{row.ref}</td>
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
              <h2 className="text-2xl font-display font-bold">Casos límite y excepciones</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold">El IMC no es adecuado para:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Deportistas musculosos</strong>: masa muscular = IMC sobreestimado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Mujeres embarazadas</strong>: aumento de peso normal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Personas mayores</strong>: pérdida de masa muscular</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Niños/adolescentes</strong>: curvas específicas necesarias</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold">Indicadores complementarios:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Perímetro de cintura</strong>: grasa abdominal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Masa grasa %</strong>: composición corporal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Relación cintura/cadera</strong>: distribución de grasas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>FFMI</strong>: para deportistas</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-warning/5 rounded-xl border border-warning/20">
              <h4 className="font-bold mb-2">Nota OPS/PAHO sobre poblaciones latinoamericanas</h4>
              <p className="text-muted-foreground text-sm">
                La <strong>Organización Panamericana de la Salud (OPS/PAHO)</strong> señala que las poblaciones latinoamericanas pueden presentar una <strong>composición corporal diferente</strong> a la de las poblaciones europeas o norteamericanas en las que se basaron los umbrales originales del IMC. Estudios regionales sugieren que, a igual IMC, las personas de origen mestizo o indígena pueden tener un mayor porcentaje de grasa corporal y un mayor riesgo metabólico. Por ello, la OPS recomienda complementar el IMC con la <strong>medición del perímetro abdominal</strong> y otros indicadores clínicos para una evaluación más precisa del riesgo cardiometabólico en la región.
              </p>
            </div>
          </div>

          {/* Prevalencia por categoría */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Prevalencia por categoría en Latinoamérica y España</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Tasas de obesidad (IMC ≥ 30) en adultos según encuestas nacionales de salud. Estos datos permiten contextualizar la tabla IMC en la realidad epidemiológica de cada país.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-destructive/5 border border-destructive/20">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold">México</h4>
                  <span className="text-2xl font-bold text-destructive">36,1%</span>
                </div>
                <div className="w-full bg-border/50 rounded-full h-3 mb-2">
                  <div className="bg-destructive h-3 rounded-full" style={{ width: "72%" }} />
                </div>
                <p className="text-xs text-muted-foreground">
                  Fuente: <strong>ENSANUT</strong> (Encuesta Nacional de Salud y Nutrición). México presenta la tasa de obesidad más alta de América Latina, con 36,1% de adultos obesos y un 75,2% con sobrepeso u obesidad combinados.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-destructive/5 border border-destructive/20">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold">Chile</h4>
                  <span className="text-2xl font-bold text-destructive">34,4%</span>
                </div>
                <div className="w-full bg-border/50 rounded-full h-3 mb-2">
                  <div className="bg-destructive h-3 rounded-full" style={{ width: "69%" }} />
                </div>
                <p className="text-xs text-muted-foreground">
                  Fuente: Encuesta Nacional de Salud de Chile. Segundo país con mayor prevalencia de obesidad en la región, con un 34,4% de adultos en categoría de IMC ≥ 30.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-warning/5 border border-warning/20">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold">Argentina</h4>
                  <span className="text-2xl font-bold text-warning">28,3%</span>
                </div>
                <div className="w-full bg-border/50 rounded-full h-3 mb-2">
                  <div className="bg-warning h-3 rounded-full" style={{ width: "57%" }} />
                </div>
                <p className="text-xs text-muted-foreground">
                  Fuente: Encuesta Nacional de Factores de Riesgo. Argentina registra un 28,3% de obesidad, con una tendencia al alza en las últimas décadas, especialmente en zonas urbanas.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-warning/5 border border-warning/20">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold">España</h4>
                  <span className="text-2xl font-bold text-warning">16%</span>
                </div>
                <div className="w-full bg-border/50 rounded-full h-3 mb-2">
                  <div className="bg-warning h-3 rounded-full" style={{ width: "32%" }} />
                </div>
                <p className="text-xs text-muted-foreground">
                  Fuente: <strong>ENPE</strong> (Estudio Nutricional de la Población Española). Con un 16% de obesidad, España mantiene tasas inferiores a Latinoamérica, aunque el sobrepeso afecta al 39,3% de los adultos según la <strong>AESAN</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Etiquetado y tabla IMC */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Etiquetado nutricional y tabla IMC</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Varios países hispanohablantes han implementado sistemas de etiquetado frontal para combatir la obesidad y ayudar a sus poblaciones a mantener un IMC saludable.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold">Sellos octagonales (Chile y México)</h4>
                <p className="text-muted-foreground text-sm">
                  Chile fue pionero con su <strong>Ley de Etiquetado de Alimentos (2016)</strong>, adoptando sellos octagonales negros de advertencia ("Alto en azúcares", "Alto en grasas saturadas", "Alto en sodio", "Alto en calorías"). México implementó un sistema similar en 2020. Estos sellos permiten al consumidor identificar rápidamente los productos que, consumidos en exceso, contribuyen a un IMC elevado. Desde su implementación, Chile ha observado una reducción en la compra de productos con sellos de advertencia, lo que contribuye a la prevención de la obesidad.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold">Directrices AESAN en España</h4>
                <p className="text-muted-foreground text-sm">
                  La <strong>Agencia Española de Seguridad Alimentaria y Nutrición (AESAN)</strong> promueve el sistema <strong>Nutri-Score</strong> en España, un semáforo de letras (A a E) que clasifica los alimentos según su calidad nutricional global. La AESAN también publica guías alimentarias y establece los criterios para la publicidad de alimentos dirigidos a menores. Consultar la tabla IMC junto con el Nutri-Score ayuda a tomar decisiones alimentarias informadas para mantener un peso saludable.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Tanto los sellos octagonales como el Nutri-Score son herramientas complementarias a la tabla IMC: mientras el IMC evalúa el estado corporal individual, el etiquetado nutricional orienta las decisiones de compra que influyen directamente en el peso y la salud.
            </p>
          </div>

          {/* SEO */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Comprender la tabla IMC</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                La <strong>tabla IMC OMS</strong> es la referencia internacional para clasificar la corpulencia.
                Esta <strong>tabla de índice de masa corporal</strong> define los umbrales de <strong>delgadez</strong>,
                <strong>peso normal</strong>, <strong>sobrepeso</strong> y <strong>obesidad</strong>.
              </p>
              <p>
                La <strong>clasificación IMC</strong> distingue tres niveles de delgadez (severa, moderada, leve)
                y tres clases de obesidad (I, II, III). La <strong>tabla IMC adulto</strong> se aplica a personas
                mayores de 18 años.
              </p>
              <p>
                Para interpretar su resultado, consulte la <strong>tabla de correspondencia IMC</strong> anterior.
                La <strong>tabla peso talla IMC</strong> le permite ver directamente qué peso corresponde a
                qué categoría para su talla.
              </p>
              <p>
                En América Latina, la <strong>ENSANUT</strong> de México y las encuestas nacionales de Chile y Argentina documentan una prevalencia de obesidad preocupante que supera ampliamente la media europea. La <strong>ENPE</strong> y la <strong>AESAN</strong> en España ofrecen datos comparativos valiosos. La <strong>OPS/PAHO</strong> (Organización Panamericana de la Salud) coordina las estrategias regionales contra la obesidad y recomienda utilizar la <strong>tabla IMC</strong> como herramienta de cribado, complementada con mediciones de perímetro abdominal y evaluación clínica individualizada.
              </p>
            </div>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Tabla IMC - Clasificación OMS oficial</p>
        </footer>
      </div>
    </div>
  );
};

export default TablaIMC;
