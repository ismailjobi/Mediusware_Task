import React from "react";
import NavBar from "./navbar";

function HomeCard() {
    return (
        <div className="HomeCard">
            <section className="text-center mt-40 py-20 from-black to-gray-900 text-white bg-transparent">
                <h1 className="text-3xl md:text-8xl font-bold mb-4">
                    Transforming Your Ideas <br /> into <span className="text-[#2EB8A2]">Digital Outcomes</span>
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    Our global journey needs your expertise. Align with our brand ethos and help us reach new heights across the world.
                </p>
                <div className="flex items-center justify-center ">
                    <button className="text-black py-3 px-8 text-lg hover:bg-teal-500 rounded-lg bg-[#0C98EB] flex items-center space-x-2">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.0497 5C15.0264 5.19057 15.924 5.66826 16.6277 6.37194C17.3314 7.07561 17.8091 7.97326 17.9997 8.95M14.0497 1C16.0789 1.22544 17.9713 2.13417 19.4159 3.57701C20.8606 5.01984 21.7717 6.91101 21.9997 8.94M10.2266 12.8631C9.02506 11.6615 8.07627 10.3028 7.38028 8.85323C7.32041 8.72854 7.29048 8.66619 7.26748 8.5873C7.18576 8.30695 7.24446 7.96269 7.41447 7.72526C7.46231 7.65845 7.51947 7.60129 7.63378 7.48698C7.98338 7.13737 8.15819 6.96257 8.27247 6.78679C8.70347 6.1239 8.70347 5.26932 8.27247 4.60643C8.15819 4.43065 7.98338 4.25585 7.63378 3.90624L7.43891 3.71137C6.90747 3.17993 6.64174 2.91421 6.35636 2.76987C5.7888 2.4828 5.11854 2.4828 4.55098 2.76987C4.2656 2.91421 3.99987 3.17993 3.46843 3.71137L3.3108 3.86901C2.78117 4.39863 2.51636 4.66344 2.31411 5.02348C2.08969 5.42298 1.92833 6.04347 1.9297 6.5017C1.93092 6.91464 2.01103 7.19687 2.17124 7.76131C3.03221 10.7947 4.65668 13.6571 7.04466 16.045C9.43264 18.433 12.295 20.0575 15.3284 20.9185C15.8928 21.0787 16.1751 21.1588 16.588 21.16C17.0462 21.1614 17.6667 21 18.0662 20.7756C18.4263 20.5733 18.6911 20.3085 19.2207 19.7789L19.3783 19.6213C19.9098 19.0898 20.1755 18.8241 20.3198 18.5387C20.6069 17.9712 20.6069 17.3009 20.3198 16.7333C20.1755 16.448 19.9098 16.1822 19.3783 15.6508L19.1835 15.4559C18.8339 15.1063 18.6591 14.9315 18.4833 14.8172C17.8204 14.3862 16.9658 14.3862 16.3029 14.8172C16.1271 14.9315 15.9523 15.1063 15.6027 15.4559C15.4884 15.5702 15.4313 15.6274 15.3644 15.6752C15.127 15.8453 14.7828 15.904 14.5024 15.8222C14.4235 15.7992 14.3612 15.7693 14.2365 15.7094C12.7869 15.0134 11.4282 14.0646 10.2266 12.8631Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span>Talk to Someone</span>
                    </button>
                </div>


            </section>
        </div>
    );
}

export default HomeCard;
