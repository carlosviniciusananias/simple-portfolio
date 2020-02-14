import React from "react";
import Facebook from './images/facebook.png'
import Instagram from './images/instagram.png'
import Linkedin from './images/linkedin.png'
import Github from './images/github.png'
import LogoReact from './images/react.png'

import './footer-style.css'

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-about container">
                <div className="about-items">
                    <h3>INSTITUCIONAL</h3>
                    <ul>
                        <li><a href="/">Lorem ipsum dolor lorem</a></li>
                        <li><a href="/">Lorem ipsum dolor lorem</a></li>
                        <li><a href="/">Lorem ipsum dolor lorem</a></li>
                        <li><a href="/">Lorem ipsum dolor lorem</a></li>
                    </ul>
                </div>
                <div className="about-items">
                    <h3>DÚVIDAS</h3>
                    <ul>
                        <li><a href="/">Lorem ipsum dolor lorem</a></li>
                        <li><a href="/">Lorem ipsum dolor lorem</a></li>
                        <li><a href="/">Lorem ipsum dolor lorem</a></li>
                        <li><a href="/">Lorem ipsum dolor lorem</a></li>
                    </ul>
                </div>
                <div className="about-items">
                    <h3>ATENDIMENTO</h3>
                    <ul>
                        <li><a href="/">Lorem ipsum dolor lorem</a></li>
                        <li><a href="/">Lorem ipsum dolor lorem</a></li>
                        <li><a href="/">Lorem ipsum dolor lorem</a></li>
                        <li><a href="/">Lorem ipsum dolor lorem</a></li>
                    </ul>
                </div>
                <div className="about-items">
                    <h3>SOCIAL</h3>
                    <ul className="socials">
                        <li><a href="/"><img src={Facebook} alt="" /></a></li>
                        <li><a href="/"><img src={Instagram} alt="" /></a></li>
                        <li><a href="/"><img src={Linkedin} alt="" /></a></li>
                        <li><a href="/"><img src={Github} alt="" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-credit container">
                <p>© 2020 Use react. Rua react props, 999 - React do Facebook, SC. CEP: 89999-999. CNPJ: 99.999.999/0001-99</p>
                <img src={LogoReact} alt="" />
            </div>
        </div>
    );
};

export default Footer;