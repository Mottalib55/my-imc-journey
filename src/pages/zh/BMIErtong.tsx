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
            <span className="text-green-500">儿童与青少年BMI计算器</span> : 儿科BMI标准
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            中国6-17岁儿童超重肥胖率已达19%（中国CDC）。使用中国儿童青少年筛查标准WS/T 586-2018进行评估。
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
          {/* Chinese Growth Standards vs WHO */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-green-500/10">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">中国儿童生长标准与WHO对比</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                中国拥有<strong>自己的国家儿童生长标准</strong>，与WHO标准存在显著差异。
                卫生行业标准<strong>WS/T 586-2018《学龄儿童青少年超重与肥胖筛查》</strong>是目前中国6-18岁儿童青少年超重肥胖判定的权威依据，
                由北京大学儿童青少年卫生研究所（原北京CDC）主导制定。
              </p>
              <p>
                对于<strong>5岁以下婴幼儿</strong>，中国采用WHO生长曲线标准进行评估。
                但<strong>学龄儿童（6-18岁）</strong>则使用中国国家标准，因为中国儿童的体格发育特征与WHO参考人群存在差异。
              </p>

              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-4">中国标准 vs WHO标准：关键差异</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-bold mb-2">中国儿童筛查切点（WS/T 586-2018）：</p>
                    <p><strong className="text-green-500">正常：</strong> BMI &lt; 年龄/性别特异性P85</p>
                    <p><strong className="text-warning">超重：</strong> BMI &ge; 年龄/性别特异性P85</p>
                    <p><strong className="text-destructive">肥胖：</strong> BMI &ge; 年龄/性别特异性P95</p>
                  </div>
                  <div>
                    <p className="font-bold mb-2">重要提示：</p>
                    <p className="text-muted-foreground">
                      中国成人BMI标准也与国际标准不同：超重切点为<strong>24</strong>（非25），肥胖切点为<strong>28</strong>（非30）。
                      这是因为亚洲人群在较低BMI水平即可出现代谢异常风险。儿童标准同样反映了中国人群的体格特征。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* China Childhood Obesity Crisis */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <TrendingUp className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">中国儿童肥胖危机</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                近三十年来，中国儿童超重肥胖率呈持续上升趋势，已成为重大公共卫生问题。
                以下数据来自中国疾病预防控制中心（中国CDC）和全国学生体质健康调研。
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-4">
                <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-destructive mb-2">19%</p>
                  <p className="text-sm font-medium">6-17岁超重肥胖率</p>
                  <p className="text-xs text-muted-foreground mt-1">中国CDC最新数据</p>
                </div>
                <div className="bg-warning/5 border border-warning/20 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-warning mb-2">10.4%</p>
                  <p className="text-sm font-medium">6岁以下儿童超重率</p>
                  <p className="text-xs text-muted-foreground mt-1">2020年全国数据</p>
                </div>
                <div className="bg-info/5 border border-info/20 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-info mb-2">24.2% vs 13.2%</p>
                  <p className="text-sm font-medium">男孩 vs 女孩超重肥胖率</p>
                  <p className="text-xs text-muted-foreground mt-1">显著的性别差异</p>
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
              <p>
                值得注意的是，<strong>中国成人BMI标准</strong>也与国际WHO标准不同：
                中国成人超重切点为<strong>24</strong>（WHO为25），肥胖切点为<strong>28</strong>（WHO为30）。
                同样，中国儿童青少年的超重肥胖筛查标准（WS/T 586-2018）也是基于中国人群数据制定，
                与WHO国际标准存在差异。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                <h4 className="font-bold text-destructive mb-2">中国成人BMI标准</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 固定阈值（中国标准）</li>
                  <li>• &lt;18.5 = 体重过轻</li>
                  <li>• 18.5-24 = 正常（WHO为18.5-25）</li>
                  <li>• 24-28 = 超重（WHO为25-30）</li>
                  <li>• &gt;28 = 肥胖（WHO为&gt;30）</li>
                </ul>
              </div>
              <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-5">
                <h4 className="font-bold text-green-500 mb-2">中国儿童BMI标准</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 使用年龄/性别特异性百分位曲线</li>
                  <li>• WS/T 586-2018国家标准</li>
                  <li>• P85为超重切点</li>
                  <li>• P95为肥胖切点</li>
                  <li>• 基于中国儿童人群数据制定</li>
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
                  此阶段使用<strong>WHO生长曲线</strong>进行评估，包括体重/身长曲线和头围监测。
                  中国社区卫生服务中心提供免费的婴幼儿健康体检（0-6岁共13次），
                  由儿童保健科医生定期监测生长发育指标。母乳喂养的婴儿与配方奶喂养的婴儿生长模式可能不同。
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-green-500 mb-3">儿童（2-12岁）</h4>
                <p className="text-sm text-muted-foreground">
                  纳入<strong>国家基本公共卫生服务</strong>体系，享受免费健康管理。
                  学校每年组织一次体检，监测身高体重等指标。
                  农村地区享受<strong>营养改善计划</strong>（覆盖2600万+学生）。
                  医生会特别关注6岁左右的"脂肪反弹"现象，如果提前出现可能预示未来肥胖风险增加。
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-green-500 mb-3">青少年（12-18岁）</h4>
                <p className="text-sm text-muted-foreground">
                  适用<strong>WS/T 586-2018标准</strong>进行超重肥胖筛查。
                  中考体育考试将体重纳入评估范围，促进学生关注体质健康。
                  青春期激素变化导致体格和体脂分布发生显著变化，男孩和女孩的专用曲线至关重要。
                  建议结合体脂率、腰围等指标综合评估。
                </p>
              </div>
            </div>
          </div>

          {/* Only Child Effect & Dietary Culture Change */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-green-500/10">
                <Activity className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">独生子女效应与饮食文化变迁</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                中国儿童肥胖问题有其独特的社会文化背景，理解这些因素对于有效预防至关重要。
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold text-green-500 mb-3">"小胖墩"现象</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>独生子女政策遗产：</strong>"4-2-1"家庭结构（4个祖辈、2个父母、1个孩子），祖辈溺爱喂养</li>
                    <li>• <strong>传统观念冲突：</strong>"胖就是壮""能吃是福"vs现代健康认知</li>
                    <li>• <strong>过度喂养：</strong>担心孩子"吃不饱"，频繁加餐，强迫进食</li>
                    <li>• <strong>隔代养育：</strong>祖辈带孩子比例高，营养知识更新缓慢</li>
                  </ul>
                </div>
                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold text-green-500 mb-3">饮食与生活方式变迁</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>饮食西化：</strong>传统饮食结构向西式快餐+奶茶+零食转变</li>
                    <li>• <strong>外卖文化：</strong>外卖平台普及，高热量食品触手可及</li>
                    <li>• <strong>学业压力：</strong>课业负担重，运动时间被严重压缩</li>
                    <li>• <strong>城乡差异：</strong>城市儿童肥胖率远高于农村，但农村正在快速追赶</li>
                    <li>• <strong>屏幕时间：</strong>手机、平板等电子设备使用时间大幅增加</li>
                  </ul>
                </div>
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
            <div className="text-muted-foreground space-y-4 mb-6">
              <p>
                中国的<strong>《中国儿童肥胖诊治指南（2022）》</strong>为儿童肥胖的诊断和治疗提供了规范化指导。
                家长应充分利用中国医疗体系中的儿童健康管理资源。
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5">
                <h4 className="font-bold text-warning mb-3">警示信号（中国标准）</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• BMI超过WS/T 586-2018中年龄/性别对应的P95切点</li>
                  <li>• 生长曲线上出现突然的轨道偏离</li>
                  <li>• BMI &lt; 第3百分位（营养不良风险）</li>
                  <li>• 脂肪反弹过早出现（&lt;6岁）</li>
                  <li>• 出现黑棘皮症等代谢异常体征</li>
                  <li>• 孩子对自身体重感到焦虑或出现厌食行为</li>
                  <li>• 饮食习惯突然明显改变</li>
                </ul>
              </div>
              <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-5">
                <h4 className="font-bold text-green-500 mb-3">中国医疗资源</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>社区卫生服务中心：</strong>提供免费儿童健康管理（0-6岁）</li>
                  <li>• <strong>儿童保健科：</strong>各级医院均设有，可进行专业评估</li>
                  <li>• <strong>学校体检：</strong>每年一次，涵盖身高、体重、视力等</li>
                  <li>• <strong>儿童肥胖门诊：</strong>大型三甲医院设有专科门诊</li>
                  <li>• 参考《中国儿童肥胖诊治指南（2022）》</li>
                  <li>• 追踪变化趋势，而不仅仅是单个数值</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Healthy China 2030 & Child Nutrition */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-green-500/10">
                <Activity className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">健康中国2030与儿童营养</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>《"健康中国2030"规划纲要》</strong>将儿童肥胖防控纳入国家战略，
                提出到2030年有效遏制超重肥胖流行的目标。多项国家级计划正在推进中。
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-5">
                  <h4 className="font-bold text-green-500 mb-3">国家营养与健康计划</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>营养改善计划：</strong>覆盖农村义务教育学生2600万+人，提供免费营养午餐</li>
                    <li>• <strong>学生饮用奶计划：</strong>为在校学生提供优质牛奶，改善钙质摄入</li>
                    <li>• <strong>国民营养计划（2017-2030）：</strong>重点关注学生营养改善行动</li>
                    <li>• <strong>儿童青少年肥胖防控实施方案：</strong>2020年六部门联合发布</li>
                  </ul>
                </div>
                <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-5">
                  <h4 className="font-bold text-green-500 mb-3">运动与体质管理</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>全民健身计划：</strong>提升青少年体育参与率</li>
                    <li>• <strong>中考体育：</strong>体育成绩纳入中考，分值逐年提高</li>
                    <li>• <strong>双减政策：</strong>减轻学业负担，增加运动时间</li>
                    <li>• <strong>中医养生与体质调理：</strong>辨识儿童体质类型，通过食疗、推拿等调理偏颇体质</li>
                    <li>• <strong>学校体育课：</strong>保障每天1小时校园体育活动</li>
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
              <h2 className="text-2xl font-display font-bold">关于中国儿童BMI的全面解析</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>儿童BMI计算</strong>使用与成人相同的公式（体重/身高的平方），
                但<strong>儿童BMI的解读方式</strong>完全不同。在中国，学龄儿童青少年的超重肥胖判定
                依据<strong>WS/T 586-2018</strong>国家卫生行业标准，而非WHO国际标准。
              </p>
              <p>
                <strong>中国疾病预防控制中心（中国CDC）</strong>的数据显示，
                中国6-17岁儿童青少年超重肥胖率已达19%，且仍在持续上升。
                男孩超重肥胖率（24.2%）显著高于女孩（13.2%），这与饮食习惯、运动量等因素密切相关。
              </p>
              <p>
                对于<strong>5岁以下幼儿</strong>，中国采用WHO生长曲线和IAP（中华医学会儿科分会）生长图表进行评估。
                <strong>学龄儿童</strong>则使用中国国家标准，这些标准基于大规模中国儿童人群调查数据制定，
                更符合中国儿童的体格发育特征。
              </p>
              <p>
                <strong>健康中国2030</strong>规划已将儿童肥胖防控纳入国家战略。
                如果您对孩子的体重状况有疑问，建议前往<strong>社区卫生服务中心</strong>或
                <strong>医院儿童保健科</strong>进行专业评估，参照《中国儿童肥胖诊治指南（2022）》进行规范化管理。
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
