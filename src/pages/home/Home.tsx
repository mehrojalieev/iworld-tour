import About from "../../components/about/About"
import Gallery from "../../components/gallery/Gallery"
import Hero from "../../components/hero/Hero"

const Home = () => {
  return (
    <div className='home'>
        <Hero/>
        <About/>
        <Gallery/>
    </div>
  )
}

export default Home
