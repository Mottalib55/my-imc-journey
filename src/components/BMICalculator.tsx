import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Scale, Ruler, Calculator } from "lucide-react";

interface BMICalculatorProps {
  onCalculate: (bmi: number, weight: number, height: number) => void;
}

export const BMICalculator = ({ onCalculate }: BMICalculatorProps) => {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");

  const handleCalculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // Convert cm to m
    
    if (w > 0 && h > 0) {
      const bmi = w / (h * h);
      onCalculate(bmi, w, parseFloat(height));
    }
  };

  const isValid = parseFloat(weight) > 0 && parseFloat(height) > 0;

  return (
    <div className="glass-card p-8 animate-slide-up">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-primary/10">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-display font-bold">Calculateur IMC</h2>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="weight" className="flex items-center gap-2 text-muted-foreground">
            <Scale className="w-4 h-4" />
            Poids (kg)
          </Label>
          <Input
            id="weight"
            type="number"
            placeholder="Ex: 70"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="h-14 text-lg bg-secondary/50 border-0 focus-visible:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="height" className="flex items-center gap-2 text-muted-foreground">
            <Ruler className="w-4 h-4" />
            Taille (cm)
          </Label>
          <Input
            id="height"
            type="number"
            placeholder="Ex: 175"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="h-14 text-lg bg-secondary/50 border-0 focus-visible:ring-primary"
          />
        </div>

        <Button 
          onClick={handleCalculate}
          disabled={!isValid}
          className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 glow-effect transition-all duration-300 hover:scale-[1.02]"
        >
          Calculer mon IMC
        </Button>
      </div>
    </div>
  );
};
