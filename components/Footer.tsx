import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand/Bio Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="bg-primary text-white p-2 rounded-lg">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-white">
                  Dr. Aliakbar Abbasov
                </span>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">
                  Stomatoloq-Ortoped
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Müasir stomatoloji avadanlıqlar və ən yeni müalicə metodları ilə hər növ ortopedik və terapevtik diş müalicələrinin yüksək keyfiyyətlə həyata keçirilməsi.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.163c-.272-1.018-1.077-1.823-2.095-2.095C19.548 3.5 12 3.5 12 3.5s-7.548 0-9.403.568c-1.018.272-1.823 1.077-2.095 2.095C0 8.018 0 12 0 12s0 3.982.502 5.837c.272 1.018 1.077 1.823 2.095 2.095C4.452 20.5 12 20.5 12 20.5s7.548 0 9.403-.568c1.018-.272 1.823-1.077 2.095-2.095C24 15.982 24 12 24 12s0-3.982-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 uppercase tracking-wider">Naviqasiya</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-white hover:underline transition-all">Ana Səhifə</a>
              </li>
              <li>
                <a href="#haqqinda" className="hover:text-white hover:underline transition-all">Haqqında Dr. Əliəkbər</a>
              </li>
              <li>
                <a href="#xidmetler" className="hover:text-white hover:underline transition-all">Stomatoloji Xidmətlər</a>
              </li>
              <li>
                <a href="#kampaniyalar" className="hover:text-white hover:underline transition-all">Xüsusi Kampaniyalar</a>
              </li>
              <li>
                <a href="#qalereya" className="hover:text-white hover:underline transition-all">Nəticələr (Qalereya)</a>
              </li>
              <li>
                <a href="#elaqe" className="hover:text-white hover:underline transition-all">Randevu & Əlaqə</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 uppercase tracking-wider">Əlaqə</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-normal">
                  Bakı şəhəri, Azadlıq prospekti 123, Dental Klinikası
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+994506616232" className="text-slate-400 hover:text-white transition-colors">
                  +994 50 661 62 32
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@draliakbar.az" className="text-slate-400 hover:text-white transition-colors">
                  info@draliakbar.az
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 uppercase tracking-wider">İş Saatları</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex justify-between items-center pb-2 border-b border-slate-800">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-500" />
                  Bazar ertəsi - Cümə
                </span>
                <span className="text-white font-medium">09:00 - 19:00</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-slate-800">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-500" />
                  Şənbə
                </span>
                <span className="text-white font-medium">10:00 - 16:00</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-500" />
                  Bazar
                </span>
                <span className="text-primary font-bold">İstirahət günü</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} Dr. Aliakbar Abbasov. Bütün hüquqlar qorunur.</p>
          <p className="flex gap-4">
            <a href="#" className="hover:text-slate-300">İstifadə şərtləri</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Gizlilik siyasəti</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
