import React from 'react';
import Portrait from '../assets/portrait.jpg';

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
            Full stack developer leveraging non-profit background to build engaging and user-friendly websites. Recently earned a certificate in full stack development from the University of Denver where I developed skills in HTML, CSS, JavaScript, React.js, MongoDB, and responsive web design. Resourceful problem-solver who is passionate about learning and developing applications with accessibility in mind. With each project, my goal is to focus on functionality and continue learning as I come across obstacles.<br />
            <br />I applied functionality in a recent project. I worked on a team of four to develop an ecommerce website using the MERN stack that allows a user to create a username and log in, search through a store, add items to a cart, and check out using Stripe. As a team we overcame an obstacle with the Stripe feature not functioning by identifying where the issue started, reading documentation, and going to others for a second opinion. I am excited to leverage my skills as part of a creative, quality-driven team to build a better online experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About