'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../../app/globals.css'

// import required modules
import {Pagination } from 'swiper/modules';
const Projects = () => {
  const videoSlides = [
    {
      src: '/videos/Hamburger restaurant.mp4',
      description: 'A responsive website using HTML, CSS, and JavaScript, delivering a smooth user experience on all devices.',
      link: 'https://github.com/jantra9/Hanburger-restaurant', // Replace with actual GitHub link
    },
    {
      src: '/videos/BIA website.mp4',
      description: 'A frontend website built with Next.js, React libraries, Tailwind CSS, and TypeScript, designed specifically for laptops. The project emphasizes clean UI and maintainable, type-safe code for efficient performance.',
      link:'https://github.com/jantra9/bia-website', // Replace with actual GitHub link
    },
    {
      src: '/videos/Gym dashboard.mp4',
      description: 'A responsive frontend gym dashboard built with Next.js, React libraries, Tailwind CSS, and TypeScript. The site provides a clean, modern interface for an optimized user experience across devices.',
      link: 'https://github.com/jantra9/Gym-dashboard', // Replace with actual GitHub link
    },
    {
      src: '/videos/Mobile app.mp4',
      description: 'A simple note-taking app built with React Native and Expo, allowing users to quickly save and organize notes.',
      link: 'https://github.com/jantra9/Note-App-with-react-native', // Replace with actual GitHub link
    },
  ];
  return (
    <div>
      <div className='text-4xl font-bold py-5 pl-[5%] xl:text-5xl'>Proj<span className='border-b-[5px] border-darkSalmon lg:pb-2'>ects.</span></div>
      <div className='w-full flex justify-center'>
        <div className='w-[90%] mb-10'>
          <div>
          <Swiper 
          pagination={true} 
          loop={true} 
          modules={[Pagination]} className="w-full h-[430px] md:h-[600px] lg:h-[650px] xl:h-[830px] pb-7">
              {videoSlides.map((slide, index) => (
                <SwiperSlide key={index} className='w-full !flex justify-center flex-col '>
                  <video 
                    controls 
                    autoPlay>
                    <source src={slide.src} type='video/mp4'/>
                  </video>
                  <div className='w-full flex justify-center items-center gap-4 flex-col py-6'>
                    <div className=' text-lg opacity-75'>{slide.description}</div>
                    <button className='py-2 bg-darkSalmon rounded-full w-[150px]'>
                      <Link href={slide.link}>View on Github</Link>
                    </button>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects