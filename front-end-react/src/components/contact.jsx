import React from "react";

function Contact() {
    return (
        <div className="Contact">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    <div className="p-6  text-center md:text-left">
                        <div className="flex items-center">
                            <img
                                src="CEOBD.png"
                                alt="Person"
                                className="w-[228px] h-[228px]  mx-auto md:mx-0 relative"
                            />
                            <div className="mt-20 border-2 px-[24px] pb-5 bg-[#A5EADA4D] relative z-10">
                                <h2 className="text-lg font-semibold mt-4">Md. Shahinur Rahman</h2>
                                <p className="text-sm text-gray-600">Managing Director, Mediusware Ltd</p>
                            </div>
                        </div>
                        <p className="mt-4">I'd be excited to talk with you about your projects or what you need. Fill in the form or send us an email to <a href="mailto:info@mediusware.com" className="text-blue-500">info@mediusware.com</a></p>
                        <p className="font-semibold mt-4">Talk to you in less than 24hs.</p>


                        <div className="mt-6 bg-[#F0F8FF] p-4 rounded-lg">
                            <h3 className="text-base font-medium">Book a call</h3>
                            <p className="text-sm text-gray-500">Feel free to select a time at your convenience!</p>
                            <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">Let’s Talk &rarr;</a>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Got an idea? We’ve got the skills.</h2>
                        <p className="text-sm mb-6">Fill out our contact form and we’ll get in touch!</p>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name*</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter Your Name"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number <span className="text-[#64748B]">(Optional)</span></label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        placeholder="Enter Your Phone Number"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name <span className="text-[#64748B]">(Optional)</span></label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        placeholder="Enter Your Company Name"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="query" className="block text-sm font-medium text-gray-700">Deep details about your query <span className="text-[#64748B]">(Optional)</span> </label>
                                <textarea
                                    id="query"
                                    name="query"
                                    placeholder="Tell us more about your query"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="4"
                                ></textarea>
                            </div>
                            <div className="place-items-end">
                                <button
                                    type="submit"
                                    className="flex items-center bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                                >
                                    Submit Inquiry
                                    <span className="ml-2"></span>
                                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.50043 10.0008H4.00043M3.91577 10.2923L1.58085 17.267C1.39742 17.8149 1.3057 18.0889 1.37152 18.2576C1.42868 18.4041 1.55144 18.5152 1.70292 18.5575C1.87736 18.6061 2.14083 18.4876 2.66776 18.2505L19.3792 10.7303C19.8936 10.4989 20.1507 10.3831 20.2302 10.2224C20.2993 10.0827 20.2993 9.91883 20.2302 9.77916C20.1507 9.6184 19.8936 9.50268 19.3792 9.27123L2.66193 1.74849C2.13659 1.51209 1.87392 1.39389 1.69966 1.44237C1.54832 1.48448 1.42556 1.59527 1.36821 1.74151C1.30216 1.90991 1.3929 2.18328 1.57437 2.73004L3.91642 9.7863C3.94759 9.8802 3.96317 9.92716 3.96933 9.97518C3.97479 10.0178 3.97473 10.0609 3.96916 10.1035C3.96289 10.1515 3.94718 10.1984 3.91577 10.2923Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

