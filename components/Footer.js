import React from 'react'
import { GlobeIcon } from '@heroicons/react/solid'

const Footer = () => {
  return (
    <footer
      className='grid w-full divide-y-[1px] divide-gray-300 bg-gray-100
    tex-sm text-gray-500'
    >
      <div className='px-8 py-3'>
        <p>Egypt</p>
      </div>

      <div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-4 px-8 py-3
      grid-flow-row-dense'
      >

        <div
          className='flex justify-center space-x-8 whitespace-nowrap
        md:justify-self-start'
        >
          <p className='link'>About</p>
          <p className='link'>Advertising</p>
          <p className='link'>Business</p>
          <p className='link'>How Search works</p>
        </div>

        <div className='flex justify-center space-x-8 md:ml-auto'>
          <p className='link'>Privacy</p>
          <p className='link'>Terms</p>
          <p className='link'>Settings</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
