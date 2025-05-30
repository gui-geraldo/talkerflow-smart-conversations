
import { MessageCircle, Clock, Users, Zap } from 'lucide-react';

const BenefitsSection = () => {
  const commonQuestions = [
    "Qual o endereço da loja?",
    "Meu pedido já foi enviado?",
    "Parcela no cartão?",
    "Qual o preço?"
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">
            Libere sua equipe de tarefas repetitivas
          </h2>
        </div>

        <div className="max-w-5xl mx-auto mb-16 animate-slide-in-left">
          <h3 className="text-2xl font-semibold text-center text-gray-200 mb-8">
            Perguntas que seus clientes fazem todo dia:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {commonQuestions.map((question, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-700/50 to-gray-600/30 rounded-xl p-6 shadow-lg border border-gray-600/50 backdrop-blur-sm hover-lift">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-200 italic text-lg">"{question}"</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flowing benefit cards */}
        <div className="max-w-6xl mx-auto animate-slide-in-right">
          <div className="relative">
            {/* Connection lines */}
            <div className="hidden lg:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400"></div>
            <div className="hidden lg:block absolute top-24 left-1/4 w-3 h-3 bg-blue-400 rounded-full -translate-x-1.5 animate-pulse"></div>
            <div className="hidden lg:block absolute top-24 right-1/4 w-3 h-3 bg-green-400 rounded-full translate-x-1.5 animate-pulse"></div>
            <div className="hidden lg:block absolute top-24 left-1/2 w-3 h-3 bg-purple-400 rounded-full -translate-x-1.5 animate-pulse"></div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-2xl p-8 shadow-xl border border-blue-700/30 backdrop-blur-sm hover-lift hover-scale">
                <MessageCircle className="h-16 w-16 text-blue-400 mx-auto mb-6 animate-bounce-gentle" />
                <h3 className="text-xl font-semibold text-white mb-4">
                  Conversa Natural
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  O agente conversa com seus clientes de forma natural, confirma dados, 
                  responde dúvidas frequentes e registra informações. Seja 1, ou 1.000 clientes.
                </p>
              </div>

              <div className="text-center bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-2xl p-8 shadow-xl border border-purple-700/30 backdrop-blur-sm hover-lift hover-scale">
                <Clock className="h-16 w-16 text-purple-400 mx-auto mb-6 animate-bounce-gentle" />
                <h3 className="text-xl font-semibold text-white mb-4">
                  Sempre Disponível
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Seus clientes são atendidos a qualquer hora, qualquer dia. 
                  Nunca mais perca uma oportunidade por estar indisponível.
                </p>
              </div>

              <div className="text-center bg-gradient-to-br from-green-900/40 to-green-800/20 rounded-2xl p-8 shadow-xl border border-green-700/30 backdrop-blur-sm hover-lift hover-scale">
                <Zap className="h-16 w-16 text-green-400 mx-auto mb-6 animate-bounce-gentle" />
                <h3 className="text-xl font-semibold text-white mb-4">
                  Foco Estratégico
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Sua equipe pode focar em vendas e relacionamento estratégico 
                  enquanto a IA cuida do atendimento básico com excelência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
