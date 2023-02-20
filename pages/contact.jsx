import React from "react";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <>
            <section className="welcome w-80 mx-auto mt-4 pb-4 xl:hidden">
                <div className="mt-4">
                    <h1 className="text-3xl drop-shadow-xl text-center">
                        How to contact us?
                    </h1>
                </div>

                <div className="mx-auto mt-4 border rounded-2xl">
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

                <div className="flex flex-row  gap-y-6 mb-4 mt-6 ml-10 text-xl drop-shadow-xl">
                    <div className="pb-2 ">
                        <h6 className="font-bold text-2xl  pb-2">Contact us via</h6>
                        <p>testingmail@mail.xyz</p>
                        <p>+420700700700</p>
                        <p>Na pamlsku 12, Praha 1</p>
                    </div>
                </div>
                <div className="flex flex-row gap-y-6 mb-4 mt-6 ml-10  text-xl drop-shadow-xl">
                    <div className=" pb-2 ">
                        <h6 className="font-bold text-2xl  pb-2">Follow us on</h6>
                        <p>Instagram</p>
                        <p>TikTok</p>
                        <p>Facebook</p>
                    </div>
                </div>
            </section>
            <footer className="mt-4 my-4 p-3 border-2 border-white rounded-2xl w-80 mx-auto xl:hidden">
                <div className="">

                    <p className="opacity-60">Copyright © 2022 Blendade</p>
                </div>
                <div className="flex flex-row gap-x-1 flex-wrap opacity-75">
                    <p className=" border-r border-gray-300 pr-2 mr-2">
                        <button>Privacy Policy</button>
                    </p>
                    <p className=" border-r border-gray-300 pr-2 mr-2">
                        <button>Terms of Use</button>
                    </p>
                    <p className=" border-r border-gray-300 pr-2 mr-2">
                        <button>Refunds</button>
                    </p>
                    <p className=" border-r border-gray-300 pr-2 mr-2">
                        <button>Credits</button>
                    </p>
                    <p className="">
                        <button>Legal</button>
                    </p>
                </div>
            </footer>
            <section className="w-[80%] mx-auto">
                <div className="mt-4">
                    <h1 className="text-3xl drop-shadow-xl text-center">
                        How to contact us?
                    </h1>
                </div>
                <div className="mx-auto mt-20 border rounded-2xl w-[40em] h-[]">
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

                <div className="flex justify-center gap-x-52 mt-20">
                    <div className="flex flex-row gap-y-6 mb-4 mt-6 ml-10 text-2xl drop-shadow-xl">
                        <div className=" pb-2 ">
                            <h6 className="font-bold text-3xl pb-2">Follow us on</h6>
                            <p>Instagram</p>
                            <p>TikTok</p>
                            <p>Facebook</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-y-6 mb-4 mt-6 ml-10 text-2xl drop-shadow-xl">
                        <div className="pb-2 ">
                            <h6 className="font-bold text-3xl pb-2">Contact us via</h6>
                            <p>testingmail@mail.xyz</p>
                            <p>+420700700700</p>
                            <p>Na pamlsku 12, Praha 1</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center gap-x-52 mt-20 text-center">
                    <div className="flex flex-col  gap-y-6 mb-4 mt-6 ml-10 text-2xl drop-shadow-xl">

                        <p>Product</p>
                        <p>Gift card</p>
                        <p>Shipping</p>
                        <p>Returns</p>
                        <p>My account</p>

                    </div>
                </div>
                <div className="flex justify-center gap-x-52 mt-4  text-center">
                    <div className="flex flex-col  gap-y-6 mb-4 mt-6 ml-10 text-2xl drop-shadow-xl">

                        <p>FAQ</p>
                        <p>Privacy</p>
                        <p>Cookies</p>
                        <p>Terms of Use</p>
                        <p>Credits</p>

                    </div>
                </div>

            </section>
            <Footer></Footer>
            {/*<footer className="mt-20 my-4 p-3 border-2 border-white rounded-2xl w-80 mx-auto ">*/}
            {/*    <div className="">*/}

            {/*        <p className="opacity-60">Copyright © 2022 Blendade</p>*/}
            {/*    </div>*/}
            {/*    <div className="flex flex-row gap-x-1 flex-wrap opacity-75">*/}
            {/*        <p className=" border-r border-gray-300 pr-2 mr-2">*/}
            {/*            <button>Privacy Policy</button>*/}
            {/*        </p>*/}
            {/*        <p className=" border-r border-gray-300 pr-2 mr-2">*/}
            {/*            <button>Terms of Use</button>*/}
            {/*        </p>*/}
            {/*        <p className=" border-r border-gray-300 pr-2 mr-2">*/}
            {/*            <button>Refunds</button>*/}
            {/*        </p>*/}
            {/*        <p className=" border-r border-gray-300 pr-2 mr-2">*/}
            {/*            <button>Credits</button>*/}
            {/*        </p>*/}
            {/*        <p className="">*/}
            {/*            <button>Legal</button>*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</footer>*/}
        </>
    );
}
