import { Baby, Heart, Palette, Music, Users, BookOpen, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const features = [
  {
    icon: Heart,
    title: 'Acolhimento',
    description: 'Ambiente seguro e afetuoso onde cada criança se sente especial e valorizada.',
  },
  {
    icon: Palette,
    title: 'Criatividade',
    description: 'Atividades artísticas e lúdicas que estimulam a imaginação e expressão.',
  },
  {
    icon: Music,
    title: 'Musicalização',
    description: 'Desenvolvimento da sensibilidade musical e coordenação motora através da música.',
  },
  {
    icon: Users,
    title: 'Socialização',
    description: 'Interação saudável com colegas, desenvolvendo habilidades sociais essenciais.',
  },
  {
    icon: BookOpen,
    title: 'Pré-alfabetização',
    description: 'Contato inicial com letras e números de forma natural e prazerosa.',
  },
  {
    icon: Baby,
    title: 'Psicomotricidade',
    description: 'Atividades que desenvolvem coordenação motora fina e grossa.',
  },
];

const EducacaoInfantil = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-success/10 via-background to-background">
        <div className="container-custom">
          <Link to="/#ensino" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar para Níveis de Ensino
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-success/10 rounded-full px-4 py-2 mb-6">
                <Baby className="w-5 h-5 text-success" />
                <span className="text-success font-medium">2 a 5 anos</span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Educação <span className="text-success">Infantil</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                No Colégio Esfera, a Educação Infantil é o início de uma jornada de descobertas. 
                Com o material do <strong>Sistema Etapa</strong>, proporcionamos uma experiência 
                educacional de excelência desde os primeiros anos.
              </p>
              
              <p className="text-muted-foreground mb-8">
                Nossa equipe de professores altamente qualificados cria um ambiente acolhedor e 
                estimulante, onde cada criança é respeitada em sua individualidade. Trabalhamos 
                o desenvolvimento integral através de atividades lúdicas, artísticas e pedagógicas 
                cuidadosamente planejadas.
              </p>
              
              <Button variant="success" size="lg" asChild>
                <a href="/#contato">Agende uma Visita</a>
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-success/20 to-success/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <Baby className="w-24 h-24 text-success mx-auto mb-4" />
                  <div className="font-heading text-2xl font-bold text-foreground">
                    Aprender Brincando
                  </div>
                  <p className="text-muted-foreground mt-2">
                    Desenvolvimento integral com amor e dedicação
                  </p>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-success/10 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Sistema Etapa */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              Material <span className="text-primary">Sistema Etapa</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Utilizamos o renomado Sistema Etapa, reconhecido nacionalmente pela qualidade 
              pedagógica. O material é desenvolvido por especialistas em educação infantil e 
              proporciona atividades adequadas para cada faixa etária, estimulando o 
              desenvolvimento cognitivo, social e emocional.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="text-3xl font-heading font-bold text-success mb-2">Maternal</div>
                <p className="text-muted-foreground text-sm">2 a 3 anos</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="text-3xl font-heading font-bold text-success mb-2">Jardim I</div>
                <p className="text-muted-foreground text-sm">4 anos</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="text-3xl font-heading font-bold text-success mb-2">Jardim II</div>
                <p className="text-muted-foreground text-sm">5 anos</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
            Nossa Proposta <span className="text-success">Pedagógica</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-success">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold text-success-foreground mb-4">
            Venha Conhecer Nossa Escola
          </h2>
          <p className="text-success-foreground/80 mb-8 max-w-2xl mx-auto">
            Agende uma visita e conheça de perto nossa estrutura, metodologia e equipe 
            pedagógica. Estamos prontos para receber sua família!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-success hover:bg-white/90"
            asChild
          >
            <a href="/#contato">Agendar Visita</a>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default EducacaoInfantil;
