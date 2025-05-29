
import { Settings, Smartphone, Users, MessageCircle } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Settings,
      title: "Seleção",
      description: "Selecione o modelo ideal para seu negócio: Lead ou Loop (ou os dois!)"
    },
    {
      icon: Users,
      title: "Treinamento",
      description: "Deixamos o agente com a sua cara, para fazer exatamente o que sua empresa precisa"
    },
    {
      icon: Smartphone,
      title: "Conexão", 
      description: "Conecte o WhatsApp e faça algumas conversas de teste"
    },
    {
      icon: MessageCircle,
      title: "TalkerFlow!",
      description: "Deixe que seus clientes tenham um atendimento impressionante e cativante"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Como funciona
          </h2>
          <p className="text-xl text-gray-300">
            4 passos simples para transformar seu atendimento
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop view - horizontal */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection line */}
              <div className="absolute top-20 left-24 right-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-full"></div>
              
              <div className="grid lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="text-center relative">
                    <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 border-4 border-blue-500 shadow-2xl relative z-10">
                      <step.icon className="h-8 w-8 text-blue-400" />
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-6 text-lg font-bold shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile view - vertical */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl w-16 h-16 flex items-center justify-center border-4 border-blue-500 shadow-xl">
                    <step.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mt-3 text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/40 rounded-3xl p-10 max-w-4xl mx-auto border border-gray-600/50 backdrop-blur-sm shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-6">
              IA que conversa como gente
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Modelos treinados em boas práticas de atendimento para acolher, 
              esclarecer e encaminhar sem parecer robótico.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-xl p-6 border border-blue-700/30">
                <strong className="text-blue-400 text-lg block mb-2">Fluxos prontos</strong>
                <span className="text-gray-300">Templates testados e otimizados</span>
              </div>
              <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-xl p-6 border border-purple-700/30">
                <strong className="text-purple-400 text-lg block mb-2">Sem código</strong>
                <span className="text-gray-300">Interface visual e intuitiva</span>
              </div>
              <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 rounded-xl p-6 border border-green-700/30">
                <strong className="text-green-400 text-lg block mb-2">Suporte humano</strong>
                <span className="text-gray-300">Nossa equipe te ajuda nos ajustes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
