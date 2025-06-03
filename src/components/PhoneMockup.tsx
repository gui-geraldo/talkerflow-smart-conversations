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
    <div className="flex justify-center items-center min-h-screen p-4 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="relative w-full max-w-[340px] aspect-[9/19] bg-black border-[12px] border-black rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden outline outline-[1.5px] outline-gray-800 before:content-[''] before:absolute before:inset-y-0 before:w-1.5 before:bg-gradient-to-l before:from-black/10 before:to-transparent before:left-0 after:content-[''] after:absolute after:inset-y-0 after:w-1.5 after:bg-gradient-to-r after:from-black/10 after:to-transparent after:right-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-900 rounded-b-xl z-30"></div>

        <div className="absolute top-0 w-full h-6 px-3 flex items-center justify-between z-20 text-white text-xs font-semibold">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 20h2v-4H2v4zm4 0h2v-7H6v7zm4 0h2v-10h-2v10zm4 0h2v-13h-2v13zm4 0h2V4h-2v16z" />
            </svg>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 1l22 22" stroke="none" />
              <path d="M5 13a10 10 0 0 1 14 0" />
              <path d="M8.5 16.5a5 5 0 0 1 7 0" />
              <path d="M12 20h.01" />
            </svg>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
              <path d="M23 13v-2" />
              <rect x="3" y="8" width="14" height="8" fill="white" />
            </svg>
          </div>
        </div>

        <div className="w-full h-full flex flex-col pt-6">
          <div className="bg-green-600 text-white px-4 py-2 flex items-center space-x-3 overflow-hidden">
            <img src="/avatar-marcela.jpg" alt="Avatar" className="w-9 h-9 rounded-full object-cover shrink-0" />
            <div className="min-w-0">
              <div className="font-semibold truncate">Marcela Paciente</div>
              <div className="text-sm text-green-100">Online</div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 px-3 py-3 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex flex-col space-y-3 text-sm bg-[#ece5dd]">
            {conversation.slice(0, messageIndex + 1).map((msg, i) => (
              <div
                key={i}
                className={`max-w-[75%] px-3 py-2 rounded-xl shadow text-sm whitespace-pre-line leading-tight transition-opacity duration-700 ease-in-out opacity-100 animate-fade-in ${
                  msg.sender === 'client'
                    ? 'ml-auto bg-[#dcf8c6] text-black rounded-br-sm'
                    : 'mr-auto bg-white text-black rounded-bl-sm'
                }`}
              >
                {msg.audio ? (
                  <div className="flex items-center space-x-3 min-w-[160px] max-w-[70%]">
                    <button onClick={handlePlay} className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      {isPlaying ? (
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img src="/avatar-marcela.jpg" alt="Marcela" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 h-1 bg-gray-300 rounded">
                      <div className="w-1/3 h-full bg-green-600 rounded" />
                    </div>
                    <div className="text-xs text-gray-600">0:08</div>
                    <audio ref={audioRef} src="/audio/audio-marcela.mp3" preload="auto" onEnded={() => setIsPlaying(false)} />
                  </div>
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                )}
                <div className="text-[10px] text-gray-500 mt-1 text-right">
                  {msg.time}
                </div>
              </div>
            ))}
          </div>

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
