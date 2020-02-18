import React, { Component } from "react";
import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
`;

export default class LiquidaNews extends Component {
    render() {
        return (
            <div className="liquida-news-section">
                <div className="container">
                    <Grid>
                        <div className="box-banner">
                            <a href="/"><img src="http://placehold.it/600x350/357/fff" alt="" /></a>
                        </div>
                        <div className="box-banner">
                            <a href="/"><img src="http://placehold.it/600x350/357/fff" alt="" /></a>
                        </div>
                    </Grid>
                </div>
            </div>
        );
    }
}