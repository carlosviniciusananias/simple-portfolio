import React, { Component } from "react";

import './menu-style.css';

export default class Menu extends Component {
    render() {
        return (
            <div className="menu-section container">
                <div>
                    <a href="/"><img src="" alt="" />Logo</a>
                </div>

                <ul className="menu-content">
                    <li className="menu__item">FEMININO</li>
                    <li className="menu__item">MASCULINO</li>
                    <li className="menu__item">INFANTIL</li>
                    <li className="menu__item">ATIVIDADE</li>
                    <li className="menu__item">OUTLET</li>
                </ul>
            </div>
        );
    }
}