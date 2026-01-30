
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe, ChevronDown } from 'lucide-react';
import { TRANSLATIONS, Language, LANGUAGES } from '../translations';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Offset for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const currentLangObj = LANGUAGES.find(l => l.code === lang);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-1000 ${isScrolled ? 'bg-oldies-black/90 backdrop-blur-2xl py-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)]' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
             <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="font-serif text-3xl font-black text-white tracking-tighter">
               OG<span className="text-oldies-red italic font-light">.</span>
             </a>
          </div>
          
          <div className="hidden lg:flex items-center space-x-12">
            <div className="flex space-x-10">
              {['home', 'about', 'menu', 'gallery', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => handleNavClick(e, `#${item}`)}
                  className="group relative text-white/60 hover:text-white px-1 py-2 text-[10px] font-bold uppercase tracking-[0.4em] transition-all"
                >
                  {(t as any)[item]}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-oldies-red transition-all duration-500 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="h-8 w-[1px] bg-white/10"></div>

            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-3 text-white bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full transition-all text-[10px] font-bold tracking-widest border border-white/5"
              >
                <Globe size={14} className="text-oldies-red" />
                <span>{currentLangObj?.label}</span>
                <ChevronDown size={14} className={`transition-transform duration-500 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-4 w-56 bg-oldies-black/95 border border-white/5 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-3xl animate-scale-in origin-top-right">
                  <div className="grid grid-cols-1 gap-1 p-2">
                    {LANGUAGES.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLang(l.code); setIsLangOpen(false); }}
                        className={`w-full text-left px-5 py-3 text-[10px] font-bold uppercase tracking-widest flex items-center gap-4 transition-all rounded-xl ${lang === l.code ? 'bg-oldies-red text-white' : 'text-gray-400 hover:bg-white/10'}`}
                      >
                        <span className="text-xl">{l.flag}</span> {l.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="tel:6052856576" className="relative group bg-oldies-red text-white px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-oldies-red/20 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3"><Phone size={14} /> {t.call}</span>
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </a>
          </div>
          
          <div className="lg:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="p-3 text-white bg-white/5 rounded-full backdrop-blur-xl border border-white/10">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-oldies-black/95 backdrop-blur-3xl border-b border-white/5 p-8 flex flex-col gap-6 animate-fade-in">
          {['home', 'about', 'menu', 'gallery', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => handleNavClick(e, `#${item}`)}
              className="text-white text-2xl font-serif italic"
            >
              {(t as any)[item]}
            </a>
          ))}
          <a href="tel:6052856576" className="bg-oldies-red text-white py-4 rounded-full text-center font-bold uppercase tracking-widest text-xs">
            {t.call}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
