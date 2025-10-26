import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">
              TheGreenBros
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Ihr zuverlässiger Partner für professionelle Gartenpflege und
              Landschaftsbau mit über 10 Jahren Erfahrung.
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => window.open("https://facebook.com", "_blank")}
                data-testid="button-facebook"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => window.open("https://instagram.com", "_blank")}
                data-testid="button-instagram"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => window.open("https://linkedin.com", "_blank")}
                data-testid="button-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Schnellzugriff
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#uber-uns"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-about"
                >
                  Über uns
                </a>
              </li>
              <li>
                <a
                  href="#leistungen"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-services"
                >
                  Unsere Leistungen
                </a>
              </li>
              <li>
                <a
                  href="#galerie"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-gallery"
                >
                  Galerie
                </a>
              </li>
              <li>
                <a
                  href="#bewertungen"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-reviews"
                >
                  Bewertungen
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-contact"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Kontakt
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="tel:+491234567890"
                  className="hover:text-primary transition-colors"
                >
                  Tel: +49 1577 488 17 45
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@thegreenbros.de"
                  className="hover:text-primary transition-colors"
                >
                  info@thegreenbros.de
                </a>
              </li>
              <li className="pt-2">
                <strong className="text-foreground">Öffnungszeiten:</strong>
                <br />
                Mo-Fr: 07:00 - 18:00
                <br />
                Sa: 08:00 - 14:00
                <br />
                So: Geschlossen
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 TheGreenBros. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">
              Datenschutz
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
