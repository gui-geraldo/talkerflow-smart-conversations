import { useState, useEffect, useRef } from 'react';
import { CheckCheck } from 'lucide-react';

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
      <div className="relative w-[300px] h-[640px] bg-black border-[14px] rounded-[2.5rem] shadow-xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 mt-[-2px] bg-black rounded-b-3xl z-30"></div>
        <div className="absolute left-[-14px] top-[80px] h-[32px] w-[3px] bg-gray-700 rounded-l-lg"></div>
        <div className="absolute right-[-14px] top-[150px] h-[32px] w-[3px] bg-gray-700 rounded-r-lg"></div>

        <div className="absolute top-1 left-3 right-3 flex items-center justify-between text-white text-[10px] z-30 px-2">
          <div className="flex gap-1">
            <div className="w-3 h-[2px] bg-white"></div>
            <div className="w-3 h-[4px] bg-white"></div>
            <div className="w-3 h-[6px] bg-white"></div>
          </div>
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          <div className="bg-[#075E54] text-white px-4 py-3 flex items-center space-x-3">
            <img src="/avatar-marcela.jpg" alt="Avatar" className="w-9 h-9 rounded-full object-cover" />
            <div>
              <p className="font-medium">Marcela Paciente</p>
              <p className="text-xs text-white/80">Online</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-4 p-4 bg-[#ece5dd] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {conversation.slice(0, messageIndex + 1).map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg shadow-sm text-sm max-w-[80%] whitespace-pre-line leading-tight transition-opacity duration-700 ease-in-out opacity-100 animate-fade-in ${
                  msg.sender === 'client'
                    ? 'ml-auto bg-[#d9fdd3] rounded-tl-none'
                    : 'mr-auto bg-white rounded-tr-none'
                }`}
              >
                {msg.audio ? (
                  <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2 cursor-pointer" onClick={handlePlay}>
                    {isPlaying ? (
                      <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                    <div className="w-32 h-1 bg-gray-300 rounded-full relative">
                      <div className="absolute top-0 left-0 h-1 bg-gray-500 rounded-full w-1/3"></div>
                    </div>
                    <span className="text-xs text-gray-500">0:08</span>
                    <audio ref={audioRef} src="/audio/audio-marcela.mp3" preload="auto" onEnded={() => setIsPlaying(false)} />
                  </div>
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                )}
                <div className="text-[10px] text-gray-500 mt-1 text-right flex items-center gap-1">
                  <span>{msg.time}</span>
                  {msg.sender === 'agent' && <CheckCheck size={12} className="text-[#34b7f1]" />}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#f0f2f5] p-2 border-t border-gray-200">
            <div className="w-full h-10 bg-white rounded-full px-4 flex items-center text-sm text-gray-400">
              Digite uma mensagem...
            </div>
          </div>
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gray-700 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
