import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, ReferenceDot } from "recharts";
import { useMemo } from "react";
import { Users, TrendingUp } from "lucide-react";

interface PopulationChartProps {
  bmi: number | null;
  age: number | null;
}

// Generate population distribution based on age
const generatePopulationData = (age: number) => {
  const data = [];
  // Mean BMI increases slightly with age
  const mean = 23 + (age - 20) * 0.08;
  const stdDev = 4.5;
  
  for (let x = 14; x <= 42; x += 0.5) {
    const y = Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2)) / (stdDev * Math.sqrt(2 * Math.PI));
    data.push({
      bmi: x,
      population: y * 100,
    });
  }
  return data;
};

export const PopulationChart = ({ bmi, age }: PopulationChartProps) => {
  const data = useMemo(() => generatePopulationData(age || 30), [age]);

  const getPercentile = (value: number, userAge: number) => {
    const mean = 23 + (userAge - 20) * 0.08;
    const stdDev = 4.5;
    const z = (value - mean) / stdDev;
    
    const t = 1 / (1 + 0.2316419 * Math.abs(z));
    const d = 0.3989423 * Math.exp(-z * z / 2);
    const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    
    return z > 0 ? (1 - p) * 100 : p * 100;
  };

  const percentile = bmi && age ? getPercentile(bmi, age) : null;

  // Find the Y value for the user's BMI on the curve
  const getUserYPosition = (userBmi: number, userAge: number) => {
    const mean = 23 + (userAge - 20) * 0.08;
    const stdDev = 4.5;
    const y = Math.exp(-0.5 * Math.pow((userBmi - mean) / stdDev, 2)) / (stdDev * Math.sqrt(2 * Math.PI));
    return y * 100;
  };

  const userY = bmi && age ? getUserYPosition(bmi, age) : 0;

  const getZoneColor = (bmiValue: number) => {
    if (bmiValue < 18.5) return "hsl(199, 89%, 48%)";
    if (bmiValue < 25) return "hsl(142, 76%, 36%)";
    if (bmiValue < 30) return "hsl(45, 93%, 47%)";
    return "hsl(0, 84%, 60%)";
  };

  const getAgeGroup = (userAge: number) => {
    if (userAge < 25) return "18-24 ans";
    if (userAge < 35) return "25-34 ans";
    if (userAge < 45) return "35-44 ans";
    if (userAge < 55) return "45-54 ans";
    if (userAge < 65) return "55-64 ans";
    return "65+ ans";
  };

  return (
    <div className="glass-card p-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-accent/10">
          <Users className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h2 className="text-2xl font-display font-bold">Distribution Population</h2>
          <p className="text-muted-foreground text-sm">
            Groupe d'âge : <span className="font-semibold text-foreground">{age ? getAgeGroup(age) : "--"}</span>
          </p>
        </div>
      </div>

      {/* Percentile Display */}
      {bmi !== null && percentile !== null && (
        <div className="bg-secondary/50 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Votre percentile</p>
              <p className="text-4xl font-display font-bold gradient-text">
                {percentile.toFixed(0)}%
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-muted-foreground">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">Position</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {percentile < 50 
                  ? `Plus mince que ${(100 - percentile).toFixed(0)}% des gens`
                  : `IMC plus élevé que ${percentile.toFixed(0)}% des gens`
                }
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Chart */}
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 30, right: 20, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="populationGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="userGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={bmi ? getZoneColor(bmi) : "hsl(160, 84%, 39%)"} stopOpacity={1} />
                <stop offset="100%" stopColor={bmi ? getZoneColor(bmi) : "hsl(160, 84%, 39%)"} stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="bmi" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(215, 16%, 47%)', fontSize: 12 }}
              tickFormatter={(value) => value.toFixed(0)}
              ticks={[15, 18.5, 25, 30, 40]}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(0, 0%, 100%)',
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
              }}
              formatter={(value: number) => [`${(value).toFixed(1)}%`, 'Distribution']}
              labelFormatter={(label) => `IMC: ${Number(label).toFixed(1)}`}
            />
            <Area
              type="monotone"
              dataKey="population"
              stroke="hsl(160, 84%, 39%)"
              strokeWidth={2}
              fill="url(#populationGradient)"
            />
            {bmi !== null && (
              <ReferenceDot
                x={bmi}
                y={userY}
                r={10}
                fill={getZoneColor(bmi)}
                stroke="white"
                strokeWidth={3}
                isFront={true}
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* User position label */}
      {bmi !== null && (
        <div className="flex justify-center mt-2">
          <div 
            className="px-3 py-1 rounded-full text-sm font-semibold text-white shadow-lg"
            style={{ backgroundColor: getZoneColor(bmi) }}
          >
            Vous : {bmi.toFixed(1)}
          </div>
        </div>
      )}

      {/* Zone indicators */}
      <div className="flex justify-between mt-4 text-xs">
        <span className="text-info font-medium">Sous-poids</span>
        <span className="text-success font-medium">Normal</span>
        <span className="text-warning font-medium">Surpoids</span>
        <span className="text-destructive font-medium">Obésité</span>
      </div>
    </div>
  );
};
