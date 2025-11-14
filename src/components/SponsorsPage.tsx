import React from 'react'
import Header from './Header'

// Sponsor categories
const titleSponsor = {
  name: "NRB Bearings",
  logo: "/nrb.png",
  description: "NRB Bearings, an ISO 9001 certified company, has been a pioneer in bearing technology for over 40 years. Today, more than 90% of vehicles on Indian roads run on NRB parts. A leader in needle roller and cylindrical roller bearings, NRB has also developed a new generation of lightweight drawn cup bearings. As a trusted global supplier, NRB partners with leading mobility companies such as Mercedes, Volvo, Honda, John Deere, Bosch, ZF, and Getrag."
};

const platinumSponsors = [
  { id: 1, name: "Godrej and Boyce", logo: "/1.png" },
  { id: 2, name: "PCB Power Market", logo: "/2.png" },
  { id: 11, name: "Tesla", logo: "/11.png" }
];

const goldSponsors = [
  { id: 6, name: "Eshway", logo: "/6.png" },
  { id: 5, name: "Harness Techniques", logo: "/5.png" }
];

const silverSponsors = [
  { id: 13, name: "Ajmera Indi-Karting", logo: "/13.png" },
  { id: 14, name: "Ansys", logo: "/14.png" }
];

const SponsorsPage = () => {
    return (
        <div className="overflow-hidden bg-black">
            <Header />
            
            {/* Hero Section with Background Image */}
            <section className="relative h-[70vh] min-h-[28rem] w-full overflow-hidden">
                {/* Background Image - Replace '/sponsors-hero-bg.jpg' with your actual image path */}
                <div
                    className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                    style={{ 
                        backgroundImage: "url('/sponsors-hero-bg.jpg')",
                        filter: 'blur(2px)'
                    }}
                />
                {/* Fallback gradient if image not found */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70" />
                
                {/* Overlaid Text */}
                <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-xl">
                        Sponsors & Partners
                    </h1>
                    <p className="text-xl md:text-2xl lg:text-3xl text-white font-semibold drop-shadow-lg">
                        Driven by Your Support
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="bg-black py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8">
                    {/* Logo - Centered */}
                    <div className="text-center mb-8">
                        <img 
                            src="/new/footer.png" 
                            alt="IIT Bombay Racing" 
                            className="mx-auto h-20 md:h-24 w-auto mb-4"
                        />
                        {/* NRB BEARINGS Sub-logo - Centered */}
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full border border-white relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <span className="text-white font-bold text-lg md:text-xl">NRB BEARINGS</span>
                        </div>
                    </div>

                    {/* Introduction Text - Left-aligned in centered container */}
                    <div className="max-w-4xl mx-auto space-y-6 text-white text-base md:text-lg leading-relaxed text-left">
                        <p>
                            The success of the IIT Bombay Racing Team is made possible by our vital sponsors and community partners. We are powered by their generous contributions, whether through funding, products, or technical services.
                        </p>
                        <p>
                            Every year, this support enables us to design, build, and compete at the highest levels of student motorsport globally. In gratitude, we provide our partners with extensive publicity on our race car, online, and at events. We are committed to building strong, mutually beneficial relationships and sharing our journey with those who make it possible.
                        </p>
                    </div>

                    {/* Action Buttons - Centered */}
                    <div className="flex flex-wrap justify-center gap-4 mt-12">
                        <button className="px-8 py-3 bg-[#2d3bff] text-white font-semibold uppercase rounded-lg hover:bg-[#2430cc] transition-all">
                            CONTACT US
                        </button>
                        <button className="px-8 py-3 bg-[#2d3bff] text-white font-semibold uppercase rounded-lg hover:bg-[#2430cc] transition-all">
                            BROCHURE
                        </button>
                    </div>
                </div>
            </section>

            {/* Title Sponsor Section */}
            <section className="bg-black py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase text-center mb-12">
                        TITLE SPONSOR
                    </h2>
                    
                    <div className="max-w-4xl mx-auto">
                        {/* NRB Bearings Logo - Large */}
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white flex items-center justify-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-left">
                                <div className="text-4xl md:text-5xl font-bold text-white uppercase">NRB</div>
                                <div className="text-xl md:text-2xl font-bold text-white uppercase">BEARINGS</div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-white text-base md:text-lg leading-relaxed text-left">
                            {titleSponsor.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Platinum Sponsor Section */}
            <section className="bg-black py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase text-center mb-12">
                        PLATINUM SPONSOR
                    </h2>
                    
                    {/* Triangular Layout: 2 on top, 1 centered below */}
                    <div className="max-w-6xl mx-auto">
                        {/* Top Row - Two Logos Side by Side */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
                            {platinumSponsors.slice(0, 2).map((sponsor) => (
                                <div key={sponsor.id} className="flex flex-col items-center text-center">
                                    <div className="mb-4 h-24 flex items-center justify-center">
                                        <img 
                                            src={sponsor.logo} 
                                            alt={sponsor.name}
                                            className="max-h-24 w-auto object-contain"
                                        />
                                    </div>
                                    <p className="text-white text-sm md:text-base uppercase">{sponsor.name}</p>
                                </div>
                            ))}
                        </div>
                        
                        {/* Bottom Row - One Logo Centered */}
                        <div className="flex justify-center">
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 h-24 flex items-center justify-center">
                                    <img 
                                        src={platinumSponsors[2].logo} 
                                        alt={platinumSponsors[2].name}
                                        className="max-h-24 w-auto object-contain"
                                    />
                                </div>
                                <p className="text-white text-sm md:text-base uppercase">{platinumSponsors[2].name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gold Sponsor Section */}
            <section className="bg-black py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase text-center mb-12">
                        GOLD SPONSOR
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
                        {goldSponsors.map((sponsor) => (
                            <div key={sponsor.id} className="flex flex-col items-center text-center">
                                <div className="mb-4 h-24 flex items-center justify-center">
                                    <img 
                                        src={sponsor.logo} 
                                        alt={sponsor.name}
                                        className="max-h-24 w-auto object-contain"
                                    />
                                </div>
                                <p className="text-white text-sm md:text-base uppercase">{sponsor.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Silver Sponsor Section */}
            <section className="bg-black py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase text-center mb-12">
                        SILVER SPONSOR
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
                        {silverSponsors.map((sponsor) => (
                            <div key={sponsor.id} className="flex flex-col items-center text-center">
                                <div className="mb-4 h-24 flex items-center justify-center">
                                    <img 
                                        src={sponsor.logo} 
                                        alt={sponsor.name}
                                        className="max-h-24 w-auto object-contain"
                                    />
                                </div>
                                <p className="text-white text-sm md:text-base uppercase">{sponsor.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer/Contact Section */}
            <section className="bg-black py-16 md:py-24">
                {/* Purple Separator */}
                <hr className="border-0 h-[2px] bg-gradient-to-r from-[#9D17A2] to-[#3A093C] mb-12" />
                
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Left Column - Team Info */}
                        <div className="relative">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Racing Team IIT Bombay
                            </h3>
                            <p className="text-white text-base md:text-lg leading-relaxed">
                                IIT Bombay Racing is India's premier Formula Student Electric team with a vision to Revolutionize Electric Mobility in India.
                            </p>
                            {/* Background Logo - Semi-transparent */}
                            <div className="absolute -z-10 opacity-10 top-0 left-0">
                                <img 
                                    src="/new/footer.png" 
                                    alt="IIT Bombay Racing" 
                                    className="h-48 w-auto"
                                />
                            </div>
                        </div>

                        {/* Right Column - Contact Info */}
                        <div className="flex flex-col items-center md:items-start">
                            <button className="px-8 py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold text-lg md:text-xl rounded-full mb-6 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Contact Us
                            </button>
                            <ul className="space-y-2 text-white text-base md:text-lg list-disc text-left">
                                <li>tech@iitbombayracing.org</li>
                                <li>+91 7875692712</li>
                                <li>+91 9930779212</li>
                                <li>IIT Bombay, Powai, 400076, India</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SponsorsPage
