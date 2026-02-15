import { Header } from "@/components/Header";
import { BookOpen, TrendingUp, TrendingDown, Target, AlertTriangle, CheckCircle2, Scale, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const BMIInterpretation = () => {
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
            Interpretation guide
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">BMI Interpretation</span> : Understanding Your Results
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How to read and correctly interpret your Body Mass Index based on CDC, NHS, and AHA guidelines — with 42.4% of US adults classified as obese, understanding your BMI has never been more critical.
          </p>
        </header>

        <div className="space-y-8">
          {/* What does BMI mean */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">What does your BMI mean?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>BMI</strong> (Body Mass Index) is an indicator that allows quick assessment
                of whether your weight is appropriate for your height. It is calculated by dividing
                weight in pounds by height in inches squared, then multiplying by 703 — or by dividing
                weight (in kg) by height squared (in meters).
              </p>
              <p>
                In the <strong>United States</strong>, the <strong>CDC (Centers for Disease Control and Prevention)</strong> uses
                BMI as a primary screening tool for weight categories that may lead to health problems.
                The current average BMI among US adults is approximately <strong>29</strong>, placing the national average
                just below the obesity threshold. The <strong>American Heart Association (AHA)</strong> incorporates BMI
                into its cardiovascular risk assessment guidelines, recommending regular BMI monitoring alongside
                blood pressure, cholesterol, and blood glucose checks.
              </p>
              <p>
                In the <strong>United Kingdom</strong>, the <strong>NHS (National Health Service)</strong> uses BMI as part of routine
                GP health checks for adults aged 40-74. The NHS Health Check program evaluates BMI alongside
                other metrics to assess risk of heart disease, diabetes, stroke, and kidney disease.
              </p>
              <p>
                <strong>Important:</strong> BMI is a screening tool, not a diagnosis. Both the CDC and NHS
                emphasize that a healthcare provider will consider other factors — waist circumference, muscle
                mass, family history, blood work — to fully evaluate your health status.
              </p>
            </div>
          </div>

          {/* Interpretation by category */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Interpretation by category</h2>
            </div>

            <div className="space-y-6">
              {/* Underweight */}
              <div className="border-l-4 border-info pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="w-5 h-5 text-info" />
                  <h3 className="font-bold text-lg">BMI below 18.5: Underweight</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  A BMI under 18.5 indicates underweight. Roughly <strong>1.5% of US adults</strong> fall
                  into this category according to CDC data. While less discussed than obesity, being underweight
                  carries serious health risks.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>- Insufficient caloric intake or malabsorption</li>
                  <li>- Very fast metabolism or underlying medical condition</li>
                  <li>- Possible eating disorder — the <strong>NEDA (National Eating Disorders Association)</strong> reports that 28.8 million Americans will experience an eating disorder in their lifetime</li>
                  <li>- Increased risk of nutritional deficiencies, weakened immune system, and osteoporosis</li>
                </ul>
                <p className="text-info font-medium mt-3">
                  Advice: Consult your PCP (US) or GP (UK) to identify the cause. If you or someone you know is struggling, the NEDA helpline is available at 1-800-931-2237.
                </p>
              </div>

              {/* Normal */}
              <div className="border-l-4 border-success pl-6 py-4 bg-success/5 rounded-r-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <h3 className="font-bold text-lg">BMI between 18.5 and 24.9: Normal weight</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  This is the healthy zone — but only about <strong>30% of US adults</strong> currently fall within
                  this range, according to NHANES data. The NHS uses the same 18.5-24.9 range for its normal
                  weight classification.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>- Minimized health risks for cardiovascular disease, type 2 diabetes, and certain cancers</li>
                  <li>- Good energy balance and metabolic function</li>
                  <li>- Associated with the lowest all-cause mortality rates per NIH studies</li>
                </ul>
                <p className="text-success font-medium mt-3">
                  Advice: Maintain your healthy habits. The USDA Dietary Guidelines and the NHS Eatwell Guide both recommend a balanced diet rich in fruits, vegetables, whole grains, and lean proteins.
                </p>
              </div>

              {/* Overweight */}
              <div className="border-l-4 border-warning pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-warning" />
                  <h3 className="font-bold text-lg">BMI between 25 and 29.9: Overweight</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Approximately <strong>31% of US adults</strong> are classified as overweight (but not obese)
                  by the CDC. This BMI range is a warning signal and increases the risk of progressing to obesity.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>- Increased risk of chronic diseases including hypertension, type 2 diabetes, and heart disease</li>
                  <li>- The NIH-funded <strong>"overweight paradox"</strong> debate: some research suggests slightly overweight individuals (BMI 25-27) may have marginally lower mortality than normal-weight individuals, though this remains scientifically contested</li>
                  <li>- May be misleading for athletes and muscular individuals — the CDC acknowledges this limitation</li>
                </ul>
                <p className="text-warning font-medium mt-3">
                  Advice: The AHA recommends adopting a heart-healthy diet (such as DASH or Mediterranean) and aiming for at least 150 minutes of moderate-intensity exercise per week.
                </p>
              </div>

              {/* Obesity */}
              <div className="border-l-4 border-destructive pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <h3 className="font-bold text-lg">BMI above 30: Obesity</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  <strong>42.4% of US adults</strong> are obese according to CDC 2023 data — up from 30.5% in 2000.
                  In the <strong>UK, 28% of adults</strong> are classified as obese by NHS Digital. The CDC further
                  divides obesity into three classes:
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>- <strong>Class I (BMI 30-34.9)</strong>: Moderate obesity — increased risk of comorbidities</li>
                  <li>- <strong>Class II (BMI 35-39.9)</strong>: Severe obesity — high risk of type 2 diabetes, sleep apnea, cardiovascular disease</li>
                  <li>- <strong>Class III (BMI 40+)</strong>: Morbid/severe obesity — very high risk; may qualify for bariatric surgery per NIH guidelines</li>
                </ul>
                <p className="text-muted-foreground text-sm mt-3">
                  The estimated annual medical cost of obesity in the US is <strong>$173 billion</strong> according
                  to the CDC. Obesity-related conditions include heart disease, stroke, type 2 diabetes,
                  and certain types of cancer — all among the leading causes of preventable death.
                </p>
                <p className="text-destructive font-medium mt-3">
                  Advice: Medical consultation is strongly recommended. Talk to your PCP (US) or GP (UK) about a personalized weight management plan, which may include behavioral therapy, medication (such as FDA-approved GLP-1 agonists), or surgical options.
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
              <h2 className="text-2xl font-display font-bold">Factors to consider</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">BMI can be skewed by:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Muscle mass</strong>: athletes and bodybuilders may show elevated BMI despite low body fat — the NFL averages a team BMI well above 30</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Age</strong>: seniors lose muscle mass (sarcopenia), which can mask unhealthy fat levels behind a "normal" BMI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Sex</strong>: women naturally carry more body fat than men at the same BMI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Ethnicity</strong>: the WHO and CDC recognize that BMI thresholds vary by population — for example, Asian Americans may face elevated health risks at BMI 23+ rather than 25+</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Complementary indicators (US/UK standards):</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Waist circumference</strong>: &lt;40 in (102 cm) for men / &lt;35 in (88 cm) for women per AHA guidelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>A1C test</strong>: hemoglobin A1C measures average blood sugar over 3 months — a key indicator for diabetes risk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Lipid panel</strong>: standard US blood test measuring total cholesterol, LDL, HDL, and triglycerides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>DEXA scan / BodPod</strong>: advanced body composition testing available at many US hospitals and sports medicine clinics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Annual physical / NHS Health Check</strong>: schedule your yearly wellness visit (US) or NHS Health Check for ages 40-74 (UK)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* What to do with your result */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">What to do with your result?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Your BMI is just a starting point. Here are the recommended next steps for US and UK residents:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Note your current BMI</strong> as a baseline reference point</li>
                <li><strong>Measure your waist circumference</strong> — the AHA considers this a critical complement to BMI (use a soft tape measure at navel level)</li>
                <li><strong>Schedule a visit with your PCP (US) or GP (UK)</strong> if your BMI is outside the normal range — obesity screening is covered with no copay under the ACA (Affordable Care Act), and free on the NHS</li>
                <li><strong>Consider evidence-based weight management programs</strong> such as WW (Weight Watchers), Noom, or the CDC's National Diabetes Prevention Program if you are overweight or obese</li>
                <li><strong>Set realistic goals</strong>: the NIH recommends losing 1-2 lbs (0.5-1 kg) per week maximum for sustainable results</li>
                <li><strong>Track your progress</strong>: weigh yourself once a week, same day, same time — many Americans use smart scales that sync with Apple Health or Google Fit</li>
                <li><strong>Check your insurance coverage</strong>: Medicare and most private US insurance plans cover obesity counseling; the NHS provides free referrals to weight management services</li>
              </ol>
            </div>
          </div>

          {/* BMI and Health Insurance in the US */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI and Health Insurance in the US</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                BMI plays a significant role in the US healthcare and insurance landscape. Understanding how
                insurers and government programs use BMI can help you navigate the system more effectively.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                  <span><strong>ACA protections</strong>: The Affordable Care Act (Obamacare) prohibits health insurers from denying coverage or charging higher premiums based on BMI or pre-existing conditions, including obesity. This was a major change from pre-2014 rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                  <span><strong>Medicare coverage</strong>: Medicare covers obesity screening and behavioral counseling for beneficiaries with a BMI of 30 or higher. This includes up to 22 face-to-face counseling sessions over 12 months at no cost to the patient.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                  <span><strong>Medicaid</strong>: Coverage for obesity-related services varies by state but is expanding. Many state Medicaid programs now cover bariatric surgery for qualifying individuals (typically BMI 40+ or BMI 35+ with comorbidities).</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                  <span><strong>Employer wellness programs</strong>: Many US employers use BMI as part of workplace wellness programs. Under EEOC guidelines, employers may offer incentives (up to 30% of insurance cost) for participating in health-related programs, including BMI-based targets. These programs remain controversial.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                  <span><strong>Life insurance</strong>: Unlike health insurance, life insurers in the US can still use BMI to set premiums. A BMI above 30 typically results in higher rates, and a BMI above 40 may lead to denial of coverage with some carriers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                  <span><strong>Military and DoD standards</strong>: The US Department of Defense uses BMI as part of fitness standards. Each branch has maximum BMI thresholds (typically around 25-27.5 depending on age and gender), with body fat percentage measurements used as a secondary screen for those who exceed BMI limits.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Racial and Ethnic Disparities in BMI */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Target className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">Racial and Ethnic Disparities in BMI (US)</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                CDC data reveals significant racial and ethnic disparities in obesity prevalence across the
                United States, reflecting systemic inequalities in access to healthy food, healthcare, and
                safe spaces for physical activity.
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-4">
                <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                  <p className="font-bold text-sm mb-2">Obesity prevalence by race/ethnicity (CDC, NHANES)</p>
                  <ul className="text-sm space-y-1">
                    <li>- <strong>Non-Hispanic Black adults</strong>: 49.9%</li>
                    <li>- <strong>Hispanic adults</strong>: 45.6%</li>
                    <li>- <strong>Non-Hispanic White adults</strong>: 41.4%</li>
                    <li>- <strong>Non-Hispanic Asian adults</strong>: 16.1%</li>
                  </ul>
                </div>
                <div className="bg-info/5 border border-info/20 rounded-lg p-4">
                  <p className="font-bold text-sm mb-2">Contributing factors</p>
                  <ul className="text-sm space-y-1">
                    <li>- Food deserts and limited access to fresh produce</li>
                    <li>- Socioeconomic disparities and healthcare access gaps</li>
                    <li>- Historical and structural inequalities</li>
                    <li>- Cultural dietary patterns and food marketing</li>
                  </ul>
                </div>
              </div>
              <p>
                <strong>The BMI accuracy debate:</strong> There is growing scientific discussion about whether standard BMI
                thresholds are equally valid across all racial and ethnic groups. Research suggests that BMI may underestimate
                health risks in Asian populations and overestimate them in Black populations at the same numeric value.
              </p>
              <p>
                <strong>Adjusted thresholds for Asian populations:</strong> The WHO and many US healthcare systems now recommend
                lower BMI thresholds for people of Asian descent — overweight at BMI 23+ (instead of 25+) and obese at BMI 27.5+
                (instead of 30+). This reflects evidence that Asian populations tend to develop obesity-related conditions such
                as type 2 diabetes at lower BMI values. The <strong>Joslin Diabetes Center</strong> and the <strong>ADA (American Diabetes Association)</strong>
                both recommend earlier screening for Asian Americans.
              </p>
              <p>
                Understanding these disparities is essential for public health interventions. Programs like the CDC's
                <strong> REACH (Racial and Ethnic Approaches to Community Health)</strong> specifically target health equity in
                communities disproportionately affected by obesity.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Understanding BMI interpretation in the US and UK</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>BMI interpretation</strong> is essential to understand what your
                <strong> BMI result</strong> means according to the <strong>CDC BMI calculator</strong> standards
                and <strong>NHS BMI checker</strong> categories. Knowing <strong>how to read your BMI</strong> using
                guidelines from the <strong>American Heart Association (AHA)</strong> and the <strong>NIH (National
                Institutes of Health)</strong> helps identify whether you are at a healthy weight or if medical
                consultation is recommended.
              </p>
              <p>
                <strong>How to interpret BMI</strong>? The CDC and NHS BMI categories clearly define
                what <strong>a BMI means</strong> of 22, 25, or 30. <strong>BMI analysis</strong> per
                the <strong>Mayo Clinic</strong> and other leading US medical institutions
                must always account for context: age, sex, ethnicity, muscle mass, and physical activity level.
              </p>
              <p>
                The <strong>ideal BMI</strong> is between 18.5 and 24.9 for most adults, though the <strong>ADA
                (American Diabetes Association)</strong> recommends adjusted thresholds for Asian Americans.
                A complete <strong>BMI explanation</strong> includes considering complementary tests like the
                <strong> A1C test</strong>, <strong>lipid panel</strong>, waist circumference (per AHA guidelines),
                and <strong>DEXA scan</strong> for body composition. Whether you use the <strong>CDC adult BMI
                calculator</strong> or the <strong>NHS BMI healthy weight calculator</strong>, always follow up
                abnormal results with your primary care provider.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calculate your BMI now</h3>
            <p className="text-muted-foreground mb-6">
              Use our free calculator to know your body mass index
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
          <p>© 2024 BMI Interpretation - Complete Guide</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIInterpretation;
