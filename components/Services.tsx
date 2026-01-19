
import React from 'react';
import { SERVICES, SALON_DATA } from '../constants';

interface ServicesProps {
  onOpenBooking: () => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const nailServices = SERVICES.filter(s => s.category === 'Nails' || s.category === 'Spa');
  const hairServices = SERVICES.filter(s => s.category === 'Hair');

  const ServiceCard = ({ title, items, icon, colorClass }: any) => (
    <div className="card-modern p-10 rounded-[2.5rem]">
      <div className={`w-16 h-16 ${colorClass} rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-pink-500/10`}>
        {icon}
      </div>
      <h3 className="text-3xl font-serif text-white mb-8">{title}</h3>
      <div className="space-y-4">
        {items.map((item: any) => (
          <div key={item.name} className="flex justify-between items-center group cursor-default">
            <span className="text-stone-400 group-hover:text-white transition-colors">{item.name}</span>
            <div className="flex-1 border-b border-dotted border-white/10 mx-4 h-1"></div>
            <span className="text-pink-500 font-bold text-xs uppercase tracking-tighter">Consultar</span>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <button 
          onClick={onOpenBooking}
          className="w-full block py-4 text-center border border-white/5 rounded-xl text-xs uppercase tracking-widest font-bold text-white hover:bg-white hover:text-black transition-all"
        >
          Agendar Agora
        </button>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20">
        <div className="max-w-xl">
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-12 h-[1px] bg-pink-500"></span>
            <span className="text-pink-500 text-xs font-bold uppercase tracking-[0.4em]">Menu de Serviços</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Menu <span className="italic font-serif text-pink-500">Exclusivo</span> de Beleza
          </h2>
        </div>
        <p className="text-stone-500 text-sm md:text-base max-w-xs mt-6 md:mt-0 font-light italic">
          Utilizamos apenas produtos de alta performance para garantir a saúde das suas unhas e cabelos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ServiceCard 
          title="Unhas & Spa"
          items={nailServices}
          colorClass="bg-pink-500"
          icon={<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeWidth={1.5} /></svg>}
        />
        <ServiceCard 
          title="Terapia Capilar"
          items={hairServices}
          colorClass="bg-stone-800"
          icon={<svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 11-4.243 4.243 3 3 0 014.243-4.243zm0-5.758a3 3 0 11-4.243-4.243 3 3 0 014.243 4.243z" strokeWidth={1.5} /></svg>}
        />
      </div>

      <div className="mt-20 p-12 bg-gradient-to-r from-pink-500/10 to-transparent rounded-[2.5rem] border border-pink-500/20 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h4 className="text-2xl font-serif text-white mb-2">Especialização em Spa dos Pés</h4>
          <p className="text-stone-400 font-light">Uma experiência sensorial completa para renovar suas energias.</p>
        </div>
        <button 
          onClick={onOpenBooking}
          className="btn-rose px-8 py-4 text-white rounded-full font-bold uppercase text-[10px] tracking-[0.2em]"
        >
          Agendar Meu Spa
        </button>
      </div>
    </div>
  );
};

export default Services;
