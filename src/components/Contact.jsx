import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-slate-200 flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/54764d0b-d7a4-4e61-8f8c-9b47362b0ae9" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-amber-400 text-black'>Contact</p>
          <p className='text-black py-4'>// Submit the form below or shoot me an email - morrow.austin5@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows='10' placeholder='Message'></textarea>
        <button className='text-black border-2 hover:bg-amber-400 hover:border-amber-400 px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
      </form>
    </div>
  )
}

export default Contact