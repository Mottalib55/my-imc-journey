import { Header } from "@/components/Header";
import { Heart, Activity, Apple, Moon, Brain, Scale, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const SaudePeso = () => {
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
            Saúde e bem-estar
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-success">Saúde e Peso</span> : Guia completo
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compreender a relação entre peso, IMC e saúde global
          </p>
        </header>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Scale className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Peso e saúde: uma relação complexa</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O <strong>peso</strong> é apenas um indicador entre outros do seu estado de saúde.
                Um <strong>peso saudável</strong> depende de numerosos fatores: genética, morfologia, atividade física,
                alimentação, sono e bem-estar mental.
              </p>
              <p>
                A obsessão com o número na balança pode ser contraproducente. É mais importante
                se concentrar em <strong>hábitos de vida saudáveis</strong> do que em um peso alvo preciso.
                A saúde não se mede unicamente em quilogramas.
              </p>
            </div>
          </div>

          {/* Health Risks */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Riscos relacionados ao peso</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-warning">Riscos do sobrepeso e da obesidade</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Doenças cardiovasculares (infarto, AVC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Diabetes tipo 2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Hipertensão arterial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Apneia do sono</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Certos cânceres</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Problemas articulares</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-info">Riscos da insuficiência ponderal</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Carências nutricionais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Sistema imunológico enfraquecido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Osteoporose</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Distúrbios hormonais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Fadiga crônica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Problemas de fertilidade</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pillars of health */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">Os 5 pilares de um peso saudável</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-green-500/10">
                    <Apple className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="font-bold">Alimentação</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Privilegie alimentos não processados</li>
                  <li>Coma vegetais em cada refeição</li>
                  <li>Limite açúcares adicionados</li>
                  <li>Hidrate-se suficientemente</li>
                  <li>Escute sua fome e saciedade</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-orange-500/10">
                    <Activity className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold">Atividade física</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>150 min de atividade moderada/semana</li>
                  <li>Inclua fortalecimento muscular</li>
                  <li>Mova-se regularmente durante o dia</li>
                  <li>Encontre uma atividade que goste</li>
                  <li>Progrida gradualmente</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10">
                    <Moon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="font-bold">Sono</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Durma 7-9 horas por noite</li>
                  <li>Horários regulares</li>
                  <li>Evite telas antes de dormir</li>
                  <li>Quarto fresco e escuro</li>
                  <li>Falta de sono favorece ganho de peso</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <Brain className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-bold">Saúde mental</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Gerencie seu estresse</li>
                  <li>Evite alimentação emocional</li>
                  <li>Pratique atenção plena</li>
                  <li>Aceite seu corpo</li>
                  <li>Consulte se necessário</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-pink-500/10">
                    <Heart className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="font-bold">Acompanhamento médico</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Balanço de saúde anual</li>
                  <li>Acompanhamento da circunferência da cintura</li>
                  <li>Controle pressão, glicemia, colesterol</li>
                  <li>Consulte nutricionista se necessário</li>
                  <li>Não siga dietas extremas</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-success/10">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="font-bold">Progressão</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Estabeleça objetivos realistas</li>
                  <li>Máximo 0,5-1 kg/semana</li>
                  <li>Celebre pequenas vitórias</li>
                  <li>Constância prevalece sobre intensidade</li>
                  <li>Pense a longo prazo</li>
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
              <h2 className="text-2xl font-display font-bold">Conselhos para um peso saudável</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-success">O que funciona</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Mudanças <strong>progressivas e duráveis</strong> de hábitos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Alimentação <strong>equilibrada</strong>, sem restrição extrema</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Atividade física <strong>regular e prazerosa</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Sono de <strong>qualidade</strong> (7-8h/noite)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Gerenciamento do <strong>estresse</strong> e emoções</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Acompanhamento por <strong>profissional</strong> se necessário</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-destructive">O que não funciona</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Dietas <strong>drásticas</strong> e restritivas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Suplementos <strong>milagrosos</strong> e pílulas emagrecedoras</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Pesar-se <strong>todos os dias</strong> (variações normais)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Objetivos de perda de peso <strong>irrealistas</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Comparar seu corpo aos <strong>outros</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Ignorar sinais de <strong>fome/saciedade</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Saúde e peso: o essencial</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Manter um <strong>peso saudável</strong> é importante para seu bem-estar global. A relação
                entre <strong>peso e saúde</strong> é complexa e depende de numerosos fatores. O <strong>IMC</strong>
                é apenas um indicador entre outros para avaliar se você está numa zona de peso saudável.
              </p>
              <p>
                Para <strong>perder peso de forma saudável</strong> ou <strong>manter seu peso</strong>, privilegie uma
                abordagem global: alimentação equilibrada, atividade física regular, sono suficiente e
                gerenciamento do estresse. Evite dietas yo-yo que são prejudiciais à saúde.
              </p>
              <p>
                Um <strong>estilo de vida saudável</strong> é mais importante que um número na balança. Concentre-se
                nos <strong>hábitos de vida</strong> ao invés do peso. Em caso de dúvida, consulte um
                profissional de saúde para acompanhamento personalizado.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calcule seu IMC</h3>
            <p className="text-muted-foreground mb-6">
              Primeiro indicador para avaliar seu peso saudável
            </p>
            <Link
              to="/pt/imc"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calcular meu IMC
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Saúde e Peso - Guia bem-estar</p>
        </footer>
      </div>
    </div>
  );
};

export default SaudePeso;
