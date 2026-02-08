import { Header } from "@/components/Header";
import { AlertTriangle, XCircle, CheckCircle2, Users, Dumbbell, Baby, Clock, Globe, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const BMIJuxianxing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-warning/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 text-warning text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            批判性分析
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-warning">BMI的局限性</span>：BMI无法告诉您什么
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            了解为什么BMI并不总是可靠的，以及有哪些更好的替代方案
          </p>
        </header>

        {/* Main Warning */}
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-warning mb-2">BMI是筛查工具，而非诊断标准</h3>
              <p className="text-muted-foreground">
                BMI由阿道夫·凯特勒于1832年发明，最初设计用于统计学上的人群研究，
                而非评估个人健康状况。它存在多项重要的局限性。
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Main Limitations */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI无法衡量的内容</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">无法区分肌肉和脂肪</h4>
                    <p className="text-sm text-muted-foreground">
                      BMI不区分肌肉和脂肪。对于BMI来说，1公斤肌肉等于1公斤脂肪。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">不考虑脂肪分布</h4>
                    <p className="text-sm text-muted-foreground">
                      腹部脂肪（内脏脂肪）比皮下脂肪更危险，但BMI无法识别这一点。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">骨密度</h4>
                    <p className="text-sm text-muted-foreground">
                      较重的骨骼会提高BMI值，但并不影响健康状况。
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">不考虑年龄和性别</h4>
                    <p className="text-sm text-muted-foreground">
                      随着年龄增长，身体成分会发生变化。男性和女性的脂肪分布也不同，但BMI使用相同的标准。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">不考虑种族差异</h4>
                    <p className="text-sm text-muted-foreground">
                      不同种族的体型和健康风险阈值不同。亚洲人群在较低BMI时就可能面临更高的健康风险。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">代谢健康</h4>
                    <p className="text-sm text-muted-foreground">
                      一个瘦的人可能有不良的代谢指标（胆固醇、血糖），而BMI无法反映这些。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Population-specific limitations */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <Users className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI不适用的人群</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Dumbbell className="w-5 h-5 text-orange-500" />
                  <h4 className="font-bold">运动员和健身者</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  高肌肉量会导致BMI显示"超重"甚至"肥胖"，但实际上体脂率可能很低。
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Baby className="w-5 h-5 text-cyan-500" />
                  <h4 className="font-bold">儿童和青少年</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  成人标准不适用于儿童。需要使用年龄和性别特定的百分位曲线来评估。
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold">老年人（&gt;65岁）</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  肌肉流失（肌少症）可能掩盖多余的脂肪。"正常"的BMI可能具有误导性。
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-pink-500" />
                  <h4 className="font-bold">孕妇</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  怀孕期间体重增加是正常且必要的。应以怀孕前的BMI作为参考基准。
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold">特定种族群体</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  亚洲人群在较低BMI时即面临更高健康风险。世卫组织建议调整标准（23而非25）。
                </p>
              </div>

              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Scale className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold">极端体型</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  身材特别高或特别矮的人，由于体表面积与体积的比例关系，BMI自然会有所不同。
                </p>
              </div>
            </div>
          </div>

          {/* Better alternatives */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI的更好替代方案</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">指标</th>
                    <th className="text-left py-3 px-4 font-bold">测量内容</th>
                    <th className="text-left py-3 px-4 font-bold">推荐标准</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">腰围</td>
                    <td className="py-3 px-4">腹部脂肪（内脏脂肪）</td>
                    <td className="py-3 px-4">&lt;94厘米（男）/ &lt;80厘米（女）</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">腰臀比</td>
                    <td className="py-3 px-4">脂肪分布</td>
                    <td className="py-3 px-4">&lt;0.90（男）/ &lt;0.85（女）</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">腰围身高比</td>
                    <td className="py-3 px-4">相对中心性脂肪</td>
                    <td className="py-3 px-4">&lt;0.5（腰围小于身高的一半）</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">体脂百分比</td>
                    <td className="py-3 px-4">实际身体成分</td>
                    <td className="py-3 px-4">10-20%（男）/ 18-28%（女）</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">FFMI（去脂体重指数）</td>
                    <td className="py-3 px-4">去脂体重（适用于运动员）</td>
                    <td className="py-3 px-4">18-25（自然水平）</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">DEXA扫描</td>
                    <td className="py-3 px-4">水分、肌肉、脂肪、骨骼</td>
                    <td className="py-3 px-4">因设备而异</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* When BMI is still useful */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">BMI在何时仍然有用</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                尽管存在局限性，BMI在某些情况下仍然是一个有价值的工具：
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>快速初步筛查</strong>：识别需要进一步详细检查的人群</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>流行病学研究</strong>：在大规模人群层面进行比较分析</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>个人体重监测</strong>：追踪个人体重随时间的变化趋势</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span><strong>普通久坐成年人</strong>：对于这一人群，BMI具有较好的参考价值</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">全面了解BMI的局限性</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>BMI的局限性</strong>众多，且已被科学界充分记录。这一<strong>BMI批判性分析</strong>不应被孤立解读。
                <strong>BMI的缺陷</strong>包括无法区分脂肪和肌肉、不考虑年龄和性别差异，以及忽略种族间的体型差异。
                了解更多关于<Link to="/zh/bmi-jiedu" className="text-primary hover:underline">如何正确解读BMI</Link>的信息。
              </p>
              <p>
                <strong>为什么BMI不够完善</strong>？因为它只是一个简单的数学公式（体重除以身高的平方）。
                <strong>BMI的问题</strong>在运动员、儿童和老年人中尤为明显。BMI<strong>是否可靠</strong>取决于使用的具体场景。
                查看我们的<Link to="/zh/bmi-biao" className="text-primary hover:underline">BMI分类表</Link>了解标准分类。
              </p>
              <p>
                <strong>BMI的替代方案</strong>如腰围测量、体脂百分比和DEXA扫描能够提供更全面的健康评估。
                <strong>BMI对所有人都可靠吗</strong>？答案是否定的，但结合其他健康指标一起使用时，
                它仍然是一个有用的初步筛查工具。
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">了解局限后，计算您的BMI</h3>
            <p className="text-muted-foreground mb-6">
              既然您已经了解了BMI的局限性，可以将我们的计算器作为初步参考指标
            </p>
            <Link
              to="/zh/bmi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              计算我的BMI
            </Link>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 BMI局限性 - 了解身体质量指数</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIJuxianxing;
