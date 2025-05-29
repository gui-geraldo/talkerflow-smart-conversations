
const SocialProofSection = () => {
  const testimonials = [
    {
      name: "Dra. Marcela Coutinho",
      role: "Implantodontia • Manaus",
      text: "Impressionante como simplesmente não há fila. O paciente manda mensagem 14:00, às 14:01 ele é atendido e em 5 minutos a consulta está marcada."
    },
    {
      name: "Paulo Mendes",
      role: "Contador • Belo Horizonte", 
      text: "Já tive cliente que às 3 da manhã agendou uma reunião pra assinar o contrato no dia seguinte. Quando acordei vi confirmação do agendamento. Se não fosse pela TalkerFlow, com certeza teria mandado mensagens pra mais 20 escritórios."
    },
    {
      name: "Rodrigo Mariano",
      role: "Dentista • São Paulo",
      text: "Minha recepcionista estava sobrecarregada, passava umas 4 horas por dia no telefone. Agora quase zero. O agente de IA até consegue encaixar pacientes de última hora quando há cancelamentos."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
          <p className="text-xl text-gray-300">Histórias reais de transformação</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800/60 to-gray-700/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/50 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-200 text-lg italic leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="border-t border-gray-600 pt-6">
                <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                <div className="text-blue-300 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
