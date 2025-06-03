const SocialProofSection = () => {
  const testimonials = [
    {
      name: "Dra. Marcela Coutinho",
      role: "Implantodontia • Manaus",
      text: "Impressionante como simplesmente não há fila. O paciente manda mensagem 14:00, às 14:01 ele é atendido e em 5 minutos a consulta está marcada.",
      image: "/testimonial_icon/marcela.png"
    },
    {
      name: "Paulo Mendes",
      role: "Contador • Belo Horizonte", 
      text: "Já tive cliente que às 3 da manhã agendou uma reunião pra assinar o contrato no dia seguinte. Quando acordei vi confirmação do agendamento. Se não fosse pela TalkerFlow, com certeza teria mandado mensagens pra mais 20 escritórios.",
      image: "/testimonial_icon/paulo.png"
    },
    {
      name: "Rodrigo Mariano",
      role: "Dentista • São Paulo",
      text: "Minha recepcionista estava sobrecarregada, passava umas 4 horas por dia no telefone. Agora quase zero. O agente de IA até consegue encaixar pacientes de última hora quando há cancelamentos.",
      image: "/testimonial_icon/rodrigo.png"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
          <p className="text-xl text-gray-300">Histórias reais de transformação</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800/60 to-gray-700/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/50 shadow-xl transform hover:scale-105 transition-all duration-300 text-center">
              <img
                src={testimonial.image}
                alt={`Foto de ${testimonial.name}`}
                className="w-12 h-12 rounded-full mx-auto mb-4 border border-white/30"
              />
              <div className="mb-4">
                <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                <div className="text-blue-300 text-sm mb-4">{testimonial.role}</div>
              </div>
              <p className="text-gray-200 text-base italic leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
