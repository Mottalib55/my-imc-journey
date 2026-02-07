import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Scale, Ruler, Calculator, Calendar } from "lucide-react";

interface BMICalculatorProps {
  onCalculate: (bmi: number, weight: number, height: number, age: number) => void;
}

export const BMICalculator = ({ onCalculate }: BMICalculatorProps) => {
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(170);
  const [age, setAge] = useState<number>(30);

  // Calculate BMI in real-time
  useEffect(() => {
    const h = height / 100;
    const bmi = weight / (h * h);
    onCalculate(bmi, weight, height, age);
  }, [weight, height, age, onCalculate]);

  const bmi = weight / Math.pow(height / 100, 2);

  return (
    <div className="glass-card p-8 animate-slide-up">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-primary/10">
            <Calculator className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl font-display font-bold">Calculateur IMC</h2>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Votre IMC</p>
          <p className="text-3xl font-display font-bold gradient-text">{bmi.toFixed(1)}</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Age Slider */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              Âge
            </Label>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-display font-bold text-age">{age}</span>
              <span className="text-muted-foreground font-medium">ans</span>
            </div>
          </div>
          <Slider
            value={[age]}
            onValueChange={(value) => setAge(value[0])}
            min={18}
            max={80}
            step={1}
            className="cursor-pointer [&_[role=slider]]:border-age [&>span>span]:bg-age"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>18 ans</span>
            <span>80 ans</span>
          </div>
        </div>

        {/* Weight Slider */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="flex items-center gap-2 text-muted-foreground">
              <Scale className="w-4 h-4" />
              Poids
            </Label>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-display font-bold text-primary">{weight}</span>
              <span className="text-muted-foreground font-medium">kg</span>
            </div>
          </div>
          <Slider
            value={[weight]}
            onValueChange={(value) => setWeight(value[0])}
            min={30}
            max={200}
            step={1}
            className="cursor-pointer"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>30 kg</span>
            <span>200 kg</span>
          </div>
        </div>

        {/* Height Slider */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="flex items-center gap-2 text-muted-foreground">
              <Ruler className="w-4 h-4" />
              Taille
            </Label>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-display font-bold text-accent">{height}</span>
              <span className="text-muted-foreground font-medium">cm</span>
            </div>
          </div>
          <Slider
            value={[height]}
            onValueChange={(value) => setHeight(value[0])}
            min={100}
            max={220}
            step={1}
            className="cursor-pointer [&_[role=slider]]:border-accent [&_.bg-gradient-to-r]:from-accent [&_.bg-gradient-to-r]:to-accent/80"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>100 cm</span>
            <span>220 cm</span>
          </div>
        </div>
      </div>
    </div>
  );
};
