import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/banner1.jpg'
import banner2 from '../../../images/Banner/banner2.jpg'
import banner3 from '../../../images/Banner/banner3.jpg'
import banner4 from '../../../images/Banner/banner4.jpg'
const Banner = () => {
    return (
        <div className='container'>
            <Carousel fade>
                <Carousel.Item>
                    <img style={{ height: 500 }}
                        className="d-block w-100 "
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>MacBook Air 13.3-Inch Retina Display</h3>
                        <p>13.3-inch (diagonal) LED-backlit Retina display with IPS technology</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Apple iPhone 13 </h3>
                        <p>Dual Pixel PDAF, sensor-shift OIS, dual-LED flash, ultrawide, depth, telephoto, 3x optical zoom & more </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Microlab Solo9C 2.0</h3>
                        <p>Satellites 214x575x323, mm
                            Product Net weight 21,9, kg
                            This Microlab Solo9C Speaker comes with 01 year of warranty. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src={banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Apple Watch Series</h3>
                        <p>S7 SiP with 64-bit dual-core processor </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;