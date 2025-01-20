import React from 'react'
import Heading from './Heading'

const Features = () => {
    return (
        <section class="bg-white md:mt-24 md:mb-24">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div class="mx-auto max-w-screen-sm mb-8 lg:mb-16">
                    <div class="text-gray-500 font-extrabold max-w-[50rem] text-center mx-auto mb-12 lg:mb-20 md:text-center">
                        <Heading
                            tag="Where Innovation Meets Excellence"
                            title="Driving Technical and Organizational Excellence"
                            text="Our team has both Technical and Organizational divisions which are further divided into mechanical, electrical and driverless subdivisions"
                        />
                    </div>
                </div>
                <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    <div class="items-center bg-gray-50 rounded-lg shadow sm:flex"><a href="#">
                        <img class="w-full max-w-[600px] rounded-lg sm:rounded-none sm:rounded-l-lg object-contain h-full" src="/mechanical.jpeg" alt="Bonnie Avatar" />
                    </a>
                        <div class="md:p-5 p-2">
                            <h3 class="md:text-xl text-2xl md:text-start text-center font-bold tracking-tight text-gray-900">
                                <a href="#">Mechanical</a></h3><p class="mt-3 mb-4 font-light text-gray-500 hidden md:block">Precision in Motion: Shaping Mechanical Excellence</p>
                        </div>
                    </div>
                    <div class="items-center bg-gray-50 rounded-lg shadow sm:flex">
                        <a href="#">
                            <img class="w-full max-w-[600px] rounded-lg sm:rounded-none sm:rounded-l-lg object-contain h-full" src="/driverless.jpeg" alt="Bonnie Avatar" />
                        </a>
                        <div class="md:p-5 p-2">
                            <h3 class="md:text-xl text-2xl md:text-start text-center font-bold tracking-tight text-gray-900">
                                <a href="#">Driverless</a></h3><p class="mt-3 mb-4 font-light text-gray-500 hidden md:block">Driving the Future: Pioneering Autonomous Excellence</p>
                        </div>
                    </div>
                    <div class="items-center bg-gray-50 rounded-lg shadow sm:flex"><a href="#">
                        <img class="w-full max-w-[600px] rounded-lg sm:rounded-none sm:rounded-l-lg object-contain h-full" src="/electrical.jpeg" alt="Bonnie Avatar" />
                    </a>
                        <div class="md:p-5 p-2">
                            <h3 class="md:text-xl text-2xl md:text-start text-center font-bold tracking-tight text-gray-900">
                                <a href="#">Electrical</a>
                            </h3>
                            <p class="mt-3 mb-4 font-light text-gray-500 hidden md:block">Electrifying Innovation: Powering Tomorrow's Mobility</p>
                        </div>
                    </div>
                    <div class="items-center bg-gray-50 rounded-lg shadow sm:flex"><a href="#">
                        <img class="w-full max-w-[600px] rounded-lg sm:rounded-none sm:rounded-l-lg object-contain h-full" src="/organisational.jpeg" alt="Bonnie Avatar" />

                    </a>
                        <div class="md:p-5 p-2">
                            <h3 class="md:text-xl text-2xl md:text-start text-center font-bold tracking-tight text-gray-900">
                                <a href="#">Organisational</a>
                            </h3>
                            <p class="mt-3 mb-4 font-light text-gray-500 hidden md:block">Elevating Excellence: Orchestrating Team Success</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features