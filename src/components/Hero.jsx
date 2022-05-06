import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import Logo from '../assets/sample_logo_2.png';
import {Link} from 'react-scroll';

const Hero = () => {
  return (
    <>
    <section name='home' className='heroImg'>
    
    {/* Logo */}
    <div className='max-w-[525px] mx-auto px-20 pt-20 flex flex-col justify-center h-full'>
      <img className='opacity-90	' src={Logo} alt='Morrow Web Dev Logo' />
      <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-amber-400 hover:border-amber-400'>
        <Link to="work" smooth={true} duration={500} >
          View Work
        </Link>
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