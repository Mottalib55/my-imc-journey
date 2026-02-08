import { Header } from "@/components/Header";
import { Baby, AlertTriangle, TrendingUp, BookOpen, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const BMIBachche = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-medium mb-6">
            <Baby className="w-4 h-4" />
            बच्चों और किशोरों के लिए BMI
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-cyan-500">बच्चों के लिए BMI</span> : एक अलग गणना
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            बच्चों और किशोरों में BMI को समझना: विकास वक्र और विशेषताएँ
          </p>
        </header>

        {/* Medical Warning */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Stethoscope className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-destructive mb-2">चिकित्सा परामर्श की सिफारिश</h3>
              <p className="text-muted-foreground">
                बच्चों में BMI के लिए <strong>चिकित्सकीय व्याख्या</strong> आवश्यक है।
                उचित निगरानी के लिए अपने <strong>बाल रोग विशेषज्ञ</strong> या <strong>चिकित्सक</strong> से परामर्श करें।
                नीचे दी गई जानकारी केवल सूचनात्मक है।
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Difference with adults */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <AlertTriangle className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">वयस्क और बाल BMI में अंतर</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                वयस्कों के विपरीत, <strong>बाल BMI</strong> की व्याख्या निश्चित सीमाओं
                (18.5 / 25 / 30) से नहीं की जाती। बच्चों और किशोरों में शरीर लगातार विकसित होता रहता है,
                और BMI स्वाभाविक रूप से उम्र और लिंग के अनुसार बदलता रहता है।
              </p>
              <p>
                इसलिए <strong>शारीरिक विकास वक्र</strong> (या पर्सेंटाइल वक्र) का उपयोग किया जाता है,
                जो बच्चे की तुलना उसी उम्र और लिंग के अन्य बच्चों से करने में मदद करते हैं।
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                <h4 className="font-bold text-destructive mb-2">वयस्क BMI</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• निश्चित सार्वभौमिक सीमाएँ</li>
                  <li>• &lt;18.5 = कम वज़न</li>
                  <li>• 18.5-25 = सामान्य</li>
                  <li>• 25-30 = अधिक वज़न</li>
                  <li>• &gt;30 = मोटापा</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">बाल BMI</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• पर्सेंटाइल वक्र</li>
                  <li>• उम्र के अनुसार बदलता है</li>
                  <li>• लड़का/लड़की में भिन्न</li>
                  <li>• सापेक्ष व्याख्या</li>
                  <li>• विकास की निगरानी</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Growth Curves */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <TrendingUp className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">विकास वक्र</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>शारीरिक विकास वक्र</strong> आपके बच्चे के स्वास्थ्य रिकॉर्ड में मौजूद होते हैं।
                ये समय के साथ BMI के विकास को ट्रैक करने में मदद करते हैं।
              </p>

              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-4">पर्सेंटाइल कैसे पढ़ें?</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong className="text-info">3वाँ पर्सेंटाइल:</strong> कम वज़न का क्षेत्र</p>
                    <p><strong className="text-success">3वाँ-97वाँ पर्सेंटाइल:</strong> सामान्य क्षेत्र</p>
                    <p><strong className="text-warning">97वाँ पर्सेंटाइल:</strong> अधिक वज़न</p>
                    <p><strong className="text-destructive">&gt;97वाँ पर्सेंटाइल:</strong> मोटापा</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      50वें पर्सेंटाइल पर एक बच्चे का BMI उसकी उम्र के 50% बच्चों से अधिक और शेष 50% से कम होता है।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Age groups */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Baby className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">आयु समूह के अनुसार BMI</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">शिशु (0-2 वर्ष)</h4>
                <p className="text-sm text-muted-foreground">
                  BMI की गणना आमतौर पर नहीं की जाती। वज़न/लंबाई वक्र और सिर की परिधि का उपयोग किया जाता है।
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">बच्चा (2-12 वर्ष)</h4>
                <p className="text-sm text-muted-foreground">
                  BMI की व्याख्या शारीरिक विकास वक्र से की जाती है। लगभग 6 वर्ष की आयु में "एडिपोसिटी रिबाउंड" की निगरानी की जाती है।
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">किशोर (12-18 वर्ष)</h4>
                <p className="text-sm text-muted-foreground">
                  यौवन = महत्वपूर्ण बदलाव। लड़के/लड़की के लिए अलग-अलग वक्र आवश्यक हैं।
                </p>
              </div>
            </div>
          </div>

          {/* When to consult */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Stethoscope className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">डॉक्टर से कब मिलें?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5">
                <h4 className="font-bold text-warning mb-3">चेतावनी के संकेत</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• वक्र पर अचानक चैनल में बदलाव</li>
                  <li>• BMI &gt; 97वाँ पर्सेंटाइल</li>
                  <li>• BMI &lt; 3वाँ पर्सेंटाइल</li>
                  <li>• समय से पहले एडिपोसिटी रिबाउंड (&lt;6 वर्ष)</li>
                  <li>• बच्चे को अपने वज़न की चिंता</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-3">नियमित निगरानी</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• हर चिकित्सा जाँच में वज़न और माप</li>
                  <li>• स्वास्थ्य रिकॉर्ड के वक्रों पर दर्ज करें</li>
                  <li>• केवल एक बिंदु नहीं, पूरी प्रवृत्ति का पालन करें</li>
                  <li>• चिंता होने पर डॉक्टर से चर्चा करें</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <BookOpen className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">बाल BMI के बारे में सब कुछ जानें</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>बाल BMI गणना</strong> में वयस्कों जैसा ही सूत्र (वज़न / लंबाई²) उपयोग होता है,
                लेकिन <strong>बाल BMI की व्याख्या</strong> पूरी तरह भिन्न होती है। केवल इसलिए कि
                किसी बच्चे का BMI 25 से अधिक है, यह नहीं कहा जा सकता कि उसका वज़न अधिक है।
              </p>
              <p>
                यौवन के दौरान <strong>किशोर BMI</strong> की व्याख्या विशेष रूप से कठिन होती है।
                हार्मोनल परिवर्तन शरीर में महत्वपूर्ण बदलाव लाते हैं, जो <strong>लड़कों का BMI</strong> और
                <strong> लड़कियों का BMI</strong> में भिन्न होते हैं।
              </p>
              <p>
                <strong>शिशु BMI</strong> या <strong>नवजात BMI</strong> की गणना के लिए, बाल रोग विशेषज्ञ
                वज़न/लंबाई विकास वक्र का उपयोग करते हैं। <strong>3 वर्ष के बच्चे का BMI</strong>,
                <strong> 5 वर्ष के बच्चे का BMI</strong> या <strong>10 वर्ष के बच्चे का BMI</strong> हमेशा
                पर्सेंटाइल वक्र पर पढ़ा जाता है।
              </p>
              <p>
                यदि <strong>बच्चे का आदर्श वज़न</strong> या <strong>बच्चे का आदर्श BMI</strong> के बारे में
                कोई संदेह हो, तो अपने बाल रोग विशेषज्ञ से परामर्श करें जो पूरे <strong>शारीरिक विकास वक्र</strong> का
                विश्लेषण कर सकते हैं।
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">क्या आप वयस्क हैं?</h3>
            <p className="text-muted-foreground mb-6">
              वयस्कों के लिए हमारे मानक BMI कैलकुलेटर का उपयोग करें
            </p>
            <Link
              to="/hi/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              मेरा वयस्क BMI गणना करें
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 बच्चों के लिए BMI कैलकुलेटर - केवल सूचना के लिए</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIBachche;
