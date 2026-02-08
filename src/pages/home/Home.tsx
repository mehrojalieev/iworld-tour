import About from "../../components/about/About";
// import ContactUs from "../../components/contact-us/ContactUs";
import Gallery from "../../components/gallery/Gallery";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Gallery />
      {/* <ContactUs/> */}
    </div>
  );
};

export default Home;
