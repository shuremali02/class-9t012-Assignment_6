import Image from "next/image";
import { FaStar } from "react-icons/fa";
export interface TestimonialsProp {
    description: string;
    image: string;
    name: string;
    designation: string
}
import React from 'react'

export default function TestimonialsCard(props: TestimonialsProp) {
    return (
        <div className='flex justify-center items-center w-full max-w-[428px] md:max-w-[1280px] '>
            <div className="w-full max-w-md  h-auto bg-white border border-gray-300  broder-2 p-4 m-4 ">
                <div className="flex flex-col mb-2">
                    <p className="flex flex-row mb-2">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />

                    </p>
                    <p className="text-sm sm:text-md pt-2 font-[Roboto] space-6 ">{props.description}</p>

                </div>
                <div className="flex flex-row gap-4 items-center">
                    <div className="flex items-center">
                        <Image src={props.image} alt={props.name} width={40} height={0} className="border broder-2 rounded-full" />
                    </div>
                    <div className="flex flex-col ">
                        <h1 className="text-md font-semibold font-[Roboto]">{props.name}</h1>
                        <p  className="font-[Roboto] text-md  "> {props.designation}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
