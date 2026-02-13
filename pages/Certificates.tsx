
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Certificates: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#FDFBF7]">
            <Header />
            <main className="flex-grow pt-32 pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-deko-orange font-bold tracking-widest text-sm uppercase mb-4 block">GÜVEN VE KALİTE</span>
                        <h1 className="text-4xl md:text-5xl font-black text-deko-navy mb-12">Sertifikalarımız & Üyeliklerimiz</h1>

                        <p className="text-stone-600 text-lg mb-16 leading-relaxed">
                            DekoTürks, sunduğu hizmetlerin her aşamasında uluslararası standartlara ve yasal mevzuatlara tam uyum sağlar. Kalitemiz, aldığımız sertifika ve ödüllerle tescillenmiştir.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            {[
                                'ISO 9001:2015',
                                'ISO 14001:2015',
                                'ISO 45001:2018',
                                'TSE Hizmet Yeterlilik',
                                'İnşaat Müteahhitleri Konf.',
                                'Mimarlar Odası Kaydı'
                            ].map((cert, i) => (
                                <div key={i} className="aspect-square bg-white border border-stone-100 rounded-3xl flex flex-col items-center justify-center p-8 text-center group hover:bg-deko-navy transition-all shadow-sm hover:shadow-2xl">
                                    <div className="w-16 h-16 bg-stone-50 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-deko-orange transition-colors">
                                        <svg className="w-8 h-8 text-deko-navy group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-deko-navy group-hover:text-white transition-colors uppercase tracking-tight text-sm">{cert}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Certificates;
