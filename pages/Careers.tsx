
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Careers: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#FDFBF7]">
            <Header />
            <main className="flex-grow pt-32 pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-deko-orange font-bold tracking-widest text-sm uppercase mb-4 block">KARİYER</span>
                        <h1 className="text-4xl md:text-6xl font-black text-deko-navy mb-8">Ekibimizin Bir <br className="hidden md:block" /> Parçası Olun</h1>
                        <p className="text-stone-600 text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
                            DekoTürks ailesi olarak ustalıktan mimarlığa, her alanda tutkuyla çalışan profesyonelleri arıyoruz. Hayalinizdeki kariyeri burada inşa edin.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            {[
                                { title: 'İç Mimar', loc: 'İstanbul', type: 'Tam Zamanlı' },
                                { title: 'Saha Mühendisi', loc: 'Ankara', type: 'Tam Zamanlı' },
                                { title: 'Proje Koordinatörü', loc: 'İst/İzm', type: 'Uzaktan/Ofis' },
                                { title: 'Saha Kontrol Teknikeri', loc: 'Bursa', type: 'Proje Bazlı' }
                            ].map((job, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-xl font-bold text-deko-navy group-hover:text-deko-orange transition-colors">{job.title}</h3>
                                        <span className="text-[10px] font-black uppercase tracking-widest bg-stone-100 px-3 py-1 rounded-full text-stone-500">{job.type}</span>
                                    </div>
                                    <p className="text-stone-400 text-sm font-bold mb-6">Lokasyon: {job.loc}</p>
                                    <button className="text-deko-navy font-black text-sm uppercase tracking-widest border-b-2 border-deko-orange pb-1">Başvuruyu Yap</button>
                                </div>
                            ))}
                        </div>

                        <div className="mt-20 pt-20 border-t border-stone-100">
                            <h2 className="text-2xl font-bold text-deko-navy mb-6">Açık pozisyon bulamadınız mı?</h2>
                            <p className="text-stone-600 mb-8">Özgeçmişinizi <b>kariyer@dekoturks.com</b> adresine gönderin, uygun bir pozisyonda sizinle iletişime geçelim.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Careers;
