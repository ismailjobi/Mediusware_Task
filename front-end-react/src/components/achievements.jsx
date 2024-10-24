import React from "react";

function Achievements() {
    const awards = [
        { imgSrc: "Clutch.png", alt: "Clutch", rating: "4.9/5.0", review: "★★★★★" },
        { imgSrc: "Upwork.png", alt: "Upwork", badge: "Top Rated Plus" },
        { imgSrc: "Google.png", alt: "Google", review: "★★★★★" },
        { imgSrc: "TopDevelopers.png", alt: "Top Developers", award: "Top Software Developers" },
    ];

    return (
        <div className="Achievements">
            <div className="bg-blue-50 py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold">
                        Achievements <span className="text-teal-400">& Awards</span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                        People know us for our top-notch work and great customer service, all of whom have expressed nothing but positive feedback about our services. Take a moment to see for yourself.
                    </p>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
                        {awards.map((award, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                                <img
                                    src={award.imgSrc}
                                    alt={award.alt}
                                    className="w-[342px] h-[150px] object-contain mx-auto mb-4"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Achievements;

