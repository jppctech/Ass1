"use client"
import { useState } from "react";
import DiscussionForm from "../_components/discussion_form";
import MarketStory from "../_components/market_story";
import SideBar from "../_components/sideBar";
import { Triangle } from "lucide-react";

const Dashboard = () => {

    const [active , setActive] = useState(true);
    const [menu, setMenu] = useState(false);
    return (  
        <div className="flex h-full w-full">
            <div className={menu?" flex md:hidden w-full" :"flex md:hidden"}>
            {menu
           && 
           <div className="w-full h-screen flex">
           <SideBar/> 
           </div>}


           <div className=" h-screen items-center bg-gray-200 md:hidden flex">
            <button className="bg-blue-900 h-[100px] flex items-center p-1" onClick={()=>{setMenu(!menu)}}>
            <Triangle fill="white" color="white" size={16} className={menu? " rotate-[270deg]" : "rotate-90"}/>
            </button>
           </div>
            </div>

            <div className={menu? "hidden md:flex flex-col md:flex-row h-full w-full" : "flex flex-col md:flex-row h-full w-full"}>
            <div className="md:hidden flex w-full justify-between h-[60px] bg-blue-800 text-white font-[600]">
                
                {/* first button  */}
                <div className={active? "flex w-full flex-col" : "w-full items-center flex justify-center"}>
                    <button  className={active? "flex-1  w-full bg-blue-950" : "w-full h-full"} onClick={()=>{setActive(true)}}>
                        Discussion form
                    </button>
                    <div className="h-2 bg-red-500"></div>
                </div>

                {/* second button */}
                <div className={active? "w-full items-center flex justify-center h-full" : "flex w-full flex-col"}>
                    <button  className={active? "w-full h-full" : "flex-1 w-full bg-blue-950"} onClick={()=>{setActive(false)}}>
                        Discussion form
                    </button>
                    {!active && <div className="h-2 bg-red-500"></div> } 
                </div>
            </div>

           {menu
           && 
           <div className="w-full lg:w-[800px] h-screen md:flex hidden ">
           <SideBar/> 
           </div>}


           <div className=" h-screen items-center bg-gray-200 hidden md:flex">
            <button className="bg-blue-900 h-[100px] flex items-center p-1" onClick={()=>{setMenu(!menu)}}>
            <Triangle fill="white" color="white" size={16} className={menu? " rotate-[270deg]": " rotate-90" }/>
            </button>
           </div>

           {active? 
           <div className=" md:w-full items-center flex flex-col gap-8 md:ml-6 h-full px-2 ">
            <p className="hidden md:flex text-[24px] font-[600] text-red-400 w-full justify-center mt-2">DISCUSSION FORM</p>
           <div className="md:w-full items-center flex flex-col gap-8 md:ml-6 h-full md:py-0 py-10 pb-20">
           <DiscussionForm
                title="Lorem text"
                description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                img="/profile.png"
                time="2 min"
                NoLikes="2k"
                NoComments="2k"
                NoViews="2k"
                sector={1}
           />
             <DiscussionForm
                title="Lorem text"
                description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                img="/profile.png"
                time="2 min"
                NoLikes="2k"
                NoComments="2k"
                NoViews="2k"
                sector={1}
           />
             <DiscussionForm
                title="Lorem text"
                description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                img="/profile.png"
                time="2 min"
                NoLikes="2k"
                NoComments="2k"
                NoViews="2k"
                sector={1}
           />
             <DiscussionForm
                title="Lorem text"
                description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                img="/profile.png"
                time="2 min"
                NoLikes="2k"
                NoComments="2k"
                NoViews="2k"
                sector={1}
           />
             <DiscussionForm
                title="Lorem text"
                description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                img="/profile.png"
                time="2 min"
                NoLikes="2k"
                NoComments="2k"
                NoViews="2k"
                sector={1}
           />
           </div>
           </div>
           
           : 
           <div className="w-full flex h-full md:hidden p-2 flex-col gap-10 pb-20">
            <MarketStory 
            title="Heading" 
            description="Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
            img="/market.jpg"
            />
            <MarketStory
            title="Heading" 
            description="Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
            img="/market.jpg"/>
            <MarketStory
            title="Heading" 
            description="Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
            img="/market.jpg"/>
            <MarketStory
            title="Heading" 
            description="Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
            img="/market.jpg"/>
           </div>
           }

            <div className=" w-auto md:flex h-full hidden flex-col gap-8 items-center">
            <p className="hidden md:flex text-[24px] font-[600] text-red-400 mt-2">MARKET STORIES</p>
            <MarketStory
            title="Heading" 
            description="Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
            img="/market.jpg"/>
            <MarketStory
            title="Heading" 
            description="Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
            img="/market.jpg"/>
            <MarketStory
            title="Heading" 
            description="Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
            img="/market.jpg"/>
            <MarketStory
            title="Heading" 
            description="Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
            img="/market.jpg"/>
           </div>
            </div>
        </div>
    );
}
 
export default Dashboard;