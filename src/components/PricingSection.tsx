
import { Check } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="precos" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Planos & Preços
          </h2>
          <p className="text-xl text-gray-300">
            Escolha o plano ideal para o seu negócio
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Plano Essencial */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-2xl p-8 border border-gray-600/50 shadow-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-2">Essencial</h3>
              <div className="text-4xl font-bold text-white mb-6">
                R$ 997,99<span className="text-lg font-normal text-gray-400">/mês</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Até 2.000 mensagens/mês</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Apenas Português</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Interpreta apenas texto</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">1 usuário</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Relatórios básicos</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Suporte por e-mail</span>
                </li>
              </ul>
              
              <button className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white py-4 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg">
                Contratar
              </button>
            </div>

            {/* Plano Pro */}
            <div className="bg-gradient-to-br from-blue-900/60 to-purple-900/60 rounded-2xl p-8 text-white shadow-2xl relative border border-blue-500/50 backdrop-blur-sm">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Mais Popular
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-6">
                R$ 1.200<span className="text-lg font-normal text-blue-200">/mês</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400" />
                  <span>Mensagens ilimitadas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400" />
                  <span>24 idiomas disponíveis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400" />
                  <span>Reconhece áudio e emojis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400" />
                  <span>Até 5 usuários</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400" />
                  <span>Relatórios avançados</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-400" />
                  <span>Suporte prioritário</span>
                </li>
              </ul>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                Contratar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
