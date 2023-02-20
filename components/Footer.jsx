import React from "react";

export default function Footer() {
    return (
        <>
            <footer className="mt-14 my-4 p-3 border-2 border-white rounded-2xl w-80 mx-auto xl:hidden">
                <div className="flex flex-row  gap-x-14 gap-y-3.5 mb-4">
                    <div className="pb-2 ">
                        {/*border-dotted  border-black border-t-2 border-t-2*/}
                        <h6 className="font-bold text-lg">Contact Us</h6>
                        <p>testingmail@mail.xyz</p>
                        <p>+420700700700</p>
                        <p>Na pamlsku 12, Praha 1</p>
                    </div>
                    <div className=" pb-2 ">
                        {/*border-dotted  border-black border-t-2 border-t-2*/}
                        <h6 className="font-bold text-lg">Follow Us</h6>
                        <p>Instagram</p>
                        <p>TikTok</p>
                        <p>Facebook</p>
                    </div>
                </div>
                <div className="">
                    {/*<img className="w-32" src="../src/assets/imgsbig-logo.png" alt=""/>*/}
                    <p className="opacity-60">Copyright © 2022 Blendade</p>
                </div>
                <div className="flex flex-row gap-x-1 flex-wrap opacity-75">
                    <p className=" border-r border-gray-300 pr-2 mr-2">Privacy Policy</p>
                    <p className=" border-r border-gray-300 pr-2 mr-2">Terms of Use</p>
                    <p className=" border-r border-gray-300 pr-2 mr-2">Refunds</p>
                    <p className=" border-r border-gray-300 pr-2 mr-2">Credits</p>
                    <p className="">Legal</p>
                </div>
            </footer>
            <footer className="w-[90%] mx-auto mb-4 border-2 border-cyan-500 rounded-2xl shadow-xl p-3 mt-[14em]">
                <div className="flex justify-around">
                    <div>
                        <img src="./public/imgs/big-logo.png"/>
                        <p className="opacity-60">Copyright © 2022 Blendade</p>
                    </div>
                    {/*<div className=" border rounded-2xl scale-90">*/}
                    {/*    <div className=" relative flex items-center justify-center rounded-2xl">*/}
                    {/*        <div*/}
                    {/*            className="py-4 w-full px-4 flex flex-col items-center justify-center relative z-40 rounded-2xl text-black">*/}
                    {/*            <p className="text-base leading-normal text-center ">*/}
                    {/*                Subscribe to your newsletter to stay in the loop. Our newsletter*/}
                    {/*                is sent once in a week on every friday so subscribe to get*/}
                    {/*                latest news and updates.*/}
                    {/*            </p>*/}
                    {/*            <div className="border border-white flex flex-col items-center w-full mt-6 space-y-0 ">*/}
                    {/*                <input*/}
                    {/*                    className="border rounded-2xl border-transparent text-base w-full mb-5 font-medium leading-none  p-4 focus:outline-none bg-transparent placeholder-black"*/}
                    {/*                    placeholder="Email Address"*/}
                    {/*                    id="newsletter"*/}
                    {/*                />*/}
                    {/*                <button className="btn btn-primary px-12">Submit</button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="flex gap-x-[3em]">
                        <div className="pb-2 ">
                            {/*border-dotted  border-black border-t-2 border-t-2*/}
                            <h6 className="font-bold text-lg">Contact Us</h6>
                            <p>testingmail@mail.xyz</p>
                            <p>+420700700700</p>
                            <p>Na pamlsku 12, Praha 1</p>
                        </div>
                        <div className=" pb-2 ">
                            {/*border-dotted  border-black border-t-2 border-t-2*/}
                            <h6 className="font-bold text-lg">Follow Us</h6>
                            <p>Instagram</p>
                            <p>TikTok</p>
                            <p>Facebook</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-x-1 flex-wrap opacity-75 ">
                    <p className=" border-r border-gray-300 pr-2 mr-2">Privacy Policy</p>
                    <p className=" border-r border-gray-300 pr-2 mr-2">Terms of Use</p>
                    <p className=" border-r border-gray-300 pr-2 mr-2">Refunds</p>
                    <p className=" border-r border-gray-300 pr-2 mr-2">Credits</p>
                    <p className="">Legal</p>
                </div>
            </footer>
        </>
    );
}
