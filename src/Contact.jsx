import React from "react";

export default function Contact() {
  return (
    <>
      <section className="welcome w-80 mx-auto mt-4 pb-4">
        <div className="mt-4">
          <h1 className="text-3xl drop-shadow-xl text-center">
            How to contact us?
          </h1>
        </div>

        <div className="2xl:mx-auto 2xl:container mx-auto mt-4 shadow-lg  rounded-2xl">
          <div className="w-full relative flex items-center justify-center rounded-2xl">
            {/* <img
                src="https://i.ibb.co/4sYZ8gC/img-2.png"
                alt="dining"
                className="w-full h-full absolute z-0 hidden xl:block"
              />
              <img
                src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png"
                alt="dining"
                className="w-full h-full absolute z-0 hidden sm:block xl:hidden"
              />
              <img
                src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png"
                alt="dining"
                className="w-full h-full absolute z-0 sm:hidden"
              /> */}
            <div className=" md:my-16 lg:py-16 py-4 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40 rounded-2xl text-black">
              {/* <h1 className="text-4xl font-semibold leading-9 text-white text-center">
                  Don’t miss out!
                </h1> */}
              <p className="text-base leading-normal text-center ">
                Subscribe to your newsletter to stay in the loop. Our newsletter
                is sent once in a week on every friday so subscribe to get
                latest news and updates.
              </p>
              <div className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-6 space-y-4 sm:space-y-0 ">
                <input
                  className="border rounded-2xl border-white sm:border-transparent text-base w-full font-medium leading-none  p-4 focus:outline-none bg-transparent placeholder-black"
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
            <h6 className="font-bold text-2xl  pb-2">
              Contact us via
            </h6>
            <p>testingmail@mail.xyz</p>
            <p>+420700700700</p>
            <p>Na pamlsku 12, Praha 1</p>
          </div>
        </div>
        <div className="flex flex-row gap-y-6 mb-4 mt-6 ml-10  text-xl drop-shadow-xl">
          <div className=" pb-2 ">
            <h6 className="font-bold text-2xl  pb-2">
              Follow us on
            </h6>
            <p>Instagram</p>
            <p>TikTok</p>
            <p>Facebook</p>
          </div>
        </div>
      </section>
      <footer className="mt-4 my-4 p-3 border-2 border-white rounded-2xl w-80 mx-auto">
        <div className="">
          {/*<img className="w-32" src="../src/assets/imgsbig-logo.png" alt=""/>*/}
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
    </>
  );
}
