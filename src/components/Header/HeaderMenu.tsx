import React, { FC } from 'react';
import SimpleBar from 'simplebar-react';
import HeaderMenuItem from './HeaderMenuItem';

interface HeaderMenuProps {
    isMenuVisible: boolean,
}

const HeaderMenu: FC<HeaderMenuProps> = ({isMenuVisible}) => {
    
    
    return (
        <div className={
            [
                'movie-to-watch',
                isMenuVisible && 'movie-to-watch_visible'
            ].join(' ')
        }>
            <div className="movie-to-watch__title">Добавленные к просмотру:</div>
            <SimpleBar style={{ maxHeight: 450 }}>
                <HeaderMenuItem />
                <HeaderMenuItem />
                <HeaderMenuItem />
                <HeaderMenuItem />
                <HeaderMenuItem />
                <HeaderMenuItem />
            </SimpleBar>
        </div>
    );
};

export default HeaderMenu;