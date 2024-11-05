import React from 'react'
import Button from './Button'

function EmailInput() {
  return (
    <div data-aos="fade-up" className="flex flex-row gap-4 md:gap-6 rounded-3xl dark:bg-dark-cardBg bg-white w-full max-w-xl my-8 mx-auto shadow-md px-1 py-1">
      <input
        type="email" 
        placeholder="Enter your email address" 
        className='bg-transparent text-xs md:text-sm lg:text-base border-none flex-1 outline-none dark:text-white text-gray-700 placeholder-gray-400 dark:placeholder-gray-500 py-3 px-4 w-full'
      />
      <Button 
        text="Book a Demo" 
        className="bg-light-buttonBg font-medium text-xs md:text-sm lg:text-base w-32  md:w-36 lg:w-40 py-3 md:py-2 text-light-buttonText rounded-3xl"  
      />
    </div>
  )
}

export default EmailInput
