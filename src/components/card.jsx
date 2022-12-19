import React from "react";

export const CardProduct = () => {
  return (
    <div className="w-80 mx-auto mt-10 card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src="../src/assets/imgs/hmgoepprod.jpg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Basic black</h2>
        <p>Buy simply, not expensive.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
