// pages/HomePage.js
import React, { useEffect, useState } from 'react';
import TechStack from '../components/organisms/TechStack';
import MainLayout from '../templates/MainLayout';

const HomePage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [profileLoaded, setProfileLoaded] = useState(false);

    useEffect(() => {
        // Trigger animations on component mount
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <MainLayout>
            <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center min-h-screen relative overflow-hidden">
                {/* Background Animation Elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className={`absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full transition-all duration-1500 ${isVisible ? 'animate-pulse scale-100' : 'scale-0'}`}></div>
                    <div className={`absolute top-32 right-20 w-32 h-32 border-2 border-gray-400 rounded-lg rotate-45 transition-all duration-1500 ${isVisible ? 'animate-bounce opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}></div>
                    <div className={`absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-300 to-yellow-300 rounded-full transition-all duration-1500 ${isVisible ? 'animate-pulse opacity-100' : 'opacity-0'}`} style={{ animationDelay: '1s' }}></div>
                    <div className={`absolute bottom-32 right-1/3 w-28 h-28 border border-gray-500 rotate-12 transition-all duration-1500 ${isVisible ? 'animate-spin opacity-100' : 'opacity-0'}`} style={{ animationDuration: '20s', animationDelay: '1.5s' }}></div>
                </div>

                {/* Floating Geometric Shapes */}
                <div className={`absolute top-16 right-1/4 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-400 opacity-20 rounded-lg transform rotate-45 transition-all duration-1500 ${isVisible ? 'animate-float scale-100' : 'scale-0'}`} style={{ transitionDelay: '0.8s' }}></div>
                <div className={`absolute bottom-24 left-1/3 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 opacity-20 rounded-full transition-all duration-1500 ${isVisible ? 'animate-float scale-100' : 'scale-0'}`} style={{ transitionDelay: '1.2s' }}></div>

                <div className={`bg-gray-100 max-w-4xl shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
                    <div className={`md:w-1/2 overflow-hidden transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                        <img
                            src="/assets/Gambar WhatsApp 2025-10-10 pukul 02.45.34_55ba499e.jpg"
                            alt="Profile Photo"
                            className={`w-full h-full object-cover transform transition-all duration-1500 ${profileLoaded ? 'scale-100' : 'scale-110'}`}
                            onLoad={() => setProfileLoaded(true)}
                        />
                    </div>

                    <div className={`md:w-1/2 p-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                        <p className={`text-gray-400 text-sm uppercase mb-2 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>Hello Everybody, I am</p>
                        <h1 className={`text-4xl font-bold text-gray-800 mb-2 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '0.4s' }}>Maulana Dainuri</h1>
                        <h2 className={`text-sm font-semibold text-gray-600 mb-4 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '0.6s' }}>Web Developer | UI/UX Designer</h2>
                        <h3 className={`text-2xl font-bold text-gray-800 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '0.8s' }}>ABOUT ME</h3>
                        <p className={`text-gray-600 leading-relaxed mb-6 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '1s' }}>
                            Saya adalah lulusan baru program studi Administrasi Server dan Jaringan Komputer (ASJK) dengan semangat tinggi untuk terlibat dalam dunia teknologi. Memiliki pemahaman tentang pengembangan web, desain UI/UX, perancangan sistem, dan basis data SQL, saya siap untuk menyumbangkan ide kreatif dan energi positif saya.
                        </p>

                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li className={`flex items-center transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} style={{ transitionDelay: '1.4s' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                                <span className="ml-2">anamaul019@gmail.com</span>
                            </li>
                            <li className={`flex items-center transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} style={{ transitionDelay: '1.4s' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                                <span className="ml-2">Blitar, Jawa Timur, Indonesia</span>
                            </li>
                            <li className={`flex items-center transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} style={{ transitionDelay: '1.2s' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-school"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2v-6" /><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" /></svg>
                                <span className="ml-2">AKN Putra Sang Fajar Blitar (AKB)</span>
                            </li>
                            <li className={`flex items-center transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} style={{ transitionDelay: '1.6s' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                <span className="ml-2">
                                    <a href="https://github.com/maul43" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline transition-colors duration-300">
                                        github.com/maul43
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Tech Stacks Section */}
            <section className={`relative py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '1.8s' }}>
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className={`absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full transition-all duration-1500 ${isVisible ? 'animate-pulse scale-100' : 'scale-0'}`} style={{ transitionDelay: '2s' }}></div>
                    <div className={`absolute top-32 right-20 w-32 h-32 border-2 border-gray-400 rounded-lg rotate-45 transition-all duration-1500 ${isVisible ? 'animate-bounce opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '2.2s' }}></div>
                    <div className={`absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-300 to-yellow-300 rounded-full transition-all duration-1500 ${isVisible ? 'animate-pulse opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '2.4s' }}></div>
                    <div className={`absolute bottom-32 right-1/3 w-28 h-28 border border-gray-500 rotate-12 transition-all duration-1500 ${isVisible ? 'animate-spin opacity-100' : 'opacity-0'}`} style={{ animationDuration: '20s', transitionDelay: '2.6s' }}></div>
                </div>

                {/* Floating Geometric Shapes */}
                <div className={`absolute top-16 right-1/4 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-400 opacity-20 rounded-lg transform rotate-45 transition-all duration-1500 ${isVisible ? 'animate-float scale-100' : 'scale-0'}`} style={{ transitionDelay: '2.8s' }}></div>
                <div className={`absolute bottom-24 left-1/3 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 opacity-20 rounded-full transition-all duration-1500 ${isVisible ? 'animate-float scale-100' : 'scale-0'}`} style={{ transitionDelay: '3s' }}></div>

                <div className="container mx-auto text-center px-4 relative z-10">
                    {/* Section Header with Animation */}
                    <div className="mb-16 md:mb-20">
                        {/* Main Title */}
                        <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-black mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-110'}`} style={{ transitionDelay: '2.2s' }}>
                            MY TOOLBOX
                        </h2>

                        {/* Subtitle */}
                        <div className={`inline-block mb-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`} style={{ transitionDelay: '2s' }}>
                            <span className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full tracking-wide uppercase">
                                Technologies & Tools
                            </span>
                        </div>

                        {/* Animated Underline */}
                        <div className={`flex justify-center mb-8 transform transition-all duration-1000 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} style={{ transitionDelay: '2.4s' }}>
                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-900 to-transparent animate-pulse"></div>
                        </div>

                        {/* Description */}
                        <p className={`text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '2.6s' }}>
                            Kumpulan teknologi dan alat canggih yang saya gunakan untuk mewujudkan ide dan menciptakan pengalaman digital yang luar biasa.
                        </p>
                    </div>

                    {/* Tech Stack Component with Enhanced Container */}
                    <div className="relative">
                        {/* Glow Effect Background */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-3xl blur-xl transform transition-all duration-1500 ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`} style={{ transitionDelay: '2.8s' }}></div>

                        {/* Tech Stack Container */}
                        <div className={`relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`} style={{ transitionDelay: '3s' }}>
                            <TechStack />
                        </div>

                        {/* Floating Code Symbols */}
                        <div className={`absolute -top-4 -left-4 text-6xl text-gray-300 opacity-50 select-none transform transition-all duration-1000 ${isVisible ? 'rotate-0 opacity-50 animate-pulse' : 'rotate-45 opacity-0'}`} style={{ transitionDelay: '3.2s' }}>{'<'}</div>
                        <div className={`absolute -top-4 -right-4 text-6xl text-gray-300 opacity-50 select-none transform transition-all duration-1000 ${isVisible ? 'rotate-0 opacity-50 animate-pulse' : '-rotate-45 opacity-0'}`} style={{ transitionDelay: '3.4s' }}>{'>'}</div>
                        <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-4xl text-gray-300 opacity-50 select-none transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-50 animate-bounce' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '3.6s' }}>{'/>'}</div>
                    </div>
                </div>

                {/* CSS Animations */}
                <style jsx>{`
                        @keyframes float {
                            0%, 100% { transform: translateY(0px) rotate(0deg); }
                            50% { transform: translateY(-20px) rotate(5deg); }
                        }
                        @keyframes fade-in {
                            from { opacity: 0; }
                            to { opacity: 1; }
                        }
                        @keyframes slide-up {
                            from { opacity: 0; transform: translateY(30px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                        @keyframes fade-in-up {
                            from { opacity: 0; transform: translateY(40px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                        @keyframes pulse-glow {
                            0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.2); }
                            50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.4), 0 0 30px rgba(168, 85, 247, 0.2); }
                        }
                        @keyframes wave {
                            0% { transform: rotate(0deg); }
                            10% { transform: rotate(14deg); }
                            20% { transform: rotate(-8deg); }
                            30% { transform: rotate(14deg); }
                            40% { transform: rotate(-4deg); }
                            50% { transform: rotate(10deg); }
                            60% { transform: rotate(0deg); }
                            100% { transform: rotate(0deg); }
                        }
                        
                        .animate-float { animation: float 6s ease-in-out infinite; }
                        .animate-fade-in { animation: fade-in 1s ease-out; }
                        .animate-slide-up { animation: slide-up 1s ease-out; }
                        .animate-fade-in-up { animation: fade-in-up 1s ease-out both; }
                        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
                        .animate-wave { animation: wave 2s ease-in-out; }
                        
                        /* Smooth scroll behavior */
                        html { scroll-behavior: smooth; }
                        
                        /* Custom fade in classes */
                        .fade-in-delayed-1 { animation: fade-in 0.8s ease-out 0.2s both; }
                        .fade-in-delayed-2 { animation: fade-in 0.8s ease-out 0.4s both; }
                        .fade-in-delayed-3 { animation: fade-in 0.8s ease-out 0.6s both; }
                    `}</style>
            </section>
        </MainLayout>
    );
};

export default HomePage;