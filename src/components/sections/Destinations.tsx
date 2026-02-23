import React from "react";

const destinations = [
  {
    id: 1,
    name: "Samarqand",
    price: "$150",
    img: "https://images.unsplash.com/photo-1589408091166-2679dfb445c1?auto=format&fit=crop&w=800",
  },
  {
    id: 2,
    name: "Dubay",
    price: "$450",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800",
  },
  {
    id: 3,
    name: "Istanbul",
    price: "$320",
    img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800",
  },
];

const Destinations = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Mashhur Yo'nalishlar
            </h2>
            <p className="text-gray-500 mt-2">
              Eng ko'p tanlanadigan sayohat paketlari
            </p>
          </div>
          <button className="hidden md:block text-teal-600 font-medium hover:underline">
            Barchasini ko'rish →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="relative group overflow-hidden rounded-3xl h-[400px] cursor-pointer"
            >
              {/* Rasm */}
              <img
                src={dest.img}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay (Gradient) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {dest.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-teal-300 font-medium">
                    {dest.price} dan boshlab
                  </span>
                  <button className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition-colors duration-300">
                    Band qilish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
