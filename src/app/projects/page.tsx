'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../globals.css'

// import required modules
import { Navigation,Pagination } from 'swiper/modules';
const Projects = () => {
  const videoSlides = [
    {
      src: '/videos/Hamburger restaurant.mp4',
      description: 'A responsive website using HTML, CSS, and JavaScript, delivering a smooth user experience on all devices.',
      link: '#', // Replace with actual GitHub link
    },
    {
      src: '/videos/BIA website.mp4',
      description: 'Description for BIA website.',
      link: '#', // Replace with actual GitHub link
    },
    {
      src: '/videos/Gym dashboard.mp4',
      description: 'Description for Gym dashboard.',
      link: '#', // Replace with actual GitHub link
    },
    {
      src: '/videos/Mobile app.mp4',
      description: 'Description for Mobile app.',
      link: '#', // Replace with actual GitHub link
    },
  ];
  return (
    <div className='bg-salmon'>
      <div className='bg-black text-white text-3xl py-10 pl-5'>PROJECTS</div>
      <div className='bg-salmon w-full flex justify-center py-10'>
        <div className='w-[93%] bg-white mb-10'>
          <div>
          <Swiper 
          navigation={true} 
          loop={true} 
          modules={[Navigation]} className="w-full h-[440px]">
              {videoSlides.map((slide, index) => (
                <SwiperSlide key={index} className='w-full h-full !flex justify-center items-center flex-col'>
                  <video 
                    controls 
                    autoPlay 
                    className='w-[83%] py-[40px]'
                  >
                    <source src={slide.src} type='video/mp4'/>
                  </video>
                  <div className='bg-salmon w-full h-full flex justify-center items-center gap-4 flex-col'>
                    <div className='px-2'>{slide.description}</div>
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