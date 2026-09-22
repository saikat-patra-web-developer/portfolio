import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Star,
  BadgeCheck,
  MapPin,
  Shield,
  Check,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { revealProps } from "../../animation/motion";

/** Multi-color Google "G" mark (same paths used across the site). */
const GoogleGIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

export default function Reviews() {
  const googleBusinessProfileUrl = "https://g.page/r/CQnFt9EqwoOrEAE/review";
  // This site is an SPA with no #contact anchor â€” send the quote CTA to the
  // real /contact route (Link keeps navigation client-side, no full reload).
  const ctaUrl = "/contact";

  const reviewsData = [
    {
      name: "Aarohi",
      role: "Client",
      rating: 5,
      text: "Excellent work on our real estate website. The project was completed on time with great attention to detail. Communication was smooth, and the final result exceeded our expectations. Highly recommended!",
      verified: true
    },
    {
      name: "Avijit Koiri",
      role: "Client",
      rating: 5,
      text: "Very polite And quick service and best work/design in reasonable price",
      verified: true
    },
    {
      name: "Purge",
      role: "Client",
      rating: 5,
      text: "Saikat is a reliable and talented web developer. He created a modern, responsive website for Purge.co.nz that looks great on all devices. He was easy to work with, completed the project on schedule, and provided excellent support. We are very happy with the results..",
      verified: true
    },
    {
      name: "Krishnendu Roy",
      role: "Client",
      rating: 5,
      text: "Very knowledgeable in custom web development. The final product is secure, responsive, and easy to maintain.",
      verified: true
    },
    {
      name: "Ayan Das",
      role: "Client",
      rating: 5,
      text: "Saikat Patra is a skilled and dedicated web developer who delivers clean, responsive, and user-friendly websites. He has strong technical knowledge and pays great attention to detail. His problem-solving skills and commitment to meeting deadlines make him reliable and professional. Highly recommended for quality web development work.",
      verified: true
    },
    {
      name: "Ranjan Baag",
      role: "Client",
      rating: 5,
      text: "Anyone can Build a Website By Him. He is brilliant in it. If you and yours Friends needs a website urgent basis then just contact him and your website will be built within a month or few weeks.",
      verified: true
    },
    {
      name: "Subrata Bhowmik",
      role: "Client",
      rating: 5,
      text: "His professionalism, responsiveness, and commitment to delivering high-quality work on time make him a pleasure to work with. I highly recommend Saikat to anyone looking for a skilled and reliable web designer who combines creativity with technical expertise.",
      verified: true
    },
    {
      name: "Anwit Khara",
      role: "Client",
      rating: 5,
      text: "Professional developer with excellent communication. Every feature we requested was implemented perfectly.",
      verified: true
    },
    {
      name: "Christoph Gawenda",
      role: "Client",
      rating: 5,
      text: "Outstanding development service! The custom CRM is packed with useful features, and the admin panel is clean, fast, and easy to navigate. Highly recommended for businesses looking for a tailored solution.",
      verified: true
    }
  ];

  const collageData = {
    front: {
      topLeftName: "Christoph Gawenda",
      topLeftText: "Outstanding development service! The custom CRM is packed with useful features, and the admin panel is clean, fast, and easy to navigate. Highly recommended for businesses looking for a tailored solution.",
      bottomLeftImg: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=300&auto=format&fit=crop",
      bottomLeftTitle: "Gawenda Studio",
      bottomLeftSub: "Germans + Gawenda Studio",
      centerAvatar: "/assets/images/review-1.png",
      badgeTitle: "Gawenda Studio",
      badgeMessage: "Hello. I already have a CRM. Can you create a booking system and integrate it with my existing CRM?",
      badgeEmoji: "bi-whatsapp"
    },
    back: {
      topLeftName: "Purge",
      topLeftText: "Saikat is a reliable and talented web developer. He created a modern, responsive website for Purge.co.nz that looks great on all devices. He was easy to work with, completed the project on schedule, and provided excellent support. We are very happy with the results.",
      bottomLeftImg: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=300&auto=format&fit=crop",
      bottomLeftTitle: "Purge Wholesale Blinds",
      bottomLeftSub: "New Zealanders + Windows Blinds",
      centerAvatar: "/assets/images/review-2.png",
      badgeTitle: "Windows Blinds",
      badgeMessage: "Hi, Saikat. I have a blinds business. Can you create a website for me?",
      badgeEmoji: "bi-whatsapp"
    }
  };

  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const infiniteReviews = [...reviewsData, ...reviewsData];

  return (
    <motion.section
      id="reviews"
      data-no-translate
      className="relative py-20 overflow-hidden"
      {...revealProps({ amount: 0.08 })}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeVertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .scrolling-container {
          animation: marqueeVertical 20s linear infinite;
        }
        .scrolling-container:hover {
          animation-play-state: paused;
        }
        .perspective-1000 {
          perspective: 1200px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(-180deg);
        }

        .smooth-card-turn {
          transition: transform 0.85s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 md:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 md:gap-8 pb-8 border-b border-white/10">
          <div>
            <p className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 text-[#00E5FF] text-xs font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
              {'Proven Performance'}
            </p>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4 text-white flex flex-wrap items-center gap-x-4 gap-y-3">
              <span>{'Built for Scale | Backed by Trust'}</span>
              <span aria-hidden="true" className="h-[6px] w-16 sm:w-24 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#7B3CFF] shrink-0" />
            </h2>
            <div className="mt-1 flex flex-wrap items-center gap-y-3 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-white/70">
              <span className="flex items-center gap-1.5 text-white">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="text-emerald-400 font-bold">{'4.9/5 Rating'}</span>
                <span className="font-normal text-white/55">{'on'}</span>
                <GoogleGIcon className="w-3.5 h-3.5 shrink-0" />
                <span className="font-bold text-white">Google Business</span>
              </span>
              <span className="hidden sm:inline text-white/25">|</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                {'100% Verified Clients'}
              </span>
              <span className="hidden sm:inline text-white/25">|</span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 fill-amber-500 text-amber-500" />
                {'On-Time Delivery Guarantee'}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <a
              href={googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold py-3.5 px-6 rounded-xl border border-white/20 shadow-sm hover:shadow transition-all duration-200 text-sm w-full sm:w-auto"
            >
              <GoogleGIcon className="w-4 h-4" />
              {'View Google Reviews'}
            </a>

            <Link
              to={ctaUrl}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2787FF] via-[#00E5FF] to-[#7B3CFF] text-white font-bold py-3.5 px-6 rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.35)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] transition-all duration-200 text-sm hover:-translate-y-0.5 w-full sm:w-auto"
            >
              {'Get a Free Quote'}
              <ArrowRight className="w-[18px] h-[18px]" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <div className="perspective-1000 w-full aspect-[1.1/1] min-h-[480px] relative order-1 lg:order-1">
            <div className={`w-full h-full preserve-3d smooth-card-turn ${isFlipped ? 'rotate-y-180' : ''}`}>
              <div className="absolute inset-0 w-full h-full backface-hidden flex items-center justify-center">
                <img
                  src="/assets/images/mobile.png"
                  alt="Mobile Frame"
                  className="absolute h-full object-contain z-0 pointer-events-none drop-shadow-lg"
                />

                <div className="hidden md:block absolute top-[10%] right-0 z-20 w-[200px] sm:w-[240px] bg-[#031326] rounded-2xl p-4 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] border border-white/10">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="font-bold text-sm text-white">{collageData.front.topLeftName}</span>
                    <BadgeCheck className="w-3.5 h-3.5 shrink-0 text-[#00E5FF]" />
                  </div>
                  <p className="text-[10px] sm:text-[11px] leading-relaxed text-white/70 font-medium mb-2.5 line-clamp-4 min-h-[55px]">
                    {collageData.front.topLeftText}
                  </p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                </div>

                <div className="block md:hidden absolute top-[12%] right-0 z-20 w-[180px] bg-[#031326] rounded-2xl p-3 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] border border-white/10">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="font-bold text-xs text-white">{collageData.front.topLeftName}</span>
                    <BadgeCheck className="w-3 h-3 shrink-0 text-[#00E5FF]" />
                  </div>
                  <p className="text-[9px] leading-relaxed text-white/70 font-medium mb-1.5 line-clamp-3">
                    {collageData.front.topLeftText}
                  </p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-[9px] h-[9px] fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                </div>

                <div className="hidden md:block absolute bottom-[8%] left-[6%] z-20 w-[145px] sm:w-[165px] bg-[#031326] rounded-2xl overflow-hidden shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] border border-white/10">
                  <div className="relative h-[110px] w-full">
                    <img src={collageData.front.bottomLeftImg} alt={collageData.front.bottomLeftTitle} className="w-full h-full object-cover" />
                    <div className="absolute top-2.5 left-2.5 w-7 h-7 bg-[#2787FF] rounded-lg flex items-center justify-center shadow-md">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="font-bold text-xs text-white">{collageData.front.bottomLeftTitle}</h4>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-[10px] font-semibold text-white/60">4.5</span>
                      <div className="flex gap-[1px]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-2 h-2 fill-[#f59e0b] text-[#f59e0b]" />
                        ))}
                      </div>
                    </div>
                    <p className="text-[9px] text-white/45 mt-1 font-medium">{collageData.front.bottomLeftSub}</p>
                  </div>
                </div>

                <div className="block md:hidden absolute bottom-[2%] left-0 z-20 w-[135px] bg-[#031326] rounded-2xl overflow-hidden shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] border border-white/10">
                  <div className="relative h-[85px] w-full">
                    <img src={collageData.front.bottomLeftImg} alt={collageData.front.bottomLeftTitle} className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 w-6 h-6 bg-[#2787FF] rounded-lg flex items-center justify-center shadow-md">
                      <MapPin className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="p-2">
                    <h4 className="font-bold text-[11px] text-white truncate">{collageData.front.bottomLeftTitle}</h4>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-[9px] font-semibold text-white/60">4.5</span>
                      <div className="flex gap-[1px]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-[7px] h-[7px] fill-[#f59e0b] text-[#f59e0b]" />
                        ))}
                      </div>
                    </div>
                    <p className="text-[8px] text-white/45 mt-0.5 font-medium truncate">{collageData.front.bottomLeftSub}</p>
                  </div>
                </div>

                <div className="absolute z-50 w-[170px] h-[170px] sm:w-[200px] sm:h-[200px] rounded-full border-4 border-[#00E5FF] bg-[#031326] overflow-hidden shadow-[0_0_25px_rgba(0,229,255,0.3)] flex items-center justify-center">
                  <img src={collageData.front.centerAvatar} alt="Consultant Front Avatar" className="w-full h-full object-cover" />
                </div>

                <div className="absolute top-0 left-[-2%] z-20 flex items-end">
                  <div className="relative w-[100px] h-[110px] flex items-center justify-center">
                    <Shield className="w-[100px] h-[110px] text-[#2787FF] fill-[#2787FF] drop-shadow-md" />
                    <div className="absolute inset-0 flex items-center justify-center mb-2">
                      <Check className="w-9 h-9 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <div className="w-14 h-14 bg-[#031326] rounded-full flex items-center justify-center shadow-[0_0_18px_rgba(0,229,255,0.25)] border border-white/15 -ml-9 -mb-1 z-50">
                    <GoogleGIcon className="w-8 h-8" />
                  </div>
                </div>

                <div className="absolute bottom-[10%] right-[-4%] z-20">
                  <div className="absolute -top-5 right-6 w-9 h-9 bg-[#25D366] rounded-xl flex items-center justify-center shadow-md animate-bounce">
                    <FaWhatsapp className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="w-[210px] sm:w-[240px] bg-[#031326] rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden">
                    <div className="bg-[#25D366]/10 px-4 py-2 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-bold text-white">{collageData.front.badgeTitle}</span>
                      </div>
                    </div>
                    <div className="p-3 flex justify-center items-center">
                      <span className="text-white/75 font-medium text-[11px] tracking-wide leading-snug">"{collageData.front.badgeMessage}"</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex items-center justify-center">
                <img
                  src="/assets/images/mobile.png"
                  alt="Mobile Frame"
                  className="absolute h-full object-contain z-0 pointer-events-none drop-shadow-lg"
                />

                <div className="hidden md:block absolute top-[10%] right-0 z-20 w-[200px] sm:w-[240px] bg-[#031326] rounded-2xl p-4 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] border border-white/10">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="font-bold text-sm text-white">{collageData.back.topLeftName}</span>
                    <BadgeCheck className="w-3.5 h-3.5 shrink-0 text-[#00E5FF]" />
                  </div>
                  <p className="text-[10px] sm:text-[11px] leading-relaxed text-white/70 font-medium mb-2.5 line-clamp-4 min-h-[55px]">
                    {collageData.back.topLeftText}
                  </p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                </div>

                <div className="block md:hidden absolute top-[12%] right-0 z-20 w-[180px] bg-[#031326] rounded-2xl p-3 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] border border-white/10">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="font-bold text-xs text-white">{collageData.back.topLeftName}</span>
                    <BadgeCheck className="w-3 h-3 shrink-0 text-[#00E5FF]" />
                  </div>
                  <p className="text-[9px] leading-relaxed text-white/70 font-medium mb-1.5 line-clamp-3">
                    {collageData.back.topLeftText}
                  </p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-[9px] h-[9px] fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                </div>

                <div className="hidden md:block absolute bottom-[8%] left-[6%] z-20 w-[145px] sm:w-[165px] bg-[#031326] rounded-2xl overflow-hidden shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] border border-white/10">
                  <div className="relative h-[110px] w-full">
                    <img src={collageData.back.bottomLeftImg} alt={collageData.back.bottomLeftTitle} className="w-full h-full object-cover" />
                    <div className="absolute top-2.5 left-2.5 w-7 h-7 bg-[#2787FF] rounded-lg flex items-center justify-center shadow-md">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="font-bold text-xs text-white">{collageData.back.bottomLeftTitle}</h4>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-[10px] font-semibold text-white/60">4.5</span>
                      <div className="flex gap-[1px]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-2 h-2 fill-[#f59e0b] text-[#f59e0b]" />
                        ))}
                      </div>
                    </div>
                    <p className="text-[9px] text-white/45 mt-1 font-medium">{collageData.back.bottomLeftSub}</p>
                  </div>
                </div>

                <div className="block md:hidden absolute bottom-[2%] left-0 z-20 w-[135px] bg-[#031326] rounded-2xl overflow-hidden shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] border border-white/10">
                  <div className="relative h-[85px] w-full">
                    <img src={collageData.back.bottomLeftImg} alt={collageData.back.bottomLeftTitle} className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 w-6 h-6 bg-[#2787FF] rounded-lg flex items-center justify-center shadow-md">
                      <MapPin className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="p-2">
                    <h4 className="font-bold text-[11px] text-white truncate">{collageData.back.bottomLeftTitle}</h4>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-[9px] font-semibold text-white/60">4.5</span>
                      <div className="flex gap-[1px]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-[7px] h-[7px] fill-[#f59e0b] text-[#f59e0b]" />
                        ))}
                      </div>
                    </div>
                    <p className="text-[8px] text-white/45 mt-0.5 font-medium truncate">{collageData.back.bottomLeftSub}</p>
                  </div>
                </div>

                <div className="absolute z-50 w-[170px] h-[170px] sm:w-[200px] sm:h-[200px] rounded-full border-4 border-[#00E5FF] bg-[#031326] overflow-hidden shadow-[0_0_25px_rgba(0,229,255,0.3)] flex items-center justify-center">
                  <img src={collageData.back.centerAvatar} alt="Consultant Back Avatar" className="w-full h-full object-cover" />
                </div>

                <div className="absolute top-0 left-[-2%] z-20 flex items-end">
                  <div className="relative w-[100px] h-[110px] flex items-center justify-center">
                    <Shield className="w-[100px] h-[110px] text-[#2787FF] fill-[#2787FF] drop-shadow-md" />
                    <div className="absolute inset-0 flex items-center justify-center mb-2">
                      <Check className="w-9 h-9 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <div className="w-14 h-14 bg-[#031326] rounded-full flex items-center justify-center shadow-[0_0_18px_rgba(0,229,255,0.25)] border border-white/15 -ml-9 -mb-1 z-50">
                    <GoogleGIcon className="w-8 h-8" />
                  </div>
                </div>

                <div className="absolute bottom-[10%] right-[-4%] z-20">
                  <div className="absolute -top-5 right-6 w-9 h-9 bg-[#25D366] rounded-xl flex items-center justify-center shadow-md animate-bounce">
                    <FaWhatsapp className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="w-[210px] sm:w-[240px] bg-[#031326] rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden">
                    <div className="bg-[#25D366]/10 px-4 py-2 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-bold text-white">{collageData.back.badgeTitle}</span>
                      </div>
                    </div>
                    <div className="p-3 flex justify-center items-center">
                      <span className="text-white/75 font-medium text-[11px] tracking-wide leading-snug">"{collageData.back.badgeMessage}"</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[420px] overflow-hidden relative order-2 lg:order-2">
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#020B18] via-transparent to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#020B18] via-transparent to-transparent z-10 pointer-events-none" />

            <div className="scrolling-container flex flex-col gap-5">
              {infiniteReviews.map((review, idx) => (
                <blockquote
                  key={idx}
                  className="bg-[#031326] rounded-2xl p-4 sm:p-6 border border-[#00E5FF]/20 shadow-[inset_0_0_25px_rgba(15,184,255,0.05),0_0_15px_rgba(0,207,255,0.08)] hover:border-[#00E5FF]/40 hover:shadow-[0_10px_35px_-10px_rgba(0,229,255,0.25)] transition-all duration-300 relative flex flex-col justify-between h-[210px] sm:h-[195px] shrink-0"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex gap-0.5" aria-label={`${review.rating} stars`}>
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" aria-hidden="true" />
                        ))}
                      </div>
                      {review.verified && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#00E5FF] bg-[#00E5FF]/10 px-2.5 py-1 rounded-full border border-[#00E5FF]/25">
                          <BadgeCheck className="w-3 h-3 text-[#00E5FF]" />
                          {'Verified Client Project'}
                        </span>
                      )}
                    </div>
                    <p className="text-white/70 text-xs sm:text-[13px] leading-relaxed mb-3 font-normal line-clamp-3 italic">
                      "{review.text}"
                    </p>
                  </div>
                  <footer className="flex items-center justify-between pt-3 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center bg-white/10 w-9 h-9 rounded-full shrink-0 border border-white/15 p-2">
                        <GoogleGIcon className="w-full h-full" />
                      </div>
                      <div>
                        <p className="font-bold text-xs text-white">{review.name}</p>
                        <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wider">{review.role}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-white/45 group-hover:text-[#00E5FF] transition-colors">
                      {'On-Time Delivery'} <CheckCircle2 className="w-3 h-3 text-emerald-400 ml-1" />
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
