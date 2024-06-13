import {FaBars, FaTimes} from "react-icons/fa"
import logo from '../images/littlelemonlogo.jpg'
import { useState,useRef } from "react";
import{Link} from 'react-router-dom'
import '../css/Main.css'





const Header = () =>{
    const navRef = useRef();

/*each time this function is called, we will add or remove this
 classname "responsive-nav from the nav tag"*/
    const showNavBar = () =>{
        navRef.current.classList.toggle("responsive-nav")
    }
    const hideNavBar = () =>{
        navRef.current.classList.remove('responsive-nav')
    }

return(
    <header>
        <img src={logo} alt='Little lemon logo' className="logo"/>
        <nav ref={navRef}>
            <Link to="/" className="nav-item" onClick={hideNavBar}>HOME</Link>
            <Link to="/about" className="nav-item"onClick={hideNavBar}>ABOUT</Link>
            <Link to="/menu" className="nav-item"onClick={hideNavBar}>MENU</Link>
            <Link to="/bookings" className="nav-item"onClick={hideNavBar}>RESERVATIONS</Link>
            <Link to="/order-online" className="nav-item"onClick={hideNavBar}>ORDER ONLINE</Link>
            <Link to="/login" className="nav-item"onClick={hideNavBar}>LOGIN</Link>
            {/* Clicking this button will remove the classname from the navtag */}
            <button className="nav-btn nav-close-btn" onClick={hideNavBar}>
                <FaTimes/>
            </button>
        </nav>
        {/* This button will be shown on smaller screens, when we click on it, responsive-nav
        classname will be applied to nav element, then nav will consume whole screen and we wont see this btn*/}
        <button className="nav-btn" onClick={showNavBar}>
            <FaBars/>
        </button>
    </header>
)

}



export default Header;