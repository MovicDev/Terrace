import React from 'react'
import { Outlet } from 'react-router'
import FooterText from './FooterText'
import FooterLinks from './FooterLinks'

const Footer = () => {
  return (
    <div>
        <div className='bg-[#1D2537E8] mx-auto'>
          <div className='lg:grid lg:grid-cols-2 text-white lg:space-x-24 lg:w-[60%] p-5 py-16'>
                <FooterText />
                <FooterLinks />
          </div>
        </div>
        <Outlet />
    </div>
  )
}

export default Footer