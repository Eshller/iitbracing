import React from 'react'
import Section from './Section'
import Header from './Header'
import { sponsors } from '../constants'

const SponsorsPage = () => {
    return (
        <Section className="w-full" id="sponsors" crosses={false} crossesOffset={0} customPaddings={false}>
            <Header />
            <section className=" text-gray-900 bg-white ">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="flex flex-col justify-center items-center">
                            <a href="https://www.nrbbearings.com/" className="mx-4 flex w-100 items-center justify-center hover:bg-gray-600 transition-all p-10 ">
                                <img src="/nrb.png" className="invert w-full md:h-40 h-full" />
                            </a><span className="text-gray-600"></span>
                        </div>
                        <h1 className="text-3xl font-extrabold text-gray-800 sm:text-5xl">
                            NRB Bearings</h1>
                        <p className="mx-auto font-bold text-gray-800 mt-4 max-w-xl sm:text-xl/relaxed">
                            <div className="tagline flex items-center text-center mb-4 justify-center text-lg font-bold">
                                <svg width="5" height="14" viewBox="0 0 5 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 0.822266H1V12.8223H5" stroke="url(#brackets-left)"></path>
                                    <defs><linearGradient id="brackets-left" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="black"></stop><stop offset="100%" stop-color="#D87CEE"></stop></linearGradient></defs>
                                </svg>
                                <div className="mx-3 text-n-8">Title Sponsor</div>
                                <svg width="5" height="14" viewBox="0 0 5 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M-2.98023e-08 0.822266H4V12.8223H-2.98023e-08" stroke="url(#brackets-right)"></path><defs><linearGradient id="brackets-right" x1="14.635%" x2="14.635%" y1="0%" y2="100%"><stop offset="0%" stop-color="#9099FC"></stop><stop offset="100%" stop-color="#D87CEE"></stop></linearGradient></defs>
                                </svg>
                            </div>
                        </p>
                        <p className="mx-auto text-gray-800 mt-4 max-w-2xl text-md sm:text-sm/relaxed">NRB Bearings is an ISO 9001 certified best bearing manufacture company in India. For over 40 years NRB has pioneered the leading edge of bearing technology, and today over 90% of vehicles on Indian roads run on NRB parts. NRB Bearings is a recognised leader in needle roller bearings, conventional cylindrical roller bearings and has developed a new generation of lightweight drawn cup bearings. NRB is a global supplier to major mobility companies worldwide, including Mercedes, Volvo, Honda, John Deere, Bosch, ZF, and Getrag.</p>
                    </div>
                </div>
            </section>
            <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="flex flex-wrap items-center justify-center">
                                {sponsors.map((sponsor) => (
                                    <div className="flex flex-col justify-center items-center" key={sponsor.id}>
                                        <a href="#" className="mx-4 flex w-100 items-center justify-center hover:bg-gray-400 transition-all p-10 ">
                                            <img src={sponsor.image} className="w-full h-20" />
                                        </a>
                                        <span className="text-gray-700">{sponsor.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Section>
    )
}

export default SponsorsPage