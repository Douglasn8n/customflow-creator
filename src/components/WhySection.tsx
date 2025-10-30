import { CheckCircle2, XCircle } from "lucide-react";

const WhySection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Por que sua empresa precisa de IA?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 text-center">
            (E o que você está perdendo por não ter)
          </p>

          <div className="prose prose-lg max-w-none text-foreground/90 mb-12">
            <p className="text-lg leading-relaxed mb-6">
              Toda empresa nasce para crescer, mas na prática, o que mais trava
              o crescimento não são as ideias, nem a vontade de fazer acontecer.{" "}
              <strong>São os processos manuais.</strong>{" "}
              <strong>O tempo gasto com tarefas repetitivas. Os esquecimentos. A falta de organização.</strong>
            </p>

            <div className="space-y-4 my-8 bg-muted/30 p-8 rounded-xl border border-border">
              <div className="flex gap-3 items-start">
                <XCircle className="text-destructive flex-shrink-0 mt-1" size={24} />
                <p className="text-base">
                  <strong>Quantos contatos ficaram sem resposta</strong> ou
                  desistiram porque ninguém viu a mensagem a tempo?
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <XCircle className="text-destructive flex-shrink-0 mt-1" size={24} />
                <p className="text-base">
                  <strong>Quantos clientes deixaram de voltar</strong> porque
                  não receberam um simples lembrete ou contato de
                  acompanhamento?
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <XCircle className="text-destructive flex-shrink-0 mt-1" size={24} />
                <p className="text-base">
                  <strong>Quantas vezes sua equipe perdeu tempo</strong> com
                  agendamentos e outras tarefas que poderiam ser automáticos?
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed mb-8">
              Esses pequenos gargalos custam caro. E o pior:{" "}
              <strong>eles se repetem todos os dias.</strong>
            </p>

            <h3 className="text-2xl font-bold mb-6 text-primary">
              A inteligência artificial resolve isso. E vai além.
            </h3>

            <p className="text-lg mb-6">
              <strong>Quando você automatiza com inteligência, sua empresa:</strong>
            </p>

            <div className="space-y-4 bg-primary/5 p-8 rounded-xl border border-primary/20">
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                <p className="text-base">
                  <strong>Ganha tempo</strong> - Sua equipe foca no que realmente importa
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                <p className="text-base">
                  <strong>Reduz erros</strong> - Processos automatizados são mais precisos
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                <p className="text-base">
                  <strong>Organiza fluxos internos</strong> - Tudo funciona de forma sincronizada
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                <p className="text-base">
                  <strong>Melhora a experiência do cliente</strong> - Atendimento rápido e personalizado
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                <p className="text-base">
                  <strong>Aumenta o faturamento</strong> - Mais eficiência = mais resultados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
