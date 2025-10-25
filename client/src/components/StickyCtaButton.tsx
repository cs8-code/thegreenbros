import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyCtaButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("kontakt");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <Button
      size="lg"
      onClick={scrollToContact}
      className="fixed bottom-8 right-8 z-30 shadow-2xl rounded-full px-6 animate-fade-in"
      data-testid="button-sticky-cta"
    >
      Jetzt Angebot anfordern
      <ArrowUp className="ml-2 h-5 w-5" />
    </Button>
  );
}
