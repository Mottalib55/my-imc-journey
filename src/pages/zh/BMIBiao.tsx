import { Header } from "@/components/Header";
import { Table as TableIcon, Scale, AlertTriangle, CheckCircle2, Heart, Activity, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const BMIBiao = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <TableIcon className="w-4 h-4" />
            中国标准 vs WHO分类
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">BMI分类表</span>：中国标准与WHO国际标准对照
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            中国使用不同的BMI标准（WS/T 428-2013）：超重≥24，肥胖≥28。WHO国际标准与中国标准对照表。
          </p>
        </header>

        <div className="space-y-8">
          {/* DUAL TABLE: WHO vs China */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">WHO国际标准 vs 中国标准（WS/T 428-2013）对照表</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              中国采用不同于WHO的BMI切点。根据卫生行业标准<strong>WS/T 428-2013《成人体重判定》</strong>，中国的超重和肥胖界值分别为<strong>24</strong>和<strong>28</strong>，低于WHO的25和30。这是因为东亚人群在较低BMI水平时已出现更高的代谢风险。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold">分类</th>
                    <th className="text-left py-4 px-4 font-bold">WHO国际标准<br />(kg/m²)</th>
                    <th className="text-left py-4 px-4 font-bold">中国标准 WS/T 428-2013<br />(kg/m²)</th>
                    <th className="text-left py-4 px-4 font-bold">差异说明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">体重过轻</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">&lt; 18.5</td>
                    <td className="py-4 px-4 font-mono">&lt; 18.5</td>
                    <td className="py-4 px-4 text-muted-foreground">标准一致</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-success" />
                        <span className="font-bold text-success">正常体重</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-success">18.5 - 24.9</td>
                    <td className="py-4 px-4 font-mono font-bold text-success">18.5 - 23.9</td>
                    <td className="py-4 px-4 text-warning font-medium">中国标准上限低1个点</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-warning" />
                        <span className="font-medium">超重</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">25.0 - 29.9</td>
                    <td className="py-4 px-4 font-mono">24.0 - 27.9</td>
                    <td className="py-4 px-4 text-warning font-medium">中国标准：24起算，非25</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">肥胖</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">≥ 30.0</td>
                    <td className="py-4 px-4 font-mono">≥ 28.0</td>
                    <td className="py-4 px-4 text-destructive font-medium">中国标准：28起算，非30</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 rounded-lg bg-warning/10 border border-warning/20">
              <p className="text-sm text-muted-foreground">
                <strong className="text-warning">关键差异：</strong>一个BMI为25的中国成年人按WHO标准刚进入"超重"，但按中国标准已经<strong>超重超过1个BMI单位</strong>。同样，BMI为29的人按WHO标准仍属于"超重"，但按中国标准已经属于<strong>"肥胖"</strong>。这意味着使用国际标准可能低估中国人的健康风险。
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              数据来源：世界卫生组织（WHO）；中华人民共和国卫生行业标准 WS/T 428-2013
            </p>
          </div>

          {/* WHO BMI Classification Table (detailed) */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">WHO成人BMI分类标准（详细）</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold">分类</th>
                    <th className="text-left py-4 px-4 font-bold">BMI (kg/m²)</th>
                    <th className="text-left py-4 px-4 font-bold">合并症风险</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">严重体重过轻</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">&lt; 16.0</td>
                    <td className="py-4 px-4 text-info">高（营养不良）</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">中度体重过轻</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">16.0 - 16.9</td>
                    <td className="py-4 px-4 text-info">中等</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-info/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-info" />
                        <span className="font-medium">轻度体重过轻</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">17.0 - 18.4</td>
                    <td className="py-4 px-4 text-info">较低</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-success/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-success" />
                        <span className="font-bold text-success">正常体重</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-success">18.5 - 24.9</td>
                    <td className="py-4 px-4 text-success">低（参考值）</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-warning/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-warning" />
                        <span className="font-medium">超重（前期肥胖）</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">25.0 - 29.9</td>
                    <td className="py-4 px-4 text-warning">增高</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">肥胖I级（中度）</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">30.0 - 34.9</td>
                    <td className="py-4 px-4 text-destructive">高</td>
                  </tr>
                  <tr className="border-b border-border/50 bg-destructive/5">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">肥胖II级（重度）</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">35.0 - 39.9</td>
                    <td className="py-4 px-4 text-destructive">非常高</td>
                  </tr>
                  <tr className="bg-destructive/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-destructive" />
                        <span className="font-medium">肥胖III级（病态）</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono">≥ 40.0</td>
                    <td className="py-4 px-4 text-destructive">极高</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              数据来源：世界卫生组织（WHO）
            </p>
          </div>

          {/* Weight by Height Table - Dual Standards with Chinese average heights */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">身高与体重对照表：WHO vs 中国标准</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              中国成年男性平均身高约<strong>172 cm</strong>，女性约<strong>160 cm</strong>。下表以中国常见身高为基准，同时对比WHO和中国标准的体重切点差异。
            </p>

            <h3 className="font-bold text-lg mb-3">按WHO国际标准</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-3 font-bold">身高</th>
                    <th className="text-left py-3 px-3 font-bold text-info">体重过轻<br />&lt;18.5</th>
                    <th className="text-left py-3 px-3 font-bold text-success">正常<br />18.5-24.9</th>
                    <th className="text-left py-3 px-3 font-bold text-warning">超重<br />25-29.9</th>
                    <th className="text-left py-3 px-3 font-bold text-destructive">肥胖<br />≥30</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { h: 155, u: 44, nMin: 44, nMax: 60, sMin: 60, sMax: 72, o: 72 },
                    { h: 160, u: 47, nMin: 47, nMax: 64, sMin: 64, sMax: 77, o: 77, label: "（女性均高）" },
                    { h: 165, u: 50, nMin: 50, nMax: 68, sMin: 68, sMax: 81, o: 81 },
                    { h: 170, u: 53, nMin: 53, nMax: 72, sMin: 72, sMax: 87, o: 87 },
                    { h: 172, u: 55, nMin: 55, nMax: 74, sMin: 74, sMax: 89, o: 89, label: "（男性均高）" },
                    { h: 175, u: 57, nMin: 57, nMax: 76, sMin: 76, sMax: 92, o: 92 },
                    { h: 180, u: 60, nMin: 60, nMax: 81, sMin: 81, sMax: 97, o: 97 },
                    { h: 185, u: 63, nMin: 63, nMax: 85, sMin: 85, sMax: 102, o: 102 },
                  ].map((row) => (
                    <tr key={`who-${row.h}`} className={`border-b border-border/50 ${row.label ? "bg-primary/5" : ""}`}>
                      <td className="py-3 px-3 font-bold">{row.h} cm {row.label && <span className="text-xs text-primary font-normal">{row.label}</span>}</td>
                      <td className="py-3 px-3 text-info">&lt;{row.u} kg</td>
                      <td className="py-3 px-3 text-success">{row.nMin}-{row.nMax} kg</td>
                      <td className="py-3 px-3 text-warning">{row.sMin}-{row.sMax} kg</td>
                      <td className="py-3 px-3 text-destructive">&gt;{row.o} kg</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-bold text-lg mb-3">按中国标准（WS/T 428-2013）</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-3 font-bold">身高</th>
                    <th className="text-left py-3 px-3 font-bold text-info">体重过轻<br />&lt;18.5</th>
                    <th className="text-left py-3 px-3 font-bold text-success">正常<br />18.5-23.9</th>
                    <th className="text-left py-3 px-3 font-bold text-warning">超重<br />24-27.9</th>
                    <th className="text-left py-3 px-3 font-bold text-destructive">肥胖<br />≥28</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { h: 155, u: 44, nMin: 44, nMax: 57, sMin: 58, sMax: 67, o: 67 },
                    { h: 160, u: 47, nMin: 47, nMax: 61, sMin: 61, sMax: 72, o: 72, label: "（女性均高）" },
                    { h: 165, u: 50, nMin: 50, nMax: 65, sMin: 65, sMax: 76, o: 76 },
                    { h: 170, u: 53, nMin: 53, nMax: 69, sMin: 69, sMax: 81, o: 81 },
                    { h: 172, u: 55, nMin: 55, nMax: 71, sMin: 71, sMax: 83, o: 83, label: "（男性均高）" },
                    { h: 175, u: 57, nMin: 57, nMax: 73, sMin: 73, sMax: 86, o: 86 },
                    { h: 180, u: 60, nMin: 60, nMax: 77, sMin: 78, sMax: 91, o: 91 },
                    { h: 185, u: 63, nMin: 63, nMax: 82, sMin: 82, sMax: 96, o: 96 },
                  ].map((row) => (
                    <tr key={`cn-${row.h}`} className={`border-b border-border/50 ${row.label ? "bg-primary/5" : ""}`}>
                      <td className="py-3 px-3 font-bold">{row.h} cm {row.label && <span className="text-xs text-primary font-normal">{row.label}</span>}</td>
                      <td className="py-3 px-3 text-info">&lt;{row.u} kg</td>
                      <td className="py-3 px-3 text-success">{row.nMin}-{row.nMax} kg</td>
                      <td className="py-3 px-3 text-warning">{row.sMin}-{row.sMax} kg</td>
                      <td className="py-3 px-3 text-destructive">&gt;{row.o} kg</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <p className="text-sm text-muted-foreground">
                <strong className="text-destructive">对比示例：</strong>一位身高172 cm、体重75 kg的中国男性，按WHO标准BMI为25.4（刚进入"超重"），但按中国标准已属于<strong>"超重"区间中段</strong>。如果体重达到83 kg（BMI 28.1），按WHO标准仍为"超重"，按中国标准已进入<strong>"肥胖"</strong>。
              </p>
            </div>
          </div>

          {/* China Obesity Prevalence Stats */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Activity className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">中国BMI分类的流行率</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              按照中国自身的BMI标准（WS/T 428-2013），中国超重和肥胖问题比使用WHO标准时显得更为严峻。以下是基于中国疾病预防控制中心（CDC）数据的流行率统计：
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-destructive/10 text-center">
                <p className="text-3xl font-bold text-destructive mb-1">16.4%</p>
                <p className="text-sm text-muted-foreground">成人肥胖率（中国标准 BMI≥28）</p>
              </div>
              <div className="p-4 rounded-xl bg-warning/10 text-center">
                <p className="text-3xl font-bold text-warning mb-1">34.3%</p>
                <p className="text-sm text-muted-foreground">成人超重率（中国标准 BMI 24-27.9）</p>
              </div>
              <div className="p-4 rounded-xl bg-destructive/5 text-center">
                <p className="text-3xl font-bold text-destructive mb-1">50%+</p>
                <p className="text-sm text-muted-foreground">超重+肥胖合计比例</p>
              </div>
              <div className="p-4 rounded-xl bg-primary/10 text-center">
                <p className="text-3xl font-bold text-primary mb-1">6亿+</p>
                <p className="text-sm text-muted-foreground">受超重或肥胖影响的人口</p>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                如果按照WHO国际标准（超重≥25、肥胖≥30）来统计，中国的肥胖率会显得较低。但采用中国自身标准后，超过一半的成年人口已处于超重或肥胖状态。这一巨大差异恰恰证明了<strong>采用针对中国人群的BMI标准的必要性</strong>。
              </p>
              <p>
                中国CDC的监测数据显示，过去30年间中国超重和肥胖率持续攀升。城市地区肥胖率高于农村，但农村地区的增长速度更快。青少年和儿童的超重肥胖问题同样令人担忧，已成为重大公共卫生挑战。
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              数据来源：中国疾病预防控制中心（China CDC）；《中国居民营养与慢性病状况报告》
            </p>
          </div>

          {/* Why China Uses Different Standards */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <AlertTriangle className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">为什么中国使用不同标准？</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                中国采用比WHO更严格的BMI切点（超重≥24、肥胖≥28而非25和30），这一决定基于大量科学研究证据，并非随意调整。主要原因如下：
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="p-4 rounded-lg bg-primary/5 border-l-4 border-primary">
                  <h4 className="font-bold mb-2">东亚人体成分差异</h4>
                  <p className="text-sm">
                    与欧美人群相比，中国人及其他东亚人群在相同BMI水平下具有<strong>更高的体脂百分比</strong>。北京大学和中国CDC的联合研究表明，BMI为25的中国人其体脂含量约相当于BMI为30的白人人群。这意味着即使BMI数值看起来"正常"，实际健康风险已经偏高。
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border-l-4 border-primary">
                  <h4 className="font-bold mb-2">胰岛素抵抗与2型糖尿病</h4>
                  <p className="text-sm">
                    研究发现，中国人群在BMI≥24时就开始出现显著的<strong>胰岛素抵抗</strong>，而西方人群通常在BMI≥25甚至更高时才出现。这解释了为什么中国2型糖尿病患者中很多人BMI并未达到WHO的"超重"标准。中国CDC的流行病学调查证实，BMI 24是中国人代谢风险的重要转折点。
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border-l-4 border-primary">
                  <h4 className="font-bold mb-2">代谢综合征风险</h4>
                  <p className="text-sm">
                    代谢综合征（包括高血压、高血糖、血脂异常和腹型肥胖）在中国人群中发病的BMI阈值明显低于西方人群。中国多中心前瞻性研究表明，BMI≥24时高血压、高甘油三酯血症和低HDL胆固醇的患病风险已显著升高。BMI≥28时心血管疾病综合风险接近WHO标准下BMI≥30的风险水平。
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border-l-4 border-primary">
                  <h4 className="font-bold mb-2">腹部脂肪分布特征</h4>
                  <p className="text-sm">
                    中国人群具有更明显的<strong>腹型（内脏型）肥胖</strong>倾向。即使在整体BMI不高的情况下，腹部脂肪堆积就可能较为明显。内脏脂肪与代谢疾病的关系比皮下脂肪更为密切。北京大学公共卫生学院的研究指出，这种脂肪分布特征是中国人需要更严格BMI标准的关键原因之一。
                  </p>
                </div>
              </div>
              <p>
                因此，<strong>WS/T 428-2013</strong>标准的制定是基于中国人群大规模流行病学数据的科学决策，旨在更准确地识别中国人群中的代谢健康风险人群，实现早期预防和干预。
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              参考文献：中国疾病预防控制中心（China CDC）；北京大学公共卫生学院；《中华流行病学杂志》
            </p>
          </div>

          {/* Waist Circumference: China vs WHO */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Scale className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">腰围标准：中国与WHO对比</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              除BMI外，腰围是评估腹型肥胖的重要指标。中国同样制定了不同于WHO的腰围切点，以更准确地反映中国人群的健康风险。
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold">指标</th>
                    <th className="text-left py-4 px-4 font-bold">WHO国际标准</th>
                    <th className="text-left py-4 px-4 font-bold">中国标准</th>
                    <th className="text-left py-4 px-4 font-bold">差异</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">男性腰围（风险增高）</td>
                    <td className="py-4 px-4 font-mono">≥ 94 cm</td>
                    <td className="py-4 px-4 font-mono font-bold text-warning">≥ 85 cm</td>
                    <td className="py-4 px-4 text-warning">低9 cm</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">女性腰围（风险增高）</td>
                    <td className="py-4 px-4 font-mono">≥ 80 cm</td>
                    <td className="py-4 px-4 font-mono font-bold text-warning">≥ 80 cm</td>
                    <td className="py-4 px-4 text-muted-foreground">标准一致</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">男性腰围（高风险）</td>
                    <td className="py-4 px-4 font-mono">≥ 102 cm</td>
                    <td className="py-4 px-4 font-mono font-bold text-destructive">≥ 90 cm</td>
                    <td className="py-4 px-4 text-destructive">低12 cm</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">女性腰围（高风险）</td>
                    <td className="py-4 px-4 font-mono">≥ 88 cm</td>
                    <td className="py-4 px-4 font-mono font-bold text-destructive">≥ 85 cm</td>
                    <td className="py-4 px-4 text-destructive">低3 cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-primary/5">
                <h4 className="font-bold mb-2">为什么腰围比BMI更重要？</h4>
                <p className="text-sm text-muted-foreground">
                  腰围能直接反映腹部（内脏）脂肪堆积程度。内脏脂肪与代谢综合征、2型糖尿病和心血管疾病的关联比皮下脂肪更强。对于BMI处于"正常"范围但腰围超标的人群（"隐性肥胖"），心血管风险同样显著升高。
                </p>
              </div>
              <div className="p-4 rounded-lg bg-primary/5">
                <h4 className="font-bold mb-2">中国人群的腹型肥胖特征</h4>
                <p className="text-sm text-muted-foreground">
                  中国人群较欧美人群更容易出现腹型肥胖，即脂肪优先堆积在腹部而非四肢。因此中国男性的腰围标准（≥85 cm）远低于WHO标准（≥94 cm）。建议将BMI与腰围联合评估，以获得更准确的健康风险判断。
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              数据来源：WS/T 428-2013《成人体重判定》；WHO腰围分类标准
            </p>
          </div>

          {/* BMI by Age Ranges */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">不同年龄段的BMI参考值</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              随着年龄的增长，理想BMI范围会有所变化。以下是各年龄段建议的BMI参考范围：
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold">年龄段</th>
                    <th className="text-left py-4 px-4 font-bold">建议BMI范围 (kg/m²)</th>
                    <th className="text-left py-4 px-4 font-bold">说明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">18 - 24岁</td>
                    <td className="py-4 px-4 font-mono">18.5 - 23.9</td>
                    <td className="py-4 px-4 text-muted-foreground">中国标准正常范围</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">25 - 34岁</td>
                    <td className="py-4 px-4 font-mono">19.0 - 24.0</td>
                    <td className="py-4 px-4 text-muted-foreground">新陈代谢开始变化</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">35 - 44岁</td>
                    <td className="py-4 px-4 font-mono">20.0 - 25.0</td>
                    <td className="py-4 px-4 text-muted-foreground">体脂比例逐渐增加</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">45 - 54岁</td>
                    <td className="py-4 px-4 font-mono">21.0 - 26.0</td>
                    <td className="py-4 px-4 text-muted-foreground">肌肉量自然减少</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">55 - 64岁</td>
                    <td className="py-4 px-4 font-mono">22.0 - 27.0</td>
                    <td className="py-4 px-4 text-muted-foreground">稍高的BMI可能具有保护作用</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">65岁及以上</td>
                    <td className="py-4 px-4 font-mono">23.0 - 28.0</td>
                    <td className="py-4 px-4 text-muted-foreground">需综合考虑肌肉流失与骨密度</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              注：以上数据为一般参考值，结合中国标准调整。个体差异较大，建议咨询医生获取个性化建议。
            </p>
          </div>

          {/* BMI Categories Explained in Detail */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <TableIcon className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI各类别详细解读</h2>
            </div>
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-info/5 border-l-4 border-info">
                <h4 className="font-bold text-info mb-2">体重过轻（BMI &lt; 18.5）</h4>
                <p className="text-muted-foreground">
                  BMI低于18.5表明体重不足。这可能是由于营养摄入不足、消化吸收障碍、
                  慢性疾病或过度运动等原因所致。体重过轻会导致免疫力下降、骨质疏松、
                  贫血以及生育能力降低等问题。建议增加营养摄入，尤其是蛋白质和健康脂肪。
                </p>
              </div>
              <div className="p-4 rounded-lg bg-success/5 border-l-4 border-success">
                <h4 className="font-bold text-success mb-2">正常体重 — WHO: 18.5-24.9 / 中国: 18.5-23.9</h4>
                <p className="text-muted-foreground">
                  按中国标准，BMI在18.5至23.9之间为正常体重。注意WHO标准的正常上限为24.9，
                  但对于中国人群，BMI 24时代谢风险已经开始显著增加。维持正常体重有助于心血管健康、
                  代谢功能正常运转以及关节健康。建议通过均衡饮食和规律运动来保持这一理想范围。
                </p>
              </div>
              <div className="p-4 rounded-lg bg-warning/5 border-l-4 border-warning">
                <h4 className="font-bold text-warning mb-2">超重 — WHO: 25.0-29.9 / 中国: 24.0-27.9</h4>
                <p className="text-muted-foreground">
                  按中国标准，BMI在24至27.9之间属于超重。中国人群在此BMI范围内已出现胰岛素抵抗加剧、
                  血压升高和血脂异常。WHO标准下的超重起点为25，但中国研究表明BMI 24即为中国人
                  代谢风险的转折点。建议在此阶段就积极调整饮食结构，增加体力活动。
                </p>
              </div>
              <div className="p-4 rounded-lg bg-destructive/5 border-l-4 border-destructive">
                <h4 className="font-bold text-destructive mb-2">肥胖 — WHO: ≥30 / 中国: ≥28</h4>
                <p className="text-muted-foreground">
                  按中国标准，BMI≥28即为肥胖（WHO标准为≥30）。此阶段各种慢性疾病风险显著升高，
                  包括心脏病、中风、2型糖尿病和某些癌症。中国标准将肥胖阈值设为28，是因为
                  中国人群在此BMI水平的心血管和代谢疾病风险已接近WHO标准下BMI≥30的风险水平。
                  建议在医生指导下制定科学的减重计划。
                </p>
              </div>
            </div>
          </div>

          {/* Health Risks per Category */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Heart className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">各BMI类别的健康风险</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-info">体重过轻的健康风险</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>免疫系统功能减弱，容易感染疾病</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>骨质疏松和骨折风险增加</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>贫血和营养缺乏</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>生育能力下降和月经不调</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-destructive">超重和肥胖的健康风险</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>2型糖尿病和胰岛素抵抗</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>高血压和心血管疾病</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>睡眠呼吸暂停综合征</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>某些癌症风险增高（如结肠癌、乳腺癌）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>关节炎和骨关节退行性病变</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>脂肪肝和胆囊疾病</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* BMI Interpretation Caveats */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">正确理解BMI的局限性</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold">BMI不适用于以下人群：</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>肌肉发达的运动员</strong>：肌肉量大导致BMI偏高</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>孕妇</strong>：孕期体重增加属正常现象</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>老年人</strong>：肌肉流失导致BMI失准</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>儿童和青少年</strong>：需使用专门的生长曲线</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold">补充健康指标：</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>腰围</strong>：评估腹部脂肪堆积（中国男性≥85cm）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>体脂率</strong>：反映身体成分构成</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>腰臀比</strong>：评估脂肪分布</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>去脂体重指数（FFMI）</strong>：适用于运动员</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">中国BMI表格与标准：WS/T 428-2013完整解读</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>中国BMI分类标准</strong>（WS/T 428-2013）是中国卫生行业的权威体重评估标准，与WHO国际标准存在重要差异。中国标准规定<strong>超重切点为BMI≥24</strong>，<strong>肥胖切点为BMI≥28</strong>，均低于WHO的25和30。这份<strong>BMI表格</strong>完整呈现了两套标准的对比。
              </p>
              <p>
                根据<strong>中国CDC</strong>（中国疾病预防控制中心）的数据，采用中国标准（<strong>24/28标准</strong>）计算，超过50%的中国成年人处于超重或肥胖状态。了解<strong>中国BMI分类</strong>与WHO标准的差异，有助于中国人群更准确地评估自身健康风险。
              </p>
              <p>
                <strong>WS/T 428-2013</strong>标准基于大量中国人群流行病学数据制定，考虑了东亚人群独特的体成分特征和代谢风险阈值。结合<strong>BMI表格</strong>和腰围标准共同评估，能更全面地了解个体健康状况。
              </p>
              <p>
                如需了解更多信息，请访问我们的
                <Link to="/zh/bmi-jiedu" className="text-primary hover:underline">BMI解读页面</Link>
                或了解
                <Link to="/zh/bmi-juxianxing" className="text-primary hover:underline">BMI的局限性</Link>。
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="glass-card p-8 text-center bg-gradient-to-br from-primary/10 to-primary/5">
            <h3 className="text-2xl font-display font-bold mb-4">计算您的BMI</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              使用我们的免费BMI计算器，按照中国标准查看您的BMI分类
            </p>
            <Link
              to="/zh/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Scale className="w-5 h-5" />
              计算BMI
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 BMI分类表 — 中国标准 WS/T 428-2013</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIBiao;
