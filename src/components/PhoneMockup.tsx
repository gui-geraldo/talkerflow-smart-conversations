
import { useState, useEffect } from 'react';

const PhoneMockup = () => {
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
    <div className="flex justify-center lg:justify-end animate-slide-in-right">
      <div className="relative animate-float">
        {/* iPhone Frame */}
        <div className="bg-black rounded-[3rem] p-2 shadow-2xl animate-pulse-glow">
          <div className="bg-gray-900 rounded-[2.5rem] overflow-hidden w-80 h-[600px] relative">
            {/* iPhone notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-10"></div>
            
            {/* Status bar */}
            <div className="bg-gray-800 h-12 flex items-center justify-between px-6 pt-2">
              <div className="text-white text-sm font-medium">9:41</div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-2 bg-white rounded-sm"></div>
                <div className="w-6 h-3 border border-white rounded-sm">
                  <div className="w-4 h-2 bg-white rounded-sm m-0.5"></div>
                </div>
              </div>
            </div>

            {/* WhatsApp Header */}
            <div className="bg-green-600 p-4 flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <div className="text-white font-semibold">Clínica Integral Care</div>
                <div className="text-green-200 text-sm">online</div>
              </div>
            </div>
            
            {/* Chat area */}
            <div className="bg-gray-100 flex-1 p-4 space-y-3 h-[520px] overflow-hidden" 
                 style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}>
              {conversation.slice(0, messageIndex + 1).map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === 'client' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-2xl shadow-sm ${
                      message.sender === 'client'
                        ? 'bg-green-500 text-white rounded-br-md'
                        : 'bg-white text-gray-800 rounded-bl-md'
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

            {/* WhatsApp input bar */}
            <div className="bg-gray-200 p-3 flex items-center space-x-2">
              <div className="flex-1 bg-white rounded-full px-4 py-2">
                <div className="text-gray-400 text-sm">Digite uma mensagem</div>
              </div>
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
