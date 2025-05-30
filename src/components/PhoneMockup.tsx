import { useState, useEffect } from 'react';

const PhoneMockup = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  const conversation = [
    { sender: 'client', text: 'Oi! Quero agendar uma consulta', time: '14:00' },
    { sender: 'agent', text: 'Olá! Tudo bem? Eu sou a Isabela, aqui da Clínica Integral Care.\nMe conte, é sua primeira consulta com a gente?', time: '14:01' },
    { sender: 'client', text: 'Sim, primeira vez. Tem pra sexta?', time: '14:01' },
    { sender: 'agent', text: 'Legal! Tenho horário com o Dr. Paulo na sexta às 16h ou 17:15. Qual horário prefere? A, e aproveitando, qual seu nome? :)', time: '14:02' },
    { sender: 'client', text: '', time: '14:02', audio: true },
    { sender: 'agent', text: 'Sim, sexta é uma correria mesmo Marcela! Vamos de manhã, tenho na terça às 9h ou 11:15h. Qual destes fica melhor?', time: '14:03' },
    { sender: 'client', text: '15:15 fica bom', time: '14:03' },
    { sender: 'agent', text: 'Fechado! Me manda seu nome completo por favor, e o seu email tb', time: '14:04' },
    { sender: 'client', text: 'Marcela da Silva\nmarceladasilva@mail.com', time: '14:04' },
    { sender: 'agent', text: 'Fechado Marcela, já coloquei na agenda do Dr.!\nSegue aqui um resumo\n*Consulta Marcada*\nData: 05/Ago - Terça\nHorário: 11:15\nNome: Marcela da Silva\nEmail: marceladasilva@mail.com\n\nNosso Endereço:\n\nAv. Paulista 534 - Sala 65\nBela Vista, São Paulo - SP\nTemos conveniado no local, R$ 15\nOu vindo de transporte público, menos de 5 min andando da estação Trianon MASP', time: '14:05' },
    { sender: 'client', text: 'Blz! Obrigada', time: '14:06' },
    { sender: 'agent', text: 'Magina, foi um prazer\nAté logo :)', time: '14:06' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => {
        if (prev < conversation.length - 1) return prev + 1;
        return prev;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center animate-fade-in">
      <div className="w-[360px] h-[740px] bg-black rounded-[40px] shadow-2xl border-[10px] border-black relative overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black rounded-b-xl z-10" />

        {/* Tela do celular */}
        <div className="w-full h-full bg-[url('/whatsapp-bg.webp')] bg-cover flex flex-col">
          {/* Cabeçalho do chat */}
          <div className="bg-green-600 text-white px-4 py-3 flex items-center space-x-3 overflow-hidden">
            <div className="w-10 h-10 bg-gray-300 rounded-full shrink-0" />
            <div className="min-w-0">
              <div className="font-semibold truncate">Marcela Paciente</div>
              <div className="text-sm text-green-100">Online</div>
            </div>
          </div>

          {/* Área de mensagens */}
          <div className="flex-1 px-3 py-4 overflow-hidden flex flex-col space-y-3 text-sm bg-[#ece5dd]">
            {conversation.slice(0, messageIndex + 1).map((msg, i) => (
              <div
                key={i}
                className={`max-w-[75%] px-3 py-2 rounded-xl shadow text-sm whitespace-pre-line leading-tight ${
                  msg.sender === 'client'
                    ? 'ml-auto bg-[#dcf8c6] text-black rounded-br-sm'
                    : 'mr-auto bg-white text-black rounded-bl-sm'
                } animate-fade-in`}
              >
                {msg.audio ? (
                  <div className="flex items-center space-x-2">
                    <button className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z"
                        />
                      </svg>
                    </button>
                    <div className="flex-1 h-1 bg-gray-300 rounded">
                      <div className="w-1/4 h-full bg-blue-500 rounded" />
                    </div>
                    <div className="text-xs text-gray-600">0:08</div>
                  </div>
                ) : (
                  <div>{msg.text}</div>
                )}
                <div className={`text-[10px] text-gray-500 mt-1 text-right`}>
                  {msg.time}
                </div>
              </div>
            ))}
          </div>

          {/* Barra de input fake */}
          <div className="bg-white px-4 py-3 flex items-center space-x-2 border-t">
            <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-gray-500 text-sm">
              Digite uma mensagem
            </div>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
