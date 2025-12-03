import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Santos',
    role: 'Mãe de aluno do Ensino Fundamental',
    content: 'O Colégio Esfera transformou a vida escolar do meu filho. A dedicação dos professores e o ambiente acolhedor fizeram toda a diferença no desenvolvimento dele.',
    rating: 5,
    initials: 'MS',
    color: 'bg-primary',
  },
  {
    name: 'Carlos Oliveira',
    role: 'Pai de aluna do Ensino Médio',
    content: 'Minha filha sempre foi tímida, mas aqui ela floresceu. A escola incentiva a participação e o protagonismo dos alunos. Hoje ela está preparada para o vestibular.',
    rating: 5,
    initials: 'CO',
    color: 'bg-success',
  },
  {
    name: 'Ana Paula Lima',
    role: 'Ex-aluna e atual universitária',
    content: 'Sou eternamente grata ao Colégio Esfera. A base que recebi aqui me permitiu entrar na universidade que sempre sonhei. Os professores realmente se importam com os alunos.',
    rating: 5,
    initials: 'AP',
    color: 'bg-accent',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            O Que Dizem <span className="text-primary">Nossas Famílias</span>
          </h2>
          <p className="text-muted-foreground">
            A satisfação das famílias é nosso maior orgulho. Veja o que pais e alunos 
            têm a dizer sobre a experiência no Colégio Esfera.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center`}>
                  <span className="text-primary-foreground font-semibold">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <div className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
