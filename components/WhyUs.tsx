
import React from 'react';
import { CheckCircle2, Clock, ShieldCheck, DollarSign } from 'lucide-react';

const WhyUs: React.FC = () => {
  const reasons = [
    {
      title: 'Sabit Fiyat Sözü',
      description: 'Sözleşme sonrası asla sürpriz maliyetlerle karşılaşmazsınız.',
      icon: <DollarSign className="text-white" size={30} />,
    },
    {
      title: 'Zamanında Teslim',
      description: 'Geciken her gün için tazminat ödemeyi taahhüt ediyoruz.',
      icon: <Clock className="text-white" size={30} />,
    },
    {
      title: 'Sertifikalı Ustalık',
      description: 'Tüm ekibimiz MYK belgeli ve kendi alanında 10+ yıl deneyimlidir.',
      icon: <CheckCircle2 className="text-white" size={30} />,
    },
    {
      title: 'Yasal Garanti',
      description: 'Yapılan tüm işçilik 2 yıl resmi garanti kapsamındadır.',
      icon: <ShieldCheck className="text-white" size={30} />,
    }
  ];

  return (
    <section id="neden-biz" className="py-32 bg-deko-navy relative overflow-hidden">
      {/* Background graphic elements based on logo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border-4 border-deko-orange rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 border-8 border-deko-orange rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1 bg-deko-orange/20 border border-deko-orange/30 text-deko-orange font-bold text-xs uppercase tracking-widest mb-6 rounded">
              GÜVEN VE KALİTE
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight font-display uppercase">
              DEKOTÜRKS İLE <br /><span className="text-deko-orange">RİSKSİZ</span> TADİLAT
            </h3>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed">
              Piyasadaki belirsizliklerin aksine, DekoTürks kurumsal yapısı ve şeffaf süreç yönetimi ile evinizi gönül rahatlığıyla emanet edebileceğiniz tek adres.
            </p>
            <div className="flex flex-col space-y-4">
              {['Ücretsiz yerinde keşif ve ekspertiz', 'Detaylı malzeme listesi ve şeffaf teklif', 'Sözleşme ve iş programı disiplini'].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 text-white font-bold">
                  <div className="w-6 h-6 rounded-full bg-deko-orange flex items-center justify-center">
                    <CheckCircle2 size={14} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all group">
                <div className="w-16 h-16 bg-deko-orange rounded-xl flex items-center justify-center mb-8 shadow-xl group-hover:rotate-6 transition-transform">
                  {reason.icon}
                </div>
                <h4 className="text-xl font-extrabold text-white mb-4 uppercase tracking-tight">{reason.title}</h4>
                <p className="text-slate-400 font-medium leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
