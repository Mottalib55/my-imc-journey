export interface PageSEO {
  path: string;
  lang: string;
  title: string;
  description: string;
}

export const defaultSEO: PageSEO[] = [
  // --- Français ---
  {
    path: "/imc",
    lang: "fr",
    title: "Calcul IMC Gratuit en Ligne : Calculateur Instantané | IMC",
    description: "Calculez votre IMC instantanément avec notre calculateur gratuit. Découvrez votre indice de masse corporelle, votre poids idéal et des conseils santé.",
  },
  {
    path: "/imc-homme",
    lang: "fr",
    title: "IMC Homme : Calcul IMC Masculin et Poids Idéal | IMC",
    description: "Calculez l'IMC homme avec notre outil gratuit et spécialisé. Tableau IMC masculin, poids idéal par taille et conseils santé adaptés à la morphologie masculine.",
  },
  {
    path: "/imc-femme",
    lang: "fr",
    title: "IMC Femme : Calcul IMC Féminin et Poids Idéal | IMC",
    description: "Calculez l'IMC femme avec notre outil dédié et gratuit. Tableau IMC féminin, poids idéal, facteurs hormonaux et conseils pratiques pour chaque étape de vie.",
  },
  {
    path: "/imc-sportif",
    lang: "fr",
    title: "IMC Sportif : Limites du BMI pour les Athlètes | IMC",
    description: "Pourquoi l'IMC est biaisé pour les sportifs et musculation. Découvrez le FFMI et les meilleures alternatives pour évaluer votre composition corporelle.",
  },
  {
    path: "/imc-enfant",
    lang: "fr",
    title: "IMC Enfant et Adolescent : Calculateur Pédiatrique | IMC",
    description: "Calculez l'IMC de votre enfant ou adolescent avec les courbes de croissance OMS. Interprétation par âge et sexe, seuils pédiatriques et conseils pratiques.",
  },
  {
    path: "/tableau-imc",
    lang: "fr",
    title: "Tableau IMC Complet : Classification OMS Détaillée | IMC",
    description: "Tableau complet des catégories IMC selon l'OMS avec seuils détaillés. Maigreur, poids normal, surpoids et obésité avec exemples par taille et recommandations.",
  },
  {
    path: "/interpretation-imc",
    lang: "fr",
    title: "Interprétation IMC : Comprendre vos Résultats | IMC",
    description: "Comment interpréter votre résultat IMC correctement et simplement. Signification de chaque catégorie, limites à connaître et facteurs essentiels à considérer.",
  },
  {
    path: "/limites-imc",
    lang: "fr",
    title: "Limites de l'IMC : Ce que l'Indice ne Dit Pas | IMC",
    description: "Découvrez les limites du calcul IMC et pourquoi l'indice de masse corporelle n'est pas toujours fiable. Les meilleures alternatives à utiliser à la place.",
  },
  {
    path: "/faq-imc",
    lang: "fr",
    title: "FAQ IMC : Les Réponses aux Questions sur l'IMC | IMC",
    description: "Réponses aux questions les plus fréquentes sur l'IMC. Comment le calculer, bien interpréter vos résultats et utiliser l'indice de masse corporelle au quotidien.",
  },
  {
    path: "/sante-et-poids",
    lang: "fr",
    title: "Santé et Poids : Guide Nutrition et Poids Idéal | IMC",
    description: "Tout savoir sur la relation entre poids et santé. Conseils nutrition, activité physique, prévention des risques et maintien d'un poids santé idéal au quotidien.",
  },

  // --- English ---
  {
    path: "/",
    lang: "en",
    title: "Free BMI Calculator Online : Body Mass Index | BMI",
    description: "Calculate your BMI instantly with our free Body Mass Index calculator. Get personalized health insights, your ideal weight range and practical wellness advice.",
  },
  {
    path: "/bmi-men",
    lang: "en",
    title: "BMI for Men : Male BMI Calculator & Ideal Weight | BMI",
    description: "Calculate BMI for men with our free specialized tool. Male BMI chart, ideal weight by height, personalized health advice and practical tips for adult men.",
  },
  {
    path: "/bmi-women",
    lang: "en",
    title: "BMI for Women : Female BMI Calculator & Chart | BMI",
    description: "Calculate BMI for women with our dedicated free tool. Female BMI chart, ideal weight range, hormonal factors and tailored advice for every stage of your life.",
  },
  {
    path: "/bmi-athletes",
    lang: "en",
    title: "BMI for Athletes : Why BMI Fails Muscular People | BMI",
    description: "Why BMI is inaccurate for athletes and bodybuilders. Discover FFMI and better alternatives to accurately assess your real body composition and fitness progress.",
  },
  {
    path: "/bmi-children",
    lang: "en",
    title: "BMI for Kids & Teens : Pediatric BMI Calculator | BMI",
    description: "Calculate your child's BMI with WHO growth charts by age and gender. Get accurate pediatric BMI interpretation and practical healthy weight guidance for kids.",
  },
  {
    path: "/bmi-table",
    lang: "en",
    title: "BMI Chart & Table : Complete WHO Classification | BMI",
    description: "Complete BMI classification table based on WHO standards. Underweight, normal weight, overweight and obesity thresholds with detailed examples sorted by height.",
  },
  {
    path: "/bmi-interpretation",
    lang: "en",
    title: "BMI Interpretation : Understanding Your Results | BMI",
    description: "How to interpret your BMI results accurately and simply. What each BMI category means, key limitations to consider, and when to consult a healthcare provider.",
  },
  {
    path: "/bmi-limitations",
    lang: "en",
    title: "BMI Limitations : What Body Mass Index Doesn't Tell | BMI",
    description: "Understand the limitations of BMI as a health indicator. Why Body Mass Index isn't always accurate and what better alternatives you should use for your health.",
  },
  {
    path: "/bmi-faq",
    lang: "en",
    title: "BMI FAQ : Common Questions About Body Mass Index | BMI",
    description: "Answers to the most common questions about BMI. Learn how to accurately calculate, interpret, and use Body Mass Index for your health and wellness effectively.",
  },
  {
    path: "/health-weight",
    lang: "en",
    title: "Health & Weight : Your Complete Guide to Well-Being | BMI",
    description: "Everything about the relationship between weight and health. Nutrition tips, physical activity guidance, prevention advice and maintaining a healthy weight.",
  },

  // --- Español ---
  {
    path: "/es/imc",
    lang: "es",
    title: "Calculadora IMC Gratis Online : Masa Corporal | IMC",
    description: "Calcula tu IMC al instante con nuestra calculadora online gratuita. Descubre tu índice de masa corporal, peso ideal y consejos de salud personalizados.",
  },
  {
    path: "/es/imc-hombre",
    lang: "es",
    title: "IMC Hombre : Calculadora IMC Masculino y Peso | IMC",
    description: "Calcula el IMC masculino con nuestra herramienta gratuita y especializada. Tabla IMC hombre, peso ideal según altura y consejos de salud adaptados para hombres.",
  },
  {
    path: "/es/imc-mujer",
    lang: "es",
    title: "IMC Mujer : Calculadora de IMC Femenino y Peso | IMC",
    description: "Calcula el IMC femenino con nuestra herramienta dedicada y gratuita. Tabla IMC mujer, peso ideal, factores hormonales y consejos adaptados por etapa de la vida.",
  },
  {
    path: "/es/imc-deportista",
    lang: "es",
    title: "IMC Deportista : Los Límites del IMC en Atletas | IMC",
    description: "Por qué el IMC es inexacto para deportistas y culturistas. Descubre el FFMI y las mejores alternativas para evaluar tu composición corporal con precisión.",
  },
  {
    path: "/es/imc-nino",
    lang: "es",
    title: "IMC Niños y Adolescentes : Calculadora Infantil | IMC",
    description: "Calcula el IMC de tu hijo con tablas específicas por edad y sexo. Curvas de crecimiento OMS, interpretación pediátrica y consejos nutricionales prácticos.",
  },
  {
    path: "/es/tabla-imc",
    lang: "es",
    title: "Tabla IMC Completa : Clasificación OMS Detallada | IMC",
    description: "Tabla completa de categorías IMC según la OMS con umbrales detallados. Bajo peso, normal, sobrepeso y obesidad con ejemplos por estatura y recomendaciones.",
  },
  {
    path: "/es/interpretacion-imc",
    lang: "es",
    title: "Interpretación IMC : Entiende tus Resultados | IMC",
    description: "Cómo interpretar tu resultado de IMC correctamente. Significado de cada categoría, limitaciones importantes y factores clave que debes tener en cuenta.",
  },
  {
    path: "/es/limitaciones-imc",
    lang: "es",
    title: "Limitaciones del IMC : Lo que el IMC No Dice | IMC",
    description: "Conoce las limitaciones del cálculo IMC. Por qué el índice de masa corporal no siempre es fiable y qué alternativas más precisas existen para evaluar tu salud.",
  },
  {
    path: "/es/preguntas-frecuentes-imc",
    lang: "es",
    title: "FAQ IMC : Todas las Preguntas Frecuentes del IMC | IMC",
    description: "Respuestas a las preguntas más comunes sobre el IMC. Cómo calcular correctamente, interpretar y utilizar el índice de masa corporal de forma eficaz cada día.",
  },
  {
    path: "/es/salud-peso",
    lang: "es",
    title: "Salud y Peso : Guía de Nutrición y Bienestar | IMC",
    description: "Todo sobre la relación entre peso y salud. Consejos de nutrición, actividad física, prevención de riesgos y claves para mantener un peso corporal siempre sano.",
  },

  // --- Português ---
  {
    path: "/pt/imc",
    lang: "pt",
    title: "Calculadora IMC Grátis Online : Massa Corporal | IMC",
    description: "Calcule seu IMC instantaneamente com nossa calculadora online e gratuita. Descubra seu índice de massa corporal, peso ideal e conselhos de saúde personalizados.",
  },
  {
    path: "/pt/imc-homem",
    lang: "pt",
    title: "IMC Homem : Calculadora IMC Masculino e Peso | IMC",
    description: "Calcule o IMC masculino com nossa ferramenta gratuita e especializada. Tabela IMC homem, peso ideal por altura e conselhos de saúde práticos feitos para homens.",
  },
  {
    path: "/pt/imc-mulher",
    lang: "pt",
    title: "IMC Mulher : Calculadora IMC Feminino e Peso | IMC",
    description: "Calcule o IMC feminino com nossa ferramenta dedicada e gratuita. Tabela IMC mulher, peso ideal, fatores hormonais e conselhos adaptados para cada fase da vida.",
  },
  {
    path: "/pt/imc-atleta",
    lang: "pt",
    title: "IMC Atleta : Limites do IMC para Esportistas | IMC",
    description: "Por que o IMC é impreciso para atletas e fisiculturistas. Descubra o FFMI e as melhores alternativas para avaliar sua composição corporal com precisão.",
  },
  {
    path: "/pt/imc-crianca",
    lang: "pt",
    title: "IMC Crianças e Adolescentes : Calculadora Infantil | IMC",
    description: "Calcule o IMC do seu filho com tabelas por idade e sexo. Curvas de crescimento OMS, interpretação pediátrica precisa e orientações práticas de saúde infantil.",
  },
  {
    path: "/pt/tabela-imc",
    lang: "pt",
    title: "Tabela IMC Completa : Classificação OMS Detalhada | IMC",
    description: "Tabela completa de categorias IMC segundo a OMS. Baixo peso, normal, sobrepeso e obesidade com limiares detalhados e exemplos práticos organizados por altura.",
  },
  {
    path: "/pt/interpretacao-imc",
    lang: "pt",
    title: "Interpretação do IMC : Entenda seus Resultados | IMC",
    description: "Como interpretar seu resultado de IMC corretamente. Significado de cada categoria, limitações a conhecer e fatores importantes que você deve considerar.",
  },
  {
    path: "/pt/limitacoes-imc",
    lang: "pt",
    title: "Limitações do IMC : O que o Índice Não Revela | IMC",
    description: "Conheça as limitações do cálculo IMC. Por que o índice de massa corporal nem sempre é confiável e quais alternativas precisas existem para avaliar melhor.",
  },
  {
    path: "/pt/perguntas-frequentes-imc",
    lang: "pt",
    title: "FAQ IMC : As Perguntas Mais Frequentes do IMC | IMC",
    description: "Respostas às perguntas mais comuns sobre o IMC. Como calcular, interpretar corretamente e utilizar o índice de massa corporal de forma eficaz no seu dia a dia.",
  },
  {
    path: "/pt/saude-peso",
    lang: "pt",
    title: "Saúde e Peso : Seu Guia de Nutrição e Bem-Estar | IMC",
    description: "Tudo sobre a relação entre peso e saúde. Dicas de nutrição, atividade física, prevenção de riscos e estratégias práticas para manter um peso corporal saudável.",
  },

  // --- العربية ---
  {
    path: "/ar/imc",
    lang: "ar",
    title: "حاسبة مؤشر كتلة الجسم مجاناً : حساب BMI فوري أونلاين | BMI",
    description: "احسب مؤشر كتلة جسمك فوراً مع حاسبتنا المجانية والدقيقة عبر الإنترنت. اكتشف وزنك المثالي حسب طولك واحصل على نصائح صحية مخصصة لتحسين صحتك ولياقتك البدنية يومياً.",
  },
  {
    path: "/ar/imc-rajul",
    lang: "ar",
    title: "مؤشر كتلة الجسم للرجال : حاسبة BMI مجانية للرجل ودقيقة | BMI",
    description: "احسب مؤشر كتلة الجسم للرجال بدقة مع أداتنا المتخصصة والمجانية. اكتشف الوزن المثالي للرجل حسب الطول، جدول المؤشر الكامل ونصائح صحية مخصصة ومفيدة للرجال.",
  },
  {
    path: "/ar/imc-maraa",
    lang: "ar",
    title: "مؤشر كتلة الجسم للنساء : حاسبة BMI مجانية للإناث دقيقة | BMI",
    description: "احسبي مؤشر كتلة جسمك بدقة مع أداتنا المخصصة والمجانية للنساء. اكتشفي الوزن المثالي للمرأة، تأثير العوامل الهرمونية ونصائح صحية مفيدة وعملية لكل مرحلة عمرية.",
  },
  {
    path: "/ar/imc-riyadi",
    lang: "ar",
    title: "مؤشر كتلة الجسم للرياضيين : لماذا BMI غير دقيق للرياضة | BMI",
    description: "لماذا مؤشر كتلة الجسم غير دقيق للرياضيين ولاعبي كمال الأجسام بشكل خاص. اكتشف مؤشر FFMI والبدائل الأفضل والأكثر دقة لتقييم تكوين جسمك الحقيقي وأدائك البدني.",
  },
  {
    path: "/ar/imc-tifl",
    lang: "ar",
    title: "مؤشر كتلة الجسم للأطفال والمراهقين : حاسبة BMI مجانية | BMI",
    description: "احسب مؤشر كتلة جسم طفلك بدقة مع جداول خاصة حسب العمر والجنس. منحنيات النمو ومعايير منظمة الصحة العالمية مع توجيهات صحية شاملة ومفيدة وعملية لطفلك ومراهقك.",
  },
  {
    path: "/ar/jadwal-imc",
    lang: "ar",
    title: "جدول كتلة الجسم الكامل : تصنيف منظمة الصحة العالمية | BMI",
    description: "جدول كامل ومفصل لفئات مؤشر كتلة الجسم حسب معايير منظمة الصحة العالمية. تعرف على فئات النحافة والوزن الطبيعي والوزن الزائد والسمنة بالتفصيل مع أمثلة عملية.",
  },
  {
    path: "/ar/tafsir-imc",
    lang: "ar",
    title: "تفسير مؤشر كتلة الجسم : كيف تفهم نتائجك بشكل صحيح | BMI",
    description: "كيف تفسر نتائج مؤشر كتلة جسمك بشكل صحيح ودقيق. تعرف على معنى كل فئة من فئات المؤشر، القيود المهمة والعوامل الأساسية التي يجب مراعاتها قبل اتخاذ أي قرار.",
  },
  {
    path: "/ar/hudud-imc",
    lang: "ar",
    title: "حدود مؤشر كتلة الجسم : ما لا يخبرك به المؤشر عن صحتك | BMI",
    description: "تعرف على حدود وقيود حساب مؤشر كتلة الجسم بالتفصيل. لماذا المؤشر ليس دقيقاً دائماً وما هي البدائل الأفضل والأكثر موثوقية المتاحة لتقييم صحتك الحقيقية بدقة.",
  },
  {
    path: "/ar/asila-imc",
    lang: "ar",
    title: "أسئلة شائعة عن مؤشر كتلة الجسم : إجابات شاملة ودقيقة | BMI",
    description: "إجابات شاملة ومفصلة على الأسئلة الأكثر شيوعاً حول مؤشر كتلة الجسم. تعلم كيفية الحساب الصحيح والتفسير الدقيق والاستخدام الفعال للمؤشر لتحسين صحتك يومياً.",
  },
  {
    path: "/ar/siha-wazn",
    lang: "ar",
    title: "الصحة والوزن : دليلك الشامل للوزن الصحي المثالي | BMI",
    description: "كل ما تحتاج معرفته عن العلاقة بين الوزن والصحة بالتفصيل. نصائح عملية للتغذية السليمة والنشاط البدني المنتظم والحفاظ على وزن صحي ومتوازن على المدى الطويل.",
  },

  // --- Deutsch ---
  {
    path: "/de/bmi",
    lang: "de",
    title: "BMI-Rechner Kostenlos : Body-Mass-Index Online | BMI",
    description: "Berechnen Sie Ihren BMI sofort mit unserem kostenlosen Online-Rechner. Ermitteln Sie Ihr Idealgewicht und erhalten Sie personalisierte Gesundheitstipps.",
  },
  {
    path: "/de/bmi-maenner",
    lang: "de",
    title: "BMI für Männer : BMI-Rechner und Idealgewicht | BMI",
    description: "Berechnen Sie den BMI für Männer mit unserem kostenlosen Rechner. Männer-BMI-Tabelle, Idealgewicht nach Größe und praktische Gesundheitstipps für Männer.",
  },
  {
    path: "/de/bmi-frauen",
    lang: "de",
    title: "BMI für Frauen : BMI-Rechner und Idealgewicht | BMI",
    description: "Berechnen Sie den BMI für Frauen mit unserem kostenlosen Online-Rechner. Frauen-BMI-Tabelle, hormonelle Faktoren und praktische Tipps für jede Lebensphase.",
  },
  {
    path: "/de/bmi-sportler",
    lang: "de",
    title: "BMI für Sportler : Warum der BMI oft irreführt | BMI",
    description: "Warum der BMI für Sportler und Bodybuilder oft ungenau ist. Entdecken Sie den FFMI und bessere Alternativen zur präzisen Bewertung Ihrer Körperzusammensetzung.",
  },
  {
    path: "/de/bmi-kinder",
    lang: "de",
    title: "BMI für Kinder und Jugendliche : BMI-Rechner | BMI",
    description: "Berechnen Sie den BMI Ihres Kindes mit alters- und geschlechtsspezifischen Tabellen. WHO-Wachstumskurven, pädiatrische BMI-Interpretation und praktische Tipps.",
  },
  {
    path: "/de/bmi-tabelle",
    lang: "de",
    title: "BMI-Tabelle : Vollständige WHO-Klassifikation | BMI",
    description: "Vollständige BMI-Klassifikationstabelle nach WHO-Standards. Untergewicht, Normalgewicht, Übergewicht und Adipositas mit detaillierten Schwellenwerten erklärt.",
  },
  {
    path: "/de/bmi-interpretation",
    lang: "de",
    title: "BMI-Interpretation : Ergebnisse Richtig Verstehen | BMI",
    description: "Wie Sie Ihren BMI-Wert richtig interpretieren und verstehen. Was jede Kategorie bedeutet, wichtige Einschränkungen und wann Sie einen Arzt aufsuchen sollten.",
  },
  {
    path: "/de/bmi-grenzen",
    lang: "de",
    title: "Grenzen des BMI : Was der BMI Ihnen Nicht Verrät | BMI",
    description: "Verstehen Sie die Grenzen des BMI als Gesundheitsindikator. Warum der Body-Mass-Index nicht immer genau ist und welche besseren Alternativen es heute gibt.",
  },
  {
    path: "/de/bmi-faq",
    lang: "de",
    title: "BMI FAQ : Häufige Fragen zum Body-Mass-Index | BMI",
    description: "Antworten auf die häufigsten Fragen zum BMI. Wie Sie den Body-Mass-Index korrekt berechnen, richtig interpretieren und für Ihre Gesundheit effektiv nutzen.",
  },
  {
    path: "/de/gesundheit-gewicht",
    lang: "de",
    title: "Gesundheit & Gewicht : Ratgeber für Wohlbefinden | BMI",
    description: "Alles über die Beziehung zwischen Gewicht und Gesundheit. Ernährungstipps, körperliche Aktivität und bewährte Ratschläge für ein dauerhaft gesundes Gewicht.",
  },
  // --- Italiano ---
  {
    path: "/it/imc",
    lang: "it",
    title: "Calcolatore IMC Gratuito Online : Massa Corporea | IMC",
    description: "Calcola il tuo IMC istantaneamente con il nostro calcolatore gratuito e preciso. Scopri il tuo peso ideale e ottieni consigli personalizzati per la tua salute.",
  },
  {
    path: "/it/imc-uomo",
    lang: "it",
    title: "IMC Uomo : Calcolatore IMC Maschile e Peso Ideale | IMC",
    description: "Calcola l'IMC maschile con il nostro strumento gratuito e specializzato. Tabella IMC uomo, peso ideale per altezza e consigli utili per la salute maschile.",
  },
  {
    path: "/it/imc-donna",
    lang: "it",
    title: "IMC Donna : Calcolatore IMC Femminile e Peso | IMC",
    description: "Calcola l'IMC femminile con il nostro strumento dedicato e gratuito. Tabella IMC donna, peso ideale, fattori ormonali e consigli per ogni fase della vita.",
  },
  {
    path: "/it/imc-sportivo",
    lang: "it",
    title: "IMC Sportivo : Limiti del BMI per gli Atleti | IMC",
    description: "Perché l'IMC è impreciso per sportivi e bodybuilder. Scopri il FFMI e le migliori alternative per valutare con precisione la tua composizione corporea.",
  },
  {
    path: "/it/imc-bambino",
    lang: "it",
    title: "IMC Bambini e Adolescenti : Calcolatore Pediatrico | IMC",
    description: "Calcola l'IMC di tuo figlio con tabelle specifiche per età e sesso. Curve di crescita OMS, interpretazione pediatrica precisa e consigli nutrizionali pratici.",
  },
  {
    path: "/it/tabella-imc",
    lang: "it",
    title: "Tabella IMC Completa : Classificazione OMS Dettagliata | IMC",
    description: "Tabella completa delle categorie IMC secondo l'OMS. Sottopeso, normopeso, sovrappeso e obesità con soglie dettagliate, esempi per altezza e raccomandazioni.",
  },
  {
    path: "/it/interpretazione-imc",
    lang: "it",
    title: "Interpretazione IMC : Comprendere i Risultati | IMC",
    description: "Come interpretare il risultato del tuo IMC correttamente e con chiarezza. Significato di ogni categoria, limitazioni e i fattori importanti da considerare oggi.",
  },
  {
    path: "/it/limiti-imc",
    lang: "it",
    title: "Limiti dell'IMC : Cosa l'Indice Non Ti Rivela | IMC",
    description: "Scopri i limiti del calcolo IMC e perché l'indice di massa corporea non è sempre affidabile. Le migliori alternative per una valutazione più accurata.",
  },
  {
    path: "/it/domande-frequenti-imc",
    lang: "it",
    title: "FAQ IMC : Tutte le Domande Frequenti sull'Indice | IMC",
    description: "Risposte alle domande più frequenti sull'IMC. Come calcolare, interpretare correttamente e utilizzare l'indice di massa corporea in modo efficace ogni giorno.",
  },
  {
    path: "/it/salute-peso",
    lang: "it",
    title: "Salute e Peso : Guida Nutrizione e Benessere | IMC",
    description: "Tutto sulla relazione tra peso e salute. Consigli di nutrizione, attività fisica, prevenzione dei rischi e strategie per mantenere un peso corporeo sano.",
  },
  // --- हिन्दी ---
  {
    path: "/hi/bmi",
    lang: "hi",
    title: "मुफ्त BMI कैलकुलेटर : बॉडी मास इंडेक्स ऑनलाइन गणना | BMI",
    description: "हमारे मुफ्त और सटीक कैलकुलेटर से तुरंत अपना BMI कैलकुलेट करें। अपना आदर्श वजन जानें, स्वास्थ्य जोखिम समझें और व्यक्तिगत स्वास्थ्य सलाह प्राप्त करें आज ही।",
  },
  {
    path: "/hi/bmi-purush",
    lang: "hi",
    title: "पुरुषों के लिए BMI कैलकुलेटर : आदर्श वजन और स्वास्थ्य | BMI",
    description: "हमारे विशेष और मुफ्त टूल से पुरुषों का BMI सटीक रूप से कैलकुलेट करें। पुरुष BMI चार्ट, ऊंचाई अनुसार आदर्श वजन और पुरुषों के लिए व्यावहारिक स्वास्थ्य सलाह।",
  },
  {
    path: "/hi/bmi-mahila",
    lang: "hi",
    title: "महिलाओं के लिए BMI कैलकुलेटर : आदर्श वजन और स्वास्थ्य | BMI",
    description: "हमारे विशेष और मुफ्त टूल से महिलाओं का BMI सटीक रूप से कैलकुलेट करें। महिला BMI चार्ट, हार्मोनल कारकों का प्रभाव और जीवन के हर चरण के लिए व्यावहारिक सलाह।",
  },
  {
    path: "/hi/bmi-khiladi",
    lang: "hi",
    title: "खिलाड़ियों के लिए BMI : एथलीटों पर BMI की सीमाएं और सच | BMI",
    description: "BMI खिलाड़ियों और बॉडीबिल्डरों के लिए क्यों गलत और भ्रामक है। FFMI जानें और शरीर संरचना का सही और सटीक आकलन करने के लिए बेहतर वैज्ञानिक विकल्प अभी खोजें।",
  },
  {
    path: "/hi/bmi-bachche",
    lang: "hi",
    title: "बच्चों और किशोरों के लिए BMI कैलकुलेटर : सटीक गणना | BMI",
    description: "उम्र और लिंग के अनुसार अपने बच्चे का BMI सटीक रूप से कैलकुलेट करें। WHO विकास वक्र मानक, बाल चिकित्सा BMI व्याख्या और स्वस्थ वजन के लिए व्यावहारिक मार्गदर्शन।",
  },
  {
    path: "/hi/bmi-talika",
    lang: "hi",
    title: "BMI तालिका : WHO मानकों अनुसार संपूर्ण वर्गीकरण गाइड | BMI",
    description: "WHO मानकों के अनुसार संपूर्ण और विस्तृत BMI वर्गीकरण तालिका। कम वजन, सामान्य, अधिक वजन और मोटापा श्रेणियां विस्तृत सीमाओं और व्यावहारिक उदाहरणों के साथ।",
  },
  {
    path: "/hi/bmi-vyakhya",
    lang: "hi",
    title: "BMI व्याख्या : अपने BMI परिणामों को सही तरीके से समझें | BMI",
    description: "अपने BMI परिणामों की सही और सटीक व्याख्या कैसे करें विस्तार से जानें। प्रत्येक BMI श्रेणी का अर्थ, महत्वपूर्ण सीमाएं और ध्यान देने योग्य आवश्यक स्वास्थ्य कारक।",
  },
  {
    path: "/hi/bmi-seemayen",
    lang: "hi",
    title: "BMI की सीमाएं : बॉडी मास इंडेक्स आपको क्या नहीं बताता | BMI",
    description: "BMI की सीमाओं और कमियों को विस्तार से समझें। बॉडी मास इंडेक्स हमेशा सही क्यों नहीं होता और आपके स्वास्थ्य मूल्यांकन के लिए कौन से वैज्ञानिक विकल्प बेहतर हैं।",
  },
  {
    path: "/hi/bmi-prashn",
    lang: "hi",
    title: "BMI FAQ : बॉडी मास इंडेक्स के बारे में आम प्रश्न | BMI",
    description: "BMI के बारे में सबसे आम और महत्वपूर्ण प्रश्नों के विस्तृत उत्तर। बॉडी मास इंडेक्स की सटीक गणना, सही व्याख्या और प्रभावी स्वास्थ्य उपयोग कैसे करें जानें।",
  },
  {
    path: "/hi/swasthya-vajan",
    lang: "hi",
    title: "स्वास्थ्य और वजन : संपूर्ण कल्याण मार्गदर्शिका सुझाव | BMI",
    description: "वजन और स्वास्थ्य के बीच संबंध के बारे में विस्तार से सब कुछ जानें। पोषण सलाह, शारीरिक गतिविधि के सुझाव और स्वस्थ वजन बनाए रखने के व्यावहारिक दैनिक उपाय।",
  },

  // --- 中文 ---
  {
    path: "/zh/bmi",
    lang: "zh",
    title: "免费BMI计算器在线版 : 快速精准计算您的身体质量指数和理想体重范围 | BMI",
    description: "使用我们的免费在线BMI计算器即时精准计算您的身体质量指数。全面了解您的理想体重范围，获取个性化的专业健康建议、科学的体重管理方案和实用的日常健康改善策略，助您轻松掌控健康生活。",
  },
  {
    path: "/zh/bmi-nanxing",
    lang: "zh",
    title: "男性BMI计算器 : 免费精准计算男性身体质量指数与理想体重标准 | BMI",
    description: "使用我们的专业免费工具精准计算男性BMI身体质量指数。完整男性BMI对照表、按身高科学计算理想体重范围，以及针对男性健康特点量身定制的个性化专业健康建议和体重管理方案。",
  },
  {
    path: "/zh/bmi-nvxing",
    lang: "zh",
    title: "女性BMI计算器 : 免费精准计算女性身体质量指数与理想体重标准 | BMI",
    description: "使用我们的专用免费工具精准计算女性BMI身体质量指数。完整女性BMI对照表、深入分析激素因素对体重的影响，以及各生命阶段的科学健康建议和个性化体重管理方案指导。",
  },
  {
    path: "/zh/bmi-yundongyuan",
    lang: "zh",
    title: "运动员BMI指南 : 为什么BMI身体质量指数不适用于肌肉发达的运动健身者 | BMI",
    description: "深入了解BMI对运动员和健身爱好者为何存在严重偏差和不准确性。全面介绍FFMI去脂体重指数的科学原理，以及评估真实身体成分和运动表现的更好更精准的替代方案和方法。",
  },
  {
    path: "/zh/bmi-ertong",
    lang: "zh",
    title: "儿童与青少年BMI计算器 : 根据WHO标准免费精准计算儿科BMI指数 | BMI",
    description: "根据孩子的年龄和性别精准计算儿童青少年BMI身体质量指数。参照WHO世界卫生组织官方生长曲线标准，获取专业的儿科BMI解读分析、健康体重指导建议和科学的营养成长方案。",
  },
  {
    path: "/zh/bmi-biao",
    lang: "zh",
    title: "BMI分类对照表 : 基于WHO世界卫生组织标准的完整身体质量指数分类 | BMI",
    description: "根据WHO世界卫生组织权威标准编制的完整BMI身体质量指数分类对照表。详细列出体重过轻、正常体重、超重和肥胖各类别的精确阈值说明、健康风险分析及针对性的改善建议。",
  },
  {
    path: "/zh/bmi-jiedu",
    lang: "zh",
    title: "BMI结果解读指南 : 如何正确理解和分析您的BMI身体质量指数计算结果 | BMI",
    description: "详细指导您如何正确解读BMI身体质量指数计算结果。深入说明每个BMI类别的健康含义、需要注意的重要局限性因素，以及何时应该及时咨询专业医生获取个性化的健康评估建议。",
  },
  {
    path: "/zh/bmi-juxianxing",
    lang: "zh",
    title: "BMI的局限性分析 : 身体质量指数无法准确告诉您的重要健康信息 | BMI",
    description: "全面深入了解BMI作为健康评估指标的局限性和不足之处。详细分析为什么身体质量指数并不总是准确可靠的，以及您应该了解和使用哪些更好更科学的替代健康评估指标和方法。",
  },
  {
    path: "/zh/bmi-changjianwenti",
    lang: "zh",
    title: "BMI常见问题解答 : 关于身体质量指数您需要了解的所有重要问题 | BMI",
    description: "关于BMI身体质量指数最常见重要问题的详细专业解答。全面指导您如何正确计算BMI数值、准确解读各项结果含义，以及如何有效利用BMI来科学管理您的健康和控制体重。",
  },
  {
    path: "/zh/jiankang-tizhong",
    lang: "zh",
    title: "健康与体重管理 : 科学营养指导和健康体重维护的完整实用指南 | BMI",
    description: "关于体重与健康之间密切关系的全面科学指南。包含专业营养建议、科学体育锻炼指导方案、疾病预防策略，以及保持健康理想体重的实用日常方法和可持续的长期管理策略。",
  },
];

const STORAGE_KEY = "seo-overrides";

const normalizePath = (p: string): string =>
  p !== "/" && p.endsWith("/") ? p.slice(0, -1) : p;

export const getSEOForPath = (path: string): PageSEO => {
  const normalized = normalizePath(path);
  const defaults = defaultSEO.find((s) => s.path === normalized);
  if (!defaults) {
    return defaultSEO[0];
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const overrides: Record<string, Partial<PageSEO>> = JSON.parse(raw);
      if (overrides[path]) {
        return { ...defaults, ...overrides[path] };
      }
    }
  } catch {
    // ignore parse errors
  }

  return defaults;
};

export const saveSEOOverride = (path: string, data: Partial<PageSEO>) => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const overrides: Record<string, Partial<PageSEO>> = raw ? JSON.parse(raw) : {};
    overrides[path] = { ...overrides[path], ...data };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
  } catch {
    // ignore
  }
};

export const resetSEOOverride = (path: string) => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const overrides: Record<string, Partial<PageSEO>> = JSON.parse(raw);
      delete overrides[path];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
    }
  } catch {
    // ignore
  }
};

export const resetAllSEOOverrides = () => {
  localStorage.removeItem(STORAGE_KEY);
};
