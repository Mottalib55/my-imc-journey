import { Header } from "@/components/Header";
import { Heart, Activity, Apple, Moon, Brain, Scale, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const HealthWeight = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-success/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Health and wellness
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-success">Health & Weight</span> : Guide to Healthy Living
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding the relationship between weight, BMI and overall health
          </p>
        </header>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Scale className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Weight and health: a complex relationship</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>Weight</strong> is just one indicator among others of your health status.
                A <strong>healthy weight</strong> depends on many factors: genetics, body type, physical activity,
                diet, sleep and mental well-being.
              </p>
              <p>
                Obsessing over the scale number can be counterproductive. It's more important to
                focus on <strong>healthy lifestyle habits</strong> than a specific target weight.
                Health isn't measured solely in pounds or kilograms.
              </p>
            </div>
          </div>

          {/* Health Risks */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">Weight-related risks</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-warning">Risks of overweight and obesity</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Cardiovascular diseases (heart attack, stroke)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Type 2 diabetes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>High blood pressure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Sleep apnea</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Certain cancers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>Joint problems</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-info">Risks of underweight</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Nutritional deficiencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Weakened immune system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Osteoporosis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Hormonal disorders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Chronic fatigue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>Fertility problems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pillars of health */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">The 5 pillars of healthy weight</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-green-500/10">
                    <Apple className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="font-bold">Nutrition</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Favor unprocessed foods</li>
                  <li>Eat vegetables with each meal</li>
                  <li>Limit added sugars</li>
                  <li>Stay well hydrated</li>
                  <li>Listen to hunger and fullness cues</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-orange-500/10">
                    <Activity className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold">Physical activity</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>150 min moderate activity/week</li>
                  <li>Include strength training</li>
                  <li>Move regularly throughout day</li>
                  <li>Find activity you enjoy</li>
                  <li>Progress gradually</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10">
                    <Moon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="font-bold">Sleep</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Sleep 7-9 hours per night</li>
                  <li>Regular schedule</li>
                  <li>Avoid screens before bed</li>
                  <li>Cool and dark room</li>
                  <li>Lack of sleep promotes weight gain</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <Brain className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-bold">Mental health</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Manage your stress</li>
                  <li>Avoid emotional eating</li>
                  <li>Practice mindfulness</li>
                  <li>Accept your body</li>
                  <li>Seek help if needed</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-pink-500/10">
                    <Heart className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="font-bold">Medical monitoring</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Annual health checkup</li>
                  <li>Waist circumference monitoring</li>
                  <li>Check blood pressure, glucose, cholesterol</li>
                  <li>Consult nutritionist if needed</li>
                  <li>Don't follow extreme diets</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-success/10">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="font-bold">Progress</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Set realistic goals</li>
                  <li>Maximum 1-2 lbs/week</li>
                  <li>Celebrate small victories</li>
                  <li>Consistency over intensity</li>
                  <li>Think long term</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Healthy weight tips */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Tips for healthy weight</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-success">What works</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Gradual and sustainable</strong> habit changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Balanced</strong> diet, no extreme restriction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Regular and enjoyable</strong> physical activity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Quality</strong> sleep (7-8h/night)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Stress</strong> and emotion management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Professional</strong> monitoring if needed</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-destructive">What doesn't work</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>Drastic</strong> and restrictive diets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>Miracle</strong> supplements and diet pills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Weighing yourself <strong>every day</strong> (normal variations)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>Unrealistic</strong> weight loss goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Comparing your body to <strong>others</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Ignoring <strong>hunger/fullness</strong> signals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Health and weight: the essentials</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Maintaining a <strong>healthy weight</strong> is important for your overall well-being. The relationship
                between <strong>weight and health</strong> is complex and depends on many factors. <strong>BMI</strong>
                is just one indicator among others to assess whether you're in a healthy weight zone.
              </p>
              <p>
                To <strong>lose weight healthily</strong> or <strong>maintain weight</strong>, favor a
                holistic approach: balanced diet, regular physical activity, sufficient sleep and
                stress management. Avoid yo-yo dieting which is harmful to health.
              </p>
              <p>
                A <strong>healthy lifestyle</strong> is more important than a number on the scale. Focus on
                <strong> lifestyle habits</strong> rather than weight. When in doubt, consult a
                healthcare professional for personalized support.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Calculate your BMI</h3>
            <p className="text-muted-foreground mb-6">
              First indicator to assess your healthy weight
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
          <p>© 2024 Health and Weight - Wellness Guide</p>
        </footer>
      </div>
    </div>
  );
};

export default HealthWeight;
