
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { CarouselApi } from "@/components/ui/carousel";

const GalleryCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const images = [
    {
      src: "/lovable-uploads/galeria/alface_americana_h2orti_hidroponia.jpg",
      alt: "Alface Americana H2orti Hidroponia - Folhas crocantes e nutritivas"
    },
    {
      src: "/lovable-uploads/galeria/alface_crespa_h2orti_hidroponia.jpg",
      alt: "Alface Crespa H2orti Hidroponia - Textura única e sabor marcante"
    },
    {
      src: "/lovable-uploads/galeria/alface_lisa_e_alface_roxa_h2orti_hidroponia.jpg",
      alt: "Alface Lisa e Roxa H2orti Hidroponia - Variedade e qualidade"
    },
    {
      src: "/lovable-uploads/galeria/alface_lisa_h2orti_hidroponia.jpg",
      alt: "Alface Lisa H2orti Hidroponia - Folhas tenras e saborosas"
    },
    {
      src: "/lovable-uploads/galeria/brocolis_h2orti_hidroponia.jpg",
      alt: "Brócolis H2orti Hidroponia - Rico em nutrientes e antioxidantes"
    },
    {
      src: "/lovable-uploads/galeria/cebolinha_h2orti_hidroponia.jpg",
      alt: "Cebolinha H2orti Hidroponia - Tempero fresco e aromático"
    },
    {
      src: "/lovable-uploads/galeria/couve_h2orti_hidroponia.jpg",
      alt: "Couve H2orti Hidroponia - Rica em ferro e vitaminas"
    },
    {
      src: "/lovable-uploads/galeria/hortela_e_cebolinha_h2orti_hidroponia.jpg",
      alt: "Hortelã e Cebolinha H2orti Hidroponia - Combinação perfeita de temperos"
    },
    {
      src: "/lovable-uploads/galeria/hortela_h2orti_hidroponia.jpg",
      alt: "Hortelã H2orti Hidroponia - Aroma refrescante e intenso"
    },
    {
      src: "/lovable-uploads/galeria/informativo_produtos_hidroponicos.jpg",
      alt: "Informativo Produtos Hidropônicos H2orti - Qualidade e sustentabilidade"
    },
    {
      src: "/lovable-uploads/galeria/producao_hidroponica.jpg",
      alt: "Produção Hidropônica H2orti - Tecnologia sustentável em ação"
    },
    {
      src: "/lovable-uploads/galeria/produtos_identificados_nas_embalagens.jpg",
      alt: "Produtos Identificados H2orti - Rastreabilidade e qualidade garantida"
    },
    {
      src: "/lovable-uploads/galeria/rucula_h2orti_hidroponia.jpg",
      alt: "Rúcula H2orti Hidroponia - Sabor marcante para saladas gourmet"
    },
    {
      src: "/lovable-uploads/galeria/tempero_verde_h2orti_hidroponia.jpg",
      alt: "Tempero Verde H2orti Hidroponia - Frescor e sabor únicos"
    }
  ];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  // Update current slide when carousel changes
  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-accent/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-gradient mb-4 sm:mb-6">Nossa Galeria</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Conheça de perto a qualidade dos nossos produtos hidropônicos e nossa tecnologia sustentável
            </p>
          </div>

          {/* Gallery Carousel */}
          <div className="relative">
            <Carousel
              setApi={setApi}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2 sm:-ml-4">
                {images.map((image, index) => (
                  <CarouselItem key={index} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="p-1 sm:p-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <p className="text-xs sm:text-sm font-medium line-clamp-2">{image.alt}</p>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-[95vw] sm:max-w-4xl p-0 bg-transparent border-0">
                          <div className="relative">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                              <p className="text-white text-sm sm:text-lg font-medium text-center">{image.alt}</p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Navigation Buttons - Hidden on mobile */}
              <div className="hidden sm:block">
                <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
              </div>
            </Carousel>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center space-x-4 mt-4 sm:hidden">
              <button
                onClick={() => api?.scrollPrev()}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md border border-accent/20 text-foreground hover:bg-accent/10 transition-colors"
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                onClick={() => api?.scrollNext()}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md border border-accent/20 text-foreground hover:bg-accent/10 transition-colors"
                aria-label="Next image"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
