// src/components/atoms/SocialIcon.js
import React from 'react';
import PropTypes from 'prop-types';

const SocialIcon = ({ href, children }) => {
    return (
        <a
            href={href}
            className="text-black hover:text-gray-400 transition duration-200"
            target="_blank"
            rel="noopener noreferrer">
            {children}
        </a>
    );
};

SocialIcon.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired, // Ikon yang akan dirender
};

export default SocialIcon;
