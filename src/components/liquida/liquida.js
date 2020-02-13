import React, { Component } from "react";

import './liquida-style.css';

export default class Liquida extends Component {
    render() {
        return (
            <div className="liquida-section">
                <h1><span>LI-QUI-DA!</span> Motivos para amar nossa liquida!</h1>

                <div className="offers">
                    <div className="box-banner">
                        <a href="/"><img src="http://placehold.it/380x620/357/fff" alt="" /></a>
                    </div>
                    <div className="box-banner">
                        <a href="/"><img src="http://placehold.it/380x620/357/fff" alt="" /></a>
                    </div>
                    <div className="box-banner">
                        <a href="/"><img src="http://placehold.it/380x620/357/fff" alt="" /></a>
                    </div>
                </div>
            </div>
        );
    }
}