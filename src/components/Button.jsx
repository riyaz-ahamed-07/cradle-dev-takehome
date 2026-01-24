import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-dark shadow-[0px_0.5px_1px_rgba(102,109,128,0.2),0px_0px_0px_1.5px_#6E51E0] hover:shadow-lg",
        secondary: "bg-white text-secondary hover:bg-gray-50 border border-border",
        ghost: "text-secondary-gray hover:text-primary hover:bg-primary/5",
        link: "text-primary hover:text-primary-dark underline-offset-4 hover:underline"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-2.5 text-[15px]",
        lg: "px-8 py-3 text-base",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes['md']} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
