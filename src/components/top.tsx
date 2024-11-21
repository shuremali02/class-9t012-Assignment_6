import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function TopSec() {
    return (
        <div className='hidden md:flex w-full max-w-[428px] md:max-w-[1280px] h-[54px] bg-gray'>

            <div className=' py-3 px-10 w-full flex justify-between items-center gap-8'>


                <div className=' w-full flex items-center gap-4 max-w-[386px] h-[30px]  '>
                    <span className='h-[21px]  text-sm font-[Roboto]'>
                        Phone Number: 956 742 455 678
                    </span>
                    <div className='h-[30px] border border-1 border-[#676767] '></div>
                    <span className='h-[21px] text-sm font-[Roboto]' >
                        Email:info@ddsgnr.com

                    </span>


                </div>
                <div className='w-full max-w-[736px] h-6 flex justify-end gap-4'>
                    <Link className='h-6 w-6' href={"#"}  ><Image src={"/images/facebook.png"} alt={"Facebook icon"} height={18} width={10} /> </Link>
                    <Link className='h-6 w-6' href={"#"}  ><Image src={"/images/Linkedin.png"} alt={"Linkedin icon"} height={18} width={18} /> </Link>
                    <Link className='h-6 w-6' href={"#"}  ><Image src={"/images/Vector.png"} alt={"Twitter icon"} height={18} width={20} /> </Link>
                    <Link className='h-6 w-6' href={"#"}  ><Image src={"/images/Instagram.png"} alt={"logo"} height={18} width={24} /> </Link>
                </div>

            </div>
        </div>
    )
}
