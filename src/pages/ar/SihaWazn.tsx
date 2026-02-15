import { Header } from "@/components/Header";
import { Heart, Activity, Apple, Moon, Brain, Scale, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

const SihaWazn = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-success/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            الصحة والعافية
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-success">الصحة والوزن</span> : دليل شامل للوزن الصحي
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            فهم العلاقة بين الوزن ومؤشر كتلة الجسم والصحة العامة
          </p>
        </header>

        <div className="space-y-8">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Scale className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">الوزن والصحة: علاقة معقدة</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p><strong>الوزن</strong> هو مجرد مؤشر واحد من بين مؤشرات أخرى لحالتك الصحية. <strong>الوزن الصحي</strong> يعتمد على عوامل كثيرة: الوراثة، نوع الجسم، النشاط البدني، التغذية، النوم والصحة النفسية.</p>
              <p>الهوس برقم الميزان يمكن أن يكون عكسياً. الأهم هو التركيز على <strong>عادات الحياة الصحية</strong> بدلاً من وزن محدد كهدف. الصحة لا تُقاس بالكيلوغرامات فقط.</p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">المخاطر المرتبطة بالوزن</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-warning">مخاطر زيادة الوزن والسمنة</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span>أمراض القلب والأوعية الدموية (نوبة قلبية، سكتة)</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span>السكري من النوع الثاني</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span>ارتفاع ضغط الدم</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span>انقطاع النفس أثناء النوم</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span>بعض أنواع السرطان</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span>مشاكل المفاصل</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-info">مخاطر نقص الوزن</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" /><span>نقص التغذية</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" /><span>ضعف جهاز المناعة</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" /><span>هشاشة العظام</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" /><span>اضطرابات هرمونية</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" /><span>إرهاق مزمن</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" /><span>مشاكل الخصوبة</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">الركائز الخمس للوزن الصحي</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4"><div className="p-3 rounded-xl bg-green-500/10"><Apple className="w-6 h-6 text-green-500" /></div><h3 className="font-bold">التغذية</h3></div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>فضّل الأطعمة غير المصنعة</li>
                  <li>تناول الخضروات مع كل وجبة</li>
                  <li>قلل السكريات المضافة</li>
                  <li>حافظ على ترطيب جيد</li>
                  <li>استمع لإشارات الجوع والشبع</li>
                </ul>
              </div>
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4"><div className="p-3 rounded-xl bg-orange-500/10"><Activity className="w-6 h-6 text-orange-500" /></div><h3 className="font-bold">النشاط البدني</h3></div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>150 دقيقة نشاط معتدل/أسبوع</li>
                  <li>أضف تمارين القوة</li>
                  <li>تحرك بانتظام طوال اليوم</li>
                  <li>اختر نشاطاً تستمتع به</li>
                  <li>تقدم تدريجياً</li>
                </ul>
              </div>
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4"><div className="p-3 rounded-xl bg-purple-500/10"><Moon className="w-6 h-6 text-purple-500" /></div><h3 className="font-bold">النوم</h3></div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>نم 7-9 ساعات في الليلة</li>
                  <li>جدول منتظم</li>
                  <li>تجنب الشاشات قبل النوم</li>
                  <li>غرفة باردة ومظلمة</li>
                  <li>نقص النوم يعزز زيادة الوزن</li>
                </ul>
              </div>
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4"><div className="p-3 rounded-xl bg-blue-500/10"><Brain className="w-6 h-6 text-blue-500" /></div><h3 className="font-bold">الصحة النفسية</h3></div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>أدر توترك</li>
                  <li>تجنب الأكل العاطفي</li>
                  <li>مارس الوعي الذاتي</li>
                  <li>تقبل جسمك</li>
                  <li>اطلب المساعدة عند الحاجة</li>
                </ul>
              </div>
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4"><div className="p-3 rounded-xl bg-pink-500/10"><Heart className="w-6 h-6 text-pink-500" /></div><h3 className="font-bold">المتابعة الطبية</h3></div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>فحص صحي سنوي</li>
                  <li>متابعة محيط الخصر</li>
                  <li>فحص الضغط والسكر والكوليسترول</li>
                  <li>استشر أخصائي تغذية عند الحاجة</li>
                  <li>لا تتبع حميات متطرفة</li>
                </ul>
              </div>
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4"><div className="p-3 rounded-xl bg-success/10"><TrendingUp className="w-6 h-6 text-success" /></div><h3 className="font-bold">التقدم</h3></div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>ضع أهدافاً واقعية</li>
                  <li>حد أقصى 0.5-1 كغ/أسبوع</li>
                  <li>احتفل بالانتصارات الصغيرة</li>
                  <li>الاستمرارية فوق الشدة</li>
                  <li>فكر على المدى الطويل</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">نصائح للوزن الصحي</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-success">ما ينجح</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span>تغييرات <strong>تدريجية ومستدامة</strong> في العادات</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span>نظام غذائي <strong>متوازن</strong> بدون تقييد شديد</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span>نشاط بدني <strong>منتظم وممتع</strong></span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span>نوم <strong>جيد</strong> (7-8 ساعات/ليلة)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span>إدارة <strong>التوتر</strong> والعواطف</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" /><span>متابعة <strong>متخصصة</strong> عند الحاجة</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-destructive">ما لا ينجح</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" /><span>الحميات <strong>القاسية</strong> والمقيدة</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" /><span>المكملات <strong>المعجزة</strong> وحبوب التنحيف</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" /><span>وزن نفسك <strong>كل يوم</strong> (تغيرات طبيعية)</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" /><span>أهداف <strong>غير واقعية</strong> لفقدان الوزن</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" /><span>مقارنة جسمك <strong>بالآخرين</strong></span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" /><span>تجاهل إشارات <strong>الجوع/الشبع</strong></span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">الصحة والوزن: الأساسيات</h2>
            <div className="text-muted-foreground space-y-4">
              <p>الحفاظ على <strong>وزن صحي</strong> مهم لعافيتك العامة. العلاقة بين <strong>الوزن والصحة</strong> معقدة وتعتمد على عوامل كثيرة. <strong>مؤشر كتلة الجسم</strong> هو مجرد مؤشر واحد من بين مؤشرات أخرى.</p>
              <p>لـ<strong>فقدان الوزن بصحة</strong> أو <strong>الحفاظ على الوزن</strong>، فضّل نهجاً شاملاً: تغذية متوازنة، نشاط بدني منتظم، نوم كافٍ وإدارة التوتر. تجنب حميات اليويو الضارة بالصحة.</p>
              <p><strong>نمط الحياة الصحي</strong> أهم من رقم على الميزان. ركز على <strong>العادات اليومية</strong> بدلاً من الوزن. عند الشك، استشر متخصصاً للحصول على دعم شخصي.</p>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">احسب مؤشر كتلة جسمك</h3>
            <p className="text-muted-foreground mb-6">المؤشر الأول لتقييم وزنك الصحي</p>
            <Link to="/ar/imc" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">احسب مؤشري</Link>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 الصحة والوزن - دليل العافية</p>
        </footer>
      </div>
    </div>
  );
};

export default SihaWazn;
