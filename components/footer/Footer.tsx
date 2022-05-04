import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaMailBulk, FaSkype, FaGithub, FaDiscord, FaTelegram, FaLinkedin } from 'react-icons/fa';
const Footer = ({}) => {
   
  const sendEmail = () => {    
    window.open("mailto:aaronchupa610@gmail.com?subject=About Project");
  };
  return (
    <div className="Footer bg-black border-t border-dashed w-full ">
      <div className='w-full flex justify-center items-center text-white w-full h-16'>
        <Link href={"#"}>
          <a className='h-full md:px-8' onClick={()=>sendEmail()}><FaMailBulk className='w-full h-full p-4 hover:p-3'/></a>
        </Link>
        <Link href={"https://join.skype.com/invite/H38ldY4nboYI"}>
          <a target="_blank" className='h-full md:px-8'><FaSkype className='w-full h-full p-4 hover:p-3'/></a>
        </Link>
        <Link href={"https://github.com/talentedDev0312"}>
          <a target="_blank" className='h-full md:px-8'><FaGithub className='w-full h-full p-4 hover:p-3'/></a>
        </Link>
        <Link href={"https://t.me/nerona_developer"}>
          <a target="_blank" className='h-full md:px-8'><FaTelegram className='w-full h-full p-4 hover:p-3'/></a>
        </Link>
      </div>
      <div className='w-full text-center text-white p-2'>
        © Copyright 2021 By <span className='text-yellow-500'>Oleksandr Lukianchuk</span>
      </div>
    </div>
  )
}

export default Footer
