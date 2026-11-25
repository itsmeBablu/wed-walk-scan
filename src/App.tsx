import { useEffect } from 'react';
import { ScrollTrigger } from '@/animations/gsapConfig';
import { LanguageProvider } from '@/hooks/LanguageProvider';
import { ThemeProvider } from '@/hooks/ThemeProvider';
import { useLanguage } from '@/hooks/useLanguage';
import { MainLayout } from '@/layouts/MainLayout';
import { BrandStorySection } from '@/sections/BrandStorySection';
import { DeliverablesSection } from '@/sections/DeliverablesSection';
import { DesignStudioSection } from '@/sections/DesignStudioSection';
import { DownloadsSection } from '@/sections/DownloadsSection';
import { EcosystemSection } from '@/sections/EcosystemSection';
import { ExportsSection } from '@/sections/ExportsSection';
import { FaqSection } from '@/sections/FaqSection';
import { FeaturesBentoSection } from '@/sections/FeaturesBentoSection';
import { HeroSection } from '@/sections/HeroSection';
import { OverviewSection } from '@/sections/OverviewSection';
import { SurveyEvidenceSection } from '@/sections/SurveyEvidenceSection';
import { TechnicalRoomSection } from '@/sections/TechnicalRoomSection';

function AppContent() {
  const { language } = useLanguage();

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    });
    return () => window.cancelAnimationFrame(id);
  }, [language]);

  return (
    <MainLayout>
      <HeroSection />
      <EcosystemSection />
      <BrandStorySection />
      <OverviewSection />
      <FeaturesBentoSection />
      <DesignStudioSection />
      <TechnicalRoomSection />
      <ExportsSection />
      <SurveyEvidenceSection />
      <DeliverablesSection />
      <DownloadsSection />
      <FaqSection />
    </MainLayout>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
