import React from 'react';
import image1 from './images/img1.JPG';
import image2 from './images/img2.JPG';
import image3 from './images/img3.JPG';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Carousell = (props) => {
    return (
        <div id="carouselss">
            <Carousel>
                <div>
                    <img src={image1} alt="" />
                </div>
                <div>
                    <img src={image2} alt="" />
                </div>
                <div>
                    <img src={image3} alt="" />
                </div>
            </Carousel>
        </div>
    );
}

export default Carousell;