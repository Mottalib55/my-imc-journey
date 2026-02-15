import { Header } from "@/components/Header";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface FAQItemProps { question: string; answer: string; }

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-5 text-right hover:bg-muted/30 transition-colors">
        <span className="font-medium pl-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-muted-foreground">
          <div dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      )}
    </div>
  );
};

const AsilaIMC = () => {
  const faqs = [
    { question: "ما هو مؤشر كتلة الجسم بالضبط؟", answer: "<strong>مؤشر كتلة الجسم (BMI)</strong> هو مؤشر يقدّر كتلة جسم الشخص. يُحسب بقسمة الوزن (بالكغ) على مربع الطول (بالأمتار). الصيغة: المؤشر = الوزن / الطول². إنه أداة فحص سريعة يستخدمها المتخصصون في الرعاية الصحية." },
    { question: "كيف أحسب مؤشر كتلة جسمي؟", answer: "لحساب مؤشر كتلة جسمك، اقسم وزنك بالكيلوغرام على مربع طولك بالأمتار. مثلاً، إذا كان وزنك 70 كغ وطولك 1.75 م: المؤشر = 70 / (1.75 × 1.75) = 70 / 3.0625 = <strong>22.9</strong>. يمكنك أيضاً استخدام <a href='/ar/imc' class='text-primary hover:underline'>حاسبة مؤشر كتلة الجسم المجانية</a>." },
    { question: "ما هو مؤشر كتلة الجسم المثالي؟", answer: "وفقاً لمنظمة الصحة العالمية، <strong>المؤشر الطبيعي</strong> بين <strong>18.5 و 24.9</strong>. هذه هي المنطقة التي تكون فيها المخاطر الصحية أقل. ومع ذلك، يمكن أن يختلف المؤشر المثالي حسب العمر والجنس والنشاط البدني. المؤشر الأمثل غالباً حوالي 21-22." },
    { question: "هل مؤشر كتلة الجسم موثوق؟", answer: "المؤشر مؤشر جيد لعامة السكان، لكن له <strong>حدود</strong>. لا يميز بين كتلة العضلات والدهون. يمكن أن يكون لدى الرياضي العضلي مؤشر مرتفع بدون دهون زائدة. مؤشرات أخرى مثل محيط الخصر أو نسبة الدهون مكملة. انظر صفحة <a href='/ar/hudud-imc' class='text-primary hover:underline'>حدود المؤشر</a>." },
    { question: "ما المؤشر المناسب للنساء؟", answer: "المؤشر الطبيعي للنساء هو نفسه للرجال: <strong>18.5 إلى 24.9</strong>. لكن النساء لديهن طبيعياً نسبة دهون أعلى (20-25% مقابل 15-20% للرجال). محيط الخصر غالباً أكثر صلة: يجب ألا يتجاوز 80 سم. راجعي صفحة <a href='/ar/imc-maraa' class='text-primary hover:underline'>مؤشر كتلة الجسم للنساء</a>." },
    { question: "ما المؤشر المناسب للرجال؟", answer: "المؤشر الطبيعي للرجال بين <strong>18.5 و 24.9</strong>. يمكن أن يكون لدى الرجال العضليين مؤشر أعلى (حتى 27-28) بدون مشاكل صحية. محيط الخصر مؤشر مكمل مهم: يجب ألا يتجاوز 94 سم. راجع صفحة <a href='/ar/imc-rajul' class='text-primary hover:underline'>مؤشر كتلة الجسم للرجال</a>." },
    { question: "كيف أحسب مؤشر كتلة جسم طفلي؟", answer: "الحساب نفسه (الوزن/الطول²)، لكن <strong>التفسير مختلف</strong>. لا تُستخدم عتبات البالغين (18.5/25/30). تُستخدم منحنيات كتلة الجسم التي تراعي العمر والجنس. يجب وضع الطفل على منحنيات المئويات. راجع صفحة <a href='/ar/imc-tifl' class='text-primary hover:underline'>مؤشر كتلة الجسم للأطفال</a>." },
    { question: "هل يمكن حساب المؤشر أثناء الحمل؟", answer: "<strong>لا</strong>، المؤشر لا ينطبق أثناء الحمل. زيادة الوزن طبيعية وضرورية. المؤشر قبل الحمل يُستخدم كمرجع لتحديد زيادة الوزن الموصى بها (11-16 كغ للمؤشر الطبيعي). استشيري طبيبة النساء للمتابعة الشخصية." },
    { question: "هل المؤشر نفسه للرياضيين؟", answer: "<strong>المؤشر متحيز للرياضيين</strong>. الصيغة لا تميز بين العضلات والدهون. يمكن أن يكون لدى لاعب كمال أجسام بنسبة دهون 10% مؤشر 30+ (مصنف سمنة). للرياضيين، فضّل <strong>FFMI</strong> أو نسبة الدهون أو محيط الخصر. راجع صفحة <a href='/ar/imc-riyadi' class='text-primary hover:underline'>مؤشر كتلة الجسم للرياضيين</a>." },
    { question: "من أي مؤشر تبدأ زيادة الوزن؟", answer: "<strong>زيادة الوزن</strong> تبدأ عند مؤشر <strong>25</strong>. بين 25 و 29.9 هي زيادة وزن (أو ما قبل السمنة). من 30 فصاعداً هي سمنة. هذه العتبات محددة من منظمة الصحة العالمية ومستخدمة عالمياً." },
    { question: "من أي مؤشر تبدأ السمنة؟", answer: "<strong>السمنة</strong> تبدأ عند مؤشر <strong>30</strong>. تنقسم إلى ثلاث درجات: الأولى (30-34.9) = سمنة معتدلة، الثانية (35-39.9) = سمنة شديدة، الثالثة (≥40) = سمنة مرضية. كلما ارتفع المؤشر، زادت المخاطر الصحية." },
    { question: "كيف أفقد الوزن بفعالية؟", answer: "لفقدان الوزن بشكل مستدام: <strong>1)</strong> أنشئ عجزاً معتدلاً في السعرات (300-500 كيلو كالوري/يوم)، <strong>2)</strong> فضّل نظاماً غذائياً متوازناً غنياً بالبروتين، <strong>3)</strong> مارس نشاطاً بدنياً منتظماً (قلب + قوة)، <strong>4)</strong> نم بما يكفي (7-8 ساعات)، <strong>5)</strong> تحلَّ بالصبر: استهدف 0.5-1 كغ/أسبوع كحد أقصى." },
    { question: "هل محيط الخصر أهم من المؤشر؟", answer: "محيط الخصر <strong>مكمل ممتاز</strong> للمؤشر. يقيس الدهون الحشوية التي تعتبر أخطر على الصحة. العتبات الموصى بها: الرجال &lt;94 سم (خطر معتدل)، &lt;102 سم (خطر مرتفع). النساء &lt;80 سم (خطر معتدل)، &lt;88 سم (خطر مرتفع)." },
    { question: "هل يتغير المؤشر مع العمر؟", answer: "صيغة المؤشر تبقى نفسها، لكن <strong>تفسيره قد يختلف</strong>. بعد 65 عاماً، مؤشر أعلى قليلاً (حتى 27) قد يكون وقائياً. مع التقدم في العمر، تنخفض كتلة العضلات مما قد يُحرف المؤشر. يُنصح بالمتابعة الطبية المنتظمة." },
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-4xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            الأسئلة الشائعة
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">أسئلة شائعة عن مؤشر كتلة الجسم FAQ</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            إجابات على الأسئلة الأكثر شيوعاً حول مؤشر كتلة الجسم
          </p>
        </header>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">احسب مؤشر كتلة جسمك الآن</h3>
          <p className="text-muted-foreground mb-6">استخدم حاسبتنا المجانية لمعرفة مؤشر كتلة جسمك</p>
          <Link to="/ar/imc" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">احسب مؤشري</Link>
        </div>

        <div className="glass-card p-8 mt-8">
          <h2 className="text-2xl font-display font-bold mb-6">كل شيء عن مؤشر كتلة الجسم</h2>
          <div className="text-muted-foreground space-y-4">
            <p>هذه <strong>الأسئلة الشائعة عن مؤشر كتلة الجسم</strong> تجيب على الأسئلة الأكثر شيوعاً حول حساب وتفسير المؤشر. سواء كنت تريد معرفة <strong>كيفية حساب المؤشر</strong> أو <strong>ما هو المؤشر المثالي</strong> أو <strong>هل المؤشر موثوق</strong>، ستجد الإجابات هنا.</p>
            <p>المؤشر أداة بسيطة ولكنها مفيدة لتقييم كتلة جسمك. ومع ذلك، له حدوده ويجب تكميله بمؤشرات أخرى. لا تتردد في استشارة متخصص للحصول على تقييم شامل.</p>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 أسئلة شائعة عن مؤشر كتلة الجسم - إجابات لأسئلتكم</p>
        </footer>
      </div>
    </div>
  );
};

export default AsilaIMC;
