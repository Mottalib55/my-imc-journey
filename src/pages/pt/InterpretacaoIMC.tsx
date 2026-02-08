import { Header } from "@/components/Header";
import { BookOpen, TrendingUp, TrendingDown, Target, AlertTriangle, CheckCircle2, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const InterpretacaoIMC = () => {
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
            Guia de interpretação
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Interpretação IMC</span> : Compreender seus resultados
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Como ler e interpretar corretamente seu Índice de Massa Corporal
          </p>
        </header>

        <div className="space-y-8">
          {/* What does IMC mean */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">O que significa seu IMC?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O <strong>IMC</strong> (Índice de Massa Corporal) é um indicador que permite avaliar
                rapidamente se seu peso está adequado à sua altura. Ele se calcula dividindo o peso (em kg)
                pela altura ao quadrado (em metros).
              </p>
              <p>
                <strong>Importante:</strong> O IMC é uma ferramenta de triagem, não um diagnóstico. Um médico
                levará em conta outros fatores (circunferência da cintura, massa muscular, histórico médico)
                para avaliar seu estado de saúde.
              </p>
            </div>
          </div>

          {/* Interpretation by category */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Interpretação por categoria</h2>
            </div>

            <div className="space-y-6">
              {/* Underweight */}
              <div className="border-l-4 border-info pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="w-5 h-5 text-info" />
                  <h3 className="font-bold text-lg">IMC inferior a 18,5: Magreza</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Um IMC abaixo de 18,5 indica insuficiência ponderal. Isso pode significar:
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Aporte calórico insuficiente</li>
                  <li>• Metabolismo muito rápido</li>
                  <li>• Possível transtorno alimentar</li>
                  <li>• Risco de carências nutricionais</li>
                </ul>
                <p className="text-info font-medium mt-3">
                  Conselho: Consulte um médico para identificar a causa e adaptar sua alimentação.
                </p>
              </div>

              {/* Normal */}
              <div className="border-l-4 border-success pl-6 py-4 bg-success/5 rounded-r-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <h3 className="font-bold text-lg">IMC entre 18,5 e 24,9: Peso normal</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Esta é a zona ideal! Seu peso está equilibrado em relação à sua altura.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Riscos de saúde minimizados</li>
                  <li>• Bom equilíbrio energético</li>
                  <li>• Objetivo a manter</li>
                </ul>
                <p className="text-success font-medium mt-3">
                  Conselho: Mantenha seus bons hábitos alimentares e sua atividade física.
                </p>
              </div>

              {/* Overweight */}
              <div className="border-l-4 border-warning pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-warning" />
                  <h3 className="font-bold text-lg">IMC entre 25 e 29,9: Sobrepeso</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Seu peso excede ligeiramente a norma. É um sinal de alerta, não uma emergência.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Risco aumentado de doenças crônicas</li>
                  <li>• Pressão arterial potencialmente elevada</li>
                  <li>• Pode ser devido à massa muscular (atletas)</li>
                </ul>
                <p className="text-warning font-medium mt-3">
                  Conselho: Adote uma alimentação equilibrada e aumente sua atividade física.
                </p>
              </div>

              {/* Obesity */}
              <div className="border-l-4 border-destructive pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <h3 className="font-bold text-lg">IMC superior a 30: Obesidade</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  A obesidade aumenta significativamente os riscos para a saúde.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Classe I (30-34,9): Obesidade moderada</li>
                  <li>• Classe II (35-39,9): Obesidade severa</li>
                  <li>• Classe III (≥40): Obesidade mórbida</li>
                </ul>
                <p className="text-destructive font-medium mt-3">
                  Conselho: Uma consulta médica é recomendada para acompanhamento personalizado.
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
              <h2 className="text-2xl font-display font-bold">Fatores a considerar</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">O IMC pode ser distorcido por:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>A massa muscular</strong>: atletas têm um IMC mais elevado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>A idade</strong>: idosos perdem massa muscular</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>O sexo</strong>: mulheres têm naturalmente mais gordura</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>A origem étnica</strong>: limites diferentes segundo as populações</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Indicadores complementares:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Circunferência da cintura</strong>: &lt;94 cm (H) / &lt;80 cm (M)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Relação cintura/quadril</strong>: distribuição de gordura</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Gordura corporal %</strong>: composição corporal real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Exame de sangue</strong>: colesterol, glicemia, etc.</span>
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
              <h2 className="text-2xl font-display font-bold">O que fazer com seu resultado?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Seu IMC é apenas um ponto de partida. Aqui estão as próximas etapas recomendadas:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Anote seu IMC atual</strong> como referência</li>
                <li><strong>Meça sua circunferência da cintura</strong> para completar a avaliação</li>
                <li><strong>Consulte um profissional de saúde</strong> se seu IMC estiver fora das normas</li>
                <li><strong>Estabeleça objetivos realistas</strong>: perder 0,5 a 1 kg por semana no máximo</li>
                <li><strong>Acompanhe sua evolução</strong>: pese-se uma vez por semana, mesmo dia, mesma hora</li>
              </ol>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Compreender a interpretação do IMC</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                A <strong>interpretação IMC</strong> é essencial para compreender o que significa
                seu <strong>resultado IMC</strong>. Saber <strong>ler seu IMC</strong> permite
                identificar se você está numa zona de peso saudável ou se ajustes
                são necessários.
              </p>
              <p>
                <strong>Como interpretar o IMC</strong>? As categorias OMS definem claramente
                o que <strong>significa um IMC</strong> de 22, 25 ou 30. A <strong>análise IMC</strong>
                deve sempre levar em conta o contexto: idade, sexo, atividade física.
              </p>
              <p>
                O <strong>IMC ideal</strong> se situa entre 18,5 e 24,9. <strong>Compreender seu IMC</strong>
                é também saber que este índice tem limites. A <strong>explicação IMC</strong>
                completa inclui a consideração de outros indicadores como a circunferência da cintura.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calcule seu IMC agora</h3>
            <p className="text-muted-foreground mb-6">
              Use nossa calculadora gratuita para conhecer seu índice de massa corporal
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
          <p>© 2024 Interpretação IMC - Guia completo</p>
        </footer>
      </div>
    </div>
  );
};

export default InterpretacaoIMC;
