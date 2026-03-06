import { useEffect, useState } from "react";
import {
  FaArrowRightLong,
  FaMagnifyingGlass,
  FaLocationDot,
  FaUsers,
  FaCalendarDays,
} from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const images = [
  "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop", // Samarqand Registon
  "https://images.unsplash.com/photo-1580638521710-3882f0088891?q=80&w=2070&auto=format&fit=crop", // Xiva Ichan Qala
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop", // Tog'lar (Chimgan uchun mos)
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[95vh] min-h-[600px] overflow-hidden bg-slate-900">
      {/* Background Slideshow */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-[2000ms] ease-out ${
            index === currentImageIndex
              ? "opacity-100 scale-110"
              : "opacity-0 scale-100"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* Rasm ustidagi qatlam (Overlay) */}
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-14 flex flex-col justify-center items-start z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm mb-6 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          Yangi yo'nalishlar ochiq: Samarqand 2024
        </div>

        <h1 className="text-white text-5xl md:text-7xl font-extrabold max-w-[850px] leading-[1.1] mb-6 drop-shadow-2xl">
          {t("hero-contents.content-title", "Dunyoni biz bilan kashf eting")}
        </h1>

        <p className="text-gray-100 text-lg md:text-2xl font-medium max-w-[650px] mb-10 leading-relaxed opacity-95">
          {t(
            "hero-contents.content-description",
            "Sizning orzuingizdagi sayohat endi haqiqatga aylanadi. Eng ishonchli tur-operator bilan unutilmas xotiralar sari.",
          )}
        </p>

        <div className="flex flex-wrap gap-5 z-10">
          <button className="flex items-center gap-x-3 bg-[#16AA9D] text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-[#13968b] transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(22,170,157,0.3)] group">
            {t("hero-contents.book-btn", "Hozir band qilish")}
            <FaArrowRightLong className="group-hover:translate-x-2 transition-transform" />
          </button>

          <button className="flex items-center gap-x-3 bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white/20 transition-all transform">
            Turlarni ko'rish
          </button>
        </div>

        {/* Floating Social Proof (UX element) */}
        <div className="absolute right-14 bottom-32 hidden lg:flex items-center gap-4 bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-2xl animate-bounce-slow">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                className="w-10 h-10 rounded-full border-2 border-teal-500"
                src={`https://i.pravatar.cc/150?u=${i}`}
                alt="user"
              />
            ))}
          </div>
          <div>
            <p className="text-white font-bold text-sm">15,000+ Sayohatlar</p>
            <div className="flex text-yellow-400 text-xs">★★★★★</div>
          </div>
        </div>
      </div>

      {/* Modern Search Bar - Floating at bottom */}
      <div className="absolute left-1/2 bottom-[16%] -translate-x-1/2 translate-y-1/2 w-[90%] max-w-6xl z-999!">
        <div className="bg-white p-2 md:p-4 rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.25)] flex md:flex-col items-center gap-2 border border-gray-100">
          {/* Manzil */}
          <div className="flex-1 w-full flex items-center gap-4 px-6 py-4 hover:bg-gray-50 rounded-2xl transition-colors group">
            <div className="bg-teal-50 p-3 rounded-xl text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all">
              <FaLocationDot className="text-xl" />
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                Manzil
              </label>
              <input
                type="text"
                placeholder="Qayerga borasiz?"
                className="bg-transparent outline-none text-gray-800 font-bold placeholder:text-gray-300 w-full"
              />
            </div>
          </div>

          <div className="hidden md:block w-[1px] h-12 bg-gray-100"></div>

          {/* Sana */}
          <div className="flex-1 w-full flex items-center gap-4 px-6 py-4 hover:bg-gray-50 rounded-2xl transition-colors group">
            <div className="bg-orange-50 p-3 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
              <FaCalendarDays className="text-xl" />
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                Sana
              </label>
              <input
                type="date"
                className="bg-transparent outline-none text-gray-800 font-bold cursor-pointer w-full"
              />
            </div>
          </div>

          <div className="hidden md:block w-[1px] h-12 bg-gray-100"></div>

          {/* Sayohat turi/Odam soni */}
          <div className="flex-1 w-full flex items-center gap-4 px-6 py-4 hover:bg-gray-50 rounded-2xl transition-colors group">
            <div className="bg-blue-50 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <FaUsers className="text-xl" />
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                Yo'lovchilar
              </label>
              <select className="bg-transparent outline-none text-gray-800 font-bold cursor-pointer w-full">
                <option>2 kattalar, 1 bola</option>
                <option>1 kattalar</option>
                <option>4+ guruh</option>
              </select>
            </div>
          </div>

          <button className="w-full md:w-auto bg-black text-white p-6 rounded-2xl hover:bg-[#16AA9D] transition-all shadow-xl flex items-center justify-center gap-3 font-bold group">
            <FaMagnifyingGlass className="text-xl group-hover:scale-125 transition-transform" />
            <span className="md:hidden">Qidirish</span>
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
