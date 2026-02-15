import { Header } from "@/components/Header";
import { Baby, AlertTriangle, TrendingUp, BookOpen, Stethoscope, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

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
            <span className="text-cyan-500">BMI for Kids & Teens</span> : Pediatric BMI Calculator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            19.7% of US children aged 2-19 are obese (CDC/NHANES). Use CDC growth charts and NHS NCMP data for accurate tracking of your child's weight status.
          </p>
        </header>

        {/* Medical Warning */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Stethoscope className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-destructive mb-2">Consult your pediatrician or GP</h3>
              <p className="text-muted-foreground">
                Pediatric BMI requires <strong>professional interpretation</strong> using age- and sex-specific growth charts.
                The AAP (American Academy of Pediatrics) and NHS recommend discussing BMI results with your child's
                <strong> pediatrician</strong>, <strong>family physician</strong>, or <strong>health visitor</strong>.
                This page is for educational purposes only.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Childhood Obesity in the US and UK */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Globe className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Childhood Obesity in the US and UK: The Numbers</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Childhood obesity has reached epidemic proportions in both the United States and the United Kingdom.
                Understanding the scale of the problem is the first step toward meaningful prevention and intervention.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-destructive mb-2">19.7%</p>
                <h4 className="font-bold mb-1">US Children Obese</h4>
                <p className="text-sm text-muted-foreground">
                  CDC/NHANES 2017-2020 data: nearly 1 in 5 American children aged 2-19 has obesity, affecting approximately 14.7 million kids.
                </p>
              </div>
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-warning mb-2">1 in 5</p>
                <h4 className="font-bold mb-1">UK Year 6 Children Obese</h4>
                <p className="text-sm text-muted-foreground">
                  NHS National Child Measurement Programme (NCMP) finds ~23% of Year 6 pupils (ages 10-11) in England are living with obesity.
                </p>
              </div>
              <div className="bg-info/5 border border-info/20 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-info mb-2">$19.2B</p>
                <h4 className="font-bold mb-1">Annual US Cost</h4>
                <p className="text-sm text-muted-foreground">
                  Childhood obesity costs the US healthcare system an estimated $19.2 billion annually in direct medical expenses and lost productivity.
                </p>
              </div>
            </div>
          </div>

          {/* Growth Charts */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <TrendingUp className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">CDC vs WHO Growth Charts: Understanding the Systems</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                In the <strong>United States</strong>, the <strong>CDC growth charts</strong> are the standard for children aged 2-20.
                These charts were developed using nationally representative survey data (NHANES) and reflect how American children
                actually grow. For infants under 2, the CDC recommends the <strong>WHO growth standards</strong>, which describe
                how children <em>should</em> grow under optimal conditions.
              </p>
              <p>
                In the <strong>United Kingdom</strong>, the <strong>UK-WHO growth charts</strong> are used. These combine WHO standards
                for ages 0-4 with UK reference data (UK90) for older children, providing a system tailored to the British population.
              </p>

              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-4">CDC Percentile Cutoffs (Ages 2-20)</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p><strong className="text-info">&lt;5th percentile:</strong> Underweight</p>
                    <p><strong className="text-success">5th - 85th percentile:</strong> Healthy weight</p>
                    <p><strong className="text-warning">85th - 95th percentile:</strong> Overweight</p>
                    <p><strong className="text-destructive">&ge;95th percentile:</strong> Obesity</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      A child at the 75th percentile has a BMI higher than 75% of children of the same age and sex.
                      The US uses the <strong>85th and 95th percentiles</strong> as cutoffs (CDC system), which differs from the
                      International Obesity Task Force (IOTF) system commonly used across Europe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Adult vs Child BMI */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <AlertTriangle className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Why Child BMI Is Not Like Adult BMI</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                The <strong>CDC and AAP</strong> stress that adult BMI categories (underweight &lt;18.5, normal 18.5-24.9,
                overweight 25-29.9, obese &ge;30) <strong>do not apply to children</strong>. Children's body composition changes
                dramatically as they grow: body fat percentage naturally fluctuates with age, puberty, and sex.
                That is why pediatric BMI must always be plotted on age- and sex-specific growth charts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                <h4 className="font-bold text-destructive mb-2">Adult BMI</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Fixed universal thresholds</li>
                  <li>• &lt;18.5 = underweight</li>
                  <li>• 18.5-24.9 = healthy weight</li>
                  <li>• 25-29.9 = overweight</li>
                  <li>• &ge;30 = obese</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">Child BMI (CDC System)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Age- and sex-specific percentiles</li>
                  <li>• &lt;5th = underweight</li>
                  <li>• 5th-85th = healthy weight</li>
                  <li>• 85th-95th = overweight</li>
                  <li>• &ge;95th = obesity</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Age groups */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Baby className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI Monitoring by Age Group</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Infant (0-2 years)</h4>
                <p className="text-sm text-muted-foreground">
                  The CDC and AAP have recommended <strong>WHO growth standards</strong> for children under 2 since 2010.
                  Weight-for-length charts replace BMI-for-age at this stage. Measurements are taken at well-baby visits
                  (typically at 1, 2, 4, 6, 9, 12, 15, 18, and 24 months). WIC clinics also track growth for enrolled families.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Child (2-12 years)</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>CDC growth charts</strong> are used from age 2 onward. Well-child visits are recommended annually by the AAP.
                  The "adiposity rebound" (normal BMI dip around age 5-6) is closely watched. The <strong>WIC program</strong> monitors
                  growth for eligible children under 5. School-entry health screenings often include BMI.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Adolescent (12-18 years)</h4>
                <p className="text-sm text-muted-foreground">
                  Puberty triggers significant body composition changes, making sex-specific charts essential. Many US states mandate
                  <strong> school-based BMI screening</strong>, with results sent home via "BMI report cards." The AAP recommends annual
                  well-visits through adolescence. In the UK, the NCMP measures children in Reception (age 4-5) and Year 6 (age 10-11).
                </p>
              </div>
            </div>
          </div>

          {/* Racial and Socioeconomic Disparities */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Users className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Racial and Socioeconomic Disparities in Childhood Obesity</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Childhood obesity in the United States disproportionately affects certain racial, ethnic, and socioeconomic groups.
                Addressing these disparities requires understanding their root causes and the structural barriers families face.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5 text-center">
                <p className="text-2xl font-bold text-destructive mb-1">26.2%</p>
                <h4 className="font-bold mb-1">Hispanic Children</h4>
                <p className="text-sm text-muted-foreground">Highest obesity rate among US children (CDC/NHANES)</p>
              </div>
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5 text-center">
                <p className="text-2xl font-bold text-warning mb-1">24.8%</p>
                <h4 className="font-bold mb-1">Non-Hispanic Black</h4>
                <p className="text-sm text-muted-foreground">Second-highest rate, significantly above the national average</p>
              </div>
              <div className="bg-info/5 border border-info/20 rounded-xl p-5 text-center">
                <p className="text-2xl font-bold text-info mb-1">16.6%</p>
                <h4 className="font-bold mb-1">Non-Hispanic White</h4>
                <p className="text-sm text-muted-foreground">Below national average but still affecting millions of children</p>
              </div>
            </div>
            <div className="bg-muted/30 rounded-xl p-6 mt-6">
              <h4 className="font-bold mb-3">Structural Factors Driving Disparities</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• <strong>Food deserts:</strong> Over 19 million Americans live in areas with limited access to affordable, nutritious food. Low-income neighborhoods often lack full-service grocery stores.</li>
                <li>• <strong>National School Lunch Program (NSLP):</strong> Serves 30 million children daily. While updated USDA standards improved nutrition, school meal quality varies widely by district funding.</li>
                <li>• <strong>SNAP and WIC:</strong> Federal nutrition assistance programs help bridge the gap but cannot fully compensate for systemic inequities in food access and quality.</li>
                <li>• <strong>Income disparity:</strong> Children from households below the federal poverty level have obesity rates nearly double those from higher-income families. Cost of healthy food, safe outdoor spaces, and organized sports all play a role.</li>
              </ul>
            </div>
          </div>

          {/* When to consult */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Stethoscope className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">When to See Your Pediatrician or GP</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5">
                <h4 className="font-bold text-warning mb-3">Red Flags (AAP Guidelines)</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• BMI crossing upward across percentile lines</li>
                  <li>• BMI &ge;85th percentile (overweight) or &ge;95th (obesity)</li>
                  <li>• BMI &lt;5th percentile (underweight)</li>
                  <li>• Early adiposity rebound (before age 5-6)</li>
                  <li>• Child expressing distress about weight or body image</li>
                  <li>• Signs of disordered eating at any weight</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-3">Routine Monitoring</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>US:</strong> AAP well-child visits (annually from age 3)</li>
                  <li>• <strong>US:</strong> School nurse BMI screenings (mandated in many states)</li>
                  <li>• <strong>UK:</strong> NCMP measurements in Reception and Year 6</li>
                  <li>• <strong>UK:</strong> Health visitor checks in early years</li>
                  <li>• Track the trajectory over time, not a single reading</li>
                  <li>• Bring growth chart records to every appointment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* US Programs and Policies */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Globe className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">US and UK Programs Tackling Childhood Obesity</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Government programs, clinical guidelines, and community initiatives in both countries are working to reverse
                the childhood obesity trend. Here are the key efforts parents should know about.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">United States</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>USDA National School Lunch Program:</strong> Updated nutrition standards require more fruits, vegetables, and whole grains in 100,000+ schools.</li>
                  <li>• <strong>Let's Move! Legacy:</strong> Michelle Obama's initiative raised national awareness and improved school food standards through the Healthy, Hunger-Free Kids Act.</li>
                  <li>• <strong>AAP 2023 Clinical Practice Guideline:</strong> The first-ever comprehensive guideline for evaluating and treating childhood obesity, recommending early and intensive behavioral interventions.</li>
                  <li>• <strong>Screen time (AAP):</strong> No screens for children under 18 months; &lt;1 hour/day for ages 2-5; consistent, individualized limits for ages 6+.</li>
                </ul>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">United Kingdom</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>Change4Life / Better Health:</strong> NHS public health campaign encouraging families to eat better and move more through practical tips and free resources.</li>
                  <li>• <strong>The Daily Mile:</strong> School-based initiative where children run or walk for 15 minutes daily, now adopted by thousands of schools across the UK and internationally.</li>
                  <li>• <strong>Soft Drinks Industry Levy:</strong> The UK sugar tax (2018) has led to significant reformulation of sugary drinks, reducing children's sugar intake.</li>
                  <li>• <strong>NCMP:</strong> Annual measurement of children in Reception and Year 6 provides population-level data and individual feedback to parents.</li>
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
              <h2 className="text-2xl font-display font-bold">Understanding CDC Growth Charts and Pediatric BMI</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                The <strong>CDC growth charts</strong>, developed from NHANES survey data, are the gold standard for
                assessing <strong>children's BMI in the United States</strong>. They cover ages 2 through 20 and provide
                sex-specific BMI-for-age percentile curves. The AAP recommends using these charts at every well-child visit
                to track growth patterns over time.
              </p>
              <p>
                For children under 2, both the <strong>CDC and AAP endorse the WHO growth standards</strong>, which were
                adopted in the US in 2010. The WHO charts are based on data from breastfed infants across multiple countries
                and represent optimal growth patterns, while CDC charts describe how US children actually grew during
                the reference period.
              </p>
              <p>
                The <strong>AAP's 2023 clinical practice guideline</strong> marked a turning point in pediatric obesity care,
                providing evidence-based recommendations for screening, evaluation, and treatment. Key points include
                early identification using BMI percentiles, family-centered behavioral interventions, and recognition that
                <strong>childhood obesity</strong> is a complex, chronic disease influenced by genetics, environment, and
                social determinants of health.
              </p>
              <p>
                It is important to understand the difference between the <strong>CDC percentile system</strong> (used in the US)
                and the <strong>IOTF system</strong> (used in much of Europe and international research). The CDC uses the 85th
                and 95th percentiles as overweight and obesity cutoffs, while IOTF uses BMI values that correspond to adult
                cutoffs of 25 and 30 projected back to childhood. Results may differ between systems for the same child.
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


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 Children's BMI Calculator - Informational Tool Only</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIChildren;
