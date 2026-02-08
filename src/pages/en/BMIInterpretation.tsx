import { Header } from "@/components/Header";
import { BookOpen, TrendingUp, TrendingDown, Target, AlertTriangle, CheckCircle2, Scale } from "lucide-react";
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
            <span className="gradient-text">BMI Interpretation</span>: Understanding your results
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How to read and correctly interpret your Body Mass Index
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
                of whether your weight is appropriate for your height. It's calculated by dividing weight (in kg)
                by height squared (in meters).
              </p>
              <p>
                <strong>Important:</strong> BMI is a screening tool, not a diagnosis. A doctor
                will consider other factors (waist circumference, muscle mass, medical history)
                to evaluate your health status.
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
                  A BMI under 18.5 indicates underweight. This may mean:
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Insufficient caloric intake</li>
                  <li>• Very fast metabolism</li>
                  <li>• Possible eating disorder</li>
                  <li>• Risk of nutritional deficiencies</li>
                </ul>
                <p className="text-info font-medium mt-3">
                  Advice: Consult a doctor to identify the cause and adapt your diet.
                </p>
              </div>

              {/* Normal */}
              <div className="border-l-4 border-success pl-6 py-4 bg-success/5 rounded-r-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <h3 className="font-bold text-lg">BMI between 18.5 and 24.9: Normal weight</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  This is the ideal zone! Your weight is balanced relative to your height.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Minimized health risks</li>
                  <li>• Good energy balance</li>
                  <li>• Goal to maintain</li>
                </ul>
                <p className="text-success font-medium mt-3">
                  Advice: Maintain your good eating habits and physical activity.
                </p>
              </div>

              {/* Overweight */}
              <div className="border-l-4 border-warning pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-warning" />
                  <h3 className="font-bold text-lg">BMI between 25 and 29.9: Overweight</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Your weight slightly exceeds the norm. It's a warning signal, not an emergency.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Increased risk of chronic diseases</li>
                  <li>• Potentially high blood pressure</li>
                  <li>• May be due to muscle mass (athletes)</li>
                </ul>
                <p className="text-warning font-medium mt-3">
                  Advice: Adopt a balanced diet and increase your physical activity.
                </p>
              </div>

              {/* Obesity */}
              <div className="border-l-4 border-destructive pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <h3 className="font-bold text-lg">BMI above 30: Obesity</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Obesity significantly increases health risks.
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Class I (30-34.9): Moderate obesity</li>
                  <li>• Class II (35-39.9): Severe obesity</li>
                  <li>• Class III (≥40): Morbid obesity</li>
                </ul>
                <p className="text-destructive font-medium mt-3">
                  Advice: Medical consultation is recommended for personalized support.
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
                    <span><strong>Muscle mass</strong>: athletes have higher BMI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Age</strong>: seniors lose muscle mass</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Sex</strong>: women naturally have more fat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>Ethnicity</strong>: different thresholds by population</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Complementary indicators:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Waist circumference</strong>: &lt;37 in (M) / &lt;31.5 in (F)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Waist-to-hip ratio</strong>: fat distribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Body fat %</strong>: actual body composition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>Blood work</strong>: cholesterol, glucose, etc.</span>
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
                Your BMI is just a starting point. Here are the recommended next steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Note your current BMI</strong> as a reference</li>
                <li><strong>Measure your waist circumference</strong> to complete the assessment</li>
                <li><strong>Consult a healthcare professional</strong> if your BMI is outside norms</li>
                <li><strong>Set realistic goals</strong>: lose 1-2 lbs per week maximum</li>
                <li><strong>Track your evolution</strong>: weigh yourself once a week, same day, same time</li>
              </ol>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">Understanding BMI interpretation</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>BMI interpretation</strong> is essential to understand what your
                <strong> BMI result</strong> means. Knowing <strong>how to read your BMI</strong> allows
                identifying whether you're in a healthy weight zone or if adjustments
                are needed.
              </p>
              <p>
                <strong>How to interpret BMI</strong>? WHO categories clearly define
                what <strong>a BMI means</strong> of 22, 25 or 30. <strong>BMI analysis</strong>
                must always consider context: age, sex, physical activity.
              </p>
              <p>
                The <strong>ideal BMI</strong> is between 18.5 and 24.9. <strong>Understanding your BMI</strong>
                also means knowing this index has limitations. Complete <strong>BMI explanation</strong>
                includes considering other indicators like waist circumference.
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
