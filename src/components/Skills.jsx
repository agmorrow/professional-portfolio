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
    <div name='skills' className='w-full pt-12 bg-gray-200 text-black'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className="pb-4">
          <p className='text-4xl font-bold inline border-b-4 border-amber-400'>SKILLS</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
              <img className='w-20 pt-10 mx-auto' src={HTML} alt="HTML icon" />
             <p className='pb-6 pt-2'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
              <img className='w-20 pt-10 mx-auto' src={CSS} alt="CSS icon" />
             <p className='pb-6 pt-2'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
              <img className='w-20 pt-10 mx-auto' src={JavaScript} alt="JavaScript icon" />
             <p className='pb-6 pt-2'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16]  rounded-lg hover:scale-110 duration-500'>
              <img className='w-20 pt-10 mx-auto' src={ReactImg} alt="React icon" />
             <p className='pb-6 pt-2'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16]  rounded-lg hover:scale-110 duration-500'>
              <BsGithub className='w-20 pt-10 mx-auto' size={115} />
             <p className='pb-6 pt-2'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
              <img className='w-20 pt-10 mx-auto' src={Node} alt="Node icon" />
             <p className='pb-6 pt-2'>NODE JS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
              <img className='w-20 pt-10 mx-auto' src={Mongo} alt="Mongo icon" />
             <p className='pb-6 pt-2'>MONGO DB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500'>
              <img className='w-20 pt-10 mx-auto' src={TailWind} alt="Tailwind icon" />
             <p className='pb-6 pt-2'>TAILWIND</p>
            </div>
      </div>
      </div>
    </div>
  );
};

export default Skills