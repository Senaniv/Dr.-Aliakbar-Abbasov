import React from 'react';
import Image from 'next/image';
import Hero from '@/components/Hero';
import { ShieldCheck, HeartHandshake, Smile, Award, Activity, Phone, Mail, MapPin } from 'lucide-react';

const SERVICES = [
  {
    title: 'Estetik Vinirlər',
    description: 'Minimal müdaxilə ilə dişlərinizin formasını, rəngini və düzülüşünü mükəmməlləşdirən incə keramik vinirlər.',
    icon: Smile,
  },
  {
    title: 'Dental İmplantasiya',
    description: 'İtirilmiş dişlərin yerinə müasir və ağrısız implantasiya metodları ilə ömürlük bərpa edilməsi.',
    icon: ShieldCheck,
  },
  {
    title: 'Gülüş Dizaynı (Smile Design)',
    description: 'Üz cizgilərinizə və xarakterinizə tam uyğun gələn, fərdi şəkildə modelləşdirilmiş estetik gülüşün yaradılması.',
    icon: HeartHandshake,
  },
  {
    title: 'Ortopedik Stomatologiya',
    description: 'Keramik qapaqlar, körpülər və digər ortopedik konstruksiyalarla diş sırasının anatomik bərpası.',
    icon: Activity,
  },
  {
    title: 'Dişlərin Ağardılması',
    description: 'Müasir avadanlıqlarla diş minasına zərər vermədən dişlərin bir neçə ton ağardılması.',
    icon: Award,
  },
  {
    title: 'Terapevtik Müalicə',
    description: 'Kariesin müalicəsi, kanalların doldurulması və dişlərin estetik plomb materialları ilə bərpası.',
    icon: ShieldCheck,
  },
];

const CAMPAIGNS = [
  {
    title: 'Ödənişsiz Konsultasiya və Diaqnostika',
    description: 'İlk dəfə müraciət edən pasiyentlər üçün həkim müayinəsi, rentgen analizinin qiymətləndirilməsi və müalicə planının hazırlanması tamamilə ödənişsizdir.',
    badge: 'Daimi Aktiv',
  },
  {
    title: 'Vinirlərdə Yay Kampaniyası',
    description: 'İndi tam estetik keramik vinirlərə müraciət edən hər kəsə 15%-dək xüsusi endirim təklif olunur. Mükəmməl gülüşə daha yaxın olun!',
    badge: 'Məhdud Müddət',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Haqqında (About) Section */}
      <section id="haqqinda" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100">
                <Image
                  src="/dentist.png"
                  alt="Dr. Aliakbar Abbasov"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl max-w-[200px] text-center border-4 border-white">
                <p className="text-3xl font-extrabold">10+</p>
                <p className="text-xs uppercase tracking-wider font-semibold opacity-90">İllik Təcrübəli Stomatoloq</p>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-secondary text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <span>Həkim Haqqında</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-dark">
                Dr. Əliəkbər Abbasov kimdir?
              </h2>
              <p className="text-text-gray leading-relaxed">
                Dr. Əliəkbər Abbasov uzun illərdir ki, ortopedik və estetik stomatologiya sahəsində fəaliyyət göstərir. Əsas məqsədi hər bir pasiyentə fərdi yanaşaraq, yalnız ağrısız və keyfiyyətli müalicə deyil, həm də onların özlərinə inamını qaytaran təbii gülüş dizaynı bəxş etməkdir.
              </p>
              <p className="text-text-gray leading-relaxed">
                O, beynəlxalq konfrans və seminarların aktiv iştirakçısıdır, stomatologiya sahəsindəki ən son elmi yenilikləri və müasir texnoloji üsulları öz təcrübəsində uğurla tətbiq edir. Gülüş dizaynı (Smile Design), keramik vinirlər və metal-keramik qapaqlar üzrə ixtisaslaşmışdır.
              </p>
              
              {/* Features list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="bg-secondary text-primary p-2 rounded-lg shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-text-dark text-sm">Keyfiyyət Zəmanəti</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-secondary text-primary p-2 rounded-lg shrink-0">
                    <Smile className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-text-dark text-sm">Ağrısız Müalicə</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-secondary text-primary p-2 rounded-lg shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-text-dark text-sm">Fərdi Yanaşma</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-secondary text-primary p-2 rounded-lg shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-text-dark text-sm">Müasir Avadanlıqlar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Xidmətlər (Services) Section */}
      <section id="xidmetler" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 bg-secondary text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <span>Peşəkar Xidmətlər</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark">
              Stomatoloji Xidmətlərimiz
            </h2>
            <p className="text-text-gray text-base sm:text-lg">
              Müasir texnologiyalar və materiallardan istifadə edərək sizə ən yüksək səviyyədə dental xidmətlər təklif edirik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 hover:border-slate-200 transition-all duration-300 text-left group"
                >
                  <div className="bg-secondary text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark mb-3">{service.title}</h3>
                  <p className="text-text-gray text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kampaniyalar (Campaigns) Section */}
      <section id="kampaniyalar" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4 mb-16 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <span>Xüsusi Təkliflər</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark">
              Aktiv Kampaniyalarımız
            </h2>
            <p className="text-text-gray">
              Sağlam gülüşə sahib olmaq üçün təqdim etdiyimiz xüsusi kampaniyaları və endirim təkliflərini qaçırmayın.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CAMPAIGNS.map((campaign, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col justify-between items-start hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    {campaign.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-text-dark mb-3">{campaign.title}</h3>
                  <p className="text-text-gray text-sm leading-relaxed mb-6">{campaign.description}</p>
                </div>
                <a
                  href={`https://wa.me/994506616232?text=${encodeURIComponent(
                    `Salam Dr. Əliəkbər, "${campaign.title}" kampaniyası haqqında ətraflı məlumat almaq və qeydiyyatdan keçmək istərdim.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white hover:bg-primary-hover px-6 py-2.5 rounded-lg text-sm font-bold shadow-md shadow-primary/10 transition-colors"
                >
                  Kampaniyaya qoşul
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qalereya (Gallery) Section */}
      <section id="qalereya" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4 mb-16 text-center">
            <div className="inline-flex items-center gap-2 bg-secondary text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <span>İşlərimiz</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark">
              Müalicə Nəticələri (Qalereya)
            </h2>
            <p className="text-text-gray">
              Dr. Əliəkbər Abbasov tərəfindən həyata keçirilən müalicələrin əvvəl və sonrakı (Before/After) real nəticələri.
            </p>
          </div>

          {/* Simple Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:scale-[1.02] transition-transform duration-300">
                <div className="relative aspect-[4/3] bg-slate-200">
                  {/* Before / After Placeholder Image */}
                  <Image
                    src="/dental_hero.png" // Fallback to hero for demonstration
                    alt={`Müalicə işi #${item}`}
                    fill
                    className="object-cover opacity-90"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 text-white text-[10px] uppercase font-bold px-2.5 py-1 rounded">
                    Əvvəl / Sonra
                  </div>
                </div>
                <div className="p-5 text-left">
                  <h4 className="font-bold text-text-dark text-base">Keramik Vinirlərlə Gülüş Bərpası</h4>
                  <p className="text-xs text-text-gray mt-1">E-Max Vinirlər, 8 diş bərpası, 4 seans müalicə</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Əlaqə & Randevu Section */}
      <section id="elaqe" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Contact Info Column */}
            <div className="lg:col-span-5 bg-primary text-white p-10 rounded-3xl flex flex-col justify-between shadow-xl">
              <div>
                <span className="bg-white/15 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Əlaqə Məlumatları
                </span>
                <h2 className="text-3xl font-extrabold mt-6 mb-4">Bizimlə əlaqə saxlayın</h2>
                <p className="text-white/80 text-sm leading-relaxed mb-8">
                  Randevu almaq, xidmətlərimiz haqqında əlavə məlumat əldə etmək və ya suallarınızı vermək üçün əlaqə formunu doldurun, zəng edin və ya ünvanımıza yaxınlaşın.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-secondary uppercase tracking-wider">Ünvan</h4>
                      <p className="text-white/95 text-base mt-1">Bakı şəhəri, Azadlıq prospekti 123, Dental Klinikası</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-secondary uppercase tracking-wider">Telefon</h4>
                      <a href="tel:+994506616232" className="text-white/95 text-base mt-1 block hover:underline">
                        +994 50 661 62 32
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-secondary uppercase tracking-wider">E-poçt</h4>
                      <a href="mailto:info@draliakbar.az" className="text-white/95 text-base mt-1 block hover:underline">
                        info@draliakbar.az
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/10 text-xs text-white/60">
                Dr. Əliəkbər Abbasov Stomatoloji Xidmətləri
              </div>
            </div>

            {/* Right Contact Form Column */}
            <div className="lg:col-span-7 bg-slate-50 p-10 rounded-3xl border border-slate-100 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-text-dark mb-2">Randevu Formu</h3>
              <p className="text-text-gray text-sm mb-6">Məlumatları doldurun, ən qısa zamanda sizinlə əlaqə saxlayacağıq.</p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="name" className="text-xs font-bold text-text-dark uppercase">Adınız və Soyadınız</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Məs. Əli Məmmədov"
                      className="w-full bg-white border border-slate-200 px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="phone" className="text-xs font-bold text-text-dark uppercase">Telefon Nömrəniz</label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Məs. +994 50 123 45 67"
                      className="w-full bg-white border border-slate-200 px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="service" className="text-xs font-bold text-text-dark uppercase">Stomatoloji Xidmət</label>
                  <select
                    id="service"
                    className="w-full bg-white border border-slate-200 px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Xidmət seçin</option>
                    <option value="vinir">Estetik Vinirlər</option>
                    <option value="implant">Dental İmplantasiya</option>
                    <option value="gulus">Gülüş Dizaynı (Smile Design)</option>
                    <option value="ortopedik">Ortopedik Diş Bərpası</option>
                    <option value="agardilma">Dişlərin Ağardılması</option>
                    <option value="terapevtik">Karies və Kanalların Müalicəsi</option>
                  </select>
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="message" className="text-xs font-bold text-text-dark uppercase">Qeydləriniz (İstəyə bağlı)</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Müalicə ilə bağlı xüsusi qeydləriniz və ya suallarınızı bura yaza bilərsiniz..."
                    className="w-full bg-white border border-slate-200 px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-lg font-bold text-base shadow-lg shadow-primary/10 transition-colors"
                >
                  Müraciəti Göndər
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
