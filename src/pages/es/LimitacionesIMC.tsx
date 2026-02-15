import { Header } from "@/components/Header";
import { AlertTriangle, XCircle, CheckCircle2, Users, Dumbbell, Baby, Clock, Globe, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const LimitacionesIMC = () => {
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
            Las limitaciones del IMC
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-warning">Limitaciones del IMC</span> : Lo que el IMC No Dice
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Por qué el IMC no es un indicador perfecto y cuándo puede ser engañoso
          </p>
        </header>

        {/* Main Warning */}
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-warning mb-2">El IMC es una herramienta de detección, no un diagnóstico</h3>
              <p className="text-muted-foreground">
                Creado en 1832 por Adolphe Quetelet, el IMC fue diseñado para estudios estadísticos de población,
                no para evaluar la salud individual. Presenta varias limitaciones importantes.
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
              <h2 className="text-2xl font-display font-bold">Lo que el IMC no mide</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">La composición corporal</h4>
                    <p className="text-sm text-muted-foreground">
                      El IMC no distingue el músculo de la grasa. 1 kg de músculo = 1 kg de grasa para el IMC.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">La distribución de las grasas</h4>
                    <p className="text-sm text-muted-foreground">
                      La grasa abdominal es más peligrosa que la grasa subcutánea. El IMC no lo ve.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">La densidad ósea</h4>
                    <p className="text-sm text-muted-foreground">
                      Huesos más pesados aumentan el IMC sin impactar la salud.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">El estado de salud metabólica</h4>
                    <p className="text-sm text-muted-foreground">
                      Una persona delgada puede tener un mal perfil metabólico (colesterol, glucemia).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">La hidratación</h4>
                    <p className="text-sm text-muted-foreground">
                      La retención de agua puede aumentar temporalmente el IMC de 1 a 2 puntos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">La forma física</h4>
                    <p className="text-sm text-muted-foreground">
                      Dos personas con el mismo IMC pueden tener condiciones físicas muy diferentes.
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
              <h2 className="text-2xl font-display font-bold">Poblaciones para las que el IMC es inadecuado</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Dumbbell className="w-5 h-5 text-orange-500" />
                  <h4 className="font-bold">Deportistas y atletas</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  La masa muscular elevada da un IMC de "sobrepeso" u "obesidad" cuando el porcentaje de grasa es mínimo.
                </p>
                <Link to="/es/imc-deportista" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  Más información →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Baby className="w-5 h-5 text-cyan-500" />
                  <h4 className="font-bold">Niños y adolescentes</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Los umbrales adultos no se aplican. Hay que utilizar las curvas de corpulencia adaptadas a la edad y al sexo.
                </p>
                <Link to="/es/imc-nino" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  Más información →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold">Personas mayores</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  La pérdida de masa muscular (sarcopenia) puede enmascarar un exceso de grasa. Un IMC "normal" puede ser engañoso.
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-pink-500" />
                  <h4 className="font-bold">Mujeres embarazadas</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  El aumento de peso es normal y deseable durante el embarazo. El IMC pre-embarazo sirve de referencia.
                </p>
                <Link to="/es/imc-mujer" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  Más información →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold">Ciertas etnias</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Las poblaciones asiáticas tienen riesgos aumentados con IMC más bajo. La OMS propone umbrales adaptados (23 en lugar de 25).
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Scale className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold">Morfologías extremas</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Las personas muy altas o muy bajas tienen IMC naturalmente diferentes debido a la relación superficie/volumen.
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
              <h2 className="text-2xl font-display font-bold">Alternativas y complementos al IMC</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Indicador</th>
                    <th className="text-left py-3 px-4 font-bold">Lo que mide</th>
                    <th className="text-left py-3 px-4 font-bold">Umbrales recomendados</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Perímetro de cintura</td>
                    <td className="py-3 px-4">Grasa abdominal (visceral)</td>
                    <td className="py-3 px-4">&lt;94 cm (H) / &lt;80 cm (M)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Relación cintura/cadera</td>
                    <td className="py-3 px-4">Distribución de grasas</td>
                    <td className="py-3 px-4">&lt;0,90 (H) / &lt;0,85 (M)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Relación cintura/talla</td>
                    <td className="py-3 px-4">Grasa central relativa</td>
                    <td className="py-3 px-4">&lt;0,5 (perímetro de cintura &lt; mitad de la talla)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">% Masa grasa</td>
                    <td className="py-3 px-4">Composición corporal real</td>
                    <td className="py-3 px-4">10-20% (H) / 18-28% (M)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">FFMI</td>
                    <td className="py-3 px-4">Masa magra (para deportistas)</td>
                    <td className="py-3 px-4">18-25 (natural)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Impedanciometría</td>
                    <td className="py-3 px-4">Agua, músculo, grasa, hueso</td>
                    <td className="py-3 px-4">Varía según aparato</td>
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
              <h2 className="text-2xl font-display font-bold">Cuándo el IMC sigue siendo útil</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                A pesar de sus limitaciones, el IMC sigue siendo una herramienta valiosa en ciertos contextos:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Primera detección rápida</strong>: identificar personas que necesitan un examen más completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Estudios epidemiológicos</strong>: comparar poblaciones a gran escala</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Seguimiento individual</strong>: observar la evolución de su peso en el tiempo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Adulto sedentario promedio</strong>: para esta población, el IMC es bastante fiable</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Comprender las limitaciones del IMC</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Las <strong>limitaciones del IMC</strong> son numerosas y bien documentadas por la comunidad científica.
                Este <strong>IMC crítico</strong> no debe interpretarse solo. Los <strong>defectos del IMC</strong>
                incluyen la incapacidad de diferenciar masa grasa y masa magra.
              </p>
              <p>
                <strong>¿Por qué el IMC es imperfecto</strong>? Porque se trata de una simple relación matemática.
                Los <strong>problemas del IMC</strong> son particularmente visibles en deportistas,
                niños y personas mayores. El <strong>IMC fiable o no</strong> depende del contexto de uso.
              </p>
              <p>
                Las <strong>alternativas al IMC</strong> como el perímetro de cintura o el porcentaje de masa grasa
                ofrecen una visión más completa. <strong>¿Es fiable el IMC</strong> para todo el mundo?
                No, pero combinado con otros indicadores, sigue siendo una herramienta de detección útil.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calcule su IMC con conocimiento de causa</h3>
            <p className="text-muted-foreground mb-6">
              Ahora que conoce las limitaciones, use nuestra calculadora como un primer indicador
            </p>
            <Link
              to="/es/imc"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calcular mi IMC
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Limitaciones del IMC - Comprender el índice de masa corporal</p>
        </footer>
      </div>
    </div>
  );
};

export default LimitacionesIMC;
