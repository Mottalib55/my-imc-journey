import { Header } from "@/components/Header";
import { AlertTriangle, XCircle, CheckCircle2, Users, Dumbbell, Baby, Clock, Globe, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const BMISeemayen = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-warning/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 text-warning text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            आलोचनात्मक विश्लेषण
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-warning">BMI की सीमाएं</span>: BMI क्या नहीं बताता
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            समझें कि BMI हमेशा विश्वसनीय क्यों नहीं होता और इसके कौन-कौन से विकल्प मौजूद हैं
          </p>
        </header>

        {/* Main Warning */}
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-warning mb-2">BMI एक स्क्रीनिंग उपकरण है, निदान नहीं</h3>
              <p className="text-muted-foreground">
                BMI को 1832 में Adolphe Quetelet द्वारा विकसित किया गया था और इसे सांख्यिकीय जनसंख्या अध्ययनों के लिए डिज़ाइन किया गया था,
                व्यक्तिगत स्वास्थ्य के मूल्यांकन के लिए नहीं। इसकी कई महत्वपूर्ण सीमाएं हैं।
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Main Limitations */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI क्या नहीं मापता</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">शरीर की संरचना</h4>
                    <p className="text-sm text-muted-foreground">
                      BMI मांसपेशी और वसा में अंतर नहीं करता। BMI के लिए 1 किलो मांसपेशी = 1 किलो वसा।
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">वसा वितरण</h4>
                    <p className="text-sm text-muted-foreground">
                      पेट की चर्बी त्वचा के नीचे की चर्बी से अधिक खतरनाक है। BMI इसे पहचान नहीं पाता।
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">हड्डियों का घनत्व</h4>
                    <p className="text-sm text-muted-foreground">
                      भारी हड्डियां स्वास्थ्य को प्रभावित किए बिना BMI बढ़ा देती हैं।
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">चयापचय स्वास्थ्य</h4>
                    <p className="text-sm text-muted-foreground">
                      एक पतले व्यक्ति का चयापचय प्रोफ़ाइल (कोलेस्ट्रॉल, ग्लूकोज) खराब हो सकता है।
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">जलयोजन</h4>
                    <p className="text-sm text-muted-foreground">
                      शरीर में पानी का प्रतिधारण अस्थायी रूप से BMI को 1-2 अंक बढ़ा सकता है।
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">शारीरिक फिटनेस</h4>
                    <p className="text-sm text-muted-foreground">
                      समान BMI वाले दो व्यक्तियों की शारीरिक स्थिति बहुत अलग हो सकती है।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Population-specific limitations */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Users className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">जनसंख्या समूह जिनके लिए BMI अपर्याप्त है</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Dumbbell className="w-5 h-5 text-orange-500" />
                  <h4 className="font-bold">खिलाड़ी और बॉडीबिल्डर</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  अधिक मांसपेशी द्रव्यमान BMI को "अधिक वजन" या "मोटापा" दिखाता है, जबकि शरीर में वसा प्रतिशत न्यूनतम होता है।
                </p>
                <Link to="/hi/bmi-khiladi" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  और जानें →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Baby className="w-5 h-5 text-cyan-500" />
                  <h4 className="font-bold">बच्चे और किशोर</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  वयस्कों की सीमाएं लागू नहीं होतीं। आयु और लिंग-विशिष्ट पर्सेंटाइल वक्रों का उपयोग करना आवश्यक है।
                </p>
                <Link to="/hi/bmi-bachche" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  और जानें →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold">बुज़ुर्ग (&gt;65)</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  मांसपेशी हानि (सार्कोपेनिया) अतिरिक्त वसा को छिपा सकती है। "सामान्य" BMI भ्रामक हो सकता है।
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-pink-500" />
                  <h4 className="font-bold">गर्भवती महिलाएं</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  गर्भावस्था के दौरान वजन बढ़ना सामान्य और वांछनीय है। गर्भावस्था से पहले का BMI संदर्भ के रूप में काम करता है।
                </p>
                <Link to="/hi/bmi-mahila" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  और जानें →
                </Link>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold">कुछ जातीय समूह</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  एशियाई आबादी में कम BMI पर भी बढ़ा हुआ जोखिम होता है। WHO ने समायोजित सीमाएं सुझाई हैं (25 के बजाय 23)।
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Scale className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold">अत्यधिक शरीर प्रकार</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  बहुत लंबे या बहुत छोटे लोगों का सतह-आयतन अनुपात के कारण स्वाभाविक रूप से भिन्न BMI होता है।
                </p>
              </div>
            </div>
          </div>

          {/* Better alternatives */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI के बेहतर विकल्प</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">संकेतक</th>
                    <th className="text-left py-3 px-4 font-bold">क्या मापता है</th>
                    <th className="text-left py-3 px-4 font-bold">अनुशंसित सीमाएं</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">कमर की परिधि</td>
                    <td className="py-3 px-4">पेट की चर्बी (आंत का वसा)</td>
                    <td className="py-3 px-4">&lt;94 सेमी (पु) / &lt;80 सेमी (म)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">कमर-कूल्हे का अनुपात</td>
                    <td className="py-3 px-4">वसा वितरण</td>
                    <td className="py-3 px-4">&lt;0.90 (पु) / &lt;0.85 (म)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">कमर-ऊंचाई का अनुपात</td>
                    <td className="py-3 px-4">सापेक्ष केंद्रीय वसा</td>
                    <td className="py-3 px-4">&lt;0.5 (कमर &lt; आधी ऊंचाई)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">शरीर वसा प्रतिशत</td>
                    <td className="py-3 px-4">वास्तविक शरीर संरचना</td>
                    <td className="py-3 px-4">10-20% (पु) / 18-28% (म)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">FFMI</td>
                    <td className="py-3 px-4">वसा-रहित द्रव्यमान (खिलाड़ियों के लिए)</td>
                    <td className="py-3 px-4">18-25 (प्राकृतिक)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">DEXA स्कैन</td>
                    <td className="py-3 px-4">पानी, मांसपेशी, वसा, हड्डी</td>
                    <td className="py-3 px-4">उपकरण के अनुसार भिन्न</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* When BMI is still useful */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI कब उपयोगी बना रहता है</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                अपनी सीमाओं के बावजूद, BMI कुछ संदर्भों में एक मूल्यवान उपकरण बना रहता है:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>त्वरित प्रारंभिक स्क्रीनिंग</strong>: उन व्यक्तियों की पहचान जिन्हें अधिक व्यापक जांच की आवश्यकता है</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>महामारी विज्ञान अध्ययन</strong>: बड़े पैमाने पर जनसंख्या समूहों की तुलना</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>व्यक्तिगत निगरानी</strong>: समय के साथ वजन के रुझान की निगरानी</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>औसत गतिहीन वयस्क</strong>: इस आबादी के लिए BMI काफी विश्वसनीय है</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">BMI की सीमाओं के बारे में सब कुछ</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>BMI की सीमाएं</strong> अनेक हैं और वैज्ञानिक समुदाय द्वारा अच्छी तरह से प्रलेखित हैं।
                इस <strong>आलोचनात्मक BMI विश्लेषण</strong> की अकेले व्याख्या नहीं की जानी चाहिए। <strong>BMI की कमजोरियों</strong>
                में वसा द्रव्यमान को मांसपेशी द्रव्यमान से अलग करने में असमर्थता शामिल है।
              </p>
              <p>
                <strong>BMI अपूर्ण क्यों है</strong>? क्योंकि यह एक सरल गणितीय अनुपात है।
                <strong>BMI की समस्याएं</strong> विशेष रूप से खिलाड़ियों, बच्चों और बुज़ुर्गों में दिखाई देती हैं।
                <strong>BMI विश्वसनीय है या नहीं</strong>, यह उपयोग के संदर्भ पर निर्भर करता है।
              </p>
              <p>
                कमर की परिधि या शरीर वसा प्रतिशत जैसे <strong>BMI के विकल्प</strong> अधिक संपूर्ण तस्वीर प्रदान करते हैं।
                <strong>क्या BMI सभी के लिए विश्वसनीय है</strong>? नहीं, लेकिन अन्य संकेतकों के साथ मिलाकर यह
                एक उपयोगी स्क्रीनिंग उपकरण बना रहता है।
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">फिर भी अपना BMI कैलकुलेट करें</h3>
            <p className="text-muted-foreground mb-6">
              अब जब आप सीमाओं को जानते हैं, तो हमारे कैलकुलेटर का उपयोग पहले संकेतक के रूप में करें
            </p>
            <Link
              to="/hi/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              मेरा BMI कैलकुलेट करें
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI की सीमाएं - बॉडी मास इंडेक्स को समझना</p>
        </footer>
      </div>
    </div>
  );
};

export default BMISeemayen;
