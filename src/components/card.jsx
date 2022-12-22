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
