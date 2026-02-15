import { Header } from "@/components/Header";
import { Baby, AlertTriangle, TrendingUp, BookOpen, Stethoscope, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

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
            مؤشر كتلة الجسم للأطفال والمراهقين في العالم العربي
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-cyan-500">مؤشر كتلة الجسم للأطفال والمراهقين</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            دول الخليج العربي تسجل أعلى معدلات سمنة الأطفال عالمياً. الكويت: 40% من الأطفال يعانون من زيادة الوزن. منظمة الصحة العالمية - المكتب الإقليمي لشرق المتوسط (EMRO)
          </p>
        </header>

        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Stethoscope className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-destructive mb-2">يُنصح باستشارة طبية</h3>
              <p className="text-muted-foreground">
                مؤشر كتلة الجسم عند الأطفال يتطلب <strong>تفسيراً طبياً متخصصاً</strong>. استشر <strong>طبيب الأطفال</strong> في مراكز الرعاية الصحية الأولية أو عيادة الأطفال الخاصة. تعتمد وزارات الصحة العربية على <strong>معايير منظمة الصحة العالمية - إقليم شرق المتوسط</strong> لتقييم نمو الأطفال.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* أزمة سمنة الأطفال في العالم العربي */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Globe className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">أزمة سمنة الأطفال في العالم العربي</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>يشهد العالم العربي، وخاصة دول الخليج، <strong>أزمة سمنة أطفال</strong> غير مسبوقة. وفقاً لتقارير منظمة الصحة العالمية - المكتب الإقليمي لشرق المتوسط (EMRO)، تحتل عدة دول عربية مراتب متقدمة عالمياً في نسب سمنة الأطفال. التحول السريع في أنماط الحياة والتغذية خلال العقود الأخيرة أدى إلى هذه الأزمة الصحية.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5 text-center">
                <div className="text-4xl font-bold text-destructive mb-2">40%</div>
                <h4 className="font-bold mb-1">أطفال الكويت</h4>
                <p className="text-sm text-muted-foreground">يعانون من زيادة الوزن أو السمنة، وهي من أعلى النسب عالمياً بحسب دراسات EMRO</p>
              </div>
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5 text-center">
                <div className="text-4xl font-bold text-warning mb-2">35%</div>
                <h4 className="font-bold mb-1">أطفال السعودية</h4>
                <p className="text-sm text-muted-foreground">نسبة مقلقة دفعت وزارة الصحة السعودية لإطلاق برامج وقائية ضمن رؤية 2030</p>
              </div>
              <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-5 text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">30%</div>
                <h4 className="font-bold mb-1">أطفال الإمارات</h4>
                <p className="text-sm text-muted-foreground">مما استدعى وضع استراتيجية وطنية للتغذية ومكافحة السمنة في المدارس</p>
              </div>
            </div>
          </div>

          {/* منحنيات النمو */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <TrendingUp className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">منحنيات النمو في الدول العربية</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>تعتمد غالبية الدول العربية على <strong>منحنيات النمو الصادرة عن منظمة الصحة العالمية (WHO)</strong> كمرجعية أساسية لتقييم نمو الأطفال. هذه المنحنيات وُضعت بناءً على دراسات شملت أطفالاً من ست دول حول العالم، وتُعتبر معياراً دولياً.</p>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-4">المعايير المعتمدة في الدول العربية</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-cyan-500 min-w-[100px]">السعودية:</span>
                    <span>برنامج رصد النمو التابع لوزارة الصحة يستخدم منحنيات WHO مع مراعاة الخصائص المحلية. يتم تسجيل البيانات إلكترونياً عبر منصة صحتي.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-cyan-500 min-w-[100px]">الإمارات:</span>
                    <span>تمتلك جداول نمو وطنية مُعدّلة تأخذ في الاعتبار التركيبة السكانية المتنوعة، وتُطبق في جميع المدارس الحكومية والخاصة.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-cyan-500 min-w-[100px]">مصر والأردن:</span>
                    <span>تعتمدان منحنيات WHO بشكل مباشر في مراكز الأمومة والطفولة وبرامج التطعيم.</span>
                  </div>
                </div>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-4">كيف تقرأ المئويات؟</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong className="text-info">المئوية الثالثة فأقل:</strong> نقص وزن - يستدعي متابعة طبية</p>
                    <p><strong className="text-success">المئوية 3-85:</strong> المنطقة الطبيعية (الوزن الصحي)</p>
                    <p><strong className="text-warning">المئوية 85-97:</strong> زيادة وزن (خطر السمنة)</p>
                    <p><strong className="text-destructive">أعلى من المئوية 97:</strong> سمنة - تحتاج تدخلاً طبياً</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">عندما يكون طفلك في المئوية 50، فهذا يعني أن مؤشر كتلة جسمه أعلى من 50% من الأطفال في عمره ونفس جنسه. لاحظ أن هناك اختلافات طبيعية بين السكان في مناطق مختلفة من العالم العربي، لذا المتابعة الطولية (عبر الزمن) أهم من القراءة الواحدة.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* الفرق بين مؤشر البالغين والأطفال */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <AlertTriangle className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">الفرق بين مؤشر البالغين والأطفال</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>وفقاً لإرشادات <strong>منظمة الصحة العالمية - إقليم شرق المتوسط (WHO EMRO)</strong>، لا يُفسر مؤشر كتلة الجسم للأطفال بنفس طريقة البالغين. عند البالغين تُستخدم عتبات ثابتة (18.5 / 25 / 30)، بينما عند الأطفال يتغير الجسم باستمرار مع النمو والتطور.</p>
              <p>لذلك تُستخدم <strong>منحنيات المئويات</strong> التي تقارن الطفل بأقرانه من نفس العمر والجنس، وهي المعيار المعتمد في جميع وزارات الصحة العربية.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                <h4 className="font-bold text-destructive mb-2">مؤشر البالغين (WHO EMRO)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>&#8226; عتبات ثابتة عالمية موحدة</li>
                  <li>&#8226; &lt;18.5 = نقص وزن</li>
                  <li>&#8226; 18.5-25 = وزن طبيعي</li>
                  <li>&#8226; 25-30 = زيادة وزن</li>
                  <li>&#8226; &gt;30 = سمنة</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">مؤشر الأطفال (منحنيات WHO)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>&#8226; منحنيات المئويات حسب العمر</li>
                  <li>&#8226; يتغير مع كل مرحلة نمو</li>
                  <li>&#8226; مختلف بين الذكور والإناث</li>
                  <li>&#8226; تفسير نسبي وليس مطلقاً</li>
                  <li>&#8226; المتابعة الطولية هي الأساس</li>
                </ul>
              </div>
            </div>
          </div>

          {/* الفئات العمرية */}
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
                <p className="text-sm text-muted-foreground">لا يُحسب مؤشر كتلة الجسم في هذه المرحلة. تُراقب منحنيات الوزن بالنسبة للطول ومحيط الرأس في <strong>مراكز الرعاية الصحية الأولية</strong>. في السعودية والإمارات، تتم المتابعة خلال زيارات التطعيم الإلزامية حيث يُسجل الوزن والطول في الملف الإلكتروني. برنامج الأمومة والطفولة يوفر متابعة مجانية في معظم الدول العربية.</p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">الطفل (2-12 سنة)</h4>
                <p className="text-sm text-muted-foreground">يُفسر المؤشر بمنحنيات كتلة الجسم. تُطبق <strong>برامج الصحة المدرسية</strong> في الإمارات والسعودية فحوصات دورية للكشف عن السمنة. في الإمارات، يُقاس المؤشر لجميع الطلاب سنوياً. في السعودية، يتم الفحص ضمن <strong>برنامج الصحة المدرسية</strong>. يُراقب "ارتداد السمنة" حول سن 6 سنوات كمؤشر إنذار مبكر.</p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">المراهق (12-18 سنة)</h4>
                <p className="text-sm text-muted-foreground">مرحلة البلوغ تُحدث تغيرات جسدية كبيرة. في دول الخليج، تبرز <strong>عوامل ثقافية</strong> تزيد خطر السمنة: تراجع النشاط البدني الخارجي بسبب المناخ الحار، ارتفاع وقت الشاشات (من أعلى المعدلات عالمياً)، وانتشار الوجبات السريعة. المنحنيات المختلفة حسب الجنس ضرورية في هذه المرحلة.</p>
              </div>
            </div>
          </div>

          {/* العوامل الثقافية والغذائية */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Users className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">العوامل الثقافية والغذائية في العالم العربي</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>سمنة الأطفال في العالم العربي ليست مجرد مشكلة طبية، بل هي نتيجة <strong>تحولات اجتماعية وثقافية عميقة</strong> شهدتها المنطقة خلال العقود الأخيرة:</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-warning mb-3">تغير النمط الغذائي</h4>
                <p className="text-sm text-muted-foreground">الانتقال من الغذاء العربي التقليدي (التمر، اللبن، الحبوب الكاملة، الخضروات) إلى الوجبات السريعة والأطعمة فائقة التصنيع. دول الخليج من أكثر الدول استهلاكاً للوجبات السريعة عالمياً. كذلك تلعب <strong>ثقافة الضيافة العربية</strong> والحلويات التقليدية (الكنافة، البسبوسة، اللقيمات) دوراً في زيادة استهلاك السكريات.</p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-warning mb-3">المناخ وقلة النشاط البدني</h4>
                <p className="text-sm text-muted-foreground">الحرارة المرتفعة في الصيف (تتجاوز 50 درجة مئوية في الخليج) تحد بشكل كبير من اللعب في الخارج لأشهر طويلة. في دول الخليج، يسهم وجود العمالة المنزلية في تقليل النشاط البدني للأطفال حيث تُنجز كثير من الأنشطة اليومية نيابة عنهم. الاعتماد الكامل على السيارات حتى للمسافات القصيرة يحد من المشي.</p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-warning mb-3">وقت الشاشات والألعاب الإلكترونية</h4>
                <p className="text-sm text-muted-foreground">الدول العربية، وخاصة الخليج، من بين الأعلى عالمياً في معدلات وقت الشاشات لدى الأطفال والمراهقين. منصات التواصل الاجتماعي والألعاب الإلكترونية تحل محل اللعب الحركي التقليدي. هذا يقلل من حرق السعرات ويزيد من تناول الوجبات الخفيفة غير الصحية أمام الشاشات.</p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-warning mb-3">صيام الأطفال في رمضان</h4>
                <p className="text-sm text-muted-foreground">الأطفال دون 12 سنة عموماً <strong>معفون من صيام رمضان</strong> شرعاً. بعض الأطفال يصومون تدريجياً بدءاً من سن 7-10 سنوات. المهم عدم إجبار الطفل على الصيام ومراعاة احتياجاته الغذائية للنمو. خلال رمضان، يجب الانتباه لنوعية وجبات الإفطار والسحور لضمان التغذية المتوازنة.</p>
              </div>
            </div>
          </div>

          {/* متى يجب الاستشارة */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Stethoscope className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">متى يجب استشارة طبيب الأطفال؟</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5">
                <h4 className="font-bold text-warning mb-3">علامات التحذير</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>&#8226; تغير مفاجئ في ممر منحنى النمو</li>
                  <li>&#8226; مؤشر كتلة الجسم أعلى من المئوية 97</li>
                  <li>&#8226; مؤشر كتلة الجسم أقل من المئوية 3</li>
                  <li>&#8226; ارتداد السمنة المبكر (قبل سن 6 سنوات)</li>
                  <li>&#8226; شكوى الطفل من التنمر بسبب وزنه</li>
                  <li>&#8226; رفض الطفل للأكل أو الإفراط فيه بشكل ملحوظ</li>
                  <li>&#8226; ظهور علامات بلوغ مبكر مع زيادة الوزن</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-3">الجهات المرجعية والبرامج الحكومية</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>&#8226; <strong>طبيب الأطفال</strong> في مراكز الرعاية الصحية الأولية</li>
                  <li>&#8226; <strong>السعودية:</strong> برنامج تطمين للفحص الصحي المدرسي</li>
                  <li>&#8226; <strong>الإمارات:</strong> برنامج الصحة المدرسية الشامل</li>
                  <li>&#8226; <strong>WHO EMRO:</strong> بروتوكولات رصد النمو الإقليمية</li>
                  <li>&#8226; المتابعة الطولية (كل 3-6 أشهر) أهم من القياس الواحد</li>
                  <li>&#8226; عدم إشعار الطفل بالقلق أو الخجل من وزنه</li>
                </ul>
              </div>
            </div>
          </div>

          {/* مبادرات الحكومات العربية */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Globe className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">مبادرات الحكومات العربية لمكافحة سمنة الأطفال</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>أدركت الحكومات العربية خطورة أزمة سمنة الأطفال وأطلقت مبادرات شاملة:</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-3">المملكة العربية السعودية</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>&#8226; <strong>رؤية 2030 - جودة الحياة:</strong> تعزيز النشاط البدني وبناء مرافق رياضية في الأحياء</li>
                  <li>&#8226; <strong>أنظمة التغذية المدرسية:</strong> حظر المشروبات الغازية والوجبات غير الصحية في المقاصف</li>
                  <li>&#8226; <strong>ضريبة المشروبات المحلاة:</strong> 50% على المشروبات الغازية و100% على مشروبات الطاقة</li>
                  <li>&#8226; <strong>برنامج تطمين:</strong> فحوصات صحية شاملة للطلاب</li>
                </ul>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-3">الإمارات العربية المتحدة</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>&#8226; <strong>الاستراتيجية الوطنية للتغذية:</strong> أهداف محددة لخفض سمنة الأطفال بحلول 2030</li>
                  <li>&#8226; <strong>التربية البدنية الإلزامية:</strong> في جميع المدارس الحكومية والخاصة</li>
                  <li>&#8226; <strong>نظام النجوم الغذائي:</strong> تصنيف المنتجات الغذائية في المتاجر</li>
                  <li>&#8226; <strong>تقييد إعلانات الأغذية غير الصحية:</strong> الموجهة للأطفال</li>
                </ul>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-3">الكويت</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>&#8226; <strong>مشروع الكويت لمكافحة سمنة الأطفال:</strong> برنامج وطني شامل يستهدف المدارس والأسر</li>
                  <li>&#8226; <strong>تنظيم المقاصف المدرسية:</strong> قوائم طعام صحية معتمدة</li>
                  <li>&#8226; <strong>حملات توعوية:</strong> تستهدف الأسر والمعلمين</li>
                </ul>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-3">مصر</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>&#8226; <strong>حملة 100 مليون صحة:</strong> شملت فحوصات سمنة الأطفال ضمن المسح الصحي الشامل</li>
                  <li>&#8226; <strong>برنامج التغذية المدرسية:</strong> توفير وجبات متوازنة لطلاب المدارس الحكومية</li>
                  <li>&#8226; <strong>تنظيم الإعلانات:</strong> توجه لتقييد إعلانات الأطعمة غير الصحية الموجهة للأطفال</li>
                </ul>
              </div>
            </div>
          </div>

          {/* القسم التعليمي - SEO */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <BookOpen className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">مؤشر كتلة الجسم للأطفال: الدليل الشامل للآباء العرب</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p><strong>حساب مؤشر كتلة الجسم للأطفال</strong> في العالم العربي يعتمد على نفس معادلة البالغين (الوزن بالكيلوغرام ÷ مربع الطول بالمتر)، لكن <strong>تفسير النتيجة</strong> يختلف جذرياً. يجب استخدام <strong>منحنيات النمو</strong> المعتمدة من منظمة الصحة العالمية أو وزارة الصحة في بلدك، وليس العتبات الثابتة الخاصة بالبالغين.</p>
              <p>تواجه المنطقة العربية <strong>أزمة سمنة أطفال</strong> تتطلب وعياً مجتمعياً شاملاً. تشير تقارير <strong>WHO EMRO</strong> (المكتب الإقليمي لشرق المتوسط) إلى أن معدلات السمنة لدى الأطفال في دول الخليج تتجاوز المعدل العالمي بكثير. وزارات الصحة في السعودية والإمارات والكويت ومصر أطلقت برامج مكافحة شاملة.</p>
              <p>مراقبة <strong>منحنى نمو طفلك</strong> عبر الزيارات الدورية لطبيب الأطفال أو مراكز الرعاية الصحية الأولية هي أفضل طريقة للاطمئنان. تذكر أن الهدف ليس الوصول لرقم محدد، بل ضمان <strong>مسار نمو صحي ومتسق</strong> عبر الزمن. العوامل الثقافية والبيئية الخاصة بالعالم العربي (المناخ، النمط الغذائي، وقت الشاشات) يجب مراعاتها في أي خطة صحية لطفلك.</p>
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


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 حاسبة مؤشر كتلة الجسم للأطفال - أداة إعلامية فقط - المصادر: WHO EMRO، وزارة الصحة السعودية، وزارة الصحة الإماراتية</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCTifl;
