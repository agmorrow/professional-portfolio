import React from 'react';
import Portrait from '../assets/updatedportrait.jpg';

const About = () => {
  return (
    <div name='about' className='w-full pt-12 bg-gray-200 text-black'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2'>
          <div className='sm:text-right pb-14 pl-4'>
            <h1 className='text-4xl font-bold inline border-b-4 border-amber-400'>
              ABOUT
            </h1>
          </div>
          <div></div>
        </div>
        <div className='max-w-[900px] w-full grid sm:grid-cols-2 gap-1 px-1'>
          <div>
            <img src={Portrait} alt="portrait" className='max-w-[300px] shadow-md shadow-[#040c16] rounded-lg' />
          </div>
          <div>
            <p>
            Hi there, I'm Austin. I am a web developer based in Denver, CO. I love building and designing web applications. With a background in non-profit work, I have always looked for ways to empower individuals and share stories.
             I have found that web development is more than just building a website and hosting it online. I see the design and functionality of
            a website shows a little taste of who an individual or company is, and that can be enough for people to want to invest in.<br></br>
             <br></br>
            I am experienced in building full stack web applications and love learning new technologies. My goal is to help people and companies share their story
            and to have a little fun along the way.
             </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About