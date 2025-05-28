
import { ArrowRight, Star } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700">
      <div className="container mx-auto px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para atender melhor agora mesmo?
          </h2>
          
          <p className="text-xl opacity-90 mb-8">
            Comece hoje e veja a diferença em 48 horas
          </p>

          <div className="flex items-center justify-center space-x-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-lg">Avaliação 5.0 dos nossos clientes</span>
          </div>

          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 shadow-xl">
            <span>Quero testar grátis por 7 dias</span>
            <ArrowRight className="h-5 w-5" />
          </button>

          <p className="text-sm opacity-75 mt-4">
            Sem cartão de crédito • Cancelamento a qualquer momento
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
