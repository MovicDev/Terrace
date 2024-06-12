import React from 'react'
import image from '../assets/images/footLogo.png'
import Social from './Social'
const FooterText = () => {
  return (
    <div>
        <div className='p-4 space-y-2 text-white'>
                <img src={image} alt="" />
                <p>Use the shortest possible time to invest in us and get your return without worry</p>
                <p><Social /></p>
        </div>
    </div>
  )
}

export default FooterText