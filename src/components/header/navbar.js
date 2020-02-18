import React, { Component } from "react";

import './navbar-style.css';
import Buy from './images/buy.png'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar-section">
                <div className="container">
                    <p>Frete grátis para compras ácima de <strong>R$299,00</strong></p>
                </div>
            </nav>
        );
    }
}