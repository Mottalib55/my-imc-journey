import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Scale, Ruler, Calculator } from "lucide-react";
import { getCurrentLang } from "@/config/routes";

interface BMICalculatorProps {
  onCalculate: (bmi: number, weight: number, height: number) => void;
}

const i18n: Record<string, { title: string; weight: string; height: string }> = {
  fr: { title: "Calculateur IMC", weight: "Poids", height: "Taille" },
  en: { title: "BMI Calculator", weight: "Weight", height: "Height" },
  es: { title: "Calculadora IMC", weight: "Peso", height: "Estatura" },
  pt: { title: "Calculadora IMC", weight: "Peso", height: "Altura" },
  ar: { title: "حاسبة مؤشر كتلة الجسم", weight: "الوزن", height: "الطول" },
  de: { title: "BMI-Rechner", weight: "Gewicht", height: "Größe" },
  it: { title: "Calcolatore IMC", weight: "Peso", height: "Altezza" },
  hi: { title: "बीएमआई कैलकुलेटर", weight: "वज़न", height: "कद" },
  zh: { title: "BMI计算器", weight: "体重", height: "身高" },
};

export const BMICalculator = ({ onCalculate }: BMICalculatorProps) => {
  const location = useLocation();
  const lang = getCurrentLang(location.pathname);
  const t = i18n[lang] || i18n.fr;

  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(170);
  const [activeSlider, setActiveSlider] = useState<string | null>(null);
  const prevBmiRef = useRef<number>(0);

  const bmi = weight / Math.pow(height / 100, 2);

  // Calculate BMI in real-time
  useEffect(() => {
    prevBmiRef.current = bmi;
    onCalculate(bmi, weight, height);
  }, [weight, height, onCalculate, bmi]);

  return (
    <div className="glass-card p-6 md:p-8 animate-slide-up overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-primary/10">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-display font-bold">{t.title}</h2>
      </div>

      <div className="space-y-6">
        {/* Weight Slider */}
        <div
          className={`space-y-3 p-4 rounded-xl transition-all duration-200 ${
            activeSlider === 'weight' ? 'bg-primary/10 scale-[1.02]' : 'hover:bg-muted/50'
          }`}
        >
          <div className="flex items-center justify-between">
            <Label className="flex items-center gap-2 text-muted-foreground">
              <Scale className={`w-4 h-4 transition-all duration-200 ${activeSlider === 'weight' ? 'text-primary scale-125' : ''}`} />
              {t.weight}
            </Label>
            <div className="flex items-baseline gap-1">
              <span className={`text-3xl font-display font-bold transition-all duration-150 ${
                activeSlider === 'weight' ? 'text-primary scale-110' : 'text-primary'
              }`}>{weight}</span>
              <span className="text-muted-foreground font-medium">kg</span>
            </div>
          </div>
          <Slider
            value={[weight]}
            onValueChange={(value) => setWeight(value[0])}
            onPointerDown={() => setActiveSlider('weight')}
            onPointerUp={() => setActiveSlider(null)}
            onPointerLeave={() => setActiveSlider(null)}
            min={30}
            max={200}
            step={1}
            className="cursor-pointer [&_[role=slider]]:shadow-lg [&_[role=slider]]:transition-transform [&_[role=slider]]:duration-150 [&_[role=slider]:active]:scale-125"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>30 kg</span>
            <span>200 kg</span>
          </div>
        </div>

        {/* Height Slider */}
        <div
          className={`space-y-3 p-4 rounded-xl transition-all duration-200 ${
            activeSlider === 'height' ? 'bg-accent/10 scale-[1.02]' : 'hover:bg-muted/50'
          }`}
        >
          <div className="flex items-center justify-between">
            <Label className="flex items-center gap-2 text-muted-foreground">
              <Ruler className={`w-4 h-4 transition-all duration-200 ${activeSlider === 'height' ? 'text-accent scale-125' : ''}`} />
              {t.height}
            </Label>
            <div className="flex items-baseline gap-1">
              <span className={`text-3xl font-display font-bold transition-all duration-150 ${
                activeSlider === 'height' ? 'text-accent scale-110' : 'text-accent'
              }`}>{height}</span>
              <span className="text-muted-foreground font-medium">cm</span>
            </div>
          </div>
          <Slider
            value={[height]}
            onValueChange={(value) => setHeight(value[0])}
            onPointerDown={() => setActiveSlider('height')}
            onPointerUp={() => setActiveSlider(null)}
            onPointerLeave={() => setActiveSlider(null)}
            min={100}
            max={220}
            step={1}
            className="cursor-pointer [&_[role=slider]]:border-accent [&_[role=slider]]:bg-accent [&>span>span]:bg-accent [&_[role=slider]]:shadow-lg [&_[role=slider]]:transition-transform [&_[role=slider]]:duration-150 [&_[role=slider]:active]:scale-125"
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
