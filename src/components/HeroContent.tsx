import { ArrowRight, MessageCircle, Users } from 'lucide-react';

const HeroContent = () => {
  return (
    <div className="text-left animate-slide-in-left">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
        Seu cliente atendido na{' '}
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent gradient-shift">
          hora em que precisa
        </span>
        , sempre.
      </h1>
      
      <p className="text-xl text-blue-200 mb-8 max-w-2xl font-medium animate-fade-in">
        Conversas inteligentes no WhatsApp que qualificam leads, resolvem dúvidas e constroem relações de confiança em diálogos humanos, 24 horas por dia.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
        <a
          href="#talker-flow-lead"
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover-lift"
        >
          <Users className="h-5 w-5" />
          <span>Quero mais clientes</span>
          <ArrowRight className="h-5 w-5" />
        </a>
        
        <a
          href="#talker-flow-loop"
          className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover-lift"
        >
          <MessageCircle className="h-5 w-5" />
          <span>Preciso de suporte</span>
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
