import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { User, Dumbbell, Target, Heart, Scale, Activity, AlertTriangle, CheckCircle2, BookOpen, Globe } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";

const BMINanxing = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState(72);
  const [height, setHeight] = useState(172);

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
            中国男性专用
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-blue-500">中国男性BMI计算器</span> : 中国标准BMI分类与理想体重
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            中国超过3.4亿成年男性超重或肥胖（中国疾控中心2023）。本计算器采用中国标准BMI分类：超重24，肥胖28（卫生行业标准WS/T 428-2013）。
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
          {/* Understanding BMI for Chinese Men */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <User className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">中国男性BMI：为什么需要专用标准？</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                根据<strong>中国疾控中心</strong>最新数据，<strong>50.3%的中国成年男性</strong>已达到超重或肥胖标准。
                中国成年男性平均身高<strong>1.72米</strong>，平均体重约<strong>72公斤</strong>，
                BMI约为24.3——恰好处于中国超重标准的临界点。
              </p>
              <p>
                关键差异在于：<strong>中国男性在相同BMI水平下，比西方男性更容易出现代谢并发症</strong>。
                研究表明，亚洲人群在较低BMI时即出现胰岛素抵抗、2型糖尿病和心血管风险升高。
                因此，中国采用了更严格的BMI切点：<strong>超重从24开始，肥胖从28开始</strong>（WS/T 428-2013），
                而非WHO的25和30。
              </p>
              <p>
                中国男性腰围标准同样更严格：<strong>&ge; 85厘米</strong>即为腹型肥胖（WHO标准为94厘米）。
                中国男性的内脏脂肪在相同BMI下高于西方男性（中国营养学会）。因此，仅看BMI不够，
                <strong>腰围和内脏脂肪</strong>是评估中国男性健康的关键补充指标。
              </p>
            </div>
          </div>

          {/* BMI Table for Men - Dual Standards */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Scale className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">中国男性BMI分类表（中国标准 vs WHO标准）</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">分类</th>
                    <th className="text-left py-3 px-4 font-semibold">中国标准 (WS/T 428-2013)</th>
                    <th className="text-left py-3 px-4 font-semibold">WHO标准</th>
                    <th className="text-left py-3 px-4 font-semibold">示例（1.72米）</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-info" />
                      偏瘦
                    </td>
                    <td className="py-3 px-4">&lt; 18.5</td>
                    <td className="py-3 px-4">&lt; 18.5</td>
                    <td className="py-3 px-4">&lt; 55 kg</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      正常
                    </td>
                    <td className="py-3 px-4">18.5 - 23.9</td>
                    <td className="py-3 px-4">18.5 - 24.9</td>
                    <td className="py-3 px-4">55 - 71 kg（中国）</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      超重
                    </td>
                    <td className="py-3 px-4">24 - 27.9</td>
                    <td className="py-3 px-4">25 - 29.9</td>
                    <td className="py-3 px-4">71 - 83 kg（中国）</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      肥胖
                    </td>
                    <td className="py-3 px-4">&ge; 28</td>
                    <td className="py-3 px-4">&ge; 30</td>
                    <td className="py-3 px-4">&gt; 83 kg（中国）</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-warning/10 border border-warning/30 rounded-xl text-sm text-warning-foreground">
              <p className="font-semibold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-warning" />
                中国标准更严格：超重从24开始，肥胖从28开始（比WHO标准低）
              </p>
            </div>
          </div>

          {/* Age-related BMI factors */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Activity className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">中国男性BMI与年龄的关系</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                中国男性在不同年龄段面临着独特的健康挑战。了解这些变化有助于更准确地评估BMI和制定健康管理策略：
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h4 className="font-semibold text-blue-500 mb-2">20-30岁</h4>
                  <p className="text-sm">新陈代谢处于峰值，理想BMI范围为<strong>18.5-23.9</strong>（中国标准）。然而，"996工作制"等高强度工作模式导致久坐不动、外卖饮食不规律，年轻男性肥胖率正快速上升。建议养成规律运动习惯，避免熬夜和高热量夜宵。</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h4 className="font-semibold text-blue-500 mb-2">30-40岁</h4>
                  <p className="text-sm">基础代谢率开始下降，<strong>"啤酒肚"</strong>在这个年龄段的中国男性中越来越普遍。应酬文化中的饮酒和高脂饮食加速腹部脂肪堆积。BMI应严格控制在<strong>24以下</strong>，腰围控制在85厘米以内。</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h4 className="font-semibold text-blue-500 mb-2">40-50岁</h4>
                  <p className="text-sm">睾酮水平逐渐下降，肌肉流失加速，内脏脂肪更易堆积。建议参加单位组织的<strong>职业健康检查</strong>，关注血糖、血脂和血压指标。可接受的BMI范围为<strong>22-26</strong>，但需结合腰围综合评估。</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h4 className="font-semibold text-blue-500 mb-2">50岁以上</h4>
                  <p className="text-sm">新陈代谢明显减缓，骨密度可能下降。建议每年进行<strong>中老年体检套餐</strong>，包含心脑血管、肿瘤标志物和骨密度检测。BMI可容许稍高至<strong>23-27</strong>，但定期监测血糖和血压至关重要。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ideal weight by height - Chinese male heights with Chinese BMI */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">中国男性理想体重对照表（BMI 18.5-23.9）</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { height: "1.65米", min: 50, max: 65, ideal: 59 },
                { height: "1.68米", min: 52, max: 67, ideal: 61 },
                { height: "1.72米（中国平均）", min: 55, max: 71, ideal: 64 },
                { height: "1.75米", min: 57, max: 73, ideal: 66 },
                { height: "1.78米", min: 59, max: 76, ideal: 68 },
                { height: "1.82米", min: 61, max: 79, ideal: 71 },
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
                <h3 className="text-xl font-display font-bold">中国男性运动建议</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>太极拳和气功</strong>：中国传统男性健身方式，WHO推荐用于慢性病管理</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>广场舞</strong>不仅是女性运动，越来越多中国男性参与，有效改善心肺功能</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>中国营养学会</strong>建议每天30分钟中等强度运动，每周至少5天</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>仅<strong>22%的中国城市男性</strong>达到WHO运动推荐标准（中国疾控中心）</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-warning/10">
                  <Heart className="w-6 h-6 text-warning" />
                </div>
                <h3 className="text-xl font-display font-bold">中国男性健康风险</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>心血管疾病</strong>是中国男性第一死因（中国心血管健康报告）</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>中国男性<strong>糖尿病患病率12.8%</strong>（中国疾控中心），全球最高之一</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span><strong>吸烟率：52.1%</strong>的中国男性吸烟（全球最高），严重影响代谢健康</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                  <span>BMI超过<strong>24</strong>即增加中国男性的代谢综合征风险</span>
                </li>
              </ul>
            </div>
          </div>

          {/* TCM Constitution and Male Weight Management */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <BookOpen className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">中医体质与男性体重管理</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                中医将人体分为<strong>九种体质</strong>，不同体质对体重的影响各不相同。了解自身体质有助于制定更有针对性的体重管理方案。
                中医认为男性<strong>"以肾为本"</strong>，肾气充足则代谢旺盛，体重更易维持在健康范围内。
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h4 className="font-semibold text-blue-500 mb-2">痰湿质</h4>
                  <p className="text-sm">最易发胖的体质类型，多见于腹型肥胖的中年男性。表现为体形肥胖、腹部松软、面部油腻。<strong>调理方向</strong>：健脾祛湿，饮食宜清淡，多食薏苡仁、冬瓜、山药等食物，少食肥甘厚味。</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h4 className="font-semibold text-blue-500 mb-2">气虚质</h4>
                  <p className="text-sm">代谢缓慢，容易疲劳，即使少食也难以减重。多见于久坐办公的男性。<strong>调理方向</strong>：补气调理，适量食用黄芪、党参、大枣，配合太极拳等温和运动提升代谢。</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h4 className="font-semibold text-blue-500 mb-2">湿热质</h4>
                  <p className="text-sm">"啤酒肚"常见体质，多与饮酒、嗜辛辣有关。表现为面部油光、口苦、大便粘滞。<strong>调理方向</strong>：清热利湿，饮食宜清淡，戒酒限辣，多食绿豆、苦瓜、荷叶茶。</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-500/5 rounded-xl">
                <h4 className="font-semibold text-blue-500 mb-2">中医食疗与现代BMI监测相结合</h4>
                <p className="text-sm">
                  传统中医食疗讲究<strong>"药食同源"</strong>，通过日常饮食调节体质。建议男性在使用BMI监测体重变化的同时，
                  根据自身体质选择适合的食疗方案：如痰湿质选择健脾化痰的食材，气虚质注重补气养血。
                  将现代BMI数据与中医体质辨识相结合，可以更全面地管理男性健康。
                </p>
              </div>
            </div>
          </div>

          {/* Healthy China 2030 and Male BMI */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Globe className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">健康中国2030与男性BMI</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>"健康中国2030"</strong>是国家层面的健康战略规划，明确提出降低成年人肥胖率的目标。
                对于中国男性来说，这意味着更系统化的健康管理和更完善的公共卫生服务体系。
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h4 className="font-semibold text-blue-500 mb-2">国家战略目标</h4>
                  <p className="text-sm">到2030年，将成年男性肥胖增长率显著降低。政府推动全民健身计划，鼓励企事业单位建设健身设施，推广工间操和健步走等职场健康活动。</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h4 className="font-semibold text-blue-500 mb-2">职业健康检查</h4>
                  <p className="text-sm">企业依法为员工提供<strong>职业健康检查</strong>，包括BMI监测、腰围测量、血糖血脂检测。越来越多企业将员工健康纳入企业社会责任，提供健身补贴和健康饮食选择。</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h4 className="font-semibold text-blue-500 mb-2">男性健康宣传</h4>
                  <p className="text-sm">10月28日<strong>"中国男性健康日"</strong>每年开展主题宣传活动，关注男性肥胖、慢性病和心理健康。各地疾控中心提供免费或低价健康筛查服务。</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h4 className="font-semibold text-blue-500 mb-2">城乡差异</h4>
                  <p className="text-sm">中国城市男性超重率（约54%）高于农村男性（约46%），但农村地区增速更快。城市男性的久坐生活方式和高热量饮食是主要原因，而农村男性面临健康意识不足和医疗资源有限的挑战。</p>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Activity className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">中国男性BMI完全指南：中国标准与健康管理</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>中国男性BMI计算器</strong>采用<strong>国家卫健委</strong>发布的<strong>卫生行业标准WS/T 428-2013</strong>，
                这是专为中国人群制定的BMI分类标准。与WHO标准相比，中国标准更加严格：
                <strong>超重从BMI 24开始，肥胖从BMI 28开始</strong>。这一调整基于大量流行病学研究，
                证实中国人在较低BMI水平下即面临更高的代谢疾病风险。
              </p>
              <p>
                根据<strong>中国疾控中心</strong>和<strong>中国营养学会</strong>的数据，
                中国成年男性平均身高<strong>1.72米</strong>，按中国标准BMI 18.5-23.9计算，
                理想体重范围为<strong>55-71公斤</strong>，理想体重约为<strong>64公斤</strong>。
                超过<strong>50%的中国男性</strong>BMI已超过24，进入超重范围。
              </p>
              <p>
                <strong>中国男性应该维持什么BMI？</strong>根据中国标准，理想范围为<strong>18.5-23.9</strong>。
                结合腰围（&lt; 85厘米）综合评估更为准确。对于50岁以上男性，BMI可容许稍高至24-26，
                但应定期参加<strong>中老年体检套餐</strong>，监测血糖、血脂和心血管指标。
                参考资料：中国疾控中心、中国营养学会、国家卫健委、WS/T 428-2013。
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
          <p>&copy; 2024 中国男性BMI计算器 — 基于WS/T 428-2013中国标准</p>
        </footer>
      </div>
    </div>
  );
};

export default BMINanxing;
