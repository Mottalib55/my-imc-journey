import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Calculator, Activity, Target, BookOpen, Scale, TrendingUp, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";
import { RelatedPages } from "@/components/RelatedPages";

const kgToLbs = (kg: number) => Math.round(kg * 2.20462);
const cmToFtIn = (cm: number) => {
  const totalIn = Math.round(cm / 2.54);
  return `${Math.floor(totalIn / 12)}'${totalIn % 12}"`;
};

const BMI = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(77);
  const [height, setHeight] = useState(176);

  const calculateBMI = useCallback((w: number, h: number) => {
    const heightM = h / 100;
    const calculatedBmi = w / (heightM * heightM);
    setBmi(calculatedBmi);
  }, []);

  // Calculate BMI on initial load
  useEffect(() => {
    calculateBMI(weight, height);
  }, []);

  const handleWeightChange = (value: number[]) => {
    setWeight(value[0]);
    calculateBMI(value[0], height);
  };

  const handleHeightChange = (value: number[]) => {
    setHeight(value[0]);
    calculateBMI(weight, value[0]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            Free BMI Calculator
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Free BMI Calculator Online</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate your Body Mass Index instantly and discover your ideal weight range
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary" />
              Enter your measurements
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Weight</label>
                  <span className="text-2xl font-bold text-primary">{weight} kg <span className="text-base font-normal text-muted-foreground">({kgToLbs(weight)} lbs)</span></span>
                </div>
                <Slider
                  value={[weight]}
                  onValueChange={handleWeightChange}
                  min={30}
                  max={200}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>30 kg</span>
                  <span>200 kg</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Height</label>
                  <span className="text-2xl font-bold text-primary">{height} cm <span className="text-base font-normal text-muted-foreground">({cmToFtIn(height)})</span></span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={handleHeightChange}
                  min={100}
                  max={220}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>100 cm</span>
                  <span>220 cm</span>
                </div>
              </div>
            </div>
          </div>

          <BMIGauge bmi={bmi} />
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Contextualized Intro: BMI in the US and UK */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">What is BMI? Understanding Body Mass Index in the US and UK</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>Body Mass Index (BMI)</strong> is a numerical value derived from your weight and height
                that serves as a population-level screening tool for weight categories. Originally devised
                in the 1830s by Belgian mathematician Adolphe Quetelet, BMI has become the standard metric
                used by the <strong>Centers for Disease Control and Prevention (CDC)</strong> in the United States
                and the <strong>National Health Service (NHS)</strong> in the United Kingdom to classify adults
                into underweight, normal weight, overweight, and obese categories.
              </p>
              <p>
                The obesity crisis in the English-speaking world is staggering. According to the
                <strong> CDC's National Health and Nutrition Examination Survey (NHANES)</strong>, the adult
                obesity rate in the United States reached <strong>42.4% in 2023</strong>, up from 30.5% in
                1999-2000. In England, <strong>NHS Digital</strong> reports that approximately <strong>28% of
                adults are classified as obese</strong>, with a further 36% classified as overweight. Together,
                nearly two-thirds of English adults carry excess weight.
              </p>
              <p>
                The economic burden is enormous: obesity-related healthcare costs in the US are estimated at
                <strong> $173 billion per year</strong>, according to the CDC. In the UK, the NHS spends an
                estimated <strong>6.5 billion pounds annually</strong> on overweight- and obesity-related
                conditions. These figures underscore why BMI screening remains a critical public health tool,
                even as researchers acknowledge its limitations for individual diagnosis.
              </p>
            </div>
          </div>

          {/* CDC and NHS Guidelines */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">CDC and NHS Guidelines on BMI</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                The <strong>CDC</strong> recommends that all adults calculate their BMI at least once a year as
                part of routine health monitoring. The agency uses BMI as a gateway screening tool: individuals
                with a BMI of 25 or higher are advised to undergo further clinical assessments including waist
                circumference measurement, evaluation of diet and physical activity, family history review,and
                other health screenings. The CDC explicitly states that <strong>BMI alone is not diagnostic</strong> and
                should be combined with other clinical evaluations.
              </p>
              <p>
                The <strong>NHS</strong> follows similar guidelines but adds a specific recommendation for
                adults of South Asian, Chinese, and Black African descent: these populations may face elevated
                health risks at <strong>lower BMI thresholds (23 instead of 25 for overweight)</strong>. The
                NHS also provides a free online BMI calculator through its website and recommends that
                individuals with a BMI over 30 consult their GP for a comprehensive health assessment.
              </p>
              <p>
                Both agencies agree on several key points: BMI is a useful first step but not a definitive
                measure of health; waist circumference provides additional insight into visceral fat risk;
                and lifestyle factors such as diet quality, physical activity, smoking, and alcohol consumption
                must be considered alongside BMI for a complete health picture.
              </p>
              <p>
                The <strong>US Preventive Services Task Force (USPSTF)</strong> recommends that clinicians
                screen all adults for obesity and offer or refer patients with a BMI of 30 or higher to
                intensive, multicomponent behavioral interventions. In the UK, the <strong>National Institute
                for Health and Care Excellence (NICE)</strong> provides parallel guidance, recommending
                structured lifestyle weight management programs for adults with a BMI of 30 or above
                (or 27.5+ for high-risk ethnic groups).
              </p>
            </div>
          </div>

          {/* BMI Categories */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI Categories (WHO Standard)</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Category</th>
                    <th className="text-left py-3 px-4 font-bold">BMI Range</th>
                    <th className="text-left py-3 px-4 font-bold">Health Risk</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Underweight
                    </td>
                    <td className="py-3 px-4">&lt; 18.5</td>
                    <td className="py-3 px-4 text-info">Malnutrition risk</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Normal weight
                    </td>
                    <td className="py-3 px-4">18.5 - 24.9</td>
                    <td className="py-3 px-4 text-success">Low risk</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Overweight
                    </td>
                    <td className="py-3 px-4">25 - 29.9</td>
                    <td className="py-3 px-4 text-warning">Increased risk</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesity Class I
                    </td>
                    <td className="py-3 px-4">30 - 34.9</td>
                    <td className="py-3 px-4 text-destructive">High risk</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesity Class II
                    </td>
                    <td className="py-3 px-4">35 - 39.9</td>
                    <td className="py-3 px-4 text-destructive">Very high risk</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesity Class III
                    </td>
                    <td className="py-3 px-4">&ge; 40</td>
                    <td className="py-3 px-4 text-destructive">Extremely high risk</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-muted/30 rounded-xl text-sm text-muted-foreground">
              <p>
                <strong>Note on racial and ethnic disparities:</strong> Research published in the
                <em> American Journal of Clinical Nutrition</em> and endorsed by the WHO has shown that
                standard BMI thresholds may not apply equally across all populations. Asian Americans,
                for example, tend to develop type 2 diabetes and cardiovascular disease at lower BMI levels
                (as low as 23) compared to white Americans. Conversely, some studies suggest that Black
                Americans may carry more lean muscle mass at the same BMI, potentially overestimating
                body fat percentage. The CDC and the American Medical Association (AMA) have both
                acknowledged these disparities, with the AMA adopting a policy in 2023 recognizing BMI's
                limitations as a sole measure and calling for the use of additional metrics alongside BMI in
                clinical settings.
              </p>
            </div>
          </div>

          {/* BMI and Health Insurance in the US */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI and Health Insurance in the US</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                In the United States, BMI plays a significant role in the health insurance landscape.
                While the <strong>Affordable Care Act (ACA)</strong> prohibits health insurance companies from
                denying coverage or charging higher premiums based on pre-existing conditions (including
                obesity), BMI still influences several aspects of the insurance system.
              </p>
              <p>
                <strong>Life insurance</strong> is where BMI has the most direct financial impact. Most life
                insurance underwriters use BMI as a primary factor in risk classification. Applicants with a
                BMI above 30 may face higher premium rates, and those with a BMI above 40 may be declined
                coverage by some carriers altogether. Preferred or "super preferred" rate classes typically
                require a BMI between approximately 18 and 27, depending on the insurer.
              </p>
              <p>
                <strong>Employer wellness programs</strong> frequently incorporate BMI into their health risk
                assessments. Under current regulations, employers can offer financial incentives (such as
                premium discounts of up to 30% of the cost of coverage) to employees who participate in
                wellness programs, including those that target achieving a healthy BMI. However, these programs
                must also offer reasonable alternatives for employees who cannot meet specific BMI targets
                due to medical conditions.
              </p>
              <p>
                The <strong>Equal Employment Opportunity Commission (EEOC)</strong> and the <strong>Americans
                with Disabilities Act (ADA)</strong> provide some protections. Under the ADA, severe obesity
                (BMI 40+) can be considered a disability if it substantially limits one or more major life
                activities. Several states and localities have enacted additional protections against weight
                discrimination. In the UK, the NHS provides universal healthcare regardless of BMI, though
                some Clinical Commissioning Groups have implemented BMI thresholds for elective surgeries
                such as hip and knee replacements, a practice that has drawn significant debate.
              </p>
            </div>
          </div>

          {/* How to calculate */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">How to Calculate BMI</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>The <strong>BMI formula</strong> is straightforward and can be calculated using either metric or imperial units:</p>
              <div className="bg-muted/30 rounded-xl p-6 text-center space-y-2">
                <p className="text-2xl font-bold text-primary">BMI = Weight (kg) / Height (m) squared</p>
                <p className="text-lg font-semibold text-muted-foreground">or</p>
                <p className="text-2xl font-bold text-primary">BMI = [Weight (lbs) / Height (in) squared] x 703</p>
              </div>
              <p>
                <strong>Metric example:</strong> If you weigh 80 kg and are 1.76 m (5'9") tall:<br />
                BMI = 80 / (1.76 x 1.76) = 80 / 3.0976 = <strong>25.8</strong>
              </p>
              <p>
                <strong>Imperial example:</strong> If you weigh 176 lbs and are 5'9" (69 inches) tall:<br />
                BMI = (176 / (69 x 69)) x 703 = (176 / 4,761) x 703 = 0.03697 x 703 = <strong>26.0</strong>
              </p>
              <p>
                Both results indicate an "overweight" classification under WHO standards. Note that the slight
                difference between the metric and imperial results is due to rounding in the conversion
                between units. The CDC recommends using the metric formula or the multiplication factor of 703
                for imperial units to ensure consistency.
              </p>
            </div>
          </div>

          {/* Links to other pages */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/bmi-men" className="glass-card p-6 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Activity className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-bold">BMI for Men</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Specific considerations for male body composition
              </p>
            </Link>

            <Link to="/bmi-women" className="glass-card p-6 hover:border-pink-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-pink-500/10">
                  <Activity className="w-5 h-5 text-pink-500" />
                </div>
                <h3 className="font-bold">BMI for Women</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Understanding BMI with hormonal factors
              </p>
            </Link>

            <Link to="/bmi-athletes" className="glass-card p-6 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-bold">BMI for Athletes</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Why BMI doesn't work for muscular people
              </p>
            </Link>
          </div>

          {/* Evidence-Based SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Evidence-Based Insights on Body Mass Index</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                The <strong>BMI calculator</strong> remains the most widely used screening tool for weight
                classification, endorsed by leading institutions including the <strong>Mayo Clinic</strong>,
                the <strong>American Heart Association (AHA)</strong>, and the <strong>National Institutes of
                Health (NIH)</strong>. According to the NIH, a BMI between 18.5 and 24.9 is associated with the
                lowest risk of chronic diseases such as type 2 diabetes, hypertension, and coronary heart disease.
              </p>
              <p>
                The <strong>Mayo Clinic</strong> emphasizes that while BMI is a valuable starting point, it should
                be interpreted alongside other health indicators. Their clinicians recommend supplementing BMI
                with <strong>waist-to-hip ratio</strong>, <strong>body fat percentage</strong> measurements
                (via DEXA scans or bioelectrical impedance), and metabolic markers such as fasting blood glucose,
                cholesterol levels, and blood pressure. This multi-metric approach provides a far more accurate
                picture of cardiovascular and metabolic risk than BMI alone.
              </p>
              <p>
                The <strong>American Heart Association</strong> published updated guidance noting that individuals
                with a "normal" BMI can still be at elevated cardiovascular risk if they have high visceral fat
                (so-called "metabolically unhealthy normal weight"), while some individuals classified as
                "overweight" by BMI may have favorable metabolic profiles. The AHA recommends that healthcare
                providers use BMI as one component of a broader risk assessment that includes blood pressure,
                cholesterol, blood sugar, smoking status, and family history of cardiovascular disease.
              </p>
              <p>
                The <strong>NIH's National Heart, Lung, and Blood Institute (NHLBI)</strong> further recommends
                that any adult with a BMI of 25 or above should be evaluated for comorbidities, and that weight
                loss interventions should be considered for those with a BMI of 30 or higher, or a BMI of 25-29.9
                with two or more risk factors. These evidence-based guidelines form the foundation of clinical
                practice across the United States and have been adopted, with regional modifications, by healthcare
                systems worldwide.
              </p>
            </div>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 Free BMI Calculator - Body Mass Index Tool</p>
        </footer>
      </div>
    </div>
  );
};

export default BMI;
