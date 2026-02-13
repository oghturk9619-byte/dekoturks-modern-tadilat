
import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

const MobileStickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-4 right-4 z-[100] md:hidden">
      <div className="bg-deko-navy border border-white/10 p-2 rounded-2xl flex items-center justify-between shadow-2xl">
        <a
          href="tel:05061699070"
          className="flex-grow flex items-center justify-center space-x-3 bg-deko-orange text-white py-4 rounded-xl font-black uppercase tracking-widest shadow-lg shadow-orange-600/30 active:scale-95 transition-transform"
        >
          <Phone size={22} />
          <span>HEMEN ARA</span>
        </a>
        <div className="w-3"></div>
        <a
          href="https://wa.me/905061699070?text=Merhaba%20DekoT%C3%BCrks%2C%20bir%20tadilat%20projemiz%20var%2C%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyoruz."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-green-600 text-white w-16 h-16 rounded-xl shadow-lg shadow-green-600/20 active:scale-95 transition-transform"
        >
          <MessageSquare size={32} />
        </a>
      </div>
    </div>
  );
};

export default MobileStickyBar;
