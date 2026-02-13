
import React from 'react';
import { StepProps } from '../types';

const Step: React.FC<StepProps> = ({ number, title, description }) => (
  <div className="relative flex flex-col items-center text-center px-4 group">
    <div className="w-20 h-20 rounded-full bg-stone-100 border-2 border-amber-200 flex items-center justify-center mb-6 group-hover:bg-amber-700 group-hover:border-amber-700 group-hover:text-white transition-all duration-300 shadow-sm">
      <span className="text-2xl font-bold">{number}</span>
    </div>
    <h4 className="text-xl font-bold text-stone-900 mb-3">{title}</h4>
    <p className="text-stone-600 leading-relaxed max-w-xs">{description}</p>
  </div>
);

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Ücretsiz Keşif',
      description: 'Yerinde analiz yaparak ihtiyaçlarınızı dinliyoruz ve en sıcak çözümleri planlıyoruz.'
    },
    {
      number: '02',
      title: 'Konsept Tasarım',
      description: 'Ahşap, ışık ve doku uyumuyla size özel bir dekorasyon projesi hazırlıyoruz.'
    },
    {
      number: '03',
      title: 'Titiz Uygulama',
      description: 'Profesyonel ustalarımızla her detayı özenle, çevreye zarar vermeden işliyoruz.'
    },
    {
      number: '04',
      title: 'Mutlu Teslimat',
      description: 'Evinizi temizlenmiş ve hayal ettiğiniz konforla size teslim ediyoruz.'
    }
  ];

  return (
    <section id="surec" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-amber-700 font-bold tracking-widest text-sm uppercase mb-4">DÖNÜŞÜM YOLCULUĞU</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-stone-900">Sürecimiz Nasıl İşler?</h3>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-amber-100 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <Step key={index} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
