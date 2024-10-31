import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Link from 'next/link';

interface MediaProps{
    color?:string;
}
const Media:React.FC<MediaProps> = ({color}) => {
    const media=[
        {link:"#",icon:<FaLinkedin size={30}/>},
        {link:"#",icon:<FaGithub size={30} />},
        {link:"#",icon:<BiLogoGmail size={30} />}
      ]
  return (
    <div className="flex justify-center gap-5">
        {media.map((item,index)=>(
            <Link href={item.link} key={index} className="">{React.cloneElement(item.icon, { color })}</Link>
        ))}
    </div>
  )
}

export default Media