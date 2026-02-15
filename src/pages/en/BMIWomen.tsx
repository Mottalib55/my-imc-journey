import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Users, Heart, Target, Baby, Scale, Activity, AlertTriangle, CheckCircle2, Sparkles, Globe } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const kgToLbs = (kg: number) => Math.round(kg * 2.20462);
const cmToFtIn = (cm: number) => {
  const totalIn = Math.round(cm / 2.54);
  return `${Math.floor(totalIn / 12)}'${totalIn % 12}"`;
};

const BMIWomen = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(163);

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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-pink-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-500 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            BMI Calculator for Women
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-pink-500">BMI for Women</span> : Female BMI Calculator & Chart
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In the US, 42% of women are obese (CDC, NHANES 2023). BMI calculator with guidelines from CDC, ACOG, NAMS, and NHS.
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-pink-500" />
              Enter your measurements
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Weight</label>
                  <span className="text-2xl font-bold text-pink-500">{weight} kg <span className="text-base font-normal text-muted-foreground">({kgToLbs(weight)} lbs)</span></span>
                </div>
                <Slider
                  value={[weight]}
                  onValueChange={handleWeightChange}
                  min={35}
                  max={150}
                  step={1}
                  className="py-4"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Height</label>
                  <span className="text-2xl font-bold text-pink-500">{height} cm <span className="text-base font-normal text-muted-foreground">({cmToFtIn(height)})</span></span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={handleHeightChange}
                  min={130}
                  max={200}
                  step={1}
                  className="py-4"
                />
              </div>
            </div>
          </div>

          <BMIGauge bmi={bmi} />
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Understanding BMI for Women */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Users className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Understanding BMI for Women</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>Female BMI</strong> is calculated the same way as for men, but interpretation differs significantly.
                Women naturally have a <strong>higher body fat percentage</strong> (20-25% vs 15-20% for men),
                which is completely normal and necessary for proper hormonal function. According to NHANES data,
                the <strong>average BMI for US women is 26.5</strong>, while NHS Digital reports the
                <strong> UK average at 27.1</strong> — both in the overweight range.
              </p>
              <p>
                The <strong>average American woman</strong> stands <strong>5'4" (163 cm)</strong> tall and weighs
                <strong> 170 lbs (77 kg)</strong>. The CDC defines a <strong>waist circumference above 35 inches (88 cm)</strong> as
                high risk for women. This waist measurement is often more relevant than BMI alone, as it targets
                visceral abdominal fat, which is more metabolically dangerous.
              </p>
              <p>
                <strong>Racial disparities</strong> in obesity rates among US women are significant:
                <strong> Black women 56.9%</strong>, <strong>Hispanic women 43.7%</strong>, and
                <strong> White women 39.8%</strong> (CDC). These differences highlight the importance of
                culturally sensitive approaches to weight management and healthcare access.
              </p>
            </div>
          </div>

          {/* BMI Table for Women */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Scale className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI Chart for Women</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Category</th>
                    <th className="text-left py-3 px-4 font-semibold">BMI</th>
                    <th className="text-left py-3 px-4 font-semibold">Example 5'4" / 163cm (US avg)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Underweight
                    </td>
                    <td className="py-3 px-4">&lt; 18.5</td>
                    <td className="py-3 px-4">&lt; 50 kg (110 lbs)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Normal weight
                    </td>
                    <td className="py-3 px-4">18.5 - 24.9</td>
                    <td className="py-3 px-4">50 - 66 kg (110-146 lbs)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Overweight
                    </td>
                    <td className="py-3 px-4">25 - 29.9</td>
                    <td className="py-3 px-4">66 - 80 kg (146-176 lbs)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesity
                    </td>
                    <td className="py-3 px-4">≥ 30</td>
                    <td className="py-3 px-4">&gt; 80 kg (176 lbs)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Ideal weight by height */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Target className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Ideal Weight for Women by Height</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "5'0\" (152cm)", min: 43, max: 58, ideal: 51 },
                { height: "5'2\" (157cm)", min: 46, max: 62, ideal: 55 },
                { height: "5'4\" (163cm, US avg)", min: 49, max: 66, ideal: 58 },
                { height: "5'6\" (168cm)", min: 52, max: 70, ideal: 62 },
                { height: "5'8\" (173cm)", min: 55, max: 75, ideal: 66 },
                { height: "5'10\" (178cm)", min: 59, max: 79, ideal: 70 },
              ].map((item) => (
                <div key={item.height} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className="font-semibold text-pink-500">{item.height}</span>
                  <span className="text-muted-foreground">
                    {item.min} - {item.max} kg <span className="text-success">(ideal: {item.ideal} kg)</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Women-specific factors */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-purple-500/10">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-display font-bold">Hormonal Cycle & Weight</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span><strong>ACOG guidelines</strong> on BMI during reproductive years: weight can vary by <strong>2-6 lbs</strong> depending on menstrual cycle</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span><strong>CDC recommends folic acid</strong> for all women of childbearing age regardless of BMI</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span><strong>HRT and weight</strong>: NAMS position on menopause hormone therapy supports individualized approach based on BMI</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Always weigh yourself at the <strong>same point</strong> in your cycle for consistent tracking</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-pink-500/10">
                  <Baby className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-display font-bold">Pregnancy & BMI</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span><strong>ACOG recommends</strong>: 25-35 lbs gain for normal BMI, 15-25 lbs for overweight, 11-20 lbs for obese</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Gestational diabetes</strong> affects 10% of US pregnancies (CDC) — BMI screening is critical before conception</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span><strong>WIC program</strong> provides free nutrition support for pregnant and postpartum women in the US</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Consult your <strong>OB/GYN</strong> for personalized monitoring — postpartum weight loss takes <strong>time</strong></span>
                </li>
              </ul>
            </div>
          </div>

          {/* Menopause */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI and Menopause</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                During <strong>menopause</strong>, hormonal changes promote weight gain, especially in the
                abdominal area. The <strong>North American Menopause Society (NAMS)</strong> notes that the
                <strong> average US woman gains 5 lbs during the menopause transition</strong>. Metabolism slows
                down and muscle mass naturally decreases, making weight management more challenging after 50.
              </p>
              <p>
                <strong>Bone density screening</strong>: the USPSTF recommends a <strong>DEXA scan at age 65</strong> for
                all women, or earlier for those with risk factors. Lower BMI is associated with higher osteoporosis
                risk, while higher BMI increases cardiovascular and joint risks — finding the right balance is key.
              </p>
              <p>
                To maintain a healthy <strong>BMI after 50</strong> or <strong>BMI after 60</strong>,
                focus on a diet rich in <strong>protein</strong> and <strong>calcium</strong>,
                and maintain regular physical activity including <strong>strength training</strong>.
                The AHA recommends at least 150 minutes of moderate activity per week for postmenopausal women.
              </p>
            </div>
          </div>

          {/* Women's BMI & US Healthcare */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Globe className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Women's BMI & US Healthcare</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                The <strong>Affordable Care Act (ACA)</strong> mandates coverage for BMI screening and obesity
                counseling as preventive services at no cost-sharing for women. This includes annual wellness
                visits where BMI is assessed and nutrition counseling referrals for those with a BMI of 30 or above.
              </p>
              <p>
                <strong>Medicaid coverage</strong> for obesity treatment varies significantly by state. Some states
                cover bariatric surgery and intensive behavioral therapy, while others offer limited benefits.
                State-level obesity rates also vary dramatically — from <strong>West Virginia at 41.6%</strong> to
                <strong> Colorado at 24.2%</strong> — reflecting differences in access to care, food environments,
                and socioeconomic factors.
              </p>
              <p>
                <strong>PCOS (Polycystic Ovary Syndrome)</strong> affects <strong>6-12% of US women</strong> of
                reproductive age and has a direct impact on BMI. Insulin resistance associated with PCOS makes
                weight management more difficult, and even a 5-10% weight loss can significantly improve symptoms
                according to the NIH.
              </p>
              <p>
                <strong>Title IX implications</strong> for female athletes: collegiate and professional female athletes
                face unique BMI-related pressures. The NCAA and sports medicine guidelines (ACSM) emphasize that
                BMI alone should never be used to assess fitness or eligibility, as athletic women often have higher
                muscle mass that skews BMI readings upward.
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Activity className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Everything About Female BMI</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                The <strong>BMI calculator for women</strong> is an essential tool for evaluating your <strong>female body composition</strong>.
                Whether you're looking for your <strong>ideal BMI for women</strong> or checking your <strong>healthy weight for women</strong>,
                our <strong>female BMI calculator</strong> gives you instant, personalized answers based on
                guidelines from the <strong>CDC</strong>, <strong>ACOG</strong>, <strong>NAMS</strong>, and the <strong>AHA</strong>.
              </p>
              <p>
                The <strong>ideal BMI for females</strong> is between 19 and 24. A <strong>normal BMI for women</strong>
                corresponds to a weight that varies by height. For a woman who is <strong>5'4" (the US average)</strong>,
                the <strong>ideal weight</strong> is about 128 lbs (58 kg). For a <strong>5'6" woman</strong>, it's about 137 lbs (62 kg).
                The <strong>NIH</strong> provides BMI tables calibrated for the US population.
              </p>
              <p>
                <strong>What should my BMI be female</strong>? The healthy range is 18.5-24.9, but athletic women may be slightly higher.
                <strong> BMI for women over 40</strong> remains the same numerically, but body composition changes with perimenopause.
                <strong> BMI for women over 50</strong> may tolerate a few extra pounds — the <strong>NAMS</strong> and
                <strong> NIH</strong> both note that a slightly higher BMI (25-27) in older women may be protective against osteoporosis.
                Obesity rates vary by state, from <strong>West Virginia (41.6%)</strong> to <strong>Colorado (24.2%)</strong>.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI Calculator for Women - Informational Tool</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIWomen;
