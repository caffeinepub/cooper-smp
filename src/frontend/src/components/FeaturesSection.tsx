import { Pickaxe, Shield, Calendar, Heart } from 'lucide-react';
import { siteConfig } from '../siteConfig';

export function FeaturesSection() {
  const iconMap = {
    0: Pickaxe,
    1: Heart,
    2: Calendar,
    3: Shield
  };

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Cooper SMP?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience Minecraft the way it was meant to be played, with a thriving community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.features.map((feature, index) => {
            const Icon = iconMap[index as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
