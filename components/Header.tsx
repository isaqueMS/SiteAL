
import React, { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
  onOpenBooking: () => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-glass py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-rose-700 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
               <span className="text-white font-serif text-xl font-bold tracking-tighter">AS</span>
            </div>
            <div className="absolute -inset-1 bg-pink-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
          </div>
          <span className="font-serif text-xl font-bold tracking-widest text-white uppercase hidden sm:block">
            Studio <span className="text-pink-500">Alesandra</span> Sena
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-400 hover:text-pink-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <button 
          onClick={onOpenBooking}
          className="hidden lg:block px-6 py-2 border border-pink-500/30 text-pink-500 text-xs uppercase tracking-widest font-bold rounded-full hover:bg-pink-500 hover:text-white transition-all"
        >
          Agendar
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 bg-black/95 z-40 transition-all duration-500 md:hidden ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-2xl font-serif text-white hover:text-pink-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => { onOpenBooking(); setIsOpen(false); }}
            className="text-pink-500 font-bold uppercase tracking-widest text-lg"
          >
            Agendar Horário
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
