
import { useState, useEffect } from 'react';
import { X, MessageCircle, RefreshCcw } from 'lucide-react';

interface DialogExamplesProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'lead' | 'loop';
}

const DialogExamples = ({ isOpen, onClose, type }: DialogExamplesProps) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const leadConversation = [
    { sender: 'client', text: 'Oi! Vi vocês no Instagram, queria saber mais sobre implante', time: '09:15' },
    { sender: 'agent', text: 'Olá! Que bom te conhecer! Sou o assistente da Dra. Carla.\n\nVou te ajudar com todas as informações sobre implantes. Me conta, é para substituir quantos dentes?', time: '09:15' },
    { sender: 'client', text: 'É só um dente mesmo, o da frente', time: '09:16' },
    { sender: 'agent', text: 'Entendi! Para o dente da frente temos duas opções excelentes:\n\n🦷 Implante tradicional (R$ 2.800)\n🦷 Implante com carga imediata (R$ 3.200)\n\nQual te interessa mais?', time: '09:17' },
    { sender: 'client', text: 'Carga imediata é o que sai no mesmo dia?', time: '09:17' },
    { sender: 'agent', text: 'Exato! Na carga imediata você:\n✅ Faz a cirurgia e já sai com o dente provisório\n✅ Não fica banguela nem um dia\n✅ Em 3 meses colocamos a coroa definitiva\n\nQuer agendar uma avaliação? Tenho horário hoje às 16h', time: '09:18' },
    { sender: 'client', text: 'Perfeito! Pode agendar sim', time: '09:19' },
    { sender: 'agent', text: '🎉 Agendado!\n\n📅 Hoje, 15/11 às 16:00\n👩‍⚕️ Dra. Carla Mendonça\n📍 Rua das Flores, 123\n\nVou mandar um lembrete 1h antes. Alguma dúvida?', time: '09:20' }
  ];

  const loopConversation = [
    { sender: 'client', text: 'Oi, meu aparelho quebrou 😭', time: '22:30' },
    { sender: 'agent', text: 'Oi! Não se preocupe, vou te ajudar agora mesmo! 😊\n\nQue parte do aparelho quebrou? O fio, uma peça ou o bracket (quadradinho)?', time: '22:30' },
    { sender: 'client', text: 'Acho que é o bracket, saiu do dente', time: '22:31' },
    { sender: 'agent', text: 'Entendi! Isso é bem comum, não é urgência. Aqui está o que fazer:\n\n1️⃣ Guarde a peça que soltou\n2️⃣ Se estiver machucando, use cera ortodôntica\n3️⃣ Evite alimentos duros até o reparo\n\nPosso agendar o reparo para você?', time: '22:32' },
    { sender: 'client', text: 'Sim, por favor! Tem pra amanhã?', time: '22:32' },
    { sender: 'agent', text: 'Claro! Tenho:\n\n🕘 09:00 - Disponível\n🕙 10:30 - Disponível  \n🕐 13:00 - Disponível\n\nQual horário prefere?', time: '22:33' },
    { sender: 'client', text: '10:30 é perfeito!', time: '22:33' },
    { sender: 'agent', text: '✅ Agendado!\n\n📅 Amanhã, 16/11 às 10:30\n⚙️ Reparo de bracket\n📍 Consultório Dr. Roberto\n\nTempo estimado: 20 minutos\nValor: R$ 80,00\n\nTe mando um lembrete amanhã cedo! 😊', time: '22:34' }
  ];

  const conversation = type === 'lead' ? leadConversation : loopConversation;

  useEffect(() => {
    if (isOpen) {
      setMessageIndex(0);
      setIsAnimating(true);
      
      const interval = setInterval(() => {
        setMessageIndex(prev => {
          if (prev < conversation.length - 1) {
            return prev + 1;
          } else {
            setIsAnimating(false);
            return prev;
          }
        });
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [isOpen, conversation.length]);

  const restartAnimation = () => {
    setMessageIndex(0);
    setIsAnimating(true);
    
    const interval = setInterval(() => {
      setMessageIndex(prev => {
        if (prev < conversation.length - 1) {
          return prev + 1;
        } else {
          setIsAnimating(false);
          clearInterval(interval);
          return prev;
        }
      });
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-gray-700 shadow-2xl">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {type === 'lead' ? (
              <MessageCircle className="h-6 w-6 text-white" />
            ) : (
              <RefreshCcw className="h-6 w-6 text-white" />
            )}
            <h3 className="text-xl font-bold text-white">
              {type === 'lead' ? 'TalkerFlow Lead em Ação' : 'TalkerFlow Loop em Ação'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="bg-gray-800 rounded-xl p-4 mb-6 border border-gray-700">
            <div className="bg-green-600 rounded-t-lg p-3 flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div>
                <div className="text-white font-semibold">
                  {type === 'lead' ? 'Dra. Carla - Implantes' : 'Dr. Roberto - Ortodontia'}
                </div>
                <div className="text-green-200 text-sm">online</div>
              </div>
            </div>
            
            <div className="bg-gray-100 h-96 p-4 space-y-3 overflow-y-auto">
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
              
              {isAnimating && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 rounded-lg rounded-bl-none shadow-sm p-3 max-w-xs">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={restartAnimation}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <RefreshCcw className="h-4 w-4" />
              <span>Ver novamente</span>
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogExamples;
