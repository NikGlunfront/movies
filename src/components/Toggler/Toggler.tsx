import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeTheme, Themes } from '../../store/slices/theme/themeSlice';
import './Toggler.scss';

const Toggler = () => {
    const [isChecked, setIsChecked] = useState<boolean>(true)
    const {theme} = useAppSelector(state => state.theme)
    const dispatch = useAppDispatch()

    function changeHandler() {
        setIsChecked(!isChecked)
        dispatch(changeTheme())
    }

    useEffect(() => {
        theme === Themes.LIGHT && setIsChecked(false)
    }, [theme])


    return (
        <div className="theme-toggler">
            <label htmlFor="theme-toggler">
                <input 
                    type="checkbox" 
                    id='theme-toggler'
                    onChange={changeHandler}
                />
                <span
                    className={[
                        'theme-toggler__checkbox', 
                        isChecked ? 'theme-toggler__checkbox_active' : ''
                    ].join(' ')}
                ></span>
                {isChecked ? 'Темная тема' : 'Светлая тема'}
            </label>
        </div>
    );
};

export default Toggler;