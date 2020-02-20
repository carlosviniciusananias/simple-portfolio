import React, { Component } from "react";

import { Grid } from "./styles"

import Liquida from "./images/liquida.png"
export default class LiquidaNews extends Component {
    render() {
        return (
            <div className="liquida-news-section">
                <div className="container">
                    <Grid>
                        <div className="box-banner">
                            <a href="/"><img src={Liquida} alt="" /></a>
                        </div>
                        <div className="box-banner">
                            <a href="/"><img src={Liquida} alt="" /></a>
                        </div>
                    </Grid>
                </div>
            </div>
        );
    }
}