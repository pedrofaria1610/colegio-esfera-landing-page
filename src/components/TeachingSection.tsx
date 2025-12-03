import { Baby, BookOpen, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const teachingLevels = [
  {
    icon: Baby,
    title: 'Educação Infantil',
    age: '2 a 5 anos',
    color: 'success',
    description: 'Desenvolvimento lúdico, social, emocional e cognitivo em um ambiente acolhedor e estimulante.',
    features: [
      'Aprendizado através do brincar',
      'Desenvolvimento socioemocional',
      'Estímulo à criatividade',
      'Preparação para alfabetização',
    ],
  },
  {
    icon: BookOpen,
    title: 'Ensino Fundamental',
    age: '6 a 14 anos',
    color: 'primary',
    description: 'Formação sólida com estímulo ao pensamento crítico e projetos pedagógicos inovadores.',
    features: [
      'Base curricular completa',
      'Projetos interdisciplinares',
      'Pensamento crítico',
      'Preparação acadêmica',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Ensino Médio',
    age: '15 a 17 anos',
    color: 'accent',
    description: 'Preparação completa para vestibulares, ENEM e desenvolvimento de autonomia para a vida profissional.',
    features: [
      'Preparação para vestibulares',
      'Orientação profissional',
      'Desenvolvimento de autonomia',
      'Simulados e revisões',
    ],
  },
];

const TeachingSection = () => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'success':
        return {
          bg: 'bg-success/10',
          icon: 'bg-success text-success-foreground',
          text: 'text-success',
          button: 'success' as const,
        };
      case 'accent':
        return {
          bg: 'bg-accent/10',
          icon: 'bg-accent text-accent-foreground',
          text: 'text-accent',
          button: 'accent' as const,
        };
      default:
        return {
          bg: 'bg-primary/10',
          icon: 'bg-primary text-primary-foreground',
          text: 'text-primary',
          button: 'default' as const,
        };
    }
  };

  return (
    <section id="ensino" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Níveis de Ensino
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Educação Completa para <span className="text-primary">Todas as Idades</span>
          </h2>
          <p className="text-muted-foreground">
            Do primeiro contato com a escola até a preparação para o vestibular, 
            acompanhamos cada etapa do desenvolvimento do seu filho.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {teachingLevels.map((level, index) => {
            const colors = getColorClasses(level.color);
            return (
              <div
                key={index}
                className="bg-card rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
              >
                {/* Card Header */}
                <div className={`${colors.bg} p-6`}>
                  <div className={`w-14 h-14 rounded-xl ${colors.icon} flex items-center justify-center mb-4`}>
                    <level.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                    {level.title}
                  </h3>
                  <span className={`text-sm font-medium ${colors.text}`}>
                    {level.age}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-6">
                    {level.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {level.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.icon}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={colors.button}
                    className="w-full group-hover:gap-4 transition-all"
                  >
                    Saiba Mais
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
