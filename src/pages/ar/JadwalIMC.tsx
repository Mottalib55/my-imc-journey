import { Header } from "@/components/Header";
import { Table, Scale, AlertTriangle, CheckCircle2 } from "lucide-react";

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
            <span className="gradient-text">جدول مؤشر كتلة الجسم</span>: تصنيف منظمة الصحة العالمية
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            الجدول الكامل لفئات مؤشر كتلة الجسم وفقاً لمنظمة الصحة العالمية
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
            <p className="text-xs text-muted-foreground mt-4">المصدر: منظمة الصحة العالمية (WHO)</p>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">جدول الوزن / الطول</h2>
            </div>
            <p className="text-muted-foreground mb-6">التوافق بين الطول ونطاق الوزن لكل فئة:</p>
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
                    { h: 155, u: 44, nMin: 44, nMax: 60, sMin: 60, sMax: 72, o: 72 },
                    { h: 160, u: 47, nMin: 47, nMax: 64, sMin: 64, sMax: 77, o: 77 },
                    { h: 165, u: 50, nMin: 50, nMax: 68, sMin: 68, sMax: 81, o: 81 },
                    { h: 170, u: 53, nMin: 53, nMax: 72, sMin: 72, sMax: 87, o: 87 },
                    { h: 175, u: 57, nMin: 57, nMax: 76, sMin: 76, sMax: 92, o: 92 },
                    { h: 180, u: 60, nMin: 60, nMax: 81, sMin: 81, sMax: 97, o: 97 },
                    { h: 185, u: 63, nMin: 63, nMax: 85, sMin: 85, sMax: 102, o: 102 },
                    { h: 190, u: 67, nMin: 67, nMax: 90, sMin: 90, sMax: 108, o: 108 },
                  ].map((row) => (
                    <tr key={row.h} className="border-b border-border/50">
                      <td className="py-3 px-3 font-bold">{row.h} سم</td>
                      <td className="py-3 px-3 text-info">&lt;{row.u} كغ</td>
                      <td className="py-3 px-3 text-success">{row.nMin}-{row.nMax} كغ</td>
                      <td className="py-3 px-3 text-warning">{row.sMin}-{row.sMax} كغ</td>
                      <td className="py-3 px-3 text-destructive">&gt;{row.o} كغ</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">فهم جدول مؤشر كتلة الجسم</h2>
            <div className="text-muted-foreground space-y-4">
              <p><strong>جدول مؤشر كتلة الجسم لمنظمة الصحة العالمية</strong> هو المرجع الدولي لتصنيف كتلة الجسم. يحدد هذا الجدول عتبات <strong>نقص الوزن</strong> و<strong>الوزن الطبيعي</strong> و<strong>زيادة الوزن</strong> و<strong>السمنة</strong>.</p>
              <p>يميز <strong>تصنيف المؤشر</strong> ثلاثة مستويات لنقص الوزن (شديد، متوسط، خفيف) وثلاث درجات للسمنة (الأولى، الثانية، الثالثة). ينطبق الجدول على الأشخاص فوق 18 عاماً.</p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 جدول مؤشر كتلة الجسم - تصنيف منظمة الصحة العالمية الرسمي</p>
        </footer>
      </div>
    </div>
  );
};

export default JadwalIMC;
