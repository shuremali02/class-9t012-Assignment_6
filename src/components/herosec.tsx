import React from 'react'
import Image from 'next/image'


export default function HeroSec() {

    return (
        <div className='bg-[#FFFFFF] w-full  max-w-[1280px]  flex flex-col  md:flex-row  '>
            <div className='w-full flex flex-col justify-center md:px-4 gap-y-9 pt-7 items-center md:items-start md:mx-12 '>
                <div className='md:text-left md:gap-y-7 w-full max-w-[500px] flex flex-col gap-8 py-6 px-5 '>

                    <h1 className='font-bold font-[Roboto] text-3xl md:text-6xl '>Learn new skills online with ease</h1>
                    <p className='text-lg md:text-xl md:h-[54px] font-[Roboto] '>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
                </div>
                <div className='flex gap-2 mb-4'>
                    <button className='rounded-[5px] border-[1px] border-text py-3 px-6'>Start Learning Now</button>
                    <button className='rounded-[5px] border-[1px] border-text py-3 px-6 bg-text text-white '>Explore Courses</button>

                </div>
            </div>

            <div className='w-full  '>
                <Image src={"/images/HeroSec.svg"}
                    alt='herosectionimage'
                    height={900}
                    width={720} />
            </div>
        </div>
    )
}
