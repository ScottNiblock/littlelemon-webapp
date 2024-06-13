

import HeroSection from "../components/HeroSection"
import Highlights from "../components/Highlights"
import Testimonials from "../components/Testimonials"
import '../css/Main.css'

import About from "../components/About"

const HomePage = () =>{
return(
    <div className="full-homepage">
    <div className="homepage-content">
    <HeroSection/>
    <Highlights/>
    <Testimonials/>
    <About/>
    </div>
    </div>
)
}
export default HomePage;