import { Header } from "@/components/Header";
import { Table, Scale, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const BMITalika = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Table className="w-4 h-4" />
            WHO वर्गीकरण
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">BMI तालिका</span> : संपूर्ण वर्गीकरण
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            विश्व स्वास्थ्य संगठन के अनुसार BMI श्रेणियों की पूर्ण तालिका
          </p>
        </header>

        <div className="space-y-8">
          {/* Main Table */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">BMI का अंतर्राष्ट्रीय वर्गीकरण (वयस्क)</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold">वर्गीकरण</th>
                    <th className="text-left py-4 px-4 font-bold">BMI (kg/m²)</th>
                    <th className="text-left py-4 px-4 font-bold">सह-रुग्णता का जोखिम</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">गंभीर कम वजन</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">&lt; 16,0</td>
                    <td className="py-4 px-4 text-info">उच्च (कुपोषण)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">मध्यम कम वजन</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">16,0 - 16,9</td>
                    <td className="py-4 px-4 text-info">मध्यम</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">हल्का कम वजन</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">17,0 - 18,4</td>
                    <td className="py-4 px-4 text-info">कम</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-success" />
                        <span className="font-bold text-success">सामान्य वजन</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-success">18,5 - 24,9</td>
                    <td className="py-4 px-4 text-success">कम (संदर्भ)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-warning" />
                        <span className="font-medium">अधिक वजन (पूर्व-मोटापा)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">25,0 - 29,9</td>
                    <td className="py-4 px-4 text-warning">बढ़ा हुआ</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">मोटापा श्रेणी I (मध्यम)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">30,0 - 34,9</td>
                    <td className="py-4 px-4 text-destructive">उच्च</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">मोटापा श्रेणी II (गंभीर)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">35,0 - 39,9</td>
                    <td className="py-4 px-4 text-destructive">बहुत उच्च</td>
                  </tr>
                  <tr className="bg-destructive/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">मोटापा श्रेणी III (अत्यधिक)</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">≥ 40,0</td>
                    <td className="py-4 px-4 text-destructive">अत्यंत उच्च</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              स्रोत : विश्व स्वास्थ्य संगठन (WHO)
            </p>
          </div>

          {/* Weight examples by height */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">वजन / ऊँचाई तालिका</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              प्रत्येक BMI श्रेणी के लिए ऊँचाई और वजन सीमा का पत्राचार :
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-3 font-bold">ऊँचाई</th>
                    <th className="text-left py-3 px-3 font-bold text-info">कम वजन<br />&lt;18,5</th>
                    <th className="text-left py-3 px-3 font-bold text-success">सामान्य<br />18,5-24,9</th>
                    <th className="text-left py-3 px-3 font-bold text-warning">अधिक वजन<br />25-29,9</th>
                    <th className="text-left py-3 px-3 font-bold text-destructive">मोटापा<br />≥30</th>
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
                      <td className="py-3 px-3 font-bold">{row.h} cm</td>
                      <td className="py-3 px-3 text-info">&lt;{row.u} kg</td>
                      <td className="py-3 px-3 text-success">{row.nMin}-{row.nMax} kg</td>
                      <td className="py-3 px-3 text-warning">{row.sMin}-{row.sMax} kg</td>
                      <td className="py-3 px-3 text-destructive">&gt;{row.o} kg</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Edge cases */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">सीमा मामले और अपवाद</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold">BMI इनके लिए उपयुक्त नहीं है :</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>मांसपेशीय खिलाड़ी</strong> : मांसपेशी द्रव्यमान = BMI अधिक आंका जाता है</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>गर्भवती महिलाएँ</strong> : सामान्य वजन वृद्धि</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>वृद्ध व्यक्ति</strong> : मांसपेशी द्रव्यमान में कमी</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>बच्चे/किशोर</strong> : विशेष वक्र आवश्यक</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold">पूरक संकेतक :</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>कमर की परिधि</strong> : पेट की चर्बी</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>शरीर में वसा %</strong> : शारीरिक संरचना</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>कमर/कूल्हे का अनुपात</strong> : वसा वितरण</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>FFMI</strong> : खिलाड़ियों के लिए</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO / Understanding section */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">BMI तालिका को समझें</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>WHO BMI तालिका</strong> शारीरिक संरचना को वर्गीकृत करने के लिए अंतर्राष्ट्रीय संदर्भ है।
                यह <strong>बॉडी मास इंडेक्स तालिका</strong> <strong>कम वजन</strong>,
                <strong>सामान्य वजन</strong>, <strong>अधिक वजन</strong> और <strong>मोटापा</strong> की सीमाएँ निर्धारित करती है।
              </p>
              <p>
                <strong>BMI वर्गीकरण</strong> कम वजन के तीन स्तरों (गंभीर, मध्यम, हल्का)
                और मोटापे की तीन श्रेणियों (I, II, III) में अंतर करता है। <strong>वयस्क BMI तालिका</strong> 18 वर्ष
                से अधिक आयु के व्यक्तियों पर लागू होती है।
              </p>
              <p>
                अपने परिणाम की व्याख्या करने के लिए, ऊपर दी गई <strong>BMI पत्राचार तालिका</strong> देखें।
                <strong>वजन ऊँचाई BMI तालिका</strong> से आप सीधे देख सकते हैं कि आपकी ऊँचाई के लिए
                कौन सा वजन किस श्रेणी में आता है।
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="glass-card p-8 text-center">
            <h2 className="text-2xl font-display font-bold mb-4">अपना BMI कैलकुलेट करें</h2>
            <p className="text-muted-foreground mb-6">
              हमारे मुफ़्त कैलकुलेटर का उपयोग करें और तुरंत जानें कि आप किस श्रेणी में हैं।
            </p>
            <Link
              to="/hi/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              <Scale className="w-5 h-5" />
              BMI कैलकुलेटर
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI तालिका</p>
        </footer>
      </div>
    </div>
  );
};

export default BMITalika;
