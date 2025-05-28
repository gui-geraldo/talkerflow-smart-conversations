
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quanto tempo leva para implementar o agente na minha empresa?",
      answer: "Entre 24 e 48h após a contratação. Nossa equipe configura tudo e oferece treinamento online."
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre o TalkerFlow
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-600 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
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
