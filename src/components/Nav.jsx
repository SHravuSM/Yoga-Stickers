import React, { useState } from "react";
import SearchDropdown from "./SearchDropdown";
import CategoryDrowpdown from "./CategoryDrowpdown";
import About from "./About";

export default function Nav(props) {
  const [catStatus, setCatstatus] = useState(false);
  const [InputVal, setInputVal] = useState("");

  return (
    <div className="bg-gradient-to-r w-vw relative z-20 from-slate-900 via-purple-600 to-red-300 mob:w-[98%] mob:h-9 tab:h-16 tab:w-[100%] mob:fixed flex justify-around items-center lap:h-24 rounded-[4px]">
      <div className="h-full mob:gap-1 tab:gap-2 gap-4 flex items-center">
        <img
          className="mob:h-7 tab:h-10 h-14 rounded-lg"
          src="./src/components/images/Logo.png"
          alt=""
        />
        <p className="font-bold mob:text-[0px] tab:text-sm mob:font-thin text-white font-sans text-3xl ">
          YOGA Stickers
        </p>
      </div>

      <div className="lap:h-12 mob:h-6 relative mob:w-[58%] w-[35%] mob:rounded-[3px] tab:rounded-[3px] rounded-lg bg-gradient-to-r from-purple-600 to-red-300 tab:gap-1 tab:h-8 gap-4 mob:gap-1 flex items-center">
        <input
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => console.log(e.target.value)}
          value={InputVal}
          className="w-[80%] cursor-pointer tab:w-[70%] mob:rounded-[3px] tab:rounded-[3px] mob:text-sm opacity-40 h-full rounded-lg border-slate-400 placeholder:text-black text-lg mob:placeholder:text-[12px] mob:placeholder:font-sans placeholder:font-mono pl-3 tab:placeholder:text-sm"
          type="text"
          placeholder="Search Products"
        />
        <hr className="border h-[70%] border-white" />
        <img
          onClick={(e) => {
            console.log(InputVal);
          }}
          className="h-8 mob:h-5 tab:h-6 rounded-lg"
          src="./src/components/images/Search.png"
          alt=""
        />
        <div
          onClick={() => setCatstatus(!catStatus)}
          className="flex flex-col items-center justify-center h-full mob:pl-0 mob:pr-0 pl-3 pr-3 border-white border-l-2 w-14"
        >
          <p className="text-center mob:text-[10px] tab:text-[10px] font-mono text-white font-semibold">
            All
          </p>
          <img
            className="w-4 mob:w-2 tab:w-2"
            src="./src/components/images/Down.png"
            alt=""
          />
        </div>

        {catStatus ? <CategoryDrowpdown /> : <></>}

        {InputVal.length != 0 ? <SearchDropdown InputVal={InputVal} /> : <></>}
      </div>

      <div className="h-12 mob:gap-2 rounded-md gap-14 tab:gap-[10px] tab:justify-around tab:w-[30%] flex items-center">
        <div
          onClick={() => {
            props.About();
          }}
        >
          <img
            className="h-10 cursor-pointer active:size-9 mob:h-5 tab:h-8 rounded-lg"
            src="./src/components/images/About.png"
            alt=""
          />
        </div>
        <img
          className="h-10 mob:h-5 tab:h-8 rounded-lg"
          src="./src/components/images/Profile.png"
          alt=""
        />

        <div className=" flex justify-between items-start ">
          <img
            className="h-10 mob:h-5 tab:h-8 rounded-lg"
            src="./src/components/images/Bag.png"
            alt=""
          />
          {props.yes ? (
            <div className="bg-green-600 text-white flex justify-center items-center rounded-[50%] mob:h-3 mob:w-3 h-5 w-5 mob:text-[7px] text-[15px] font-mono z-10">
              <span>{props.yes}</span>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
