import React from "react";

function Subscribe() {
    return (
        <div className="Subscribe">
            <div className="bg-[#072B4A] text-white p-6 rounded-md max-w-7xl mt-10 mx-auto py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="order-1 lg:order-1 space-y-2">
                        <h2 className="text-lg font-semibold">Want to know what we are up to?</h2>
                        <p className="text-sm">Subscribe to our newsletter.</p>
                    </div>
                    <form className="order-2 lg:order-2 flex flex-row sm:space-x-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="rounded-md p-3 text-black  focus:outline-none focus:ring-2 focus:ring-blue-500 h-10 w-full sm:w-auto"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6  h-10 rounded-md hover:bg-blue-600 transition w-full sm:w-auto"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>


        </div>
    );
}

export default Subscribe;

