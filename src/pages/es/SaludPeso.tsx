import { Header } from "@/components/Header";
import { Heart, Activity, Apple, Moon, Brain, Scale, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const SaludPeso = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-success/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Salud y bienestar
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-success">Salud y Peso</span> : Guía completa
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprender la relación entre peso, IMC y salud global
          </p>
        </header>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Scale className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Peso y salud: una relación compleja</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                El <strong>peso</strong> es solo un indicador entre otros de su estado de salud.
                Un <strong>peso saludable</strong> depende de numerosos factores: genética, morfología, actividad física,
                alimentación, sueño y bienestar mental.
              </p>
              <p>
                La obsesión por la cifra en la báscula puede ser contraproducente. Es más importante
                concentrarse en <strong>hábitos de vida saludables</strong> que en un peso objetivo preciso.
                La salud no se mide únicamente en kilogramos.
              </p>
            </div>
          </div>

          {/* Health Risks */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Riesgos relacionados con el peso</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-warning">Riesgos del sobrepeso y la obesidad</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Enfermedades cardiovasculares (infarto, ACV)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Diabetes tipo 2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Hipertensión arterial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Apnea del sueño</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Ciertos cánceres</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Problemas articulares</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-info">Riesgos de la insuficiencia ponderal</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Carencias nutricionales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Sistema inmunitario debilitado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Osteoporosis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Trastornos hormonales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Fatiga crónica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Problemas de fertilidad</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pillars of health */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">Los 5 pilares de un peso saludable</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-green-500/10">
                    <Apple className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="font-bold">Alimentación</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Privilegie alimentos no procesados</li>
                  <li>Coma verduras en cada comida</li>
                  <li>Limite los azúcares añadidos</li>
                  <li>Hidrátese suficientemente</li>
                  <li>Escuche su hambre y saciedad</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-orange-500/10">
                    <Activity className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold">Actividad física</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>150 min de actividad moderada/semana</li>
                  <li>Incluya fortalecimiento muscular</li>
                  <li>Muévase regularmente durante el día</li>
                  <li>Encuentre una actividad que le guste</li>
                  <li>Progrese gradualmente</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10">
                    <Moon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="font-bold">Sueño</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Duerma 7-9 horas por noche</li>
                  <li>Horarios regulares</li>
                  <li>Evite pantallas antes de dormir</li>
                  <li>Habitación fresca y oscura</li>
                  <li>La falta de sueño favorece el aumento de peso</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <Brain className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-bold">Salud mental</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Gestione su estrés</li>
                  <li>Evite la alimentación emocional</li>
                  <li>Practique la atención plena</li>
                  <li>Acepte su cuerpo</li>
                  <li>Consulte si es necesario</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-pink-500/10">
                    <Heart className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="font-bold">Seguimiento médico</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Balance de salud anual</li>
                  <li>Seguimiento del perímetro de cintura</li>
                  <li>Control tensión, glucemia, colesterol</li>
                  <li>Consulte un nutricionista si es necesario</li>
                  <li>No siga dietas extremas</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-success/10">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="font-bold">Progresión</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Fije objetivos realistas</li>
                  <li>Máximo 0,5-1 kg/semana</li>
                  <li>Celebre las pequeñas victorias</li>
                  <li>La constancia prevalece sobre la intensidad</li>
                  <li>Piense a largo plazo</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Healthy weight tips */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Consejos para un peso saludable</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-success">Lo que funciona</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Cambios <strong>progresivos y duraderos</strong> de hábitos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Alimentación <strong>equilibrada</strong>, sin restricción extrema</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Actividad física <strong>regular y placentera</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Sueño de <strong>calidad</strong> (7-8h/noche)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Gestión del <strong>estrés</strong> y las emociones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Seguimiento por un <strong>profesional</strong> si es necesario</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-destructive">Lo que no funciona</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Dietas <strong>drásticas</strong> y restrictivas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Complementos <strong>milagrosos</strong> y píldoras adelgazantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Pesarse <strong>todos los días</strong> (variaciones normales)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Objetivos de pérdida de peso <strong>irrealistas</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Comparar su cuerpo con <strong>otros</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Ignorar las señales de <strong>hambre/saciedad</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Salud y peso: lo esencial</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Mantener un <strong>peso saludable</strong> es importante para su bienestar global. La relación
                entre <strong>peso y salud</strong> es compleja y depende de numerosos factores. El <strong>IMC</strong>
                es solo un indicador entre otros para evaluar si está en una zona de peso saludable.
              </p>
              <p>
                Para <strong>perder peso de manera saludable</strong> o <strong>mantener su peso</strong>, privilegie un
                enfoque global: alimentación equilibrada, actividad física regular, sueño suficiente y
                gestión del estrés. Evite las dietas yo-yo que son perjudiciales para la salud.
              </p>
              <p>
                Un <strong>estilo de vida saludable</strong> es más importante que una cifra en la báscula. Concéntrese
                en los <strong>hábitos de vida</strong> más que en el peso. En caso de duda, consulte a un
                profesional de la salud para un acompañamiento personalizado.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calcule su IMC</h3>
            <p className="text-muted-foreground mb-6">
              Primer indicador para evaluar su peso saludable
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
          <p>© 2024 Salud y Peso - Guía de bienestar</p>
        </footer>
      </div>
    </div>
  );
};

export default SaludPeso;
