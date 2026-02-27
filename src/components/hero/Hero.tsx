import { useEffect, useState } from "react";
import {
  FaArrowRightLong,
  FaMagnifyingGlass,
  FaLocationDot,
} from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const images = [
  "https://cdn.tripster.ru/thumbs2/68d0392e-3076-11ee-8e18-62c119461ee8.1600x900.jpeg?width=1200&height=630",
  "https://c.wallhere.com/photos/a3/98/Samarkand_Uzbekistan_architecture_mosque_ancient-2253331.jpg",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation();
  console.log(true);
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mb-24 overflow-visible">
      {" "}
      {/* overflow-visible pastki panel chiqishi uchun */}
      <div className="relative w-full h-[85vh] min-h-[500px] md:min-h-[650px] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              transitionProperty: "opacity, transform",
            }}
          ></div>
        ))}

        {/* Overlay - Gradientni biroz yumshatdik */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-14">
          <h1 className="text-white text-4xl md:text-6xl font-bold max-w-[800px] leading-tight mb-6 animate-fade-in">
            {t("hero-contents.content-title")}
          </h1>

          <p className="text-gray-200 text-lg md:text-xl font-light max-w-[600px] mb-8 opacity-90">
            {t("hero-contents.content-description")}
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-x-2 bg-[#16AA9D] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#13968b] transition-all transform hover:scale-105 shadow-lg group">
              {t("hero-contents.book-btn")}
              <FaArrowRightLong className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      {/* Modern Search Bar - Hero ostida suzib turuvchi panel */}
      <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 w-[90%] max-w-5xl hidden md:block">
        <div className="bg-white p-6 rounded-2xl shadow-2xl flex items-center justify-between gap-4 border border-gray-100">
          <div className="flex-1 flex items-center gap-3 border-r pr-4">
            <FaLocationDot className="text-teal-500 text-xl" />
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                Manzil
              </span>
              <input
                type="text"
                placeholder="Qayerga borasiz?"
                className="outline-none text-gray-700 font-medium"
              />
            </div>
          </div>

          <div className="flex-1 flex items-center gap-3 border-r pr-4">
            <div className="flex flex-col text-left">
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                Sana
              </span>
              <input
                type="date"
                className="outline-none text-gray-700 font-medium cursor-pointer"
              />
            </div>
          </div>

          <button className="bg-black text-white p-4 rounded-xl hover:bg-teal-600 transition-colors">
            <FaMagnifyingGlass className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
