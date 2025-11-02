import React from 'react'
import { useNavigate } from 'react-router-dom'
import banner from '../assets/banner.jpg'

const Banner = () => {
  const navigate = useNavigate()

  const handleStartPlanning = () => {
    navigate('/tours') // navigate to Tours page
  }

  return (
    <div
      className='h-[500px] relative flex items-center'
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black opacity-70'></div>

      {/* Content */}
      <div className='relative text-white flex flex-col items-center justify-center px-4 lg:px-0 text-center max-w-7xl mx-auto z-20'>
        <h2 className='lg:text-6xl text-4xl font-bold mb-6 text-yellow-400'>
          Ready to Start Your Adventure?
        </h2>
        <p className='text-lg mb-8 text-gray-200 max-w-2xl'>
          Book your dream vacation today and create unforgettable memories.
        </p>
        <button
          onClick={handleStartPlanning}
          className='bg-yellow-400 px-6 py-3 rounded-md text-black font-semibold hover:bg-black hover:text-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-400/40'
        >
          Start Planning
        </button>
      </div>
    </div>
  )
}

export default Banner
