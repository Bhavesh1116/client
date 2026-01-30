
import React from 'react';
import { MapPin, Phone, Facebook, Instagram } from 'lucide-react';
import { TRANSLATIONS, Language } from '../translations';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang]?.footer || TRANSLATIONS['en'].footer;
  const nt = TRANSLATIONS[lang]?.nav || TRANSLATIONS['en'].nav;

  return (
    <footer id="contact" className="bg-[#0a0a0a] text-white pt-32 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          
          <div className="space-y-10">
            <div>
              <h3 className="font-serif text-3xl font-black text-oldies-white mb-6 tracking-wider">OLDIES <span className="text-oldies-red">GRILL</span></h3>
              <p className="text-gray-500 font-light leading-relaxed max-w-sm">
                Dedicated to quality ingredients and small-town hospitality. Visit us for the best burgers.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-oldies-red font-black text-sm uppercase tracking-[0.2em]">{t.contact}</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-oldies-red mt-1 shrink-0" size={20} />
                  <p className="text-gray-400 font-medium">
                    3032 Main St<br />
                    Bowdle, SD 57428
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-oldies-red shrink-0" size={20} />
                  <a href="tel:6052856576" className="text-gray-400 hover:text-white transition-colors font-black text-lg">
                    (605) 285-6576
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <h4 className="text-oldies-red font-black text-sm uppercase tracking-[0.2em]">{t.hours}</h4>
            <div className="space-y-6">
              <div className="flex flex-col gap-1 border-l-2 border-white/5 pl-6 py-1">
                <span className="text-white font-black uppercase text-xs tracking-widest opacity-50">{t.lunch}</span>
                <span className="text-xl font-light text-gray-300">{t.lunchTime}</span>
              </div>
              <div className="flex flex-col gap-1 border-l-2 border-oldies-red pl-6 py-1">
                <span className="text-oldies-red font-black uppercase text-xs tracking-widest">{t.dinner}</span>
                <span className="text-xl font-light text-gray-300">{t.dinnerTime}</span>
              </div>
              <p className="text-xs text-oldies-red font-black uppercase tracking-[0.3em] pt-4">{t.daily}</p>
            </div>
          </div>

          <div className="space-y-10">
            <h4 className="text-oldies-red font-black text-sm uppercase tracking-[0.2em]">Location</h4>
            <div className="w-full h-72 bg-white/5 rounded-sm overflow-hidden relative group border border-white/10 shadow-2xl">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.187847849123!2d-99.65489792348514!3d45.56672397107575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52d3a77a9657683b%3A0x6a2c2705e3243f01!2s3032%20Main%20St%2C%20Bowdle%2C%20SD%2057428!5e0!3m2!1sen!2sus!4v1709400000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale invert opacity-50 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-700"
                  title="Google Maps Location"
                ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-checkerboard h-2 opacity-10 w-full"></div>
      <div className="bg-black py-8 border-t border-white/5 text-center">
        <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.4em]">
          &copy; {new Date().getFullYear()} Oldies Grill • {t.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
