import { Header } from "@/components/Header";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

interface FAQItemProps { question: string; answer: string; }

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors">
        <span className="font-medium pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-muted-foreground">
          <div dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      )}
    </div>
  );
};

const BMIChangjianwenti = () => {
  const faqs = [
    {
      question: "什么是BMI？",
      answer: "<strong>身体质量指数（BMI）</strong>是一种用于评估人体体重是否健康的指标。它通过将体重（公斤）除以身高（米）的平方来计算。BMI的计算公式为：BMI = 体重(kg) / 身高(m)²。这是全球医疗专业人员广泛使用的一种快速筛查工具，由比利时数学家阿道夫·凯特勒于19世纪提出。"
    },
    {
      question: "如何计算BMI？",
      answer: "计算BMI非常简单：将您的体重（公斤）除以身高（米）的平方。例如：如果您体重70公斤，身高1.75米，则 BMI = 70 / (1.75 × 1.75) = 70 / 3.0625 = <strong>22.9</strong>。您也可以使用我们的<a href='/zh/bmi' class='text-primary hover:underline'>免费BMI计算器</a>来快速获取结果，无需手动计算。"
    },
    {
      question: "正常的BMI范围是多少？",
      answer: "根据世界卫生组织（WHO）的标准，<strong>正常BMI</strong>范围为<strong>18.5至24.9</strong>。具体分类如下：低于18.5为体重过轻，18.5至24.9为正常体重，25至29.9为超重，30及以上为肥胖。在这一正常范围内，健康风险最低。不过，理想的BMI值通常在21至22之间。您可以查看我们的<a href='/zh/bmi-biao' class='text-primary hover:underline'>BMI对照表</a>了解更多详情。"
    },
    {
      question: "BMI适用于所有人吗？",
      answer: "BMI作为一种通用指标，对大多数成年人是有效的，但它<strong>并不适用于所有人</strong>。以下人群的BMI结果可能不准确：<strong>1)</strong> 运动员和健身者（肌肉量较高），<strong>2)</strong> 孕妇，<strong>3)</strong> 老年人（65岁以上），<strong>4)</strong> 儿童和青少年（需使用年龄别BMI），<strong>5)</strong> 不同种族人群（亚洲人的健康BMI范围可能更低）。请参阅我们的<a href='/zh/bmi-jiedu' class='text-primary hover:underline'>BMI解读</a>页面获取详细信息。"
    },
    {
      question: "BMI和体脂率有什么区别？",
      answer: "<strong>BMI</strong>仅根据身高和体重进行计算，无法区分肌肉和脂肪。<strong>体脂率</strong>则直接测量身体中脂肪所占的比例。健康的体脂率因性别而异：男性一般为15-20%，女性一般为20-25%。体脂率可以通过皮脂钳、生物电阻抗分析（BIA）或DEXA扫描来测量。两者结合使用可以更全面地评估健康状况。"
    },
    {
      question: "运动员的BMI准确吗？",
      answer: "BMI对运动员来说<strong>往往不够准确</strong>。由于肌肉密度高于脂肪，肌肉发达的运动员体重较重，导致BMI偏高。例如，一名体脂率仅10%的健美运动员，其BMI可能超过30（被归类为&laquo;肥胖&raquo;）。对运动员而言，<strong>去脂体重指数（FFMI）</strong>、体脂率或腰围等指标更为可靠。"
    },
    {
      question: "儿童的BMI如何计算？",
      answer: "儿童的BMI计算公式与成人相同（体重/身高²），但<strong>结果的解读方式完全不同</strong>。成人的固定分类标准（18.5/25/30）不适用于儿童。儿童需要使用年龄别BMI百分位曲线来评估，这些曲线考虑了年龄和性别因素。一般来说：低于第5百分位为体重过轻，第5至85百分位为正常，第85至95百分位为超重，高于第95百分位为肥胖。建议咨询儿科医生进行专业评估。"
    },
    {
      question: "BMI过高怎么办？",
      answer: "如果您的BMI超过25，建议采取以下措施：<strong>1)</strong> 咨询医生进行全面健康评估，<strong>2)</strong> 建立适度的热量缺口（每天减少300-500千卡），<strong>3)</strong> 增加体力活动（每周至少150分钟中等强度运动），<strong>4)</strong> 选择均衡饮食，多吃蔬菜、水果、全谷物和优质蛋白质，<strong>5)</strong> 保证充足睡眠（7-8小时），<strong>6)</strong> 设定合理目标，每周减重0.5-1公斤为宜。持之以恒比快速减重更重要。"
    },
    {
      question: "BMI过低有什么风险？",
      answer: "BMI低于18.5属于<strong>体重过轻</strong>，可能带来以下健康风险：<strong>1)</strong> 免疫力下降，容易感染疾病，<strong>2)</strong> 骨质疏松风险增加，<strong>3)</strong> 营养不良和贫血，<strong>4)</strong> 肌肉流失和体力下降，<strong>5)</strong> 女性可能出现月经不调或不孕，<strong>6)</strong> 伤口愈合缓慢，<strong>7)</strong> 心理健康问题如抑郁和焦虑。如果您的BMI过低，建议咨询医生或营养师，制定健康的增重计划。"
    },
    {
      question: "多久应该测量一次BMI？",
      answer: "对于一般成年人，建议<strong>每3至6个月</strong>测量一次BMI。但以下情况可能需要更频繁地监测：<strong>1)</strong> 正在进行减重或增重计划时，每月测量一次，<strong>2)</strong> 患有慢性疾病（如糖尿病、高血压）时，遵医嘱定期监测，<strong>3)</strong> 儿童和青少年在每次体检时都应测量。需要注意的是，短期内的体重波动是正常的，不必过于焦虑。建议在每次测量时保持相同条件（如早晨空腹、穿轻便衣物）。"
    },
    {
      question: "BMI和健康的关系是什么？",
      answer: "BMI与多种<strong>健康风险</strong>密切相关。研究表明：BMI过高会增加患<strong>2型糖尿病</strong>、<strong>心血管疾病</strong>、<strong>高血压</strong>、某些癌症和关节问题的风险。BMI过低则与营养不良、免疫力低下和骨质疏松相关。然而，BMI并非唯一的健康指标。腰围、血压、血糖、血脂等指标同样重要。健康的生活方式——均衡饮食、规律运动、充足睡眠和良好的心理状态——比单纯追求某个BMI数值更为重要。"
    },
    {
      question: "有哪些BMI的替代指标？",
      answer: "除BMI外，还有多种评估身体成分和健康风险的指标：<strong>1)</strong> <strong>腰围</strong>——男性应低于90厘米，女性应低于80厘米（亚洲标准），<strong>2)</strong> <strong>腰臀比（WHR）</strong>——衡量腹部脂肪分布，<strong>3)</strong> <strong>体脂率</strong>——直接测量脂肪比例，<strong>4)</strong> <strong>去脂体重指数（FFMI）</strong>——特别适合运动人群，<strong>5)</strong> <strong>内脏脂肪指数</strong>——评估内脏脂肪水平，<strong>6)</strong> <strong>身体形态指数（ABSI）</strong>——结合腰围、身高和BMI的综合指标。建议将多种指标结合使用，以获得更全面的健康评估。"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-4xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            常见问题
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">BMI常见问题</span>：关于BMI的所有问题解答
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            关于身体质量指数（BMI）最常见问题的详细解答
          </p>
        </header>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">立即计算您的BMI</h3>
          <p className="text-muted-foreground mb-6">使用我们的免费计算器，快速了解您的身体质量指数</p>
          <Link to="/zh/bmi" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">计算我的BMI</Link>
        </div>

        <div className="glass-card p-8 mt-8">
          <h2 className="text-2xl font-display font-bold mb-6">全面了解BMI</h2>
          <div className="text-muted-foreground space-y-4">
            <p>本<strong>BMI常见问题</strong>页面解答了关于身体质量指数计算和解读的最常见问题。无论您想了解<strong>如何计算BMI</strong>、<strong>正常BMI范围是多少</strong>，还是<strong>BMI是否可靠</strong>，这里都能找到答案。</p>
            <p>BMI是一个简单而实用的体重评估工具，但它也有其局限性，应结合其他健康指标综合判断。如需全面的健康评估，建议咨询专业医生。您也可以查看我们的<a href="/zh/bmi-biao" className="text-primary hover:underline">BMI对照表</a>和<a href="/zh/bmi-jiedu" className="text-primary hover:underline">BMI解读指南</a>获取更多信息。</p>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 BMI常见问题</p>
        </footer>
      </div>
    </div>
  );
};

export default BMIChangjianwenti;
