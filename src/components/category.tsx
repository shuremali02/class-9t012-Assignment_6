
import React from 'react';
import CategoryCard, { DesProp } from './categories';
import Link from 'next/link';

export default function Categories() {
  const Cat: DesProp[] = [
    {
      image: "/images/icon-1.svg",
      title: 'Design & Dev',
      availability: '50+ Courses Available',
    },
    {
      image: "/images/icon-2.svg",
      title: 'Marketing',
      availability: '50+ Courses Available',
    },
    {
      image: "/images/icon-5.svg",
      title: 'Development',
      availability: '50+ Courses Available',
    },
    {
      image: "/images/icon-4.svg",
      title: 'Communication',
      availability: '50+ Courses Available',
    },
    {
      image: "/images/icon-5.svg",
      title: 'Digital Marketing',
      availability: '50+ Courses Available',
    },
    {
      image: "/images/icon-6.svg",
      title: 'Self Development',
      availability: '50+ Courses Available',
    },
    {
      image: "/images/icon-7.svg",
      title: 'Business',
      availability: '50+ Courses Availableember',
    },
    {
      image: "/images/icon-8.svg",
      title: 'Finance',
      availability: '50+ Courses Available',
    },
    {
      image: "/images/icon-8.svg",
      title: 'Consulting',
      availability: '50+ Courses Available',
    },
  ];

  return (
    <div className='flex flex-col items-center text-center py-12 '>
      <h1 className='font-bold text-4xl mb-4 '>Explore Courses By Category</h1>
      <p className='mb-10 max-w-xl text-gray-600 '>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 w-full max-w-6xl'>
        {Cat.map((cat, index) =>
          <div className={`${index > 2 ? "hidden sm:block " : "block"}`}><CategoryCard key={index} {...cat} /></div>

        )}
      </div>
      <Link href={"/Courses"} className='text-center py-8 mt-4 ' >
        <button className='border border-gray-800 py-2 px-6 rounded-md text-sm sm:text-md font-bold transition-transform hover:scale-95 '>View All Courses</button>
      </Link>
    </div>
  );
}
