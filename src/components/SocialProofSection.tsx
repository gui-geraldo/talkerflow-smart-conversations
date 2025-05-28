
const SocialProofSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">Resultados que falam por si</h2>
          <p className="text-xl opacity-90">Dados reais de clientes TalkerFlow</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">-40%</div>
            <div className="text-lg text-white/90 mb-2">nos no-shows</div>
            <div className="text-sm text-white/70">clientes Flow Lead</div>
          </div>

          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">80%</div>
            <div className="text-lg text-white/90 mb-2">das dúvidas resolvidas</div>
            <div className="text-sm text-white/70">sem intervenção (Flow Loop)</div>
          </div>

          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">48h</div>
            <div className="text-lg text-white/90 mb-2">implantação média</div>
            <div className="text-sm text-white/70">do contrato à primeira conversa</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
