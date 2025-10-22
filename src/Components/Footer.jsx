import React from 'react'
import footer from '../assets/footer-pattern.jpg'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-10' 
    style={{
        backgroundImage: `url(${footer})`, 
        backgroundPosition:'bottom',
        backgroundSize: 'cover'
        }}>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div>
                <h1 className='font-bold text-4xl mb-4'><span className='text-red-500'>WONDERFUL</span></h1><h2><b>HoliDays&Events</b></h2>
                <p className='text-sm'>Start Planning Your Next Adventure.</p>
            </div>
            <div className='flex flex-col lg:items-center'>
                <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
                <ul className='space-y-2 text-sm'>
                    <li><a href="#" className='hover:underline'>Office</a></li>
                    <li><a href="#" className='hover:underline'>Destinations</a></li>
                    <li><a href="#" className='hover:underline'>Tours</a></li>
                    <li><a href="#" className='hover:underline'>About Us</a></li>
                    <li><a href="#" className='hover:underline'>Contact</a></li>
                </ul>
            </div>
            <div>
                <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
                <ul className='space-y-2 text-sm'>
                    <li>Eden Tower Main Boulevard Gulberg, Lahore</li>
                    <li>Phone:+92 300 4421603</li>
                    <li>Email: info@wonderfulholidaysandevents.net</li>
                </ul>
            </div>
            <div>
                <h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
                <div className='flex space-x-4 '>
                    <FaFacebook className='hover:text-red-500'/>
                    <FaInstagram className='hover:text-red-500'/>
                    <FaTwitter className='hover:text-red-500'/>
                </div>
            </div>
        </div>
        <div className='mt-8 pt-8 border-t border-gray-700 text-center justify-end text-sm'>
            <p>&copy; {new Date().getFullYear()} TravelEase. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
