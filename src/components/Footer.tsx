
import { Leaf, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/1ec50383-42d1-4f28-8379-d91e4fb5fd4f.png" 
                  alt="H2orti Hidroponia Logo" 
                  className="h-10 w-auto"
                />
                <div>
                  <h3 className="text-xl font-bold">H2orti Hidroponia</h3>
                  <p className="text-sm text-white/70">Produzindo saúde e qualidade</p>
                </div>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Desde 2014 revolucionando a produção de hortaliças com tecnologia sustentável. 
                Fornecemos produtos de qualidade premium para as maiores redes de supermercados de Minas Gerais.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/h2ortihidroponia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram H2orti Hidroponia"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/5538999259691" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#25D366] rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="WhatsApp H2orti Hidroponia"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Navegação</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/80 hover:text-secondary transition-colors duration-300"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/80 hover:text-secondary transition-colors duration-300"
                  >
                    Sobre
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/80 hover:text-secondary transition-colors duration-300"
                  >
                    Produtos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('diferenciais')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/80 hover:text-secondary transition-colors duration-300"
                  >
                    Diferenciais
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/80 hover:text-secondary transition-colors duration-300"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                  <a 
                    href="tel:+5538999259691"
                    className="text-white/80 hover:text-secondary transition-colors duration-300"
                  >
                    (38) 99925-9691
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                  <a 
                    href="mailto:fazendamacaubas@gmail.com"
                    className="text-white/80 hover:text-secondary transition-colors duration-300"
                  >
                    fazendamacaubas@gmail.com
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm">
                    Rodovia BR 251 Unaí a Paracatu KM 889
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/60 text-sm">
                © {currentYear} H2orti Hidroponia Fazenda Macaúbas LTDA-ME. Todos os direitos reservados.
              </div>
              <div className="flex items-center space-x-2 text-white/60 text-sm">
                <Leaf className="w-4 h-4 text-secondary" />
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
