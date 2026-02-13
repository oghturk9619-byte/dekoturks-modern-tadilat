
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#FDFBF7]">
            <Header />
            <main className="flex-grow pt-32 pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-3xl md:text-5xl font-bold text-deko-navy mb-12">Kullanım Şartları</h1>
                        <div className="prose prose-stone lg:prose-xl text-stone-600 leading-relaxed">
                            <p className="mb-6">
                                DekoTürks web sitesine erişerek ve kullanarak, aşağıdaki şartları kabul etmiş sayılırsınız.
                            </p>
                            <h3 className="text-2xl font-bold text-deko-navy mt-10 mb-4">Sorumluluk</h3>
                            <p className="mb-6">
                                Sitede sunulan bilgiler bilgilendirme amaçlıdır. DekoTürks, teknik hatalardan veya içerik eksikliklerinden sorumlu tutulamaz.
                            </p>
                            <h3 className="text-2xl font-bold text-deko-navy mt-10 mb-4">Telif Hakları</h3>
                            <p className="mb-6">
                                Sitedeki tüm görsel ve metinsel içerikler DekoTürks'e aittir ve izinsiz kopyalanamaz.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Terms;
