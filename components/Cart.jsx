import React, { useRef } from "react";
import Link from 'next/link'
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import linkFor from '../lib/linkGen'
import toast from "react-hot-toast";
import QuantitiySet from "./QuantitySet";
import { ImCross } from "react-icons/im";



const Cart = () => {
    const { totalPrice, totalQnt, cartItems, cartQnt, delItem } = useStateContext()
    return(
        <div className="flex flex-col w-[100%] h-[100%] navText relative">
            <p className="flex gap-2 ">Your cart: <span className="font-bold mb-4">{`(${totalQnt} items)`}</span></p>

            <div className=" flex flex-col w-[100%] max-h-[80%] overflow-y-scroll gap-2">
                {cartItems.length >= 1 && cartItems.map((item, i) => (
                    <div className="flex gap-2 w-[100%]" key={i}>
                        <img className="w-[30%] rounded-[10px]" src={urlFor(item.image && item.image[0])} alt=""/>
                        <div className="flex flex-col w-[70%]">
                            <p className="font-bold">{`${item.name}`}</p>
                            <p>{`size: ${item.pickedsize}`}</p>
                            <QuantitiySet size="w-[70%]" plusFn={()=>cartQnt(item._id,'add', item.pickedsize)} minFn={()=>cartQnt(item._id,'min', item.pickedsize)} qnt={item.quantity}/>
                        </div>
                        <div className=" flex h-[100%] items-start">
                            <div onClick={()=>delItem(item._id, item.pickedsize)} className="flex cursor-pointer bg-[#e9e9e7] hover:bg-red-400 transition-all p-[4px] rounded-md">
                                <ImCross/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex w-[100%] h-[20] absolute bottom-0 items-start flex-col">
                <p className="text-left font-bold flex gap-2">Subotal: <span className="font-normal">${Math.round((totalPrice + Number.EPSILON) * 100)/100}</span></p>
                <button type="button" className="rounded-[10px] w-[100%] btn btn-primary">Checkout</button>
            </div>
        </div>
    )
}
export default Cart