import React, { Component } from "react";

import { LiquidaSection } from "./styles"
import { div } from "./styles"
import { Grid } from "./styles"

import Camiseta from './images/camiseta-liquida.png'
import Acessorios from './images/acessorios-liquida.png'
import Blusas from './images/blusas-liquida.png'
export default class Liquida extends Component {
    render() {
        return (
            <LiquidaSection>
                <div className="container">
                    <Grid>
                        <div className="box-banner">
                            <a href="/">
                                <img src={Camiseta} alt="" />
                                <div className="description">
                                    <h3>camisetas</h3>
                                    <p>encontre seus modelos favoritos</p>
                                    <span>SHOP NOW</span>
                                </div>
                            </a>
                        </div>
                        <div className="box-banner">
                            <a href="/">
                                <img src={Acessorios} alt="" />
                                <div className="description">
                                    <h3>acessórios</h3>
                                    <p>complemente seu look</p>
                                    <span>SHOP NOW</span>
                                </div>
                            </a>
                        </div>
                        <div className="box-banner">
                            <a href="/">
                                <img src={Blusas} alt="" />
                                <div className="description">
                                    <h3>tênis</h3>
                                    <p>sinta-se confortável até nos pés</p>
                                    <span>SHOP NOW</span>
                                </div>
                            </a>
                        </div>
                    </Grid>
                </div>
            </LiquidaSection>
        );
    }
}