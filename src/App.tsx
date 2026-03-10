import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "./pages/Index";
import Introduction from "./pages/Introduction";
import PromptStructure from "./pages/PromptStructure";
import PromptTechniques from "./pages/PromptTechniques";
import PromptExamples from "./pages/PromptExamples";
import BestPractices from "./pages/BestPractices";
import Playground from "./pages/Playground";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/prompt-structure" element={<PromptStructure />} />
        <Route path="/prompt-techniques" element={<PromptTechniques />} />
        <Route path="/prompt-examples" element={<PromptExamples />} />
        <Route path="/best-practices" element={<BestPractices />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
