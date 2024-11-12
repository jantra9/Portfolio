import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Link from 'next/link';

interface MediaProps{
    color?:string;
}
const Media:React.FC<MediaProps> = ({color}) => {
    const media=[
        {link:"https://www.linkedin.com/in/janessa-tran-b01301171/",icon:<FaLinkedin size={35}/>},
        {link:"https://github.com/jantra9",icon:<FaGithub size={35} />},
        {link:"janetran251@gmail.com",icon:<BiLogoGmail size={35} />}
      ]
  return (
    <div className=" flex gap-7">
        {media.map((item,index)=>(
            <Link 
            href={item.link} 
            rel="noopener noreferrer" 
            target="_blank"
            key={index} 
            className="">
                {React.cloneElement(item.icon, { color })}</Link>
        ))}
    </div>
  )
}

export default Media