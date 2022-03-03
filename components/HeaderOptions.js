import React from 'react'
import HeaderOption from './HeaderOption'
import {
  MapIcon,
  DotsVerticalIcon,
  NewspaperIcon,
  PlayIcon,
  PhotographIcon,
  SearchIcon,
} from '@heroicons/react/outline'

const HeaderOptions = () => {
  return (
    <div className='flex w-full justify-evenly border-b text-sm text-gray-700
    lg:justify-start lg:text-base lg:space-x-36 lg:pl-52'>
      {/* left */}
      <div className='flex space-x-6'>
        <HeaderOption Icon={SearchIcon} title='All' selected />
        <HeaderOption Icon={PhotographIcon} title='Images' />
        <HeaderOption Icon={PlayIcon} title='Videos' />
        <HeaderOption Icon={NewspaperIcon} title='News' />
        <HeaderOption Icon={MapIcon} title='Maps' />
        <HeaderOption Icon={DotsVerticalIcon} title='More' />
      </div>

      {/* Right */}
      <div className='flex space-x-4'>
        <p className='link'>Settings</p>
        <p className='link'>Tools</p>
      </div>
    </div>
  )
}

export default HeaderOptions
