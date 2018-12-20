import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import './Navbar.css';
import NewTaskModal from '../Modals/NewTaskModal';

const Navbar = () => {
    return (
        <div className="navbar-fixed">
            <nav className='nav-wrapper grey darken-3 navbar-fixed'>
                <div className='container'>
                    <Link to='/' className='brand-logo'>Start</Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                    <NewTaskModal />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;