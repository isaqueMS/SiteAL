
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center mb-20">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <span className="w-12 h-[1px] bg-pink-500"></span>
          <span className="text-pink-500 text-xs font-bold uppercase tracking-[0.4em]">Depoimentos</span>
          <span className="w-12 h-[1px] bg-pink-500"></span>
        </div>
        <h2 className="text-5xl font-bold text-white mb-6">Experiências <span className="italic font-serif">Inesquecíveis</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, idx) => (
          <div key={idx} className="card-modern p-10 rounded-[2.5rem] relative group">
            <div className="absolute top-8 right-10 text-pink-500/10 group-hover:text-pink-500/20 transition-colors">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9125 16 16.0171 16H19.0171C19.5694 16 20.0171 15.5523 20.0171 15V9C20.0171 8.44772 19.5694 8 19.0171 8H15.0171C14.4648 8 14.0171 7.55228 14.0171 7V5C14.0171 4.44772 14.4648 4 15.0171 4H20.0171C21.1216 4 22.0171 4.89543 22.0171 6V15C22.0171 18.3137 19.3308 21 16.0171 21H14.0171ZM2.01709 21L2.01709 18C2.01709 16.8954 2.91252 16 4.01709 16H7.01709C7.56937 16 8.01709 15.5523 8.01709 15V9C8.01709 8.44772 7.56937 8 7.01709 8H3.01709C2.46481 8 2.01709 7.55228 2.01709 7V5C2.01709 4.44772 2.46481 4 3.01709 4H8.01709C9.12166 4 10.0171 4.89543 10.0171 6V15C10.0171 18.3137 7.3308 21 4.01709 21H2.01709Z"/>
              </svg>
            </div>
            
            <p className="text-stone-400 italic mb-10 leading-relaxed font-light text-lg">
              "{t.text}"
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center font-serif font-bold text-pink-500 text-xl">
                {t.author[0]}
              </div>
              <div>
                <p className="font-bold text-white text-sm tracking-wide">{t.author}</p>
                <div className="flex items-center mt-1">
                   <p className="text-[10px] text-pink-500 uppercase tracking-widest font-bold">Via {t.source}</p>
                   <div className="flex ml-3 space-x-0.5">
                      {[1,2,3,4,5].map(s => (
                        <svg key={s} className="w-2.5 h-2.5 text-pink-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
