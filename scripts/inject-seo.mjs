/**
 * inject-seo.mjs
 *
 * Post-build script that generates a unique index.html per route
 * with the correct SEO meta tags injected into the static HTML.
 *
 * Usage: node scripts/inject-seo.mjs
 * Run after `npm run build` (reads dist/index.html as template).
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const BASE_URL = "https://bmi-imc.com";

// ---------------------------------------------------------------------------
// 1. Parse SEO data from src/config/seo.ts
// ---------------------------------------------------------------------------
const seoSource = readFileSync(join(ROOT, "src/config/seo.ts"), "utf-8");

// Extract the defaultSEO array entries using regex
const seoEntries = [];
const entryRegex = /\{\s*path:\s*"([^"]+)",\s*lang:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*description:\s*"([^"]+)",?\s*\}/g;
let match;
while ((match = entryRegex.exec(seoSource)) !== null) {
  seoEntries.push({
    path: match[1],
    lang: match[2],
    title: match[3],
    description: match[4],
  });
}
console.log(`[inject-seo] Found ${seoEntries.length} SEO entries`);

// ---------------------------------------------------------------------------
// 2. Parse route map from src/config/routes.ts
// ---------------------------------------------------------------------------
const routesSource = readFileSync(join(ROOT, "src/config/routes.ts"), "utf-8");

// Extract routeMap entries: key: { fr: "/...", en: "/...", ... }
const routeMap = {};
const routeLineRegex = /(\w+):\s*\{([^}]+)\}/g;
// Only match inside the routeMap block
const routeMapBlock = routesSource.match(/export const routeMap[^=]*=\s*\{([\s\S]*?)\n\};/);
if (routeMapBlock) {
  let lineMatch;
  while ((lineMatch = routeLineRegex.exec(routeMapBlock[1])) !== null) {
    const pageType = lineMatch[1];
    const pairs = lineMatch[2];
    const langPaths = {};
    const pairRegex = /(\w+):\s*"([^"]+)"/g;
    let pairMatch;
    while ((pairMatch = pairRegex.exec(pairs)) !== null) {
      langPaths[pairMatch[1]] = pairMatch[2];
    }
    routeMap[pageType] = langPaths;
  }
}
console.log(`[inject-seo] Found ${Object.keys(routeMap).length} route groups`);

// ---------------------------------------------------------------------------
// 3. Locale map
// ---------------------------------------------------------------------------
const localeMap = {
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

// ---------------------------------------------------------------------------
// 4. Build a lookup: path → alternates (for hreflang)
// ---------------------------------------------------------------------------
function getAlternates(path) {
  for (const routes of Object.values(routeMap)) {
    if (Object.values(routes).includes(path)) {
      return routes;
    }
  }
  return null;
}

function buildHreflangTags(path) {
  const alternates = getAlternates(path);
  if (!alternates) return "";

  const tags = [];
  for (const [lang, altPath] of Object.entries(alternates)) {
    const href = `${BASE_URL}${altPath === "/" ? "/" : altPath + "/"}`;
    tags.push(`<link rel="alternate" hreflang="${lang}" href="${href}" />`);
  }
  // x-default points to English version
  if (alternates.en) {
    const enPath = alternates.en;
    const href = `${BASE_URL}${enPath === "/" ? "/" : enPath + "/"}`;
    tags.push(`<link rel="alternate" hreflang="x-default" href="${href}" />`);
  }
  return tags.join("\n    ");
}

// ---------------------------------------------------------------------------
// 5. Read the template and inject SEO for each page
// ---------------------------------------------------------------------------
const template = readFileSync(join(DIST, "index.html"), "utf-8");

let generated = 0;

for (const entry of seoEntries) {
  const { path, lang, title, description } = entry;
  const canonical = `${BASE_URL}${path === "/" ? "/" : path + "/"}`;
  const ogLocale = localeMap[lang] || "en_US";
  const hreflangTags = buildHreflangTags(path);

  let html = template;
  html = html.replaceAll("__LANG__", lang);
  html = html.replaceAll("__TITLE__", title);
  html = html.replaceAll("__DESCRIPTION__", description);
  html = html.replaceAll("__CANONICAL__", canonical);
  html = html.replaceAll("__OG_LOCALE__", ogLocale);
  html = html.replace("__HREFLANG__", hreflangTags);

  if (path === "/") {
    // Homepage (EN) → overwrite dist/index.html directly
    writeFileSync(join(DIST, "index.html"), html);
    // Also copy as 404.html for SPA fallback
    writeFileSync(join(DIST, "404.html"), html);
    generated++;
  } else {
    // Strip leading slash for directory path
    const dirPath = path.startsWith("/") ? path.slice(1) : path;
    const outDir = join(DIST, dirPath);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, "index.html"), html);
    generated++;
  }
}

console.log(`[inject-seo] Generated ${generated} HTML files (including 404.html)`);
