import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getSEOForPath } from "@/config/seo";
import { getAlternates, localeMap, type Lang } from "@/config/routes";

const DOMAIN = "https://bmi-imc.com";

export const SEOHead = () => {
  const { pathname } = useLocation();
  const seo = getSEOForPath(pathname);
  const alternates = getAlternates(pathname);

  return (
    <Helmet>
      <html lang={seo.lang} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={`${DOMAIN}${seo.path}`} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={`${DOMAIN}${seo.path}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="BMI-IMC" />
      <meta property="og:locale" content={localeMap[seo.lang as Lang] || "en_US"} />
      {alternates && Object.entries(alternates)
        .filter(([lang]) => lang !== seo.lang)
        .map(([lang]) => (
          <meta key={`og-alt-${lang}`} property="og:locale:alternate" content={localeMap[lang as Lang]} />
        ))
      }
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {alternates && Object.entries(alternates).map(([lang, path]) => (
        <link key={`hreflang-${lang}`} rel="alternate" hrefLang={lang} href={`${DOMAIN}${path}`} />
      ))}
      {alternates && (
        <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}${alternates.en}`} />
      )}
    </Helmet>
  );
};
