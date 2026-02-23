import About from "../../components/about/About";
// import ContactUs from "../../components/contact-us/ContactUs";
import Gallery from "../../components/gallery/Gallery";
import Hero from "../../components/hero/Hero";
import Destinations from "../../components/sections/Destinations";
import Services from "../../components/services/Services";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Destinations />
      {/* <ContactUs/> */}
    </div>
  );
};

export default Home;
