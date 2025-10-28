import React from 'react';

const OurSystem = () => {
    return (
        <section className="bg-black text-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
                        OUR SUBSYSTEMS
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto">
                        Our team has both Technical and Organizational divisions which are further divided into mechanical, electrical and driverless subdivisions
                    </p>
                </div>

                {/* Three overlapping subsystem images */}
                <div className="relative flex items-center justify-center mb-16 px-4">
                    <div className="relative w-full max-w-6xl h-[400px] md:h-[500px]">
                        {/* Electrical - Left, behind */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[35%] md:w-[40%] z-10">
                            <div className="relative group overflow-hidden rounded-lg shadow-2xl">
                                <img
                                    src="/new/os1.png"
                                    alt="Electrical Subsystem"
                                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                                        ELECTRICAL
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Mechanical - Center, largest and on top */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] md:w-[50%] z-30">
                            <div className="relative group overflow-hidden rounded-lg shadow-2xl">
                                <img
                                    src="/new/os2.png"
                                    alt="Mechanical Subsystem"
                                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                                        MECHANICAL
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Business/Organisational - Right, behind */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[35%] md:w-[40%] z-10">
                            <div className="relative group overflow-hidden rounded-lg shadow-2xl">
                                <img
                                    src="/new/os3.png"
                                    alt="Business Subsystem"
                                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <div className="absolute bottom-4 right-4">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                                        BUSINESS
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Know More Button */}
                <div className="text-center mt-8">
                    <button className="bg-[#2d3bff] hover:bg-[#2430cc] text-white font-semibold text-lg px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                        know more
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OurSystem;
