// components/atoms/NavLink.jsx
import React from 'react';

const NavLink = ({ label, href, isActive = false }) => {
    return (
        <a
            href={href}
            className={`
                relative text-lg font-medium transition-all duration-300 ease-in-out
                ${isActive 
                    ? 'text-[#000000]' 
                    : 'text-black hover:text-[#000000]'
                }
                group
            `}
        >
            {label}
            <span 
                className={`
                    absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-black to-gray-800
                    transition-all duration-300 ease-in-out
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                `}
            />
        </a>
    );
};

export default NavLink;