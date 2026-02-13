
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#FDFBF7]">
            <Header />
            <main className="flex-grow pt-32 pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-deko-orange font-bold tracking-widest text-sm uppercase mb-4 block">HAKKIMIZDA</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-deko-navy mb-8 leading-tight">
                            Yarım Asırlık Deneyimle <br />
                            <span className="text-stone-400">Geleceği İnşa Ediyoruz</span>
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 py-16 border-t border-stone-100">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-deko-navy italic border-l-4 border-deko-orange pl-6">Vizyonumuz</h3>
                                <p className="text-stone-600 text-lg leading-relaxed">
                                    DekoTürks olarak, yaşam alanlarını sadece fiziksel mekanlar olarak değil, ruhu olan sanat eserleri olarak görüyoruz. Ahşabın sıcaklığını modern teknolojinin imkanlarıyla birleştirerek, Türkiye'nin en prestijli yapı çözümlerini sunmayı hedefliyoruz.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-deko-navy italic border-l-4 border-deko-orange pl-6">Misyonumuz</h3>
                                <p className="text-stone-600 text-lg leading-relaxed">
                                    Her projede "sıfır hata" ve "maksimum estetik" prensibiyle hareket ederek, müşterilerimizin hayallerindeki mekanı gerçeğe dönüştürmek. Geleneksel el işçiliğini, çağdaş mimari anlayışla harmanlayarak sürdürülebilir ve lüks mekanlar yaratıyoruz.
                                </p>
                            </div>
                        </div>

                        <div className="bg-deko-navy text-white p-12 rounded-3xl mt-12 overflow-hidden relative group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-deko-orange/10 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110 duration-700"></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-6">Neden DekoTürks?</h2>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-slate-300 font-medium">
                                    <li className="flex items-center space-x-3"><span className="w-2 h-2 bg-deko-orange rounded-full"></span> <span>A+ Kalite Malzeme Seçimi</span></li>
                                    <li className="flex items-center space-x-3"><span className="w-2 h-2 bg-deko-orange rounded-full"></span> <span>Zamanında ve Eksiksiz Teslimat</span></li>
                                    <li className="flex items-center space-x-3"><span className="w-2 h-2 bg-deko-orange rounded-full"></span> <span>Kişiye Özel Mimari Çözümler</span></li>
                                    <li className="flex items-center space-x-3"><span className="w-2 h-2 bg-deko-orange rounded-full"></span> <span>Satış Sonrası Destek Garantisi</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;
