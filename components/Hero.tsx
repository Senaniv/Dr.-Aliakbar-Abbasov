'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Calendar, Award, Clock, ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  const phoneNumber = '994506616232';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    'Salam, Dr. Əliəkbər Abbasov. Saytınızdan yazıram, pulsuz konsultasiya üçün randevu almaq istərdim.'
  )}`;

  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-50 to-blue-50/50 pt-28 pb-16 overflow-hidden">
      {/* Background soft gradients */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-b from-blue-200/20 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-blue-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-secondary text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Premium Stomatoloji Xidmət</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-dark tracking-tight leading-tight">
              Gülüşünüzü <span className="text-gradient">Ərtələməyin!</span> <br />
              Sağlam və Estetik Dişlər
            </h1>

            <p className="text-base sm:text-lg text-text-gray max-w-xl leading-relaxed">
              Dr. Əliəkbər Abbasov — stomatoloq-ortoped olaraq ən son texnologiyalar və yüksək keyfiyyətli materiallarla təbii və estetik gülüş dizaynı, vinirlər, implantasiya və digər dental xidmətləri təqdim edir.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#elaqe"
                className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-base hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                <span>Randevu Al</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-primary border border-slate-200 px-8 py-4 rounded-full font-bold text-base hover:bg-slate-50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Ödənişsiz Konsultasiya</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-6 text-sm text-text-gray">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-text-dark">4.9/5 Rəy</span>
              </div>
              <span className="text-slate-300">|</span>
              <div>
                <span className="font-bold text-text-dark">1000+</span> Uğurlu Müalicə
              </div>
              <span className="text-slate-300">|</span>
              <div>
                <span className="font-bold text-text-dark">10+</span> İllik Təcrübə
              </div>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <Image
                src="/dental_hero.png"
                alt="Dr. Aliakbar Abbasov Dental Treatment"
                fill
                priority
                className="object-cover"
                sizes="(max-w-1024px) 100vw, 500px"
              />
            </div>
            
            {/* Overlay Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-50 max-w-[200px] animate-bounce-slow">
              <div className="bg-secondary p-3 rounded-xl text-primary">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] text-text-gray font-semibold uppercase">Sertifikatlı</p>
                <p className="text-sm font-bold text-text-dark">Peşəkar Həkim</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 -mb-28 relative z-10">
          {/* Card 1: Contact Info */}
          <div className="bg-primary text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300">
            <div>
              <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bizimlə Əlaqə</h3>
              <p className="text-white/80 text-sm mb-6">Suallarınız var? Pulsuz konsultasiya üçün zəng edin və ya WhatsApp-da yazın.</p>
            </div>
            <div>
              <p className="text-lg font-bold mb-3">+994 50 661 62 32</p>
              <a
                href="tel:+994506616232"
                className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-primary px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Zəng Et
              </a>
            </div>
          </div>

          {/* Card 2: Dentist Bio */}
          <div className="bg-white text-text-dark p-8 rounded-2xl shadow-xl flex flex-col justify-between border border-slate-100 group hover:scale-[1.02] transition-transform duration-300">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary shrink-0">
                  <Image
                    src="/dentist.png"
                    alt="Dr. Aliakbar Abbasov Portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-base leading-tight text-text-dark">Dr. Əliəkbər Abbasov</h4>
                  <p className="text-xs text-text-gray font-semibold">Ortoped-Stomatoloq</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Həkim Haqqında</h3>
              <p className="text-text-gray text-sm leading-relaxed mb-6">
                Dr. Əliəkbər Abbasov yüksək peşəkarlıqla estetik diş bərpası, protezlər və vinirlərlə xəstələrinə mükəmməl gülüş bəxş edir.
              </p>
            </div>
            <div>
              <a
                href="#haqqinda"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-hover group"
              >
                <span>Haqqında ətraflı</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Card 3: Opening Hours */}
          <div className="bg-white text-text-dark p-8 rounded-2xl shadow-xl flex flex-col justify-between border border-slate-100 group hover:scale-[1.02] transition-transform duration-300">
            <div>
              <div className="bg-secondary text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Qəbul Saatları</h3>
              <div className="space-y-3 text-sm text-text-gray">
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <span>Bazar ertəsi - Cümə</span>
                  <span className="font-bold text-text-dark">09:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <span>Şənbə</span>
                  <span className="font-bold text-text-dark">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Bazar</span>
                  <span className="text-red-500 font-bold">İstirahət</span>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <span className="text-xs text-text-gray italic">* Randevu öncədən yazılmalıdır.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
