import React from 'react'
import LightGallery from 'lightgallery/react';

import './Css/Gallery.css'

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const images = [
    { src: '/India.jpg', alt: 'India' },
    { src: '/Hero1.jpg', alt: 'Hero1' },
    { src: '/Hero2.jpg', alt: 'Hero2' },
    { src: '/Hero3.jpg', alt: 'Hero3' },
    { src: '/Hero4.jpg', alt: 'Hero4' },
    { src: '/Bali.jpg', alt: 'Bali' },
    { src: '/venice.jpg', alt: 'venice' },
    { src: '/paris.jpg', alt: 'paris' },
    { src: '/tokyo.jpg', alt: 'tokyo' },
];

const GalleryComp = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <div className='max-w-7xl mx-auto mb-16 px-4 md:px-0 mt-10'>
            <div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif'>
                    Our Gallery
                </h2>
                <hr className='text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10'/>
            </div>

            <div className="App grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((img, index) => (
                    <div key={index} className="relative group overflow-hidden">
                        <a href={img.src}>
                            <img
                                alt={img.alt}
                                src={img.src}
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </a>
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm max-h-full overflow-auto">
                            Wonderful Holidays & Events is a premier travel and destination management company dedicated to creating unforgettable experiences. We specialize in tailor-made holiday packages, sightseeing tours, airport transfers, and group arrangements, ensuring every journey is seamless and memorable. Our expert team combines local knowledge with exceptional service to deliver unique travel experiences, whether it’s a leisure getaway, a corporate event, or a special celebration. At Wonderful Holidays & Events, your dream holiday becomes a reality.
                        </div>
                    </div>
                ))}
            </div>

            {/* LightGallery */}
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                dynamic
                dynamicEl={images.map(img => ({ src: img.src, thumb: img.src }))}
            />
        </div>
    )
}

export default GalleryComp
