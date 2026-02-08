import { Header } from "@/components/Header";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface FAQItemProps { question: string; answer: string; }

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors">
        <span className="font-medium pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-muted-foreground">
          <div dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      )}
    </div>
  );
};

const BMIPrashn = () => {
  const faqs = [
    { question: "BMI वास्तव में क्या है?", answer: "<strong>बॉडी मास इंडेक्स (BMI)</strong> किसी व्यक्ति के शरीर के वजन का अनुमान लगाने का एक संकेतक है। इसकी गणना वजन (किलोग्राम में) को ऊंचाई (मीटर में) के वर्ग से विभाजित करके की जाती है। सूत्र: BMI = वजन / ऊंचाई²। यह स्वास्थ्य पेशेवरों द्वारा उपयोग किया जाने वाला एक त्वरित स्क्रीनिंग उपकरण है।" },
    { question: "मैं अपना BMI कैसे कैलकुलेट करूं?", answer: "अपना BMI कैलकुलेट करने के लिए, अपने वजन को किलोग्राम में अपनी ऊंचाई के मीटर में वर्ग से विभाजित करें। उदाहरण: यदि आपका वजन 70 किलो है और ऊंचाई 1.75 मीटर है: BMI = 70 / (1.75 × 1.75) = 70 / 3.0625 = <strong>22.9</strong>। आप हमारे <a href='/hi/bmi' class='text-primary hover:underline'>मुफ्त BMI कैलकुलेटर</a> का भी उपयोग कर सकते हैं।" },
    { question: "आदर्श BMI क्या है?", answer: "विश्व स्वास्थ्य संगठन के अनुसार, <strong>सामान्य BMI</strong> <strong>18.5 और 24.9</strong> के बीच होता है। यह वह सीमा है जिसमें स्वास्थ्य जोखिम सबसे कम होते हैं। हालांकि, आदर्श BMI उम्र, लिंग और शारीरिक गतिविधि के अनुसार भिन्न हो सकता है। इष्टतम BMI अक्सर लगभग 21-22 होता है।" },
    { question: "क्या BMI विश्वसनीय है?", answer: "BMI सामान्य जनसंख्या के लिए एक अच्छा संकेतक है, लेकिन इसकी <strong>सीमाएं</strong> हैं। यह मांसपेशी और वसा द्रव्यमान के बीच अंतर नहीं करता। एक मांसपेशियों वाले खिलाड़ी का BMI अधिक हो सकता है बिना अतिरिक्त वसा के। कमर की परिधि या शरीर में वसा प्रतिशत जैसे अन्य संकेतक पूरक हैं। हमारी <a href='/hi/bmi-seemayen' class='text-primary hover:underline'>BMI सीमाओं</a> पर पृष्ठ देखें।" },
    { question: "महिलाओं के लिए सामान्य BMI क्या है?", answer: "महिलाओं के लिए सामान्य BMI पुरुषों के समान ही है: <strong>18.5 से 24.9</strong>। हालांकि, महिलाओं में स्वाभाविक रूप से शरीर में वसा का प्रतिशत अधिक होता है (20-25% बनाम पुरुषों में 15-20%)। कमर की परिधि अक्सर अधिक प्रासंगिक होती है: यह 80 सेमी से अधिक नहीं होनी चाहिए। हमारे <a href='/hi/bmi-mahila' class='text-primary hover:underline'>महिलाओं के लिए BMI</a> पृष्ठ पर जाएं।" },
    { question: "पुरुषों के लिए सामान्य BMI क्या है?", answer: "पुरुषों के लिए सामान्य BMI <strong>18.5 और 24.9</strong> के बीच होता है। मांसपेशियों वाले पुरुषों का BMI अधिक हो सकता है (27-28 तक) बिना स्वास्थ्य समस्याओं के। कमर की परिधि एक महत्वपूर्ण पूरक संकेतक है: यह 94 सेमी से अधिक नहीं होनी चाहिए। हमारे <a href='/hi/bmi-purush' class='text-primary hover:underline'>पुरुषों के लिए BMI</a> पृष्ठ देखें।" },
    { question: "मैं अपने बच्चे का BMI कैसे कैलकुलेट करूं?", answer: "गणना वही है (वजन/ऊंचाई²), लेकिन <strong>व्याख्या अलग है</strong>। वयस्कों की सीमाएं (18.5/25/30) उपयोग नहीं की जाती हैं। उम्र और लिंग को ध्यान में रखते हुए BMI वक्र का उपयोग किया जाता है। बच्चे को पर्सेंटाइल वक्रों पर स्थित किया जाना चाहिए। हमारे <a href='/hi/bmi-bachche' class='text-primary hover:underline'>बच्चों के लिए BMI</a> पृष्ठ देखें।" },
    { question: "क्या गर्भावस्था में BMI कैलकुलेट किया जा सकता है?", answer: "<strong>नहीं</strong>, BMI गर्भावस्था के दौरान लागू नहीं होता। वजन बढ़ना सामान्य और आवश्यक है। गर्भावस्था से पहले के BMI का उपयोग अनुशंसित वजन वृद्धि निर्धारित करने के लिए संदर्भ के रूप में किया जाता है (सामान्य BMI पर 11-16 किलो)। व्यक्तिगत देखभाल के लिए अपने स्त्री रोग विशेषज्ञ से परामर्श करें।" },
    { question: "क्या BMI खिलाड़ियों पर भी लागू होता है?", answer: "<strong>BMI खिलाड़ियों के लिए भ्रामक है</strong>। यह सूत्र मांसपेशियों और वसा के बीच अंतर नहीं करता। 10% शरीर वसा वाले एक बॉडीबिल्डर का BMI 30+ हो सकता है (मोटापे के रूप में वर्गीकृत)। खिलाड़ियों के लिए <strong>FFMI</strong>, शरीर वसा प्रतिशत या कमर की परिधि बेहतर उपयुक्त हैं। हमारे <a href='/hi/bmi-khiladi' class='text-primary hover:underline'>खिलाड़ियों के लिए BMI</a> पृष्ठ देखें।" },
    { question: "किस BMI पर अधिक वजन शुरू होता है?", answer: "<strong>अधिक वजन</strong> <strong>25</strong> के BMI से शुरू होता है। 25 और 29.9 के बीच अधिक वजन (या प्री-ओबेसिटी) होता है। 30 से ऊपर मोटापा कहा जाता है। ये सीमाएं WHO द्वारा निर्धारित की गई हैं और दुनिया भर में उपयोग की जाती हैं।" },
    { question: "किस BMI पर मोटापा शुरू होता है?", answer: "<strong>मोटापा</strong> <strong>30</strong> के BMI से शुरू होता है। इसे तीन श्रेणियों में विभाजित किया गया है: श्रेणी I (30-34.9) = मध्यम मोटापा, श्रेणी II (35-39.9) = गंभीर मोटापा, श्रेणी III (≥40) = रुग्ण मोटापा। BMI जितना अधिक होता है, स्वास्थ्य जोखिम उतने अधिक होते हैं।" },
    { question: "प्रभावी रूप से वजन कैसे कम करें?", answer: "स्थायी रूप से वजन कम करने के लिए: <strong>1)</strong> मध्यम कैलोरी की कमी बनाएं (300-500 किलो कैलोरी/दिन), <strong>2)</strong> संतुलित, प्रोटीन युक्त आहार को प्राथमिकता दें, <strong>3)</strong> नियमित व्यायाम करें (कार्डियो + शक्ति प्रशिक्षण), <strong>4)</strong> पर्याप्त नींद लें (7-8 घंटे), <strong>5)</strong> धैर्य रखें: अधिकतम 0.5-1 किलो/सप्ताह का लक्ष्य रखें।" },
    { question: "क्या कमर की परिधि BMI से अधिक महत्वपूर्ण है?", answer: "कमर की परिधि BMI का एक <strong>उत्कृष्ट पूरक</strong> है। यह आंत की वसा को मापता है, जो स्वास्थ्य के लिए सबसे खतरनाक है। अनुशंसित सीमाएं: पुरुष <94 सेमी (मध्यम जोखिम), <102 सेमी (उच्च जोखिम)। महिलाएं <80 सेमी (मध्यम जोखिम), <88 सेमी (उच्च जोखिम)।" },
    { question: "क्या BMI उम्र के साथ बदलता है?", answer: "BMI का सूत्र वही रहता है, लेकिन <strong>व्याख्या भिन्न हो सकती है</strong>। 65 वर्ष के बाद, थोड़ा अधिक BMI (27 तक) सुरक्षात्मक हो सकता है। बढ़ती उम्र के साथ मांसपेशियों का द्रव्यमान कम होता है, जो BMI को भ्रामक बना सकता है। नियमित चिकित्सा निगरानी की सिफारिश की जाती है।" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-4xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            अक्सर पूछे जाने वाले प्रश्न
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">BMI FAQ</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            बॉडी मास इंडेक्स के बारे में सबसे अधिक पूछे जाने वाले प्रश्नों के उत्तर
          </p>
        </header>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">अभी अपना BMI कैलकुलेट करें</h3>
          <p className="text-muted-foreground mb-6">अपना BMI जानने के लिए हमारे मुफ्त कैलकुलेटर का उपयोग करें</p>
          <Link to="/hi/bmi" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">मेरा BMI कैलकुलेट करें</Link>
        </div>

        <div className="glass-card p-8 mt-8">
          <h2 className="text-2xl font-display font-bold mb-6">BMI के बारे में सब कुछ</h2>
          <div className="text-muted-foreground space-y-4">
            <p>यह <strong>BMI FAQ</strong> बॉडी मास इंडेक्स की गणना और व्याख्या के बारे में सबसे अधिक पूछे जाने वाले प्रश्नों का उत्तर देता है। चाहे आप जानना चाहते हों कि <strong>अपना BMI कैसे कैलकुलेट करें</strong>, <strong>आदर्श BMI क्या है</strong> या <strong>क्या BMI विश्वसनीय है</strong>, यहां आपको उत्तर मिलेंगे।</p>
            <p>BMI आपके शरीर के वजन का आकलन करने के लिए एक सरल लेकिन उपयोगी उपकरण है। हालांकि, इसकी अपनी सीमाएं हैं और इसे अन्य संकेतकों से पूरित किया जाना चाहिए। व्यापक मूल्यांकन के लिए किसी विशेषज्ञ से परामर्श करने में संकोच न करें।</p>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI FAQ</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIPrashn;
