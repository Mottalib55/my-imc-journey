import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Calculator, Activity, Target, BookOpen, Scale, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";

const IMCAr = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);

  const calculateBMI = useCallback((w: number, h: number) => {
    const heightInM = h / 100;
    const calculatedBmi = w / (heightInM * heightInM);
    setBmi(calculatedBmi);
  }, []);

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
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            حاسبة مؤشر كتلة الجسم المجانية
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">حاسبة مؤشر كتلة الجسم</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            احسب مؤشر كتلة جسمك فوراً واكتشف نطاق وزنك المثالي
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary" />
              أدخل قياساتك
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">الوزن</label>
                  <span className="text-2xl font-bold text-primary">{weight} كغ</span>
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
                  <span>30 كغ</span>
                  <span>200 كغ</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">الطول</label>
                  <span className="text-2xl font-bold text-primary">{height} سم</span>
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
                  <span>100 سم</span>
                  <span>220 سم</span>
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
              <h2 className="text-2xl font-display font-bold">ما هو مؤشر كتلة الجسم؟</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>مؤشر كتلة الجسم (BMI)</strong> هو مقياس بسيط يستخدم طولك ووزنك لتقدير ما إذا كان وزنك صحياً. تقوم <strong>صيغة مؤشر كتلة الجسم</strong> بقسمة وزنك بالكيلوغرام على مربع طولك بالأمتار.
              </p>
              <p>
                اخترع <strong>حساب مؤشر كتلة الجسم</strong> في ثلاثينيات القرن التاسع عشر على يد عالم الرياضيات البلجيكي أدولف كيتليه. اليوم، يستخدمه الأطباء ومنظمات الصحة في جميع أنحاء العالم كأداة فحص سريعة لفئات الوزن.
              </p>
            </div>
          </div>

          {/* BMI Categories */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">تصنيفات مؤشر كتلة الجسم (منظمة الصحة العالمية)</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-right py-3 px-4 font-bold">التصنيف</th>
                    <th className="text-right py-3 px-4 font-bold">نطاق المؤشر</th>
                    <th className="text-right py-3 px-4 font-bold">المخاطر الصحية</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      نقص الوزن
                    </td>
                    <td className="py-3 px-4">&lt; 18.5</td>
                    <td className="py-3 px-4 text-info">خطر سوء التغذية</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      وزن طبيعي
                    </td>
                    <td className="py-3 px-4">18.5 - 24.9</td>
                    <td className="py-3 px-4 text-success">خطر منخفض</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      زيادة الوزن
                    </td>
                    <td className="py-3 px-4">25 - 29.9</td>
                    <td className="py-3 px-4 text-warning">خطر متزايد</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      سمنة درجة أولى
                    </td>
                    <td className="py-3 px-4">30 - 34.9</td>
                    <td className="py-3 px-4 text-destructive">خطر مرتفع</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      سمنة درجة ثانية
                    </td>
                    <td className="py-3 px-4">35 - 39.9</td>
                    <td className="py-3 px-4 text-destructive">خطر مرتفع جداً</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      سمنة درجة ثالثة
                    </td>
                    <td className="py-3 px-4">≥ 40</td>
                    <td className="py-3 px-4 text-destructive">خطر شديد جداً</td>
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
              <h2 className="text-2xl font-display font-bold">كيفية حساب مؤشر كتلة الجسم</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p><strong>صيغة مؤشر كتلة الجسم</strong> بسيطة:</p>
              <div className="bg-muted/30 rounded-xl p-6 text-center" dir="ltr">
                <p className="text-2xl font-bold text-primary">BMI = الوزن (كغ) ÷ الطول² (م)</p>
              </div>
              <p>
                على سبيل المثال، إذا كان وزنك 70 كغ وطولك 1.75 م:<br />
                مؤشر كتلة الجسم = 70 ÷ (1.75 × 1.75) = 70 ÷ 3.0625 = <strong>22.9</strong>
              </p>
            </div>
          </div>

          {/* Links to other pages */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/ar/imc-rajul" className="glass-card p-6 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Activity className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-bold">مؤشر كتلة الجسم للرجال</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                اعتبارات خاصة بتكوين جسم الرجل
              </p>
            </Link>

            <Link to="/ar/imc-maraa" className="glass-card p-6 hover:border-pink-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-pink-500/10">
                  <Activity className="w-5 h-5 text-pink-500" />
                </div>
                <h3 className="font-bold">مؤشر كتلة الجسم للنساء</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                فهم مؤشر كتلة الجسم مع العوامل الهرمونية
              </p>
            </Link>

            <Link to="/ar/imc-riyadi" className="glass-card p-6 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-bold">مؤشر كتلة الجسم للرياضيين</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                لماذا لا يعمل المؤشر مع الأشخاص ذوي العضلات
              </p>
            </Link>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">فهم مؤشر كتلة جسمك</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>حاسبة مؤشر كتلة الجسم</strong> هي أداة أساسية لفهم حالة وزنك. سواء كنت تبحث عن <strong>حاسبة مؤشر كتلة الجسم المجانية</strong>، أو تريد معرفة <strong>مؤشر كتلة الجسم المثالي</strong>، أو ببساطة تريد <strong>حساب مؤشر كتلة الجسم</strong> بسرعة، توفر أداتنا نتائج فورية.
              </p>
              <p>
                <strong>ما هو مؤشر كتلة الجسم الجيد</strong>؟ يقع <strong>مؤشر كتلة الجسم الصحي</strong> بين 18.5 و 24.9. يُظهر <strong>جدول مؤشر كتلة الجسم</strong> أن المؤشر الطبيعي يشير إلى أنك في وزن صحي بالنسبة لطولك.
              </p>
              <p>
                تستخدم <strong>حاسبة مؤشر كتلة الجسم</strong> المعادلة القياسية المعترف بها من قبل منظمة الصحة العالمية. بينما يعتبر <strong>مقياس مؤشر كتلة الجسم</strong> مفيداً، تذكر أنه لا يأخذ في الاعتبار كتلة العضلات أو العمر أو تكوين الجسم.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 حاسبة مؤشر كتلة الجسم المجانية</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCAr;
