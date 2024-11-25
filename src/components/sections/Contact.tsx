import React from 'react'
import { Montserrat} from 'next/font/google';
import Media from '../ui/Media';
import Link from 'next/link';
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700'],
});

const Contact = () => {
  return (
    <div className='w-ful py-10 lg:py-20'>
      <div className='text-4xl font-bold py-5 pl-[5%] xl:text-5xl'>Cont<span className='border-b-[5px] border-darkSalmon lg:pb-2'>act.</span></div>
      {/* Wrapper for text and gif */}
      <div className='flex flex-col items-center justify-center py-[3%] '>
        <div className={`${montserrat.className} text-darkSalmon text-4xl lg:text-5xl `}>GET IN TOUCH</div>
        <div className={`px-[20%] pt-[3%] pb-[25px] italic lg:leading-7 text-center font-sans lg:text-xl text-lg text-black/[0.7]`}>" I’m currently seeking opportunities to contribute to innovative and challenging projects as part of a collaborative and supportive team. If you’re looking for a motivated developer eager to learn and grow, let’s connect! "</div>
        <div className="flex flex-col justify-center items-center">
            <div>
                <Link href="mailto:janetran251@gmail.com">
                    <button className="w-[150px] font-bold border-2 py-2 rounded-xl mb-5 button-contactme xl:w-[200px] xl:py-3  lg:text-xl 2xl:text-2xl 2xl:w-[270px] 2xl:py-3 2xl:my-5">
                    Contact Me
                    </button>
                </Link>
            </div>
            <div>
                <Media color={"black"} />
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Contact