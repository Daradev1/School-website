import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import Logo from "../../assets/Logo.png"
import { Link } from 'react-scroll';
import menu_icon from "../../assets/menu-icon.png"
const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
   window.addEventListener('scroll', ()=>{
    window.scrollY > 50 ? setSticky(true) :setSticky(false)
    setMobileMenu(false)
   })
  }, []);


  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
     mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
    <img src={Logo} className='logo' alt=""/>
    <ul className={mobileMenu?'': 'hideNav'}>
    <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
    <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
    <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
    <li><Link to="college" smooth={true} offset={-260} duration={500}>College</Link></li>
    <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
    <li><Link to="contact" smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
    </ul>
    <img src={menu_icon} alt="" className='menuIcon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar