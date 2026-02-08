import { useEffect, useState, useRef } from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface BMIGaugeProps {
  bmi: number | null;
}

export const BMIGauge = ({ bmi }: BMIGaugeProps) => {
  const [animatedBmi, setAnimatedBmi] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [trend, setTrend] = useState<'up' | 'down' | 'stable'>('stable');
  const prevBmiRef = useRef<number>(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (bmi !== null) {
      // Determine trend
      if (bmi > prevBmiRef.current + 0.1) {
        setTrend('up');
      } else if (bmi < prevBmiRef.current - 0.1) {
        setTrend('down');
      } else {
        setTrend('stable');
      }

      setIsChanging(true);

      // Smooth animation
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
    if (value < 18.5) return { label: "Insuffisance pondérale", color: "text-info", bg: "bg-info" };
    if (value < 25) return { label: "Poids normal", color: "text-success", bg: "bg-success" };
    if (value < 30) return { label: "Surpoids", color: "text-warning", bg: "bg-warning" };
    return { label: "Obésité", color: "text-destructive", bg: "bg-destructive" };
  };

  const getComment = (value: number) => {
    if (value < 16) {
      return "Maigreur sévère. Consultez rapidement un médecin pour un bilan nutritionnel.";
    }
    if (value < 17) {
      return "Maigreur modérée. Un suivi médical est recommandé pour retrouver un poids santé.";
    }
    if (value < 18.5) {
      return "Légère insuffisance pondérale. Quelques kilos en plus vous feraient du bien.";
    }
    if (value < 20) {
      return "Vous êtes mince mais dans la norme. Continuez à bien manger équilibré.";
    }
    if (value < 22) {
      return "IMC parfait ! Vous êtes au cœur de la zone idéale. Bravo !";
    }
    if (value < 25) {
      return "Poids normal. Vous êtes en bonne santé, maintenez vos habitudes.";
    }
    if (value < 27) {
      return "Léger surpoids. Quelques ajustements alimentaires peuvent aider.";
    }
    if (value < 30) {
      return "Surpoids modéré. Pensez à bouger plus et manger mieux.";
    }
    if (value < 35) {
      return "Obésité modérée. Un accompagnement médical est conseillé.";
    }
    if (value < 40) {
      return "Obésité sévère. Consultez un professionnel de santé pour un suivi adapté.";
    }
    return "Obésité morbide. Une prise en charge médicale urgente est recommandée.";
  };

  const category = bmi ? getCategory(bmi) : null;
  const position = bmi ? getPosition(animatedBmi) : 0;

  const categories = [
    { label: "Sous-poids", start: 0, end: 14, color: "bg-info" },
    { label: "Normal", start: 14, end: 40, color: "bg-success" },
    { label: "Surpoids", start: 40, end: 60, color: "bg-warning" },
    { label: "Obésité", start: 60, end: 100, color: "bg-destructive" },
  ];

  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;

  return (
    <div className="glass-card p-6 md:p-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
      <h2 className="text-2xl font-display font-bold mb-6">Votre Position</h2>

      {/* BMI Display */}
      <div className="text-center mb-6">
        {bmi !== null ? (
          <div className={`transition-transform duration-150 ${isChanging ? 'scale-105' : 'scale-100'}`}>
            <div className="flex items-center justify-center gap-3">
              <span className={`text-6xl md:text-7xl font-display font-bold transition-colors duration-200 ${category?.color}`}>
                {animatedBmi.toFixed(1)}
              </span>
              <div className={`p-2 rounded-full transition-all duration-200 ${
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
            <p className="text-lg mt-2">Entrez vos données</p>
          </div>
        )}
      </div>

      {/* Gauge Container */}
      <div className="space-y-3">
        {/* Gauge Bar */}
        <div className="relative h-6 rounded-full overflow-hidden shadow-inner bg-muted/20">
          {/* Gradient Background */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, #3b82f6 0%, #3b82f6 14%, #22c55e 14%, #22c55e 40%, #eab308 40%, #eab308 60%, #ef4444 60%, #ef4444 100%)'
            }}
          />

          {/* Glass effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />

          {/* Cursor/Indicator */}
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
