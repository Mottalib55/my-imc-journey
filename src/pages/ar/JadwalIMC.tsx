import { Header } from "@/components/Header";
import { Table, Scale, AlertTriangle, CheckCircle2, Globe } from "lucide-react";
import { RelatedPages } from "@/components/RelatedPages";

const JadwalIMC = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Table className="w-4 h-4" />
            تصنيف منظمة الصحة العالمية الرسمي
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">جدول مؤشر كتلة الجسم</span> : تصنيف WHO الكامل
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            تصنيف منظمة الصحة العالمية المعتمد في الدول العربية. الكويت 37.9% سمنة، السعودية 35.4%، مصر 32%.
          </p>
        </header>

        <div className="space-y-8">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">التصنيف الدولي لمؤشر كتلة الجسم (البالغون)</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-right py-4 px-4 font-bold">التصنيف</th>
                    <th className="text-right py-4 px-4 font-bold">المؤشر (كغ/م²)</th>
                    <th className="text-right py-4 px-4 font-bold">خطر الأمراض المصاحبة</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4"><div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-info" /><span className="font-medium">نقص وزن شديد</span></div></td>
                    <td className="py-4 px-4 font-mono">&lt; 16.0</td>
                    <td className="py-4 px-4 text-info">مرتفع (سوء تغذية)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4"><div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-info" /><span className="font-medium">نقص وزن متوسط</span></div></td>
                    <td className="py-4 px-4 font-mono">16.0 - 16.9</td>
                    <td className="py-4 px-4 text-info">متوسط</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4"><div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-info" /><span className="font-medium">نقص وزن خفيف</span></div></td>
                    <td className="py-4 px-4 font-mono">17.0 - 18.4</td>
                    <td className="py-4 px-4 text-info">منخفض</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/10">
                    <td className="py-4 px-4"><div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-success" /><span className="font-bold text-success">وزن طبيعي</span></div></td>
                    <td className="py-4 px-4 font-mono font-bold text-success">18.5 - 24.9</td>
                    <td className="py-4 px-4 text-success">منخفض (مرجعي)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-4 px-4"><div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-warning" /><span className="font-medium">زيادة وزن (ما قبل السمنة)</span></div></td>
                    <td className="py-4 px-4 font-mono">25.0 - 29.9</td>
                    <td className="py-4 px-4 text-warning">متزايد</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4"><div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-destructive" /><span className="font-medium">سمنة درجة أولى (معتدلة)</span></div></td>
                    <td className="py-4 px-4 font-mono">30.0 - 34.9</td>
                    <td className="py-4 px-4 text-destructive">مرتفع</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4"><div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-destructive" /><span className="font-medium">سمنة درجة ثانية (شديدة)</span></div></td>
                    <td className="py-4 px-4 font-mono">35.0 - 39.9</td>
                    <td className="py-4 px-4 text-destructive">مرتفع جداً</td>
                  </tr>
                  <tr className="bg-destructive/10">
                    <td className="py-4 px-4"><div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-destructive" /><span className="font-medium">سمنة درجة ثالثة (مرضية)</span></div></td>
                    <td className="py-4 px-4 font-mono">≥ 40.0</td>
                    <td className="py-4 px-4 text-destructive">شديد جداً</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">المصدر: منظمة الصحة العالمية (WHO) - المكتب الإقليمي لشرق المتوسط (EMRO)</p>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">جدول الوزن / الطول حسب المعدلات العربية</h2>
            </div>
            <p className="text-muted-foreground mb-6">التوافق بين الطول ونطاق الوزن لكل فئة، مع تمييز الأطوال الشائعة في المنطقة العربية:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-right py-3 px-3 font-bold">الطول</th>
                    <th className="text-right py-3 px-3 font-bold text-info">نقص وزن<br />&lt;18.5</th>
                    <th className="text-right py-3 px-3 font-bold text-success">طبيعي<br />18.5-24.9</th>
                    <th className="text-right py-3 px-3 font-bold text-warning">زيادة وزن<br />25-29.9</th>
                    <th className="text-right py-3 px-3 font-bold text-destructive">سمنة<br />≥30</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { h: 155, u: 44, nMin: 44, nMax: 60, sMin: 60, sMax: 72, o: 72, highlight: false },
                    { h: 160, u: 47, nMin: 47, nMax: 64, sMin: 64, sMax: 77, o: 77, highlight: true, label: "معدل الإناث (الخليج)" },
                    { h: 165, u: 50, nMin: 50, nMax: 68, sMin: 68, sMax: 81, o: 81, highlight: false },
                    { h: 170, u: 53, nMin: 53, nMax: 72, sMin: 72, sMax: 87, o: 87, highlight: false },
                    { h: 174, u: 56, nMin: 56, nMax: 75, sMin: 75, sMax: 91, o: 91, highlight: true, label: "معدل الذكور (السعودية/الخليج)" },
                    { h: 175, u: 57, nMin: 57, nMax: 76, sMin: 76, sMax: 92, o: 92, highlight: false },
                    { h: 180, u: 60, nMin: 60, nMax: 81, sMin: 81, sMax: 97, o: 97, highlight: false },
                    { h: 185, u: 63, nMin: 63, nMax: 85, sMin: 85, sMax: 102, o: 102, highlight: false },
                    { h: 190, u: 67, nMin: 67, nMax: 90, sMin: 90, sMax: 108, o: 108, highlight: false },
                  ].map((row) => (
                    <tr key={row.h} className={`border-b border-border/50 ${row.highlight ? "bg-primary/10 font-semibold" : ""}`}>
                      <td className="py-3 px-3 font-bold">
                        {row.h} سم
                        {row.highlight && <span className="block text-xs text-primary font-normal">{row.label}</span>}
                      </td>
                      <td className="py-3 px-3 text-info">&lt;{row.u} كغ</td>
                      <td className="py-3 px-3 text-success">{row.nMin}-{row.nMax} كغ</td>
                      <td className="py-3 px-3 text-warning">{row.sMin}-{row.sMax} كغ</td>
                      <td className="py-3 px-3 text-destructive">&gt;{row.o} كغ</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">الأسطر المميزة تمثل متوسط الطول في دول الخليج العربي (ذكور: 174 سم، إناث: 160 سم)</p>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Globe className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">انتشار السمنة في العالم العربي</h2>
            </div>
            <div className="text-muted-foreground space-y-4 mb-6">
              <p>تحتل دول الخليج العربي مراتب متقدمة عالمياً في نسب السمنة وفقاً لبيانات <strong>المكتب الإقليمي لمنظمة الصحة العالمية لشرق المتوسط (WHO EMRO)</strong>. هذا الوضع مرتبط بتغيرات نمط الحياة السريعة والتحضر والعادات الغذائية الحديثة.</p>
            </div>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-right py-3 px-4 font-bold">الدولة</th>
                    <th className="text-right py-3 px-4 font-bold">نسبة السمنة (BMI ≥ 30)</th>
                    <th className="text-right py-3 px-4 font-bold">الترتيب عربياً</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { country: "الكويت", rate: "37.9%", rank: 1, color: "text-destructive" },
                    { country: "السعودية", rate: "35.4%", rank: 2, color: "text-destructive" },
                    { country: "مصر", rate: "32.0%", rank: 3, color: "text-destructive" },
                    { country: "الإمارات", rate: "31.7%", rank: 4, color: "text-destructive" },
                    { country: "البحرين", rate: "29.8%", rank: 5, color: "text-warning" },
                    { country: "الأردن", rate: "28.3%", rank: 6, color: "text-warning" },
                    { country: "ليبيا", rate: "27.8%", rank: 7, color: "text-warning" },
                    { country: "لبنان", rate: "27.4%", rank: 8, color: "text-warning" },
                  ].map((row) => (
                    <tr key={row.country} className={`border-b border-border/50 ${row.rank <= 2 ? "bg-destructive/5" : ""}`}>
                      <td className="py-3 px-4 font-medium">{row.country}</td>
                      <td className={`py-3 px-4 font-mono font-bold ${row.color}`}>{row.rate}</td>
                      <td className="py-3 px-4 text-center">{row.rank}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/20">
                <h4 className="font-bold text-destructive mb-2">دول الخليج: من أعلى المعدلات عالمياً</h4>
                <p className="text-sm text-muted-foreground">تصنف دول الخليج العربي ضمن أعلى 20 دولة في العالم من حيث معدلات السمنة. يعود ذلك إلى الثروة النفطية التي غيرت أنماط الحياة بشكل جذري خلال عقود قليلة، مع انتشار الوجبات السريعة وقلة النشاط البدني بسبب المناخ الحار واعتماد السيارات.</p>
              </div>
              <div className="p-4 rounded-xl bg-warning/5 border border-warning/20">
                <h4 className="font-bold text-warning mb-2">عوامل مساهمة في المنطقة العربية</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>-- التحضر السريع وتغير نمط الحياة التقليدي</li>
                  <li>-- انتشار الوجبات السريعة والمشروبات السكرية</li>
                  <li>-- قلة النشاط البدني بسبب المناخ الحار</li>
                  <li>-- العادات الغذائية الثقافية (الولائم والمناسبات)</li>
                  <li>-- عوامل وراثية واستعداد جيني</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">المصدر: بيانات WHO EMRO - المكتب الإقليمي لمنظمة الصحة العالمية لشرق المتوسط</p>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">صيام رمضان وتأثيره على مؤشر كتلة الجسم</h2>
            </div>
            <div className="text-muted-foreground space-y-4 mb-6">
              <p>يُعد <strong>شهر رمضان</strong> فترة فريدة تؤثر على مؤشر كتلة الجسم لدى أكثر من 1.8 مليار مسلم حول العالم. تشير الدراسات الطبية إلى تأثيرات متعددة للصيام المتقطع خلال هذا الشهر على الوزن وتكوين الجسم.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 rounded-xl bg-success/5 border border-success/20">
                <h4 className="font-bold text-success mb-2">فقدان الوزن المؤقت</h4>
                <p className="text-sm text-muted-foreground">أظهرت دراسات أن الصائمين يفقدون في المتوسط 1.2 إلى 3.5 كغ خلال شهر رمضان. هذا الفقدان يشمل الدهون والسوائل وجزءاً من الكتلة العضلية، لكنه غالباً ما يكون مؤقتاً.</p>
              </div>
              <div className="p-4 rounded-xl bg-warning/5 border border-warning/20">
                <h4 className="font-bold text-warning mb-2">تأثير الولائم والإفطار</h4>
                <p className="text-sm text-muted-foreground">في المقابل، قد يزيد بعض الصائمين وزناً بسبب الإفراط في وجبة الإفطار والسحور، وتناول الحلويات العربية التقليدية الغنية بالسكر والدهون مثل القطايف والكنافة والمعمول.</p>
              </div>
              <div className="p-4 rounded-xl bg-info/5 border border-info/20">
                <h4 className="font-bold text-info mb-2">ما بعد رمضان</h4>
                <p className="text-sm text-muted-foreground">تشير الأبحاث إلى أن معظم من فقدوا وزناً خلال رمضان يستعيدونه خلال 2-5 أسابيع بعد عيد الفطر. النتيجة الصافية على المؤشر السنوي تكون محدودة ما لم يُتبع بنظام غذائي منتظم.</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
              <h4 className="font-bold mb-2">نصائح لصيام صحي يحافظ على مؤشر كتلة جسم طبيعي</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span>تناول إفطار متوازن: بدء بالتمر والماء، ثم حساء خفيف، ثم وجبة معتدلة الكمية</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span>تجنب الإفراط في الحلويات والمقليات والمشروبات السكرية</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span>ممارسة رياضة خفيفة بعد الإفطار بساعتين (مشي 30 دقيقة)</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span>سحور غني بالبروتين والألياف للحفاظ على الشبع أثناء الصيام</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span>شرب كمية كافية من الماء بين الإفطار والسحور (8 أكواب)</span></li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">الحالات الخاصة والاستثناءات</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold">المؤشر غير مناسب لـ:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span><strong>الرياضيين العضليين</strong>: كتلة العضلات = مؤشر مبالغ فيه</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span><strong>الحوامل</strong>: زيادة الوزن طبيعية</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span><strong>كبار السن</strong>: فقدان كتلة العضلات</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" /><span><strong>الأطفال/المراهقون</strong>: منحنيات خاصة مطلوبة</span></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold">مؤشرات مكملة:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span><strong>محيط الخصر</strong>: دهون البطن</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span><strong>نسبة الدهون</strong>: تكوين الجسم</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span><strong>نسبة الخصر/الورك</strong>: توزيع الدهون</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" /><span><strong>FFMI</strong>: للرياضيين</span></li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-info/5 border border-info/20">
              <h4 className="font-bold text-info mb-2">إرشادات WHO EMRO للسكان العرب</h4>
              <p className="text-sm text-muted-foreground">تشير إرشادات المكتب الإقليمي لمنظمة الصحة العالمية لشرق المتوسط إلى أن تكوين الجسم لدى سكان المنطقة العربية قد يختلف عن المعايير الغربية. أظهرت دراسات أن نسبة الدهون في الجسم قد تكون أعلى عند نفس مؤشر كتلة الجسم مقارنة بالسكان الأوروبيين، مما يعني أن عتبة خطر الأمراض المزمنة كالسكري من النوع الثاني وأمراض القلب قد تبدأ عند مؤشر أقل من 25 لدى بعض الفئات. لذلك يُنصح بقياس محيط الخصر كمؤشر مكمل: أقل من 94 سم للرجال و80 سم للنساء.</p>
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">جدول مؤشر كتلة الجسم : دليل شامل للعالم العربي</h2>
            <div className="text-muted-foreground space-y-4">
              <p><strong>جدول مؤشر كتلة الجسم لمنظمة الصحة العالمية</strong> هو المرجع الدولي لتصنيف كتلة الجسم. يحدد هذا الجدول عتبات <strong>نقص الوزن</strong> و<strong>الوزن الطبيعي</strong> و<strong>زيادة الوزن</strong> و<strong>السمنة</strong>. تعتمد وزارات الصحة في الدول العربية على هذا التصنيف وفقاً لإرشادات <strong>WHO EMRO</strong> (المكتب الإقليمي لشرق المتوسط).</p>
              <p>يميز <strong>تصنيف المؤشر</strong> ثلاثة مستويات لنقص الوزن (شديد، متوسط، خفيف) وثلاث درجات للسمنة (الأولى، الثانية، الثالثة). ينطبق الجدول على الأشخاص فوق 18 عاماً.</p>
              <p>في ظل ارتفاع معدلات <strong>السمنة في العالم العربي</strong> -- حيث تتصدر الكويت بنسبة 37.9% والسعودية بنسبة 35.4% -- يصبح فهم <strong>جدول مؤشر كتلة الجسم</strong> ضرورة صحية ملحة. تعمل مؤسسات الصحة العربية بالتعاون مع <strong>منظمة الصحة العالمية</strong> على برامج توعوية لمكافحة السمنة وتعزيز أنماط الحياة الصحية في المنطقة.</p>
            </div>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 جدول مؤشر كتلة الجسم - تصنيف منظمة الصحة العالمية الرسمي - بيانات WHO EMRO</p>
        </footer>
      </div>
    </div>
  );
};

export default JadwalIMC;
