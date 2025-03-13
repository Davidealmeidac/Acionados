import React from 'react';
import { Menu, X, Flame } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-black/95 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <Flame className="h-8 w-8 text-primary" />
                <span className="text-white font-bold text-2xl">ACIONADOS</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-white hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-300">Home</a>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-white hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-300">Sobre</a>
              <a href="#programs" onClick={(e) => scrollToSection(e, 'programs')} className="text-white hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-300">Programações</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-white hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-300">Contato</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary focus:outline-none transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-white hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-300">Home</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-white hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-300">Sobre</a>
            <a href="#programs" onClick={(e) => scrollToSection(e, 'programs')} className="text-white hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-300">Programações</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-white hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-300">Contato</a>
          </div>
        </div>
      )}
    </nav>
  );
}