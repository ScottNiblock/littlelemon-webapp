import { Box, HStack, Image} from "@chakra-ui/react";
import logo from '../images/littlelemonlogo.jpg'
import '../css/Header.css'



const navLinks = ['HOME', 'ABOUT', 'MENU', 'RESERVATIONS', 'ORDER ONLINE', 'LOGIN']

const Header = () =>{
    return(
        <header className="header">
        <img src={logo} alt="Little Lemon Logo"  className="logo"></img>
        <nav className="nav">
        <ul className="navList">
            {navLinks.map(link =>{
                return(
                <li key={link} className="navItem"><a className="navLink">{link}</a></li>
                )
            })}
        </ul>
        </nav>
        </header>
    )

}



export default Header;