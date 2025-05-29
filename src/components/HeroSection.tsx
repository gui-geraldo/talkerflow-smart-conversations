
import { ArrowRight, MessageCircle, Users, Smartphone } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  
  const conversation = [
    { sender: 'client', text: 'Oi! Quero agendar uma consulta', time: '14:00' },
    { sender: 'agent', text: 'Olá! Tudo bem? Eu sou a Marcela, aqui da Clínica Integral Care.\nMe conte, é sua primeira consulta com a gente?', time: '14:01' },
    { sender: 'client', text: 'Sim, primeira vez. Tem pra sexta?', time: '14:01' },
    { sender: 'agent', text: 'Legal! Tenho horário com o Dr. Paulo na sexta às 16h ou 17:15. Qual horário prefere?', time: '14:02' },
    { sender: 'client', text: 'Há não, sexta a tarde é trânsito demais! Pra manhã não tem como?', time: '14:02' },
    { sender: 'agent', text: 'Sim, sexta é uma correria mesmo! Vamos de manhã, tenho na terça às 9h ou 11:15h. Qual destes fica melhor?', time: '14:03' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => {
        if (prev < conversation.length - 1) {
          return prev + 1;
        }
        return 0; // Reset animation
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Seu cliente atendido na{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                hora em que precisa
              </span>
              , sempre.
            </h1>
            
            <p className="text-xl text-gray-300 mb-6 max-w-2xl">
              Conversas inteligentes no WhatsApp que qualificam leads e resolvem dúvidas.
            </p>

            <p className="text-lg text-blue-200 mb-8 max-w-2xl font-medium">
              Construímos relações de confiança através de respostas rápidas e humanas. 
              Cada lead ou cliente merece ser ouvido no instante em que busca ajuda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#talker-flow-lead"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Users className="h-5 w-5" />
                <span>Quero mais clientes</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              
              <a
                href="#talker-flow-loop"
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Preciso de suporte</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 max-w-lg border border-gray-700">
              <div className="flex items-center justify-center space-x-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">24/7</div>
                  <div className="text-sm text-gray-400">Disponível</div>
                </div>
                <div className="h-8 w-px bg-gray-600"></div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">80%</div>
                  <div className="text-sm text-gray-400">Automação</div>
                </div>
                <div className="h-8 w-px bg-gray-600"></div>
                <div>
                  <div className="text-2xl font-bold text-green-400">100%</div>
                  <div className="text-sm text-gray-400">WhatsApp</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl border border-gray-700 w-80">
                <div className="bg-green-600 rounded-t-2xl p-4 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div>
                    <div className="text-white font-semibold">Clínica Integral Care</div>
                    <div className="text-green-200 text-sm">online</div>
                  </div>
                </div>
                
                <div className="bg-gray-100 h-96 p-4 space-y-3 overflow-hidden">
                  {conversation.slice(0, messageIndex + 1).map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.sender === 'client' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                    >
                      <div
                        className={`max-w-xs p-3 rounded-lg ${
                          message.sender === 'client'
                            ? 'bg-green-500 text-white rounded-br-none'
                            : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        <p className={`text-xs mt-1 ${message.sender === 'client' ? 'text-green-100' : 'text-gray-500'}`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
