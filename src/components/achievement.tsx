import React from 'react'

export default function Achivements() {
    return (
        <div className=' py-8  ' >
            <div className='container mx-auto px-4 '>
                <div className='text-center mb-8 space-y-7 '>
                    <div className='flex flex-col justify-center items-center gap-4 py-8'>
                        <h1 className='text-2xl font-bold font-[Roboto] md:text-5xl'>Our Achivements</h1>
                        <p className='font-[Roboto] text-center text-lg'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                        </p>
                    </div>

                    <div className='flex flex-row justify-between  gap-x-20'>

                        <div className='flex  flex-col space-y-3  items-center justify-center w-[256px]'>
                            <h1 className='text-[40px] font-bold font-[Roboto]'>+200</h1>
                            <p className='text-xl font-[Roboto] '>Courses</p>
                        </div>
                        <div className='flex flex-col space-y-3 justify-center items-center w-[256px] '>
                            <h1 className='text-[40px] font-bold  font-[Roboto]'>50K</h1>
                            <p className='text-xl font-[Roboto] '>Mentors</p>

                        </div>
                        <div className='flex flex-col space-y-3 justify-center items-center w-[256px]'>
                            <h1 className='text-[40px] font-bold font-[Roboto]'>370k</h1>
                            <p className='text-xl font-[Roboto] '>Students</p>
                        </div>
                        <div className='flex flex-col space-y-3 justify-center items-center w-[256px]'>
                            <h1 className='text-[40px] font-bold font-[Roboto]'>+100</h1>
                            <p className='text-xl font-[Roboto] '>Recoginition</p>
                        </div>

                    </div>

                </div>


            </div>
        </div>




    )
}
