
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quanto tempo leva para implementar o agente na minha empresa?",
      answer: "Nossa equipe configura tudo e oferece treinamento online rapidamente. O processo é ágil e eficiente."
    },
    {
      question: "O agente lida bem com agendamentos complexos?",
      answer: "Sim. Ele gerencia reagendamentos, cancelamentos, verifica disponibilidade por serviço ou profissional e segue regras de prioridade."
    },
    {
      question: "Como é feito o treinamento do agente para o meu negócio?",
      answer: "Coletamos suas informações de atendimento, regras e tom de voz para personalizar o bot com a identidade do seu negócio."
    },
    {
      question: "Como fica a privacidade dos dados dos meus clientes?",
      answer: "Somos 100% compatíveis com a LGPD. Usamos criptografia, armazenamento seguro e fornecemos documentação para conformidade legal."
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">Perguntas Frequentes</h2>
          <p className="text-xl text-gray-300">Tire suas dúvidas sobre o TalkerFlow</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 animate-slide-in-left" style={{animationDelay: `${index * 0.1}s`}}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-gradient-to-br from-gray-700/50 to-gray-600/30 rounded-xl p-6 text-left border border-gray-600/50 backdrop-blur-sm hover-lift focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 text-blue-400" />
                    ) : (
                      <Plus className="h-5 w-5 text-blue-400" />
                    )}
                  </div>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="mt-2 p-6 bg-gray-900/50 rounded-xl border border-gray-700/50 backdrop-blur-sm animate-fade-in">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
