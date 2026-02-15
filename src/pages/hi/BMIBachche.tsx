import { Header } from "@/components/Header";
import { Baby, AlertTriangle, TrendingUp, BookOpen, Stethoscope, Globe, Users } from "lucide-react";
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
            भारतीय बच्चों के लिए BMI — IAP विकास चार्ट
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-cyan-500">भारतीय बच्चों और किशोरों के लिए BMI</span> — IAP और ICMR मानक
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            भारत में दोहरा बोझ: कुपोषण और बढ़ता मोटापा एक साथ। NFHS-5 के अनुसार शहरी बच्चों में मोटापा तेजी से बढ़ रहा है। IAP (Indian Academy of Pediatrics) विकास चार्ट भारतीय बच्चों के लिए विशेष रूप से विकसित किए गए हैं।
          </p>
        </header>

        {/* Medical Warning */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Stethoscope className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-destructive mb-2">चिकित्सा परामर्श अनिवार्य</h3>
              <p className="text-muted-foreground">
                बच्चों में BMI की व्याख्या के लिए <strong>बाल रोग विशेषज्ञ</strong> से परामर्श अनिवार्य है।
                भारतीय बच्चों के लिए <strong>IAP विकास चार्ट</strong> का उपयोग करें, न कि वयस्क BMI सीमाओं का।
                आशा कार्यकर्ता और आंगनवाड़ी केंद्र भी विकास निगरानी में सहायता करते हैं।
                नीचे दी गई जानकारी केवल सूचनात्मक उद्देश्य के लिए है।
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Dual Burden: Child Obesity in India */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Globe className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारत में बाल मोटापा: दोहरा बोझ</h2>
            </div>
            <div className="text-muted-foreground space-y-4 mb-6">
              <p>
                भारत दुनिया के उन गिने-चुने देशों में से है जहाँ <strong>कुपोषण और मोटापा</strong> एक साथ मौजूद हैं।
                NFHS-5 (राष्ट्रीय परिवार स्वास्थ्य सर्वेक्षण 2019-21) के आंकड़े इस दोहरे बोझ की गंभीरता दर्शाते हैं।
                एक ओर जहाँ ग्रामीण क्षेत्रों में कुपोषण व्याप्त है, वहीं शहरी बच्चों में मोटापा तेजी से बढ़ रहा है।
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-warning mb-2">35.5%</div>
                <h4 className="font-bold mb-1">बच्चे कम वजन (Stunted)</h4>
                <p className="text-sm text-muted-foreground">
                  NFHS-5 के अनुसार 5 वर्ष से कम आयु के 35.5% बच्चे ठिगने (stunted) हैं — यह विश्व के सबसे अधिक आंकड़ों में से एक है
                </p>
              </div>
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-destructive mb-2">3.4%</div>
                <h4 className="font-bold mb-1">बच्चे मोटे (Overweight)</h4>
                <p className="text-sm text-muted-foreground">
                  राष्ट्रीय औसत 3.4% है, लेकिन शहरी क्षेत्रों में यह 5-8% तक है। दिल्ली, मुंबई जैसे शहरों में 10% से अधिक
                </p>
              </div>
              <div className="bg-info/5 border border-info/20 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-info mb-2">50%</div>
                <h4 className="font-bold mb-1">वृद्धि एक दशक में</h4>
                <p className="text-sm text-muted-foreground">
                  पिछले दशक में भारतीय शहरों में बाल मोटापे में लगभग 50% की वृद्धि हुई है — ICMR अध्ययन
                </p>
              </div>
            </div>
          </div>

          {/* Growth Charts: IAP vs WHO */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <TrendingUp className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">विकास चार्ट: IAP बनाम WHO — भारतीय मानक</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>IAP (Indian Academy of Pediatrics)</strong> ने भारतीय बच्चों के डेटा से विशेष विकास चार्ट विकसित किए हैं।
                ये चार्ट WHO के अंतरराष्ट्रीय चार्ट से भिन्न हैं क्योंकि भारतीय बच्चों की शारीरिक संरचना, आनुवंशिकी
                और पोषण स्थिति अलग होती है। सही चार्ट का चयन बच्चे की उम्र पर निर्भर करता है।
              </p>

              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-4">कौन सा चार्ट कब उपयोग करें?</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-3">
                    <div className="bg-info/10 rounded-lg p-3">
                      <p><strong className="text-info">0-5 वर्ष → WHO विकास मानक</strong></p>
                      <p className="text-muted-foreground mt-1">WHO के अंतरराष्ट्रीय मानक उपयोग होते हैं क्योंकि इस आयु में सभी देशों के बच्चों की वृद्धि समान होती है यदि पर्याप्त पोषण मिले</p>
                    </div>
                    <div className="bg-success/10 rounded-lg p-3">
                      <p><strong className="text-success">5-18 वर्ष → IAP विकास चार्ट</strong></p>
                      <p className="text-muted-foreground mt-1">IAP के भारत-विशिष्ट चार्ट उपयोग होते हैं। ये 2015 में 33,991 भारतीय बच्चों के डेटा से बनाए गए हैं</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-warning/10 rounded-lg p-3">
                      <p><strong className="text-warning">18+ वर्ष → एशियाई BMI कटऑफ</strong></p>
                      <p className="text-muted-foreground mt-1">किशोरों के वयस्क होने पर एशियाई/ICMR BMI मानक लागू होते हैं: अधिक वजन 23 पर (25 नहीं), मोटापा 25 पर (30 नहीं)</p>
                    </div>
                    <div className="bg-cyan-500/10 rounded-lg p-3">
                      <p><strong className="text-cyan-500">ICMR दिशानिर्देश</strong></p>
                      <p className="text-muted-foreground mt-1">ICMR (Indian Council of Medical Research) बाल विकास निगरानी के लिए नियमित माप और IAP चार्ट पर दर्ज करने की सिफारिश करता है</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-5 mt-4">
                <h4 className="font-bold text-cyan-500 mb-2">IAP और WHO चार्ट में क्या अंतर है?</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>WHO चार्ट:</strong> विश्व भर के स्वस्थ बच्चों के डेटा से बने — 6 देशों का डेटा</li>
                  <li>• <strong>IAP चार्ट:</strong> केवल भारतीय बच्चों (अफ्लुएंट) के डेटा से बने — भारतीय शारीरिक संरचना के अनुकूल</li>
                  <li>• IAP चार्ट पर भारतीय बच्चों के पर्सेंटाइल WHO से थोड़े कम होते हैं</li>
                  <li>• WHO चार्ट भारतीय बच्चों में मोटापे को कम आंक सकते हैं</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Adult vs Child BMI: Asian Cutoffs */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <AlertTriangle className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">वयस्क और बाल BMI में अंतर — एशियाई कटऑफ</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                भारतीय/एशियाई लोगों में <strong>समान BMI पर अधिक शरीर वसा</strong> होती है, इसलिए ICMR ने
                एशियाई कटऑफ निर्धारित किए हैं। बच्चों में पर्सेंटाइल वक्र उपयोग होते हैं, लेकिन जैसे ही
                किशोर वयस्कता में प्रवेश करता है, एशियाई BMI मानक लागू होते हैं।
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                <h4 className="font-bold text-destructive mb-3">वयस्क भारतीय BMI (ICMR एशियाई मानक)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• &lt;18.5 = कम वज़न</li>
                  <li>• 18.5-<strong>22.9</strong> = सामान्य</li>
                  <li>• <strong>23</strong>-24.9 = अधिक वज़न (पश्चिमी: 25)</li>
                  <li>• <strong>≥25</strong> = मोटापा (पश्चिमी: 30)</li>
                  <li className="text-destructive font-medium mt-2">• भारतीयों में BMI 23 पर ही जोखिम शुरू!</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-3">बाल BMI (IAP पर्सेंटाइल)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• &lt;3वाँ पर्सेंटाइल = कम वज़न</li>
                  <li>• 3वाँ-<strong>23वाँ/वयस्क एशियन</strong> = सामान्य</li>
                  <li>• 23वाँ-27वाँ पर्सेंटाइल = अधिक वज़न</li>
                  <li>• &gt;27वाँ पर्सेंटाइल = मोटापा</li>
                  <li className="text-success font-medium mt-2">• IAP चार्ट भारतीय बच्चों के लिए विशेष</li>
                </ul>
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-5 mt-6">
              <h4 className="font-bold mb-3">बड़े किशोरों (16-18 वर्ष) के लिए: WHO बनाम IAP/ICMR व्याख्या</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-warning mb-2">WHO अंतरराष्ट्रीय मानक:</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• अधिक वजन: BMI &gt; +1 SD (≈25)</li>
                    <li>• मोटापा: BMI &gt; +2 SD (≈30)</li>
                    <li>• यह एशियाई जोखिम को कम आंकता है</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-success mb-2">IAP/ICMR भारतीय मानक:</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• अधिक वजन: वयस्क BMI 23 कटऑफ के समतुल्य</li>
                    <li>• मोटापा: वयस्क BMI 25 कटऑफ के समतुल्य</li>
                    <li>• भारतीय शरीर संरचना के अनुकूल</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Age Groups: Indian Context */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Baby className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">आयु समूह के अनुसार BMI — भारतीय कार्यक्रम</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">शिशु (0-2 वर्ष)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  इस आयु में BMI की गणना नहीं होती। वज़न/लंबाई वक्र और सिर की परिधि का उपयोग किया जाता है।
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>आंगनवाड़ी केंद्र:</strong> हर माह वजन निगरानी</li>
                  <li>• <strong>ICDS</strong> (एकीकृत बाल विकास सेवाएं): पूरक पोषण</li>
                  <li>• <strong>WHO विकास मानक</strong> इस आयु के लिए</li>
                  <li>• MCP (मातृ एवं शिशु संरक्षण) कार्ड पर दर्ज करें</li>
                </ul>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">बच्चा (2-12 वर्ष)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  5 वर्ष तक WHO चार्ट, उसके बाद IAP विकास चार्ट। लगभग 6 वर्ष की आयु में "एडिपोसिटी रिबाउंड" की निगरानी महत्वपूर्ण।
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>मध्याह्न भोजन योजना:</strong> स्कूली बच्चों को पोषण</li>
                  <li>• <strong>RBSK</strong> (राष्ट्रीय बाल स्वास्थ्य कार्यक्रम): स्कूल स्वास्थ्य जाँच</li>
                  <li>• <strong>IAP चार्ट</strong> 5 वर्ष से उपयोग करें</li>
                  <li>• स्कूल स्वास्थ्य परीक्षण में BMI दर्ज करें</li>
                </ul>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">किशोर (12-18 वर्ष)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  यौवन के दौरान तेज़ बदलाव। 18 के करीब एशियाई वयस्क BMI कटऑफ (23/25) लागू होने लगते हैं।
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>RKSK</strong> (राष्ट्रीय किशोर स्वास्थ्य कार्यक्रम): किशोर स्वास्थ्य</li>
                  <li>• <strong>IAP चार्ट</strong> लड़के/लड़की अलग-अलग</li>
                  <li>• <strong>एशियाई कटऑफ</strong> में संक्रमण (BMI 23 = अधिक वजन)</li>
                  <li>• WIFS (साप्ताहिक आयरन फोलिक एसिड) कार्यक्रम</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dual Nutrition Burden */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Users className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारत का दोहरा पोषण बोझ</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                भारत एक अनोखी स्थिति का सामना कर रहा है: <strong>कुपोषण और मोटापा</strong> एक ही समय में,
                कभी-कभी एक ही परिवार में। यह "दोहरा पोषण बोझ" भारत की सबसे बड़ी स्वास्थ्य चुनौतियों में से एक है।
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-warning/5 border border-warning/20 rounded-xl p-5">
                  <h4 className="font-bold text-warning mb-3">शहरी बच्चे: मोटापे का खतरा</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>जंक फूड और अल्ट्रा-प्रोसेस्ड खाद्य:</strong> चिप्स, बिस्कुट, सोडा, नूडल्स का बढ़ता सेवन</li>
                    <li>• <strong>स्क्रीन टाइम:</strong> मोबाइल, टैबलेट, टीवी — 4-6 घंटे/दिन शहरी बच्चों में</li>
                    <li>• <strong>शारीरिक गतिविधि में कमी:</strong> खेल के मैदानों की कमी, अपार्टमेंट जीवन</li>
                    <li>• <strong>FSSAI नियम (2020):</strong> स्कूल के 50 मीटर के दायरे में जंक फूड बिक्री पर प्रतिबंध</li>
                  </ul>
                </div>
                <div className="bg-info/5 border border-info/20 rounded-xl p-5">
                  <h4 className="font-bold text-info mb-3">ग्रामीण बच्चे: कुपोषण का खतरा</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>अपर्याप्त पोषण:</strong> प्रोटीन, आयरन, विटामिन A और D की कमी</li>
                    <li>• <strong>Stunting:</strong> लंबे समय तक कुपोषण से ठिगनापन</li>
                    <li>• <strong>Wasting:</strong> तीव्र कुपोषण से दुबलापन</li>
                    <li>• <strong>एनीमिया:</strong> 67% बच्चे (6-59 माह) एनीमिक — NFHS-5</li>
                  </ul>
                </div>
              </div>

              <div className="bg-success/5 border border-success/20 rounded-xl p-5 mt-4">
                <h4 className="font-bold text-success mb-3">पारंपरिक भारतीय थाली बनाम अल्ट्रा-प्रोसेस्ड आहार</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium mb-2">संतुलित भारतीय थाली:</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• अनाज (रोटी/चावल) + दाल + सब्जी + दही</li>
                      <li>• छह रसों (स्वादों) का संतुलन</li>
                      <li>• मौसमी फल और सब्जियाँ</li>
                      <li>• घर का बना ताजा भोजन</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">बढ़ता अल्ट्रा-प्रोसेस्ड आहार:</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• पैकेज्ड स्नैक्स, इंस्टेंट नूडल्स</li>
                      <li>• मीठे पेय और सोडा</li>
                      <li>• फास्ट फूड चेन का विस्तार</li>
                      <li>• ऑनलाइन फूड डिलीवरी की आदत</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* When to consult */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Stethoscope className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">डॉक्टर से कब मिलें? — भारतीय स्वास्थ्य सेवाएं</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5">
                <h4 className="font-bold text-warning mb-3">IAP विकास चार्ट पर चेतावनी संकेत</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• IAP चार्ट पर अचानक पर्सेंटाइल बदलाव (ऊपर या नीचे)</li>
                  <li>• BMI &gt; 27वाँ IAP वयस्क समतुल्य पर्सेंटाइल (मोटापा)</li>
                  <li>• BMI &lt; 3वाँ पर्सेंटाइल (गंभीर कम वज़न)</li>
                  <li>• 6 वर्ष से पहले एडिपोसिटी रिबाउंड</li>
                  <li>• लंबाई में वृद्धि रुक जाना</li>
                  <li>• बच्चे में खाने की असामान्य आदतें</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-3">कहाँ से मदद लें?</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>बाल रोग विशेषज्ञ:</strong> IAP चार्ट पर विस्तृत विश्लेषण</li>
                  <li>• <strong>आशा कार्यकर्ता:</strong> गाँव स्तर पर विकास निगरानी</li>
                  <li>• <strong>आंगनवाड़ी केंद्र:</strong> 6 वर्ष तक पोषण और निगरानी</li>
                  <li>• <strong>RBSK:</strong> स्कूल स्वास्थ्य जाँच (0-18 वर्ष)</li>
                  <li>• <strong>आयुष्मान भारत:</strong> सरकारी स्वास्थ्य योजना</li>
                  <li>• <strong>PHC/CHC:</strong> प्राथमिक/सामुदायिक स्वास्थ्य केंद्र</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ayurveda and Children's Health */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Globe className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">आयुर्वेद और बच्चों का स्वास्थ्य</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                भारत की पारंपरिक चिकित्सा पद्धति <strong>आयुर्वेद</strong> में बच्चों के स्वास्थ्य को
                "<strong>कौमारभृत्य</strong>" (बाल चिकित्सा) कहा जाता है — यह अष्टांग आयुर्वेद की
                एक प्रमुख शाखा है। आधुनिक चिकित्सा के साथ इसका समन्वय लाभदायक हो सकता है।
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold text-cyan-500 mb-3">बाल प्रकृति (शारीरिक संरचना)</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>वात प्रकृति:</strong> पतला शरीर, हल्का वजन — कम BMI की प्रवृत्ति</li>
                    <li>• <strong>पित्त प्रकृति:</strong> मध्यम शरीर — संतुलित BMI</li>
                    <li>• <strong>कफ प्रकृति:</strong> भारी शरीर — अधिक BMI की प्रवृत्ति</li>
                    <li>• प्रत्येक बच्चे की प्रकृति अलग — एक ही BMI सबके लिए "आदर्श" नहीं</li>
                  </ul>
                </div>
                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold text-cyan-500 mb-3">आयुर्वेदिक बाल पोषण</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>षड्रस (छह स्वाद):</strong> मधुर, अम्ल, लवण, कटु, तिक्त, कषाय — सभी का संतुलन</li>
                    <li>• <strong>ऋतुचर्या:</strong> मौसम के अनुसार आहार — गर्मी में शीतल, सर्दी में गर्म</li>
                    <li>• <strong>अग्नि (पाचन शक्ति):</strong> बच्चों की पाचन शक्ति कमज़ोर — हल्का भोजन दें</li>
                    <li>• <strong>दिनचर्या:</strong> नियमित दिनचर्या से स्वस्थ वजन बनाए रखें</li>
                  </ul>
                </div>
              </div>

              <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-5 mt-4">
                <h4 className="font-bold text-cyan-500 mb-3">योग और शारीरिक गतिविधि</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium mb-2">बच्चों के लिए योग:</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• <strong>सूर्य नमस्कार:</strong> पूर्ण शरीर व्यायाम, 12 आसनों का क्रम</li>
                      <li>• <strong>प्राणायाम:</strong> अनुलोम-विलोम, भ्रामरी — तनाव कम करे</li>
                      <li>• <strong>वृक्षासन, ताड़ासन:</strong> संतुलन और लंबाई बढ़ाने में सहायक</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">पारंपरिक भारतीय खेल:</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• <strong>कबड्डी, खो-खो:</strong> पूरे शरीर की कसरत</li>
                      <li>• <strong>क्रिकेट, बैडमिंटन:</strong> लोकप्रिय और सुलभ</li>
                      <li>• <strong>रस्सी कूदना, दौड़ना:</strong> सरल कार्डियो व्यायाम</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  <strong>महत्वपूर्ण:</strong> आयुर्वेद और योग आधुनिक चिकित्सा का विकल्प नहीं हैं।
                  BMI निगरानी के लिए IAP चार्ट और बाल रोग विशेषज्ञ की सलाह प्राथमिक रहे।
                  आयुर्वेदिक दृष्टिकोण को पूरक के रूप में अपनाएँ।
                </p>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <BookOpen className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">भारतीय बच्चों का BMI: संपूर्ण मार्गदर्शिका</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>भारतीय बच्चों के BMI</strong> की गणना में वही सूत्र (वज़न किग्रा / लंबाई मीटर²) उपयोग होता है,
                लेकिन व्याख्या के लिए <strong>IAP विकास चार्ट</strong> आवश्यक हैं। NFHS-5 के अनुसार भारत में
                <strong>दोहरा पोषण बोझ</strong> है — 35.5% बच्चे ठिगने और साथ ही शहरी क्षेत्रों में मोटापा बढ़ रहा है।
              </p>
              <p>
                <strong>ICMR (भारतीय चिकित्सा अनुसंधान परिषद)</strong> के दिशानिर्देशों के अनुसार भारतीय
                वयस्कों के लिए <strong>एशियाई BMI कटऑफ</strong> लागू होते हैं — अधिक वजन BMI 23 पर और
                मोटापा BMI 25 पर। किशोरों के वयस्क होने पर ये मानक लागू होते हैं। <strong>IAP</strong> ने
                33,991 भारतीय बच्चों के डेटा से विशेष विकास चार्ट विकसित किए हैं जो WHO चार्ट से भिन्न हैं।
              </p>
              <p>
                <strong>FSSAI</strong> ने 2020 में स्कूलों के आसपास जंक फूड बिक्री पर प्रतिबंध लगाया।
                सरकारी कार्यक्रम जैसे <strong>RBSK</strong> (राष्ट्रीय बाल स्वास्थ्य कार्यक्रम),
                <strong> मध्याह्न भोजन योजना</strong>, <strong>ICDS</strong> (एकीकृत बाल विकास सेवाएं),
                और <strong>RKSK</strong> (राष्ट्रीय किशोर स्वास्थ्य कार्यक्रम) बच्चों के पोषण और स्वास्थ्य
                निगरानी में महत्वपूर्ण भूमिका निभाते हैं।
              </p>
              <p>
                बच्चे के <strong>आदर्श BMI</strong> या <strong>स्वस्थ वजन</strong> के बारे में किसी भी संदेह में
                अपने <strong>बाल रोग विशेषज्ञ</strong> से मिलें। <strong>आशा कार्यकर्ता</strong> और
                <strong> आंगनवाड़ी केंद्र</strong> भी विकास निगरानी में सहायता करते हैं।
                <strong> आयुष्मान भारत</strong> योजना के तहत निःशुल्क स्वास्थ्य सेवाएं उपलब्ध हैं।
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">क्या आप वयस्क हैं?</h3>
            <p className="text-muted-foreground mb-6">
              भारतीय वयस्कों के लिए एशियाई BMI कटऑफ (23/25) के साथ BMI कैलकुलेटर का उपयोग करें
            </p>
            <Link
              to="/hi/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              मेरा वयस्क BMI गणना करें (ICMR मानक)
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 भारतीय बच्चों के लिए BMI कैलकुलेटर — IAP विकास चार्ट और ICMR मानक — केवल सूचना के लिए</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIBachche;
