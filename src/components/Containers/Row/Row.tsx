import React, { FC } from 'react';

interface RowProps {
    children: React.ReactNode,
    className?: string
}

const Row: FC<RowProps> = ({children, className}) => {
    return (
        <div className={className ? 'section__row ' + `${className}` : 'section__row'}>
            {children}
        </div>
    );
};

export default Row;