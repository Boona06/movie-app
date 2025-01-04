import { FaRegMoon } from "react-icons/fa";
export default function Navigation(){
    const darkMode =  ()=>{
        if(1==1){
            
        }
    }
    return(
        <>
        <div className="flex justify-between pt-4">
            <div className="flex text-[#4338CA] gap-2 pl-4 lg:pl-20 text-xl">
                       <svg className="pt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" ><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/></svg>
                         <p className="font-inter italic font-bold text-md ">Movie Z</p>
             </div>
        <button className="border-4 border-solid border-[#18181B] rounded-lg p-3" >
               <FaRegMoon />
        </button>
        </div>
        </>
    );
}