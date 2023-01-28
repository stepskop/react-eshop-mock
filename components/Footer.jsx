import React from "react";

export default function Footer() {
  return (
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
  );
}
