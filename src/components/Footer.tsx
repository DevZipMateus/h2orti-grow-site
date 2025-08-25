
import { Leaf, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <img 
                  src="/lovable-uploads/1ec50383-42d1-4f28-8379-d91e4fb5fd4f.png" 
                  alt="H2orti Hidroponia Logo" 
                  className="h-8 sm:h-10 w-auto"
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">H2orti Hidroponia</h3>
                  <p className="text-xs sm:text-sm text-white/70">Produzindo saúde e qualidade</p>
                </div>
              </div>
              <p className="text-white/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Desde 2014 revolucionando a produção de hortaliças com tecnologia sustentável. 
                Fornecemos produtos de qualidade premium para as maiores redes de supermercados de Minas Gerais.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <a 
                  href="https://instagram.com/h2ortihidroponia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram H2orti Hidroponia"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a 
                  href="https://wa.me/5538999259691" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-[#25D366] rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="WhatsApp H2orti Hidroponia"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Navegação</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <button 
                    onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/80 hover:text-secondary transition-colors duration-300 text-sm sm:text-base"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/80 hover:text-secondary transition-colors duration-300 text-sm sm:text-base"
                  >
                    Sobre
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/80 hover:text-secondary transition-colors duration-300 text-sm sm:text-base"
                  >
                    Produtos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('diferenciais')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/80 hover:text-secondary transition-colors duration-300 text-sm sm:text-base"
                  >
                    Diferenciais
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/80 hover:text-secondary transition-colors duration-300 text-sm sm:text-base"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Contato</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center space-x-2 sm:space-x-3">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-secondary flex-shrink-0" />
                  <a 
                    href="tel:+5538999259691"
                    className="text-white/80 hover:text-secondary transition-colors duration-300 text-sm sm:text-base"
                  >
                    (38) 99925-9691
                  </a>
                </li>
                <li className="flex items-center space-x-2 sm:space-x-3">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-secondary flex-shrink-0" />
                  <a 
                    href="mailto:fazendamacaubas@gmail.com"
                    className="text-white/80 hover:text-secondary transition-colors duration-300 text-xs sm:text-sm break-all"
                  >
                    fazendamacaubas@gmail.com
                  </a>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-xs sm:text-sm">
                    Rodovia BR 251 Unaí a Paracatu KM 889
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
              <div className="text-white/60 text-xs sm:text-sm text-center sm:text-left">
                © {currentYear} H2orti Hidroponia Fazenda Macaúbas LTDA-ME. Todos os direitos reservados.
              </div>
              <div className="flex items-center space-x-2 text-white/60 text-xs sm:text-sm">
                <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                <span>CNPJ: 22.558.206/0001-74</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
