import React from 'react';

function Service() {
    return (
        <div className="Service p-6 max-w-full mx-auto sm:px-4 sm:py-4">
            <form className="card-body bg-white rounded-lg p-6 sm:p-4" id="serviceform">
                <div className="mb-4 text-left">
                    <h1 className="text-3xl font-bold font-serif sm:text-2xl">
                        Drop Us a <span className="text-green-500">Line</span>
                    </h1>
                </div>

                <div className="bg-base-200 p-6 rounded-lg">
                    <div className="px-7 sm:px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                                <label className="block">
                                    <span className="text-gray-700">Name*</span>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md"
                                    />
                                </label>
                                <label className="block mt-4">
                                    <span className="text-gray-700">Phone Number <span className="text-gray-500">(Optional)</span></span>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Phone Number"
                                        className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md"
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="block">
                                    <span className="text-gray-700">Email*</span>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Email"
                                        className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md"
                                    />
                                </label>
                                <label className="block mt-4">
                                    <span className="text-gray-700">Company Name <span className="text-gray-500">(Optional)</span></span>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Company Name"
                                        className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md"
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700">
                                Services You Need <span className="text-gray-500">(You can choose multiple)</span>
                            </label>
                            <div className="flex flex-wrap gap-1">
                                <label className="flex items-center">
                                    <input type="checkbox" name="mobileDevelopment" className="btn btn-outline bg-base-300 hover:bg-green-500" aria-label="Mobile Development" value="mobileDevelopment" id="mobileDevelopment" />
                                </label>

                                <label className="flex items-center">
                                    <input type="checkbox" name="webDevelopment" className="btn btn-outline bg-base-300 hover:bg-green-500" aria-label="Web Development" value="webDevelopment" id="webDevelopment" />
                                </label>

                                <label className="flex items-center">
                                    <input type="checkbox" name="sqaSolution" className="btn btn-outline bg-base-300 hover:bg-green-500" aria-label="SQA Solution" value="sqaSolution" id="sqaSolution" />
                                </label>

                                <label className="flex items-center">
                                    <input type="checkbox" name="UIux" className="btn btn-outline bg-base-300 hover:bg-green-500" aria-label="Web UX/UI Design" value="UIux" id="UIux" />
                                </label>

                                <label className="flex items-center">
                                    <input type="checkbox" name="api" className="btn btn-outline bg-base-300 hover:bg-green-500" aria-label="API Integration" value="api" id="api" />
                                </label>
                            </div>

                            <div className="flex flex-wrap gap-1 mt-2">
                                <label className="flex items-center">
                                    <input type="checkbox" name="mobileUiUx" className="btn btn-outline bg-base-300 hover:bg-green-500" aria-label="Mobile UX/UI Design" value="MobileUXUI" id="mobileUiUx" />
                                </label>

                                <label className="flex items-center">
                                    <input type="checkbox" name="services" className="btn btn-outline bg-base-300 hover:bg-green-500" aria-label="Software Development" value="softwareDevelopment" id="softwareDevelopment" />
                                </label>

                                <label className="flex items-center">
                                    <input type="checkbox" name="services" className="btn btn-outline bg-base-300 hover:bg-green-500" aria-label="Custom Services" value="customServices" id="customServices" />
                                </label>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700">Your Budget <span className="text-gray-500">(Optional)</span></label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-3">
                                <input type="radio" name="budget" className="btn btn-outline bg-base-300 btn-m hover:bg-green-500 join-item" aria-label="Less than &gt; $500" value="Less than $500" />
                                <input type="radio" name="budget" className="btn btn-outline bg-base-300 btn-m hover:bg-green-500 join-item" aria-label="$500 - $1000" value="$500 - $1000" />
                                <input type="radio" name="budget" className="btn btn-outline bg-base-300 btn-m hover:bg-green-500 join-item" aria-label="$1001 - $1500" value="$1001 - $1500" />
                                <input type="radio" name="budget" className="btn btn-outline bg-base-300 btn-m hover:bg-green-500 join-item" aria-label="$1501 - $2000" value="$1501 - $2000" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700">Deep Details About Your Query <span className="text-gray-500">(Optional)</span></label>
                            <textarea
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md"
                                placeholder="Tell us more about your query"
                                rows="3"
                            ></textarea>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700">Add Attachments <span className="text-gray-500">(Optional)</span></label>
                            <div className="join w-full h-10 bg-white border border-gray-300 flex items-center justify-between">
                                <span className="block text-stone-400 ml-4 text-sm">
                                    (a brief, idea, branding, guideline, old design,...)
                                </span>
                                <label className="btn bg-green-500 hover:bg-green-600 text-white btn-xs sm:btn-sm md:btn-md lg:btn-xs cursor-pointer flex items-center">
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.6017 7.26634L8.59127 13.2768C7.22443 14.6436 5.00836 14.6436 3.64152 13.2768C2.27469 11.9099 2.27469 9.69384 3.64152 8.327L9.65193 2.3166C10.5632 1.40537 12.0405 1.40537 12.9518 2.3166C13.863 3.22782 13.863 4.7052 12.9518 5.61643L7.17705 11.3911C6.72144 11.8467 5.98275 11.8467 5.52714 11.3911C5.07153 10.9355 5.07153 10.1968 5.52714 9.74122L10.5947 4.67362" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Add File (5MB)
                                    <input type="file" className="hidden" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-left sm:text-center">
                    <button type="submit" className="btn btn-primary px-6 py-2 flex items-center justify-center">
                        Send Inquiry
                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0004 10H4.50043M4.41577 10.2915L2.08085 17.2662C1.89742 17.8142 1.8057 18.0881 1.87152 18.2569C1.92868 18.4034 2.05144 18.5145 2.20292 18.5567C2.37736 18.6054 2.64083 18.4869 3.16776 18.2497L19.8792 10.7296C20.3936 10.4981 20.6507 10.3824 20.7302 10.2216C20.7993 10.082 20.7993 9.9181 20.7302 9.77843C20.6507 9.61767 20.3936 9.50195 19.8792 9.2705L3.16193 1.74776C2.63659 1.51135 2.37392 1.39315 2.19966 1.44164C2.04832 1.48375 1.92556 1.59454 1.86821 1.74078C1.80216 1.90917 1.8929 2.18255 2.07437 2.72931L4.41642 9.78556C4.44759 9.87947 4.46317 9.92642 4.46933 9.97444C4.47479 10.0171 4.47473 10.0602 4.46916 10.1028C4.46289 10.1508 4.44718 10.1977 4.41577 10.2915Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Service;
