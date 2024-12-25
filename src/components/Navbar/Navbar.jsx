import React from 'react'
import './Navbar.css'
// import logo from '../../assets/logo.svg'
import { useState,useRef } from 'react'
// import undeline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {
  const[menu,setmenu]=useState("header")
  const menuref=useRef()

  const openmenu=()=>{
    menuref.current.style.right="0";
  } 
  const closemenu=()=>{
    menuref.current.style.right="-350px";
  }
  return (
    <div className="Navbar">
      {/* <img src={logo} alt=''/> */}
      <p className='logo'><AnchorLink  className='anchor-link' offset={100}  href='#header'> Teja</AnchorLink></p>
      {/* <hr/> */}
      <img src={menu_open} onClick={openmenu}alt="" className='nav-mob-open' />
      <ul  ref={menuref}className="nav-menu">
        <img src={menu_close} alt="" onClick={closemenu} className='nav-mob-close' />
        <li><AnchorLink  className='anchor-link' offset={100}  href='#header'><p onClick={()=>setmenu("header")}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#about'><p onClick={()=>setmenu("About")}>About</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#services'><p onClick={()=>setmenu("Services")}>Projects</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#portfolio'><p onClick={()=>setmenu("Portfolio")}>Certifications</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#contact'><p onClick={()=>setmenu("Contact")}>Contact</p></AnchorLink></li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setmenu("Contact")}>Contact me</p></AnchorLink></div>
    </div>
  )
}

export default Navbar