import React from "react";
import Footer from "./Footer";

export default function Story() {
  return (
    <>
      <section className="flex flex-col align-items-center w-80 mx-auto">
        <h1 className="text-3xl mt-6 px-4">This is we</h1>
        <div className="border-2 border-white rounded-2xl shadow-xl w-80 mx-auto  p-3 px-4">
          
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            sint dolor reprehenderit neque, quaerat ea in laborum assumenda aut,
            quas cum et inventore. Velit similique soluta delectus fuga
            molestiae fugiat?
          </p>
        </div>
        <div className="border-2 border-white rounded-2xl shadow-xl w-80 mx-auto mt-10 p-3 px-4">
          <h2 className="text-center text-xl pb-2">Me</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            sint dolor reprehenderit neque, quaerat ea in laborum assumenda aut,
            quas cum et inventore. Velit similique soluta delectus fuga
            molestiae fugiat?
          </p>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
