"use client";


import { Carousel } from "./carousel";
import Heading from "./Heading";
import Section from "./Section";
export function OurCars() {
    const slideData = [
        {
            title: "EvoK",
            button: "Explore All Cars",
            src: "/c1.jpeg",
        },
        {
            title: "EvoX",
            button: "Explore All Cars",
            src: "/c2.jpeg",
        },
        {
            title: "Etherion",
            button: "Explore All Cars",
            src: "/c3.jpeg",
        },
        {
            title: "Evo2",
            button: "Explore All Cars",
            src: "/c4.jpeg",
        },
    ];
    return (
        (<Section className="relative overflow-hidden w-full h-full py-20">
            <div className="text-gray-500 font-bold">
                <Heading
                    title="Our Legacy"
                    tag="Our Cars"
                    text="Click To Know The Legacy Of Our Cars"
                />
            </div>
            <Carousel slides={slideData} />
        </Section>)
    );
}
