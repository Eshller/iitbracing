import React from "react";
import { Timeline } from "./timeline";
import Header from "./Header";

export default function AchievementsPage() {
    const data = [
        {
            title: "2024",
            content: (
                <div>
                    <h1 className="text-2xl font-bold">FS Bharat 2024</h1>
                    <div className="mb-8">
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ 1st in Overall
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ 2nd in Cost
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ 3rd in Engineering Design
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Special award for best control
                        </div>
                    </div>
                    <img src="/achievements/a2024.jpeg" className="w-full h-full" alt="" />
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    <h1 className="text-2xl font-bold">FSUK Concept Class</h1>
                    <div className="mb-8">
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ 3rd in Overall
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ 3rd in Cost and Manufacturing
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ 2nd in Engineering Design
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ 3rd in real world AI
                        </div>
                    </div>
                    <img src="/achievements/a2022.jpeg" className="w-full h-full" alt="" />
                </div>
            ),
        },
        {
            title: "2021",
            content: (
                <div>
                    <h1 className="text-2xl font-bold">FSUK Concept Class</h1>
                    <div className="mb-8">
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-lg">
                            ✅ Winners of overall event
                        </div>
                    </div>
                    <img src="/c12.jpeg" className="w-full h-full" alt="" />
                </div>
            ),
        },
        {
            title: "2021",
            content: (
                <div>
                    <h1 className="text-2xl font-bold">FS Bharat 2021</h1>
                    <div className="mb-8">
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Best Business Presentation
                        </div>
                    </div>
                    <img src="/c3.jpeg" className="w-full h-full" alt="" />
                </div>
            ),
        },
        {
            title: "2021",
            content: (
                <div>
                    <h1 className="text-2xl font-bold">FSUK</h1>
                    <div className="mb-8">
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Formula Student award based on design improvements and financial status
                        </div>
                    </div>
                    <img src="/c2.jpeg" className="w-full h-full" alt="" />
                </div>
            ),
        },
        {
            title: "2021",
            content: (
                <div>
                    <h1 className="text-2xl font-bold">FSUK</h1>
                    <div className="mb-8">
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Formula Student award based on design improvements and financial status
                        </div>
                    </div>
                    <img src="/c1.jpeg" className="w-full h-full" alt="" />
                </div>
            ),
        },
        {
            title: "2020",
            content: (
                <div>
                    <h1 className="text-2xl font-bold">FSEV Concept Challenge</h1>
                    <div className="mb-8">
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Best EV Design Presentation
                        </div>
                    </div>
                    <img src="/c12.jpeg" className="w-full h-full" alt="" />
                </div>
            ),
        },
        {
            title: "2019",
            content: (
                <div>
                    <h1 className="text-2xl font-bold">FSUK</h1>
                    <div className="mb-8">
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Formula student award based on design improvements and financial statuss
                        </div>
                    </div>
                    <img src="/c11.jpeg" className="w-full h-full" alt="" />
                </div>
            ),
        },
        {
            title: "2018",
            content: (
                <div>
                    <h1 className="text-2xl font-bold">FSUK</h1>
                    <div className="mb-8">
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Formula student award based on design improvements and financial statuss
                        </div>
                    </div>
                    <img src="/c10.jpg" className="w-full h-full" alt="" />
                </div>
            ),
        },
        {
            title: "2016",
            content: (
                <div>
                    <h1 className="text-2xl font-bold">FSUK</h1>
                    <div className="mb-8">
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Formula student award based on design improvements and financial statuss
                        </div>
                    </div>
                    <img src="/c9.jpeg" className="w-full h-full" alt="" />
                </div>
            ),
        },
        {
            title: "2015",
            content: (
                <div>
                    <h1 className="text-2xl font-bold">FSUK</h1>
                    <div className="mb-8">
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Formula student award based on design improvements and financial statuss
                        </div>
                    </div>
                    <img src="/c8.png" className="w-full h-full" alt="" />
                </div>
            ),
        },
        {
            title: "2014",
            content: (
                <div>
                    <h1 className="text-2xl font-bold">FSUK</h1>
                    <div className="mb-8">
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Formula student award based on design improvements and financial statuss
                        </div>
                    </div>
                    <img src="/c6.jpeg" className="w-full h-full" alt="" />
                </div>
            ),
        },
        {
            title: "2012",
            content: (
                <div>
                    <h1 className="text-2xl font-bold">FSUK</h1>
                    <div className="mb-8">
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Formula student award based on design improvements and financial statuss
                        </div>
                    </div>
                    <img src="/c5.jpg" className="w-full h-full" alt="" />
                </div>
            ),
        },
        {
            title: "2011",
            content: (
                <div>
                    <h1 className="text-2xl font-bold">Bajaj SAE</h1>
                    <div className="mb-8">
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ RAFTAR Award for lightest and fastest vehicle
                        </div>
                    </div>
                    <img src="/c3.jpeg" className="w-full h-full" alt="" />
                </div>
            ),
        },
        {
            title: "2009",
            content: (
                <div>
                    <h1 className="text-2xl font-bold">Bajaj SAE</h1>
                    <div className="mb-8">
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Best Engineering Design Award
                        </div>
                    </div>
                    <img src="/c4.jpeg" className="w-full h-full" alt="" />
                </div>
            ),
        },
        {
            title: "2008",
            content: (
                <div>
                    <h1 className="text-2xl font-bold">FS Michigan</h1>
                    <div className="mb-8">
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Best Engineering Design Award
                        </div>
                    </div>
                    <img src="/c2.jpeg" className="w-full h-full" alt="" />
                </div>
            ),
        },
        {
            title: "2008",
            content: (
                <div>
                    <h1 className="text-2xl font-bold">FS Michigan</h1>
                    <div className="mb-8">
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Best New Entrant
                        </div>
                    </div>
                    <img src="/c1.jpeg" className="w-full h-full" alt="" />
                </div>
            ),
        },
    ];
    return (
        (<div className="w-full">
            <div className="w-full mx-auto py-20 pb-0">
                <Header />
                <Timeline data={data} />
            </div>
        </div>)
    );
}
