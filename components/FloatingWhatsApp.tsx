
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
    const phoneNumber = "905061699070";
    const message = encodeURIComponent("Merhaba DekoTürks, bir tadilat projemiz var, görüşmek istiyoruz.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-24 right-6 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group hidden md:flex items-center justify-center"
            aria-label="WhatsApp ile iletişime geçin"
        >
            <div className="absolute right-full mr-4 bg-white text-deko-navy px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-slate-100">
                Size nasıl yardımcı olabiliriz?
            </div>
            <MessageCircle size={32} fill="currentColor" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
        </a>
    );
};

export default FloatingWhatsApp;
