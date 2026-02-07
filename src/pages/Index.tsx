import { useState, useCallback } from "react";
import { BMICalculator } from "@/components/BMICalculator";
import { BMIGauge } from "@/components/BMIGauge";
import { PopulationChart } from "@/components/PopulationChart";
import { BMIInfo } from "@/components/BMIInfo";
import { Activity } from "lucide-react";

const Index = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);
  const [age, setAge] = useState<number | null>(null);

  const handleCalculate = useCallback((calculatedBmi: number, w: number, h: number, a: number) => {
    setBmi(calculatedBmi);
    setWeight(w);
    setHeight(h);
    setAge(a);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-age/5 blur-3xl animate-float" style={{ animationDelay: "-1.5s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-16">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Activity className="w-4 h-4" />
            Simulateur en temps réel
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            <span className="gradient-text">Calculez votre IMC</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez votre indice de masse corporelle avec des conseils adaptés à votre âge
          </p>
        </header>

        {/* Top Row - Calculator and Gauge side by side */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          <BMICalculator onCalculate={handleCalculate} />
          <BMIGauge bmi={bmi} />
        </div>

        {/* Bottom Row - Charts and Info */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          <PopulationChart bmi={bmi} age={age} />
          <BMIInfo bmi={bmi} age={age} />
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>
            © 2024 Calculateur IMC • Outil informatif uniquement
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
