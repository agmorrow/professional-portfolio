import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import Logo from '../assets/sample_logo.png';

const Hero = () => {
  return (
    <>
    <section className='heroImg'>
    
   
    {/* Logo */}
    <div className='max-w-[525px] mx-auto px-20 pt-20 flex flex-col justify-center h-full'>
      <img src={Logo} alt='Morrow Web Dev Logo' />
      <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-amber-300 hover:border-amber-300'>
          View Work 
          <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-3' />
          </span></button>
      </div>

    </div>
    </section>
    </>
  )
}

export default Hero