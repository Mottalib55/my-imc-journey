import { Header } from "@/components/Header";
import { AlertTriangle, XCircle, CheckCircle2, Users, Dumbbell, Baby, Clock, Globe, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

const LimitacoesIMC = () => {
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
            As limitações do IMC
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-warning">Limitações do IMC</span> : O que o IMC Não Revela
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Por que o IMC não é um indicador perfeito e quando ele pode ser enganoso
          </p>
        </header>

        {/* Main Warning */}
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-warning mb-2">O IMC é uma ferramenta de triagem, não um diagnóstico</h3>
              <p className="text-muted-foreground">
                Criado em 1832 por Adolphe Quetelet, o IMC foi concebido para estudos estatísticos de população,
                não para avaliar a saúde individual. Ele apresenta várias limitações importantes.
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
              <h2 className="text-2xl font-display font-bold">O que o IMC não mede</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">A composição corporal</h4>
                    <p className="text-sm text-muted-foreground">
                      O IMC não distingue músculo de gordura. 1 kg de músculo = 1 kg de gordura para o IMC.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">A distribuição de gordura</h4>
                    <p className="text-sm text-muted-foreground">
                      A gordura abdominal é mais perigosa que a gordura subcutânea. O IMC não vê isso.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">A densidade óssea</h4>
                    <p className="text-sm text-muted-foreground">
                      Ossos mais pesados aumentam o IMC sem impactar a saúde.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">O estado de saúde metabólica</h4>
                    <p className="text-sm text-muted-foreground">
                      Uma pessoa magra pode ter um mau perfil metabólico (colesterol, glicemia).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">A hidratação</h4>
                    <p className="text-sm text-muted-foreground">
                      A retenção de água pode aumentar temporariamente o IMC em 1 a 2 pontos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">A forma física</h4>
                    <p className="text-sm text-muted-foreground">
                      Duas pessoas com o mesmo IMC podem ter condições físicas muito diferentes.
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
              <h2 className="text-2xl font-display font-bold">Populações para as quais o IMC é inadequado</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Dumbbell className="w-5 h-5 text-orange-500" />
                  <h4 className="font-bold">Atletas e esportistas</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  A massa muscular elevada dá um IMC de "sobrepeso" ou "obesidade" quando o percentual de gordura é mínimo.
                </p>
                <Link to="/pt/imc-atleta" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  Saiba mais →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Baby className="w-5 h-5 text-cyan-500" />
                  <h4 className="font-bold">Crianças e adolescentes</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Os limites para adultos não se aplicam. É preciso usar as curvas de corpulência adaptadas à idade e ao sexo.
                </p>
                <Link to="/pt/imc-crianca" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  Saiba mais →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold">Idosos</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  A perda de massa muscular (sarcopenia) pode mascarar excesso de gordura. Um IMC "normal" pode ser enganoso.
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-pink-500" />
                  <h4 className="font-bold">Gestantes</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  O ganho de peso é normal e desejável durante a gravidez. O IMC pré-gestacional serve de referência.
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold">Certas etnias</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  As populações asiáticas têm riscos aumentados com IMC mais baixo. A OMS propõe limites adaptados (23 em vez de 25).
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Scale className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold">Morfologias extremas</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Pessoas muito altas ou muito baixas têm IMCs naturalmente diferentes devido à relação superfície/volume.
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
              <h2 className="text-2xl font-display font-bold">Alternativas e complementos ao IMC</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Indicador</th>
                    <th className="text-left py-3 px-4 font-bold">O que ele mede</th>
                    <th className="text-left py-3 px-4 font-bold">Limites recomendados</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Circunferência da cintura</td>
                    <td className="py-3 px-4">Gordura abdominal (visceral)</td>
                    <td className="py-3 px-4">&lt;94 cm (H) / &lt;80 cm (M)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Relação cintura/quadril</td>
                    <td className="py-3 px-4">Distribuição de gordura</td>
                    <td className="py-3 px-4">&lt;0,90 (H) / &lt;0,85 (M)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Relação cintura/altura</td>
                    <td className="py-3 px-4">Gordura central relativa</td>
                    <td className="py-3 px-4">&lt;0,5 (cintura &lt; metade da altura)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">% Gordura corporal</td>
                    <td className="py-3 px-4">Composição corporal real</td>
                    <td className="py-3 px-4">10-20% (H) / 18-28% (M)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">FFMI</td>
                    <td className="py-3 px-4">Massa magra (para atletas)</td>
                    <td className="py-3 px-4">18-25 (natural)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Impedanciometria</td>
                    <td className="py-3 px-4">Água, músculo, gordura, osso</td>
                    <td className="py-3 px-4">Varia segundo aparelho</td>
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
              <h2 className="text-2xl font-display font-bold">Quando o IMC continua útil</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Apesar de suas limitações, o IMC continua sendo uma ferramenta valiosa em certos contextos:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Primeira triagem rápida</strong>: identificar pessoas necessitando um balanço mais completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Estudos epidemiológicos</strong>: comparar populações em grande escala</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Acompanhamento individual</strong>: observar a evolução do peso ao longo do tempo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Adulto sedentário médio</strong>: para esta população, o IMC é bastante confiável</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Compreender as limitações do IMC</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                As <strong>limitações do IMC</strong> são numerosas e bem documentadas pela comunidade científica.
                Este <strong>IMC crítico</strong> não deve ser interpretado sozinho. Os <strong>defeitos do IMC</strong>
                incluem a incapacidade de diferenciar massa gorda e massa magra.
              </p>
              <p>
                <strong>Por que o IMC é imperfeito</strong>? Porque se trata de uma simples relação matemática.
                Os <strong>problemas do IMC</strong> são particularmente visíveis em atletas,
                crianças e idosos. O <strong>IMC confiável ou não</strong> depende do contexto de uso.
              </p>
              <p>
                As <strong>alternativas ao IMC</strong> como a circunferência da cintura ou o percentual de gordura corporal
                oferecem uma visão mais completa. <strong>O IMC é confiável</strong> para todos?
                Não, mas combinado com outros indicadores, continua sendo uma ferramenta de triagem útil.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calcule seu IMC com conhecimento de causa</h3>
            <p className="text-muted-foreground mb-6">
              Agora que você conhece as limitações, use nossa calculadora como primeiro indicador
            </p>
            <Link
              to="/pt/imc"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calcular meu IMC
            </Link>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Limitações do IMC - Compreender o índice de massa corporal</p>
        </footer>
      </div>
    </div>
  );
};

export default LimitacoesIMC;
