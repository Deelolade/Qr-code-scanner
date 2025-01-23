import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl font-Playwrite">QRCode</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Generator</Link></li>
                    <li><Link to="/scanner">Scanner </Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
