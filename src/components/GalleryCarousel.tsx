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
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const images = [
    {
      src: "/lovable-uploads/galeria/alface_americana_h2orti_hidroponia.jpg",
      alt: "Alface Americana H2orti Hidroponia"
    },
    {
      src: "/lovable-uploads/galeria/alface_crespa_h2orti_hidroponia.jpg",
      alt: "Alface Crespa H2orti Hidroponia"
    },
    {
      src: "/lovable-uploads/galeria/alface_lisa_e_alface_roxa_h2orti_hidroponia.jpg",
      alt: "Alface Lisa e Alface Roxa H2orti Hidroponia"
    },
    {
      src: "/lovable-uploads/galeria/alface_lisa_h2orti_hidroponia.jpg",
      alt: "Alface Lisa H2orti Hidroponia"
    },
    {
      src: "/lovable-uploads/galeria/brocolis_h2orti_hidroponia.jpg",
      alt: "Brócolis H2orti Hidroponia"
    },
    {
      src: "/lovable-uploads/galeria/cebolinha_h2orti_hidroponia.jpg",
      alt: "Cebolinha H2orti Hidroponia"
    },
    {
      src: "/lovable-uploads/galeria/couve_h2orti_hidroponia.jpg",
      alt: "Couve H2orti Hidroponia"
    },
    {
      src: "/lovable-uploads/galeria/hortela_e_cebolinha_h2orti_hidroponia.jpg",
      alt: "Hortelã e Cebolinha H2orti Hidroponia"
    },
    {
      src: "/lovable-uploads/galeria/hortela_h2orti_hidroponia.jpg",
      alt: "Hortelã H2orti Hidroponia"
    },
    {
      src: "/lovable-uploads/galeria/informativo_produtos_hidroponicos.jpg",
      alt: "Informativo Produtos Hidropônicos"
    },
    {
      src: "/lovable-uploads/galeria/producao_hidroponica.jpg",
      alt: "Produção Hidropônica"
    },
    {
      src: "/lovable-uploads/galeria/produtos_identificados_nas_embalagens.jpg",
      alt: "Produtos Identificados nas Embalagens"
    },
    {
      src: "/lovable-uploads/galeria/rucula_h2orti_hidroponia.jpg",
      alt: "Rúcula H2orti Hidroponia"
    },
    {
      src: "/lovable-uploads/galeria/tempero_verde_h2orti_hidroponia.jpg",
      alt: "Tempero Verde H2orti Hidroponia"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    // Auto-scroll every 3 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      clearInterval(interval);
      api.off("select", onSelect);
    };
  }, [api]);

  const handleImageClick = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-accent/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-gradient mb-4">Nossa Galeria</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça nossos produtos hidropônicos e nossa estrutura de produção
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <div 
                            className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                            onClick={() => handleImageClick(image)}
                          >
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <p className="text-sm font-medium">{image.alt}</p>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
                          <div className="relative">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                              <p className="text-white text-lg font-medium text-center">{image.alt}</p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>

            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === current ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
