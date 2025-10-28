import React from 'react';

const OurTeam = () => {
    return (
        <section className="bg-black text-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
                        OUR SUBSYSTEMS
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto">
                        Our team has both Technical and Organizational divisions which are further divided into mechanical, electrical and driverless subdivisions
                    </p>
                </div>

                {/* Three subsystem images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* Electrical */}
                    <div className="relative group overflow-hidden rounded-lg">
                        <img
                            src="/new/os1.png"
                            alt="Electrical Subsystem"
                            className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                ELECTRICAL
                            </h3>
                        </div>
                    </div>

                    {/* Mechanical */}
                    <div className="relative group overflow-hidden rounded-lg">
                        <img
                            src="/new/os2.png"
                            alt="Mechanical Subsystem"
                            className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                MECHANICAL
                            </h3>
                        </div>
                    </div>

                    {/* Organisational */}
                    <div className="relative group overflow-hidden rounded-lg">
                        <img
                            src="/new/os3.png"
                            alt="Organisational Subsystem"
                            className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                ORGANISATIONAL
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Know More Button */}
                <div className="text-center">
                    <button className="bg-[#2d3bff] hover:bg-[#2430cc] text-white font-semibold text-lg px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
                        know more
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
