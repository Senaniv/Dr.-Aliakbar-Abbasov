'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, Award, ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  const phoneNumber = '994506616232';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    'Salam, Dr. Əliəkbər Abbasov. Saytınızdan yazıram, pulsuz konsultasiya üçün randevu almaq istərdim.'
  )}`;

  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-50 to-blue-50/50 pt-28 pb-20 overflow-hidden">
      {/* Background soft gradients */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-b from-blue-200/20 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-blue-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
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

      </div>
    </section>
  );
}
