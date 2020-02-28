import React, { Component } from "react";

import { Main } from "./styles"
import { Container } from "./styles"

export default class Benefits extends Component {
    render() {
        return (
            <Main>
                <Container>
                    <div className="item">
                        <div className="imgItem">
                            <img src="http://placehold.it/20x20" alt="" />
                        </div>
                        <div className="itemText">
                            <p><strong>Frete grátis</strong></p>
                            <p>Para compras acima de R$299,00</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="imgItem">
                            <img src="http://placehold.it/20x20" alt="" />
                        </div>
                        <div className="itemText">
                            <p><strong>Troca grátis</strong></p>
                            <p>Na primeira compra</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="imgItem">
                            <img src="http://placehold.it/20x20" alt="" />
                        </div>
                        <div className="itemText">
                            <p><strong>Enviamos para todo</strong></p>
                            <p>Brasil</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="imgItem">
                            <img src="http://placehold.it/20x20" alt="" />
                        </div>
                        <div className="itemText">
                            <p><strong>Parcele sem juros</strong></p>
                            <p>Em até <strong>6x</strong></p>
                        </div>
                    </div>
                </Container>
            </Main>
        );
    }
}