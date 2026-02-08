import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Users, Heart, Target, Baby, Scale, Activity, AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const IMCMaraa = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(65);
  const [height, setHeight] = useState(165);

  const calculateBMI = useCallback((w: number, h: number) => {
    const heightInM = h / 100;
    const calculatedBmi = w / (heightInM * heightInM);
    setBmi(calculatedBmi);
  }, []);

  useEffect(() => { calculateBMI(weight, height); }, []);

  const handleWeightChange = (value: number[]) => { setWeight(value[0]); calculateBMI(value[0], height); };
  const handleHeightChange = (value: number[]) => { setHeight(value[0]); calculateBMI(weight, value[0]); };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-pink-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-500 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            حاسبة مؤشر كتلة الجسم للنساء
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-pink-500">مؤشر كتلة الجسم للنساء</span>: احسبي مؤشرك
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            حاسبة مؤشر كتلة الجسم مع نصائح مخصصة لكل مرحلة من حياة المرأة
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-pink-500" />
              أدخلي قياساتك
            </h2>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">الوزن</label>
                  <span className="text-2xl font-bold text-pink-500">{weight} كغ</span>
                </div>
                <Slider value={[weight]} onValueChange={handleWeightChange} min={35} max={150} step={1} className="py-4" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">الطول</label>
                  <span className="text-2xl font-bold text-pink-500">{height} سم</span>
                </div>
                <Slider value={[height]} onValueChange={handleHeightChange} min={130} max={200} step={1} className="py-4" />
              </div>
            </div>
          </div>
          <BMIGauge bmi={bmi} />
        </div>

        <div className="space-y-8">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Users className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">فهم مؤشر كتلة الجسم للنساء</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>يُحسب <strong>مؤشر كتلة الجسم للنساء</strong> بنفس الطريقة المستخدمة للرجال، لكن التفسير يختلف قليلاً. تتمتع النساء بطبيعتهن بـ<strong>نسبة دهون أعلى</strong> (20-25% مقابل 15-20% للرجال)، وهذا طبيعي تماماً وضروري لوظائف الهرمونات.</p>
              <p><strong>محيط الخصر المثالي</strong> للمرأة يجب ألا يتجاوز <strong>80 سم</strong> (خطر معتدل) أو <strong>88 سم</strong> (خطر مرتفع). هذا المؤشر غالباً أكثر صلة من مؤشر كتلة الجسم وحده.</p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Target className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">الوزن المثالي للنساء حسب الطول</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "155 سم", min: 44, max: 60, ideal: 53 },
                { height: "160 سم", min: 47, max: 64, ideal: 56 },
                { height: "165 سم", min: 50, max: 68, ideal: 60 },
                { height: "170 سم", min: 53, max: 72, ideal: 64 },
                { height: "175 سم", min: 57, max: 76, ideal: 67 },
                { height: "180 سم", min: 60, max: 81, ideal: 71 },
              ].map((item) => (
                <div key={item.height} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className="font-semibold text-pink-500">{item.height}</span>
                  <span className="text-muted-foreground">{item.min} - {item.max} كغ <span className="text-success">(مثالي: {item.ideal} كغ)</span></span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-purple-500/10">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-display font-bold">الدورة الهرمونية والوزن</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" /><span>يمكن أن يتغير الوزن بمقدار <strong>1-3 كغ</strong> حسب الدورة الشهرية</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" /><span><strong>احتباس الماء</strong> طبيعي قبل الدورة</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" /><span>قيسي وزنك دائماً في <strong>نفس الفترة</strong> من دورتك</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" /><span><strong>سن اليأس</strong> يغير أنماط توزيع الدهون</span></li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-pink-500/10">
                  <Baby className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-display font-bold">الحمل ومؤشر كتلة الجسم</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" /><span>مؤشر كتلة الجسم <strong>لا ينطبق</strong> أثناء الحمل</span></li>
                <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" /><span>زيادة الوزن الموصى بها: <strong>11-16 كغ</strong> (مؤشر طبيعي)</span></li>
                <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" /><span>استشيري <strong>طبيبة النساء</strong> للمتابعة الشخصية</span></li>
                <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" /><span>فقدان الوزن بعد الولادة يستغرق <strong>وقتاً</strong> - تحلي بالصبر</span></li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">مؤشر كتلة الجسم وسن اليأس</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>خلال <strong>سن اليأس</strong>، تعزز التغيرات الهرمونية زيادة الوزن خاصة في منطقة البطن. يتباطأ الأيض وتنخفض كتلة العضلات بشكل طبيعي. لذلك من الطبيعي اكتساب بعض الكيلوغرامات بعد سن الخمسين.</p>
              <p>للحفاظ على <strong>مؤشر كتلة جسم صحي بعد 50</strong>، ركزي على نظام غذائي غني بـ<strong>البروتين</strong> و<strong>الكالسيوم</strong>، وحافظي على نشاط بدني منتظم يشمل <strong>تمارين القوة</strong>.</p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Activity className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">كل شيء عن مؤشر كتلة الجسم للنساء</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p><strong>حاسبة مؤشر كتلة الجسم للنساء</strong> أداة أساسية لتقييم <strong>تكوين الجسم الأنثوي</strong>. المؤشر المثالي للنساء بين 19 و 24.</p>
              <p>بالنسبة لامرأة طولها <strong>165 سم</strong>، الوزن المثالي حوالي 60 كغ. بالنسبة لامرأة طولها <strong>170 سم</strong>، حوالي 64 كغ.</p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 حاسبة مؤشر كتلة الجسم للنساء - أداة إعلامية</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCMaraa;
