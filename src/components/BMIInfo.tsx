import { Info, Heart, AlertTriangle, CheckCircle2 } from "lucide-react";

interface BMIInfoProps {
  bmi: number | null;
}

export const BMIInfo = ({ bmi }: BMIInfoProps) => {
  const getAdvice = (value: number) => {
    if (value < 18.5) {
      return {
        icon: AlertTriangle,
        title: "Insuffisance pondérale",
        description: "Votre IMC indique un poids insuffisant. Un accompagnement nutritionnel peut vous aider.",
        tips: [
          "Augmentez progressivement vos apports caloriques",
          "Privilégiez les aliments nutritifs et énergétiques",
          "Consultez un nutritionniste si nécessaire",
        ],
        color: "text-info",
        bgColor: "bg-info/10",
        borderColor: "border-info/20",
      };
    }
    if (value < 25) {
      return {
        icon: CheckCircle2,
        title: "Poids idéal",
        description: "Votre IMC est dans la plage normale. Maintenez vos bonnes habitudes !",
        tips: [
          "Maintenez une alimentation équilibrée",
          "Pratiquez 150 min d'activité modérée par semaine",
          "Continuez vos bonnes habitudes",
        ],
        color: "text-success",
        bgColor: "bg-success/10",
        borderColor: "border-success/20",
      };
    }
    if (value < 30) {
      return {
        icon: AlertTriangle,
        title: "Surpoids",
        description: "Des ajustements alimentaires et d'activité physique peuvent vous aider.",
        tips: [
          "Réduisez les aliments ultra-transformés",
          "Augmentez votre activité physique progressivement",
          "Consultez un professionnel pour un suivi personnalisé",
        ],
        color: "text-warning",
        bgColor: "bg-warning/10",
        borderColor: "border-warning/20",
      };
    }
    return {
      icon: Heart,
      title: "Obésité",
      description: "Il est recommandé de consulter un médecin pour un accompagnement adapté.",
      tips: [
        "Consultez un médecin pour un bilan complet",
        "Établissez un plan alimentaire personnalisé",
        "Intégrez progressivement l'activité physique",
      ],
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      borderColor: "border-destructive/20",
    };
  };

  const advice = bmi ? getAdvice(bmi) : null;
  const Icon = advice?.icon || Info;

  return (
    <div className="glass-card p-6 md:p-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-primary/10">
          <Info className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-display font-bold">Conseils Personnalisés</h2>
      </div>

      {bmi !== null && advice ? (
        <div className="space-y-4">
          {/* Main advice */}
          <div className={`${advice.bgColor} rounded-xl p-5 border ${advice.borderColor}`}>
            <div className="flex items-start gap-4">
              <div className={`p-2.5 rounded-xl ${advice.bgColor}`}>
                <Icon className={`w-5 h-5 ${advice.color}`} />
              </div>
              <div className="flex-1">
                <h3 className={`text-lg font-display font-bold ${advice.color} mb-1`}>
                  {advice.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{advice.description}</p>

                <div className="space-y-1.5">
                  <p className="font-semibold text-xs uppercase tracking-wide text-muted-foreground">Recommandations :</p>
                  <ul className="space-y-1.5">
                    {advice.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${advice.color.replace('text-', 'bg-')}`} />
                        <span className="text-foreground/80">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-8 text-muted-foreground">
          <Info className="w-10 h-10 mx-auto mb-3 opacity-30" />
          <p className="text-sm">Ajustez les curseurs pour obtenir des conseils personnalisés</p>
        </div>
      )}

      {/* Disclaimer */}
      <div className="mt-5 p-3 bg-muted/50 rounded-lg">
        <p className="text-xs text-muted-foreground">
          <strong>Note :</strong> L'IMC est un indicateur général. Pour un bilan complet, consultez un professionnel de santé.
        </p>
      </div>
    </div>
  );
};
