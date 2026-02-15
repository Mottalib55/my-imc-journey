import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Dumbbell, AlertTriangle, Target, Scale, Activity, TrendingUp, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";

const IMCRiyadi = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(85);
  const [height, setHeight] = useState(180);

  const calculateBMI = useCallback((w: number, h: number) => {
    const heightInM = h / 100;
    const calculatedBmi = w / (heightInM * heightInM);
    setBmi(calculatedBmi);
  }, []);

  useEffect(() => { calculateBMI(weight, height); }, []);

  const handleWeightChange = (value: number[]) => { setWeight(value[0]); calculateBMI(value[0], height); };
  const handleHeightChange = (value: number[]) => { setHeight(value[0]); calculateBMI(weight, value[0]); };

  const ffmi = weight && height ? (weight * 0.85) / Math.pow(height / 100, 2) : null;

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6">
            <Dumbbell className="w-4 h-4" />
            حاسبة مؤشر كتلة الجسم للرياضيين العرب
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-orange-500">مؤشر كتلة الجسم والرياضيين العرب</span> : تحدي الأرقام
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            لماذا يصنف مؤشر كتلة الجسم معظم لاعبي كرة القدم العرب كـ"زائدي الوزن"؟ الرياضة في العالم العربي وحدود المؤشر.
          </p>
        </header>

        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-orange-500 mb-2">تحذير: مؤشر كتلة الجسم لا يناسب الرياضيين</h3>
              <p className="text-muted-foreground">
                لا يميز مؤشر كتلة الجسم بين <strong>كتلة العضلات</strong> و<strong>الدهون</strong>. أبطال مثل محمد صلاح وحبيب نورمحمدوف يملكون أجساماً رياضية مثالية، لكن المؤشر قد يصنفهم بشكل مضلل. مستشفى <strong>أسبيتار</strong> في قطر، المرجع العالمي في الطب الرياضي، يؤكد ضرورة استخدام مقاييس بديلة للرياضيين.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-orange-500" />
              أدخل قياساتك
            </h2>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">الوزن</label>
                  <span className="text-2xl font-bold text-orange-500">{weight} كغ</span>
                </div>
                <Slider value={[weight]} onValueChange={handleWeightChange} min={50} max={200} step={1} className="py-4" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">الطول</label>
                  <span className="text-2xl font-bold text-orange-500">{height} سم</span>
                </div>
                <Slider value={[height]} onValueChange={handleHeightChange} min={150} max={220} step={1} className="py-4" />
              </div>
            </div>
          </div>
          <BMIGauge bmi={bmi} />
        </div>

        {bmi && (
          <div className="glass-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-xl font-display font-bold">تقدير FFMI (مؤشر الكتلة الخالية من الدهون)</h2>
            </div>
            <p className="text-muted-foreground mb-4">FFMI هو مؤشر أفضل للرياضيين العرب لأنه يأخذ الكتلة العضلية في الاعتبار. يستخدم في مراكز الطب الرياضي في الخليج مثل أسبيتار.</p>
            <div className="bg-muted/30 rounded-xl p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">FFMI المقدر (بافتراض 15% دهون)</p>
              <p className="text-3xl font-bold text-orange-500">{ffmi?.toFixed(1)}</p>
              <p className="text-xs text-muted-foreground mt-2">طبيعي: 18-25 | محتمل محسّن: &gt;25</p>
            </div>
          </div>
        )}

        <div className="space-y-8">

          {/* Famous Arab Athletes */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Dumbbell className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">رياضيون عرب ومؤشر كتلة الجسم</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              أبرز الرياضيين العرب يملكون أجساماً رياضية عالية الأداء. لنرَ كيف يقيّمهم مؤشر كتلة الجسم الكلاسيكي:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <h4 className="font-bold text-lg mb-1">محمد صلاح</h4>
                <p className="text-xs text-muted-foreground mb-3">نجم ليفربول ومنتخب مصر</p>
                <p className="text-sm text-muted-foreground mb-2">الطول: 175 سم | الوزن: 71 كغ</p>
                <p className="text-2xl font-bold text-orange-500 mb-1">BMI ~23.2</p>
                <p className="text-xs text-green-500 font-medium">طبيعي -- لكن كتلته العضلية عالية جداً</p>
                <p className="text-xs text-muted-foreground mt-2">من أسرع اللاعبين في البريميرليغ، نسبة دهون منخفضة جداً</p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <h4 className="font-bold text-lg mb-1">حبيب نورمحمدوف</h4>
                <p className="text-xs text-muted-foreground mb-3">بطل UFC -- داغستان</p>
                <p className="text-sm text-muted-foreground mb-2">الطول: 178 سم | الوزن: 77 كغ</p>
                <p className="text-2xl font-bold text-orange-500 mb-1">BMI ~24.3</p>
                <p className="text-xs text-yellow-500 font-medium">حد أعلى "طبيعي" -- وهو في ذروة لياقته</p>
                <p className="text-xs text-muted-foreground mt-2">29 انتصاراً بدون هزيمة، قوة مصارعة استثنائية</p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <h4 className="font-bold text-lg mb-1">لاعب كرة قدم خليجي نموذجي</h4>
                <p className="text-xs text-muted-foreground mb-3">الدوري السعودي / دوري أبطال آسيا</p>
                <p className="text-sm text-muted-foreground mb-2">الطول: 182 سم | الوزن: 82 كغ</p>
                <p className="text-2xl font-bold text-orange-500 mb-1">BMI ~24.8</p>
                <p className="text-xs text-yellow-500 font-medium">قريب من "زيادة الوزن" رغم اللياقة العالية</p>
                <p className="text-xs text-muted-foreground mt-2">بنية جسم مناسبة للعب في حرارة الخليج الشديدة</p>
              </div>
            </div>
          </div>

          {/* Sports in the Arab World */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">الرياضات الشائعة في العالم العربي ومؤشر كتلة الجسم</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1">كرة القدم</h4>
                <p className="text-xs text-orange-500 mb-3">الدوري السعودي للمحترفين | دوري أبطال آسيا</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>* المؤشر النموذجي: 22-25</li>
                  <li>* الدوري السعودي أصبح يستقطب نجوماً عالميين</li>
                  <li>* اللاعبون يحتاجون سرعة وقوة معاً</li>
                  <li>* التدريب في درجات حرارة عالية يؤثر على تكوين الجسم</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1">الفروسية وسباق الإبل</h4>
                <p className="text-xs text-orange-500 mb-3">تراث خليجي عريق | أنماط جسم مختلفة</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>* الفرسان يحتاجون خفة الوزن والقوة</li>
                  <li>* سباق الإبل: تقاليد راسخة في الإمارات والسعودية</li>
                  <li>* أنماط جسم متنوعة حسب التخصص</li>
                  <li>* المؤشر لا يعكس اللياقة الفعلية لهذه الرياضات</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1">كمال الأجسام</h4>
                <p className="text-xs text-orange-500 mb-3">شعبية كبيرة في الخليج | الإمارات والكويت في المقدمة</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>* المؤشر النموذجي: 28-35</li>
                  <li>* دبي تستضيف بطولات IFBB الكبرى سنوياً</li>
                  <li>* ثقافة اللياقة البدنية متجذرة في مجتمع الخليج</li>
                  <li>* المؤشر يصنفهم "سمنة" رغم نسبة دهون 8-12%</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1">ألعاب القوى والرياضات الأولمبية</h4>
                <p className="text-xs text-orange-500 mb-3">تنوع كبير في أنماط الجسم</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>* المؤشر يتفاوت بشكل كبير حسب التخصص</li>
                  <li>* عدّاء الماراثون: BMI 18-20 | رامي القرص: BMI 30+</li>
                  <li>* أبطال عرب أولمبيون بأجسام متنوعة جداً</li>
                  <li>* المؤشر وحده لا يكفي لتقييم أداء الرياضي</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Gulf Sports Section */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Globe className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">الرياضة في دول الخليج: ثورة رياضية</h2>
            </div>
            <div className="text-muted-foreground space-y-6">
              <div>
                <h3 className="font-bold text-foreground mb-2">رؤية السعودية 2030 والاستثمار الرياضي الضخم</h3>
                <p>
                  تشهد المملكة العربية السعودية تحولاً رياضياً غير مسبوق ضمن رؤية 2030. من <strong>موسم الرياض</strong> الذي يستقطب أكبر الأحداث الرياضية عالمياً، إلى مشروع <strong>نيوم (NEOM)</strong> الذي يخطط لبنية رياضية مستقبلية، إلى استقطاب نجوم كرة القدم العالميين للدوري السعودي. هذا التحول يعني تزايد أعداد الرياضيين الذين يحتاجون تقييماً صحياً دقيقاً يتجاوز مؤشر كتلة الجسم البسيط.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">الإمارات: عاصمة اللياقة البدنية في المنطقة</h3>
                <p>
                  أطلقت دبي <strong>تحدي دبي للياقة البدنية (Dubai Fitness Challenge)</strong> الذي يشارك فيه مئات الآلاف سنوياً لمدة 30 يوماً متواصلاً. كما أن <strong>مجلس أبوظبي الرياضي</strong> يدير عشرات المنشآت الرياضية العالمية. تستضيف دبي بطولات <strong>IFBB</strong> لكمال الأجسام التي تجذب أبطالاً من كل العالم العربي. في هذا السياق، يصبح استخدام مؤشر كتلة الجسم وحده لتقييم اللياقة أمراً غير كافٍ.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">رمضان والرياضيون: تحدي التدريب أثناء الصيام</h3>
                <p>
                  يشكل شهر رمضان تحدياً فريداً للرياضيين العرب والمسلمين. الصيام لمدة 14-16 ساعة يومياً يؤثر على <strong>تكوين الجسم</strong> والأداء الرياضي. تشير الدراسات إلى تغيرات في نسبة الدهون والكتلة العضلية خلال الشهر الكريم. هنا يصبح مؤشر كتلة الجسم أكثر خداعاً لأن التغيرات تشمل توزيع السوائل وليس فقط الدهون والعضلات.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">تحديات المناخ: التدريب في الحرارة الشديدة</h3>
                <p>
                  التدريب في درجات حرارة تتجاوز <strong>45 درجة مئوية</strong> صيفاً في الخليج يفرض متطلبات جسدية خاصة. يفقد الرياضيون سوائل كثيرة مما يؤثر على الوزن بشكل يومي. هذا التذبذب في الوزن يجعل قراءة مؤشر كتلة الجسم غير مستقرة ومضللة. المنشآت الرياضية المكيفة في السعودية والإمارات وقطر تساعد لكن التدريبات الخارجية تبقى جزءاً أساسياً.
                </p>
              </div>
            </div>
          </div>

          {/* Why BMI Fails for Athletes */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Scale className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">لماذا لا يعمل مؤشر كتلة الجسم للرياضيين العرب</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p><strong>مؤشر كتلة الجسم للرياضيين</strong> إشكالي لأن الصيغة لا تميز بين وزن العضلات ووزن الدهون. <strong>العضلات أكثر كثافة من الدهون</strong> بنسبة 20% تقريباً: بنفس الحجم تزن أكثر بكثير.</p>
              <p>لاعب كمال أجسام إماراتي طوله 180 سم ووزنه 100 كغ سيكون لديه <strong>مؤشر 30.9</strong> ("سمنة")، رغم أنه قد يكون بطلاً في بطولات IFBB دبي بنسبة <strong>10% دهون فقط</strong>.</p>
              <p>حتى لاعب كرة القدم في الدوري السعودي بطول 185 سم ووزن 84 كغ سيكون مؤشره <strong>24.5</strong> -- قريب جداً من حد "زيادة الوزن" بينما هو في ذروة لياقته ويركض 10 كيلومترات في كل مباراة.</p>
            </div>
          </div>

          {/* Alternatives */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Target className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">بدائل أفضل: ما يستخدمه أطباء الرياضة في العالم العربي</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              مستشفى <strong>أسبيتار (Aspetar)</strong> في قطر، أحد أفضل مراكز الطب الرياضي في العالم، يعتمد مقاييس متعددة لتقييم الرياضيين بدلاً من مؤشر كتلة الجسم وحده. مراكز الطب الرياضي في السعودية والإمارات تتبع نفس النهج.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">نسبة الدهون في الجسم</h4>
                <p className="text-sm text-muted-foreground mb-3">القياس الأدق المستخدم في أسبيتار ومراكز الخليج الرياضية.</p>
                <p className="text-xs"><strong>الرجال الرياضيون:</strong> 8-18%<br /><strong>النساء الرياضيات:</strong> 16-25%</p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">FFMI (مؤشر الكتلة الخالية من الدهون)</h4>
                <p className="text-sm text-muted-foreground mb-3">مؤشر متقدم يستخدم في أندية الدوري السعودي والإماراتي.</p>
                <p className="text-xs"><strong>طبيعي:</strong> 18-25<br /><strong>نخبة طبيعي:</strong> 24-26</p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">محيط الخصر ونسبة الخصر/الطول</h4>
                <p className="text-sm text-muted-foreground mb-3">مؤشر بسيط وفعال يستخدم في الفحوصات الدورية.</p>
                <p className="text-xs"><strong>الرجال:</strong> &lt;94 سم<br /><strong>النساء:</strong> &lt;80 سم</p>
              </div>
            </div>
          </div>

          {/* SEO Section */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">مؤشر كتلة الجسم للرياضيين العرب: خلاصة</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p><strong>حساب مؤشر كتلة الجسم للرياضيين</strong> في العالم العربي يحتاج فهماً خاصاً. سواء كنت لاعب كرة قدم في <strong>الدوري السعودي للمحترفين</strong>، أو بطل <strong>كمال أجسام في دبي</strong>، أو ممارساً لـ<strong>الفروسية في الخليج</strong>، أو عدّاءً يتدرب في حرارة الصيف العربي -- مؤشر كتلة الجسم وحده لا يكفي لتقييم صحتك ولياقتك.</p>
              <p>مستشفى <strong>أسبيتار (Aspetar)</strong> في الدوحة، المرجع العالمي في الطب الرياضي الذي يخدم أندية قطر ودوري أبطال آسيا، يوصي باستخدام <strong>نسبة الدهون</strong> و<strong>FFMI</strong> و<strong>محيط الخصر</strong> كبدائل أدق. هذا النهج تتبناه أيضاً مراكز الطب الرياضي في الرياض وأبوظبي ودبي.</p>
              <p>للرياضيين العرب: لا تدع رقم المؤشر يحبطك. استشر طبيب رياضة متخصصاً، وركز على الأداء والمؤشرات البديلة. للمزيد عن <Link to="/ar/imc" className="text-orange-500 hover:underline">حساب مؤشر كتلة الجسم العام</Link>، تفضل بزيارة حاسبتنا الرئيسية.</p>
            </div>
          </div>

        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 حاسبة مؤشر كتلة الجسم للرياضيين العرب - أداة إعلامية وليست بديلاً عن استشارة الطبيب</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCRiyadi;
