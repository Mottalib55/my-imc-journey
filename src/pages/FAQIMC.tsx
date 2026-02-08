import { Header } from "@/components/Header";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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

const FAQIMC = () => {
  const faqs = [
    {
      question: "Qu'est-ce que l'IMC exactement ?",
      answer: "L'<strong>IMC (Indice de Masse Corporelle)</strong> est un indicateur qui permet d'estimer la corpulence d'une personne. Il se calcule en divisant le poids (en kg) par la taille au carré (en mètres). Formule : IMC = Poids / Taille². C'est un outil de dépistage rapide utilisé par les professionnels de santé."
    },
    {
      question: "Comment calculer son IMC ?",
      answer: "Pour calculer votre IMC, divisez votre poids en kilogrammes par votre taille en mètres au carré. Par exemple, si vous pesez 70 kg et mesurez 1,75 m : IMC = 70 / (1,75 × 1,75) = 70 / 3,0625 = <strong>22,9</strong>. Vous pouvez aussi utiliser notre <a href='/' class='text-primary hover:underline'>calculateur IMC gratuit</a>."
    },
    {
      question: "Quel est l'IMC idéal ?",
      answer: "Selon l'OMS, un <strong>IMC normal</strong> se situe entre <strong>18,5 et 24,9</strong>. C'est la zone où les risques pour la santé sont les plus faibles. Cependant, l'IMC idéal peut varier selon l'âge, le sexe et l'activité physique. L'IMC optimal se situe souvent autour de 21-22."
    },
    {
      question: "L'IMC est-il fiable ?",
      answer: "L'IMC est un bon indicateur pour la population générale, mais il a des <strong>limites</strong>. Il ne distingue pas la masse musculaire de la masse grasse. Un sportif musclé peut avoir un IMC élevé sans excès de graisse. D'autres indicateurs comme le tour de taille ou le taux de masse grasse sont complémentaires. Voir notre page sur les <a href='/limites-imc' class='text-primary hover:underline'>limites de l'IMC</a>."
    },
    {
      question: "Quel IMC pour une femme ?",
      answer: "L'IMC normal pour une femme est le même que pour un homme : <strong>18,5 à 24,9</strong>. Cependant, les femmes ont naturellement un taux de graisse plus élevé (20-25% vs 15-20% pour les hommes). Le tour de taille est souvent plus pertinent : il ne devrait pas dépasser 80 cm. Consultez notre page <a href='/imc-femme' class='text-primary hover:underline'>IMC Femme</a> pour plus de détails."
    },
    {
      question: "Quel IMC pour un homme ?",
      answer: "L'IMC normal pour un homme se situe entre <strong>18,5 et 24,9</strong>. Les hommes musclés peuvent avoir un IMC plus élevé (jusqu'à 27-28) sans problème de santé. Le tour de taille est un indicateur complémentaire important : il ne devrait pas dépasser 94 cm. Voir notre page <a href='/imc-homme' class='text-primary hover:underline'>IMC Homme</a>."
    },
    {
      question: "Comment calculer l'IMC d'un enfant ?",
      answer: "Le calcul est le même (poids/taille²), mais l'<strong>interprétation est différente</strong>. On n'utilise pas les seuils adultes (18,5/25/30). On utilise des courbes de corpulence qui tiennent compte de l'âge et du sexe. Un enfant doit être situé sur les courbes de percentiles. Consultez notre page <a href='/imc-enfant' class='text-primary hover:underline'>IMC Enfant</a>."
    },
    {
      question: "Peut-on calculer l'IMC pendant la grossesse ?",
      answer: "<strong>Non</strong>, l'IMC ne s'applique pas pendant la grossesse. La prise de poids est normale et nécessaire. L'IMC pré-grossesse sert de référence pour déterminer la prise de poids recommandée (11-16 kg pour un IMC normal). Consultez votre gynécologue pour un suivi personnalisé."
    },
    {
      question: "L'IMC est-il le même pour les sportifs ?",
      answer: "<strong>L'IMC est biaisé pour les sportifs</strong>. La formule ne distingue pas muscle et graisse. Un bodybuilder avec 10% de masse grasse peut avoir un IMC de 30+ (classé obèse). Pour les sportifs, préférez le <strong>FFMI</strong> (Fat-Free Mass Index), le taux de masse grasse ou le tour de taille. Voir notre page <a href='/imc-sportif' class='text-primary hover:underline'>IMC Sportif</a>."
    },
    {
      question: "À partir de quel IMC est-on en surpoids ?",
      answer: "On parle de <strong>surpoids</strong> à partir d'un IMC de <strong>25</strong>. Entre 25 et 29,9, c'est le surpoids (ou préobésité). À partir de 30, on parle d'obésité. Ces seuils sont définis par l'OMS et sont utilisés mondialement."
    },
    {
      question: "À partir de quel IMC est-on obèse ?",
      answer: "L'<strong>obésité</strong> commence à un IMC de <strong>30</strong>. Elle se divise en trois classes : Classe I (30-34,9) = obésité modérée, Classe II (35-39,9) = obésité sévère, Classe III (≥40) = obésité morbide. Plus l'IMC est élevé, plus les risques de santé augmentent."
    },
    {
      question: "Comment perdre du poids efficacement ?",
      answer: "Pour perdre du poids durablement : <strong>1)</strong> Créez un déficit calorique modéré (300-500 kcal/jour), <strong>2)</strong> Privilégiez une alimentation équilibrée riche en protéines, <strong>3)</strong> Pratiquez une activité physique régulière (cardio + musculation), <strong>4)</strong> Dormez suffisamment (7-8h), <strong>5)</strong> Soyez patient : visez 0,5-1 kg/semaine maximum."
    },
    {
      question: "Le tour de taille est-il plus important que l'IMC ?",
      answer: "Le tour de taille est un <strong>excellent complément</strong> à l'IMC. Il mesure la graisse abdominale (viscérale), qui est plus dangereuse pour la santé. Seuils recommandés : Hommes &lt;94 cm (risque modéré), &lt;102 cm (risque élevé). Femmes &lt;80 cm (risque modéré), &lt;88 cm (risque élevé)."
    },
    {
      question: "L'IMC change-t-il avec l'âge ?",
      answer: "La formule de l'IMC reste la même, mais son <strong>interprétation peut varier</strong>. Après 65 ans, un IMC légèrement plus élevé (jusqu'à 27) peut être protecteur. Avec l'âge, la masse musculaire diminue (sarcopénie), ce qui peut fausser l'IMC. Un suivi médical régulier est recommandé."
    },
    {
      question: "Quelle est la différence entre IMC et BMI ?",
      answer: "Il n'y a <strong>aucune différence</strong> ! IMC signifie <strong>Indice de Masse Corporelle</strong> (français) et BMI signifie <strong>Body Mass Index</strong> (anglais). C'est exactement le même indicateur avec la même formule et les mêmes seuils."
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
            Questions fréquentes
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">FAQ IMC</span> : Toutes vos questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Réponses aux questions les plus fréquentes sur l'Indice de Masse Corporelle
          </p>
        </header>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* CTA */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Calculez votre IMC maintenant</h3>
          <p className="text-muted-foreground mb-6">
            Utilisez notre calculateur gratuit pour connaître votre indice de masse corporelle
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Calculer mon IMC
          </Link>
        </div>

        {/* SEO Schema */}
        <div className="glass-card p-8 mt-8">
          <h2 className="text-2xl font-display font-bold mb-6">Tout savoir sur l'IMC</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Cette <strong>FAQ IMC</strong> répond aux questions les plus courantes sur le calcul et
              l'interprétation de l'<strong>Indice de Masse Corporelle</strong>. Que vous cherchiez à savoir
              <strong> comment calculer l'IMC</strong>, <strong>quel est l'IMC idéal</strong>, ou
              <strong> si l'IMC est fiable</strong>, vous trouverez les réponses ici.
            </p>
            <p>
              L'IMC est un outil simple mais utile pour évaluer votre corpulence. Cependant, il a ses limites
              et doit être complété par d'autres indicateurs. N'hésitez pas à consulter un professionnel de
              santé pour un bilan complet.
            </p>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 FAQ IMC - Réponses à vos questions</p>
        </footer>
      </div>
    </div>
  );
};

export default FAQIMC;
