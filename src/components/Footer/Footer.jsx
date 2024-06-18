import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">

        <div className="footer-content-left">
             <img className='logo' src={assets.LOGO1} alt="" />
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo natus, rerum assumenda quas tenetur at dolores ut doloremque repudiandae odit ratione quasi optio, laboriosam harum? Iusto fugiat tenetur explicabo voluptatibus?</p>
             <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
             </div>
        </div>

        <div className="footer-content-center">
           <h2>COMPANY</h2>
           <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
           </ul>
        </div>
        
        <div className="footer-content-right">
         <h2> Get in touch</h2>
          <ul>
            <li>+91772372787</li>
            <li>houseofengineers@gmail.com</li>
          </ul>
        </div>


      </div>
    </div>
  )
}

export default Footer
  