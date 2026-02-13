
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TestimonialProps } from '../types';

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, comment, rating, image }) => (
  <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm relative hover:shadow-lg transition-all duration-300">
    <div className="absolute top-8 right-8 text-amber-700/5">
      <Quote size={64} />
    </div>
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={18} className={i < rating ? "fill-amber-600 text-amber-600" : "text-stone-300"} />
      ))}
    </div>
    <p className="text-stone-700 leading-relaxed mb-8 relative z-10 italic">
      "{comment}"
    </p>
    <div className="flex items-center space-x-4">
      <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover ring-2 ring-amber-700/20" />
      <div>
        <h5 className="font-bold text-stone-900">{name}</h5>
        <p className="text-stone-500 text-sm">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Elif Aksoy',
      role: 'Villa Sahibi',
      comment: 'Salondaki ahşap panel uygulamaları ve gizli ışıklandırma için DekoTürks ekibine teşekkür ederim. Evin havası tamamen değişti!',
      rating: 5,
      image: 'https://picsum.photos/id/64/100/100'
    },
    {
      name: 'Serkan Güler',
      role: 'Ofis Yöneticisi',
      comment: 'Ofisimizin dekorasyonunda ahşap ve metalin bu kadar güzel uyum sağlayacağını tahmin etmiyorduk. Harika bir iş çıkardılar.',
      rating: 5,
      image: 'https://picsum.photos/id/91/100/100'
    },
    {
      name: 'Zeynep Işık',
      role: 'Daire Sahibi',
      comment: 'Banyo tadilatı sürecinde gösterdikleri titizlik takdire şayan. Hiç kırmadan, dökmeden, tertemiz bir iş yaptılar.',
      rating: 5,
      image: 'https://picsum.photos/id/177/100/100'
    }
  ];

  return (
    <section id="yorumlar" className="py-24 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-amber-700 font-bold tracking-widest text-sm uppercase mb-4">GÖRÜŞLERİNİZ</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-stone-900">Müşterilerimizin Deneyimleri</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
