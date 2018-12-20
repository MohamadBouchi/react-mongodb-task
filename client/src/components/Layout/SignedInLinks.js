import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className='right'>
            {/* <li><NavLink to='/createproject'>New Task</NavLink></li> */}
            <li><NavLink to='/'>Create Task</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>Mo</NavLink></li>
        </ul>
    );
};


export default SignedInLinks;