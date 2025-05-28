
import { Calendar, Clock, MessageSquare, Target, Zap, Shield } from 'lucide-react';

const ProductSection = () => {
  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Duas soluções, resultados imediatos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha a ferramenta ideal para cada momento da jornada do seu cliente
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Talker Flow Lead */}
          <div id="talker-flow-lead" className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-center space-x-3 mb-6">
              <Target className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Talker Flow Lead</h3>
            </div>
            
            <h4 className="text-xl font-semibold text-blue-700 mb-4">
              "Oportunidades não esperam — agende antes do concorrente."
            </h4>
            
            <p className="text-gray-700 mb-6">
              Agente automatizado de pré-vendas que atende seus leads via WhatsApp, 
              faz perguntas inteligentes, qualifica os interessados e agenda reuniões 
              automaticamente no seu calendário.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-600 mt-1" />
                <span className="text-gray-700">Lead recebe resposta em segundos, 24 × 7</span>
              </div>
              <div className="flex items-start space-x-3">
                <MessageSquare className="h-5 w-5 text-blue-600 mt-1" />
                <span className="text-gray-700">Perguntas-chave que filtram curiosos</span>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-blue-600 mt-1" />
                <span className="text-gray-700">Encaixe automático na sua agenda + lembretes anti-no-show</span>
              </div>
            </div>
            
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Ver fluxo de conversa
            </button>
          </div>

          {/* Talker Flow Loop */}
          <div id="talker-flow-loop" className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="h-8 w-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900">Talker Flow Loop</h3>
            </div>
            
            <h4 className="text-xl font-semibold text-purple-700 mb-4">
              "Seu cliente nunca mais fica sem resposta."
            </h4>
            
            <p className="text-gray-700 mb-6">
              Assistente de suporte e pós-venda que responde dúvidas frequentes, 
              envia tutoriais, informa status de pedidos e muito mais — tudo de forma 
              automática, 24 horas por dia.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MessageSquare className="h-5 w-5 text-purple-600 mt-1" />
                <span className="text-gray-700">FAQs, tutoriais e status de pedido em tempo real</span>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-purple-600 mt-1" />
                <span className="text-gray-700">Libera o time humano para casos complexos</span>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-purple-600 mt-1" />
                <span className="text-gray-700">Playbook pronto no ar em 48h</span>
              </div>
            </div>
            
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Ver fluxo de conversa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
