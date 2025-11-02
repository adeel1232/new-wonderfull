import React from 'react'
import footer from '../assets/footer-pattern.jpg'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer
      className='bg-black text-white py-10'
      style={{
        backgroundImage: `url(${footer})`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
      }}
    >
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {/* Brand Section */}
          <div>
            <h1 className='font-bold text-4xl mb-2 text-yellow-400'>
              WONDERFUL
            </h1>
            <h2 className='text-xl font-semibold text-white mb-2'>
              Holidays & Events
            </h2>
            <p className='text-sm text-gray-300'>
              Start planning your next adventure.
            </p>
          </div>

          {/* Quick Links */}
          <div className='flex flex-col lg:items-center'>
            <h3 className='text-lg font-semibold mb-4 text-yellow-400'>
              Quick Links
            </h3>
            <ul className='space-y-2 text-sm'>
              <li><a href="#" className='hover:text-yellow-400 transition-colors'>Office</a></li>
              <li><a href="#" className='hover:text-yellow-400 transition-colors'>Destinations</a></li>
              <li><a href="#" className='hover:text-yellow-400 transition-colors'>Tours</a></li>
              <li><a href="#" className='hover:text-yellow-400 transition-colors'>About Us</a></li>
              <li><a href="#" className='hover:text-yellow-400 transition-colors'>Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold mb-4 text-yellow-400'>
              Contact Us
            </h3>
            <ul className='space-y-2 text-sm text-gray-300'>
              <li>Eden Tower, Main Boulevard Gulberg, Lahore</li>
              <li>Phone: +92 300 4421603</li>
              <li>Email: info@wonderfulholidaysandevents.net</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4 text-yellow-400'>
              Follow Us
            </h3>
            <div className='flex space-x-4'>
              <FaFacebook className='hover:text-yellow-400 transition-transform transform hover:scale-110 cursor-pointer' />
              <FaInstagram className='hover:text-yellow-400 transition-transform transform hover:scale-110 cursor-pointer' />
              <FaTwitter className='hover:text-yellow-400 transition-transform transform hover:scale-110 cursor-pointer' />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400'>
          <p>
            &copy; {new Date().getFullYear()} <span className='text-yellow-400 font-medium'>Wonderful Holidays & Events</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
