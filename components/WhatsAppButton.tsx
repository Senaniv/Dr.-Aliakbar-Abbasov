'use client';

import React from 'react';

export default function WhatsAppButton() {
  const phoneNumber = '994506616232';
  const message = 'Salam, Dr. Əliəkbər Abbasov. Sizin dental veb-saytınızdan yazıram. Müayinə üçün randevu təyin etmək istərdim.';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      aria-label="WhatsApp ilə əlaqə saxlayın"
    >
      {/* Pulse rings */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10 group-hover:hidden"></span>
      
      {/* WhatsApp SVG Icon */}
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97-1.861-1.868-4.339-2.897-6.97-2.898-5.433 0-9.858 4.37-9.863 9.8-.001 1.716.463 3.39 1.342 4.876l-.993 3.634 3.717-.965zm10.111-5.395c-.29-.145-1.72-.848-1.986-.944-.266-.096-.46-.145-.652.145-.19.29-.739.944-.906 1.134-.167.19-.334.217-.624.072-1.359-.68-2.3-1.182-3.21-2.744-.242-.415.242-.385.694-1.286.076-.15.038-.282-.019-.397-.057-.115-.522-1.258-.716-1.72-.188-.454-.378-.393-.52-.401-.134-.007-.288-.009-.442-.009-.154 0-.404.058-.615.289-.211.23-.807.788-.807 1.92 0 1.132.825 2.224.939 2.378.115.154 1.625 2.482 3.935 3.477.55.237 1.07.382 1.436.497.553.176 1.057.151 1.455.092.443-.066 1.359-.553 1.55-.1.19-.453.19-.841.141-.986-.048-.145-.19-.217-.48-.362z" />
      </svg>
      
      {/* Tooltip on hover */}
      <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 origin-right bg-slate-900 text-white text-xs font-semibold py-2 px-3 rounded-lg shadow-lg whitespace-nowrap">
        Randevu üçün yazın
      </span>
    </a>
  );
}
