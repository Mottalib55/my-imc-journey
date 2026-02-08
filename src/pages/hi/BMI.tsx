import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Calculator, Activity, Target, BookOpen, Scale, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";

const BMIHi = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weightKg, setWeightKg] = useState(70);
  const [heightCm, setHeightCm] = useState(170);

  const calculateBMI = useCallback((wKg: number, hCm: number) => {
    const heightInM = hCm / 100;
    const calculatedBmi = wKg / (heightInM * heightInM);
    setBmi(calculatedBmi);
  }, []);

  // Calculate BMI on initial load
  useEffect(() => {
    calculateBMI(weightKg, heightCm);
  }, []);

  const handleWeightChange = (value: number[]) => {
    setWeightKg(value[0]);
    calculateBMI(value[0], heightCm);
  };

  const handleHeightChange = (value: number[]) => {
    setHeightCm(value[0]);
    calculateBMI(weightKg, value[0]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            रियल-टाइम सिम्युलेटर
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">अपना BMI कैलकुलेट करें</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            व्यक्तिगत सुझावों के साथ अपना बॉडी मास इंडेक्स तुरंत जानें
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary" />
              अपनी माप दर्ज करें
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">वज़न</label>
                  <span className="text-2xl font-bold text-primary">{weightKg} kg</span>
                </div>
                <Slider
                  value={[weightKg]}
                  onValueChange={handleWeightChange}
                  min={30}
                  max={200}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>30 kg</span>
                  <span>200 kg</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">लंबाई</label>
                  <span className="text-2xl font-bold text-primary">{(heightCm / 100).toFixed(2)} m</span>
                </div>
                <Slider
                  value={[heightCm]}
                  onValueChange={handleHeightChange}
                  min={100}
                  max={220}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>100 cm</span>
                  <span>220 cm</span>
                </div>
              </div>
            </div>
          </div>

          <BMIGauge bmi={bmi} />
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* What is BMI */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI क्या है?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>BMI (बॉडी मास इंडेक्स)</strong> एक सरल माप है जो आपकी लंबाई और वज़न का उपयोग करके यह अनुमान लगाता है कि आपका वज़न स्वस्थ है या नहीं। <strong>BMI फॉर्मूला</strong> आपके वज़न (किलोग्राम में) को आपकी लंबाई (मीटर में) के वर्ग से विभाजित करता है।
              </p>
              <p>
                <strong>BMI की गणना</strong> 1830 के दशक में बेल्जियम के गणितज्ञ एडॉल्फ क्वेटलेट ने विकसित की थी। आज इसका उपयोग दुनिया भर के डॉक्टर और स्वास्थ्य संगठन वज़न श्रेणियों की त्वरित जांच के लिए करते हैं।
              </p>
            </div>
          </div>

          {/* BMI Categories */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI श्रेणियां (WHO)</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">श्रेणी</th>
                    <th className="text-left py-3 px-4 font-bold">BMI सीमा</th>
                    <th className="text-left py-3 px-4 font-bold">स्वास्थ्य जोखिम</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      कम वजन
                    </td>
                    <td className="py-3 px-4">&lt; 18.5</td>
                    <td className="py-3 px-4 text-info">कुपोषण का खतरा</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      सामान्य
                    </td>
                    <td className="py-3 px-4">18.5 - 24.9</td>
                    <td className="py-3 px-4 text-success">कम जोखिम</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      अधिक वजन
                    </td>
                    <td className="py-3 px-4">25 - 29.9</td>
                    <td className="py-3 px-4 text-warning">बढ़ा हुआ जोखिम</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      मोटापा श्रेणी I
                    </td>
                    <td className="py-3 px-4">30 - 34.9</td>
                    <td className="py-3 px-4 text-destructive">उच्च जोखिम</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      मोटापा श्रेणी II
                    </td>
                    <td className="py-3 px-4">35 - 39.9</td>
                    <td className="py-3 px-4 text-destructive">बहुत उच्च जोखिम</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      मोटापा श्रेणी III
                    </td>
                    <td className="py-3 px-4">&ge; 40</td>
                    <td className="py-3 px-4 text-destructive">अत्यधिक उच्च जोखिम</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* How to calculate */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI की गणना कैसे करें</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p><strong>BMI का फॉर्मूला</strong> सरल है:</p>
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-primary">BMI = वज़न (kg) &divide; लंबाई&sup2; (m)</p>
              </div>
              <p>
                उदाहरण के लिए, यदि आपका वज़न 70 kg है और लंबाई 1.75 m है:<br />
                BMI = 70 &divide; (1.75 &times; 1.75) = 70 &divide; 3.0625 = <strong>22.9</strong>
              </p>
            </div>
          </div>

          {/* Links to other pages */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/hi/bmi-purush" className="glass-card p-6 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Activity className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-bold">पुरुषों के लिए BMI</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                पुरुष शरीर संरचना के लिए विशेष विचार
              </p>
            </Link>

            <Link to="/hi/bmi-mahila" className="glass-card p-6 hover:border-pink-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-pink-500/10">
                  <Activity className="w-5 h-5 text-pink-500" />
                </div>
                <h3 className="font-bold">महिलाओं के लिए BMI</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                हार्मोनल कारकों के साथ BMI को समझना
              </p>
            </Link>

            <Link to="/hi/bmi-khiladi" className="glass-card p-6 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-bold">खिलाड़ियों के लिए BMI</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                मांसपेशियों वाले लोगों के लिए BMI क्यों सही नहीं होता
              </p>
            </Link>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">अपना बॉडी मास इंडेक्स समझें</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>BMI कैलकुलेटर</strong> आपके वज़न की स्थिति को समझने के लिए एक आवश्यक उपकरण है। चाहे आप <strong>मुफ्त BMI कैलकुलेटर</strong> खोज रहे हों, अपना <strong>आदर्श BMI</strong> जानना चाहते हों, या बस जल्दी से <strong>BMI कैलकुलेट</strong> करना चाहते हों, हमारा टूल तुरंत परिणाम देता है।
              </p>
              <p>
                <strong>अच्छा BMI क्या होता है</strong>? एक <strong>स्वस्थ BMI</strong> 18.5 और 24.9 के बीच होता है। <strong>BMI चार्ट</strong> दिखाता है कि <strong>सामान्य BMI</strong> का मतलब है कि आपकी लंबाई के अनुसार आपका वज़न स्वस्थ है। यह जानने के लिए हमारे <strong>BMI चेकर</strong> का उपयोग करें।
              </p>
              <p>
                <strong>बॉडी मास इंडेक्स कैलकुलेटर</strong> WHO द्वारा मान्यता प्राप्त मानक <strong>BMI समीकरण</strong> का उपयोग करता है। हालांकि <strong>BMI स्केल</strong> उपयोगी है, याद रखें कि यह मांसपेशियों के द्रव्यमान, उम्र या शरीर की संरचना को ध्यान में नहीं रखता।
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 BMI कैलकुलेटर</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIHi;
