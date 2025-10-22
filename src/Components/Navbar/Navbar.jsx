import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';
import '../Navbar/Nacbar.css';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => setShowMenu(!showMenu)

    return (
        <header className='navbar'>
            <div className='navbar-inner'>
                <Link to='/' className='logo-link'>
                    <h1 className="company-logo">
                        WonderFull
                        <span className="sub-logo">HoliDays&Events</span>
                    </h1>
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
                        <button className='book-btn'>Book Now</button>
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
