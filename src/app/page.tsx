import Image from "next/image";
import Link from "next/link";
import LanguagesIcon from "@/components/Languages Icons/LanguagesIcon";
import Media from "@/components/Media/Media";
export default function AboutMe() {

    return (
    <div className="w-full relative flex py-[6%] justify-center">
        <div className="flex flex-col w-[85%] items-center">
            <div className="flex flex-col w-[85%] items-center lg:flex-row lg:justify-between">
                <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:h-[400px]">
                <Image
                src='/profile-picture.jpg'
                fill
                style={{ objectFit: 'cover' }}
                alt="profile photo"
                className="rounded-[1000px]"
                />
                </div>
                
                <div className="lg:w-[55%]">
                    <div className="text-3xl py-4 mx-auto w-full text-center lg:text-4xl">
                        About me
                    </div>
                    <div>
                        Hi, I’m Janessa!
                        I’m a passionate Full Stack Developer with expertise in both front-end and back-end technologies. My experience includes building dynamic and responsive web applications that deliver seamless user experiences. 
                        <br/>I am creative and efficient in wokring. I enjoy researching and problem solving!
                    </div>
                    <div className="pb-9">
                        <Link href="/contact" className="flex justify-center">
                            <button className="w-[170px] font-bold border-red-800 border-2 py-3 rounded-full my-5 button-contactme">
                            LET'S CONNECT
                            </button>
                        </Link>
                        <Media color={"black"} />
                    </div>
                </div>
            </div>
            <div>
                <div className="text-3xl pt-[5vh] pb-[2vh] mx-auto w-full text-center lg:text-4xl">Languages & Frameworks</div>
                <LanguagesIcon />
            </div>
           
        </div>
    </div>
    )
};