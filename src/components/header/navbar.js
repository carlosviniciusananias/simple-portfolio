import React, { Component } from "react";

import { Nav } from "./styles";

export default class Navbar extends Component {
    render() {
        return (
            <Nav className="navbar-section">
                <div className="container">
                    <p>Frete grátis para compras ácima de <strong>R$299,00</strong></p>
                </div>
            </Nav>
        );
    }
}