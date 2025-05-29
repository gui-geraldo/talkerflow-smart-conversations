
import { Calendar, MessageSquare, Target, RefreshCcw, Shield, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import DialogExamples from './DialogExamples';

const ProductSection = () => {
  const [dialogType, setDialogType] = useState<'lead' | 'loop' | null>(null);

  return (
    <section id="produtos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Duas soluções, resultados imediatos
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Escolha a ferramenta ideal para cada momento da jornada do seu cliente
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Talker Flow Lead */}
          <div id="talker-flow-lead" className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-2xl p-8 border border-blue-700/50 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-6">
              <Target className="h-8 w-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Talker Flow Lead</h3>
            </div>
            
            <h4 className="text-xl font-semibold text-blue-300 mb-4">
              "A primeira impressão é a que fica"
            </h4>
            
            <p className="text-gray-300 mb-6">
              SDR automatizado que atende seus leads via WhatsApp, qualifica interessados, 
              agenda reuniões no seu calendário e até fecha vendas. Sua primeira impressão 
              será sempre perfeita.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MessageSquare className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-gray-300">Resposta imediata para leads, 24 × 7</span>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-gray-300">Qualificação inteligente que filtra oportunidades</span>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-gray-300">Agendamento automático direto na sua agenda</span>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-gray-300">Capacidade de fechar vendas automaticamente</span>
              </div>
            </div>
            
            <button 
              onClick={() => setDialogType('lead')}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Ver fluxo de conversa
            </button>
          </div>

          {/* Talker Flow Loop */}
          <div id="talker-flow-loop" className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-2xl p-8 border border-purple-700/50 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-6">
              <RefreshCcw className="h-8 w-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Talker Flow Loop</h3>
            </div>
            
            <h4 className="text-xl font-semibold text-purple-300 mb-4">
              "Seu cliente nunca mais fica sem resposta."
            </h4>
            
            <p className="text-gray-300 mb-6">
              Assistente de suporte e pós-venda que responde dúvidas frequentes, 
              envia tutoriais, informa status de pedidos e muito mais — tudo de forma 
              automática, 24 horas por dia.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MessageSquare className="h-5 w-5 text-purple-400 mt-1" />
                <span className="text-gray-300">FAQs, tutoriais e status de pedido em tempo real</span>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-purple-400 mt-1" />
                <span className="text-gray-300">Libera o time humano para casos complexos</span>
              </div>
              <div className="flex items-start space-x-3">
                <RefreshCcw className="h-5 w-5 text-purple-400 mt-1" />
                <span className="text-gray-300">Ciclo contínuo de atendimento e suporte</span>
              </div>
            </div>
            
            <button 
              onClick={() => setDialogType('loop')}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Ver fluxo de conversa
            </button>
          </div>
        </div>
      </div>

      <DialogExamples 
        isOpen={dialogType !== null}
        onClose={() => setDialogType(null)}
        type={dialogType || 'lead'}
      />
    </section>
  );
};

export default ProductSection;
