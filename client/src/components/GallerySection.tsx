import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import gardenTransform from "@assets/generated_images/Garden_transformation_before-after_comparison_cfe3b2ed.png";
import hedgeTransform from "@assets/generated_images/Hedge_trimming_before-after_d471f132.png";
import terrace from "@assets/generated_images/Modern_terrace_construction_project_56015dc0.png";
import treeCare from "@assets/generated_images/Professional_tree_care_service_7de45d7b.png";
import lawn from "@assets/generated_images/Freshly_mowed_striped_lawn_2b2227db.png";
import pathway from "@assets/generated_images/Landscaped_garden_pathway_design_b6ab986d.png";

const galleryImages = [
  { src: gardenTransform, alt: "Gartentransformation Vorher-Nachher", title: "Komplette Gartenumgestaltung" },
  { src: hedgeTransform, alt: "Heckenschnitt Vorher-Nachher", title: "Professioneller Heckenschnitt" },
  { src: terrace, alt: "Moderne Terrassenbau", title: "Terrassenbau mit Naturstein" },
  { src: treeCare, alt: "Professionelle Baumpflege", title: "Fachgerechte Baumpflege" },
  { src: lawn, alt: "Perfekt gepflegter Rasen", title: "Rasenpflege & Mähen" },
  { src: pathway, alt: "Gestalteter Gartenweg", title: "Landschaftsgestaltung" },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section id="galerie" className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Galerie & Referenzen
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Überzeugen Sie sich selbst von der Qualität unserer Arbeit – 
              hier sehen Sie eine Auswahl unserer erfolgreich abgeschlossenen Projekte.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl hover-elevate transition-all duration-300"
                onClick={() => setSelectedImage(index)}
                data-testid={`img-gallery-${index}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-semibold">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10"
            onClick={() => setSelectedImage(null)}
            data-testid="button-close-lightbox"
          >
            <X className="h-6 w-6" />
          </Button>
          <img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
