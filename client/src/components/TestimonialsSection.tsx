import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Familie Schmidt",
    role: "Privatkunde",
    content: "TheGreenBros hat unseren verwilderten Garten in ein wahres Paradies verwandelt. Die Arbeit war professionell, pünktlich und das Ergebnis übertrifft unsere Erwartungen!",
    rating: 5,
    initials: "FS",
  },
  {
    name: "Thomas Müller",
    role: "Geschäftsführer, TechPark GmbH",
    content: "Seit 3 Jahren pflegt TheGreenBros unsere Firmengrünflächen. Zuverlässig, kompetent und immer freundlich. Absolute Empfehlung für gewerbliche Kunden!",
    rating: 5,
    initials: "TM",
  },
  {
    name: "Andrea Weber",
    role: "Hausbesitzerin",
    content: "Der neue Terrassenbau hat unser Haus komplett aufgewertet. Die Beratung war ausgezeichnet und die Handwerkskunst ist erstklassig. Vielen Dank!",
    rating: 5,
    initials: "AW",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="bewertungen" className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Kundenbewertungen
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Das sagen unsere zufriedenen Kunden über unsere Arbeit
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="overflow-visible"
              data-testid={`card-testimonial-${index}`}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-sm md:text-base text-card-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-card-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
