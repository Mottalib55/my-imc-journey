import { Header } from "@/components/Header";
import { Baby, AlertTriangle, TrendingUp, BookOpen, Stethoscope, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";

const IMCCrianca = () => {
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
            IMC Crianca e Adolescente
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-cyan-500">IMC Criancas e Adolescentes</span> : Calculadora Infantil
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            O Brasil enfrenta o duplo fardo: desnutricao infantil no Norte e obesidade crescente no Sudeste. A Caderneta da Crianca (SUS) e o SISVAN sao as referencias nacionais. Em Portugal, o estudo COSI mostra melhoria significativa na ultima decada.
          </p>
        </header>

        {/* Medical Warning */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Stethoscope className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-destructive mb-2">Consulta medica recomendada</h3>
              <p className="text-muted-foreground">
                O IMC em criancas requer <strong>interpretacao medica especializada</strong>.
                Consulte o <strong>pediatra na UBS (SUS)</strong> ou no <strong>SNS (Portugal)</strong> para acompanhamento adequado.
                A Caderneta da Crianca e o Boletim de Saude Infantil sao instrumentos essenciais para este acompanhamento.
                As informacoes abaixo sao meramente informativas.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Obesity in Brazil and Portugal */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Globe className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Obesidade infantil no Brasil e em Portugal</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                A obesidade infantil e um dos maiores desafios de saude publica nos paises lusofonos.
                O Brasil convive com o paradoxo nutricional: criancas desnutridas no Norte e Nordeste e taxas
                crescentes de excesso de peso no Sul e Sudeste. Portugal, apos acoes decisivas, comeca a ver resultados positivos.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-destructive mb-2">33,5%</p>
                <p className="text-sm font-semibold mb-1">Criancas brasileiras com excesso de peso</p>
                <p className="text-xs text-muted-foreground">Dados SISVAN/SUS - Sistema de Vigilancia Alimentar e Nutricional</p>
              </div>
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-warning mb-2">15,3%</p>
                <p className="text-sm font-semibold mb-1">Criancas com sobrepeso em Portugal</p>
                <p className="text-xs text-muted-foreground">Estudo COSI - INSA (Instituto Nacional de Saude Doutor Ricardo Jorge)</p>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-success mb-2">-8%</p>
                <p className="text-sm font-semibold mb-1">Reducao da obesidade infantil em Portugal</p>
                <p className="text-xs text-muted-foreground">Melhoria consistente na ultima decada segundo o COSI</p>
              </div>
            </div>
          </div>

          {/* Difference with adults */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <AlertTriangle className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Diferenca entre IMC adulto e crianca</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Diferente dos adultos, o <strong>IMC infantil</strong> nao se interpreta com limites fixos
                (18,5 / 25 / 30). Na crianca e no adolescente, o corpo evolui constantemente, e o IMC varia
                naturalmente segundo a idade e o sexo. Tanto o <strong>Ministerio da Saude do Brasil</strong> quanto
                a <strong>Direcao-Geral da Saude de Portugal</strong> adotam as curvas da OMS como referencia.
              </p>
              <p>
                No Brasil, a <strong>Caderneta da Crianca</strong> distribuida pelo SUS contem as curvas de crescimento
                da OMS. Em Portugal, o <strong>Boletim de Saude Infantil e Juvenil</strong> cumpre funcao semelhante,
                permitindo o acompanhamento nas consultas do SNS.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                <h4 className="font-bold text-destructive mb-2">IMC Adulto</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>- Limites fixos universais (OMS)</li>
                  <li>- &lt;18,5 = magreza</li>
                  <li>- 18,5-25 = peso normal</li>
                  <li>- 25-30 = sobrepeso</li>
                  <li>- &gt;30 = obesidade</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">IMC Crianca (Brasil e Portugal)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>- Curvas de percentis da OMS</li>
                  <li>- Varia segundo idade e sexo</li>
                  <li>- Caderneta da Crianca (SUS) / Boletim de Saude (SNS)</li>
                  <li>- Interpretacao relativa ao grupo etario</li>
                  <li>- Acompanhamento longitudinal da trajetoria</li>
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
              <h2 className="text-2xl font-display font-bold">Curvas de crescimento: Brasil e Portugal</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                As <strong>curvas de crescimento</strong> sao ferramentas indispensaveis para avaliar o estado nutricional
                da crianca ao longo do tempo. Ambos os paises adotam as curvas da <strong>OMS (Organizacao Mundial da Saude)</strong>,
                mas cada um as integra em instrumentos proprios.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold mb-3 text-cyan-500">Brasil</h4>
                  <ul className="text-sm space-y-2">
                    <li><strong>Caderneta da Crianca (SUS):</strong> Distribuida gratuitamente nas maternidades, contem curvas da OMS para peso, altura, perimetro cefalico e IMC por idade.</li>
                    <li><strong>SISVAN:</strong> O Sistema de Vigilancia Alimentar e Nutricional coleta e analisa dados antropometricos de criancas atendidas no SUS em todo o pais.</li>
                    <li><strong>PNAE:</strong> O Programa Nacional de Alimentacao Escolar monitora o estado nutricional dos alunos da rede publica.</li>
                  </ul>
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold mb-3 text-cyan-500">Portugal</h4>
                  <ul className="text-sm space-y-2">
                    <li><strong>Boletim de Saude Infantil e Juvenil:</strong> Documento oficial do SNS que acompanha o crescimento da crianca com curvas da OMS.</li>
                    <li><strong>Consultas de saude infantil:</strong> O SNS oferece consultas programadas desde o nascimento ate os 18 anos para monitoramento do crescimento.</li>
                    <li><strong>COSI Portugal:</strong> Estudo de vigilancia da obesidade infantil coordenado pelo INSA, integrado na iniciativa europeia da OMS.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted/30 rounded-xl p-6 mt-4">
                <h4 className="font-bold mb-4">Como ler os percentis na Caderneta da Crianca?</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong className="text-info">Percentil 3:</strong> Abaixo = zona de magreza, investigar</p>
                    <p><strong className="text-success">Percentil 3 a 85:</strong> Zona de eutrofia (peso adequado)</p>
                    <p><strong className="text-warning">Percentil 85 a 97:</strong> Sobrepeso - alerta e orientacao</p>
                    <p><strong className="text-destructive">Acima do percentil 97:</strong> Obesidade - encaminhamento</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      Uma crianca no percentil 50 tem um IMC superior a 50% das criancas de sua idade e sexo.
                      O mais importante e acompanhar a <strong>trajetoria ao longo do tempo</strong>, nao um valor isolado.
                      Mudancas bruscas de faixa na curva sao mais preocupantes que o percentil em si.
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
              <h2 className="text-2xl font-display font-bold">IMC segundo as faixas etarias</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Bebe (0-2 anos)</h4>
                <p className="text-sm text-muted-foreground">
                  O acompanhamento e feito com curvas de peso/comprimento e perimetro cefalico na
                  <strong> Caderneta da Crianca</strong>. As consultas de <strong>puericultura na UBS</strong> (Unidade
                  Basica de Saude) sao fundamentais nessa fase. O aleitamento materno exclusivo ate os 6 meses e
                  recomendado pelo Ministerio da Saude. Em Portugal, o acompanhamento ocorre nas consultas do SNS.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Crianca (2-12 anos)</h4>
                <p className="text-sm text-muted-foreground">
                  O IMC e interpretado com as curvas de percentis. O <strong>PNAE (Programa Nacional de
                  Alimentacao Escolar)</strong> fornece refeicoes a mais de 40 milhoes de alunos e monitora
                  o estado nutricional. O <strong>PSE (Programa Saude na Escola)</strong> realiza triagem
                  antropometrica nas escolas publicas. O "ressalto de adiposidade" por volta dos 6 anos e monitorado.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Adolescente (12-18 anos)</h4>
                <p className="text-sm text-muted-foreground">
                  A puberdade gera variacoes importantes no IMC. O <strong>NASF (Nucleo Ampliado de Saude da
                  Familia)</strong> oferece suporte multidisciplinar. A obesidade esta em alta especialmente nas
                  areas urbanas do Brasil. Curvas especificas para meninos e meninas sao essenciais nessa fase.
                </p>
              </div>
            </div>
          </div>

          {/* Brazilian Food Guide for Children */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Users className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">O Guia Alimentar para Criancas Brasileiras</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O <strong>Guia Alimentar para Criancas Brasileiras Menores de 2 Anos</strong>, publicado em 2019 pelo
                Ministerio da Saude, foi elogiado internacionalmente, inclusive por pesquisadores de Harvard, como
                um modelo de politica publica nutricional. Ele orienta familias e profissionais de saude sobre
                alimentacao saudavel desde o nascimento.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted/30 rounded-xl p-5">
                  <h4 className="font-bold mb-3">Classificacao NOVA e ultraprocessados</h4>
                  <p className="text-sm">
                    O Brasil e pioneiro na <strong>classificacao NOVA de alimentos</strong>, desenvolvida pela USP,
                    que categoriza alimentos pelo grau de processamento. O Guia Alimentar alerta para o consumo
                    crescente de <strong>ultraprocessados por criancas brasileiras</strong>: biscoitos recheados,
                    salgadinhos, bebidas acucaradas e macarrao instantaneo sao cada vez mais presentes na dieta infantil,
                    especialmente nas familias de menor renda.
                  </p>
                </div>
                <div className="bg-muted/30 rounded-xl p-5">
                  <h4 className="font-bold mb-3">Aleitamento materno no Brasil</h4>
                  <p className="text-sm">
                    O Brasil possui um dos <strong>programas de aleitamento materno mais bem-sucedidos do mundo</strong>.
                    A Rede Brasileira de Bancos de Leite Humano e referencia internacional. O SUS promove o aleitamento
                    exclusivo ate os 6 meses e complementado ate os 2 anos, com apoio dos <strong>Hospitais Amigos da
                    Crianca</strong> e das UBS.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted/30 rounded-xl p-5">
                  <h4 className="font-bold mb-3">Disparidades regionais</h4>
                  <p className="text-sm">
                    As desigualdades nutricionais no Brasil sao marcantes. No <strong>Norte e Nordeste</strong>, a
                    desnutricao cronica ainda atinge populacoes vulneraveis, especialmente comunidades indigenas e
                    quilombolas. No <strong>Sul e Sudeste</strong>, a obesidade infantil cresce acelerada pelo acesso
                    a ultraprocessados e sedentarismo. Essa coexistencia de carencia e excesso e chamada de
                    <strong> duplo fardo nutricional</strong>.
                  </p>
                </div>
                <div className="bg-muted/30 rounded-xl p-5">
                  <h4 className="font-bold mb-3">Merenda escolar: PNAE</h4>
                  <p className="text-sm">
                    O <strong>PNAE (Programa Nacional de Alimentacao Escolar)</strong> e um dos maiores programas de
                    alimentacao escolar do mundo, atendendo mais de <strong>40 milhoes de estudantes</strong> diariamente.
                    No minimo 30% dos recursos devem ser investidos na compra de alimentos da agricultura familiar.
                    O programa exige cardapios elaborados por nutricionistas e proibe a oferta de ultraprocessados.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* When to consult */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Stethoscope className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Quando consultar?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5">
                <h4 className="font-bold text-warning mb-3">Sinais de alerta</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>- Mudanca brusca de faixa na curva da Caderneta da Crianca</li>
                  <li>- IMC acima do percentil 97 (obesidade)</li>
                  <li>- IMC abaixo do percentil 3 (magreza acentuada)</li>
                  <li>- Ressalto de adiposidade precoce (antes dos 6 anos)</li>
                  <li>- Crianca que nao acompanha os marcos de desenvolvimento</li>
                  <li>- Preocupacao excessiva da crianca com seu proprio peso</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-3">Onde buscar acompanhamento</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>- <strong>Brasil:</strong> Pediatra na UBS (cobertura SUS gratuita)</li>
                  <li>- <strong>Brasil:</strong> PSE - triagem nas escolas publicas</li>
                  <li>- <strong>Brasil:</strong> NASF-AB (Nucleo Ampliado de Saude da Familia) com nutricionista e psicologo</li>
                  <li>- <strong>Portugal:</strong> Consultas de saude infantil no SNS</li>
                  <li>- <strong>Portugal:</strong> Medico de familia no Centro de Saude</li>
                  <li>- Acompanhar a Caderneta da Crianca / Boletim de Saude Infantil em cada consulta</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prevention Programs */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Globe className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Programas de prevencao</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Brasil e Portugal contam com politicas publicas ativas para combater a obesidade infantil,
                com abordagens complementares que vao desde a regulacao da publicidade ate a tributacao de
                alimentos nao saudaveis.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold mb-3 text-cyan-500">Brasil</h4>
                  <ul className="text-sm space-y-2">
                    <li><strong>PNAE (escola):</strong> Alimentacao escolar gratuita para 40M+ alunos, com cardapios elaborados por nutricionistas e prioridade para agricultura familiar.</li>
                    <li><strong>Estrategia Saude da Familia:</strong> Equipes multidisciplinares acompanham familias nas comunidades, com foco na prevencao e promocao da saude.</li>
                    <li><strong>Programa Crianca Feliz:</strong> Visitas domiciliares para familias em situacao de vulnerabilidade, promovendo desenvolvimento integral na primeira infancia.</li>
                    <li><strong>CONANDA:</strong> Regulacao da publicidade de alimentos nao saudaveis direcionada a criancas, considerando-a abusiva pelo Codigo de Defesa do Consumidor.</li>
                  </ul>
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold mb-3 text-cyan-500">Portugal</h4>
                  <ul className="text-sm space-y-2">
                    <li><strong>COSI Portugal:</strong> Childhood Obesity Surveillance Initiative - sistema de vigilancia que mostrou reducao da obesidade infantil, referencia europeia.</li>
                    <li><strong>PNPAS:</strong> Programa Nacional para a Promocao da Alimentacao Saudavel, com acoes em escolas, empresas e comunidades.</li>
                    <li><strong>Imposto sobre bebidas acucaradas (2017):</strong> Portugal implementou taxa sobre refrigerantes e bebidas com acucar, gerando reducao no consumo.</li>
                    <li><strong>Restricao de publicidade:</strong> Limitacao de marketing de alimentos com alto teor de acucar, sal e gordura direcionado a menores de 16 anos.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <BookOpen className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tudo sobre o IMC crianca no Brasil e em Portugal</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O <strong>calculo do IMC crianca</strong> usa a mesma formula que para adultos (peso / altura ao quadrado),
                mas a <strong>interpretacao do IMC infantil</strong> e totalmente diferente. O <strong>SISVAN</strong> (Sistema
                de Vigilancia Alimentar e Nutricional) e o principal instrumento de monitoramento nutricional no
                <strong> SUS</strong>, coletando dados de milhoes de criancas em todo o Brasil.
              </p>
              <p>
                A <strong>Caderneta da Crianca</strong>, distribuida gratuitamente pelo SUS em todas as maternidades,
                contem as curvas de crescimento da OMS e e o documento mais importante para o acompanhamento pediatrico
                no Brasil. O <strong>PNAE</strong> complementa esse cuidado ao oferecer alimentacao escolar de qualidade,
                seguindo as diretrizes do <strong>Guia Alimentar para a Populacao Brasileira</strong>.
              </p>
              <p>
                Em Portugal, o estudo <strong>COSI</strong> (Childhood Obesity Surveillance Initiative), coordenado pelo
                <strong> INSA</strong>, e referencia na vigilancia da obesidade infantil na Europa. O <strong>SNS</strong> (Servico
                Nacional de Saude) garante consultas programadas de saude infantil desde o nascimento, com registro no
                Boletim de Saude Infantil e Juvenil.
              </p>
              <p>
                Para avaliar o <strong>IMC de criancas de 3, 5 ou 10 anos</strong>, e fundamental usar as curvas de
                percentis adequadas a idade e ao sexo. O <strong>IMC adolescente</strong> e particularmente delicado
                de interpretar durante a puberdade. Em caso de duvida sobre o <strong>peso ideal da crianca</strong>,
                consulte o pediatra na UBS (Brasil) ou no Centro de Saude (Portugal) para analise completa da
                <strong> curva de crescimento</strong>.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Voce e adulto?</h3>
            <p className="text-muted-foreground mb-6">
              Use nossa calculadora IMC padrao para adultos
            </p>
            <Link
              to="/pt/imc"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calcular meu IMC adulto
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 Calculadora IMC Crianca - Ferramenta informativa apenas</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCCrianca;
