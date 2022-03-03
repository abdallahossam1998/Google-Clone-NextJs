import { SearchIcon } from '@heroicons/react/outline'
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'
import { useRouter } from 'next/router'
import Avatar from '../components/Avatar'
import Footer from '../components/Footer'

export default function Home() {
  const searchInputRef = useRef(null)
  const router = useRouter()

  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if (!term) return
    router.push(`/search?term=${term}`)
  }
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <Head>
        <title>Google</title>
        <meta name='description' content='Google' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header */}
      {/* Right Section */}
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
        {/* Right Section */}

        {/* Left Section */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          <ViewGridIcon
            className='h-10 w-10 p-2 rounded-full 
          cursor-pointer
        hover:bg-gray-100'
          />
          <Avatar url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwl7ihiXQSDxCaxAf9WOjQeEQ8qIG1y-rZqwpepQ6AZ1UPlUEogqws8izuEgEXcbZkxGM&usqp=CAU' />
        </div>
        {/* Left Section */}
      </header>
      {/* Header */}

      {/* Body */}
      <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
        <Image
          src='https://www.google.com.eg/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
          height={100}
          width={300}
        />

        <div
          className='flex w-full mt-5 max-w-md hover:shadow-lg focus-within:shadow-lg
        rounded-full border border-gray-200 items-center px-3 py-2 
        sm:max-w-xl lg:max-w-2xl'
        >
          <SearchIcon className='h-5 mr-3 text-grey-500' />
          <input
            ref={searchInputRef}
            type='text'
            className='flex-grow focus:outline-none'
          />
          <MicrophoneIcon className='h-5' />
        </div>

        <div
          className='flex flex-col w-1/2 mt-8 space-y-2 justify-center
        sm:flex-row sm:space-x-4 sm:space-y-0'
        >
          <button onClick={search} className='btn'>
            Google Search
          </button>
          <button onClick={search} className='btn'>
            I'm Feeling Lucky
          </button>
        </div>
      </form>
      {/* Body */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </div>
  )
}
