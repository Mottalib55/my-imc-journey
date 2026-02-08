import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { defaultSEO, getSEOForPath, saveSEOOverride, resetSEOOverride, resetAllSEOOverrides, type PageSEO } from "@/config/seo";
import { Lock, Save, RotateCcw, Globe, Check, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ADMIN_PASSWORD = "sofia";

const langNames: Record<string, string> = {
  fr: "Fran\u00e7ais",
  en: "English",
  es: "Espa\u00f1ol",
  pt: "Portugu\u00eas",
  ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
  de: "Deutsch",
  it: "Italiano",
  hi: "\u0939\u093f\u0928\u094d\u0926\u0940",
  zh: "\u4e2d\u6587",
};

const langColors: Record<string, string> = {
  fr: "blue",
  en: "green",
  es: "orange",
  pt: "purple",
  ar: "emerald",
  de: "yellow",
  it: "red",
  hi: "amber",
  zh: "rose",
};

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [activeLang, setActiveLang] = useState("fr");
  const [editingPath, setEditingPath] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [savedMessage, setSavedMessage] = useState<string | null>(null);
  const [seoData, setSeoData] = useState<PageSEO[]>([]);

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = () => {
    const data = defaultSEO.map((s) => getSEOForPath(s.path));
    setSeoData(data);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const startEdit = (page: PageSEO) => {
    setEditingPath(page.path);
    setEditTitle(page.title);
    setEditDescription(page.description);
  };

  const saveEdit = () => {
    if (!editingPath) return;
    saveSEOOverride(editingPath, { title: editTitle, description: editDescription });
    setEditingPath(null);
    refreshData();
    showSaved("Sauvegard\u00e9 !");
  };

  const handleReset = (path: string) => {
    resetSEOOverride(path);
    refreshData();
    showSaved("R\u00e9initialis\u00e9");
  };

  const handleResetAll = () => {
    resetAllSEOOverrides();
    refreshData();
    showSaved("Tout r\u00e9initialis\u00e9");
  };

  const showSaved = (msg: string) => {
    setSavedMessage(msg);
    setTimeout(() => setSavedMessage(null), 2000);
  };

  const pagesForLang = seoData.filter((s) => s.lang === activeLang);
  const defaultForPath = (path: string) => defaultSEO.find((s) => s.path === path);
  const isOverridden = (page: PageSEO) => {
    const def = defaultForPath(page.path);
    return def && (def.title !== page.title || def.description !== page.description);
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[80vh]">
          <form onSubmit={handleLogin} className="glass-card p-8 w-full max-w-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-2xl font-display font-bold">Admin SEO</h1>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Mot de passe</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(false); }}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="Entrez le mot de passe"
                  autoFocus
                />
                {error && (
                  <p className="text-destructive text-sm mt-2">Mot de passe incorrect</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Connexion
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container max-w-6xl py-8 px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold">Admin SEO</h1>
            <p className="text-muted-foreground mt-1">G\u00e9rez les titres et descriptions de vos {seoData.length} pages</p>
          </div>
          <div className="flex items-center gap-3">
            {savedMessage && (
              <span className="flex items-center gap-1 text-sm text-success animate-in fade-in">
                <Check className="w-4 h-4" />
                {savedMessage}
              </span>
            )}
            <button
              onClick={handleResetAll}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm hover:bg-muted transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Tout r\u00e9initialiser
            </button>
          </div>
        </div>

        {/* Language Tabs */}
        <div className="flex gap-2 mb-6">
          {Object.entries(langNames).map(([lang, name]) => {
            const count = seoData.filter((s) => s.lang === lang).length;
            return (
              <button
                key={lang}
                onClick={() => setActiveLang(lang)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeLang === lang
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <Globe className="w-4 h-4" />
                {name}
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeLang === lang ? "bg-primary-foreground/20" : "bg-muted"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Pages List */}
        <div className="space-y-4">
          {pagesForLang.map((page) => {
            const isEditing = editingPath === page.path;
            const modified = isOverridden(page);

            return (
              <div key={page.path} className={`glass-card p-6 ${modified ? "border-primary/30" : ""}`}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded text-xs font-mono bg-${langColors[page.lang]}-500/10 text-${langColors[page.lang]}-500`}>
                      {page.path}
                    </span>
                    {modified && (
                      <span className="px-2 py-1 rounded text-xs bg-primary/10 text-primary">
                        modifi\u00e9
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      to={page.path}
                      target="_blank"
                      className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                      title="Voir la page"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                    {modified && (
                      <button
                        onClick={() => handleReset(page.path)}
                        className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                        title="R\u00e9initialiser"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-xs font-medium text-muted-foreground">Title</label>
                        <span className={`text-xs ${editTitle.length > 60 ? "text-destructive" : "text-muted-foreground"}`}>
                          {editTitle.length}/60
                        </span>
                      </div>
                      <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors text-sm"
                        autoFocus
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-xs font-medium text-muted-foreground">Description</label>
                        <span className={`text-xs ${editDescription.length > 160 ? "text-destructive" : "text-muted-foreground"}`}>
                          {editDescription.length}/160
                        </span>
                      </div>
                      <textarea
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        rows={3}
                        className="w-full px-4 py-2 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none transition-colors text-sm resize-none"
                      />
                    </div>

                    {/* Google Preview */}
                    <div className="bg-muted/30 rounded-xl p-4">
                      <p className="text-xs text-muted-foreground mb-2">Aper\u00e7u Google</p>
                      <div className="space-y-1">
                        <p className="text-blue-600 text-lg leading-tight truncate">{editTitle || "Sans titre"}</p>
                        <p className="text-green-700 text-sm">https://bmi-imc.com{page.path}</p>
                        <p className="text-sm text-muted-foreground line-clamp-2">{editDescription || "Pas de description"}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={saveEdit}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        <Save className="w-4 h-4" />
                        Sauvegarder
                      </button>
                      <button
                        onClick={() => setEditingPath(null)}
                        className="px-4 py-2 rounded-lg border border-border text-sm hover:bg-muted transition-colors"
                      >
                        Annuler
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => startEdit(page)}
                    className="cursor-pointer hover:bg-muted/30 rounded-xl p-3 -m-3 transition-colors"
                  >
                    <div className="space-y-1">
                      <p className="text-blue-600 text-lg leading-tight truncate">{page.title}</p>
                      <p className="text-green-700 text-sm">https://bmi-imc.com{page.path}</p>
                      <p className="text-sm text-muted-foreground line-clamp-2">{page.description}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Cliquez pour modifier</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>Admin SEO - Les modifications sont sauvegard\u00e9es dans votre navigateur (localStorage)</p>
        </footer>
      </div>
    </div>
  );
};

export default Admin;
