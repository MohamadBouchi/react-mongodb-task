import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="navbar-fixed">
            <nav className='nav-wrapper grey darken-3 navbar-fixed'>
                <div className='container'>
                    <Link to='/' className='brand-logo'>Start</Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;