import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Calculator, Activity, Target, BookOpen, Scale, TrendingUp, Heart, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";
import { RelatedPages } from "@/components/RelatedPages";

const BMIHi = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weightKg, setWeightKg] = useState(65);
  const [heightCm, setHeightCm] = useState(167);

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
            भारतीय BMI सिम्युलेटर - ICMR मानकों के अनुसार
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">मुफ्त BMI कैलकुलेटर - भारतीय मानकों सहित</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            एशियाई/भारतीय BMI कटऑफ के साथ अपना बॉडी मास इंडेक्स तुरंत जानें। ICMR और NIN हैदराबाद द्वारा अनुशंसित मापदंडों पर आधारित।
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
          {/* Indian Context Introduction */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारत में BMI: एक दोहरी चुनौती</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                भारत आज एक अनोखी स्वास्थ्य चुनौती का सामना कर रहा है जिसे <strong>"दोहरा बोझ" (double burden)</strong> कहा जाता है - एक तरफ कुपोषण और दूसरी तरफ मोटापा, दोनों एक ही समय में देश में मौजूद हैं। <strong>राष्ट्रीय परिवार स्वास्थ्य सर्वेक्षण (NFHS-5, 2019-21)</strong> के अनुसार लगभग <strong>24% भारतीय वयस्क अधिक वज़न</strong> की श्रेणी में आते हैं, जबकि लाखों बच्चे अभी भी कुपोषण से ग्रस्त हैं।
              </p>
              <p>
                भारत को अक्सर <strong>"विश्व की मधुमेह राजधानी"</strong> कहा जाता है। <strong>ICMR (भारतीय चिकित्सा अनुसंधान परिषद)</strong> के अनुसार, भारत में 10 करोड़ से अधिक लोग टाइप-2 मधुमेह से पीड़ित हैं, और यह संख्या तेज़ी से बढ़ रही है। इसका सीधा संबंध बढ़ते हुए BMI और बदलती जीवनशैली से है।
              </p>
              <p>
                <strong>NIN हैदराबाद (राष्ट्रीय पोषण संस्थान)</strong> के शोध से पता चलता है कि भारतीयों में <strong>पश्चिमी देशों के लोगों की तुलना में कम BMI पर भी मधुमेह, हृदय रोग और उच्च रक्तचाप का खतरा अधिक</strong> होता है। यही कारण है कि भारतीयों के लिए WHO के सामान्य BMI मानक पर्याप्त नहीं हैं - एशियाई BMI कटऑफ का उपयोग करना ज़रूरी है।
              </p>
              <p>
                तेज़ शहरीकरण, प्रसंस्कृत भोजन का बढ़ता उपभोग, गतिहीन जीवनशैली, और पारंपरिक खान-पान से दूरी - ये सभी कारक भारत में मोटापे की महामारी को बढ़ा रहे हैं। <strong>FSSAI (भारतीय खाद्य सुरक्षा एवं मानक प्राधिकरण)</strong> भी स्वस्थ भोजन की आदतों को बढ़ावा देने के लिए "ईट राइट इंडिया" अभियान चला रहा है।
              </p>
            </div>
          </div>

          {/* Asian BMI Standards for India */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <AlertTriangle className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारत के लिए एशियाई BMI मानक</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-5 mb-4">
                <p className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
                  महत्वपूर्ण: भारतीयों के लिए BMI सीमाएं अलग हैं
                </p>
                <p className="text-sm">
                  WHO की 2004 की विशेषज्ञ परामर्श रिपोर्ट (Expert Consultation on Asian Populations) ने स्पष्ट किया कि एशियाई लोगों में कम BMI पर भी उच्च शरीर वसा प्रतिशत पाया जाता है। ICMR ने इसके आधार पर भारतीयों के लिए कम BMI कटऑफ की सिफारिश की है।
                </p>
              </div>
              <p>
                <strong>भारतीय शरीर की विशेषताएं</strong> पश्चिमी आबादी से भिन्न हैं। शोध से पता चलता है कि भारतीयों में समान BMI पर <strong>शरीर वसा प्रतिशत 3-5% अधिक</strong> होता है। इसका मतलब है कि जो BMI एक यूरोपीय व्यक्ति के लिए "सामान्य" हो सकता है, वही BMI एक भारतीय के लिए पहले से ही <strong>स्वास्थ्य जोखिम</strong> का संकेत हो सकता है।
              </p>
              <p>
                ICMR और NIN हैदराबाद के दिशा-निर्देशों के अनुसार, भारतीयों के लिए <strong>"सामान्य" BMI 18.5 से 22.9</strong> तक माना जाता है, जबकि WHO का सामान्य BMI 18.5 से 24.9 तक है। इसी तरह, <strong>भारतीयों में 23 या उससे अधिक BMI</strong> को "अधिक वज़न" और <strong>25 या अधिक को "मोटापा"</strong> माना जाता है।
              </p>
              <p>
                इसके पीछे वैज्ञानिक कारण यह है कि भारतीय आनुवंशिकी में <strong>पेट के आसपास वसा जमा होने</strong> (visceral fat / आंत की चर्बी) की प्रवृत्ति अधिक होती है, जो मधुमेह, हृदय रोग, और मेटाबॉलिक सिंड्रोम का प्रमुख कारण है। यह "पतले मोटे" (thin-fat) फेनोटाइप भारतीयों में आम है - बाहर से पतले दिखने वाले व्यक्ति के शरीर में भी खतरनाक स्तर की आंतरिक वसा हो सकती है।
              </p>
              <p>
                <strong>WHO विशेषज्ञ परामर्श</strong> ने यह भी सुझाव दिया कि एशियाई देशों को अपने स्वयं के BMI वर्गीकरण अपनाने चाहिए। सिंगापुर, हांगकांग, और जापान जैसे देशों ने पहले ही इसे लागू किया है। भारत में ICMR भी इन्हीं एशियाई कटऑफ की सिफारिश करता है।
              </p>
            </div>
          </div>

          {/* Dual BMI Categories Table - WHO vs Asian/Indian */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI श्रेणियां: WHO बनाम भारतीय (ICMR) मानक</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">श्रेणी</th>
                    <th className="text-left py-3 px-4 font-bold">WHO BMI सीमा</th>
                    <th className="text-left py-3 px-4 font-bold">एशियाई/भारतीय (ICMR) BMI सीमा</th>
                    <th className="text-left py-3 px-4 font-bold">भारतीयों के लिए जोखिम</th>
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
                    <td className="py-3 px-4 text-info">कुपोषण, एनीमिया का खतरा</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      सामान्य
                    </td>
                    <td className="py-3 px-4">18.5 - 24.9</td>
                    <td className="py-3 px-4 font-semibold text-success">18.5 - 22.9</td>
                    <td className="py-3 px-4 text-success">कम जोखिम</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      अधिक वजन
                    </td>
                    <td className="py-3 px-4">25 - 29.9</td>
                    <td className="py-3 px-4 font-semibold text-warning">23 - 24.9</td>
                    <td className="py-3 px-4 text-warning">मधुमेह, रक्तचाप का बढ़ा हुआ जोखिम</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      मोटापा
                    </td>
                    <td className="py-3 px-4">&ge; 30</td>
                    <td className="py-3 px-4 font-semibold text-destructive">&ge; 25</td>
                    <td className="py-3 px-4 text-destructive">हृदय रोग, मधुमेह, स्ट्रोक का उच्च जोखिम</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-amber-500/5 border border-amber-500/20 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-amber-600 dark:text-amber-400">ध्यान दें:</strong> WHO मानकों के अनुसार 24 BMI वाला भारतीय व्यक्ति "सामान्य" श्रेणी में आएगा, लेकिन ICMR के एशियाई मानकों के अनुसार वही व्यक्ति <strong>"अधिक वज़न"</strong> की श्रेणी में होगा। यह अंतर चिकित्सकीय रूप से बहुत महत्वपूर्ण है क्योंकि इसी BMI पर भारतीयों में पहले से ही मधुमेह और हृदय रोग का जोखिम बढ़ जाता है।
              </p>
            </div>
          </div>

          {/* Ayurveda and Body Weight */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-green-500/10">
                <Heart className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">आयुर्वेद और शरीर का वज़न</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                भारत की प्राचीन चिकित्सा पद्धति <strong>आयुर्वेद</strong> हज़ारों वर्षों से शरीर के वज़न और स्वास्थ्य के संबंध को समझती आ रही है। आयुर्वेद के अनुसार, प्रत्येक व्यक्ति की <strong>प्रकृति (शरीर का मूल स्वभाव)</strong> अलग होती है, और यह प्रकृति तीन दोषों - <strong>वात, पित्त और कफ</strong> - के संतुलन पर आधारित है।
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
                  <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">वात प्रकृति</h4>
                  <p className="text-sm">
                    पतला शरीर, हल्की हड्डियां, वज़न बढ़ाना कठिन। वात प्रधान व्यक्ति का BMI स्वाभाविक रूप से कम होता है। इन्हें पौष्टिक, गर्म और तैलीय भोजन की आवश्यकता होती है। सूखे मेवे, घी, और दूध इनके लिए लाभदायक हैं।
                  </p>
                </div>
                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
                  <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">पित्त प्रकृति</h4>
                  <p className="text-sm">
                    मध्यम शरीर, अच्छी मांसपेशियां, मध्यम वज़न। पित्त प्रधान व्यक्ति का BMI सामान्य सीमा में रहता है। इन्हें ठंडे, मीठे और कड़वे खाद्य पदार्थ अनुकूल हैं। अत्यधिक तीखा और खट्टा भोजन हानिकारक हो सकता है।
                  </p>
                </div>
                <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4">
                  <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">कफ प्रकृति</h4>
                  <p className="text-sm">
                    भारी शरीर, वज़न बढ़ने की प्रवृत्ति, मज़बूत हड्डियां। कफ प्रधान व्यक्ति का BMI ऊंचा रहने की संभावना अधिक होती है। इन्हें हल्का, गर्म और तीखा भोजन तथा नियमित व्यायाम आवश्यक है।
                  </p>
                </div>
              </div>

              <p>
                <strong>आयुर्वेदिक दृष्टिकोण BMI को पूरक बनाता है</strong> - जहां BMI केवल एक संख्या देता है, वहीं आयुर्वेद यह समझाता है कि <em>क्यों</em> किसी व्यक्ति का वज़न एक विशेष सीमा में है और उसके लिए क्या उचित है। एक कफ प्रधान व्यक्ति का "स्वस्थ" वज़न एक वात प्रधान व्यक्ति से भिन्न हो सकता है।
              </p>
              <p>
                <strong>योग और वज़न प्रबंधन:</strong> भारत की एक और अमूल्य देन - <strong>योग</strong> - वज़न प्रबंधन में अत्यंत प्रभावी है। सूर्य नमस्कार, त्रिकोणासन, भुजंगासन, और नौकासन जैसे आसन शरीर की चर्बी कम करने में सहायक हैं। प्राणायाम (कपालभाति, भस्त्रिका) चयापचय दर को बढ़ाते हैं। अनेक अध्ययनों ने सिद्ध किया है कि नियमित योग अभ्यास से BMI में 1-2 अंकों की कमी संभव है।
              </p>
              <p>
                <strong>पारंपरिक भारतीय आहार</strong> - दाल, सब्जियां, रोटी, चावल, दही, और मसालों का संतुलित मिश्रण - वैज्ञानिक रूप से भी स्वास्थ्यवर्धक माना गया है। हल्दी में करक्यूमिन, मेथी में फाइबर, और दालचीनी के रक्त शर्करा नियंत्रक गुण स्वस्थ वज़न बनाए रखने में सहायक हैं।
              </p>
            </div>
          </div>

          {/* How to calculate BMI */}
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
                उदाहरण: एक औसत भारतीय वयस्क जिसका वज़न <strong>65 kg</strong> है और लंबाई <strong>1.67 m</strong> है:<br />
                BMI = 65 &divide; (1.67 &times; 1.67) = 65 &divide; 2.7889 = <strong>23.3</strong>
              </p>
              <div className="bg-orange-500/5 border border-orange-500/20 rounded-lg p-4 mt-2">
                <p className="text-sm">
                  <strong className="text-orange-600 dark:text-orange-400">ध्यान दें:</strong> WHO मानकों (18.5-24.9) के अनुसार 23.3 BMI "सामान्य" है, लेकिन <strong>ICMR के एशियाई मानकों (18.5-22.9) के अनुसार यह "अधिक वज़न"</strong> की श्रेणी में आता है। यह भारतीय व्यक्ति को सतर्क होने और जीवनशैली में सुधार शुरू करने का संकेत है।
                </p>
              </div>
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
                भारतीय पुरुषों की शरीर संरचना और पेट की चर्बी के विशेष जोखिम
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
                PCOS, हार्मोनल कारकों और गर्भावस्था के साथ BMI को समझना
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
                क्रिकेट, कबड्डी और अन्य खेलों के खिलाड़ियों के लिए BMI मार्गदर्शन
              </p>
            </Link>
          </div>

          {/* SEO Content - Indian Specific */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">भारतीयों के लिए BMI कैलकुलेटर - संपूर्ण मार्गदर्शन</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                यह <strong>BMI कैलकुलेटर</strong> विशेष रूप से भारतीय उपयोगकर्ताओं के लिए तैयार किया गया है। <strong>ICMR (भारतीय चिकित्सा अनुसंधान परिषद)</strong> और <strong>NIN हैदराबाद (राष्ट्रीय पोषण संस्थान)</strong> के दिशा-निर्देशों के अनुसार, भारतीयों के लिए एशियाई BMI कटऑफ का उपयोग करना चिकित्सकीय रूप से अधिक सटीक है। हमारा कैलकुलेटर WHO और भारतीय दोनों मानक दिखाता है ताकि आप सही तुलना कर सकें।
              </p>
              <p>
                <strong>शाकाहारी आहार और BMI:</strong> भारत विश्व में सबसे अधिक शाकाहारी आबादी वाला देश है। शाकाहारी आहार में प्रोटीन के प्रमुख स्रोत दालें, पनीर, दही, सोयाबीन, और सूखे मेवे हैं। <strong>FSSAI</strong> के अनुसार, एक संतुलित शाकाहारी थाली में पर्याप्त प्रोटीन, कार्बोहाइड्रेट, वसा, विटामिन और खनिज होने चाहिए। सही शाकाहारी आहार से स्वस्थ BMI बनाए रखना पूरी तरह संभव है।
              </p>
              <p>
                <strong>भारतीय थाली का सिद्धांत:</strong> पारंपरिक भारतीय थाली पोषण विज्ञान का एक उत्कृष्ट उदाहरण है - रोटी या चावल (कार्बोहाइड्रेट), दाल (प्रोटीन), सब्ज़ी (फाइबर और विटामिन), दही (प्रोबायोटिक्स), और सलाद (एंटीऑक्सीडेंट)। NIN हैदराबाद की "माय प्लेट फॉर द डे" गाइडलाइन भी इसी संतुलन पर आधारित है। थाली की मात्रा नियंत्रित रखकर और तले हुए भोजन को सीमित करके BMI को स्वस्थ सीमा में रखा जा सकता है।
              </p>
              <p>
                चाहे आप <strong>ऑनलाइन BMI जांच</strong> करना चाहते हों, <strong>भारतीय BMI मानक</strong> समझना चाहते हों, या <strong>एशियाई BMI कटऑफ</strong> के बारे में जानना चाहते हों - यह उपकरण आपकी मदद के लिए तैयार है। याद रखें कि BMI एक स्क्रीनिंग टूल है, अंतिम निदान नहीं। अपने <strong>BMI को ICMR मानकों</strong> के अनुसार जांचें और किसी भी चिंता पर अपने चिकित्सक से परामर्श लें।
              </p>
            </div>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 BMI कैलकुलेटर</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIHi;
