import { Header } from "@/components/Header";
import { AlertTriangle, XCircle, CheckCircle2, Users, Dumbbell, Baby, Clock, Globe, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const BMILimitations = () => {
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
            BMI Limitations
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-warning">BMI Limitations</span> : What BMI Doesn't Tell You
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Why BMI is not a perfect indicator and when it can be misleading
          </p>
        </header>

        {/* Main Warning */}
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-warning mb-2">BMI is a screening tool, not a diagnosis</h3>
              <p className="text-muted-foreground">
                Created in 1832 by Adolphe Quetelet, BMI was designed for statistical population studies,
                not to assess individual health. It has several important limitations.
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
              <h2 className="text-2xl font-display font-bold">What BMI doesn't measure</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Body composition</h4>
                    <p className="text-sm text-muted-foreground">
                      BMI doesn't distinguish muscle from fat. 1 kg of muscle = 1 kg of fat for BMI.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Fat distribution</h4>
                    <p className="text-sm text-muted-foreground">
                      Abdominal fat is more dangerous than subcutaneous fat. BMI doesn't see it.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Bone density</h4>
                    <p className="text-sm text-muted-foreground">
                      Heavier bones increase BMI without impacting health.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Metabolic health status</h4>
                    <p className="text-sm text-muted-foreground">
                      A thin person can have poor metabolic profile (cholesterol, glucose).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Hydration</h4>
                    <p className="text-sm text-muted-foreground">
                      Water retention can temporarily increase BMI by 1-2 points.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Physical fitness</h4>
                    <p className="text-sm text-muted-foreground">
                      Two people with the same BMI can have very different physical conditions.
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
              <h2 className="text-2xl font-display font-bold">Populations for which BMI is unsuitable</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Dumbbell className="w-5 h-5 text-orange-500" />
                  <h4 className="font-bold">Athletes and bodybuilders</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  High muscle mass gives "overweight" or "obese" BMI while body fat is minimal.
                </p>
                <Link to="/en/bmi-athletes" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  Learn more →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Baby className="w-5 h-5 text-cyan-500" />
                  <h4 className="font-bold">Children and adolescents</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Adult thresholds don't apply. Age and sex-specific body mass curves must be used.
                </p>
                <Link to="/en/bmi-children" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  Learn more →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold">Elderly people</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Muscle mass loss (sarcopenia) can mask excess fat. "Normal" BMI can be misleading.
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-pink-500" />
                  <h4 className="font-bold">Pregnant women</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Weight gain is normal and desirable during pregnancy. Pre-pregnancy BMI serves as reference.
                </p>
                <Link to="/en/bmi-women" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  Learn more →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold">Certain ethnicities</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Asian populations have increased risks at lower BMI. WHO proposes adapted thresholds (23 instead of 25).
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Scale className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold">Extreme body types</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Very tall or very short people have naturally different BMIs due to surface/volume ratio.
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
              <h2 className="text-2xl font-display font-bold">Alternatives and complements to BMI</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Indicator</th>
                    <th className="text-left py-3 px-4 font-bold">What it measures</th>
                    <th className="text-left py-3 px-4 font-bold">Recommended thresholds</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Waist circumference</td>
                    <td className="py-3 px-4">Abdominal (visceral) fat</td>
                    <td className="py-3 px-4">&lt;37 in (M) / &lt;31.5 in (F)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Waist-to-hip ratio</td>
                    <td className="py-3 px-4">Fat distribution</td>
                    <td className="py-3 px-4">&lt;0.90 (M) / &lt;0.85 (F)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Waist-to-height ratio</td>
                    <td className="py-3 px-4">Relative central fat</td>
                    <td className="py-3 px-4">&lt;0.5 (waist &lt; half height)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Body fat %</td>
                    <td className="py-3 px-4">Actual body composition</td>
                    <td className="py-3 px-4">10-20% (M) / 18-28% (F)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">FFMI</td>
                    <td className="py-3 px-4">Lean mass (for athletes)</td>
                    <td className="py-3 px-4">18-25 (natural)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Bioelectrical impedance</td>
                    <td className="py-3 px-4">Water, muscle, fat, bone</td>
                    <td className="py-3 px-4">Varies by device</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* When BMI is still useful */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">When BMI remains useful</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Despite its limitations, BMI remains a valuable tool in certain contexts:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Initial rapid screening</strong>: identify people needing more complete assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Epidemiological studies</strong>: compare populations at large scale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Individual monitoring</strong>: observe weight evolution over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Average sedentary adult</strong>: for this population, BMI is fairly reliable</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Understanding BMI limitations</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>BMI limitations</strong> are numerous and well documented by the scientific community.
                This <strong>critical BMI</strong> should not be interpreted alone. <strong>BMI flaws</strong>
                include the inability to differentiate fat mass from lean mass.
              </p>
              <p>
                <strong>Why is BMI imperfect</strong>? Because it's a simple mathematical ratio.
                <strong>BMI problems</strong> are particularly visible in athletes,
                children and elderly. Whether <strong>BMI is reliable or not</strong> depends on usage context.
              </p>
              <p>
                <strong>Alternatives to BMI</strong> like waist circumference or body fat percentage
                offer a more complete picture. <strong>Is BMI reliable</strong> for everyone?
                No, but combined with other indicators, it remains a useful screening tool.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calculate your BMI with full knowledge</h3>
            <p className="text-muted-foreground mb-6">
              Now that you know the limitations, use our calculator as a first indicator
            </p>
            <Link
              to="/en/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calculate my BMI
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI Limitations - Understanding Body Mass Index</p>
        </footer>
      </div>
    </div>
  );
};

export default BMILimitations;
