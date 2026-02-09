import { Heart } from 'lucide-react';
import { siteConfig } from '../siteConfig';

export function Footer() {
  const caffeineUrl = `https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/assets/generated/cooper-smp-logo.dim_512x512.png" 
                alt={siteConfig.serverName}
                className="h-8 w-8"
              />
              <span className="font-bold text-lg">{siteConfig.serverName}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button 
                  onClick={() => document.getElementById('how-to-join')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-foreground transition-colors"
                >
                  How to Join
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('rules')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-foreground transition-colors"
                >
                  Server Rules
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-foreground transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Server Info</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Region: {siteConfig.region}</li>
              <li>Version: Java Edition</li>
              <li>
                <code className="bg-muted px-2 py-1 rounded text-xs">
                  {siteConfig.serverAddress}
                </code>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            © {new Date().getFullYear()}. Built with <Heart className="h-4 w-4 text-red-500 inline" /> using{' '}
            <a 
              href={caffeineUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
