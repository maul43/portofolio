// src/components/organisms/Footer.js
import React from 'react';
import SocialMediaSection from '../molecules/SocialMediaSection';
import Copyright from '../atoms/Copyright';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-6  shadow-sm">
            <div className="container mx-auto text-center">
                {/* Copyright */}
                <div className="mt-4">
                    <Copyright />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
