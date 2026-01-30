
import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { TRANSLATIONS, Language } from '../translations';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].hero;

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('menu');
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section id="home" className="relative h-[105vh] flex items-center justify-center overflow-hidden bg-oldies-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 luxury-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2400&auto=format&fit=crop"
          alt="Luxury Restaurant Background" 
          className="w-full h-full object-cover animate-scale-slow"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col items-center gap-6 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-oldies-gold/50"></div>
            <span className="text-oldies-gold font-bold tracking-[0.6em] uppercase text-[10px] md:text-xs">
              {t.est}
            </span>
            <div className="h-[1px] w-12 bg-oldies-gold/50"></div>
          </div>
        </div>
        
        <div className="mb-10">
          <h1 className="font-serif text-[15vw] md:text-[12rem] font-black text-white leading-[0.8] tracking-tighter animate-fade-up">
            OLDIES
            <span className="block text-oldies-red italic font-light tracking-normal mt-2">GRILL</span>
          </h1>
        </div>
        
        <p className="text-lg md:text-2xl text-gray-300 mb-16 font-light max-w-2xl mx-auto leading-relaxed animate-fade-in [animation-delay:600ms]">
          {t.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in [animation-delay:900ms]">
          <a 
            href="#menu" 
            onClick={handleExploreClick}
            className="group relative px-14 py-6 bg-oldies-red text-white font-bold rounded-sm uppercase tracking-[0.3em] text-[10px] transition-all hover:bg-oldies-red/90 shadow-2xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              {t.viewMenu} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a 
            href="tel:6052856576" 
            className="group px-14 py-6 bg-transparent border border-white/10 text-white font-bold rounded-sm uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-black transition-all flex items-center gap-3"
          >
            <Phone size={14} /> {t.orderNow}
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <div className="w-[1px] h-24 bg-gradient-to-b from-oldies-gold to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
