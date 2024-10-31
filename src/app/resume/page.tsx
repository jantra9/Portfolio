import Image from "next/image";
import Link from "next/link";
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


export default function AboutMe() {
  const media=[
    {link:"#",icon:<FaLinkedin size={30}/>},
    {link:"#",icon:<FaGithub size={30} />},
    {link:"#",icon:<BiLogoGmail size={30} />}
  ]
  return (
    <div className="relative w-full py-[6%] flex justify-center">
      <div className="flex w-[80%] gap-[10%]">

        {/* This is the image */}
        <div className="relative w-[300px] h-[400px]">
        <Image
        src='/profile-picture.jpg'
        fill
        style={{ objectFit: 'cover' }}
        alt="profile photo"
        className="rounded-[1000px]"
        />
        </div>
        
        {/* This is the text */}
        <div className="relative w-[50%] h-full">
          <div className="text-4xl pb-7">
            Hello
          </div>
          <div>
            Hi, I’m Janessa!
            I’m a passionate Full Stack Developer with expertise in both front-end and back-end technologies. My experience includes building dynamic and responsive web applications that deliver seamless user experiences.
          </div>
          <Link href="/contact">
            <button className="w-[170px] font-bold border-red-800 border-2 py-4 rounded-full mt-8 button-contactme">
              CONTACT ME
            </button>
          </Link>
          <div className="flex">
            {media.map((item,index)=>(
              <Link href={item.link} key={index}>
              {item.icon}
            </Link>))}
          </div>
        </div>
      </div>
    </div>
  );
}
