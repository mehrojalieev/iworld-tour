import {
  FaGlobeAmericas,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Sarlavha Qismi */}
        <div className="text-center mb-16">
          <h3 className="text-teal-600 font-bold uppercase tracking-[0.3em] text-sm mb-4">
            Kompaniya haqida
          </h3>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Sizning sarguzashtingiz <br />
            <span className="text-teal-500">bizning tajribamizdan</span>{" "}
            boshlanadi
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Chap Tomon: Kreativ Grid Rasmlar */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=600"
                  className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500 h-64 w-full object-cover"
                  alt="Sayohat 1"
                />
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600"
                  className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500 h-80 w-full object-cover"
                  alt="Sayohat 2"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600"
                  className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500 h-80 w-full object-cover"
                  alt="Sayohat 3"
                />
                <img
                  src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=600"
                  className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500 h-64 w-full object-cover"
                  alt="Sayohat 4"
                />
              </div>
            </div>
            {/* Tajriba Badge (Floating UI) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-full shadow-2xl border-8 border-gray-50 hidden md:block">
              <div className="text-center">
                <span className="block text-4xl font-black text-teal-600">
                  10+
                </span>
                <span className="text-[10px] uppercase font-bold text-gray-400">
                  Yillik tajriba
                </span>
              </div>
            </div>
          </div>

          {/* O'ng Tomon: Ma'lumot va Ustunliklar */}
          <div className="space-y-10">
            <div>
              <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-teal-500 pl-6">
                "iWorld Tour bilan sayohat — bu shunchaki chipta emas, bu
                hayotingizdagi eng yorqin sahifalarni yozish imkoniyatidir."
              </p>
              <p className="mt-6 text-gray-500 leading-relaxed text-lg">
                Biz 2014-yildan buyon minglab sayohatchilarga dunyoning eng
                sirli go'shalarini ochishda yordam berib kelmoqdamiz. Har bir
                turimiz individual yondashuv va yuqori darajadagi xavfsizlik
                asosida yaratiladi.
              </p>
            </div>

            {/* Ikonkali Ustunliklar Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all">
                <div className="bg-teal-100 p-3 rounded-xl text-teal-600">
                  <FaMapMarkedAlt size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Aqlli Marshrut</h4>
                  <p className="text-sm text-gray-400">
                    Har bir daqiqa mazmunli
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                  <FaShieldAlt size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">To'liq Sug'urta</h4>
                  <p className="text-sm text-gray-400">
                    Sizning xavfsizligingiz ustuvor
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all">
                <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                  <FaHeadset size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">24/7 Yordam</h4>
                  <p className="text-sm text-gray-400">
                    Doim siz bilan aloqadamiz
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all">
                <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
                  <FaGlobeAmericas size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Dunyo Bo'ylab</h4>
                  <p className="text-sm text-gray-400">
                    50+ dan ortiq yo'nalishlar
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-5 rounded-2xl font-bold shadow-xl shadow-teal-200 transition-all transform hover:-translate-y-1">
                Biz bilan tanishing
              </button>
              <div className="hidden sm:block">
                <p className="font-bold text-slate-900 text-lg">
                  +998 90 123 45 67
                </p>
                <p className="text-sm text-gray-400 tracking-widest">
                  Bepul konsultatsiya
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
