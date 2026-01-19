
import React from 'react';
import { SALON_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Interior do salão" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Produtos premium" />
                </div>
             </div>
             <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1596462502278-27bfad450516?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Atendimento" />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-pink-500/20">
                  <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Nail Polish" />
                </div>
             </div>
          </div>
          {/* Decorative floating number */}
          <div className="absolute -bottom-10 -right-10 hidden xl:block">
            <span className="text-[12rem] font-serif font-bold text-white/5 select-none leading-none">04</span>
            <p className="text-pink-500 font-bold uppercase tracking-widest text-center -mt-8">Anos de Luxo</p>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-10">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <span className="w-12 h-[1px] bg-pink-500"></span>
              <span className="text-pink-500 text-xs font-bold uppercase tracking-[0.4em]">Nossa Essência</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Onde o Estilo encontra a <span className="italic font-serif text-pink-500">Sofisticação</span>
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-stone-400 text-lg font-light leading-relaxed">
              O <strong>Studio Alesandra Sena</strong> é mais que um salão; é um refúgio de autocuidado em Salvador. Há {SALON_DATA.yearsActive} anos, elevamos o padrão da estética com foco total na individualidade de cada cliente.
            </p>
            <p className="text-stone-500 font-light">
              Somos referência em Castelo Branco pela especialização técnica e pelo ambiente que exala tranquilidade e modernidade. Aqui, sua beleza é tratada como arte.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-6">
            <div className="border-l border-pink-500 pl-6">
              <h4 className="text-white font-bold mb-1">Especialização</h4>
              <p className="text-xs text-stone-500 uppercase tracking-widest">Procedimentos High-End</p>
            </div>
            <div className="border-l border-pink-500 pl-6">
              <h4 className="text-white font-bold mb-1">Qualidade</h4>
              <p className="text-xs text-stone-500 uppercase tracking-widest">Produtos Importados</p>
            </div>
          </div>

          <div className="pt-8">
            <a 
              href={`https://wa.me/${SALON_DATA.whatsapp}`}
              className="inline-flex items-center space-x-4 group"
            >
              <span className="w-12 h-12 rounded-full border border-pink-500 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
              <span className="text-white font-bold uppercase text-xs tracking-[0.2em]">Conheça nossa história</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
