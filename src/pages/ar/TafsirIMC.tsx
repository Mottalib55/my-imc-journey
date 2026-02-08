import { Header } from "@/components/Header";
import { BookOpen, TrendingUp, TrendingDown, Target, AlertTriangle, CheckCircle2, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const TafsirIMC = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            دليل التفسير
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">تفسير مؤشر كتلة الجسم</span>: فهم نتائجك
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            كيفية قراءة وتفسير مؤشر كتلة جسمك بشكل صحيح
          </p>
        </header>

        <div className="space-y-8">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">ماذا يعني مؤشر كتلة جسمك؟</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p><strong>مؤشر كتلة الجسم</strong> هو مؤشر يسمح بتقييم سريع لما إذا كان وزنك مناسباً لطولك. يُحسب بقسمة الوزن (بالكغ) على مربع الطول (بالأمتار).</p>
              <p><strong>مهم:</strong> مؤشر كتلة الجسم أداة فحص وليس تشخيصاً. سيأخذ الطبيب عوامل أخرى بعين الاعتبار (محيط الخصر، كتلة العضلات، التاريخ الطبي) لتقييم حالتك الصحية.</p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">التفسير حسب الفئة</h2>
            </div>
            <div className="space-y-6">
              <div className="border-r-4 border-info pr-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="w-5 h-5 text-info" />
                  <h3 className="font-bold text-lg">المؤشر أقل من 18.5: نقص الوزن</h3>
                </div>
                <p className="text-muted-foreground mb-3">مؤشر أقل من 18.5 يشير إلى نقص الوزن. قد يعني:</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• استهلاك سعرات حرارية غير كافٍ</li>
                  <li>• أيض سريع جداً</li>
                  <li>• اضطراب أكل محتمل</li>
                  <li>• خطر نقص التغذية</li>
                </ul>
                <p className="text-info font-medium mt-3">نصيحة: استشر طبيباً لتحديد السبب وتكييف نظامك الغذائي.</p>
              </div>

              <div className="border-r-4 border-success pr-6 py-4 bg-success/5 rounded-l-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <h3 className="font-bold text-lg">المؤشر بين 18.5 و 24.9: وزن طبيعي</h3>
                </div>
                <p className="text-muted-foreground mb-3">هذه هي المنطقة المثالية! وزنك متوازن بالنسبة لطولك.</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• مخاطر صحية في حدها الأدنى</li>
                  <li>• توازن طاقة جيد</li>
                  <li>• هدف يجب الحفاظ عليه</li>
                </ul>
                <p className="text-success font-medium mt-3">نصيحة: حافظ على عاداتك الغذائية الجيدة ونشاطك البدني.</p>
              </div>

              <div className="border-r-4 border-warning pr-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-warning" />
                  <h3 className="font-bold text-lg">المؤشر بين 25 و 29.9: زيادة الوزن</h3>
                </div>
                <p className="text-muted-foreground mb-3">وزنك يتجاوز المعيار قليلاً. إنها إشارة تحذير وليست حالة طوارئ.</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• خطر متزايد للأمراض المزمنة</li>
                  <li>• ارتفاع محتمل في ضغط الدم</li>
                  <li>• قد يكون بسبب كتلة العضلات (الرياضيون)</li>
                </ul>
                <p className="text-warning font-medium mt-3">نصيحة: اعتمد نظاماً غذائياً متوازناً وزِد نشاطك البدني.</p>
              </div>

              <div className="border-r-4 border-destructive pr-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <h3 className="font-bold text-lg">المؤشر أعلى من 30: سمنة</h3>
                </div>
                <p className="text-muted-foreground mb-3">السمنة تزيد المخاطر الصحية بشكل كبير.</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• الدرجة الأولى (30-34.9): سمنة معتدلة</li>
                  <li>• الدرجة الثانية (35-39.9): سمنة شديدة</li>
                  <li>• الدرجة الثالثة (≥40): سمنة مرضية</li>
                </ul>
                <p className="text-destructive font-medium mt-3">نصيحة: يُنصح باستشارة طبية للحصول على دعم شخصي.</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">عوامل يجب مراعاتها</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">قد يتأثر المؤشر بـ:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span><strong>كتلة العضلات</strong>: الرياضيون لديهم مؤشر أعلى</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span><strong>العمر</strong>: كبار السن يفقدون كتلة العضلات</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span><strong>الجنس</strong>: النساء لديهن دهون أكثر بشكل طبيعي</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span><strong>العرق</strong>: عتبات مختلفة حسب الشعوب</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">مؤشرات مكملة:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span><strong>محيط الخصر</strong>: &lt;94 سم (رجال) / &lt;80 سم (نساء)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span><strong>نسبة الخصر/الورك</strong>: توزيع الدهون</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span><strong>نسبة الدهون</strong>: تكوين الجسم الفعلي</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span><strong>تحاليل الدم</strong>: الكوليسترول، السكر، إلخ.</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">ماذا تفعل بنتيجتك؟</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>مؤشر كتلة جسمك هو مجرد نقطة بداية. إليك الخطوات الموصى بها:</p>
              <ol className="list-decimal list-inside space-y-2 mr-4">
                <li><strong>سجل مؤشرك الحالي</strong> كمرجع</li>
                <li><strong>قس محيط خصرك</strong> لاستكمال التقييم</li>
                <li><strong>استشر متخصصاً</strong> إذا كان مؤشرك خارج المعايير</li>
                <li><strong>ضع أهدافاً واقعية</strong>: فقدان 0.5-1 كغ أسبوعياً كحد أقصى</li>
                <li><strong>تابع تطورك</strong>: زن نفسك مرة أسبوعياً، نفس اليوم والوقت</li>
              </ol>
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">فهم تفسير مؤشر كتلة الجسم</h2>
            <div className="text-muted-foreground space-y-4">
              <p><strong>تفسير مؤشر كتلة الجسم</strong> ضروري لفهم ما تعنيه نتيجتك. معرفة كيفية قراءة المؤشر تساعد في تحديد ما إذا كنت في منطقة وزن صحية أو إذا كانت هناك حاجة لتعديلات.</p>
              <p><strong>المؤشر المثالي</strong> بين 18.5 و 24.9. فهم المؤشر يعني أيضاً معرفة أن لهذا المقياس حدوداً ويجب مراعاة مؤشرات أخرى مثل محيط الخصر.</p>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">احسب مؤشر كتلة جسمك الآن</h3>
            <p className="text-muted-foreground mb-6">استخدم حاسبتنا المجانية لمعرفة مؤشر كتلة جسمك</p>
            <Link to="/ar/imc" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              احسب مؤشري
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 تفسير مؤشر كتلة الجسم - دليل شامل</p>
        </footer>
      </div>
    </div>
  );
};

export default TafsirIMC;
