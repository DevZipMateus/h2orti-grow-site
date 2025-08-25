
import { Leaf, Droplets, Shield, Sparkles } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: "Alfaces",
      description: "Variedades crocantes e saborosas, produzidas com tecnologia hidropônica",
      features: ["Crocante", "Rica em nutrientes", "Livre de agrotóxicos"],
      icon: Leaf,
      color: "bg-secondary/10 text-secondary"
    },
    {
      name: "Rúcula",
      description: "Folhas tenras com sabor marcante, perfeitas para saladas gourmet",
      features: ["Sabor intenso", "Textura ideal", "Frescor garantido"],
      icon: Sparkles,
      color: "bg-primary/10 text-primary"
    },
    {
      name: "Agrião",
      description: "Rico em vitaminas e minerais, cultivado em ambiente controlado",
      features: ["Alto valor nutricional", "Sabor característico", "Qualidade superior"],
      icon: Droplets,
      color: "bg-secondary/10 text-secondary"
    },
    {
      name: "Temperos",
      description: "Salsa, cebolinha, coentro e hortelã frescos para sua cozinha",
      features: ["Aroma intenso", "Frescor duradouro", "Variedade completa"],
      icon: Shield,
      color: "bg-primary/10 text-primary"
    },
    {
      name: "Couve",
      description: "Folhas verdes escuras, ricas em ferro e vitaminas essenciais",
      features: ["Rica em ferro", "Folhas tenras", "Produção sustentável"],
      icon: Leaf,
      color: "bg-secondary/10 text-secondary"
    },
    {
      name: "Brócolis",
      description: "Inflorescências nutritivas, cultivadas com cuidado especial",
      features: ["Rico em antioxidantes", "Textura perfeita", "Sabor suave"],
      icon: Sparkles,
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <section id="produtos" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-gradient mb-4 sm:mb-6">Nossos Produtos</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Hortaliças hidropônicas de alta qualidade, produzidas com tecnologia sustentável e cuidado especial
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {products.map((product, index) => (
              <div key={index} className="product-card group">
                <div className="p-4 sm:p-6">
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl ${product.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{product.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-accent/10 to-secondary/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-accent/20">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
              Interested in our fresh produce?
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Entre em contato conosco para conhecer nossa linha completa de produtos hidropônicos 
              e descobrir como podemos atender às suas necessidades.
            </p>
            <button 
              onClick={() => window.open('https://wa.me/5538999259691', '_blank')}
              className="btn-primary px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg text-sm sm:text-base w-full sm:w-auto"
            >
              <Leaf className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
