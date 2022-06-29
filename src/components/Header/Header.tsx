import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {GoPlay} from 'react-icons/go'
import './Header.scss'
import Toggler from '../Toggler/Toggler';
import 'simplebar/dist/simplebar.min.css';
import HeaderMenu from './HeaderMenu';
import { useAppSelector } from '../../hooks/redux';



const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)
    const {activeEpisodes} = useAppSelector(state => state.activeEpisodes)

    function toggleMenu() {
        setIsMenuVisible(!isMenuVisible)
    }

    function closeMenu() {
        setIsMenuVisible(false)
    }

    return (
        <header className='header'>
            <div className="container">
                <HeaderMenu 
                    isMenuVisible={isMenuVisible} 
                    activeEpisodes={activeEpisodes}
                    closeMenu={closeMenu}
                />
                <div className='header__content'>
                    <Link className='header__logo' to={'/'}>
                        <span>Breaking Bad Series</span>
                    </Link>
                    <div className="header__btns">
                        <Toggler />
                        <div 
                            className='header__user-image'
                            onClick={toggleMenu}
                        >
                            <GoPlay />
                            <span>{activeEpisodes.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;