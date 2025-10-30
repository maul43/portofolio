import React, { useEffect, useState } from 'react';
import MainLayout from '../templates/MainLayout';

const Portfolio = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animations on component mount
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);
    const projects = [
        {
            id: 1,
            title: "PG Transport",
            description: "Situs web catalog rental mobil modern dengan fitur-fitur desain responsif. Dibangun dengan Laravel dan Tailwindcss serta menggunakan database Mysql untuk kinerja optimal.",
            technologies: [
                "Laravel - Frontend & Backend",
                "tailwindcss - Styling",
                "Mysql - Database"
            ],
            category: "Full-Stack Web Development",
            icon: "",
            status: "Completed",
            duration: "",
            image: "/portofolio/image.png",
            link: "https://sewamobilblitar.com/"
        },
                {
            id: 2,
            title: "Bakso umami",
            description: "Situs web e-commerce Bakso Umami dengan fitur-fitur admin panel, pemesanan,desain responsif. Dibangun dengan Laravel dan Tailwindcss serta menggunakan database Mysql untuk kinerja optimal.",
            technologies: [
                "Laravel - Frontend & Backend",
                "tailwindcss - Styling",
                "Mysql - Database"
            ],
            category: "Full-Stack Web Development",
            icon: "",
            status: "Completed",
            duration: "",
            image: "/portofolio/image copy.png",
            link: "https://umamibakso.com/"
        }
    ];

    return (
        <MainLayout>
        <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen pt-20 relative overflow-hidden">
            {/* Background Animation Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className={`absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full transition-all duration-1500 ${isVisible ? 'animate-pulse scale-100' : 'scale-0'}`} style={{transitionDelay: '0.5s'}}></div>
                <div className={`absolute top-32 right-20 w-32 h-32 border-2 border-gray-400 rounded-lg rotate-45 transition-all duration-1500 ${isVisible ? 'animate-bounce opacity-100' : 'opacity-0'}`} style={{transitionDelay: '0.7s'}}></div>
                <div className={`absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-300 to-yellow-300 rounded-full transition-all duration-1500 ${isVisible ? 'animate-pulse opacity-100' : 'opacity-0'}`} style={{transitionDelay: '0.9s'}}></div>
                <div className={`absolute bottom-32 right-1/3 w-28 h-28 border border-gray-500 rotate-12 transition-all duration-1500 ${isVisible ? 'animate-spin opacity-100' : 'opacity-0'}`} style={{animationDuration: '20s', transitionDelay: '1.1s'}}></div>
            </div>

            {/* Floating Geometric Shapes */}
            <div className={`absolute top-16 right-1/4 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-400 opacity-20 rounded-lg transform rotate-45 transition-all duration-1500 ${isVisible ? 'animate-float scale-100' : 'scale-0'}`} style={{transitionDelay: '1.3s'}}></div>
            <div className={`absolute bottom-24 left-1/3 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 opacity-20 rounded-full transition-all duration-1500 ${isVisible ? 'animate-float scale-100' : 'scale-0'}`} style={{transitionDelay: '1.5s'}}></div>

            {/* Hero Section */}
            <section className="text-black py-20 relative z-10">
                <div className="container mx-auto px-6 text-center">
                    <h1 className={`text-4xl md:text-6xl font-bold mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`} style={{transitionDelay: '0.3s'}}>
                        MY PORTFOLIO
                    </h1>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20 relative z-10">

                <div className="container mx-auto px-6 relative">
                    {/* Central Timeline */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gray-400 via-gray-600 to-gray-800 hidden lg:block"></div>

                    <div className="max-w-7xl mx-auto space-y-20">
                        {projects.map((project, index) => (
                            <div key={project.id} className={`relative transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{transitionDelay: `${0.5 + (index * 0.3)}s`}}>
                                {/* Central Circle */}
                                <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 hidden lg:flex transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} style={{transitionDelay: `${0.7 + (index * 0.3)}s`}}>
                                    <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white z-10 animate-pulse-glow">
                                        <div className="text-white text-2xl font-bold">{project.id}</div>
                                    </div>
                                </div>

                                {/* Alternating Layout */}
                                <div className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}>
                                    {/* Image Card - Mobile First */}
                                    <div className={`lg:w-1/2 lg:px-8 order-1 lg:order-none transform transition-all duration-800 ${isVisible ? 'translate-x-0 opacity-100' : index % 2 === 0 ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'}`} style={{transitionDelay: `${0.6 + (index * 0.3)}s`}}>
                                        {project.image && (
                                            <div className="relative group">
                                                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                                                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform group-hover:-rotate-2 transition-all duration-500">
                                                    <div className="aspect-w-4 aspect-h-3 relative">
                                                        <img
                                                            src={project.image}
                                                            alt={`Project ${project.id}: ${project.title}`}
                                                            className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                                                            onError={(e) => {
                                                                e.target.src = 'https://via.placeholder.com/400x300/6b7280/ffffff?text=' + encodeURIComponent(project.title);
                                                            }}
                                                        />
                                                        {/* Gradient Overlay */}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-800/30 via-transparent to-transparent"></div>

                                                        {/* Floating Badge */}
                                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-gray-700 font-bold text-sm">
                                                            {project.icon}
                                                        </div>

                                                        {/* Status Indicator */}
                                                        <div className={`absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-semibold ${
                                                            project.status === 'Completed' ? 'bg-green-500 text-white' :
                                                            project.status === 'In Progress' ? 'bg-blue-500 text-white' :
                                                            'bg-yellow-500 text-white'
                                                        }`}>
                                                            {project.status}
                                                        </div>
                                                    </div>

                                                    {/* Image Caption */}
                                                    <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100">
                                                        <h4 className="font-bold text-gray-700 text-center mb-1">
                                                            {project.title}
                                                        </h4>
                                                        <p className="text-sm text-gray-500 text-center">
                                                            {project.category}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content Card */}
                                    <div className={`lg:w-1/2 lg:px-8 order-2 lg:order-none transform transition-all duration-800 ${isVisible ? 'translate-x-0 opacity-100' : index % 2 === 0 ? 'translate-x-full opacity-0' : '-translate-x-full opacity-0'}`} style={{transitionDelay: `${0.8 + (index * 0.3)}s`}}>
                                        <div className={`bg-white rounded-3xl shadow-2xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl ${index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'
                                            }`}>
                                            {/* Project Header */}
                                            <div className="flex items-center gap-4 mb-6 lg:hidden">
                                                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-white text-xl font-bold">
                                                    {project.id}
                                                </div>
                                                <div className="text-5xl">{project.icon}</div>
                                            </div>

                                            <div className="hidden lg:block text-6xl mb-4 text-center opacity-80">
                                                {project.icon}
                                            </div>

                                            {/* Status Badge */}
                                            <div className="flex justify-center lg:justify-start mb-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                    project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                                    project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                                    'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                    {project.status}
                                                </span>
                                            </div>

                                            <h3 className={`text-2xl lg:text-3xl font-bold text-gray-800 mb-2 text-center lg:text-left transform transition-all duration-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{transitionDelay: `${1.0 + (index * 0.3)}s`}}>
                                                {project.title}
                                            </h3>

                                            <p className={`text-sm text-gray-500 mb-4 text-center lg:text-left transform transition-all duration-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{transitionDelay: `${1.1 + (index * 0.3)}s`}}>
                                                {project.category} • {project.duration}
                                            </p>

                                            <p className={`text-gray-600 leading-relaxed mb-6 text-lg transform transition-all duration-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{transitionDelay: `${1.2 + (index * 0.3)}s`}}>
                                                {project.description}
                                            </p>

                                            {project.technologies && (
                                                <div className={`space-y-3 mb-6 transform transition-all duration-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{transitionDelay: `${1.3 + (index * 0.3)}s`}}>
                                                    <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                                                    {project.technologies.map((tech, techIndex) => (
                                                        <div key={techIndex} className={`flex items-start bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg p-4 transform transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} style={{transitionDelay: `${1.4 + (index * 0.3) + (techIndex * 0.1)}s`}}>
                                                            <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                            <span className="text-gray-700 font-medium text-sm">{tech}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Action Buttons */}
                                            <div className={`flex gap-3 mt-6 transform transition-all duration-600 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'}`} style={{transitionDelay: `${1.6 + (index * 0.3)}s`}}>
                                                {project.link ? (
                                                    <a 
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 border-2 border-gray-700 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-700 hover:text-white transition-all duration-200 text-center inline-block animate-wave"
                                                    >
                                                        Live Demo
                                                    </a>
                                                ) : (
                                                    <button 
                                                        className="flex-1 border-2 border-gray-400 text-gray-400 py-2 px-4 rounded-lg font-semibold cursor-not-allowed"
                                                        disabled
                                                    >
                                                        Coming Soon
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CSS Animations */}
            <style jsx>{`
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
                        transform: scale(1.05);
                    }
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
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slide-in-left {
                    from { opacity: 0; transform: translateX(-50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slide-in-right {
                    from { opacity: 0; transform: translateX(50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                
                .animate-float { animation: float 6s ease-in-out infinite; }
                .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
                .animate-wave { animation: wave 2s ease-in-out; }
                .animate-fade-in { animation: fade-in 1s ease-out; }
                .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
                .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
                
                /* Smooth scroll behavior */
                html { scroll-behavior: smooth; }
                
                /* Staggered fade-in classes */
                .fade-in-delayed-1 { animation: fade-in 0.8s ease-out 0.2s both; }
                .fade-in-delayed-2 { animation: fade-in 0.8s ease-out 0.4s both; }
                .fade-in-delayed-3 { animation: fade-in 0.8s ease-out 0.6s both; }
                .fade-in-delayed-4 { animation: fade-in 0.8s ease-out 0.8s both; }
            `}</style>
        </div>
        </MainLayout>
    );
};

export default Portfolio;


//status options:
//In Progress
//Completed