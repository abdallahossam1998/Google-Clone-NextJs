import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'

const Header = () => {
  const router = useRouter()
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if (!term) return
    router.push(`/search?term=${term}`)
  }

  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center'>
        <Image
          src='https://www.google.com.eg/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
          alt='Google'
          className='cursor-pointer'
          height={40}
          width={120}
          onClick={() => router.push('/')}
        />
        <form
          className='flex flex-grow border border-gray-200 items-center rounded-full max-w-3xl
      shadow-lg px-3 py-2 ml-10 mr-5'
        >
          <input
            ref={searchInputRef}
            type='text'
            defaultValue={router.query.term}
            className='flex-grow w-full focus:outline-none'
          />
          <XIcon
            className='h-7 sm:mr-3 cursor-pointer text-gray-500
        transition duration-100 transform hover:scale-125'
            onClick={() => (searchInputRef.current.value = '')}
          />
          <MicrophoneIcon
            className='h-6 mr-3 pl-4 hidden sm:inline-flex border-l-2
        border-gray-300 text-blue-500'
          />
          <SearchIcon className='h-6 hidden text-blue-500 sm:inline-flex' />
          <button hidden type='submit' onClick={search}>
            Search
          </button>
        </form>
        <Avatar className='ml-auto' url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwl7ihiXQSDxCaxAf9WOjQeEQ8qIG1y-rZqwpepQ6AZ1UPlUEogqws8izuEgEXcbZkxGM&usqp=CAU' />
      </div>

      <HeaderOptions />
    </header>
  )
}

export default Header
