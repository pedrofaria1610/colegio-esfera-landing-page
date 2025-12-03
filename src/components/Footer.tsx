import { MapPin, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-foreground text-background">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">E</span>
              </div>
              <span className="font-heading font-bold text-xl">
                Colégio <span className="text-primary">Esfera</span>
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Transformando o futuro em excelência há mais de 20 anos. 
              Educação Infantil, Ensino Fundamental e Ensino Médio em Caraguatatuba.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Sobre a Escola
                </a>
              </li>
              <li>
                <a href="#ensino" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Níveis de Ensino
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Rua Sebastião Mariano Nepomuceno, 481, Centro<br />
                  Caraguatatuba – SP
                </span>
              </li>
              <li>
                <a 
                  href="tel:1221323197" 
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  (12) 2132-3197
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/colegioesfera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <Instagram className="w-4 h-4 text-primary" />
                  @colegioesfera
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm">
            © {currentYear} Colégio Esfera. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
