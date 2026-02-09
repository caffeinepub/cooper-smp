import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '../siteConfig';

export function HowToJoinSection() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(siteConfig.serverAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      number: "1",
      title: "Launch Minecraft",
      description: "Open Minecraft Java Edition (version 1.20 or later recommended)"
    },
    {
      number: "2",
      title: "Go to Multiplayer",
      description: "Click on 'Multiplayer' from the main menu"
    },
    {
      number: "3",
      title: "Add Server",
      description: "Click 'Add Server' and enter the server address below"
    },
    {
      number: "4",
      title: "Join & Play",
      description: "Select the server and click 'Join Server' to start playing!"
    }
  ];

  return (
    <section id="how-to-join" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Join</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to start your adventure on Cooper SMP
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-accent/50 border-2 border-primary/20 rounded-lg p-8 text-center">
            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">
              Server Address
            </p>
            <div className="flex items-center justify-center gap-3 mb-4">
              <code className="text-2xl md:text-3xl font-bold font-mono text-foreground">
                {siteConfig.serverAddress}
              </code>
              <button
                onClick={copyToClipboard}
                className="p-2 hover:bg-primary/10 rounded-md transition-colors"
                aria-label="Copy server address"
              >
                {copied ? (
                  <Check className="h-6 w-6 text-primary" />
                ) : (
                  <Copy className="h-6 w-6 text-muted-foreground" />
                )}
              </button>
            </div>
            <p className="text-sm text-muted-foreground">
              Click to copy • Java Edition • {siteConfig.region} Server
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
