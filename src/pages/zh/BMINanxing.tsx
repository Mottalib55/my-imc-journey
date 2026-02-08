import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { User, Dumbbell, Target, Heart, Scale, Activity, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";

const BMINanxing = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(80);
  const [height, setHeight] = useState(178);

  const calculateBMI = useCallback((w: number, h: number) => {
    const heightInM = h / 100;
    const calculatedBmi = w / (heightInM * heightInM);
    setBmi(calculatedBmi);
  }, []);

  // Calculate BMI on initial load
  useEffect(() => {
    calculateBMI(weight, height);
  }, []);

  const handleWeightChange = (value: number[]) => {
    setWeight(value[0]);
    calculateBMI(value[0], height);
  };

  const handleHeightChange = (value: number[]) => {
    setHeight(value[0]);
    calculateBMI(weight, value[0]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-6">
            <User className="w-4 h-4" />
            男性专用
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-blue-500">男性BMI计算器</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            专为男性设计的BMI计算器，提供个性化的健康建议和男性体成分分析
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-500" />
              输入您的身体数据
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">体重</label>
                  <span className="text-2xl font-bold text-blue-500">{weight} kg</span>
                </div>
                <Slider
                  value={[weight]}
                  onValueChange={handleWeightChange}
                  min={40}
                  max={200}
                  step={1}
                  className="py-4"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">身高</label>
                  <span className="text-2xl font-bold text-blue-500">{height} cm</span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={handleHeightChange}
                  min={140}
                  max={220}
                  step={1}
                  className="py-4"
                />
              </div>
            </div>
          </div>

          <BMIGauge bmi={bmi} />
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Understanding BMI for Men */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <User className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">了解男性BMI</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>男性BMI</strong>的计算方式与女性相同，但解读方式可能有所不同。
                男性天生拥有<strong>更多的肌肉量</strong>和<strong>更低的体脂率</strong>
                （15-20%，而女性为20-25%）。
              </p>
              <p>
                一个经常锻炼或进行力量训练的男性可能拥有<strong>较高的BMI</strong>，但仍然非常健康。
                因此，<strong>腰围</strong>通常是男性更好的健康指标：
                腰围不应超过<strong>90厘米</strong>（中度风险）或<strong>100厘米</strong>（高度风险）。
              </p>
            </div>
          </div>

          {/* BMI Table for Men */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Scale className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">男性BMI分类表</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">分类</th>
                    <th className="text-left py-3 px-4 font-semibold">BMI范围</th>
                    <th className="text-left py-3 px-4 font-semibold">示例（身高1.80米）</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      偏瘦
                    </td>
                    <td className="py-3 px-4">&lt; 18.5</td>
                    <td className="py-3 px-4">&lt; 60 kg</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      正常
                    </td>
                    <td className="py-3 px-4">18.5 - 24.9</td>
                    <td className="py-3 px-4">60 - 81 kg</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      超重
                    </td>
                    <td className="py-3 px-4">25 - 29.9</td>
                    <td className="py-3 px-4">81 - 97 kg</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      肥胖
                    </td>
                    <td className="py-3 px-4">&ge; 30</td>
                    <td className="py-3 px-4">&gt; 97 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Age-related BMI factors */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Activity className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">男性BMI与年龄的关系</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                随着年龄的增长，男性的<strong>身体成分</strong>会发生显著变化。了解这些变化有助于更准确地评估BMI：
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h4 className="font-semibold text-blue-500 mb-2">20-30岁</h4>
                  <p className="text-sm">新陈代谢旺盛，肌肉量处于峰值。理想BMI范围为<strong>20-25</strong>。这是建立健康生活习惯的最佳时期。</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h4 className="font-semibold text-blue-500 mb-2">30-40岁</h4>
                  <p className="text-sm">基础代谢率开始下降，容易积累腹部脂肪。建议保持规律运动，BMI应控制在<strong>21-26</strong>。</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h4 className="font-semibold text-blue-500 mb-2">40-50岁</h4>
                  <p className="text-sm">睾酮水平逐渐下降，肌肉流失加速。可接受的BMI范围为<strong>22-27</strong>，但需注意腰围变化。</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h4 className="font-semibold text-blue-500 mb-2">50岁以上</h4>
                  <p className="text-sm">新陈代谢明显减缓，骨密度可能下降。BMI可容许稍高至<strong>23-27</strong>，定期体检至关重要。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ideal weight by height */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">男性理想体重对照表</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "1.65米", min: 50, max: 68, ideal: 60 },
                { height: "1.70米", min: 53, max: 72, ideal: 64 },
                { height: "1.75米", min: 57, max: 76, ideal: 67 },
                { height: "1.80米", min: 60, max: 81, ideal: 71 },
                { height: "1.85米", min: 63, max: 85, ideal: 75 },
                { height: "1.90米", min: 67, max: 90, ideal: 79 },
              ].map((item) => (
                <div key={item.height} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className="font-semibold text-blue-500">{item.height}</span>
                  <span className="text-muted-foreground">
                    {item.min} - {item.max} kg <span className="text-success">（理想：{item.ideal} kg）</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tips for men - Sport & Health */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-success/10">
                  <Dumbbell className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-xl font-display font-bold">运动与肌肉</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>力量训练</strong>会增加肌肉量，从而提高BMI数值</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>肌肉发达的男性BMI可能达到<strong>27-28</strong>而没有多余脂肪</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>建议结合<strong>有氧运动和力量训练</strong>以达到最佳平衡</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>每周至少进行<strong>150分钟中等强度运动</strong></span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-warning/10">
                  <Heart className="w-6 h-6 text-warning" />
                </div>
                <h3 className="text-xl font-display font-bold">男性健康风险</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>腹部脂肪</strong>会显著增加心血管疾病风险</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>40岁</strong>以后新陈代谢明显减缓</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>睾酮</strong>随年龄下降会促进脂肪堆积</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>建议<strong>50岁以后</strong>每年进行全面体检</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Activity className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">关于男性BMI的全面指南</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>男性BMI计算器</strong>是评估您<strong>男性体成分</strong>的重要工具。
                无论您是想了解<strong>男性理想BMI</strong>还是检查自己是否拥有
                <strong>健康的体重</strong>，我们的<strong>男性BMI计算器</strong>都能为您提供即时、准确的答案。
              </p>
              <p>
                <strong>男性平均BMI</strong>因年龄和运动水平而异。<strong>男性正常BMI</strong>
                范围为20至25。对于身高<strong>1.78米</strong>的男性，<strong>理想体重</strong>约为
                70公斤。对于身高<strong>1.83米</strong>的男性，约为74公斤。
              </p>
              <p>
                <strong>男性应该拥有什么样的BMI？</strong>理想范围为20-25，但运动型男性可能偏高。
                <strong>50岁以上男性的BMI</strong>可以容许稍高的数值（最高27）而不会有太大风险。
                关键在于保持规律的体育锻炼和均衡的饮食。
              </p>
            </div>
          </div>

          {/* Internal links */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">相关工具</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/zh/bmi" className="p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors text-center">
                <Scale className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <span className="font-semibold">BMI计算器</span>
                <p className="text-sm text-muted-foreground mt-1">通用BMI计算工具</p>
              </Link>
              <Link to="/zh/bmi-nvxing" className="p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors text-center">
                <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                <span className="font-semibold">女性BMI计算器</span>
                <p className="text-sm text-muted-foreground mt-1">专为女性定制</p>
              </Link>
              <Link to="/zh/bmi-yundongyuan" className="p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors text-center">
                <Dumbbell className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <span className="font-semibold">运动员BMI计算器</span>
                <p className="text-sm text-muted-foreground mt-1">适用于体育运动者</p>
              </Link>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 男性BMI计算器</p>
        </footer>
      </div>
    </div>
  );
};

export default BMINanxing;
