
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1604654894610-df490c81826a?auto=format&fit=crop&q=80&w=400', title: 'Nail Art' },
    { url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=400', title: 'Spa Day' },
    { url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=400', title: 'Hair Treatment' },
    { url: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=400', title: 'Perfect Finish' },
    { url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=400', title: 'Care Details' },
    { url: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&q=80&w=400', title: 'Expert Touch' },
  ];

  return (
    <div id="galeria" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="w-12 h-[1px] bg-pink-500"></span>
            <span className="text-pink-500 text-xs font-bold uppercase tracking-[0.4em]">Galeria</span>
            <span className="w-12 h-[1px] bg-pink-500"></span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">Resultados <span className="italic font-serif">Reais</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden rounded-2xl aspect-square group cursor-pointer ${
                idx === 1 || idx === 4 ? 'md:row-span-2 md:aspect-auto' : ''
              }`}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                <p className="text-white text-xs font-bold uppercase tracking-widest">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
