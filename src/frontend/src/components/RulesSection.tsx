import { Shield, AlertCircle } from 'lucide-react';
import { siteConfig } from '../siteConfig';

export function RulesSection() {
  return (
    <section id="rules" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Server Rules</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please read and follow these rules to keep our community friendly and fun for everyone
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {siteConfig.rules.map((rule, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{rule.title}</h3>
                    <p className="text-muted-foreground text-sm">{rule.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-destructive mb-1">Important Notice</h3>
              <p className="text-sm text-muted-foreground">
                Breaking these rules may result in warnings, temporary bans, or permanent removal from the server. 
                Staff decisions are final. If you have questions about the rules, please ask in Discord.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
