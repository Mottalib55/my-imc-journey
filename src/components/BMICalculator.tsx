import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Scale, Ruler, Calculator } from "lucide-react";

interface BMICalculatorProps {
  onCalculate: (bmi: number, weight: number, height: number) => void;
}

export const BMICalculator = ({ onCalculate }: BMICalculatorProps) => {
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(170);

  const handleCalculate = () => {
    const h = height / 100; // Convert cm to m
    const bmi = weight / (h * h);
    onCalculate(bmi, weight, height);
  };

  return (
    <div className="glass-card p-8 animate-slide-up">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-xl bg-primary/10">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-display font-bold">Calculateur IMC</h2>
      </div>

      <div className="space-y-10">
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
            className="cursor-pointer [&_[role=slider]]:bg-accent [&_.bg-primary]:bg-accent"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>100 cm</span>
            <span>220 cm</span>
          </div>
        </div>

        <Button 
          onClick={handleCalculate}
          className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 glow-effect transition-all duration-300 hover:scale-[1.02]"
        >
          Calculer mon IMC
        </Button>
      </div>
    </div>
  );
};
