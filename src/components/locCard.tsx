import React from 'react'

export interface Cardprop {
  icon: unknown,
  title: string,
  description: string
}
export default function LocCards(props: Cardprop) {
  return (
    <div className='flex flex-row   bg-gray-200 p-4 gap-3 rounded-md ' >
      <div className='border bg-white rounded-md p-4 text-2xl sm:text-xl flex justify-center items-center'>
        {props.icon as string}
      </div>
      <div className='flex flex-col  justify-center space-y-1 text-left'>
        <h1 className='text-xl sm:text-2xl  font-bold'>{props.title}</h1>
        <p className='text-sm'>{props.description} </p>
      </div>


    </div>
  )
}
