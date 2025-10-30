import { Bot, Database, Workflow, MessageSquare, BarChart3, Shield } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Bot,
      title: "Chatbots Inteligentes",
      description:
        "Atendimento automatizado 24/7 com IA que entende e responde seus clientes de forma natural.",
    },
    {
      icon: Workflow,
      title: "Automação de Processos",
      description:
        "Automatize tarefas repetitivas e libere sua equipe para o que realmente importa.",
    },
    {
      icon: Database,
      title: "Gestão de Dados",
      description:
        "Centralize e analise seus dados de forma inteligente para tomar decisões melhores.",
    },
    {
      icon: MessageSquare,
      title: "Integração de Sistemas",
      description:
        "Conecte CRMs, ERPs e outras ferramentas em uma plataforma unificada.",
    },
    {
      icon: BarChart3,
      title: "Análise Preditiva",
      description:
        "Use IA para prever tendências e antecipar necessidades do seu negócio.",
    },
    {
      icon: Shield,
      title: "Segurança e Compliance",
      description:
        "Soluções que garantem proteção de dados e conformidade com regulamentações.",
    },
  ];

  return (
    <section id="solucoes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossas Soluções
          </h2>
          <p className="text-xl text-muted-foreground">
            Transforme seu negócio com inteligência artificial aplicada de forma estratégica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
