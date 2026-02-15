import { Header } from "@/components/Header";
import { BookOpen, TrendingUp, TrendingDown, Target, AlertTriangle, CheckCircle2, Scale, Globe } from "lucide-react";
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
            دليل التفسير للعالم العربي
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">تفسير مؤشر كتلة الجسم</span> : في السياق العربي
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            وفقاً لإرشادات منظمة الصحة العالمية - المكتب الإقليمي لشرق المتوسط (WHO EMRO)، يواجه العالم العربي أزمة سمنة متصاعدة: الكويت 37.9%، السعودية 35.4% من السكان البالغين. فهم المؤشر في سياق دول الخليج والمنطقة العربية أمر بالغ الأهمية.
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
              <p><strong>مهم:</strong> مؤشر كتلة الجسم أداة فحص وليس تشخيصاً. سيأخذ الطبيب عوامل أخرى بعين الاعتبار (محيط الخصر، كتلة العضلات، التاريخ الطبي) لتقييم حالتك الصحية. في المنطقة العربية، تُضاف عوامل خاصة كالمناخ الحار ونمط الحياة والعادات الغذائية الموسمية.</p>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">التفسير حسب الفئة في العالم العربي</h2>
            </div>
            <div className="space-y-6">
              <div className="border-r-4 border-info pr-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="w-5 h-5 text-info" />
                  <h3 className="font-bold text-lg">المؤشر أقل من 18.5: نقص الوزن</h3>
                </div>
                <p className="text-muted-foreground mb-3">نقص الوزن أقل شيوعاً في دول الخليج الغنية، لكنه مشكلة صحية خطيرة في مناطق النزاعات والفقر:</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• سوء التغذية المزمن في اليمن يطال أكثر من 16 مليون شخص</li>
                  <li>• السودان والصومال يعانيان من أعلى معدلات نقص التغذية في المنطقة</li>
                  <li>• الأطفال في مناطق النزاع معرضون بشكل خاص للهزال والتقزم</li>
                  <li>• اضطرابات الأكل في تزايد بين الشباب العربي خاصة في المدن الكبرى</li>
                </ul>
                <p className="text-info font-medium mt-3">نصيحة: في مناطق النزاعات، يجب التركيز على الأمن الغذائي وبرامج التغذية العلاجية.</p>
              </div>

              <div className="border-r-4 border-success pr-6 py-4 bg-success/5 rounded-l-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <h3 className="font-bold text-lg">المؤشر بين 18.5 و 24.9: وزن طبيعي</h3>
                </div>
                <p className="text-muted-foreground mb-3">النسبة المئوية للسكان في هذه الفئة تتقلص باستمرار في دول الخليج العربي:</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• أقل من 30% من البالغين في الكويت والسعودية ضمن الوزن الطبيعي</li>
                  <li>• التحضر السريع والوفرة الغذائية أدت إلى تراجع هذه النسبة</li>
                  <li>• الشباب العربي أكثر عرضة للانتقال السريع نحو زيادة الوزن</li>
                  <li>• هدف يجب الحفاظ عليه مع نمط حياة نشط</li>
                </ul>
                <p className="text-success font-medium mt-3">نصيحة: حافظ على هذا المستوى بممارسة الرياضة في الأوقات المناسبة (الصباح الباكر أو المساء) لتجنب الحرارة.</p>
              </div>

              <div className="border-r-4 border-warning pr-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-warning" />
                  <h3 className="font-bold text-lg">المؤشر بين 25 و 29.9: زيادة الوزن</h3>
                </div>
                <p className="text-muted-foreground mb-3">زيادة الوزن منتشرة بشكل كبير جداً في دول الخليج بسبب عوامل بيئية وثقافية:</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• نمط الحياة الخامل بسبب المناخ الحار الشديد (تجاوز 50 درجة صيفاً)</li>
                  <li>• الاعتماد الكبير على السيارات وقلة المشي في المدن الخليجية</li>
                  <li>• الوجبات الغنية بالكربوهيدرات والأرز والدهون في المطبخ العربي التقليدي</li>
                  <li>• ثقافة الضيافة والولائم التي تشجع على الإفراط في الأكل</li>
                </ul>
                <p className="text-warning font-medium mt-3">نصيحة: استغل المرافق الرياضية المكيفة المتوفرة في دول الخليج، وقلل حصص الأرز والخبز.</p>
              </div>

              <div className="border-r-4 border-destructive pr-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <h3 className="font-bold text-lg">المؤشر أعلى من 30: سمنة</h3>
                </div>
                <p className="text-muted-foreground mb-3">العالم العربي يضم بعض أعلى معدلات السمنة عالمياً وفقاً لمنظمة الصحة العالمية:</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• الكويت: 37.9% — من أعلى المعدلات في العالم</li>
                  <li>• السعودية: 35.4% — مع ارتفاع حاد في سمنة الأطفال</li>
                  <li>• مصر: 32% — أعلى معدل في شمال أفريقيا</li>
                  <li>• الإمارات: 31.7% — رغم برامج الصحة الوطنية المكثفة</li>
                  <li>• الدرجة الأولى (30-34.9): سمنة معتدلة — الأكثر شيوعاً</li>
                  <li>• الدرجة الثانية (35-39.9): سمنة شديدة — تتطلب تدخلاً طبياً</li>
                  <li>• الدرجة الثالثة (≥40): سمنة مرضية — قد تستلزم جراحة</li>
                </ul>
                <p className="text-destructive font-medium mt-3">نصيحة: استشر طبيباً متخصصاً. مراكز جراحة السمنة في الخليج من الأكثر تطوراً عالمياً.</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">عوامل يجب مراعاتها في السياق العربي</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">إرشادات WHO EMRO وخصوصيات المنطقة:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span><strong>تكوين الجسم العربي</strong>: أظهرت دراسات أن السكان العرب قد يكون لديهم نسبة دهون أعلى عند نفس المؤشر مقارنة بالأوروبيين</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span><strong>العامل الوراثي</strong>: الاستعداد الجيني للسمنة ومقاومة الأنسولين أعلى في بعض المجموعات العربية</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span><strong>نقص فيتامين د</strong>: شائع جداً رغم المناخ المشمس بسبب تجنب التعرض للشمس والملابس المحتشمة</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span><strong>السكري من النوع الثاني</strong>: معدلات مرتفعة جداً مرتبطة بالسمنة في الخليج</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">مؤشرات مكملة حسب معايير المنطقة:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span><strong>محيط الخصر</strong>: &lt;94 سم (رجال) / &lt;80 سم (نساء) — معيار WHO EMRO</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span><strong>نسبة الخصر/الورك</strong>: مؤشر مهم لتوزيع الدهون الحشوية الشائعة عند العرب</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span><strong>مستوى السكر التراكمي (HbA1c)</strong>: ضروري في المنطقة بسبب ارتفاع معدلات السكري</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span><strong>تحاليل الدم الشاملة</strong>: الكوليسترول، الدهون الثلاثية، فيتامين د، وظائف الغدة الدرقية</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">تأثير رمضان على تفسير المؤشر</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p><strong>شهر رمضان</strong> يُحدث تغييرات كبيرة في نمط الأكل والنوم مما يؤثر مباشرة على تفسير مؤشر كتلة الجسم في العالم العربي والإسلامي.</p>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold mb-3 text-foreground">تقلبات المؤشر خلال رمضان</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• انخفاض الوزن بمعدل 1-3 كغ خلال الأسبوعين الأولين من الصيام</li>
                    <li>• استعادة الوزن المفقود غالباً في النصف الثاني بسبب الولائم المسائية</li>
                    <li>• تغير في توزيع السوائل بالجسم يؤثر على دقة القياس</li>
                    <li>• الجفاف خلال ساعات الصيام يُعطي قراءة وزن أقل من الحقيقية</li>
                  </ul>
                </div>
                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold mb-3 text-foreground">متى يجب قياس المؤشر؟</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>تجنب القياس خلال شهر رمضان</strong>: النتائج غير دقيقة بسبب تغير نمط الأكل والسوائل</li>
                    <li>• أفضل وقت: أسبوعان قبل رمضان أو 3 أسابيع بعد العيد</li>
                    <li>• بعد عيد الفطر مباشرة: توقع زيادة 1-2 كغ بسبب ولائم العيد والحلويات</li>
                    <li>• للمتابعة السنوية: قارن القراءات في نفس الموسم كل عام</li>
                  </ul>
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 mt-4">
                <h4 className="font-bold mb-3 text-foreground">نصائح للصيام الصحي والحفاظ على الوزن</h4>
                <ul className="space-y-2 text-sm">
                  <li>• تناول السحور متأخراً مع أطعمة بطيئة الهضم (شوفان، تمر، زبادي)</li>
                  <li>• الإفطار التدريجي: ابدأ بالتمر والماء ثم انتظر 15 دقيقة قبل الوجبة الرئيسية</li>
                  <li>• تجنب الإفراط في الحلويات الرمضانية (القطايف، الكنافة، اللقيمات)</li>
                  <li>• المشي بعد صلاة التراويح يساعد في الحفاظ على النشاط البدني</li>
                  <li>• شرب 8-10 أكواب ماء بين الإفطار والسحور لتجنب الجفاف</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Globe className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">أنظمة الرعاية الصحية العربية</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>تستثمر الدول العربية بشكل متزايد في <strong>برامج مكافحة السمنة</strong> والأمراض المزمنة المرتبطة بها:</p>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold mb-3 text-foreground">السعودية — رؤية 2030 الصحية</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• برنامج "جودة الحياة" لتعزيز النشاط البدني وتقليل السمنة</li>
                    <li>• إنشاء مراكز متخصصة في علاج السمنة بجميع المناطق</li>
                    <li>• ضريبة المشروبات الغازية والمحلاة لتقليل الاستهلاك</li>
                    <li>• برامج فحص مجانية في المراكز الصحية الأولية</li>
                  </ul>
                </div>
                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold mb-3 text-foreground">الإمارات — الفحص الوطني</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• برنامج الفحص الصحي الوطني الشامل لجميع المقيمين</li>
                    <li>• تطبيقات ذكية لمتابعة الوزن والنشاط البدني</li>
                    <li>• مبادرة "نحن نتحرك" لتشجيع المشي واللياقة البدنية</li>
                    <li>• مستشفيات متخصصة في جراحة السمنة بتقنيات متقدمة</li>
                  </ul>
                </div>
                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold mb-3 text-foreground">مصر — مبادرة 100 مليون صحة</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• أكبر حملة فحص صحي شامل في العالم العربي</li>
                    <li>• فحص السمنة والسكري وضغط الدم وفيروس سي</li>
                    <li>• تغطية أكثر من 60 مليون مواطن حتى الآن</li>
                    <li>• إحالة الحالات المكتشفة للعلاج المجاني في المستشفيات الحكومية</li>
                  </ul>
                </div>
                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold mb-3 text-foreground">قطر والكويت — مراكز متخصصة</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• مستشفى أسبيتار (ASPETAR) في قطر: مركز عالمي للطب الرياضي وتقييم تكوين الجسم</li>
                    <li>• الكويت: من أكثر الدول إجراءً لعمليات جراحة السمنة (تكميم المعدة وتحويل المسار)</li>
                    <li>• برامج تأهيل ما بعد الجراحة تشمل تغذية ونفسية ورياضة</li>
                    <li>• أبحاث متقدمة حول العلاقة بين الجينات العربية والسمنة</li>
                  </ul>
                </div>
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
              <p>مؤشر كتلة جسمك هو مجرد نقطة بداية. إليك الخطوات الموصى بها في السياق العربي:</p>
              <ol className="list-decimal list-inside space-y-2 mr-4">
                <li><strong>سجل مؤشرك الحالي</strong> كمرجع (تجنب القياس خلال رمضان أو بعد العيد مباشرة)</li>
                <li><strong>قس محيط خصرك</strong>: &lt;94 سم للرجال و &lt;80 سم للنساء حسب معايير WHO EMRO</li>
                <li><strong>افحص السكر التراكمي</strong>: ضروري بسبب ارتفاع معدلات السكري في المنطقة</li>
                <li><strong>استشر طبيباً</strong> إذا كان مؤشرك خارج المعايير — استفد من برامج الفحص المجانية</li>
                <li><strong>ضع خطة نشاط بدني</strong> تناسب المناخ: صالات رياضية مكيفة أو المشي في المساء</li>
                <li><strong>تابع تطورك</strong>: زن نفسك مرة أسبوعياً، نفس اليوم والوقت</li>
              </ol>
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">فهم تفسير مؤشر كتلة الجسم في العالم العربي</h2>
            <div className="text-muted-foreground space-y-4">
              <p><strong>تفسير مؤشر كتلة الجسم</strong> في السياق العربي يتطلب فهماً خاصاً لإحصائيات السمنة في المنطقة. وفقاً لبيانات منظمة الصحة العالمية — المكتب الإقليمي لشرق المتوسط (WHO EMRO)، تُعد دول الخليج العربي من بين الأعلى عالمياً في معدلات السمنة وزيادة الوزن.</p>
              <p><strong>إحصائيات السمنة في الدول العربية</strong> تُظهر أن الكويت (37.9%)، السعودية (35.4%)، مصر (32%)، والإمارات (31.7%) تحتل مراتب متقدمة عالمياً. وزارات الصحة العربية تستثمر في برامج مكافحة السمنة مثل رؤية السعودية 2030 ومبادرة مصر 100 مليون صحة.</p>
              <p><strong>قياس محيط الخصر</strong> مؤشر مكمل مهم حسب إرشادات WHO EMRO: أقل من 94 سم للرجال وأقل من 80 سم للنساء. تكوين الجسم قد يختلف في المجموعات السكانية العربية مما يستلزم تقييماً شاملاً يتجاوز مؤشر كتلة الجسم وحده.</p>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">احسب مؤشر كتلة جسمك الآن</h3>
            <p className="text-muted-foreground mb-6">استخدم حاسبتنا المجانية لمعرفة مؤشر كتلة جسمك وفقاً للمعايير الدولية</p>
            <Link to="/ar/imc" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              احسب مؤشري
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 تفسير مؤشر كتلة الجسم في العالم العربي — وفقاً لإرشادات WHO EMRO</p>
        </footer>
      </div>
    </div>
  );
};

export default TafsirIMC;
