"use client"
import { BellIcon, CircleDollarSign, MessageSquareText, Triangle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const SideBar = () => {
    const [active, setActive] = useState(false)
    return ( 
        <div className="bg-blue-900 w-full  text-white h-full flex-1">
            <div className="flex w-full justify-between items-center px-4 py-6">
                <div className="flex items-center gap-5">
                <Image width={100} height={100} src="/profile.png" alt="sidebar profile" className="w-[50px]"/>
                <p>Hello, User</p>                
                </div>
                <BellIcon color="white" fill="white"/>
            </div>
            <div className="bg-gray-500 h-[2px] "></div>
            <div className="mt-4 flex flex-col gap-4">
                <button className={active?"flex items-center w-full px-4 bg-blue-950 h-[40px]" : "flex items-center w-full px-4 h-[40px]"} onClick={()=>{setActive(!active)}}>
                    <div className="flex gap-2 items-center w-full">
                        <MessageSquareText/>
                        <p>Discussion form</p> 
                   </div>
                   <Triangle size={12} fill="white" className= {active? " left-auto rotate-180" : "left-auto" }/>
                </button>
               {
               active && 
               <div className="gap-2 flex flex-col px-4">
                 <div className="flex gap-2 items-center">
                    <CircleDollarSign/>
                    Market Stories
                </div>

                <div className="mt-2 gap-4 flex flex-col ml-8 ">
                    <div>
                        Sentiment
                    </div>
                    <div>
                        Market
                    </div>
                    <div>
                        Sector
                    </div>
                    <div>
                        Watchlist
                    </div>
                    <div>
                        Events
                    </div> 
                    <div>
                        News/Interview
                    </div>
                </div>
               </div>
               }

            </div>
        </div>
     );
}
 
export default SideBar;