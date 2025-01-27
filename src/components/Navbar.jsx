import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
    return (
        <div className="navbar bg-light-primary dark:bg-dark-primary sm:fixed top-0 px-6 xs:sticky z-50">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl font-Playwrite text-light-secondary dark:text-dark-secondary">QRCode</Link>
            </div>
            <div className="flex-none ">
                <ul className="menu menu-horizontal px-1 pr-4 xs:hidden sm:flex">
                    <li><a href="#qr-generator" className=' xs:text-[12px] sm:text-lg  text-dark-primary dark:text-light-primary font-semibold'>Generator</a></li>
                    <li><a href="#qr-scanner" className='xs:text-[12px] sm:text-lg text-dark-primary dark:text-light-primary font-semibold'>Scanner</a></li>
                </ul>
                <ThemeToggle />
            </div>
        </div>
    )
}

export default Navbar
