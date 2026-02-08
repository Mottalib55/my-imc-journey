import { Header } from "@/components/Header";
import { HelpCircle, AlertTriangle, CheckCircle2, Scale, Activity, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const BMIVyakhya = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            BMI को समझें
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">BMI की व्याख्या</span>: अपने परिणाम समझें
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            आपके BMI परिणाम का क्या मतलब है और इसे सही संदर्भ में कैसे समझें
          </p>
        </header>

        <div className="space-y-8">
          {/* आपके BMI का क्या मतलब है */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">आपके BMI का क्या मतलब है?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>BMI</strong> (बॉडी मास इंडेक्स) एक संकेतक है जो यह त्वरित मूल्यांकन करने में
                मदद करता है कि आपका वजन आपकी ऊंचाई के अनुसार उचित है या नहीं। इसकी गणना
                वजन (किलोग्राम में) को ऊंचाई के वर्ग (मीटर में) से भाग देकर की जाती है।
              </p>
              <p>
                <strong>महत्वपूर्ण:</strong> BMI एक स्क्रीनिंग उपकरण है, निदान नहीं। एक चिकित्सक
                आपके स्वास्थ्य की स्थिति का आकलन करने के लिए अन्य कारकों (कमर की परिधि, मांसपेशी
                द्रव्यमान, चिकित्सा इतिहास) पर भी विचार करेगा।
              </p>
            </div>
          </div>

          {/* श्रेणी दर श्रेणी */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">श्रेणी दर श्रेणी</h2>
            </div>

            <div className="space-y-6">
              {/* कम वजन */}
              <div className="border-l-4 border-info pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <Scale className="w-5 h-5 text-info" />
                  <h3 className="font-bold text-lg">BMI 18.5 से कम: कम वजन</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  18.5 से कम BMI कम वजन का संकेत देता है। इसका मतलब हो सकता है:
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• अपर्याप्त कैलोरी सेवन</li>
                  <li>• बहुत तेज़ चयापचय (मेटाबॉलिज़्म)</li>
                  <li>• संभावित खान-पान विकार</li>
                  <li>• पोषक तत्वों की कमी का जोखिम</li>
                </ul>
                <p className="text-info font-medium mt-3">
                  सलाह: कारण की पहचान करने और अपने आहार को समायोजित करने के लिए डॉक्टर से परामर्श लें।
                </p>
              </div>

              {/* सामान्य वजन */}
              <div className="border-l-4 border-success pl-6 py-4 bg-success/5 rounded-r-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <h3 className="font-bold text-lg">BMI 18.5 से 24.9 के बीच: सामान्य वजन</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  यह आदर्श क्षेत्र है! आपका वजन आपकी ऊंचाई के अनुपात में संतुलित है।
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• स्वास्थ्य जोखिम न्यूनतम</li>
                  <li>• अच्छा ऊर्जा संतुलन</li>
                  <li>• लक्ष्य: वजन बनाए रखें</li>
                </ul>
                <p className="text-success font-medium mt-3">
                  सलाह: अपनी अच्छी खान-पान की आदतें और शारीरिक गतिविधि जारी रखें।
                </p>
              </div>

              {/* अधिक वजन */}
              <div className="border-l-4 border-warning pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  <h3 className="font-bold text-lg">BMI 25 से 29.9 के बीच: अधिक वजन</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  आपका वजन सामान्य से थोड़ा अधिक है। यह एक चेतावनी संकेत है, आपातकाल नहीं।
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• पुरानी बीमारियों का बढ़ा हुआ जोखिम</li>
                  <li>• संभावित उच्च रक्तचाप</li>
                  <li>• मांसपेशी द्रव्यमान के कारण भी हो सकता है (खिलाड़ी)</li>
                </ul>
                <p className="text-warning font-medium mt-3">
                  सलाह: संतुलित आहार अपनाएं और अपनी शारीरिक गतिविधि बढ़ाएं।
                </p>
              </div>

              {/* मोटापा */}
              <div className="border-l-4 border-destructive pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-destructive" />
                  <h3 className="font-bold text-lg">BMI 30 से अधिक: मोटापा</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  मोटापा स्वास्थ्य जोखिमों को काफी हद तक बढ़ा देता है।
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• श्रेणी I (30-34.9): मध्यम मोटापा</li>
                  <li>• श्रेणी II (35-39.9): गंभीर मोटापा</li>
                  <li>• श्रेणी III (&ge;40): अत्यधिक मोटापा</li>
                </ul>
                <p className="text-destructive font-medium mt-3">
                  सलाह: व्यक्तिगत देखभाल के लिए चिकित्सकीय परामर्श की सिफारिश की जाती है।
                </p>
              </div>
            </div>
          </div>

          {/* विचार करने योग्य कारक */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">विचार करने योग्य कारक</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">BMI इन कारणों से भ्रामक हो सकता है:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>मांसपेशी द्रव्यमान</strong>: खिलाड़ियों का BMI अधिक होता है</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>आयु</strong>: वृद्ध लोग मांसपेशी द्रव्यमान खो देते हैं</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>लिंग</strong>: महिलाओं में स्वाभाविक रूप से अधिक वसा होती है</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>जातीयता</strong>: जनसंख्या के अनुसार अलग-अलग सीमाएं</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>हड्डी की संरचना</strong>: कुल वजन को प्रभावित कर सकती है</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">पूरक संकेतक:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>कमर की परिधि</strong>: &lt;94 सेमी (पुरुष) / &lt;80 सेमी (महिला)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>कमर-कूल्हे का अनुपात</strong>: वसा वितरण</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>शरीर में वसा प्रतिशत</strong>: वास्तविक शारीरिक संरचना</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>रक्त परीक्षण</strong>: कोलेस्ट्रॉल, ग्लूकोज, आदि</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* परिणाम के अनुसार क्या करें */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">परिणाम के अनुसार क्या करें?</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                आपका BMI केवल एक शुरुआती बिंदु है। यहां अनुशंसित अगले कदम दिए गए हैं:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>अपना वर्तमान BMI नोट करें</strong> संदर्भ के रूप में</li>
                <li><strong>अपनी कमर की परिधि मापें</strong> मूल्यांकन को पूरा करने के लिए</li>
                <li><strong>डॉक्टर से परामर्श लें</strong> यदि आपका BMI सामान्य सीमा से बाहर है</li>
                <li><strong>यथार्थवादी लक्ष्य निर्धारित करें</strong>: प्रति सप्ताह अधिकतम 0.5-1 किलो वजन घटाएं</li>
                <li><strong>अपनी प्रगति पर नज़र रखें</strong>: सप्ताह में एक बार वजन करें, एक ही दिन, एक ही समय</li>
              </ol>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">BMI की व्याख्या को समझना</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>BMI की व्याख्या</strong> यह समझने के लिए आवश्यक है कि आपके
                <strong> BMI परिणाम</strong> का क्या मतलब है। <strong>अपना BMI कैसे पढ़ें</strong> यह जानने से
                आप यह निर्धारित कर सकते हैं कि आप स्वस्थ वजन क्षेत्र में हैं या समायोजन
                आवश्यक है।
              </p>
              <p>
                <strong>BMI की व्याख्या कैसे करें</strong>? WHO की श्रेणियां स्पष्ट रूप से परिभाषित करती हैं
                कि 22, 25 या 30 के <strong>BMI का क्या मतलब है</strong>। <strong>BMI विश्लेषण</strong>
                में हमेशा संदर्भ पर विचार करना चाहिए: आयु, लिंग, शारीरिक गतिविधि।
              </p>
              <p>
                <strong>आदर्श BMI</strong> 18.5 और 24.9 के बीच होता है। <strong>अपना BMI समझने</strong>
                का मतलब यह भी है कि इस सूचकांक की सीमाएं हैं। पूर्ण <strong>BMI स्पष्टीकरण</strong>
                में कमर की परिधि जैसे अन्य संकेतकों पर भी विचार करना शामिल है।
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">अभी अपना BMI कैलकुलेट करें</h3>
            <p className="text-muted-foreground mb-6">
              अपना बॉडी मास इंडेक्स जानने के लिए हमारे मुफ्त कैलकुलेटर का उपयोग करें
            </p>
            <Link
              to="/hi/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              अपना BMI कैलकुलेट करें
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 BMI व्याख्या</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIVyakhya;
