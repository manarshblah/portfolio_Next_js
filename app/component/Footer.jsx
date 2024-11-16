import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='footer z-10 border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
      <div className='container lg:p-12 md:p-8 sm:p-1 flex justify-between'>
        <div className='rounded-full bg-[#181818] w-[90px] h-[90px] lg:w-[120px] lg:h-[120px] relative ml-16 border border-purple-600'>
          <Image
            src="/images/hero-image.png"
            alt='hero image'
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            width={90}
            height={90}
          />
        </div>
        <p className='text-purple-800 mt-10 pr-10'>All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
