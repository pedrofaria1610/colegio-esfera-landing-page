import { 
  Users, 
  Building2, 
  Monitor, 
  Trophy, 
  Shield,
  BookOpenCheck
} from 'lucide-react';

const differentials = [
  {
    icon: Users,
    title: 'Professores Qualificados',
    description: 'Equipe pedagógica especializada e em constante atualização.',
  },
  {
    icon: Building2,
    title: 'Infraestrutura Moderna',
    description: 'Salas climatizadas, laboratórios e espaços de convivência.',
  },
  {
    icon: Monitor,
    title: 'Tecnologia no Ensino',
    description: 'Recursos digitais e metodologias ativas de aprendizagem.',
  },
  {
    icon: Trophy,
    title: 'Projetos Especiais',
    description: 'Atividades esportivas, culturais e científicas.',
  },
  {
    icon: Shield,
    title: 'Ambiente Seguro',
    description: 'Segurança e monitoramento para tranquilidade das famílias.',
  },
  {
    icon: BookOpenCheck,
    title: 'Ensino Personalizado',
    description: 'Atenção individualizada às necessidades de cada aluno.',
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nossos Diferenciais
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Por Que Escolher o <span className="text-primary">Colégio Esfera</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Combinamos tradição e inovação para oferecer uma educação completa, 
              que prepara seus filhos não apenas para exames, mas para a vida.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-primary/5">
                <div className="text-3xl font-heading font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground mt-1">Aprovação</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-success/5">
                <div className="text-3xl font-heading font-bold text-success">40+</div>
                <div className="text-sm text-muted-foreground mt-1">Professores</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-accent/5">
                <div className="text-3xl font-heading font-bold text-accent">5★</div>
                <div className="text-sm text-muted-foreground mt-1">Avaliação</div>
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
