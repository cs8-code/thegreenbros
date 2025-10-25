import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: remove mock functionality - connect to backend API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", formData);
    
    toast({
      title: "Anfrage gesendet!",
      description: "Vielen Dank! Wir melden uns in Kürze bei Ihnen.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="kontakt" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Kontakt & Angebot anfordern
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Haben Sie Fragen oder möchten Sie ein kostenloses Angebot? 
            Kontaktieren Sie uns – wir freuen uns auf Ihr Projekt!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ihr vollständiger Name"
                  className="w-full"
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                  E-Mail *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ihre.email@beispiel.de"
                  className="w-full"
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-sm font-medium mb-2 block">
                  Telefonnummer
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+49 123 456789"
                  className="w-full"
                  data-testid="input-phone"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Ihre Nachricht *
                </Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                  className="w-full min-h-32"
                  data-testid="input-message"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
                data-testid="button-submit"
              >
                {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground">
                Kontaktinformationen
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Telefon</p>
                    <a 
                      href="tel:+491234567890" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-phone"
                    >
                      +49 123 456 7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">E-Mail</p>
                    <a 
                      href="mailto:info@thegreenbros.de" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      info@thegreenbros.de
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Servicegebiet</p>
                    <p className="text-muted-foreground">
                      Deutschland<br />
                      Überregionale Dienstleistungen
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Öffnungszeiten</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Montag - Freitag:</span>
                  <span className="font-medium text-foreground">07:00 - 18:00 Uhr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Samstag:</span>
                  <span className="font-medium text-foreground">08:00 - 14:00 Uhr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sonntag:</span>
                  <span className="font-medium text-foreground">Geschlossen</span>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409473461829!2d13.404954!3d52.520008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburger%20Tor!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Standort"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
