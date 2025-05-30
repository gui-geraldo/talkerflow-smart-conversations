
import { Check, Star } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Essencial",
      price: "R$ 997,99",
      period: "/mês",
      popular: false,
      features: [
        "Até 2.000 mensagens/mês",
        "Apenas PT",
        "Interpreta apenas texto",
        "1 usuário",
        "Relatórios básicos",
        "Suporte por e-mail"
      ]
    },
    {
      name: "Pro",
      price: "R$ 1.200",
      period: "/mês",
      popular: true,
      features: [
        "Mensagens ilimitadas",
        "24 idiomas",
        "Reconhece áudio/emojis",
        "Até 5 usuários",
        "Relatórios avançados",
        "Suporte prioritário"
      ]
    }
  ];

  return (
    <section id="precos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">Planos e Preços</h2>
          <p className="text-xl text-gray-300">Escolha o plano ideal para seu negócio</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border backdrop-blur-sm hover-lift animate-slide-in-${index === 0 ? 'left' : 'right'} ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-400 animate-pulse-glow'
                  : 'bg-gray-800/50 border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1 animate-bounce-gentle">
                  <Star className="h-4 w-4" />
                  <span>Mais Popular</span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center space-x-2">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-blue-400' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className={`h-5 w-5 mt-1 flex-shrink-0 ${plan.popular ? 'text-blue-400' : 'text-green-400'}`} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 hover-scale ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                Contratar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
