import { useState, useEffect, useRef } from 'react';

const PhoneMockup = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

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
    { sender: 'agent', text: 'Fechado Marcela, já coloquei na agenda do Dr.!', time: '14:05' },
    { sender: 'agent', text: '**Consulta Marcada**\n**Data:** 05/Ago - Terça\n**Horário:** 11:15\n**Nome:** Marcela da Silva\n**Email:** marceladasilva@mail.com\n\n**Nosso Endereço:**\n\nAv. Paulista 534 - Sala 65\nBela Vista, São Paulo - SP\nTemos conveniado no local, R$ 15\nOu vindo de transporte público, menos de 5 min andando da estação Trianon MASP', time: '14:05' },
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

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messageIndex]);

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex justify-center animate-fade-in">
      <div className="w-[320px] h-[580px] bg-black rounded-[36px] shadow-2xl border-[8px] border-black relative overflow-hidden">
        {/* Barra superior visual estilo iPhone preenchida com verde */}
        <div className="absolute top-0 w-full h-10 bg-white text-black text-[11px] px-3 flex items-center justify-between z-30">
          <span className="font-semibold">9:41</span>
          <div className="flex gap-1 items-center">
            <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M4 10h1v4H4v-4zm2 2h1v2H6v-2zm2-4h1v6H8V8zm2 1h1v5h-1V9zm2 3h1v2h-1v-2zm2-2h1v4h-1v-4zm2-3h1v7h-1V7zm2 5h1v2h-1v-2z" /></svg>
            <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24"><path d="M20 4h-1v1h1V4zm0 2h-1v1h1V6zm0 2h-1v1h1V8zm0 2h-1v1h1v-1z" /></svg>
            <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2" ry="2" /></svg>
          </div>
        </div>

        {/* Notch */}
        <div className=\"absolute top-10 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-black rounded-b-xl z-40\" />

        {/* Tela do celular */}
        <div className="w-full h-full flex flex-col pt-14">
          {/* Cabeçalho do chat */}
          <div className="bg-green-600 text-white px-4 py-2 flex items-center space-x-3">
            <img src="/avatar-marcela.jpg" alt="Avatar" className="w-9 h-9 rounded-full object-cover shrink-0" />
            <div className="min-w-0">
              <div className="font-semibold text-sm truncate">Marcela Paciente</div>
              <div className="text-sm text-green-100">Online</div>
            </div>
          </div>

          {/* Área de mensagens */}
          <div ref={scrollRef} className="flex-1 px-3 py-3 overflow-y-auto scrollbar-none relative after:absolute after:top-0 after:right-0 after:w-1 after:bg-black/20 after:rounded-full after:h-12 after:opacity-50 flex flex-col space-y-3 text-sm bg-[#ece5dd]">
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
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center" onClick={handlePlay}>
                      {isPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-600">
                          <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-600">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>
                    <div className="flex-1 h-1 bg-gray-300 rounded">
                      <div className="w-1/3 h-full bg-green-600 rounded" />
                    </div>
                    <div className="text-xs text-gray-600">0:08</div>
                    <audio ref={audioRef} src="/audio/audio-marcela.mp3" preload="auto" onEnded={() => setIsPlaying(false)} />
                  </div>
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                )}
                <div className="text-[10px] text-gray-500 mt-1 text-right">{msg.time}</div>
              </div>
            ))}
          </div>

          {/* Barra de input fake */}
          <div className="bg-white px-4 py-2 flex items-center space-x-2 border-t">
            <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-gray-500 text-sm">
              Digite uma mensagem
            </div>
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
