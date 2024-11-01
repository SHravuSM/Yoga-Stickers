import React from "react";

export default function SearchDropdown(props) {
  console.log(props.InputVal);

  return (
    <div className="mob:w-[100%] p-[2px] text-white font-sans h-auto tracking-wider pr-[4px] pl-[6px] mob:rounded-[3px] tab:rounded-[3px] mob:text-[12px] mob:z-20 z-10 bg-gradient-to-r to-purple-600 from-red-300 top-[110%] absolute w-[100%] rounded-[3px]">
      <p>{props.InputVal}</p>
    </div>
  );
}
