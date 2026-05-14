
import React from 'react';
import { PROFESSIONALS } from '../constants';

const ProfessionalsList: React.FC = () => {
  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center mb-20">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <span className="w-12 h-[1px] bg-pink-500"></span>
          <span className="text-pink-500 text-xs font-bold uppercase tracking-[0.4em]">Time de Especialistas</span>
          <span className="w-12 h-[1px] bg-pink-500"></span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Nossa <span className="italic font-serif text-pink-500">Equipe</span>
        </h2>
        <p className="mt-6 text-stone-400 max-w-2xl mx-auto font-light leading-relaxed italic">
          Conheça as mãos talentosas que transformam sua beleza no Studio Alesandra Sena.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {PROFESSIONALS.map((pro) => (
          <div key={pro.name} className="group">
            <div className="relative overflow-hidden rounded-[2rem] aspect-[3/4] mb-8 shadow-2xl border border-white/5">
              <img 
                src={`https://picsum.photos/seed/${pro.name}/600/800`} 
                alt={pro.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <p className="text-white text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all delay-100">
                  Expertise
                </p>
                <div className="w-8 h-[1px] bg-pink-500 mb-4 opacity-0 group-hover:opacity-100 transition-all delay-150"></div>
                <p className="text-stone-300 text-sm font-light leading-snug opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all delay-200">
                  Dedicação e técnica para um resultado impecável.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-serif text-white group-hover:text-pink-500 transition-colors mb-2">
                {pro.name}
              </h3>
              <p className="text-pink-500/80 text-[10px] font-bold uppercase tracking-[0.3em]">
                {pro.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-pink-500/50 to-transparent">
          <div className="bg-[#0a0a0a] px-8 py-3 rounded-full">
            <p className="text-stone-500 text-xs font-light tracking-widest">
              Atendimento personalizado com quem entende do seu estilo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalsList;
