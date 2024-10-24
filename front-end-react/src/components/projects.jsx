import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Projects() {
    const projects = [
        {
            title: "GoThruhike Website Redesign",
            description: "Thruhike is the ultimate platform for discovering and sharing your favorite places and products.",
            imageUrl: "GoThruhike.jpg",
            link: "#",
        },
        {
            title: "Gamezone Game Launcher",
            description: "Game Launcher offers seamless access to your favorite games, customizable settings, and more.",
            imageUrl: "Gamezone.jpg",
            link: "#",
        },
        {
            title: "Learn Here",
            description: "LearnHere is the platform that presents all the lessons from Beginner to Expert Level.",
            imageUrl: "LearnHere.jpg",
            link: "#",
        },
    ];

    return (
        <div className="Projects">
            <div className=" text-black py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-4xl font-bold">
                                Projects We’d Hang on <span className="text-teal-400">Our Refrigerator</span>
                            </h2>
                            <p className="mt-4 text-gray-400 max-w-[1140px]">
                                Discover our latest work, showcasing innovative solutions and successful collaborations that highlight our expertise in <br /> delivering high-quality software development projects.
                            </p>
                        </div>
                        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg flex items-center hover:bg-teal-500 transition-all">
                            See All
                            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                                <path d="M1.5 7H17.5M17.5 7L11.5 1M17.5 7L11.5 13" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

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
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-lg shadow-md text-black">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-[320px] object-cover rounded-md mb-4"
                                    />
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                    <p className="mt-2 text-gray-600">{project.description}</p>
                                    <a href={project.link} className="text-blue-500 mt-4 inline-block">
                                        <span className="flex items-center">View Project
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 18L15 12L9 6" stroke="#0C98EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        </span>
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Projects;

