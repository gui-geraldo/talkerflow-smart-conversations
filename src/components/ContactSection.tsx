
import { Mail, Phone, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">Vamos conversar?</h2>
          <p className="text-xl text-gray-300">Entre em contato e transforme seu atendimento</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-white mb-6">Fale conosco</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl border border-gray-600/50 backdrop-blur-sm hover-lift">
                <MessageSquare className="h-6 w-6 text-green-400" />
                <div>
                  <div className="text-white font-semibold">WhatsApp</div>
                  <div className="text-gray-300">Fale diretamente conosco</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl border border-gray-600/50 backdrop-blur-sm hover-lift">
                <Mail className="h-6 w-6 text-blue-400" />
                <div>
                  <div className="text-white font-semibold">E-mail</div>
                  <div className="text-gray-300">contato@talkerflow.me</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-xl border border-gray-600/50 backdrop-blur-sm hover-lift">
                <Phone className="h-6 w-6 text-purple-400" />
                <div>
                  <div className="text-white font-semibold">Telefone</div>
                  <div className="text-gray-300">Disponível via WhatsApp</div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <form className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-2xl p-8 border border-gray-600/50 backdrop-blur-sm">
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Nome</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">E-mail</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">Mensagem</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    placeholder="Como podemos ajudar você?"
                  ></textarea>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover-scale">
                  Enviar mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
