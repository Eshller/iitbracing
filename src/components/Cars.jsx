"use client";
import React from "react";
import { HeroParallax } from "./hero-pallax";
import Header from "./Header";
import { CarGrid } from "./cars-grid";
import Heading from "./Heading";
import Footer from "./Footer";
import Section from "./Section";


export function CarsPage() {
    return (
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            < Header />
            <HeroParallax products={products} />;
            <Section className="flex justify-center items-center flex-col text-gray-500 font-bold py-5 mt-10">
                <Heading
                    title="Our Cars"
                    text="Our cars are the result of years of hard work and dedication. They are the culmination of our passion for innovation and engineering."
                    tag="Legacy"
                />

                <CarGrid />
            </Section>
            <Footer />
        </ div>
    );
}
export const products = [
    {
        title: "Evo2",
        link: "#",
        thumbnail:
            "/c5.jpg",
    },
    {
        title: "EvoK",
        link: "#",
        thumbnail:
            "/c1.jpeg",
    },
    {
        title: "EvoX",
        link: "#",
        thumbnail:
            "/c2.jpeg",
    },
    {
        title: "Etherion",
        link: "#",
        thumbnail:
            "/c3.jpeg",
    },

    {
        title: "EvoK",
        link: "#",
        thumbnail:
            "/c4.jpeg",
    },
    {
        title: "Evo2",
        link: "#",
        thumbnail:
            "/c5.jpg",
    },
    {
        title: "Evo1",
        link: "#",
        thumbnail:
            "/c6.jpeg",
    },

    {
        title: "Prithvi1",
        link: "#",
        thumbnail:
            "/c7.jpeg",
    },
    {
        title: "Prithvi2",
        link: "#",
        thumbnail:
            "/c8.png",
    },
    {
        title: "Agni",
        link: "#",
        thumbnail:
            "/c9.jpeg",
    },
    {
        title: "Vayu",
        link: "#",
        thumbnail:
            "/c10.jpg",
    },
    {
        title: "Orca",
        link: "#",
        thumbnail:
            "/c11.jpeg",
    },

    {
        title: "EvoV",
        link: "#",
        thumbnail:
            "/c12.jpeg",
    },
    {
        title: "EvoK",
        link: "#",
        thumbnail:
            "/c1.jpeg",
    },
    {
        title: "EvoX",
        link: "#",
        thumbnail:
            "/c2.jpeg",
    },
    {
        title: "Etherion",
        link: "#",
        thumbnail:
            "/c3.jpeg",
    },
];
