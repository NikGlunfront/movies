import React, { FC, useEffect, useState } from 'react';
import './Toggler.scss';

interface TogglerProps {
    setIsThemeBlack: (isTrue:boolean) => void
}

const Toggler: FC<TogglerProps> = ({setIsThemeBlack}) => {
    const [isChecked, setIsChecked] = useState<boolean>(true)

    function changeHandler() {
        setIsChecked(!isChecked)
    }

    useEffect(() => {
        setIsThemeBlack(isChecked)
    }, [isChecked])

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
                {isChecked ? 'Dark Theme' : 'Light Theme'}
            </label>
        </div>
    );
};

export default Toggler;