import CoursesCards, { Cardprops } from '@/components/card';
import Categories from '@/components/category'
import Link from 'next/link';
import React from 'react'

export default function Courses() {
    const courses: Cardprops[] = [
        {
            image: '/images/course1.svg',
            category: 'Design',
            title: 'UX/UI Design 201',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
            rating: "5.0",
            price: '$400 ',
        },
        {
            image: '/images/course2.svg',
            category: 'Programmimg',
            title: 'Introduction to Python',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
            rating: "5.0",
            price: '$400',
        },
        {
            image: '/images/course3.svg',
            category: 'Business',
            title: 'Data Analysis for Beginners',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
            rating: "5.0",
            price: '$400',
        },
        {
            image: '/images/course4.svg',
            category: 'Art',
            title: 'Art Specialization',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
            rating: "5.0",
            price: '$400 ',
        },
        {
            image: '/images/course5.svg',
            category: 'Law',
            title: 'Rule of Law',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
            rating: "5.0",
            price: '$400 ',
        },
        {
            image: '/images/course6.svg',
            category: 'Tech',
            title: 'Introduction to webflow',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
            rating: "5.0",
            price: '$400',
        },
    ];

    return (

        <div>
            <Categories />

            <div className='text-center py-12 '>
                <h1 className='font-bold text-4xl mb-4 '>
                    Courses
                </h1>
                <p className='text-lg text-gray-600 '>Your Ultimate Guide to learning</p></div>

            <div className='flex items-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5  max-w-[1280px] ' > 
                    {courses.map((course, index) =>
                        <div className={`${index > 2 ? "hidden sm:block " : "block"}`} key={index}>
                            < CoursesCards key={index} {...course} />
                        
                        </div>

                    )}
                     <Link href={"/Courses"} className='text-center py-8 mt-4 ' >
        <button className='border border-gray-800 py-2 px-6 rounded-md text-sm sm:text-md font-bold transition-transform hover:scale-95 '>View All Courses</button>
      </Link>
                </div>

            </div>


        </div>
    )
}
