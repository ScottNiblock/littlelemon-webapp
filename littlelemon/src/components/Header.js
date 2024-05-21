import {FaBars, FaTimes} from "react-icons/fa"
import logo from '../images/littlelemonlogo.jpg'
import { useState,useRef } from "react";
import '../css/Main.css'





const Header = () =>{
    const navRef = useRef();

/*each time this function is called, we will add or remove this
 classname "responsive-nav from the nav tag"*/
    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive-nav")
    }
return(
    <header>
        <img src={logo} alt='Little lemon logo' className="logo"/>
        <nav ref={navRef}>
            <a href="/#" id="home">HOME</a>
            <a href="/#" id="about">ABOUT</a>
            <a href="/#" id="menu">MENU</a>
            <a href="/#" id="reservations">RESERVATIONS</a>
            <a href="/#" id="orderOnline">ORDER ONLINE</a>
            <a href="/#" id="login">LOGIN</a>
            {/* Clicking this button will remove the classname from the navtag */}
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        {/* This button will be shown on smaller screens, when we click on it, responsive-nav
        classname will be applied to nav element, then nav will consume whole screen and we wont see this btn*/}
        <button className="nav-btn" onClick={showNavbar}>
            <FaBars/>
        </button>
    </header>
)

}



export default Header;