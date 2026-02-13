
import React from 'react';
import { Paintbrush, Bath, Zap, HardHat, Home, Ruler } from 'lucide-react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="group bg-white p-10 rounded-xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-[100px] -mr-10 -mt-10 group-hover:bg-deko-orange transition-colors duration-500 -z-0"></div>
    <div className="w-16 h-16 bg-deko-navy text-white rounded-lg flex items-center justify-center mb-8 relative z-10 shadow-lg group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-black text-deko-navy mb-4 font-display relative z-10 uppercase tracking-tight">{title}</h3>
    <p className="text-slate-600 leading-relaxed mb-8 relative z-10 font-medium">
      {description}
    </p>
    <a href="#" className="flex items-center text-deko-orange font-black text-sm uppercase tracking-widest group-hover:underline underline-offset-4 relative z-10">
      Hizmet Detayları
      <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
    </a>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: 'Mimari Tasarım',
      description: 'Evinizin potansiyelini modern 3D görselleştirme teknikleri ile henüz işe başlamadan keşfedin.',
      icon: <Ruler size={32} />
    },
    {
      title: 'Mutfak & Banyo',
      description: 'Fonksiyonel, şık ve lüks detaylarla donatılmış ıslak zemin çözümleri. Anahtar teslim yenileme.',
      icon: <Bath size={32} />
    },
    {
      title: 'Akıllı Aydınlatma',
      description: 'Evinizin havasını tek dokunuşla değiştiren, enerji tasarruflu ve estetik elektrik sistemleri.',
      icon: <Zap size={32} />
    },
    {
      title: 'Boya & Dekorasyon',
      description: 'İtalyan dekoratif boyalar, duvar kağıtları ve çıtalama uygulamalarıyla sanatsal dokunuşlar.',
      icon: <Paintbrush size={32} />
    },
    {
      title: 'Dış Cephe Mantolama',
      description: 'Isı yalıtımı ve estetik dış cephe kaplamalarıyla binanızın değerini ve konforunu artırın.',
      icon: <HardHat size={32} />
    },
    {
      title: 'Zemin & Parke',
      description: 'Lamine, masif ve suya dayanıklı parke seçenekleriyle zeminde kusursuz işçilik ve kalite.',
      icon: <Home size={32} />
    }
  ];

  return (
    <section id="hizmetler" className="py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mb-20">
          <div className="flex items-center space-x-4 mb-4">
            <span className="h-[2px] w-12 bg-deko-orange"></span>
            <span className="text-deko-orange font-black tracking-[0.3em] text-sm uppercase">NELER YAPIYORUZ?</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-deko-navy leading-tight font-display">
            A'DAN Z'YE <span className="text-deko-orange">PROFESYONEL</span> <br /> TADİLAT ÇÖZÜMLERİ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
