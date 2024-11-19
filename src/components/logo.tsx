import React from 'react'
import Image from 'next/image'

export default function Logos() {
  return (
    <div className='bg-gray w-full flex-col md:max-w-[1280px] flex md:flex-row py-4 gap-3 h-[150px] items-center justify-between'>
      <h1 className='md:font-bold font-[Roboto] font-semibold text-lg md:text-2xl px-8'>
        Trusted by the world &#39; s best companies [social proof to build credibility]

      </h1>
      <div className='flex flex-row gap-3 '>
        <div className='flex items-center justify-center rounded-md md:w-[123px] h-[38]'>
          <Image src={"/images/AirbnbLogo.svg"} alt={"item"} height={38} width={123} />
        </div>
        <div className='flex items-center justify-center rounded-md md:w-[123px] h-[38]'>
          <Image src={"/images/Logo2.svg"} alt={"item"} height={38} width={123} />


        </div>
        <div className='flex items-center justify-center rounded-md md:w-[123px] h-[38]'>
          <Image src={"/images/Logo3.svg"} alt={"item"} height={38} width={123} />

        </div>
        <div className='flex items-center justify-center rounded-md md:w-[123px] h-[38] '>
          <Image src={"/images/Logo4.svg"} alt={"item"} height={38} width={123} />

        </div>
        <div className='flex items-center justify-center rounded-md md:w-[123px] h-[38]'>
          <Image src={"/images/Logo5.svg"} alt={"item"} height={38} width={123} />

        </div>
        <div className='flex items-center justify-center rounded-md md:w-[123px] h-[38]'>
          <Image src={"/images/Logo6.svg"} alt={"item"} height={38} width={123} />

        </div>

      </div>
      .
    </div>
  )
}
