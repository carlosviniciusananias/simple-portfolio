import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Banner extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img src="http://placehold.it/1920x300/222/FFF" alt="" />
                    </div>
                    <div>
                        <img src="http://placehold.it/1920x300/222/FFF" alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}