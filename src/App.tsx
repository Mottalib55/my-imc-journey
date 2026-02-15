import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SEOHead } from "@/components/SEOHead";

// Main pages
import Index from "./pages/Index";
import IMCHomme from "./pages/IMCHomme";
import IMCFemme from "./pages/IMCFemme";
import IMCSportif from "./pages/IMCSportif";
import IMCEnfant from "./pages/IMCEnfant";

// Explanatory pages
import TableauIMC from "./pages/TableauIMC";
import InterpretationIMC from "./pages/InterpretationIMC";
import LimitesIMC from "./pages/LimitesIMC";

// Complementary pages
import FAQIMC from "./pages/FAQIMC";
import SanteEtPoids from "./pages/SanteEtPoids";

// English pages
import BMI from "./pages/en/BMI";
import BMIMen from "./pages/en/BMIMen";
import BMIWomen from "./pages/en/BMIWomen";
import BMIAthletes from "./pages/en/BMIAthletes";
import BMIChildren from "./pages/en/BMIChildren";
import BMITable from "./pages/en/BMITable";
import BMIInterpretation from "./pages/en/BMIInterpretation";
import BMILimitations from "./pages/en/BMILimitations";
import BMIFAQ from "./pages/en/BMIFAQ";
import HealthWeight from "./pages/en/HealthWeight";

// Spanish pages
import IMCEs from "./pages/es/IMC";
import IMCHombre from "./pages/es/IMCHombre";
import IMCMujer from "./pages/es/IMCMujer";
import IMCDeportista from "./pages/es/IMCDeportista";
import IMCNino from "./pages/es/IMCNino";
import TablaIMC from "./pages/es/TablaIMC";
import InterpretacionIMC from "./pages/es/InterpretacionIMC";
import LimitacionesIMC from "./pages/es/LimitacionesIMC";
import PreguntasFrecuentesIMC from "./pages/es/PreguntasFrecuentesIMC";
import SaludPeso from "./pages/es/SaludPeso";

// Portuguese pages
import IMCPt from "./pages/pt/IMC";
import IMCHomemPt from "./pages/pt/IMCHomem";
import IMCMulherPt from "./pages/pt/IMCMulher";
import IMCAtleta from "./pages/pt/IMCAtleta";
import IMCCrianca from "./pages/pt/IMCCrianca";
import TabelaIMC from "./pages/pt/TabelaIMC";
import InterpretacaoIMC from "./pages/pt/InterpretacaoIMC";
import LimitacoesIMC from "./pages/pt/LimitacoesIMC";
import PerguntasFrequentesIMC from "./pages/pt/PerguntasFrequentesIMC";
import SaudePeso from "./pages/pt/SaudePeso";

// Arabic pages
import IMCAr from "./pages/ar/IMC";
import IMCRajul from "./pages/ar/IMCRajul";
import IMCMaraa from "./pages/ar/IMCMaraa";
import IMCRiyadi from "./pages/ar/IMCRiyadi";
import IMCTifl from "./pages/ar/IMCTifl";
import JadwalIMC from "./pages/ar/JadwalIMC";
import TafsirIMC from "./pages/ar/TafsirIMC";
import HududIMC from "./pages/ar/HududIMC";
import AsilaIMC from "./pages/ar/AsilaIMC";
import SihaWazn from "./pages/ar/SihaWazn";

// German pages
import BMIDe from "./pages/de/BMI";
import BMIMaenner from "./pages/de/BMIMaenner";
import BMIFrauen from "./pages/de/BMIFrauen";
import BMISportler from "./pages/de/BMISportler";
import BMIKinder from "./pages/de/BMIKinder";
import BMITabelle from "./pages/de/BMITabelle";
import BMIInterpretationDe from "./pages/de/BMIInterpretation";
import BMIGrenzen from "./pages/de/BMIGrenzen";
import BMIFAQDe from "./pages/de/BMIFAQ";
import GesundheitGewicht from "./pages/de/GesundheitGewicht";

// Italian pages
import IMCIt from "./pages/it/IMC";
import IMCUomo from "./pages/it/IMCUomo";
import IMCDonna from "./pages/it/IMCDonna";
import IMCSportivo from "./pages/it/IMCSportivo";
import IMCBambino from "./pages/it/IMCBambino";
import TabellaIMC from "./pages/it/TabellaIMC";
import InterpretazioneIMC from "./pages/it/InterpretazioneIMC";
import LimitiIMC from "./pages/it/LimitiIMC";
import DomandeFrequentiIMC from "./pages/it/DomandeFrequentiIMC";
import SalutePeso from "./pages/it/SalutePeso";

// Hindi pages
import BMIHi from "./pages/hi/BMI";
import BMIPurush from "./pages/hi/BMIPurush";
import BMIMahila from "./pages/hi/BMIMahila";
import BMIKhiladi from "./pages/hi/BMIKhiladi";
import BMIBachche from "./pages/hi/BMIBachche";
import BMITalika from "./pages/hi/BMITalika";
import BMIVyakhya from "./pages/hi/BMIVyakhya";
import BMISeemayen from "./pages/hi/BMISeemayen";
import BMIPrashn from "./pages/hi/BMIPrashn";
import SwasthyaVajan from "./pages/hi/SwasthyaVajan";

// Chinese pages
import BMIZh from "./pages/zh/BMI";
import BMINanxing from "./pages/zh/BMINanxing";
import BMINvxing from "./pages/zh/BMINvxing";
import BMIYundongyuan from "./pages/zh/BMIYundongyuan";
import BMIErtong from "./pages/zh/BMIErtong";
import BMIBiao from "./pages/zh/BMIBiao";
import BMIJiedu from "./pages/zh/BMIJiedu";
import BMIJuxianxing from "./pages/zh/BMIJuxianxing";
import BMIChangjianwenti from "./pages/zh/BMIChangjianwenti";
import JiankangTizhong from "./pages/zh/JiankangTizhong";


import NotFound from "./pages/NotFound";

const StripTrailingSlash = () => {
  const { pathname } = useLocation();
  if (pathname !== "/" && pathname.endsWith("/")) {
    return <Navigate to={pathname.slice(0, -1)} replace />;
  }
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HelmetProvider>
      <BrowserRouter>
        <StripTrailingSlash />
        <SEOHead />
        <Routes>
          {/* Homepage = English */}
          <Route path="/" element={<BMI />} />

          {/* French pages */}
          <Route path="/imc" element={<Index />} />
          <Route path="/imc-homme" element={<IMCHomme />} />
          <Route path="/imc-femme" element={<IMCFemme />} />
          <Route path="/imc-sportif" element={<IMCSportif />} />
          <Route path="/imc-enfant" element={<IMCEnfant />} />

          {/* Explanatory pages */}
          <Route path="/tableau-imc" element={<TableauIMC />} />
          <Route path="/interpretation-imc" element={<InterpretationIMC />} />
          <Route path="/limites-imc" element={<LimitesIMC />} />

          {/* Complementary pages */}
          <Route path="/faq-imc" element={<FAQIMC />} />
          <Route path="/sante-et-poids" element={<SanteEtPoids />} />

          {/* English pages */}
          <Route path="/bmi-men" element={<BMIMen />} />
          <Route path="/bmi-women" element={<BMIWomen />} />
          <Route path="/bmi-athletes" element={<BMIAthletes />} />
          <Route path="/bmi-children" element={<BMIChildren />} />
          <Route path="/bmi-table" element={<BMITable />} />
          <Route path="/bmi-interpretation" element={<BMIInterpretation />} />
          <Route path="/bmi-limitations" element={<BMILimitations />} />
          <Route path="/bmi-faq" element={<BMIFAQ />} />
          <Route path="/health-weight" element={<HealthWeight />} />

          {/* Spanish pages */}
          <Route path="/es/imc" element={<IMCEs />} />
          <Route path="/es/imc-hombre" element={<IMCHombre />} />
          <Route path="/es/imc-mujer" element={<IMCMujer />} />
          <Route path="/es/imc-deportista" element={<IMCDeportista />} />
          <Route path="/es/imc-nino" element={<IMCNino />} />
          <Route path="/es/tabla-imc" element={<TablaIMC />} />
          <Route path="/es/interpretacion-imc" element={<InterpretacionIMC />} />
          <Route path="/es/limitaciones-imc" element={<LimitacionesIMC />} />
          <Route path="/es/preguntas-frecuentes-imc" element={<PreguntasFrecuentesIMC />} />
          <Route path="/es/salud-peso" element={<SaludPeso />} />

          {/* Portuguese pages */}
          <Route path="/pt/imc" element={<IMCPt />} />
          <Route path="/pt/imc-homem" element={<IMCHomemPt />} />
          <Route path="/pt/imc-mulher" element={<IMCMulherPt />} />
          <Route path="/pt/imc-atleta" element={<IMCAtleta />} />
          <Route path="/pt/imc-crianca" element={<IMCCrianca />} />
          <Route path="/pt/tabela-imc" element={<TabelaIMC />} />
          <Route path="/pt/interpretacao-imc" element={<InterpretacaoIMC />} />
          <Route path="/pt/limitacoes-imc" element={<LimitacoesIMC />} />
          <Route path="/pt/perguntas-frequentes-imc" element={<PerguntasFrequentesIMC />} />
          <Route path="/pt/saude-peso" element={<SaudePeso />} />

          {/* Arabic pages */}
          <Route path="/ar/imc" element={<IMCAr />} />
          <Route path="/ar/imc-rajul" element={<IMCRajul />} />
          <Route path="/ar/imc-maraa" element={<IMCMaraa />} />
          <Route path="/ar/imc-riyadi" element={<IMCRiyadi />} />
          <Route path="/ar/imc-tifl" element={<IMCTifl />} />
          <Route path="/ar/jadwal-imc" element={<JadwalIMC />} />
          <Route path="/ar/tafsir-imc" element={<TafsirIMC />} />
          <Route path="/ar/hudud-imc" element={<HududIMC />} />
          <Route path="/ar/asila-imc" element={<AsilaIMC />} />
          <Route path="/ar/siha-wazn" element={<SihaWazn />} />

          {/* German pages */}
          <Route path="/de/bmi" element={<BMIDe />} />
          <Route path="/de/bmi-maenner" element={<BMIMaenner />} />
          <Route path="/de/bmi-frauen" element={<BMIFrauen />} />
          <Route path="/de/bmi-sportler" element={<BMISportler />} />
          <Route path="/de/bmi-kinder" element={<BMIKinder />} />
          <Route path="/de/bmi-tabelle" element={<BMITabelle />} />
          <Route path="/de/bmi-interpretation" element={<BMIInterpretationDe />} />
          <Route path="/de/bmi-grenzen" element={<BMIGrenzen />} />
          <Route path="/de/bmi-faq" element={<BMIFAQDe />} />
          <Route path="/de/gesundheit-gewicht" element={<GesundheitGewicht />} />

          {/* Italian pages */}
          <Route path="/it/imc" element={<IMCIt />} />
          <Route path="/it/imc-uomo" element={<IMCUomo />} />
          <Route path="/it/imc-donna" element={<IMCDonna />} />
          <Route path="/it/imc-sportivo" element={<IMCSportivo />} />
          <Route path="/it/imc-bambino" element={<IMCBambino />} />
          <Route path="/it/tabella-imc" element={<TabellaIMC />} />
          <Route path="/it/interpretazione-imc" element={<InterpretazioneIMC />} />
          <Route path="/it/limiti-imc" element={<LimitiIMC />} />
          <Route path="/it/domande-frequenti-imc" element={<DomandeFrequentiIMC />} />
          <Route path="/it/salute-peso" element={<SalutePeso />} />

          {/* Hindi pages */}
          <Route path="/hi/bmi" element={<BMIHi />} />
          <Route path="/hi/bmi-purush" element={<BMIPurush />} />
          <Route path="/hi/bmi-mahila" element={<BMIMahila />} />
          <Route path="/hi/bmi-khiladi" element={<BMIKhiladi />} />
          <Route path="/hi/bmi-bachche" element={<BMIBachche />} />
          <Route path="/hi/bmi-talika" element={<BMITalika />} />
          <Route path="/hi/bmi-vyakhya" element={<BMIVyakhya />} />
          <Route path="/hi/bmi-seemayen" element={<BMISeemayen />} />
          <Route path="/hi/bmi-prashn" element={<BMIPrashn />} />
          <Route path="/hi/swasthya-vajan" element={<SwasthyaVajan />} />

          {/* Chinese pages */}
          <Route path="/zh/bmi" element={<BMIZh />} />
          <Route path="/zh/bmi-nanxing" element={<BMINanxing />} />
          <Route path="/zh/bmi-nvxing" element={<BMINvxing />} />
          <Route path="/zh/bmi-yundongyuan" element={<BMIYundongyuan />} />
          <Route path="/zh/bmi-ertong" element={<BMIErtong />} />
          <Route path="/zh/bmi-biao" element={<BMIBiao />} />
          <Route path="/zh/bmi-jiedu" element={<BMIJiedu />} />
          <Route path="/zh/bmi-juxianxing" element={<BMIJuxianxing />} />
          <Route path="/zh/bmi-changjianwenti" element={<BMIChangjianwenti />} />
          <Route path="/zh/jiankang-tizhong" element={<JiankangTizhong />} />


          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
