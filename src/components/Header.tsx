import { Link, useLocation } from "react-router-dom";
import { Activity, User, Users, Menu, X, ChevronDown, Dumbbell, Baby, Table, HelpCircle, Heart, Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

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

export const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainLinks = [
    { path: "/", label: "Calculateur", icon: Activity },
  ];

  const profileLinks = [
    { path: "/imc-homme", label: "IMC Homme", icon: User },
    { path: "/imc-femme", label: "IMC Femme", icon: Users },
    { path: "/imc-sportif", label: "IMC Sportif", icon: Dumbbell },
    { path: "/imc-enfant", label: "IMC Enfant", icon: Baby },
  ];

  const infoLinks = [
    { path: "/tableau-imc", label: "Tableau IMC", icon: Table },
    { path: "/interpretation-imc", label: "Interpretation", icon: HelpCircle },
    { path: "/limites-imc", label: "Limites IMC", icon: HelpCircle },
    { path: "/faq-imc", label: "FAQ", icon: HelpCircle },
    { path: "/sante-et-poids", label: "Sante et Poids", icon: Heart },
  ];

  const languageLinks = [
    { path: "/bmi", label: "English (BMI)" },
    { path: "/es/imc", label: "Espanol" },
    { path: "/pt/imc", label: "Portugues" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const allMobileLinks = [
    ...mainLinks,
    { type: "divider", label: "Profils" },
    ...profileLinks,
    { type: "divider", label: "Informations" },
    ...infoLinks,
    { type: "divider", label: "Langues" },
    ...languageLinks.map(l => ({ ...l, icon: Globe })),
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display font-bold text-lg hidden sm:block">
              Calculateur <span className="gradient-text">IMC</span>
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
              label="Profils"
              icon={User}
              items={profileLinks}
              isActive={isActive}
            />

            <Dropdown
              label="Infos"
              icon={HelpCircle}
              items={infoLinks}
              isActive={isActive}
            />

            <Dropdown
              label="Langue"
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
