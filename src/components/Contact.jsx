import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full pt-12 bg-gray-200 flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/54764d0b-d7a4-4e61-8f8c-9b47362b0ae9" className='flex flex-col max-w-[600px] w-full z-0'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-amber-400 text-black'>CONTACT</p>
          <p className='text-black py-4'>Submit the form below or send me an email - morrow.austin5@gmail.com</p>
        </div>
        <input className='bg-gray-100 rounded-lg p-2 drop-shadow-lg' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-gray-100 rounded-lg drop-shadow-lg' type="email" placeholder='Email' name='email' />
        <textarea className='bg-gray-100 rounded-lg p-2 drop-shadow-lg' name="message" rows='10' placeholder='Message'></textarea>
        <button className='text-white border-gray-200 rounded-lg drop-shadow-lg bg-amber-400 hover:bg-amber-500 px-16 py-3 my-8 mx-auto flex items-center'>Send</button>
      </form>
    </div>
  )
}

export default Contact