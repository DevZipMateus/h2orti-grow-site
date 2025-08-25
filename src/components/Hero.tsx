
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
            <Leaf className="w-4 h-4 mr-2 text-secondary" />
            <span className="text-sm font-medium">11 anos de experiência em hidroponia</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Produzimos
            <span className="block text-secondary">Saúde e Qualidade</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
            Hortaliças hidropônicas sustentáveis, produzidas com tecnologia avançada e baixo consumo de água
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <Droplets className="w-5 h-5 mr-2 text-secondary" />
              <span>Economia de Água</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <Leaf className="w-5 h-5 mr-2 text-secondary" />
              <span>100% Sustentável</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <span className="w-5 h-5 mr-2 text-secondary font-bold">🏆</span>
              <span>Grandes Redes</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{animationDelay: '0.9s'}}>
            <Button 
              size="lg"
              className="btn-hero text-lg px-8 py-4"
              onClick={() => scrollToSection('produtos')}
            >
              Nossos Produtos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="btn-outline text-lg px-8 py-4"
              onClick={() => window.open('https://wa.me/5538999259691', '_blank')}
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 animate-float" style={{animationDelay: '1s'}}>
        <Leaf className="w-12 h-12 text-white/20" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{animationDelay: '2s'}}>
        <Droplets className="w-10 h-10 text-white/20" />
      </div>
    </section>
  );
};

export default Hero;
