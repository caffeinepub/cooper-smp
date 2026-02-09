import { ThumbsUp, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { siteConfig } from '../siteConfig';

export function VoteSection() {
  const { vote } = siteConfig;
  const hasActiveLinks = vote.enabled && vote.links.some(link => link.url);

  return (
    <section id="vote" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <ThumbsUp className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vote for Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {vote.description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Vote Links</CardTitle>
              <CardDescription>
                {hasActiveLinks 
                  ? "Click on any platform below to vote and support our server!"
                  : "Vote links are being configured. Check back soon to support the server!"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {vote.links.map((link, index) => {
                  const isDisabled = !vote.enabled || !link.url;
                  
                  return (
                    <div key={index}>
                      {isDisabled ? (
                        <Button 
                          disabled 
                          variant="outline" 
                          className="w-full justify-between"
                          size="lg"
                        >
                          <span className="flex items-center">
                            <ThumbsUp className="mr-2 h-4 w-4" />
                            {link.label}
                          </span>
                          <span className="text-xs text-muted-foreground">Coming Soon</span>
                        </Button>
                      ) : (
                        <Button 
                          asChild 
                          variant="outline" 
                          className="w-full justify-between hover:bg-primary/5"
                          size="lg"
                        >
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <span className="flex items-center">
                              <ThumbsUp className="mr-2 h-4 w-4" />
                              {link.label}
                            </span>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
