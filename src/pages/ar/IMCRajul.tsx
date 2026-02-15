import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { User, Dumbbell, Target, Heart, Scale, Activity, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const IMCRajul = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(84);
  const [height, setHeight] = useState(174);

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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-6">
            <User className="w-4 h-4" />
            حاسبة مؤشر كتلة الجسم للرجال
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-blue-500">مؤشر كتلة الجسم للرجال</span> : حاسبة BMI للذكور
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            في العالم العربي، أكثر من 60% من الرجال يعانون من زيادة الوزن أو السمنة (منظمة الصحة العالمية - المكتب الإقليمي لشرق المتوسط 2023). حاسبة مؤشر كتلة الجسم بمراجع من WHO EMRO ووزارة الصحة السعودية وهيئة الصحة الإماراتية.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-500" />
              أدخل قياساتك
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">الوزن</label>
                  <span className="text-2xl font-bold text-blue-500">{weight} كغ</span>
                </div>
                <Slider value={[weight]} onValueChange={handleWeightChange} min={40} max={200} step={1} className="py-4" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">الطول</label>
                  <span className="text-2xl font-bold text-blue-500">{height} سم</span>
                </div>
                <Slider value={[height]} onValueChange={handleHeightChange} min={140} max={220} step={1} className="py-4" />
              </div>
            </div>
          </div>

          <BMIGauge bmi={bmi} />
        </div>

        <div className="space-y-8">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <User className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">فهم مؤشر كتلة الجسم للرجال في العالم العربي</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                يُحسب <strong>مؤشر كتلة الجسم للرجال</strong> بنفس الطريقة المستخدمة للنساء، لكن التفسير قد يختلف. يتمتع الرجال بطبيعتهم بـ<strong>كتلة عضلية أكبر</strong> و<strong>نسبة دهون أقل</strong> (15-20% مقابل 20-25% للنساء). في العالم العربي، تُظهر الإحصائيات معدلات سمنة مرتفعة بين الرجال.
              </p>
              <p>
                <strong>إحصائيات السمنة عند الرجال في العالم العربي:</strong> الكويت: 42% من الرجال يعانون من السمنة (الأعلى في العالم العربي) — السعودية: 35.4% من الرجال يعانون من السمنة (وزارة الصحة السعودية) — الإمارات: 31% من الرجال يعانون من السمنة — مصر: 32% من الرجال يعانون من السمنة.
              </p>
              <p>
                <strong>متوسط قياسات الرجل العربي:</strong> الطول 174 سم، الوزن 84 كغ. بالنسبة لـ<strong>محيط الخصر</strong>، حددت منظمة الصحة العالمية (المكتب الإقليمي لشرق المتوسط) أن <strong>94 سم</strong> يمثل خطراً معتدلاً و<strong>102 سم</strong> يمثل خطراً مرتفعاً.
              </p>
              <p>
                يساهم <strong>نمط الحياة الخامل</strong> في دول الخليج في ارتفاع معدلات السمنة، حيث يعتمد السكان بشكل كبير على <strong>السيارات</strong> في التنقل مع قلة المشي بسبب المناخ الحار، مما يقلل من النشاط البدني اليومي بشكل ملحوظ.
              </p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Scale className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">جدول مؤشر كتلة الجسم للرجال (174 سم — متوسط عربي)</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { category: "نقص الوزن (أقل من 18.5)", range: "< 56 كغ", color: "text-blue-500" },
                { category: "وزن طبيعي (18.5 - 24.9)", range: "56 - 75 كغ", color: "text-success" },
                { category: "زيادة في الوزن (25 - 29.9)", range: "75 - 91 كغ", color: "text-warning" },
                { category: "سمنة (30 أو أكثر)", range: "> 91 كغ", color: "text-destructive" },
              ].map((item) => (
                <div key={item.category} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className={`font-semibold ${item.color}`}>{item.category}</span>
                  <span className="text-muted-foreground font-bold">{item.range}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              * مثال لرجل طوله 174 سم (متوسط عربي). القيم محسوبة وفقاً لتصنيف منظمة الصحة العالمية.
            </p>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">الوزن المثالي للرجال العرب حسب الطول</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "165 سم", min: 50, max: 68, ideal: 60 },
                { height: "169 سم", min: 53, max: 71, ideal: 63 },
                { height: "174 سم (متوسط)", min: 56, max: 75, ideal: 66 },
                { height: "178 سم", min: 59, max: 79, ideal: 70 },
                { height: "182 سم", min: 61, max: 83, ideal: 73 },
                { height: "186 سم", min: 64, max: 86, ideal: 76 },
              ].map((item) => (
                <div key={item.height} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className="font-semibold text-blue-500">{item.height}</span>
                  <span className="text-muted-foreground">
                    {item.min} - {item.max} كغ <span className="text-success">(مثالي: {item.ideal} كغ)</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-success/10">
                  <Dumbbell className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-xl font-display font-bold">التمارين والنشاط البدني في العالم العربي</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>المشي في المولات</strong> أصبح البديل الشائع في دول الخليج بسبب الحرارة</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>كرة القدم</strong> هي الرياضة الأكثر شعبية بين الرجال العرب وأفضل وسيلة للنشاط الجماعي</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>رؤية 2030 السعودية:</strong> هدف 40% من السكان يمارسون الرياضة بانتظام</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>ثقافة الصالات الرياضية</strong> تنمو بسرعة في مدن الخليج مع انتشار الأندية الحديثة</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-warning/10">
                  <Heart className="w-6 h-6 text-warning" />
                </div>
                <h3 className="text-xl font-display font-bold">صحة الرجل العربي</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>أمراض القلب</strong> هي السبب الأول للوفاة بين الرجال العرب (WHO EMRO)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>السكري</strong> يصيب 24% من الرجال السعوديين فوق 30 عاماً</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>ارتفاع ضغط الدم غير المشخص:</strong> 40% من الرجال في مصر</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>فحص طبي سنوي</strong> موصى به بعد 40 عاماً للكشف المبكر عن الأمراض</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Heart className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">مؤشر كتلة الجسم والصيام في رمضان</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                يؤثر <strong>صيام رمضان</strong> بشكل ملحوظ على مؤشر كتلة الجسم وتكوين الجسم عند الرجال. تُظهر الدراسات أن الرجال يمكنهم فقدان <strong>1-3 كغ</strong> خلال شهر رمضان إذا كانت وجبة الإفطار معتدلة ومتوازنة.
              </p>
              <p>
                <strong>خطر الإفراط في الأكل عند الإفطار:</strong> الإفراط في تناول الطعام عند الإفطار يُبطل فوائد الصيام الصحية. الوجبات الدسمة والمقليات والحلويات بكميات كبيرة قد تؤدي إلى زيادة الوزن خلال رمضان بدلاً من نقصانه.
              </p>
              <p>
                <strong>توصيات السحور للحفاظ على الكتلة العضلية:</strong> تناول البروتين (بيض، جبن، فول) مع الكربوهيدرات المعقدة (خبز أسمر، شوفان) والإكثار من الماء. هذا يساعد على الحفاظ على العضلات ومنع الشعور بالجوع الشديد.
              </p>
              <p>
                <strong>التمر والماء عند الإفطار ثم وجبة متوازنة بعد 15 دقيقة</strong> — هذه الطريقة المثلى لكسر الصيام حيث تسمح للمعدة بالاستعداد لاستقبال الطعام وتمنع الإفراط في الأكل.
              </p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Activity className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">مؤشر كتلة الجسم للرجال العرب: دليل شامل</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>حاسبة مؤشر كتلة الجسم للرجال العرب</strong> ضرورية لتقييم <strong>تكوين جسمك</strong> مع مراعاة الخصائص الإقليمية. بالنسبة لرجل عربي طوله <strong>174 سم</strong> (المتوسط العربي)، الوزن المثالي حوالي 66 كغ مع مؤشر كتلة جسم بين 18.5 و24.9.
              </p>
              <p>
                <strong>العوامل الثقافية المؤثرة:</strong> الوجبات التقليدية الكبيرة والكرم في تقديم الطعام، وعادات الأكل الاجتماعي كالولائم والعزائم، تساهم في زيادة السعرات الحرارية المستهلكة. الأطباق التقليدية كالكبسة والمنسف والكشري غنية بالسعرات وتُقدم بكميات كبيرة.
              </p>
              <p>
                <strong>المراجع والمصادر:</strong> منظمة الصحة العالمية — المكتب الإقليمي لشرق المتوسط (WHO EMRO)، وزارة الصحة السعودية (Saudi MOH)، وزارة الصحة ووقاية المجتمع الإماراتية (UAE MOHAP)، وزارة الصحة والسكان المصرية. جميع القيم بالنظام المتري (كغ وسم).
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 حاسبة مؤشر كتلة الجسم للرجال العرب - أداة إعلامية | المراجع: WHO EMRO، وزارة الصحة السعودية، MOHAP الإمارات</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCRajul;
