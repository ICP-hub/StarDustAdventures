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

    // const sizes = {
    //     'sm': 'text-sm px-2 py-1',
    //     'md': 'text-md px-4 py-1',
    //     'lg': 'text-base px-6 py-2',
    //     'xl' : 'text-lg px-8 py-3',
    //     'xxl' : 'text-xl px-10 py-3'
    // }

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
            size,
            vSpacing[size],
            className,
            'button'
        )}>
            <div className="button-children">
            {children}
            </div>
        </button>
    )
}