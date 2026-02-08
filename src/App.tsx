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

// Spanish pages
import IMCEs from "./pages/es/IMC";
import IMCHombre from "./pages/es/IMCHombre";
import IMCMujer from "./pages/es/IMCMujer";

// Portuguese pages
import IMCPt from "./pages/pt/IMC";
import IMCHomemPt from "./pages/pt/IMCHomem";
import IMCMulherPt from "./pages/pt/IMCMulher";

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

          {/* Spanish pages */}
          <Route path="/es/imc" element={<IMCEs />} />
          <Route path="/es/imc-hombre" element={<IMCHombre />} />
          <Route path="/es/imc-mujer" element={<IMCMujer />} />

          {/* Portuguese pages */}
          <Route path="/pt/imc" element={<IMCPt />} />
          <Route path="/pt/imc-homem" element={<IMCHomemPt />} />
          <Route path="/pt/imc-mulher" element={<IMCMulherPt />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
