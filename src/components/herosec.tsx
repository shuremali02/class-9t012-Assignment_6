import React from 'react'
import Image from 'next/image'


export default function HeroSec() {

    return (
        <div className='bg-[#FFFFFF] w-full max-w-[428px] md:max-w-[1280px]  flex flex-col  md:flex-row  '>
            <div className='w-full flex flex-col py-8 mx-2 justify-start md:justify-center items-center md:items-start md:px-4 gap-y-9 md:mx-12 md:w-1/2 '>
                <div className='flex flex-col md:max-w-[500px] w-full max-w-[428px] md:text-left md:gap-3'>

                    <h1 className='font-[Roboto] text-3xl md:text-6xl '>Learn new skills online with ease</h1>
                    <p className='font-[Roboto] text-lg md:text-lg  h-[54px] '>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
                </div>
                <div className='flex gap-2'>
                    <button className='rounded-[5px] border-[1px] border-black py-3 px-6'>Start Learning Now</button>
                    <button className='rounded-[5px] border-[1px] border-black py-3 px-6 bg-black text-white '>Explore Courses</button>

                </div>
            </div>

            <div className='w-full md:w-1/2 '>
                <Image src={"/images/HeroSec.svg"}
                    alt='herosectionimage'
                    height={900}
                    width={720} />
            </div>
        </div>
    )
}
