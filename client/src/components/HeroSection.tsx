import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Stunning_hero_garden_landscape_474a809a.png";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("kontakt");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center text-white py-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          TheGreenBros
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed font-light">
          Ihr professioneller Partner für gewerbliche Grünflächenpflege mit über 10 Jahren Erfahrung – vertraut von Großkunden deutschlandweit!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary text-primary-foreground px-8 py-6 text-lg rounded-lg backdrop-blur-md border-2 border-primary-border"
            data-testid="button-cta-hero"
          >
            Kostenloses Angebot anfordern
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.open("tel:+491234567890", "_self")}
            className="px-8 py-6 text-lg rounded-lg backdrop-blur-md bg-white/10 border-2 border-white/30 text-white hover:bg-white/20"
            data-testid="button-phone-hero"
          >
            <Phone className="mr-2 h-5 w-5" />
            Jetzt anrufen
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
