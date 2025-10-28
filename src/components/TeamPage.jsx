import React, { useState, useEffect, useMemo } from 'react';
import Header from './Header';
import Section from './Section';
import { teamMembers } from '../constants';
import Footer from './Footer';

// Team member card with lazy loading and hover effects
const TeamMemberCard = React.memo(({ member, className = '' }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById(`member-${member.name}`);
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, [member.name]);

    return (
        <div
            id={`member-${member.name}`}
            className={`relative group h-96 rounded-xl overflow-hidden cursor-pointer ${className}`}
        >
            {!isLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}

            {isVisible && (
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className={`w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setIsLoaded(true)}
                    />
                </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 ease-in-out translate-y-2 group-hover:translate-y-0">
                <h3 className="text-2xl font-bold text-white mb-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {member.name}
                </h3>
                <p className="text-lg text-gray-300 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {member.designation}
                </p>
            </div>
        </div>
    );
});

// Tilted card for Managers section
const TiltedCard = ({ member, tilt = 0, size = 'md', className = '' }) => {
    const sizes = {
        sm: 'w-40 h-56',
        md: 'w-56 h-80',
        lg: 'w-64 h-[22rem]'
    };

    return (
        <div
            className={`relative ${sizes[size]} rounded-xl overflow-hidden shadow-2xl bg-n-8/40 backdrop-blur-sm border border-n-12/30 ${className}`}
            style={{ transform: `rotate(${tilt}deg)` }}
        >
            <TeamMemberCard member={member} />
        </div>
    );
};

// Team section with title
const TeamSection = React.memo(({ members, title }) => (
    <div className="text-n-8">
        <div className="text-center mb-10">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-wide text-white">{title}</h2>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
            ))}
        </div>
    </div>
));

const TeamPage = () => {
    // Categorize members
    const coreTeam = useMemo(() => teamMembers.slice(0, 9), []);
    const nonCore = useMemo(() => teamMembers.slice(9), []);
    const managers = useMemo(() => {
        const explicit = nonCore.filter((m) => /manager/i.test(m.designation));
        if (explicit.length >= 3) return explicit.slice(0, 3);
        const pm = nonCore.filter((m) => /project\s+manager/i.test(m.designation));
        const combined = [...explicit, ...pm];
        const fill = nonCore.filter((m) => !combined.includes(m));
        return [...combined, ...fill].slice(0, 3);
    }, [nonCore]);

    return (
        <div className="overflow-hidden bg-black">
            <Header />

            {/* HERO: Big title over image */}
            <section className="relative h-[70vh] min-h-[28rem] w-full">
                <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{ backgroundImage: "url('/gall4.webp')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/80" />

                <div className="relative h-full container flex flex-col items-center justify-center text-center">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-xl tracking-wide mb-6">
                        TEAM
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl text-white/90 font-semibold">
                        Behind the Speed: Discover the Heart and Soul of IIT Bombay Racing Team - Where Expertise Meets Endless Dedication!
                    </p>
                </div>
            </section>

            {/* ABOUT TEAM with background */}
            <section className="relative py-16 md:py-24">
                <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{ backgroundImage: "url('/gall6.webp')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/80" />

                <div className="relative container text-center px-4">
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">ABOUT TEAM</h2>
                    <p className="max-w-5xl mx-auto text-white/90 text-lg md:text-xl leading-relaxed">
IIT Bombay Racing is Asia’s premier Formula Student team with over 80 dedicated members from diverse engineering and management backgrounds. Structured into four divisions — Mechanical, Electrical, Driverless (DV), and Organisational — the team combines technical innovation with operational excellence. Guided by experienced leads and collaborative teamwork, we design and build race cars that are lighter, faster, and engineered with precision, performance consistency, and dependability every season.
                    </p>
                </div>
            </section>

            {/* CORE TEAM grid */}
            <Section className="px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-7xl mx-auto">
                    <TeamSection title="CORE TEAM" members={coreTeam} />
                </div>
            </Section>

            {/* MANAGERS: three tilted cards */}
            <Section className="px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-5xl md:text-6xl font-extrabold tracking-wide text-white">MANAGERS</h2>
                    </div>

                    <div className="relative flex items-end justify-center gap-6 md:gap-10 py-8 flex-wrap">
                        {/* Left (tilted) */}
                        <div className="hidden md:block translate-y-6 opacity-90">
                            <TiltedCard member={managers[0]} tilt={-8} size="md" />
                        </div>

                        {/* Center prominent */}
                        <div className="z-10">
                            <div className="relative">
                                <TiltedCard member={managers[1] || managers[0]} tilt={0} size="lg" />
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                                    <div className="px-6 py-3 rounded-full bg-[#2d3bff] text-white text-sm font-semibold shadow-lg hover:bg-[#2430cc] transition-all cursor-pointer">
                                        VIEW PROFILE
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right (tilted) */}
                        <div className="hidden md:block translate-y-6 opacity-90">
                            <TiltedCard member={managers[2] || managers[0]} tilt={8} size="md" />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Footer section with Contact Us */}


            <Footer />
        </div>
    );
};

export default TeamPage;