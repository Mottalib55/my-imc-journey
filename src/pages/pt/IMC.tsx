import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Calculator, Activity, Target, BookOpen, Scale, TrendingUp, Heart, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";
import { RelatedPages } from "@/components/RelatedPages";

const IMCPt = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(74);
  const [height, setHeight] = useState(171);

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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-green-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            Calculadora IMC Gratis
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Calculadora IMC Brasil e Portugal</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calcule seu Indice de Massa Corporal com dados contextualizados para a realidade brasileira e portuguesa
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary" />
              Insira suas medidas
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Peso</label>
                  <span className="text-2xl font-bold text-primary">{weight} kg</span>
                </div>
                <Slider
                  value={[weight]}
                  onValueChange={handleWeightChange}
                  min={30}
                  max={200}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>30 kg</span>
                  <span>200 kg</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Altura</label>
                  <span className="text-2xl font-bold text-primary">{height} cm</span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={handleHeightChange}
                  min={100}
                  max={220}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>100 cm</span>
                  <span>220 cm</span>
                </div>
              </div>
            </div>
          </div>

          <BMIGauge bmi={bmi} />
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Contextualized intro: Brazil + Portugal */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Obesidade no Brasil e em Portugal: Um Panorama Preocupante</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O <strong>IMC (Indice de Massa Corporal)</strong> e uma ferramenta essencial para avaliar o estado nutricional
                da populacao. No Brasil, os dados do <strong>VIGITEL 2023</strong> (Vigilancia de Fatores de Risco e Protecao
                para Doencas Cronicas por Inquerito Telefonico) revelam que <strong>26,8% dos adultos brasileiros sao obesos</strong>,
                um aumento alarmante em relacao aos 11,8% registrados em 2006. Mais da metade da populacao adulta (61,4%)
                apresenta excesso de peso (IMC acima de 25).
              </p>
              <p>
                Em <strong>Portugal</strong>, a situacao e igualmente preocupante: segundo a <strong>DGS (Direcao-Geral da Saude)</strong>,
                cerca de <strong>28,7% dos adultos portugueses vivem com obesidade</strong>, e 53,6% apresentam pre-obesidade ou
                obesidade. O Inquerito Nacional de Saude (INS) confirma que Portugal esta entre os paises europeus com maiores
                taxas de excesso de peso, especialmente nas faixas etarias acima de 45 anos.
              </p>
              <p>
                No Brasil, existem <strong>disparidades regionais significativas</strong>. A regiao Sul apresenta as maiores
                taxas de obesidade (29,5%), influenciada pela dieta rica em carnes e embutidos e pelo clima frio que favorece
                refeicoes mais caloricas. A regiao Norte registra as menores taxas (22,1%), possivelmente pela maior presenca
                de alimentos in natura na dieta, como peixes, acai e frutas tropicais. O Sudeste (27,2%) e o Nordeste (25,8%)
                ficam em posicoes intermediarias, enquanto o Centro-Oeste (27,9%) acompanha a tendencia nacional.
              </p>
              <p>
                A <strong>ABESO (Associacao Brasileira para o Estudo da Obesidade e Sindrome Metabolica)</strong> classifica a
                obesidade como uma doenca cronica, multifatorial e recidivante, e alerta que o Brasil pode atingir 30% de
                prevalencia de obesidade adulta ate 2030 se as tendencias atuais nao forem revertidas. A entidade recomenda o
                calculo regular do IMC como primeiro passo para o diagnostico e acompanhamento nutricional.
              </p>
            </div>
          </div>

          {/* Guia Alimentar Brasileiro */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-green-500/10">
                <Heart className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">O Guia Alimentar Brasileiro: Referencia Mundial</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O <strong>Guia Alimentar para a Populacao Brasileira</strong>, publicado pelo Ministerio da Saude em 2014, e
                considerado um dos documentos de orientacao alimentar mais inovadores do mundo. A <strong>Escola de Saude
                Publica de Harvard</strong> elogiou publicamente o guia brasileiro, classificando-o como um modelo a ser
                seguido por outros paises. A FAO (Organizacao das Nacoes Unidas para Alimentacao e Agricultura) tambem o
                reconhece como referencia global.
              </p>
              <p>
                Ao contrario das tradicionais <strong>piramides alimentares</strong> que classificam alimentos por grupos
                nutricionais (carboidratos, proteinas, gorduras), o guia brasileiro inovou ao organizar os alimentos pelo
                <strong> grau de processamento industrial</strong>. Essa abordagem revolucionaria reconhece que o problema
                alimentar moderno nao esta apenas em "o que" comemos, mas em "como" o alimento foi produzido e transformado.
              </p>
              <p>
                A classificacao <strong>NOVA</strong>, desenvolvida pelo epidemiologista brasileiro Carlos Monteiro (USP),
                divide os alimentos em quatro categorias:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Alimentos in natura ou minimamente processados:</strong> frutas, legumes, verduras, graos, ovos,
                  carnes frescas, leite. Sao a base da alimentacao saudavel. O acai, a mandioca, o feijao e o arroz sao
                  exemplos tipicamente brasileiros.
                </li>
                <li>
                  <strong>Ingredientes culinarios processados:</strong> oleos, acucar, sal, farinhas. Usados em pequenas
                  quantidades para cozinhar alimentos in natura. Incluem o azeite de dende e o oleo de coco, tradicionais
                  na culinaria nordestina e amazonense.
                </li>
                <li>
                  <strong>Alimentos processados:</strong> conservas, queijos, paes artesanais. Fabricados com adicao de
                  sal, acucar ou outra substancia de uso culinario a alimentos in natura. Exemplos brasileiros incluem
                  a goiabada, o queijo minas e a carne de sol.
                </li>
                <li>
                  <strong>Alimentos ultraprocessados:</strong> refrigerantes, biscoitos recheados, salgadinhos de pacote,
                  macarrao instantaneo, embutidos. Formulacoes industriais com pouca ou nenhuma materia-prima in natura.
                  O consumo desses produtos esta diretamente associado ao aumento do IMC e da obesidade.
                </li>
              </ul>
              <p>
                A regra de ouro do guia e direta: <strong>"Prefira sempre alimentos in natura ou minimamente processados
                e preparacoes culinarias a alimentos ultraprocessados."</strong> Estudos da USP demonstram que cada aumento
                de 10% na participacao de ultraprocessados na dieta esta associado a um aumento de 0,4 no IMC medio da
                populacao. Essa relacao e particularmente relevante para o Brasil, onde os ultraprocessados ja representam
                cerca de 20% das calorias consumidas pelos brasileiros.
              </p>
              <p>
                O guia tambem valoriza a <strong>cultura alimentar brasileira</strong>: comer em companhia, preparar a
                propria comida, respeitar as tradicoes regionais. Essa dimensao sociocultural da alimentacao e algo que
                as piramides alimentares tradicionais nunca abordaram.
              </p>
            </div>
          </div>

          {/* IMC Categories */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Categorias IMC (OMS)</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Categoria</th>
                    <th className="text-left py-3 px-4 font-bold">Faixa IMC</th>
                    <th className="text-left py-3 px-4 font-bold">Risco de Saude</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Abaixo do peso
                    </td>
                    <td className="py-3 px-4">&lt; 18,5</td>
                    <td className="py-3 px-4 text-info">Risco de desnutricao</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Peso normal
                    </td>
                    <td className="py-3 px-4">18,5 - 24,9</td>
                    <td className="py-3 px-4 text-success">Risco baixo</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Sobrepeso
                    </td>
                    <td className="py-3 px-4">25 - 29,9</td>
                    <td className="py-3 px-4 text-warning">Risco aumentado</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesidade Classe I
                    </td>
                    <td className="py-3 px-4">30 - 34,9</td>
                    <td className="py-3 px-4 text-destructive">Risco alto</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesidade Classe II
                    </td>
                    <td className="py-3 px-4">35 - 39,9</td>
                    <td className="py-3 px-4 text-destructive">Risco muito alto</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesidade Classe III
                    </td>
                    <td className="py-3 px-4">≥ 40</td>
                    <td className="py-3 px-4 text-destructive">Risco extremo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SUS e Cirurgia Bariatrica */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-red-500/10">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">SUS e Cirurgia Bariatrica Gratuita</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O Brasil e um dos poucos paises do mundo que oferece <strong>cirurgia bariatrica gratuita</strong> atraves
                do seu sistema publico de saude. O <strong>SUS (Sistema Unico de Saude)</strong>, criado pela Constituicao
                de 1988, garante acesso universal a saude e inclui a cirurgia bariatrica como procedimento coberto desde 1999.
                Atualmente, o SUS realiza mais de <strong>11.000 cirurgias bariatricas por ano</strong>, fazendo do Brasil
                o segundo pais que mais realiza esse procedimento no mundo, atras apenas dos Estados Unidos.
              </p>
              <p>
                O IMC e o criterio central para a <strong>elegibilidade a cirurgia bariatrica pelo SUS</strong>. Os criterios
                estabelecidos pela Portaria do Ministerio da Saude sao:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>IMC igual ou superior a 40 (obesidade morvida):</strong> o paciente pode ser indicado para cirurgia
                  independentemente da presenca de comorbidades. Nessa faixa, os riscos a saude sao considerados tao graves
                  que a intervencao cirurgica se justifica como tratamento primario.
                </li>
                <li>
                  <strong>IMC entre 35 e 39,9 com comorbidades associadas:</strong> pacientes com obesidade classe II que
                  apresentam doencas como diabetes tipo 2, hipertensao arterial, apneia obstrutiva do sono, dislipidemia,
                  doenca arterial coronariana, artropatias ou esteatose hepatica podem ser elegfveis para o procedimento.
                </li>
                <li>
                  <strong>Tratamento clinico previo de pelo menos 2 anos:</strong> o paciente deve comprovar que tentou
                  perder peso por meios conservadores (dieta, exercicios, acompanhamento nutricional e psicologico) por
                  no minimo dois anos sem sucesso antes de ser encaminhado para a cirurgia.
                </li>
                <li>
                  <strong>Avaliacao multidisciplinar completa:</strong> antes da cirurgia, o paciente passa por consultas
                  com endocrinologista, nutricionista, psicologo, cardiologista e cirurgiao. Essa avaliacao pode levar de
                  6 meses a 2 anos dentro do SUS.
                </li>
              </ul>
              <p>
                As tecnicas mais realizadas pelo SUS sao o <strong>bypass gastrico em Y de Roux</strong> (tecnica mais
                comum, com reducao de 60-80% do excesso de peso) e a <strong>gastrectomia vertical (sleeve)</strong>.
                A fila de espera pelo SUS varia de 1 a 5 anos dependendo do estado, com as maiores filas em Sao Paulo,
                Rio de Janeiro e Minas Gerais.
              </p>
              <p>
                Em <strong>Portugal</strong>, a cirurgia bariatrica tambem e disponibilizada pelo <strong>SNS (Servico
                Nacional de Saude)</strong>, com criterios semelhantes: IMC acima de 40, ou acima de 35 com comorbidades.
                Os hospitais de referencia incluem o Hospital de Sao Joao (Porto), o Hospital de Santa Maria (Lisboa) e
                o Centro Hospitalar Universitario de Coimbra. Os tempos de espera em Portugal variam entre 1 e 3 anos.
              </p>
              <p>
                E importante destacar que a cirurgia bariatrica nao e uma "solucao magica". A ABESO e a SBCBM (Sociedade
                Brasileira de Cirurgia Bariatrica e Metabolica) enfatizam que o <strong>acompanhamento pos-operatorio
                vitalicio</strong> e essencial para manter os resultados. Sem mudancas permanentes nos habitos alimentares
                e na pratica de atividade fisica, o paciente pode recuperar parte significativa do peso perdido em 5 a 10 anos.
              </p>
            </div>
          </div>

          {/* How to calculate */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Como Calcular o IMC</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>A <strong>formula do IMC</strong> e simples:</p>
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-primary">IMC = Peso (kg) / Altura (m)</p>
              </div>
              <p>
                Por exemplo, um brasileiro com o peso medio de 74 kg e altura media de 1,71 m:<br />
                IMC = 74 / (1,71 x 1,71) = 74 / 2,9241 = <strong>25,3</strong>
              </p>
              <p>
                Esse resultado de 25,3 coloca o brasileiro medio na faixa de <strong>sobrepeso</strong>, o que
                e coerente com os dados do VIGITEL que mostram que mais de 61% dos adultos brasileiros estao
                acima do peso ideal. E um reflexo da transicao nutricional que o pais atravessa: ao mesmo
                tempo em que a desnutricao diminuiu drasticamente desde os anos 1990, a obesidade explodiu,
                impulsionada pelo aumento no consumo de ultraprocessados e pelo sedentarismo.
              </p>
            </div>
          </div>

          {/* Links to other pages */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/pt/imc-homem" className="glass-card p-6 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Activity className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-bold">IMC Homem</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Consideracoes especificas para composicao corporal masculina no contexto brasileiro
              </p>
            </Link>

            <Link to="/pt/imc-mulher" className="glass-card p-6 hover:border-pink-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-pink-500/10">
                  <Activity className="w-5 h-5 text-pink-500" />
                </div>
                <h3 className="font-bold">IMC Mulher</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Entendendo o IMC feminino com fatores hormonais e particularidades da mulher brasileira
              </p>
            </Link>

            <Link to="/pt/imc-atleta" className="glass-card p-6 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-bold">IMC Atleta</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Por que o IMC nao funciona para atletas e praticantes de musculacao
              </p>
            </Link>
          </div>

          {/* SEO Content: Brazil + Portugal specific */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Calculadora IMC para Brasileiros e Portugueses</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                A <strong>calculadora de IMC</strong> e a ferramenta mais utilizada pela <strong>ABESO</strong> e pela
                <strong> DGS Portugal</strong> como primeiro passo na avaliacao do estado nutricional. Os dados do
                <strong> VIGITEL</strong> (pesquisa anual do Ministerio da Saude do Brasil) mostram que o calculo
                regular do IMC permite identificar precocemente tendencias de ganho de peso e prevenir a evolucao
                para obesidade. Se voce quer <strong>calcular IMC gratis</strong>, nossa ferramenta fornece resultados
                instantaneos com base nos padroes da OMS.
              </p>
              <p>
                A <strong>cultura do corpo no Brasil</strong> e particularmente complexa. O pais e simultaneamente
                o maior consumidor de acai e superalimentos tropicais do mundo e um dos maiores mercados de fast-food.
                Frutas como acai, cupuacu, camu-camu e graviola sao ricos em antioxidantes e nutrientes que ajudam
                na manutencao de um <strong>IMC saudavel</strong>. Ao mesmo tempo, a pressao estetica intensa pode
                levar a disturbios alimentares em ambas as direcoes: tanto a obesidade quanto a anorexia e a bulimia.
              </p>
              <p>
                Um <strong>IMC ideal</strong> entre 18,5 e 24,9 indica peso saudavel, mas e preciso considerar o
                contexto. A <strong>tabela de IMC</strong> da OMS foi desenvolvida com base em populacoes europeias
                e norte-americanas, e a ABESO reconhece que pode haver necessidade de ajustes para populacoes com
                maior miscigenacao, como a brasileira. O Ministerio da Saude recomenda que o IMC seja sempre
                avaliado em conjunto com a <strong>circunferencia da cintura</strong> (acima de 94 cm para homens
                e 80 cm para mulheres indica risco cardiovascular elevado) e outros indicadores clinicos.
              </p>
              <p>
                Em <strong>Portugal</strong>, a DGS promove o programa "Portugal Saudavel" que incentiva o calculo
                regular do IMC nas unidades de saude familiar. O pais tem investido na <strong>dieta mediterranica</strong>,
                reconhecida pela UNESCO como Patrimonio Cultural Imaterial, como estrategia de combate a obesidade.
                Azeite, peixe, frutas, legumes e cereais integrais formam a base dessa alimentacao que contribui
                para a manutencao de um <strong>peso normal</strong> e prevencao de doencas cronicas.
              </p>
            </div>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Calculadora IMC Gratis - Ferramenta de Indice de Massa Corporal</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCPt;
