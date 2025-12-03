import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const CTASection = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-success rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Calendar className="w-4 h-4 text-primary-foreground" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Agende sua visita hoje mesmo
            </span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Agende uma Visita e Conheça de Perto o{' '}
            <span className="text-accent">Colégio Esfera</span>!
          </h2>

          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Venha conhecer nossa estrutura, conversar com nossa equipe pedagógica 
            e descobrir como podemos fazer parte da educação do seu filho.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="heroAccent"
              asChild
            >
              <a href="https://wa.me/551221323197" target="_blank" rel="noopener noreferrer">
                Agendar pelo WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button 
              size="lg"
              className="bg-white text-primary font-semibold hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="tel:1221323197">
                Ligar Agora: (12) 2132-3197
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
