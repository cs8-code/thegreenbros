import { Heart, Leaf, Award } from "lucide-react";
import aboutImage from "@assets/generated_images/Hands_planting_garden_flowers_58e7c601.png";

export default function AboutSection() {
  return (
    <section id="uber-uns" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Über uns
            </h2>
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
              Bei TheGreenBros verbinden wir Leidenschaft für die Natur mit jahrelanger Expertise. 
              Seit über 10 Jahren gestalten und pflegen wir Gärten und Außenanlagen mit höchster 
              Sorgfalt und Professionalität.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Unser Anspruch ist es, jeden Garten in eine grüne Oase zu verwandeln – ob für 
              Privatkunden oder gewerbliche Auftraggeber. Nachhaltigkeit, Zuverlässigkeit und 
              erstklassige Handwerkskunst stehen dabei immer im Mittelpunkt.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">10+ Jahre</h3>
                <p className="text-sm text-muted-foreground">Erfahrung</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">100% Nachhaltig</h3>
                <p className="text-sm text-muted-foreground">Umweltbewusst</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Mit Herz</h3>
                <p className="text-sm text-muted-foreground">Und Leidenschaft</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={aboutImage} 
              alt="Gärtner bei der Arbeit" 
              className="rounded-xl w-full h-auto object-cover shadow-lg"
              data-testid="img-about"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
