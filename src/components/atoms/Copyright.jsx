// src/components/atoms/Copyright.js
import React from 'react';

const Copyright = () => {
    return (
        <p className="text-sm text-black bg-gray-100 py-4 border-t border-black">
            © {new Date().getFullYear()}. All rights reserved.
        </p>
    );
};

export default Copyright;
