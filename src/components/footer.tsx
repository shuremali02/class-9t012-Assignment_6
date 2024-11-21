import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (

    <footer className="bg-gray-300 text-black shadow-md shadow-gray-900 p-5 py-5 pt-11 ">
      {/* Grid Layout for Footer Content */}

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className='flex justify-between '>
          <div className='flex flex-col gap-y-1 '>
            <h1 className='font-semibold font-[Roboto] text-lg'>Subscribe to our newsletter</h1>
            <p className='font-[Roboto] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          </div>
          <div className='flex flex-col gap-y-1 w-[400px]'>
            <div className='flex gap-2'>
              <input type="text" placeholder='Enter your email' className='py-2 px-7  rounded-md border border-text' />
              <button className='p-1 px-4 border border-text rounded-md'>Subscribe</button>

            </div>
            <p className='text-[13px] tracking-tighter'> By subscribing you agree to with our Privacy Policy</p>

          </div>
        </div>




        <div className="grid grid-cols-1 md:grid-cols-4 py-9  gap-8 text-center md:text-left">
          <div className='flex justify-center md:items-start md:justify-start p-6 '>
            <Image src={"/images/Logo.svg"} alt='footerLogo' height={40} width={136} />
          </div>
          {/* Column 1: Popular Destinations */}
          <div className="flex flex-col p-6 bg-gray-300">
            <h1 className="font-semibold text-lg mb-2">Courses</h1>
            <p>Business</p>
            <p>Development</p>
            <p>Technology</p>
            <p>Design</p>
            <p>Programming</p>
            <Link href={"/destinations"} className="text-gray-700 hover:underline">Explore More</Link>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col p-6 bg-gray-300">
            <h1 className="font-semibold text-lg mb-2">Resources</h1>
            <Link href="#" className="text-gray-700 hover:underline">Career</Link>
            <Link href="#" className="text-gray-700 hover:underline">Resume</Link>
            <Link href="#" className="text-gray-700 hover:underline">Learning</Link>
            <Link href="#" className="text-gray-700 hover:underline">Interview Preparation</Link>
            <Link href="#" className="text-gray-700 hover:underline">Jobs</Link>
          </div>

          {/* Column 3: Stay Connected */}
          <div className="flex flex-col p-6 bg-gray-300">
            <h1 className="font-semibold text-lg mb-2">About Us</h1>
            <Link href={"#"} className="text-text hover:underline">Contact</Link>
            <Link href={"#"} className="text-text hover:underline">Help/Support</Link>
            <Link href={"#"} className="text-text hover:underline">FAQ</Link>
            <Link href={"#"} className="text-text hover:underline">Terms and Conditions</Link>
            <Link href={"#"} className="text-text hover:underline">Terms and Conditions</Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 py-12 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 pb-32">
        <div className="flex flex-col md:flex-row  text-center md:text-left gap-5 ">
          <p>2023 Ddsgnr. All right reserved.</p>
          {/* Navigation Links */}
          <div className='flex space-x-2 '>
            <Link href={'/'} className='transform hover:scale-105'> Home </Link>
            <Link href={'/about'} className='transform hover:scale-105'> About </Link>
            <Link href={'/team'} className='transform hover:scale-105'> Team </Link>

          </div>

          {/* Footer Message */}




        </div>
        <div className='flex items-center space-x-3'>
          <div className='w-full max-w-[736px] h-6 flex justify-end gap-4 '>
            <Link className='h-6 w-6' href={"#"}  ><Image src={"/images/facebook.png"} alt={"Facebook icon"} height={18} width={10} /> </Link>
            <Link className='h-6 w-6' href={"#"}  ><Image src={"/images/Linkedin.png"} alt={"Linkedin icon"} height={18} width={18} /> </Link>
            <Link className='h-6 w-6' href={"#"}  ><Image src={"/images/Vector.png"} alt={"Twitter icon"} height={18} width={20} /> </Link>
            <Link className='h-6 w-6' href={"#"}  ><Image src={"/images/Instagram.png"} alt={"logo"} height={18} width={24} /> </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
