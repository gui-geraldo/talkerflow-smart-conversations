
import { Settings, Smartphone, Clock, MessageCircle } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Settings,
      title: "Escolha o playbook",
      description: "Selecione o modelo ideal para seu negócio: Lead ou Loop"
    },
    {
      icon: Smartphone,
      title: "Conecte seu WhatsApp",
      description: "Integração simples com seu WhatsApp Business existente"
    },
    {
      icon: Clock,
      title: "Ajuste horários/logo",
      description: "Personalize com sua identidade visual e horários de funcionamento"
    },
    {
      icon: MessageCircle,
      title: "Comece a conversar",
      description: "Em até 48h seu agente estará pronto para atender"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Como funciona
          </h2>
          <p className="text-xl text-gray-600">
            4 passos simples para transformar seu atendimento
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 border-2 border-blue-200">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-3xl mx-auto border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              IA que conversa como gente
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Modelos treinados em boas práticas de atendimento para acolher, 
              esclarecer e encaminhar sem parecer robótico.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <strong className="text-blue-600">Fluxos prontos</strong><br />
                Templates testados e otimizados
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <strong className="text-purple-600">Sem código</strong><br />
                Interface visual e intuitiva
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <strong className="text-green-600">Suporte humano</strong><br />
                Nossa equipe te ajuda nos ajustes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
