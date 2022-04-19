import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import {BsGithub} from 'react-icons/bs';
import Node from '../assets/node.png';
import Mongo from '../assets/mongo.png';
import TailWind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-slate-200 text-black'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-amber-400'>Skills</p>
          <p className='py-4'>// These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 pt-2 mx-auto' src={HTML} alt="HTML icon" />
             <p className='my 4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 pt-2 mx-auto' src={CSS} alt="CSS icon" />
             <p className='my 4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 pt-2 mx-auto' src={JavaScript} alt="JavaScript icon" />
             <p className='my 4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 pt-2 mx-auto' src={ReactImg} alt="React icon" />
             <p className='my 4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <BsGithub className='w-20 pt-2 mx-auto' size={90} />
             <p className='my 4'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 pt-2 mx-auto' src={Node} alt="Node icon" />
             <p className='my 4'>NODE JS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 pt-2 mx-auto' src={Mongo} alt="Mongo icon" />
             <p className='my 4'>MONGO DB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 pt-2 mx-auto' src={TailWind} alt="Tailwind icon" />
             <p className='my 4'>TAILWIND</p>
            </div>
      </div>
      </div>
    </div>
  );
};

export default Skills