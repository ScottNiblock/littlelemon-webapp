import littleLogo from '../images/lillogo.png'
import{Link} from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import '../css/Footer.css'
const Footer = () =>{
    return(
       <footer className="footer">
        <img src={littleLogo} alt="little lemon logo" className='logo'></img>
        <div className='footer-links'>
            <h4>Important Links</h4>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/menu'>Menu</Link></li>
                <li><Link to='/reservations'>Reservations</Link></li>
                <li><Link to='/order-online'>Order Online</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
      </div>
      <div className='footer-links'>
        <h4>Contact</h4>
        <ul>
            <li>Address: 123 Main St, Chicago</li>
            <li>Phone: 555-800-1900</li>
            <li>Email: LittleLemon@gmail.com</li>
        </ul>
      </div>
      <div className='footer-links'>
        <h4>Follow Our Socials</h4>
        <div className='socials'>
        <a href='https://meta.com'><FaFacebook  color="#3b5998" size="2em"></FaFacebook></a>
        <a href='https://x.com'><FaTwitter color="#1DA1F2" size="2em"></FaTwitter></a>
        <a href='https://instagram.com'> <FaInstagram color="#C13584" size="2em"></FaInstagram></a>
       
        </div>
        


      </div>

       </footer>
    )
}
export default Footer;