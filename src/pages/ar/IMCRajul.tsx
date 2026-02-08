import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { User, Dumbbell, Target, Heart, Scale, Activity, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const IMCRajul = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(80);
  const [height, setHeight] = useState(178);

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
            <span className="text-blue-500">مؤشر كتلة الجسم للرجال</span>: احسب مؤشرك
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            حاسبة مؤشر كتلة الجسم مع نصائح مخصصة للرجال وتكوين الجسم الذكوري
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
              <h2 className="text-2xl font-display font-bold">فهم مؤشر كتلة الجسم للرجال</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                يُحسب <strong>مؤشر كتلة الجسم للرجال</strong> بنفس الطريقة المستخدمة للنساء، لكن التفسير قد يختلف. يتمتع الرجال بطبيعتهم بـ<strong>كتلة عضلية أكبر</strong> و<strong>نسبة دهون أقل</strong> (15-20% مقابل 20-25% للنساء).
              </p>
              <p>
                يمكن أن يكون لدى الرجل <strong>مؤشر كتلة جسم مرتفع</strong> مع التمتع بصحة ممتازة إذا كان يمارس الرياضة بانتظام أو يقوم بتمارين القوة. لذلك فإن <strong>محيط الخصر</strong> غالباً ما يكون مؤشراً أفضل للرجال: يجب ألا يتجاوز <strong>94 سم</strong> (خطر معتدل) أو <strong>102 سم</strong> (خطر مرتفع).
              </p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">الوزن المثالي للرجال حسب الطول</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "165 سم", min: 50, max: 68, ideal: 60 },
                { height: "170 سم", min: 53, max: 72, ideal: 64 },
                { height: "175 سم", min: 57, max: 76, ideal: 67 },
                { height: "180 سم", min: 60, max: 81, ideal: 71 },
                { height: "185 سم", min: 63, max: 85, ideal: 75 },
                { height: "190 سم", min: 67, max: 90, ideal: 79 },
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
                <h3 className="text-xl font-display font-bold">التمارين والعضلات</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>تمارين القوة</strong> تزيد من كتلة العضلات وبالتالي مؤشر كتلة الجسم</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>يمكن أن يكون لدى الرجل العضلي <strong>مؤشر 27-28</strong> بدون دهون زائدة</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>اجمع بين <strong>تمارين القلب والقوة</strong> للتوازن الأمثل</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>استهدف <strong>150 دقيقة نشاط معتدل</strong> أسبوعياً كحد أدنى</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-warning/10">
                  <Heart className="w-6 h-6 text-warning" />
                </div>
                <h3 className="text-xl font-display font-bold">صحة الرجل</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>دهون البطن</strong> تزيد من مخاطر القلب والأوعية الدموية</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>بعد <strong>40 عاماً</strong>، يتباطأ الأيض بشكل ملحوظ</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>التستوستيرون</strong> ينخفض مع التقدم في العمر مما يعزز تراكم الدهون</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>الفحص الصحي السنوي <strong>موصى به بعد سن 50</strong></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Activity className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">كل شيء عن مؤشر كتلة الجسم للرجال</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>حاسبة مؤشر كتلة الجسم للرجال</strong> ضرورية لتقييم <strong>تكوين جسمك</strong>. سواء كنت تبحث عن <strong>مؤشر كتلة الجسم المثالي للرجال</strong> أو تتحقق من أنك في <strong>وزن صحي</strong>، توفر حاسبتنا إجابات فورية.
              </p>
              <p>
                <strong>متوسط مؤشر كتلة الجسم للرجال</strong> يختلف حسب العمر ومستوى النشاط. المؤشر الطبيعي للرجال بين 20 و 25. بالنسبة لرجل طوله <strong>180 سم</strong>، الوزن المثالي حوالي 71 كغ.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 حاسبة مؤشر كتلة الجسم للرجال - أداة إعلامية</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCRajul;
