
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import BeforeAfter from './components/BeforeAfter';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#FDFBF7]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyUs />
        <div className="bg-[#FAF7F2] py-24 border-y border-stone-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-amber-700 font-bold tracking-widest text-sm uppercase mb-4 block">CANLI KARŞILAŞTIRMA</span>
              <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6">Dönüşümü Kendi Gözlerinizle Görün</h2>
              <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Harabe halindeki mekanları, DekoTürks dokunuşuyla sıcak ve yaşanabilir sanat eserlerine dönüştürüyoruz. Sürgüyü kaydırarak farkı hissedin.
              </p>
            </div>
            <BeforeAfter />
          </div>
        </div>
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
};

export default App;
