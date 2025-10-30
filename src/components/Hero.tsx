import { Button } from "@/components/ui/button";
import { Brain, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "var(--hero-gradient)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Automatize. Integre.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Cresça.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-fade-in animation-delay-200">
            Soluções em inteligência artificial que otimizam processos,
            conectam sistemas e fazem o seu negócio crescer exponencialmente.
          </p>

          {/* CTA Button */}
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg shadow-[0_0_30px_rgba(30,91,168,0.5)] hover:shadow-[0_0_50px_rgba(30,91,168,0.7)] transition-all duration-300 animate-fade-in animation-delay-400"
          >
            Começar Agora
          </Button>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-20 animate-fade-in animation-delay-600">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                IA Avançada
              </h3>
              <p className="text-gray-400">
                Automatize processos complexos com inteligência artificial de
                última geração.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Brain className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Integração Total
              </h3>
              <p className="text-gray-400">
                Conecte todos os seus sistemas em uma plataforma unificada e
                inteligente.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Resultados Reais
              </h3>
              <p className="text-gray-400">
                Aumente sua eficiência e faturamento com soluções
                personalizadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
