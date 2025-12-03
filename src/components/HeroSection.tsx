import { Button } from './ui/button';
import heroImage from '@/assets/hero-students.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Alunos aprendendo no Colégio Esfera"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 px-4">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Matrículas Abertas 2025
            </span>
          </div>

          <h1 
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Colégio Esfera
            <span className="block text-accent mt-2">
              Transformando o Futuro em Excelência
            </span>
          </h1>

          <p 
            className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Educação Infantil, Ensino Fundamental e Ensino Médio em Caraguatatuba. 
            Uma escola que acolhe, inspira e prepara para a vida.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Button variant="hero" asChild>
              <a href="#contato">Conheça Nossa Escola</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20 hover:text-primary-foreground"
              asChild
            >
              <a href="#ensino">Ver Níveis de Ensino</a>
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">20+</div>
              <div className="text-primary-foreground/70 text-sm">Anos de Tradição</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">500+</div>
              <div className="text-primary-foreground/70 text-sm">Alunos Formados</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">100%</div>
              <div className="text-primary-foreground/70 text-sm">Comprometimento</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/70 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
