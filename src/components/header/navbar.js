import React, { Component } from "react";

import { Nav } from "./styles";

export default class Navbar extends Component {
    render() {
        return (
            <Nav className="navbar-section">
                <div className="container">
                    <div className="navbar-content">
                        <div className="navbar-item">
                            <p>PARCELE EM ATÉ <strong>6X SEM JUROS</strong></p>
                        </div>
                        <div className="navbar-item">
                            <p>FRETE FIXO DE <strong>R$19,90*</strong></p>
                        </div>
                        <div className="navbar-item">
                            <p>FRETE GRÁTIS <strong>ACIMA DE R$199</strong></p>
                        </div>
                        <div className="navbar-item">
                            <p>COMPRA <strong>100% SEGURA</strong></p>
                        </div>
                    </div>
                </div>
            </Nav>
        );
    }
}