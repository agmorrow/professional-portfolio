import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import Logo from '../assets/sample_logo.png';
import Jumbo from '../assets/background.jpg';

const Hero = () => {
  return (
    <div name='hero' className='w-full h-screen'>
    <img src={Jumbo} alt='Morrow Web Dev Logo' className='w-full h-full' />
      
    {/* Logo */}
    <div className='max-w-[600px] mx-auto px-8 flex flex-col object-center h-full'>
      <img src={Logo} alt='Morrow Web Dev Logo'></img>
      <div>
        <button>View Work <HiArrowNarrowRight /></button>
      </div>
    </div>
    </div>
  )
}

export default Hero