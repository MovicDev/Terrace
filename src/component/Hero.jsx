import React from 'react'
import backgroundImage from '../assets/images/Rectangle\ 34625981.png'
import ContentsHero from './ContentsHero'
import Booking from './Booking'
const Hero = () => {
  return (
    <>
        <div className='m-7 mt-32 rounded-2xl'style={{ backgroundImage:`url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center',  height: 'auto'}}>
            <ContentsHero />
            <Booking />
        </div>
    </>
  )
}

export default Hero