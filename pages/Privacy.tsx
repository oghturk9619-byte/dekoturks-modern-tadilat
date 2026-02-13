
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#FDFBF7]">
            <Header />
            <main className="flex-grow pt-32 pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-3xl md:text-5xl font-bold text-deko-navy mb-12">Gizlilik Politikası</h1>
                        <div className="prose prose-stone lg:prose-xl text-stone-600 leading-relaxed">
                            <p className="mb-6">Son güncelleme: 13 Şubat 2026</p>
                            <p className="mb-6">
                                DekoTürks olarak gizliliğinize önem veriyoruz. Bu politika, sitemizi ziyaret ettiğinizde topladığımız bilgilerin nasıl kullanıldığını ve korunduğunu açıklar.
                            </p>
                            <h3 className="text-2xl font-bold text-deko-navy mt-10 mb-4">Veri Toplama</h3>
                            <p className="mb-6">
                                İletişim formlarımız aracılığıyla adınız, e-posta adresiniz ve telefon numaranız gibi bilgileri yalnızca size hizmet sunmak amacıyla topluyoruz.
                            </p>
                            <h3 className="text-2xl font-bold text-deko-navy mt-10 mb-4">Çerezler</h3>
                            <p className="mb-6">
                                Sitemiz, kullanıcı deneyimini iyileştirmek için temel çerezler kullanmaktadır.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Privacy;
