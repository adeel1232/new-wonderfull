import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';
import '../Navbar/Nacbar.css';
import logo from '../Navbar/abcd.jpg' 
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => setShowMenu(!showMenu)

    return (
        <header className='navbar'>
            <div className='navbar-inner'>
<Link 
  to='/' 
  className='logo-link flex items-center p-3 rounded-md transition-all duration-300 hover:bg-white hover:scale-110'
>
  <img 
    src={logo} 
    alt="Logo" 
    className='w-40 h-auto object-contain transition-transform duration-300'
  />
</Link>



                <div className='nav-right'>
                    <nav className='nav-menu'>
                        <ul>
                            <Link to='/'><li>Home</li></Link> 
                            <Link to='/about'><li>About Us</li></Link>
                            <Link to='/tours'><li>Tours</li></Link>
                            <Link to='/gallery'><li>Gallery</li></Link>
                            <Link to='/contact'><li>Contact</li></Link>
                        </ul>
                 <button
  onClick={() =>
    window.open(
      'https://wa.me/923004421603?text=Hello%20I%20want%20to%20book%20a%20tour',
      '_blank'
    )
  }
  className='bg-yellow-400 px-4 py-3 text-xs rounded text-black font-semibold hover:bg-black hover:text-yellow-400 transition-all duration-300 shadow-sm shadow-yellow-400/30 ml-4'
>
  Book Now
</button>



                    </nav>

                    <HiMenuAlt1 
                        onClick={toggleMenu} 
                        className='menu-icon'
                        size={30}
                    />
                </div>

                <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
            </div>
        </header>
    )
}

export default Navbar
