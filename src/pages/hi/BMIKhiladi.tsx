import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Dumbbell, AlertTriangle, Target, Scale, Activity, TrendingUp, Globe } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";

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
            भारतीय खिलाड़ियों के लिए BMI
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-orange-500">भारतीय खिलाड़ियों के लिए BMI</span> : एशियाई मानक और सीमाएँ
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            विराट कोहली का BMI 'सामान्य' है लेकिन ICMR के एशियाई मानकों से कई भारतीय पहलवान 'मोटे' हैं। भारतीय खिलाड़ियों के लिए BMI की सीमाएँ।
          </p>
        </header>

        {/* Warning Banner */}
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-orange-500 mb-2">चेतावनी: BMI भारतीय खिलाड़ियों के लिए दोहरी समस्या है</h3>
              <p className="text-muted-foreground">
                BMI <strong>मांसपेशियों के वजन</strong> और <strong>वसा के वजन</strong> में अंतर नहीं करता।
                इसके ऊपर, ICMR के अनुसार दक्षिण एशियाई लोगों में <strong>अधिक वजन 23 BMI</strong> से शुरू होता है (WHO के 25 की बजाय) -- इसलिए भारतीय
                खिलाड़ी और भी कम BMI पर "अधिक वजन" श्रेणी में आ जाते हैं, जबकि वे पूरी तरह फिट हैं।
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
              FFMI भारतीय खिलाड़ियों के लिए BMI से कहीं बेहतर संकेतक है -- यह केवल दुबले द्रव्यमान को मापता है और एशियाई BMI कटऑफ की समस्या से बचता है।
              SAI (भारतीय खेल प्राधिकरण) भी शरीर संरचना पर BMI से अधिक भरोसा करता है।
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
          {/* Why BMI fails for Indian athletes */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Scale className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारतीय खिलाड़ियों के लिए BMI क्यों विफल होता है</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                BMI सभी खिलाड़ियों के लिए समस्याग्रस्त है, लेकिन <strong>भारतीय और दक्षिण एशियाई खिलाड़ियों</strong> के लिए यह
                <strong> दोहरी मार</strong> है। पहली समस्या वही पुरानी है: BMI <strong>मांसपेशियों और वसा</strong> में
                फर्क नहीं करता। <strong>मांसपेशी वसा से अधिक सघन होती है</strong> -- समान आयतन में इसका वजन ज़्यादा होता है।
              </p>
              <p>
                लेकिन दूसरी समस्या भारतीयों के लिए विशिष्ट है: <strong>ICMR (Indian Council of Medical Research)</strong> और
                WHO ने दक्षिण एशियाई लोगों के लिए <strong>कम BMI कटऑफ</strong> निर्धारित किए हैं --
                अधिक वजन <strong>23 BMI</strong> से शुरू होता है (25 की बजाय) और मोटापा <strong>25 BMI</strong> से (30 की बजाय)।
                इसका मतलब है कि एक भारतीय क्रिकेटर जिसका BMI 24 है, वह ICMR मानकों से पहले से ही "अधिक वजन" में आता है!
              </p>
              <p>
                यह इसलिए है क्योंकि शोध से पता चला है कि <strong>दक्षिण एशियाई लोगों में</strong> समान BMI पर
                पश्चिमी आबादी की तुलना में <strong>अधिक शरीर वसा और अधिक आंत वसा (visceral fat)</strong> होती है।
                लेकिन यह सामान्य जनता के लिए सही हो सकता है -- <strong>खिलाड़ियों के लिए ये कम कटऑफ और भी बेतुके</strong> हो जाते हैं।
              </p>
            </div>
          </div>

          {/* Famous Indian Athletes */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Dumbbell className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">प्रसिद्ध भारतीय खिलाड़ियों का BMI</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              देखिए कैसे भारत के शीर्ष खिलाड़ी ICMR के एशियाई कटऑफ (23 से अधिक वजन) में "अधिक वजन" दिखते हैं, जबकि वे शीर्ष एथलीट हैं।
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1 text-lg">विराट कोहली</h4>
                <p className="text-sm text-orange-500 font-medium mb-3">क्रिकेट (Team India, IPL)</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>* लंबाई: 1.75 मी</li>
                  <li>* वजन: ~75 kg</li>
                  <li>* BMI: ~24.5</li>
                  <li>* WHO मानक: "सामान्य"</li>
                  <li>* <strong className="text-warning">ICMR मानक: "अधिक वजन" (23 से ऊपर!)</strong></li>
                  <li>* वास्तविकता: भारत के सबसे फिट क्रिकेटर, सख्त आहार और प्रशिक्षण</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1 text-lg">नीरज चोपड़ा</h4>
                <p className="text-sm text-orange-500 font-medium mb-3">भाला फेंक (Olympic Gold Medalist)</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>* लंबाई: 1.87 मी</li>
                  <li>* वजन: ~86 kg</li>
                  <li>* BMI: ~24.6</li>
                  <li>* WHO मानक: "सामान्य"</li>
                  <li>* <strong className="text-warning">ICMR मानक: "अधिक वजन" (23 से ऊपर!)</strong></li>
                  <li>* वास्तविकता: ओलंपिक स्वर्ण पदक विजेता, विश्व स्तरीय एथलीट</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1 text-lg">सुशील कुमार</h4>
                <p className="text-sm text-orange-500 font-medium mb-3">कुश्ती (2x Olympic Medalist)</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>* लंबाई: 1.70 मी</li>
                  <li>* वजन: ~74 kg</li>
                  <li>* BMI: ~25.6</li>
                  <li>* WHO मानक: "अधिक वजन"</li>
                  <li>* <strong className="text-destructive">ICMR मानक: "मोटापा" (25 से ऊपर!)</strong></li>
                  <li>* वास्तविकता: दो बार ओलंपिक पदक विजेता, भारतीय कुश्ती के दिग्गज</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 bg-orange-500/5 p-3 rounded-lg">
              <strong>ध्यान दें:</strong> ICMR के एशियाई कटऑफ के अनुसार, तीनों खिलाड़ी "अधिक वजन" या "मोटे" हैं --
              जबकि ये भारत के सबसे फिट और सफल एथलीट हैं। यह साबित करता है कि BMI खिलाड़ियों के लिए पूरी तरह अप्रासंगिक है।
            </p>
          </div>

          {/* Indian Sports BMI Ranges */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारतीय खेलों में BMI सीमाएँ</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1 text-lg">क्रिकेट</h4>
                <p className="text-xs text-orange-500 font-medium mb-3">IPL, Team India -- भारत का #1 खेल</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>* BMI सीमा: 22-26</li>
                  <li>* शरीर वसा: 10-18%</li>
                  <li>* बल्लेबाज़ दुबले-पतले, तेज़ गेंदबाज़ भारी</li>
                  <li>* BCCI खेल विज्ञान विभाग BMI नहीं, शरीर संरचना मापता है</li>
                  <li>* ICMR कटऑफ से अधिकांश तेज़ गेंदबाज़ "अधिक वजन" हैं</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1 text-lg">कुश्ती</h4>
                <p className="text-xs text-orange-500 font-medium mb-3">अखाड़ा परंपरा, Olympic Wrestling</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>* BMI सीमा: 25-32</li>
                  <li>* शरीर वसा: 8-20% (वजन वर्ग के अनुसार)</li>
                  <li>* भारत की सबसे पुरानी खेल परंपरा</li>
                  <li>* फोगाट बहनें, बजरंग पूनिया -- सब "मोटे" BMI पर</li>
                  <li>* ICMR कटऑफ से लगभग हर पहलवान "मोटापा" श्रेणी में</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1 text-lg">कबड्डी</h4>
                <p className="text-xs text-orange-500 font-medium mb-3">Pro Kabaddi League -- भारत का पारंपरिक खेल</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>* BMI सीमा: 24-28</li>
                  <li>* शरीर वसा: 12-20%</li>
                  <li>* रेडर दुबले और फुर्तीले, डिफेंडर भारी और शक्तिशाली</li>
                  <li>* PKL ने भारतीय खिलाड़ियों की फिटनेस को बदला</li>
                  <li>* शरीर प्रकार खेल की भूमिका पर निर्भर</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1 text-lg">बॉडीबिल्डिंग</h4>
                <p className="text-xs text-orange-500 font-medium mb-3">भारत में बढ़ता हुआ खेल</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>* BMI सीमा: 28-35</li>
                  <li>* शरीर वसा: 5-15%</li>
                  <li>* भारत में जिम संस्कृति तेज़ी से बढ़ रही है</li>
                  <li>* ICMR कटऑफ से हर बॉडीबिल्डर "गंभीर मोटापा"</li>
                  <li>* BMI सबसे ज़्यादा भ्रामक यहीं है</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Asian BMI Cutoffs and Athletes - Critical unique section */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Globe className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">एशियाई BMI कटऑफ और खिलाड़ी</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>ICMR (Indian Council of Medical Research)</strong> और WHO ने 2004 में दक्षिण एशियाई और एशियाई आबादी के लिए
                <strong> अलग BMI कटऑफ</strong> प्रकाशित किए। इसके अनुसार:
              </p>
              <div className="overflow-x-auto my-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 px-4 font-bold">श्रेणी</th>
                      <th className="text-left py-3 px-4 font-bold">WHO मानक (अंतर्राष्ट्रीय)</th>
                      <th className="text-left py-3 px-4 font-bold">ICMR / एशियाई मानक</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">सामान्य</td>
                      <td className="py-3 px-4">18.5 - 24.9</td>
                      <td className="py-3 px-4 font-bold">18.5 - 22.9</td>
                    </tr>
                    <tr className="border-b border-border/50 bg-warning/5">
                      <td className="py-3 px-4">अधिक वजन</td>
                      <td className="py-3 px-4">25.0 - 29.9</td>
                      <td className="py-3 px-4 font-bold text-warning">23.0 - 24.9</td>
                    </tr>
                    <tr className="bg-destructive/5">
                      <td className="py-3 px-4">मोटापा</td>
                      <td className="py-3 px-4">30.0+</td>
                      <td className="py-3 px-4 font-bold text-destructive">25.0+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                सामान्य जनता के लिए ये कम कटऑफ वैज्ञानिक रूप से उचित हैं -- दक्षिण एशियाई लोगों में समान BMI पर
                <strong> अधिक आंत वसा (visceral fat)</strong> होती है और <strong>मधुमेह व हृदय रोग</strong> का जोखिम अधिक होता है।
              </p>
              <p>
                <strong>लेकिन खिलाड़ियों के लिए?</strong> ये कटऑफ और भी अधिक बेतुके हो जाते हैं। अगर अंतर्राष्ट्रीय BMI मानक
                पहले से ही खिलाड़ियों के लिए भ्रामक है, तो <strong>ICMR का 23 का कटऑफ</strong> लगभग हर भारतीय खिलाड़ी को
                "अधिक वजन" बना देता है। विराट कोहली (BMI 24.5), नीरज चोपड़ा (BMI 24.6) -- दोनों ICMR मानक से "अधिक वजन" हैं!
              </p>
              <p>
                <strong>इसीलिए भारतीय खेल प्राधिकरण (SAI)</strong> और <strong>NSNIS पटियाला</strong> जैसे संस्थान
                खिलाड़ियों के मूल्यांकन के लिए <strong>BMI का उपयोग नहीं करते</strong>। वे शरीर संरचना विश्लेषण
                (body composition analysis) -- DEXA स्कैन, BIA, और स्किनफोल्ड माप -- पर निर्भर करते हैं।
                <strong> खिलाड़ियों के लिए BMI -- चाहे WHO का हो या ICMR का -- पूरी तरह अर्थहीन है</strong>।
              </p>
            </div>
          </div>

          {/* Indian Sports and Body Composition */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Dumbbell className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारतीय खेल और शरीर रचना</h2>
            </div>
            <div className="text-muted-foreground space-y-6">
              <div>
                <h4 className="font-bold text-foreground mb-2">क्रिकेट: दुबलापन + विस्फोटक शक्ति</h4>
                <p>
                  आधुनिक क्रिकेट में फिटनेस क्रांति आ चुकी है। <strong>BCCI के खेल विज्ञान विभाग</strong> ने
                  yo-yo टेस्ट और शरीर संरचना विश्लेषण अनिवार्य कर दिया है। विराट कोहली ने भारतीय क्रिकेट में फिटनेस
                  संस्कृति बदल दी -- लेकिन BMI पर नहीं, <strong>शरीर वसा प्रतिशत, शक्ति, और सहनशक्ति</strong> पर ध्यान दिया जाता है।
                  बल्लेबाज़ आमतौर पर दुबले होते हैं जबकि तेज़ गेंदबाज़ों को अधिक मांसपेशी द्रव्यमान चाहिए।
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">कुश्ती: अखाड़ा परंपरा और आधुनिक विज्ञान</h4>
                <p>
                  भारत में कुश्ती की <strong>हज़ारों साल पुरानी अखाड़ा परंपरा</strong> है। फोगाट बहनों, बजरंग पूनिया,
                  और सुशील कुमार ने ओलंपिक स्तर पर भारत का नाम रोशन किया। पहलवानों की शरीर रचना <strong>वजन वर्ग</strong> के अनुसार
                  बहुत भिन्न होती है -- 57 kg वर्ग का पहलवान 125 kg वर्ग से बिल्कुल अलग दिखता है।
                  लेकिन BMI दोनों को एक ही पैमाने पर मापने की कोशिश करता है।
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">कबड्डी: रेडर बनाम डिफेंडर शरीर प्रकार</h4>
                <p>
                  <strong>Pro Kabaddi League</strong> ने कबड्डी को पेशेवर खेल बना दिया है। कबड्डी में
                  <strong> रेडर</strong> दुबले, फुर्तीले और चपल होते हैं (BMI 22-25) जबकि <strong>डिफेंडर</strong>
                  भारी, शक्तिशाली और ऊँचे होते हैं (BMI 26-30)। एक ही खेल में दो बिल्कुल अलग शरीर प्रकार --
                  BMI इस विविधता को नहीं पकड़ सकता।
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">योग और क्रियात्मक फिटनेस: लचीलापन बनाम भार</h4>
                <p>
                  भारत की <strong>योग परंपरा</strong> एक अलग ही शारीरिक दृष्टिकोण प्रस्तुत करती है -- यहाँ ध्यान
                  <strong> लचीलेपन, संतुलन और आंतरिक शक्ति</strong> पर है, भारी मांसपेशियों पर नहीं।
                  योगी का BMI "सामान्य" हो सकता है, लेकिन एक पहलवान या भारोत्तोलक का नहीं -- दोनों अपने क्षेत्र के शीर्ष एथलीट हैं।
                  BMI इन अलग-अलग एथलेटिक शरीर प्रकारों को मापने में पूरी तरह विफल है।
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">आयुर्वेद प्रकृति और एथलेटिक शरीर रचना</h4>
                <p>
                  भारतीय आयुर्वेदिक चिकित्सा में <strong>तीन प्रकृति</strong> (शारीरिक संरचना) मानी जाती हैं।
                  <strong> कफ प्रकृति</strong> के लोग स्वाभाविक रूप से भारी और मज़बूत होते हैं -- कुश्ती और भारोत्तोलन के लिए उपयुक्त।
                  <strong> पित्त प्रकृति</strong> के लोग मध्यम शरीर वाले और प्रतिस्पर्धी होते हैं -- क्रिकेट और कबड्डी के लिए।
                  <strong> वात प्रकृति</strong> दुबली-पतली होती है -- दौड़ और सहनशक्ति खेलों के लिए। BMI इन प्राकृतिक
                  शारीरिक विविधताओं को पूरी तरह अनदेखा करता है।
                </p>
              </div>
            </div>
          </div>

          {/* Alternatives Table */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Target className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारतीय खिलाड़ियों के लिए BMI के विकल्प</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              SAI (भारतीय खेल प्राधिकरण), NSNIS पटियाला, और भारतीय खेल चिकित्सा संस्थान ये तरीके अपनाते हैं:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">विधि</th>
                    <th className="text-left py-3 px-4 font-bold">लाभ</th>
                    <th className="text-left py-3 px-4 font-bold">भारत में उपलब्धता</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">FFMI</td>
                    <td className="py-3 px-4">केवल वसा-मुक्त द्रव्यमान, एशियाई कटऑफ समस्या से मुक्त</td>
                    <td className="py-3 px-4">SAI केंद्र, NSNIS पटियाला, बड़े जिम</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">शरीर वसा प्रतिशत</td>
                    <td className="py-3 px-4">वसा का सीधा मापन, मांसपेशी से भ्रमित नहीं</td>
                    <td className="py-3 px-4">BIA मशीन अधिकांश जिम में उपलब्ध</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">DEXA स्कैन</td>
                    <td className="py-3 px-4">सटीक शारीरिक संरचना विश्लेषण -- स्वर्ण मानक</td>
                    <td className="py-3 px-4">SAI, AIIMS, बड़े अस्पताल, खेल विज्ञान केंद्र</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">कमर की परिधि</td>
                    <td className="py-3 px-4">पेट की चर्बी का सरल संकेतक</td>
                    <td className="py-3 px-4">घर पर माप सकते हैं (पुरुष: &lt;90 cm, महिला: &lt;80 cm भारतीय मानक)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">स्किनफोल्ड माप</td>
                    <td className="py-3 px-4">सस्ता और तेज़, प्रशिक्षित व्यक्ति द्वारा सटीक</td>
                    <td className="py-3 px-4">अखाड़े, SAI केंद्र, फिटनेस ट्रेनर</td>
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
              <h2 className="text-2xl font-display font-bold">भारतीय खिलाड़ियों का BMI: ICMR, SAI और वास्तविकता</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>भारतीय खिलाड़ियों के लिए BMI गणना</strong> एक दोहरी समस्या है। पहली समस्या: BMI
                <strong> मांसपेशियों और वसा</strong> में अंतर नहीं करता -- यह सभी खिलाड़ियों के लिए सच है।
                दूसरी समस्या विशेष रूप से भारतीय है: <strong>ICMR के एशियाई BMI कटऑफ</strong> (अधिक वजन 23 से, मोटापा 25 से)
                और भी अधिक खिलाड़ियों को गलत तरीके से "अधिक वजन" या "मोटापा" श्रेणी में डालते हैं।
              </p>
              <p>
                <strong>क्रिकेट</strong> में विराट कोहली से लेकर जसप्रीत बुमराह तक, <strong>कुश्ती</strong> में
                सुशील कुमार और फोगाट बहनों से लेकर, <strong>कबड्डी</strong> के Pro Kabaddi League खिलाड़ियों तक,
                और <strong>भाला फेंक</strong> में नीरज चोपड़ा तक -- भारत के शीर्ष एथलीट ICMR मानकों से "अधिक वजन" या
                "मोटे" दिखते हैं जबकि वे विश्व स्तर पर प्रतिस्पर्धा करते हैं।
              </p>
              <p>
                <strong>भारतीय खेल प्राधिकरण (SAI)</strong>, <strong>NSNIS पटियाला</strong>, और <strong>भारतीय खेल चिकित्सा</strong>
                के विशेषज्ञ खिलाड़ियों का मूल्यांकन <strong>शरीर संरचना विश्लेषण</strong> से करते हैं, BMI से नहीं।
                <strong> DEXA स्कैन</strong>, <strong>BIA (बायोइलेक्ट्रिकल इम्पीडेंस)</strong>, और <strong>स्किनफोल्ड माप</strong>
                -- ये तरीके भारतीय खिलाड़ियों के स्वास्थ्य और फिटनेस का सही चित्र देते हैं।
              </p>
              <p>
                अगर आप एक <strong>भारतीय खिलाड़ी</strong> हैं -- चाहे क्रिकेट, कुश्ती, कबड्डी, भारोत्तोलन या कोई अन्य खेल --
                तो <strong>अपने BMI को अनदेखा करें</strong>। <strong>शरीर वसा प्रतिशत</strong>, <strong>FFMI</strong>,
                या <strong>कमर की परिधि</strong> (भारतीय मानक: पुरुष &lt;90 cm, महिला &lt;80 cm) पर ध्यान दें।
                ये संकेतक आपकी वास्तविक फिटनेस और स्वास्थ्य का मूल्यांकन करने के लिए कहीं अधिक सटीक हैं।
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">यह भी देखें</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/hi/bmi" className="block p-4 rounded-xl border border-border hover:border-orange-500/50 transition-colors text-center">
                <p className="font-bold">BMI गणना</p>
                <p className="text-sm text-muted-foreground">सामान्य BMI कैलकुलेटर</p>
              </Link>
              <Link to="/hi/bmi-purush" className="block p-4 rounded-xl border border-border hover:border-orange-500/50 transition-colors text-center">
                <p className="font-bold">पुरुषों का BMI</p>
                <p className="text-sm text-muted-foreground">पुरुषों के लिए BMI गणना</p>
              </Link>
              <Link to="/hi/bmi-mahila" className="block p-4 rounded-xl border border-border hover:border-orange-500/50 transition-colors text-center">
                <p className="font-bold">महिलाओं का BMI</p>
                <p className="text-sm text-muted-foreground">महिलाओं के लिए BMI गणना</p>
              </Link>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 भारतीय खिलाड़ियों के लिए BMI</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIKhiladi;
