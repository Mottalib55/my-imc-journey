import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Dumbbell, AlertTriangle, Target, Scale, Activity, TrendingUp, Globe } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";

const kgToLbs = (kg: number) => Math.round(kg * 2.20462);
const cmToFtIn = (cm: number) => {
  const totalIn = Math.round(cm / 2.54);
  return `${Math.floor(totalIn / 12)}'${totalIn % 12}"`;
};

const BMIAthletes = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(85);
  const [height, setHeight] = useState(180);

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

  // Calculate FFMI estimation (already in metric)
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
            <span className="text-orange-500">BMI for Athletes</span> : Why BMI Fails Muscular People
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Why does the NFL classify most linemen as "obese"? 60% of NBA players are "overweight" by BMI. Understanding why BMI fails American and British athletes.
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
                  <span className="text-2xl font-bold text-orange-500">{weight} kg <span className="text-base font-normal text-muted-foreground">({kgToLbs(weight)} lbs)</span></span>
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
                  <span className="text-2xl font-bold text-orange-500">{height} cm <span className="text-base font-normal text-muted-foreground">({cmToFtIn(height)})</span></span>
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
          {/* Famous Athlete Examples */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Dumbbell className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Famous Athletes BMI Would Get Wrong</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Some of the greatest athletes in American and British sports history are classified as "overweight" or "obese"
              by BMI alone. Here is why the formula fails when applied to elite physiques.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-muted/30 rounded-xl p-6 border-l-4 border-orange-500">
                <h4 className="font-bold mb-1">LeBron James</h4>
                <p className="text-xs text-muted-foreground mb-3">NBA / Los Angeles Lakers</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Height: 6'9" (206 cm)</li>
                  <li>Weight: 250 lbs (113 kg)</li>
                  <li>BMI: ~27.5</li>
                  <li className="text-orange-500 font-semibold">BMI says: "Overweight"</li>
                  <li>Reality: One of the fittest athletes on Earth, sub-10% body fat in season</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6 border-l-4 border-red-500">
                <h4 className="font-bold mb-1">JJ Watt</h4>
                <p className="text-xs text-muted-foreground mb-3">NFL / Retired Defensive End</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Height: 6'5" (196 cm)</li>
                  <li>Weight: 288 lbs (131 kg)</li>
                  <li>BMI: ~34.0</li>
                  <li className="text-red-500 font-semibold">BMI says: "Obese Class I"</li>
                  <li>Reality: 3x NFL Defensive Player of the Year, elite conditioning</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6 border-l-4 border-green-500">
                <h4 className="font-bold mb-1">Serena Williams</h4>
                <p className="text-xs text-muted-foreground mb-3">Tennis / 23 Grand Slam Titles</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Height: 5'9" (175 cm)</li>
                  <li>Weight: 155 lbs (70 kg)</li>
                  <li>BMI: ~22.9</li>
                  <li className="text-green-500 font-semibold">BMI says: "Normal"</li>
                  <li>Reality: One of the rare elite athletes where BMI happens to be accurate</li>
                </ul>
              </div>
            </div>
          </div>

          {/* US/UK Sport Examples */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Scale className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI Across US and UK Sports</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Different sports produce radically different body types. BMI treats them all the same, which is exactly
              why it fails across American and British professional leagues.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">NFL Linemen</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Typical BMI: 35-40</li>
                  <li>Average weight: 310-330 lbs (141-150 kg)</li>
                  <li>BMI label: "Morbidly obese"</li>
                  <li>Reality: Elite power athletes who pass rigorous NFL Combine physicals every year</li>
                  <li>The NFL does not use BMI for player evaluation -- it relies on body composition testing</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">NBA / WNBA</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Typical BMI: 24-28</li>
                  <li>Average height: 6'5"-6'7" (196-201 cm)</li>
                  <li>BMI label: "Overweight" for most players</li>
                  <li>Reality: Tall, lean body types with low body fat and high cardiovascular fitness</li>
                  <li>BMI penalizes height; taller people skew higher even when lean</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">Premier League / MLS Soccer</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Typical BMI: 22-25</li>
                  <li>Average body fat: 8-12%</li>
                  <li>BMI label: Usually "normal" range</li>
                  <li>Reality: One of few sports where BMI aligns with fitness because endurance athletes tend to be lighter</li>
                  <li>Premier League players cover 6-8 miles (10-13 km) per match</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">CrossFit Games Athletes</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Typical BMI: 27-31</li>
                  <li>Average body fat: 8-15%</li>
                  <li>BMI label: "Overweight" to "obese"</li>
                  <li>Reality: Among the fittest humans alive -- heavy muscle mass from combined strength and endurance training</li>
                  <li>CrossFit athletes carry significant lean mass that BMI cannot differentiate from fat</li>
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
            <p className="text-muted-foreground mb-6">
              If you are an athlete in the US or UK, these methods give a far more accurate picture of your body composition
              than BMI ever could. Here is what the pros actually use.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">DEXA Scan (Gold Standard)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Dual-energy X-ray absorptiometry provides the most precise body composition breakdown:
                  bone density, lean mass, and fat mass region by region.
                </p>
                <p className="text-xs text-muted-foreground">
                  Cost: $100-$300 at US clinics (DexaFit, BodySpec). Available at most major hospitals and university sports medicine centers in the US and UK.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">Bod Pod (Air Displacement)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Uses air displacement plethysmography to measure body volume and calculate body fat percentage.
                  Non-invasive and highly accurate.
                </p>
                <p className="text-xs text-muted-foreground">
                  Used by the NFL Combine to evaluate draft prospects. Also available at many US university athletics departments and UK Sport institutes.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">Navy Method (DoD Body Fat)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  The US Department of Defense body fat estimation formula uses neck, waist, and hip circumference
                  measurements. Simple, free, and requires only a tape measure.
                </p>
                <p className="text-xs text-muted-foreground">
                  <strong>Men:</strong> Measures neck + waist<br />
                  <strong>Women:</strong> Measures neck + waist + hips<br />
                  Accuracy: within 3-4% of DEXA for most people
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">Hydrostatic Weighing</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Underwater weighing compares your weight on land to your weight submerged in water
                  to calculate body density and fat percentage.
                </p>
                <p className="text-xs text-muted-foreground">
                  Long considered a gold standard before DEXA. Still used in research settings and available at select US sports performance labs and UK university facilities.
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

          {/* BMI in US Sports Medicine */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Globe className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI in US and UK Sports Medicine</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Major American and British sports organizations have long recognized that BMI is inadequate for
                evaluating athletes. Here is how the leading institutions actually approach body composition.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-muted/30 rounded-xl p-5">
                  <h4 className="font-bold mb-2">ACSM Guidelines</h4>
                  <p className="text-sm">
                    The <strong>American College of Sports Medicine</strong> explicitly acknowledges that BMI overestimates
                    body fat in muscular individuals. ACSM recommends using body fat percentage, waist circumference,
                    or waist-to-hip ratio alongside BMI for athletes and active populations.
                  </p>
                </div>
                <div className="bg-muted/30 rounded-xl p-5">
                  <h4 className="font-bold mb-2">NFL Combine</h4>
                  <p className="text-sm">
                    The <strong>NFL Scouting Combine</strong> does not use BMI to evaluate draft prospects. Instead, teams
                    rely on Bod Pod testing, skinfold measurements, and DEXA scans to assess body composition. A lineman
                    with a BMI of 38 can still be drafted first overall if his body fat is acceptable.
                  </p>
                </div>
                <div className="bg-muted/30 rounded-xl p-5">
                  <h4 className="font-bold mb-2">NCAA and College Athletics</h4>
                  <p className="text-sm">
                    The <strong>NCAA</strong> has moved toward sport-specific body composition guidelines rather than
                    blanket BMI thresholds. College strength and conditioning programs track body fat percentage, lean mass,
                    and sport-specific performance markers instead of relying on BMI.
                  </p>
                </div>
                <div className="bg-muted/30 rounded-xl p-5">
                  <h4 className="font-bold mb-2">US Military (DoD)</h4>
                  <p className="text-sm">
                    The <strong>Department of Defense</strong> uses body fat percentage, not BMI, for fitness standards. Service
                    members who exceed weight-for-height screening are "taped" using the Navy Method circumference formula.
                    This ensures muscular soldiers are not penalized by BMI alone.
                  </p>
                </div>
                <div className="bg-muted/30 rounded-xl p-5 md:col-span-2">
                  <h4 className="font-bold mb-2">UK: Sport England and UK Sport</h4>
                  <p className="text-sm">
                    In the United Kingdom, <strong>Sport England</strong> and <strong>UK Sport</strong> fund body composition
                    protocols that go well beyond BMI. The English Institute of Sport (EIS) provides DEXA scanning, skinfold
                    analysis, and bioelectrical impedance testing to athletes in Olympic and Paralympic programs. These
                    organizations recognize that BMI is a population-level screening tool that does not apply to individual
                    athletes training at high intensity.
                  </p>
                </div>
              </div>
            </div>
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
                <strong>BMI for athletes</strong> is a well-documented problem in sports medicine. The <strong>ACSM</strong> (American
                College of Sports Medicine) has published guidelines confirming that BMI systematically overestimates body fat
                in people with above-average muscle mass. This is why the <strong>NFL</strong>, <strong>NBA</strong>,
                and <strong>NCAA</strong> programs do not rely on BMI for athlete evaluation.
              </p>
              <p>
                In American professional sports, <strong>body composition testing</strong> has replaced BMI entirely. The
                <strong> NFL Combine</strong> uses Bod Pod and DEXA scanning to evaluate draft prospects. The <strong>DoD</strong> (Department
                of Defense) uses body fat percentage for military fitness standards, not BMI. Even the <strong>US Navy</strong> developed
                its own circumference-based body fat formula because BMI failed too many fit sailors and Marines.
              </p>
              <p>
                In the UK, <strong>Sport England</strong> and <strong>UK Sport</strong> fund advanced body composition
                protocols for elite athletes. Premier League clubs, England Rugby, and British Cycling all use DEXA scans
                and skinfold analysis rather than BMI to monitor athlete health.
              </p>
              <p>
                If you are an athlete wondering <strong>why your BMI is high</strong> despite being fit, the answer is simple:
                BMI was designed in the 1830s for population statistics, not for evaluating individuals -- and especially not
                for people who train seriously. Use <strong>DEXA</strong>, <strong>Bod Pod</strong>, <strong>hydrostatic
                weighing</strong>, or the <strong>Navy Method</strong> for an accurate picture of your body composition. For more
                about general BMI calculation, see our <Link to="/en/bmi" className="text-orange-500 underline hover:text-orange-400">BMI calculator</Link>.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 BMI Calculator for Athletes - Informational Tool</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIAthletes;
