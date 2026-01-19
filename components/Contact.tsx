
import React from 'react';
import { SALON_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="space-y-16">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <span className="w-12 h-[1px] bg-pink-500"></span>
              <span className="text-pink-500 text-xs font-bold uppercase tracking-[0.4em]">Localização</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Onde nos <span className="italic font-serif">Encontrar</span></h2>
            <p className="text-stone-400 font-light leading-relaxed max-w-md">Estamos localizados em um ponto estratégico de Salvador para garantir seu conforto e facilidade de acesso.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h4 className="text-white font-bold text-xs uppercase tracking-widest border-b border-pink-500/30 pb-2 inline-block">Endereço</h4>
              <p className="text-stone-400 text-sm font-light leading-relaxed">
                {SALON_DATA.address}
              </p>
              <a 
                href={SALON_DATA.googleMaps} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-500 text-[10px] font-bold uppercase tracking-widest hover:underline mt-2 inline-block"
              >
                Abrir no Google Maps →
              </a>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-xs uppercase tracking-widest border-b border-pink-500/30 pb-2 inline-block">Horário</h4>
              <p className="text-stone-400 text-sm font-light leading-relaxed">
                {SALON_DATA.hours}<br />
                Segunda a Sábado
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-xs uppercase tracking-widest border-b border-pink-500/30 pb-2 inline-block">WhatsApp</h4>
              <p className="text-stone-400 text-sm font-light leading-relaxed">
                {SALON_DATA.phone}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-xs uppercase tracking-widest border-b border-pink-500/30 pb-2 inline-block">E-mail</h4>
              <p className="text-stone-400 text-sm font-light leading-relaxed">
                {SALON_DATA.email}
              </p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-pink-500/10 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="h-[500px] lg:h-full min-h-[500px] rounded-[3rem] overflow-hidden shadow-2xl relative border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.03456102146!2d-38.4411139!3d-12.923179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716104869c9b687%3A0xc3910c2262276566!2sR.%20Uirassu%20de%20Assis%20Batista%20-%20Castelo%20Branco%2C%20Salvador%20-%20BA!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              className="w-full h-full border-0 grayscale invert-[0.9] contrast-[1.2] opacity-80 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-700"
              allowFullScreen={true} 
              loading="lazy" 
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
