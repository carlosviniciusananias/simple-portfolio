import React, { Component } from "react";
import './liquida-style.css';
import Camiseta from './images/camiseta-liquida.jpg'
export default class Liquida extends Component {
    render() {
        return (
            <div className="liquida-section">
                <div className="container">
                    <h1 className="title-main-page"><span>LI-QUI-DA!</span> Motivos para amar nossa liquida!</h1>

                    <div className="offers">
                        <div className="box-banner">
                            <a href="/"><img src={Camiseta} alt="" /></a>
                        </div>
                        <div className="box-banner">
                            <a href="/"><img src={Camiseta} alt="" /></a>
                        </div>
                        <div className="box-banner">
                            <a href="/"><img src={Camiseta} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}