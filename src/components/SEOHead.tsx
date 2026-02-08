import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getSEOForPath } from "@/config/seo";

export const SEOHead = () => {
  const { pathname } = useLocation();
  const seo = getSEOForPath(pathname);

  return (
    <Helmet>
      <html lang={seo.lang} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={`https://bmi-imc.com${seo.path}`} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={`https://bmi-imc.com${seo.path}`} />
      <meta property="og:locale" content={
        seo.lang === "fr" ? "fr_FR" :
        seo.lang === "en" ? "en_US" :
        seo.lang === "es" ? "es_ES" :
        "pt_BR"
      } />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
    </Helmet>
  );
};
