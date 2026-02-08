import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { getCurrentLang, type Lang } from "@/config/routes";

interface BMIGaugeProps {
  bmi: number | null;
}

const i18n: Record<Lang, {
  title: string;
  enterData: string;
  underweight: string;
  normal: string;
  overweight: string;
  obesity: string;
  catUnderweight: string;
  catNormal: string;
  catOverweight: string;
  catObesity: string;
  comments: Record<string, string>;
}> = {
  fr: {
    title: "Votre Position",
    enterData: "Entrez vos données",
    underweight: "Insuffisance pondérale",
    normal: "Poids normal",
    overweight: "Surpoids",
    obesity: "Obésité",
    catUnderweight: "Sous-poids",
    catNormal: "Normal",
    catOverweight: "Surpoids",
    catObesity: "Obésité",
    comments: {
      severe: "Maigreur sévère. Consultez rapidement un médecin pour un bilan nutritionnel.",
      moderate: "Maigreur modérée. Un suivi médical est recommandé pour retrouver un poids santé.",
      slight: "Légère insuffisance pondérale. Quelques kilos en plus vous feraient du bien.",
      slim: "Vous êtes mince mais dans la norme. Continuez à bien manger équilibré.",
      perfect: "IMC parfait ! Vous êtes au cœur de la zone idéale. Bravo !",
      normalWeight: "Poids normal. Vous êtes en bonne santé, maintenez vos habitudes.",
      slightOver: "Léger surpoids. Quelques ajustements alimentaires peuvent aider.",
      moderateOver: "Surpoids modéré. Pensez à bouger plus et manger mieux.",
      obesityModerate: "Obésité modérée. Un accompagnement médical est conseillé.",
      obesitySevere: "Obésité sévère. Consultez un professionnel de santé pour un suivi adapté.",
      obesityMorbid: "Obésité morbide. Une prise en charge médicale urgente est recommandée.",
    },
  },
  en: {
    title: "Your Position",
    enterData: "Enter your data",
    underweight: "Underweight",
    normal: "Normal weight",
    overweight: "Overweight",
    obesity: "Obesity",
    catUnderweight: "Underweight",
    catNormal: "Normal",
    catOverweight: "Overweight",
    catObesity: "Obesity",
    comments: {
      severe: "Severe thinness. Consult a doctor promptly for a nutritional assessment.",
      moderate: "Moderate thinness. Medical follow-up is recommended to reach a healthy weight.",
      slight: "Slightly underweight. A few extra pounds would do you good.",
      slim: "You are slim but within the normal range. Keep eating a balanced diet.",
      perfect: "Perfect BMI! You are in the heart of the ideal zone. Well done!",
      normalWeight: "Normal weight. You are in good health, maintain your habits.",
      slightOver: "Slightly overweight. A few dietary adjustments can help.",
      moderateOver: "Moderate overweight. Consider moving more and eating better.",
      obesityModerate: "Moderate obesity. Medical support is recommended.",
      obesitySevere: "Severe obesity. Consult a healthcare professional for appropriate follow-up.",
      obesityMorbid: "Morbid obesity. Urgent medical care is recommended.",
    },
  },
  es: {
    title: "Su Posición",
    enterData: "Ingrese sus datos",
    underweight: "Bajo peso",
    normal: "Peso normal",
    overweight: "Sobrepeso",
    obesity: "Obesidad",
    catUnderweight: "Bajo peso",
    catNormal: "Normal",
    catOverweight: "Sobrepeso",
    catObesity: "Obesidad",
    comments: {
      severe: "Delgadez severa. Consulte rápidamente a un médico para una evaluación nutricional.",
      moderate: "Delgadez moderada. Se recomienda seguimiento médico para alcanzar un peso saludable.",
      slight: "Ligera insuficiencia ponderal. Unos kilos más le vendrían bien.",
      slim: "Está delgado/a pero dentro de lo normal. Siga comiendo equilibrado.",
      perfect: "¡IMC perfecto! Está en el corazón de la zona ideal. ¡Felicidades!",
      normalWeight: "Peso normal. Goza de buena salud, mantenga sus hábitos.",
      slightOver: "Ligero sobrepeso. Algunos ajustes alimentarios pueden ayudar.",
      moderateOver: "Sobrepeso moderado. Piense en moverse más y comer mejor.",
      obesityModerate: "Obesidad moderada. Se aconseja acompañamiento médico.",
      obesitySevere: "Obesidad severa. Consulte a un profesional de salud para un seguimiento adecuado.",
      obesityMorbid: "Obesidad mórbida. Se recomienda atención médica urgente.",
    },
  },
  pt: {
    title: "Sua Posição",
    enterData: "Insira seus dados",
    underweight: "Abaixo do peso",
    normal: "Peso normal",
    overweight: "Sobrepeso",
    obesity: "Obesidade",
    catUnderweight: "Abaixo do peso",
    catNormal: "Normal",
    catOverweight: "Sobrepeso",
    catObesity: "Obesidade",
    comments: {
      severe: "Magreza severa. Consulte um médico rapidamente para uma avaliação nutricional.",
      moderate: "Magreza moderada. Acompanhamento médico é recomendado para atingir um peso saudável.",
      slight: "Levemente abaixo do peso. Alguns quilos a mais lhe fariam bem.",
      slim: "Você é magro/a mas está dentro da faixa normal. Continue comendo de forma equilibrada.",
      perfect: "IMC perfeito! Você está no coração da zona ideal. Parabéns!",
      normalWeight: "Peso normal. Você está com boa saúde, mantenha seus hábitos.",
      slightOver: "Leve sobrepeso. Alguns ajustes alimentares podem ajudar.",
      moderateOver: "Sobrepeso moderado. Pense em se movimentar mais e comer melhor.",
      obesityModerate: "Obesidade moderada. Acompanhamento médico é aconselhado.",
      obesitySevere: "Obesidade severa. Consulte um profissional de saúde para acompanhamento adequado.",
      obesityMorbid: "Obesidade mórbida. Cuidados médicos urgentes são recomendados.",
    },
  },
  ar: {
    title: "موقعك",
    enterData: "أدخل بياناتك",
    underweight: "نقص في الوزن",
    normal: "وزن طبيعي",
    overweight: "وزن زائد",
    obesity: "سمنة",
    catUnderweight: "نقص الوزن",
    catNormal: "طبيعي",
    catOverweight: "وزن زائد",
    catObesity: "سمنة",
    comments: {
      severe: "نحافة شديدة. استشر طبيباً بسرعة لإجراء تقييم غذائي.",
      moderate: "نحافة معتدلة. يُنصح بمتابعة طبية للوصول إلى وزن صحي.",
      slight: "نقص طفيف في الوزن. بضعة كيلوغرامات إضافية ستفيدك.",
      slim: "أنت نحيف/ة لكن ضمن المعدل الطبيعي. استمر في تناول طعام متوازن.",
      perfect: "مؤشر كتلة جسم مثالي! أنت في قلب المنطقة المثالية. أحسنت!",
      normalWeight: "وزن طبيعي. أنت بصحة جيدة، حافظ على عاداتك.",
      slightOver: "زيادة طفيفة في الوزن. بعض التعديلات الغذائية يمكن أن تساعد.",
      moderateOver: "وزن زائد معتدل. فكر في التحرك أكثر والأكل بشكل أفضل.",
      obesityModerate: "سمنة معتدلة. يُنصح بمرافقة طبية.",
      obesitySevere: "سمنة شديدة. استشر متخصصاً صحياً للمتابعة المناسبة.",
      obesityMorbid: "سمنة مفرطة. يُوصى برعاية طبية عاجلة.",
    },
  },
  de: {
    title: "Ihre Position",
    enterData: "Geben Sie Ihre Daten ein",
    underweight: "Untergewicht",
    normal: "Normalgewicht",
    overweight: "Übergewicht",
    obesity: "Adipositas",
    catUnderweight: "Untergewicht",
    catNormal: "Normal",
    catOverweight: "Übergewicht",
    catObesity: "Adipositas",
    comments: {
      severe: "Starkes Untergewicht. Konsultieren Sie umgehend einen Arzt für eine Ernährungsbewertung.",
      moderate: "Mäßiges Untergewicht. Ärztliche Begleitung wird empfohlen, um ein gesundes Gewicht zu erreichen.",
      slight: "Leichtes Untergewicht. Ein paar Kilo mehr würden Ihnen gut tun.",
      slim: "Sie sind schlank, aber im Normalbereich. Ernähren Sie sich weiterhin ausgewogen.",
      perfect: "Perfekter BMI! Sie befinden sich im Herzen der Idealzone. Bravo!",
      normalWeight: "Normalgewicht. Sie sind gesund, behalten Sie Ihre Gewohnheiten bei.",
      slightOver: "Leichtes Übergewicht. Ein paar Ernährungsanpassungen können helfen.",
      moderateOver: "Mäßiges Übergewicht. Bewegen Sie sich mehr und essen Sie besser.",
      obesityModerate: "Mäßige Adipositas. Ärztliche Begleitung wird empfohlen.",
      obesitySevere: "Schwere Adipositas. Konsultieren Sie einen Gesundheitsexperten für eine angemessene Betreuung.",
      obesityMorbid: "Morbide Adipositas. Dringende medizinische Versorgung wird empfohlen.",
    },
  },
  it: {
    title: "La Tua Posizione",
    enterData: "Inserisci i tuoi dati",
    underweight: "Sottopeso",
    normal: "Peso normale",
    overweight: "Sovrappeso",
    obesity: "Obesità",
    catUnderweight: "Sottopeso",
    catNormal: "Normale",
    catOverweight: "Sovrappeso",
    catObesity: "Obesità",
    comments: {
      severe: "Magrezza grave. Consulta rapidamente un medico per una valutazione nutrizionale.",
      moderate: "Magrezza moderata. Si raccomanda un follow-up medico per raggiungere un peso sano.",
      slight: "Leggero sottopeso. Qualche chilo in più ti farebbe bene.",
      slim: "Sei magro/a ma nella norma. Continua a mangiare in modo equilibrato.",
      perfect: "IMC perfetto! Sei nel cuore della zona ideale. Bravo!",
      normalWeight: "Peso normale. Sei in buona salute, mantieni le tue abitudini.",
      slightOver: "Leggero sovrappeso. Qualche aggiustamento alimentare può aiutare.",
      moderateOver: "Sovrappeso moderato. Pensa a muoverti di più e mangiare meglio.",
      obesityModerate: "Obesità moderata. Si consiglia un accompagnamento medico.",
      obesitySevere: "Obesità grave. Consulta un professionista sanitario per un follow-up adeguato.",
      obesityMorbid: "Obesità patologica. Si raccomanda un'assistenza medica urgente.",
    },
  },
  hi: {
    title: "आपकी स्थिति",
    enterData: "अपना डेटा दर्ज करें",
    underweight: "कम वजन",
    normal: "सामान्य वजन",
    overweight: "अधिक वजन",
    obesity: "मोटापा",
    catUnderweight: "कम वजन",
    catNormal: "सामान्य",
    catOverweight: "अधिक वजन",
    catObesity: "मोटापा",
    comments: {
      severe: "गंभीर दुबलापन। पोषण मूल्यांकन के लिए तुरंत डॉक्टर से मिलें।",
      moderate: "मध्यम दुबलापन। स्वस्थ वजन पाने के लिए चिकित्सा अनुवर्तन की सिफारिश है।",
      slight: "हल्का कम वजन। कुछ किलो अतिरिक्त आपके लिए अच्छा होगा।",
      slim: "आप पतले हैं लेकिन सामान्य सीमा में। संतुलित आहार जारी रखें।",
      perfect: "परफेक्ट BMI! आप आदर्श क्षेत्र के केंद्र में हैं। शाबाश!",
      normalWeight: "सामान्य वजन। आप स्वस्थ हैं, अपनी आदतें बनाए रखें।",
      slightOver: "हल्का अधिक वजन। कुछ आहार समायोजन मदद कर सकते हैं।",
      moderateOver: "मध्यम अधिक वजन। अधिक चलने और बेहतर खाने के बारे में सोचें।",
      obesityModerate: "मध्यम मोटापा। चिकित्सा सहायता की सलाह दी जाती है।",
      obesitySevere: "गंभीर मोटापा। उचित अनुवर्तन के लिए स्वास्थ्य पेशेवर से मिलें।",
      obesityMorbid: "रुग्ण मोटापा। तत्काल चिकित्सा देखभाल की सिफारिश है।",
    },
  },
  zh: {
    title: "您的位置",
    enterData: "请输入您的数据",
    underweight: "体重过轻",
    normal: "正常体重",
    overweight: "超重",
    obesity: "肥胖",
    catUnderweight: "偏瘦",
    catNormal: "正常",
    catOverweight: "超重",
    catObesity: "肥胖",
    comments: {
      severe: "严重消瘦。请尽快就医进行营养评估。",
      moderate: "中度消瘦。建议进行医学随访以恢复健康体重。",
      slight: "轻度偏瘦。增加几公斤对您有益。",
      slim: "您偏瘦但在正常范围内。继续保持均衡饮食。",
      perfect: "完美的BMI！您处于理想区间的核心。做得好！",
      normalWeight: "正常体重。您很健康，请保持您的好习惯。",
      slightOver: "轻度超重。一些饮食调整会有所帮助。",
      moderateOver: "中度超重。多运动、更健康地饮食。",
      obesityModerate: "中度肥胖。建议寻求医疗支持。",
      obesitySevere: "重度肥胖。请咨询健康专业人士进行适当的随访。",
      obesityMorbid: "病态肥胖。建议紧急就医。",
    },
  },
};

export const BMIGauge = ({ bmi }: BMIGaugeProps) => {
  const { pathname } = useLocation();
  const lang = getCurrentLang(pathname);
  const t = i18n[lang] || i18n.en;

  const [animatedBmi, setAnimatedBmi] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [trend, setTrend] = useState<'up' | 'down' | 'stable'>('stable');
  const prevBmiRef = useRef<number>(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (bmi !== null) {
      if (bmi > prevBmiRef.current + 0.1) {
        setTrend('up');
      } else if (bmi < prevBmiRef.current - 0.1) {
        setTrend('down');
      } else {
        setTrend('stable');
      }

      setIsChanging(true);

      const startValue = animatedBmi;
      const endValue = bmi;
      const duration = 150;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = startValue + (endValue - startValue) * easeOut;

        setAnimatedBmi(currentValue);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setIsChanging(false);
          prevBmiRef.current = bmi;
        }
      };

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      animationRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [bmi]);

  const getPosition = (value: number) => {
    const minBmi = 15;
    const maxBmi = 40;
    const position = ((value - minBmi) / (maxBmi - minBmi)) * 100;
    return Math.max(0, Math.min(100, position));
  };

  const getCategory = (value: number) => {
    if (value < 18.5) return { label: t.underweight, color: "text-info", bg: "bg-info" };
    if (value < 25) return { label: t.normal, color: "text-success", bg: "bg-success" };
    if (value < 30) return { label: t.overweight, color: "text-warning", bg: "bg-warning" };
    return { label: t.obesity, color: "text-destructive", bg: "bg-destructive" };
  };

  const getComment = (value: number) => {
    if (value < 16) return t.comments.severe;
    if (value < 17) return t.comments.moderate;
    if (value < 18.5) return t.comments.slight;
    if (value < 20) return t.comments.slim;
    if (value < 22) return t.comments.perfect;
    if (value < 25) return t.comments.normalWeight;
    if (value < 27) return t.comments.slightOver;
    if (value < 30) return t.comments.moderateOver;
    if (value < 35) return t.comments.obesityModerate;
    if (value < 40) return t.comments.obesitySevere;
    return t.comments.obesityMorbid;
  };

  const category = bmi ? getCategory(bmi) : null;
  const position = bmi ? getPosition(animatedBmi) : 0;

  const categories = [
    { label: t.catUnderweight, start: 0, end: 14, color: "bg-info" },
    { label: t.catNormal, start: 14, end: 40, color: "bg-success" },
    { label: t.catOverweight, start: 40, end: 60, color: "bg-warning" },
    { label: t.catObesity, start: 60, end: 100, color: "bg-destructive" },
  ];

  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;

  return (
    <div className="glass-card p-6 md:p-8 animate-slide-up overflow-hidden" style={{ animationDelay: "0.1s" }}>
      <h2 className="text-2xl font-display font-bold mb-6">{t.title}</h2>

      {/* BMI Display */}
      <div className="text-center mb-6">
        {bmi !== null ? (
          <div className={`transition-transform duration-150 ${isChanging ? 'scale-105' : 'scale-100'}`}>
            <div className="relative inline-flex items-center justify-center">
              <span className={`text-6xl md:text-7xl font-display font-bold transition-colors duration-200 ${category?.color}`}>
                {animatedBmi.toFixed(1)}
              </span>
              <div className={`absolute -right-10 p-2 rounded-full transition-all duration-200 ${
                isChanging ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              } ${trend === 'up' ? 'bg-destructive/20 text-destructive' : trend === 'down' ? 'bg-success/20 text-success' : 'bg-muted text-muted-foreground'}`}>
                <TrendIcon className="w-5 h-5" />
              </div>
            </div>
            <div className={`inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full transition-all duration-200 ${category?.bg}/20`}>
              <div className={`w-2 h-2 rounded-full ${category?.bg} ${isChanging ? 'animate-pulse' : ''}`} />
              <p className={`text-lg font-semibold ${category?.color}`}>
                {category?.label}
              </p>
            </div>
          </div>
        ) : (
          <div className="text-muted-foreground">
            <span className="text-5xl font-display font-bold opacity-30">--</span>
            <p className="text-lg mt-2">{t.enterData}</p>
          </div>
        )}
      </div>

      {/* Gauge Container */}
      <div className="space-y-3">
        {/* Gauge Bar */}
        <div className="relative h-6 rounded-full overflow-hidden shadow-inner bg-muted/20">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, #3b82f6 0%, #3b82f6 14%, #22c55e 14%, #22c55e 40%, #eab308 40%, #eab308 60%, #ef4444 60%, #ef4444 100%)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
          {bmi !== null && (
            <div
              className="absolute top-1/2 -translate-y-1/2 transition-all duration-200 ease-out z-10"
              style={{ left: `calc(${position}% - 12px)` }}
            >
              <div className={`w-6 h-6 rounded-full bg-white shadow-lg border-[3px] transition-transform duration-150 ${
                isChanging ? 'scale-110' : 'scale-100'
              }`} style={{
                borderColor: category?.bg === 'bg-info' ? '#3b82f6' :
                             category?.bg === 'bg-success' ? '#22c55e' :
                             category?.bg === 'bg-warning' ? '#eab308' : '#ef4444'
              }} />
            </div>
          )}
        </div>

        {/* Scale Labels */}
        <div className="relative h-5">
          <span className="absolute left-0 text-xs text-muted-foreground">15</span>
          <span className="absolute left-[14%] -translate-x-1/2 text-xs text-muted-foreground">18.5</span>
          <span className="absolute left-[40%] -translate-x-1/2 text-xs text-muted-foreground">25</span>
          <span className="absolute left-[60%] -translate-x-1/2 text-xs text-muted-foreground">30</span>
          <span className="absolute right-0 text-xs text-muted-foreground">40</span>
        </div>
      </div>

      {/* Category Labels */}
      <div className="grid grid-cols-4 gap-2 mt-4">
        {categories.map((cat, i) => {
          const isActive = category?.bg === cat.color;
          return (
            <div
              key={i}
              className={`flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg transition-all duration-200 ${
                isActive ? `${cat.color}/20 ring-2 ring-offset-1` : 'bg-muted/30'
              }`}
              style={{
                ringColor: isActive ? (cat.color === 'bg-info' ? '#3b82f6' : cat.color === 'bg-success' ? '#22c55e' : cat.color === 'bg-warning' ? '#eab308' : '#ef4444') : 'transparent'
              }}
            >
              <div className={`w-2.5 h-2.5 rounded-full ${cat.color}`} />
              <span className={`text-xs font-medium ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                {cat.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Comment */}
      {bmi !== null && (
        <div className="mt-4 p-4 rounded-xl bg-muted/30 border border-border/50">
          <p className="text-sm text-center text-muted-foreground">
            {getComment(bmi)}
          </p>
        </div>
      )}
    </div>
  );
};
