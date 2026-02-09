import { SiteLayout } from './components/SiteLayout';
import { HeroSection } from './components/HeroSection';
import { HowToJoinSection } from './components/HowToJoinSection';
import { RulesSection } from './components/RulesSection';
import { ContactSection } from './components/ContactSection';
import { FeaturesSection } from './components/FeaturesSection';

function App() {
  return (
    <SiteLayout>
      <HeroSection />
      <FeaturesSection />
      <HowToJoinSection />
      <RulesSection />
      <ContactSection />
    </SiteLayout>
  );
}

export default App;
