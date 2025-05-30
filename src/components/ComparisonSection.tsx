
import ComparisonCard from './ComparisonCard';

const ComparisonSection = () => {
  const semFerramentaMessages = [
    { sender: 'user' as const, text: 'Oi', time: '05:03' },
    { sender: 'user' as const, text: 'Olá?', time: '09:17' },
    { sender: 'user' as const, text: '???', time: '11:45' },
    { sender: 'user' as const, text: 'Tem alguém aí?', time: '15:22' },
    { sender: 'user' as const, text: 'É sério isso?', time: '17:55' },
    { sender: 'agent' as const, text: 'Desculpe, estava em reunião e me perdi nas mensagens aqui. Como posso ajudar?', time: '17:56' },
    { sender: 'user' as const, text: 'Deixa pra lá, já comprei de outro.', time: '17:57' },
    { sender: 'agent' as const, text: '😔', time: '17:57' }
  ];

  const chatbotMessages = [
    { sender: 'user' as const, text: 'Oi', time: '2:43 PM' },
    { sender: 'agent' as const, text: 'Olá {nome do cliente não identificado}!\nÉ um prazer te receber\nVocê já é nosso aluno?\n[1] - SIM\n[2] - NÃO', time: '2:44 PM' },
    { sender: 'user' as const, text: 'Já sou aluno, quero saber se tem aula amanhã', time: '2:44 PM' },
    { sender: 'agent' as const, text: 'Ops, isso não parece um número 😔\nPor favor, digite apenas um dos números acima.', time: '2:45 PM' },
    { sender: 'user' as const, text: 'Sim', time: '2:45 PM' },
    { sender: 'agent' as const, text: 'Ops, isso não parece um número 😔\nPor favor, digite apenas um dos números acima.', time: '2:45 PM' },
    { sender: 'user' as const, text: '😡', time: '2:45 PM' },
    { sender: 'agent' as const, text: 'Ops, isso não parece um número 😔', time: '2:45 PM' }
  ];

  const talkerFlowMessages = [
    { sender: 'user' as const, text: 'Oi', time: '05:34 AM' },
    { sender: 'agent' as const, text: 'Oi, tudo bem? Eu sou a Isabela,\nComo posso te ajudar hoje?', time: '5:34 AM' },
    { sender: 'user' as const, text: 'Desculpe o horário 😔 Queria fazer um tratamento no dente, acho que é canal. Vcs fazem aí?', time: '5:35 AM' },
    { sender: 'agent' as const, text: 'Sem problemas, aqui já estou na ativa 😁! Sim, fazemos tratamento de canal! Você pode me contar um pouco mais sobre o que está acontecendo para que eu possa te ajudar melhor? Eu me chamo Isabela, qual é o seu nome?', time: '5:36 AM' },
    { sender: 'user' as const, text: '(áudio de 9 segundos)', time: '10:48 AM', isAudio: true },
    { sender: 'agent' as const, text: 'Legal Marcela, podemos agendar para amanhã a sua consulta!\nTenho 2 horários disponíveis, às 14:00 ou às 15:20\nQual deles fica melhor?', time: '10:49 AM' },
    { sender: 'user' as const, text: 'Pode ser às 14:00', time: '10:49 AM' },
    { sender: 'agent' as const, text: 'Perfeito! Agora, por favor, me forneça os seguintes dados para o agendamento:', time: '10:49 AM' }
  ];

  return (
    <div className="mt-20 animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Veja a diferença na prática</h2>
        <p className="text-gray-300">Compare como seus clientes são atendidos</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <ComparisonCard
          title="Sem ferramenta"
          emoji="❌"
          messages={semFerramentaMessages}
          contactName="Cliente"
        />
        
        <ComparisonCard
          title="Chatbot"
          emoji="⚠️"
          messages={chatbotMessages}
          contactName="Chatbot"
        />
        
        <ComparisonCard
          title="TalkerFlow!"
          emoji="✨"
          messages={talkerFlowMessages}
          variant="highlighted"
          contactName="Agente IA (Isabela)"
        />
      </div>
    </div>
  );
};

export default ComparisonSection;
