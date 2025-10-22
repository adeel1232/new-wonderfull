import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Clock, Star, X } from "lucide-react";
import "../Components/Css/reactSlick.css";

import Bali from "../assets/Bali.jpg";
import Paris from "../assets/paris.jpg";
import Tokyo from "../assets/tokyo.jpg";
import India from "../assets/India.jpg";
import Venice from "../assets/venice.jpg";
import next from "../assets/next.png";
import back from "../assets/back.png";

// Custom Arrows
const SlickArrowLeft = (props) => <img src={back} alt="Prev" {...props} />;
const SlickArrowRight = (props) => <img src={next} alt="Next" {...props} />;

const FeatureDestination = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  // Slider Settings with AutoPlay
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const destinations = [
    { name: "Saudi Arabia", img: Venice, },
    { name: "Malaysia", img: Bali,},
    { name: "Singapore", img: Tokyo,  },
    { name: "Turkey", img: Paris, },
    { name: "Thailand", img: India,  },
  ];

  const renderStars = () => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} width={18} fill="gold" stroke="none" />
      ))}
    </div>
  );

  return (
    <>
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 px-6 md:px-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 font-serif mb-3">
            Featured Destinations
          </h2>
          <div className="w-32 h-1 bg-red-500 mx-auto mb-12 rounded-full"></div>

          <Slider {...settings}>
            {destinations.map((destination) => (
              <div key={destination.name}>
                <div className="group overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-2xl rounded-2xl mb-5 mx-3 transition-all duration-500 hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={destination.img}
                      alt={destination.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all"></div>
                    <div className="absolute bottom-3 left-3 text-white bg-red-500 px-3 py-1 rounded-md text-sm font-medium shadow">
                      {destination.time}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {destination.name}
                    </h3>
                    {renderStars()}
                    <p className="text-gray-600 mt-2 mb-4">
                      Discover the beauty, history, and charm of {destination.name}.
                    </p>
                    <div className="flex justify-between items-center">
                      <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-semibold hover:bg-red-600 transition-all shadow">
                        ${destination.price}
                      </button>
                      <button
                        onClick={() => setSelectedDestination(destination)}
                        className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all shadow"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Modal */}
      {selectedDestination && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-[90%] md:w-[500px] relative animate-fadeIn">
            <button
              onClick={() => setSelectedDestination(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black transition"
            >
              <X />
            </button>
            <img
              src={selectedDestination.img}
              alt={selectedDestination.name}
              className="rounded-xl mb-4 h-48 w-full object-cover shadow"
            />
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              {selectedDestination.name}
            </h2>
            {renderStars()}
            <p className="text-gray-700 mt-3 font-medium">
              Our premium travel services in {selectedDestination.name} include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Luxury hotel & resort bookings</li>
              <li>Private guided tours</li>
              <li>Airport pick-up & drop-off</li>
              <li>Custom adventure and cultural packages</li>
              <li>24/7 travel support</li>
            </ul>
            <div className="flex justify-end mt-5">
              <button
                onClick={() => setSelectedDestination(null)}
                className="px-5 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeatureDestination;
