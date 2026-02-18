import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { DemoSection } from './components/DemoSection';
import { RealityCheckSection } from './components/RealityCheckSection';
import { ExperienceSection } from './components/ExperienceSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ComplianceSection } from './components/ComplianceSection';
import { SDGsSection } from './components/SDGsSection';
import { ExternalPRSection } from './components/ExternalPRSection';
import { EngagementSection } from './components/EngagementSection';
import { ImpactSection } from './components/ImpactSection';
import { CO2CalculationSection } from './components/CO2CalculationSection';
import { ClosingSection } from './components/ClosingSection';
import { NavigationDots } from './components/NavigationDots';

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 14;

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0 && currentSection < totalSections - 1) {
        setCurrentSection(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && currentSection < totalSections - 1) {
        setCurrentSection(prev => prev + 1);
      } else if (e.key === 'ArrowUp' && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-green-50 to-blue-50">
      <div
        className="transition-transform duration-700 ease-out"
        style={{ transform: `translateY(-${currentSection * 100}vh)` }}
      >
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <DemoSection />
        <RealityCheckSection />
        <ExperienceSection />
        <BenefitsSection />
        <ComplianceSection />
        <SDGsSection />
        <ExternalPRSection />
        <EngagementSection />
        <ImpactSection />
        <CO2CalculationSection />
        <ClosingSection />
      </div>
      <NavigationDots 
        total={totalSections} 
        current={currentSection} 
        onChange={setCurrentSection}
      />
    </div>
  );
}