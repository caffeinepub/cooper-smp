import { MessageSquare, Mail, Users } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';
import { siteConfig } from '../siteConfig';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community and stay connected with other players
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
            <div className="h-14 w-14 rounded-lg bg-[#5865F2]/10 flex items-center justify-center mb-4">
              <SiDiscord className="h-8 w-8 text-[#5865F2]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Join our Discord</h3>
            <p className="text-muted-foreground mb-4">
              Connect with the community, get support, and stay updated with server news and events.
            </p>
            <a
              href={siteConfig.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#5865F2] text-white rounded-lg font-semibold hover:bg-[#4752C4] transition-colors"
            >
              <SiDiscord className="h-5 w-5" />
              Join Discord
            </a>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-muted-foreground mb-6">
              Our friendly community is here to help you get started and make new friends.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MessageSquare className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">Active player base</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">Helpful staff team</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Have questions? Join our Discord server and our staff will be happy to help!
          </p>
        </div>
      </div>
    </section>
  );
}
