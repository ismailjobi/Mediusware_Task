import React from "react";

function AboutSection() {
    return (
        <div className="AboutSection">
            <section className="bg-blue-50 py-16">
                <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <img
                                src="GroupImage.png" 
                                alt="Team working together"
                                className="rounded-lg shadow-lg object-cover"
                            />
                            <button className="absolute inset-0 flex items-center justify-center">
                                <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="140" height="140" rx="70" fill="#F2FBF9" fill-opacity="0.4" />
                                    <path d="M56.0465 39.9824C50.3844 36.7346 45.7939 39.3953 45.7939 45.9205V94.0739C45.7939 100.606 50.3844 103.263 56.0465 100.018L98.135 75.8806C103.799 72.6316 103.799 67.3677 98.135 64.1195L56.0465 39.9824Z" fill="white" />
                                </svg>

                            </button>
                        </div>
                    </div>

                    <div className="w-full bg-[#FFFFFF] lg:w-1/2 mx-3 lg:mt-0 lg:pl-12">
                        <div className=" mx-8">
                            <h2 className="text-4xl mt-3 font-bold">
                                A Little Bit <span className="text-teal-400">About Us</span>
                            </h2>
                            <p className="mt-4 text-gray-600">
                                Incepted in 2015, Mediusware Ltd. has been serving as a leading IT
                                Solution provider in USA & Bangladesh. Our aim is to help businesses
                                all around the world by providing digital solutions according to their
                                need. Serving a number of renowned companies from the USA, UK, and many
                                other countries, we have already created a wide range of satisfied
                                clients!
                            </p>

                            <div className="mt-8  grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="text-center bg-[#F1F5F9]">
                                    <h3 className="text-2xl font-bold text-gray-900">800+</h3>
                                    <p className="text-gray-600">Projects Completed</p>
                                </div>
                                <div className="text-center bg-[#F1F5F9]">
                                    <h3 className="text-2xl font-bold text-gray-900">100+</h3>
                                    <p className="text-gray-600">Team Members</p>
                                </div>
                                <div className="text-center bg-[#F1F5F9]">
                                    <h3 className="text-2xl font-bold text-gray-900">1,000+</h3>
                                    <p className="text-gray-600">Happy Customers</p>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                                <button className="bg-[#0C98EB] text-white py-3 px-6 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-all">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.0497 6C15.0264 6.19057 15.924 6.66826 16.6277 7.37194C17.3314 8.07561 17.8091 8.97326 17.9997 9.95M14.0497 2C16.0789 2.22544 17.9713 3.13417 19.4159 4.57701C20.8606 6.01984 21.7717 7.91101 21.9997 9.94M10.2266 13.8631C9.02506 12.6615 8.07627 11.3028 7.38028 9.85323C7.32041 9.72854 7.29048 9.66619 7.26748 9.5873C7.18576 9.30695 7.24446 8.96269 7.41447 8.72526C7.46231 8.65845 7.51947 8.60129 7.63378 8.48698C7.98338 8.13737 8.15819 7.96257 8.27247 7.78679C8.70347 7.1239 8.70347 6.26932 8.27247 5.60643C8.15819 5.43065 7.98338 5.25585 7.63378 4.90624L7.43891 4.71137C6.90747 4.17993 6.64174 3.91421 6.35636 3.76987C5.7888 3.4828 5.11854 3.4828 4.55098 3.76987C4.2656 3.91421 3.99987 4.17993 3.46843 4.71137L3.3108 4.86901C2.78117 5.39863 2.51636 5.66344 2.31411 6.02348C2.08969 6.42298 1.92833 7.04347 1.9297 7.5017C1.93092 7.91464 2.01103 8.19687 2.17124 8.76131C3.03221 11.7947 4.65668 14.6571 7.04466 17.045C9.43264 19.433 12.295 21.0575 15.3284 21.9185C15.8928 22.0787 16.1751 22.1588 16.588 22.16C17.0462 22.1614 17.6667 22 18.0662 21.7756C18.4263 21.5733 18.6911 21.3085 19.2207 20.7789L19.3783 20.6213C19.9098 20.0898 20.1755 19.8241 20.3198 19.5387C20.6069 18.9712 20.6069 18.3009 20.3198 17.7333C20.1755 17.448 19.9098 17.1822 19.3783 16.6508L19.1835 16.4559C18.8339 16.1063 18.6591 15.9315 18.4833 15.8172C17.8204 15.3862 16.9658 15.3862 16.3029 15.8172C16.1271 15.9315 15.9523 16.1063 15.6027 16.4559C15.4884 16.5702 15.4313 16.6274 15.3644 16.6752C15.127 16.8453 14.7828 16.904 14.5024 16.8222C14.4235 16.7992 14.3612 16.7693 14.2365 16.7094C12.7869 16.0134 11.4282 15.0646 10.2266 13.8631Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="mr-2"> </span>
                                    Contact Us
                                </button>

                                <button className="bg-[#CBD5E1] border border-teal-400 text-teal-400 py-3 px-6 rounded-lg flex items-center justify-center hover:bg-teal-50 transition-all">
                                    Company Deck
                                    <span className="mr-2"> </span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 15V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V15M17 10L12 15M12 15L7 10M12 15V3" stroke="#072B4A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutSection;

