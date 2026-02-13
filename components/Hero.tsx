
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-deko-navy">
      {/* Background with higher contrast overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=2000" 
          alt="Profesyonel Tadilat" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Decorative element from logo (steps) */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10 pointer-events-none hidden lg:block">
        <div className="absolute right-0 bottom-0 w-24 h-64 bg-deko-orange"></div>
        <div className="absolute right-32 bottom-0 w-24 h-96 bg-deko-orange"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-1 w-12 bg-deko-orange"></div>
            <span className="text-deko-orange font-extrabold tracking-[0.3em] text-sm uppercase">TÜRKİYE'NİN YAPI MARKASI</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 font-display">
            HAYALİNİZDEKİ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-deko-orange to-orange-400">YAŞAMI</span> İNŞA EDİYORUZ
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-light">
            DekoTürks ile anahtar teslim tadilat, dekorasyon ve mimari çözümlerde <span className="text-white font-bold italic underline decoration-deko-orange underline-offset-8">kesin tarih, sabit bütçe</span> garantisi.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="group bg-deko-orange hover:bg-white hover:text-deko-navy text-white px-10 py-5 rounded-lg font-black text-lg uppercase tracking-wider transition-all shadow-2xl shadow-orange-600/30 flex items-center justify-center">
              Ücretsiz Teklif Al
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="flex items-center justify-center space-x-4 text-white group">
              <div className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-deko-navy transition-all">
                <Play fill="currentColor" size={20} />
              </div>
              <span className="font-bold text-lg">Projelerimizi İzle</span>
            </button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl">
          {[
            { label: 'Yıllık Deneyim', value: '15+' },
            { label: 'Tamamlanan Proje', value: '1.200+' },
            { label: 'Mutlu Müşteri', value: '%99.8' },
          ].map((stat, i) => (
            <div key={i} className="border-l-2 border-deko-orange pl-6">
              <div className="text-4xl font-black text-white mb-1 font-display">{stat.value}</div>
              <div className="text-sm text-slate-400 font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
