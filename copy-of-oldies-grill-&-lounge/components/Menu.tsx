
import React, { useState } from 'react';
import { MENU_DATA } from '../constants';
import { ArrowRight, Trophy } from 'lucide-react';
import { TRANSLATIONS, Language } from '../translations';

interface MenuProps {
  lang: Language;
}

const Menu: React.FC<MenuProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].menu;
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="py-40 bg-white relative overflow-hidden">
      {/* Background Brand Mark */}
      <div className="absolute top-0 right-0 p-10 opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[25rem] font-serif italic leading-none">OG</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <header className="reveal text-center mb-32">
          <span className="text-oldies-red font-bold tracking-[0.6em] uppercase text-[10px] mb-6 block">{t.title}</span>
          <h2 className="font-serif text-6xl md:text-9xl text-oldies-black font-black leading-none tracking-tighter">
            CURATED <br />
            <span className="text-oldies-red italic font-light">SELECTION</span>
          </h2>
        </header>
        
        {/* Category Tabs */}
        <div className="flex justify-center mb-24 reveal stagger-1">
          <div className="inline-flex p-1 bg-gray-100 rounded-sm gap-1">
            {MENU_DATA.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`px-12 py-5 font-bold text-[10px] uppercase tracking-[0.3em] transition-all ${activeCategory === idx ? 'bg-white text-oldies-black shadow-lg shadow-black/5' : 'text-gray-400 hover:text-oldies-red'}`}
              >
                {category.title[lang] || category.title['en']}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {MENU_DATA[activeCategory].items.map((item, idx) => (
            <div 
              key={`${activeCategory}-${idx}`} 
              className="reveal flex flex-col gap-10 group"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Image Showcase */}
              <div className="relative aspect-[16/11] overflow-hidden rounded-sm shadow-2xl">
                <img 
                  src={item.image} 
                  alt={item.name[lang] || item.name['en']} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                
                {item.popular && (
                  <div className="absolute top-8 left-8 bg-oldies-gold text-black px-6 py-3 font-bold text-[9px] uppercase tracking-widest flex items-center gap-2 shadow-2xl">
                    <Trophy size={12} /> {t.popular}
                  </div>
                )}
                
                <div className="absolute bottom-8 right-8">
                  <span className="font-serif italic text-6xl text-white font-light drop-shadow-2xl">
                    {item.price}
                  </span>
                </div>
              </div>
              
              {/* Item Details */}
              <div className="px-2">
                <div className="flex items-baseline justify-between mb-6">
                  <h4 className="font-serif text-4xl font-black text-oldies-black group-hover:text-oldies-red transition-colors italic">
                    {item.name[lang] || item.name['en']}
                  </h4>
                  <div className="h-[1px] flex-1 mx-6 bg-gray-100 hidden sm:block"></div>
                </div>
                
                <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light max-w-2xl">
                  {item.description[lang] || item.description['en']}
                </p>
                
                <button className="flex items-center gap-4 text-oldies-black font-bold text-[10px] uppercase tracking-[0.4em] transition-all hover:text-oldies-red group/btn">
                  <span>{t.details}</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
