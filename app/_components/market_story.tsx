import Image from "next/image";

const MarketStory = (
    {
    img,
    title,
    description,
    }:
    {
    img: string,
    title: string,
    description: string,
    }
) => {
    return (  
        <div className="md:w-[60%] h-full flex flex-col border border-gray-400 rounded-md">
            <div className="flex">
                <Image height={500} width={500} src={img} alt="market story image" className="object-cover"/>
            </div>
            <div className="p-4">
                <p className="font-[500] ">{title}</p>
                <p className="text-[12px] mt-2">{description}</p>
            </div>
        </div>
    );
}
 
export default MarketStory;