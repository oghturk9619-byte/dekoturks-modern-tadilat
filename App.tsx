import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Pages
import About from './pages/About';
import KVKK from './pages/KVKK';
import Careers from './pages/Careers';
import Certificates from './pages/Certificates';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const Home: React.FC = () => (
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
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#FDFBF7]">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/kvkk" element={<KVKK />} />
        <Route path="/kariyer" element={<Careers />} />
        <Route path="/sertifikalar" element={<Certificates />} />
        <Route path="/gizlilik" element={<Privacy />} />
        <Route path="/sartlar" element={<Terms />} />
      </Routes>
      <Footer />
      <MobileStickyBar />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
