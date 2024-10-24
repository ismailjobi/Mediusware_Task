import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Testimonials() {
    const testimonials = [
        {
            name: "Jenny Wilson",
            position: "CEO, Company Name",
            testimonial: "Mediusware renewed our trust in outsourcing IT development in the USA.",
            imageUrl: "CEO.jpg",
        },
        {
            name: "Courtney Henry",
            position: "CTO, Company Name",
            testimonial: "Banking the unbanked with the help of Mediusware developers...",
            imageUrl: "CTO.jpg",
        },
        {
            name: "Kristin Watson",
            position: "Director, Company Name",
            testimonial: "Our Digital Transformation Journey Fueled by Top-Tier IT Solutions by Mediusware Ltd.",
            imageUrl: "Director.jpg",
        },
    ];
    return (
        <div className="Testimonials bg-[#F0F8FF]">
            <div className=" max-w-7xl mx-auto py-12 px-4">
                <h2 className="text-4xl font-bold text-center">
                    What the People <span className="text-teal-400">Are Saying</span>
                </h2>
                <p className="mt-4 text-gray-600 text-center max-w-3xl mx-auto">
                    Explore success stories from clients across a range of industries, spanning from technopreneurs and start-ups to established enterprises.
                </p>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    modules={[Pagination]}
                    className="mt-10"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-lg shadow-md p-6">

                                <div className="relative">
                                    <img
                                        src={testimonial.imageUrl}
                                        alt={testimonial.name}
                                        className="w-full h-48 object-cover rounded-md mb-4"
                                    />
                                    <button className="absolute inset-0 flex items-center justify-center">
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="48" height="48" rx="24" fill="#F2FBF9" fill-opacity="0.4" />
                                            <path d="M19.2163 13.7092C17.275 12.5956 15.7012 13.5078 15.7012 15.7451V32.2548C15.7012 34.4942 17.275 35.4053 19.2163 34.2928L33.6467 26.0171C35.5886 24.9032 35.5886 23.0984 33.6467 21.9847L19.2163 13.7092Z" fill="white" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="text-gray-600">{testimonial.testimonial}</p>
                                <h3 className="mt-4 text-xl font-bold">{testimonial.name}</h3>
                                <p className="text-gray-500">{testimonial.position}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Testimonials;

