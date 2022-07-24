import React, { FC } from 'react';

interface SectionProps {
    className?: string,
    children: React.ReactNode
}

const Section: FC<SectionProps> = ({className, children}) => {
    return (
        <section className={className ? `section + ${className}` : 'section'}>
            <div className="container">
                {children}
            </div>
        </section>
    );
};

export default Section;