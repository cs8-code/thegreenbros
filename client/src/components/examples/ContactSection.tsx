import { TooltipProvider } from "@/components/ui/tooltip";
import ContactSection from '../ContactSection';

export default function ContactSectionExample() {
  return (
    <TooltipProvider>
      <ContactSection />
    </TooltipProvider>
  );
}
