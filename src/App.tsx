
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useState } from "react";
import { IntroPage } from "@/components/IntroPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Need2FixAssistant from "@/components/Need2FixAssistant";

const queryClient = new QueryClient();

const App = () => {
  const [showServices, setShowServices] = useState(false);

  const handleExploreServices = () => {
    setShowServices(true);
  };

  const handleBackToHome = () => {
    setShowServices(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="need2fix-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route 
                path="/" 
                element={
                  showServices ? 
                    <Index onBackToHome={handleBackToHome} showChatbotButton={true} /> : 
                    <IntroPage onExploreServices={handleExploreServices} />
                } 
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          {/* Chatbot only shows on home page (IntroPage) */}
          {!showServices && <Need2FixAssistant />}
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
