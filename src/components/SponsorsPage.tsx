import React from 'react'
import Header from './Header'
import Footer from './Footer';

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
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                    style={{ 
                        backgroundImage: "url('/new/sponsor1.png')"
                    }}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70" />
                
                {/* Overlaid Text */}
                <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 drop-shadow-xl">
                        Sponsors & Partners
                    </h1>
                    <p className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold drop-shadow-lg">
                        Driven by Your Support
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="bg-black">
                <div className="container mx-auto px-4 md:px-8">
                    {/* Logo - Centered */}
                    <div className="text-center">
                        <img 
                            src="/new/footer.png" 
                            alt="IIT Bombay Racing" 
                            className="mx-auto h-32 md:h-64 w-auto mb-6"
                        />
                    </div>

                    {/* Introduction Text - Left-aligned in centered container */}
                    <div className="max-w-4xl mx-auto space-y-6 text-white text-lg md:text-xl leading-relaxed text-left mb-12">
                        <p>
                            The success of the IIT Bombay Racing Team is made possible by our vital sponsors and community partners. We are powered by their generous contributions, whether through funding, products, or technical services.
                        </p>
                        <p>
                            Every year, this support enables us to design, build, and compete at the highest levels of student motorsport globally. In gratitude, we provide our partners with extensive publicity on our race car, online, and at events. We are committed to building strong, mutually beneficial relationships and sharing our journey with those who make it possible.
                        </p>
                    </div>

                    {/* Action Buttons - Centered */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        <button className="px-10 py-4 bg-[#2d3bff] text-white font-semibold text-base md:text-lg uppercase rounded-3xl hover:bg-[#2430cc] transition-all">
                            CONTACT US
                        </button>
                        <button className="px-10 py-4 bg-[#2d3bff] text-white font-semibold text-base md:text-lg uppercase rounded-3xl hover:bg-[#2430cc] transition-all">
                            BROCHURE
                        </button>
                    </div>
                </div>
            </section>

            {/* Title Sponsor Section */}
            <section className="bg-black ">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white uppercase text-center mb-16">
                        TITLE SPONSOR
                    </h2>
                    
                    <div className="max-w-5xl mx-auto">
                        {/* NRB Bearings Logo - Large */}
                        <div className="flex items-center justify-center mb-10">
                            <img src='/new/sponsor2.png' alt='nrb bearings' className='w-full max-w-2xl h-auto object-contain'/>
                        </div>

                        {/* Description */}
                        <p className="text-white text-lg md:text-xl leading-relaxed text-left">
                            {titleSponsor.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Platinum Sponsor Section */}
            <section className="bg-black ">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white uppercase text-center mb-16">
                        PLATINUM SPONSOR
                    </h2>
                    
                    {/* Triangular Layout: 2 on top, 1 centered below */}
                    <div className="max-w-6xl mx-auto">
                        {/* Top Row - Two Logos Side by Side */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16">
                            {platinumSponsors.slice(0, 2).map((sponsor) => (
                                <div key={sponsor.id} className="flex flex-col items-center text-center">
                                    <div className="mb-6 h-32 md:h-40 flex items-center justify-center">
                                        <img 
                                            src={sponsor.logo} 
                                            alt={sponsor.name}
                                            className="max-h-32 md:max-h-40 w-auto object-contain"
                                        />
                                    </div>
                                    <p className="text-white text-base md:text-lg uppercase">{sponsor.name}</p>
                                </div>
                            ))}
                        </div>
                        
                        {/* Bottom Row - One Logo Centered */}
                        <div className="flex justify-center">
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-6 h-40 md:h-48 flex items-center justify-center">
                                    <img 
                                        src={platinumSponsors[2].logo} 
                                        alt={platinumSponsors[2].name}
                                        className="max-h-40 md:max-h-48 w-auto object-contain"
                                    />
                                </div>
                                <p className="text-white text-base md:text-lg uppercase">{platinumSponsors[2].name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gold Sponsor Section */}
            <section className="bg-black py-5">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white uppercase text-center mb-16">
                        GOLD SPONSOR
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-5xl mx-auto">
                        {goldSponsors.map((sponsor) => (
                            <div key={sponsor.id} className="flex flex-col items-center text-center">
                                <div className="mb-6 h-32 md:h-40 flex items-center justify-center">
                                    <img 
                                        src={sponsor.logo} 
                                        alt={sponsor.name}
                                        className="max-h-32 md:max-h-40 w-auto object-contain"
                                    />
                                </div>
                                <p className="text-white text-base md:text-lg uppercase">{sponsor.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Silver Sponsor Section */}
            <section className="bg-black py-20 md:py-28">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white uppercase text-center mb-16">
                        SILVER SPONSOR
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-5xl mx-auto">
                        {silverSponsors.map((sponsor) => (
                            <div key={sponsor.id} className="flex flex-col items-center text-center">
                                <div className="mb-6 h-32 md:h-40 flex items-center justify-center">
                                    <img 
                                        src={sponsor.logo} 
                                        alt={sponsor.name}
                                        className="max-h-32 md:max-h-40 w-auto object-contain"
                                    />
                                </div>
                                <p className="text-white text-base md:text-lg uppercase">{sponsor.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer/Contact Section */}
            <Footer />
        </div>
    )
}

export default SponsorsPage
