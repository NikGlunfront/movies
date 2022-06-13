import React, { FC } from 'react';
import {Link} from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'
import './Header.scss'
import Toggler from '../Toggler/Toggler';

interface HeaderProps {
    setIsHeaderBlack: (isTrue: boolean) => void
}

const Header: FC<HeaderProps> = ({setIsHeaderBlack}) => {
    return (
        <header className='header'>
            <div className="container">
                <div className='header__content'>
                    <Link className='header__logo' to={'/'}>
                        <span>Breaking Bad Series</span>
                    </Link>
                    <div className="header__btns">
                        <Toggler setIsThemeBlack={setIsHeaderBlack} />
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