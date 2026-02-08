import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { User, Dumbbell, Target, Heart, Scale, Activity, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const kgToLbs = (kg: number) => Math.round(kg * 2.20462);
const cmToFtIn = (cm: number) => {
  const totalIn = Math.round(cm / 2.54);
  return `${Math.floor(totalIn / 12)}'${totalIn % 12}"`;
};

const BMIMen = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(80);
  const [height, setHeight] = useState(178);

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
            <span className="text-blue-500">BMI for Men</span>: Calculate Your Index
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            BMI calculator with personalized advice for men and male body composition
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
                (15-20% vs 20-25% for women).
              </p>
              <p>
                A man can have a <strong>higher BMI</strong> while being in excellent health if he exercises
                regularly or does strength training. That's why <strong>waist circumference</strong> is often
                a better indicator for men: it shouldn't exceed <strong>94 cm</strong> (moderate risk) or
                <strong>102 cm</strong> (high risk).
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
                    <th className="text-left py-3 px-4 font-semibold">Example (5'11" / 180cm)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      Underweight
                    </td>
                    <td className="py-3 px-4">&lt; 18.5</td>
                    <td className="py-3 px-4">&lt; 60 kg (132 lbs)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      Normal weight
                    </td>
                    <td className="py-3 px-4">18.5 - 24.9</td>
                    <td className="py-3 px-4">60 - 81 kg (132-178 lbs)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      Overweight
                    </td>
                    <td className="py-3 px-4">25 - 29.9</td>
                    <td className="py-3 px-4">81 - 97 kg (178-214 lbs)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      Obesity
                    </td>
                    <td className="py-3 px-4">≥ 30</td>
                    <td className="py-3 px-4">&gt; 97 kg (214 lbs)</td>
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
                { height: "5'5\" (165cm)", min: 50, max: 68, ideal: 60 },
                { height: "5'7\" (170cm)", min: 53, max: 72, ideal: 64 },
                { height: "5'9\" (175cm)", min: 57, max: 76, ideal: 67 },
                { height: "5'11\" (180cm)", min: 60, max: 81, ideal: 71 },
                { height: "6'1\" (185cm)", min: 63, max: 85, ideal: 75 },
                { height: "6'3\" (190cm)", min: 67, max: 90, ideal: 79 },
              ].map((item) => (
                <div key={item.height} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className="font-semibold text-blue-500">{item.height}</span>
                  <span className="text-muted-foreground">
                    {item.min} - {item.max} kg <span className="text-success">(ideal: {item.ideal} kg)</span>
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
                  <span><strong>Strength training</strong> increases muscle mass and therefore BMI</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>A muscular man can have a <strong>BMI of 27-28</strong> without excess fat</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Combine <strong>cardio and strength</strong> for optimal balance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Aim for <strong>150 min moderate activity</strong> per week minimum</span>
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
                  <span><strong>Abdominal fat</strong> increases cardiovascular risks</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>After <strong>40</strong>, metabolism slows significantly</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>Testosterone</strong> decreases with age, promoting fat gain</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>Annual health check <strong>recommended after 50</strong></span>
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
                The <strong>BMI calculator for men</strong> is essential for evaluating your <strong>male body composition</strong>.
                Whether you're looking for your <strong>ideal BMI for men</strong> or checking if you're at a
                <strong> healthy weight for men</strong>, our <strong>male BMI calculator</strong> gives you instant answers.
              </p>
              <p>
                The <strong>average BMI for men</strong> varies by age and activity level. A <strong>normal BMI for males</strong>
                is between 20 and 25. For a man who is <strong>5'10"</strong>, the <strong>ideal weight</strong> is around
                70 kg. For a <strong>6 foot tall man</strong>, it's about 77 kg.
              </p>
              <p>
                <strong>What should my BMI be male</strong>? The ideal range is 20-25, but athletic men may be higher.
                <strong> BMI for men over 50</strong> can tolerate slightly higher values (up to 27) without major risk.
                The key is maintaining regular physical activity and balanced nutrition.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI Calculator for Men - Informational Tool</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIMen;
