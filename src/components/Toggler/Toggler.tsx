import React, { useEffect, useState } from 'react';
import './Toggler.scss';

const Toggler = () => {
    const [isChecked, setIsChecked] = useState<boolean>(true)

    function changeHandler() {
        setIsChecked(!isChecked)
    }

    useEffect(() => {
        console.log(isChecked)
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