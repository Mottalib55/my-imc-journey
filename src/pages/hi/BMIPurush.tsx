import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { User, Dumbbell, Target, Heart, Scale, Activity, AlertTriangle, CheckCircle2, BookOpen } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const BMIPurush = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(68);
  const [height, setHeight] = useState(167);

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
            भारतीय पुरुषों के लिए BMI
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-blue-500">भारतीय पुरुषों के लिए BMI कैलकुलेटर</span> — ICMR एशियाई मानक
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            भारत में 13.5 करोड़ पुरुष मोटापे से ग्रस्त हैं (ICMR/NFHS-5)। भारतीय पुरुषों के लिए एशियाई BMI कटऑफ आवश्यक है: अधिक वजन 23 से शुरू होता है, 25 से नहीं। ICMR, NIN और FSSAI दिशानिर्देशों के अनुसार BMI कैलकुलेटर।
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
          {/* भारतीय पुरुषों में BMI को समझना */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <User className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारतीय पुरुषों में BMI को समझना</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>NFHS-5 के अनुसार</strong>, 22.9% भारतीय पुरुष अधिक वजन वाले हैं (WHO मानक BMI &ge; 25 के अनुसार)।
                लेकिन <strong>ICMR एशियाई कटऑफ</strong> (BMI &ge; 23) के अनुसार यह आंकड़ा <strong>40% से अधिक</strong> हो जाता है।
                यह अंतर इसलिए महत्वपूर्ण है क्योंकि भारतीय पुरुषों में पश्चिमी पुरुषों की तुलना में <strong>कम BMI पर ही चयापचय संबंधी
                जटिलताएं</strong> विकसित होती हैं।
              </p>
              <p>
                <strong>औसत भारतीय पुरुष</strong> की लंबाई 1.67 मीटर और वजन 68 किलोग्राम है। ICMR के अनुसार, भारतीय पुरुषों के लिए
                <strong> कमर की परिधि 90 cm से कम</strong> होनी चाहिए (WHO का मानक 94 cm है)। यह कम सीमा इसलिए है क्योंकि
                <strong> भारतीय पुरुषों में समान BMI पर यूरोपीय पुरुषों की तुलना में अधिक आंतरिक (विसेरल) चर्बी</strong> होती है (ICMR अध्ययन)।
              </p>
            </div>
          </div>

          {/* भारतीय पुरुषों के लिए BMI तालिका — WHO बनाम ICMR */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Scale className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारतीय पुरुषों के लिए BMI तालिका — WHO बनाम ICMR</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">श्रेणी</th>
                    <th className="text-left py-3 px-4 font-semibold">WHO मानक</th>
                    <th className="text-left py-3 px-4 font-semibold">ICMR एशियाई मानक</th>
                    <th className="text-left py-3 px-4 font-semibold">उदाहरण (167 cm)</th>
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
                    <td className="py-3 px-4">&lt; 52 kg</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      सामान्य
                    </td>
                    <td className="py-3 px-4">18.5 - 24.9</td>
                    <td className="py-3 px-4">18.5 - 22.9</td>
                    <td className="py-3 px-4">52 - 64 kg (ICMR)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      अधिक वजन
                    </td>
                    <td className="py-3 px-4">25 - 29.9</td>
                    <td className="py-3 px-4">23 - 24.9</td>
                    <td className="py-3 px-4">64 - 70 kg (ICMR)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      मोटापा
                    </td>
                    <td className="py-3 px-4">&ge; 30</td>
                    <td className="py-3 px-4">&ge; 25</td>
                    <td className="py-3 px-4">&gt; 70 kg (ICMR)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-warning/10 border border-warning/30 rounded-xl flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
              <p className="text-sm font-medium text-warning">
                ICMR भारतीय पुरुषों के लिए 23 पर अधिक वजन और 25 पर मोटापा मानता है — WHO के 25/30 मानक भारतीयों के लिए अपर्याप्त हैं।
              </p>
            </div>
          </div>

          {/* लंबाई के अनुसार आदर्श वजन — ICMR मानक */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">लंबाई के अनुसार भारतीय पुरुषों का आदर्श वजन (ICMR)</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "160 cm", min: 47, max: 59, ideal: 54 },
                { height: "163 cm", min: 49, max: 61, ideal: 56 },
                { height: "167 cm (भारतीय औसत)", min: 52, max: 64, ideal: 59 },
                { height: "170 cm", min: 53, max: 66, ideal: 61 },
                { height: "173 cm", min: 55, max: 68, ideal: 63 },
                { height: "176 cm", min: 57, max: 71, ideal: 65 },
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

          {/* भारतीय पुरुषों के लिए सुझाव */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-success/10">
                  <Dumbbell className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-xl font-display font-bold">व्यायाम और शारीरिक गतिविधि</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>योग और प्राणायाम:</strong> भारतीय पुरुषों के लिए शारीरिक और मानसिक संतुलन का सर्वोत्तम साधन</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>क्रिकेट</strong> भारत का सबसे लोकप्रिय खेल है लेकिन नियमित व्यायाम का विकल्प नहीं है</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>ICMR की सिफारिश:</strong> प्रतिदिन 45 मिनट तेज चलना भारतीय पुरुषों के लिए आवश्यक है</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>केवल <strong>10% भारतीय पुरुष</strong> WHO की शारीरिक गतिविधि सिफारिशों को पूरा करते हैं</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-warning/10">
                  <Heart className="w-6 h-6 text-warning" />
                </div>
                <h3 className="text-xl font-display font-bold">भारतीय पुरुषों का स्वास्थ्य</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>भारत <strong>'मधुमेह की विश्व राजधानी'</strong>: 7.7 करोड़ पुरुष प्रभावित (ICMR)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>हृदय रोग</strong> 40 वर्ष से कम उम्र के भारतीय पुरुषों में तेजी से बढ़ रहा है</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>तंबाकू सेवन:</strong> 42.4% भारतीय पुरुष तंबाकू का उपयोग करते हैं (GATS India)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>BMI <strong>23 से ऊपर</strong> होने पर भारतीय पुरुषों में मधुमेह का खतरा दोगुना हो जाता है (ICMR)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* आयुर्वेद और पुरुष शारीरिक संरचना */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <BookOpen className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">आयुर्वेद और पुरुष शारीरिक संरचना</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>आयुर्वेदिक प्रकृति</strong> (शरीर का प्रकार) के अनुसार प्रत्येक पुरुष की वजन प्रवृत्ति भिन्न होती है।
                आधुनिक BMI निगरानी के साथ आयुर्वेदिक ज्ञान को जोड़कर भारतीय पुरुष अपने स्वास्थ्य को बेहतर समझ सकते हैं:
              </p>
              <div className="grid md:grid-cols-3 gap-4 my-4">
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h4 className="font-semibold text-blue-500 mb-2">वात प्रकृति</h4>
                  <p className="text-sm">स्वाभाविक रूप से दुबला-पतला, BMI कम रहता है, एक्टोमॉर्फ शरीर। वजन बढ़ाना कठिन होता है। अनियमित भूख और तेज चयापचय।</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h4 className="font-semibold text-blue-500 mb-2">पित्त प्रकृति</h4>
                  <p className="text-sm">मध्यम शरीर, मेसोमॉर्फ, एथलेटिक बनावट। संतुलित BMI रहता है। तीव्र भूख और अच्छा पाचन।</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h4 className="font-semibold text-blue-500 mb-2">कफ प्रकृति</h4>
                  <p className="text-sm">भारी शरीर, एंडोमॉर्फ, वजन आसानी से बढ़ता है। BMI अधिक रहने की प्रवृत्ति। धीमा चयापचय और मजबूत शरीर।</p>
                </div>
              </div>
              <p>
                <strong>आयुर्वेदिक आहार सिफारिशें:</strong> पुरुषों को अपनी प्रकृति के अनुसार भोजन करना चाहिए। कफ प्रकृति के पुरुषों को हल्का
                और गर्म भोजन, वात प्रकृति के पुरुषों को पौष्टिक और स्निग्ध भोजन, और पित्त प्रकृति के पुरुषों को शीतल और संतुलित भोजन लेना चाहिए।
              </p>
              <p>
                <strong>अग्नि (पाचन शक्ति) को मजबूत रखना पुरुषों के वजन प्रबंधन की कुंजी है।</strong> आयुर्वेद के अनुसार, कमजोर अग्नि
                आम (विषाक्त पदार्थ) उत्पन्न करती है जो मोटापे का मूल कारण है। नियमित भोजन समय, ताजा भोजन और मसालों का सही
                उपयोग अग्नि को प्रबल रखता है।
              </p>
            </div>
          </div>

          {/* भारतीय पुरुषों के BMI के बारे में पूरी जानकारी — SEO */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Activity className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारतीय पुरुषों के BMI के बारे में पूरी जानकारी</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>भारतीय पुरुषों के लिए BMI कैलकुलेटर</strong> WHO मानकों के बजाय <strong>ICMR एशियाई कटऑफ</strong> पर
                आधारित होना चाहिए। ICMR (भारतीय चिकित्सा अनुसंधान परिषद), NIN हैदराबाद (राष्ट्रीय पोषण संस्थान), और FSSAI
                (भारतीय खाद्य सुरक्षा और मानक प्राधिकरण) सभी भारतीय पुरुषों के लिए <strong>23 पर अधिक वजन और 25 पर मोटापा</strong> की
                सिफारिश करते हैं — WHO के 25/30 मानक नहीं।
              </p>
              <p>
                NFHS-5 (राष्ट्रीय परिवार स्वास्थ्य सर्वेक्षण) के अनुसार भारत में <strong>"दोहरा बोझ"</strong> की स्थिति है: एक ओर
                कुपोषण और कम वजन (BMI &lt; 18.5 — ग्रामीण क्षेत्रों में 16% पुरुष), दूसरी ओर शहरी क्षेत्रों में तेजी से बढ़ता
                मोटापा (ICMR कटऑफ 23 के अनुसार 40%+ पुरुष)। WHO दक्षिण-पूर्व एशिया भी भारत के लिए कम BMI सीमाओं की
                पुष्टि करता है।
              </p>
              <p>
                <strong>167 cm</strong> लंबे भारतीय पुरुष (राष्ट्रीय औसत) के लिए <strong>ICMR के अनुसार आदर्श वजन</strong> 52-64 kg
                (BMI 18.5-22.9) है। <strong>BMI 23 से ऊपर</strong> होने पर मधुमेह, हृदय रोग और उच्च रक्तचाप का खतरा
                काफी बढ़ जाता है। भारतीय पुरुषों में <strong>एशियाई BMI कटऑफ</strong> (अधिक वजन 23, मोटापा 25) का उपयोग
                करना जीवनरक्षक हो सकता है।
              </p>
              <p>
                <strong>संदर्भ:</strong> ICMR दिशानिर्देश, NIN हैदराबाद, FSSAI पोषण मानक, NFHS-5 (2019-21), WHO South-East Asia Regional Office,
                GATS India (Global Adult Tobacco Survey)। भारतीय पुरुषों के लिए <strong>एशियाई BMI मानक (23/25)</strong> पश्चिमी मानकों (25/30)
                से अधिक सटीक और सुरक्षित हैं।
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
          <p>&copy; 2024 भारतीय पुरुषों के लिए BMI कैलकुलेटर — ICMR एशियाई मानक</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIPurush;
