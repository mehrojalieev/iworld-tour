// import { useTranslation } from "react-i18next";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  // const { t } = useTranslation();

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Chap tomon: Rasm va Dekoratsiya */}
          <div className="relative w-full lg:w-1/2">
            {/* Orqa fondagi dekorativ kvadrat */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-100 rounded-2xl -z-10 hidden sm:block"></div>

            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800"
                alt="Travel experience"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />

              {/* Rasm ustidagi kichik tajriba kartochkasi */}
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce-slow">
                <div className="bg-teal-500 p-3 rounded-lg text-white font-bold text-xl">
                  10+
                </div>
                <div className="text-sm font-bold text-gray-800 leading-tight">
                  Yillik <br /> Tajriba
                </div>
              </div>
            </div>

            {/* Orqa fondagi dekorativ nuqtalar yoki doira */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gray-50 rounded-full -z-10"></div>
          </div>

          {/* O'ng tomon: Matn va Xizmatlar */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-teal-600 font-bold uppercase tracking-widest text-sm">
                Biz haqimizda
              </h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Sizning orzuingizdagi{" "}
                <span className="text-teal-500">sayohatni</span> biz bilan
                boshlang
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                <span className="font-bold text-teal-600">iWorld Tour</span> —
                bu shunchaki sayohat agentligi emas. Biz har bir mijoz uchun
                takrorlanmas xotiralar va shaxsiy yo'nalishlar yaratuvchi
                tajribali jamoamiz. Biz bilan dunyo yanada yaqinroq!
              </p>
            </div>

            {/* Afzalliklar ro'yxati */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Eksklyuziv yo'nalishlar",
                "24/7 Mijozlarni qo'llash",
                "Hamyonbop narxlar",
                "Professional gidlar",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-700 font-medium"
                >
                  <FaCheckCircle className="text-teal-500" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-teal-500 text-white font-bold rounded-xl shadow-lg shadow-teal-200 hover:bg-teal-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Sayohatni rejalashtirish
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
