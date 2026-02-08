export type Lang = "fr" | "en" | "es" | "pt" | "ar" | "de" | "it" | "hi" | "zh";

export const routeMap: Record<string, Record<Lang, string>> = {
  main:           { fr: "/imc",                  en: "/",                     es: "/es/imc",                       pt: "/pt/imc",                       ar: "/ar/imc",              de: "/de/bmi",                it: "/it/imc",                    hi: "/hi/bmi",              zh: "/zh/bmi" },
  men:            { fr: "/imc-homme",           en: "/bmi-men",              es: "/es/imc-hombre",                pt: "/pt/imc-homem",                 ar: "/ar/imc-rajul",        de: "/de/bmi-maenner",        it: "/it/imc-uomo",               hi: "/hi/bmi-purush",       zh: "/zh/bmi-nanxing" },
  women:          { fr: "/imc-femme",           en: "/bmi-women",            es: "/es/imc-mujer",                 pt: "/pt/imc-mulher",                ar: "/ar/imc-maraa",        de: "/de/bmi-frauen",         it: "/it/imc-donna",              hi: "/hi/bmi-mahila",       zh: "/zh/bmi-nvxing" },
  athletes:       { fr: "/imc-sportif",         en: "/bmi-athletes",         es: "/es/imc-deportista",            pt: "/pt/imc-atleta",                ar: "/ar/imc-riyadi",       de: "/de/bmi-sportler",       it: "/it/imc-sportivo",           hi: "/hi/bmi-khiladi",      zh: "/zh/bmi-yundongyuan" },
  children:       { fr: "/imc-enfant",          en: "/bmi-children",         es: "/es/imc-nino",                  pt: "/pt/imc-crianca",               ar: "/ar/imc-tifl",         de: "/de/bmi-kinder",         it: "/it/imc-bambino",            hi: "/hi/bmi-bachche",      zh: "/zh/bmi-ertong" },
  table:          { fr: "/tableau-imc",         en: "/bmi-table",            es: "/es/tabla-imc",                 pt: "/pt/tabela-imc",                ar: "/ar/jadwal-imc",       de: "/de/bmi-tabelle",        it: "/it/tabella-imc",            hi: "/hi/bmi-talika",       zh: "/zh/bmi-biao" },
  interpretation: { fr: "/interpretation-imc",  en: "/bmi-interpretation",   es: "/es/interpretacion-imc",        pt: "/pt/interpretacao-imc",         ar: "/ar/tafsir-imc",       de: "/de/bmi-interpretation", it: "/it/interpretazione-imc",    hi: "/hi/bmi-vyakhya",      zh: "/zh/bmi-jiedu" },
  limitations:    { fr: "/limites-imc",         en: "/bmi-limitations",      es: "/es/limitaciones-imc",          pt: "/pt/limitacoes-imc",            ar: "/ar/hudud-imc",        de: "/de/bmi-grenzen",        it: "/it/limiti-imc",             hi: "/hi/bmi-seemayen",     zh: "/zh/bmi-juxianxing" },
  faq:            { fr: "/faq-imc",             en: "/bmi-faq",              es: "/es/preguntas-frecuentes-imc",  pt: "/pt/perguntas-frequentes-imc",  ar: "/ar/asila-imc",        de: "/de/bmi-faq",            it: "/it/domande-frequenti-imc",  hi: "/hi/bmi-prashn",       zh: "/zh/bmi-changjianwenti" },
  health:         { fr: "/sante-et-poids",      en: "/health-weight",        es: "/es/salud-peso",                pt: "/pt/saude-peso",                ar: "/ar/siha-wazn",        de: "/de/gesundheit-gewicht", it: "/it/salute-peso",            hi: "/hi/swasthya-vajan",   zh: "/zh/jiankang-tizhong" },
};

export const pathToLang: Record<string, Lang> = {};
for (const routes of Object.values(routeMap)) {
  for (const [lang, path] of Object.entries(routes)) {
    pathToLang[path] = lang as Lang;
  }
}

export const getCurrentLang = (pathname: string): Lang => pathToLang[pathname] || "fr";

export const getEquivalentPath = (currentPath: string, targetLang: Lang): string => {
  for (const routes of Object.values(routeMap)) {
    if (Object.values(routes).includes(currentPath)) {
      return routes[targetLang];
    }
  }
  return routeMap.main[targetLang];
};

export const getAlternates = (currentPath: string): Record<Lang, string> | null => {
  for (const routes of Object.values(routeMap)) {
    if (Object.values(routes).includes(currentPath)) {
      return routes as Record<Lang, string>;
    }
  }
  return null;
};

export const localeMap: Record<Lang, string> = {
  fr: "fr_FR",
  en: "en_US",
  es: "es_ES",
  pt: "pt_BR",
  ar: "ar_SA",
  de: "de_DE",
  it: "it_IT",
  hi: "hi_IN",
  zh: "zh_CN",
};
