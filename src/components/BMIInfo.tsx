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
        description: "Votre IMC indique un poids insuffisant. Consultez un professionnel de santé pour un bilan nutritionnel.",
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
        description: "Félicitations ! Votre IMC est dans la plage normale. Continuez à maintenir un mode de vie sain.",
        tips: [
          "Maintenez une alimentation équilibrée",
          "Pratiquez une activité physique régulière",
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
        description: "Votre IMC indique un surpoids. Des ajustements alimentaires et d'activité physique peuvent aider.",
        tips: [
          "Réduisez les aliments transformés",
          "Augmentez votre activité physique",
          "Consultez un professionnel pour un suivi",
        ],
        color: "text-warning",
        bgColor: "bg-warning/10",
        borderColor: "border-warning/20",
      };
    }
    return {
      icon: Heart,
      title: "Obésité",
      description: "Votre IMC indique une obésité. Il est recommandé de consulter un médecin pour un accompagnement adapté.",
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
    <div className="glass-card p-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-primary/10">
          <Info className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-display font-bold">Conseils Personnalisés</h2>
      </div>

      {bmi !== null && advice ? (
        <div className={`${advice.bgColor} rounded-xl p-6 border ${advice.borderColor} animate-scale-in`}>
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl ${advice.bgColor}`}>
              <Icon className={`w-6 h-6 ${advice.color}`} />
            </div>
            <div className="flex-1">
              <h3 className={`text-xl font-display font-bold ${advice.color} mb-2`}>
                {advice.title}
              </h3>
              <p className="text-muted-foreground mb-4">{advice.description}</p>
              
              <div className="space-y-2">
                <p className="font-semibold text-sm">Recommandations :</p>
                <ul className="space-y-2">
                  {advice.tips.map((tip, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full ${advice.color.replace('text-', 'bg-')}`} />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          <Info className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p>Calculez votre IMC pour obtenir des conseils personnalisés</p>
        </div>
      )}

      {/* Disclaimer */}
      <div className="mt-6 p-4 bg-muted/50 rounded-xl">
        <p className="text-xs text-muted-foreground">
          <strong>Note :</strong> L'IMC est un indicateur général et ne prend pas en compte la masse musculaire, 
          l'âge, le sexe ou la répartition des graisses. Pour un bilan complet, consultez un professionnel de santé.
        </p>
      </div>
    </div>
  );
};
