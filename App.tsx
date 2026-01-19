
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import ProfessionalsList from './components/ProfessionalsList';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingSystem from './components/BookingSystem';
import { SALON_DATA } from './constants';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-pink-500 selection:text-white">
      <Header isScrolled={isScrolled} onOpenBooking={() => setIsBookingOpen(true)} />
      
      <main>
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />
        
        <section id="servicos" className="py-32 bg-[#121212]">
          <Services onOpenBooking={() => setIsBookingOpen(true)} />
        </section>

        <Gallery />

        {/* Dedicated Booking Section */}
        <section id="agendamento" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-[150px]"></div>
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-20">
              <span className="text-pink-500 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Quick Booking</span>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Agende sua <span className="italic font-serif text-pink-500">Transformação</span></h2>
              <p className="text-stone-400 max-w-2xl mx-auto font-light leading-relaxed">Selecione o serviço, sua profissional favorita e reserve seu horário em poucos segundos.</p>
            </div>
            <BookingSystem />
          </div>
        </section>

        <section id="sobre" className="py-32 bg-[#121212]">
          <About />
        </section>

        <section id="equipe" className="py-32 bg-[#0a0a0a]">
          <ProfessionalsList />
        </section>

        <section id="depoimentos" className="py-32 bg-[#121212]">
          <Testimonials />
        </section>

        <section id="contato" className="py-32 bg-[#0a0a0a]">
          <Contact />
        </section>
      </main>

      <Footer />

      {/* Booking Modal (Triggered by buttons) */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
           <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setIsBookingOpen(false)}></div>
           <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar">
             <button 
               onClick={() => setIsBookingOpen(false)}
               className="absolute top-6 right-6 z-10 text-white/50 hover:text-white"
             >
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
             </button>
             <BookingSystem onClose={() => setIsBookingOpen(false)} />
           </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${SALON_DATA.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
        aria-label="Agendar via WhatsApp"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out group-hover:mr-2 text-xs uppercase font-bold tracking-widest">Dúvidas?</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </div>
  );
};

export default App;
