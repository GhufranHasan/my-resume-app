import Image from 'next/image'
import React from 'react'

import { Envelope, Twitter, Linkedin, Medium } from './icons'
import '../styles/sidebar.css'

const Sidebar = ({data}) => {
  const { name, role, education, contactLinks } = data;
  return (
    <div className='bg-black flex flex-col h-screen content-between w-full sm:justify-around sm:w-1/3 sm:fixed'>
      <div className='text-white flex flex-col p-10'>
        <Image 
          priority
          width="100"
          height="100"
          className='rounded-full h-full'
          src='/images/profile1.jpg'
          alt='profile.jpg'
          aria-label='profile.jpg'
        />
        <h1>{name}</h1>
        <h2>{role}</h2>
        <p>{education[0]}</p>
        <p>{education[1]}</p>
        <div>
          <h3> Contact Me </h3>
          <a href={contactLinks?.[0]} aria-label='email link'>
            <Envelope />
          </a>
          <a href={contactLinks?.[1]} aria-label='twitter link'>
            <Twitter />
          </a>
          <a href={contactLinks?.[2]} aria-label='linkedin link'>
            <Linkedin />
          </a>
          <a href={contactLinks?.[3]} aria-label='medium link'>
            <Medium />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar