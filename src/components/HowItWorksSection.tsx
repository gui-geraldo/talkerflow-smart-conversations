
import { Target, Settings, MessageSquare, Zap } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Target,
      title: "Seleção",
      description: "Selecione o modelo ideal para seu negócio: Lead ou Loop (ou os dois!)"
    },
    {
      number: "02", 
      icon: Settings,
      title: "Treinamento",
      description: "Deixamos o agente com a sua cara, para fazer exatamente o que sua empresa precisa"
    },
    {
      number: "03",
      icon: MessageSquare,
      title: "Conexão", 
      description: "Conecte o WhatsApp e faça algumas conversas de teste"
    },
    {
      number: "04",
      icon: Zap,
      title: "TalkerFlow!",
      description: "Deixe que seus clientes tenham um atendimento impressionante e cativante"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">Como funciona</h2>
          <p className="text-xl text-gray-300">Simples, rápido e eficiente</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group hover-lift animate-slide-in-left" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-sm font-bold text-gray-900 shadow-lg animate-bounce-gentle">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
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
    </section>
  );
};

export default HowItWorksSection;
