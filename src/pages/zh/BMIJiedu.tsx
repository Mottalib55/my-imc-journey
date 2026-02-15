import { Header } from "@/components/Header";
import { HelpCircle, AlertTriangle, CheckCircle2, Scale, Activity, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const BMIJiedu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            中国标准 · 科学解读
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">BMI解读</span>：基于中国标准的科学解读
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            依据中国国家卫生行业标准WS/T 428-2013与中国疾病预防控制中心（China CDC）数据，结合WHO国际标准进行双标准对照解读，帮助中国人群准确理解BMI结果
          </p>
        </header>

        <div className="space-y-8">
          {/* 什么是BMI — 中国语境 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">中国BMI标准与WHO标准的区别</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>BMI</strong>（身体质量指数）是通过体重（公斤）除以身高（米）的平方来评估体重是否健康的指标。
                然而，由于亚洲人群在相同BMI水平下体脂率更高、内脏脂肪更多，中国于2013年发布了专门适用于中国人群的国家标准<strong>WS/T 428-2013《成人体重判定》</strong>，
                将超重和肥胖的切点分别定为<strong>24</strong>和<strong>28</strong>，低于WHO的25和30。
              </p>
              <p>
                <strong>重要提示：</strong>本页所有解读均同时呈现<strong>中国标准</strong>（WS/T 428-2013）与<strong>WHO国际标准</strong>两套分类，
                帮助您全面理解自身BMI结果。BMI只是筛查工具，完整的健康评估还需结合腰围、体脂率、血液指标等。
              </p>

              {/* WHO vs 中国标准对照表 */}
              <div className="overflow-x-auto mt-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-bold">分类</th>
                      <th className="text-center py-3 px-4 font-bold">中国标准 (WS/T 428-2013)</th>
                      <th className="text-center py-3 px-4 font-bold">WHO国际标准</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">体重过轻</td>
                      <td className="text-center py-3 px-4">&lt; 18.5</td>
                      <td className="text-center py-3 px-4">&lt; 18.5</td>
                    </tr>
                    <tr className="border-b border-border/50 bg-success/5">
                      <td className="py-3 px-4 font-medium">正常体重</td>
                      <td className="text-center py-3 px-4 font-bold text-success">18.5 - 23.9</td>
                      <td className="text-center py-3 px-4">18.5 - 24.9</td>
                    </tr>
                    <tr className="border-b border-border/50 bg-warning/5">
                      <td className="py-3 px-4 font-medium">超重</td>
                      <td className="text-center py-3 px-4 font-bold text-warning">24.0 - 27.9</td>
                      <td className="text-center py-3 px-4">25.0 - 29.9</td>
                    </tr>
                    <tr className="bg-destructive/5">
                      <td className="py-3 px-4 font-medium">肥胖</td>
                      <td className="text-center py-3 px-4 font-bold text-destructive">&ge; 28.0</td>
                      <td className="text-center py-3 px-4">&ge; 30.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 各类别详解 — 中国数据 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">各类别详解（中国标准 vs WHO标准）</h2>
            </div>

            <div className="space-y-6">
              {/* 体重过轻 */}
              <div className="border-l-4 border-info pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <Scale className="w-5 h-5 text-info" />
                  <h3 className="font-bold text-lg">BMI &lt; 18.5：体重过轻（中国标准与WHO一致）</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  据中国疾控中心数据，约<strong>6%</strong>的中国成年人属于体重过轻，在农村地区和老年人群中比例更高。营养不足在偏远地区仍然是值得关注的公共卫生问题。
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• 免疫力下降，感染风险增加</li>
                  <li>• 骨质疏松和骨折风险升高</li>
                  <li>• 贫血、维生素缺乏等营养不良症状</li>
                  <li>• 老年人群中与肌少症（肌肉减少症）密切相关</li>
                  <li>• 农村留守老人、青年女性节食群体尤需关注</li>
                </ul>
                <p className="text-info font-medium mt-3">
                  建议：如长期偏瘦，请前往正规医院营养科就诊，排查甲亢、消化吸收障碍等器质性疾病。
                </p>
              </div>

              {/* 正常体重 */}
              <div className="border-l-4 border-success pl-6 py-4 bg-success/5 rounded-r-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <h3 className="font-bold text-lg">BMI 18.5 - 23.9：正常体重（中国标准） / 18.5 - 24.9（WHO标准）</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  中国标准将正常体重上限定为<strong>23.9</strong>，比WHO的24.9低了整整1个BMI单位。这意味着：按WHO标准BMI在24.0-24.9的人群，在中国标准下已属于<strong>超重</strong>。
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• 中国标准范围更窄，因为中国人在BMI 24时代谢风险已开始上升</li>
                  <li>• 该范围内心血管疾病、2型糖尿病风险最低</li>
                  <li>• 目标：通过均衡饮食和规律运动维持在此范围</li>
                  <li>• 注意：即使BMI正常，腰围超标仍需警惕（中心性肥胖）</li>
                </ul>
                <p className="text-success font-medium mt-3">
                  建议：继续保持健康的生活方式，定期体检监测血压、血糖、血脂。
                </p>
              </div>

              {/* 超重 */}
              <div className="border-l-4 border-warning pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  <h3 className="font-bold text-lg">BMI 24.0 - 27.9：超重（中国标准） / 25.0 - 29.9（WHO标准）</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  据2020年《中国居民营养与慢性病状况报告》，<strong>34.3%</strong>的中国成年人属于超重（按中国标准BMI 24-27.9）。这已成为中国最严峻的公共卫生挑战之一。
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• 中国标准超重起点为24（非WHO的25），因为大规模流行病学数据显示中国人群在BMI 24时胰岛素抵抗、血脂异常风险已显著上升</li>
                  <li>• 高血压患病风险增加2-3倍</li>
                  <li>• 2型糖尿病风险显著增加——中国是全球糖尿病患者最多的国家（约1.4亿）</li>
                  <li>• 脂肪肝检出率在该BMI段快速增长</li>
                  <li>• BMI在24.0-24.9之间的人群尤其需要注意：WHO标准下仍为"正常"，但中国标准下已超重</li>
                </ul>
                <p className="text-warning font-medium mt-3">
                  建议：积极调整饮食结构（减少精制碳水、控制食盐摄入），每周至少150分钟中等强度有氧运动。可前往医院"体重管理门诊"咨询。
                </p>
              </div>

              {/* 肥胖 */}
              <div className="border-l-4 border-destructive pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-destructive" />
                  <h3 className="font-bold text-lg">BMI &ge; 28.0：肥胖（中国标准） / &ge; 30.0（WHO标准）</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  按中国标准（BMI &ge; 28），约<strong>16.4%</strong>的中国成年人属于肥胖。超重与肥胖合计影响超过<strong>6亿</strong>中国人口，形势极为严峻。
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• 中国标准肥胖切点28远低于WHO的30——BMI 28-29.9的人群按WHO标准仅为"超重"，但在中国人群中已面临显著健康风险</li>
                  <li>• 心血管疾病、脑卒中风险大幅增加</li>
                  <li>• 2型糖尿病、痛风、睡眠呼吸暂停综合征高发</li>
                  <li>• 关节退行性病变加速，尤其膝关节</li>
                  <li>• 多种癌症（结直肠癌、乳腺癌、子宫内膜癌等）风险上升</li>
                </ul>
                <p className="text-destructive font-medium mt-3">
                  建议：强烈建议到三甲医院内分泌科或营养科就诊，进行系统评估。BMI &ge; 32.5且合并代谢性疾病者可考虑减重代谢手术。
                </p>
              </div>
            </div>
          </div>

          {/* 影响解读的因素 — 中国特有 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">影响BMI解读的中国人群特异性因素</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">中国人群的体脂特征：</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>体脂率偏高</strong>：在相同BMI水平下，中国人的体脂百分比比欧美白种人高3-5个百分点，这是中国标准降低切点的核心原因</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>内脏脂肪堆积</strong>：中国人更容易在腹部积累内脏脂肪（"苹果型"体型），即使总体BMI不高，内脏脂肪面积可能已超标</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>腰围标准更严</strong>：中国标准男性腰围 &ge; 85厘米、女性 &ge; 80厘米即为中心性肥胖（WHO标准为男性94、女性80），更贴合国人风险阈值</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>胰岛素敏感性差异</strong>：中国人群在较低BMI水平即出现胰岛素抵抗，2型糖尿病发病BMI中位数低于西方人群</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>肌肉量相对较少</strong>：东亚人群平均骨骼肌量低于欧美人群，同BMI下脂肪占比更高</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">中国标准的补充评估指标：</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>腰围（中国标准）</strong>：男性 &lt; 85厘米 / 女性 &lt; 80厘米为正常；超标提示中心性肥胖</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>腰臀比</strong>：男性 &lt; 0.90 / 女性 &lt; 0.85为理想，中国人群尤应关注</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>内脏脂肪面积</strong>：CT或生物电阻抗法测量，&ge; 80 cm&sup2; 为内脏肥胖</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>体脂率</strong>：男性正常 &lt; 25%、女性 &lt; 30%（中国常用标准）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>血液指标</strong>：空腹血糖、糖化血红蛋白、血脂四项、尿酸——中国代谢综合征筛查必查项目</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* WS/T 428-2013标准解读 — 新增专题 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">WS/T 428-2013标准解读</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>WS/T 428-2013《成人体重判定》</strong>是中华人民共和国国家卫生行业标准，由原卫生部（现国家卫生健康委员会）于2013年发布实施，
                是中国医疗机构、体检中心判定成人体重状态的法定依据。
              </p>

              <h4 className="font-bold text-foreground mt-6">为什么超重起点是24而非25？</h4>
              <p>
                该标准的制定基于北京大学、中国疾病预防控制中心（China CDC）等机构对全国大规模流行病学数据的系统分析。研究发现：
              </p>
              <ul className="space-y-2 text-sm ml-4">
                <li>• <strong>BMI 24拐点效应</strong>：中国人群在BMI达到24时，高血压、2型糖尿病、血脂异常的患病率出现显著拐点式上升，远早于WHO标准的25</li>
                <li>• <strong>胰岛素抵抗阈值</strong>：北京大学公共卫生学院的研究表明，中国人在BMI 23-24区间即开始出现明显的胰岛素抵抗，空腹胰岛素水平显著升高</li>
                <li>• <strong>死亡率风险曲线</strong>：China CDC对全国多中心队列数据分析显示，BMI 24-28区间全因死亡率和心血管死亡率已显著高于18.5-23.9区间</li>
                <li>• <strong>BMI 28肥胖切点</strong>：在BMI 28以上，中国人群的代谢综合征、冠心病、脑卒中风险呈陡峭上升，与WHO标准中BMI 30以上的欧美人群风险程度相当</li>
              </ul>

              <h4 className="font-bold text-foreground mt-6">WHO标准 vs 中国标准逐项对比</h4>
              <div className="overflow-x-auto mt-3">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-bold">分类</th>
                      <th className="text-center py-3 px-4 font-bold">WHO标准</th>
                      <th className="text-center py-3 px-4 font-bold">中国标准</th>
                      <th className="text-left py-3 px-4 font-bold">差异说明</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">体重过轻</td>
                      <td className="text-center py-3 px-4">&lt; 18.5</td>
                      <td className="text-center py-3 px-4">&lt; 18.5</td>
                      <td className="py-3 px-4 text-xs">两套标准一致</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">正常体重</td>
                      <td className="text-center py-3 px-4">18.5 - 24.9</td>
                      <td className="text-center py-3 px-4 font-bold">18.5 - 23.9</td>
                      <td className="py-3 px-4 text-xs">中国标准正常上限低1个BMI单位</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">超重</td>
                      <td className="text-center py-3 px-4">25.0 - 29.9</td>
                      <td className="text-center py-3 px-4 font-bold">24.0 - 27.9</td>
                      <td className="py-3 px-4 text-xs">中国标准起点低1个BMI单位，上限低2个</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">肥胖</td>
                      <td className="text-center py-3 px-4">&ge; 30.0</td>
                      <td className="text-center py-3 px-4 font-bold">&ge; 28.0</td>
                      <td className="py-3 px-4 text-xs">中国标准肥胖切点低2个BMI单位</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">腰围（男性）</td>
                      <td className="text-center py-3 px-4">&ge; 94 cm</td>
                      <td className="text-center py-3 px-4 font-bold">&ge; 85 cm</td>
                      <td className="py-3 px-4 text-xs">中国标准严格9厘米</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">腰围（女性）</td>
                      <td className="text-center py-3 px-4">&ge; 80 cm</td>
                      <td className="text-center py-3 px-4 font-bold">&ge; 80 cm</td>
                      <td className="py-3 px-4 text-xs">两套标准一致</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4">
                <strong>临床意义：</strong>如果您的BMI在24.0-24.9之间，按WHO标准属于"正常"，但按中国标准已经<strong>超重</strong>。
                如果BMI在28.0-29.9之间，WHO标准下为"超重"，但中国标准下已属<strong>肥胖</strong>。在中国就医体检时，医生通常采用中国标准进行判定。
              </p>
            </div>
          </div>

          {/* 中医体质与BMI — 新增专题 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">中医体质与BMI</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                中医体质学说将人体分为<strong>九种基本体质</strong>（平和质、气虚质、阳虚质、阴虚质、痰湿质、湿热质、血瘀质、气郁质、特禀质），
                其中与肥胖关系最密切的是<strong>痰湿质</strong>。将中医体质辨识与现代BMI指标结合，可以为体重管理提供更具中国文化特色的理解视角。
              </p>

              <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 mt-4">
                <p className="text-xs text-muted-foreground mb-4 italic">
                  以下内容仅为中医文化背景知识介绍，不构成医疗诊断或治疗建议。如有健康问题，请咨询专业医师。
                </p>

                <h4 className="font-bold text-foreground mb-3">痰湿质与肥胖的关系</h4>
                <p className="text-sm mb-3">
                  中医认为，痰湿质人群多表现为体形肥胖、腹部肥满、面部皮肤油脂较多、多汗且黏、胸闷痰多。
                  现代研究发现，痰湿体质与代谢综合征（高BMI、高血脂、高血糖、高血压等）存在显著关联。
                  痰湿质人群中超重肥胖比例明显高于其他体质类型。
                </p>

                <h4 className="font-bold text-foreground mb-3">不同体质的食疗（食疗）参考</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p><strong>痰湿质</strong>（易胖体质）：宜食薏苡仁、冬瓜、荷叶、山楂、陈皮等健脾利湿之品；少食肥甘厚腻、甜食冷饮</p>
                    <p><strong>气虚质</strong>（虚胖乏力）：宜食黄芪、山药、大枣、小米等补气健脾之品；避免过度节食减肥</p>
                    <p><strong>阳虚质</strong>（畏寒易胖）：宜食生姜、桂圆、羊肉等温阳食材；冬季注重温补，忌生冷</p>
                  </div>
                  <div className="space-y-2">
                    <p><strong>湿热质</strong>（腹部肥胖）：宜食绿豆、苦瓜、薏米等清热利湿食材；忌辛辣油腻、酒类</p>
                    <p><strong>气郁质</strong>（情绪性进食）：宜食玫瑰花茶、佛手、柑橘等疏肝理气之品；注重情志调节，避免暴饮暴食</p>
                    <p><strong>平和质</strong>（BMI正常）：饮食均衡即可，五谷为养、五果为助、五畜为益、五菜为充</p>
                  </div>
                </div>

                <h4 className="font-bold text-foreground mt-4 mb-3">中医视角与现代BMI的整合</h4>
                <p className="text-sm">
                  将BMI数值与中医体质辨识结合，可以帮助理解"为什么同样BMI的人健康状况不同"。例如，BMI 26的痰湿质人群可能比同BMI的平和质人群面临更高的代谢风险。
                  越来越多的中国三甲医院治未病中心开始采用"BMI + 体质辨识 + 腰围"的综合评估方式。
                  这体现了中国医学"辨证论治"的传统智慧与现代循证医学的融合。
                </p>
              </div>
            </div>
          </div>

          {/* BMI何时可靠 vs 不可靠 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <HelpCircle className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI何时可靠？何时不可靠？</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-success">BMI较为可靠的情况：</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span>18-65岁普通成年人群（使用中国标准切点）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span>大规模人群健康风险筛查与流行病学调查</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span>个人体重长期趋势追踪（每周同一时间测量）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span>结合腰围使用时，预测代谢风险的准确度显著提高</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-destructive">BMI不太可靠的情况：</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>专业运动员、健身人士（肌肉量大导致BMI偏高）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>孕妇及哺乳期女性</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>儿童和青少年（需使用年龄性别百分位数曲线）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>65岁以上老年人（肌少症可导致BMI正常但体脂超标）</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 何时应该咨询医生 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Heart className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">何时应该咨询医生？</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                在以下情况下，建议您尽快前往正规医疗机构就诊：
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>按中国标准BMI超出正常范围</strong>（低于18.5或高于24），尤其伴有其他不适症状时</li>
                <li><strong>腰围超标</strong>：男性 &ge; 85厘米，女性 &ge; 80厘米（中国标准）</li>
                <li><strong>体重在短时间内急剧变化</strong>，无论是增加还是减少</li>
                <li><strong>血压、血糖、血脂异常</strong>：体检发现任何一项超标</li>
                <li><strong>家族中有肥胖、糖尿病、心血管疾病史</strong></li>
                <li><strong>BMI在24-28之间</strong>（中国标准超重），同时合并代谢异常指标</li>
              </ol>
              <p>
                请记住：BMI结合腰围是初筛工具。三甲医院内分泌科、营养科、治未病中心都可以提供全面的体重管理方案。
              </p>
            </div>
          </div>

          {/* SEO内容 */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">深入了解中国BMI标准与解读</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>BMI解读</strong>对于中国人群尤为重要，因为<strong>中国BMI标准</strong>（WS/T 428-2013）与WHO国际标准存在显著差异。
                <strong>中国标准</strong>将超重切点定为<strong>24</strong>、肥胖切点定为<strong>28</strong>，这是基于<strong>中国疾病预防控制中心（China CDC）</strong>和北京大学公共卫生学院对中国人群的大规模流行病学研究得出的科学结论。
              </p>
              <p>
                理解<strong>中国BMI分类标准</strong>的关键在于：中国人在相同BMI下体脂率更高、内脏脂肪更多，因此代谢风险更早出现。
                <strong>24/28切点</strong>精准反映了中国人群的健康风险阈值。结合<strong>中国腰围标准</strong>（男性85厘米、女性80厘米），
                可以更全面地评估<strong>中心性肥胖</strong>和<strong>代谢综合征</strong>风险。
              </p>
              <p>
                完整的<strong>BMI解读</strong>还应了解
                <Link to="/zh/bmi-juxianxing" className="text-primary hover:underline">BMI的局限性</Link>，
                参考<Link to="/zh/bmi-biao" className="text-primary hover:underline">BMI对照表</Link>，
                并关注<Link to="/zh/jiankang-tizhong" className="text-primary hover:underline">健康体重管理</Link>的科学方法。
                无论使用WHO标准还是<strong>中国标准WS/T 428-2013</strong>，BMI都只是健康评估的起点，
                建议定期到医疗机构进行全面体检。
              </p>
            </div>
          </div>

          {/* 行动号召 */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">立即按中国标准计算您的BMI</h3>
            <p className="text-muted-foreground mb-6">
              使用我们的免费BMI计算器，基于WS/T 428-2013中国标准与WHO双标准，精准评估您的体重状态
            </p>
            <Link
              to="/zh/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              计算您的BMI
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 BMI解读 — 基于中国国家标准WS/T 428-2013</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIJiedu;
