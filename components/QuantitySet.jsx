import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'


const QuantitiySet = (props) => {
    return(
        <div className="flex w-[100%] mb-2">
            <div className={`flex bg-[#e9e9e7] h-6 rounded-[10px] ${props.size}`} >
              <div onClick={props.plusFn} className="cursor-pointer flex justify-center items-center rounded-[10px] w-[20%] bg-[#ffb7c1] hover:bg-[#ca858ec7] hover:ease-in-out">
                <AiOutlinePlus className="flex"/>
              </div>


              <div className="flex w-[60%] justify-center">
                <span>{props.qnt}</span>
              </div>


              <div onClick={props.minFn} className="cursor-pointer flex justify-center items-center rounded-[10px] w-[20%] bg-[#ffb7c1] hover:bg-[#ca858ec7] hover:ease-in-out">
                <AiOutlineMinus className="flex"/>
              </div>
            </div>
          </div>
    )
}

export default QuantitiySet