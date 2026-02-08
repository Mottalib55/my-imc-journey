import { Header } from "@/components/Header";
import { BookOpen, TrendingUp, TrendingDown, Target, AlertTriangle, CheckCircle2, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const InterpretacionIMC = () => {
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
            Guía de interpretación
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Interpretación IMC</span> : Comprender sus resultados
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cómo leer e interpretar correctamente su Índice de Masa Corporal
          </p>
        </header>

        <div className="space-y-8">
          {/* What does IMC mean */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">¿Qué significa su IMC?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                El <strong>IMC</strong> (Índice de Masa Corporal) es un indicador que permite evaluar
                rápidamente si su peso está adaptado a su talla. Se calcula dividiendo el peso (en kg)
                por la talla al cuadrado (en metros).
              </p>
              <p>
                <strong>Importante:</strong> El IMC es una herramienta de detección, no un diagnóstico. Un médico
                tendrá en cuenta otros factores (perímetro de cintura, masa muscular, historial médico)
                para evaluar su estado de salud.
              </p>
            </div>
          </div>

          {/* Interpretation by category */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Interpretación por categoría</h2>
            </div>

            <div className="space-y-6">
              {/* Underweight */}
              <div className="border-l-4 border-info pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="w-5 h-5 text-info" />
                  <h3 className="font-bold text-lg">IMC inferior a 18,5: Delgadez</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Un IMC por debajo de 18,5 indica insuficiencia ponderal. Esto puede significar:
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Aportes calóricos insuficientes</li>
                  <li>• Metabolismo muy rápido</li>
                  <li>• Posible trastorno alimentario</li>
                  <li>• Riesgo de carencias nutricionales</li>
                </ul>
                <p className="text-info font-medium mt-3">
                  Consejo: Consulte a un médico para identificar la causa y adaptar su alimentación.
                </p>
              </div>

              {/* Normal */}
              <div className="border-l-4 border-success pl-6 py-4 bg-success/5 rounded-r-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <h3 className="font-bold text-lg">IMC entre 18,5 y 24,9: Peso normal</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  ¡Esta es la zona ideal! Su peso está equilibrado en relación con su talla.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Riesgos de salud minimizados</li>
                  <li>• Buen equilibrio energético</li>
                  <li>• Objetivo a mantener</li>
                </ul>
                <p className="text-success font-medium mt-3">
                  Consejo: Mantenga sus buenos hábitos alimentarios y su actividad física.
                </p>
              </div>

              {/* Overweight */}
              <div className="border-l-4 border-warning pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-warning" />
                  <h3 className="font-bold text-lg">IMC entre 25 y 29,9: Sobrepeso</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Su peso supera ligeramente la norma. Es una señal de alerta, no una emergencia.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Riesgo aumentado de enfermedades crónicas</li>
                  <li>• Tensión arterial potencialmente elevada</li>
                  <li>• Puede deberse a la masa muscular (deportistas)</li>
                </ul>
                <p className="text-warning font-medium mt-3">
                  Consejo: Adopte una alimentación equilibrada y aumente su actividad física.
                </p>
              </div>

              {/* Obesity */}
              <div className="border-l-4 border-destructive pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <h3 className="font-bold text-lg">IMC superior a 30: Obesidad</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  La obesidad aumenta significativamente los riesgos para la salud.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Clase I (30-34,9): Obesidad moderada</li>
                  <li>• Clase II (35-39,9): Obesidad severa</li>
                  <li>• Clase III (≥40): Obesidad mórbida</li>
                </ul>
                <p className="text-destructive font-medium mt-3">
                  Consejo: Se recomienda una consulta médica para un acompañamiento personalizado.
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
              <h2 className="text-2xl font-display font-bold">Factores a tener en cuenta</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">El IMC puede estar sesgado por:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>La masa muscular</strong>: los deportistas tienen un IMC más elevado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>La edad</strong>: los mayores pierden masa muscular</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>El sexo</strong>: las mujeres tienen naturalmente más grasa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>El origen étnico</strong>: umbrales diferentes según las poblaciones</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Indicadores complementarios:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Perímetro de cintura</strong>: &lt;94 cm (H) / &lt;80 cm (M)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Relación cintura/cadera</strong>: distribución de grasas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Masa grasa %</strong>: composición corporal real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Análisis de sangre</strong>: colesterol, glucemia, etc.</span>
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
              <h2 className="text-2xl font-display font-bold">¿Qué hacer con su resultado?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Su IMC es solo un punto de partida. Aquí están los siguientes pasos recomendados:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Anote su IMC actual</strong> como referencia</li>
                <li><strong>Mida su perímetro de cintura</strong> para completar la evaluación</li>
                <li><strong>Consulte a un profesional de la salud</strong> si su IMC está fuera de las normas</li>
                <li><strong>Fije objetivos realistas</strong>: perder 0,5 a 1 kg por semana máximo</li>
                <li><strong>Siga su evolución</strong>: pésese una vez por semana, mismo día, misma hora</li>
              </ol>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Comprender la interpretación del IMC</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                La <strong>interpretación IMC</strong> es esencial para comprender qué significa
                su <strong>resultado IMC</strong>. Saber <strong>leer su IMC</strong> permite
                identificar si se encuentra en una zona de peso saludable o si son necesarios ajustes.
              </p>
              <p>
                <strong>¿Cómo interpretar el IMC</strong>? Las categorías OMS definen claramente
                qué <strong>significa un IMC</strong> de 22, 25 o 30. El <strong>análisis IMC</strong>
                debe siempre tener en cuenta el contexto: edad, sexo, actividad física.
              </p>
              <p>
                El <strong>IMC ideal</strong> se sitúa entre 18,5 y 24,9. <strong>Comprender su IMC</strong>
                también es saber que este índice tiene limitaciones. La <strong>explicación IMC</strong>
                completa incluye la consideración de otros indicadores como el perímetro de cintura.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calcule su IMC ahora</h3>
            <p className="text-muted-foreground mb-6">
              Use nuestra calculadora gratuita para conocer su índice de masa corporal
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
          <p>© 2024 Interpretación IMC - Guía completa</p>
        </footer>
      </div>
    </div>
  );
};

export default InterpretacionIMC;
