import Achivements from '@/components/achievement'
import Footer from '@/components/footer'
import Navbar from '@/components/header'
import HeroSec from '@/components/herosec'
import Logo from '@/components/logo'
import TopSec from '@/components/top'
import React from 'react'
import Testimonial from './Testimonials/page'
import Courses from './Courses/page'

export default function Home() {
  return (
    <div>
      <TopSec />
      <Navbar />

      <HeroSec />
      <Logo />
      <Courses />
      <Achivements />
      <Testimonial />
      <Footer />
    </div>
  )
}

