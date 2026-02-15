import { useState, useCallback, useEffect } from "react";
import { Header } from "@/components/Header";
import { BMIGauge } from "@/components/BMIGauge";
import { Calculator, Activity, Target, BookOpen, Scale, TrendingUp, Heart, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";

const BMIZh = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weightKg, setWeightKg] = useState(68);
  const [heightCm, setHeightCm] = useState(169);

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
            <span className="gradient-text">免费BMI计算器在线</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            基于中国国家标准（WS/T 428-2013）与WHO双标准，精准评估您的身体质量指数
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
          {/* 中国背景下的BMI介绍 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">中国人的BMI：为何更需关注？</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>BMI（身体质量指数）</strong>是评估体重与身高关系的国际通用指标。
                然而，对于中国人而言，BMI的意义远不止于一个简单的数字。根据<strong>中国疾病预防控制中心（CDC）</strong>的数据，
                中国成年人的超重肥胖率已超过<strong>50%</strong>，超重和肥胖人口超过<strong>6亿</strong>，
                尽管中国成年人的肥胖率（约16.4%）看似低于欧美国家，但由于庞大的人口基数，
                这一比例所代表的绝对数字令人震惊。
              </p>
              <p>
                更值得警惕的是<strong>儿童青少年肥胖</strong>的急剧上升。过去三十年间，
                中国6-17岁青少年的超重肥胖率从不到5%飙升至近20%。
                城市化进程加速、久坐不动的生活方式、高热量饮食的普及以及学业压力导致的运动时间减少，
                都是推动这一趋势的关键因素。
              </p>
              <p>
                为应对这一公共卫生挑战，国务院发布了<strong>《"健康中国2030"规划纲要》</strong>，
                将控制超重肥胖率作为重要战略目标之一。<strong>中国营养学会</strong>发布的《中国居民膳食指南》
                也为国民提供了科学的饮食建议。同时，国家卫生健康委员会（NHC）持续推进
                全民健康生活方式行动，倡导合理膳食与科学运动。
              </p>
              <p>
                尤为重要的是，研究表明<strong>中国人及东亚人群在较低的BMI水平下，
                就已经面临较高的心血管疾病、2型糖尿病和代谢综合征风险</strong>。
                这正是中国制定独立于WHO标准的BMI分类标准的科学依据——
                中国标准将超重起点定为24（而非WHO的25），肥胖起点定为28（而非WHO的30）。
              </p>
            </div>
          </div>

          {/* 中国BMI标准：24/28分界点 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-red-500/10">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">中国BMI标准：24/28分界点</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                2013年，中华人民共和国卫生行业标准<strong>《WS/T 428-2013 成人体重判定》</strong>正式发布实施，
                确立了适用于中国成年人的BMI分类标准。这一标准与WHO的国际标准存在关键差异，
                其核心在于将<strong>超重分界点从25降至24，肥胖分界点从30降至28</strong>。
              </p>
              <p>
                <strong>为什么中国标准更严格？</strong>这并非随意制定，而是基于大量中国人群流行病学研究的科学结论。
                多项涉及数十万中国受试者的前瞻性队列研究发现：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>体脂分布差异：</strong>中国人及东亚人群倾向于在腹部（内脏）积累更多脂肪，即所谓的"中心性肥胖"或"苹果型身材"。内脏脂肪与胰岛素抵抗、炎症反应和心血管疾病风险的关联远强于皮下脂肪。</li>
                <li><strong>相同BMI下更高的体脂率：</strong>在相同BMI水平下，中国人的体脂百分比通常比白种人高3-5个百分点。这意味着BMI为24的中国人，其实际体脂水平可能相当于BMI为27-28的白种人。</li>
                <li><strong>代谢风险提前出现：</strong>中国人群中，2型糖尿病、高血压、血脂异常等代谢疾病的风险在BMI 24左右即开始显著升高，而非WHO标准所界定的25。</li>
                <li><strong>心血管疾病风险曲线：</strong>在BMI 28以上，中国人群的心血管事件发生率和全因死亡率的增长斜率明显陡于西方人群。</li>
              </ul>
              <p>
                因此，如果您是中国人或东亚裔，<strong>切勿仅以WHO标准自我安慰</strong>。
                一个BMI为25的中国成年人，按中国标准已经属于超重，需要引起重视并采取行动。
                中国标准的24/28分界点更能准确反映中国人群的实际健康风险。
              </p>
              <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4 mt-4">
                <p className="text-sm font-medium text-red-600 dark:text-red-400 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  重要提示：中国国家标准WS/T 428-2013规定，BMI 24-27.9为超重，BMI 28及以上为肥胖。建议中国居民以此标准为主要参考。
                </p>
              </div>
            </div>
          </div>

          {/* BMI分类对照表：WHO vs 中国标准 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI分类标准对照：WHO vs 中国</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">分类</th>
                    <th className="text-left py-3 px-4 font-bold">WHO国际标准</th>
                    <th className="text-left py-3 px-4 font-bold">中国标准（WS/T 428-2013）</th>
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
                    <td className="py-3 px-4">&lt; 18.5</td>
                    <td className="py-3 px-4 text-info">营养不良风险</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      正常体重
                    </td>
                    <td className="py-3 px-4">18.5 - 24.9</td>
                    <td className="py-3 px-4 font-semibold">18.5 - 23.9</td>
                    <td className="py-3 px-4 text-success">低风险</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning" />
                      超重
                    </td>
                    <td className="py-3 px-4">25.0 - 29.9</td>
                    <td className="py-3 px-4 font-semibold">24.0 - 27.9</td>
                    <td className="py-3 px-4 text-warning">较高风险</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      肥胖（I级）
                    </td>
                    <td className="py-3 px-4">30.0 - 34.9</td>
                    <td className="py-3 px-4 font-semibold">28.0 - 31.9</td>
                    <td className="py-3 px-4 text-destructive">高风险</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      肥胖（II级）
                    </td>
                    <td className="py-3 px-4">35.0 - 39.9</td>
                    <td className="py-3 px-4 font-semibold">32.0 - 36.9</td>
                    <td className="py-3 px-4 text-destructive">非常高风险</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive" />
                      肥胖（III级）
                    </td>
                    <td className="py-3 px-4">&ge; 40</td>
                    <td className="py-3 px-4 font-semibold">&ge; 37</td>
                    <td className="py-3 px-4 text-destructive">极高风险</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-muted/30 rounded-xl p-4 mt-4">
              <p className="text-sm text-muted-foreground">
                <strong>注意：</strong>中国标准的正常体重上限为23.9（WHO为24.9），超重起点为24.0（WHO为25.0），
                肥胖起点为28.0（WHO为30.0）。BMI处于24.0-24.9之间的中国成年人，
                按WHO标准属于正常范围，但按中国标准已属于超重。建议中国居民优先参考中国国家标准。
              </p>
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
                <p className="text-2xl font-bold text-primary">BMI = 体重 (kg) / 身高² (m)</p>
              </div>
              <p>
                以中国成年人平均体型为例——体重68公斤，身高1.69米：<br />
                BMI = 68 / (1.69 x 1.69) = 68 / 2.8561 = <strong>23.8</strong>
              </p>
              <p>
                这个结果（23.8）在<strong>WHO标准</strong>下属于正常范围（18.5-24.9），
                但在<strong>中国标准</strong>下已接近超重分界点（24.0）。
                这正好说明了为什么中国人需要更关注自己的BMI变化——
                看似"正常"的BMI，按中国标准可能已经需要注意体重管理。
              </p>
            </div>
          </div>

          {/* 中医体质与体重管理 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-emerald-500/10">
                <Heart className="w-6 h-6 text-emerald-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">中医体质与体重管理</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                中国拥有数千年的传统医学智慧。<strong>中医学</strong>从整体观念出发，
                将人的体质分为<strong>九种基本类型</strong>，每种体质对体重的影响各不相同。
                将中医体质辨识与现代BMI评估相结合，可以为中国人提供更个性化的体重管理方案。
              </p>

              <h3 className="text-lg font-bold text-foreground mt-6">九种体质与肥胖倾向</h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>痰湿质（Phlegm-dampness）：</strong>最容易发胖的体质类型。特征为体型偏胖、腹部松软、面部皮肤油腻、多汗。这类人群代谢功能相对偏低，脂肪容易堆积，需特别注意饮食清淡，减少油腻甜食，可多食薏米、冬瓜、荷叶等化痰祛湿食物。</li>
                <li><strong>气虚质（Qi deficiency）：</strong>容易疲乏无力，说话声低，基础代谢偏低，易导致"虚胖"。建议适量食用黄芪、山药、大枣等补气食材，配合太极拳等温和运动。</li>
                <li><strong>湿热质（Damp-heat）：</strong>面部油光，易生痤疮，体味较重。此体质也有一定肥胖倾向，需清热利湿，可食用绿豆、苦瓜、薏苡仁等。</li>
                <li><strong>阳虚质（Yang deficiency）：</strong>怕冷，手脚不温，基础代谢率偏低，脂肪不易分解。建议食用温性食物如生姜、羊肉、桂圆，避免生冷。</li>
                <li><strong>平和质（Balanced）：</strong>体态适中，精力充沛，是最理想的体质状态。维持均衡饮食和适量运动即可。</li>
                <li><strong>阴虚质、血瘀质、气郁质、特禀质：</strong>这些体质类型虽然肥胖倾向不如痰湿质明显，但各有特殊的体重管理要点，需根据具体情况辨证施治。</li>
              </ul>

              <h3 className="text-lg font-bold text-foreground mt-6">食疗（食疗 Shi Liao）——以食为药</h3>
              <p>
                中医食疗强调<strong>"药食同源"</strong>——许多日常食材本身就具有调理身体的功效。
                对于体重管理，中医推荐：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>荷叶茶：</strong>被誉为"减肥茶"，具有清暑利湿、升发清阳的功效，有助于脂肪代谢。</li>
                <li><strong>薏米红豆粥：</strong>健脾祛湿，尤其适合痰湿体质的肥胖人群。</li>
                <li><strong>山楂陈皮水：</strong>消食化积、理气化痰，改善因饮食积滞引起的腹胀肥胖。</li>
                <li><strong>冬瓜汤：</strong>利水消肿，热量极低，是理想的减重辅助食品。</li>
                <li><strong>苦荞茶：</strong>富含芦丁等黄酮类化合物，有助于调节血糖和血脂。</li>
              </ul>

              <h3 className="text-lg font-bold text-foreground mt-6">太极拳与气功——动中求静的运动方式</h3>
              <p>
                与西方高强度运动不同，<strong>太极拳</strong>和<strong>气功</strong>讲究"动中有静、静中有动"，
                通过缓慢柔和的动作与深呼吸，达到调节气血、疏通经络、改善代谢的效果。研究表明：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>每日练习太极拳30-60分钟，可显著改善胰岛素敏感性和血脂水平。</li>
                <li>八段锦等传统功法有助于降低腰臀比和内脏脂肪面积。</li>
                <li>太极拳的冥想属性有助于缓解压力性进食，从心理层面辅助体重管理。</li>
                <li>对于中老年人群和不适合剧烈运动者，太极拳是安全有效的运动选择。</li>
              </ul>

              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4 mt-4">
                <p className="text-sm text-muted-foreground">
                  <strong>中西结合建议：</strong>建议将现代BMI评估作为"量化指标"，
                  结合中医体质辨识作为"定性分析"，制定个性化的体重管理方案。
                  BMI告诉您"是否需要管理"，中医体质帮您理解"如何管理"。
                  两者互补，才能更好地服务于每个人的健康目标。
                </p>
              </div>
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
            <h2 className="text-2xl font-display font-bold mb-6">中国居民BMI健康评估指南</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                本<strong>BMI计算器</strong>特别针对中国用户进行了优化，同时展示
                <strong>WHO国际标准</strong>和<strong>中国国家标准（WS/T 428-2013）</strong>的BMI分类，
                帮助您更准确地了解自身健康状况。
                根据<strong>中国疾病预防控制中心</strong>的研究，中国人群适用更严格的BMI分界点——
                超重起点为24（非25），肥胖起点为28（非30）。
              </p>
              <p>
                <strong>中国营养学会</strong>在《中国居民膳食指南》中建议，
                中国成年人应将BMI维持在<strong>18.5-23.9</strong>的正常范围内。
                <strong>国家卫生健康委员会（NHC）</strong>作为<strong>《"健康中国2030"规划纲要》</strong>的
                执行机构，持续推动全民体重管理意识的提升。
                我们的BMI计算工具不仅提供即时的BMI数值计算，更结合了中国传统医学的体质辨识理念，
                为您提供更全面、更本土化的健康评估视角。
              </p>
              <p>
                中国传统饮食文化中蕴含着丰富的健康智慧——强调五谷为养、五菜为充、五果为助、五畜为益的膳食平衡原则，
                这与现代营养学的均衡饮食理念不谋而合。
                将<strong>BMI科学评估</strong>与传统养生智慧相结合，才能真正实现适合中国人体质特点的体重管理。
                无论您是想<strong>计算BMI</strong>、了解<strong>BMI对照表</strong>，
                还是寻找<strong>个性化的体重管理方案</strong>，本工具都能为您提供专业、可靠的参考。
              </p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 BMI计算器</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIZh;
