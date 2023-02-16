import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from './../assets/AS.svg'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={logo} alt="Logo Img" style={{width: '70px'}}/>
        </div>

        {/* menu */}
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Resume</li>
            <li>Contact</li>
        </ul>

        {/* Hamburger */}
        <div className='md:hidden'>
            <FaBars />
        </div>

        {/* Mobile Menu */}
        <ul className='hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Resume</li>
            <li>Contact</li>
        </ul> 

        {/* Social icons */}
        <div class="hidden"></div>


    </div>
  )
}

export default Navbar