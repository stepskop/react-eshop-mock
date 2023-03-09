import React from "react";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <>
            <section className="flex flex-col justify-center items-center">
                <div className="mt-4">
                    <h1 className=" flex lg:text-4xl drop-shadow-xl text-center mt-20 text-2xl ">
                        How to contact us?
                    </h1>
                </div>
                <div className="flex mx-auto mt-17 border border-white rounded-2xl lg:w-[40em] md:w-[30rem] w-80 shadow-xl">
                    <div className="w-full relative flex items-center justify-center rounded-2xl">
                        <div
                            className="py-4 w-full px-4 flex flex-col items-center justify-center relative z-40 rounded-2xl text-black">
                            <p className="text-base leading-normal text-center ">
                                Subscribe to your newsletter to stay in the loop. Our newsletter
                                is sent once in a week on every friday so subscribe to get
                                latest news and updates.
                            </p>
                            <div className="border border-white flex flex-col items-center w-full mt-6 space-y-0 ">
                                <input
                                    className="border rounded-2xl border-transparent text-base w-full mb-5 font-medium leading-none  p-4 focus:outline-none bg-transparent placeholder-black"
                                    placeholder="Email Address"
                                    id="newsletter"
                                />
                                <button className="btn btn-primary px-12">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
}
