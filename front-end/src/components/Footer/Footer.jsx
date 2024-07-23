import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer_content">
                <div className="footer_content_left">
                    <img src={assets.logo} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veritatis cum ipsa officiis. Distinctio consequatur hic omnis odit odio incidunt, eaque iste! Asperiores laboriosam, quo nisi libero architecto beatae veritatis?</p>
                    <div className="footer_social_icons">
                        <img src={assets.facebook_icon} />
                        <img src={assets.twitter_icon} />
                        <img src={assets.linkedin_icon} />
                    </div>
                </div>
                <div className="footer_content_center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer_content_right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-12-345-6789</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer_copyright">
                Copyright 2024 ©️ Tomato.com - All Rights Reserved.
            </p>
        </div>
    )
}

export default Footer