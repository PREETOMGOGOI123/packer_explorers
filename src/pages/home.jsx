import Hero from '../components/home/Hero.jsx'
import Services from '../components/home/Services.jsx'
import WhyTrustUs from "../components/home/WhyUs.jsx";
import Gallery from '../components/home/Gallery.jsx'
import About from '../components/home/About.jsx'

const Home = () => {
    return (
        <>
             <Hero />
            <Services />
            <About />
            <Gallery />
        </>
    )
}

export default Home