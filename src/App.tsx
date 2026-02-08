import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main French pages */}
          <Route path="/" element={<Index />} />
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
          <Route path="/bmi" element={<BMI />} />
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

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
