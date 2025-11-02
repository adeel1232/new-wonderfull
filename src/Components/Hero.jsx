import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../assets/Hero1.jpg'
import banner2 from '../assets/Hero3.jpg'
import banner3 from '../assets/Hero4.jpg'
import './Hero.css'

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    appendDots: dots => (
      <div style={{ bottom: '20px' }}>
        <ul style={{ margin: '0px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: i => (
      <div className="custom-dot"></div>
    )
  };

  return (
    <div className="slider-container -mt-12 overflow-hidden">
      <Slider {...settings}>
        {[banner1, banner2, banner3].map((banner, index) => (
          <div key={index}>
            <div
              className="hero-slide h-[650px] lg:h-[800px] relative"
              style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark overlay for contrast */}
              <div className="absolute inset-0 bg-black opacity-70"></div>

              <div className="relative max-w-7xl mx-auto h-full flex justify-center items-center">
                <div className="text-center px-5 md:px-0">
                 
                  <p className="text-white lg:text-lg lg:w-[700px] mt-4 mx-auto">
                    Explore breathtaking destinations, create unforgettable
                    memories, and embark on the journey of a lifetime.
                  </p>

                  <button className="bg-yellow-400 px-6 py-3 text-black rounded-md font-semibold mt-6 hover:bg-black hover:text-yellow-400 transition-all shadow-lg shadow-yellow-500/50">
                    Start Exploring
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
