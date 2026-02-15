import { Header } from "@/components/Header";
import { AlertTriangle, XCircle, CheckCircle2, Users, Dumbbell, Baby, Clock, Globe, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const HududIMC = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-warning/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 text-warning text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            حدود مؤشر كتلة الجسم
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-warning">حدود مؤشر كتلة الجسم</span> : ما لا يخبرك به
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            لماذا لا يعتبر مؤشر كتلة الجسم مؤشراً مثالياً ومتى يمكن أن يكون مضللاً
          </p>
        </header>

        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-warning mb-2">المؤشر أداة فحص وليس تشخيصاً</h3>
              <p className="text-muted-foreground">ابتكره أدولف كيتليه عام 1832، صُمم المؤشر للدراسات الإحصائية السكانية وليس لتقييم الصحة الفردية. له عدة حدود مهمة.</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">ما لا يقيسه المؤشر</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" /><div><h4 className="font-bold">تكوين الجسم</h4><p className="text-sm text-muted-foreground">لا يميز المؤشر بين العضلات والدهون. 1 كغ عضلات = 1 كغ دهون بالنسبة للمؤشر.</p></div></div>
                <div className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" /><div><h4 className="font-bold">توزيع الدهون</h4><p className="text-sm text-muted-foreground">دهون البطن أخطر من الدهون تحت الجلد. المؤشر لا يراها.</p></div></div>
                <div className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" /><div><h4 className="font-bold">كثافة العظام</h4><p className="text-sm text-muted-foreground">العظام الأثقل تزيد المؤشر دون التأثير على الصحة.</p></div></div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" /><div><h4 className="font-bold">الحالة الأيضية</h4><p className="text-sm text-muted-foreground">يمكن أن يكون الشخص النحيف ذا ملف أيضي سيء (كوليسترول، سكر).</p></div></div>
                <div className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" /><div><h4 className="font-bold">الترطيب</h4><p className="text-sm text-muted-foreground">احتباس الماء يمكن أن يزيد المؤشر مؤقتاً بنقطة أو اثنتين.</p></div></div>
                <div className="flex items-start gap-3"><XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" /><div><h4 className="font-bold">اللياقة البدنية</h4><p className="text-sm text-muted-foreground">شخصان بنفس المؤشر يمكن أن يكون لديهما حالات بدنية مختلفة جداً.</p></div></div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Users className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">الفئات التي لا يناسبها المؤشر</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3"><Dumbbell className="w-5 h-5 text-orange-500" /><h4 className="font-bold">الرياضيون ولاعبو كمال الأجسام</h4></div>
                <p className="text-sm text-muted-foreground">كتلة العضلات العالية تعطي مؤشر "زيادة وزن" أو "سمنة" بينما نسبة الدهون ضئيلة.</p>
                <Link to="/ar/imc-riyadi" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">اعرف المزيد ←</Link>
              </div>
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3"><Baby className="w-5 h-5 text-cyan-500" /><h4 className="font-bold">الأطفال والمراهقون</h4></div>
                <p className="text-sm text-muted-foreground">عتبات البالغين لا تنطبق. يجب استخدام منحنيات كتلة الجسم الخاصة بالعمر والجنس.</p>
                <Link to="/ar/imc-tifl" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">اعرف المزيد ←</Link>
              </div>
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3"><Clock className="w-5 h-5 text-purple-500" /><h4 className="font-bold">كبار السن</h4></div>
                <p className="text-sm text-muted-foreground">فقدان كتلة العضلات (الضمور) يمكن أن يخفي زيادة الدهون. المؤشر "الطبيعي" قد يكون مضللاً.</p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3"><Users className="w-5 h-5 text-pink-500" /><h4 className="font-bold">الحوامل</h4></div>
                <p className="text-sm text-muted-foreground">زيادة الوزن طبيعية ومرغوبة أثناء الحمل. المؤشر قبل الحمل يُستخدم كمرجع.</p>
                <Link to="/ar/imc-maraa" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">اعرف المزيد ←</Link>
              </div>
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3"><Globe className="w-5 h-5 text-green-500" /><h4 className="font-bold">بعض الأعراق</h4></div>
                <p className="text-sm text-muted-foreground">الشعوب الآسيوية لديها مخاطر متزايدة عند مؤشر أقل. منظمة الصحة تقترح عتبات معدلة (23 بدلاً من 25).</p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3"><Scale className="w-5 h-5 text-blue-500" /><h4 className="font-bold">أنماط الجسم المتطرفة</h4></div>
                <p className="text-sm text-muted-foreground">الأشخاص طوال القامة جداً أو قصارها لديهم مؤشرات مختلفة طبيعياً بسبب نسبة السطح/الحجم.</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">بدائل ومكملات للمؤشر</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-right py-3 px-4 font-bold">المؤشر</th>
                    <th className="text-right py-3 px-4 font-bold">ما يقيسه</th>
                    <th className="text-right py-3 px-4 font-bold">العتبات الموصى بها</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50"><td className="py-3 px-4 font-medium">محيط الخصر</td><td className="py-3 px-4">الدهون الحشوية</td><td className="py-3 px-4">&lt;94 سم (رجال) / &lt;80 سم (نساء)</td></tr>
                  <tr className="border-b border-border/50"><td className="py-3 px-4 font-medium">نسبة الخصر/الورك</td><td className="py-3 px-4">توزيع الدهون</td><td className="py-3 px-4">&lt;0.90 (رجال) / &lt;0.85 (نساء)</td></tr>
                  <tr className="border-b border-border/50"><td className="py-3 px-4 font-medium">نسبة الخصر/الطول</td><td className="py-3 px-4">الدهون المركزية النسبية</td><td className="py-3 px-4">&lt;0.5 (الخصر &lt; نصف الطول)</td></tr>
                  <tr className="border-b border-border/50"><td className="py-3 px-4 font-medium">نسبة الدهون %</td><td className="py-3 px-4">تكوين الجسم الفعلي</td><td className="py-3 px-4">10-20% (رجال) / 18-28% (نساء)</td></tr>
                  <tr className="border-b border-border/50"><td className="py-3 px-4 font-medium">FFMI</td><td className="py-3 px-4">الكتلة العضلية (للرياضيين)</td><td className="py-3 px-4">18-25 (طبيعي)</td></tr>
                  <tr><td className="py-3 px-4 font-medium">المقاومة الكهربائية الحيوية</td><td className="py-3 px-4">ماء، عضلات، دهون، عظام</td><td className="py-3 px-4">يختلف حسب الجهاز</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">متى يظل المؤشر مفيداً</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>رغم حدوده، يظل المؤشر أداة قيمة في سياقات معينة:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span><strong>الفحص الأولي السريع</strong>: تحديد الأشخاص الذين يحتاجون تقييماً أكثر شمولاً</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span><strong>الدراسات الوبائية</strong>: مقارنة السكان على نطاق واسع</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span><strong>المتابعة الفردية</strong>: مراقبة تطور الوزن عبر الزمن</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span><strong>البالغ المتوسط غير الرياضي</strong>: لهذه الفئة، المؤشر موثوق بشكل معقول</span></li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">فهم حدود مؤشر كتلة الجسم</h2>
            <div className="text-muted-foreground space-y-4">
              <p><strong>حدود مؤشر كتلة الجسم</strong> عديدة وموثقة جيداً من المجتمع العلمي. لا ينبغي تفسير هذا المؤشر بمفرده. تشمل عيوبه عدم القدرة على التمييز بين الكتلة الدهنية والعضلية.</p>
              <p><strong>بدائل المؤشر</strong> مثل محيط الخصر أو نسبة الدهون توفر صورة أكثر اكتمالاً. المؤشر مع مؤشرات أخرى يظل أداة فحص مفيدة.</p>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">احسب مؤشر كتلة جسمك بمعرفة كاملة</h3>
            <p className="text-muted-foreground mb-6">الآن بعد معرفتك بالحدود، استخدم حاسبتنا كمؤشر أولي</p>
            <Link to="/ar/imc" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">احسب مؤشري</Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 حدود مؤشر كتلة الجسم - فهم المؤشر</p>
        </footer>
      </div>
    </div>
  );
};

export default HududIMC;
