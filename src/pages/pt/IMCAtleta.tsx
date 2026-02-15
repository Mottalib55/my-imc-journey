import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { BMICalculator } from "@/components/BMICalculator";
import { BMIGauge } from "@/components/BMIGauge";
import { Dumbbell, AlertTriangle, Target, Scale, Activity, TrendingUp, Globe } from "lucide-react";

const IMCAtleta = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  const handleCalculate = useCallback((calculatedBmi: number, w: number, h: number) => {
    setBmi(calculatedBmi);
    setWeight(w);
    setHeight(h);
  }, []);

  // Calculate FFMI if we have data
  const ffmi = weight && height ? (weight * 0.85) / Math.pow(height / 100, 2) : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6">
            <Dumbbell className="w-4 h-4" />
            Calculadora para atletas
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-orange-500">IMC Atleta</span> : Limites do IMC para Esportistas
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Por que o IMC classifica Neymar como "normal" mas a maioria dos lutadores de MMA brasileiros como "obesos". O Brasil é potência mundial em esportes de combate.
          </p>
        </header>

        {/* Warning Banner */}
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-orange-500 mb-2">Atenção: O IMC é enviesado para atletas brasileiros</h3>
              <p className="text-muted-foreground">
                O IMC não distingue <strong>massa muscular</strong> de <strong>massa gorda</strong>.
                No Brasil, onde o esporte de combate e a musculação são extremamente populares, um atleta
                musculoso pode ter um IMC de "sobrepeso" ou "obesidade" mesmo estando em excelente forma física.
                Lutadores da UFC, jogadores do Brasileirão e surfistas da WSL frequentemente são mal classificados pelo IMC.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <BMICalculator onCalculate={handleCalculate} />
          <BMIGauge bmi={bmi} />
        </div>

        {/* FFMI Estimation */}
        {bmi && (
          <div className="glass-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-xl font-display font-bold">Estimativa FFMI (Fat-Free Mass Index)</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              O FFMI é um indicador melhor para atletas pois leva em conta a massa magra. Referência utilizada pela
              medicina esportiva brasileira (CBMDE) e centros de treinamento do Comitê Olímpico do Brasil.
            </p>
            <div className="bg-muted/30 rounded-xl p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">FFMI estimado (com 15% de gordura corporal)</p>
              <p className="text-3xl font-bold text-orange-500">{ffmi?.toFixed(1)}</p>
              <p className="text-xs text-muted-foreground mt-2">
                Natural: 18-25 | Doping provável: &gt;25
              </p>
            </div>
          </div>
        )}

        <div className="space-y-8">
          {/* Famous Brazilian Athletes */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Dumbbell className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC de atletas brasileiros famosos</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Veja como o IMC classifica alguns dos maiores esportistas do Brasil. Todos estão em excelente
              condição física, mas o IMC conta histórias muito diferentes dependendo do esporte.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <h4 className="font-bold mb-2 text-lg">Neymar Jr</h4>
                <p className="text-sm text-muted-foreground mb-3">Futebol - Seleção Brasileira</p>
                <p className="text-xs text-muted-foreground">1m75 | 68 kg</p>
                <p className="text-3xl font-bold text-green-500 my-2">22.2</p>
                <p className="text-xs text-green-500 font-medium">IMC "Normal"</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Maior camisa 10 brasileiro da atualidade. O IMC classifica como "normal", mas não revela sua composição corporal de elite.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <h4 className="font-bold mb-2 text-lg">Amanda Nunes</h4>
                <p className="text-sm text-muted-foreground mb-3">UFC / MMA - Bahia</p>
                <p className="text-xs text-muted-foreground">1m73 | 61 kg</p>
                <p className="text-3xl font-bold text-green-500 my-2">20.4</p>
                <p className="text-xs text-green-500 font-medium">IMC "Normal"</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Considerada a maior lutadora de MMA de todos os tempos. Baiana, bicampeã simultânea do UFC. Seu IMC não reflete sua força explosiva.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <h4 className="font-bold mb-2 text-lg">Gabriel Medina</h4>
                <p className="text-sm text-muted-foreground mb-3">Surfe - WSL</p>
                <p className="text-xs text-muted-foreground">1m80 | 75 kg</p>
                <p className="text-3xl font-bold text-green-500 my-2">23.1</p>
                <p className="text-xs text-green-500 font-medium">IMC "Normal"</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Bicampeão mundial de surfe da WSL. Maresias, litoral de SP. Corpo funcional para alta performance nas ondas, mas o IMC não mede potência e agilidade.
                </p>
              </div>
            </div>
          </div>

          {/* Sports by Category - Brazilian/Portuguese focus */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Scale className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC por esporte: realidade brasileira e portuguesa</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1 text-lg">Futebol</h4>
                <p className="text-xs text-orange-500 font-medium mb-3">Brasileirão | Liga Portugal | Seleção</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>IMC típico: <strong>22-25</strong></li>
                  <li>Paixão nacional no Brasil e em Portugal</li>
                  <li>Jogadores magros e velozes (Neymar, Vinícius Jr.)</li>
                  <li>O IMC funciona razoavelmente para futebolistas</li>
                  <li>Mas não mede agilidade, VO2max ou resistência</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1 text-lg">MMA / Jiu-Jitsu</h4>
                <p className="text-xs text-orange-500 font-medium mb-3">UFC | BJJ | Bellator</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>IMC típico: <strong>25-32</strong></li>
                  <li>Brasil = potência mundial do MMA</li>
                  <li>Lutadores pesados têm IMC de "obeso"</li>
                  <li>Amanda Nunes, Charles Oliveira, Alex Pereira</li>
                  <li>O IMC falha completamente neste contexto</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1 text-lg">Vôlei</h4>
                <p className="text-xs text-orange-500 font-medium mb-3">Superliga | Seleção Brasileira</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>IMC típico: <strong>23-27</strong></li>
                  <li>Brasil domina o vôlei mundial (masculino e feminino)</li>
                  <li>Jogadores altos com grande massa muscular</li>
                  <li>A altura elevada distorce o IMC para cima</li>
                  <li>Composição corporal varia muito por posição</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1 text-lg">Surfe</h4>
                <p className="text-xs text-orange-500 font-medium mb-3">WSL | Circuito brasileiro</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>IMC típico: <strong>22-25</strong></li>
                  <li>Gabriel Medina, Filipe Toledo, Italo Ferreira</li>
                  <li>Corpo funcional: leveza + potência</li>
                  <li>O IMC parece "normal" mas não revela o condicionamento</li>
                  <li>Brasil é potência na WSL há mais de uma década</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Brazil as combat sports powerhouse */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Globe className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">O Brasil como potência nos esportes de combate</h2>
            </div>
            <div className="text-muted-foreground space-y-4 mb-6">
              <p>
                O Brasil é, sem dúvida, uma das maiores potências mundiais nos <strong>esportes de combate</strong>.
                Essa tradição influencia diretamente a forma como devemos interpretar o IMC de milhões de
                praticantes brasileiros de artes marciais.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-orange-500 mb-2">Jiu-Jitsu Brasileiro (BJJ)</h4>
                <p className="text-sm text-muted-foreground">
                  Nascido no Rio de Janeiro com a família Gracie, o BJJ se espalhou pelo mundo.
                  A composição corporal dos praticantes varia enormemente entre faixas e categorias de peso.
                  Um faixa-preta pesado pode ter IMC acima de 30 com excelente condicionamento.
                  Academias como Gracie Barra, Nova União e Alliance são referências globais.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-orange-500 mb-2">UFC e MMA profissional</h4>
                <p className="text-sm text-muted-foreground">
                  O Brasil é o segundo país mais representado no UFC, atrás apenas dos EUA.
                  Lutadores como Anderson Silva, Amanda Nunes, Charles Oliveira e Alex Pereira são lendas do esporte.
                  O corte de peso antes das lutas torna o IMC ainda mais irrelevante, pois os atletas flutuam
                  10-15 kg entre pesagem e luta.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-orange-500 mb-2">Capoeira</h4>
                <p className="text-sm text-muted-foreground">
                  Arte marcial afro-brasileira única que combina luta, dança e acrobacia.
                  Praticantes de capoeira desenvolvem condicionamento funcional excepcional com
                  flexibilidade, explosão e resistência. O IMC não captura essa riqueza física.
                  A capoeira é Patrimônio Cultural Imaterial da Humanidade pela UNESCO.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-orange-500 mb-2">Cultura fitness e o efeito Cristiano Ronaldo</h4>
                <p className="text-sm text-muted-foreground">
                  Em Portugal, Cristiano Ronaldo revolucionou a cultura fitness. Seu corpo é referência
                  mundial de condicionamento atlético (1m87, 85 kg, IMC ~24.3). Tanto no Brasil quanto
                  em Portugal, a indústria de academias e MMA cresce rapidamente, com cada vez mais
                  pessoas monitorando composição corporal além do simples IMC.
                </p>
              </div>
            </div>
          </div>

          {/* Alternatives - Brazilian references */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Target className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Alternativas ao IMC para atletas no Brasil</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              A medicina esportiva brasileira oferece recursos especializados para avaliação corporal de atletas.
              O <strong>CBMDE</strong> (Colégio Brasileiro de Medicina do Esporte) e o <strong>CONFEF</strong> (Conselho
              Federal de Educação Física) recomendam métodos complementares ao IMC.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">Gordura corporal (%)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Medição direta do percentual de gordura. Disponível em clínicas de medicina esportiva do SUS
                  e em centros privados. Método de dobras cutâneas (protocolo Pollock) é o mais comum no Brasil.
                </p>
                <p className="text-xs">
                  <strong>Homem:</strong> 10-20% ideal<br />
                  <strong>Mulher:</strong> 18-28% ideal
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">FFMI</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Fat-Free Mass Index: avalia a massa magra em relação à altura.
                  Utilizado por preparadores físicos da Seleção Brasileira e clubes do Brasileirão.
                </p>
                <p className="text-xs">
                  <strong>Natural:</strong> 18-25<br />
                  <strong>Elite natural:</strong> 24-26
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">Avaliação integrada (CBMDE)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  O CBMDE recomenda avaliação completa: circunferência da cintura, bioimpedância, DEXA
                  e testes funcionais. A medicina esportiva pelo SUS oferece acompanhamento em Núcleos de
                  Apoio à Saúde da Família (NASF).
                </p>
                <p className="text-xs">
                  <strong>Cintura (H):</strong> &lt;94 cm<br />
                  <strong>Cintura (M):</strong> &lt;80 cm
                </p>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC atleta no Brasil: o que você precisa saber</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O <strong>IMC atleta</strong> é uma questão particularmente relevante no Brasil, onde milhões de pessoas
                praticam <strong>futebol</strong>, <strong>MMA</strong>, <strong>jiu-jitsu</strong>, <strong>musculação</strong> e
                <strong> surfe</strong>. A fórmula do IMC (peso/altura²) foi criada no século XIX para populações sedentárias
                e simplesmente não se aplica a quem treina regularmente.
              </p>
              <p>
                No <strong>futebol brasileiro</strong>, jogadores do Brasileirão e da Seleção geralmente têm IMC entre
                22-25, o que parece "normal". Mas essa normalidade esconde uma <strong>composição corporal</strong> totalmente
                diferente de um sedentário com o mesmo IMC. No <strong>MMA brasileiro</strong>, a situação é ainda mais
                extrema: lutadores do UFC frequentemente são classificados com "sobrepeso" ou "obesidade" pelo IMC,
                mesmo com gordura corporal abaixo de 15%.
              </p>
              <p>
                O <strong>jiu-jitsu brasileiro</strong> (BJJ), esporte criado no Rio de Janeiro, é praticado por milhões
                de pessoas em todo o país. A <strong>composição corporal</strong> de um faixa-preta varia enormemente
                conforme a categoria de peso, e o IMC falha em capturar essas diferenças. Se você pratica
                qualquer arte marcial ou esporte de combate, utilize o <strong>FFMI</strong>, o <strong>percentual de
                gordura corporal</strong> ou procure avaliação especializada na medicina esportiva.
              </p>
              <p>
                O <strong>CONFEF</strong> (Conselho Federal de Educação Física) e o <strong>CBMDE</strong> (Colégio
                Brasileiro de Medicina do Esporte) disponibilizam diretrizes para avaliação da composição corporal
                de atletas. Consulte também os serviços de medicina esportiva do <strong>SUS</strong>, disponíveis
                nos NASF e em centros de referência como o NAR (Núcleo de Alto Rendimento Esportivo).
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>
            <Link to="/pt/imc" className="text-primary hover:underline">
              Voltar para a Calculadora IMC
            </Link>
          </p>
          <p className="mt-2">© 2024 Calculadora IMC Atleta - Ferramenta informativa apenas</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCAtleta;
