
import { MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageCircle className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TalkerFlow.Me
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#produtos" className="text-gray-700 hover:text-blue-600 transition-colors">
              Produtos
            </a>
            <a href="#como-funciona" className="text-gray-700 hover:text-blue-600 transition-colors">
              Como Funciona
            </a>
            <a href="#precos" className="text-gray-700 hover:text-blue-600 transition-colors">
              Preços
            </a>
            <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contato
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#produtos" className="text-gray-700 hover:text-blue-600 transition-colors">
                Produtos
              </a>
              <a href="#como-funciona" className="text-gray-700 hover:text-blue-600 transition-colors">
                Como Funciona
              </a>
              <a href="#precos" className="text-gray-700 hover:text-blue-600 transition-colors">
                Preços
              </a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contato
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
