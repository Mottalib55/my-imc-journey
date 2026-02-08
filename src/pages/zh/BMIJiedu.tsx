import { Header } from "@/components/Header";
import { HelpCircle, AlertTriangle, CheckCircle2, Scale, Activity, Heart } from "lucide-react";
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
            理解您的结果
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">BMI解读</span>：如何理解您的BMI结果
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            了解您的BMI结果意味着什么，以及如何在正确的背景下进行解读
          </p>
        </header>

        <div className="space-y-8">
          {/* 什么是BMI */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">您的BMI意味着什么？</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>BMI</strong>（身体质量指数）是一个可以快速评估您的体重是否与身高相称的指标。
                它的计算方法是将体重（公斤）除以身高（米）的平方。
              </p>
              <p>
                <strong>重要提示：</strong>BMI是一种筛查工具，而非诊断依据。医生会综合考虑其他因素
                （腰围、肌肉量、病史等）来全面评估您的健康状况。
              </p>
            </div>
          </div>

          {/* 各类别详解 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">各类别详解</h2>
            </div>

            <div className="space-y-6">
              {/* 体重过轻 */}
              <div className="border-l-4 border-info pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <Scale className="w-5 h-5 text-info" />
                  <h3 className="font-bold text-lg">BMI低于18.5：体重过轻</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  BMI低于18.5表明体重不足。这可能意味着：
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• 热量摄入不足</li>
                  <li>• 新陈代谢过快</li>
                  <li>• 可能存在饮食障碍</li>
                  <li>• 有营养缺乏的风险</li>
                </ul>
                <p className="text-info font-medium mt-3">
                  建议：请咨询医生以找出原因，并调整您的饮食方案。
                </p>
              </div>

              {/* 正常体重 */}
              <div className="border-l-4 border-success pl-6 py-4 bg-success/5 rounded-r-xl">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <h3 className="font-bold text-lg">BMI在18.5至24.9之间：正常体重</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  这是最理想的范围！您的体重与身高比例均衡。
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• 健康风险最低</li>
                  <li>• 良好的能量平衡</li>
                  <li>• 目标：保持当前体重</li>
                </ul>
                <p className="text-success font-medium mt-3">
                  建议：继续保持良好的饮食习惯和规律的体育锻炼。
                </p>
              </div>

              {/* 超重 */}
              <div className="border-l-4 border-warning pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  <h3 className="font-bold text-lg">BMI在25至29.9之间：超重</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  您的体重略微超出正常范围。这是一个预警信号，但不必恐慌。
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• 患慢性疾病的风险增加</li>
                  <li>• 可能伴有血压偏高</li>
                  <li>• 对于运动员，可能是由于肌肉量较大所致</li>
                </ul>
                <p className="text-warning font-medium mt-3">
                  建议：采取均衡的饮食方式，并增加日常体育活动。
                </p>
              </div>

              {/* 肥胖 */}
              <div className="border-l-4 border-destructive pl-6 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-destructive" />
                  <h3 className="font-bold text-lg">BMI超过30：肥胖</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  肥胖会显著增加多种健康风险。
                </p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• I级肥胖（30-34.9）：轻度肥胖</li>
                  <li>• II级肥胖（35-39.9）：中度肥胖</li>
                  <li>• III级肥胖（≥40）：重度肥胖</li>
                </ul>
                <p className="text-destructive font-medium mt-3">
                  建议：强烈建议就医咨询，以获得个性化的专业指导。
                </p>
              </div>
            </div>
          </div>

          {/* 影响解读的因素 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">影响BMI解读的因素</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">BMI可能受以下因素影响：</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>肌肉量</strong>：运动员的BMI通常偏高</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>年龄</strong>：老年人会逐渐流失肌肉量</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>性别</strong>：女性天然拥有更高的体脂比例</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>种族</strong>：不同人群有不同的健康阈值</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span><strong>骨骼结构</strong>：骨架大小会影响总体重</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">补充评估指标：</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>腰围</strong>：男性&lt;94厘米 / 女性&lt;80厘米</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>腰臀比</strong>：反映脂肪分布情况</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>体脂率</strong>：真实的身体成分构成</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span><strong>血液检查</strong>：胆固醇、血糖等</span>
                  </li>
                </ul>
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
                    <span>普通成年人（18-65岁）的体重评估</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span>大规模人群的健康风险筛查</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span>长期体重变化趋势的追踪</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span>作为初步健康评估的参考</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-destructive">BMI不太可靠的情况：</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>专业运动员和健美人士（肌肉量大）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>孕妇和哺乳期女性</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>儿童和青少年（需使用年龄百分位数）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <span>65岁以上的老年人</span>
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
                在以下情况下，我们建议您尽快咨询专业医生：
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>BMI超出正常范围</strong>（低于18.5或高于25），尤其是伴有其他症状时</li>
                <li><strong>体重在短时间内急剧变化</strong>，无论是增加还是减少</li>
                <li><strong>腰围超标</strong>：男性超过94厘米，女性超过80厘米</li>
                <li><strong>伴有相关健康问题</strong>：高血压、高血糖、高胆固醇等</li>
                <li><strong>家族中有肥胖或代谢疾病史</strong></li>
                <li><strong>饮食或运动习惯改变后体重无变化</strong></li>
              </ol>
              <p>
                请记住：BMI只是健康评估的起点。专业医生能够结合多种指标，
                为您提供更全面、更个性化的健康建议。
              </p>
            </div>
          </div>

          {/* 根据结果采取行动 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">根据结果采取行动</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                您的BMI只是一个起点。以下是建议的后续步骤：
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>记录您当前的BMI</strong>作为参考基准</li>
                <li><strong>测量腰围</strong>以补充BMI评估</li>
                <li><strong>如果BMI超出正常范围，请咨询医生</strong></li>
                <li><strong>设定合理目标</strong>：每周减重不超过0.5-1公斤</li>
                <li><strong>定期追踪变化</strong>：每周同一天、同一时间测量一次体重</li>
              </ol>
            </div>
          </div>

          {/* SEO内容 */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">深入了解BMI解读</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>BMI解读</strong>对于理解您的<strong>身体质量指数结果</strong>至关重要。
                学会<strong>如何解读BMI</strong>，可以帮助您判断自己是否处于健康的体重范围内，
                或者是否需要做出调整。
              </p>
              <p>
                <strong>如何理解BMI</strong>？世界卫生组织（WHO）的分类标准清晰地定义了
                <strong>BMI为22、25或30分别代表什么含义</strong>。<strong>BMI分析</strong>
                必须始终考虑具体背景：年龄、性别、体育活动水平和种族因素。
              </p>
              <p>
                <strong>理想的BMI</strong>介于18.5到24.9之间。<strong>理解BMI</strong>
                还意味着认识到这一指数存在局限性。完整的<strong>BMI解读</strong>
                需要结合其他指标，例如腰围、体脂率和
                <Link to="/zh/bmi-juxianxing" className="text-primary hover:underline">BMI的局限性</Link>。
                您还可以参考我们的<Link to="/zh/bmi-biao" className="text-primary hover:underline">BMI对照表</Link>
                来快速了解各个范围的含义。
              </p>
            </div>
          </div>

          {/* 行动号召 */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">立即计算您的BMI</h3>
            <p className="text-muted-foreground mb-6">
              使用我们的免费计算器，快速获取您的身体质量指数
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
          <p>&copy; 2024 BMI解读</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIJiedu;
