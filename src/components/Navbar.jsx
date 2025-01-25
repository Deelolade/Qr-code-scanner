import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
    return (
        <div className="navbar bg-light-primary dark:bg-dark-primary fixed top-0 px-6">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl font-Playwrite text-light-secondary dark:text-dark-secondary">QRCode</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#qr-generator" className='text-dark-primary dark:text-light-primary font-semibold'>Generator</a></li>
                    <li><a href="#qr-scanner" className='text-dark-primary dark:text-light-primary font-semibold'>Scanner</a></li>
                    <ThemeToggle />
                </ul>
            </div>
        </div>
    )
}

export default Navbar
