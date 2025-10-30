import logo from "@/assets/logo-primeira-mente.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img src={logo} alt="Primeira Mente" className="h-16 w-auto mb-4" />
            <p className="text-muted-foreground text-sm max-w-md">
              Transformando negócios através da inteligência artificial. 
              Soluções personalizadas para automatizar, integrar e crescer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#solucoes"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Soluções
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>contato@primeiramente.com.br</li>
              <li>(00) 0000-0000</li>
              <li>Brasil</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Primeira Mente - Soluções em IA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
