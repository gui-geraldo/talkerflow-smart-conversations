
interface Message {
  sender: 'user' | 'agent';
  text: string;
  time: string;
  isAudio?: boolean;
}

interface ComparisonCardProps {
  title: string;
  emoji: string;
  messages: Message[];
  variant?: 'default' | 'highlighted';
  contactName: string;
}

const ComparisonCard = ({ title, emoji, messages, variant = 'default', contactName }: ComparisonCardProps) => {
  const cardClasses = variant === 'highlighted' 
    ? "bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl p-6 border-2 border-blue-400 hover-lift animate-pulse-glow"
    : "bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover-lift";

  const titleColor = variant === 'highlighted' ? 'text-blue-400' : 
    title.includes('Sem ferramenta') ? 'text-red-400' : 'text-yellow-400';

  return (
    <div className={cardClasses}>
      <h3 className={`${titleColor} font-bold text-center mb-6`}>{emoji} {title}</h3>
      <div className="bg-black rounded-[1.5rem] p-1 shadow-lg">
        <div className="bg-gray-900 rounded-[1.2rem] overflow-hidden w-full h-96">
          <div className="bg-green-600 p-3 flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <div>
              <div className="text-white text-sm font-semibold">{contactName}</div>
              <div className="text-green-200 text-xs">online</div>
            </div>
          </div>
          <div className="bg-gray-100 p-3 space-y-2 h-80 overflow-hidden">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`p-2 rounded-lg text-xs max-w-xs ${
                    message.sender === 'user'
                      ? 'bg-green-500 text-white'
                      : 'bg-white text-gray-800 shadow'
                  }`}
                >
                  {message.isAudio ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                        </svg>
                      </div>
                      <div>
                        <div>{message.text}</div>
                        <div className={message.sender === 'user' ? 'text-green-100 text-xs' : 'text-gray-500 text-xs'}>
                          {message.time}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div dangerouslySetInnerHTML={{ __html: message.text.replace(/\n/g, '<br/>') }} />
                      <div className={message.sender === 'user' ? 'text-green-100 text-xs' : 'text-gray-500 text-xs'}>
                        {message.time}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonCard;
