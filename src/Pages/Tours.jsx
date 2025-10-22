import React, { useState } from 'react'
import TopBanner from '../Components/TopBanner'
import Bali from '../assets/Bali.jpg'
import Paris from '../assets/paris.jpg'
import Tokyo from '../assets/tokyo.jpg'
import India from '../assets/india.jpg'
import Venice from '../assets/venice.jpg'
import { Clock, Star, X } from 'lucide-react'

const Tours = () => {
  const [selectedDestination, setSelectedDestination] = useState(null)

  const destinationJson = [
    { name: 'Bali', img: Bali, star: '3 (12 reviews)', description: "Wonderful Holidays & Events offers an unforgettable trip to Bali. Explore beautiful beaches, culture, and local cuisine." },
    { name: 'Venice', img: Venice, star: '3 (12 reviews)',description: "Experience Venice with Wonderful Holidays & Events. Enjoy canals, gondolas, and exquisite Italian culture." },
    { name: 'Tokyo', img: Tokyo, star: '3 (12 reviews)', description: "Discover Tokyo with Wonderful Holidays & Events. Blend of tradition, modernity, and vibrant city life." },
    { name: 'India', img: India, star: '3 (12 reviews)', description: "Explore the diverse culture and heritage of India with Wonderful Holidays & Events." },
    { name: 'Paris', img: Paris, star: '3 (12 reviews)',  description: "Romantic Paris tours by Wonderful Holidays & Events, visiting Eiffel Tower, museums, and cafes." },
  ]

  return (
    <>
      <TopBanner text='Tours' />
      <div className='max-w-7xl md:mx-auto my-10'>
        <h1 className='text-3xl lg:text-4xl font-serif mb-3 font-semibold text-center'>Top Destination</h1>
        <hr className='text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10' />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-5'>
          {destinationJson.map((destination) => (
            <div key={destination.name} className='overflow-hidden border shadow-lg shadow-gray-500 rounded-lg mb-5'>
              <img
                src={destination.img}
                alt={destination.name}
                className='object-cover w-full h-48 hover:scale-110 transition-all'
              />
              <div className='p-4'>
                <p className='text-gray-500 flex items-center gap-1 text-sm mb-1'><Clock width={15} />5 days</p>
                <h3 className='text-xl font-bold mb-2'>{destination.name}</h3>
                <p className='flex gap-1 items-center'><Star width={20} fill='red' />{destination.star}</p>
                <p className='text-gray-600 mb-4 mt-2'>Experience the beauty and culture of {destination.name}</p>
                <div className='flex gap-4'>
                  <button className='px-3 py-2 bg-red-500 rounded-md text-white'>${destination.price}</button>
                  <button
                    className='px-3 py-2 bg-black rounded-md text-white'
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
          <div className='bg-white rounded-lg max-w-lg w-full p-6 relative'>
            <button
              className='absolute top-3 right-3 text-gray-600'
              onClick={() => setSelectedDestination(null)}
            >
              <X width={24} />
            </button>
            <h2 className='text-2xl font-bold mb-3'>{selectedDestination.name}</h2>
            <img
              src={selectedDestination.img}
              alt={selectedDestination.name}
              className='w-full h-60 object-cover mb-4 rounded'
            />
            <p className='text-gray-700 mb-4'>{selectedDestination.description}</p>
            <p className='text-gray-500'>Organized by <strong>Wonderful Holidays & Events</strong></p>
          </div>
        </div>
      )}
    </>
  )
}

export default Tours
