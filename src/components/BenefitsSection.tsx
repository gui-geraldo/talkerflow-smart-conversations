
import { Clock, Moon, Rocket } from 'lucide-react';

const BenefitsSection = () => {
  const commonQuestions = [
    "Qual o endereço da loja?",
    "Quais horários estão disponíveis?",
    "Parcela no cartão?",
    "Tem estacionamento?"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tempo recuperado, foco no que importa
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Libere sua equipe de tarefas repetitivas
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            Perguntas que seus clientes fazem todo dia:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {commonQuestions.map((question, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 italic">"{question}"</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-white rounded-xl p-8 shadow-lg">
            <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              ⏱️ Economia de tempo real
            </h3>
            <p className="text-gray-600">
              Respostas instantâneas para dúvidas comuns, liberando sua equipe para focar no que realmente importa
            </p>
          </div>

          <div className="text-center bg-white rounded-xl p-8 shadow-lg">
            <Moon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              🌙 Disponível 24 × 7
            </h3>
            <p className="text-gray-600">
              Seus clientes são atendidos a qualquer hora, mesmo quando você está dormindo
            </p>
          </div>

          <div className="text-center bg-white rounded-xl p-8 shadow-lg">
            <Rocket className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              🚀 Produtividade turbinada
            </h3>
            <p className="text-gray-600">
              Sua equipe pode focar em vendas e relacionamento enquanto a IA cuida do básico
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
