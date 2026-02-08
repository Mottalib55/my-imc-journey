import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Dumbbell, AlertTriangle, Target, Scale, Activity, TrendingUp } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";

const BMIYundongyuan = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(85);
  const [height, setHeight] = useState(180);

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

  // Calculate FFMI estimation
  const fatFreeMass = weight * 0.85;
  const ffmi = weight && height ? fatFreeMass / Math.pow(height / 100, 2) : null;
  const normalizedFfmi = ffmi ? ffmi + 6.1 * (1.8 - height / 100) : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6">
            <Dumbbell className="w-4 h-4" />
            运动员专用
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-orange-500">运动员BMI计算器</span>：BMI为何不适用于运动员
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            了解BMI为何对肌肉发达的人群不准确，以及有哪些更好的替代指标
          </p>
        </header>

        {/* Warning Banner */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-destructive mb-2">警告：BMI对运动员具有误导性</h3>
              <p className="text-muted-foreground">
                BMI无法区分<strong>肌肉质量</strong>和<strong>脂肪质量</strong>。
                一位肌肉发达的运动员可能BMI显示为"超重"或"肥胖"，但实际上身体非常健康。
              </p>
            </div>
          </div>
        </div>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-orange-500" />
              输入您的身体数据
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">体重</label>
                  <span className="text-2xl font-bold text-orange-500">{weight} kg</span>
                </div>
                <Slider
                  value={[weight]}
                  onValueChange={handleWeightChange}
                  min={50}
                  max={200}
                  step={1}
                  className="py-4"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">身高</label>
                  <span className="text-2xl font-bold text-orange-500">{height} cm</span>
                </div>
                <Slider
                  value={[height]}
                  onValueChange={handleHeightChange}
                  min={150}
                  max={220}
                  step={1}
                  className="py-4"
                />
              </div>
            </div>
          </div>

          <BMIGauge bmi={bmi} />
        </div>

        {/* FFMI Estimation */}
        {bmi && (
          <div className="glass-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-xl font-display font-bold">FFMI估算（去脂体重指数）</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              FFMI是更适合运动员的指标，因为它考虑了去脂体重，能更准确地反映身体组成。
            </p>
            <div className="bg-muted/30 rounded-xl p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">估算FFMI（假设体脂率15%）</p>
              <p className="text-3xl font-bold text-orange-500">{ffmi?.toFixed(1)}</p>
              <p className="text-xs text-muted-foreground mt-2">
                标准化FFMI: {normalizedFfmi?.toFixed(1)} | 自然范围: 18-25 | 可能非自然: &gt;25
              </p>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="space-y-8">
          {/* Why BMI is biased */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Scale className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI为何在运动员身上失效</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>运动员的BMI</strong>往往存在严重偏差，因为BMI公式无法区分肌肉重量和脂肪重量。
                <strong>肌肉的密度比脂肪高</strong>：同样体积的肌肉比脂肪重得多。
              </p>
              <p>
                一位身高180厘米、体重100公斤的健美运动员，其<strong>BMI为30.9</strong>（属于"肥胖"范围），
                即使他的<strong>体脂率仅为10%</strong>，身体状况极为健康。
              </p>
              <p>
                这就是为什么仅凭BMI来评估运动员的健康状况是不可靠的。我们需要更加全面的身体组成分析方法。
              </p>
            </div>
          </div>

          {/* Practical Examples */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Dumbbell className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">实际案例分析</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">橄榄球运动员</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 身高：1.80 米</li>
                  <li>• 体重：100 公斤</li>
                  <li>• BMI：30.9（"肥胖"）</li>
                  <li>• 体脂率：约15%</li>
                  <li>• 实际情况：体能出色</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">马拉松运动员</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 身高：1.75 米</li>
                  <li>• 体重：62 公斤</li>
                  <li>• BMI：20.2（"正常"）</li>
                  <li>• 体脂率：约8%</li>
                  <li>• BMI在此情况下较为准确</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">健美运动</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 典型BMI：28-35</li>
                  <li>• 体脂率：8-15%</li>
                  <li>• 健康状况极佳</li>
                  <li>• BMI显示"肥胖" = 误判</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-3">CrossFit / 力量训练</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 典型BMI：26-30</li>
                  <li>• 体脂率：12-18%</li>
                  <li>• 运动表现优秀</li>
                  <li>• BMI不具参考价值</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Alternatives Table */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Target className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">运动员BMI替代指标</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">方法</th>
                    <th className="text-left py-3 px-4 font-bold">优势</th>
                    <th className="text-left py-3 px-4 font-bold">参考值</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">FFMI</td>
                    <td className="py-3 px-4">仅考虑去脂体重</td>
                    <td className="py-3 px-4">18-25 为自然范围</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">体脂率</td>
                    <td className="py-3 px-4">直接测量脂肪比例</td>
                    <td className="py-3 px-4">男性：10-20% | 女性：18-28%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">腰围</td>
                    <td className="py-3 px-4">简单的腹部脂肪指标</td>
                    <td className="py-3 px-4">男性：&lt;94 cm | 女性：&lt;80 cm</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">DEXA扫描</td>
                    <td className="py-3 px-4">精确的身体成分分析</td>
                    <td className="py-3 px-4">运动员的金标准</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FFMI Table */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">理解FFMI（去脂体重指数）</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">FFMI范围</th>
                    <th className="text-left py-3 px-4 font-bold">分类</th>
                    <th className="text-left py-3 px-4 font-bold">说明</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">16-17</td>
                    <td className="py-3 px-4">低于平均</td>
                    <td className="py-3 px-4">肌肉发育较少</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">18-19</td>
                    <td className="py-3 px-4">平均水平</td>
                    <td className="py-3 px-4">普通未经训练的男性</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">20-21</td>
                    <td className="py-3 px-4">高于平均</td>
                    <td className="py-3 px-4">可见的肌肉线条</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 font-mono font-bold text-success">22-23</td>
                    <td className="py-3 px-4 text-success">优秀</td>
                    <td className="py-3 px-4">专注力量训练者，体型出色</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">24-25</td>
                    <td className="py-3 px-4">卓越</td>
                    <td className="py-3 px-4">大多数人的自然遗传极限</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono">&gt;25</td>
                    <td className="py-3 px-4 text-warning">可疑</td>
                    <td className="py-3 px-4">自然状态下极为罕见，可能使用了药物</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              注：FFMI超过25对于少数基因异常优秀的人来说是可以自然达到的，但非常罕见。
            </p>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI与运动员：您需要了解的一切</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>运动员的BMI计算</strong>往往会给出误导性的结果。无论您从事的是
                <strong>健美</strong>、<strong>CrossFit</strong>、<strong>橄榄球</strong>还是其他
                力量型运动，您的<strong>运动员BMI</strong>很可能会偏高。
              </p>
              <p>
                <strong>健美运动员的BMI</strong>尤其失真：一位自然健美运动员的BMI可以轻松达到27-28，
                同时保持精瘦体型。<strong>举重运动员的BMI</strong>往往超过30，被归类为"肥胖"，
                但实际上体脂率极低。
              </p>
              <p>
                对于运动员来说，<strong>体脂率</strong>、<strong>FFMI</strong>（去脂体重指数）
                或简单的<strong>腰围测量</strong>是更好的选择。这些指标能更准确地评估您的身体组成和实际健康状况。
              </p>
              <p>
                <strong>BMI对运动员准确吗</strong>？不准确。<strong>BMI为何对肌肉发达的人无效</strong>？
                因为它只考虑总体重，而不考虑身体组成。<strong>肌肉型BMI</strong>总是会高于实际健康状况所反映的水平。
              </p>
            </div>
          </div>

          {/* Internal Links */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">相关计算工具</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/zh/bmi" className="block bg-muted/30 rounded-xl p-4 hover:bg-muted/50 transition-colors">
                <h4 className="font-bold mb-1">BMI计算器</h4>
                <p className="text-sm text-muted-foreground">标准BMI计算与解读</p>
              </Link>
              <Link to="/zh/bmi-nanxing" className="block bg-muted/30 rounded-xl p-4 hover:bg-muted/50 transition-colors">
                <h4 className="font-bold mb-1">男性BMI计算器</h4>
                <p className="text-sm text-muted-foreground">专为男性优化的BMI评估</p>
              </Link>
              <Link to="/zh/bmi-nvxing" className="block bg-muted/30 rounded-xl p-4 hover:bg-muted/50 transition-colors">
                <h4 className="font-bold mb-1">女性BMI计算器</h4>
                <p className="text-sm text-muted-foreground">专为女性优化的BMI评估</p>
              </Link>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 运动员BMI计算器</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIYundongyuan;
