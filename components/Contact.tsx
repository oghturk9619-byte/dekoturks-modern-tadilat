
import React from 'react';
import { Mail, MapPin, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="iletisim" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-deko-orange font-bold tracking-widest text-sm uppercase mb-4">BİZE ULAŞIN</h2>
            <h3 className="text-3xl md:text-5xl font-black text-deko-navy mb-8 leading-tight font-display">
              Daha Güzel Bir Ev <br /> İçin İlk Adım
            </h3>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
              Hayalinizdeki dekorasyonu gerçekleştirmek için bize mesaj bırakabilir veya WhatsApp üzerinden ulaşabilirsiniz. Uzman ekibimiz en kısa sürede dönüş yapacaktır.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-5">
                <div className="bg-deko-light p-4 rounded-2xl text-deko-orange shadow-sm">
                  <Mail size={28} />
                </div>
                <div>
                  <h5 className="font-black text-deko-navy uppercase text-sm tracking-widest mb-1">E-Posta</h5>
                  <p className="text-slate-600 font-bold text-lg">destek@dekoturks.com</p>
                </div>
              </div>
              <a
                href="https://wa.me/905061699070?text=Merhaba%20DekoT%C3%BCrks%2C%20bir%20tadilat%20projemiz%20var%2C%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyoruz."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-5 group hover:bg-green-50/50 p-2 rounded-2xl transition-all"
              >
                <div className="bg-green-50 p-4 rounded-2xl text-green-600 shadow-sm border border-green-100 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <MessageSquare size={28} />
                </div>
                <div>
                  <h5 className="font-black text-deko-navy uppercase text-sm tracking-widest mb-1 group-hover:text-green-600 transition-colors">WhatsApp Hattı</h5>
                  <p className="text-green-600 font-black text-xl">+90 506 169 90 70</p>
                </div>
              </a>
              <div className="flex items-start space-x-5">
                <div className="bg-deko-light p-4 rounded-2xl text-deko-navy shadow-sm">
                  <MapPin size={28} />
                </div>
                <div>
                  <h5 className="font-black text-deko-navy uppercase text-sm tracking-widest mb-1">Merkez Ofis</h5>
                  <p className="text-slate-600 font-medium">Büyükdere Cad. No:123, Levent, İstanbul</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-deko-navy p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-deko-orange/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-400 text-xs font-black uppercase tracking-widest mb-2">Ad Soyad</label>
                  <input
                    type="text"
                    placeholder="Ahmet Yılmaz"
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-deko-orange transition-colors font-medium"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-black uppercase tracking-widest mb-2">Telefon</label>
                  <input
                    type="tel"
                    placeholder="05XX XXX XX XX"
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-deko-orange transition-colors font-medium"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 text-xs font-black uppercase tracking-widest mb-2">İlgi Duyduğunuz Hizmet</label>
                <select className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-deko-orange transition-colors appearance-none font-medium">
                  <option value="" className="bg-deko-navy">Hizmet Seçiniz</option>
                  <option value="tadilat" className="bg-deko-navy">Anahtar Teslim Tadilat</option>
                  <option value="icmimari" className="bg-deko-navy">İç Mimari & Tasarım</option>
                  <option value="mutfak" className="bg-deko-navy">Mutfak & Banyo Yenileme</option>
                  <option value="boya" className="bg-deko-navy">Dekoratif Boya & Uygulama</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-400 text-xs font-black uppercase tracking-widest mb-2">Mesajınız</label>
                <textarea
                  rows={3}
                  placeholder="Projeniz hakkında kısa bir bilgi verin..."
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-deko-orange transition-colors resize-none font-medium"
                ></textarea>
              </div>
              <button className="w-full bg-deko-orange hover:bg-orange-600 text-white py-5 rounded-xl font-black text-lg uppercase tracking-widest shadow-xl shadow-orange-600/30 transition-all active:scale-95">
                Ücretsiz Keşif Talebi Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
