import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Dumbbell, AlertTriangle, Target, Scale, Activity, TrendingUp } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const BMIAthletes = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(85);
  const [height, setHeight] = useState(180);

  const calculateBMI = useCallback((w: number, h: number) => {
    const heightInM = h / 100;
    const calculatedBmi = w / (heightInM * heightInM);
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

  // Calculate FFMI estimation
  const ffmi = weight && height ? (weight * 0.85) / Math.pow(height / 100, 2) : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6">
            <Dumbbell className="w-4 h-4" />
            BMI Calculator for Athletes
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-orange-500">BMI for Athletes</span>: Know the Limitations
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Why BMI doesn't work for muscular people and what alternatives to use
          </p>
        </header>

        {/* Warning Banner */}
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-orange-500 mb-2">Warning: BMI is biased for athletes</h3>
              <p className="text-muted-foreground">
                BMI doesn't distinguish between <strong>muscle mass</strong> and <strong>body fat</strong>.
                A muscular athlete may have an "overweight" or "obese" BMI while being in excellent health.
              </p>
            </div>
          </div>
        </div>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-orange-500" />
              Enter your measurements
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Weight</label>
                  <span className="text-2xl font-bold text-orange-500">{weight} kg</span>
                </div>
                <Slider
                  value={[weight]}
                  onValueChange={handleWeightChange}
                  min={50}
                  max={200}
                  step={1}
                  className="py-4"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Height</label>
                  <span className="text-2xl font-bold text-orange-500">{height} cm</span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={handleHeightChange}
                  min={150}
                  max={220}
                  step={1}
                  className="py-4"
                />
              </div>
            </div>
          </div>

          <BMIGauge bmi={bmi} />
        </div>

        {/* FFMI Estimation */}
        {bmi && (
          <div className="glass-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-xl font-display font-bold">FFMI Estimation (Fat-Free Mass Index)</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              FFMI is a better indicator for athletes because it accounts for lean mass.
            </p>
            <div className="bg-muted/30 rounded-xl p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">Estimated FFMI (assuming 15% body fat)</p>
              <p className="text-3xl font-bold text-orange-500">{ffmi?.toFixed(1)}</p>
              <p className="text-xs text-muted-foreground mt-2">
                Natural: 18-25 | Likely enhanced: &gt;25
              </p>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="space-y-8">
          {/* Why BMI is biased */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Scale className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Why BMI Doesn't Work for Athletes</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>Athlete BMI</strong> is problematic because the formula makes no distinction between
                muscle weight and fat weight. However, <strong>muscle is denser than fat</strong>:
                at the same volume, it weighs more.
              </p>
              <p>
                A bodybuilder who is 5'11" (180cm) and weighs 220 lbs (100 kg) will have a <strong>BMI of 30.9</strong> (obese),
                even though they might have only <strong>10% body fat</strong> and be in perfect health.
              </p>
            </div>
          </div>

          {/* Examples */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Dumbbell className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Real-World Examples</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Bodybuilding</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• BMI typically 28-35</li>
                  <li>• Body fat: 8-15%</li>
                  <li>• Excellent health status</li>
                  <li>• BMI says "obese" = false positive</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">CrossFit / Strength Sports</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• BMI typically 26-30</li>
                  <li>• Body fat: 12-18%</li>
                  <li>• High athletic performance</li>
                  <li>• BMI not representative</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Rugby / Football Players</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• BMI often 27-32</li>
                  <li>• Mix of muscle and strategic fat</li>
                  <li>• Sport-specific physique</li>
                  <li>• BMI classification misleading</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Swimmers / Cyclists</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• BMI typically 22-26</li>
                  <li>• Body fat: 8-14%</li>
                  <li>• Lean muscle mass</li>
                  <li>• BMI may be more accurate</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Alternatives */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Target className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Better Alternatives to BMI for Athletes</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">Body Fat Percentage</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Direct measurement of body fat percentage.
                </p>
                <p className="text-xs">
                  <strong>Men:</strong> 10-20% optimal<br />
                  <strong>Women:</strong> 18-28% optimal
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">FFMI</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Fat-Free Mass Index: BMI of lean mass only.
                </p>
                <p className="text-xs">
                  <strong>Natural:</strong> 18-25<br />
                  <strong>Elite natural:</strong> 24-26
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">Waist Circumference</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Simple indicator of abdominal fat.
                </p>
                <p className="text-xs">
                  <strong>Men:</strong> &lt;37 inches (94 cm)<br />
                  <strong>Women:</strong> &lt;31.5 inches (80 cm)
                </p>
              </div>
            </div>
          </div>

          {/* FFMI Table */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Understanding FFMI</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">FFMI Range</th>
                    <th className="text-left py-3 px-4 font-bold">Classification</th>
                    <th className="text-left py-3 px-4 font-bold">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">16-17</td>
                    <td className="py-3 px-4">Below average</td>
                    <td className="py-3 px-4">Little muscle development</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">18-19</td>
                    <td className="py-3 px-4">Average</td>
                    <td className="py-3 px-4">Normal untrained male</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">20-21</td>
                    <td className="py-3 px-4">Above average</td>
                    <td className="py-3 px-4">Noticeable muscle definition</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 font-mono font-bold text-success">22-23</td>
                    <td className="py-3 px-4 text-success">Excellent</td>
                    <td className="py-3 px-4">Dedicated lifter, great physique</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">24-25</td>
                    <td className="py-3 px-4">Superior</td>
                    <td className="py-3 px-4">Natural genetic limit for most</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono">&gt;25</td>
                    <td className="py-3 px-4 text-warning">Suspicious</td>
                    <td className="py-3 px-4">Rare naturally, possible PED use</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Note: FFMI above 25 is achievable naturally for some genetic outliers, but is rare.
            </p>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI and Athletes: What You Need to Know</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>Athlete BMI calculation</strong> often gives misleading results. Whether you practice
                <strong> bodybuilding</strong>, <strong>CrossFit</strong>, <strong>rugby</strong>, or any other
                strength sport, your <strong>BMI for athletes</strong> will likely be overestimated.
              </p>
              <p>
                <strong>Bodybuilder BMI</strong> is particularly biased: a natural bodybuilder can easily
                reach a BMI of 27-28 while being lean. Professional <strong>weightlifter BMI</strong> often exceeds
                30, classified as "obese" when body fat percentage is minimal.
              </p>
              <p>
                For athletes, prefer <strong>body fat percentage</strong>, <strong>FFMI</strong>
                (Fat-Free Mass Index), or simple <strong>waist circumference</strong>. These indicators are more relevant
                for evaluating your body composition and real health status.
              </p>
              <p>
                <strong>Is BMI accurate for athletes</strong>? No. <strong>Why BMI doesn't work for muscular people</strong>?
                Because it only considers total weight, not composition. A <strong>muscular BMI</strong> will always
                read higher than the actual health status indicates.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI Calculator for Athletes - Informational Tool</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIAthletes;
