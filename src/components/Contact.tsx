
import { MapPin, Phone, Mail, Clock, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.%0A%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0A%0AMensagem: ${formData.message}`;
    window.open(`https://wa.me/5538999259691?text=${whatsappMessage}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(38) 99925-9691",
      action: () => window.open('tel:+5538999259691', '_self'),
      color: "text-primary"
    },
    {
      icon: Mail,
      title: "Email",
      content: "fazendamacaubas@gmail.com",
      action: () => window.open('mailto:fazendamacaubas@gmail.com', '_self'),
      color: "text-secondary"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rodovia BR 251 Unaí a Paracatu KM 889",
      action: () => {},
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a Sábado: 7h às 18h",
      action: () => {},
      color: "text-secondary"
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@h2ortihidroponia",
      action: () => window.open('https://instagram.com/h2ortihidroponia', '_blank'),
      color: "text-primary"
    }
  ];

  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-gradient mb-4 sm:mb-6">Entre em Contato</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Estamos prontos para atender você. Entre em contato e descubra como nossos produtos podem fazer a diferença
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">Informações de Contato</h3>
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index} 
                      className={`flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-accent/10 ${info.action && (info.content.includes('@') || info.content.includes('(')) ? 'cursor-pointer hover:shadow-md transition-shadow duration-300' : ''}`}
                      onClick={info.action}
                    >
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${info.color === 'text-primary' ? 'bg-primary/10' : 'bg-secondary/10'} flex items-center justify-center flex-shrink-0`}>
                        <info.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${info.color}`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{info.title}</h4>
                        <p className="text-muted-foreground text-sm sm:text-base break-words">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Info */}
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-accent/10">
                <h4 className="font-bold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">H2orti Hidroponia Fazenda Macaúbas LTDA-ME</h4>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">CNPJ: 22.558.206/0001-74</p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Especializada na produção sustentável de hortaliças hidropônicas desde 2014
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-accent/10 order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Envie sua Mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-accent/20 focus:border-primary text-sm sm:text-base"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Seu email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-accent/20 focus:border-primary text-sm sm:text-base"
                  />
                </div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Seu telefone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border-accent/20 focus:border-primary text-sm sm:text-base"
                />
                <Textarea
                  name="message"
                  placeholder="Sua mensagem"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="border-accent/20 focus:border-primary resize-none text-sm sm:text-base"
                />
                <Button type="submit" className="btn-primary w-full text-sm sm:text-base">
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Enviar Mensagem via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
