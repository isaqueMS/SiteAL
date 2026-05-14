
import React, { useState, useMemo } from 'react';
import { SERVICES, PROFESSIONALS, SALON_DATA } from '../constants';

interface BookingSystemProps {
  onClose?: () => void;
}

const BookingSystem: React.FC<BookingSystemProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState({
    service: '',
    professional: '',
    date: '',
    time: ''
  });

  const timeSlots = ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
  
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleFinalize = () => {
    const message = `Olá! Gostaria de agendar um horário:%0A%0A✨ *Serviço:* ${booking.service}%0A👩‍🎨 *Profissional:* ${booking.professional}%0A📅 *Data:* ${booking.date}%0A🕒 *Hora:* ${booking.time}%0A%0AVim pelo site!`;
    window.open(`https://wa.me/${SALON_DATA.whatsapp}?text=${message}`, '_blank');
    if (onClose) onClose();
  };

  const isStepValid = useMemo(() => {
    if (step === 1) return !!booking.service;
    if (step === 2) return !!booking.professional;
    if (step === 3) return !!booking.date && !!booking.time;
    return true;
  }, [step, booking]);

  return (
    <div className="bg-stone-900/90 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-[2.5rem] shadow-2xl max-w-4xl mx-auto overflow-hidden">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-12">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step >= i ? 'bg-pink-500 text-white shadow-[0_0_15px_rgba(244,114,182,0.5)]' : 'bg-stone-800 text-stone-500'}`}>
              {i}
            </div>
            {i < 4 && <div className={`h-[2px] flex-1 mx-4 transition-all ${step > i ? 'bg-pink-500' : 'bg-stone-800'}`}></div>}
          </div>
        ))}
      </div>

      <div className="min-h-[400px]">
        {/* Step 1: Services */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-3xl font-serif text-white mb-2">Selecione o Serviço</h3>
            <p className="text-stone-500 mb-8 font-light italic">Escolha o procedimento que deseja realizar.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              {SERVICES.map((s) => (
                <button
                  key={s.name}
                  onClick={() => setBooking({ ...booking, service: s.name })}
                  className={`p-4 rounded-2xl border text-left transition-all ${booking.service === s.name ? 'border-pink-500 bg-pink-500/10 text-white' : 'border-white/5 bg-white/5 text-stone-400 hover:border-white/20'}`}
                >
                  <p className="font-semibold">{s.name}</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-60 mt-1">{s.category}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Professional */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-3xl font-serif text-white mb-2">Sua Especialista</h3>
            <p className="text-stone-500 mb-8 font-light italic">Com quem você deseja agendar?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PROFESSIONALS.map((p) => (
                <button
                  key={p.name}
                  onClick={() => setBooking({ ...booking, professional: p.name })}
                  className={`flex items-center space-x-4 p-5 rounded-3xl border transition-all ${booking.professional === p.name ? 'border-pink-500 bg-pink-500/10' : 'border-white/5 bg-white/5 hover:border-white/20'}`}
                >
                  <div className="w-16 h-16 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0">
                    <img src={`https://picsum.photos/seed/${p.name}/100/100`} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-left">
                    <p className={`font-bold ${booking.professional === p.name ? 'text-white' : 'text-stone-300'}`}>{p.name}</p>
                    <p className="text-xs text-stone-500">{p.role}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Date & Time */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-3xl font-serif text-white mb-2">Data e Horário</h3>
            <p className="text-stone-500 mb-8 font-light italic">Quando podemos te receber?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className="block text-stone-500 text-xs font-bold uppercase tracking-widest mb-4">Selecione a Data</label>
                <input 
                  type="date" 
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-stone-800 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-pink-500 transition-all"
                  onChange={(e) => setBooking({...booking, date: e.target.value})}
                  value={booking.date}
                />
              </div>
              <div>
                <label className="block text-stone-500 text-xs font-bold uppercase tracking-widest mb-4">Horários Disponíveis</label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map(t => (
                    <button
                      key={t}
                      onClick={() => setBooking({...booking, time: t})}
                      className={`py-3 rounded-lg text-xs font-bold transition-all ${booking.time === t ? 'bg-pink-500 text-white shadow-lg' : 'bg-stone-800 text-stone-400 hover:bg-stone-700'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Summary */}
        {step === 4 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500 text-center py-10">
            <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-[0_0_30px_rgba(244,114,182,0.4)]">
               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-4xl font-serif text-white mb-4">Quase Tudo Pronto!</h3>
            <p className="text-stone-400 mb-10 font-light">Revise os detalhes abaixo e finalize via WhatsApp.</p>
            
            <div className="max-w-md mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 text-left space-y-4 mb-10">
               <div className="flex justify-between border-b border-white/5 pb-2">
                 <span className="text-stone-500 text-xs uppercase tracking-widest">Serviço</span>
                 <span className="text-white font-bold">{booking.service}</span>
               </div>
               <div className="flex justify-between border-b border-white/5 pb-2">
                 <span className="text-stone-500 text-xs uppercase tracking-widest">Profissional</span>
                 <span className="text-white font-bold">{booking.professional}</span>
               </div>
               <div className="flex justify-between border-b border-white/5 pb-2">
                 <span className="text-stone-500 text-xs uppercase tracking-widest">Data</span>
                 <span className="text-white font-bold">{booking.date}</span>
               </div>
               <div className="flex justify-between">
                 <span className="text-stone-500 text-xs uppercase tracking-widest">Horário</span>
                 <span className="text-white font-bold">{booking.time}</span>
               </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/5">
        {step > 1 ? (
          <button 
            onClick={prevStep}
            className="text-stone-500 hover:text-white transition-colors flex items-center space-x-2 font-bold uppercase text-[10px] tracking-widest"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            <span>Voltar</span>
          </button>
        ) : <div />}
        
        {step < 4 ? (
          <button 
            onClick={nextStep}
            disabled={!isStepValid}
            className={`btn-rose px-10 py-4 text-white rounded-full font-bold uppercase text-[10px] tracking-widest disabled:opacity-20 disabled:cursor-not-allowed`}
          >
            Continuar
          </button>
        ) : (
          <button 
            onClick={handleFinalize}
            className="btn-rose px-12 py-5 text-white rounded-full font-bold uppercase text-[10px] tracking-widest shadow-[0_0_40px_rgba(244,114,182,0.4)]"
          >
            Finalizar no WhatsApp
          </button>
        )}
      </div>
    </div>
  );
};

export default BookingSystem;
