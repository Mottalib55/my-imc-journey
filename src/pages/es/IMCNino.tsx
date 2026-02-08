import { Header } from "@/components/Header";
import { Baby, AlertTriangle, TrendingUp, BookOpen, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const IMCNino = () => {
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
            IMC Niño y Adolescente
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-cyan-500">IMC Niño</span> : Un cálculo diferente
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entender el IMC en niños y adolescentes: curvas de crecimiento y especificidades
          </p>
        </header>

        {/* Medical Warning */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Stethoscope className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-destructive mb-2">Consulta médica recomendada</h3>
              <p className="text-muted-foreground">
                El IMC en niños requiere una <strong>interpretación médica</strong>.
                Consulte a su <strong>pediatra</strong> o <strong>médico de cabecera</strong> para un seguimiento adaptado.
                La información a continuación es puramente informativa.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Difference with adults */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <AlertTriangle className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Diferencia entre IMC adulto y niño</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                A diferencia de los adultos, el <strong>IMC niño</strong> no se interpreta con umbrales fijos
                (18,5 / 25 / 30). En niños y adolescentes, el cuerpo evoluciona constantemente, y el IMC varía
                naturalmente según la edad y el sexo.
              </p>
              <p>
                Por lo tanto, se utilizan <strong>curvas de corpulencia</strong> (o curvas de percentiles) que permiten
                situar al niño en relación con otros niños de la misma edad y sexo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                <h4 className="font-bold text-destructive mb-2">IMC Adulto</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Umbrales fijos universales</li>
                  <li>• &lt;18,5 = delgadez</li>
                  <li>• 18,5-25 = normal</li>
                  <li>• 25-30 = sobrepeso</li>
                  <li>• &gt;30 = obesidad</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">IMC Niño</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Curvas de percentiles</li>
                  <li>• Varía según la edad</li>
                  <li>• Diferente niño/niña</li>
                  <li>• Interpretación relativa</li>
                  <li>• Seguimiento de la evolución</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Growth Curves */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <TrendingUp className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Curvas de crecimiento</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Las <strong>curvas de corpulencia</strong> están presentes en el carnet de salud de su hijo.
                Permiten seguir la evolución del IMC a lo largo del tiempo.
              </p>

              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-4">¿Cómo leer los percentiles?</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong className="text-info">3er percentil:</strong> Zona de delgadez</p>
                    <p><strong className="text-success">3er-97º percentil:</strong> Zona normal</p>
                    <p><strong className="text-warning">97º percentil:</strong> Sobrepeso</p>
                    <p><strong className="text-destructive">&gt;97º percentil:</strong> Obesidad</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      Un niño en el percentil 50 tiene un IMC superior al 50% de los niños de su edad e inferior al 50% restante.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Age groups */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Baby className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC según rangos de edad</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Lactante (0-2 años)</h4>
                <p className="text-sm text-muted-foreground">
                  El IMC generalmente no se calcula. Se utilizan las curvas peso/talla y el perímetro cefálico.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Niño (2-12 años)</h4>
                <p className="text-sm text-muted-foreground">
                  IMC interpretado con curvas de corpulencia. El "rebote de adiposidad" alrededor de los 6 años es vigilado.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Adolescente (12-18 años)</h4>
                <p className="text-sm text-muted-foreground">
                  Pubertad = variaciones importantes. Curvas específicas niño/niña esenciales.
                </p>
              </div>
            </div>
          </div>

          {/* When to consult */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Stethoscope className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">¿Cuándo consultar?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5">
                <h4 className="font-bold text-warning mb-3">Señales de alerta</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Cambio brusco de carril en la curva</li>
                  <li>• IMC &gt; percentil 97</li>
                  <li>• IMC &lt; percentil 3</li>
                  <li>• Rebote de adiposidad precoz (&lt;6 años)</li>
                  <li>• Preocupación del niño por su peso</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-3">Seguimiento regular</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Pesado y medición en cada visita médica</li>
                  <li>• Registro en las curvas del carnet de salud</li>
                  <li>• Seguimiento de la trayectoria, no solo un punto</li>
                  <li>• Discusión con el médico si hay preocupación</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <BookOpen className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Todo sobre el IMC infantil</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                El <strong>cálculo IMC niño</strong> utiliza la misma fórmula que para adultos (peso / talla²),
                pero la <strong>interpretación IMC niño</strong> es totalmente diferente. No se puede decir
                que un niño tiene sobrepeso simplemente porque su IMC supera 25.
              </p>
              <p>
                El <strong>IMC adolescente</strong> es particularmente delicado de interpretar durante la pubertad.
                Las variaciones hormonales provocan cambios corporales importantes, diferentes entre
                <strong> IMC niño</strong> e <strong>IMC niña</strong>.
              </p>
              <p>
                Para calcular el <strong>IMC bebé</strong> o el <strong>IMC lactante</strong>, los pediatras
                utilizan más bien las curvas de crecimiento peso/talla. El <strong>IMC niño 3 años</strong>,
                <strong>IMC niño 5 años</strong> o <strong>IMC niño 10 años</strong> se lee siempre en las
                curvas de percentiles.
              </p>
              <p>
                En caso de duda sobre el <strong>peso ideal niño</strong> o el <strong>IMC ideal niño</strong>,
                consulte a su pediatra quien podrá analizar la <strong>curva de corpulencia</strong> en su conjunto.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">¿Es usted adulto?</h3>
            <p className="text-muted-foreground mb-6">
              Use nuestra calculadora IMC estándar para adultos
            </p>
            <Link
              to="/es/imc"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calcular mi IMC adulto
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Calculadora IMC Niño - Herramienta informativa únicamente</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCNino;
