


const TechStack = () => {
    const techData = [
        { src: "https://logo.svgcdn.com/d/php-original.png", alt: "PHP", name: "PHP", category: "Backend" },
        { src: "https://logo.svgcdn.com/d/laravel-original-8x.png", alt: "Laravel", name: "Laravel", category: "Framework" },
        { src: "https://logo.svgcdn.com/d/javascript-plain-8x.png", alt: "JavaScript", name: "JavaScript", category: "Language" },
        { src: "https://logo.svgcdn.com/d/react-original-wordmark-8x.png", alt: "React", name: "React", category: "Library" },
        { src: "https://logo.svgcdn.com/d/tailwindcss-original-8x.png", alt: "Tailwind CSS", name: "Tailwind CSS", category: "Styling" },
        { src: "https://logo.svgcdn.com/d/github-original-wordmark-8x.png", alt: "GitHub", name: "GitHub", category: "Version Control" },
        { src: "https://logo.svgcdn.com/d/docker-plain-wordmark-8x.png", alt: "Docker", name: "Docker", category: "DevOps" },
        { src: "https://logo.svgcdn.com/s/hoppscotch-dark-8x.png", alt: "Hoppscotch", name: "Hoppscotch", category: "API Testing" },
        { src: "https://logo.svgcdn.com/d/mysql-original-wordmark.png", alt: "MySQL", name: "MySQL", category: "Database" },
        { src: "https://logo.svgcdn.com/d/vscode-original-wordmark.png", alt: "Visual Studio Code", name: "VS Code", category: "Editor" }
    ];

    return (
        <div className="relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-8 w-20 h-20 border border-gray-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 right-12 w-16 h-16 bg-gray-300 rounded-lg rotate-45 animate-bounce" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-12 right-20 w-12 h-12 border-2 border-gray-500 rotate-12 animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>

            {/* Tech Stack Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto relative px-4">
                {techData.map((tech, index) => (
                    <div 
                        key={tech.name}
                        className="group relative flex flex-col items-center"
                        style={{animationDelay: `${index * 0.1}s`}}
                    >
                        {/* Animated Background Circle */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-110 blur-sm group-hover:blur-none"></div>
                        
                        {/* Tech Logo Container */}
                        <div className="relative p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-3">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                            
                            {/* Logo */}
                            <img 
                                src={tech.src} 
                                alt={tech.alt} 
                                className="relative z-10 mx-auto h-6 sm:h-8 md:h-10 lg:h-12 w-auto transition-all duration-500 group-hover:drop-shadow-lg"
                            />
                            
                            {/* Floating Particles */}
                            <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                            <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{animationDelay: '0.5s'}}></div>
                        </div>

                        {/* Tooltip - Hidden on Mobile, Visible on Tablet+ */}
                        <div className="hidden sm:block absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none">
                            <div className="bg-gray-900 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-lg shadow-lg text-xs sm:text-sm whitespace-nowrap">
                                <div className="font-semibold">{tech.name}</div>
                                <div className="text-xs text-gray-300">{tech.category}</div>
                                
                                {/* Tooltip Arrow */}
                                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                            </div>
                        </div>

                        {/* Mobile Label - Visible only on Mobile */}
                        <div className="sm:hidden mt-1 text-center">
                            <div className="text-xs font-medium text-gray-700 truncate max-w-12">{tech.name}</div>
                        </div>

                        {/* Progress Bar Animation */}
                        <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-6 sm:group-hover:w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-700 rounded-full"></div>
                    </div>
                ))}
            </div>

            {/* Floating Elements - Hidden on Mobile */}
            <div className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
                <div className="w-24 lg:w-32 h-24 lg:h-32 border border-gray-200 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
            </div>
            <div className="hidden md:block absolute top-1/4 right-0 transform translate-x-1/2">
                <div className="w-16 lg:w-24 h-16 lg:h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg rotate-45 animate-pulse"></div>
            </div>
        </div>
    );
};

export default TechStack;