import React from 'react';
import Portrait from '../assets/sample_portrait.JPG';


const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-slate-200 text-black'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-amber-300'>
              About
              </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[900px] w-full grid sm:grid-cols-2 gap-1 px-1'>
        <div>
        <img src={Portrait} alt="portrait" className='max-w-[300px]' />
      </div>
      <div>
        <p> Hello! My name is Austin Morrow. I am a web developer located in Denver, CO. I started out my professional
            career in the non-profit sector. Even before I knew about the basics of web development or even how the
            internet works, I've always loved creativity, problem-solving, and design. I love thinking of an idea and
            bringing it to life from the ground up.<br />
            <br />
            One thing that I learned in non-profit work that is still pertinent to what I do today is that you can learn
            so much about the world through story telling. Hearing what obstacles someone has overcome, learning about
            what they are passionate about, or even hearing what they have to give to the world can break down so many
            walls.
            This discovery opened up so many possibilities even when it comes to making a website or application. Being
            able to showcase someones work, or help a business design their website helps them continue telling their
            story, and in return helps make this world a better place. Let's build something together!
        </p>
      </div>
        </div>
      </div>
    </div>
  )
}

export default About