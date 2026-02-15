import { Link, useLocation } from "react-router-dom";
import { Activity, User, Users, Dumbbell, Baby, Table, HelpCircle, AlertTriangle, MessageCircleQuestion, Heart } from "lucide-react";
import { getCurrentLang, getPageType, routeMap } from "@/config/routes";
import { relatedPagesData, sectionHeadings } from "@/config/relatedPages";

const pageIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  main: Activity,
  men: User,
  women: Users,
  athletes: Dumbbell,
  children: Baby,
  table: Table,
  interpretation: HelpCircle,
  limitations: AlertTriangle,
  faq: MessageCircleQuestion,
  health: Heart,
};

export const RelatedPages = () => {
  const { pathname } = useLocation();
  const lang = getCurrentLang(pathname);
  const currentPageType = getPageType(pathname);
  const isRtl = lang === "ar";

  const otherPages = Object.keys(routeMap).filter((pt) => pt !== currentPageType);

  return (
    <nav aria-label={sectionHeadings[lang]} className="mt-12" dir={isRtl ? "rtl" : undefined}>
      <h2 className="text-2xl font-bold mb-6">{sectionHeadings[lang]}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherPages.map((pageType) => {
          const data = relatedPagesData[pageType]?.[lang];
          if (!data) return null;
          const Icon = pageIcons[pageType] || Activity;
          const href = routeMap[pageType]?.[lang];
          if (!href) return null;

          return (
            <Link
              key={pageType}
              to={href}
              className="glass-card p-4 flex items-start gap-3 hover:bg-primary/5 transition-colors group"
            >
              <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="font-semibold text-sm group-hover:text-primary transition-colors">
                  {data.title}
                </span>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {data.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
