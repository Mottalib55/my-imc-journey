import { Header } from "@/components/Header";
import { Baby, AlertTriangle, TrendingUp, BookOpen, Stethoscope } from "lucide-react";
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
            IMC Criança e Adolescente
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-cyan-500">IMC Criança</span> : Um cálculo diferente
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entender o IMC em crianças e adolescentes: curvas de crescimento e especificidades
          </p>
        </header>

        {/* Medical Warning */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Stethoscope className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-destructive mb-2">Consulta médica recomendada</h3>
              <p className="text-muted-foreground">
                O IMC em crianças requer <strong>interpretação médica</strong>.
                Consulte seu <strong>pediatra</strong> ou <strong>médico</strong> para acompanhamento adequado.
                As informações abaixo são meramente informativas.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Difference with adults */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <AlertTriangle className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Diferença entre IMC adulto e criança</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Diferente dos adultos, o <strong>IMC criança</strong> não se interpreta com limites fixos
                (18,5 / 25 / 30). Na criança e no adolescente, o corpo evolui constantemente, e o IMC varia
                naturalmente segundo a idade e o sexo.
              </p>
              <p>
                Usamos então <strong>curvas de corpulência</strong> (ou curvas de percentis) que permitem
                situar a criança em relação a outras crianças da mesma idade e sexo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                <h4 className="font-bold text-destructive mb-2">IMC Adulto</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Limites fixos universais</li>
                  <li>• &lt;18,5 = magreza</li>
                  <li>• 18,5-25 = normal</li>
                  <li>• 25-30 = sobrepeso</li>
                  <li>• &gt;30 = obesidade</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">IMC Criança</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Curvas de percentis</li>
                  <li>• Varia segundo a idade</li>
                  <li>• Diferente menino/menina</li>
                  <li>• Interpretação relativa</li>
                  <li>• Acompanhamento da evolução</li>
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
              <h2 className="text-2xl font-display font-bold">Curvas de crescimento</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                As <strong>curvas de corpulência</strong> estão presentes na caderneta de saúde da criança.
                Elas permitem acompanhar a evolução do IMC ao longo do tempo.
              </p>

              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-4">Como ler os percentis?</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong className="text-info">3º percentil:</strong> Zona de magreza</p>
                    <p><strong className="text-success">3º-97º percentil:</strong> Zona normal</p>
                    <p><strong className="text-warning">97º percentil:</strong> Sobrepeso</p>
                    <p><strong className="text-destructive">&gt;97º percentil:</strong> Obesidade</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      Uma criança no 50º percentil tem um IMC superior a 50% das crianças de sua idade e inferior aos 50% restantes.
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
              <h2 className="text-2xl font-display font-bold">IMC segundo as faixas etárias</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Bebê (0-2 anos)</h4>
                <p className="text-sm text-muted-foreground">
                  O IMC geralmente não é calculado. Usamos as curvas peso/altura e o perímetro craniano.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Criança (2-12 anos)</h4>
                <p className="text-sm text-muted-foreground">
                  IMC interpretado com as curvas de corpulência. O "ressalto de adiposidade" por volta dos 6 anos é monitorado.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Adolescente (12-18 anos)</h4>
                <p className="text-sm text-muted-foreground">
                  Puberdade = variações importantes. Curvas específicas menino/menina essenciais.
                </p>
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
                  <li>• Mudança brusca de faixa na curva</li>
                  <li>• IMC &gt; 97º percentil</li>
                  <li>• IMC &lt; 3º percentil</li>
                  <li>• Ressalto de adiposidade precoce (&lt;6 anos)</li>
                  <li>• Preocupação da criança com seu peso</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-3">Acompanhamento regular</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Pesagem e medição em cada visita médica</li>
                  <li>• Registro nas curvas da caderneta de saúde</li>
                  <li>• Acompanhamento da trajetória, não apenas um ponto</li>
                  <li>• Discussão com o médico se houver preocupação</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <BookOpen className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tudo sobre o IMC criança</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                O <strong>cálculo IMC criança</strong> usa a mesma fórmula que para adultos (peso / altura²),
                mas a <strong>interpretação IMC criança</strong> é totalmente diferente. Não podemos dizer
                que uma criança está com sobrepeso simplesmente porque seu IMC ultrapassa 25.
              </p>
              <p>
                O <strong>IMC adolescente</strong> é particularmente delicado de interpretar durante a puberdade.
                As variações hormonais provocam mudanças corporais importantes, diferentes entre
                <strong> IMC menino</strong> e <strong>IMC menina</strong>.
              </p>
              <p>
                Para calcular o <strong>IMC bebê</strong> ou o <strong>IMC lactente</strong>, os pediatras
                usam preferencialmente as curvas de crescimento peso/altura. O <strong>IMC criança 3 anos</strong>,
                <strong>IMC criança 5 anos</strong> ou <strong>IMC criança 10 anos</strong> se lê sempre nas
                curvas de percentis.
              </p>
              <p>
                Em caso de dúvida sobre o <strong>peso ideal criança</strong> ou o <strong>IMC ideal criança</strong>,
                consulte seu pediatra que poderá analisar a <strong>curva de corpulência</strong> em seu conjunto.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Você é adulto?</h3>
            <p className="text-muted-foreground mb-6">
              Use nossa calculadora IMC padrão para adultos
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
          <p>© 2024 Calculadora IMC Criança - Ferramenta informativa apenas</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCCrianca;
