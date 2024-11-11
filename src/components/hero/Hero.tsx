import { useEffect, useState } from "react";
import "./Hero.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const images = [
  "https://cdn.tripster.ru/thumbs2/68d0392e-3076-11ee-8e18-62c119461ee8.1600x900.jpeg?width=1200&height=630",
  // "https://www.cpt.dk/media/10944/maldiverne-desktop.jpg?mode=crop&heightratio=0.63&width=1110",
  // "https://tengrinews.kz/userdata/news/2022/news_479433/thumb_m/photo_408682.jpeg",
  // "https://i.pinimg.com/originals/97/c4/7d/97c47d78f1cf76d3eeb1b07861e7f405.jpg",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const {t} = useTranslation()

  return (
    <div className="hero">
      <div className="banner-images">

        {
          images.map((image, index) => (
            <div key={index} className={`banner-image ${index === currentImageIndex ? "active" : ""}`} style={{ backgroundImage: `url(${image})` }} ></div>
          ))}

        <div className="banner-contents">
          <h3 className="content-title">{t("hero-contents.content-title")}</h3>
          <p className="content-description">{t("hero-contents.content-description")}</p>
          <button className="book-btn">{t("hero-contents.book-btn")} <i><FaArrowRightLong /></i></button>
        </div>

        <div className="hero__bottom-contents">
          <div className="details-wrapper">
            <div className="content-detail">
              <h3>{t("hero-details.detail-one.title")}</h3>
              <p>{t("hero-details.detail-one.description")}</p>
            </div>
            <div className="content-detail">
              <h3>{t("hero-details.detail-two.title")}</h3>
              <p>{t("hero-details.detail-two.description")}</p>
            </div>
            <div className="content-detail">
              <h3>{t("hero-details.detail-three.title")}</h3>
              <p>{t("hero-details.detail-three.description")}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
