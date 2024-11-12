import React from 'react'
import { Montserrat } from 'next/font/google';
import Media from '../ui/Media';
import Image from 'next/image';
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700'],
});
const Contact = () => {
  return (
    <div className='w-full py-10'>
      <div className='text-4xl font-bold py-5 pl-[5%] xl:text-5xl'>Cont<span className='border-b-[5px] border-darkSalmon lg:pb-2'>act.</span></div>
      {/* Wrapper for text and gif */}
      <div className='flex flex-col items-center justify-center  '>
        <div className='relative w-full flex justify-center items-center flex-1'>
          <div className='relative w-[255px] h-[220px] md:w-[400px] md:h-[300px] '>
              <Image src='/dialog-container.png' alt='dialog-box' fill style={{ objectFit: 'contain' }} />
              <div className='absolute pt-10 pl-10 md:pt-20 md:pl-20'>
                <div className={`${montserrat.className} text-2xl text-darkSalmon md:text-4xl`}>
                Get in touch !
                </div>
                <div className='pt-5 md:pl-10'>
                  <Media />
                </div>
              </div>
          </div>
        
          {/* <div className='relative flex flex-col items-center justify-center w-[250px] h-[220px]'>
            
            <div className='absolute inset-0'>
              <div className={`${montserrat.className} text-2xl font-bold text-darkSalmon`}>
                Get in <span className='sm:pl-20'>touch</span>
              </div>
              <div className='pt-5'>
                <Media />
              </div>
            </div>
          </div>*/}
        </div> 
        <div className='w-[300px] h-auto relative flex justify-center items-center flex-1'>
            <img src='../work.gif' alt='animated' style={{ objectFit: 'cover' }} />
        </div>
        </div>
    </div>
    
  )
}

export default Contact