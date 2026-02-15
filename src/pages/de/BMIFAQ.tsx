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

const BMIFAQDe = () => {
  const faqs = [
    { question: "Was genau ist der BMI?", answer: "Der <strong>Body-Mass-Index (BMI)</strong> ist ein Indikator zur Schätzung der Körpermasse einer Person. Er wird berechnet, indem das Gewicht (in kg) durch das Quadrat der Körpergröße (in Metern) geteilt wird. Die Formel: BMI = Gewicht / Größe². Es ist ein schnelles Screening-Tool, das von Gesundheitsfachkräften verwendet wird." },
    { question: "Wie berechne ich meinen BMI?", answer: "Um Ihren BMI zu berechnen, teilen Sie Ihr Gewicht in Kilogramm durch das Quadrat Ihrer Größe in Metern. Beispiel: Wenn Sie 70 kg wiegen und 1,75 m groß sind: BMI = 70 / (1,75 × 1,75) = 70 / 3,0625 = <strong>22,9</strong>. Sie können auch unseren <a href='/de/bmi' class='text-primary hover:underline'>kostenlosen BMI-Rechner</a> verwenden." },
    { question: "Was ist ein idealer BMI?", answer: "Laut Weltgesundheitsorganisation liegt der <strong>normale BMI</strong> zwischen <strong>18,5 und 24,9</strong>. Dies ist der Bereich, in dem die gesundheitlichen Risiken am geringsten sind. Der ideale BMI kann jedoch je nach Alter, Geschlecht und körperlicher Aktivität variieren. Der optimale BMI liegt oft bei etwa 21-22." },
    { question: "Ist der BMI zuverlässig?", answer: "Der BMI ist ein guter Indikator für die allgemeine Bevölkerung, hat aber <strong>Grenzen</strong>. Er unterscheidet nicht zwischen Muskel- und Fettmasse. Ein muskulöser Sportler kann einen hohen BMI haben, ohne überschüssiges Fett zu haben. Andere Indikatoren wie Taillenumfang oder Körperfettanteil sind ergänzend. Siehe unsere Seite über <a href='/de/bmi-grenzen' class='text-primary hover:underline'>BMI-Grenzen</a>." },
    { question: "Welcher BMI ist normal für Frauen?", answer: "Der normale BMI für Frauen ist der gleiche wie für Männer: <strong>18,5 bis 24,9</strong>. Frauen haben jedoch natürlicherweise einen höheren Körperfettanteil (20-25% vs. 15-20% bei Männern). Der Taillenumfang ist oft relevanter: Er sollte 80 cm nicht überschreiten. Besuchen Sie unsere Seite zum <a href='/de/bmi-frauen' class='text-primary hover:underline'>BMI für Frauen</a>." },
    { question: "Welcher BMI ist normal für Männer?", answer: "Der normale BMI für Männer liegt zwischen <strong>18,5 und 24,9</strong>. Muskulöse Männer können einen höheren BMI haben (bis zu 27-28), ohne gesundheitliche Probleme. Der Taillenumfang ist ein wichtiger ergänzender Indikator: Er sollte 94 cm nicht überschreiten. Siehe unsere Seite zum <a href='/de/bmi-maenner' class='text-primary hover:underline'>BMI für Männer</a>." },
    { question: "Wie berechne ich den BMI meines Kindes?", answer: "Die Berechnung ist die gleiche (Gewicht/Größe²), aber die <strong>Interpretation ist unterschiedlich</strong>. Die Schwellenwerte für Erwachsene (18,5/25/30) werden nicht verwendet. Es werden BMI-Kurven verwendet, die Alter und Geschlecht berücksichtigen. Das Kind muss auf Perzentilkurven eingeordnet werden. Siehe unsere Seite zum <a href='/de/bmi-kinder' class='text-primary hover:underline'>BMI für Kinder</a>." },
    { question: "Kann man den BMI in der Schwangerschaft berechnen?", answer: "<strong>Nein</strong>, der BMI gilt nicht während der Schwangerschaft. Die Gewichtszunahme ist normal und notwendig. Der BMI vor der Schwangerschaft wird als Referenz verwendet, um die empfohlene Gewichtszunahme zu bestimmen (11-16 kg bei normalem BMI). Konsultieren Sie Ihren Gynäkologen für eine individuelle Betreuung." },
    { question: "Gilt der BMI auch für Sportler?", answer: "Der <strong>BMI ist für Sportler verzerrt</strong>. Die Formel unterscheidet nicht zwischen Muskeln und Fett. Ein Bodybuilder mit 10% Körperfett kann einen BMI von 30+ haben (klassifiziert als fettleibig). Für Sportler sind <strong>FFMI</strong>, Körperfettanteil oder Taillenumfang besser geeignet. Siehe unsere Seite zum <a href='/de/bmi-sportler' class='text-primary hover:underline'>BMI für Sportler</a>." },
    { question: "Ab welchem BMI beginnt Übergewicht?", answer: "<strong>Übergewicht</strong> beginnt bei einem BMI von <strong>25</strong>. Zwischen 25 und 29,9 liegt Übergewicht (oder Präadipositas) vor. Ab 30 spricht man von Adipositas. Diese Schwellenwerte wurden von der WHO festgelegt und werden weltweit verwendet." },
    { question: "Ab welchem BMI beginnt Adipositas?", answer: "<strong>Adipositas</strong> beginnt bei einem BMI von <strong>30</strong>. Sie wird in drei Grade unterteilt: Grad I (30-34,9) = mäßige Adipositas, Grad II (35-39,9) = schwere Adipositas, Grad III (≥40) = morbide Adipositas. Je höher der BMI, desto größer die gesundheitlichen Risiken." },
    { question: "Wie nehme ich effektiv ab?", answer: "Um nachhaltig Gewicht zu verlieren: <strong>1)</strong> Schaffen Sie ein moderates Kaloriendefizit (300-500 kcal/Tag), <strong>2)</strong> Bevorzugen Sie eine ausgewogene, proteinreiche Ernährung, <strong>3)</strong> Treiben Sie regelmäßig Sport (Ausdauer + Kraft), <strong>4)</strong> Schlafen Sie ausreichend (7-8 Stunden), <strong>5)</strong> Seien Sie geduldig: Streben Sie maximal 0,5-1 kg/Woche an." },
    { question: "Ist der Taillenumfang wichtiger als der BMI?", answer: "Der Taillenumfang ist eine <strong>ausgezeichnete Ergänzung</strong> zum BMI. Er misst das viszerale Fett, das am gefährlichsten für die Gesundheit ist. Empfohlene Schwellenwerte: Männer <94 cm (mäßiges Risiko), <102 cm (hohes Risiko). Frauen <80 cm (mäßiges Risiko), <88 cm (hohes Risiko)." },
    { question: "Verändert sich der BMI mit dem Alter?", answer: "Die BMI-Formel bleibt gleich, aber die <strong>Interpretation kann variieren</strong>. Nach 65 Jahren kann ein etwas höherer BMI (bis zu 27) schützend sein. Mit zunehmendem Alter nimmt die Muskelmasse ab, was den BMI verzerren kann. Es wird eine regelmäßige medizinische Überwachung empfohlen." },
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
            Häufig gestellte Fragen
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">BMI FAQ</span> : Häufige Fragen zum Body-Mass-Index
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Antworten auf die häufigsten Fragen zum Body-Mass-Index
          </p>
        </header>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Berechnen Sie jetzt Ihren BMI</h3>
          <p className="text-muted-foreground mb-6">Verwenden Sie unseren kostenlosen Rechner, um Ihren BMI zu ermitteln</p>
          <Link to="/de/bmi" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">Meinen BMI berechnen</Link>
        </div>

        <div className="glass-card p-8 mt-8">
          <h2 className="text-2xl font-display font-bold mb-6">Alles über den BMI</h2>
          <div className="text-muted-foreground space-y-4">
            <p>Diese <strong>BMI-FAQ</strong> beantwortet die häufigsten Fragen zur Berechnung und Interpretation des Body-Mass-Index. Ob Sie wissen möchten, <strong>wie Sie Ihren BMI berechnen</strong>, <strong>was ein idealer BMI ist</strong> oder <strong>ob der BMI zuverlässig ist</strong>, hier finden Sie die Antworten.</p>
            <p>Der BMI ist ein einfaches, aber nützliches Werkzeug zur Einschätzung Ihrer Körpermasse. Er hat jedoch seine Grenzen und sollte durch andere Indikatoren ergänzt werden. Zögern Sie nicht, einen Spezialisten für eine umfassende Bewertung zu konsultieren.</p>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI FAQ - Antworten auf Ihre Fragen</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIFAQDe;
