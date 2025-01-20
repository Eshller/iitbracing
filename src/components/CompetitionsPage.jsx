import React from 'react'
import Header from './Header'
import Footer from './Footer'

const CompetitionsPage = () => {
    return (
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <Header />
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section with Parallax-like effect */}
                <div className="relative overflow-hidden bg-[#166db4] text-white">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#166db4]/90 to-[#166db4] opacity-90" />
                    <div className="container mx-auto px-4 py-32 relative transform">
                        <h1 className="text-5xl font-bold mb-4 ">
                            The Competition
                        </h1>
                        <div className="w-20 h-1 bg-yellow-400 mb-8" />
                        <p className="text-xl max-w-3xl">
                            Experience the pinnacle of student motorsport engineering through prestigious international competitions.
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-16">
                    {/* FSUK Section */}
                    <div className="mb-16 transform transition-all duration-500 hover:-translate-y-2">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800 hover:text-blue-900 transition-colors duration-300">
                            Formula Student United Kingdom
                        </h2>
                        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-500">
                            <p className="text-gray-700 mb-6">
                                Formula Student is a prestigious international student engineering competition organized annually by the Institution of Mechanical Engineers (IMechE). It challenges university teams from around the globe to design, build, and race formula-style vehicles, highlighting their technical innovation, teamwork, and engineering expertise.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-500 hover:bg-blue-50">
                                    <h3 className="text-xl font-semibold mb-4 text-[#166db4]">Competition Highlights</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        {['Held at the iconic Silverstone Circuit',
                                            'Over 100 teams from 30+ countries',
                                            'Comprehensive evaluation of design and performance',
                                            'Focus on engineering innovation'].map((item, index) => (
                                                <li key={index} className="flex items-center space-x-2 transform transition-all duration-300 hover:translate-x-2">
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-500 hover:bg-blue-50">
                                    <h3 className="text-xl font-semibold mb-4 text-[#166db4]">Event Features</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        {['Technical innovation assessment',
                                            'Financial planning evaluation',
                                            'Business strategy presentation',
                                            'Dynamic performance testing'].map((item, index) => (
                                                <li key={index} className="flex items-center space-x-2 transform transition-all duration-300 hover:translate-x-2">
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FS-AI Section */}
                    <div className="mb-16 transform transition-all duration-500 hover:-translate-y-2">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800 hover:text-[#166db4] transition-colors duration-300">
                            Formula Student AI
                        </h2>
                        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-500">
                            <p className="text-gray-700 mb-6">
                                The Formula Student AI (FS-AI) competition represents the cutting edge of autonomous racing technology, combining traditional engineering challenges with artificial intelligence and autonomous vehicle development.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-lg mb-6 transform transition-all duration-500 hover:bg-[#166db4]">
                                <h3 className="text-xl font-semibold mb-4 text-[#166db4]">Key Features</h3>
                                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                                    <div>
                                        <h4 className="font-semibold">Technical Challenges:</h4>
                                        <ul className="mt-2 space-y-1">
                                            {['AI-powered driverless racing',
                                                'Simulation environment optimization',
                                                'Autonomous driving algorithms'].map((item, index) => (
                                                    <li key={index} className="flex items-center space-x-2 transform transition-all duration-300 hover:translate-x-2">
                                                        <span className="w-2 h-2 bg-[#166db4] rounded-full" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Competition Events:</h4>
                                        <ul className="mt-2 space-y-1">
                                            {['Acceleration testing',
                                                'Skidpad performance',
                                                'Endurance evaluation'].map((item, index) => (
                                                    <li key={index} className="flex items-center space-x-2 transform transition-all duration-300 hover:translate-x-2">
                                                        <span className="w-2 h-2 bg-[#166db4] rounded-full" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FSA Section */}
                    <div className="transform transition-all duration-500 hover:-translate-y-2">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800 hover:text-[#166db4] transition-colors duration-300">
                            Formula Student Austria
                        </h2>
                        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-500">
                            <p className="text-gray-700 mb-6">
                                Formula Student Austria (FSA) stands as a premier event in the international Formula Student series, hosted at the prestigious Red Bull Ring in Spielberg, Austria.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-500 hover:bg-blue-50">
                                    <h3 className="text-xl font-semibold mb-4 text-[#166db4]">Static Events</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        {['Engineering design evaluation',
                                            'Cost analysis presentation',
                                            'Business strategy assessment',
                                            'Technical documentation review'].map((item, index) => (
                                                <li key={index} className="flex items-center space-x-2 transform transition-all duration-300 hover:translate-x-2">
                                                    <span className="w-2 h-2 bg-[#166db4] rounded-full" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg transform transition-all duration-500 hover:bg-blue-50">
                                    <h3 className="text-xl font-semibold mb-4 text-[#166db4]">Dynamic Events</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        {['Acceleration testing',
                                            'Skidpad performance',
                                            'Autocross challenge',
                                            'Endurance evaluation'].map((item, index) => (
                                                <li key={index} className="flex items-center space-x-2 transform transition-all duration-300 hover:translate-x-2">
                                                    <span className="w-2 h-2 bg-[#166db4] rounded-full" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default CompetitionsPage