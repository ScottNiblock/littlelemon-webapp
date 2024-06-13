import { Link } from "react-router-dom"
import tablephoto from "../images/foodtable.jpeg"
import '../css/Main.css'

const HeroSection = () => {
return(
    <section className="hero-section">
    <div className="hero-section-content">
    <h1>Little Lemon</h1>
    <h3>Chicago</h3>
    <p>Little Lemon is a family owned mediterannean restaurant focused on traditional recipes with a modern twist. Book your mediterannean dining experience today!</p>
    <Link to="/bookings">
    <button className="page-btn">Reserve a Table</button>
    </Link>
    </div>
    <img src={tablephoto} alt="Photo of table with food" className="table-img"></img>
    </section>
)

}
export default HeroSection