import React from 'react'
import contactImg from '../assets/ContactImg.jpg'

const Contact = () => {
  return (
    <div className='flex flex-col max-w-7xl mx-auto md:flex-row lg:h-screen items-center'>
      {/* Image Section */}
      <div className='flex-1 bg-black flex justify-center items-center'>
        <img
          src={contactImg}
          alt="Contact Us"
          className='w-full h-full max-w-md md:max-w-full object-cover opacity-90'
        />
      </div>

      {/* Contact Form Section */}
      <div className='flex-1 bg-white w-full flex flex-col justify-center px-8 py-12'>
        <h2 className='text-3xl font-bold text-black mb-6 border-b-4 border-yellow-400 inline-block pb-1'>
          Get in Touch
        </h2>

        <form className='space-y-6'>
          <div>
            <label htmlFor="name" className='block text-sm font-medium text-black'>
              Name
            </label>
            <input
              type="text"
              id='name'
              name='name'
              placeholder='Enter your name'
              className='mt-1 block w-full border border-black rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400 p-2 bg-white text-black'
              required
            />
          </div>

          <div>
            <label htmlFor="email" className='block text-sm font-medium text-black'>
              Email
            </label>
            <input
              type="email"
              id='email'
              name='email'
              placeholder='Enter your email'
              className='mt-1 block w-full border border-black rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400 p-2 bg-white text-black'
            />
          </div>

          <div>
            <label htmlFor="message" className='block text-sm font-medium text-black'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows='5'
              placeholder='Enter your message'
              className='mt-1 block w-full border border-black rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400 p-2 bg-white text-black'
              required
            />
          </div>

          <button
            type='submit'
            className='w-full bg-yellow-400 text-black py-2 px-4 rounded-md font-semibold hover:bg-black hover:text-yellow-400 transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
