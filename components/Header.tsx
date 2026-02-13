
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Logo = ({ scrolled }: { scrolled: boolean }) => (
  <div className="flex items-center space-x-2 cursor-pointer group">
    <div className="relative w-10 h-10 flex items-center justify-center">
      {/* Logoyu temsil eden SVG ikon yapısı */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M10 50 L35 30 L60 50 L60 80 L10 80 Z" fill={scrolled ? "#05223D" : "#fff"} />
        <path d="M30 65 L45 45" stroke="#F37321" strokeWidth="6" strokeLinecap="round" />
        <path d="M45 45 L45 55 M45 45 L35 45" stroke="#F37321" strokeWidth="6" strokeLinecap="round" />
        <rect x="65" y="40" width="10" height="40" fill="#F37321" />
        <rect x="80" y="25" width="10" height="55" fill="#F37321" />
      </svg>
    </div>
    <div className="flex flex-col -space-y-1">
      <span className={`text-xl font-extrabold font-display uppercase tracking-tight ${scrolled ? 'text-deko-navy' : 'text-white'}`}>
        <span className="text-deko-orange">DEKO</span>TÜRKS
      </span>
      <span className={`text-[10px] font-bold tracking-[0.2em] ${scrolled ? 'text-slate-400' : 'text-slate-300'}`}>
        YAPI & TADİLAT
      </span>
    </div>
  </div>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hizmetler', href: '#hizmetler' },
    { name: 'Neden Biz?', href: '#neden-biz' },
    { name: 'Süreç', href: '#surec' },
    { name: 'İletişim', href: '#iletisim' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-xl py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo scrolled={scrolled} />

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`font-bold text-sm uppercase tracking-wide transition-colors ${scrolled ? 'text-deko-navy hover:text-deko-orange' : 'text-white hover:text-deko-orange'}`}>
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-6">
          <a href="tel:05061699070" className={`flex items-center space-x-2 font-black ${scrolled ? 'text-deko-navy' : 'text-white'} hover:text-deko-orange transition-colors`}>
            <Phone size={18} className="text-deko-orange" />
            <span className="text-sm tracking-tighter">0506 169 90 70</span>
          </a>
          <button className="bg-deko-orange hover:bg-orange-600 text-white px-7 py-3 rounded-lg font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg shadow-orange-500/20 active:scale-95">
            Teklif Al
          </button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} className="text-deko-navy" /> : <Menu size={30} className={scrolled ? 'text-deko-navy' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[60] flex flex-col transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'} lg:hidden`}>
        <div className="flex justify-between items-center p-6 border-b">
          <Logo scrolled={true} />
          <button onClick={() => setIsOpen(false)}><X size={35} className="text-deko-navy" /></button>
        </div>
        <div className="p-8 flex flex-col space-y-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-3xl font-extrabold text-deko-navy hover:text-deko-orange uppercase">{link.name}</a>
          ))}
          <button className="w-full bg-deko-orange text-white py-5 rounded-xl font-bold text-xl shadow-xl shadow-orange-500/30">Ücretsiz Keşif İste</button>
          <a href="tel:05061699070" className="flex items-center justify-center space-x-3 text-deko-navy py-5 border-2 border-deko-navy rounded-xl font-bold text-lg"><Phone size={24} /><span>Hemen Arayın</span></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
