import { useEffect, useState } from "react";
import "./Hero.scss";
import { FaArrowRightLong } from "react-icons/fa6";

const images = [
  "https://www.cpt.dk/media/10944/maldiverne-desktop.jpg?mode=crop&heightratio=0.63&width=1110",
  "https://tengrinews.kz/userdata/news/2022/news_479433/thumb_m/photo_408682.jpeg",
  "https://i.pinimg.com/originals/97/c4/7d/97c47d78f1cf76d3eeb1b07861e7f405.jpg"
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="banner-images">

        {
          images.map((image, index) => (
            <div key={index} className={`banner-image ${index === currentImageIndex ? "active" : ""}`} style={{ backgroundImage: `url(${image})` }} ></div>
          ))}

        <div className="banner-contents">
          <h3 className="content-title">Travel to your dream destination</h3>
          <p className="content-description">Discover the world of dreams! Unique tours, personal approach and unforgettable impressions</p>
          <button className="book-btn">Book now <i><FaArrowRightLong /></i></button>
        </div>

        <div className="hero__bottom-contents">
          <div className="details-wrapper">
            <div className="content-detail">
              <h3>Individual approach</h3>
              <p>Personalized routes and excursions adapted to your wishes.</p>
            </div>
            <div className="content-detail">
              <h3>Individual approach</h3>
              <p>Personalized routes and excursions adapted to your wishes.</p>
            </div>
            <div className="content-detail">
              <h3>Individual approach</h3>
              <p>Personalized routes and excursions adapted to your wishes.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
