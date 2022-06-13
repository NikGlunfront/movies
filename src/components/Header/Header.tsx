import React from 'react';
import {Link} from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'
import './Header.scss'
import Toggler from '../Toggler/Toggler';

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className='header__content'>
                    <Link className='header__logo' to={'/'}>
                        <span>Breaking Bad Series</span>
                    </Link>
                    <div className="header__btns">
                        <Toggler />
                        <div className='header__user-image'>
                            <FaUserCircle />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;