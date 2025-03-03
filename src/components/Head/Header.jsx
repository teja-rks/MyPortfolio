import React from 'react'
// import './Hero.css'
import './Hero.css'
// import profileimg from '../../assets/profile_img.svg'
import profileimg2 from '../../assets/hero.jpg'
import { Typewriter } from 'react-simple-typewriter'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
const Header = () => {
  return (
    <div id="header" className='hero'>
    <img src={profileimg2} alt=''></img>
    <h1>I'm  <span>
      <Typewriter
        loop
        cursor
        cursorSytle='/'
        typeSpeed={100}
        deleteSpeed={100}
        delaySpeed={1000}
        words={['R K S Teja',' an UnderGraduate Student','a Frontend Developer','a Competitive Programmer']}
      />
      </span></h1>
    {/* <p>I am an UnderGraduate student from the ACE Engineering College,Ghatkesar</p> */}
    <div className='header-action'>
        {/* <div className='header-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setmenu("Contact")}>Connect With me</p></AnchorLink></div> */}
        <div className='header-resume'><a href="https://drive.google.com/file/d/1VFA6cX0J2W2q6s0Tkd67O3Dn3gANuWtL/view?usp=sharing" target="_blank">My resume</a></div>
    </div>
    </div>
  )
}

export default Header