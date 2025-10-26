import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#uber-uns", label: "Über uns" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#galerie", label: "Galerie" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className={`text-xl md:text-2xl font-bold transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
              data-testid="link-logo"
            >
              TheGreenBros
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  window.open("https://wa.me/491234567890", "_blank")
                }
                className={
                  isScrolled
                    ? ""
                    : "bg-white/10 border-white/30 text-white hover:bg-white/20"
                }
                data-testid="button-whatsapp"
              >
                <SiWhatsapp className="h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection("#kontakt")}
                className={
                  isScrolled
                    ? ""
                    : "bg-primary hover:bg-primary text-primary-foreground"
                }
                data-testid="button-cta-nav"
              >
                <Phone className="mr-2 h-4 w-4" />
                Angebot anfordern
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden ${isScrolled ? "" : "text-white hover:bg-white/10"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-background lg:hidden pt-16">
          <div className="flex flex-col items-center justify-center h-full gap-6 px-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-4 mt-4">
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  window.open("https://wa.me/4915774881745", "_blank");
                  setIsMobileMenuOpen(false);
                }}
              >
                <SiWhatsapp className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
              <Button size="lg" onClick={() => scrollToSection("#kontakt")}>
                Angebot anfordern
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
