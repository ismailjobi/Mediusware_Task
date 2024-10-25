import React from "react";

function Subscribe() {
    return (
        <div className="Subscribe">
            <div className="bg-[#072B4A] text-white p-6 rounded-md max-w-6xl mt-10 mx-auto py-12 sm:px-6 lg:px-8 flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-semibold">Want to know what we are up to?</h2>
                    <p className="text-sm">Subscribe to our newsletter.</p>
                </div>
                <form  className="flex items-center space-x-3">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Subscribe;

