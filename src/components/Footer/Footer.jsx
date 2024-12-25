import React from 'react'
import './Footer.css'
// import footer_logo from '../../assets/footer_logo.svg'
// import user_icon from'../../assets/user_icon.svg'
import insta from '../../assets/instagram.svg'
import linkin from '../../assets/linkedin.svg'
import git from '../../assets/github.svg'
import twitter from '../../assets/twitter.svg'
const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footer-top">
            {/* <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I am a frontend developer from, USA with 10 years of experience in companies like Microsoft, Tesla and Apple.</p>
            </div>
            <div className="footer-top-right">
                {/* <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div> */
            //</div>
           }
                <a href='https://www.linkedin.com/in/rks-teja/'><img src={linkin} alt="" /></a>
                <a href='https://github.com/teja-rks'><img src={git} alt="" /></a>
                <a href='https://x.com/Tejarks'><img src={twitter} alt="" /></a>
                <a href='https://www.instagram.com/teja_r_k_s/'><img src={insta} alt="" /></a>
        </div>
        {/* <hr/>
        <div className="footer-bottom">
            {/* <p className='footer-bottom-left'> © 2023 Alex Bennett. All rights reserved.</p>
            <div className="footer-bottom-right"> */}
                {/* <p><img src={insta} alt="" />Term of Services</p>
                <p><img src={linkin} alt="" />Privacy Policy</p>  */}
                {/* <a href='https://www.instagram.com'><img src={insta} alt="" /></a>
                <a href='https://www.instagram.com'><img src={linkin} alt="" /></a> */}
                

            {/* </div> */}
        {/* </div> */} 

    </div>
  )
}

export default Footer