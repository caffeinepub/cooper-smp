import { ShoppingBag, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { siteConfig } from '../siteConfig';

export function StoreSection() {
  const { store } = siteConfig;
  const isComingSoon = !store.enabled || !store.url;

  return (
    <section id="store" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <ShoppingBag className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Store</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {store.description}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Server Store</CardTitle>
              <CardDescription>
                {isComingSoon 
                  ? "Our store is currently being set up. Check back soon for exclusive items and perks!"
                  : "Browse our selection of ranks, cosmetics, and server perks."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isComingSoon ? (
                <Button disabled className="w-full" size="lg">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Coming Soon
                </Button>
              ) : (
                <Button asChild className="w-full" size="lg">
                  <a href={store.url} target="_blank" rel="noopener noreferrer">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    {store.ctaLabel}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
