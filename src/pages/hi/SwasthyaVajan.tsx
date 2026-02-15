import { Header } from "@/components/Header";
import { Heart, Activity, Apple, Moon, Brain, Scale, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const SwasthyaVajan = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-success/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            स्वास्थ्य और कल्याण
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-success">स्वास्थ्य और वजन</span> : संपूर्ण कल्याण मार्गदर्शिका
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            वजन, बीएमआई और समग्र स्वास्थ्य के बीच संबंध को समझें
          </p>
        </header>

        <div className="space-y-8">
          {/* परिचय */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Scale className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">वजन और स्वास्थ्य : एक जटिल संबंध</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>वजन</strong> आपके स्वास्थ्य की स्थिति का केवल एक संकेतक है।
                एक <strong>स्वस्थ वजन</strong> कई कारकों पर निर्भर करता है: आनुवंशिकी, शरीर की बनावट, शारीरिक गतिविधि,
                आहार, नींद और मानसिक स्वास्थ्य।
              </p>
              <p>
                तराजू पर अंकों का जुनून उल्टा असर कर सकता है। किसी निश्चित लक्ष्य वजन की तुलना में
                <strong> स्वस्थ जीवनशैली की आदतों</strong> पर ध्यान केंद्रित करना अधिक महत्वपूर्ण है।
                स्वास्थ्य केवल किलोग्राम में नहीं मापा जाता।
              </p>
            </div>
          </div>

          {/* स्वास्थ्य जोखिम */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">वजन से जुड़े जोखिम</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-warning">अधिक वजन और मोटापे के जोखिम</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>हृदय रोग (दिल का दौरा, स्ट्रोक)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>टाइप 2 मधुमेह</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>उच्च रक्तचाप</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>स्लीप एपनिया</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>कुछ प्रकार के कैंसर</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>जोड़ों की समस्याएं</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-info">कम वजन के जोखिम</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>पोषण संबंधी कमियां</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>कमजोर प्रतिरक्षा प्रणाली</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>ऑस्टियोपोरोसिस</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>हार्मोनल विकार</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>पुरानी थकान</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>प्रजनन संबंधी समस्याएं</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* स्वस्थ वजन के 5 स्तंभ */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">स्वस्थ वजन के 5 स्तंभ</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-green-500/10">
                    <Apple className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="font-bold">पोषण</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>असंसाधित खाद्य पदार्थों को प्राथमिकता दें</li>
                  <li>हर भोजन में सब्जियां शामिल करें</li>
                  <li>अतिरिक्त चीनी सीमित करें</li>
                  <li>पर्याप्त पानी पिएं</li>
                  <li>भूख और तृप्ति के संकेतों को सुनें</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-orange-500/10">
                    <Activity className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold">शारीरिक गतिविधि</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>प्रति सप्ताह 150 मिनट मध्यम गतिविधि</li>
                  <li>मांसपेशियों को मजबूत करने वाले व्यायाम शामिल करें</li>
                  <li>दिन भर नियमित रूप से चलें-फिरें</li>
                  <li>ऐसी गतिविधि खोजें जो आपको पसंद हो</li>
                  <li>धीरे-धीरे प्रगति करें</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10">
                    <Moon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="font-bold">नींद</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>प्रति रात 7-9 घंटे सोएं</li>
                  <li>नियमित समय पर सोएं और जागें</li>
                  <li>सोने से पहले स्क्रीन से बचें</li>
                  <li>कमरा ठंडा और अंधेरा रखें</li>
                  <li>नींद की कमी वजन बढ़ने को बढ़ावा देती है</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <Brain className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-bold">मानसिक स्वास्थ्य</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>अपने तनाव को प्रबंधित करें</li>
                  <li>भावनात्मक खान-पान से बचें</li>
                  <li>माइंडफुलनेस का अभ्यास करें</li>
                  <li>अपने शरीर को स्वीकार करें</li>
                  <li>जरूरत पड़ने पर विशेषज्ञ से परामर्श लें</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-pink-500/10">
                    <Heart className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="font-bold">चिकित्सा देखभाल</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>वार्षिक स्वास्थ्य जांच</li>
                  <li>कमर की परिधि पर नज़र रखें</li>
                  <li>रक्तचाप, रक्त शर्करा, कोलेस्ट्रॉल की जांच</li>
                  <li>जरूरत पड़ने पर पोषण विशेषज्ञ से मिलें</li>
                  <li>अत्यधिक डाइट का पालन न करें</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-success/10">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="font-bold">प्रगति</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>यथार्थवादी लक्ष्य निर्धारित करें</li>
                  <li>अधिकतम 0.5-1 किग्रा/सप्ताह</li>
                  <li>छोटी सफलताओं का जश्न मनाएं</li>
                  <li>निरंतरता तीव्रता से अधिक महत्वपूर्ण है</li>
                  <li>दीर्घकालिक सोचें</li>
                </ul>
              </div>
            </div>
          </div>

          {/* स्वस्थ वजन के सुझाव */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">स्वस्थ वजन के लिए सुझाव</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-success">क्या काम करता है</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>आदतों में <strong>क्रमिक और स्थायी</strong> बदलाव</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>संतुलित</strong> आहार, अत्यधिक प्रतिबंध नहीं</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>नियमित और आनंददायक</strong> शारीरिक गतिविधि</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>गुणवत्तापूर्ण</strong> नींद (7-8 घंटे/रात)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>तनाव</strong> और भावनाओं का प्रबंधन</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>जरूरत पड़ने पर <strong>विशेषज्ञ</strong> से परामर्श</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-destructive">क्या काम नहीं करता</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>कठोर</strong> और प्रतिबंधात्मक डाइट</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>चमत्कारी</strong> सप्लीमेंट और वजन घटाने की गोलियां</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>हर दिन</strong> वजन तौलना (सामान्य उतार-चढ़ाव)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>वजन घटाने के <strong>अवास्तविक</strong> लक्ष्य</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>अपने शरीर की <strong>दूसरों</strong> से तुलना करना</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>भूख/तृप्ति</strong> के संकेतों को अनदेखा करना</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO सामग्री */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">स्वास्थ्य और वजन : सार</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>स्वस्थ वजन</strong> बनाए रखना आपके समग्र कल्याण के लिए महत्वपूर्ण है। <strong>वजन और
                स्वास्थ्य</strong> के बीच का संबंध जटिल है और कई कारकों पर निर्भर करता है। <strong>बीएमआई</strong> यह
                मूल्यांकन करने के लिए कई संकेतकों में से एक है कि आप स्वस्थ वजन सीमा में हैं या नहीं।
              </p>
              <p>
                <strong>स्वस्थ तरीके से वजन कम करने</strong> या <strong>अपना वजन बनाए रखने</strong> के लिए, एक समग्र
                दृष्टिकोण अपनाएं: संतुलित आहार, नियमित शारीरिक गतिविधि, पर्याप्त नींद और तनाव प्रबंधन।
                यो-यो डाइटिंग से बचें क्योंकि यह स्वास्थ्य के लिए हानिकारक है।
              </p>
              <p>
                एक <strong>स्वस्थ जीवनशैली</strong> तराजू पर किसी अंक से अधिक महत्वपूर्ण है। वजन की बजाय
                <strong> जीवनशैली की आदतों</strong> पर ध्यान केंद्रित करें। संदेह होने पर, व्यक्तिगत मार्गदर्शन के
                लिए किसी स्वास्थ्य विशेषज्ञ से परामर्श लें।
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">अपना बीएमआई जानें</h3>
            <p className="text-muted-foreground mb-6">
              अपने स्वस्थ वजन का मूल्यांकन करने का पहला संकेतक
            </p>
            <Link
              to="/hi/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              मेरा बीएमआई जानें
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 स्वास्थ्य और वजन</p>
        </footer>
      </div>
    </div>
  );
};

export default SwasthyaVajan;
