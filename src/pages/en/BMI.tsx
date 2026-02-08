import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Calculator, Activity, Target, BookOpen, Scale, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";

const kgToLbs = (kg: number) => Math.round(kg * 2.20462);
const cmToFtIn = (cm: number) => {
  const totalIn = Math.round(cm / 2.54);
  return `${Math.floor(totalIn / 12)}'${totalIn % 12}"`;
};

const BMI = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);

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
            <span className="gradient-text">BMI Calculator</span> - Body Mass Index
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
          {/* What is BMI */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">What is BMI?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>BMI (Body Mass Index)</strong> is a simple measure that uses your height and weight
                to estimate whether you're a healthy weight. The <strong>BMI formula</strong> divides your
                weight in kilograms by your height in meters squared.
              </p>
              <p>
                The <strong>BMI calculation</strong> was invented in the 1830s by Belgian mathematician
                Adolphe Quetelet. Today, it's used worldwide by doctors and health organizations as a
                quick screening tool for weight categories.
              </p>
            </div>
          </div>

          {/* BMI Categories */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI Categories (WHO)</h2>
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
                    <td className="py-3 px-4">≥ 40</td>
                    <td className="py-3 px-4 text-destructive">Extremely high risk</td>
                  </tr>
                </tbody>
              </table>
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
              <p>The <strong>BMI formula</strong> is simple:</p>
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-primary">BMI = Weight (kg) ÷ Height² (m)</p>
              </div>
              <p>
                For example, if you weigh 70 kg and are 1.75 m tall:<br />
                BMI = 70 ÷ (1.75 × 1.75) = 70 ÷ 3.0625 = <strong>22.9</strong>
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

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Understanding Your Body Mass Index</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                The <strong>BMI calculator</strong> is an essential tool for understanding your weight status.
                Whether you're looking for a <strong>free BMI calculator</strong>, want to know your
                <strong> ideal BMI</strong>, or simply want to <strong>calculate BMI</strong> quickly,
                our tool provides instant results.
              </p>
              <p>
                <strong>What is a good BMI</strong>? A <strong>healthy BMI</strong> falls between 18.5 and 24.9.
                The <strong>BMI chart</strong> shows that a <strong>normal BMI</strong> indicates you're at a
                healthy weight for your height. Use our <strong>BMI checker</strong> to find out where you stand.
              </p>
              <p>
                The <strong>body mass index calculator</strong> uses the standard <strong>BMI equation</strong>
                recognized by the WHO. While the <strong>BMI scale</strong> is useful, remember that it doesn't
                account for muscle mass, age, or body composition.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 Free BMI Calculator - Body Mass Index Tool</p>
        </footer>
      </div>
    </div>
  );
};

export default BMI;
