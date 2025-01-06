"use client"
import { FaRegMoon } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import FilterGenre from "./Filtergenre";
import { useEffect, useState } from "react";
export default function Navigation(){
  const [theme , setTheme]=useState("light")
  useEffect(() => {
    document.documentElement.classList.toggle(`dark`, theme === `dark`);
}, [theme]);

const toggleTheme = ()=> {
    setTheme(theme === `light` ? `dark` : `light`);
}
   
    return(
        <>
        <div className="flex justify-between pt-4">
            <div className="flex text-[#4338CA] pt-3 gap-2 pl-4 lg:pl-20 text-xl">
                       <svg className="pt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" ><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/></svg>
                         <p className="font-inter italic font-bold text-md ">Movie Z</p>
             </div>
             <FilterGenre/>
             <div className="flex gap-4">
              <button className="border-4 border-solid border-[#18181B] rounded-lg p-3" ><IoIosSearch/></button>
             <button onClick={toggleTheme} className="border-4 border-solid border-[#18181B] rounded-lg p-3" >
               <FaRegMoon />
               </button>
             </div>
        </div>
        </>
    );
}