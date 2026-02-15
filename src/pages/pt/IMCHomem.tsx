import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { User, Dumbbell, Target, Heart, Scale, Activity, AlertTriangle, CheckCircle2, Globe } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const IMCHomemPt = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(78);
  const [height, setHeight] = useState(173);

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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-6">
            <User className="w-4 h-4" />
            Calculadora IMC para Homens
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-blue-500">IMC Homem</span> : Calculadora IMC Masculino e Peso
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No Brasil, 57,5% dos homens estão com sobrepeso ou obesidade (VIGITEL 2023). Calculadora de IMC com referências ABESO, VIGITEL e Guia Alimentar Brasileiro.
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-500" />
              Insira suas medidas
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Peso</label>
                  <span className="text-2xl font-bold text-blue-500">{weight} kg</span>
                </div>
                <Slider
                  value={[weight]}
                  onValueChange={handleWeightChange}
                  min={40}
                  max={200}
                  step={1}
                  className="py-4"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Altura</label>
                  <span className="text-2xl font-bold text-blue-500">{height} cm</span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={handleHeightChange}
                  min={140}
                  max={220}
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
          {/* Understanding IMC for Men */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <User className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Entendendo o IMC em Homens</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Segundo o <strong>VIGITEL 2023</strong>, <strong>57,5% dos homens brasileiros</strong> estão com sobrepeso ou obesidade,
                sendo que <strong>22,8%</strong> são classificados como obesos. Em <strong>Portugal</strong>, a situação é semelhante:
                <strong> 62% dos homens</strong> apresentam sobrepeso ou obesidade segundo dados da DGS e do inquérito IAN-AF.
              </p>
              <p>
                O <strong>homem brasileiro médio</strong> tem <strong>1,73 m</strong> de altura e pesa <strong>78 kg</strong> (IBGE),
                enquanto o <strong>homem português médio</strong> mede <strong>1,74 m</strong> e pesa <strong>80 kg</strong>.
                A <strong>circunferência da cintura</strong> é um indicador complementar essencial segundo a ABESO:
                acima de <strong>94 cm</strong> indica risco moderado e acima de <strong>102 cm</strong> indica risco elevado
                para doenças cardiovasculares e metabólicas.
              </p>
              <p>
                Diferenças regionais no Brasil são significativas: a região <strong>Sul apresenta 26,3% de obesidade</strong> entre
                homens, enquanto o <strong>Nordeste registra 18,7%</strong>. Essas variações estão ligadas a hábitos alimentares,
                nível de atividade física e fatores socioeconômicos regionais.
              </p>
            </div>
          </div>

          {/* IMC Table for Men */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Scale className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tabela IMC Homem</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Categoria</th>
                    <th className="text-left py-3 px-4 font-semibold">IMC</th>
                    <th className="text-left py-3 px-4 font-semibold">Exemplo (1,73 m, média BR)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Abaixo do peso
                    </td>
                    <td className="py-3 px-4">&lt; 18,5</td>
                    <td className="py-3 px-4">&lt; 55 kg</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Peso normal
                    </td>
                    <td className="py-3 px-4">18,5 - 24,9</td>
                    <td className="py-3 px-4">55 - 75 kg</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Sobrepeso
                    </td>
                    <td className="py-3 px-4">25 - 29,9</td>
                    <td className="py-3 px-4">75 - 90 kg</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesidade
                    </td>
                    <td className="py-3 px-4">≥ 30</td>
                    <td className="py-3 px-4">&gt; 90 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Ideal weight by height */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Peso Ideal Homem por Altura</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "1,65 m", min: 50, max: 68, ideal: 60 },
                { height: "1,69 m", min: 53, max: 71, ideal: 63 },
                { height: "1,73 m (média BR)", min: 55, max: 75, ideal: 66 },
                { height: "1,76 m", min: 57, max: 77, ideal: 68 },
                { height: "1,80 m", min: 60, max: 81, ideal: 71 },
                { height: "1,84 m", min: 63, max: 84, ideal: 74 },
              ].map((item) => (
                <div key={item.height} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className="font-semibold text-blue-500">{item.height}</span>
                  <span className="text-muted-foreground">
                    {item.min} - {item.max} kg <span className="text-success">(ideal: {item.ideal} kg)</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tips for men */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-success/10">
                  <Dumbbell className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-xl font-display font-bold">Exercício e Músculo</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>O <strong>futebol</strong> é o esporte mais praticado por homens brasileiros, com 30 milhões de praticantes em todo o país</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Academias de musculação: o <strong>Brasil tem a 2ª maior rede de academias do mundo</strong>, impulsionando o treino de força</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>A <strong>OMS recomenda 150 min de atividade moderada</strong> por semana para manutenção do peso saudável</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Apenas <strong>30,4% dos homens brasileiros</strong> são fisicamente ativos segundo o VIGITEL</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-warning/10">
                  <Heart className="w-6 h-6 text-warning" />
                </div>
                <h3 className="text-xl font-display font-bold">Saúde Masculina</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>Doenças cardiovasculares</strong>: principal causa de morte entre homens brasileiros (DataSUS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>Diabetes tipo 2</strong> atinge 9% dos homens brasileiros acima de 30 anos</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>Novembro Azul</strong>: campanha de conscientização sobre saúde masculina e câncer de próstata</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>38% dos homens brasileiros</strong> não procuram médico regularmente (Ministério da Saúde)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SUS and Obesity Treatment */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Globe className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">O SUS e o Tratamento da Obesidade Masculina</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O <strong>Sistema Único de Saúde (SUS)</strong> oferece tratamento gratuito para obesidade, incluindo
                acompanhamento nutricional, psicológico e endocrinológico. Os <strong>NASF (Núcleos de Apoio à Saúde
                da Família)</strong> garantem acesso gratuito a nutricionistas nas Unidades Básicas de Saúde em todo o Brasil.
              </p>
              <p>
                Para casos graves, o <strong>SUS cobre cirurgia bariátrica gratuitamente</strong> para pacientes com
                IMC ≥ 40 ou IMC ≥ 35 com comorbidades associadas (diabetes, hipertensão, apneia do sono).
                O <strong>Brasil realizou 11.000 cirurgias bariátricas pelo SUS em 2023</strong>, consolidando-se como
                referência em cirurgia metabólica na América Latina.
              </p>
              <p>
                O <strong>Guia Alimentar para a População Brasileira</strong>, elogiado pela Universidade de Harvard como
                um dos melhores do mundo, prioriza <strong>alimentos in natura</strong> e minimamente processados,
                desestimulando o consumo de ultraprocessados. Seguir suas recomendações é uma das formas mais eficazes
                de manter um IMC saudável.
              </p>
              <p>
                Em <strong>Portugal</strong>, o <strong>SNS (Serviço Nacional de Saúde)</strong> oferece tratamentos similares,
                incluindo consultas de nutrição, programas de exercício físico e cirurgia bariátrica para casos elegíveis,
                através das Unidades de Saúde Familiar e hospitais públicos.
              </p>
            </div>
          </div>

          {/* Body Culture in Brazil */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Heart className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Cultura do Corpo no Brasil e o IMC</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O Brasil possui uma <strong>cultura do corpo</strong> única, conhecida como "culto ao corpo", que
                influencia diretamente a forma como os homens interpretam e se relacionam com o IMC. A busca pelo
                corpo ideal está profundamente enraizada na sociedade brasileira, impactando decisões sobre dieta,
                exercício e até procedimentos estéticos.
              </p>
              <p>
                A <strong>cultura fitness e de musculação masculina</strong> cresceu exponencialmente no Brasil nas
                últimas décadas. Com mais de 30.000 academias no país, o treino de hipertrofia tornou-se parte do
                estilo de vida de milhões de homens, o que pode resultar em um IMC elevado por ganho de massa muscular,
                e não necessariamente por excesso de gordura.
              </p>
              <p>
                O impacto das <strong>redes sociais na imagem corporal masculina</strong> é cada vez mais significativo.
                Influenciadores fitness e padrões estéticos divulgados nas plataformas digitais podem gerar
                expectativas irrealistas e comportamentos alimentares de risco, como dietas restritivas extremas
                ou uso de suplementos sem orientação profissional.
              </p>
              <p>
                O <strong>Brasil é o 2º país com mais cirurgias plásticas masculinas no mundo</strong> segundo a
                ISAPS (International Society of Aesthetic Plastic Surgery), refletindo a pressão estética que
                os homens brasileiros enfrentam. É fundamental lembrar que o IMC é apenas um dos indicadores de
                saúde e deve ser avaliado em conjunto com outros parâmetros clínicos.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Activity className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tudo sobre o IMC Masculino no Brasil e em Portugal</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                A <strong>calculadora de IMC para homens brasileiros</strong> leva em consideração dados do
                <strong> IBGE</strong>, <strong>VIGITEL</strong> e diretrizes da <strong>ABESO</strong> (Associação Brasileira
                para o Estudo da Obesidade e Síndrome Metabólica). Para o homem brasileiro médio de <strong>1,73 m</strong>,
                o <strong>peso ideal</strong> situa-se entre 55 e 75 kg, com um IMC entre 18,5 e 24,9.
              </p>
              <p>
                As <strong>diferenças regionais no Brasil</strong> são marcantes: a região Sul apresenta as maiores taxas
                de obesidade masculina (26,3%), seguida pelo Sudeste (23,1%), Centro-Oeste (22,5%), Norte (20,2%) e
                Nordeste (18,7%). Essas variações refletem diferenças nos padrões alimentares regionais, acesso a
                serviços de saúde e condições socioeconômicas, conforme dados do <strong>DataSUS</strong> e do
                <strong> Ministério da Saúde</strong>.
              </p>
              <p>
                Em <strong>Portugal</strong>, a <strong>DGS (Direção-Geral da Saúde)</strong> monitora a prevalência
                de sobrepeso e obesidade masculina, que atinge 62% dos homens segundo o inquérito IAN-AF. O
                <strong> Programa Nacional para a Promoção da Alimentação Saudável (PNPAS)</strong> oferece orientações
                específicas para a população portuguesa. Para homens acima de 50 anos, tanto no Brasil quanto em
                Portugal, um IMC entre 22 e 27 pode ser aceitável, desde que acompanhado de exames regulares e
                estilo de vida ativo.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Calculadora IMC para Homens - Ferramenta Informativa</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCHomemPt;
