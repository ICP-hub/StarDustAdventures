/*
    * Button Component for StarDust Adventures
    * This is a re-usable button component for the StarDust Adventures project
    * The button component has the following props:
        * variant: 'primary' | 'secondary'
        * size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
        * className: string
    * The button component is styled using Tailwind CSS
    * The button component is exported as default
    * clsx is used to combine multiple classes
    * @param {ButtonProps} props
    * @returns {JSX.Element}
    * @author @ArjunQBTech
    * @version 1.0
*/

import clsx from "clsx";
import './index.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    className?: string;
}

export default function Button(
    {
        children,
        variant = 'primary',
        size = 'md',
        className = '',
        ...props
    }: ButtonProps) {

    const sizes = {
        'sm': 'text-sm min-w-[100px] text-[20px]',
        'md': 'min-w-[185px] text-[30px]',
        'lg': 'text-base px-6 py-2',
        'xl' : 'text-lg px-8 py-3',
        'xxl' : 'text-xl px-10 py-3'
    }

    const vSpacing = {
        'sm': 'my-1',
        'md': 'my-2',
        'lg': 'my-3',
        'xl': 'my-4',
        'xxl': 'my-5'
    }
    
    return (
        <button {...props} className={clsx(
            variant,
            sizes[size],
            vSpacing[size],
            className,
            'button'
        )}>
            <div className={clsx(
                'button-children'
            )}>
            {children}
            </div>
        </button>
    )
}