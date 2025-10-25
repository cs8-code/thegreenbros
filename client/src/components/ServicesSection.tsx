import { Leaf, TreeDeciduous, Scissors, Square, Axe, Snowflake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Leaf,
    title: "Laubentsorgung",
    description: "Professionelle Entfernung und fachgerechte Entsorgung von Laub – für einen sauberen Garten im Herbst.",
  },
  {
    icon: TreeDeciduous,
    title: "Baumpflege und Baumfällung",
    description: "Fachgerechter Baumschnitt, Kronenpflege und sichere Baumfällung durch erfahrene Spezialisten.",
  },
  {
    icon: Scissors,
    title: "Grünschnitt und Grünpflegeanlagen",
    description: "Regelmäßige Pflege und professioneller Schnitt von Hecken, Sträuchern und Grünanlagen.",
  },
  {
    icon: Square,
    title: "Pflasterarbeiten",
    description: "Hochwertige Pflasterarbeiten für Einfahrten, Wege und Terrassen – langlebig und ästhetisch.",
  },
  {
    icon: Axe,
    title: "Freischneiden",
    description: "Beseitigung von Wildwuchs und Gestrüpp – für freie Flächen und gepflegte Grundstücke.",
  },
  {
    icon: Snowflake,
    title: "Winterdienst",
    description: "Zuverlässiger Schneeräumdienst und Streudienst – für sichere Wege und Zufahrten im Winter.",
  },
];

export default function ServicesSection() {
  return (
    <section id="leistungen" className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Unsere Leistungen
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Von der Gartenpflege bis zum Landschaftsbau – wir bieten Ihnen alle Dienstleistungen 
            rund um Ihren Garten aus einer Hand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="hover-elevate transition-all duration-300 overflow-visible"
                data-testid={`card-service-${index}`}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
