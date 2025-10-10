// components/organisms/Navbar.js
import { useState } from 'react';
import Logo from '../atoms/Logo';
import NavMenu from '../molecules/NavMenu';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const links = [
        { label: 'ABOUT', href: '/about' },
        { label: 'PROJECT', href: '/projects' },
        { label: 'CONTACT', href: '/contact' },
    ];

    return (
        <header className="bg-[#F8FAFC] shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <Logo title="Maulana" />
                
                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <NavMenu links={links} />
                </div>
                
                 {/* Mobile Menu Button */}
                <button 
                    className="md:hidden flex flex-col space-y-1 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span className={`block w-6 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-black transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 overflow-hidden ${
                isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="backdrop-blur-lg bg-white border-t border-black px-6 py-4">
                    <div className="flex flex-col space-y-4">
                        {links.map((link, index) => (
                            <a 
                                key={index}
                                href={link.href}
                                className="text-black hover:text-gray-700 transition-colors duration-200 py-3 text-xl font-medium border-b border-black last:border-b-0"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
