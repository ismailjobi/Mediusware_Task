
function Service() {
    return (
        <div className="Service">
            <form className="card-body" id="serviceform" >
                <div className="flex bg-base-100 w-full h-full flex-col">
                    <div className="card bg-base-100 rounded-box grid h-2 place-items-start">
                        <b><strong className="text-black">Drop Use A <span className="text-red-400">Line</span> </strong></b>
                    </div>
                    <div className="divider"></div>
                    <div className="card bg-base-300 rounded-box grid h-auto">
                        <div className="flex flex-col gap-4 w-full lg:flex-row">
                            {/* Name and Phone Number */}
                            <div className="card bg-base-300 rounded-box flex-grow w-full">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Name*</span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        className="input input-sm text-black input-bordered w-full"
                                    />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">
                                            Phone Number <span className="text-stone-400">(Optional)</span>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Phone Number"
                                        className="input input-sm text-black input-bordered w-full"
                                    />
                                </label>
                            </div>
                            <div className="divider lg:divider-horizontal"></div>
                            {/* Email and Company Name */}
                            <div className="card bg-base-300 rounded-box flex-grow w-full">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Email*</span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Email"
                                        className="input input-sm text-black input-bordered w-full"
                                    />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">
                                            Company Name <span className="text-stone-400">(Optional)</span>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Company Name"
                                        className="input input-sm text-black input-bordered w-full"
                                    />
                                </label>
                            </div>
                        </div>
                        <br />
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Service you Need <span className="text-stone-400">(You can choose multiple)</span></span>
                            </div>
                            <div>
                                <input type="checkbox" name="service1" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-xs join-item" aria-label="Mobile Development" value="Mobile Development" />
                                <input type="checkbox" name="service2" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-xs join-item" aria-label="Web Development" value="Web Development" />
                                <input type="checkbox" name="service3" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-xs join-item" aria-label="SQA Solution" value="SQA Solution" />
                                <input type="checkbox" name="service4" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-xs join-item" aria-label="Web UI/UX Design" value="Web UI/UX Design" />
                                <input type="checkbox" name="service5" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-xs join-item" aria-label="API Integration" value="API Integration" />
                                <input type="checkbox" name="service6" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-xs join-item" aria-label="Mobile UI/UX Design" value="Mobile UI/UX Design" />
                                <input type="checkbox" name="service7" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-xs join-item" aria-label="Software Development" value="Software Development" />
                                <input type="checkbox" name="service8" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-xs join-item" aria-label="Custon Service" value="Custon Service" />

                            </div>

                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Your Budget <span className="text-stone-400">(Optional)</span></span>
                            </div>
                            <div>
                                <input type="radio" name="service" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-xs join-item" aria-label="Less than {'>'} $500" value="Less than {'>'} $500" />
                                <input type="radio" name="service" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-xs join-item" aria-label="$500 - $1000" value="$500 - $1000" />
                                <input type="radio" name="service" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-xs join-item" aria-label="$1001 - $1500" value="$1001 - $1500" />
                                <input type="radio" name="service" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-xs join-item" aria-label="$1501 - $2000" value="$1501 - $2000" />
                            </div>

                        </label>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Deep Details About Your Qurery <span className="text-stone-400">(Optional)</span></span>
                            </div>
                            <textarea className="textarea text-black textarea-bordered h-24" placeholder="Tell us more about your qurery. "></textarea>
                        </label>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Add Atachments <span className="text-stone-400">(Optional)</span></span>
                            </div>
                            <input type="file" multiple className="file-input bg-base-300 input-sm file-input-bordered w-full " />
                        </label>
                    </div>
                    <div className="divider"></div>
                    <div className="card bg-base-100 rounded-box grid h-10 place-items-start">
                        <button type="submit" value="Submit" className="btn btn-primary btn-xs">
                            Button
                            <img src="https://th.bing.com/th/id/OIP.WoQRjIpml881xhHT2rj_vwHaHa?rs=1&pid=ImgDetMain" className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Service;