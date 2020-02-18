import React, { Component } from "react";

import './navbar-style.css';
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
                </div>
            </nav>
        );
    }
}