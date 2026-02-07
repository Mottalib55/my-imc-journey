import { useEffect, useState } from "react";

interface BMIGaugeProps {
  bmi: number | null;
}

export const BMIGauge = ({ bmi }: BMIGaugeProps) => {
  const [animatedBmi, setAnimatedBmi] = useState(0);

  useEffect(() => {
    if (bmi !== null) {
      const timer = setTimeout(() => setAnimatedBmi(bmi), 100);
      return () => clearTimeout(timer);
    }
  }, [bmi]);

  // BMI ranges: <18.5 underweight, 18.5-24.9 normal, 25-29.9 overweight, >=30 obese
  // Map BMI to position (0-100%)
  const getPosition = (value: number) => {
    const minBmi = 15;
    const maxBmi = 40;
    const position = ((value - minBmi) / (maxBmi - minBmi)) * 100;
    return Math.max(0, Math.min(100, position));
  };

  const getCategory = (value: number) => {
    if (value < 18.5) return { label: "Insuffisance pondérale", color: "text-info" };
    if (value < 25) return { label: "Poids normal", color: "text-success" };
    if (value < 30) return { label: "Surpoids", color: "text-warning" };
    return { label: "Obésité", color: "text-destructive" };
  };

  const category = bmi ? getCategory(bmi) : null;
  const position = bmi ? getPosition(animatedBmi) : 0;

  // Category positions on the gauge
  const categories = [
    { label: "Sous-poids", start: 0, end: 14, color: "bg-info" },
    { label: "Normal", start: 14, end: 40, color: "bg-success" },
    { label: "Surpoids", start: 40, end: 60, color: "bg-warning" },
    { label: "Obésité", start: 60, end: 100, color: "bg-destructive" },
  ];

  return (
    <div className="glass-card p-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
      <h2 className="text-2xl font-display font-bold mb-6">Votre Position</h2>

      {/* BMI Display */}
      <div className="text-center mb-8">
        {bmi !== null ? (
          <div className="animate-scale-in">
            <span className="text-7xl font-display font-bold gradient-text">
              {animatedBmi.toFixed(1)}
            </span>
            <p className={`text-xl font-medium mt-2 ${category?.color}`}>
              {category?.label}
            </p>
          </div>
        ) : (
          <div className="text-muted-foreground">
            <span className="text-5xl font-display font-bold opacity-30">--</span>
            <p className="text-lg mt-2">Entrez vos données</p>
          </div>
        )}
      </div>

      {/* Gauge */}
      <div className="relative h-8 rounded-full overflow-hidden mb-4">
        <div className="absolute inset-0 flex">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`${cat.color} opacity-80`}
              style={{ width: `${cat.end - cat.start}%` }}
            />
          ))}
        </div>
        
        {/* Indicator */}
        {bmi !== null && (
          <div
            className="absolute top-1/2 -translate-y-1/2 transition-all duration-1000 ease-out"
            style={{ left: `${position}%` }}
          >
            <div className="relative">
              <div className="w-6 h-6 -ml-3 rounded-full bg-card border-4 border-foreground shadow-lg" />
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-card px-3 py-1 rounded-lg text-sm font-bold whitespace-nowrap">
                {animatedBmi.toFixed(1)}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Labels */}
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>15</span>
        <span>18.5</span>
        <span>25</span>
        <span>30</span>
        <span>40</span>
      </div>

      {/* Category Labels */}
      <div className="flex mt-6 gap-3 flex-wrap">
        {categories.map((cat, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${cat.color}`} />
            <span className="text-sm text-muted-foreground">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
