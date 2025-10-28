import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background video or image */}
            <div className="absolute inset-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/new/home.mp4" type="video/mp4" />
                </video>
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-wider mb-6">
                    IIT BOMBAY RACING
                </h1>
                <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-semibold">
                    #Racing Up The Ladder
                </p>
            </div>
        </section>
    );
};

export default Hero;
