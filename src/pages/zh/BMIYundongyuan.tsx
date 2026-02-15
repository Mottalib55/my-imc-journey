import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Dumbbell, AlertTriangle, Target, Scale, Activity, TrendingUp, Globe } from "lucide-react";
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
            <span className="text-orange-500">运动员BMI</span>：中国标准24/28让问题更突出
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            为什么BMI将大部分中国举重运动员归为"肥胖"？中国标准24/28让运动员的BMI问题更加突出。了解中国运动员的身体成分评估。
          </p>
        </header>

        {/* Warning Banner */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-destructive mb-2">警告：中国BMI标准对运动员更加严苛</h3>
              <p className="text-muted-foreground">
                中国卫生行业标准<strong>WS/T 428-2013</strong>将超重界定为BMI&ge;24，肥胖界定为BMI&ge;28，
                远低于WHO的25/30标准。这意味着中国运动员<strong>更容易</strong>被归类为"超重"或"肥胖"。
                BMI无法区分<strong>肌肉质量</strong>和<strong>脂肪质量</strong>，对力量型运动员尤其不公平。
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
              FFMI是更适合运动员的指标，因为它考虑了去脂体重，能更准确地反映身体组成。国家体育总局科研所在评估精英运动员时优先使用此类指标。
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
          {/* Famous Chinese Athletes */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Dumbbell className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">中国知名运动员的BMI真相</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              按照中国BMI标准（WS/T 428-2013：超重&ge;24，肥胖&ge;28），许多中国顶级运动员都会被归类为"超重"甚至"肥胖"。
              这充分说明BMI对运动员群体的评估是多么不合理。
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-muted/30 rounded-xl p-6 border-l-4 border-red-500">
                <h4 className="font-bold mb-1">姚明</h4>
                <p className="text-xs text-muted-foreground mb-3">NBA传奇 / 篮球</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>身高：2.29 米</li>
                  <li>体重：141 公斤</li>
                  <li>BMI：<strong className="text-orange-500">~26.9</strong></li>
                  <li className="text-red-400 font-semibold">中国标准：超重！</li>
                  <li>WHO标准：正常/超重临界</li>
                  <li>实际：世界最佳中锋之一</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6 border-l-4 border-red-500">
                <h4 className="font-bold mb-1">吕小军</h4>
                <p className="text-xs text-muted-foreground mb-3">奥运冠军 / 举重</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>身高：1.72 米</li>
                  <li>体重：81 公斤</li>
                  <li>BMI：<strong className="text-orange-500">~27.4</strong></li>
                  <li className="text-red-400 font-semibold">中国标准：超重！</li>
                  <li>WHO标准：超重</li>
                  <li>实际：体脂率极低的举重之神</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6 border-l-4 border-green-500">
                <h4 className="font-bold mb-1">苏炳添</h4>
                <p className="text-xs text-muted-foreground mb-3">亚洲飞人 / 短跑</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>身高：1.72 米</li>
                  <li>体重：65 公斤</li>
                  <li>BMI：<strong className="text-green-500">~22.0</strong></li>
                  <li className="text-green-400">中国标准：正常</li>
                  <li>WHO标准：正常</li>
                  <li>实际：9秒83百米纪录</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              可以看到：力量型运动员（姚明、吕小军）在中国标准下更容易被误判为"超重"，而耐力型运动员（苏炳添）的BMI表现相对正常。
              但三位都是世界顶级运动员，身体状况极为出色。
            </p>
          </div>

          {/* Chinese Sports BMI Ranges */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">中国优势运动项目的BMI范围</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              中国在多个奥运项目上称霸全球，但这些运动员的BMI差异巨大。以下是中国代表性运动项目运动员的典型BMI范围：
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1">乒乓球</h4>
                <p className="text-xs text-muted-foreground mb-3">国球 / 中国绝对统治</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>典型BMI：<strong>21-24</strong></li>
                  <li>特点：灵活性优先，体脂率适中</li>
                  <li>中国标准下：大多处于正常范围</li>
                  <li>BMI评估相对合理</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1">举重</h4>
                <p className="text-xs text-muted-foreground mb-3">奥运金牌大户</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>典型BMI：<strong>25-35</strong></li>
                  <li>特点：极高肌肉密度，低体脂</li>
                  <li>中国标准下：几乎全部"超重"或"肥胖"</li>
                  <li>BMI完全失效 = 严重误判</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1">武术 / 功夫</h4>
                <p className="text-xs text-muted-foreground mb-3">中国传统武术</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>典型BMI：<strong>22-26</strong></li>
                  <li>特点：力量与柔韧性兼备</li>
                  <li>中国标准下：部分运动员处于"超重"边缘</li>
                  <li>功能性体能远超BMI所能反映</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1">篮球（CBA）</h4>
                <p className="text-xs text-muted-foreground mb-3">中国职业篮球联赛</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>典型BMI：<strong>24-29</strong></li>
                  <li>特点：高大体型，肌肉发达</li>
                  <li>中国标准下：绝大多数"超重"</li>
                  <li>身高和肌肉使BMI严重失真</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Chinese BMI Standards & Athletes - CRITICAL NEW SECTION */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-red-500/10">
                <Globe className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">中国BMI标准与运动员</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                中国根据本国人群的体质特征，制定了<strong>不同于WHO的BMI分类标准</strong>。
                根据卫生行业标准<strong>WS/T 428-2013《成人体重判定》</strong>，中国将超重界定为BMI&ge;24，
                肥胖界定为BMI&ge;28，而WHO的标准分别是25和30。
              </p>
              <p>
                这一差异对运动员的影响<strong>尤为显著</strong>：一位BMI为25的运动员，按WHO标准属于"正常体重"的上限，
                但按中国标准已经被归类为<strong>"超重"</strong>。这意味着中国运动员在标准评估中
                <strong>更容易被错误地判定为超重或肥胖</strong>。
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto mt-6 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">BMI值</th>
                    <th className="text-left py-3 px-4 font-bold">WHO标准</th>
                    <th className="text-left py-3 px-4 font-bold">中国标准 (WS/T 428-2013)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">&lt;18.5</td>
                    <td className="py-3 px-4">体重过低</td>
                    <td className="py-3 px-4">体重过低</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-mono">18.5-23.9</td>
                    <td className="py-3 px-4 text-green-400">正常</td>
                    <td className="py-3 px-4 text-green-400">正常</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-orange-500/5">
                    <td className="py-3 px-4 font-mono font-bold">24-24.9</td>
                    <td className="py-3 px-4 text-green-400">正常</td>
                    <td className="py-3 px-4 text-orange-400 font-bold">超重！</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-orange-500/5">
                    <td className="py-3 px-4 font-mono font-bold">25-27.9</td>
                    <td className="py-3 px-4 text-orange-400">超重</td>
                    <td className="py-3 px-4 text-orange-400 font-bold">超重</td>
                  </tr>
                  <tr className="bg-red-500/5">
                    <td className="py-3 px-4 font-mono font-bold">&ge;28</td>
                    <td className="py-3 px-4 text-orange-400">超重</td>
                    <td className="py-3 px-4 text-red-400 font-bold">肥胖！</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono">&ge;30</td>
                    <td className="py-3 px-4 text-red-400">肥胖</td>
                    <td className="py-3 px-4 text-red-400">肥胖</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-muted-foreground space-y-4">
              <p>
                正因如此，<strong>国家体育总局</strong>在评估专业运动员时，
                <strong>从不使用BMI作为主要指标</strong>。体育总局依靠DXA扫描、皮褶厚度测量、
                生物电阻抗分析等方法进行<strong>身体成分分析</strong>，全面评估运动员的肌肉量、脂肪比例和骨密度。
              </p>
              <p>
                <strong>运动员体能测试标准</strong>同样不依赖BMI。国家队的体能评估侧重于
                力量、速度、耐力、柔韧性和协调性等实际运动能力指标，
                这些才是真正反映运动员竞技状态的科学指标。
              </p>
            </div>
          </div>

          {/* TCM and Athletic Performance - NEW SECTION */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-green-500/10">
                <Activity className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">中医体质与运动表现</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                中国体育科学的独特之处在于将<strong>中医学理论</strong>融入现代运动训练体系。
                中医的<strong>体质学说</strong>（体质辨识）根据个体的生理特征将人分为九种体质类型，
                如平和质、气虚质、阳虚质等。不同体质类型的人适合不同的运动项目和训练方式，
                这是远超BMI所能衡量的个性化评估体系。
              </p>
              <p>
                <strong>太极拳</strong>和<strong>气功</strong>是中国传统功能性运动的代表。
                练习者可能BMI处于正常范围，但拥有卓越的平衡能力、协调性和内在力量。
                这些运动关注的是<strong>气血运行</strong>和<strong>经络通畅</strong>，
                体现了"功能性健康"远比体重数字更重要的理念。研究表明，长期太极拳练习者
                在平衡、柔韧性和心血管健康方面表现优异，而这些都无法通过BMI反映。
              </p>
              <p>
                <strong>国家体育总局科研所</strong>（中国国家体育科学研究所）是中国体育科学研究的核心机构。
                该所在运动员身体成分评估方面，采用中西医结合的方法：既使用DXA、MRI等现代技术精确测量
                肌肉和脂肪分布，也参考中医体质辨识对运动员进行整体评估。
                这种<strong>中西医结合</strong>的运动科学方法是中国体育的独特优势。
              </p>
              <p>
                值得一提的是，中国的<strong>全民健身计划</strong>（自1995年实施）推动了全民运动的普及。
                该计划重视的不是体重或BMI数字，而是运动参与度和体质测试成绩。
                每年的<strong>国民体质监测</strong>使用的是综合体质测试（包括握力、坐位体前屈、
                闭眼单脚站立等），而非简单的BMI分类，充分体现了中国对"健康"的多维理解。
              </p>
            </div>
          </div>

          {/* Alternatives Table */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Target className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">中国运动员的BMI替代指标</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              国家体育总局和中国各大体育科研机构在评估运动员时使用以下方法，而非BMI：
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">方法</th>
                    <th className="text-left py-3 px-4 font-bold">优势</th>
                    <th className="text-left py-3 px-4 font-bold">参考值 / 应用</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">FFMI</td>
                    <td className="py-3 px-4">仅考虑去脂体重</td>
                    <td className="py-3 px-4">18-25 为自然范围</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">DXA扫描</td>
                    <td className="py-3 px-4">精确测量骨骼、肌肉、脂肪分布</td>
                    <td className="py-3 px-4">国家队训练基地标配设备</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">体脂率</td>
                    <td className="py-3 px-4">直接测量脂肪比例</td>
                    <td className="py-3 px-4">男性：10-20% | 女性：18-28%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">腰围</td>
                    <td className="py-3 px-4">中国标准更严格的腹部脂肪指标</td>
                    <td className="py-3 px-4">男性：&lt;90 cm | 女性：&lt;85 cm（中国标准）</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-bold">生物电阻抗（BIA）</td>
                    <td className="py-3 px-4">便捷的身体成分分析</td>
                    <td className="py-3 px-4">各省体育局常用方法</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold">中医体质辨识</td>
                    <td className="py-3 px-4">整体评估个体体质特征</td>
                    <td className="py-3 px-4">中国特色的个性化运动处方</td>
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
                <Scale className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">中国运动员BMI：完整解析</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>中国BMI标准（WS/T 428-2013）</strong>采用24/28的超重/肥胖切点，
                低于WHO的25/30标准。这一差异源于大量研究表明，亚洲人群在较低BMI水平就会出现
                代谢风险增加的现象。然而，这一标准对<strong>中国运动员</strong>尤其不利：
                <strong>举重运动员</strong>如吕小军、<strong>篮球运动员</strong>如姚明，
                按中国标准都属于"超重"，但他们的身体状况显然极为出色。
              </p>
              <p>
                <strong>中国举重队</strong>是奥运金牌大户，队员的BMI普遍在25-35之间。
                按中国标准，他们<strong>全部</strong>处于"超重"或"肥胖"范围。
                同样，<strong>武术运动员</strong>凭借高密度肌肉组织，BMI往往高于24的超重线。
                <strong>乒乓球运动员</strong>的BMI相对适中，但他们的体脂率通常远低于同BMI的普通人。
              </p>
              <p>
                <strong>身体成分分析</strong>（体成分分析）是中国精英体育的核心评估手段。
                国家体育总局下属各训练基地均配备DXA设备，用于精确测量运动员的骨骼矿物质含量、
                肌肉量和脂肪分布。结合<strong>中医体质辨识</strong>，中国体育科学形成了
                独特的<strong>中西医结合</strong>运动员评估体系。
              </p>
              <p>
                对于中国运动员和健身爱好者来说，了解<strong>BMI的局限性</strong>至关重要。
                无论您从事的是<strong>举重</strong>、<strong>武术</strong>、<strong>篮球</strong>
                还是其他力量型运动，<strong>体脂率</strong>、<strong>FFMI</strong>和专业的
                <strong>身体成分分析</strong>都是比BMI更可靠的健康评估指标。
                中国标准24/28让这一问题更加突出，运动员更应该关注<strong>体质测试成绩</strong>
                和<strong>功能性体能</strong>，而非简单的体重指数。
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
