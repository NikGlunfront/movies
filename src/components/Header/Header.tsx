import React from 'react';
import {Link} from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'
import './Header.scss'

const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className='header__content'>
                    <Link className='header__logo' to={'/'}>
                        <span>Movie App</span>
                    </Link>
                    <div className='header__user-image'>
                        <FaUserCircle />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;