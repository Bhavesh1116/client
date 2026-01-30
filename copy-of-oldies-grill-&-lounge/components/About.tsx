
import React from 'react';
import { Star } from 'lucide-react';
import { FEATURES } from '../constants';
import { TRANSLATIONS, Language } from '../translations';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang]?.about || TRANSLATIONS['en'].about;
  
  return (
    <section id="about" className="py-48 bg-oldies-black relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 opacity-[0.02] pointer-events-none select-none hidden lg:block">
        <h2 className="text-[15rem] font-serif font-black whitespace-nowrap">AUTHENTIC CRAFT</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          
          <div className="reveal">
            <span className="text-oldies-gold font-bold tracking-[0.6em] uppercase text-[10px] mb-8 block">Our Heritage</span>
            
            <h2 className="font-serif text-6xl md:text-8xl text-white mb-12 leading-[0.9] tracking-tighter">
              {t.title} <br />
              <span className="text-oldies-red italic font-light">{t.titleHighlight}</span>
            </h2>
            
            <div className="space-y-10 mb-16">
              <p className="text-gray-400 text-xl leading-relaxed font-light">
                {t.desc1}
              </p>
              <div className="p-12 border border-white/5 bg-white/[0.01] backdrop-blur-3xl rounded-sm relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-1 h-full bg-oldies-red"></div>
                 <p className="text-white text-3xl leading-snug font-serif italic font-light">
                  "{t.desc2}"
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12">
              {FEATURES.map((feature, index) => (
                <div key={index} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/5 text-oldies-gold flex items-center justify-center rounded-full border border-white/10 group-hover:bg-oldies-gold group-hover:text-black transition-all duration-500">
                    <feature.icon size={24} strokeWidth={1} />
                  </div>
                  <span className="text-white/60 font-bold tracking-[0.2em] text-[10px] uppercase group-hover:text-white transition-colors">{feature.text[lang] || feature.text['en']}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal [transition-delay:300ms]">
             <div className="relative group">
                <div className="absolute -inset-10 border border-white/5 group-hover:border-oldies-gold/20 transition-all duration-1000"></div>
                
                <div className="relative overflow-hidden aspect-[4/5] rounded-sm shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop" 
                    alt="Signature Dish" 
                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-oldies-black/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-10 left-10 right-10 p-12 bg-black/60 backdrop-blur-2xl border border-white/10 text-center">
                    <div className="flex justify-center gap-2 mb-4 text-oldies-gold">
                      {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" strokeWidth={0} />)}
                    </div>
                    <span className="text-white font-serif text-3xl font-light italic tracking-wide">{t.rating}</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
