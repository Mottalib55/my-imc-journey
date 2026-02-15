import { Header } from "@/components/Header";
import { Heart, Activity, Apple, Moon, Brain, Scale, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const JiankangTizhong = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-success/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            健康与养生
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-success">健康与体重</span>：完整健康管理指南
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            了解体重、BMI与整体健康之间的关系
          </p>
        </header>

        <div className="space-y-8">
          {/* 引言 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Scale className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">体重与健康：一种复杂的关系</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong>体重</strong>只是反映您健康状况的众多指标之一。
                <strong>健康体重</strong>取决于许多因素：遗传、体型、体力活动、
                饮食、睡眠和心理健康。
              </p>
              <p>
                过度关注体重秤上的数字可能适得其反。比起追求一个精确的目标体重，
                更重要的是培养<strong>健康的生活习惯</strong>。
                健康不能仅仅用公斤来衡量。
              </p>
            </div>
          </div>

          {/* 健康风险 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">与体重相关的健康风险</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-warning">超重和肥胖的风险</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>心血管疾病（心肌梗死、中风）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>2型糖尿病</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>高血压</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>睡眠呼吸暂停综合征</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>某些类型的癌症</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <span>关节问题</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-info">体重过轻的风险</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>营养不良</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>免疫系统减弱</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>骨质疏松症</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>内分泌紊乱</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>慢性疲劳</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                    <span>生育问题</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 健康体重的支柱 */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">健康体重的六大支柱</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-green-500/10">
                    <Apple className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="font-bold">营养</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>优先选择天然未加工食品</li>
                  <li>每餐搭配蔬菜</li>
                  <li>限制添加糖的摄入</li>
                  <li>保证充足的水分摄入</li>
                  <li>倾听身体的饥饿与饱腹信号</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-orange-500/10">
                    <Activity className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold">运动</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>每周至少150分钟中等强度运动</li>
                  <li>加入力量训练</li>
                  <li>日常生活中多活动</li>
                  <li>选择自己喜欢的运动方式</li>
                  <li>循序渐进地提高强度</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10">
                    <Moon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="font-bold">睡眠</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>每晚保证7-9小时睡眠</li>
                  <li>保持规律的作息时间</li>
                  <li>睡前避免使用电子设备</li>
                  <li>保持卧室凉爽且黑暗</li>
                  <li>睡眠不足容易导致体重增加</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <Brain className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-bold">心理健康</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>学会管理压力</li>
                  <li>避免情绪化饮食</li>
                  <li>练习正念冥想</li>
                  <li>接纳自己的身体</li>
                  <li>必要时寻求专业帮助</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-pink-500/10">
                    <Heart className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="font-bold">医疗随访</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>每年进行健康体检</li>
                  <li>关注腰围变化</li>
                  <li>定期检测血压、血糖和胆固醇</li>
                  <li>必要时咨询营养师</li>
                  <li>不要盲目追求极端饮食</li>
                </ul>
              </div>

              <div className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-success/10">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="font-bold">进步追踪</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>设定切实可行的目标</li>
                  <li>每周减重不超过0.5-1公斤</li>
                  <li>庆祝每一个小小的进步</li>
                  <li>坚持比强度更重要</li>
                  <li>着眼长远发展</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 健康体重建议 */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">健康体重管理建议</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 text-success">有效方法</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>循序渐进、持之以恒</strong>地改变生活习惯</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>均衡饮食</strong>，而非极端限制饮食</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>规律且愉快</strong>的体育锻炼</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span><strong>高质量</strong>的睡眠（每晚7-8小时）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>管理好<strong>压力</strong>和情绪</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>必要时寻求<strong>专业人士</strong>的指导</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-destructive">无效方法</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>极端</strong>且限制性的节食</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>所谓的<strong>"神奇"</strong>保健品和减肥药</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span><strong>每天</strong>称体重（体重正常波动是普遍现象）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>设定<strong>不切实际</strong>的减重目标</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>将自己的身材与<strong>他人</strong>比较</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>忽视身体的<strong>饥饿/饱腹</strong>信号</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO 内容 */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-display font-bold mb-6">健康与体重：核心要点</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                保持<strong>健康体重</strong>对您的整体健康至关重要。<strong>体重与健康</strong>之间的关系
                是复杂的，受到众多因素的影响。<strong>BMI（身体质量指数）</strong>只是评估您是否处于健康
                体重范围内的指标之一。
              </p>
              <p>
                要想<strong>健康地减重</strong>或<strong>维持体重</strong>，请采取全面的方法：均衡饮食、
                规律运动、充足睡眠以及有效的压力管理。避免反复节食的"溜溜球效应"，这对健康有害。
              </p>
              <p>
                <strong>健康的生活方式</strong>比体重秤上的数字更重要。专注于<strong>生活习惯</strong>
                的改善，而不是体重本身。如有疑虑，请咨询健康专业人士，获取个性化的指导和建议。
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">计算您的BMI</h3>
            <p className="text-muted-foreground mb-6">
              评估健康体重的第一步指标
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
          <p>© 2024 健康与体重</p>
        </footer>
      </div>
    </div>
  );
};

export default JiankangTizhong;
