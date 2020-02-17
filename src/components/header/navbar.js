import React, { Component } from "react";

import './navbar-style.css';
import MyAccount from './images/my-account.png'
import Buy from './images/buy.png'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar-section">
                <div className="container">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="buy">
                        <span><img src={Buy} alt="Buy" /></span>
                    </div>
                    <div className="my-account">
                        <span><img src={MyAccount} alt="My Account" /></span>
                        <ul>
                            <li>Entrar</li>
                            <li>Meus pedidos</li>
                            <li>Sair</li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}