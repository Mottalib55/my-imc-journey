import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Baby, AlertTriangle, Scale, Activity, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";

const bmiPercentilesData: Record<string, Record<number, { p3: number; p15: number; p50: number; p85: number; p97: number }>> = {
  boy: {
    2: { p3: 14.2, p15: 15.0, p50: 16.0, p85: 17.3, p97: 18.4 },
    3: { p3: 13.8, p15: 14.5, p50: 15.5, p85: 16.7, p97: 17.6 },
    4: { p3: 13.5, p15: 14.2, p50: 15.2, p85: 16.3, p97: 17.3 },
    5: { p3: 13.3, p15: 14.0, p50: 15.0, p85: 16.2, p97: 17.3 },
    6: { p3: 13.3, p15: 13.9, p50: 15.0, p85: 16.4, p97: 17.6 },
    7: { p3: 13.3, p15: 14.0, p50: 15.1, p85: 16.7, p97: 18.1 },
    8: { p3: 13.4, p15: 14.1, p50: 15.4, p85: 17.1, p97: 18.8 },
    9: { p3: 13.6, p15: 14.3, p50: 15.7, p85: 17.6, p97: 19.5 },
    10: { p3: 13.8, p15: 14.6, p50: 16.1, p85: 18.1, p97: 20.3 },
    11: { p3: 14.1, p15: 14.9, p50: 16.5, p85: 18.7, p97: 21.0 },
    12: { p3: 14.5, p15: 15.3, p50: 17.0, p85: 19.3, p97: 21.7 },
    13: { p3: 14.9, p15: 15.7, p50: 17.5, p85: 19.8, p97: 22.3 },
    14: { p3: 15.4, p15: 16.2, p50: 18.1, p85: 20.4, p97: 22.8 },
    15: { p3: 15.9, p15: 16.7, p50: 18.6, p85: 20.9, p97: 23.3 },
    16: { p3: 16.4, p15: 17.2, p50: 19.2, p85: 21.4, p97: 23.7 },
    17: { p3: 16.8, p15: 17.6, p50: 19.7, p85: 21.9, p97: 24.1 },
  },
  girl: {
    2: { p3: 13.9, p15: 14.8, p50: 15.7, p85: 17.0, p97: 18.0 },
    3: { p3: 13.5, p15: 14.3, p50: 15.3, p85: 16.5, p97: 17.4 },
    4: { p3: 13.2, p15: 14.0, p50: 15.0, p85: 16.2, p97: 17.2 },
    5: { p3: 13.1, p15: 13.8, p50: 14.9, p85: 16.2, p97: 17.3 },
    6: { p3: 13.0, p15: 13.8, p50: 14.9, p85: 16.3, p97: 17.5 },
    7: { p3: 13.1, p15: 13.9, p50: 15.1, p85: 16.6, p97: 18.0 },
    8: { p3: 13.3, p15: 14.1, p50: 15.4, p85: 17.1, p97: 18.7 },
    9: { p3: 13.5, p15: 14.4, p50: 15.8, p85: 17.6, p97: 19.4 },
    10: { p3: 13.8, p15: 14.7, p50: 16.2, p85: 18.2, p97: 20.1 },
    11: { p3: 14.2, p15: 15.1, p50: 16.7, p85: 18.8, p97: 20.9 },
    12: { p3: 14.6, p15: 15.5, p50: 17.3, p85: 19.4, p97: 21.6 },
    13: { p3: 15.1, p15: 16.0, p50: 17.8, p85: 20.0, p97: 22.2 },
    14: { p3: 15.5, p15: 16.4, p50: 18.3, p85: 20.5, p97: 22.7 },
    15: { p3: 15.9, p15: 16.8, p50: 18.7, p85: 20.9, p97: 23.1 },
    16: { p3: 16.2, p15: 17.1, p50: 19.1, p85: 21.3, p97: 23.4 },
    17: { p3: 16.4, p15: 17.3, p50: 19.4, p85: 21.6, p97: 23.7 },
  },
};

const getPercentileCategory = (bmi: number, age: number, gender: string) => {
  const genderKey = gender === "boy" ? "boy" : "girl";
  const data = bmiPercentilesData[genderKey][age];
  if (!data) return { category: "unknown", percentile: "N/A", color: "text-muted-foreground" };

  if (bmi < data.p3) return { category: "体重过轻", percentile: "<3", color: "text-info" };
  if (bmi < data.p15) return { category: "偏瘦", percentile: "3-15", color: "text-info" };
  if (bmi < data.p85) return { category: "正常体重", percentile: "15-85", color: "text-green-500" };
  if (bmi < data.p97) return { category: "超重", percentile: "85-97", color: "text-warning" };
  return { category: "肥胖", percentile: ">97", color: "text-destructive" };
};

const BMIErtong = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weightKg, setWeightKg] = useState(30);
  const [heightCm, setHeightCm] = useState(130);
  const [age, setAge] = useState(10);
  const [gender, setGender] = useState<"boy" | "girl">("boy");

  const calculateBMI = useCallback((wKg: number, hCm: number) => {
    const heightInM = hCm / 100;
    const calculatedBmi = wKg / (heightInM * heightInM);
    setBmi(calculatedBmi);
  }, []);

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

  const handleAgeChange = (value: number[]) => {
    setAge(value[0]);
  };

  const percentileInfo = bmi ? getPercentileCategory(bmi, age, gender) : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-green-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-500 text-sm font-medium mb-6">
            <Baby className="w-4 h-4" />
            儿童与青少年
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-green-500">儿童与青少年BMI计算器</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            了解儿童和青少年的BMI：生长曲线、百分位数与专业解读
          </p>
        </header>

        {/* Medical Warning */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-destructive mb-2">建议咨询医生</h3>
              <p className="text-muted-foreground">
                儿童BMI需要<strong>专业医学解读</strong>。
                请咨询您的<strong>儿科医生</strong>或<strong>家庭医生</strong>以获取适当的指导。
                以下信息仅供参考，不构成医疗建议。
              </p>
            </div>
          </div>
        </div>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Scale className="w-5 h-5 text-green-500" />
              输入孩子的数据
            </h2>

            <div className="space-y-8">
              {/* Gender Selector */}
              <div>
                <label className="text-sm font-medium mb-3 block">性别</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setGender("boy")}
                    className={`py-3 px-4 rounded-xl font-medium transition-all ${
                      gender === "boy"
                        ? "bg-blue-500/20 text-blue-500 border-2 border-blue-500/50"
                        : "bg-muted/30 text-muted-foreground border-2 border-transparent hover:border-border"
                    }`}
                  >
                    男孩
                  </button>
                  <button
                    onClick={() => setGender("girl")}
                    className={`py-3 px-4 rounded-xl font-medium transition-all ${
                      gender === "girl"
                        ? "bg-pink-500/20 text-pink-500 border-2 border-pink-500/50"
                        : "bg-muted/30 text-muted-foreground border-2 border-transparent hover:border-border"
                    }`}
                  >
                    女孩
                  </button>
                </div>
              </div>

              {/* Age Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">年龄</label>
                  <span className="text-2xl font-bold text-green-500">{age} 岁</span>
                </div>
                <Slider
                  value={[age]}
                  onValueChange={handleAgeChange}
                  min={2}
                  max={17}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>2 岁</span>
                  <span>17 岁</span>
                </div>
              </div>

              {/* Weight Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">体重</label>
                  <span className="text-2xl font-bold text-green-500">{weightKg} kg</span>
                </div>
                <Slider
                  value={[weightKg]}
                  onValueChange={handleWeightChange}
                  min={10}
                  max={100}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>10 kg</span>
                  <span>100 kg</span>
                </div>
              </div>

              {/* Height Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">身高</label>
                  <span className="text-2xl font-bold text-green-500">{heightCm} cm</span>
                </div>
                <Slider
                  value={[heightCm]}
                  onValueChange={handleHeightChange}
                  min={80}
                  max={190}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>80 cm</span>
                  <span>190 cm</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <BMIGauge bmi={bmi} />

            {/* Percentile Result */}
            {percentileInfo && bmi && (
              <div className="glass-card p-6">
                <h3 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-500" />
                  百分位数分析
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">性别</span>
                    <span className="font-medium">{gender === "boy" ? "男孩" : "女孩"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">年龄</span>
                    <span className="font-medium">{age} 岁</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">BMI</span>
                    <span className="font-medium">{bmi.toFixed(1)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">百分位范围</span>
                    <span className={`font-bold ${percentileInfo.color}`}>第 {percentileInfo.percentile} 百分位</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">分类</span>
                      <span className={`font-bold text-lg ${percentileInfo.color}`}>{percentileInfo.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* WHO Growth Curves */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-green-500/10">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">WHO生长曲线说明</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                世界卫生组织（WHO）制定了儿童和青少年的<strong>生长参考标准</strong>。
                与成人不同，儿童的BMI不能使用固定阈值（18.5 / 25 / 30）来判断。
                由于儿童的身体处于不断发育阶段，BMI会随年龄和性别自然变化。
              </p>
              <p>
                因此，医生使用<strong>百分位曲线</strong>来评估儿童的体重状况，
                将孩子与同龄同性别的其他儿童进行比较。
              </p>

              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-4">如何理解百分位数？</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong className="text-info">&lt;第3百分位：</strong> 体重过轻</p>
                    <p><strong className="text-green-500">第3-85百分位：</strong> 正常范围</p>
                    <p><strong className="text-warning">第85-97百分位：</strong> 超重</p>
                    <p><strong className="text-destructive">&gt;第97百分位：</strong> 肥胖</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      如果一个孩子处于第50百分位，意味着他的BMI高于同龄同性别儿童中50%的人，同时低于另外50%的人。这是一个相对位置指标。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Adult vs Children BMI */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-green-500/10">
                <AlertTriangle className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">成人BMI与儿童BMI的区别</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                与成年人不同，<strong>儿童BMI</strong>不能使用固定的标准阈值来解读。
                在儿童和青少年时期，身体在不断发育变化，BMI会随着年龄和性别自然波动。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                <h4 className="font-bold text-destructive mb-2">成人BMI</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 固定的通用阈值</li>
                  <li>• &lt;18.5 = 体重过轻</li>
                  <li>• 18.5-25 = 正常</li>
                  <li>• 25-30 = 超重</li>
                  <li>• &gt;30 = 肥胖</li>
                </ul>
              </div>
              <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-5">
                <h4 className="font-bold text-green-500 mb-2">儿童BMI</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 使用百分位曲线</li>
                  <li>• 随年龄变化</li>
                  <li>• 男孩/女孩有所不同</li>
                  <li>• 相对解读</li>
                  <li>• 需要追踪趋势变化</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Age-specific interpretation */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-green-500/10">
                <Baby className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">不同年龄段的BMI解读</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-green-500 mb-3">婴幼儿（0-2岁）</h4>
                <p className="text-sm text-muted-foreground">
                  通常不计算BMI。此阶段使用体重/身长曲线和头围来评估生长发育情况。母乳喂养的婴儿与配方奶喂养的婴儿生长模式可能不同。
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-green-500 mb-3">儿童（2-12岁）</h4>
                <p className="text-sm text-muted-foreground">
                  BMI需结合体质指数生长曲线来解读。医生会特别关注6岁左右的"脂肪反弹"现象。如果脂肪反弹提前出现，可能预示未来肥胖风险增加。
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-green-500 mb-3">青少年（12-18岁）</h4>
                <p className="text-sm text-muted-foreground">
                  青春期 = 显著的体格变化。男孩和女孩的专用曲线至关重要。激素变化会导致体脂分布发生明显变化。
                </p>
              </div>
            </div>
          </div>

          {/* When to see a doctor */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">何时应该就医？</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5">
                <h4 className="font-bold text-warning mb-3">警示信号</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• 生长曲线上出现突然的轨道变化</li>
                  <li>• BMI &gt; 第97百分位</li>
                  <li>• BMI &lt; 第3百分位</li>
                  <li>• 脂肪反弹过早出现（&lt;6岁）</li>
                  <li>• 孩子对自身体重感到焦虑或担忧</li>
                  <li>• 饮食习惯突然明显改变</li>
                </ul>
              </div>
              <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-5">
                <h4 className="font-bold text-green-500 mb-3">定期检查</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• 每次就诊时测量体重和身高</li>
                  <li>• 在生长手册上记录数据</li>
                  <li>• 追踪变化趋势，而不仅仅是单个数值</li>
                  <li>• 如有疑虑请及时与医生沟通</li>
                  <li>• 保持规律的儿童体检计划</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Nutrition tips */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-green-500/10">
                <Activity className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">儿童营养建议</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                良好的营养对于儿童的健康成长至关重要。以下是一些帮助孩子保持健康体重的基本建议：
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-5">
                  <h4 className="font-bold text-green-500 mb-3">健康饮食习惯</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• 每天摄入充足的水果和蔬菜</li>
                    <li>• 选择全谷物而非精制谷物</li>
                    <li>• 确保足够的蛋白质摄入（鱼、蛋、豆类）</li>
                    <li>• 限制含糖饮料和零食</li>
                    <li>• 保证每天饮用充足的水</li>
                  </ul>
                </div>
                <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-5">
                  <h4 className="font-bold text-green-500 mb-3">运动与生活方式</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• 每天至少60分钟的体育活动</li>
                    <li>• 限制屏幕时间（电视、手机、平板）</li>
                    <li>• 鼓励户外活动和团队运动</li>
                    <li>• 保证充足的睡眠时间</li>
                    <li>• 建立规律的作息时间</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-green-500/10">
                <Scale className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">关于儿童BMI的全面解析</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>儿童BMI计算</strong>使用与成人相同的公式（体重/身高的平方），
                但<strong>儿童BMI的解读方式</strong>完全不同。我们不能仅因为一个孩子的BMI超过25就判断其超重。
              </p>
              <p>
                <strong>青少年BMI</strong>在青春期尤其难以解读。激素变化会导致显著的体格变化，
                <strong>男孩BMI</strong>和<strong>女孩BMI</strong>的变化模式各有不同。因此必须使用性别特定的生长曲线。
              </p>
              <p>
                对于<strong>婴儿BMI</strong>或<strong>幼儿BMI</strong>，儿科医生通常使用体重/身高生长曲线而非BMI。
                <strong>3岁儿童BMI</strong>、<strong>5岁儿童BMI</strong>或<strong>10岁儿童BMI</strong>都需要
                参照百分位曲线来解读。
              </p>
              <p>
                如果您对孩子的<strong>理想体重</strong>或<strong>理想BMI</strong>有任何疑问，
                请咨询您的儿科医生，他们可以综合分析整条<strong>生长曲线</strong>的趋势。
              </p>
            </div>
          </div>

          {/* Internal Links / CTA */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/zh/bmi" className="glass-card p-6 hover:border-green-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <Scale className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="font-bold">BMI计算器</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                计算您的成人BMI指数
              </p>
            </Link>

            <Link to="/zh/bmi-nanxing" className="glass-card p-6 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Activity className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-bold">男性BMI</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                了解男性BMI的特殊考量
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
                了解女性BMI的特殊因素
              </p>
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 儿童BMI计算器 - 仅供参考</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIErtong;
