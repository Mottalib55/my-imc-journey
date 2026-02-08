import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Calculator, Activity, Target, BookOpen, Scale, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";

const BMIZh = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weightKg, setWeightKg] = useState(70);
  const [heightCm, setHeightCm] = useState(170);

  const calculateBMI = useCallback((wKg: number, hCm: number) => {
    const heightInM = hCm / 100;
    const calculatedBmi = wKg / (heightInM * heightInM);
    setBmi(calculatedBmi);
  }, []);

  // Calculate BMI on initial load
  useEffect(() => {
    calculateBMI(weightKg, heightCm);
  }, []);

  const handleWeightChange = (value: number[]) => {
    setWeightKg(value[0]);
    calculateBMI(value[0], heightCm);
  };

  const handleHeightChange = (value: number[]) => {
    setHeightCm(value[0]);
    calculateBMI(weightKg, value[0]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            实时模拟器
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">计算您的BMI (Body Mass Index)</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            通过个性化建议计算您的身体质量指数
          </p>
        </header>

        {/* 计算器 */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary" />
              输入您的身体数据
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">体重</label>
                  <span className="text-2xl font-bold text-primary">{weightKg} kg</span>
                </div>
                <Slider
                  value={[weightKg]}
                  onValueChange={handleWeightChange}
                  min={30}
                  max={200}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>30 kg</span>
                  <span>200 kg</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">身高</label>
                  <span className="text-2xl font-bold text-primary">{(heightCm / 100).toFixed(2)} m</span>
                </div>
                <Slider
                  value={[heightCm]}
                  onValueChange={handleHeightChange}
                  min={100}
                  max={220}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>100 cm</span>
                  <span>220 cm</span>
                </div>
              </div>
            </div>
          </div>

          <BMIGauge bmi={bmi} />
        </div>

        {/* 内容区域 */}
        <div className="space-y-8">
          {/* 什么是BMI */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">了解BMI</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>BMI（身体质量指数）</strong>是一种简单的测量方法，通过您的身高和体重来评估
                您是否处于健康体重范围内。<strong>BMI公式</strong>将您的体重（千克）除以
                身高（米）的平方。
              </p>
              <p>
                <strong>BMI计算方法</strong>由比利时数学家阿道夫·凯特勒于19世纪30年代发明。
                如今，它被全球医生和卫生组织广泛用作体重类别的快速筛查工具。
              </p>
            </div>
          </div>

          {/* BMI分类 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI分类标准（WHO）</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">分类</th>
                    <th className="text-left py-3 px-4 font-bold">BMI范围</th>
                    <th className="text-left py-3 px-4 font-bold">健康风险</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      体重过轻
                    </td>
                    <td className="py-3 px-4">&lt; 18.5</td>
                    <td className="py-3 px-4 text-info">营养不良风险</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      正常体重
                    </td>
                    <td className="py-3 px-4">18.5 - 24.9</td>
                    <td className="py-3 px-4 text-success">低风险</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      超重
                    </td>
                    <td className="py-3 px-4">25 - 29.9</td>
                    <td className="py-3 px-4 text-warning">较高风险</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      肥胖（一级）
                    </td>
                    <td className="py-3 px-4">30 - 34.9</td>
                    <td className="py-3 px-4 text-destructive">高风险</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      肥胖（二级）
                    </td>
                    <td className="py-3 px-4">35 - 39.9</td>
                    <td className="py-3 px-4 text-destructive">非常高风险</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      肥胖（三级）
                    </td>
                    <td className="py-3 px-4">≥ 40</td>
                    <td className="py-3 px-4 text-destructive">极高风险</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 如何计算BMI */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">如何计算BMI</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p><strong>BMI公式</strong>非常简单：</p>
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-primary">BMI = 体重 (kg) ÷ 身高² (m)</p>
              </div>
              <p>
                例如，如果您的体重为70公斤，身高为1.75米：<br />
                BMI = 70 ÷ (1.75 × 1.75) = 70 ÷ 3.0625 = <strong>22.9</strong>
              </p>
            </div>
          </div>

          {/* 健康建议 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">保持健康体重的建议</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                保持<strong>健康的BMI</strong>对于整体健康非常重要。以下是一些帮助您达到和维持理想体重的建议：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>均衡饮食：</strong>多吃蔬菜、水果、全谷物和优质蛋白质，减少加工食品和含糖饮料的摄入。</li>
                <li><strong>规律运动：</strong>每周至少进行150分钟的中等强度有氧运动，如快走、游泳或骑自行车。</li>
                <li><strong>充足睡眠：</strong>每晚保证7-9小时的睡眠，睡眠不足会影响新陈代谢和食欲控制。</li>
                <li><strong>压力管理：</strong>长期压力可能导致暴饮暴食，尝试通过冥想、瑜伽或深呼吸来减压。</li>
                <li><strong>定期体检：</strong>定期监测您的BMI和其他健康指标，及时调整生活方式。</li>
              </ul>
            </div>
          </div>

          {/* 导航链接 */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/zh/bmi-nanxing" className="glass-card p-6 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Activity className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-bold">男性BMI</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                针对男性身体组成的特殊考量
              </p>
            </Link>

            <Link to="/zh/bmi-nvxing" className="glass-card p-6 hover:border-pink-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-pink-500/10">
                  <Activity className="w-5 h-5 text-pink-500" />
                </div>
                <h3 className="font-bold">女性BMI</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                考虑激素因素的BMI解读
              </p>
            </Link>

            <Link to="/zh/bmi-yundongyuan" className="glass-card p-6 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-bold">运动员BMI</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                为什么BMI对肌肉发达的人不太准确
              </p>
            </Link>

            <Link to="/zh/bmi-ertong" className="glass-card p-6 hover:border-green-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <Activity className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="font-bold">儿童BMI</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                儿童和青少年的BMI计算与评估
              </p>
            </Link>

            <Link to="/zh/bmi-biao" className="glass-card p-6 hover:border-violet-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-violet-500/10">
                  <Target className="w-5 h-5 text-violet-500" />
                </div>
                <h3 className="font-bold">BMI对照表</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                按身高和体重分类的完整BMI对照表
              </p>
            </Link>

            <Link to="/zh/bmi-jiedu" className="glass-card p-6 hover:border-cyan-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <BookOpen className="w-5 h-5 text-cyan-500" />
                </div>
                <h3 className="font-bold">BMI结果解读</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                如何正确理解您的BMI计算结果
              </p>
            </Link>

            <Link to="/zh/bmi-juxianxing" className="glass-card p-6 hover:border-amber-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-amber-500/10">
                  <Scale className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="font-bold">BMI的局限性</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                BMI无法衡量的因素及替代评估方法
              </p>
            </Link>

            <Link to="/zh/bmi-changjianwenti" className="glass-card p-6 hover:border-rose-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-rose-500/10">
                  <BookOpen className="w-5 h-5 text-rose-500" />
                </div>
                <h3 className="font-bold">BMI常见问题</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                关于身体质量指数的常见问题解答
              </p>
            </Link>

            <Link to="/zh/jiankang-tizhong" className="glass-card p-6 hover:border-teal-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-teal-500/10">
                  <TrendingUp className="w-5 h-5 text-teal-500" />
                </div>
                <h3 className="font-bold">健康体重</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                了解如何达到和维持健康的体重范围
              </p>
            </Link>
          </div>

          {/* SEO内容 */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">深入了解您的身体质量指数</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>BMI计算器</strong>是了解您体重状况的重要工具。
                无论您是在寻找<strong>免费的BMI计算器</strong>、想知道您的
                <strong>理想BMI</strong>是多少，还是只想快速<strong>计算BMI</strong>，
                我们的工具都能为您提供即时结果。
              </p>
              <p>
                <strong>什么是健康的BMI</strong>？<strong>健康的BMI</strong>范围在18.5到24.9之间。
                <strong>BMI对照表</strong>显示，<strong>正常的BMI</strong>表明您的体重
                相对于身高处于健康范围。使用我们的<strong>BMI检测工具</strong>来了解您的当前状况。
              </p>
              <p>
                这款<strong>身体质量指数计算器</strong>使用世界卫生组织（WHO）认可的标准<strong>BMI方程式</strong>。
                虽然<strong>BMI量表</strong>非常实用，但请记住它并不考虑肌肉量、年龄或身体组成等因素。
                建议您将BMI作为健康评估的参考指标之一，而非唯一依据。
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI计算器</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIZh;
