import React from "react";

export const CardProduct = (props) => {
  return (
    <div className="w-80 mx-auto mt-10 card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={props.image} />
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
    <div className="w-64 mx-1 mt-10 card card-compact bg-base-100 shadow-xl ${props.margin}">
      <figure>
        <img src={props.image} />
      </figure>
      <div className="inline p-[8px] card-body">
        <h2 className="mb-2 gap-1 card-title">{props.title}</h2>
        <p className="pb-2">{props.desc}</p>
        <div className="card-actions justify-center">
          <button className="min-h-[2rem] text-[0.8rem] h-8 font-medium btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
