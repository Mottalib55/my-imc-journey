import type { Lang } from "./routes";

export const sectionHeadings: Record<Lang, string> = {
  fr: "Pages connexes",
  en: "Related Pages",
  es: "Páginas relacionadas",
  pt: "Páginas relacionadas",
  ar: "صفحات ذات صلة",
  de: "Verwandte Seiten",
  it: "Pagine correlate",
  hi: "संबंधित पृष्ठ",
  zh: "相关页面",
};

export const relatedPagesData: Record<
  string,
  Record<Lang, { title: string; description: string }>
> = {
  main: {
    fr: {
      title: "Calculer votre IMC",
      description: "Calculez votre indice de masse corporelle et découvrez votre catégorie de poids.",
    },
    en: {
      title: "Calculate Your BMI",
      description: "Compute your body mass index and find out your weight category instantly.",
    },
    es: {
      title: "Calcular su IMC",
      description: "Calcule su índice de masa corporal y descubra su categoría de peso al instante.",
    },
    pt: {
      title: "Calcular seu IMC",
      description: "Calcule o seu índice de massa corporal e descubra a sua faixa de peso.",
    },
    ar: {
      title: "احسب مؤشر كتلة جسمك",
      description: "احسب مؤشر كتلة الجسم واكتشف فئة وزنك على الفور.",
    },
    de: {
      title: "Ihren BMI berechnen",
      description: "Berechnen Sie Ihren Body-Mass-Index und erfahren Sie Ihre Gewichtskategorie.",
    },
    it: {
      title: "Calcola il tuo IMC",
      description: "Calcola il tuo indice di massa corporea e scopri la tua categoria di peso.",
    },
    hi: {
      title: "अपना BMI गणना करें",
      description: "अपना बॉडी मास इंडेक्स गणना करें और अपनी वजन श्रेणी जानें।",
    },
    zh: {
      title: "计算您的BMI",
      description: "计算您的身体质量指数，即时了解您的体重类别。",
    },
  },
  men: {
    fr: {
      title: "IMC spécifique aux hommes",
      description: "Évaluez votre IMC avec des seuils adaptés à la morphologie masculine.",
    },
    en: {
      title: "BMI for Men",
      description: "Assess your BMI with thresholds tailored to male body composition and muscle mass.",
    },
    es: {
      title: "IMC para hombres",
      description: "Evalúe su IMC con umbrales adaptados a la composición corporal masculina.",
    },
    pt: {
      title: "IMC para homens",
      description: "Avalie seu IMC com parâmetros adaptados à composição corporal masculina.",
    },
    ar: {
      title: "مؤشر كتلة الجسم للرجال",
      description: "قيّم مؤشر كتلة جسمك بمعايير مخصصة لتكوين الجسم الذكوري.",
    },
    de: {
      title: "BMI für Männer",
      description: "Bewerten Sie Ihren BMI mit Schwellenwerten für die männliche Körperzusammensetzung.",
    },
    it: {
      title: "IMC per uomini",
      description: "Valuta il tuo IMC con soglie adattate alla composizione corporea maschile.",
    },
    hi: {
      title: "पुरुषों के लिए BMI",
      description: "पुरुष शरीर संरचना के अनुसार अपने BMI का मूल्यांकन करें।",
    },
    zh: {
      title: "男性BMI计算",
      description: "使用适合男性体成分和肌肉量的标准评估您的BMI。",
    },
  },
  women: {
    fr: {
      title: "IMC spécifique aux femmes",
      description: "Analysez votre IMC avec des repères adaptés à la physiologie féminine.",
    },
    en: {
      title: "BMI for Women",
      description: "Analyze your BMI with benchmarks suited to female physiology and fat distribution.",
    },
    es: {
      title: "IMC para mujeres",
      description: "Analice su IMC con referencias adaptadas a la fisiología femenina.",
    },
    pt: {
      title: "IMC para mulheres",
      description: "Analise seu IMC com referências adaptadas à fisiologia feminina.",
    },
    ar: {
      title: "مؤشر كتلة الجسم للنساء",
      description: "حللي مؤشر كتلة جسمك بمعايير مناسبة لفسيولوجيا المرأة.",
    },
    de: {
      title: "BMI für Frauen",
      description: "Analysieren Sie Ihren BMI mit Richtwerten für die weibliche Physiologie.",
    },
    it: {
      title: "IMC per donne",
      description: "Analizza il tuo IMC con parametri adatti alla fisiologia femminile.",
    },
    hi: {
      title: "महिलाओं के लिए BMI",
      description: "महिला शरीर विज्ञान के अनुसार अपने BMI का विश्लेषण करें।",
    },
    zh: {
      title: "女性BMI计算",
      description: "使用适合女性生理和脂肪分布的标准分析您的BMI。",
    },
  },
  athletes: {
    fr: {
      title: "IMC adapté aux sportifs",
      description: "Comprenez pourquoi l'IMC standard sous-estime la forme physique des athlètes.",
    },
    en: {
      title: "BMI for Athletes",
      description: "Understand why standard BMI underestimates fitness in muscular and athletic bodies.",
    },
    es: {
      title: "IMC para deportistas",
      description: "Comprenda por qué el IMC estándar subestima la condición física de los atletas.",
    },
    pt: {
      title: "IMC para atletas",
      description: "Entenda por que o IMC padrão subestima a condição física dos atletas.",
    },
    ar: {
      title: "مؤشر كتلة الجسم للرياضيين",
      description: "افهم لماذا مؤشر كتلة الجسم القياسي يقلل من تقدير اللياقة البدنية للرياضيين.",
    },
    de: {
      title: "BMI für Sportler",
      description: "Verstehen Sie, warum der Standard-BMI die Fitness von Sportlern unterschätzt.",
    },
    it: {
      title: "IMC per sportivi",
      description: "Scopri perché l'IMC standard sottovaluta la forma fisica degli atleti.",
    },
    hi: {
      title: "खिलाड़ियों के लिए BMI",
      description: "समझें कि मानक BMI एथलीटों की फिटनेस को कम क्यों आंकता है।",
    },
    zh: {
      title: "运动员BMI计算",
      description: "了解为什么标准BMI会低估运动员和肌肉发达人群的健康水平。",
    },
  },
  children: {
    fr: {
      title: "IMC pour enfants et adolescents",
      description: "Suivez la croissance de votre enfant avec les courbes de percentiles par âge et sexe.",
    },
    en: {
      title: "BMI for Children & Teens",
      description: "Track your child's growth using age- and sex-specific BMI percentile charts.",
    },
    es: {
      title: "IMC para niños y adolescentes",
      description: "Siga el crecimiento de su hijo con las curvas de percentiles por edad y sexo.",
    },
    pt: {
      title: "IMC para crianças e adolescentes",
      description: "Acompanhe o crescimento do seu filho com curvas de percentis por idade e sexo.",
    },
    ar: {
      title: "مؤشر كتلة الجسم للأطفال",
      description: "تابع نمو طفلك باستخدام مخططات المئين حسب العمر والجنس.",
    },
    de: {
      title: "BMI für Kinder & Jugendliche",
      description: "Verfolgen Sie das Wachstum Ihres Kindes mit alters- und geschlechtsspezifischen Perzentilen.",
    },
    it: {
      title: "IMC per bambini e ragazzi",
      description: "Segui la crescita del tuo bambino con le curve dei percentili per età e sesso.",
    },
    hi: {
      title: "बच्चों और किशोरों के लिए BMI",
      description: "उम्र और लिंग के अनुसार BMI परसेंटाइल चार्ट से अपने बच्चे की वृद्धि ट्रैक करें।",
    },
    zh: {
      title: "儿童和青少年BMI",
      description: "使用按年龄和性别的BMI百分位数图表追踪孩子的成长。",
    },
  },
  table: {
    fr: {
      title: "Tableau des catégories d'IMC",
      description: "Consultez le tableau complet des catégories OMS : maigreur, normal, surpoids, obésité.",
    },
    en: {
      title: "BMI Classification Table",
      description: "View the complete WHO classification table: underweight, normal, overweight, and obese ranges.",
    },
    es: {
      title: "Tabla de clasificación del IMC",
      description: "Consulte la tabla completa de clasificación de la OMS con todas las categorías de peso.",
    },
    pt: {
      title: "Tabela de classificação do IMC",
      description: "Veja a tabela completa de classificação da OMS com todas as faixas de peso.",
    },
    ar: {
      title: "جدول تصنيف مؤشر كتلة الجسم",
      description: "اطلع على جدول تصنيف منظمة الصحة العالمية الكامل لفئات الوزن.",
    },
    de: {
      title: "BMI-Klassifikationstabelle",
      description: "Sehen Sie die vollständige WHO-Klassifikationstabelle aller Gewichtskategorien.",
    },
    it: {
      title: "Tabella di classificazione IMC",
      description: "Consulta la tabella completa di classificazione OMS con tutte le categorie di peso.",
    },
    hi: {
      title: "BMI वर्गीकरण तालिका",
      description: "WHO वर्गीकरण तालिका देखें: कम वजन, सामान्य, अधिक वजन और मोटापे की श्रेणियां।",
    },
    zh: {
      title: "BMI分类表",
      description: "查看世界卫生组织完整分类表：体重过轻、正常、超重和肥胖范围。",
    },
  },
  interpretation: {
    fr: {
      title: "Comment interpréter votre IMC",
      description: "Apprenez à lire votre résultat d'IMC et à comprendre ce qu'il signifie pour votre santé.",
    },
    en: {
      title: "How to Interpret Your BMI",
      description: "Learn to read your BMI result and understand what it means for your overall health.",
    },
    es: {
      title: "Cómo interpretar su IMC",
      description: "Aprenda a leer su resultado de IMC y a entender su significado para su salud.",
    },
    pt: {
      title: "Como interpretar seu IMC",
      description: "Aprenda a ler seu resultado de IMC e entenda o que ele significa para sua saúde.",
    },
    ar: {
      title: "كيف تفسر مؤشر كتلة جسمك",
      description: "تعلم كيف تقرأ نتيجة مؤشر كتلة الجسم وما تعنيه لصحتك العامة.",
    },
    de: {
      title: "Ihren BMI richtig deuten",
      description: "Lernen Sie, Ihr BMI-Ergebnis zu lesen und was es für Ihre Gesundheit bedeutet.",
    },
    it: {
      title: "Come interpretare il tuo IMC",
      description: "Impara a leggere il tuo risultato IMC e a capire cosa significa per la tua salute.",
    },
    hi: {
      title: "अपने BMI की व्याख्या कैसे करें",
      description: "अपने BMI परिणाम को पढ़ना और अपने स्वास्थ्य के लिए इसका अर्थ समझना सीखें।",
    },
    zh: {
      title: "如何解读您的BMI",
      description: "学习如何阅读BMI结果并理解它对您整体健康的意义。",
    },
  },
  limitations: {
    fr: {
      title: "Limites et biais de l'IMC",
      description: "Découvrez pourquoi l'IMC seul ne suffit pas et quelles alternatives existent.",
    },
    en: {
      title: "BMI Limitations & Biases",
      description: "Discover why BMI alone is not enough and what alternative metrics complement it.",
    },
    es: {
      title: "Limitaciones y sesgos del IMC",
      description: "Descubra por qué el IMC solo no es suficiente y qué alternativas existen.",
    },
    pt: {
      title: "Limitações e vieses do IMC",
      description: "Descubra por que o IMC sozinho não é suficiente e quais alternativas existem.",
    },
    ar: {
      title: "حدود وتحيزات مؤشر كتلة الجسم",
      description: "اكتشف لماذا مؤشر كتلة الجسم وحده لا يكفي وما هي البدائل المتاحة.",
    },
    de: {
      title: "Grenzen und Verzerrungen des BMI",
      description: "Erfahren Sie, warum der BMI allein nicht ausreicht und welche Alternativen es gibt.",
    },
    it: {
      title: "Limiti e distorsioni dell'IMC",
      description: "Scopri perché l'IMC da solo non è sufficiente e quali alternative esistono.",
    },
    hi: {
      title: "BMI की सीमाएं और पूर्वाग्रह",
      description: "जानें कि अकेला BMI क्यों पर्याप्त नहीं है और कौन से वैकल्पिक मापदंड हैं।",
    },
    zh: {
      title: "BMI的局限性与偏差",
      description: "了解为什么BMI本身不够充分以及有哪些替代指标可以补充。",
    },
  },
  faq: {
    fr: {
      title: "Questions fréquentes sur l'IMC",
      description: "Réponses aux questions les plus courantes sur le calcul et l'utilisation de l'IMC.",
    },
    en: {
      title: "BMI Frequently Asked Questions",
      description: "Answers to the most common questions about BMI calculation and usage.",
    },
    es: {
      title: "Preguntas frecuentes sobre el IMC",
      description: "Respuestas a las preguntas más comunes sobre el cálculo y uso del IMC.",
    },
    pt: {
      title: "Perguntas frequentes sobre o IMC",
      description: "Respostas às perguntas mais comuns sobre o cálculo e uso do IMC.",
    },
    ar: {
      title: "أسئلة شائعة حول مؤشر كتلة الجسم",
      description: "إجابات على الأسئلة الأكثر شيوعاً حول حساب واستخدام مؤشر كتلة الجسم.",
    },
    de: {
      title: "Häufige Fragen zum BMI",
      description: "Antworten auf die häufigsten Fragen zur BMI-Berechnung und -Nutzung.",
    },
    it: {
      title: "Domande frequenti sull'IMC",
      description: "Risposte alle domande più comuni sul calcolo e l'utilizzo dell'IMC.",
    },
    hi: {
      title: "BMI के बारे में अक्सर पूछे जाने वाले प्रश्न",
      description: "BMI गणना और उपयोग के बारे में सबसे आम सवालों के जवाब।",
    },
    zh: {
      title: "BMI常见问题",
      description: "关于BMI计算和使用最常见问题的解答。",
    },
  },
  health: {
    fr: {
      title: "Santé, poids et bien-être",
      description: "Explorez le lien entre poids corporel, habitudes de vie et santé globale.",
    },
    en: {
      title: "Health, Weight & Wellness",
      description: "Explore the link between body weight, lifestyle habits, and overall wellness.",
    },
    es: {
      title: "Salud, peso y bienestar",
      description: "Explore la relación entre peso corporal, hábitos de vida y bienestar general.",
    },
    pt: {
      title: "Saúde, peso e bem-estar",
      description: "Explore a relação entre peso corporal, hábitos de vida e bem-estar geral.",
    },
    ar: {
      title: "الصحة والوزن والعافية",
      description: "استكشف العلاقة بين وزن الجسم وعادات الحياة والصحة العامة.",
    },
    de: {
      title: "Gesundheit, Gewicht & Wohlbefinden",
      description: "Entdecken Sie den Zusammenhang zwischen Körpergewicht, Lebensgewohnheiten und Wohlbefinden.",
    },
    it: {
      title: "Salute, peso e benessere",
      description: "Esplora il legame tra peso corporeo, abitudini di vita e benessere generale.",
    },
    hi: {
      title: "स्वास्थ्य, वजन और कल्याण",
      description: "शरीर के वजन, जीवनशैली की आदतों और समग्र कल्याण के बीच संबंध जानें।",
    },
    zh: {
      title: "健康、体重与健康生活",
      description: "探索体重、生活习惯与整体健康之间的联系。",
    },
  },
};
