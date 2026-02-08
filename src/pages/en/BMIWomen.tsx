import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Users, Heart, Target, Baby, Scale, Activity, AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const lbsToKg = (lbs: number) => lbs * 0.453592;
const inToCm = (inches: number) => inches * 2.54;

const BMIWomen = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weightLbs, setWeightLbs] = useState(143);
  const [heightIn, setHeightIn] = useState(65);

  const feet = Math.floor(heightIn / 12);
  const inches = heightIn % 12;

  const calculateBMI = useCallback((wLbs: number, hIn: number) => {
    const wKg = lbsToKg(wLbs);
    const hCm = inToCm(hIn);
    const heightInM = hCm / 100;
    const calculatedBmi = wKg / (heightInM * heightInM);
    setBmi(calculatedBmi);
  }, []);

  // Calculate BMI on initial load
  useEffect(() => {
    calculateBMI(weightLbs, heightIn);
  }, []);

  const handleWeightChange = (value: number[]) => {
    setWeightLbs(value[0]);
    calculateBMI(value[0], heightIn);
  };

  const handleHeightChange = (value: number[]) => {
    setHeightIn(value[0]);
    calculateBMI(weightLbs, value[0]);
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
            <span className="text-pink-500">BMI for Women</span>: Calculate Your Index
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            BMI calculator with personalized advice for every stage of a woman's life
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
                  <span className="text-2xl font-bold text-pink-500">{weightLbs} lbs</span>
                </div>
                <Slider
                  value={[weightLbs]}
                  onValueChange={handleWeightChange}
                  min={77}
                  max={330}
                  step={1}
                  className="py-4"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Height</label>
                  <span className="text-2xl font-bold text-pink-500">{feet}'{inches}"</span>
                </div>
                <Slider
                  value={[heightIn]}
                  onValueChange={handleHeightChange}
                  min={51}
                  max={79}
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
                <strong>Female BMI</strong> is calculated the same way as for men, but interpretation differs slightly.
                Women naturally have a <strong>higher body fat percentage</strong> (20-25% vs 15-20% for men),
                which is completely normal and necessary for proper hormonal function.
              </p>
              <p>
                The <strong>ideal waist circumference</strong> for a woman shouldn't exceed <strong>80 cm</strong>
                (31.5 inches - moderate risk) or <strong>88 cm</strong> (34.6 inches - high risk). This indicator
                is often more relevant than BMI alone as it measures abdominal fat, which is more dangerous for health.
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
                    <th className="text-left py-3 px-4 font-semibold">Example (5'5" / 165cm)</th>
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
                    <td className="py-3 px-4">50 - 68 kg (110-150 lbs)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Overweight
                    </td>
                    <td className="py-3 px-4">25 - 29.9</td>
                    <td className="py-3 px-4">68 - 81 kg (150-179 lbs)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesity
                    </td>
                    <td className="py-3 px-4">≥ 30</td>
                    <td className="py-3 px-4">&gt; 81 kg (179 lbs)</td>
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
                { height: "5'1\" (155cm)", min: 44, max: 60, ideal: 53 },
                { height: "5'3\" (160cm)", min: 47, max: 64, ideal: 56 },
                { height: "5'5\" (165cm)", min: 50, max: 68, ideal: 60 },
                { height: "5'7\" (170cm)", min: 53, max: 72, ideal: 64 },
                { height: "5'9\" (175cm)", min: 57, max: 76, ideal: 67 },
                { height: "5'11\" (180cm)", min: 60, max: 81, ideal: 71 },
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
                  <span>Weight can vary by <strong>2-6 lbs</strong> depending on menstrual cycle</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Water retention</strong> is normal before your period</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Always weigh yourself at the <strong>same point</strong> in your cycle</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Menopause</strong> changes fat distribution patterns</span>
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
                  <span>BMI <strong>does not apply</strong> during pregnancy</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Recommended weight gain: <strong>25-35 lbs</strong> (normal BMI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Consult your <strong>OB/GYN</strong> for personalized monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Postpartum weight loss takes <strong>time</strong> - be patient</span>
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
                abdominal area. Metabolism slows down and muscle mass naturally decreases.
                It's therefore normal to gain a few pounds after 50.
              </p>
              <p>
                To maintain a healthy <strong>BMI after 50</strong> or <strong>BMI after 60</strong>,
                focus on a diet rich in <strong>protein</strong> and <strong>calcium</strong>,
                and maintain regular physical activity including <strong>strength training</strong>.
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
                our <strong>female BMI calculator</strong> gives you instant, personalized answers.
              </p>
              <p>
                The <strong>ideal BMI for females</strong> is between 19 and 24. A <strong>normal BMI for women</strong>
                corresponds to a weight that varies by height. For a woman who is <strong>5'4"</strong>,
                the <strong>ideal weight</strong> is about 125 lbs. For a <strong>5'7" woman</strong>, it's about 140 lbs.
              </p>
              <p>
                <strong>What should my BMI be female</strong>? The healthy range is 18.5-24.9, but athletic women may be slightly higher.
                <strong> BMI for women over 40</strong> remains the same numerically, but body composition changes.
                <strong> BMI for women over 50</strong> may tolerate a few extra pounds - focus on staying active.
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
