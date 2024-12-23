import React from "react";
import TestimonialsCard, { TestimonialsProp } from "@/components/testimonials";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function Testimonial() {
  const Test: TestimonialsProp[] = [
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      image: "/images/people1.svg",
      name: "James Nduku",
      designation: "Software Developer",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      image: "/images/people2.svg",
      name: "Erick Kipkemboi",
      designation: "Scrum Master",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      image: "/images/people3.svg",
      name: "Stephen Kerubo",
      designation: "UI/UX Designer",
    },
    // {
    //   description: "I love the personal touch in the posts! It feels like I’m traveling with a friend. Keep up the great work!",
    //   image: 'https://i.pinimg.com/236x/1c/2a/82/1c2a82c92c9ffd43833697b5a6d8836f.jpg',
    //   name: 'John Smith',
    //   designation: 'Travel Blogger',
    // },
    // {
    //   description: "This blog is my go-to for travel advice. I’ve discovered hidden gems and unique experiences thanks to your recommendations!",
    //   image: 'https://i.pinimg.com/236x/29/25/34/2925347368d50b346e7f29164e756ce0.jpg',
    //   name: 'Rachel Adams',
    //   designation: 'Travel Planner',
    // },
    // {
    //   description: "Absolutely love the content! The travel tips have made my journeys more enjoyable and stress-free.",
    //   image: 'https://i.pinimg.com/236x/08/75/f9/0875f9ae7e2184b889487b9c5e30f8b7.jpg',
    //   name: 'David Brown',
    //   designation: 'Nature Lover',
    // },
  ];

  return (
    <div className="text-left py-12 px-8 bg-gray  ">
        <h1 className="font-bold text-4xl mb-4 font-[Roboto]">
          Customer testimonials
        </h1>
        <p className="text-lg text-gray-600 font-[Roboto]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
     
      <div className="flex items-center py-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-3 mx-auto max-w-6xl ">
          {Test.map((testimonial, index) => (
            <TestimonialsCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
      <div className="flex justify-end items-end gap-x-2 md:mx-auto md:px-3 max-w-6xl md:ml-3 mb-6">
        <div className="h-12 w-12 rounded-full border border-text flex justify-center items-center">
          <FaArrowLeft size={28} />
        </div>
        <div className="h-12 w-12 rounded-full border border-text flex justify-center items-center">
          <FaArrowRight size={28} />
        </div>
      </div>
      </div>

  );
}