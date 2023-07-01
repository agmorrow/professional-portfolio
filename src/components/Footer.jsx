import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
//import { BsFillPersonLinesFill } from 'react-icons/bs';
//import Resume from '../assets/AustinMorrow_Resume.pdf';

const Footer = () => {
  return (
    <>
      {/* Social icons */}
      <div className='bg-[#333333] text-white flex justify-center items-center pb-4 lg:hidden'>
        <ul>
          <li className='w-[150px] h-[50px] mt-4 flex justify-between items-center'>
            <a className='flex justify-between items-center w-full text-gray-100 '
              href="https://www.linkedin.com/in/agmorrow/" target="_blank" rel="noreferrer">
              <span className='hover:text-[#9e100c]'>Linkedin</span><FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[150px] h-[50px] flex justify-between items-center'>
            <a className='flex justify-between items-center w-full text-gray-100'
              href="https://github.com/agmorrow" target="_blank" rel="noreferrer">
              <span className='hover:text-[#9e100c]'>Github</span> <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[150px] h-[50px] flex justify-between items-center'>
            <a className='flex justify-between items-center w-full text-gray-100'
              href="mailto:austinmorrowdev@gmail.com">
              <span className='hover:text-[#9e100c]'>Email</span> <HiOutlineMail size={30} />
            </a>
          </li>
          {/* <li className='w-[150px] h-[50px] flex justify-between items-center'>
            <a className='flex justify-between items-center w-full text-gray-100'
              href={Resume}>
              <span className='hover:text-[#9e100c]'>Resume</span> <BsFillPersonLinesFill size={30} />
            </a>
          </li> */}
        </ul>
      </div>
      {/* Copyright */}
      <div className='bg-[#333333] text-white flex justify-center items-center pb-4'>
        <ul>
        <h3 className='mt-1 flex justify-center lg:mt-4 text-sm'>© 2022 All Rights Reserved</h3>
        <h4 className='mt-1 flex justify-center lg:mt-4 text-xs'>Website Designed & Developed By Austin Morrow</h4>
        </ul>
      </div>
    </>
  )
}

export default Footer