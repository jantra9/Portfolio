'use client'
import React,{useState,useRef,useEffect} from 'react'
import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci";
import {IoCloseOutline } from "react-icons/io5";
const Navigation = () => {
  const[isOpen, setIsOpen]= useState(false);
  const menuRef=useRef<HTMLDivElement>(null);
  const toggle=()=>
    setIsOpen((prev)=> !prev);
  const handleClickOutside=(event:MouseEvent)=>{
    if(menuRef.current && !menuRef.current.contains(event.target as Node)){
      setIsOpen(false)
    }
  };
  useEffect(()=>{
    document.addEventListener("mousedown",handleClickOutside);
    return()=>{
      document.removeEventListener("mousedown",handleClickOutside)
    }
  },[])
  const menu = [
    { label: 'About Me', path: '#aboutme' },
    { label: 'Projects', path: '#projects' },
    { label: 'Contact', path: '#contact' },
    { label: 'Resume', path: '#resume' },
  ];
  return (
    <div className='relative'>

      {/* For mobile phone */}
      <div className='lg:hidden sm:flex md:flex flex-col '>
          <div className='w-full flex justify-end bg-white'>
            <button className='p-5'>
              {isOpen===false? <CiMenuFries size={40} onClick={toggle} />
              :<IoCloseOutline size={40} color='black' onClick={()=>setIsOpen(false)} />}
            </button>
          </div>
          {isOpen && <div ref={menuRef} className='absolute inset-0 top-[50px] h-[230px] bg-white left-0 flex flex-col gap-5 py-4 z-40  transition-[max-height] duration-500 ease-in-out'>
            {menu.map((item)=>(
              <li key={item.label} className='list-none w-full flex justify-center text-2xl'>
                <Link 
                href={item.path} 
                key={item.label} 
                onClick={(e)=>{
                  setIsOpen(false)
                }}
                  >{item.label}</Link>
              </li>
            ))}
          </div>}
      </div>
      {/* For laptop */}
      <div className='hidden lg:flex w-full justify-end pr-[7%] py-[30px]'>
            {menu.map((item)=>(
              <li key={item.label} className='list-none 2xl:text-2xl'>
                <Link 
                className='mr-[100px] hover-border'
                href={item.path} 
                key={item.label} 
                onClick={(e)=>{
                  setIsOpen(false)
                }}
                  >{item.label}</Link>
              </li>
            ))}
      </div>

    </div>
  )
}

export default Navigation