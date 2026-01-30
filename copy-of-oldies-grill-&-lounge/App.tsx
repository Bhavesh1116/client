
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { Language } from './translations';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  return (
    <div className="min-h-screen font-sans selection:bg-oldies-gold selection:text-black bg-oldies-black">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Menu lang={lang} />
        <Gallery lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default App;
