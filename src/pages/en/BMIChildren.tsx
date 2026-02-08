import { Header } from "@/components/Header";
import { Baby, AlertTriangle, TrendingUp, BookOpen, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const BMIChildren = () => {
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
            Children and Adolescent BMI
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-cyan-500">Children's BMI</span>: A Different Calculation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding BMI in children and adolescents: growth curves and specificities
          </p>
        </header>

        {/* Medical Warning */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Stethoscope className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-destructive mb-2">Medical consultation recommended</h3>
              <p className="text-muted-foreground">
                BMI in children requires <strong>medical interpretation</strong>.
                Consult your <strong>pediatrician</strong> or <strong>family doctor</strong> for appropriate follow-up.
                The information below is for informational purposes only.
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
              <h2 className="text-2xl font-display font-bold">Difference between adult and child BMI</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Unlike adults, <strong>children's BMI</strong> is not interpreted using fixed thresholds
                (18.5 / 25 / 30). In children and adolescents, the body is constantly evolving, and BMI naturally
                varies according to age and sex.
              </p>
              <p>
                Therefore, <strong>body mass index growth curves</strong> (or percentile curves) are used, which allow
                positioning the child relative to other children of the same age and sex.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                <h4 className="font-bold text-destructive mb-2">Adult BMI</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Universal fixed thresholds</li>
                  <li>• &lt;18.5 = underweight</li>
                  <li>• 18.5-25 = normal</li>
                  <li>• 25-30 = overweight</li>
                  <li>• &gt;30 = obesity</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">Children's BMI</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Percentile curves</li>
                  <li>• Varies by age</li>
                  <li>• Different boy/girl</li>
                  <li>• Relative interpretation</li>
                  <li>• Evolution monitoring</li>
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
              <h2 className="text-2xl font-display font-bold">Growth curves</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>Body mass index curves</strong> are present in your child's health record.
                They allow tracking BMI evolution over time.
              </p>

              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-4">How to read percentiles?</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong className="text-info">3rd percentile:</strong> Underweight zone</p>
                    <p><strong className="text-success">3rd-97th percentile:</strong> Normal zone</p>
                    <p><strong className="text-warning">97th percentile:</strong> Overweight</p>
                    <p><strong className="text-destructive">&gt;97th percentile:</strong> Obesity</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      A child at the 50th percentile has a BMI higher than 50% of children their age and lower than the remaining 50%.
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
              <h2 className="text-2xl font-display font-bold">BMI by age group</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Infant (0-2 years)</h4>
                <p className="text-sm text-muted-foreground">
                  BMI is generally not calculated. Weight/height curves and head circumference are used.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Child (2-12 years)</h4>
                <p className="text-sm text-muted-foreground">
                  BMI interpreted with body mass curves. The "adiposity rebound" around age 6 is monitored.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Adolescent (12-18 years)</h4>
                <p className="text-sm text-muted-foreground">
                  Puberty = significant variations. Boy/girl specific curves are essential.
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
              <h2 className="text-2xl font-display font-bold">When to consult?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5">
                <h4 className="font-bold text-warning mb-3">Warning signs</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Sudden change in curve corridor</li>
                  <li>• BMI &gt; 97th percentile</li>
                  <li>• BMI &lt; 3rd percentile</li>
                  <li>• Early adiposity rebound (&lt;6 years)</li>
                  <li>• Child's concern about their weight</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-3">Regular monitoring</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Weighing and measuring at each medical visit</li>
                  <li>• Recording on health record curves</li>
                  <li>• Following trajectory, not just a point</li>
                  <li>• Discussion with doctor if concerned</li>
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
              <h2 className="text-2xl font-display font-bold">Everything about children's BMI</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                The <strong>children's BMI calculation</strong> uses the same formula as adults (weight / height²),
                but <strong>children's BMI interpretation</strong> is completely different. You cannot say
                a child is overweight simply because their BMI exceeds 25.
              </p>
              <p>
                <strong>Adolescent BMI</strong> is particularly tricky to interpret during puberty.
                Hormonal variations lead to significant body changes, different between
                <strong> boys' BMI</strong> and <strong>girls' BMI</strong>.
              </p>
              <p>
                To calculate <strong>baby BMI</strong> or <strong>infant BMI</strong>, pediatricians
                prefer using weight/height growth curves. <strong>3-year-old child BMI</strong>,
                <strong>5-year-old child BMI</strong> or <strong>10-year-old child BMI</strong> is always read on
                percentile curves.
              </p>
              <p>
                If in doubt about <strong>ideal child weight</strong> or <strong>ideal child BMI</strong>,
                consult your pediatrician who can analyze the <strong>body mass curve</strong> as a whole.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Are you an adult?</h3>
            <p className="text-muted-foreground mb-6">
              Use our standard BMI calculator for adults
            </p>
            <Link
              to="/en/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calculate my adult BMI
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Children's BMI Calculator - Informational Tool Only</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIChildren;
