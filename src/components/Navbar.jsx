import React, { useState } from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Resume from '../assets/AustinMorrow_Resume.pdf';
import {Link} from 'react-scroll';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div>
    <div className='fixed w-full h-[80px] flex justify-center items-center px-4 bg-slate-200 text-black opacity-75'>
      {/* menu */}
        <ul  className='navList hidden md:flex'>
          <li>
          <Link to="home" smooth={true} duration={500} >
          HOME
        </Link>
          </li>
          <li>
          <Link to="about" smooth={true} duration={500} >
          ABOUT
        </Link>
          </li>
          <li>
          <Link to="skills" smooth={true} duration={500} >
          SKILLS
        </Link>
          </li>
          <li>
          <Link to="work" smooth={true} duration={500} >
          WORK
        </Link>
          </li>
          <li>
          <Link to="contact" smooth={true} duration={500} >
          CONTACT
        </Link>
          </li>
        </ul>
        
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
       
        {/* Mobile menu */}
          <ul className={!nav ? 'hidden' : 'absolute top-0 left0 w-full h-screen bg-slate-300 flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500} >
          HOME
        </Link>
          </li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="about" smooth={true} duration={500} >
          ABOUT
          </Link>
          </li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
          SKILLS
        </Link>
          </li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="work" smooth={true} duration={500} >
          WORK
        </Link>
          </li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
          CONTACT
        </Link>
          </li>
          </ul>
          </div>
      {/* Social icons */}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
    <ul>
      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
        <a className='flex justify-between items-center w-full text-gray-100'
        href="https://www.linkedin.com/in/agmorrow/" target="_blank">
          Linkedin <FaLinkedin  size={30}/>
        </a>
      </li>
      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
        <a className='flex justify-between items-center w-full text-gray-100'
        href="https://github.com/agmorrow" target="_blank">
          Github <FaGithub  size={30}/>
        </a>
      </li>
      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6ba957]'>
        <a className='flex justify-between items-center w-full text-gray-100'
        href="mailto:morrow.austin5@gmail.com">
          Email <HiOutlineMail  size={30}/>
        </a>
      </li>
      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#586069]'>
        <a className='flex justify-between items-center w-full text-gray-100'
        href={Resume}>
          Resume <BsFillPersonLinesFill  size={30}/>
        </a>
      </li>
    </ul>
    </div>
    </div>
  )
}

export default Navbar