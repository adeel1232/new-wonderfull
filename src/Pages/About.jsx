import React from 'react'
import TopBanner from '../Components/TopBanner'
import trip from '../assets/trip.gif'
import time from '../assets/fire-time.gif'
import price from '../assets/best-price.gif'

const About = () => {
  return (
    <div>
      <TopBanner text='About' />

      <div className='max-w-7xl mx-auto my-10'>
        <div className='flex flex-col md:flex-row px-4 md:px-0 gap-6'>

          {/* Left Section */}
          <div className='flex-1'>
            <div className='relative'>
              <img
                src='https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='travel'
                className='rounded-lg shadow-lg'
              />
              <div className='absolute bottom-[45%] right-0 p-4 bg-yellow-400 text-black font-bold md:text-4xl rounded-lg shadow-md'>
                HOW WE ARE BEST <br /> FOR TRAVEL!
              </div>
            </div>

            <h1 className='md:text-4xl font-bold mt-6 mb-4 text-3xl text-black'>
              How We Are Best For Travel!
            </h1>
            <p className='text-gray-700 leading-relaxed'>
              Wonderful Holidays & Events is a premier travel and destination management
              company dedicated to creating unforgettable experiences. We specialize in
              tailor-made holiday packages, sightseeing tours, airport transfers, and group
              arrangements, ensuring every journey is seamless and memorable. Our expert
              team combines local knowledge with exceptional service to deliver unique travel
              experiences, whether it’s a leisure getaway, a corporate event, or a special
              celebration. At Wonderful Holidays & Events, your dream holiday becomes a reality!
            </p>
          </div>

          {/* Right Section */}
          <div className='flex-1'>
            {/* Card 1 */}
            <div className='bg-black text-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-400'>
              <div className='flex flex-col md:flex-row items-start mb-4'>
                <img src={trip} alt='trip' className='w-20' />
                <div>
                  <h2 className='ml-2 text-2xl font-semibold mb-1 text-yellow-400'>
                    50+ Destinations
                  </h2>
                  <p className='text-gray-200 ml-2 lg:mr-28'>
                    We offer the best travel experiences with personalized services and unbeatable prices.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className='bg-black text-white p-6 my-4 rounded-lg shadow-lg border-l-4 border-yellow-400'>
              <div className='flex flex-col md:flex-row items-start mb-4'>
                <img src={price} alt='price' className='w-20' />
                <div>
                  <h2 className='ml-2 text-2xl font-semibold mb-1 text-yellow-400'>
                    Best Price
                  </h2>
                  <p className='text-gray-200 ml-2 lg:mr-28'>
                    We ensure top value for your money with flexible plans and transparent pricing.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className='bg-black text-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-400'>
              <div className='flex flex-col md:flex-row items-start mb-4'>
                <img src={time} alt='time' className='w-20' />
                <div>
                  <h2 className='ml-2 text-2xl font-semibold mb-1 text-yellow-400'>
                    Super Fast Booking
                  </h2>
                  <p className='text-gray-200 ml-2 lg:mr-28'>
                    Book your perfect trip in just a few clicks — fast, secure, and easy.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
