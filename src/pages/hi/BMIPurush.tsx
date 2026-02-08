import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { User, Dumbbell, Target, Heart, Scale, Activity, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const BMIPurush = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(80);
  const [height, setHeight] = useState(178);

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
    <div className="min-h-screen bg-background">
      <Header />

      {/* पृष्ठभूमि सजावट */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        {/* हेडर */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-6">
            <User className="w-4 h-4" />
            पुरुषों के लिए BMI
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-blue-500">पुरुषों के लिए BMI</span>: अपना सूचकांक जानें
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            पुरुषों के शारीरिक संरचना के अनुसार व्यक्तिगत सलाह के साथ BMI कैलकुलेटर
          </p>
        </header>

        {/* कैलकुलेटर */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-500" />
              अपना माप दर्ज करें
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">वजन</label>
                  <span className="text-2xl font-bold text-blue-500">{weight} kg</span>
                </div>
                <Slider
                  value={[weight]}
                  onValueChange={handleWeightChange}
                  min={40}
                  max={200}
                  step={1}
                  className="py-4"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">लंबाई</label>
                  <span className="text-2xl font-bold text-blue-500">{height} cm <span className="text-base font-normal text-muted-foreground">({(height / 100).toFixed(2)} m)</span></span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={handleHeightChange}
                  min={140}
                  max={220}
                  step={1}
                  className="py-4"
                />
              </div>
            </div>
          </div>

          <BMIGauge bmi={bmi} />
        </div>

        {/* सामग्री */}
        <div className="space-y-8">
          {/* पुरुषों में BMI को समझना */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <User className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">पुरुषों में BMI को समझना</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>पुरुषों का BMI</strong> महिलाओं की तरह ही गणना किया जाता है: वजन को लंबाई के वर्ग से विभाजित किया जाता है।
                हालांकि, व्याख्या भिन्न हो सकती है क्योंकि पुरुषों में स्वाभाविक रूप से <strong>अधिक मांसपेशी द्रव्यमान</strong>
                और <strong>कम शरीर वसा प्रतिशत</strong> (15-20% बनाम महिलाओं में 20-25%) होता है।
              </p>
              <p>
                एक पुरुष का <strong>BMI अधिक</strong> हो सकता है फिर भी वह उत्कृष्ट स्वास्थ्य में हो सकता है यदि वह
                नियमित व्यायाम या शक्ति प्रशिक्षण करता है। इसीलिए <strong>कमर की परिधि</strong> पुरुषों के लिए अक्सर
                एक बेहतर संकेतक होती है: यह <strong>94 cm</strong> (मध्यम जोखिम) या <strong>102 cm</strong> (उच्च जोखिम)
                से अधिक नहीं होनी चाहिए।
              </p>
            </div>
          </div>

          {/* पुरुषों के लिए BMI तालिका */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Scale className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">पुरुषों के लिए BMI तालिका</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">श्रेणी</th>
                    <th className="text-left py-3 px-4 font-semibold">BMI</th>
                    <th className="text-left py-3 px-4 font-semibold">उदाहरण (180 cm)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      कम वजन
                    </td>
                    <td className="py-3 px-4">&lt; 18.5</td>
                    <td className="py-3 px-4">&lt; 60 kg</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      सामान्य
                    </td>
                    <td className="py-3 px-4">18.5 - 24.9</td>
                    <td className="py-3 px-4">60 - 81 kg</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      अधिक वजन
                    </td>
                    <td className="py-3 px-4">25 - 29.9</td>
                    <td className="py-3 px-4">81 - 97 kg</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      मोटापा
                    </td>
                    <td className="py-3 px-4">&ge; 30</td>
                    <td className="py-3 px-4">&gt; 97 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* लंबाई के अनुसार आदर्श वजन */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">लंबाई के अनुसार पुरुषों का आदर्श वजन</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "165 cm", min: 50, max: 68, ideal: 60 },
                { height: "170 cm", min: 53, max: 72, ideal: 64 },
                { height: "175 cm", min: 57, max: 76, ideal: 67 },
                { height: "180 cm", min: 60, max: 81, ideal: 71 },
                { height: "185 cm", min: 63, max: 85, ideal: 75 },
                { height: "190 cm", min: 67, max: 90, ideal: 79 },
              ].map((item) => (
                <div key={item.height} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className="font-semibold text-blue-500">{item.height}</span>
                  <span className="text-muted-foreground">
                    {item.min} - {item.max} kg <span className="text-success">(आदर्श: {item.ideal} kg)</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* पुरुषों के लिए सुझाव */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-success/10">
                  <Dumbbell className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-xl font-display font-bold">खेल और मांसपेशियां</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>शक्ति प्रशिक्षण</strong> मांसपेशियों का द्रव्यमान और इसलिए BMI बढ़ाता है</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>एक मांसल पुरुष का <strong>BMI 27-28</strong> हो सकता है बिना अतिरिक्त वसा के</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>सर्वोत्तम संतुलन के लिए <strong>कार्डियो और शक्ति प्रशिक्षण</strong> को मिलाएं</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>प्रति सप्ताह न्यूनतम <strong>150 मिनट मध्यम गतिविधि</strong> का लक्ष्य रखें</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-warning/10">
                  <Heart className="w-6 h-6 text-warning" />
                </div>
                <h3 className="text-xl font-display font-bold">पुरुषों का स्वास्थ्य</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>पेट की चर्बी</strong> हृदय रोग के जोखिम को बढ़ाती है</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>40 वर्ष</strong> के बाद चयापचय काफी धीमा हो जाता है</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>टेस्टोस्टेरोन</strong> उम्र के साथ कम होता है, जिससे वसा बढ़ती है</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>50 वर्ष के बाद <strong>वार्षिक स्वास्थ्य जांच</strong> की सिफारिश की जाती है</span>
                </li>
              </ul>
            </div>
          </div>

          {/* पुरुषों के BMI के बारे में पूरी जानकारी */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Activity className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">पुरुषों के BMI के बारे में पूरी जानकारी</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>पुरुषों के लिए BMI कैलकुलेटर</strong> आपकी <strong>शारीरिक संरचना</strong> का मूल्यांकन करने के लिए आवश्यक है।
                चाहे आप अपना <strong>आदर्श BMI</strong> जानना चाहते हों या यह जांचना चाहते हों कि आपका
                <strong> वजन स्वस्थ</strong> है या नहीं, हमारा <strong>BMI कैलकुलेटर</strong> आपको तुरंत उत्तर देता है।
              </p>
              <p>
                <strong>पुरुषों का औसत BMI</strong> उम्र और गतिविधि स्तर के अनुसार भिन्न होता है। <strong>पुरुषों के लिए सामान्य BMI</strong>
                {" "}20 से 25 के बीच होता है। <strong>175 cm</strong> लंबे पुरुष के लिए <strong>आदर्श वजन</strong> लगभग 67 kg है।
                <strong> 180 cm</strong> लंबे पुरुष के लिए यह लगभग 71 kg है।
              </p>
              <p>
                <strong>पुरुषों के लिए आदर्श BMI कितना होना चाहिए</strong>? आदर्श सीमा 20-25 है, लेकिन खिलाड़ी पुरुषों में यह अधिक हो सकता है।
                <strong> 50 वर्ष से अधिक उम्र के पुरुषों</strong> का BMI थोड़ा अधिक (27 तक) हो सकता है बिना किसी बड़े जोखिम के।
                महत्वपूर्ण यह है कि नियमित शारीरिक गतिविधि और संतुलित पोषण बनाए रखें।
              </p>
              <p>
                <strong>आदर्श वजन की गणना</strong> आपकी शारीरिक बनावट को ध्यान में रखती है। <strong>दुबले-पतले</strong> (एक्टोमॉर्फ)
                पुरुषों का BMI स्वाभाविक रूप से कम होगा, जबकि <strong>मांसल</strong> (मेसोमॉर्फ) पुरुषों का BMI बिना किसी स्वास्थ्य
                समस्या के अधिक हो सकता है। गहन शक्ति प्रशिक्षण करने वाले पुरुषों का <strong>खिलाड़ी BMI</strong> 27-28 तक पहुंच सकता है।
              </p>
            </div>
          </div>

          {/* नेविगेशन लिंक */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">अन्य BMI कैलकुलेटर देखें</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/hi/bmi" className="flex items-center justify-center gap-2 p-4 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors text-center font-medium">
                <Scale className="w-5 h-5" />
                BMI कैलकुलेटर
              </a>
              <a href="/hi/bmi-mahila" className="flex items-center justify-center gap-2 p-4 bg-pink-500/10 rounded-xl hover:bg-pink-500/20 transition-colors text-center font-medium">
                <User className="w-5 h-5" />
                महिलाओं के लिए BMI
              </a>
              <a href="/hi/bmi-khiladi" className="flex items-center justify-center gap-2 p-4 bg-green-500/10 rounded-xl hover:bg-green-500/20 transition-colors text-center font-medium">
                <Dumbbell className="w-5 h-5" />
                खिलाड़ियों के लिए BMI
              </a>
            </div>
          </div>
        </div>

        {/* फुटर */}
        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 पुरुषों के लिए BMI कैलकुलेटर</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIPurush;
