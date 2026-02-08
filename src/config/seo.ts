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
    title: "Calcul IMC Gratuit | Calculateur IMC en ligne - IMC",
    description: "Calculez votre IMC instantan\u00e9ment. Calculateur gratuit d'Indice de Masse Corporelle avec conseils personnalis\u00e9s. D\u00e9couvrez votre poids id\u00e9al.",
  },
  {
    path: "/imc-homme",
    lang: "fr",
    title: "IMC Homme : Calculateur IMC Masculin | IMC",
    description: "Calculez l'IMC masculin avec notre outil sp\u00e9cialis\u00e9. Poids id\u00e9al homme, tableau IMC et conseils adapt\u00e9s \u00e0 la morphologie masculine.",
  },
  {
    path: "/imc-femme",
    lang: "fr",
    title: "IMC Femme : Calculateur IMC F\u00e9minin | IMC",
    description: "Calculez l'IMC f\u00e9minin avec notre outil d\u00e9di\u00e9. Poids id\u00e9al femme, facteurs hormonaux et conseils adapt\u00e9s \u00e0 chaque \u00e9tape de vie.",
  },
  {
    path: "/imc-sportif",
    lang: "fr",
    title: "IMC Sportif : IMC pour Athl\u00e8tes et Musculation | IMC",
    description: "Pourquoi l'IMC est biais\u00e9 pour les sportifs. D\u00e9couvrez le FFMI et les alternatives pour \u00e9valuer votre composition corporelle.",
  },
  {
    path: "/imc-enfant",
    lang: "fr",
    title: "IMC Enfant et Adolescent : Calculateur P\u00e9diatrique | IMC",
    description: "Calculez l'IMC de votre enfant ou adolescent. Courbes de croissance OMS, interpr\u00e9tation par \u00e2ge et sexe.",
  },
  {
    path: "/tableau-imc",
    lang: "fr",
    title: "Tableau IMC : Classification OMS Compl\u00e8te | IMC",
    description: "Tableau complet des cat\u00e9gories IMC selon l'OMS. Maigreur, poids normal, surpoids et ob\u00e9sit\u00e9 avec seuils d\u00e9taill\u00e9s.",
  },
  {
    path: "/interpretation-imc",
    lang: "fr",
    title: "Interpr\u00e9tation IMC : Comprendre vos R\u00e9sultats | IMC",
    description: "Comment interpr\u00e9ter votre r\u00e9sultat IMC. Signification des cat\u00e9gories, limites et facteurs \u00e0 prendre en compte.",
  },
  {
    path: "/limites-imc",
    lang: "fr",
    title: "Limites de l'IMC : Ce que l'IMC ne Dit Pas | IMC",
    description: "D\u00e9couvrez les limites du calcul IMC. Pourquoi l'indice de masse corporelle n'est pas toujours fiable et quelles alternatives utiliser.",
  },
  {
    path: "/faq-imc",
    lang: "fr",
    title: "FAQ IMC : Questions Fr\u00e9quentes sur l'IMC | IMC",
    description: "R\u00e9ponses aux questions les plus fr\u00e9quentes sur l'IMC. Comment calculer, interpr\u00e9ter et utiliser l'indice de masse corporelle.",
  },
  {
    path: "/sante-et-poids",
    lang: "fr",
    title: "Sant\u00e9 et Poids : Guide Complet | IMC",
    description: "Tout savoir sur la relation entre poids et sant\u00e9. Conseils nutrition, activit\u00e9 physique et maintien d'un poids sant\u00e9.",
  },

  // --- English ---
  {
    path: "/",
    lang: "en",
    title: "Free BMI Calculator | Body Mass Index Online - BMI",
    description: "Calculate your BMI instantly with our free Body Mass Index calculator. Get personalized health insights and discover your ideal weight range.",
  },
  {
    path: "/bmi-men",
    lang: "en",
    title: "BMI Calculator for Men | Male BMI Chart & Ideal Weight",
    description: "Calculate BMI for men with our specialized tool. Male BMI chart, ideal weight by height, and health advice tailored for men.",
  },
  {
    path: "/bmi-women",
    lang: "en",
    title: "BMI Calculator for Women | Female BMI Chart & Ideal Weight",
    description: "Calculate BMI for women with our dedicated tool. Female BMI chart, ideal weight, hormonal factors and life stage advice.",
  },
  {
    path: "/bmi-athletes",
    lang: "en",
    title: "BMI for Athletes | Why BMI Fails for Muscular People",
    description: "Why BMI is inaccurate for athletes and bodybuilders. Discover FFMI and better alternatives to assess body composition.",
  },
  {
    path: "/bmi-children",
    lang: "en",
    title: "BMI Calculator for Kids & Teens | Pediatric BMI",
    description: "Calculate your child's BMI with age and gender-specific charts. WHO growth curves and pediatric BMI interpretation.",
  },
  {
    path: "/bmi-table",
    lang: "en",
    title: "BMI Chart & Table | WHO Classification Guide",
    description: "Complete BMI classification table according to WHO standards. Underweight, normal, overweight and obesity categories explained.",
  },
  {
    path: "/bmi-interpretation",
    lang: "en",
    title: "BMI Interpretation | Understanding Your BMI Results",
    description: "How to interpret your BMI results. What each category means, limitations to consider, and when to consult a doctor.",
  },
  {
    path: "/bmi-limitations",
    lang: "en",
    title: "BMI Limitations | What BMI Doesn't Tell You",
    description: "Understand the limitations of BMI. Why Body Mass Index isn't always accurate and what alternatives to use instead.",
  },
  {
    path: "/bmi-faq",
    lang: "en",
    title: "BMI FAQ | Frequently Asked Questions About BMI",
    description: "Answers to the most common questions about BMI. How to calculate, interpret, and use Body Mass Index effectively.",
  },
  {
    path: "/health-weight",
    lang: "en",
    title: "Health & Weight | Complete Wellness Guide - BMI",
    description: "Everything about the relationship between weight and health. Nutrition tips, physical activity, and maintaining a healthy weight.",
  },

  // --- Espa\u00f1ol ---
  {
    path: "/es/imc",
    lang: "es",
    title: "Calculadora IMC Gratis | \u00cdndice de Masa Corporal Online",
    description: "Calcula tu IMC al instante con nuestra calculadora gratuita. Descubre tu peso ideal y obt\u00e9n consejos personalizados de salud.",
  },
  {
    path: "/es/imc-hombre",
    lang: "es",
    title: "IMC Hombre : Calculadora IMC para Hombres | IMC",
    description: "Calcula el IMC masculino con nuestra herramienta especializada. Peso ideal hombre, tabla IMC y consejos de salud masculina.",
  },
  {
    path: "/es/imc-mujer",
    lang: "es",
    title: "IMC Mujer : Calculadora IMC para Mujeres | IMC",
    description: "Calcula el IMC femenino con nuestra herramienta dedicada. Peso ideal mujer, factores hormonales y consejos por etapa de vida.",
  },
  {
    path: "/es/imc-deportista",
    lang: "es",
    title: "IMC Deportista : Por qu\u00e9 el IMC Falla en Atletas",
    description: "Por qu\u00e9 el IMC es inexacto para deportistas y culturistas. Descubre el FFMI y mejores alternativas de composici\u00f3n corporal.",
  },
  {
    path: "/es/imc-nino",
    lang: "es",
    title: "IMC Ni\u00f1os y Adolescentes : Calculadora Pedi\u00e1trica",
    description: "Calcula el IMC de tu hijo con tablas espec\u00edficas por edad y sexo. Curvas de crecimiento OMS e interpretaci\u00f3n pedi\u00e1trica.",
  },
  {
    path: "/es/tabla-imc",
    lang: "es",
    title: "Tabla IMC : Clasificaci\u00f3n OMS Completa | IMC",
    description: "Tabla completa de categor\u00edas IMC seg\u00fan la OMS. Bajo peso, normal, sobrepeso y obesidad con umbrales detallados.",
  },
  {
    path: "/es/interpretacion-imc",
    lang: "es",
    title: "Interpretaci\u00f3n IMC : Entiende tus Resultados | IMC",
    description: "C\u00f3mo interpretar tu resultado de IMC. Significado de cada categor\u00eda, limitaciones y factores a considerar.",
  },
  {
    path: "/es/limitaciones-imc",
    lang: "es",
    title: "Limitaciones del IMC : Lo que el IMC No Dice | IMC",
    description: "Conoce las limitaciones del c\u00e1lculo IMC. Por qu\u00e9 el \u00edndice de masa corporal no siempre es fiable y qu\u00e9 alternativas usar.",
  },
  {
    path: "/es/preguntas-frecuentes-imc",
    lang: "es",
    title: "FAQ IMC : Preguntas Frecuentes sobre el IMC | IMC",
    description: "Respuestas a las preguntas m\u00e1s comunes sobre el IMC. C\u00f3mo calcular, interpretar y utilizar el \u00edndice de masa corporal.",
  },
  {
    path: "/es/salud-peso",
    lang: "es",
    title: "Salud y Peso : Gu\u00eda Completa | IMC",
    description: "Todo sobre la relaci\u00f3n entre peso y salud. Consejos de nutrici\u00f3n, actividad f\u00edsica y mantenimiento de un peso saludable.",
  },

  // --- Portugu\u00eas ---
  {
    path: "/pt/imc",
    lang: "pt",
    title: "Calculadora IMC Gr\u00e1tis | \u00cdndice de Massa Corporal Online",
    description: "Calcule seu IMC instantaneamente com nossa calculadora gratuita. Descubra seu peso ideal e obtenha conselhos personalizados.",
  },
  {
    path: "/pt/imc-homem",
    lang: "pt",
    title: "IMC Homem : Calculadora IMC para Homens | IMC",
    description: "Calcule o IMC masculino com nossa ferramenta especializada. Peso ideal homem, tabela IMC e conselhos de sa\u00fade masculina.",
  },
  {
    path: "/pt/imc-mulher",
    lang: "pt",
    title: "IMC Mulher : Calculadora IMC para Mulheres | IMC",
    description: "Calcule o IMC feminino com nossa ferramenta dedicada. Peso ideal mulher, fatores hormonais e conselhos por fase da vida.",
  },
  {
    path: "/pt/imc-atleta",
    lang: "pt",
    title: "IMC Atleta : Por que o IMC Falha em Esportistas | IMC",
    description: "Por que o IMC \u00e9 impreciso para atletas e fisiculturistas. Descubra o FFMI e melhores alternativas de composi\u00e7\u00e3o corporal.",
  },
  {
    path: "/pt/imc-crianca",
    lang: "pt",
    title: "IMC Crian\u00e7as e Adolescentes : Calculadora Pedi\u00e1trica",
    description: "Calcule o IMC do seu filho com tabelas espec\u00edficas por idade e sexo. Curvas de crescimento OMS e interpreta\u00e7\u00e3o pedi\u00e1trica.",
  },
  {
    path: "/pt/tabela-imc",
    lang: "pt",
    title: "Tabela IMC : Classifica\u00e7\u00e3o OMS Completa | IMC",
    description: "Tabela completa de categorias IMC segundo a OMS. Baixo peso, normal, sobrepeso e obesidade com limiares detalhados.",
  },
  {
    path: "/pt/interpretacao-imc",
    lang: "pt",
    title: "Interpreta\u00e7\u00e3o IMC : Entenda seus Resultados | IMC",
    description: "Como interpretar seu resultado de IMC. Significado de cada categoria, limita\u00e7\u00f5es e fatores a considerar.",
  },
  {
    path: "/pt/limitacoes-imc",
    lang: "pt",
    title: "Limita\u00e7\u00f5es do IMC : O que o IMC N\u00e3o Diz | IMC",
    description: "Conhe\u00e7a as limita\u00e7\u00f5es do c\u00e1lculo IMC. Por que o \u00edndice de massa corporal nem sempre \u00e9 confi\u00e1vel e que alternativas usar.",
  },
  {
    path: "/pt/perguntas-frequentes-imc",
    lang: "pt",
    title: "FAQ IMC : Perguntas Frequentes sobre o IMC | IMC",
    description: "Respostas \u00e0s perguntas mais comuns sobre o IMC. Como calcular, interpretar e utilizar o \u00edndice de massa corporal.",
  },
  {
    path: "/pt/saude-peso",
    lang: "pt",
    title: "Sa\u00fade e Peso : Guia Completo | IMC",
    description: "Tudo sobre a rela\u00e7\u00e3o entre peso e sa\u00fade. Dicas de nutri\u00e7\u00e3o, atividade f\u00edsica e manuten\u00e7\u00e3o de um peso saud\u00e1vel.",
  },

  // --- العربية ---
  {
    path: "/ar/imc",
    lang: "ar",
    title: "حاسبة مؤشر كتلة الجسم مجاناً | حساب BMI أونلاين",
    description: "احسب مؤشر كتلة جسمك فوراً مع حاسبتنا المجانية. اكتشف وزنك المثالي واحصل على نصائح صحية مخصصة.",
  },
  {
    path: "/ar/imc-rajul",
    lang: "ar",
    title: "مؤشر كتلة الجسم للرجال | حاسبة BMI للذكور",
    description: "احسب مؤشر كتلة الجسم للرجال مع أداتنا المتخصصة. الوزن المثالي للرجل، جدول المؤشر ونصائح صحية للرجال.",
  },
  {
    path: "/ar/imc-maraa",
    lang: "ar",
    title: "مؤشر كتلة الجسم للنساء | حاسبة BMI للإناث",
    description: "احسبي مؤشر كتلة جسمك مع أداتنا المخصصة. الوزن المثالي للمرأة، العوامل الهرمونية ونصائح لكل مرحلة عمرية.",
  },
  {
    path: "/ar/imc-riyadi",
    lang: "ar",
    title: "مؤشر كتلة الجسم للرياضيين | لماذا المؤشر غير دقيق للعضلات",
    description: "لماذا مؤشر كتلة الجسم غير دقيق للرياضيين وكمال الأجسام. اكتشف FFMI والبدائل الأفضل لتقييم تكوين الجسم.",
  },
  {
    path: "/ar/imc-tifl",
    lang: "ar",
    title: "مؤشر كتلة الجسم للأطفال والمراهقين | حاسبة الأطفال",
    description: "احسب مؤشر كتلة جسم طفلك مع جداول حسب العمر والجنس. منحنيات النمو ومعايير منظمة الصحة العالمية.",
  },
  {
    path: "/ar/jadwal-imc",
    lang: "ar",
    title: "جدول مؤشر كتلة الجسم | تصنيف منظمة الصحة العالمية",
    description: "جدول كامل لفئات مؤشر كتلة الجسم حسب معايير منظمة الصحة العالمية. النحافة، الوزن الطبيعي، الوزن الزائد والسمنة.",
  },
  {
    path: "/ar/tafsir-imc",
    lang: "ar",
    title: "تفسير مؤشر كتلة الجسم | فهم نتائجك",
    description: "كيف تفسر نتائج مؤشر كتلة جسمك. معنى كل فئة، القيود والعوامل التي يجب مراعاتها.",
  },
  {
    path: "/ar/hudud-imc",
    lang: "ar",
    title: "حدود مؤشر كتلة الجسم | ما لا يخبرك به المؤشر",
    description: "تعرف على حدود حساب مؤشر كتلة الجسم. لماذا المؤشر ليس دقيقاً دائماً وما البدائل المتاحة.",
  },
  {
    path: "/ar/asila-imc",
    lang: "ar",
    title: "أسئلة شائعة عن مؤشر كتلة الجسم | FAQ BMI",
    description: "إجابات على الأسئلة الأكثر شيوعاً حول مؤشر كتلة الجسم. كيفية الحساب والتفسير والاستخدام.",
  },
  {
    path: "/ar/siha-wazn",
    lang: "ar",
    title: "الصحة والوزن | دليل شامل للوزن الصحي",
    description: "كل ما تحتاج معرفته عن العلاقة بين الوزن والصحة. نصائح التغذية والنشاط البدني والحفاظ على وزن صحي.",
  },

  // --- Deutsch ---
  {
    path: "/de/bmi",
    lang: "de",
    title: "BMI-Rechner Kostenlos | Body-Mass-Index Online Berechnen",
    description: "Berechnen Sie Ihren BMI sofort mit unserem kostenlosen Rechner. Ermitteln Sie Ihr Idealgewicht und erhalten Sie personalisierte Gesundheitstipps.",
  },
  {
    path: "/de/bmi-maenner",
    lang: "de",
    title: "BMI-Rechner für Männer | BMI-Tabelle & Idealgewicht",
    description: "Berechnen Sie den BMI für Männer mit unserem spezialisierten Tool. Männer-BMI-Tabelle, Idealgewicht nach Größe und Gesundheitstipps.",
  },
  {
    path: "/de/bmi-frauen",
    lang: "de",
    title: "BMI-Rechner für Frauen | BMI-Tabelle & Idealgewicht",
    description: "Berechnen Sie den BMI für Frauen mit unserem spezialisierten Tool. Frauen-BMI-Tabelle, hormonelle Faktoren und Tipps für jede Lebensphase.",
  },
  {
    path: "/de/bmi-sportler",
    lang: "de",
    title: "BMI für Sportler | Warum der BMI bei Muskelmasse versagt",
    description: "Warum der BMI für Sportler und Bodybuilder ungenau ist. Entdecken Sie den FFMI und bessere Alternativen zur Körperzusammensetzung.",
  },
  {
    path: "/de/bmi-kinder",
    lang: "de",
    title: "BMI-Rechner für Kinder & Jugendliche | Pädiatrischer BMI",
    description: "Berechnen Sie den BMI Ihres Kindes mit alters- und geschlechtsspezifischen Tabellen. WHO-Wachstumskurven und pädiatrische BMI-Interpretation.",
  },
  {
    path: "/de/bmi-tabelle",
    lang: "de",
    title: "BMI-Tabelle | WHO-Klassifikation Vollständig",
    description: "Vollständige BMI-Klassifikationstabelle nach WHO-Standards. Untergewicht, Normalgewicht, Übergewicht und Adipositas erklärt.",
  },
  {
    path: "/de/bmi-interpretation",
    lang: "de",
    title: "BMI-Interpretation | Ihre Ergebnisse Verstehen",
    description: "Wie Sie Ihren BMI-Wert richtig interpretieren. Was jede Kategorie bedeutet, Einschränkungen und wann Sie einen Arzt aufsuchen sollten.",
  },
  {
    path: "/de/bmi-grenzen",
    lang: "de",
    title: "Grenzen des BMI | Was der BMI Nicht Verrät",
    description: "Verstehen Sie die Grenzen des BMI. Warum der Body-Mass-Index nicht immer genau ist und welche Alternativen es gibt.",
  },
  {
    path: "/de/bmi-faq",
    lang: "de",
    title: "BMI FAQ | Häufig Gestellte Fragen zum BMI",
    description: "Antworten auf die häufigsten Fragen zum BMI. Wie berechnen, interpretieren und den Body-Mass-Index effektiv nutzen.",
  },
  {
    path: "/de/gesundheit-gewicht",
    lang: "de",
    title: "Gesundheit & Gewicht | Vollständiger Wellness-Leitfaden",
    description: "Alles über die Beziehung zwischen Gewicht und Gesundheit. Ernährungstipps, körperliche Aktivität und ein gesundes Gewicht halten.",
  },
  // --- Italiano ---
  {
    path: "/it/imc",
    lang: "it",
    title: "Calcolatore IMC Gratuito | Indice di Massa Corporea Online",
    description: "Calcola il tuo IMC istantaneamente con il nostro calcolatore gratuito. Scopri il tuo peso ideale e ottieni consigli personalizzati sulla salute.",
  },
  {
    path: "/it/imc-uomo",
    lang: "it",
    title: "IMC Uomo : Calcolatore IMC per Uomini | IMC",
    description: "Calcola l'IMC maschile con il nostro strumento specializzato. Peso ideale uomo, tabella IMC e consigli per la salute maschile.",
  },
  {
    path: "/it/imc-donna",
    lang: "it",
    title: "IMC Donna : Calcolatore IMC per Donne | IMC",
    description: "Calcola l'IMC femminile con il nostro strumento dedicato. Peso ideale donna, fattori ormonali e consigli per ogni fase della vita.",
  },
  {
    path: "/it/imc-sportivo",
    lang: "it",
    title: "IMC Sportivo : Perché l'IMC Fallisce negli Atleti",
    description: "Perché l'IMC è impreciso per sportivi e bodybuilder. Scopri il FFMI e le migliori alternative per la composizione corporea.",
  },
  {
    path: "/it/imc-bambino",
    lang: "it",
    title: "IMC Bambini e Adolescenti : Calcolatore Pediatrico",
    description: "Calcola l'IMC di tuo figlio con tabelle specifiche per età e sesso. Curve di crescita OMS e interpretazione pediatrica.",
  },
  {
    path: "/it/tabella-imc",
    lang: "it",
    title: "Tabella IMC : Classificazione OMS Completa | IMC",
    description: "Tabella completa delle categorie IMC secondo l'OMS. Sottopeso, normopeso, sovrappeso e obesità con soglie dettagliate.",
  },
  {
    path: "/it/interpretazione-imc",
    lang: "it",
    title: "Interpretazione IMC : Comprendere i Risultati | IMC",
    description: "Come interpretare il risultato del tuo IMC. Significato di ogni categoria, limitazioni e fattori da considerare.",
  },
  {
    path: "/it/limiti-imc",
    lang: "it",
    title: "Limiti dell'IMC : Cosa l'IMC Non Dice | IMC",
    description: "Scopri i limiti del calcolo IMC. Perché l'indice di massa corporea non è sempre affidabile e quali alternative usare.",
  },
  {
    path: "/it/domande-frequenti-imc",
    lang: "it",
    title: "FAQ IMC : Domande Frequenti sull'IMC | IMC",
    description: "Risposte alle domande più frequenti sull'IMC. Come calcolare, interpretare e utilizzare l'indice di massa corporea.",
  },
  {
    path: "/it/salute-peso",
    lang: "it",
    title: "Salute e Peso : Guida Completa | IMC",
    description: "Tutto sulla relazione tra peso e salute. Consigli di nutrizione, attività fisica e mantenimento di un peso sano.",
  },
  // --- हिन्दी ---
  {
    path: "/hi/bmi",
    lang: "hi",
    title: "मुफ्त BMI कैलकुलेटर | बॉडी मास इंडेक्स ऑनलाइन",
    description: "हमारे मुफ्त कैलकुलेटर से तुरंत अपना BMI कैलकुलेट करें। अपना आदर्श वजन जानें और व्यक्तिगत स्वास्थ्य सलाह प्राप्त करें।",
  },
  {
    path: "/hi/bmi-purush",
    lang: "hi",
    title: "पुरुषों के लिए BMI कैलकुलेटर | पुरुष BMI चार्ट",
    description: "हमारे विशेष टूल से पुरुषों का BMI कैलकुलेट करें। पुरुष BMI चार्ट, आदर्श वजन और पुरुष स्वास्थ्य सलाह।",
  },
  {
    path: "/hi/bmi-mahila",
    lang: "hi",
    title: "महिलाओं के लिए BMI कैलकुलेटर | महिला BMI चार्ट",
    description: "हमारे विशेष टूल से महिलाओं का BMI कैलकुलेट करें। महिला BMI चार्ट, हार्मोनल कारक और जीवन के हर चरण के लिए सलाह।",
  },
  {
    path: "/hi/bmi-khiladi",
    lang: "hi",
    title: "खिलाड़ियों के लिए BMI | BMI एथलीटों के लिए क्यों गलत है",
    description: "BMI खिलाड़ियों और बॉडीबिल्डरों के लिए क्यों गलत है। FFMI और शरीर संरचना के बेहतर विकल्प जानें।",
  },
  {
    path: "/hi/bmi-bachche",
    lang: "hi",
    title: "बच्चों और किशोरों के लिए BMI कैलकुलेटर",
    description: "उम्र और लिंग के अनुसार अपने बच्चे का BMI कैलकुलेट करें। WHO विकास वक्र और बाल चिकित्सा BMI व्याख्या।",
  },
  {
    path: "/hi/bmi-talika",
    lang: "hi",
    title: "BMI तालिका | WHO वर्गीकरण गाइड",
    description: "WHO मानकों के अनुसार संपूर्ण BMI वर्गीकरण तालिका। कम वजन, सामान्य, अधिक वजन और मोटापा श्रेणियां।",
  },
  {
    path: "/hi/bmi-vyakhya",
    lang: "hi",
    title: "BMI व्याख्या | अपने BMI परिणाम समझें",
    description: "अपने BMI परिणामों की व्याख्या कैसे करें। प्रत्येक श्रेणी का अर्थ, सीमाएं और ध्यान देने योग्य कारक।",
  },
  {
    path: "/hi/bmi-seemayen",
    lang: "hi",
    title: "BMI की सीमाएं | BMI क्या नहीं बताता",
    description: "BMI की सीमाओं को समझें। बॉडी मास इंडेक्स हमेशा सही क्यों नहीं होता और कौन से विकल्प उपयोग करें।",
  },
  {
    path: "/hi/bmi-prashn",
    lang: "hi",
    title: "BMI FAQ | BMI के बारे में अक्सर पूछे जाने वाले प्रश्न",
    description: "BMI के बारे में सबसे आम प्रश्नों के उत्तर। बॉडी मास इंडेक्स की गणना, व्याख्या और उपयोग कैसे करें।",
  },
  {
    path: "/hi/swasthya-vajan",
    lang: "hi",
    title: "स्वास्थ्य और वजन | संपूर्ण कल्याण मार्गदर्शिका",
    description: "वजन और स्वास्थ्य के बीच संबंध के बारे में सब कुछ। पोषण सलाह, शारीरिक गतिविधि और स्वस्थ वजन बनाए रखना।",
  },
];

const STORAGE_KEY = "seo-overrides";

export const getSEOForPath = (path: string): PageSEO => {
  const defaults = defaultSEO.find((s) => s.path === path);
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
