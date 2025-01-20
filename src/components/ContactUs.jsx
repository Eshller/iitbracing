import React from 'react'
import Header from './Header'
import Footer from './Footer'

const ContactUs = () => {
    return (
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <Header />
            <section className="bg-gray-100 py-12">
                <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="bg-blue-700 p-8 md:p-12 lg:px-16 lg:py-24 text-white flex flex-col items-center rounded-lg shadow-lg"><div className="mx-auto max-w-xl text-center mb-8">
                            <h2 className="text-3xl font-bold md:text-4xl">Contact Us</h2>
                        </div>
                            <iframe className="border-0 rounded-lg shadow-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4134175030213!2d72.9170010146984!3d19.133372487055038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f599f1f88d%3A0x83e1c51f96ace7cb!2sIIT%20Bombay%20Racing%20Design%20Lab!5e0!3m2!1sen!2sin!4v1629212356117!5m2!1sen!2sin" width="100%" height="400" loading="lazy"></iframe>
                        </div>
                        <div className="grid grid-cols-1 gap-8">
                            <div className="p-8 bg-white border rounded-lg shadow-lg">
                                <h4 className="text-lg font-semibold text-blue-700">Tech-Related Queries</h4>
                                <div className="mt-4 text-gray-700">
                                    <p className="mb-4"><strong>Harsh Nikam:</strong> <br />
                                        <span className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-blue-700 lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>nharsh1104@gmail.com</span>
                                        <span className="flex items-center mt-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone w-4 h-4 mr-2 text-blue-700">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                            </svg>
                                            +91 9021142565
                                        </span>
                                    </p>
                                    <p className="mb-4">
                                        <strong>Deep Boliya:</strong>
                                        <br />
                                        <span className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-blue-700 lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                            boliyadeep2003@gmail.com
                                        </span>

                                        <span className="flex items-center mt-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone w-4 h-4 mr-2 text-blue-700"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                            </svg>
                                            +91 8619034120
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="p-8 bg-white border rounded-lg shadow-lg">
                                <h4 className="text-lg font-semibold text-blue-700">Non-Tech Related Queries</h4>
                                <div className="mt-4 text-gray-700">
                                    <p className="mb-4"><strong>Aryan Chauhan:</strong>
                                        <br />
                                        <span className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-blue-700 lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                            chauhan.aryan.2403@gmail.com
                                        </span>
                                        <span className="flex items-center mt-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone w-4 h-4 mr-2 text-blue-700">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                            </svg>
                                            +91 7820927821
                                        </span>
                                    </p>
                                    <p class="mb-4">
                                        <strong>Himanshu Poonia:</strong>
                                        <br />
                                        <span className="flex items-center"><
                                            svg className="w-4 h-4 mr-2 text-blue-700 lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                            himanshuracing@gmail.com
                                        </span>
                                        <span class="flex items-center mt-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone w-4 h-4 mr-2 text-blue-700">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                            </svg>
                                            +91 9799277238
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ContactUs