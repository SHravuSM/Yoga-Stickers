import React from "react";

export default function Items(props) {
  return (
    <div className="p-1 h-auto flex flex-col items-center w-1/2 rounded-[4px] bg-white">
      <div className="h-[80%] m-[.1%] w-auto">
        <img className="border rounded-md h-full w-full" src={props.image} alt="" />
      </div>

      <div className="h-[20%] w-full">
        <div className="Upper flex items-center justify-around">
          <div className="mob:text-sm tab:text-lg lap:text-xl">
            ₹{props.price}/
            <span className="text-green-500 font-medium tracking-tighter font-mono">
              piece
            </span>
          </div>

          <hr className="rotate-90 mob:w-[15%] tab:w-[5%] w-[3.5%] bg-black" />

          <div className="flex mob:text-[8px] tab:text-[10px] lap:text-[14px] items-center flex-col">
            <div>₹{props.price * 1000}</div>
            <div>for 1000 pieces</div>
          </div>
        </div>

        <div className="Lower"></div>
      </div>
    </div>
  );
}
