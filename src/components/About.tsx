
import { Calendar, Users, Leaf, Award } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Calendar,
      number: "11+",
      label: "Anos de Experiência",
      color: "text-primary"
    },
    {
      icon: Users,
      number: "5+",
      label: "Grandes Redes Atendidas",
      color: "text-secondary"
    },
    {
      icon: Leaf,
      number: "10+",
      label: "Tipos de Hortaliças",
      color: "text-primary"
    },
    {
      icon: Award,
      number: "100%",
      label: "Produção Sustentável",
      color: "text-secondary"
    }
  ];

  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-gradient mb-4 sm:mb-6">Sobre a H2orti Hidroponia</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Desde 2014, revolucionamos a produção de hortaliças com tecnologia sustentável e qualidade excepcional
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            {/* Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Nossa História</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Criada em 2014, após vários cursos e estudos, e uma vasta experiência na produção de hortaliças e frutas, 
                  a H2orti Hidroponia nasceu com o propósito de produzir saúde e qualidade.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Produzimos folhosas como alfaces, rúcula, agrião, salsa, cebolinha, coentro, couve, hortelã e brócolis 
                  em hidroponia, utilizando tecnologia avançada que garante eficiência, saúde e sustentabilidade.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Tecnologia Sustentável</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Com mais de 11 anos de experiência, produzimos folhosas com eficiência, saúde e tecnologia, 
                  usando baixo volume de água quando comparado ao sistema convencional de plantio.
                </p>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-secondary flex-shrink-0 mt-1" />
                <p className="text-xs sm:text-sm text-muted-foreground">
                  <strong className="text-foreground">Sustentabilidade:</strong> Nossa tecnologia hidropônica 
                  utiliza até 90% menos água que métodos tradicionais
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative order-1 lg:order-2 lg:pl-8">
              <div className="w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/1ec50383-42d1-4f28-8379-d91e4fb5fd4f.png" 
                  alt="H2orti Hidroponia - Produção sustentável de hortaliças" 
                  className="w-full h-full object-contain bg-white p-2 sm:p-4"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 lg:-bottom-6 lg:-right-6 bg-secondary text-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl shadow-lg animate-pulse-green">
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold">2014</div>
                  <div className="text-xs sm:text-sm">Fundação</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-lg card-hover border border-accent/10"
              >
                <stat.icon className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${stat.color} mx-auto mb-3 sm:mb-4`} />
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
