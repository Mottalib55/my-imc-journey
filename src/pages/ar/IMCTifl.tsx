import { Header } from "@/components/Header";
import { Baby, AlertTriangle, TrendingUp, BookOpen, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const IMCTifl = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-medium mb-6">
            <Baby className="w-4 h-4" />
            مؤشر كتلة الجسم للأطفال والمراهقين
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-cyan-500">مؤشر كتلة الجسم للأطفال</span>: حساب مختلف
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            فهم مؤشر كتلة الجسم عند الأطفال والمراهقين: منحنيات النمو والخصوصيات
          </p>
        </header>

        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Stethoscope className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-destructive mb-2">يُنصح باستشارة طبية</h3>
              <p className="text-muted-foreground">
                مؤشر كتلة الجسم عند الأطفال يتطلب <strong>تفسيراً طبياً</strong>. استشيري <strong>طبيب الأطفال</strong> أو <strong>طبيب العائلة</strong> للمتابعة المناسبة. المعلومات أدناه لأغراض إعلامية فقط.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <AlertTriangle className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">الفرق بين مؤشر البالغين والأطفال</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>على عكس البالغين، لا يُفسر <strong>مؤشر كتلة الجسم للأطفال</strong> باستخدام عتبات ثابتة (18.5 / 25 / 30). عند الأطفال والمراهقين، الجسم في تطور مستمر، ويتغير المؤشر بشكل طبيعي حسب العمر والجنس.</p>
              <p>لذلك تُستخدم <strong>منحنيات نمو مؤشر كتلة الجسم</strong> (أو منحنيات المئويات)، التي تسمح بتحديد موقع الطفل مقارنة بأطفال آخرين من نفس العمر والجنس.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                <h4 className="font-bold text-destructive mb-2">مؤشر البالغين</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• عتبات ثابتة عالمية</li>
                  <li>• &lt;18.5 = نقص وزن</li>
                  <li>• 18.5-25 = طبيعي</li>
                  <li>• 25-30 = زيادة وزن</li>
                  <li>• &gt;30 = سمنة</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">مؤشر الأطفال</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• منحنيات المئويات</li>
                  <li>• يتغير حسب العمر</li>
                  <li>• مختلف بنين/بنات</li>
                  <li>• تفسير نسبي</li>
                  <li>• مراقبة التطور</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <TrendingUp className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">منحنيات النمو</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p><strong>منحنيات مؤشر كتلة الجسم</strong> موجودة في الدفتر الصحي لطفلك. تسمح بتتبع تطور المؤشر عبر الزمن.</p>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-4">كيف تقرأ المئويات؟</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong className="text-info">المئوية الثالثة:</strong> منطقة نقص الوزن</p>
                    <p><strong className="text-success">المئوية 3-97:</strong> المنطقة الطبيعية</p>
                    <p><strong className="text-warning">المئوية 97:</strong> زيادة وزن</p>
                    <p><strong className="text-destructive">&gt;المئوية 97:</strong> سمنة</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">الطفل في المئوية 50 لديه مؤشر أعلى من 50% من الأطفال في عمره وأقل من الـ 50% المتبقية.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Baby className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">مؤشر كتلة الجسم حسب الفئة العمرية</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">الرضيع (0-2 سنة)</h4>
                <p className="text-sm text-muted-foreground">لا يُحسب المؤشر عادة. تُستخدم منحنيات الوزن/الطول ومحيط الرأس.</p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">الطفل (2-12 سنة)</h4>
                <p className="text-sm text-muted-foreground">يُفسر المؤشر بمنحنيات كتلة الجسم. يُراقب "ارتداد السمنة" حول سن 6.</p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">المراهق (12-18 سنة)</h4>
                <p className="text-sm text-muted-foreground">البلوغ = تغيرات كبيرة. المنحنيات الخاصة بالجنس ضرورية.</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Stethoscope className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">متى يجب الاستشارة؟</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5">
                <h4 className="font-bold text-warning mb-3">علامات التحذير</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• تغير مفاجئ في ممر المنحنى</li>
                  <li>• المؤشر &gt; المئوية 97</li>
                  <li>• المؤشر &lt; المئوية 3</li>
                  <li>• ارتداد السمنة المبكر (&lt;6 سنوات)</li>
                  <li>• قلق الطفل بشأن وزنه</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-3">المتابعة المنتظمة</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• الوزن والقياس في كل زيارة طبية</li>
                  <li>• التسجيل على منحنيات الدفتر الصحي</li>
                  <li>• متابعة المسار وليس نقطة واحدة</li>
                  <li>• مناقشة الطبيب عند القلق</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <BookOpen className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">كل شيء عن مؤشر كتلة الجسم للأطفال</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p><strong>حساب مؤشر كتلة الجسم للأطفال</strong> يستخدم نفس الصيغة (الوزن / الطول²)، لكن <strong>تفسير المؤشر للأطفال</strong> مختلف تماماً. لا يمكن القول بأن الطفل يعاني من زيادة الوزن لمجرد تجاوز مؤشره 25.</p>
              <p><strong>مؤشر كتلة الجسم للمراهقين</strong> صعب التفسير خاصة خلال البلوغ. التغيرات الهرمونية تؤدي لتحولات جسدية كبيرة مختلفة بين البنين والبنات.</p>
              <p>عند الشك في <strong>الوزن المثالي للطفل</strong>، استشيري طبيب الأطفال الذي يمكنه تحليل <strong>منحنى كتلة الجسم</strong> ككل.</p>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">هل أنت بالغ؟</h3>
            <p className="text-muted-foreground mb-6">استخدم حاسبة مؤشر كتلة الجسم القياسية للبالغين</p>
            <Link to="/ar/imc" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              احسب مؤشر كتلة جسمي
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 حاسبة مؤشر كتلة الجسم للأطفال - أداة إعلامية فقط</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCTifl;
