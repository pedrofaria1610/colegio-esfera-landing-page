import { BookOpen, Brain, Microscope, Globe, Calculator, Pen, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const features = [
  {
    icon: Brain,
    title: 'Pensamento Crítico',
    description: 'Desenvolvimento da capacidade de análise, argumentação e resolução de problemas.',
  },
  {
    icon: Microscope,
    title: 'Projetos Científicos',
    description: 'Experimentação prática que desperta a curiosidade e o interesse pela ciência.',
  },
  {
    icon: Globe,
    title: 'Ensino Bilíngue',
    description: 'Inglês integrado ao currículo, preparando para um mundo globalizado.',
  },
  {
    icon: Calculator,
    title: 'Matemática Aplicada',
    description: 'Metodologia que conecta conceitos matemáticos ao cotidiano do aluno.',
  },
  {
    icon: Pen,
    title: 'Produção Textual',
    description: 'Estímulo à leitura e escrita criativa, desenvolvendo a comunicação.',
  },
  {
    icon: BookOpen,
    title: 'Interdisciplinaridade',
    description: 'Projetos que integram diferentes áreas do conhecimento.',
  },
];

const EnsinoFundamental = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container-custom">
          <Link to="/#ensino" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar para Níveis de Ensino
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium">6 a 14 anos</span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ensino <span className="text-primary">Fundamental</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                O Ensino Fundamental do Colégio Esfera oferece uma formação sólida e completa, 
                utilizando o material do <strong>Sistema Etapa</strong> — reconhecido por preparar 
                alunos para os maiores desafios acadêmicos do país.
              </p>
              
              <p className="text-muted-foreground mb-8">
                Nossa equipe de professores altamente capacitados trabalha com metodologias 
                inovadoras que estimulam o pensamento crítico, a criatividade e a autonomia. 
                Em um ambiente inclusivo e acolhedor, cada aluno recebe atenção individualizada 
                para desenvolver seu máximo potencial.
              </p>
              
              <Button variant="default" size="lg" asChild>
                <a href="/#contato">Agende uma Visita</a>
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <BookOpen className="w-24 h-24 text-primary mx-auto mb-4" />
                  <div className="font-heading text-2xl font-bold text-foreground">
                    Base Sólida para o Futuro
                  </div>
                  <p className="text-muted-foreground mt-2">
                    Conhecimento e valores para a vida
                  </p>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-3xl" />
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
              O Sistema Etapa é referência nacional em qualidade educacional. Com material 
              didático atualizado e metodologia comprovada, preparamos nossos alunos não 
              apenas para provas, mas para os desafios da vida. O conteúdo é organizado 
              de forma progressiva, respeitando o desenvolvimento de cada faixa etária.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="text-3xl font-heading font-bold text-primary mb-2">Anos Iniciais</div>
                <p className="text-muted-foreground text-sm">1º ao 5º ano</p>
                <p className="text-muted-foreground text-xs mt-2">Alfabetização, letramento e bases matemáticas</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="text-3xl font-heading font-bold text-primary mb-2">Anos Finais</div>
                <p className="text-muted-foreground text-sm">6º ao 9º ano</p>
                <p className="text-muted-foreground text-xs mt-2">Aprofundamento e preparação para o Ensino Médio</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
            Nossa Proposta <span className="text-primary">Pedagógica</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Diferenciais */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
            Diferenciais do <span className="text-primary">Colégio Esfera</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-xl shadow-card">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Escola Bilíngue</h3>
              <p className="text-muted-foreground">
                O inglês está integrado ao currículo desde o início, com aulas dinâmicas e 
                imersivas que preparam os alunos para um mundo cada vez mais globalizado.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-card">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Ambiente Inclusivo</h3>
              <p className="text-muted-foreground">
                Acreditamos que cada aluno é único. Nossa escola é preparada para acolher 
                todas as crianças, respeitando suas diferenças e potencialidades.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-card">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Professores Qualificados</h3>
              <p className="text-muted-foreground">
                Nossa equipe é formada por profissionais altamente capacitados, em constante 
                atualização, comprometidos com a excelência educacional.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-card">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Tecnologia no Ensino</h3>
              <p className="text-muted-foreground">
                Utilizamos recursos tecnológicos modernos como ferramentas pedagógicas, 
                preparando os alunos para os desafios do século XXI.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
            Venha Conhecer Nossa Escola
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Agende uma visita e conheça de perto nossa estrutura, metodologia e equipe 
            pedagógica. Estamos prontos para receber sua família!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90"
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

export default EnsinoFundamental;
