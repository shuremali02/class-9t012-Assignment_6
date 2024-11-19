import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Your gateway to exploring the world one destination at a time.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="text-lg text-gray-700">
          <h2 className="font-semibold text-2xl mb-4 ">Our Mission</h2>
          <p>
            At our travel blog, we are passionate about helping fellow travelers discover the beauty of the world. Whether you’re an adventure seeker, culture enthusiast, or simply looking for the next relaxing vacation, our blog provides in-depth guides, travel tips, and inspiring stories to make your journey unforgettable.
          </p>
          <p className="mt-4">
            Our goal is to empower our readers with useful information and insider knowledge, enabling them to explore new places with confidence and excitement.
          </p>
        </div>
        <div>
          <Image 
            src="/about.jpg " 
            alt="Our travel experience" 
            width={500} 
            height={350} 
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Our Story Section */}
      <div className="mb-12">
        <h2 className="font-semibold text-2xl mb-4">Our Story</h2>
        <p className="text-lg text-gray-700">
          Our journey began as a small group of passionate travelers who wanted to share their experiences with the world. Over the years, we have traveled to countless destinations, uncovering hidden gems and embracing different cultures along the way.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          What started as a personal travel diary has evolved into a full-fledged travel blog aimed at inspiring others to venture out of their comfort zones. We believe that travel has the power to transform perspectives, build connections, and create lasting memories.
        </p>
      </div>

      {/* Our Values Section */}
      <div className="mb-12">
        <h2 className="font-semibold text-2xl mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li><strong>Inspiration:</strong> We aim to inspire our readers with unique and exciting destinations.</li>
          <li><strong>Authenticity:</strong> We believe in sharing real, unfiltered experiences to help our audience make informed travel decisions.</li>
          <li><strong>Community:</strong> We strive to build a community of like-minded travelers, encouraging the exchange of stories, tips, and experiences.</li>
          <li><strong>Sustainability:</strong> We advocate for responsible travel that minimizes impact on the environment and respects local cultures.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold mb-4">Join Us on This Adventure</h2>
        <p className="text-lg text-gray-600 mb-6">
          Ready to start your next journey? Let us be your guide.
        </p>
        <Link href='mailto:shuremsyed41@gmail.com'>
          <h3 className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            Contact Us
          </h3>
        </Link>
      </div>
    </div>
  );
}

