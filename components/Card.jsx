import React from "react";
import Link from "next/link";

export const CardProduct = (props) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl object-cover w-80  max-h-[600px]">
      <figure>
        <img src={props.image} className="h-auto object-cover"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.desc}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export const CardProductMini = (props) => {
  return (
    <div className="h-max w-56 mx-1 mt-10 card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={props.image}/>
      </figure>
      <div className="inline p-[8px] card-body">
        <h2 className="mb-2 gap-1 card-title">{props.title}</h2>
        <p className="pb-2">{props.desc}</p>
        <div className="card-actions justify-center">
          <button className="min-h-[2rem] text-[0.8rem] h-8 font-medium btn btn-primary"><Link href="/oneproduct" >Buy Now</Link></button>
        </div>
      </div>
    </div>
  );
};



export const CardProductBig = () => {
    return (
        <div className="flex justify-center card lg:card-side bg-base-100 shadow-2xl lg:w-[64rem] sm:w-80">
            <figure>
              <img className="xl:max-h-[70vh] W-[50%]" src="/imgs/hmgoepprod.jpg" alt="Album"/>
            </figure>
            <div className="card-body w-[70%]">
                <h3 className="card-title pr-3">New album is released and nowhere!</h3>
                <p className="w-[70%] pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                    aut blanditiis
                    consequuntur deserunt dolndis repellat repellendus similique suscipit.
                </p>
                <p className="w-[70%] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                    aut blanditiis
                    consequuntur deseciendis repellat repellendus similique suscipit.
                </p>
                <p className="w-[70%] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                    aut blanditiuia, quisquam reiciendis repellat repellendus similique suscipit.
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Latest drops</button>
                </div>
            </div>
        </div>
    );
};



