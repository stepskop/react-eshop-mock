import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer
                className="lg:w-[72rem] max-w-[97vw] md:w-[45rem] w-80 mx-auto mb-4 border-2 border-white rounded-2xl shadow-xl p-6 mt-[14em] flex flex-row justify-around">
                <div className="flex flex-col justify-between mr-4">
                    <div className="flex items-center flex-col">
                        <button><Link href="/"><img className="w-48" src="/imgs/big-logo.png" alt=""/></Link></button>
                        <p className="opacity-60">Copyright © 2022 Blendade</p>
                    </div>
                    <div className="flex flex-row w-[100%] ml-2 gap-x-1 flex-wrap opacity-75 ">
                        <p className=" border-r border-gray-300 pr-2 mr-2">Privacy Policy</p>
                        <p className=" border-r border-gray-300 pr-2 mr-2">Terms of Use</p>
                        <p className=" border-r border-gray-300 pr-2 mr-2">Refunds</p>
                        <p className=" border-r border-gray-300 pr-2 mr-2">Credits</p>
                        <p className="">Legal</p>
                    </div>
                </div>
                <div className="flex gap-x-[2vw] lg:text-xl md:flex-row flex-col">
                    <div className="pb-2">
                        {/*border-dotted  border-black border-t-2 border-t-2*/}
                        <h6 className="font-bold lg:text-2xl">Contact Us</h6>
                        <p>testingmail@mail.xyz</p>
                        <p>+420700700700</p>
                        <p>Na pamlsku 12, Praha 1</p>
                    </div>
                    <div className=" pb-2 ">
                        {/*border-dotted  border-black border-t-2 border-t-2*/}
                        <h6 className="font-bold lg:text-2xl">Follow Us</h6>
                        <p>Instagram</p>
                        <p>TikTok</p>
                        <p>Facebook</p>
                    </div>
                </div>

            </footer>
        </>
    );
}
