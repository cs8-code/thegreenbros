import { Building2, Store, Leaf } from "lucide-react";

const clients = [
  { name: "ALDI Süd", icon: Store },
  { name: "Kivberg GmbH", icon: Building2 },
  { name: "Essener Gartenbau", icon: Leaf },
];

export default function ClientsSection() {
  return (
    <section className="py-12 md:py-16 bg-primary/5 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
            Vertrauen von Großkunden
          </h3>
          <p className="text-sm md:text-base text-muted-foreground">
            Führende Unternehmen setzen auf unsere Expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center gap-3 p-6 rounded-lg hover-elevate transition-all"
                data-testid={`client-${index}`}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <span className="text-base md:text-lg font-semibold text-foreground">
                  {client.name}
                </span>
              </div>
            );
          })}
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-8">
          ... und viele weitere zufriedene Gewerbekunden
        </p>
      </div>
    </section>
  );
}
