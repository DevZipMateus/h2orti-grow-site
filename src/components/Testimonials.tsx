
import { Star, Building2, ShoppingCart } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      company: "Supermercados BH",
      logo: Building2,
      feedback: "A H2orti Hidroponia fornece produtos de qualidade excepcional para nossa rede. A frescura e durabilidade dos produtos são incomparáveis.",
      rating: 5,
      color: "text-primary"
    },
    {
      company: "Martminas Atacado e Varejo",
      logo: ShoppingCart,
      feedback: "Parceria confiável há anos. Os produtos hidropônicos chegam sempre frescos e com excelente apresentação para nossos clientes.",
      rating: 5,
      color: "text-secondary"
    },
    {
      company: "Supermercados ABC",
      logo: Building2,
      feedback: "A qualidade constante e a sustentabilidade da produção da H2orti fazem toda a diferença em nosso portfólio de fornecedores.",
      rating: 5,
      color: "text-primary"
    },
    {
      company: "Villefort",
      logo: ShoppingCart,
      feedback: "Produtos premium que nossos clientes reconhecem pela qualidade superior. A H2orti é referência em hidroponia em Minas Gerais.",
      rating: 5,
      color: "text-secondary"
    },
    {
      company: "Bretas",
      logo: Building2,
      feedback: "A tecnologia sustentável e a dedicação da equipe H2orti resultam em hortaliças de padrão internacional para nossa rede.",
      rating: 5,
      color: "text-primary"
    }
  ];

  return (
    <section id="depoimentos" className="py-12 sm:py-16 lg:py-20 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-gradient mb-4 sm:mb-6">Parceiros de Sucesso</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Atendemos as maiores redes de supermercados de Minas Gerais com produtos de qualidade excepcional
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg card-hover border border-accent/10">
                {/* Header */}
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${testimonial.color === 'text-primary' ? 'bg-primary/10' : 'bg-secondary/10'} flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0`}>
                    <testimonial.logo className={`w-5 h-5 sm:w-6 sm:h-6 ${testimonial.color}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-foreground text-sm sm:text-base truncate">{testimonial.company}</h3>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Feedback */}
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{testimonial.feedback}</p>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-accent/10">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Confiança das Maiores Redes</h3>
              <p className="text-muted-foreground text-sm sm:text-base px-4">
                Nossa qualidade é reconhecida pelas principais redes de supermercados de Minas Gerais
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="text-center p-3 sm:p-4 rounded-lg bg-accent/5 border border-accent/10">
                  <testimonial.logo className={`w-6 h-6 sm:w-8 sm:h-8 ${testimonial.color} mx-auto mb-2`} />
                  <div className="text-xs sm:text-sm font-medium text-foreground">{testimonial.company}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
