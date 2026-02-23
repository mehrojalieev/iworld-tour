import React from "react";
import { FaPlane, FaHotel, FaMapMarkedAlt, FaHeadset } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaPlane />,
    title: "Aviachiptalar",
    desc: "Dunyo bo'ylab eng arzon va qulay parvozlar uchun chiptalar.",
  },
  {
    id: 2,
    icon: <FaHotel />,
    title: "Mehmonxonalar",
    desc: "Har qanday ta'mga mos Premium va budjetli mehmonxonalar.",
  },
  {
    id: 3,
    icon: <FaMapMarkedAlt />,
    title: "Gid Xizmati",
    desc: "Professional gidlar bilan qiziqarli va unutilmas ekskursiyalar.",
  },
  {
    id: 4,
    icon: <FaHeadset />,
    title: "24/7 Aloqa",
    desc: "Sayohat davomida yuzaga kelgan har qanday masalada yordam beramiz.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bizning Xizmatlar
          </h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="text-4xl text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
