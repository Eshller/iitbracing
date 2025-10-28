import React, { useState, useEffect, useMemo } from 'react';
import Header from './Header';
import Section from './Section';
import { teamMembers } from '../constants';
import Footer from './Footer';

// Team member card with framed photo and info below
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
            className={`flex flex-col items-center text-center ${className}`}
        >
            {/* Framed Photo */}
            <div className="relative w-full max-w-sm aspect-[3/4] mb-6 rounded-lg overflow-hidden border-4 border-[#2a2a4a] shadow-2xl bg-[#1a1a2e]">
                {!isLoaded && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                )}

                {isVisible && (
                    <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className={`w-full h-full object-cover transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setIsLoaded(true)}
                    />
                )}
            </div>

            {/* Name with rounded border */}
            <div className="inline-block px-6 py-2 mb-3 border-2 border-white/30 rounded-full">
                <h3 className="text-xl md:text-2xl font-semibold text-white uppercase tracking-wide">
                    {member.name}
                </h3>
            </div>

            {/* Designation */}
            <p className="text-lg md:text-xl font-bold text-white mb-4">
                {member.designation}
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 items-center justify-center">
                <a href="#" className="text-[#a855f7] hover:text-[#9333ea] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                </a>
                <a href="#" className="text-[#a855f7] hover:text-[#9333ea] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                </a>
                <a href="#" className="text-[#a855f7] hover:text-[#9333ea] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                </a>
            </div>
        </div>
    );
});

// Manager card with large framed photo
const ManagerCard = ({ member, showButton = false, className = '' }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`flex flex-col items-center text-center ${className}`}>
            {/* Large Framed Photo */}
            <div className="relative w-72 h-96 mb-6 rounded-lg overflow-hidden border-4 border-[#2a2a4a] shadow-2xl bg-[#1a1a2e]">
                {!isLoaded && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                )}
                <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setIsLoaded(true)}
                />
            </div>

            {/* Name with rounded border */}
            <div className="inline-block px-8 py-2 mb-3 border-2 border-white/30 rounded-full">
                <h3 className="text-2xl font-semibold text-white uppercase tracking-wide">
                    {member.name}
                </h3>
            </div>

            {/* Designation */}
            <p className="text-xl font-bold text-white mb-4">
                {member.designation}
            </p>

            {/* View Profile Button - only for center card */}
            {showButton && (
                <button className="px-8 py-3 rounded-full bg-[#2d3bff] text-white text-base font-semibold shadow-lg hover:bg-[#2430cc] transition-all">
                    VIEW PROFILE
                </button>
            )}
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
                    style={{ backgroundImage: "url('/new/team.png')" }}
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
                    style={{ backgroundImage: "url('/new/team2.png')" }}
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

            {/* MANAGERS: three cards in a row */}
            <Section className="px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl md:text-6xl font-extrabold tracking-wide text-white">MANAGERS</h2>
                    </div>

                    <div className="flex flex-wrap items-start justify-center gap-8 md:gap-12 lg:gap-16">
                        {/* Left Manager */}
                        <ManagerCard member={managers[0]} />

                        {/* Center Manager with View Profile button */}
                        <ManagerCard member={managers[1] || managers[0]} showButton={true} />

                        {/* Right Manager */}
                        <ManagerCard member={managers[2] || managers[0]} />
                    </div>
                </div>
            </Section>

            {/* Footer section with Contact Us */}


            <Footer />
        </div>
    );
};

export default TeamPage;