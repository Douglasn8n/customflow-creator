import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-primeira-mente.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Primeira Mente" className="h-12 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("solucoes")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Soluções
          </button>
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Sobre
          </button>
          <Button
            onClick={() => scrollToSection("contato")}
            variant="default"
            className="bg-primary hover:bg-primary/90"
          >
            Contato
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("solucoes")}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Sobre
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              variant="default"
              className="bg-primary hover:bg-primary/90 w-full"
            >
              Contato
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
