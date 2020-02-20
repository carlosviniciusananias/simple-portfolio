import React, { Component } from "react";

import { LiquidaSection } from "./styles"
import { Title } from "./styles"
import { Grid } from "./styles"

import Camiseta from './images/camiseta-liquida.jpg'
export default class Liquida extends Component {
    render() {
        return (
            <LiquidaSection>
                <div className="container">
                    <Title>
                        <span>LOOKS</span> Fresquinhos para você se manter no style!
                    </Title>

                    <Grid>
                        <div className="box-banner">
                            <a href="/"><img src={Camiseta} alt="" /></a>
                        </div>
                        <div className="box-banner">
                            <a href="/"><img src={Camiseta} alt="" /></a>
                        </div>
                        <div className="box-banner">
                            <a href="/"><img src={Camiseta} alt="" /></a>
                        </div>
                    </Grid>
                </div>
            </LiquidaSection>
        );
    }
}