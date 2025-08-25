
import { ArrowRight, Leaf, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero-section min-h-screen flex items-center justify-center relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/593ab192-0aac-4b70-8709-1b4e5d768cb8.png)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content Container with Background */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl mx-4 sm:mx-0">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-2 sm:px-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6 sm:mb-8 animate-fade-in">
              <Leaf className="w-4 h-4 mr-2 text-secondary" />
              <span className="text-xs sm:text-sm font-medium text-white">11 anos de experiência em hidroponia</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 animate-slide-up text-white leading-tight">
              Produzimos
              <span className="block text-secondary">Saúde e Qualidade</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in leading-relaxed px-2" style={{animationDelay: '0.3s'}}>
              Hortaliças hidropônicas sustentáveis, produzidas com tecnologia avançada e baixo consumo de água
            </p>

            {/* Features */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 animate-fade-in px-2" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center bg-white/15 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 border border-white/30">
                <Droplets className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-secondary flex-shrink-0" />
                <span className="text-white text-sm sm:text-base">Economia de Água</span>
              </div>
              <div className="flex items-center bg-white/15 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 border border-white/30">
                <Leaf className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-secondary flex-shrink-0" />
                <span className="text-white text-sm sm:text-base">100% Sustentável</span>
              </div>
              <div className="flex items-center bg-white/15 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 border border-white/30">
                <span className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-secondary font-bold text-sm sm:text-base flex-shrink-0">🏆</span>
                <span className="text-white text-sm sm:text-base">Grandes Redes</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-scale-in px-2" style={{animationDelay: '0.9s'}}>
              <Button 
                size="lg"
                className="btn-hero text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                onClick={() => scrollToSection('produtos')}
              >
                Nossos Produtos
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="btn-outline text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                onClick={() => window.open('https://wa.me/5538999259691', '_blank')}
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements - Hidden on mobile */}
      <div className="hidden lg:block absolute top-20 left-10 animate-float" style={{animationDelay: '1s'}}>
        <Leaf className="w-12 h-12 text-white/20" />
      </div>
      <div className="hidden lg:block absolute bottom-20 right-10 animate-float" style={{animationDelay: '2s'}}>
        <Droplets className="w-10 h-10 text-white/20" />
      </div>
    </section>
  );
};

export default Hero;
