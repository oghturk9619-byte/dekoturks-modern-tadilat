
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const KVKK: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#FDFBF7]">
            <Header />
            <main className="flex-grow pt-32 pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-3xl md:text-5xl font-bold text-deko-navy mb-12">KVKK Aydınlatma Metni</h1>

                        <div className="prose prose-stone lg:prose-xl">
                            <p className="text-stone-600 mb-8 font-medium">
                                DekoTürks Yapı & Tadilat ("Şirket") olarak, kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz. Bu bilinçle, Şirket olarak ürün ve hizmetlerimizden faydalanan kişiler dahil, Şirket ile ilişkili tüm şahıslara ait her türlü kişisel verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu’na (“Kanun”) uygun olarak işlenerek, muhafaza edilmesine büyük önem vermekteyiz.
                            </p>

                            <h3 className="text-2xl font-bold text-deko-navy mt-12 mb-6">1. Kişisel Verilerin Toplanması, İşlenmesi ve İşleme Amaçları</h3>
                            <p className="text-stone-600 mb-6">
                                Kişisel verileriniz, Şirketimiz tarafından sunulan hizmet ve faaliyetlerimize bağlı olarak; otomatik ya da otomatik olmayan yöntemlerle, şubelerimiz, internet sitemiz, sosyal medya mecralarımız ve benzeri vasıtalarla sözlü, yazılı ya da elektronik olarak toplanabilecektir.
                            </p>

                            <h3 className="text-2xl font-bold text-deko-navy mt-12 mb-6">2. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h3>
                            <p className="text-stone-600 mb-6">
                                Toplanan kişisel verileriniz; Şirketimiz tarafından sunulan hizmetlerden sizleri faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması, Şirketimizin sunduğu hizmetlerin sizlerin beğeni ve ihtiyaçlarına göre özelleştirilerek sizlere önerilmesi amacıyla iş ortaklarımıza, tedarikçilerimize ve kanunen yetkili kamu kurumlarına aktarılabilecektir.
                            </p>

                            <h3 className="text-2xl font-bold text-deko-navy mt-12 mb-6">3. Kişisel Veri Sahibinin Hakları</h3>
                            <p className="text-stone-600 mb-6">
                                Kanun’un 11. maddesi uyarınca veri sahipleri; kişisel veri işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve buna uygun kullanılıp kullanılmadığını öğrenme haklarına sahiptir.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default KVKK;
