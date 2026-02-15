import { Header } from "@/components/Header";
import { Table, Scale, AlertTriangle, CheckCircle2, Globe } from "lucide-react";
import { RelatedPages } from "@/components/RelatedPages";

const BMITable = () => {
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
            Official WHO Classification
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">BMI Chart & Table</span> : Complete WHO Classification
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The complete WHO BMI classification used by the <strong>CDC</strong> and <strong>NHS</strong>, with US prevalence data: <strong>41.9% of American adults are obese</strong> (NHANES 2017-2020).
          </p>
        </header>

        <div className="space-y-8">
          {/* Main Table */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">International BMI classification (adults)</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold">Classification</th>
                    <th className="text-left py-4 px-4 font-bold">BMI (kg/m²)</th>
                    <th className="text-left py-4 px-4 font-bold">Comorbidity risk</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Severe underweight</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">&lt; 16.0</td>
                    <td className="py-4 px-4 text-info">High (malnutrition)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Moderate underweight</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">16.0 - 16.9</td>
                    <td className="py-4 px-4 text-info">Moderate</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">Mild underweight</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">17.0 - 18.4</td>
                    <td className="py-4 px-4 text-info">Low</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-success" />
                        <span className="font-bold text-success">Normal weight</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-success">18.5 - 24.9</td>
                    <td className="py-4 px-4 text-success">Low (reference)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-warning" />
                        <span className="font-medium">Overweight (pre-obesity)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">25.0 - 29.9</td>
                    <td className="py-4 px-4 text-warning">Increased</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Obesity class I (moderate)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">30.0 - 34.9</td>
                    <td className="py-4 px-4 text-destructive">High</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Obesity class II (severe)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">35.0 - 39.9</td>
                    <td className="py-4 px-4 text-destructive">Very high</td>
                  </tr>
                  <tr className="bg-destructive/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">Obesity class III (morbid)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">≥ 40.0</td>
                    <td className="py-4 px-4 text-destructive">Extremely high</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Source: World Health Organization (WHO) — adopted by the CDC (United States) and NHS (United Kingdom)
            </p>
          </div>

          {/* Weight examples by height — imperial primary */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Weight / height table (lbs & kg)</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Correspondence between height and weight range for each BMI category. Heights shown in feet/inches with metric equivalent. US/UK average heights highlighted.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-3 font-bold">Height</th>
                    <th className="text-left py-3 px-3 font-bold text-info">Underweight<br />&lt;18.5</th>
                    <th className="text-left py-3 px-3 font-bold text-success">Normal<br />18.5-24.9</th>
                    <th className="text-left py-3 px-3 font-bold text-warning">Overweight<br />25-29.9</th>
                    <th className="text-left py-3 px-3 font-bold text-destructive">Obesity<br />≥30</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { ft: "5'1\"", h: 155, u: 44, nMin: 44, nMax: 60, sMin: 60, sMax: 72, o: 72 },
                    { ft: "5'3\"", h: 160, u: 47, nMin: 47, nMax: 64, sMin: 64, sMax: 77, o: 77 },
                    { ft: "5'4\"", h: 163, u: 49, nMin: 49, nMax: 67, sMin: 67, sMax: 80, o: 80, highlight: "female" },
                    { ft: "5'5\"", h: 165, u: 50, nMin: 50, nMax: 68, sMin: 68, sMax: 81, o: 81 },
                    { ft: "5'7\"", h: 170, u: 53, nMin: 53, nMax: 72, sMin: 72, sMax: 87, o: 87 },
                    { ft: "5'9\"", h: 175, u: 57, nMin: 57, nMax: 76, sMin: 76, sMax: 92, o: 92, highlight: "male" },
                    { ft: "5'11\"", h: 180, u: 60, nMin: 60, nMax: 81, sMin: 81, sMax: 97, o: 97 },
                    { ft: "6'1\"", h: 185, u: 63, nMin: 63, nMax: 85, sMin: 85, sMax: 102, o: 102 },
                    { ft: "6'3\"", h: 190, u: 67, nMin: 67, nMax: 90, sMin: 90, sMax: 108, o: 108 },
                  ].map((row) => {
                    const toL = (kg: number) => Math.round(kg * 2.205);
                    const isHighlight = !!row.highlight;
                    return (
                      <tr key={row.h} className={`border-b border-border/50 ${isHighlight ? "bg-primary/5 font-semibold" : ""}`}>
                        <td className="py-3 px-3 font-bold">
                          {row.ft} <span className="text-muted-foreground font-normal">({row.h} cm)</span>
                          {row.highlight === "male" && <span className="block text-xs text-primary font-normal">US male avg.</span>}
                          {row.highlight === "female" && <span className="block text-xs text-primary font-normal">US/UK female avg.</span>}
                        </td>
                        <td className="py-3 px-3 text-info">&lt;{toL(row.u)} lbs <span className="text-muted-foreground">({row.u} kg)</span></td>
                        <td className="py-3 px-3 text-success">{toL(row.nMin)}-{toL(row.nMax)} lbs <span className="text-muted-foreground">({row.nMin}-{row.nMax} kg)</span></td>
                        <td className="py-3 px-3 text-warning">{toL(row.sMin)}-{toL(row.sMax)} lbs <span className="text-muted-foreground">({row.sMin}-{row.sMax} kg)</span></td>
                        <td className="py-3 px-3 text-destructive">&gt;{toL(row.o)} lbs <span className="text-muted-foreground">({row.o} kg)</span></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Highlighted rows: 5'9" (175 cm) is the average US adult male height; 5'4" (163 cm) is the average US/UK adult female height.
            </p>
          </div>

          {/* US Prevalence by BMI Category */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">US Prevalence by BMI Category</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Distribution of BMI categories among American adults aged 20 and over, according to CDC/NHANES 2017-2020 survey data:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-6 rounded-xl bg-info/10 border border-info/20">
                <div className="text-3xl font-display font-bold text-info mb-1">1.6%</div>
                <div className="text-sm font-medium text-info">Underweight</div>
                <div className="text-xs text-muted-foreground mt-1">BMI &lt; 18.5</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-success/10 border border-success/20">
                <div className="text-3xl font-display font-bold text-success mb-1">27.1%</div>
                <div className="text-sm font-medium text-success">Normal weight</div>
                <div className="text-xs text-muted-foreground mt-1">BMI 18.5-24.9</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-warning/10 border border-warning/20">
                <div className="text-3xl font-display font-bold text-warning mb-1">30.7%</div>
                <div className="text-sm font-medium text-warning">Overweight</div>
                <div className="text-xs text-muted-foreground mt-1">BMI 25-29.9</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-destructive/10 border border-destructive/20">
                <div className="text-3xl font-display font-bold text-destructive mb-1">41.9%</div>
                <div className="text-sm font-medium text-destructive">Obese</div>
                <div className="text-xs text-muted-foreground mt-1">BMI ≥ 30</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Source: CDC/NCHS, National Health and Nutrition Examination Survey (NHANES) 2017-2020.
            </p>
          </div>

          {/* US vs UK Comparison */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">US vs UK: BMI Statistics Comparison</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Head-to-head comparison of obesity and overweight prevalence between the United States and the United Kingdom, the two largest English-speaking nations:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold">Metric</th>
                    <th className="text-left py-4 px-4 font-bold">United States</th>
                    <th className="text-left py-4 px-4 font-bold">United Kingdom</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">Adult obesity rate (BMI ≥ 30)</td>
                    <td className="py-4 px-4 text-destructive font-bold">41.9%</td>
                    <td className="py-4 px-4 text-destructive font-bold">25.9%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">Overweight + obese (BMI ≥ 25)</td>
                    <td className="py-4 px-4 text-warning font-bold">73.6%</td>
                    <td className="py-4 px-4 text-warning font-bold">63.8%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">Annual healthcare cost of obesity</td>
                    <td className="py-4 px-4 font-mono">$173 billion/year</td>
                    <td className="py-4 px-4 font-mono">£6.5 billion/year</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">Data source</td>
                    <td className="py-4 px-4 text-sm">CDC / NHANES 2017-2020</td>
                    <td className="py-4 px-4 text-sm">NHS Digital / Health Survey for England</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">30-year trend</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Steadily increasing since 1990s — from ~23% to 41.9% obese</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">Steadily increasing since 1990s — from ~15% to 25.9% obese</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Both countries have seen dramatic increases in obesity rates over the past three decades. The US consistently reports higher rates, partly due to differences in food regulation, portion sizes, and urban design.
            </p>
          </div>

          {/* Edge cases */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Edge cases and exceptions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold">BMI is not suitable for:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Muscular athletes</strong>: muscle mass = overestimated BMI. The CDC notes BMI may overestimate body fat in athletes and those with a muscular build.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Pregnant women</strong>: normal weight gain during pregnancy is not factored into BMI thresholds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Elderly people</strong>: age-related muscle mass loss (sarcopenia) can mask high body fat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Children/teens</strong>: the CDC recommends age- and sex-specific BMI percentile charts for those under 20</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold">Complementary indicators:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Waist circumference</strong>: recommended by CDC and AHA to assess abdominal fat risk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Body fat %</strong>: more accurate body composition assessment via DEXA or calipers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Waist-to-hip ratio</strong>: evaluates fat distribution and cardiovascular risk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>FFMI</strong>: Fat-Free Mass Index, used for athletes and fitness assessments</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 rounded-lg bg-info/5 border border-info/20">
                  <p className="text-sm text-muted-foreground">
                    <strong>Insurance note:</strong> Under the Affordable Care Act (ACA), BMI alone does not qualify for health insurance premium adjustments. Insurers cannot use BMI as the sole basis for rate changes, though employer wellness programs may include BMI-related incentives within ACA-defined limits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Waist Circumference: AHA/CDC Guidelines */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Waist Circumference: AHA/CDC Guidelines</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              The American Heart Association (AHA) and CDC recommend waist circumference as a complementary measure to BMI for assessing metabolic risk. Note that US thresholds differ from the WHO/European guidelines:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-info/5 border border-info/20">
                <h4 className="font-bold text-lg mb-3">Men</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-display font-bold">&lt; 40 inches (102 cm)</div>
                    <div className="text-sm text-muted-foreground mt-1">US/CDC recommended threshold</div>
                  </div>
                  <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> The WHO/European threshold is stricter at <strong>37 inches (94 cm)</strong>. The US uses a higher cut-off based on research in predominantly Western populations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-info/5 border border-info/20">
                <h4 className="font-bold text-lg mb-3">Women</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-display font-bold">&lt; 35 inches (88 cm)</div>
                    <div className="text-sm text-muted-foreground mt-1">US/CDC recommended threshold</div>
                  </div>
                  <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> This threshold is the <strong>same as the WHO guideline</strong> (88 cm / 35 inches). US and European recommendations align for women.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-lg bg-muted/30">
              <p className="text-sm text-muted-foreground">
                <strong>Why the difference?</strong> The US uses National Institutes of Health (NIH) guidelines from 1998, which set the male waist threshold at 40 inches (102 cm). The WHO and International Diabetes Federation (IDF) later adopted a stricter 37-inch (94 cm) threshold for men based on European data. Both agree that waist circumference, combined with BMI, provides a better predictor of cardiovascular and metabolic disease risk than BMI alone.
              </p>
            </div>
          </div>

          {/* SEO */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Understanding the BMI table: US & UK context</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                The <strong>WHO BMI table</strong> is the international reference for classifying body mass, adopted by both the <strong>CDC</strong> in the United States and the <strong>NHS</strong> in the United Kingdom.
                This <strong>body mass index table</strong> defines thresholds for <strong>underweight</strong>,
                <strong> normal weight</strong>, <strong>overweight</strong> and <strong>obesity</strong>, with the same cut-offs used worldwide.
              </p>
              <p>
                According to <strong>NHANES 2017-2020 data</strong>, 41.9% of American adults have a BMI of 30 or above, making obesity a major public health concern tracked by the CDC.
                In the UK, <strong>NHS Digital</strong> reports 25.9% obesity prevalence. Both nations have seen rates roughly double over the past 30 years.
              </p>
              <p>
                The <strong>BMI classification</strong> distinguishes three levels of underweight (severe, moderate, mild)
                and three obesity classes (I, II, III). The <strong>adult BMI table</strong> applies to people
                over 18 years old. For children, the CDC recommends age-specific percentile charts.
              </p>
              <p>
                Beyond BMI, the <strong>American Heart Association (AHA)</strong> and CDC recommend measuring <strong>waist circumference</strong> as a complementary indicator of metabolic risk. US thresholds (40 inches for men, 35 inches for women) differ slightly from European WHO guidelines, particularly for men.
              </p>
              <p>
                To interpret your result, consult the <strong>BMI correspondence table</strong> above, which shows weights in both <strong>pounds (lbs) and kilograms (kg)</strong>.
                The <strong>weight height BMI table</strong> highlights US average heights — 5'9" for men and 5'4" for women — so you can quickly find your category.
                For a full picture of health risk, combine your <strong>BMI</strong> with waist circumference and body fat percentage assessments.
              </p>
            </div>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI Table - Official WHO Classification — Data: CDC/NHANES, NHS Digital, AHA</p>
        </footer>
      </div>
    </div>
  );
};

export default BMITable;
