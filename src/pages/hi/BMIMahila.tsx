import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Users, Heart, Target, Baby, Scale, Activity, AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const BMIMahila = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(65);
  const [height, setHeight] = useState(165);

  const calculateBMI = useCallback((w: number, h: number) => {
    const heightInM = h / 100;
    const calculatedBmi = w / (heightInM * heightInM);
    setBmi(calculatedBmi);
  }, []);

  useEffect(() => { calculateBMI(weight, height); }, []);

  const handleWeightChange = (value: number[]) => { setWeight(value[0]); calculateBMI(value[0], height); };
  const handleHeightChange = (value: number[]) => { setHeight(value[0]); calculateBMI(weight, value[0]); };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-pink-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-500 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            महिलाओं के लिए BMI
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-pink-500">महिलाओं के लिए BMI</span>: अपना सूचकांक जानें
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            महिलाओं के जीवन के हर चरण के लिए व्यक्तिगत सलाह के साथ BMI कैलकुलेटर
          </p>
        </header>

        {/* कैलकुलेटर */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-pink-500" />
              अपना माप दर्ज करें
            </h2>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">वजन</label>
                  <span className="text-2xl font-bold text-pink-500">{weight} kg</span>
                </div>
                <Slider value={[weight]} onValueChange={handleWeightChange} min={35} max={150} step={1} className="py-4" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">लंबाई</label>
                  <span className="text-2xl font-bold text-pink-500">{height} cm</span>
                </div>
                <Slider value={[height]} onValueChange={handleHeightChange} min={130} max={200} step={1} className="py-4" />
              </div>
            </div>
          </div>
          <BMIGauge bmi={bmi} />
        </div>

        {/* महिलाओं के लिए विशेष सामग्री */}
        <div className="space-y-8">
          {/* महिलाओं में BMI को समझना */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Users className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">महिलाओं में BMI को समझना</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>महिलाओं का BMI</strong> पुरुषों की तरह ही उसी सूत्र से गणना किया जाता है, लेकिन इसकी व्याख्या थोड़ी अलग होती है। महिलाओं में स्वाभाविक रूप से <strong>शरीर में वसा का प्रतिशत अधिक</strong> होता है (20-25% बनाम पुरुषों में 15-20%), जो पूरी तरह सामान्य है और हार्मोनल कार्यों के लिए आवश्यक है।
              </p>
              <p>
                महिलाओं के लिए <strong>आदर्श कमर का माप</strong> <strong>80 cm</strong> (मध्यम जोखिम) या <strong>88 cm</strong> (उच्च जोखिम) से अधिक नहीं होना चाहिए। यह संकेतक अक्सर अकेले BMI से अधिक प्रासंगिक होता है क्योंकि यह पेट की चर्बी मापता है, जो स्वास्थ्य के लिए अधिक खतरनाक है।
              </p>
            </div>
          </div>

          {/* महिलाओं के लिए BMI तालिका */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Scale className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">महिलाओं के लिए BMI तालिका</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">श्रेणी</th>
                    <th className="text-left py-3 px-4 font-semibold">BMI</th>
                    <th className="text-left py-3 px-4 font-semibold">उदाहरण (165 cm)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      कम वजन
                    </td>
                    <td className="py-3 px-4">&lt; 18.5</td>
                    <td className="py-3 px-4">&lt; 50 kg</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      सामान्य
                    </td>
                    <td className="py-3 px-4">18.5 - 24.9</td>
                    <td className="py-3 px-4">50 - 68 kg</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      अधिक वजन
                    </td>
                    <td className="py-3 px-4">25 - 29.9</td>
                    <td className="py-3 px-4">68 - 81 kg</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      मोटापा
                    </td>
                    <td className="py-3 px-4">&ge; 30</td>
                    <td className="py-3 px-4">&gt; 81 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* लंबाई के अनुसार महिलाओं का आदर्श वजन */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Target className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">लंबाई के अनुसार महिलाओं का आदर्श वजन</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "155 cm", min: 44, max: 60, ideal: 53 },
                { height: "160 cm", min: 47, max: 64, ideal: 56 },
                { height: "165 cm", min: 50, max: 68, ideal: 60 },
                { height: "170 cm", min: 53, max: 72, ideal: 64 },
                { height: "175 cm", min: 57, max: 76, ideal: 67 },
                { height: "180 cm", min: 60, max: 81, ideal: 71 },
              ].map((item) => (
                <div key={item.height} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className="font-semibold text-pink-500">{item.height}</span>
                  <span className="text-muted-foreground">
                    {item.min} - {item.max} kg <span className="text-success">(आदर्श: {item.ideal} kg)</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* महिलाओं से संबंधित विशेषताएं */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-purple-500/10">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-display font-bold">हार्मोनल चक्र और वजन</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>मासिक धर्म चक्र के अनुसार वजन में <strong>1 से 3 kg</strong> तक उतार-चढ़ाव हो सकता है</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>मासिक धर्म से पहले <strong>पानी का जमाव</strong> सामान्य है</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>हमेशा चक्र के <strong>एक ही समय</strong> पर अपना वजन मापें</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span><strong>रजोनिवृत्ति</strong> वसा वितरण के पैटर्न को बदल देती है</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-pink-500/10">
                  <Baby className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-display font-bold">गर्भावस्था और BMI</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>गर्भावस्था के दौरान BMI <strong>लागू नहीं</strong> होता</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>अनुशंसित वजन वृद्धि: <strong>11-16 kg</strong> (सामान्य BMI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>व्यक्तिगत निगरानी के लिए अपनी <strong>स्त्री रोग विशेषज्ञ</strong> से परामर्श करें</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>प्रसव के बाद वजन कम करने में <strong>समय</strong> लगता है - धैर्य रखें</span>
                </li>
              </ul>
            </div>
          </div>

          {/* रजोनिवृत्ति */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI और रजोनिवृत्ति</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>रजोनिवृत्ति</strong> के दौरान, हार्मोनल परिवर्तन वजन बढ़ने को बढ़ावा देते हैं, विशेष रूप से पेट के क्षेत्र में। चयापचय धीमा हो जाता है और मांसपेशियों का द्रव्यमान स्वाभाविक रूप से कम हो जाता है। इसलिए 50 वर्ष की आयु के बाद कुछ किलोग्राम बढ़ना सामान्य है।
              </p>
              <p>
                <strong>50 के बाद स्वस्थ BMI</strong> या <strong>60 के बाद BMI</strong> बनाए रखने के लिए, <strong>प्रोटीन</strong> और <strong>कैल्शियम</strong> से भरपूर आहार पर ध्यान दें, और <strong>शक्ति प्रशिक्षण</strong> सहित नियमित शारीरिक गतिविधि बनाए रखें।
              </p>
            </div>
          </div>

          {/* महिला BMI के बारे में सब कुछ */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Activity className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">महिला BMI के बारे में सब कुछ</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>महिलाओं के लिए BMI कैलकुलेटर</strong> आपके <strong>शारीरिक संरचना</strong> का मूल्यांकन करने के लिए एक आवश्यक उपकरण है। चाहे आप अपना <strong>आदर्श महिला BMI</strong> जानना चाहती हों या अपना <strong>स्वस्थ वजन</strong> जांचना चाहती हों, हमारा <strong>महिला BMI कैलकुलेटर</strong> आपको तुरंत और व्यक्तिगत उत्तर देता है।
              </p>
              <p>
                <strong>महिलाओं के लिए आदर्श BMI</strong> 19 और 24 के बीच होता है। <strong>सामान्य महिला BMI</strong> एक ऐसे वजन से मेल खाता है जो लंबाई के अनुसार बदलता है। <strong>160 cm</strong> लंबी महिला के लिए <strong>आदर्श वजन</strong> लगभग 56 kg है। <strong>165 cm</strong> लंबी महिला के लिए यह लगभग 60 kg है।
              </p>
              <p>
                <strong>आदर्श वजन की गणना</strong> कई कारकों को ध्यान में रखती है। दुबली काया वाली महिलाओं का BMI स्वाभाविक रूप से कम होगा, जबकि अधिक <strong>एथलेटिक</strong> काया वाली महिलाओं का BMI थोड़ा अधिक हो सकता है। <strong>खिलाड़ी महिलाओं का BMI</strong> मांसपेशियों के कारण अधिक हो सकता है।
              </p>
              <p>
                <strong>40 वर्ष से अधिक</strong> की महिलाओं के लिए, BMI का मान समान रहता है, लेकिन शरीर बदलता है। <strong>50 वर्ष के बाद BMI</strong> और <strong>60 वर्ष के बाद BMI</strong> में कुछ अतिरिक्त किलोग्राम स्वीकार्य हो सकते हैं, महत्वपूर्ण बात सक्रिय रहना और अच्छा खाना है। याद रखें कि <strong>गर्भावस्था के दौरान BMI</strong> लागू नहीं होता।
              </p>
            </div>
          </div>

          {/* नेविगेशन लिंक */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">अन्य BMI कैलकुलेटर देखें</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/hi/bmi" className="flex items-center justify-center p-4 bg-primary/10 rounded-xl text-primary font-semibold hover:bg-primary/20 transition-colors">
                BMI कैलकुलेटर
              </a>
              <a href="/hi/bmi-purush" className="flex items-center justify-center p-4 bg-blue-500/10 rounded-xl text-blue-500 font-semibold hover:bg-blue-500/20 transition-colors">
                पुरुषों के लिए BMI
              </a>
              <a href="/hi/bmi-khiladi" className="flex items-center justify-center p-4 bg-emerald-500/10 rounded-xl text-emerald-500 font-semibold hover:bg-emerald-500/20 transition-colors">
                खिलाड़ियों के लिए BMI
              </a>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 महिलाओं के लिए BMI कैलकुलेटर</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIMahila;
