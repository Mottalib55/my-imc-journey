import { Link, useLocation } from "react-router-dom";
import { Activity, User, Users, Menu, X, ChevronDown, Dumbbell, Baby, Table, HelpCircle, Heart, Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { type Lang, routeMap, getCurrentLang, getEquivalentPath } from "@/config/routes";

// --- i18n labels ---

const i18n: Record<Lang, {
  logo: [string, string];
  calculator: string;
  profiles: string;
  info: string;
  language: string;
  men: string;
  women: string;
  athletes: string;
  children: string;
  table: string;
  interpretation: string;
  limitations: string;
  faq: string;
  health: string;
  mobileProfiles: string;
  mobileInfo: string;
  mobileLang: string;
}> = {
  fr: {
    logo: ["Calculateur ", "IMC"],
    calculator: "Calculateur",
    profiles: "Profils",
    info: "Infos",
    language: "Langue",
    men: "IMC Homme",
    women: "IMC Femme",
    athletes: "IMC Sportif",
    children: "IMC Enfant",
    table: "Tableau IMC",
    interpretation: "Interpr\u00e9tation",
    limitations: "Limites IMC",
    faq: "FAQ",
    health: "Sant\u00e9 et Poids",
    mobileProfiles: "Profils",
    mobileInfo: "Informations",
    mobileLang: "Langues",
  },
  en: {
    logo: ["BMI ", "Calculator"],
    calculator: "Calculator",
    profiles: "Profiles",
    info: "Info",
    language: "Language",
    men: "BMI Men",
    women: "BMI Women",
    athletes: "BMI Athletes",
    children: "BMI Children",
    table: "BMI Table",
    interpretation: "Interpretation",
    limitations: "BMI Limitations",
    faq: "FAQ",
    health: "Health & Weight",
    mobileProfiles: "Profiles",
    mobileInfo: "Information",
    mobileLang: "Languages",
  },
  es: {
    logo: ["Calculadora ", "IMC"],
    calculator: "Calculadora",
    profiles: "Perfiles",
    info: "Info",
    language: "Idioma",
    men: "IMC Hombre",
    women: "IMC Mujer",
    athletes: "IMC Deportista",
    children: "IMC Ni\u00f1o",
    table: "Tabla IMC",
    interpretation: "Interpretaci\u00f3n",
    limitations: "Limitaciones",
    faq: "FAQ",
    health: "Salud y Peso",
    mobileProfiles: "Perfiles",
    mobileInfo: "Informaci\u00f3n",
    mobileLang: "Idiomas",
  },
  pt: {
    logo: ["Calculadora ", "IMC"],
    calculator: "Calculadora",
    profiles: "Perfis",
    info: "Info",
    language: "Idioma",
    men: "IMC Homem",
    women: "IMC Mulher",
    athletes: "IMC Atleta",
    children: "IMC Crian\u00e7a",
    table: "Tabela IMC",
    interpretation: "Interpreta\u00e7\u00e3o",
    limitations: "Limita\u00e7\u00f5es",
    faq: "FAQ",
    health: "Sa\u00fade e Peso",
    mobileProfiles: "Perfis",
    mobileInfo: "Informa\u00e7\u00e3o",
    mobileLang: "Idiomas",
  },
  de: {
    logo: ["BMI-", "Rechner"],
    calculator: "Rechner",
    profiles: "Profile",
    info: "Info",
    language: "Sprache",
    men: "BMI Männer",
    women: "BMI Frauen",
    athletes: "BMI Sportler",
    children: "BMI Kinder",
    table: "BMI-Tabelle",
    interpretation: "Interpretation",
    limitations: "BMI-Grenzen",
    faq: "FAQ",
    health: "Gesundheit",
    mobileProfiles: "Profile",
    mobileInfo: "Informationen",
    mobileLang: "Sprachen",
  },
  it: {
    logo: ["Calcolatore ", "IMC"],
    calculator: "Calcolatore",
    profiles: "Profili",
    info: "Info",
    language: "Lingua",
    men: "IMC Uomo",
    women: "IMC Donna",
    athletes: "IMC Sportivo",
    children: "IMC Bambino",
    table: "Tabella IMC",
    interpretation: "Interpretazione",
    limitations: "Limiti IMC",
    faq: "FAQ",
    health: "Salute e Peso",
    mobileProfiles: "Profili",
    mobileInfo: "Informazioni",
    mobileLang: "Lingue",
  },
  hi: {
    logo: ["BMI ", "कैलकुलेटर"],
    calculator: "कैलकुलेटर",
    profiles: "प्रोफाइल",
    info: "जानकारी",
    language: "भाषा",
    men: "BMI पुरुष",
    women: "BMI महिला",
    athletes: "BMI खिलाड़ी",
    children: "BMI बच्चे",
    table: "BMI तालिका",
    interpretation: "व्याख्या",
    limitations: "BMI सीमाएं",
    faq: "FAQ",
    health: "स्वास्थ्य",
    mobileProfiles: "प्रोफाइल",
    mobileInfo: "जानकारी",
    mobileLang: "भाषाएं",
  },
  ar: {
    logo: ["حاسبة ", "مؤشر كتلة الجسم"],
    calculator: "الحاسبة",
    profiles: "الفئات",
    info: "معلومات",
    language: "اللغة",
    men: "مؤشر الرجال",
    women: "مؤشر النساء",
    athletes: "مؤشر الرياضيين",
    children: "مؤشر الأطفال",
    table: "جدول المؤشر",
    interpretation: "تفسير المؤشر",
    limitations: "حدود المؤشر",
    faq: "أسئلة شائعة",
    health: "الصحة والوزن",
    mobileProfiles: "الفئات",
    mobileInfo: "معلومات",
    mobileLang: "اللغات",
  },
};

const langLabels: Record<Lang, string> = {
  fr: "Fran\u00e7ais",
  en: "English",
  es: "Espa\u00f1ol",
  pt: "Portugu\u00eas",
  de: "Deutsch",
  it: "Italiano",
  hi: "हिन्दी",
  ar: "العربية",
};

// --- Dropdown component ---

interface DropdownProps {
  label: string;
  icon: React.ElementType;
  items: { path: string; label: string; icon?: React.ElementType }[];
  isActive: (path: string) => boolean;
  onItemClick?: () => void;
}

const Dropdown = ({ label, icon: Icon, items, isActive, onItemClick }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const hasActiveItem = items.some(item => isActive(item.path));

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          hasActiveItem
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
        }`}
      >
        <Icon className="w-4 h-4" />
        {label}
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-lg shadow-lg py-1 z-50">
          {items.map((item) => {
            const ItemIcon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  setIsOpen(false);
                  onItemClick?.();
                }}
                className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                  isActive(item.path)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {ItemIcon && <ItemIcon className="w-4 h-4" />}
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

// --- Header component ---

export const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentLang = getCurrentLang(location.pathname);
  const t = i18n[currentLang];

  const mainLinks = [
    { path: routeMap.main[currentLang], label: t.calculator, icon: Activity },
  ];

  const profileLinks = [
    { path: routeMap.men[currentLang], label: t.men, icon: User },
    { path: routeMap.women[currentLang], label: t.women, icon: Users },
    { path: routeMap.athletes[currentLang], label: t.athletes, icon: Dumbbell },
    { path: routeMap.children[currentLang], label: t.children, icon: Baby },
  ];

  const infoLinks = [
    { path: routeMap.table[currentLang], label: t.table, icon: Table },
    { path: routeMap.interpretation[currentLang], label: t.interpretation, icon: HelpCircle },
    { path: routeMap.limitations[currentLang], label: t.limitations, icon: HelpCircle },
    { path: routeMap.faq[currentLang], label: t.faq, icon: HelpCircle },
    { path: routeMap.health[currentLang], label: t.health, icon: Heart },
  ];

  const languageLinks = (Object.keys(langLabels) as Lang[])
    .filter(lang => lang !== currentLang)
    .map(lang => ({
      path: getEquivalentPath(location.pathname, lang),
      label: langLabels[lang],
    }));

  const isActive = (path: string) => location.pathname === path;

  const allMobileLinks = [
    ...mainLinks,
    { type: "divider", label: t.mobileProfiles },
    ...profileLinks,
    { type: "divider", label: t.mobileInfo },
    ...infoLinks,
    { type: "divider", label: t.mobileLang },
    ...languageLinks.map(l => ({ ...l, icon: Globe })),
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to={routeMap.main[currentLang]} className="flex items-center gap-2 group">
            <img src="/logo.svg" alt="BMI Calculator" className="w-9 h-9 rounded-xl group-hover:scale-105 transition-transform" />
            <span className="font-display font-bold text-lg hidden sm:block">
              {t.logo[0]}<span className="gradient-text">{t.logo[1]}</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {mainLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}

            <Dropdown
              label={t.profiles}
              icon={User}
              items={profileLinks}
              isActive={isActive}
            />

            <Dropdown
              label={t.info}
              icon={HelpCircle}
              items={infoLinks}
              isActive={isActive}
            />

            <Dropdown
              label={t.language}
              icon={Globe}
              items={languageLinks}
              isActive={isActive}
            />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/40 max-h-[70vh] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {allMobileLinks.map((link, index) => {
                if ('type' in link && link.type === "divider") {
                  return (
                    <div key={index} className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-2">
                      {link.label}
                    </div>
                  );
                }
                const Icon = 'icon' in link ? link.icon : Activity;
                return (
                  <Link
                    key={'path' in link ? link.path : index}
                    to={'path' in link ? link.path : '/'}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      'path' in link && isActive(link.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                    {'label' in link ? link.label : ''}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
