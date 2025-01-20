import React, { useState, useCallback, useEffect } from 'react';
import Header from './Header';
import Section from './Section';
import Heading from './Heading';
import { teamMembers } from '../constants';
import Footer from './Footer';

// Lazy loading image component with hover effects
const TeamMemberCard = React.memo(({ member }) => {
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
            className="relative group h-96 rounded-xl overflow-hidden cursor-pointer"
        >
            {/* Loading placeholder */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}

            {/* Image with zoom effect */}
            {isVisible && (
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className={`w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                        onLoad={() => setIsLoaded(true)}
                    />
                </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Content overlay with slide-up animation */}
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

const TeamSection = React.memo(({ members, tag }) => {
    return (
        <div className="text-n-8">
            <Heading tag={tag} />
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {members.map((member, index) => (
                    <TeamMemberCard key={index} member={member} />
                ))}
            </div>
        </div>
    );
});

const TeamPage = () => {
    return (
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <Header />
            <Section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center text-n-8 font-bold">
                        <div className='max-w-lg mx-auto'>
                            <Heading
                                title="Our Team"
                                text="Behind the Speed: Discover the Heart and Soul of IIT Bombay Racing Team - Where Expertise Meets Endless Dedication!"
                            />
                        </div>
                    </div>

                    {/* CTs Section */}
                    <TeamSection
                        members={teamMembers.slice(0, 9)}
                        tag="CTs"
                    />
                </div>
            </Section>

            <Section crosses className="min-h-screen px-4 sm:px-6 lg:px-8 pt-0 mt-0 lg:py-8 xl:py-16">
                <div className="max-w-7xl mx-auto">
                    {/* DE-Manager Section */}
                    <TeamSection
                        members={teamMembers.slice(9, 24)}
                        tag="DE-Manager"
                    />
                </div>
            </Section>
            <Footer />
        </div>
    );
};

export default TeamPage;