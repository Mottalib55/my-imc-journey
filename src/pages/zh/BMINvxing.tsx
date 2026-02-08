import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Users, Heart, Target, Baby, Scale, Activity, AlertTriangle, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";

const BMINvxing = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(65);
  const [height, setHeight] = useState(165);

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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-pink-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-500 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            女性专用
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-pink-500">女性BMI计算器</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            专为女性设计的BMI计算器，为您人生每个阶段提供个性化的健康建议
          </p>
        </header>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-pink-500" />
              请输入您的身体数据
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">体重</label>
                  <span className="text-2xl font-bold text-pink-500">{weight} kg</span>
                </div>
                <Slider
                  value={[weight]}
                  onValueChange={handleWeightChange}
                  min={35}
                  max={150}
                  step={1}
                  className="py-4"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">身高</label>
                  <span className="text-2xl font-bold text-pink-500">{(height / 100).toFixed(2)} m</span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={handleHeightChange}
                  min={130}
                  max={200}
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
          {/* Understanding BMI for Women */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Users className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">了解女性BMI</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>女性BMI</strong>的计算方式与男性相同，但解读方式略有不同。
                女性天生拥有<strong>较高的体脂率</strong>（20-25%，而男性为15-20%），
                这是完全正常的，也是维持正常荷尔蒙功能所必需的。
              </p>
              <p>
                女性<strong>理想腰围</strong>不应超过<strong>80厘米</strong>（中等风险）或<strong>88厘米</strong>（高风险）。
                这个指标通常比单独的BMI更有参考价值，因为它衡量的是腹部脂肪，而腹部脂肪对健康的危害更大。
              </p>
            </div>
          </div>

          {/* BMI Table for Women */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Scale className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">女性BMI对照表</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">分类</th>
                    <th className="text-left py-3 px-4 font-semibold">BMI值</th>
                    <th className="text-left py-3 px-4 font-semibold">示例（身高1.65米）</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      偏瘦
                    </td>
                    <td className="py-3 px-4">&lt; 18.5</td>
                    <td className="py-3 px-4">&lt; 50 kg</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      正常体重
                    </td>
                    <td className="py-3 px-4">18.5 - 24.9</td>
                    <td className="py-3 px-4">50 - 68 kg</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      超重
                    </td>
                    <td className="py-3 px-4">25 - 29.9</td>
                    <td className="py-3 px-4">68 - 81 kg</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      肥胖
                    </td>
                    <td className="py-3 px-4">≥ 30</td>
                    <td className="py-3 px-4">&gt; 81 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Ideal weight by height */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Target className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">女性各身高理想体重</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "1.55 m", min: 44, max: 60, ideal: 53 },
                { height: "1.60 m", min: 47, max: 64, ideal: 56 },
                { height: "1.65 m", min: 50, max: 68, ideal: 60 },
                { height: "1.70 m", min: 53, max: 72, ideal: 64 },
                { height: "1.75 m", min: 57, max: 76, ideal: 67 },
                { height: "1.80 m", min: 60, max: 81, ideal: 71 },
              ].map((item) => (
                <div key={item.height} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <span className="font-semibold text-pink-500">{item.height}</span>
                  <span className="text-muted-foreground">
                    {item.min} - {item.max} kg <span className="text-success">（理想：{item.ideal} kg）</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Women-specific factors */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-purple-500/10">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-display font-bold">荷尔蒙周期与体重</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>体重可能随月经周期波动<strong>2-3公斤</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>经期前<strong>水肿</strong>是正常现象</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>建议在月经周期的<strong>同一时间点</strong>称重</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span><strong>更年期</strong>会改变脂肪分布模式</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-pink-500/10">
                  <Baby className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-display font-bold">怀孕与BMI</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>BMI在<strong>怀孕期间不适用</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>建议增重范围：<strong>11-16公斤</strong>（BMI正常者）</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>请咨询您的<strong>妇产科医生</strong>进行个性化监测</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>产后恢复体重需要<strong>时间</strong>，请保持耐心</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Menopause */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI与更年期</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                在<strong>更年期</strong>，荷尔蒙变化会促进体重增加，尤其是腹部区域。
                新陈代谢减慢，肌肉量自然减少。因此，50岁以后体重略有增加是正常的。
              </p>
              <p>
                要在<strong>50岁后</strong>或<strong>60岁后</strong>保持健康的BMI，
                应注重富含<strong>蛋白质</strong>和<strong>钙质</strong>的饮食，
                并坚持规律运动，包括<strong>力量训练</strong>，以维持肌肉量和骨密度。
              </p>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <Activity className="w-6 h-6 text-pink-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">关于女性BMI的一切</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>女性BMI计算器</strong>是评估<strong>女性身体成分</strong>的重要工具。
                无论您是想了解<strong>女性理想BMI</strong>还是检查<strong>女性健康体重</strong>，
                我们的<strong>女性BMI计算器</strong>都能为您提供即时、个性化的答案。
              </p>
              <p>
                <strong>女性理想BMI</strong>在19到24之间。<strong>女性正常BMI</strong>
                对应的体重因身高而异。对于身高<strong>1.65米</strong>的女性，
                <strong>理想体重</strong>约为60公斤。对于身高<strong>1.70米</strong>的女性，理想体重约为64公斤。
              </p>
              <p>
                <strong>女性BMI应该是多少</strong>？健康范围为18.5-24.9，但运动型女性可能略高。
                <strong>40岁以上女性的BMI</strong>数值范围不变，但身体成分会发生变化。
                <strong>50岁以上女性的BMI</strong>可以接受略高的数值——重要的是保持活跃的生活方式。
              </p>
            </div>
          </div>

          {/* Internal Links */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">探索更多BMI工具</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/zh/bmi" className="flex items-center justify-between p-4 bg-muted/30 rounded-xl hover:bg-pink-500/10 transition-colors group">
                <span className="font-medium">BMI计算器</span>
                <ArrowRight className="w-4 h-4 text-pink-500 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/zh/bmi-nanxing" className="flex items-center justify-between p-4 bg-muted/30 rounded-xl hover:bg-pink-500/10 transition-colors group">
                <span className="font-medium">男性BMI计算器</span>
                <ArrowRight className="w-4 h-4 text-pink-500 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/zh/bmi-yundongyuan" className="flex items-center justify-between p-4 bg-muted/30 rounded-xl hover:bg-pink-500/10 transition-colors group">
                <span className="font-medium">运动员BMI计算器</span>
                <ArrowRight className="w-4 h-4 text-pink-500 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 女性BMI计算器</p>
        </footer>
      </div>
    </div>
  );
};

export default BMINvxing;
