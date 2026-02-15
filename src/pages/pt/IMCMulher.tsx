import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Users, Heart, Target, Baby, Scale, Activity, AlertTriangle, CheckCircle2, Sparkles, Globe } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const IMCMulherPt = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(65);
  const [height, setHeight] = useState(161);

  const calculateBMI = useCallback((w: number, h: number) => {
    const heightInM = h / 100;
    const calculatedBmi = w / (heightInM * heightInM);
    setBmi(calculatedBmi);
  }, []);

  // Calculate BMI on initial load
  useEffect(() => {
    calculateBMI(weight, height);
  }, []);

  const handleWeightChange = (value: number[]) => {
    setWeight(value[0]);
    calculateBMI(value[0], height);
  };

  const handleHeightChange = (value: number[]) => {
    setHeight(value[0]);
    calculateBMI(weight, value[0]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-pink-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-500 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Calculadora IMC para Mulheres
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-pink-500">IMC Mulher</span> : Calculadora IMC Feminino e Peso
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            No Brasil, 62,6% das mulheres estão com sobrepeso ou obesidade (VIGITEL 2023). Calculadora IMC com referências ABESO, VIGITEL e Guia Alimentar Brasileiro.
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-pink-500" />
              Insira suas medidas
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Peso</label>
                  <span className="text-2xl font-bold text-pink-500">{weight} kg</span>
                </div>
                <Slider
                  value={[weight]}
                  onValueChange={handleWeightChange}
                  min={35}
                  max={150}
                  step={1}
                  className="py-4"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Altura</label>
                  <span className="text-2xl font-bold text-pink-500">{height} cm</span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={handleHeightChange}
                  min={130}
                  max={200}
                  step={1}
                  className="py-4"
                />
              </div>
            </div>
          </div>

          <BMIGauge bmi={bmi} />
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Understanding IMC for Women */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Users className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Entendendo o IMC em Mulheres Brasileiras e Portuguesas</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Segundo o <strong>VIGITEL 2023</strong> (Ministério da Saúde), <strong>62,6% das mulheres brasileiras</strong> estão com sobrepeso ou obesidade,
                sendo <strong>24,4% obesas</strong>. Em <strong>Portugal</strong>, cerca de <strong>55% das mulheres</strong> apresentam sobrepeso ou obesidade (DGS).
                A mulher brasileira média mede <strong>1,61 m</strong> e pesa <strong>65 kg</strong> (IBGE).
              </p>
              <p>
                Existem diferenças regionais significativas no Brasil: a região <strong>Sul apresenta 27,1% de obesidade feminina</strong>,
                enquanto o <strong>Norte registra 19,3%</strong>. Fatores socioeconômicos, culturais e de acesso a alimentação saudável explicam essas variações.
              </p>
              <p>
                A <strong>circunferência da cintura</strong> é um indicador complementar essencial segundo a <strong>ABESO</strong>:
                acima de <strong>80 cm</strong> indica risco cardiovascular moderado, e acima de <strong>88 cm</strong> indica risco alto.
                Este indicador mede a gordura abdominal visceral, mais perigosa para a saúde do que a gordura subcutânea.
              </p>
            </div>
          </div>

          {/* IMC Table for Women */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Scale className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tabela IMC Mulher</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Categoria</th>
                    <th className="text-left py-3 px-4 font-semibold">IMC</th>
                    <th className="text-left py-3 px-4 font-semibold">Exemplo (1,61 m, média BR)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Abaixo do peso
                    </td>
                    <td className="py-3 px-4">&lt; 18,5</td>
                    <td className="py-3 px-4">&lt; 48 kg</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Peso normal
                    </td>
                    <td className="py-3 px-4">18,5 - 24,9</td>
                    <td className="py-3 px-4">48 - 65 kg</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Sobrepeso
                    </td>
                    <td className="py-3 px-4">25 - 29,9</td>
                    <td className="py-3 px-4">65 - 78 kg</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesidade
                    </td>
                    <td className="py-3 px-4">≥ 30</td>
                    <td className="py-3 px-4">&gt; 78 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Ideal weight by height */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Target className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Peso Ideal Mulher por Altura</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "1,53 m", min: 43, max: 58, ideal: 51 },
                { height: "1,57 m", min: 46, max: 61, ideal: 54 },
                { height: "1,61 m (média BR)", min: 48, max: 65, ideal: 57 },
                { height: "1,64 m", min: 50, max: 67, ideal: 59 },
                { height: "1,68 m", min: 52, max: 70, ideal: 62 },
                { height: "1,72 m", min: 55, max: 74, ideal: 65 },
              ].map((item) => (
                <div key={item.height} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className="font-semibold text-pink-500">{item.height}</span>
                  <span className="text-muted-foreground">
                    {item.min} - {item.max} kg <span className="text-success">(ideal: {item.ideal} kg)</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Women-specific factors */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-purple-500/10">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-display font-bold">Ciclo Hormonal e Peso</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>O peso pode variar de <strong>1 a 3 kg</strong> dependendo do ciclo menstrual</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span><strong>SOP afeta 15% das brasileiras</strong> (FEBRASGO), dificultando o controle de peso</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Pese-se sempre no <strong>mesmo momento</strong> do ciclo para comparações precisas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>A <strong>transição menopáusica no Brasil</strong> ocorre em média aos <strong>48 anos</strong>, alterando a distribuição de gordura</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-pink-500/10">
                  <Baby className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-display font-bold">Gravidez e IMC</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span><strong>SUS</strong>: pré-natal completo gratuito com monitoramento de peso em todas as UBS</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Diabetes gestacional</strong>: afeta <strong>18% das gestantes brasileiras</strong> (FEBRASGO)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Ganho de peso recomendado: <strong>11-16 kg</strong> (IMC normal pré-gestacional)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Programa Mãe Coruja</strong> (Pernambuco) e outros programas estaduais de acompanhamento materno</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Cultura do Corpo Feminino no Brasil */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-amber-500/10">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Cultura do Corpo Feminino no Brasil</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O Brasil possui uma cultura única de <strong>"culto ao corpo"</strong> que impacta diretamente a saúde mental e física das mulheres.
                O país é <strong>1º lugar mundial em cirurgias plásticas femininas</strong> segundo a ISAPS (International Society of Aesthetic Plastic Surgery),
                refletindo a pressão estética intensa sobre o corpo feminino.
              </p>
              <p>
                Essa pressão contribui para o aumento de <strong>transtornos alimentares</strong> como anorexia e bulimia,
                especialmente entre mulheres jovens de 15 a 29 anos. O uso excessivo de redes sociais amplifica a comparação corporal
                e a insatisfação com a autoimagem.
              </p>
              <p>
                O movimento <strong>body positive</strong> vem ganhando força no Brasil, aliado a campanhas como o <strong>Outubro Rosa</strong>,
                que promovem uma relação mais saudável com o corpo. A evolução dos <strong>padrões de beleza</strong> — do "corpo violão"
                ao body positive — representa uma mudança cultural importante. O IMC deve ser usado como ferramenta de saúde,
                nunca como meta estética.
              </p>
            </div>
          </div>

          {/* O SUS e a Saúde da Mulher */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Globe className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">O SUS e a Saúde da Mulher</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O <strong>Sistema Único de Saúde (SUS)</strong> oferece atendimento integral à saúde da mulher, incluindo
                <strong> mamografia gratuita</strong> a partir dos 40 anos, exame de <strong>Papanicolaou</strong> e
                <strong> acompanhamento nutricional</strong> via NASF (Núcleo Ampliado de Saúde da Família).
                Esses serviços são essenciais para a prevenção e promoção da saúde feminina em todas as faixas de IMC.
              </p>
              <p>
                Para mulheres com <strong>obesidade grau III</strong> (IMC ≥ 40) ou grau II (IMC ≥ 35) com comorbidades,
                o SUS disponibiliza a <strong>cirurgia bariátrica</strong> gratuitamente, após avaliação multidisciplinar
                de pelo menos 2 anos. É um dos maiores programas públicos de cirurgia bariátrica do mundo.
              </p>
              <p>
                O <strong>"Programa Saúde da Mulher"</strong> do Ministério da Saúde integra ações de planejamento familiar,
                saúde reprodutiva, prevenção do câncer de mama e colo de útero, e orientação nutricional.
                Em Portugal, o <strong>SNS</strong> (Serviço Nacional de Saúde) oferece serviços semelhantes através da DGS (Direção-Geral da Saúde).
              </p>
            </div>
          </div>

          {/* Menopause */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC e Menopausa</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Durante a <strong>menopausa</strong>, as mudanças hormonais favorecem o ganho de peso, especialmente na
                área abdominal. O metabolismo desacelera e a massa muscular diminui naturalmente.
                Portanto é normal ganhar alguns quilos após os 50.
              </p>
              <p>
                Para manter um <strong>IMC saudável após os 50</strong> ou <strong>IMC após os 60</strong>,
                foque em uma dieta rica em <strong>proteínas</strong> e <strong>cálcio</strong>,
                e mantenha atividade física regular incluindo <strong>treino de força</strong>.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Activity className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tudo sobre o IMC Feminino</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                A <strong>calculadora de IMC para mulheres</strong> é uma ferramenta essencial para avaliar sua <strong>composição corporal feminina</strong>.
                Baseada nas referências da <strong>ABESO</strong> (Associação Brasileira para o Estudo da Obesidade),
                dos dados do <strong>VIGITEL</strong> (Ministério da Saúde) e das diretrizes da <strong>FEBRASGO</strong>,
                nossa calculadora oferece respostas instantâneas e contextualizadas para a realidade brasileira e portuguesa.
              </p>
              <p>
                O <strong>IMC ideal para mulheres</strong> está entre 19 e 24. Para a mulher brasileira média de <strong>1,61 m</strong> (IBGE),
                o <strong>peso ideal</strong> é aproximadamente 57 kg. O <strong>Guia Alimentar para a População Brasileira</strong>
                recomenda uma alimentação baseada em alimentos in natura e minimamente processados para manter um peso saudável.
              </p>
              <p>
                <strong>Qual deve ser meu IMC mulher</strong>? A faixa saudável é 18,5-24,9, mas mulheres atléticas podem estar ligeiramente acima.
                O <strong>IMC para mulheres acima de 40</strong> permanece numericamente igual, mas a composição corporal muda.
                Consulte dados da <strong>DGS Portugal</strong> e do <strong>Ministério da Saúde do Brasil</strong> para orientações atualizadas.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Calculadora IMC para Mulheres — Fontes: ABESO, VIGITEL, FEBRASGO, IBGE, Ministério da Saúde, DGS Portugal</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCMulherPt;
