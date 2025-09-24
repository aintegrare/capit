import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ShoppingCart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-orange-600 rounded-lg flex items-center justify-center">
                <ShoppingCart size={20} className="text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Capit</h2>
                <p className="text-xs text-brand-primary font-medium tracking-wider">STORE</p>
              </div>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Sua loja online de confiança com os melhores produtos e preços do mercado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-brand-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-brand-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-brand-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Sobre Nós', 'Produtos', 'Ofertas', 'Contato', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-neutral-300 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Atendimento</h3>
            <ul className="space-y-2">
              {[
                'Central de Ajuda',
                'Política de Privacidade',
                'Termos de Uso',
                'Trocas e Devoluções',
                'Frete Grátis'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-neutral-300 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-brand-primary flex-shrink-0" />
                <span className="text-neutral-300 text-sm">(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-brand-primary flex-shrink-0" />
                <span className="text-neutral-300 text-sm">contato@capitstore.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-primary flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300 text-sm">
                  Rua das Compras, 123<br />
                  São Paulo, SP - 01234-567
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-600 mt-8 pt-8 text-center">
          <p className="text-neutral-400 text-sm">
            © 2024 Capit Store. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
