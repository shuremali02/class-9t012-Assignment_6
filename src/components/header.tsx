"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setisOpen] = useState(false)
  const Routes = [{
    href: "#",
    name: "Home"
  }, {
    href: "/Courses",
    name: "Courses", 
  }, {
    href: "# ",
    name: "Achievement",
  }, {
    href: "#",
    name: "Services",
  }, {
    href: "#",
    name: "About Us",
  }, {
    href: "/Testimonials",
    name: "Testimonials",
  },]

  return (
<header className="h-[72px] px-3 md:px-10 py-6 border-[#676767] border-y-[1px] flex items-center bg-gray relative z-50">
  <div className="md:max-w-[1280px] max-w-[428px] w-full h-11 flex justify-between">
    <div className="h-[41px]">
      <Image src={"/images/Logo.svg"} alt="logo" width={139.6} height={30.38} />
    </div>
    <div className="md:hidden">
      {/* Hamburger button */}
      <button onClick={() => setisOpen(!isOpen)}>
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>
    </div>
  </div>

  {/* Desktop Navigation */}
  <nav className="hidden md:max-w-[910px] w-full h-11 md:gap-8 md:flex md:bg-[#ffffff]">
    <div className="flex md:max-w-[687px] w-full space-x-8 p-[10px] gap-[10px]">
      {Routes.map((route, index) => (
        <Link href={route.href} key={index}>
          <span
            className={`flex items-center ${
              pathname === route.name ? "underline underline-offset-[16px]" : ""
            }`}
          >
            {route.name}
          </span>
        </Link>
      ))}
    </div>

    <div className="flex w-[191px] h-10 gap-3">
      <button className="font-[Roboto] text-[16px] py-2 rounded-[5px] px-5 border-[1px] border-black">
        Login
      </button>
      <button className="font-[Roboto] text-[16px] text-white py-2 rounded-[5px] px-5 border-[1px] border-black bg-black">
        Sign Up
      </button>
    </div>
  </nav>

  {/* Mobile Navigation */}
  {isOpen && (
    <nav className="md:hidden absolute top-full left-0 bg-white z-50 w-full py-4 flex flex-col gap-y-4 items-center">
      <div className="flex flex-col gap-[10px] px-[10px]">
        {Routes.map((route, index) => (
          <Link href={route.href} key={index} onClick={() => setisOpen(false)}>
            <span
              className={`flex items-center ${
                pathname === route.name ? "underline underline-offset-[16px]" : ""
              }`}
            >
              {route.name}
            </span>
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-3 items-center px-4">
        <button className="font-[Roboto] text-[16px] py-2 rounded-[5px] px-5 border-[1px] border-black">
          Login
        </button>
        <button className="font-[Roboto] text-[16px] text-white py-2 rounded-[5px] px-5 border-[1px] border-black bg-black">
          Sign Up
        </button>
      </div>
    </nav>
  )}
</header>




  )}