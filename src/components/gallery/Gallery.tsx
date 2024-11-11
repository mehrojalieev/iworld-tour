import { useTranslation } from "react-i18next";
import "./Gallery.scss";

const Gallery = () => {
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
      url: "https://extraguide.ru/images/t/9018942792dade3c2c81e53e90d0d81f52baa137.jpeg",
      title: "Registan Square, Samarkand",
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
  

  const {t} = useTranslation()

  return (
    <div className="gallery">
      <div className="gallery-wrapper">
        <h2 className="gallery-title">{t("gallery.gallery-title")}</h2>
        <div className="gallery-images">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image.url} alt={`Image ${index + 1}`} />
              <div className="image-title">{image.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
