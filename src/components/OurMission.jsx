import React from 'react';

const OurMission = () => {
    return (
        <section className="bg-black text-white py-16 md:py-24">
            {/* Our Mission Title with background */}
            <div className="relative mb-16">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    // style={{ backgroundImage: "url('/new/om1.png')" }}
                />
                <div className="absolute inset-0 bg-black/70" />
                <div className="relative  text-center">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">
                        OUR MISSION
                    </h2>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 space-y-4">
                                {/* Electrifying Innovation */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <img
                            src="/new/om1.png"
                            alt="Electrifying Innovation"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">
                            ELECTRIFYING INNOVATION
                        </h3>
                        <p className="text-lg md:text-xl text-white/90">
                            We were the first team to move to EV category in India, making the shift in 2012, from there we have only increase our excellence in our electrical systems and powertrains.
                        </p>
                    </div>
                </div>
                {/* Driving India's Green Revolution */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">
   SPEEDING TOWARDS EXCELLENCE
                        </h3>
                        <p className="text-lg md:text-xl text-white/90">
We're on a mission to achieve excellence in Formula Student Electric racing, showcasing our cutting-edge designs on a global stage.
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                        <img
                            src="/new/om2.png"
                            alt="Green Revolution"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>

                {/* Speeding towards excellence  */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <img
                            src="/new/om3.png"
                            alt="Speeding Towards Excellence"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">
Driving India's Green Revolution                        </h3>
                        <p className="text-lg md:text-xl text-white/90">
Our mission is to revolutionize electric mobility in India, one race at a time, with eco-friendly and high-performance electric cars.
                        </p>
                    </div>
                </div>

                {/* Speeding Towards Excellence */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">
Engineering the Future
                        </h3>
                        <p className="text-lg md:text-xl text-white/90">
At IIT Bombay Racing, we're on a mission to engineer a brighter, greener future through innovation, dedication, and teamwork.
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                        <img
                            src="/new/om4.png"
                            alt="Speeding Towards Excellence"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>

                {/* Engineering the Future */}
                {/* <div className="text-center py-12">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">
                        Engineering the Future
                    </h3>
                    <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto">
                        At IIT Bombay Racing, we're on a mission to engineer a brighter, greener future through innovation, dedication, and teamwork.
                    </p>
                </div> */}
            </div>
        </section>
    );
};

export default OurMission;
