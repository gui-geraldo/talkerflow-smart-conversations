
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
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
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

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-bounce-gentle">
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

          {/* Right side - iPhone mockup with conversation */}
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
        </div>

        {/* Comparison section */}
        <div className="mt-20 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Veja a diferença na prática</h2>
            <p className="text-gray-300">Compare como seus clientes são atendidos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Sem ferramenta */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover-lift">
              <h3 className="text-red-400 font-bold text-center mb-6">❌ Sem ferramenta</h3>
              <div className="bg-black rounded-[1.5rem] p-1 shadow-lg">
                <div className="bg-gray-900 rounded-[1.2rem] overflow-hidden w-full h-96">
                  <div className="bg-green-600 p-3 flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <div>
                      <div className="text-white text-sm font-semibold">Cliente</div>
                      <div className="text-green-200 text-xs">online</div>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-3 space-y-2 h-80 overflow-hidden">
                    <div className="flex justify-end">
                      <div className="bg-green-500 text-white p-2 rounded-lg text-xs max-w-xs">
                        <div>Oi</div>
                        <div className="text-green-100 text-xs">05:03</div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-green-500 text-white p-2 rounded-lg text-xs max-w-xs">
                        <div>Olá?</div>
                        <div className="text-green-100 text-xs">09:17</div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-green-500 text-white p-2 rounded-lg text-xs max-w-xs">
                        <div>???</div>
                        <div className="text-green-100 text-xs">11:45</div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-green-500 text-white p-2 rounded-lg text-xs max-w-xs">
                        <div>Tem alguém aí?</div>
                        <div className="text-green-100 text-xs">15:22</div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-green-500 text-white p-2 rounded-lg text-xs max-w-xs">
                        <div>É sério isso?</div>
                        <div className="text-green-100 text-xs">17:55</div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-white text-gray-800 p-2 rounded-lg text-xs max-w-xs shadow">
                        <div>Desculpe, estava em reunião e me perdi nas mensagens aqui. Como posso ajudar?</div>
                        <div className="text-gray-500 text-xs">17:56</div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-green-500 text-white p-2 rounded-lg text-xs max-w-xs">
                        <div>Deixa pra lá, já comprei de outro.</div>
                        <div className="text-green-100 text-xs">17:57</div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-white text-gray-800 p-2 rounded-lg text-xs max-w-xs shadow">
                        <div>😔</div>
                        <div className="text-gray-500 text-xs">17:57</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chatbot */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover-lift">
              <h3 className="text-yellow-400 font-bold text-center mb-6">⚠️ Chatbot</h3>
              <div className="bg-black rounded-[1.5rem] p-1 shadow-lg">
                <div className="bg-gray-900 rounded-[1.2rem] overflow-hidden w-full h-96">
                  <div className="bg-green-600 p-3 flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <div>
                      <div className="text-white text-sm font-semibold">Chatbot</div>
                      <div className="text-green-200 text-xs">online</div>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-3 space-y-2 h-80 overflow-hidden">
                    <div className="flex justify-end">
                      <div className="bg-green-500 text-white p-2 rounded-lg text-xs max-w-xs">
                        <div>Oi</div>
                        <div className="text-green-100 text-xs">2:43 PM</div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-white text-gray-800 p-2 rounded-lg text-xs max-w-xs shadow">
                        <div>Olá {`{nome do cliente não identificado}`}!<br/>É um prazer te receber<br/>Você já é nosso aluno?<br/>[1] - SIM<br/>[2] - NÃO</div>
                        <div className="text-gray-500 text-xs">2:44 PM</div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-green-500 text-white p-2 rounded-lg text-xs max-w-xs">
                        <div>Já sou aluno, quero saber se tem aula amanhã</div>
                        <div className="text-green-100 text-xs">2:44 PM</div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-white text-gray-800 p-2 rounded-lg text-xs max-w-xs shadow">
                        <div>Ops, isso não parece um número 😔<br/>Por favor, digite apenas um dos números acima.</div>
                        <div className="text-gray-500 text-xs">2:45 PM</div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-green-500 text-white p-2 rounded-lg text-xs max-w-xs">
                        <div>Sim</div>
                        <div className="text-green-100 text-xs">2:45 PM</div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-white text-gray-800 p-2 rounded-lg text-xs max-w-xs shadow">
                        <div>Ops, isso não parece um número 😔<br/>Por favor, digite apenas um dos números acima.</div>
                        <div className="text-gray-500 text-xs">2:45 PM</div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-green-500 text-white p-2 rounded-lg text-xs max-w-xs">
                        <div>😡</div>
                        <div className="text-green-100 text-xs">2:45 PM</div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-white text-gray-800 p-2 rounded-lg text-xs max-w-xs shadow">
                        <div>Ops, isso não parece um número 😔</div>
                        <div className="text-gray-500 text-xs">2:45 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TalkerFlow */}
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl p-6 border-2 border-blue-400 hover-lift animate-pulse-glow">
              <h3 className="text-blue-400 font-bold text-center mb-6">✨ TalkerFlow!</h3>
              <div className="bg-black rounded-[1.5rem] p-1 shadow-lg">
                <div className="bg-gray-900 rounded-[1.2rem] overflow-hidden w-full h-96">
                  <div className="bg-green-600 p-3 flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <div>
                      <div className="text-white text-sm font-semibold">Agente IA (Isabela)</div>
                      <div className="text-green-200 text-xs">online</div>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-3 space-y-2 h-80 overflow-hidden">
                    <div className="flex justify-end">
                      <div className="bg-green-500 text-white p-2 rounded-lg text-xs max-w-xs">
                        <div>Oi</div>
                        <div className="text-green-100 text-xs">05:34 AM</div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-white text-gray-800 p-2 rounded-lg text-xs max-w-xs shadow">
                        <div>Oi, tudo bem? Eu sou a Isabela,<br/>Como posso te ajudar hoje?</div>
                        <div className="text-gray-500 text-xs">5:34 AM</div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-green-500 text-white p-2 rounded-lg text-xs max-w-xs">
                        <div>Desculpe o horário 😔 Queria fazer um tratamento no dente, acho que é canal. Vcs fazem aí?</div>
                        <div className="text-green-100 text-xs">5:35 AM</div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-white text-gray-800 p-2 rounded-lg text-xs max-w-xs shadow">
                        <div>Sem problemas, aqui já estou na ativa 😁! Sim, fazemos tratamento de canal! Você pode me contar um pouco mais sobre o que está acontecendo para que eu possa te ajudar melhor? Eu me chamo Isabela, qual é o seu nome?</div>
                        <div className="text-gray-500 text-xs">5:36 AM</div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-green-500 text-white p-2 rounded-lg text-xs max-w-xs flex items-center space-x-2">
                        <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                          </svg>
                        </div>
                        <div>
                          <div>(áudio de 9 segundos)</div>
                          <div className="text-green-100 text-xs">10:48 AM</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-white text-gray-800 p-2 rounded-lg text-xs max-w-xs shadow">
                        <div>Legal Marcela, podemos agendar para amanhã a sua consulta!<br/>Tenho 2 horários disponíveis, às 14:00 ou às 15:20<br/>Qual deles fica melhor?</div>
                        <div className="text-gray-500 text-xs">10:49 AM</div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-green-500 text-white p-2 rounded-lg text-xs max-w-xs">
                        <div>Pode ser às 14:00</div>
                        <div className="text-green-100 text-xs">10:49 AM</div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-white text-gray-800 p-2 rounded-lg text-xs max-w-xs shadow">
                        <div>Perfeito! Agora, por favor, me forneça os seguintes dados para o agendamento:</div>
                        <div className="text-gray-500 text-xs">10:49 AM</div>
                      </div>
                    </div>
                  </div>
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
