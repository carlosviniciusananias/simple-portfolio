import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Main } from "./styles"

export default class Banner extends Component {
    render() {
        const settings = {
            dots: false,
            arrow: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Main>
                <Slider {...settings}>
                    <div>
                        <a href="/">
                            <img src="http://placehold.it/1920x550/159/FFF" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <img src="http://placehold.it/1920x550/357/fff" alt="" />
                        </a>
                    </div>
                </Slider>
            </Main>
        );
    }
}