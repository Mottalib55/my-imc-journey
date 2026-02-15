import { Header } from "@/components/Header";
import { BookOpen, TrendingUp, TrendingDown, Target, AlertTriangle, CheckCircle2, Scale, Globe } from "lucide-react";
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
            Guia de interpretacao
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Interpretacao IMC</span> : Entenda seus Resultados
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Como interpretar o IMC no contexto brasileiro e portugues, com dados do VIGITEL 2023, diretrizes da ABESO, do Guia Alimentar para a Populacao Brasileira e da DGS Portugal
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
                O <strong>IMC</strong> (Indice de Massa Corporal) e um indicador que permite avaliar
                rapidamente se seu peso esta adequado a sua altura. Ele se calcula dividindo o peso (em kg)
                pela altura ao quadrado (em metros). No Brasil, o Ministerio da Saude e a <strong>ABESO</strong> (Associacao Brasileira para o Estudo da Obesidade) utilizam o IMC como ferramenta primaria de triagem em politicas publicas de saude.
              </p>
              <p>
                <strong>Importante:</strong> O IMC e uma ferramenta de triagem, nao um diagnostico. Um medico
                levara em conta outros fatores (circunferencia da cintura, massa muscular, historico medico)
                para avaliar seu estado de saude. No Brasil, o sistema <strong>VIGITEL</strong> (Vigilancia de Fatores de Risco e Protecao para Doencas Cronicas por Inquerito Telefonico) monitora anualmente os indicadores de peso da populacao adulta nas capitais brasileiras.
              </p>
            </div>
          </div>

          {/* Interpretation by category */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Interpretacao por categoria: dados do Brasil e Portugal</h2>
            </div>

            <div className="space-y-6">
              {/* Underweight */}
              <div className="border-l-4 border-info pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="w-5 h-5 text-info" />
                  <h3 className="font-bold text-lg">IMC inferior a 18,5: Magreza</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  A prevalencia de baixo peso vem diminuindo no Brasil nas ultimas decadas, em grande parte gracas a programas sociais como o <strong>Bolsa Familia</strong> e politicas de seguranca alimentar. Porem, a magreza ainda e uma questao relevante em areas rurais do <strong>Norte e Nordeste</strong>, onde o acesso a alimentacao adequada permanece desigual.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>- Aporte calorico insuficiente, comum em populacoes vulneraveis</li>
                  <li>- Metabolismo muito rapido ou doencas cronicas nao diagnosticadas</li>
                  <li>- Possivel transtorno alimentar, especialmente entre jovens</li>
                  <li>- Risco de carencias nutricionais (ferro, vitamina A, zinco)</li>
                  <li>- O SISVAN (Sistema de Vigilancia Alimentar e Nutricional) monitora esses casos na rede publica</li>
                </ul>
                <p className="text-info font-medium mt-3">
                  Conselho: Procure uma UBS (Unidade Basica de Saude) para avaliacao nutricional gratuita pelo SUS.
                </p>
              </div>

              {/* Normal */}
              <div className="border-l-4 border-success pl-6 py-4 bg-success/5 rounded-r-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <h3 className="font-bold text-lg">IMC entre 18,5 e 24,9: Peso normal</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Segundo o <strong>VIGITEL 2023</strong>, apenas cerca de <strong>38% dos adultos brasileiros</strong> se encontram nesta faixa de peso saudavel. E a zona ideal, onde os riscos de doencas cronicas sao minimizados. Manter-se nesta faixa depende de habitos alimentares equilibrados e atividade fisica regular.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>- Riscos de saude minimizados para doencas cardiovasculares e diabetes tipo 2</li>
                  <li>- Bom equilibrio energetico, compativel com qualidade de vida</li>
                  <li>- O Guia Alimentar Brasileiro recomenda priorizar alimentos in natura e minimamente processados</li>
                  <li>- A base arroz e feijao, tipica da dieta brasileira, e reconhecida como saudavel internacionalmente</li>
                </ul>
                <p className="text-success font-medium mt-3">
                  Conselho: Mantenha seus bons habitos alimentares, priorize alimentos reais e pratique atividade fisica regularmente.
                </p>
              </div>

              {/* Overweight */}
              <div className="border-l-4 border-warning pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-warning" />
                  <h3 className="font-bold text-lg">IMC entre 25 e 29,9: Sobrepeso</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  O VIGITEL 2023 revelou que <strong>61,8% dos adultos brasileiros</strong> estao com excesso de peso (sobrepeso + obesidade), um dado alarmante. Em <strong>Portugal</strong>, a situacao tambem preocupa: <strong>53,6% da populacao adulta</strong> apresenta excesso de peso segundo o Inquerito Nacional de Saude. O sobrepeso e um sinal de alerta importante.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>- Risco aumentado de doencas cronicas (diabetes, hipertensao, doencas cardiovasculares)</li>
                  <li>- Pressao arterial potencialmente elevada</li>
                  <li>- Pode ser influenciado pela massa muscular (atletas e praticantes de musculacao)</li>
                  <li>- O consumo crescente de alimentos ultraprocessados e um dos principais fatores</li>
                  <li>- No Brasil, a transicao nutricional acelerou o aumento do sobrepeso nas ultimas decadas</li>
                </ul>
                <p className="text-warning font-medium mt-3">
                  Conselho: Adote uma alimentacao baseada no Guia Alimentar Brasileiro, reduza ultraprocessados e aumente sua atividade fisica.
                </p>
              </div>

              {/* Obesity */}
              <div className="border-l-4 border-destructive pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <h3 className="font-bold text-lg">IMC superior a 30: Obesidade</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  A obesidade no Brasil atinge <strong>26,8% da populacao adulta</strong>, um crescimento de <strong>72% em 17 anos</strong> segundo dados do VIGITEL. Em <strong>Portugal</strong>, a prevalencia e ainda maior: <strong>28,7% dos adultos</strong> sao obesos segundo a DGS (Direcao-Geral da Saude). A obesidade e reconhecida como doenca cronica pela ABESO e pela OMS.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>- Classe I (30-34,9): Obesidade moderada</li>
                  <li>- Classe II (35-39,9): Obesidade severa</li>
                  <li>- Classe III (maior ou igual a 40): Obesidade morbida</li>
                  <li>- No Brasil, a obesidade e mais prevalente entre mulheres e populacoes de menor renda</li>
                  <li>- A ABESO recomenda tratamento multidisciplinar: nutricao, exercicio, acompanhamento psicologico</li>
                </ul>
                <p className="text-destructive font-medium mt-3">
                  Conselho: Procure acompanhamento medico pelo SUS ou particular. O tratamento da obesidade e um direito garantido no Brasil.
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
              <h2 className="text-2xl font-display font-bold">Fatores a considerar no contexto brasileiro e portugues</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">O IMC pode ser distorcido por:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Diversidade de biotipos</strong>: o Brasil e um pais miscigenado, e os limiares de IMC da OMS nem sempre refletem a diversidade de corpos brasileiros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>A massa muscular</strong>: praticantes de musculacao e atletas podem ter IMC elevado sem excesso de gordura</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>A idade</strong>: idosos perdem massa muscular e os pontos de corte podem variar segundo a ABESO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>O sexo</strong>: mulheres tem naturalmente mais gordura corporal; a distribuicao de gordura importa mais que o peso total</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Indicadores complementares (diretrizes ABESO):</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Circunferencia da cintura</strong>: &lt;94 cm (homens) / &lt;80 cm (mulheres) segundo a ABESO. Indicador-chave de risco cardiovascular</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>SISVAN</strong>: o Sistema de Vigilancia Alimentar e Nutricional monitora o estado nutricional da populacao brasileira na rede publica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Gordura corporal %</strong>: composicao corporal real, mais precisa que o IMC isolado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Exames pelo SUS</strong>: hemograma, glicemia, colesterol, triglicerideos, disponivel gratuitamente na rede publica</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SUS e o tratamento da obesidade */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Globe className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">SUS e o tratamento da obesidade no Brasil</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O <strong>Sistema Unico de Saude (SUS)</strong> e o maior sistema publico de saude do mundo e oferece tratamento gratuito para a obesidade. Todo cidadao brasileiro tem direito a acompanhamento nutricional, medico e psicologico para o manejo do excesso de peso.
              </p>
              <p>
                A porta de entrada e a <strong>UBS (Unidade Basica de Saude)</strong>, presente em todos os municipios. Nas UBS, equipes multidisciplinares do <strong>NASF (Nucleo de Apoio a Saude da Familia)</strong> oferecem atendimento com nutricionistas, educadores fisicos e psicologos, alem de medicos de familia.
              </p>
              <p>
                Para casos mais graves, o SUS oferece a <strong>cirurgia bariatrica</strong> de forma gratuita. Os criterios incluem IMC acima de 40 ou IMC acima de 35 com comorbidades. Embora a fila de espera possa ser longa (em algumas regioes, de 2 a 5 anos), o procedimento e inteiramente coberto, incluindo acompanhamento pre e pos-operatorio.
              </p>
              <p>
                O <strong>VIGITEL</strong> (Vigilancia de Fatores de Risco) e o principal sistema de monitoramento da obesidade no Brasil. Realizado anualmente pelo Ministerio da Saude, ele entrevista por telefone milhares de adultos nas 26 capitais e no Distrito Federal, gerando dados que orientam as politicas publicas de combate a obesidade.
              </p>
              <div className="bg-success/5 border border-success/20 rounded-xl p-4 mt-4">
                <p className="text-sm">
                  <strong>Dica pratica:</strong> Para iniciar o acompanhamento pelo SUS, va ate a UBS mais proxima de sua residencia com seu Cartao SUS e documento de identidade. Voce pode tambem ligar para o Disque Saude (136) para informacoes sobre servicos disponiveis na sua regiao.
                </p>
              </div>
            </div>
          </div>

          {/* Guia Alimentar e classificacao NOVA */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Guia Alimentar e classificacao NOVA</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O <strong>Guia Alimentar para a Populacao Brasileira</strong>, publicado pelo Ministerio da Saude em 2014, e considerado um dos melhores guias alimentares do mundo. Elogiado pela <strong>Universidade de Harvard</strong> e pela FAO, ele nao se baseia em nutrientes isolados, mas na relacao das pessoas com os alimentos e na classificacao por grau de processamento.
              </p>
              <p>
                A <strong>classificacao NOVA</strong>, desenvolvida por pesquisadores brasileiros da USP liderados pelo professor Carlos Monteiro, divide os alimentos em quatro grupos: alimentos <strong>in natura ou minimamente processados</strong> (frutas, verduras, arroz, feijao), <strong>ingredientes culinarios</strong> (oleos, acucar, sal), <strong>alimentos processados</strong> (queijos, conservas) e <strong>alimentos ultraprocessados</strong> (biscoitos recheados, refrigerantes, salgadinhos, embutidos).
              </p>
              <p>
                A regra de ouro do Guia e simples: <strong>"Prefira sempre alimentos in natura ou minimamente processados e preparacoes culinarias a alimentos ultraprocessados."</strong> Estudos mostram que o consumo de ultraprocessados esta diretamente associado ao aumento da obesidade no Brasil e no mundo.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-success/5 border border-success/20 rounded-xl p-4">
                  <h4 className="font-bold mb-2 text-foreground">Base da dieta brasileira saudavel</h4>
                  <ul className="space-y-1 text-sm">
                    <li>- <strong>Arroz e feijao</strong>: a combinacao perfeita de aminoacidos essenciais</li>
                    <li>- Frutas regionais: acai, goiaba, manga, caju, acerola</li>
                    <li>- Raizes e tuberculos: mandioca, inhame, batata-doce</li>
                    <li>- Verduras e legumes frescos, de preferencia da safra</li>
                    <li>- Preparacoes caseiras com temperos naturais</li>
                  </ul>
                </div>
                <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4">
                  <h4 className="font-bold mb-2 text-foreground">Ultraprocessados a evitar</h4>
                  <ul className="space-y-1 text-sm">
                    <li>- Refrigerantes e sucos de caixinha</li>
                    <li>- Biscoitos recheados e salgadinhos de pacote</li>
                    <li>- Embutidos (salsicha, presunto, mortadela)</li>
                    <li>- Macarrao instantaneo e temperos prontos</li>
                    <li>- Refeicoes congeladas prontas para aquecer</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Em <strong>Portugal</strong>, o <strong>PNPAS (Programa Nacional para a Promocao da Alimentacao Saudavel)</strong> da DGS tem papel semelhante, promovendo uma alimentacao baseada na dieta mediterranica. Portugal tambem implementou uma <strong>taxa sobre bebidas acucaradas</strong> (imposto do acucar) em 2017, resultando em reformulacao de produtos e reducao do consumo de acucar na populacao.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Compreender a interpretacao do IMC no Brasil e em Portugal</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                A <strong>interpretacao IMC</strong> no contexto lusofono deve considerar os dados do <strong>VIGITEL</strong>, o principal inquerito de vigilancia nutricional do Brasil. Com <strong>61,8% dos adultos brasileiros</strong> acima do peso segundo o VIGITEL 2023, entender o que significa cada faixa de IMC e fundamental para a saude publica.
              </p>
              <p>
                A <strong>ABESO</strong> (Associacao Brasileira para o Estudo da Obesidade) estabelece diretrizes claras para o diagnostico e tratamento da obesidade. O <strong>SUS</strong> (Sistema Unico de Saude) oferece acompanhamento gratuito, desde a atencao basica nas UBS ate a cirurgia bariatrica para casos graves.
              </p>
              <p>
                O <strong>Guia Alimentar para a Populacao Brasileira</strong> e referencia mundial em orientacao nutricional, priorizando alimentos in natura sobre ultraprocessados. Em Portugal, o <strong>PNPAS</strong> da <strong>DGS</strong> (Direcao-Geral da Saude) orienta politicas de alimentacao saudavel e promocao de saude, incluindo a taxa sobre bebidas acucaradas.
              </p>
              <p>
                O <strong>IMC ideal</strong> situa-se entre 18,5 e 24,9. <strong>Compreender seu IMC</strong> envolve considerar a circunferencia da cintura, a composicao corporal e o historico medico. A <strong>classificacao NOVA</strong> dos alimentos, criada no Brasil, revolucionou a forma como entendemos a relacao entre alimentacao e obesidade em todo o mundo.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calcule seu IMC agora</h3>
            <p className="text-muted-foreground mb-6">
              Use nossa calculadora gratuita para conhecer seu indice de massa corporal e interpreta-lo com base nos dados brasileiros e portugueses
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
          <p>&copy; 2025 Interpretacao IMC - Guia completo Brasil e Portugal</p>
        </footer>
      </div>
    </div>
  );
};

export default InterpretacaoIMC;
