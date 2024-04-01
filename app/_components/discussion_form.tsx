import { Eye, Heart, MessageCircleIcon, Share2, View } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function DiscussionForm(
    {
        title,
        description,
        img,
        time,
        NoLikes,
        NoViews,
        NoComments,
        sector
    }:
    {
        title: string,
        description: string,
        img: string,
        time: string,
        NoLikes: string,
        NoViews: string,
        NoComments: string,
        sector: number
    }
) {
  return (
    <div className='md:w-[95%] xl:w-[80%] w-full flex bg-white max-h-[300px] p-2 rounded-lg border border-gray-400 shadow-lg'>
        <div className=''>
            <Image src={img} height={100} width={100} alt='' className='h-[70px] w-[70px]'/>
        </div>

        <div className='w-full h-full flex flex-col p-2 ml-2'>
            <div className='flex-1'>
                <div className='flex justify-between'>
                    <div className='flex gap-6'>
                    <p className='p-1 text-[18px] font-[600]'>{title}</p>
                    <button className='bg-blue-800 text-white text-[14px] w-[110px] rounded-full'>Sector {sector}</button>
                    </div>
                    <p>{time}</p>
                </div>
                <div className='mt-2 w-[85%]'>
                    {description}
                </div>
            </div>
            {/* Icons */}
            <div className='flex justify-between mt-2'>
                <div className='flex gap-2'><Heart/><p>{NoLikes}</p></div>
                <div className='flex gap-2'><Eye/><p>{NoViews}</p></div>
                <div className='flex gap-2'><MessageCircleIcon/> <p>{NoComments} Comments</p></div>
                <div className='flex gap-2'><Share2/><p>share</p></div>
            </div>
        </div>
    </div>
  )
}

export default DiscussionForm