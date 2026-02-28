import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FaExpand } from "react-icons/fa6";

const images = [
  {
    url: "https://i.ytimg.com/vi/4kcxWSgv7M0/maxresdefault.jpg",
    title: "Tashkent, Uzbekistan",
  },
  {
    url: "https://cdnstatic.rg.ru/uploads/images/173/93/60/1000_73-11111_glavn.jpg",
    title: "Tashkent, Uzbekistan",
  },
  {
    url: "https://youtravel.me/upload/tours/28630/media/51e/2vl3yv8a2veomu28frkpit3hlz2kc463.jpg",
    title: "Bukhara, Uzbekistan",
  },
  {
    url: "https://gidvezde.ru/wp-content/uploads/2024/03/chimgan-mountains-charvak-lake-tour-from-tashkent-1626465657860.jpg",
    title: "Samarkand, Uzbekistan",
  },
  {
    url: "https://static.tildacdn.com/tild3563-6362-4362-b737-373736363065/_5.jpg",
    title: "Khiva, Uzbekistan",
  },

  {
    url: "https://cdn.tripster.ru/thumbs2/1692a712-4af9-11ee-aaa4-c6cbacf1d83b.1200x1000.jpeg",
    title: "Shahrisabz, Uzbekistan",
  },
  {
    url: "https://youtravel.me/upload/tours/30c/0mxh62iwkxnzlyyacrttau4x8c0g4d1f.jpeg",
    title: "Fergana Valley, Uzbekistan",
  },
  {
    url: "https://www.newzealand.com/assets/Tourism-NZ/Auckland/img-1536065871-6217-4403-p-10D1D0BD-B88E-AAB3-AE3F2E903EF65717-2544003__aWxvdmVrZWxseQo_CropResizeWzE5MDAsMTAwMCw3NSwianBnIl0.jpg",
    title: "Tashkent Skyline, Uzbekistan",
  },
  {
    url: "https://avatars.mds.yandex.net/i?id=f1a2bc90081ee2275b0119c07be3bd39_l-5263630-images-thumbs&n=13",
    title: "Chimgan Mountains, Uzbekistan",
  },
  {
    url: "https://avatars.mds.yandex.net/i?id=e140a76d795159e302d523f26b271541_l-5231753-images-thumbs&n=13",
    title: "Aral Sea, Uzbekistan",
  },
  {
    url: "https://avatars.dzeninfra.ru/get-zen_doc/10198012/pub_64b7dec578e90e2c441164ea_64b7df113a8dc3453b5b5b8d/scale_1200",
    title: "Bukhara, Uzbekistan",
  },
];

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Sarlavha qismi */}
        <div className="flex md:flex-col justify-between items-end mb-10 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              {t("gallery.gallery-title")}
            </h2>
            <div className="h-1.5 w-24 bg-teal-500 rounded-full"></div>
          </div>
          <p className="text-gray-500 text-sm md:text-base max-w-sm">
            O'zbekistonning eng go'zal go'shalaridan olingan saralangan suratlar
            to'plami.
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-4 gap-4 md:grid-cols-3!">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid shadow-md hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedImg(image.url)}
            >
              {/* Rasm */}
              <img
                src={image.url}
                alt={image.title}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Hoverda chiqadi */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-lg">
                    {image.title}
                  </p>
                  <div className="flex items-center text-teal-300 text-sm mt-1">
                    <FaExpand className="mr-2" /> Kattalashtirish
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal (Rasmni kattalashtirib ko'rish) */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm transition-all"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-10 right-10 text-white text-4xl hover:text-teal-400 transition-colors">
            &times;
          </button>
          <img
            src={selectedImg}
            className="max-w-full max-h-full rounded-lg shadow-2xl animate-zoom-in"
            alt="Enlarged"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
