import React from 'react'
import Image from "next/image";
import Link from "next/link";
import LanguagesIcon from "@/components/ui/LanguagesIcon";
import Media from "@/components/ui/Media";
const AboutMe = () => {
  return (
    <div className="w-full relative flex flex-col lg:flex-row justify-center items-center font-custom xl:py-16 ">
    {/* This group the text and image together */}
        <div className='lg:flex-[5] lg:ml-[5%]'>
            <div className="mx-5">
                <div className="text-2xl xl:text-4xl 2xl:text-5xl">
                    Hi, I'm Janessa
                </div>
                <div className="text-5xl xl:text-7xl font-extrabold pr-10 py-3 lg:pr-0"><span className="text-darkSalmon">Full</span>stack developer</div>
                <div className="text-xl 2xl:text-3xl py-4 opacity-65">I'm a fullstack developer based in Australia, let's create amazing websites!</div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div>
                    <Link href="/contact">
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
        {/* This is the image */}
        <div className="relative w-full flex justify-center items-center my-10 lg:flex-[4] lg:pr-16 xl:pr-24 h-full ">
            <div className="group relative w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] 2xl:w-[400px] 2xl:h-[400px] rounded-full bg-gradient-to-b from-darkSalmon to-black p-[5px]">
                <div className="relative w-full h-full rounded-full bg-white p-[2px] transition group-hover:bg-opacity-0">
                    <Image
                        src="/profile-picture.jpg"
                        fill
                        style={{ objectFit: 'cover' }}
                        alt="profile photo"
                        className="rounded-full"
                    />
                </div>
            </div>
        </div>
</div>
  )
}

export default AboutMe