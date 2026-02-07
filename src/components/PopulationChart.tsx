import { AreaChart, Area, XAxis, YAxis, ReferenceLine, ResponsiveContainer, Tooltip } from "recharts";
import { useMemo } from "react";
import { Users } from "lucide-react";

interface PopulationChartProps {
  bmi: number | null;
}

// Simulated population distribution (approximating a normal distribution)
const generatePopulationData = () => {
  const data = [];
  const mean = 25.5;
  const stdDev = 5;
  
  for (let x = 14; x <= 42; x += 0.5) {
    const y = Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2)) / (stdDev * Math.sqrt(2 * Math.PI));
    data.push({
      bmi: x,
      population: y * 100,
      label: x.toFixed(1),
    });
  }
  return data;
};

export const PopulationChart = ({ bmi }: PopulationChartProps) => {
  const data = useMemo(() => generatePopulationData(), []);

  const getPercentile = (value: number) => {
    // Approximate percentile based on normal distribution
    const mean = 25.5;
    const stdDev = 5;
    const z = (value - mean) / stdDev;
    
    // Approximation of cumulative normal distribution
    const t = 1 / (1 + 0.2316419 * Math.abs(z));
    const d = 0.3989423 * Math.exp(-z * z / 2);
    const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    
    return z > 0 ? (1 - p) * 100 : p * 100;
  };

  const percentile = bmi ? getPercentile(bmi) : null;

  const getZoneColor = (bmiValue: number) => {
    if (bmiValue < 18.5) return "hsl(199, 89%, 48%)";
    if (bmiValue < 25) return "hsl(142, 76%, 36%)";
    if (bmiValue < 30) return "hsl(45, 93%, 47%)";
    return "hsl(0, 84%, 60%)";
  };

  return (
    <div className="glass-card p-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-accent/10">
          <Users className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h2 className="text-2xl font-display font-bold">Distribution Population</h2>
          <p className="text-muted-foreground text-sm">Votre position par rapport à la population</p>
        </div>
      </div>

      {/* Percentile Display */}
      {bmi !== null && percentile !== null && (
        <div className="bg-secondary/50 rounded-xl p-4 mb-6 animate-scale-in">
          <p className="text-sm text-muted-foreground">Vous êtes dans le</p>
          <p className="text-3xl font-display font-bold gradient-text">
            {percentile.toFixed(0)}ème percentile
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {percentile < 50 
              ? `${(100 - percentile).toFixed(0)}% de la population a un IMC plus élevé`
              : `${percentile.toFixed(0)}% de la population a un IMC plus bas`
            }
          </p>
        </div>
      )}

      {/* Chart */}
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="populationGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="bmi" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(215, 16%, 47%)', fontSize: 12 }}
              tickFormatter={(value) => value.toFixed(0)}
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
              labelFormatter={(label) => `IMC: ${label}`}
            />
            <Area
              type="monotone"
              dataKey="population"
              stroke="hsl(160, 84%, 39%)"
              strokeWidth={2}
              fill="url(#populationGradient)"
            />
            {bmi !== null && (
              <ReferenceLine
                x={bmi}
                stroke={getZoneColor(bmi)}
                strokeWidth={3}
                strokeDasharray="5 5"
                label={{
                  value: "Vous",
                  position: "top",
                  fill: getZoneColor(bmi),
                  fontWeight: 600,
                }}
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>

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
