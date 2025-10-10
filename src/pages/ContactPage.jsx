import React, { useEffect, useState } from 'react';
import MainLayout from '../templates/MainLayout';

const ContactPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animations on component mount
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <MainLayout>
            <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen pt-20 relative overflow-hidden">
                {/* Background Animation Elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className={`absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full transition-all duration-1500 ${isVisible ? 'animate-pulse scale-100' : 'scale-0'}`} style={{ transitionDelay: '0.5s' }}></div>
                    <div className={`absolute top-32 right-20 w-32 h-32 border-2 border-gray-400 rounded-lg rotate-45 transition-all duration-1500 ${isVisible ? 'animate-bounce opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.7s' }}></div>
                    <div className={`absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-300 to-yellow-300 rounded-full transition-all duration-1500 ${isVisible ? 'animate-pulse opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.9s' }}></div>
                    <div className={`absolute bottom-32 right-1/3 w-28 h-28 border border-gray-500 rotate-12 transition-all duration-1500 ${isVisible ? 'animate-spin opacity-100' : 'opacity-0'}`} style={{ animationDuration: '20s', transitionDelay: '1.1s' }}></div>
                </div>

                {/* Floating Geometric Shapes */}
                <div className={`absolute top-16 right-1/4 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-400 opacity-20 rounded-lg transform rotate-45 transition-all duration-1500 ${isVisible ? 'animate-float scale-100' : 'scale-0'}`} style={{ transitionDelay: '1.3s' }}></div>
                <div className={`absolute bottom-24 left-1/3 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 opacity-20 rounded-full transition-all duration-1500 ${isVisible ? 'animate-float scale-100' : 'scale-0'}`} style={{ transitionDelay: '1.5s' }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                        {/* Left Side - Content */}
                        <div className={`space-y-6 sm:space-y-8 order-2 lg:order-1 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`} style={{transitionDelay: '0.3s'}}>
                            {/* Header */}
                            <div>
                                <h2 className={`text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 uppercase tracking-wide transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{transitionDelay: '0.5s'}}>
                                    FULL
                                </h2>
                                <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 mb-4 sm:mb-6 leading-none transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`} style={{transitionDelay: '0.7s'}}>
                                    CONTACT
                                </h1>
                                <p className={`text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{transitionDelay: '1.1s'}}>
                                    Anda bisa menghubungi saya langseung melalui:
                                </p>
                            </div>

                            {/* Social Media Links */}
                            <div className="space-y-3 sm:space-y-4">
                                <div className={`flex items-center space-x-3 sm:space-x-4 transform transition-all duration-600 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`} style={{transitionDelay: '1.3s'}}>
                                    <a
                                        href="https://github.com/maul43"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 sm:space-x-3 text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out group w-full animate-wave"
                                    >
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-lg flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-300 flex-shrink-0">
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </div>
                                        <span className="relative text-sm sm:text-base md:text-lg font-medium transition-all duration-300 ease-in-out">
                                            Github
                                            <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-black to-gray-800 transition-all duration-300 ease-in-out w-0 group-hover:w-full" />
                                        </span>
                                    </a>
                                </div>

                                <div className={`flex items-center space-x-3 sm:space-x-4 transform transition-all duration-600 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`} style={{transitionDelay: '1.5s'}}>
                                    <a
                                        href="https://www.tiktok.com/@maul_443?_t=ZS-90PnCgMIEqq&_r=1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 sm:space-x-3 text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out group w-full animate-wave"
                                    >
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-lg flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-300 flex-shrink-0">
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                                            </svg>
                                        </div>
                                        <span className="relative text-sm sm:text-base md:text-lg font-medium transition-all duration-300 ease-in-out">
                                            TikTok
                                            <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-black to-gray-800 transition-all duration-300 ease-in-out w-0 group-hover:w-full" />
                                        </span>
                                    </a>
                                </div>

                                <div className={`flex items-center space-x-3 sm:space-x-4 transform transition-all duration-600 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`} style={{transitionDelay: '1.7s'}}>
                                    <a
                                        href="https://www.instagram.com/maul_43_/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 sm:space-x-3 text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out group w-full animate-wave"
                                    >
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-lg flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-300 flex-shrink-0">
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </div>
                                        <span className="relative text-sm sm:text-base md:text-lg font-medium transition-all duration-300 ease-in-out">
                                            Instagram
                                            <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-black to-gray-800 transition-all duration-300 ease-in-out w-0 group-hover:w-full" />
                                        </span>
                                    </a>
                                </div>

                                <div className={`flex items-center space-x-3 sm:space-x-4 transform transition-all duration-600 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`} style={{transitionDelay: '1.9s'}}>
                                    <a
                                        href="mailto:anamaul019@gmail.com"
                                        className="flex items-center space-x-2 sm:space-x-3 text-gray-700 hover:text-gray-900 transition-all duration-300 ease-in-out group w-full animate-wave"
                                    >
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-lg flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-300 flex-shrink-0">
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <span className="relative text-sm sm:text-base md:text-lg font-medium transition-all duration-300 ease-in-out">
                                            Email : anamaul019@gmail.com
                                            <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-black to-gray-800 transition-all duration-300 ease-in-out w-0 group-hover:w-full" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Isometric Illustration */}
                        <div className={`relative flex items-center justify-center order-1 lg:order-2 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'}`} style={{transitionDelay: '0.5s'}}>
                            <div className="bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl transform rotate-1 hover:rotate-3 lg:rotate-3 lg:hover:rotate-6 transition-transform duration-500 animate-pulse-glow">
                                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 relative">
                                    {/* Isometric Office/Workspace Illustration Placeholder */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl sm:rounded-2xl shadow-inner">
                                        {/* Simplified isometric elements - Responsive sizes */}
                                        <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 w-10 sm:w-12 md:w-16 h-8 sm:h-10 md:h-12 bg-gray-600 rounded transform -skew-y-12 skew-x-12"></div>
                                        <div className="absolute top-6 sm:top-8 md:top-12 left-12 sm:left-16 md:left-24 w-12 sm:w-16 md:w-20 h-10 sm:h-12 md:h-16 bg-gray-500 rounded transform -skew-y-12 skew-x-12"></div>
                                        <div className="absolute top-10 sm:top-12 md:top-20 right-4 sm:right-6 md:right-8 w-8 sm:w-10 md:w-12 h-12 sm:h-16 md:h-20 bg-gray-400 rounded transform -skew-y-12 skew-x-12"></div>

                                        {/* Floating elements - Responsive */}
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-white rounded-lg shadow-lg flex items-center justify-center transform rotate-12 animate-pulse">
                                                <div className="text-2xl sm:text-3xl md:text-4xl">
                                                    📱
                                                </div>
                                            </div>
                                        </div>

                                        {/* Additional decorative elements - Responsive */}
                                        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-6 sm:left-8 md:left-12 w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                                        <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 right-8 sm:right-12 md:right-16 w-3 sm:w-4 md:w-6 h-3 sm:h-4 md:h-6 bg-gray-200 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CSS Animations */}
                <style>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-20px) rotate(5deg); }
                    }
                    @keyframes pulse-glow {
                        0%, 100% { 
                            box-shadow: 0 0 5px rgba(59, 130, 246, 0.2);
                            transform: scale(1);
                        }
                        50% { 
                            box-shadow: 0 0 20px rgba(59, 130, 246, 0.4), 0 0 30px rgba(168, 85, 247, 0.2);
                            transform: scale(1.02);
                        }
                    }
                    @keyframes wave {
                        0% { transform: rotate(0deg); }
                        10% { transform: rotate(2deg); }
                        20% { transform: rotate(-2deg); }
                        30% { transform: rotate(2deg); }
                        40% { transform: rotate(-1deg); }
                        50% { transform: rotate(1deg); }
                        60% { transform: rotate(0deg); }
                        100% { transform: rotate(0deg); }
                    }
                    @keyframes fade-in {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes slide-in-left {
                        from { opacity: 0; transform: translateX(-30px); }
                        to { opacity: 1; transform: translateX(0); }
                    }
                    @keyframes slide-in-right {
                        from { opacity: 0; transform: translateX(30px); }
                        to { opacity: 1; transform: translateX(0); }
                    }
                    @keyframes scale-in {
                        from { opacity: 0; transform: scale(0.8); }
                        to { opacity: 1; transform: scale(1); }
                    }
                    @keyframes bounce-in {
                        0% { opacity: 0; transform: scale(0.3); }
                        50% { opacity: 1; transform: scale(1.05); }
                        70% { transform: scale(0.9); }
                        100% { opacity: 1; transform: scale(1); }
                    }
                    
                    .animate-float { animation: float 6s ease-in-out infinite; }
                    .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
                    .animate-wave { animation: wave 2s ease-in-out; }
                    .animate-fade-in { animation: fade-in 1s ease-out; }
                    .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
                    .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
                    .animate-scale-in { animation: scale-in 0.8s ease-out; }
                    .animate-bounce-in { animation: bounce-in 1s ease-out; }
                    
                    /* Smooth scroll behavior */
                    html { scroll-behavior: smooth; }
                    
                    /* Staggered fade-in classes */
                    .fade-in-delayed-1 { animation: fade-in 0.8s ease-out 0.2s both; }
                    .fade-in-delayed-2 { animation: fade-in 0.8s ease-out 0.4s both; }
                    .fade-in-delayed-3 { animation: fade-in 0.8s ease-out 0.6s both; }
                    .fade-in-delayed-4 { animation: fade-in 0.8s ease-out 0.8s both; }
                    .fade-in-delayed-5 { animation: fade-in 0.8s ease-out 1.0s both; }
                    
                    /* Enhanced hover effects */
                    .group:hover .animate-wave {
                        animation: wave 0.6s ease-in-out;
                    }
                    
                    /* Glowing underline effect */
                    .group:hover span:last-child {
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    }
                `}</style>
            </div>
        </MainLayout>
    )
}

export default ContactPage;
