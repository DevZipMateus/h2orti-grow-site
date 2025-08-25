
import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`nav-fixed ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
            <img 
              src="/lovable-uploads/1ec50383-42d1-4f28-8379-d91e4fb5fd4f.png" 
              alt="H2orti Hidroponia Logo" 
              className="h-8 sm:h-10 w-auto flex-shrink-0"
            />
            <div className="hidden sm:block min-w-0">
              <h1 className="text-lg sm:text-xl font-bold text-primary truncate">H2orti Hidroponia</h1>
              <p className="text-xs text-muted-foreground hidden lg:block">Produzindo saúde e qualidade</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors text-sm xl:text-base"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors text-sm xl:text-base"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('produtos')}
              className="text-foreground hover:text-primary transition-colors text-sm xl:text-base"
            >
              Produtos
            </button>
            <button 
              onClick={() => scrollToSection('diferenciais')}
              className="text-foreground hover:text-primary transition-colors text-sm xl:text-base"
            >
              Diferenciais
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors text-sm xl:text-base"
            >
              Contato
            </button>
            <Button 
              className="btn-primary text-sm xl:text-base px-3 xl:px-4 py-2"
              onClick={() => window.open('https://wa.me/5538999259691', '_blank')}
            >
              <Leaf className="w-4 h-4 mr-2" />
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-accent/20 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-foreground hover:text-primary transition-colors py-2 text-sm sm:text-base"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-foreground hover:text-primary transition-colors py-2 text-sm sm:text-base"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('produtos')}
                className="text-left text-foreground hover:text-primary transition-colors py-2 text-sm sm:text-base"
              >
                Produtos
              </button>
              <button 
                onClick={() => scrollToSection('diferenciais')}
                className="text-left text-foreground hover:text-primary transition-colors py-2 text-sm sm:text-base"
              >
                Diferenciais
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-foreground hover:text-primary transition-colors py-2 text-sm sm:text-base"
              >
                Contato
              </button>
              <Button 
                className="btn-primary w-full justify-center mt-4 text-sm sm:text-base"
                onClick={() => window.open('https://wa.me/5538999259691', '_blank')}
              >
                <Leaf className="w-4 h-4 mr-2" />
                Fale Conosco
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
