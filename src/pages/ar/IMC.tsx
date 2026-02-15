import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Calculator, Activity, Target, BookOpen, Scale, TrendingUp, Heart, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";

const IMCAr = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(80);
  const [height, setHeight] = useState(171);

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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            حاسبة مؤشر كتلة الجسم للعالم العربي
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">حاسبة مؤشر كتلة الجسم مجاناً أونلاين</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            احسب مؤشر كتلة جسمك فوراً واكتشف وضعك الصحي وفقاً لمعايير منظمة الصحة العالمية ومكتبها الإقليمي لشرق المتوسط (EMRO)
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary" />
              أدخل قياساتك
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">الوزن</label>
                  <span className="text-2xl font-bold text-primary">{weight} كغ</span>
                </div>
                <Slider
                  value={[weight]}
                  onValueChange={handleWeightChange}
                  min={30}
                  max={200}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>30 كغ</span>
                  <span>200 كغ</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">الطول</label>
                  <span className="text-2xl font-bold text-primary">{height} سم</span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={handleHeightChange}
                  min={100}
                  max={220}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>100 سم</span>
                  <span>220 سم</span>
                </div>
              </div>
            </div>
          </div>

          <BMIGauge bmi={bmi} />
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Contextualized Arab World Intro */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">مؤشر كتلة الجسم في العالم العربي: أرقام مقلقة</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>مؤشر كتلة الجسم (BMI)</strong> هو مقياس عالمي يستخدم الطول والوزن لتقدير مدى صحة وزن الشخص. لكن في العالم العربي، يكتسب هذا المقياس أهمية استثنائية بسبب معدلات السمنة المرتفعة بشكل غير مسبوق. وفقاً لبيانات <strong>منظمة الصحة العالمية - المكتب الإقليمي لشرق المتوسط (WHO EMRO)</strong>، تحتل الدول العربية مراتب متقدمة عالمياً في انتشار السمنة.
              </p>
              <p>
                تتصدر <strong>الكويت</strong> القائمة بنسبة سمنة تبلغ <strong>37.9%</strong> من السكان البالغين، مما يجعلها من أعلى الدول في العالم. تليها <strong>المملكة العربية السعودية</strong> بنسبة <strong>35.4%</strong>، ثم <strong>مصر</strong> بنسبة <strong>32%</strong>، و<strong>الإمارات العربية المتحدة</strong> بنسبة <strong>31.7%</strong>. هذه الأرقام تعني أن ثلث السكان البالغين تقريباً في هذه الدول يعانون من السمنة المفرطة.
              </p>
              <p>
                أطلقت <strong>وزارة الصحة السعودية</strong> حملات وطنية للتوعية بأخطار السمنة ضمن رؤية 2030، بينما وضعت <strong>هيئة الصحة في دبي</strong> و<strong>مؤسسة حمد الطبية في قطر</strong> برامج متخصصة للحد من معدلات السمنة المتصاعدة. حاسبة مؤشر كتلة الجسم هي خطوتك الأولى نحو فهم وضعك الصحي واتخاذ قرارات مبنية على المعرفة.
              </p>
            </div>
          </div>

          {/* Arab Obesity Crisis */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">أزمة السمنة في العالم العربي</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                شهد العالم العربي خلال العقود الأربعة الماضية تحولاً جذرياً في أنماط الحياة والتغذية، أدى إلى ما يصفه خبراء الصحة العامة بـ<strong>"وباء السمنة"</strong>. هذا التحول مرتبط بعدة عوامل متشابكة تجعل المنطقة العربية من أكثر مناطق العالم تأثراً بهذه الأزمة الصحية.
              </p>

              <h3 className="text-lg font-bold text-foreground mt-6">التحضر السريع وتغير نمط الحياة</h3>
              <p>
                انتقل غالبية سكان دول الخليج العربي من حياة البداوة والزراعة إلى حياة مدنية حديثة في غضون جيل واحد فقط. هذا التحول السريع لم يمنح المجتمعات وقتاً كافياً للتكيف صحياً. أصبح الاعتماد على السيارات شبه كامل في دول مثل السعودية والإمارات والكويت، حيث يصعب المشي بسبب المناخ الحار والتخطيط العمراني المعتمد على المركبات. أظهرت دراسة نُشرت في المجلة السعودية للطب أن <strong>أقل من 20% من السعوديين البالغين</strong> يمارسون النشاط البدني بالحد الأدنى الموصى به.
              </p>

              <h3 className="text-lg font-bold text-foreground mt-6">الثروة النفطية وتغير الأنظمة الغذائية</h3>
              <p>
                أحدثت الطفرة النفطية في ستينيات وسبعينيات القرن العشرين ثورة في القدرة الشرائية لسكان الخليج. مع الرخاء الاقتصادي، تراجع استهلاك الأغذية التقليدية المتوازنة مثل <strong>التمر والحليب والأسماك والحبوب الكاملة</strong> لصالح الوجبات السريعة الغربية. أصبحت سلاسل الوجبات السريعة العالمية منتشرة بكثافة في المدن العربية، وتُقدّم حصصاً أكبر حجماً مما هو متاح في الأسواق الغربية ذاتها.
              </p>

              <h3 className="text-lg font-bold text-foreground mt-6">المطبخ العربي التقليدي في مواجهة الوجبات السريعة</h3>
              <p>
                المطبخ العربي التقليدي غني بالمكونات الصحية: <strong>زيت الزيتون، والبقوليات كالحمص والعدس، والخضروات الطازجة، والأعشاب العطرية</strong>. لكن العادات الغذائية الحديثة حلّت محل هذا التراث الغذائي. تُظهر الدراسات أن استهلاك المشروبات الغازية والسكرية في دول الخليج يُعد من الأعلى عالمياً. في السعودية وحدها، يستهلك الفرد ما يقارب <strong>89 لتراً من المشروبات الغازية سنوياً</strong>.
              </p>

              <h3 className="text-lg font-bold text-foreground mt-6">نمط الحياة الخامل في دول الخليج</h3>
              <p>
                يُساهم المناخ الصحراوي الحار في تقليل النشاط البدني الخارجي لأشهر طويلة من السنة. الاعتماد الكبير على العمالة المنزلية في دول الخليج يُقلل من الحركة اليومية حتى داخل المنزل. كما أن ثقافة التجمعات العائلية حول الطعام، وخاصة الولائم الكبيرة في المناسبات، تُعزز من الإفراط في الأكل. بالإضافة إلى ذلك، تقضي نسبة كبيرة من الشباب العربي ساعات طويلة أمام الشاشات، حيث أظهرت دراسة في الإمارات أن <strong>المراهقين يقضون أكثر من 7 ساعات يومياً</strong> في أنشطة مستقرة غير مرتبطة بالدراسة.
              </p>

              <h3 className="text-lg font-bold text-foreground mt-6">التبعات الصحية الخطيرة</h3>
              <p>
                أدت أزمة السمنة إلى ارتفاع حاد في معدلات <strong>السكري من النوع الثاني</strong> في المنطقة العربية. تحتل السعودية المرتبة السابعة عالمياً في انتشار السكري، بينما تُصنّف الكويت والبحرين وقطر ضمن العشرين الأوائل. كما ارتفعت معدلات أمراض القلب والشرايين وارتفاع ضغط الدم وبعض أنواع السرطان المرتبطة بالسمنة. يُقدّر أن <strong>السمنة تكلف اقتصادات دول الخليج مليارات الدولارات سنوياً</strong> في الرعاية الصحية وفقدان الإنتاجية.
              </p>
            </div>
          </div>

          {/* BMI Categories */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">تصنيفات مؤشر كتلة الجسم (منظمة الصحة العالمية)</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-right py-3 px-4 font-bold">التصنيف</th>
                    <th className="text-right py-3 px-4 font-bold">نطاق المؤشر</th>
                    <th className="text-right py-3 px-4 font-bold">المخاطر الصحية</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      نقص الوزن
                    </td>
                    <td className="py-3 px-4">&lt; 18.5</td>
                    <td className="py-3 px-4 text-info">خطر سوء التغذية</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      وزن طبيعي
                    </td>
                    <td className="py-3 px-4">18.5 - 24.9</td>
                    <td className="py-3 px-4 text-success">خطر منخفض</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      زيادة الوزن
                    </td>
                    <td className="py-3 px-4">25 - 29.9</td>
                    <td className="py-3 px-4 text-warning">خطر متزايد</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      سمنة درجة أولى
                    </td>
                    <td className="py-3 px-4">30 - 34.9</td>
                    <td className="py-3 px-4 text-destructive">خطر مرتفع</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      سمنة درجة ثانية
                    </td>
                    <td className="py-3 px-4">35 - 39.9</td>
                    <td className="py-3 px-4 text-destructive">خطر مرتفع جداً</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      سمنة درجة ثالثة
                    </td>
                    <td className="py-3 px-4">&ge; 40</td>
                    <td className="py-3 px-4 text-destructive">خطر شديد جداً</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Ramadan and BMI */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-amber-500/10">
                <Heart className="w-6 h-6 text-amber-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">مؤشر كتلة الجسم والصيام في رمضان</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                يُمثّل شهر رمضان المبارك فترة فريدة من نوعها تؤثر بشكل مباشر على مؤشر كتلة الجسم لأكثر من <strong>1.8 مليار مسلم حول العالم</strong>. يمتد الصيام من الفجر حتى المغرب، أي ما يتراوح بين 12 و18 ساعة يومياً حسب الموقع الجغرافي والموسم، مما يُحدث تغييرات ملحوظة في الأيض والوزن وتكوين الجسم.
              </p>

              <h3 className="text-lg font-bold text-foreground mt-6">ماذا تقول الدراسات العلمية؟</h3>
              <p>
                أجريت عشرات الدراسات على تأثير صيام رمضان على الوزن ومؤشر كتلة الجسم. أظهرت مراجعة منهجية شاملة نُشرت في مجلة <em>Nutrition Reviews</em> أن <strong>متوسط فقدان الوزن خلال رمضان يتراوح بين 1.2 و3.8 كيلوغرام</strong>. لكن النتائج تتفاوت بشكل كبير بحسب النظام الغذائي المتّبع خلال ساعات الإفطار.
              </p>
              <p>
                كشفت دراسة أُجريت على 81 طالباً جامعياً في السعودية أن <strong>مؤشر كتلة الجسم انخفض بمعدل 0.7 نقطة</strong> بنهاية الشهر عند من التزموا بنظام غذائي معتدل. في المقابل، أظهرت دراسة أخرى في الكويت أن بعض الصائمين <strong>يكتسبون وزناً</strong> خلال رمضان بسبب الإفراط في تناول الحلويات والمقليات خلال وجبتي الإفطار والسحور.
              </p>
              <p>
                من الناحية الأيضية، أثبتت الأبحاث أن صيام رمضان يُحسّن من <strong>حساسية الأنسولين</strong> ويُخفّض مستويات <strong>الكوليسترول الضار (LDL)</strong> لدى غالبية الصائمين. كما لوحظ انخفاض في مستويات الالتهاب الجسدي، وهو ما يتوافق مع نتائج أبحاث الصيام المتقطع الحديثة.
              </p>

              <h3 className="text-lg font-bold text-foreground mt-6">نصائح للحفاظ على وزن صحي في رمضان</h3>
              <ul className="list-disc list-inside space-y-3 mr-4">
                <li>
                  <strong>الإفطار التدريجي:</strong> ابدأ بتمرات وماء كما في السنة النبوية، ثم انتظر 15-20 دقيقة قبل الوجبة الرئيسية. هذا يُعطي الدماغ وقتاً لاستقبال إشارات الشبع ويمنع الإفراط في الأكل.
                </li>
                <li>
                  <strong>تجنّب المقليات والحلويات المفرطة:</strong> تتميز الموائد الرمضانية العربية بأطباق مثل السمبوسة والقطايف والكنافة. استمتع بها باعتدال واجعل الأولوية للشوربات والسلطات والبروتينات المشوية.
                </li>
                <li>
                  <strong>الاهتمام بوجبة السحور:</strong> اختر أطعمة بطيئة الامتصاص مثل الشوفان والفول والبيض والزبادي. تجنّب الأطعمة المالحة التي تزيد العطش والأطعمة السكرية التي ترفع الأنسولين سريعاً.
                </li>
                <li>
                  <strong>الترطيب الكافي:</strong> اشرب ما لا يقل عن 8 أكواب من الماء بين الإفطار والسحور. المشروبات التي تحتوي على الكافيين مثل القهوة والشاي مُدرّة للبول ولا تُعوّض السوائل بشكل كامل.
                </li>
                <li>
                  <strong>النشاط البدني المعتدل:</strong> مارس المشي الخفيف بعد صلاة التراويح أو قبل السحور بساعة. تجنّب التمارين العنيفة خلال ساعات الصيام، خاصة في الأجواء الحارة.
                </li>
                <li>
                  <strong>مراقبة مؤشر كتلة الجسم أسبوعياً:</strong> قِس وزنك في نفس التوقيت كل أسبوع (يُفضّل قبل السحور) لتتبع التغيرات. انخفاض تدريجي بمعدل 0.5-1 كغ أسبوعياً يُعد صحياً ومستداماً.
                </li>
              </ul>

              <h3 className="text-lg font-bold text-foreground mt-6">ما بعد رمضان: تحدي استعادة الوزن</h3>
              <p>
                تُشير الدراسات إلى أن <strong>غالبية من يفقدون وزناً في رمضان يستعيدونه خلال الأسابيع الستة التالية لعيد الفطر</strong>. يعود ذلك إلى العودة المفاجئة لأنماط الأكل القديمة وولائم العيد. المفتاح هو الانتقال التدريجي من نظام رمضان إلى نظام غذائي يومي متوازن، مع الحفاظ على بعض عادات الصيام المتقطع إن أمكن.
              </p>
            </div>
          </div>

          {/* How to calculate */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">كيفية حساب مؤشر كتلة الجسم</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p><strong>صيغة مؤشر كتلة الجسم</strong> بسيطة وموحّدة عالمياً:</p>
              <div className="bg-muted/30 rounded-xl p-6 text-center" dir="ltr">
                <p className="text-2xl font-bold text-primary">BMI = الوزن (كغ) &divide; الطول&sup2; (م)</p>
              </div>
              <p>
                على سبيل المثال، لشخص بمتوسط القياسات في العالم العربي بوزن 80 كغ وطول 1.71 م:<br />
                مؤشر كتلة الجسم = 80 &divide; (1.71 &times; 1.71) = 80 &divide; 2.9241 = <strong>27.4</strong>
              </p>
              <p>
                هذه النتيجة تقع في نطاق <strong>"زيادة الوزن"</strong> (25-29.9)، وهو ما يعكس الواقع الإحصائي في المنطقة العربية حيث يقع متوسط مؤشر كتلة الجسم للبالغين فوق الحد الطبيعي. اخترع هذه الصيغة عالم الرياضيات البلجيكي <strong>أدولف كيتليه</strong> في ثلاثينيات القرن التاسع عشر، وتبنّتها منظمة الصحة العالمية كمقياس عالمي في عام 1995.
              </p>
            </div>
          </div>

          {/* Links to other pages */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/ar/imc-rajul" className="glass-card p-6 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Activity className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-bold">مؤشر كتلة الجسم للرجال</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                اعتبارات خاصة بتكوين جسم الرجل العربي وتأثير نمط الحياة في المنطقة
              </p>
            </Link>

            <Link to="/ar/imc-maraa" className="glass-card p-6 hover:border-pink-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-pink-500/10">
                  <Activity className="w-5 h-5 text-pink-500" />
                </div>
                <h3 className="font-bold">مؤشر كتلة الجسم للنساء</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                فهم مؤشر كتلة الجسم مع العوامل الهرمونية والتغيرات الفسيولوجية للمرأة
              </p>
            </Link>

            <Link to="/ar/imc-riyadi" className="glass-card p-6 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-bold">مؤشر كتلة الجسم للرياضيين</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                لماذا لا يعمل المؤشر بدقة مع الرياضيين وأصحاب الكتلة العضلية العالية
              </p>
            </Link>
          </div>

          {/* SEO Content - Arab Specific */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">فهم مؤشر كتلة الجسم في السياق العربي</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>حاسبة مؤشر كتلة الجسم</strong> التي نقدمها مصممة وفقاً لمعايير <strong>منظمة الصحة العالمية (WHO)</strong> ومكتبها الإقليمي لشرق المتوسط <strong>(EMRO)</strong> المسؤول عن الشأن الصحي في المنطقة العربية. سواء كنت تبحث عن <strong>حاسبة مؤشر كتلة الجسم المجانية</strong> أو تريد <strong>حساب مؤشر كتلة الجسم</strong> بسرعة ودقة، فإن أداتنا تُقدّم نتائج فورية مع تصنيفات واضحة.
              </p>
              <p>
                أكدت <strong>وزارة الصحة السعودية</strong> في إرشاداتها الغذائية الوطنية على أهمية مراقبة مؤشر كتلة الجسم كجزء أساسي من الفحص الصحي الدوري. كما تنصح <strong>الجمعية السعودية لطب السمنة</strong> بإجراء هذا الحساب مرة كل ثلاثة أشهر على الأقل لمتابعة التغيرات في الوزن.
              </p>
              <p>
                من المنظور التراثي، يحثّ <strong>الطب النبوي</strong> على الاعتدال في الطعام والشراب. يقول الحديث الشريف: <em>"ما ملأ ابن آدم وعاءً شراً من بطنه، بحسب ابن آدم لقيمات يُقمن صلبه، فإن كان لا محالة فاعلاً: فثلثٌ لطعامه، وثلثٌ لشرابه، وثلثٌ لنفَسه"</em>. هذا المبدأ النبوي يتوافق تماماً مع التوصيات الطبية الحديثة بتقليل حجم الوجبات والأكل باعتدال.
              </p>
              <p>
                يُعد <strong>المطبخ العربي التقليدي</strong> من أصح المطابخ العالمية عند الالتزام بأصوله: زيت الزيتون البكر، والحبوب الكاملة مثل البرغل والفريكة، والبقوليات كالحمص والعدس والفول، والأسماك الطازجة، والتوابل المفيدة صحياً كالكركم والزنجبيل والقرفة. العودة إلى هذه الجذور الغذائية يمكن أن تُسهم بشكل كبير في الحفاظ على <strong>مؤشر كتلة جسم صحي</strong> يتراوح بين 18.5 و24.9.
              </p>
              <p>
                تذكّر أن <strong>مؤشر كتلة الجسم</strong> هو أداة فحص أولية وليس تشخيصاً طبياً نهائياً. لا يأخذ هذا المقياس في الاعتبار <strong>الكتلة العضلية، وتوزيع الدهون، والعمر، والعِرق</strong>. استشر طبيبك للحصول على تقييم شامل يشمل قياس محيط الخصر ونسبة الدهون في الجسم وفحوصات الدم.
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 حاسبة مؤشر كتلة الجسم المجانية</p>
        </footer>
      </div>
    </div>
  );
};

export { IMCAr };
export default IMCAr;
