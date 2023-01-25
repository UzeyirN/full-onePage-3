import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import './HeroSection.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const HeroSection = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className='nav-photo' src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg" alt="" />
                    <div className='hero-content'>
                        <h6>Floral</h6>
                        <h2>Excellent bouquets for you</h2>
                    </div>

                </SwiperSlide>
                <SwiperSlide><img className='nav-photo' src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg" alt="" />
                    <div className='hero-content'>
                        <h6>Floral</h6>
                        <h2>Excellent bouquets for you</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img className='nav-photo' src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg" alt="" />
                    <div className='hero-content'>
                        <h6>Floral</h6>
                        <h2>Excellent bouquets for you</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default HeroSection