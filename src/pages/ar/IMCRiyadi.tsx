import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Dumbbell, AlertTriangle, Target, Scale, Activity, TrendingUp } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const IMCRiyadi = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(85);
  const [height, setHeight] = useState(180);

  const calculateBMI = useCallback((w: number, h: number) => {
    const heightInM = h / 100;
    const calculatedBmi = w / (heightInM * heightInM);
    setBmi(calculatedBmi);
  }, []);

  useEffect(() => { calculateBMI(weight, height); }, []);

  const handleWeightChange = (value: number[]) => { setWeight(value[0]); calculateBMI(value[0], height); };
  const handleHeightChange = (value: number[]) => { setHeight(value[0]); calculateBMI(weight, value[0]); };

  const ffmi = weight && height ? (weight * 0.85) / Math.pow(height / 100, 2) : null;

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6">
            <Dumbbell className="w-4 h-4" />
            حاسبة مؤشر كتلة الجسم للرياضيين
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-orange-500">مؤشر كتلة الجسم للرياضيين</span>: اعرف الحدود
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            لماذا لا يعمل مؤشر كتلة الجسم مع الأشخاص ذوي العضلات وما البدائل المتاحة
          </p>
        </header>

        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-orange-500 mb-2">تحذير: مؤشر كتلة الجسم متحيز للرياضيين</h3>
              <p className="text-muted-foreground">
                لا يميز مؤشر كتلة الجسم بين <strong>كتلة العضلات</strong> و<strong>الدهون</strong>. قد يكون لدى الرياضي العضلي مؤشر "زيادة وزن" أو "سمنة" بينما هو في صحة ممتازة.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-orange-500" />
              أدخل قياساتك
            </h2>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">الوزن</label>
                  <span className="text-2xl font-bold text-orange-500">{weight} كغ</span>
                </div>
                <Slider value={[weight]} onValueChange={handleWeightChange} min={50} max={200} step={1} className="py-4" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">الطول</label>
                  <span className="text-2xl font-bold text-orange-500">{height} سم</span>
                </div>
                <Slider value={[height]} onValueChange={handleHeightChange} min={150} max={220} step={1} className="py-4" />
              </div>
            </div>
          </div>
          <BMIGauge bmi={bmi} />
        </div>

        {bmi && (
          <div className="glass-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-xl font-display font-bold">تقدير FFMI (مؤشر الكتلة الخالية من الدهون)</h2>
            </div>
            <p className="text-muted-foreground mb-4">FFMI هو مؤشر أفضل للرياضيين لأنه يأخذ الكتلة العضلية في الاعتبار.</p>
            <div className="bg-muted/30 rounded-xl p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">FFMI المقدر (بافتراض 15% دهون)</p>
              <p className="text-3xl font-bold text-orange-500">{ffmi?.toFixed(1)}</p>
              <p className="text-xs text-muted-foreground mt-2">طبيعي: 18-25 | محتمل محسّن: &gt;25</p>
            </div>
          </div>
        )}

        <div className="space-y-8">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Scale className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">لماذا لا يعمل مؤشر كتلة الجسم للرياضيين</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p><strong>مؤشر كتلة الجسم للرياضيين</strong> إشكالي لأن الصيغة لا تميز بين وزن العضلات ووزن الدهون. ومع ذلك، <strong>العضلات أكثر كثافة من الدهون</strong>: بنفس الحجم تزن أكثر.</p>
              <p>لاعب كمال أجسام طوله 180 سم ووزنه 100 كغ سيكون لديه <strong>مؤشر 30.9</strong> (سمنة)، رغم أنه قد يكون لديه <strong>10% دهون فقط</strong> ويتمتع بصحة مثالية.</p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Dumbbell className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">أمثلة واقعية</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">كمال الأجسام</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• المؤشر عادة 28-35</li>
                  <li>• نسبة الدهون: 8-15%</li>
                  <li>• حالة صحية ممتازة</li>
                  <li>• المؤشر يقول "سمنة" = نتيجة خاطئة</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">كروس فيت / رياضات القوة</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• المؤشر عادة 26-30</li>
                  <li>• نسبة الدهون: 12-18%</li>
                  <li>• أداء رياضي عالي</li>
                  <li>• المؤشر غير ممثل</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">لاعبو الرجبي / كرة القدم</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• المؤشر غالباً 27-32</li>
                  <li>• مزيج من العضلات والدهون الاستراتيجية</li>
                  <li>• بنية جسم خاصة بالرياضة</li>
                  <li>• تصنيف المؤشر مضلل</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">السباحون / الدراجون</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• المؤشر عادة 22-26</li>
                  <li>• نسبة الدهون: 8-14%</li>
                  <li>• كتلة عضلية نحيفة</li>
                  <li>• المؤشر قد يكون أدق</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Target className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">بدائل أفضل لمؤشر كتلة الجسم للرياضيين</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">نسبة الدهون في الجسم</h4>
                <p className="text-sm text-muted-foreground mb-3">قياس مباشر لنسبة الدهون.</p>
                <p className="text-xs"><strong>الرجال:</strong> 10-20% مثالي<br /><strong>النساء:</strong> 18-28% مثالي</p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">FFMI</h4>
                <p className="text-sm text-muted-foreground mb-3">مؤشر الكتلة الخالية من الدهون.</p>
                <p className="text-xs"><strong>طبيعي:</strong> 18-25<br /><strong>نخبة طبيعي:</strong> 24-26</p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">محيط الخصر</h4>
                <p className="text-sm text-muted-foreground mb-3">مؤشر بسيط لدهون البطن.</p>
                <p className="text-xs"><strong>الرجال:</strong> &lt;94 سم<br /><strong>النساء:</strong> &lt;80 سم</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">مؤشر كتلة الجسم والرياضيون: ما تحتاج معرفته</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p><strong>حساب مؤشر كتلة الجسم للرياضيين</strong> غالباً ما يعطي نتائج مضللة. سواء كنت تمارس <strong>كمال الأجسام</strong> أو <strong>كروس فيت</strong> أو <strong>الرجبي</strong> أو أي رياضة قوة أخرى، سيكون مؤشرك مبالغاً فيه على الأرجح.</p>
              <p>للرياضيين، فضّل <strong>نسبة الدهون</strong> أو <strong>FFMI</strong> أو <strong>محيط الخصر</strong>. هذه المؤشرات أكثر صلة لتقييم تكوين جسمك وحالتك الصحية الفعلية.</p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 حاسبة مؤشر كتلة الجسم للرياضيين - أداة إعلامية</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCRiyadi;
