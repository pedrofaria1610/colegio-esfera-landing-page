import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#ensino', label: 'Ensino' },
    { href: '#diferenciais', label: 'Diferenciais' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">E</span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">
              Colégio <span className="text-primary">Esfera</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:1221323197" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone size={18} />
              <span className="font-medium">(12) 2132-3197</span>
            </a>
            <Button variant="default" size="sm">
              Agende uma Visita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-secondary"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="default" className="mt-4">
                Agende uma Visita
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
