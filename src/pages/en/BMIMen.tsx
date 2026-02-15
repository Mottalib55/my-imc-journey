import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { User, Dumbbell, Target, Heart, Scale, Activity, AlertTriangle, CheckCircle2, Globe } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const kgToLbs = (kg: number) => Math.round(kg * 2.20462);
const cmToFtIn = (cm: number) => {
  const totalIn = Math.round(cm / 2.54);
  return `${Math.floor(totalIn / 12)}'${totalIn % 12}"`;
};

const BMIMen = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(84);
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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-6">
            <User className="w-4 h-4" />
            BMI Calculator for Men
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-blue-500">BMI for Men</span> : Male BMI Calculator & Ideal Weight
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In the US, 43% of men are obese (CDC, NHANES 2023). Calculate your BMI with US and UK male health guidelines from the CDC, NHS, and AHA.
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-500" />
              Enter your measurements
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Weight</label>
                  <span className="text-2xl font-bold text-blue-500">{weight} kg <span className="text-base font-normal text-muted-foreground">({kgToLbs(weight)} lbs)</span></span>
                </div>
                <Slider
                  value={[weight]}
                  onValueChange={handleWeightChange}
                  min={40}
                  max={200}
                  step={1}
                  className="py-4"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Height</label>
                  <span className="text-2xl font-bold text-blue-500">{height} cm <span className="text-base font-normal text-muted-foreground">({cmToFtIn(height)})</span></span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={handleHeightChange}
                  min={140}
                  max={220}
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
          {/* Understanding BMI for Men */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <User className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Understanding BMI for Men</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>Male BMI</strong> is calculated the same way as for women, but interpretation can differ.
                Men naturally have <strong>more muscle mass</strong> and <strong>lower body fat percentage</strong>
                (15-20% vs 20-25% for women). The <strong>US average male BMI is 26.6</strong> according to NHANES data,
                while the <strong>UK average is 27.4</strong> per NHS Digital — both firmly in the overweight category.
              </p>
              <p>
                The <strong>average American man</strong> stands <strong>5'9" (176 cm)</strong> and weighs
                <strong> 200 lbs (91 kg)</strong>, giving a BMI of roughly 29.5 — nearly obese.
                A man can have a <strong>higher BMI</strong> while being in excellent health if he exercises
                regularly or does strength training. That's why <strong>waist circumference</strong> is often
                a better indicator for men: per CDC guidelines, it shouldn't exceed <strong>40 inches (102 cm)</strong> for men (high risk threshold).
              </p>
              <p>
                <strong>Obesity rates vary by race and ethnicity</strong> among US men: Hispanic men have the highest
                prevalence at <strong>45.7%</strong>, followed by White men at <strong>41.4%</strong>, and Black men
                at <strong>34.2%</strong> (CDC, NHANES). These disparities reflect complex socioeconomic, environmental,
                and genetic factors that influence weight and health outcomes.
              </p>
            </div>
          </div>

          {/* BMI Table for Men */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Scale className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI Chart for Men</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Category</th>
                    <th className="text-left py-3 px-4 font-semibold">BMI</th>
                    <th className="text-left py-3 px-4 font-semibold">Example (5'9" / 176cm — US avg)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Underweight
                    </td>
                    <td className="py-3 px-4">&lt; 18.5</td>
                    <td className="py-3 px-4">&lt; 57 kg (126 lbs)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Normal weight
                    </td>
                    <td className="py-3 px-4">18.5 - 24.9</td>
                    <td className="py-3 px-4">57 - 77 kg (126-170 lbs)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Overweight
                    </td>
                    <td className="py-3 px-4">25 - 29.9</td>
                    <td className="py-3 px-4">77 - 93 kg (170-205 lbs)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesity
                    </td>
                    <td className="py-3 px-4">&ge; 30</td>
                    <td className="py-3 px-4">&gt; 93 kg (205 lbs)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Ideal weight by height */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Ideal Weight for Men by Height</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "5'6\" (168cm)", min: 52, max: 70, ideal: 62 },
                { height: "5'8\" (173cm)", min: 55, max: 75, ideal: 66 },
                { height: "5'9\" (175cm)", min: 57, max: 77, ideal: 68 },
                { height: "5'10\" (178cm)", min: 59, max: 79, ideal: 70 },
                { height: "6'0\" (183cm)", min: 62, max: 84, ideal: 74 },
                { height: "6'2\" (188cm)", min: 65, max: 88, ideal: 78 },
              ].map((item) => (
                <div key={item.height} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className="font-semibold text-blue-500">{item.height}</span>
                  <span className="text-muted-foreground">
                    {item.min} - {item.max} kg ({kgToLbs(item.min)}-{kgToLbs(item.max)} lbs) <span className="text-success">(ideal: {item.ideal} kg)</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tips for men */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-success/10">
                  <Dumbbell className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-xl font-display font-bold">Exercise & Muscle</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>CDC recommends 150 minutes</strong> of moderate-intensity aerobic activity plus <strong>2 days of muscle-strengthening</strong> per week</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Only <strong>23% of American men</strong> meet both aerobic and strength guidelines (CDC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>A muscular man can have a <strong>BMI of 27-28</strong> without excess fat — the <strong>ACSM</strong> (American College of Sports Medicine) recommends body composition testing alongside BMI</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Combine <strong>cardio and resistance training</strong> — ACSM guidelines suggest 2-4 sets of each exercise for optimal results</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-warning/10">
                  <Heart className="w-6 h-6 text-warning" />
                </div>
                <h3 className="text-xl font-display font-bold">Men's Health</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>Heart disease is the #1 killer</strong> of American men — abdominal fat significantly increases cardiovascular risk (AHA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>After <strong>45</strong>, men should get <strong>annual lipid panels</strong> per AHA recommendation</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>Type 2 diabetes risk doubles</strong> with a BMI over 30 (NIH)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>Prostate cancer screening</strong> recommended from age 50 (USPSTF)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* BMI, Health Insurance & the US Healthcare System */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Globe className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI, Health Insurance & the US Healthcare System</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                In the United States, BMI plays a significant role beyond personal health — it directly impacts
                <strong> insurance costs, workplace wellness programs, and access to preventive care</strong>. Understanding
                how BMI intersects with the US healthcare system can help you make informed decisions about your health and finances.
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Many <strong>US employers use BMI thresholds</strong> for wellness program incentives — meeting healthy BMI targets can earn premium discounts of $150-$600/year</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>Life insurance premiums</strong> can increase <strong>20-50%</strong> for applicants with a BMI over 30, and some policies may decline coverage above BMI 40</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Under the <strong>ACA (Affordable Care Act)</strong>, BMI screening and obesity counseling are covered as preventive services <strong>at no cost</strong> to the patient</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>The <strong>VA (Veterans Affairs) healthcare</strong> system covers comprehensive obesity treatment for veterans, including nutritional counseling, exercise programs, and bariatric surgery when medically indicated</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Activity className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Everything About Male BMI</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                The <strong>BMI calculator for men</strong> is essential for evaluating your <strong>male body composition</strong>
                based on guidelines from the <strong>CDC</strong>, <strong>AHA</strong> (American Heart Association), and
                <strong> NIH/NHLBI</strong> (National Heart, Lung, and Blood Institute). Whether you're looking for your
                <strong> ideal BMI for men</strong> or checking if you're at a <strong>healthy weight for men</strong>,
                our <strong>male BMI calculator</strong> gives you instant answers calibrated to US and UK health standards.
              </p>
              <p>
                For a man who is <strong>5'10"</strong>, the <strong>ideal weight is around 154 lbs (70 kg)</strong> according
                to the <strong>Mayo Clinic</strong> healthy weight range. For a <strong>6 foot tall man</strong>, it's about
                163 lbs (74 kg). The <strong>average BMI for men</strong> in the US is 26.6, well above the healthy range of 18.5-24.9.
              </p>
              <p>
                <strong>Obesity rates vary dramatically across US states</strong>: Mississippi has the highest adult obesity
                rate at <strong>40.8%</strong>, while Colorado has the lowest at <strong>25.1%</strong>. BMI for men over 50
                can tolerate slightly higher values (up to 27) without major risk per <strong>NIH</strong> guidelines.
                The key is maintaining regular physical activity, balanced nutrition, and annual check-ups with your primary care provider.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 BMI Calculator for Men - Informational Tool</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIMen;
