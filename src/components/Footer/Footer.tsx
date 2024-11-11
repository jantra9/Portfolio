import React from 'react'
import { FaCopyright } from "react-icons/fa";
import Media from '../ui/Media';
const Footer = () => {
  return (
    <div className='bg-black h-[100px] px-[3vw] text-white flex items-center justify-between'>
        <div className='flex'>
            <FaCopyright size={30} color='white'/>
            <div>2024 Janessa Tran</div>
        </div>
        <div>
            <Media color={"white"}/>
        </div>
    </div>
  )
}

export default Footer