import { Heart, Lightbulb, Users, Award } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Inovação',
    description: 'Metodologias modernas e tecnologia aplicada ao ensino.',
  },
  {
    icon: Award,
    title: 'Excelência',
    description: 'Compromisso com a qualidade educacional em todos os níveis.',
  },
  {
    icon: Heart,
    title: 'Acolhimento',
    description: 'Ambiente seguro e afetuoso para o desenvolvimento integral.',
  },
  {
    icon: Users,
    title: 'Formação Humana',
    description: 'Valores éticos e cidadania para uma sociedade melhor.',
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Uma História de <span className="text-primary">Compromisso</span> com a Educação
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Há mais de duas décadas, o Colégio Esfera tem sido referência em educação de qualidade 
              em Caraguatatuba. Nossa missão é formar cidadãos conscientes, críticos e preparados 
              para os desafios do futuro.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Com uma equipe de professores qualificados e uma infraestrutura moderna, oferecemos 
              um ambiente propício ao aprendizado, onde cada aluno é valorizado em sua individualidade 
              e estimulado a alcançar seu máximo potencial.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl bg-primary/10 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-success/20 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-5xl font-heading font-bold text-primary">20+</div>
                      <div className="text-muted-foreground mt-2">Anos de Excelência</div>
                    </div>
                  </div>
                </div>
                <div className="aspect-square rounded-2xl bg-accent/10 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-4xl font-heading font-bold text-accent">3</div>
                    <div className="text-muted-foreground text-sm mt-1">Níveis de Ensino</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl bg-success/10 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-4xl font-heading font-bold text-success">100%</div>
                    <div className="text-muted-foreground text-sm mt-1">Dedicação</div>
                  </div>
                </div>
                <div className="aspect-[4/5] rounded-2xl bg-primary overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center p-6">
                    <div className="text-center">
                      <div className="text-primary-foreground font-heading font-bold text-lg">
                        "Educação que transforma vidas"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-2/3 h-2/3 bg-secondary rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
