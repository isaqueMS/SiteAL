
import React from 'react';
import { SALON_DATA } from '../constants';

interface HeroProps {
  onOpenBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0a0a0a]">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pink-500/5 to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center space-x-4">
              <span className="w-12 h-[1px] bg-pink-500"></span>
              <span className="text-pink-500 text-xs font-bold uppercase tracking-[0.4em]">Beauty Experience</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-none">
              <span className="block text-white">Beleza que</span>
              <span className="block italic font-serif gradient-text">Inspira.</span>
            </h1>
            
            <p className="text-stone-400 text-lg md:text-xl max-w-xl font-light leading-relaxed">
              Especialistas em <span className="text-white font-semibold">alongamento em gel</span> e <span className="text-white font-semibold">spa dos pés</span>. Transformamos sua autoestima com técnicas exclusivas e atendimento de luxo.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <button 
                onClick={onOpenBooking}
                className="btn-rose px-10 py-5 text-white rounded-full font-bold uppercase text-xs tracking-widest shadow-2xl"
              >
                Reservar Horário
              </button>
              <a 
                href="#servicos"
                className="px-10 py-5 border border-white/10 text-white rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white/5 transition-all"
              >
                Ver Serviços
              </a>
            </div>

            <div className="flex items-center space-x-12 pt-12">
              <div>
                <p className="text-3xl font-serif text-white font-bold">4.9</p>
                <p className="text-stone-500 text-[10px] uppercase tracking-widest font-bold">Avaliação Google</p>
              </div>
              <div className="w-[1px] h-10 bg-white/10"></div>
              <div>
                <p className="text-3xl font-serif text-white font-bold">4+</p>
                <p className="text-stone-500 text-[10px] uppercase tracking-widest font-bold">Anos de Histórica</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative z-10 w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=800" 
                alt="Manicure de luxo" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-white font-serif text-2xl italic">Especialidade do Studio</p>
                <p className="text-pink-500 text-xs font-bold uppercase tracking-widest">Alongamento em Gel Premium</p>
              </div>
            </div>
            
            {/* Floating Card */}
            <button 
              onClick={onOpenBooking}
              className="absolute -bottom-6 -right-6 md:-right-12 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl hidden sm:block animate-bounce-slow text-left"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Vagas Limitadas</p>
                  <p className="text-stone-400 text-xs">Agende seu horário hoje!</p>
                </div>
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
