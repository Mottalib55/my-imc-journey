import { Calculator, Scale, Ruler, Target, TrendingUp, TrendingDown } from "lucide-react";

interface BMIDetailsProps {
  bmi: number | null;
  weight: number | null;
  height: number | null;
}

export const BMIDetails = ({ bmi, weight, height }: BMIDetailsProps) => {
  if (!bmi || !weight || !height) {
    return null;
  }

  const heightM = height / 100;

  // Calculate ideal weight range (BMI 18.5 - 24.9)
  const idealWeightMin = 18.5 * heightM * heightM;
  const idealWeightMax = 24.9 * heightM * heightM;
  const idealWeightMid = (idealWeightMin + idealWeightMax) / 2;

  // Weight to lose or gain
  const weightToIdealMin = weight - idealWeightMax;
  const weightToIdealMax = weight - idealWeightMin;

  const getIdealWeightMessage = () => {
    if (bmi < 18.5) {
      return {
        message: `Vous pourriez prendre entre ${Math.abs(weightToIdealMax).toFixed(1)} et ${Math.abs(weightToIdealMin).toFixed(1)} kg`,
        icon: TrendingUp,
        color: "text-info",
      };
    } else if (bmi < 25) {
      return {
        message: "Vous êtes dans la plage de poids idéale",
        icon: Target,
        color: "text-success",
      };
    } else {
      return {
        message: `Objectif : perdre entre ${weightToIdealMin.toFixed(1)} et ${weightToIdealMax.toFixed(1)} kg`,
        icon: TrendingDown,
        color: "text-warning",
      };
    }
  };

  const idealInfo = getIdealWeightMessage();
  const IdealIcon = idealInfo.icon;

  return (
    <div className="glass-card p-6 md:p-8 animate-slide-up overflow-hidden" style={{ animationDelay: "0.2s" }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-primary/10">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-display font-bold">Détails du calcul</h2>
      </div>

      {/* Formula Display */}
      <div className="bg-muted/50 rounded-xl p-4 md:p-5 mb-6 overflow-x-auto">
        <p className="text-sm text-muted-foreground mb-3">Formule de l'IMC :</p>
        <div className="flex items-center justify-center gap-2 text-sm md:text-lg font-mono min-w-0">
          <span className="text-primary font-bold shrink-0">IMC</span>
          <span className="shrink-0">=</span>
          <div className="text-center shrink-0">
            <div className="border-b border-foreground/30 pb-1 px-2 md:px-3">
              <span className="text-primary">{weight}</span>
              <span className="text-muted-foreground text-xs md:text-sm"> kg</span>
            </div>
            <div className="pt-1 px-2 md:px-3">
              <span className="text-accent">{heightM.toFixed(2)}</span>
              <span className="text-muted-foreground text-xs md:text-sm"> m</span>
              <span className="align-super text-xs">2</span>
            </div>
          </div>
          <span className="shrink-0">=</span>
          <div className="text-center shrink-0">
            <div className="border-b border-foreground/30 pb-1 px-2 md:px-3">
              <span className="text-primary">{weight}</span>
            </div>
            <div className="pt-1 px-2 md:px-3">
              <span className="text-accent">{(heightM * heightM).toFixed(3)}</span>
            </div>
          </div>
          <span className="shrink-0">=</span>
          <span className="text-xl md:text-2xl font-bold gradient-text shrink-0">{bmi.toFixed(2)}</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-primary/5 rounded-xl p-4 text-center">
          <Scale className="w-5 h-5 text-primary mx-auto mb-2" />
          <p className="text-xs text-muted-foreground">Poids actuel</p>
          <p className="text-xl font-bold text-primary">{weight} kg</p>
        </div>
        <div className="bg-accent/5 rounded-xl p-4 text-center">
          <Ruler className="w-5 h-5 text-accent mx-auto mb-2" />
          <p className="text-xs text-muted-foreground">Taille</p>
          <p className="text-xl font-bold text-accent">{height} cm</p>
        </div>
        <div className="bg-success/5 rounded-xl p-4 text-center col-span-2">
          <Target className="w-5 h-5 text-success mx-auto mb-2" />
          <p className="text-xs text-muted-foreground">Poids idéal (IMC 18.5-25)</p>
          <p className="text-xl font-bold text-success">
            {idealWeightMin.toFixed(1)} - {idealWeightMax.toFixed(1)} kg
          </p>
        </div>
      </div>

      {/* Ideal Weight Info */}
      <div className={`rounded-xl p-4 border ${idealInfo.color.replace('text-', 'border-')}/20 ${idealInfo.color.replace('text-', 'bg-')}/10`}>
        <div className="flex items-center gap-3">
          <IdealIcon className={`w-5 h-5 ${idealInfo.color}`} />
          <p className={`font-medium ${idealInfo.color}`}>{idealInfo.message}</p>
        </div>
      </div>
    </div>
  );
};
