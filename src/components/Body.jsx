import React from "react";
import Items from "./Items";
  import Logo from "./images/Logo.svg";

export default function () {  
  return (
    <div className=" mt-1 h-svh lap:h-[85.5svh] rounded-md p-1 tab:h-[89svh] mob:h-[93svh] w-full mob:top-9 z-10 relative ">
      <Items image={Logo} price={2.0}></Items>
    </div>
  );
}
