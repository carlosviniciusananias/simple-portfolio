import React, { Component } from "react";

import './menu-style.css';

export default class Menu extends Component {
    render() {
        return (
            <div className="menu-section">
                <ul className="menu-content">
                    <li className="menu__item">menu 1</li>
                    <li className="menu__item">menu 2</li>
                    <li className="menu__item">menu 3</li>
                    <li className="menu__item">menu 4</li>
                    <li className="menu__item">menu 5</li>
                </ul>
            </div>
        );
    }
}