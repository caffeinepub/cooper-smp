import { ArrowRight, Users } from 'lucide-react';
import { siteConfig } from '../siteConfig';

export function HeroSection() {
  const scrollToJoin = () => {
    const element = document.getElementById('how-to-join');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/assets/generated/cooper-smp-hero-bg.dim_1920x800.png)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4 py-20">
        <div className="flex justify-center mb-8">
          <img 
            src="/assets/generated/cooper-smp-logo.dim_512x512.png" 
            alt={siteConfig.serverName}
            className="h-32 w-32 md:h-40 md:w-40 drop-shadow-2xl"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground drop-shadow-lg">
          {siteConfig.serverName}
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-medium">
          {siteConfig.tagline}
        </p>
        
        <div className="flex items-center justify-center gap-2 mb-8">
          <Users className="h-5 w-5 text-primary" />
          <p className="text-lg text-muted-foreground">
            European Minecraft Server
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToJoin}
            className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            Join Now
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="px-6 py-3 bg-card/80 backdrop-blur rounded-lg border border-border">
            <p className="text-sm text-muted-foreground mb-1">Server Address</p>
            <p className="font-mono font-bold text-foreground">{siteConfig.serverAddress}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
