
import { Droplets, Shield, Zap, Leaf, Clock, Award } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    {
      icon: Droplets,
      title: "Economia de Água",
      description: "Utilizamos até 90% menos água que métodos tradicionais de cultivo",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Shield,
      title: "Livre de Agrotóxicos",
      description: "Produção 100% limpa, sem uso de pesticidas ou produtos químicos",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: Zap,
      title: "Tecnologia Avançada",
      description: "Sistema hidropônico automatizado para máxima eficiência",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Processo produtivo ecológico com mínimo impacto ambiental",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: Clock,
      title: "Frescor Garantido",
      description: "Colheita diária para máximo frescor e durabilidade",
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Produtos que atendem aos mais altos padrões de qualidade",
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-gradient mb-6">Nossos Diferenciais</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combinamos tecnologia, sustentabilidade e experiência para oferecer produtos de qualidade superior
            </p>
          </div>

          {/* Differentials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {differentials.map((differential, index) => (
              <div key={index} className="group text-center">
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl ${differential.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <differential.icon className="w-10 h-10" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4">{differential.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{differential.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-accent/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <div className="text-muted-foreground">Menos Água Utilizada</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                <div className="text-muted-foreground">Livre de Agrotóxicos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">365</div>
                <div className="text-muted-foreground">Dias de Produção</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
