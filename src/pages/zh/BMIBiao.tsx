import { Header } from "@/components/Header";
import { Table as TableIcon, Scale, AlertTriangle, CheckCircle2, Heart, Activity } from "lucide-react";
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
            WHO分类
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">BMI分类表</span>：世界卫生组织完整标准
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            根据世界卫生组织（WHO）标准的所有BMI类别及健康风险详解
          </p>
        </header>

        <div className="space-y-8">
          {/* WHO BMI Classification Table */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">WHO成人BMI分类标准</h2>
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

          {/* Weight by Height Table */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">身高与体重对照表</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              不同身高对应各BMI类别的体重范围：
            </p>
            <div className="overflow-x-auto">
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
                    { h: 160, u: 47, nMin: 47, nMax: 64, sMin: 64, sMax: 77, o: 77 },
                    { h: 165, u: 50, nMin: 50, nMax: 68, sMin: 68, sMax: 81, o: 81 },
                    { h: 170, u: 53, nMin: 53, nMax: 72, sMin: 72, sMax: 87, o: 87 },
                    { h: 175, u: 57, nMin: 57, nMax: 76, sMin: 76, sMax: 92, o: 92 },
                    { h: 180, u: 60, nMin: 60, nMax: 81, sMin: 81, sMax: 97, o: 97 },
                    { h: 185, u: 63, nMin: 63, nMax: 85, sMin: 85, sMax: 102, o: 102 },
                    { h: 190, u: 67, nMin: 67, nMax: 90, sMin: 90, sMax: 108, o: 108 },
                  ].map((row) => (
                    <tr key={row.h} className="border-b border-border/50">
                      <td className="py-3 px-3 font-bold">{row.h} cm</td>
                      <td className="py-3 px-3 text-info">&lt;{row.u} kg</td>
                      <td className="py-3 px-3 text-success">{row.nMin}-{row.nMax} kg</td>
                      <td className="py-3 px-3 text-warning">{row.sMin}-{row.sMax} kg</td>
                      <td className="py-3 px-3 text-destructive">&gt;{row.o} kg</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
                    <td className="py-4 px-4 font-mono">18.5 - 24.9</td>
                    <td className="py-4 px-4 text-muted-foreground">标准WHO参考范围</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">25 - 34岁</td>
                    <td className="py-4 px-4 font-mono">19.0 - 25.0</td>
                    <td className="py-4 px-4 text-muted-foreground">新陈代谢开始变化</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">35 - 44岁</td>
                    <td className="py-4 px-4 font-mono">20.0 - 26.0</td>
                    <td className="py-4 px-4 text-muted-foreground">体脂比例逐渐增加</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">45 - 54岁</td>
                    <td className="py-4 px-4 font-mono">21.0 - 27.0</td>
                    <td className="py-4 px-4 text-muted-foreground">肌肉量自然减少</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">55 - 64岁</td>
                    <td className="py-4 px-4 font-mono">22.0 - 28.0</td>
                    <td className="py-4 px-4 text-muted-foreground">稍高的BMI可能具有保护作用</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">65岁及以上</td>
                    <td className="py-4 px-4 font-mono">23.0 - 29.0</td>
                    <td className="py-4 px-4 text-muted-foreground">需综合考虑肌肉流失与骨密度</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              注：以上数据为一般参考值，个体差异较大，建议咨询医生获取个性化建议。
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
                <h4 className="font-bold text-success mb-2">正常体重（BMI 18.5 - 24.9）</h4>
                <p className="text-muted-foreground">
                  BMI在18.5至24.9之间被WHO认定为正常体重范围。此范围内的人群患慢性疾病的
                  风险最低。维持正常体重有助于心血管健康、代谢功能正常运转以及关节健康。
                  建议通过均衡饮食和规律运动来保持这一理想范围。
                </p>
              </div>
              <div className="p-4 rounded-lg bg-warning/5 border-l-4 border-warning">
                <h4 className="font-bold text-warning mb-2">超重（BMI 25.0 - 29.9）</h4>
                <p className="text-muted-foreground">
                  BMI在25至29.9之间属于超重。超重人群患2型糖尿病、高血压和心血管疾病的
                  风险开始增加。此阶段通过调整饮食结构和增加体力活动，通常可以有效控制
                  体重。建议减少高热量食物的摄入，每周保持至少150分钟的中等强度运动。
                </p>
              </div>
              <div className="p-4 rounded-lg bg-destructive/5 border-l-4 border-destructive">
                <h4 className="font-bold text-destructive mb-2">肥胖I级（BMI 30.0 - 34.9）</h4>
                <p className="text-muted-foreground">
                  BMI在30至34.9之间属于中度肥胖。此阶段各种慢性疾病的风险显著升高，
                  包括心脏病、中风、2型糖尿病和某些类型的癌症。建议在医生指导下制定
                  科学的减重计划，可能需要结合饮食控制、运动治疗和行为干预。
                </p>
              </div>
              <div className="p-4 rounded-lg bg-destructive/5 border-l-4 border-destructive">
                <h4 className="font-bold text-destructive mb-2">肥胖II级（BMI 35.0 - 39.9）</h4>
                <p className="text-muted-foreground">
                  BMI在35至39.9之间属于重度肥胖。健康风险非常高，可能出现严重的呼吸系统
                  问题（如睡眠呼吸暂停）、关节疾病和代谢综合征。除了生活方式干预外，
                  可能还需要考虑药物治疗。建议寻求专业医疗团队的帮助。
                </p>
              </div>
              <div className="p-4 rounded-lg bg-destructive/10 border-l-4 border-destructive">
                <h4 className="font-bold text-destructive mb-2">肥胖III级（BMI ≥ 40）</h4>
                <p className="text-muted-foreground">
                  BMI达到或超过40属于病态肥胖，也称为极度肥胖。此时几乎所有器官系统
                  都会受到影响，预期寿命显著降低。可能需要考虑减重手术（如胃绕道手术或
                  袖状胃切除术）等干预措施。必须在专业医疗机构接受综合治疗和长期随访。
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
                    <span><strong>腰围</strong>：评估腹部脂肪堆积</span>
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
            <h2 className="text-2xl font-display font-bold mb-6">关于BMI分类表的全面解读</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>WHO BMI分类表</strong>是国际公认的体重评估参考标准。
                这份<strong>身体质量指数分类表</strong>定义了<strong>体重过轻</strong>、
                <strong>正常体重</strong>、<strong>超重</strong>和<strong>肥胖</strong>的界限值。
              </p>
              <p>
                <strong>BMI分类标准</strong>将体重过轻细分为三个等级（严重、中度、轻度），
                并将肥胖分为三个级别（I级、II级、III级）。<strong>成人BMI分类表</strong>适用于
                18岁及以上的成年人群。
              </p>
              <p>
                了解您的BMI分类有助于评估潜在健康风险。请参考上方的<strong>BMI对照表</strong>，
                根据您的身高和体重找到对应的类别。同时建议结合其他健康指标进行综合评估，
                以获得更全面准确的健康状况了解。
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
              使用我们的免费BMI计算器，查看您在分类表中的位置
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
          <p>&copy; 2024 BMI分类表</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIBiao;
