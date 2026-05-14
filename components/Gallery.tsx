
import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'todos' | 'unhas' | 'cabelo'>('todos');

  const nailImages = [
    { url: '/assets/galeria/unhas/unha-1.jpeg', title: 'Alongamento em Gel' },
    { url: '/assets/galeria/unhas/unha-2.jpeg', title: 'Esmaltação Premium' },
    { url: '/assets/galeria/unhas/unha-3.jpeg', title: 'Design Exclusivo' },
    { url: '/assets/galeria/unhas/unha-4.jpeg', title: 'Spa dos Pés' },
    { url: '/assets/galeria/unhas/unha-5.jpeg', title: 'Manicure Artística' },
    { url: '/assets/galeria/unhas/unha-6.jpeg', title: 'Acabamento Perfeito' },
  ];

  const hairImages = [
    { url: '/assets/galeria/cabelo/cabelo-1.jpeg', title: 'Alisamento Profissional' },
    { url: '/assets/galeria/cabelo/cabelo-2.jpeg', title: 'Tratamento Capilar' },
    { url: '/assets/galeria/cabelo/cabelo-3.jpeg', title: 'Alongamento Mega Hair' },
    { url: '/assets/galeria/cabelo/cabelo-4.jpeg', title: 'Corte e Estilo' },
    { url: '/assets/galeria/cabelo/cabelo-5.jpeg', title: 'Mechas e Iluminação' },
    { url: '/assets/galeria/cabelo/cabelo-6.jpeg', title: 'Selagem Térmica' },
    { url: '/assets/galeria/cabelo/cabelo-7.jpeg', title: 'Penteado Especial' },
  ];

  const allImages = [...nailImages.map(img => ({ ...img, category: 'unhas' })), ...hairImages.map(img => ({ ...img, category: 'cabelo' }))];

  const filteredImages = filter === 'todos' 
    ? allImages 
    : allImages.filter(img => img.category === filter);

  return (
    <div id="galeria" className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:index-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="w-12 h-[1px] bg-pink-500"></span>
            <span className="text-pink-500 text-xs font-bold uppercase tracking-[0.4em]">Galeria</span>
            <span className="w-12 h-[1px] bg-pink-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Resultados <span className="italic font-serif">Reais</span></h2>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {(['todos', 'unhas', 'cabelo'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-pink-500 text-white shadow-[0_0_20px_rgba(236,72,153,0.4)]' 
                    : 'bg-white/5 text-stone- Stone-400 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((img, idx) => (
            <div 
              key={`${img.url}-${idx}`} 
              className={`relative overflow-hidden rounded-2xl aspect-square group cursor-pointer transition-all duration-500`}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0 brightness-[0.85] group-hover:brightness-110 contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute inset-0 border border-white/0 group-hover:border-pink-500/30 rounded-2xl transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                <span className="text-pink-500 text-[10px] font-bold uppercase tracking-widest mb-1 block">{img.category === 'unhas' ? 'Unhas' : 'Cabelo'}</span>
                <p className="text-white text-sm font-medium">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
