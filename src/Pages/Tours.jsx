import React, { useState } from 'react'
import TopBanner from '../Components/TopBanner'
import Bali from '../assets/Bali.jpg'
import paris from '../assets/paris.jpg'
import tokyo from '../assets/tokyo.jpg'
import India from '../assets/India.jpg'
import venice from '../assets/venice.jpg'
import { Clock, Star, X } from 'lucide-react'

const Tours = () => {
  const [selectedDestination, setSelectedDestination] = useState(null)

  const destinationJson = [
    { name: 'Bali', img: Bali, star: '4.8 (12 reviews)', description: "Wonderful Holidays & Events offers an unforgettable trip to Bali. Explore beautiful beaches, culture, and local cuisine." },
    { name: 'Venice', img: venice, star: '4.6 (18 reviews)', description: "Experience Venice with Wonderful Holidays & Events. Enjoy canals, gondolas, and exquisite Italian culture." },
    { name: 'Tokyo', img: tokyo, star: '4.9 (25 reviews)', description: "Discover Tokyo with Wonderful Holidays & Events. A blend of tradition, modernity, and vibrant city life."  },
    { name: 'India', img: India, star: '4.7 (22 reviews)', description: "Explore the diverse culture and heritage of India with Wonderful Holidays & Events."},
    { name: 'Paris', img: paris, star: '4.9 (30 reviews)', description: "Romantic Paris tours by Wonderful Holidays & Events, visiting the Eiffel Tower, museums, and cafés." },
  ]

  return (
    <>
      <TopBanner text='Tours' />

      <div className='max-w-7xl md:mx-auto my-10'>
        <h1 className='text-3xl lg:text-4xl font-serif mb-3 font-semibold text-center text-black'>
          Top Destinations
        </h1>
        <hr className='text-yellow-400 w-[200px] bg-yellow-400 mx-auto h-1 mb-10' />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-5'>
          {destinationJson.map((destination) => (
            <div
              key={destination.name}
              className='overflow-hidden border border-yellow-300 bg-white shadow-lg rounded-lg mb-5 hover:shadow-yellow-400 transition-all duration-300'
            >
              <img
                src={destination.img}
                alt={destination.name}
                className='object-cover w-full h-48 hover:scale-110 transition-all duration-300'
              />
              <div className='p-4'>
                <p className='text-gray-600 flex items-center gap-1 text-sm mb-1'>
                  <Clock width={15} /> 5 days
                </p>
                <h3 className='text-xl font-bold mb-2 text-black'>{destination.name}</h3>
                <p className='flex gap-1 items-center text-yellow-500'>
                  <Star width={20} fill='#FACC15' /> {destination.star}
                </p>
                <p className='text-gray-700 mb-4 mt-2'>
                  Experience the beauty and culture of {destination.name}.
                </p>
                <div className='flex gap-4'>
                  <button className='px-3 py-2 bg-yellow-400 rounded-md text-black font-semibold hover:bg-yellow-500'>
                    ${destination.price}
                  </button>
                  <button
                    className='px-3 py-2 bg-black rounded-md text-white font-semibold hover:bg-yellow-500 hover:text-black transition-all'
                    onClick={() => setSelectedDestination(destination)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedDestination && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white rounded-lg max-w-lg w-full p-6 relative shadow-2xl border-t-4 border-yellow-400 animate-fadeIn'>
            <button
              className='absolute top-3 right-3 text-gray-600 hover:text-black'
              onClick={() => setSelectedDestination(null)}
            >
              <X width={24} />
            </button>
            <h2 className='text-2xl font-bold mb-3 text-black'>{selectedDestination.name}</h2>
            <img
              src={selectedDestination.img}
              alt={selectedDestination.name}
              className='w-full h-60 object-cover mb-4 rounded'
            />
            <p className='text-gray-700 mb-4'>{selectedDestination.description}</p>
            <p className='text-gray-600'>
              Organized by <strong className='text-yellow-500'>Wonderful Holidays & Events</strong>
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default Tours
