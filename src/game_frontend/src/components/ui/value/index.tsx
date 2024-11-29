import React, { ReactNode } from 'react';

interface ValueProps {
    children: ReactNode;
}

const Value: React.FC<ValueProps> = ({ children }) => {
    return (
        <div className='two-step-border h-10 w-[200px]'>
            {children}
        </div>
    );
}

export default Value;
