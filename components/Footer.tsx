
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Mail, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deko-navy text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-deko-orange rounded flex items-center justify-center">
                 <div className="w-8 h-8 border-4 border-white rotate-45"></div>
              </div>
              <span className="text-2xl font-black font-display uppercase tracking-tight">
                <span className="text-deko-orange">DEKO</span>TÜRKS
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8 font-medium">
              Türkiye genelinde lüks tadilat ve kurumsal yapı çözümleri sunan sektör lideri. Kalite tesadüf değil, DekoTürks standardıdır.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white/5 hover:bg-deko-orange rounded-lg flex items-center justify-center transition-all group border border-white/10 hover:border-deko-orange">
                  <Icon size={22} className="text-slate-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h5 className="text-xl font-black mb-10 font-display uppercase tracking-wider text-deko-orange">KURUMSAL</h5>
            <ul className="space-y-5 text-slate-400 font-bold uppercase text-xs tracking-widest">
              <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">KVKK Metni</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kariyer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sertifikalar</a></li>
            </ul>
          </div>

          {/* Quick Services */}
          <div>
            <h5 className="text-xl font-black mb-10 font-display uppercase tracking-wider text-deko-orange">UZMANLIKLAR</h5>
            <ul className="space-y-5 text-slate-400 font-bold uppercase text-xs tracking-widest">
              <li><a href="#hizmetler" className="hover:text-white transition-colors">Mutfak Tasarımı</a></li>
              <li><a href="#hizmetler" className="hover:text-white transition-colors">Akıllı Ev Sistemleri</a></li>
              <li><a href="#hizmetler" className="hover:text-white transition-colors">İnce İnşaat</a></li>
              <li><a href="#hizmetler" className="hover:text-white transition-colors">Endüstriyel Boya</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-xl font-black mb-10 font-display uppercase tracking-wider text-deko-orange">İLETİŞİM</h5>
            <div className="space-y-6 text-slate-400">
              <div className="flex items-start space-x-4">
                <MapPin className="text-deko-orange shrink-0" size={24} />
                <p className="font-medium text-sm">Büyükdere Cad. No:123, Levent, İstanbul</p>
              </div>
              <div className="flex items-center space-x-4">
                <MessageSquare className="text-deko-orange shrink-0" size={24} />
                <p className="font-black text-white text-lg tracking-tight">+90 506 169 90 70</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-deko-orange shrink-0" size={24} />
                <p className="font-medium">destek@dekoturks.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm font-bold tracking-widest uppercase">
          <p>© 2024 DEKOTÜRKS A.Ş. TÜM HAKLARI SAKLIDIR.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-deko-orange transition-colors">GİZLİLİK</a>
            <a href="#" className="hover:text-deko-orange transition-colors">KULLANIM ŞARTLARI</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
