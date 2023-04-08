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
          <Link href={props.link} className="btn btn-primary">Buy now</Link>
        </div>
      </div>
    </div>
  );
};

export const CardProductMini = (props) => {
  return (
    <div className="h-max min-h-[30rem] w-56 mx-1 card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={props.image}/>
      </figure>
      <div className="inline p-[8px] card-body">
        <h2 className="mb-2 gap-1 card-title">{props.title}</h2>
        <p className="pb-2 h-[4rem]">{props.desc}</p>
        <div className="card-actions justify-center">
          <Link href={props.link} className="min-h-[2rem] text-[0.8rem] h-8 font-medium btn btn-primary">Buy now</Link>
        </div>
      </div>
    </div>
  );
};

export const CardProductMedium = (props) => {
  return (
    <div className="card lg:card-side bg-base-100 w-80 lg:w-auto lg:min-w-[50%] lg:max-w-[35rem] shadow-xl">
  <figure><img src={props.image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p className="w-48">{props.desc}</p>
    <div className="card-actions justify-end">
      <Link className="btn btn-primary" href={props.link} >Buy now</Link>
    </div>
  </div>
</div>
  )
}
export const CardProductLopsided = (props) => {
  return (
    <div className="">
      <div className="card w-80 mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.desc}</p>
        </div>
        <figure>
          <img src={props.image} alt="Shoes" />
        </figure>
      </div>
    </div>
  )
}
export const CardProductBig = (props) => {
    return (
        <div className="flex justify-center card lg:card-side bg-base-100 shadow-2xl lg:w-[60rem]">
            <figure>
              <img className="xl:max-h-[70vh] W-[50%]" src={props.image}alt="Album"/>
            </figure>
            <div className="card-body w-[70%]">
                <h3 className="card-title pr-3">{props.title}</h3>
                <p className="w-[70%] pt-5">
                  {props.desc}
                </p>
                <p className="w-[70%] ">{props.desc1}
                </p>
                <p className="w-[70%] ">{props.desc2}
                </p>
                <div className="card-actions justify-end">
                    <Link className="btn btn-primary" href={props.link} >Buy now</Link>
                </div>
            </div>
        </div>
    );
};



