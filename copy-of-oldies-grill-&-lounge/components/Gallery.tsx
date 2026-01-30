
import React from 'react';
import { TRANSLATIONS, Language } from '../translations';

interface GalleryProps {
  lang: Language;
}

const Gallery: React.FC<GalleryProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].nav;
  
  const images = [
    {
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop",
      alt: "Premium Steak",
      label: lang === 'hi' ? "विशेष स्वाद" : "Specialty Taste"
    },
    {
      src: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=1000&auto=format&fit=crop",
      alt: "Burger Basket",
      label: lang === 'hi' ? "क्लासिक बर्गर" : "Classic Burger"
    },
    {
      src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=1000&auto=format&fit=crop",
      alt: "Atmosphere",
      label: lang === 'hi' ? "शानदार माहौल" : "Great Vibe"
    },
    {
      src: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?q=80&w=1000&auto=format&fit=crop",
      alt: "Dessert",
      label: lang === 'hi' ? "मीठा अनुभव" : "Sweet Experience"
    }
  ];

  return (
    <section id="gallery" className="py-40 bg-oldies-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24 reveal">
          <span className="text-oldies-gold font-bold tracking-[0.6em] uppercase text-[10px] mb-6 block">Atmosphere</span>
          <h2 className="font-serif text-6xl md:text-8xl text-white mb-6 font-black tracking-tighter">THE <span className="text-oldies-red italic font-light">EXPERIENCE</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="reveal relative group overflow-hidden aspect-[4/5] shadow-2xl rounded-sm" style={{ transitionDelay: `${idx * 150}ms` }}>
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transform transition-transform duration-[2s] group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oldies-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="h-[1px] w-8 bg-oldies-gold mb-3"></div>
                  <p className="text-white font-serif text-xl italic">{img.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
