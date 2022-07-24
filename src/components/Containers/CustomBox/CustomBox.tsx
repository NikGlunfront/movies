import React, { FC } from 'react';

interface CustomBoxProps {
    className?: string,
    children: React.ReactNode
}

const CustomBox:FC<CustomBoxProps> = ({children, className}) => {
    return (
        <div className={className ? 'custom-box ' + `${className}` : 'custom-box'}>
            {children}
        </div>
    );
};

export default CustomBox;