import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Dumbbell, AlertTriangle, Target, Scale, Activity, TrendingUp } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const BMIKhiladi = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(85);
  const [height, setHeight] = useState(180);

  const calculateBMI = useCallback((w: number, h: number) => {
    const heightInM = h / 100;
    const calculatedBmi = w / (heightInM * heightInM);
    setBmi(calculatedBmi);
  }, []);

  // Calculate BMI on initial load
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

  // Calculate FFMI estimation
  const fatFreeMass = weight * 0.85;
  const ffmi = weight && height ? fatFreeMass / Math.pow(height / 100, 2) : null;
  const normalizedFfmi = ffmi ? ffmi + 6.1 * (1.8 - height / 100) : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6">
            <Dumbbell className="w-4 h-4" />
            खिलाड़ियों के लिए BMI
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-orange-500">खिलाड़ियों के लिए BMI</span>: BMI खिलाड़ियों को क्यों भ्रमित करता है
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            BMI मांसपेशियों वाले लोगों के लिए क्यों काम नहीं करता और कौन से विकल्प उपयोग करें
          </p>
        </header>

        {/* Warning Banner */}
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-orange-500 mb-2">चेतावनी: BMI खिलाड़ियों के लिए भ्रामक है</h3>
              <p className="text-muted-foreground">
                BMI <strong>मांसपेशियों के वजन</strong> और <strong>वसा के वजन</strong> में अंतर नहीं करता।
                एक मांसपेशियों वाला खिलाड़ी "अधिक वजन" या "मोटापा" BMI दिखा सकता है जबकि वह उत्कृष्ट स्वास्थ्य में हो।
              </p>
            </div>
          </div>
        </div>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-orange-500" />
              अपनी माप दर्ज करें
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">वजन</label>
                  <span className="text-2xl font-bold text-orange-500">{weight} kg</span>
                </div>
                <Slider
                  value={[weight]}
                  onValueChange={handleWeightChange}
                  min={50}
                  max={200}
                  step={1}
                  className="py-4"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">लंबाई</label>
                  <span className="text-2xl font-bold text-orange-500">{height} cm</span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={handleHeightChange}
                  min={150}
                  max={220}
                  step={1}
                  className="py-4"
                />
              </div>
            </div>
          </div>

          <BMIGauge bmi={bmi} />
        </div>

        {/* FFMI Estimation */}
        {bmi && (
          <div className="glass-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-xl font-display font-bold">FFMI अनुमान (वसा-मुक्त द्रव्यमान सूचकांक)</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              FFMI खिलाड़ियों के लिए एक बेहतर संकेतक है क्योंकि यह दुबले द्रव्यमान को ध्यान में रखता है।
            </p>
            <div className="bg-muted/30 rounded-xl p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">अनुमानित FFMI (15% शरीर वसा मानकर)</p>
              <p className="text-3xl font-bold text-orange-500">{ffmi?.toFixed(1)}</p>
              <p className="text-xs text-muted-foreground mt-2">
                प्राकृतिक: 18-25 | संदिग्ध (संभावित डोपिंग): &gt;25
              </p>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="space-y-8">
          {/* Why BMI is biased */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Scale className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">खिलाड़ियों के लिए BMI क्यों विफल होता है</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>खिलाड़ियों का BMI</strong> समस्याग्रस्त है क्योंकि यह सूत्र मांसपेशियों के वजन और
                वसा के वजन के बीच कोई अंतर नहीं करता। हालांकि, <strong>मांसपेशी वसा से अधिक सघन होती है</strong>:
                समान आयतन में इसका वजन अधिक होता है।
              </p>
              <p>
                1.80 मीटर लंबा और 100 किलो वजन वाला एक बॉडीबिल्डर का <strong>BMI 30.9</strong> (मोटापा) होगा,
                भले ही उसके शरीर में केवल <strong>10% वसा</strong> हो और वह पूरी तरह स्वस्थ हो।
              </p>
            </div>
          </div>

          {/* Practical Examples */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Dumbbell className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">व्यावहारिक उदाहरण</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">रग्बी खिलाड़ी</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• लंबाई: 1.80 मी</li>
                  <li>• वजन: 100 kg</li>
                  <li>• BMI: 30.9 ("मोटापा")</li>
                  <li>• शरीर वसा: ~15%</li>
                  <li>• वास्तव में: उत्कृष्ट फिटनेस</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">मैराथन धावक</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• लंबाई: 1.75 मी</li>
                  <li>• वजन: 62 kg</li>
                  <li>• BMI: 20.2 ("सामान्य")</li>
                  <li>• शरीर वसा: ~8%</li>
                  <li>• BMI यहां अधिक सटीक है</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">बॉडीबिल्डिंग</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• BMI आमतौर पर 28-35</li>
                  <li>• शरीर वसा: 8-15%</li>
                  <li>• उत्कृष्ट स्वास्थ्य स्थिति</li>
                  <li>• BMI कहता है "मोटापा" = गलत परिणाम</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">क्रॉसफिट / शक्ति खेल</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• BMI आमतौर पर 26-30</li>
                  <li>• शरीर वसा: 12-18%</li>
                  <li>• उच्च एथलेटिक प्रदर्शन</li>
                  <li>• BMI प्रतिनिधित्व नहीं करता</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Alternatives Table */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Target className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">खिलाड़ियों के लिए BMI के विकल्प</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">विधि</th>
                    <th className="text-left py-3 px-4 font-bold">लाभ</th>
                    <th className="text-left py-3 px-4 font-bold">संदर्भ मान</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">FFMI</td>
                    <td className="py-3 px-4">केवल वसा-मुक्त द्रव्यमान को ध्यान में रखता है</td>
                    <td className="py-3 px-4">18-25 प्राकृतिक</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">शरीर वसा प्रतिशत</td>
                    <td className="py-3 px-4">शरीर की वसा का सीधा मापन</td>
                    <td className="py-3 px-4">पुरुष: 10-20% | महिला: 18-28%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">कमर की परिधि</td>
                    <td className="py-3 px-4">पेट की चर्बी का सरल संकेतक</td>
                    <td className="py-3 px-4">पुरुष: &lt;94 cm | महिला: &lt;80 cm</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">DEXA स्कैन</td>
                    <td className="py-3 px-4">सटीक शारीरिक संरचना विश्लेषण</td>
                    <td className="py-3 px-4">खिलाड़ियों के लिए स्वर्ण मानक</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FFMI Table */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">FFMI को समझें</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">FFMI सीमा</th>
                    <th className="text-left py-3 px-4 font-bold">वर्गीकरण</th>
                    <th className="text-left py-3 px-4 font-bold">विवरण</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">16-17</td>
                    <td className="py-3 px-4">औसत से कम</td>
                    <td className="py-3 px-4">कम मांसपेशी विकास</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">18-19</td>
                    <td className="py-3 px-4">औसत</td>
                    <td className="py-3 px-4">सामान्य अप्रशिक्षित पुरुष</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">20-21</td>
                    <td className="py-3 px-4">औसत से ऊपर</td>
                    <td className="py-3 px-4">स्पष्ट मांसपेशी परिभाषा</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 font-mono font-bold text-success">22-23</td>
                    <td className="py-3 px-4 text-success">उत्कृष्ट</td>
                    <td className="py-3 px-4">समर्पित भारोत्तोलक, शानदार शारीरिक बनावट</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">24-25</td>
                    <td className="py-3 px-4">श्रेष्ठ</td>
                    <td className="py-3 px-4">अधिकांश के लिए प्राकृतिक आनुवंशिक सीमा</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono">&gt;25</td>
                    <td className="py-3 px-4 text-warning">संदिग्ध</td>
                    <td className="py-3 px-4">प्राकृतिक रूप से दुर्लभ, संभावित डोपिंग उपयोग</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              नोट: 25 से ऊपर FFMI कुछ आनुवंशिक रूप से प्रतिभाशाली व्यक्तियों के लिए प्राकृतिक रूप से प्राप्त करने योग्य है, लेकिन यह दुर्लभ है।
            </p>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI और खिलाड़ी: आपको क्या जानना चाहिए</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>खिलाड़ियों के लिए BMI गणना</strong> अक्सर भ्रामक परिणाम देती है। चाहे आप
                <strong> बॉडीबिल्डिंग</strong>, <strong>क्रॉसफिट</strong>, <strong>रग्बी</strong> या कोई अन्य
                शक्ति खेल करते हों, आपका <strong>खिलाड़ी BMI</strong> संभवतः अधिक अनुमानित होगा।
              </p>
              <p>
                <strong>बॉडीबिल्डर का BMI</strong> विशेष रूप से भ्रामक है: एक प्राकृतिक बॉडीबिल्डर आसानी से
                27-28 BMI तक पहुंच सकता है जबकि वह दुबला-पतला हो। पेशेवर <strong>भारोत्तोलकों का BMI</strong>
                अक्सर 30 से अधिक होता है, जिसे "मोटापा" के रूप में वर्गीकृत किया जाता है जबकि शरीर वसा प्रतिशत न्यूनतम होता है।
              </p>
              <p>
                खिलाड़ियों के लिए, <strong>शरीर वसा प्रतिशत</strong>, <strong>FFMI</strong>
                (वसा-मुक्त द्रव्यमान सूचकांक) या सरल <strong>कमर की परिधि</strong> को प्राथमिकता दें। ये संकेतक
                आपकी शारीरिक संरचना और वास्तविक स्वास्थ्य स्थिति का मूल्यांकन करने के लिए अधिक प्रासंगिक हैं।
              </p>
              <p>
                <strong>क्या BMI खिलाड़ियों के लिए सटीक है</strong>? नहीं। <strong>BMI मांसपेशियों वाले लोगों के लिए क्यों काम नहीं करता</strong>?
                क्योंकि यह केवल कुल वजन को ध्यान में रखता है, संरचना को नहीं। एक <strong>मांसपेशियों वाला BMI</strong> हमेशा
                वास्तविक स्वास्थ्य स्थिति से अधिक दिखाई देगा।
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">यह भी देखें</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/hi/bmi" className="block p-4 rounded-xl border border-border hover:border-orange-500/50 transition-colors text-center">
                <p className="font-bold">BMI गणना</p>
                <p className="text-sm text-muted-foreground">सामान्य BMI कैलकुलेटर</p>
              </a>
              <a href="/hi/bmi-purush" className="block p-4 rounded-xl border border-border hover:border-orange-500/50 transition-colors text-center">
                <p className="font-bold">पुरुषों का BMI</p>
                <p className="text-sm text-muted-foreground">पुरुषों के लिए BMI गणना</p>
              </a>
              <a href="/hi/bmi-mahila" className="block p-4 rounded-xl border border-border hover:border-orange-500/50 transition-colors text-center">
                <p className="font-bold">महिलाओं का BMI</p>
                <p className="text-sm text-muted-foreground">महिलाओं के लिए BMI गणना</p>
              </a>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 खिलाड़ियों के लिए BMI</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIKhiladi;
