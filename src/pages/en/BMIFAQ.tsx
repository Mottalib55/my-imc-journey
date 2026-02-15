import { Header } from "@/components/Header";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
      >
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

const BMIFAQ = () => {
  const faqs = [
    {
      question: "What is BMI exactly?",
      answer: "<strong>BMI (Body Mass Index)</strong> is an indicator that estimates a person's body mass. It's calculated by dividing weight (in kg) by height squared (in meters). Formula: BMI = Weight / Height². It's a rapid screening tool used by healthcare professionals."
    },
    {
      question: "How to calculate BMI?",
      answer: "To calculate your BMI, divide your weight in kilograms by your height in meters squared. For example, if you weigh 154 lbs (70 kg) and are 5'9\" (1.75 m): BMI = 70 / (1.75 × 1.75) = 70 / 3.0625 = <strong>22.9</strong>. You can also use our <a href='/en/bmi' class='text-primary hover:underline'>free BMI calculator</a>."
    },
    {
      question: "What is the ideal BMI?",
      answer: "According to WHO, a <strong>normal BMI</strong> is between <strong>18.5 and 24.9</strong>. This is the zone where health risks are lowest. However, ideal BMI can vary according to age, sex and physical activity. Optimal BMI is often around 21-22."
    },
    {
      question: "Is BMI reliable?",
      answer: "BMI is a good indicator for the general population, but it has <strong>limitations</strong>. It doesn't distinguish muscle mass from fat mass. A muscular athlete can have high BMI without excess fat. Other indicators like waist circumference or body fat percentage are complementary. See our page on <a href='/en/bmi-limitations' class='text-primary hover:underline'>BMI limitations</a>."
    },
    {
      question: "What BMI for women?",
      answer: "Normal BMI for women is the same as for men: <strong>18.5 to 24.9</strong>. However, women naturally have higher body fat (20-25% vs 15-20% for men). Waist circumference is often more relevant: it shouldn't exceed 31.5 inches. Check our <a href='/en/bmi-women' class='text-primary hover:underline'>Women's BMI</a> page for more details."
    },
    {
      question: "What BMI for men?",
      answer: "Normal BMI for men is between <strong>18.5 and 24.9</strong>. Muscular men can have higher BMI (up to 27-28) without health problems. Waist circumference is an important complementary indicator: it shouldn't exceed 37 inches. See our <a href='/en/bmi-men' class='text-primary hover:underline'>Men's BMI</a> page."
    },
    {
      question: "How to calculate a child's BMI?",
      answer: "The calculation is the same (weight/height²), but <strong>interpretation is different</strong>. Adult thresholds (18.5/25/30) are not used. Body mass curves that account for age and sex are used. A child must be positioned on percentile curves. Check our <a href='/en/bmi-children' class='text-primary hover:underline'>Children's BMI</a> page."
    },
    {
      question: "Can BMI be calculated during pregnancy?",
      answer: "<strong>No</strong>, BMI doesn't apply during pregnancy. Weight gain is normal and necessary. Pre-pregnancy BMI serves as reference to determine recommended weight gain (25-35 lbs for normal BMI). Consult your gynecologist for personalized monitoring."
    },
    {
      question: "Is BMI the same for athletes?",
      answer: "<strong>BMI is biased for athletes</strong>. The formula doesn't distinguish muscle from fat. A bodybuilder with 10% body fat can have BMI 30+ (classified obese). For athletes, prefer <strong>FFMI</strong> (Fat-Free Mass Index), body fat percentage or waist circumference. See our <a href='/en/bmi-athletes' class='text-primary hover:underline'>Athletes' BMI</a> page."
    },
    {
      question: "From what BMI are you overweight?",
      answer: "<strong>Overweight</strong> starts at BMI <strong>25</strong>. Between 25 and 29.9, it's overweight (or pre-obesity). From 30, it's obesity. These thresholds are defined by WHO and used worldwide."
    },
    {
      question: "From what BMI are you obese?",
      answer: "<strong>Obesity</strong> starts at BMI <strong>30</strong>. It's divided into three classes: Class I (30-34.9) = moderate obesity, Class II (35-39.9) = severe obesity, Class III (≥40) = morbid obesity. The higher the BMI, the more health risks increase."
    },
    {
      question: "How to lose weight effectively?",
      answer: "To lose weight sustainably: <strong>1)</strong> Create moderate caloric deficit (300-500 kcal/day), <strong>2)</strong> Favor balanced diet rich in protein, <strong>3)</strong> Practice regular physical activity (cardio + strength), <strong>4)</strong> Sleep sufficiently (7-8h), <strong>5)</strong> Be patient: aim for 1-2 lbs/week maximum."
    },
    {
      question: "Is waist circumference more important than BMI?",
      answer: "Waist circumference is an <strong>excellent complement</strong> to BMI. It measures abdominal (visceral) fat, which is more dangerous for health. Recommended thresholds: Men &lt;37 inches (moderate risk), &lt;40 inches (high risk). Women &lt;31.5 inches (moderate risk), &lt;35 inches (high risk)."
    },
    {
      question: "Does BMI change with age?",
      answer: "The BMI formula stays the same, but its <strong>interpretation may vary</strong>. After 65, slightly higher BMI (up to 27) can be protective. With age, muscle mass decreases (sarcopenia), which can skew BMI. Regular medical monitoring is recommended."
    },
    {
      question: "What's the difference between BMI and BMI?",
      answer: "There is <strong>no difference</strong>! BMI means <strong>Body Mass Index</strong> in English. It's exactly the same indicator with the same formula and thresholds."
    }
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
            Frequently Asked Questions
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">BMI FAQ</span> : Common Questions About Body Mass Index
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Answers to the most frequently asked questions about Body Mass Index
          </p>
        </header>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* CTA */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Calculate your BMI now</h3>
          <p className="text-muted-foreground mb-6">
            Use our free calculator to know your body mass index
          </p>
          <Link
            to="/en/bmi"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Calculate my BMI
          </Link>
        </div>

        {/* SEO Schema */}
        <div className="glass-card p-8 mt-8">
          <h2 className="text-2xl font-display font-bold mb-6">Everything about BMI</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              This <strong>BMI FAQ</strong> answers the most common questions about calculating and
              interpreting <strong>Body Mass Index</strong>. Whether you're looking to know
              <strong> how to calculate BMI</strong>, <strong>what is ideal BMI</strong>, or
              <strong> if BMI is reliable</strong>, you'll find answers here.
            </p>
            <p>
              BMI is a simple but useful tool to assess your body mass. However, it has its limits
              and should be complemented by other indicators. Don't hesitate to consult a healthcare
              professional for a complete assessment.
            </p>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI FAQ - Answers to your questions</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIFAQ;
