import React from 'react';
import './footer.scss'
import logo from '../../assets/img/black-logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__contact">
                <div className="footer__contact--wrap">
                    <h1>Contact</h1>
                    <h3>motiontrend@test.com</h3>
                </div>
                <div className="footer__contact--wrap">
                    <h3>@ Motiontrend. All rights reserved.</h3>
                    <div className="footer__contact--icons">
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>
            </div>
            <div className="footer__nav">
                <ul className="footer__nav--wrap">
                    <li><a href=""></a>Introduction</li>
                    <li><a href=""></a>Terms of Service</li>
                    <li><a href=""></a>Language <i class="fa-solid fa-chevron-down"></i></li>
                    <li><a href=""></a>Customer Service</li>
                </ul>
                <div className="footer__nav--logo">
                    <img src={logo} alt="" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
