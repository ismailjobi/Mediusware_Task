import React from "react";

function Service() {
    const services = [
        {
            title: "Software Development",
            description: "Relieve the Burden of Software Development and Project Management.",
            imageUrl: "SoftwareDevelopment.jpg",
        },
        {
            title: "Web Development",
            description: "We offer One-Of-A-Kind web development solutions to businesses all around the world.",
            imageUrl: "WebDevelopment.jpg",
        },
        {
            title: "Mobile App Development",
            description: "Innovative solutions tailored to your needs, delivering seamless user experiences.",
            imageUrl: "MobileAppDevelopment.jpg",
        },
        {
            title: "E-commerce Solution",
            description: "E-commerce websites need to be user-friendly, but attractive at the same time.",
            imageUrl: "ECommerce.jpg",
        },
        {
            title: "UI/UX Design",
            description: "Crafting interfaces that enhance user experiences, elevating brand engagement effortlessly.",
            imageUrl: "UIUX.jpg",
        },
        {
            title: "API Integration",
            description: "Bridging platforms for effortless data flow, enabling enhanced operational efficiency.",
            imageUrl: "API.jpg",
        },
    ];

    return (
        <section className="text-center py-16">
            <h2 className="text-4xl font-bold">
                Things We’re <span className="text-teal-400">Good At</span>
            </h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
                {services.map((service, index) => (
                    <div key={index} className="relative group bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                        <img
                            src={service.imageUrl}
                            alt={service.title}
                            className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                        <div className="absolute inset-0 p-6 flex mt-40 flex-col justify-center items-center text-center text-white">
                            <h3 className="text-2xl font-semibold mb-2 z-10">{service.title}</h3>
                            <p className="text-sm z-10">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>


            <div className="mt-12 flex justify-center">
                <button className="bg-[#0C98EB] text-white py-3 px-6 rounded-full flex items-center hover:bg-teal-500 transition-all">
                    <span>See All</span>
                    <span className="ml-2"></span>
                    <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 7H17.5M17.5 7L11.5 1M17.5 7L11.5 13" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </button>
            </div>

        </section>
    );
}

export default Service;

