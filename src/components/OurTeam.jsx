import React from 'react'

const OurTeam = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
                    <div className="md:col-span-1">
                        <div className="max-w-lg md:max-w-none">
                            {/* <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </h2> */}

                            <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                                <h2 class="text-2xl mb-4 font-bold text-gray-500 md:text-5xl">The Team</h2>
                                <p class="body-2 mb-[3rem] text-n-7">Driving Innovation, Powering Sustainability: IITB Racing</p>
                                <ul class="body-2">
                                    <li class="flex items-start py-4 border-t bg-white border-n-6">
                                        <img width="24" height="24" src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" />
                                        <p class="ml-4 text-n-8">Leading India’s charge in Formula Student Electric with innovative, sustainable solutions.</p>
                                    </li>
                                    <li class="flex items-start py-4 border-t bg-white border-n-6">
                                        <img width="24" height="24" src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" />
                                        <p class="ml-4 text-n-8">Pioneering the future of electric mobility with passion and excellence.</p></li><li class="flex items-start py-4 border-t bg-white border-n-6"><img width="24" height="24" src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" />
                                        <p class="ml-4 text-n-8">Driving sustainable electric mobility, propelling India onto the global stage.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <img
                            src="/team.jpeg"
                            className="rounded-xl w-full h-full object-cover"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurTeam