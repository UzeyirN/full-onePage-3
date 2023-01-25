import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <div className='navbar-wrapper'>
                <ul className='nav-ul'><Link to='' className='nav-link'><li style={{fontSize:"1.5em"}}>Floral Studio</li></Link></ul>
                <ul className='nav-ul'>
                    <Link to='' className='nav-link'><li>Home</li></Link>
                    <Link to='about' className='nav-link'><li>About Us</li></Link>
                    <Link to='portfolio' className='nav-link'><li>Portfolio</li></Link>
                    <Link to='pricing' className='nav-link'><li>Pricing</li></Link>
                    <Link to='contact' className='nav-link'><li>Contact</li></Link>
                    <Link to='add' className='nav-link'><li>Add</li></Link>
                </ul>
            </div>
        </>
    )
}

export default Navbar