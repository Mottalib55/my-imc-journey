import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Users, Heart, Target, Baby, Scale, Activity, AlertTriangle, CheckCircle2, Sparkles, BookOpen } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const BMIMahila = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(56);
  const [height, setHeight] = useState(152);

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
            भारतीय महिलाओं के लिए BMI — ICMR एशियन कटऑफ
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-pink-500">भारतीय महिलाओं के लिए BMI कैलकुलेटर</span> — ICMR दिशानिर्देश
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            एशिया में सबसे अधिक मोटापे से ग्रस्त महिलाएं भारत में हैं। ICMR भारतीय महिलाओं के लिए एशियन BMI कटऑफ की सिफारिश करता है: अधिक वजन 23 से शुरू होता है। ICMR, NIN और FSSAI दिशानिर्देशों के अनुसार कैलकुलेटर।
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

        {/* भारतीय महिलाओं के लिए विशेष सामग्री */}
        <div className="space-y-8">
          {/* भारतीय महिलाओं में BMI को समझना */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Users className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारतीय महिलाओं में BMI को समझना — NFHS-5 आंकड़े</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>NFHS-5 (2019-21)</strong> के अनुसार, <strong>24% भारतीय महिलाएं</strong> WHO कटऑफ (BMI ≥ 25) के अनुसार अधिक वजन वाली हैं। लेकिन <strong>ICMR एशियन कटऑफ</strong> (BMI ≥ 23) लगाने पर यह आंकड़ा <strong>45% से अधिक</strong> हो जाता है — लगभग आधी भारतीय महिलाएं वास्तव में अधिक वजन की श्रेणी में आती हैं।
              </p>
              <p>
                <strong>औसत भारतीय महिला</strong> की लंबाई <strong>1.52 मीटर</strong> और वजन <strong>56 किलोग्राम</strong> है (NFHS-5)। ICMR के अनुसार भारतीय महिलाओं के लिए <strong>कमर की परिधि 80 cm से कम</strong> होनी चाहिए (WHO भी 80 cm अनुशंसित करता है)। भारतीय महिलाओं में <strong>समान BMI पर यूरोपीय महिलाओं की तुलना में शरीर में वसा का प्रतिशत अधिक</strong> होता है, इसलिए एशियन कटऑफ आवश्यक हैं।
              </p>
              <p>
                भारत <strong>दोहरे बोझ</strong> (dual burden) से जूझ रहा है — एक ओर कुपोषण और दूसरी ओर मोटापा। ग्रामीण क्षेत्रों में कम वजन अधिक है जबकि शहरी क्षेत्रों में मोटापा तेजी से बढ़ रहा है। <strong>NIN (राष्ट्रीय पोषण संस्थान)</strong> और <strong>FSSAI</strong> दोनों एशियन BMI कटऑफ अपनाने की सिफारिश करते हैं।
              </p>
            </div>
          </div>

          {/* भारतीय महिलाओं के लिए BMI तालिका — WHO बनाम ICMR */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Scale className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारतीय महिलाओं के लिए BMI तालिका — WHO बनाम ICMR</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">श्रेणी</th>
                    <th className="text-left py-3 px-4 font-semibold">WHO BMI</th>
                    <th className="text-left py-3 px-4 font-semibold">ICMR एशियन BMI</th>
                    <th className="text-left py-3 px-4 font-semibold">वजन (152 cm)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      कम वजन
                    </td>
                    <td className="py-3 px-4">&lt; 18.5</td>
                    <td className="py-3 px-4">&lt; 18.5</td>
                    <td className="py-3 px-4">&lt; 43 kg</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      सामान्य
                    </td>
                    <td className="py-3 px-4">18.5 - 24.9</td>
                    <td className="py-3 px-4">18.5 - 22.9</td>
                    <td className="py-3 px-4">43 - 53 kg (ICMR)</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      अधिक वजन
                    </td>
                    <td className="py-3 px-4">25 - 29.9</td>
                    <td className="py-3 px-4">23 - 24.9</td>
                    <td className="py-3 px-4">53 - 58 kg (ICMR)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      मोटापा
                    </td>
                    <td className="py-3 px-4">&ge; 30</td>
                    <td className="py-3 px-4">&ge; 25</td>
                    <td className="py-3 px-4">&gt; 58 kg (ICMR)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-warning/10 rounded-xl flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-warning">ICMR भारतीय महिलाओं के लिए 23 पर अधिक वजन मानता है</strong> — WHO का 25 का कटऑफ भारतीय महिलाओं के लिए उपयुक्त नहीं है क्योंकि एशियन शरीर में कम BMI पर भी अधिक वसा जमा होती है। NIN और FSSAI भी इन एशियन कटऑफ का समर्थन करते हैं।
              </p>
            </div>
          </div>

          {/* लंबाई के अनुसार भारतीय महिलाओं का आदर्श वजन */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Target className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">लंबाई के अनुसार भारतीय महिलाओं का आदर्श वजन (ICMR)</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "148 cm", min: 41, max: 50, ideal: 46 },
                { height: "150 cm", min: 41, max: 52, ideal: 47 },
                { height: "152 cm (भारतीय औसत)", min: 43, max: 53, ideal: 48 },
                { height: "155 cm", min: 44, max: 55, ideal: 50 },
                { height: "158 cm", min: 46, max: 57, ideal: 52 },
                { height: "162 cm", min: 49, max: 60, ideal: 55 },
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

          {/* हार्मोनल चक्र और PCOS — भारतीय महिलाएं */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-purple-500/10">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-display font-bold">हार्मोनल चक्र, PCOS और वजन</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span><strong>PCOS भारतीय महिलाओं में 22% को प्रभावित करता है</strong> (ICMR) — BMI से सीधा संबंध है</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>मासिक धर्म चक्र के अनुसार वजन में <strong>1 से 3 kg</strong> तक उतार-चढ़ाव — भारतीय संस्कृति में मासिक धर्म स्वास्थ्य पर खुली चर्चा जरूरी</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>थायरॉइड विकार भारतीय महिलाओं में <strong>अधिक सामान्य</strong> — BMI पर सीधा प्रभाव</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span><strong>रजोनिवृत्ति</strong> में वसा वितरण बदलता है — भारतीय महिलाओं में पेट की चर्बी का जोखिम अधिक</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-pink-500/10">
                  <Baby className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-display font-bold">गर्भावस्था और BMI — भारतीय संदर्भ</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span><strong>भारत में 15% गर्भवती महिलाएं अधिक वजन वाली</strong> (NFHS-5) — गर्भावस्था में BMI लागू नहीं होता</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span><strong>ICMR गर्भावस्था पोषण दिशानिर्देश</strong>: सामान्य BMI में 11-16 kg वजन वृद्धि अनुशंसित</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span><strong>आंगनवाड़ी और ASHA कार्यकर्ता</strong>: गर्भावस्था में वजन की निगरानी के लिए नियमित संपर्क करें</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span><strong>52% भारतीय महिलाओं में आयरन की कमी से एनीमिया</strong> — गर्भावस्था में वजन और पोषण दोनों महत्वपूर्ण</span>
                </li>
              </ul>
            </div>
          </div>

          {/* आयुर्वेद और महिला स्वास्थ्य */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <BookOpen className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">आयुर्वेद और महिला स्वास्थ्य</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>स्त्री रोग चिकित्सा</strong>: आयुर्वेद में महिला स्वास्थ्य की विशेष शाखा है जो शरीर के वजन, हार्मोनल संतुलन और समग्र स्वास्थ्य पर ध्यान केंद्रित करती है। आयुर्वेदिक दृष्टिकोण से महिलाओं के वजन प्रबंधन में <strong>प्रकृति</strong> (शरीर के प्रकार) के अनुसार आहार और जीवनशैली का निर्धारण किया जाता है।
              </p>
              <p>
                <strong>कफ शामक आहार</strong>: अधिक वजन वाली महिलाओं के लिए कफ शामक आहार — गर्म, हल्का और सूखा भोजन जैसे जौ, बाजरा, मूंग दाल, मेथी, हल्दी और अदरक। <strong>शतावरी</strong> हार्मोनल संतुलन के लिए प्रसिद्ध है — PCOS और रजोनिवृत्ति में विशेष रूप से लाभकारी। <strong>त्रिफला</strong> पाचन सुधारने और चयापचय बढ़ाने के लिए उपयोगी है।
              </p>
              <p>
                आयुर्वेद में <strong>ऋतुचर्या</strong> (मौसमी आहार) और <strong>दिनचर्या</strong> (दैनिक दिनचर्या) वजन प्रबंधन के स्तंभ हैं। सूर्योदय से पहले उठना, तेल मालिश (अभ्यंग), योग और प्राणायाम — ये सभी भारतीय महिलाओं की स्वास्थ्य परंपरा का हिस्सा हैं। आधुनिक ICMR दिशानिर्देश भी शारीरिक गतिविधि और संतुलित आहार पर जोर देते हैं।
              </p>
            </div>
          </div>

          {/* रजोनिवृत्ति — भारतीय महिलाएं */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI और रजोनिवृत्ति — भारतीय महिलाएं</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                भारतीय महिलाओं में <strong>रजोनिवृत्ति</strong> की औसत आयु <strong>46-48 वर्ष</strong> है (पश्चिमी देशों में 51)। इस दौरान हार्मोनल परिवर्तन वजन बढ़ने को बढ़ावा देते हैं, विशेष रूप से पेट के क्षेत्र में। ICMR के अनुसार रजोनिवृत्ति के बाद <strong>मधुमेह और हृदय रोग का जोखिम</strong> काफी बढ़ जाता है।
              </p>
              <p>
                <strong>50 के बाद स्वस्थ BMI</strong> बनाए रखने के लिए, <strong>प्रोटीन</strong> (दाल, पनीर, अंडा), <strong>कैल्शियम</strong> (रागी, तिल, दूध) और <strong>विटामिन D</strong> से भरपूर आहार लें। <strong>योग, प्राणायाम</strong> और नियमित चलना — भारतीय जीवनशैली में ये सहज रूप से शामिल हैं। NIN भी रजोनिवृत्ति के बाद शारीरिक गतिविधि बढ़ाने की सिफारिश करता है।
              </p>
            </div>
          </div>

          {/* भारतीय महिला BMI के बारे में सब कुछ */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Activity className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारतीय महिला BMI — ICMR, NIN, FSSAI दिशानिर्देश</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>भारतीय महिलाओं के लिए BMI कैलकुलेटर</strong> आपके <strong>शारीरिक संरचना</strong> का मूल्यांकन करने के लिए एक आवश्यक उपकरण है। <strong>ICMR एशियन कटऑफ</strong> के अनुसार भारतीय महिलाओं के लिए <strong>आदर्श BMI 18.5 से 22.9</strong> के बीच होता है — WHO के 24.9 से काफी कम। यह अंतर इसलिए है क्योंकि एशियन शरीर में कम BMI पर भी स्वास्थ्य जोखिम शुरू हो जाते हैं।
              </p>
              <p>
                <strong>152 cm</strong> (भारतीय औसत) लंबी महिला के लिए <strong>ICMR आदर्श वजन</strong> लगभग <strong>48 kg</strong> है। <strong>155 cm</strong> के लिए <strong>50 kg</strong> और <strong>158 cm</strong> के लिए <strong>52 kg</strong>। ये आंकड़े WHO मानक से 5-8 kg कम हैं, जो भारतीय शरीर संरचना की विशिष्टता दर्शाते हैं।
              </p>
              <p>
                भारत में <strong>दोहरा बोझ</strong> (dual burden of malnutrition) एक गंभीर चुनौती है। <strong>NFHS-5</strong> के अनुसार 18% भारतीय महिलाएं कम वजन वाली हैं जबकि 24% (WHO) या 45%+ (ICMR कटऑफ) अधिक वजन वाली हैं। <strong>FSSAI</strong> के Eat Right India अभियान और <strong>NIN</strong> के आहार दिशानिर्देश दोनों इस दोहरे बोझ को संबोधित करते हैं।
              </p>
              <p>
                <strong>40 वर्ष से अधिक</strong> की भारतीय महिलाओं के लिए, <strong>मधुमेह जांच</strong> आवश्यक है — भारत विश्व की मधुमेह राजधानी है। <strong>ICMR</strong> BMI 23 से ऊपर होने पर नियमित रक्त शर्करा जांच की सिफारिश करता है। <strong>गर्भावस्था के दौरान BMI</strong> लागू नहीं होता — आंगनवाड़ी केंद्र पर नियमित वजन माप कराएं।
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
          <p>&copy; 2024 भारतीय महिलाओं के लिए BMI कैलकुलेटर — ICMR दिशानिर्देश</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIMahila;
