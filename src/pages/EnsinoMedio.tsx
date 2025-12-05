import { GraduationCap, Target, Award, FileText, Users, Briefcase, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const features = [
  {
    icon: Target,
    title: 'Foco em Resultados',
    description: 'Preparação intensiva para ENEM, vestibulares e processos seletivos das melhores universidades.',
  },
  {
    icon: Award,
    title: 'Material Etapa',
    description: 'Conteúdo reconhecido nacionalmente por aprovar nos vestibulares mais concorridos do país.',
  },
  {
    icon: FileText,
    title: 'Simulados Periódicos',
    description: 'Avaliações constantes no formato dos principais vestibulares para treino e aperfeiçoamento.',
  },
  {
    icon: Users,
    title: 'Orientação Profissional',
    description: 'Apoio na escolha da carreira com orientação vocacional e palestras com profissionais.',
  },
  {
    icon: Briefcase,
    title: 'Projetos de Vida',
    description: 'Desenvolvimento de habilidades socioemocionais e planejamento para o futuro.',
  },
  {
    icon: GraduationCap,
    title: 'Autonomia',
    description: 'Formação de jovens autônomos, críticos e preparados para os desafios da vida adulta.',
  },
];

const EnsinoMedio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-accent/10 via-background to-background">
        <div className="container-custom">
          <Link to="/#ensino" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar para Níveis de Ensino
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
                <GraduationCap className="w-5 h-5 text-accent" />
                <span className="text-accent font-medium">15 a 17 anos</span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ensino <span className="text-accent">Médio</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                O Ensino Médio do Colégio Esfera é a fase decisiva para o futuro do seu filho. 
                Com o <strong>Sistema Etapa</strong>, oferecemos uma preparação completa e 
                diferenciada para os vestibulares mais concorridos do país.
              </p>
              
              <p className="text-muted-foreground mb-8">
                Nossa escola, embora recente, já se destaca pela excelência. Contamos com 
                professores altamente qualificados e dedicados, que acompanham cada aluno 
                de forma individualizada. Em um ambiente acolhedor e inclusivo, preparamos 
                jovens não apenas para o vestibular, mas para a vida.
              </p>
              
              <Button variant="accent" size="lg" asChild>
                <a href="/#contato">Agende uma Visita</a>
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <GraduationCap className="w-24 h-24 text-accent mx-auto mb-4" />
                  <div className="font-heading text-2xl font-bold text-foreground">
                    Preparação para o Futuro
                  </div>
                  <p className="text-muted-foreground mt-2">
                    ENEM, Vestibulares e Vida Profissional
                  </p>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-accent/10 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Sistema Etapa */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              Material <span className="text-accent">Sistema Etapa</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              O Sistema Etapa é sinônimo de aprovação. Com décadas de tradição, o material 
              é desenvolvido pelos mesmos profissionais que elaboram as provas dos principais 
              vestibulares. No Colégio Esfera, você tem acesso a esse conteúdo de excelência 
              com o acompanhamento próximo de professores comprometidos com seu sucesso.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="text-3xl font-heading font-bold text-accent mb-2">1ª Série</div>
                <p className="text-muted-foreground text-sm">Base sólida e adaptação</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="text-3xl font-heading font-bold text-accent mb-2">2ª Série</div>
                <p className="text-muted-foreground text-sm">Aprofundamento e consolidação</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="text-3xl font-heading font-bold text-accent mb-2">3ª Série</div>
                <p className="text-muted-foreground text-sm">Revisão intensiva e simulados</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
            Nossa Proposta <span className="text-accent">Pedagógica</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Vestibulares */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
            Preparação <span className="text-accent">Completa</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-xl shadow-card">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">ENEM</h3>
              <p className="text-muted-foreground">
                Preparação específica para o Exame Nacional do Ensino Médio, com foco nas 
                competências e habilidades exigidas, além de treino intensivo de redação.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-card">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Vestibulares</h3>
              <p className="text-muted-foreground">
                Material e metodologia do Sistema Etapa, que há anos coloca alunos nas 
                melhores universidades do Brasil, como USP, Unicamp, UNESP e federais.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-card">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Escola Bilíngue</h3>
              <p className="text-muted-foreground">
                O inglês avançado é diferencial competitivo. Nossos alunos desenvolvem 
                fluência para provas de proficiência e oportunidades internacionais.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-card">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Acompanhamento Individual</h3>
              <p className="text-muted-foreground">
                Por sermos uma escola de porte adequado, conhecemos cada aluno pelo nome. 
                Oferecemos atendimento personalizado para sanar dúvidas e fortalecer pontos fracos.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold text-accent-foreground mb-4">
            Seu Futuro Começa Aqui
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            Agende uma visita e conheça de perto nossa estrutura, metodologia e equipe 
            pedagógica. Estamos prontos para preparar você para conquistar seus sonhos!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-accent hover:bg-white/90"
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

export default EnsinoMedio;
