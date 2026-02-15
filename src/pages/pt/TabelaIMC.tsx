import { Header } from "@/components/Header";
import { Table, Scale, AlertTriangle, CheckCircle2, Globe } from "lucide-react";
import { RelatedPages } from "@/components/RelatedPages";

const TabelaIMC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Table className="w-4 h-4" />
            Classificação oficial OMS
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Tabela IMC Completa</span> : Classificação OMS Detalhada
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Classificação OMS usada pelo SUS e SNS. Brasil: 26,8% obesos (VIGITEL 2023), Portugal: 28,7%. Tabela completa com alturas médias brasileiras e portuguesas.
          </p>
        </header>

        <div className="space-y-8">
          {/* Main Table */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Classificação internacional do IMC (adultos)</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold">Classificação</th>
                    <th className="text-left py-4 px-4 font-bold">IMC (kg/m²)</th>
                    <th className="text-left py-4 px-4 font-bold">Risco de comorbidades</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Magreza severa</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">&lt; 16,0</td>
                    <td className="py-4 px-4 text-info">Elevado (desnutrição)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Magreza moderada</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">16,0 - 16,9</td>
                    <td className="py-4 px-4 text-info">Moderado</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Magreza leve</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">17,0 - 18,4</td>
                    <td className="py-4 px-4 text-info">Baixo</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-success" />
                        <span className="font-bold text-success">Peso normal</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-success">18,5 - 24,9</td>
                    <td className="py-4 px-4 text-success">Baixo (referência)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-warning" />
                        <span className="font-medium">Sobrepeso (pré-obesidade)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">25,0 - 29,9</td>
                    <td className="py-4 px-4 text-warning">Aumentado</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Obesidade classe I (moderada)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">30,0 - 34,9</td>
                    <td className="py-4 px-4 text-destructive">Elevado</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Obesidade classe II (severa)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">35,0 - 39,9</td>
                    <td className="py-4 px-4 text-destructive">Muito elevado</td>
                  </tr>
                  <tr className="bg-destructive/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Obesidade classe III (mórbida)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">≥ 40,0</td>
                    <td className="py-4 px-4 text-destructive">Extremamente elevado</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Fonte: Organização Mundial da Saúde (OMS)
            </p>
          </div>

          {/* Weight examples by height */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tabela peso / altura</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Correspondência entre altura e faixa de peso para cada categoria de IMC. As linhas destacadas correspondem
              às <strong>alturas médias no Brasil e em Portugal</strong>: 1m73 (homens) e 1m61 (mulheres).
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-3 font-bold">Altura</th>
                    <th className="text-left py-3 px-3 font-bold text-info">Magreza<br />&lt;18,5</th>
                    <th className="text-left py-3 px-3 font-bold text-success">Normal<br />18,5-24,9</th>
                    <th className="text-left py-3 px-3 font-bold text-warning">Sobrepeso<br />25-29,9</th>
                    <th className="text-left py-3 px-3 font-bold text-destructive">Obesidade<br />≥30</th>
                    <th className="text-left py-3 px-3 font-bold">Referência</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { h: 155, u: 44, nMin: 44, nMax: 60, sMin: 60, sMax: 72, o: 72, ref: "" },
                    { h: 160, u: 47, nMin: 47, nMax: 64, sMin: 64, sMax: 77, o: 77, ref: "" },
                    { h: 161, u: 48, nMin: 48, nMax: 65, sMin: 65, sMax: 78, o: 78, ref: "Mulher BR/PT" },
                    { h: 165, u: 50, nMin: 50, nMax: 68, sMin: 68, sMax: 81, o: 81, ref: "" },
                    { h: 170, u: 53, nMin: 53, nMax: 72, sMin: 72, sMax: 87, o: 87, ref: "" },
                    { h: 173, u: 55, nMin: 55, nMax: 75, sMin: 75, sMax: 90, o: 90, ref: "Homem BR/PT" },
                    { h: 175, u: 57, nMin: 57, nMax: 76, sMin: 76, sMax: 92, o: 92, ref: "" },
                    { h: 180, u: 60, nMin: 60, nMax: 81, sMin: 81, sMax: 97, o: 97, ref: "" },
                    { h: 185, u: 63, nMin: 63, nMax: 85, sMin: 85, sMax: 102, o: 102, ref: "" },
                    { h: 190, u: 67, nMin: 67, nMax: 90, sMin: 90, sMax: 108, o: 108, ref: "" },
                  ].map((row) => (
                    <tr key={row.h} className={`border-b border-border/50 ${row.ref ? "bg-primary/10 font-semibold" : ""}`}>
                      <td className="py-3 px-3 font-bold">{row.h} cm</td>
                      <td className="py-3 px-3 text-info">&lt;{row.u} kg</td>
                      <td className="py-3 px-3 text-success">{row.nMin}-{row.nMax} kg</td>
                      <td className="py-3 px-3 text-warning">{row.sMin}-{row.sMax} kg</td>
                      <td className="py-3 px-3 text-destructive">&gt;{row.o} kg</td>
                      <td className="py-3 px-3 text-primary text-xs">{row.ref}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Edge cases */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Casos limites e exceções</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold">O IMC não é adequado para:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Atletas musculosos</strong>: massa muscular = IMC superestimado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Gestantes</strong>: ganho de peso normal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Idosos</strong>: perda de massa muscular</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Crianças/adolescentes</strong>: curvas específicas necessárias</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold">Indicadores complementares:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Circunferência da cintura</strong>: gordura abdominal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Gordura corporal %</strong>: composição corporal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Relação cintura/quadril</strong>: distribuição de gordura</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>FFMI</strong>: para atletas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prevalence in Brazil and Portugal */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Prevalência por categoria no Brasil e em Portugal</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 rounded-xl bg-success/5 border border-success/20">
                <h3 className="font-bold text-lg mb-3">Brasil (VIGITEL 2023)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span><strong>26,8%</strong> da população adulta com obesidade (IMC ≥ 30)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-warning mt-2 flex-shrink-0" />
                    <span><strong>61,8%</strong> com excesso de peso (IMC ≥ 25), incluindo sobrepeso e obesidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-info mt-2 flex-shrink-0" />
                    <span>Região <strong>Sul</strong> apresenta as maiores taxas (~30%), enquanto o <strong>Norte</strong> registra as menores (~21%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-info mt-2 flex-shrink-0" />
                    <span>Obesidade cresceu <strong>72%</strong> nos últimos 17 anos no Brasil</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-info/5 border border-info/20">
                <h3 className="font-bold text-lg mb-3">Portugal (Eurostat / INE)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span><strong>28,7%</strong> da população adulta com obesidade (dados Eurostat)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-warning mt-2 flex-shrink-0" />
                    <span><strong>53,6%</strong> com excesso de peso segundo o INS (Inquérito Nacional de Saúde)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-info mt-2 flex-shrink-0" />
                    <span>Interior do país e <strong>Alentejo</strong> apresentam prevalência superior ao litoral</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-info mt-2 flex-shrink-0" />
                    <span>O <strong>SNS</strong> (Serviço Nacional de Saúde) inclui consultas de nutrição na atenção primária</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              As disparidades regionais no Brasil refletem diferenças socioeconômicas e de acesso a alimentos in natura.
              No Sul, o consumo elevado de carne vermelha e embutidos contribui para taxas maiores; no Norte, a dieta
              baseada em peixe e mandioca está associada a menores índices de obesidade.
            </p>
          </div>

          {/* Dietary Guidelines and BMI */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Guia Alimentar e o IMC</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Brasil: classificação NOVA e Guia Alimentar</h3>
                <p className="text-muted-foreground">
                  O <strong>Guia Alimentar para a População Brasileira</strong> (Ministério da Saúde, 2014) é reconhecido
                  mundialmente como referência em nutrição de saúde pública. Baseado na <strong>classificação NOVA</strong>,
                  ele divide os alimentos em quatro grupos:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>In natura ou minimamente processados</strong>: base da alimentação saudável (arroz, feijão, frutas, verduras)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Ingredientes culinários</strong>: óleos, sal, açúcar usados em preparações caseiras</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Processados</strong>: consumo limitado (queijos, conservas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span><strong>Ultraprocessados</strong>: evitar. Associados a ganho de peso e IMC elevado</span>
                  </li>
                </ul>
                <p className="text-muted-foreground text-sm">
                  Estudos publicados no <em>British Medical Journal</em> demonstram que cada aumento de 10% no consumo
                  de ultraprocessados eleva em 12% o risco de obesidade. O Brasil consome em média 20% de calorias
                  de ultraprocessados, cifra que chega a 30% nas capitais.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Portugal: taxa sobre o açúcar e estratégia PNPAS</h3>
                <p className="text-muted-foreground">
                  Portugal implementou em 2017 o <strong>IEAB</strong> (Imposto Especial sobre Bebidas Adicionadas de Açúcar),
                  resultando em uma redução de 7% no consumo de bebidas açucaradas no primeiro ano. Os resultados incluem:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span>Reformulação de produtos pela indústria: menos açúcar em 30% das bebidas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span>O <strong>PNPAS</strong> (Programa Nacional para a Promoção da Alimentação Saudável) orienta a estratégia do SNS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span>A <strong>dieta mediterrânica</strong>, patrimônio UNESCO, é promovida como modelo alimentar</span>
                  </li>
                </ul>
                <p className="text-muted-foreground text-sm">
                  A combinação de políticas fiscais (taxa do açúcar) e educação alimentar (PNPAS) demonstra impacto
                  positivo na manutenção de um IMC saudável a nível populacional.
                </p>
              </div>
            </div>
          </div>

          {/* Waist circumference - ABESO guidelines */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Scale className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Circunferência da cintura: diretrizes ABESO</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              A <strong>ABESO</strong> (Associação Brasileira para o Estudo da Obesidade e Síndrome Metabólica) recomenda
              a medição da circunferência da cintura como complemento ao IMC. A gordura abdominal é um indicador
              independente de risco cardiovascular, mesmo em pessoas com IMC normal.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Indicador</th>
                    <th className="text-left py-3 px-4 font-bold">Homens</th>
                    <th className="text-left py-3 px-4 font-bold">Mulheres</th>
                    <th className="text-left py-3 px-4 font-bold">Nível de risco</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-3 px-4 font-medium">Risco aumentado</td>
                    <td className="py-3 px-4 font-mono">≥ 94 cm</td>
                    <td className="py-3 px-4 font-mono">≥ 80 cm</td>
                    <td className="py-3 px-4 text-warning">Moderado</td>
                  </tr>
                  <tr className="bg-destructive/5">
                    <td className="py-3 px-4 font-medium">Risco substancialmente aumentado</td>
                    <td className="py-3 px-4 font-mono">≥ 102 cm</td>
                    <td className="py-3 px-4 font-mono">≥ 88 cm</td>
                    <td className="py-3 px-4 text-destructive">Elevado</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-muted/30">
                <h4 className="font-bold mb-2">Recomendações do SUS (Brasil)</h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>- A medição da cintura é protocolo obrigatório na atenção básica do SUS</li>
                  <li>- Faz parte do rastreamento de síndrome metabólica nas UBS</li>
                  <li>- O SISVAN (Sistema de Vigilância Alimentar e Nutricional) monitora esses dados</li>
                  <li>- Valores acima do limite indicam encaminhamento para nutricionista</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-muted/30">
                <h4 className="font-bold mb-2">Recomendações do SNS (Portugal)</h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>- O SNS integra a medição da cintura nas consultas de medicina geral</li>
                  <li>- A DGS (Direção-Geral da Saúde) adota os mesmos limiares da OMS/ABESO</li>
                  <li>- Programas de saúde ocupacional incluem esta avaliação</li>
                  <li>- Valores elevados associados a maior risco de diabetes tipo 2 e doenças cardiovasculares</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Fonte: Diretrizes Brasileiras de Obesidade 2024 (ABESO), DGS Portugal, OMS
            </p>
          </div>

          {/* SEO */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Tabela IMC no Brasil e em Portugal: guia completo</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                A <strong>tabela IMC OMS</strong> é a referência internacional utilizada tanto pelo <strong>SUS</strong> (Sistema Único de Saúde)
                no Brasil quanto pelo <strong>SNS</strong> (Serviço Nacional de Saúde) em Portugal para classificar a corpulência.
                Esta <strong>tabela de índice de massa corporal</strong> define os limites de <strong>magreza</strong>,
                <strong>peso normal</strong>, <strong>sobrepeso</strong> e <strong>obesidade</strong>.
              </p>
              <p>
                A <strong>classificação IMC</strong> distingue três níveis de magreza (severa, moderada, leve)
                e três classes de obesidade (I, II, III). A <strong>tabela IMC adulto</strong> se aplica a pessoas
                com mais de 18 anos. Segundo o <strong>VIGITEL 2023</strong>, mais de um quarto dos brasileiros adultos
                apresenta obesidade, enquanto dados do <strong>Eurostat</strong> indicam 28,7% em Portugal.
              </p>
              <p>
                A <strong>ABESO</strong> (Associação Brasileira para o Estudo da Obesidade) recomenda complementar a
                <strong> tabela IMC</strong> com a medição da circunferência da cintura. O <strong>Guia Alimentar para a
                População Brasileira</strong> e a classificação <strong>NOVA</strong> orientam escolhas alimentares para
                manter um IMC saudável, priorizando alimentos in natura e minimizando ultraprocessados.
              </p>
              <p>
                Para interpretar seu resultado, consulte a <strong>tabela de correspondência IMC</strong> acima,
                com destaque para as alturas médias brasileiras e portuguesas.
                A <strong>tabela peso altura IMC</strong> permite ver diretamente qual peso corresponde a
                qual categoria para sua altura. Em caso de dúvida, consulte um profissional de saúde na sua
                UBS (Brasil) ou centro de saúde (Portugal).
              </p>
            </div>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Tabela IMC - Classificação OMS oficial</p>
        </footer>
      </div>
    </div>
  );
};

export default TabelaIMC;
